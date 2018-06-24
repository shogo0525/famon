import Vue from 'vue'

Vue.filter('priceDelimiter', function (value) {
    if (value === 0) {
      return "無料"
    } else {
      value = value * 1.08
      return `${value.toLocaleString()}円`
    }
})
