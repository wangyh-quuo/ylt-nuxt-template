import Vue from 'vue'

import * as mixins from '@/mixins'

// 注册全局混入
Object.keys(mixins).forEach((key) => {
  Vue.mixin(mixins[key])
})
