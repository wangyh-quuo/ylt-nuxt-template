import Vue from 'vue'

import * as filters from '@/filters'

// 注册全局过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})
