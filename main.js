import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
// 定义全局方法
Vue.prototype.$getRect = function(selector, all) {
	return new Promise(resolve => {
		uni.createSelectorQuery().
		in(this)[all ? 'selectAll' : 'select'](selector)
			.boundingClientRect(rect => {
				if (all && Array.isArray(rect) && rect.length) {
					resolve(rect)
				}
				if (!all && rect) {
					resolve(rect)
				}
			})
			.exec()
	})
}
const app = new Vue({
	...App
})
app.$mount()
