/**
 *  函数式组件中要使用 render 函数的第二个参数代替 this。
    以上我们只讨论了以纯对象形式存在的 Vue 组件，然而除了纯对象外还可以函数。
    创建 render 函数的很多步骤都可以进行封装。
    处理更多高阶函数组件本身的选项(而不仅仅是上面例子中的一个简单的生命周期钩子)
 * @param {components} WrappedComponent
 */
import { throttle } from '@/common/util.js'

export default function LazyFeed (WrappedComponent, lazyProp = 'data') {
  return {
    mounted () {
      console.log('I have already mounted')
    },
    props: WrappedComponent.props,
    data () {
      return {
        rendered: []
      }
    },
    watch: {
      [lazyProp]: {
        immediate: true,
        handler (v) {
          if (!v || !v.length) {
            this.rendered = []
            this.unsub && this.unsub()
          } else {
            this.unsub = this.lazyRender({
              done: (page, unsubscribe) => {
                let size = 20
                let start = (page - 1) * size
                console.log('call....')
                this.rendered.push.apply(this.rendered, this[lazyProp].slice(start, start + size))
                if (page * size >= this[lazyProp].length) {
                  console.log('done...')
                  unsubscribe()
                }
              }
            })
          }
        }
      }
    },
    beforeDestroy () {
      this.unsub && this.unsub()
    },
    methods: {
      // 异步渲染
      lazyRender ({ scrollWrapper = document.documentElement, immediate = true, distance = 500, done }) {
        let page = 0
        let unsubscribe = () => {
          window.removeEventListener('scroll', callback)
          callback = unsubscribe = scrollWrapper = null
        }
        let callback = throttle(() => {
          let hasReach = scrollWrapper.scrollHeight - scrollWrapper.scrollTop - scrollWrapper.offsetHeight < distance
          console.log(hasReach)
          if (hasReach) {
            typeof done === 'function' && done(++page, unsubscribe)
          }
        }, 60, { leading: true })
        window.addEventListener('scroll', callback)
        immediate && typeof done === 'function' && done(++page, unsubscribe)
        return unsubscribe
      }
    },
    render (h) {
      const slots = Object.keys(this.$slots)
        .reduce((arr, key) => arr.concat(this.$slots[key]), [])
        .map(vnode => {
          vnode.context = this._self
          return vnode
        })

      return h(WrappedComponent, {
        on: this.$listeners,
        props: { ...this.$props, ...({ [lazyProp]: this.rendered }) },
        // 透传 scopedSlots
        scopedSlots: this.$scopedSlots,
        attrs: this.$attrs
      }, slots)
    }
  }
}
