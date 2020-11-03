import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		count:0
	},
	//中有mutations中的函数，才能修改state
	mutations:{
		add(state){
			//不要在mutations函数中执行异步操作
			// setTimeout(()=>{
			// 	state.count++;
			// },1000);
			state.count++;
		},
		addN(state,step){
			state.count+=step;
		},
		sub(state){
			state.count--;
		},
		subN(state,step){
			state.count-=step;
		}
	},
	actions:{
		//actions中执行异步操作
		addAsync(context){
			//在action中不能直接修改state中的数据
			//必须通过context.commit()触发某个mutations才行
			setTimeout(()=>{
				context.commit('add');
			},1000);
		},
		addNAsync(context,step){
			//在action中不能直接修改state中的数据
			//必须通过context.commit()触发某个mutations才行
			setTimeout(()=>{
				context.commit('addN',step);
			},1000);
		},
		subAsync(context){
			setTimeout(()=>{
				context.commit('sub');
			})
		},
		subNAsync(context,step){
			setTimeout(()=>{
				context.commit('subN',step);
			})
		}
	},
	//对数据进行加工处理
	getters:{
		showNum(state){
			return '当前最新的数量是['+state.count+']'
		}
	}
});