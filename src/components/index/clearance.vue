<template>
	<main>
		<div id="clear">
			<div class="top">
			</div>
			<div class="brand">
				<div class="msg">{{msg}}万人正在疯抢<img src="../../assets/images/jt.png"></div>
				<ul>
					<li v-for="(item,index) in brand">
						<img :src="item.src">
						<span>低至{{item.num}}折</span>
					</li>
				</ul>
			</div>
			<div class="c_1">
				<span>{{num}}万人已购买</span>
				<ul>
					<li v-for="(item,index) in c_1_list">
						<img :src="item.src">
						<img :src="item.src1">
						<p>¥{{item.price}}</p>
					</li>
				</ul>
			</div>
			<div class="c_2">
				<img src="../../assets/images/clear_01.jpg">
				<img src="../../assets/images/clear_02.jpg">
			</div>
			<div class="c_3">
				<img src="../../assets/images/ad_qc.jpg">
			</div>
			<div class="brand_list">
				<ul>
					<li v-for="v in brand_list">
						<div class="title">
							<span class="logo">
								<img :src="v.src">
								<span>{{v.con}}</span>
							</span>
							<span class="more">
								进入专场
							</span>
						</div>
						<div class="con">
							<dl>
								<dd v-for="item in v.con_list">
									<img :src="item.src">
									<p>特卖价<span>¥{{item.price}}</span></p>
								</dd>
							</dl>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</main>
</template>
<script>
	export default{
		data(){
			return{
				brand:[],
				num:'',
				msg:'',
				c_1_list:[],
				brand_list:[]
			}
		},
		mounted(){
			this.$http.get('./data/clearance.json')
			.then((response)=> {
				this.brand=response.data.brand;
				this.msg=response.data.msg;
				this.num=response.data.num;
				this.c_1_list=response.data.c_1_list;
				this.brand_list=response.data.brand_list;
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