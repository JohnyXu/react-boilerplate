/* eslint-disable no-restricted-syntax */
/**
 * This script will extract the internationalization messages from all components
 * and package them in the translation json files in the translations file.
 */

// 解析国际化的消息文件
require('shelljs/global');

const fs = require('fs');
const nodeGlob = require('glob');

// All transformations will use your local configuration files.
const { transform } = require('@babel/core');
const get = require('lodash/get');

const animateProgress = require('./helpers/progress');
const addCheckmark = require('./helpers/checkmark');

const { appLocales, DEFAULT_LOCALE } = require('../../app/i18n');

// babel 配置选项
const babel = require('../../babel.config.js');
const { presets } = babel;

/* eslint-disable no-console */
// console.log('extract-intl.presets');
// console.log(presets);
/* eslint-enable no-console */

let plugins = babel.plugins || [];

// 增加 react-intl 插件
plugins.push('react-intl');

// 过滤掉 styled-components
// NOTE: styled-components plugin is filtered out as it creates errors when used with transform
plugins = plugins.filter(p => p !== 'styled-components');

/* eslint-disable no-console */
// console.log('extract-intl.plugins');
// console.log(plugins);
/* eslint-enable no-console */

// Glob to match all js files except test files
// 匹配除了app目录下 不带test的所有js文件
const FILES_TO_PARSE = 'app/**/!(*.test).js';

// 换行
const newLine = () => process.stdout.write('\n');

// Progress Logger
let progress;
const task = message => {
  progress = animateProgress(message);
  process.stdout.write(message);

  // 任务完成回调处理
  return error => {
    if (error) {
      process.stderr.write(error);
    }
    clearTimeout(progress);
    return addCheckmark(() => newLine());
  };
};

// Wrap async functions below into a promise
const glob = pattern =>
  new Promise((resolve, reject) => {
    nodeGlob(
      pattern,
      (error, value) => (error ? reject(error) : resolve(value)),
    );
  });

const readFile = fileName =>
  new Promise((resolve, reject) => {
    fs.readFile(
      fileName,
      'utf8',
      (error, value) => (error ? reject(error) : resolve(value)),
    );
  });

// Store existing translations into memory
const oldLocaleMappings = [];
const localeMappings = [];

// Loop to run once per locale
for (const locale of appLocales) {
  oldLocaleMappings[locale] = {};
  localeMappings[locale] = {};

  // File to store translation messages into
  const translationFileName = `app/translations/${locale}.json`;
  try {
    // Parse the old translation message JSON files
    const messages = JSON.parse(fs.readFileSync(translationFileName));
    const messageKeys = Object.keys(messages);
    for (const messageKey of messageKeys) {
      oldLocaleMappings[locale][messageKey] = messages[messageKey];
    }
  } catch (error) {
    if (error.code !== 'ENOENT') {
      process.stderr.write(
        `There was an error loading this translation file: ${translationFileName}
        \n${error}`,
      );
    }
  }
}

const extractFromFile = async filename => {
  try {

    const code = await readFile(filename);

    const output = await transform(code, { filename, presets, plugins });
    const messages = get(output, 'metadata.react-intl.messages', []);

    /* eslint-disable no-console */
    // if(messages && messages.length > 0){
    //   console.log('extractFromFile.filename',filename);
    //   console.log(messages);
    // }
    /* eslint-enable no-console */
    for (const message of messages) {
      for (const locale of appLocales) {
        // 合并代码中的message和配置中已经存在的message
        const oldLocaleMapping = oldLocaleMappings[locale][message.id];
        // Merge old translations into the babel extracted instances where react-intl is used
        const newMsg = locale === DEFAULT_LOCALE ? message.defaultMessage : '';
        localeMappings[locale][message.id] = oldLocaleMapping || newMsg;
      }
    }
  } catch (error) {
    process.stderr.write(`\nError transforming file: ${filename}\n${error}\n`);
  }
};

const memoryTask = glob(FILES_TO_PARSE);
const memoryTaskDone = task('Storing language files in memory');

memoryTask.then(files => {
  /* eslint-disable no-console */
  // console.log('memoryTask.then');
  // console.log(files);
  /* eslint-enable no-console */

  memoryTaskDone();

  // 解析代码中的message
  const extractTask = Promise.all(
    files.map(fileName => extractFromFile(fileName)),
  );
  const extractTaskDone = task('Run extraction on all files');
  // Run extraction on all files that match the glob on line 16
  extractTask.then(() => {
    extractTaskDone();

    // 创建文件夹
    // Make the directory if it doesn't exist, especially for first run
    mkdir('-p', 'app/translations'); // eslint-disable-line

    let localeTaskDone;
    let translationFileName;

    for (const locale of appLocales) {
      translationFileName = `app/translations/${locale}.json`;
      localeTaskDone = task(
        `Writing translation messages for ${locale} to: ${translationFileName}`,
      );

      // Sort the translation JSON file so that git diffing is easier
      // Otherwise the translation messages will jump around every time we extract
      // 排序这样git看diff的时候非常清楚那些修改了
      const messages = {};
      Object.keys(localeMappings[locale])
        .sort()
        .forEach(key => {
          messages[key] = localeMappings[locale][key];
        });

      // Write to file the JSON representation of the translation messages
      // 转换成json的string
      const prettified = `${JSON.stringify(messages, null, 2)}\n`;

      try {
        fs.writeFileSync(translationFileName, prettified);
        localeTaskDone();
      } catch (error) {
        localeTaskDone(
          `There was an error saving this translation file: ${translationFileName}
          \n${error}`,
        );
      }
    }

    process.exit();
  });
});
