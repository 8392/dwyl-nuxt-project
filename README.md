# nuxtPcHome

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run  build
$ npm run   start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).


```css
.content-container::-webkit-scrollbar {
    display: none;
}
```

### 开发环境
- npm run dev
### 生产环境
- npm run build 
- npm start 

### 滑入页面配置动画效果

+ 借助 wowjs 和 animate.css
+ 安装cnpm i wowjs -D  cnpm i animate.css -S
+ 在nuxt.config.js配置插件
```js
  css: [
    'animate.css/animate.css',
  ],
  plugins: [
    { src: '@/plugins/wow.js', ssr: false },
  ],

  // wow.js
  // import Vue from 'vue'
  import { WOW } from 'wowjs'

  window.WOW = WOW // 因为服务端没有window，而wowjs里面是有window的，所以这里必须手动创建一个
  // Vue.prototype.$wow = new WOW()
  // 在页面中使用

  mounted(){
    // eslint-disable-next-line nuxt/no-env-in-hooks
    /* 挂载 */
    if (process.browser) {
      this.$nextTick(() => {
          const { WOW } = require('wowjs')
          new WOW({
            boxClass: 'wow',
            animateClass: 'animate__animated',
            offset: 0,
            mobile: true,
            live: true
          }).init()
      });
    }
  },
  // 然后在对应的元素上添加class
  class="wow animate__zoomIn"
  // 要加两个class，一个wow，一个是anmiate动画的css
  https://animate.style/  //官网
```

### 百度地图引入

```js
import BMap from "BMap";
export default {
  name: "ContactUs",
  data() {
    return {};
  },
  mounted() {
    /* 对应页面上的元素ID */
    var map = new BMap.Map("map"); // 创建地图实例
    var point = new BMap.Point(116.301841,40.156506); // 创建点坐标
    map.centerAndZoom(point, 18); // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    var opts = {
      width: 50, // 信息窗口宽度
      height: 10, // 信息窗口高度
      title: "黄元公寓" // 信息窗口标题
    };
    var infoWindow = new BMap.InfoWindow(
      "我的家",
      opts
    ); // 创建信息窗口对象
    map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
  }
};
```

### 使用element-ui的动画

```js
import ElCollapseTransition from 'element-ui/src/transitions/collapse-transition';
components: {
  ElCollapseTransition,
}
<el-collapse-transition>
  <div
    v-if="!renderAfterExpand || childNodeRendered"
    v-show="expanded"
  >
</el-collapse-transition>
```

### swiper 文档
https://v1.github.surmon.me/vue-awesome-swiper