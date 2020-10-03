<template>
	<main>
		<div id="fast">
			<div class="top">
				<div class="search">
					<input type="text" placeholder="护肤套装">
					<button class="btn"></button>
				</div>
			</div>
			<div class="banner">
				<ul id="bannerCon" :class="{'animate-up':animateUp}">
					<li v-for="item in top_list" >
						<a>{{item}}</a>
					</li>
				</ul>
			</div>
			<div class="c_1">
				<div class="user">
					<ul class="{'animate-left':animateLeft}">
						<li v-for="src in userList">
							<img :src="src">
						</li>
					</ul>
					<p><span>{{userNum}}</span>人抢购中</p>
				</div>
				<ul>
					<li v-for="(item,index) in c_1_list">
						<img :src="item.src">
						<p class="title">{{item.con}}</p>
						<div class="cut">
							<span class="cut_l">{{item.costPrice}}</span>
							<span class="cut_c">{{item.cutPrice}}</span>
							<span class="cut_r">{{item.costPrice}}</span>
						</div>
						<p>{{item.price}}<span>马上抢</span></p>
						<div class="limit">
							限量<br>{{item.limit}}
						</div>
					</li>
				</ul>
			</div>
			<div class="c_2">
			</div>
			<div class="c_3">
				<ul>
					<li v-for="(item,index) in c_3_list">
						<img :src="item.src">
						<span>{{item.con}}</span>
					</li>
				</ul>
			</div>
		</div>
	</main>
</template>
<script>
	export default{
		name:"animate-up",
		name:"animate-left",
		data(){
			return{
				animateUp:false,
				animateLeft:false,
				userNum:[],
				userList:[],
				timer:null,
				top_list:[],
				c_1_list:[],
				c_3_list:[]
			}
		},
		mounted(){
			this.$http.get('./data/fast.json')
			.then((response)=> {
				this.top_list=response.data.top_list;
				this.c_1_list=response.data.c_1_list;
				this.userNum=response.data.userNum;
				this.userList=response.data.userList;
				this.c_3_list=response.data.c_3_list;
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
			this.timer=setInterval(this.scrollAnimate,1500);
		},
		methods:{
			scrollAnimate(){
				this.animateUp=true;
				this.animateLeft=true;
				setTimeout(()=>{
					this.top_list.push(this.top_list[0]);
					this.top_list.shift();
					this.animateUp=false;
					this.userList.push(this.userList[0]);
					this.userList.shift();
					this.animateLeft=false;
				},500)
			}
		},
		destroyed(){
			clearInterval(this.timer)
		}
	}
</script>