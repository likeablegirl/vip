<template>
	<main>
		<h1>{{title01}}</h1>
		<ul>
			<li v-for="(item,index) in list01">
				<router-link to="/product_list">
					<img :src="item.src">
					<p>{{item.title}}</p>
				</router-link>
			</li>
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
				title01:"好物推荐",
				title02:"品质精选",
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