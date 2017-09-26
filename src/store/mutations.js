const GET_DATA = 'GET_DATA'
const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
const GET_USER_INFORM = 'GET_USER_INFORM'

export default {
	[GET_DATA](state, payload) {
		if (payload.res.httpStatusCode == 200) {
			state.itemDetail = payload.res.topiclist;
		}
	},
	[REMBER_ANSWER](state, payload) {
		state.test1 = 2;
	},
  changeTestNum(state,payload){
	  console.log(payload)
	  state.test1=payload.params;
  },
  loadImgs(state,payload){
    state.lists=payload.stories
  }

}
