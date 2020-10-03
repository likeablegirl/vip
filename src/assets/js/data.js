//必须引入vue和vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state:{
			car:[],
			count:0
	},
	mutations:{
		addToCar(state,product){
			var flag=false;
			state.count += parseInt(product.count);
			state.car.some(item =>{
				console.log(item.color);
				if((item.id==product.id)&&(item.color==product.color)){
					item.count += parseInt(product.count);
					flag=true;
					return true;
				};
			});
			if(!flag){
				state.car.push(product)
			}
		},
		addCount(state,n){
			state.count=n
		}
	}
})