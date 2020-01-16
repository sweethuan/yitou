<template>
  <div>
    <nav-bar class="nav-bar"><div slot='center'>联系我们</div></nav-bar>
		<div class="imgs"><img src="~assets/img/cart/contact_img.jpg" ></div>
		<div class="contaier">
			<div class="up">
				<div class="city"><b>重庆校区</b><span>999km</span></div>
				<div class="tel"><span>联系我们</span></div>
				<ul>
					<li>学院官网：www.ito-edu.com</li>
					<li>学院热线：023-670023832</li>
					<li>学院邮箱：cqyitou2019@163.com</li>
					<li>校区地址：重庆市江北区观音桥融恒时代广场1509室</li>
				</ul>
			</div>
			<div class="btns">
				<div>查看地图</div>
				<div>致电咨询</div>
			</div>
		</div>
  </div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavTab.vue'
  export default {
    name: 'shopcart',
		components: {
			NavBar
		}
  }
  
</script>

<style scoped>
	li {
		list-style: none;
		padding-bottom: 0.2rem;
	}
	.nav-bar {
		height: 0.88rem;
		line-height: 0.88rem;
		background-color: #1682d6;
		font-size: 0.36rem;
		color: #fff;
		font-weight: 900;
	}
	.imgs img {
		width: 100%;
	}
	.contaier {
		padding: 0.3rem;
		color: #454545;
		font-size: .22rem;
	}
	.up {
		padding: 0 0.4rem;
	}
	.city {
		line-height: 0.6rem;
	}
	.city b {
		font-size: 0.32rem;
		color: #000;
	}
	.city span {
		float: right;
		font-size: 0.22rem;
		color: #666;
		padding-left: 0.6rem;
		border-left: 1px solid #a7a7a7;
		background: url(~assets/img/cart/adrss.png) no-repeat 0.24rem;
		background-size: 0.16rem 0.22rem;
	}
	.tel {
		font-size: 0.28rem;
		color: #454545;
		line-height: 0.4rem;
		padding-bottom: 0.18rem;
		border-bottom: 1px solid #E6E6E6;
		margin: 0.2rem 0 0.3rem;
	}
	.tel span {
		border-left: 0.04rem solid #007AFF;
		padding-left: 0.18rem;
	}
	ul {
		padding: 0 0 0.4rem 0.2rem;
	}
	.btns {
		display: flex;
		text-align: center;
		background-color: #2b97ec;
		color: #fff;
		font-size: .26rem;
		padding: 0.1rem 0;
		border-radius: 0 0 0.1rem 0.1rem;
	}
	.btns>div {
		flex: 1;
		line-height: 0.9rem;
	}
	.btns>div:first-child {
		background: url(~assets/img/cart/contact_btn_adrss.png) no-repeat 0.7rem;
		background-size: 0.36rem 0.46rem;
	}
	.btns>div:last-child {
		border-left: 1px solid #fff;
		background: url(~assets/img/cart/contact_btn_tel.png) no-repeat 0.7rem;
		background-size: 0.26rem 0.46rem;
	}
</style>
