/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // 0 1 2 -> off warning error
    indent: [2, 2], // 缩进2个空格
    semi: [2, 'never'], // 禁用行尾使用分号
    'no-extra-semi': [2], // 禁止不必要的分号
    quotes: [2, 'single'], // 使用单引号
    'comma-dangle': [2, 'never'], // 禁止末尾逗号
    'eol-last': 2, // 文件以换行符结束
    'no-multi-spaces': 2, // 禁止多余的空格
    'no-multiple-empty-lines': [
      2,
      {
        // 空行不能超过 1 行
        max: 1
      }
    ],
    'vue/multi-word-component-names': 0, // vue文件命名规范
    'no-trailing-spaces': 2, // 一行结束后面不要有空格
    'space-before-function-paren': [2, 'never'], // 函数定义时括号前面不要有空格
    'spaced-comment': [
      2,
      'always',
      {
        // 注释时要有空格
        markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
      }
    ]
  }
}
