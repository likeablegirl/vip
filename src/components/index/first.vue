<template>
	<main>
		<div id="top" class="change">
			<div class="top_ban" v-if="myshow">
				<span @click="close()"></span>
				<p class="title">品牌特卖 3折封顶</p>
				<p class="con">早10晚8准点上新，7天放心退</p>
			</div>
			<div class="header">
				<div class="header_top">
					<div class="h_lf">
						<router-link to="/login">登录</router-link>
					</div>
					<div class="search">
						<input type="text" placeholder="大家正在搜索：护肤套装">
					</div>
					<div class="h_rt">
						<router-link to="/list">
							<img src="../../assets/images/icon.png">
						</router-link>
					</div>
				</div>
				<div class="header_bot">
					<div class="menu">
						<ul>
							<li v-for="(item,index) in menu_list">
								<router-link :to="item.path">{{item.con}}</router-link>
							</li>
						</ul>
					</div>
					<div class="tab_more">
						<div class="more">
							<span @click="change()"><img src="../../assets/images/down.png"></span>
						</div>
						<div class="change_more" v-if="more_show">
							<h3>精选推荐</h3>
							<ul>
								<li v-for="(item,index) in menu_list">
									<router-link :to="item.path">
										<img :src="item.src">
										<p>{{item.con}}</p>
									</router-link>
								</li>
							</ul>
							<h3>更多推荐</h3>
							<ul class="tj_more">
								<li v-for="(item,index) in more_list">
									<router-link to="/list">{{item.con}}</router-link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="banner">
			<mt-swipe :auto="5000">
				<mt-swipe-item><img src="../../assets/images/banner01.jpg"></mt-swipe-item>
				<mt-swipe-item><img src="../../assets/images/banner02.jpg"></mt-swipe-item>
				<mt-swipe-item><img src="../../assets/images/banner03.jpg"></mt-swipe-item>
				<mt-swipe-item><img src="../../assets/images/banner04.jpg"></mt-swipe-item>
				<mt-swipe-item><img src="../../assets/images/banner05.jpg"></mt-swipe-item>
				<mt-swipe-item><img src="../../assets/images/banner06.jpg"></mt-swipe-item>
				<mt-swipe-item><img src="../../assets/images/banner07.jpg"></mt-swipe-item>
			</mt-swipe>
			<img src="../../assets/images/ad.jpg">
		</div>
		<div id="nav">
			<ul>
				<li v-for="(item,index) in nav_list">
					<router-link to="/product_list">
						<span><img :src="item.src"></span>
						<p>{{item.con}}</p>
					</router-link>
				</li>
			</ul>
		</div>
		<div id="center">
			<div class="c1">
				<ul>
					<li><img src="../../assets/images/con_img1.png"></li>
					<li><img src="../../assets/images/con_img2.png"></li>
					<li><img src="../../assets/images/con_img3.png"></li>
				</ul>
			</div>
			<div class="c2">
				<img src="../../assets/images/dj.gif"><span>精选爆款 已售190+万件</span>
				<ul>
					<li v-for="(item,index) in c2_list">
						<router-link :to="item.path">
							<img :src="item.src">
							<p>{{item.con}}</p>
							<span>{{item.price}}</span>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="c3">
				<img src="../../assets/images/3z.gif"><span>1000+品牌正在疯抢</span>
				<ul>
					<li v-for="(item,index) in c3_list">
						<router-link :to="item.path">
							<img :src="item.src">
							<p><img :src="item.src1"></p>
							<span>共{{item.num}}款</span>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="c4">
				<img src="../../assets/images/jl.gif"><span>极致性价比好物大搜罗</span>
				<ul>
					<li v-for="(item,index) in c4_list">
						<router-link :to="item.path">
							<img :src="item.src">
							<p>{{item.con}}</p>
							<span>{{item.price}}</span>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="c5" v-for="v in c5_list">
				<img src="../../assets/images/ad01.jpg">
				<div class="c5_1" v-for="(item,index) in v.c5_1_list">
					<img :src="item">
				</div>
				<div class="c5_2" v-for="(item,index) in v.c5_2_list">
					<img :src="item.src">
					<h2>{{item.title}}<span>{{item.time}}</span></h2>
					<p><span>{{item.num}}</span>{{item.con}}</p>
				</div>
			</div>
		</div>
	</main>
</template>
<script>
	export default{
		data(){
			return{
				menu_list:[],
				myshow:true,
				more_show:false,
				more_list:[],
				nav_list:[],
				c2_list:[],
				c3_list:[],
				c4_list:[],
				c5_list:[]
			}
		},
		methods:{
			close(){
				this.myshow=false;
			},
			change(){
				if($(".more span img").hasClass("rotate")){
					$(".more span img").removeClass("rotate")
				}else{
					$(".more span img").addClass("rotate")
				}
				this.more_show=!this.more_show;
			}
		},
		mounted(){
			this.$http.get('./data/first.json')
			.then((response)=> {
				console.log(response.data.c4_list);
				this.menu_list=response.data.menu_list;
				this.more_list=response.data.more_list;
				this.nav_list=response.data.nav_list;
				this.c2_list=response.data.c2_list;
				this.c3_list=response.data.c3_list;
				this.c4_list=response.data.c4_list;
				this.c5_list=response.data.c5_list;
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
			$(window).scroll(function(){
				var st=$(window).scrollTop();
				if(st>200){
					$(".top_ban").hide();
					$('#top').removeClass('change');
				 	$('#top').addClass('mychange');
				}else{
					$(".top_ban").show();
					$('#top').removeClass('mychange');
				 	$('#top').addClass('change');
				}
			});
		}
	}
</script>
<style scoped>
body{background:#f3f4f6;}
.router-link-active{color:rgb(211, 75, 168); border-bottom:3px solid rgb(211,75,168);}
</style>