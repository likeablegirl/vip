<template>
	<div id="product">
		<ul>
			<li v-for="(item,index) in list">
				<router-link :to="'/details/'+item.id">
					<img :src="item.src">
					<div class="main"><span class="te">特卖价</span><span class="price">¥{{item.price}}</span><span class="cost">{{item.cost}}</span><span class="discount">{{item.discount}}折</span></div>
					<p class="ad">{{item.ad}}</p>
					<p class="title">{{item.title}}</p>
					<p class="title1">{{item.title1}}</p>
					<p><span :class="item.type=='爆款'?'type':'type01'" id="type">{{item.type}}</span></p>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			this.$http.get('./data/product.json')
			.then((response)=> {
				this.list=response.data.list;
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