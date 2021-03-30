import Vue from 'vue'
import VueMatomo from 'vue-matomo'

export default ({ app }) => {
  Vue.use(VueMatomo, {
    router: app.router,

    host: 'https://stats.jennykittybaby.com',
    siteId: 1,
    trackerFileName: 'track',
    enableLinkTracking: true,
    disableCookies: true,

    preInitActions: [['setRequestMethod', 'POST']],

    debug: false,
  })
}
