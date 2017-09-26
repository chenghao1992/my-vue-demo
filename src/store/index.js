import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'


Vue.use(Vuex)

const state = {
  test1:1,
	test2: [1,2,3],
  lists:[]  //必须设置初始值才能mapState映射吗？
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})
