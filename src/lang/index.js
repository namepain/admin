import Vue from 'vue'
import VueI18n from 'vue-i18n'
import customZhCn from './zh-CN'
import customEnUs from './en-US'
import zhCnLocale from 'iview/src/locale/lang/zh-CN'
import enUsLocale from 'iview/src/locale/lang/en-US'

Vue.use(VueI18n)

// 自动根据浏览器系统语言设置语言
const navLang = navigator.language
let lang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : 'zh-CN'

// vue-i18n 6.x+写法
Vue.locale = () => {}

const messages = {
  'zh-CN': {
    ...zhCnLocale,
    ...customZhCn
  },
  'en-US': {
    ...enUsLocale,
    ...customEnUs
  }
}
const i18n = new VueI18n({
  locale: lang,
  messages
})

export default i18n
