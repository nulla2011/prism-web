const { defineConfig } = require('@vue/cli-service');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
const IconsResolver = require('unplugin-icons/resolver');
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      require('unplugin-icons/webpack')({
        autoInstall: true,
      }),
      require('unplugin-vue-components/webpack')({
        resolvers: [
          ElementPlusResolver({ importStyle: 'sass' }),
          IconsResolver({
            enabledCollections: ['ep'],
          }),
        ],
      }),
      require('unplugin-auto-import/webpack')({
        resolvers: [
          ElementPlusResolver({ importStyle: 'sass' }),
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@use "@/style/element-theme.scss" as *;`,
      },
    },
  },
});
