<template>
	<div id="login">
		<div class="top">
			<img src="../../assets/images/logo.png">
			<router-link to="/">
				<span class="mlogin-close-in"></span>
			</router-link>
		</div>
		<div class="login" v-if="mobile">
			<ul>
				<li>
					<label for="mobile">手机号</label>
					<input type="tel" id="mobile" placeholder="请输入手机号">
				</li>
				<li>
					<label for="authcode">验证码</label>
					<input type="tel" id="authcode" placeholder="请输入验证码">
					<button class="btn01">获取验证码</button>
				</li>
			</ul>
			<a class="btn02">手机号注册登录</a>
			<p><i :class="{agreement:show}" @click="checked()"></i>同意<a href="">《唯品会服务条款》</a>、<a href="">《隐私条款》</a>、<a href="">《唯品支付用户服务协议》</a></p>
		</div>
		<div class="login" v-if="password">
			<ul>
				<li>
					<label for="mobile">登录名</label>
					<input type="tel" id="mobile" placeholder="请输入手机号或邮箱">
				</li>
				<li>
					<label for="authcode">密码</label>
					<input type="password" id="authcode" placeholder="请输入密码">
				</li>
			</ul>
			<a class="btn02">登录</a>
			<p><a href="" style="float:right; font-size:14px">忘记密码</a></p>
		</div>
		<div class="line"><span>或</span></div>
		<div class="pass"><button class="btn03" @click="login()">密码登录</button></div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				show:false,
				mobile:true,
				password:false
			}
		},
		methods:{
			checked(){
				this.show=!this.show;
			},
			login(){
				this.mobile=!this.mobile;
				this.password=!this.password;
				if(this.mobile==true){
					$(".btn03").html("密码登录");
				}else{
					$(".btn03").html("手机号注册登录");
				};
			}
		}
	}
</script>