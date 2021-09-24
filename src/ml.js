import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'
import store from './store'

import lang from './scripts/lang.js'

Vue.use(MLInstaller)
console.log(store.state)
export default new MLCreate({
  initial: store.state.lang,
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('russian').create(lang.ru),
    new MLanguage('english').create(lang.en)
  ]
})
