<template>
	<main>
		<h1>{{title01}}<span>{{hot}}</span></h1>
		<ul>
			<li v-for="(item,index) in list01"><img :src="item.src"><p>{{item.title}}</p></li>
		</ul>
		<h1>{{title02}}<span>{{hot}}</span></h1>
		<ul>
			<li v-for="(item,index) in list02"><img :src="item.src"><p>{{item.title}}</p></li>
		</ul>
	</main>
</template>
<script>
	export default{
		data(){
			return{
				title01:"热销分类",
				title02:"单鞋",
				hot:"热销榜>",
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