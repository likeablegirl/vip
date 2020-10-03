<template>
	<div id="list">
		<header>
			<div class="search">
				<input type="text" placeholder="护肤套装">
				<button class="btn"></button>
			</div>
		</header>
		<main>
			<div class="lf">
				<ul>
					<li v-for="(item,index) in type" :class="{current:msg==index}" @click="change(index,item)"><span>{{item.typeName}}</span></li>
				</ul>
			</div>
			<div class="rt">
				<component :is="vip"></component>
			</div>
		</main>
	</div>
</template>
<script>
	import vtop from './vtop.vue';
	import women from './women.vue';
	import man from './man.vue';
	import underwear from './underwear.vue';
	import womenshoes from './womenshoes.vue';
	import manshoes from './manshoes.vue';
	import bag from './bag.vue';
	import watch from './watch.vue';
	import skin from './skin.vue';
	import nursing from './nursing.vue';
	import baby from './baby.vue';
	import motion from './motion.vue';
	import mobile from './mobile.vue';
	import electric from './electric.vue';
	import home from './home.vue';
	import furniture from './furniture.vue';
	import shopping from './shopping.vue';
	import international from './international.vue';
	import health from './health.vue';
	import books from './books.vue';
	export default{
		components:{
			"vtop":vtop,
			"women":women,
			"man":man,
			"underwear":underwear,
			"womenshoes":womenshoes,
			"manshoes":manshoes,
			"bag":bag,
			"watch":watch,
			"skin":skin,
			"nursing":nursing,
			"baby":baby,
			"motion":motion,
			"mobile":mobile,
			"electric":electric,
			"home":home,
			"furniture":furniture,
			"shopping":shopping,
			"international":international,
			"health":health,
			"books":books
		},
		data(){
			return{
				vip:"vtop",
				msg:0,
				type:[]
			}
		},
		methods:{
		    change(a,b){
			this.vip=b.v;
			this.msg=a;
		    }
		},
		mounted(){
			this.$http.get('./data/list.json')
			.then((response)=> {
				this.type=response.data.type;
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
		}
	}
</script>