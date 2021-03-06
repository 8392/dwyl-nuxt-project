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

### ????????????
- npm run dev
### ????????????
- npm run build 
- npm start 

### ??????????????????????????????

+ ?????? wowjs ??? animate.css
+ ??????cnpm i wowjs -D  cnpm i animate.css -S
+ ???nuxt.config.js????????????
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

  window.WOW = WOW // ?????????????????????window??????wowjs????????????window??????????????????????????????????????????
  // Vue.prototype.$wow = new WOW()
  // ??????????????????

  mounted(){
    // eslint-disable-next-line nuxt/no-env-in-hooks
    /* ?????? */
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
  // ?????????????????????????????????class
  class="wow animate__zoomIn"
  // ????????????class?????????wow????????????anmiate?????????css
  https://animate.style/  //??????
```

### ??????????????????

```js
import BMap from "BMap";
export default {
  name: "ContactUs",
  data() {
    return {};
  },
  mounted() {
    /* ????????????????????????ID */
    var map = new BMap.Map("map"); // ??????????????????
    var point = new BMap.Point(116.301841,40.156506); // ???????????????
    map.centerAndZoom(point, 18); // ??????????????????????????????????????????????????????
    map.enableScrollWheelZoom(true); //????????????????????????
    var marker = new BMap.Marker(point); // ????????????
    map.addOverlay(marker); // ???????????????????????????
    var opts = {
      width: 50, // ??????????????????
      height: 10, // ??????????????????
      title: "????????????" // ??????????????????
    };
    var infoWindow = new BMap.InfoWindow(
      "?????????",
      opts
    ); // ????????????????????????
    map.openInfoWindow(infoWindow, map.getCenter()); // ??????????????????
  }
};
```

### ??????element-ui?????????

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

### swiper ??????
https://v1.github.surmon.me/vue-awesome-swiper