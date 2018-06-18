export const destroyMixin = {
  destroyed () {
    this.$_hello.world('destroyed:mixin')
  },
}
