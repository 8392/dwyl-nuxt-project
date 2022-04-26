export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '迪威云联',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/index.scss',
    'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css',
    'animate.css/animate.css',
    'node_modules/swiper/css/swiper.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/requet',
    { src: '@/plugins/ElementUI', ssr: true },
    { src: '@/plugins/vue-awesome-swiper', ssr: true },
    // { src: '@/plugins/wow.js', ssr: true },
    '@/plugins/userAuth',  // 路由拦截
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: '@/assets/scss/mixins.scss',
  },

  // loading: {
  //   color: 'blue', // 进度条的颜色
  //   failedColor: 'red', // 页面加载失败时的颜色（ 当 data 或 fetch 方法返回错误时）
  //   height: '20px', // 进度条的高度(在进度条元素的 style 属性上体现)
  //   throttle: 200, // 在 ms 中， 在显示进度条之前等待指定的时间。 用于防止条形闪烁
  //   duration: 5000, // 进度条的最大显示时长， 单位毫秒。 Nuxt.js 假设页面在该时长内加载完毕
  //   continuous: false, // 当加载时间超过duration时， 保持动画进度条
  //   css: true, // 设置为 false 以删除默认进度条样式（ 并添加自己的样式）
  //   rtl: false // 从右到左设置进度条的方向
  // },

  loading: '@/components/loading.vue',

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://rap2api.taobao.org/app/mock/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
