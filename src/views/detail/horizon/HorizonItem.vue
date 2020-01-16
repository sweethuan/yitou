<template>
		<div class="horizon-item">
			<img :src="item.img">
			<div class="name">{{item.name}}</div>
			<div class="degree">{{item.degree}}</div>
			<div class="intro">{{item.intro}}</div>
			<div class="btn" @click="jump">立即咨询</div>
		</div>
</template>

<script>
	export default {
		name: 'HorizonItem',
		props: ['item'],
		methods: {
			jump(){
				this.$router.push('/shopcart')
			}
		}
	}
</script>

<style scoped>
	.horizon-item {
		width: 48%;
		background-color: #fff;
		text-align: center;
		margin-bottom: 0.12rem;
		border-radius: 0.06rem;
		font-size: 0.24rem;
		color: #454545;
		overflow: hidden;
	}
	.horizon-item img {
		width: 1.3rem;
		height: 1.3rem;
		border-radius: 50%;
		margin: 0.24rem 0;
	}
	.name {
		font-size: .32rem;
		margin-bottom: .24rem;
	}
	.degree {
		font-size: .22rem;
		margin-bottom: .24rem;
	}
	.btn {
		height: .78rem;
		line-height: .78rem;
		background-color: #4ba7ef;
		color: #fff;
		font-size: .26rem;
		font-weight: 500;
		margin-top: 0.24rem;
	}
</style>
