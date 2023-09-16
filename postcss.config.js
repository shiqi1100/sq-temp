module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8']
    }
    // 'postcss-pxtorem': {
    //   // 自适应，px>rem转换
    //   rootValue: 37.5, // 75表示750设计稿，37.5表示375设计稿
    //   propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
    //   selectorBlackList: ['.van'], // 过滤掉不进行rem转换
    //   exclude: '/node_modules' // 忽略包文件转换rem
    // }
  }
}
