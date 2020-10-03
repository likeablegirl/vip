<template>
	<main>
		<div id="ole">
			<div class="top">
				<img src="../../assets/images/ol_bg.gif">
				<img src="../../assets/images/ol_1.jpg">
			</div>
			<div class="c_1">
				<ul>
					<li><img src="../../assets/images/ol_2.jpg"></li>
					<li>
						<img src="../../assets/images/ol_3.jpg">
						<div class="bot">
							<img src="../../assets/images/pl_1.png">
						</div>
					</li>
				</ul>
			</div>
			<div class="c_2">
				<ul>
					<li v-for="(item,index) in c_2_list">
						<img :src="item.src">
						<div class="bot">
							<img :src="item.src1">
						</div>
					</li>
				</ul>
			</div>
			<div class="c_3">
				<div class="c_3_top">
					<img src="../../assets/images/ol_bg01.jpg">
				</div>
				<div class="c_3_con">
					<ul>
						<li v-for="(item,index) in c_3_list">
							<img :src="item.src">
							<div class="bot">
								<span>{{item.title}}</span>
								<p>{{item.msg}}</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="c_4">
				<div class="nav change">
					<img src="../../assets/images/ol_nav.jpg">
				</div>
				<div class="title">
					<img src="../../assets/images/ol_ad.jpg">
				</div>
				<div class="con">
					<ul>
						<li v-for="(item,index) in c_4_list">
							<img :src="item.src">
							<span class="p_logo">
								<img :src="item.src1">
							</span>
							<p>
								<span class="c_title">{{item.con}}</span>
								<span class="btn">进入专场</span>
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</main>
</template>
<script>
	export default{
		data(){
			return{
				c_2_list:[],
				c_3_list:[],
				c_4_list:[]
			}
		},
		mounted(){
			this.$http.get('./data/ole.json')
			.then((response)=> {
				this.c_2_list=response.data.c_2_list;
				this.c_3_list=response.data.c_3_list;
				this.c_4_list=response.data.c_4_list;
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
			$(window).scroll(function(){
				var str=$(window).scrollTop();
				if(str>868){
					$(".nav").removeClass("change").addClass("mychange");
				}else{
					$(".nav").removeClass("mychange").addClass("change");
				}
			})
		}
	}
</script>