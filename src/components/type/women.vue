<template>
	<main>
		<div class="banner">
			<img :src="src">
		</div>
		<h1>{{title01}}</h1>
		<ul>
			<li v-for="(item,index) in list01"><img :src="item.src"><p>{{item.title}}</p></li>
		</ul>
		<h1>{{title02}}</h1>
		<ul>
			<li v-for="(item,index) in list02"><img :src="item.src"><p>{{item.title}}</p></li>
		</ul>
	</main>
</template>
<script>
	export default{
		data(){
			return{
				src:"src/assets/img/banner01.jpg",
				title01:"初秋上新",
				title02:"美初衣橱",
				list01:[],
				list02:[]
			}
		},
		mounted(){
			this.$http.get('./data/list.json')
			.then((response)=> {
				this.list01=response.data.list01;
				this.list02=response.data.list02;
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