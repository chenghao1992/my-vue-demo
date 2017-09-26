import axios from 'axios';
import Api from '../api'

export default {
	addNum({ commit, state }, params) {
	  console.log("params:",params)
		commit('REMBER_ANSWER', { params })
		console.log(state);
	},
  changeTestNum({commit,state},params){
	  commit('changeTestNum',{params});
  },
  loadImgs({commit,state}){
    Api.getNews({
      params:555
    }).then(res=>{
      console.log(res.data)
      commit('loadImgs',res.data)
    });
  }
	// getData({ commit, state }) {
	// 	ajax('GET', 'http://operating-activities.putao.com/happyfriday?active_topic_id=4').
	// 	then(res => {
	// 		commit('GET_DATA', {
	// 			res
	// 		})
	// 	})
	// },

}
