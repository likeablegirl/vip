<template>
	<div id="car">
		<h1><span @click="change()"><img src="../../assets/img/arrow-r.png"></span>{{this.num==0?"购物车":"确认订单"}}</h1>
		<div class="con" v-if="this.num==0">
			<img src="../../assets/img/car.png"><br>
			购物车空空如也<br>
			<router-link to="/product_list">
				<button>去抢购</button>
			</router-link>
		</div>
		<div class="con_list" v-if="this.num>0">
			<div class="safe">
				<img src="../../assets/img/safe.jpg">你正在安全购物环境中，请放心购买
			</div>
			<div class="address">
				<p>董女士 134*****381<br>
				上海市杨浦区幸福路520号<br>
				收货时间不限
				<span><img src="../../assets/img/arrow-left.png"></span>
				</p>
				<hr/>
				<p>{{num}}个包裹，点击查看预计发货/送达时间<span><img src="../../assets/img/arrow-left.png"></span></p>
			</div>
			<ul>
				<h2>唯品自营</h2>
				<li v-for="(item,index) in this.$store.state.car">
					<img :src="item.src">
					<p class="title">
						<span class="t_left">{{item.title}}</span>
						<span class="price">¥{{item.price}}</span>
					</p>
					<p class="color"><span v-if="item.color!=''">{{item.color}}；</span>{{item.size}}</p>
					<p class="post"><span>七天退换</span><span>退货无忧</span></p>
					<i @click="cutCount(index)">-</i><span class="count">{{item.count}}</span><i @click="addCount(index)">+</i>
					<button type="text" class="btn" @click="del"></button>
				</li>
				<p class="sub">¥{{total.toFixed(2)}}</p>
			</ul>
			<div class="youhui">
                             使用优惠券
			</div>
			<div class="sum">
				<p>订单金额<span>¥{{(total+fare).toFixed(2)}}</span></p>
				<p>商品总金额<span>¥{{total.toFixed(2)}}</span></p>
				<p>总运费<span>¥{{fare}}</span></p>
			</div>
			<div class="fapiao">
				开具发票<span>不开发票<img src="../../assets/img/arrow-r.png"></span>
			</div>
			<footer>
				还需要支付：<span>¥{{(total+fare).toFixed(2)}}</span><br>
				<button>在线支付</button>
			</footer>
		</div>
	</div>
</template>
<script>
	import { MessageBox } from 'mint-ui';
	export default{
		data(){
			return{
				num:this.$store.state.car.length,
				sub:0,
				fare:5
			}
		},
		computed:{
			total(){
				let price=0;
				for(let i=0; i<this.$store.state.car.length; i++){
					price+=this.$store.state.car[i].price*this.$store.state.car[i].count;
				}
				return price;
			}
		},
		methods:{
			change(){
				this.$router.go(-1);
			},
			count(){
				let count=0;
				for(let i=0; i<this.$store.state.car.length; i++){
					count+=this.$store.state.car[i].count;
				}
				this.$store.commit("addCount",count)
			},
			addCount(a){
				this.$store.state.car[a].count++;
				this.count();
			},
			cutCount(a){
				if(this.$store.state.car[a].count>1){
					this.$store.state.car[a].count--
				};
				this.count();
			},
			del(index){
				MessageBox.confirm('删除的商品可能被别人抢走哦，要删除吗?').then(action => {
					this.$store.state.car.splice(index,1);
					this.num--;
					this.count();
				});
			}
		}
	}
</script>
<style>
body:{background:#f3f4f5;}
</style>