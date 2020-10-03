import VueRouter from 'vue-router'
import first from '../../components/index/first.vue'
import last from '../../components/index/last.vue'
import fast from '../../components/index/fast.vue'
import clearance from '../../components/index/clearance.vue'
import ole from '../../components/index/ole.vue'
import login from '../../components/index/login.vue'
import list from '../../components/type/list.vue'
import product_list from '../../components/detail/product_list.vue'
import details from '../../components/detail/details.vue'
import car from '../../components/detail/car.vue'
export default new VueRouter({
	routes:[
		{
			path:'/',
			component:first
		},
		{
			path:'/last',
			component:last
		},
		{
			path:'/fast',
			component:fast
		},
		{
			path:'/clearance',
			component:clearance
		},
		{
			path:'/ole',
			component:ole
		},
		{
			path:'/login',
			component:login
		},
		{
			path:"/list",
			component:list
		},
		{
			path:"/product_list",
			component:product_list
		},
		{
			path:"/details/:id",
			component:details
		},
		{
			path:"/car",
			component:car
		}
	]
})