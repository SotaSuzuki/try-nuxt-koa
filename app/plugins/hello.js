import Vue from 'vue'

const helloWorld = (place) => {
  console.log(`${place}: `, 'Hello, world!')
}

export const Hello = {
  install: (Vue, { nightMode }) => {
    if ('$_hello' in Vue.prototype) {
      return
    }

    Vue.sayHello = () => {
      if (nightMode) {
        console.log('Good evening!')
        return
      }
      console.log('Hello!')
    }

    Vue.directive('hello', {
      bind (el, binding, vnode, oldVnode) {},
    })

    Vue.mixin({
      beforeMount () {
        // console.log('beforeMount:mixin: ', 'goodbye')
        this.$_hello.world('beforeMount:mixin')
      },
    })

    // インスタンスメソッドを追加
    Vue.prototype.$_greet = (name) => {
      if (nightMode) {
        console.log(`Good evening, ${name}!`)
        return
      }
      console.log(`Hello, ${name}!`)
    }

    // インスタンスオブジェクトを追加
    Object.defineProperty(Vue.prototype, '$_hello', {
      get () {
        return {
          world (place) {
            helloWorld(place)
          },
        }
      },
    })
  },
}

Vue.use(Hello, { nightMode: false })

export default (ctx, inject) => {
  inject('_hello', {
    world (place) {
      helloWorld(place)
    },
  })
}
