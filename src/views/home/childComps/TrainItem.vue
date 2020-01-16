<template>
	<div class="train-item">
		<div class="imgs"><img :src="item.logo"></div>
		<div class="right">
			<div class="classify">{{item.name}} <button @click="jump">现在预约</button></div>
			<div class="score">课程评分: <img v-for="i in item.pj" src="~assets/img/home/star.png">
				<img v-for="i in (5-item.pj)" src="~assets/img/home/star1.png">{{' ' + item.pj.toFixed(1)}}分
			</div>
			<div class="intro"><span>课程简介：</span>{{item.h1}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TrainItem',
		props: ['item'],
		methods: {
			jump(){
				this.$router.push('/shopcart')
			}
		}
	}
</script>

<style scoped>
	.train-item {
		display: flex;
		padding: 0.2rem 0;
		margin: 0 0.3rem;
		justify-content: space-between;
	}
	.train-item ~ .train-item {
		border-top: 1px solid #e6e6e6;
	} 
	.imgs {
		width: 2.1rem;
		height: 2.1rem;
	}
	.imgs img {
		width: 100%;
		height: 100%;
	}
	.right {
		flex: 1;
		margin-left: 0.2rem;
	}
	.classify {
		height: 0.44rem;
		line-height: 0.44rem;
		padding-top: 0.08rem;
		font-size: 0.28rem;
		color: #333;
		font-weight: bold;
		box-sizing: content-box;
	}
	.classify button {
		float: right;
		background-color: #fa955d;
		color: #fff;
		border: 0;
		outline: none;
		padding: 0.1rem 0.16rem;
		border-radius: 0.06rem;
		font-size: 0.22rem;
	}
	.score {
		color: #666;
		font-size: 0.22rem;
		padding-top: 0.32rem;
		padding-bottom: 0.12rem;
	}
	.score img {
		width: 0.26rem;
		height: 0.26rem;
		vertical-align: top;
	}
	.intro {
		font-size: 0.22rem;
		color: #868686;
		line-height: 0.32rem;
	}
	.intro span {
		color: #454545;
	}
</style>
