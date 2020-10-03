<template>
	<div id="detail">
		<div class="banner">
			<mt-swipe :auto="5000">
				<mt-swipe-item v-for="src in dt_list">
					<img :src="src">
				</mt-swipe-item>
			</mt-swipe>
			<span @click="back()"><img src="../../assets/img/arrow-left.png"></span>
		</div>
		<div class="num">
			<span class="price">¥{{price}}</span><span class="cost"><del>¥{{cost}}</del>{{discount}}折</span>
			<div class="rt">
				<img src="../../assets/img/kuaiqiang.png">
				<span>累计热卖{{hot}}件</span>
			</div>
		</div>
		<p class="title">{{title}}<span>{{brand}}</span></p>
		<div class="zheng">
			<img src="../../assets/img/zheng.png">100%正品 · 专业鉴定 · 正品险
			<i></i>
		</div>
		<div class="color">
			<dl>
				<dt v-if="color_list==undefined?hidden:show">颜色</dt>
				<dd v-for="(item,index) in color_list" :class="{checked:msg==index}" @click="change(index,item)">
					<img :src="item.src">
					{{item.con}}
				</dd>
				<dt>尺码</dt>
				<dd class="checked">{{size_list}}</dd>
			</dl>
		</div>
		<div class="parm">
			<span>商品参数</span>
			<span>类型、数量、表面工艺等</span>
		</div>
		<div class="distr">
			<div class="f1">
				<span>配送至</span>
				<span>
					上海市.上海市.杨浦区.长白新村街道
					<p>现在付款，最快9月27日(周日)送达</p>
				</span>
			</div>
			<div class="f2">
				<span>运费</span>
				<span>新会员专享首单满38元免邮（限唯品自营商品，部分商品不可用）</span>
			</div>
		</div>
		<div class="services">
			<ul>
				<li><i></i>唯品会发货及售后</li>
				<li><i></i>顺丰配送</li>
				<li><i></i>7天可退（需保留原包装）</li>
				<li><i></i>退货无忧</li>
				<li><i></i>不支持换货</li>
			</ul>
		</div>
		<div class="brand">
			<img :src="brand_src">
			<p>{{brand}}</p>
			<p>{{brand_desc}}</p>
			<button>收藏</button>
		</div>
		<div class="see">
			查看品牌
		</div>
		<div class="qa">
			<span>常见问题</span><span>全部</span>
			<p><i>Q</i>可以洗碗机使用吗</p>
			<p><i>A</i>可以</p>
		</div>
		<div class="post">
			<h1>售后服务咨询</h1>
			<button><img src="../../assets/img/earphone.png">售后服务</button>
		</div>
		<div class="detail">
			<h1>图文详情</h1>
			<ul>
				<li v-for="src in xq_list">
					<img :src="src">
				</li>
			</ul>
		</div>
		<div class="services_1">
			<img src="../../assets/img/server.png">
		</div>
		<div class="price_sm">
			<h1>价格说明</h1>
			<p>
				唯品会展示的市场价/中间划横线价格为参考价，
				采集自品牌专柜标价、商品吊牌价、品牌官网价格或由供应商提供的正品零售价；
				由于地区、时间、货币汇率等的差异及存在品牌方调价、市场行情波动、产品批次等因素，
				品牌专柜标价、商品吊牌价等可能会与您购物时网页显示的划线价不一致。该价格仅供您参考。
			</p>
		</div>
		<div class="bottom">
			—· 已经到底啦，再往上逛逛吧 ·—
		</div>
		<footer>
			<div class="con">
				<div class="lf">
					<router-link to="/car">
						<img src="../../assets/img/gouwuche.png"><br>
						购物车
						<span v-show="this.$store.state.count>0">{{this.$store.state.count}}</span>
					</router-link>
				</div>
				<div class="rt">
					<ul>
						<li>
							<span @click="add()">¥{{cost}}</span>市场价
						</li>
						<li>
							<span @click="add()">¥{{price}}</span>特卖价 抢>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				show:true,
				hidden:false,
				msg:0,
				dt_list:[],
				xq_list:[],
				list:[],
				price:'',
				cost:'',
				discount:'',
				hot:'',
				title:'',
				brand:'',
				color_list:[],
				color:'',
				size_list:[],
				brand_src:'',
				brand_desc:'',
				id:this.$route.params.id
			}
		},
		mounted(){
			//console.log(this.$route.params.id);
			this.$http.get('./data/product.json')
			.then((response)=> {
				this.list=response.data.list;
				//console.log(this.list.length);
				for(var i=0,y=1; i<this.list.length; i++,y++){
					if(this.$route.params.id==y){
						this.dt_list=response.data.list[i].dt_list;
						this.xq_list=response.data.list[i].xq_list;
						this.price=response.data.list[i].price;
						this.cost=response.data.list[i].cost;
						this.discount=response.data.list[i].discount;
						this.hot=response.data.list[i].hot;
						this.title=response.data.list[i].title;
						this.brand=response.data.list[i].brand;
						this.color_list=response.data.list[i].color_list;
						this.size_list=response.data.list[i].size_list;
						this.brand_src=response.data.list[i].brand_src;
						this.brand_desc=response.data.list[i].brand_desc;
					}
				}
			})
		},
		methods:{
			back(){
				this.$router.go(-1);
			},
			change(a,b){
				this.msg=a;
				this.color=b.con;
			},
			add(){
				const product={};
				product.src=this.dt_list[0];
				product.title=this.title;
				product.price=this.price;
				product.brand=this.brand;
				product.id=this.id;
				product.color=this.color;
				product.size=this.size_list;
				product.count=1;
				if((product.color=='')&&(this.color_list!=undefined)){
					product.color=this.color_list[0].con;
				};
				this.$store.commit("addToCar",product)
			}
		}
	}
</script>
<style scoped>
#banner .mint-swipe-items-wrap{padding-bottom:100%}
</style>