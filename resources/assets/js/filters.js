import Vue from 'vue'

Vue.filter('priceDelimiter', function (value) {
  return `${value.toLocaleString()}円`
})
