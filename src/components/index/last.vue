<template>
	<main>
		<div id="last">
			<div class="top">
				<div class="top_img">
					<img src="../../assets/images/last_top.jpg">
				</div>
				<div class="top_con">
					<ul id="topCon" :class="{'animate-up':animateUp}">
						<li v-for="(item,index) in top_list" :key="index">
							<a>{{item}}</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="ad">
				<img src="../../assets/images/ad02.jpg">
			</div>
			<div class="c_1">
				<div class="c_1_top">
					<img src="../../assets/images/fq.gif">
				</div>
				<div class="c_1_con">
					<ul>
						<li v-for="(item,index) in dp_list">
							<img :src="item.src">
							<div>
								<p>
									<img :src="item.src1">
									<span>{{item.con}}</span>
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="c_2">
				<div class="c_2_con">
					<ul>
						<li v-for="(item,index) in c_2_list">
							<img :src="item.src">
							<p>{{item.con}}</p>
							<span>{{item.info}}</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="c_3" v-for="v in c_3_list">
				<div class="lf">
					<ul>
						<li v-for="(item,index) in v.lf_list">
							<img :src="item.src">
							<p><span>{{item.con}}</span>{{item.price}}</p>
						</li>
					</ul>
				</div>
				<div class="rt">
					<ul>
						<li v-for="(item,index) in v.rt_list">
							<img :src="item.src">
							<p><span>{{item.con}}</span>{{item.price}}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</main>
</template>
<script>
	export default{
		name:"animate-up",
		data(){
			return{
				animateUp:false,
				timer:null,
				top_list:[],
				dp_list:[],
				c_2_list:[],
				c_3_list:[]
			}
		},
		mounted(){
			this.$http.get('./data/last.json')
			.then((response)=> {
				this.top_list=response.data.top_list;
				this.dp_list=response.data.dp_list;
				this.c_2_list=response.data.c_2_list;
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
				setTimeout(()=>{
					this.top_list.push(this.top_list[0]);
					this.top_list.shift();
					this.animateUp=false;
				},500)
			}
		},
		destroyed(){
			clearInterval(this.timer)
		}
	}
</script>