<template>
	<div class="life-item">
		<div><img :src="item.img" ></div>
		<h3>留学实况</h3>
		<div class="title">{{item.title}}</div>
		<div class="follow"><img src="~assets/img/home/eyes.gif" >76人看过<span>8.6分</span></div>
	</div>
</template>

<script>
	export default {
		name: 'LifeItem',
		props: ['item']
	}
</script>

<style scoped>
	.life-item {
		padding: 0 0.3rem;
	}
	.life-item:nth-child(2) {
		padding-top: 0.3rem;
	}
	.life-item:last-child {
		padding-bottom: 0.3rem;
	}
	img {
		width: 100%;
		height: 2rem;
		border-radius: 0.2rem;
	}
	h3 {
		font-size: 0.24rem;
		color: #000;
		padding-top: 0.1rem;
	}
	.title {
		font-size: 0.22rem;
		color: #757575;
		overflow: hidden;
	  white-space: nowrap;
		text-overflow: ellipsis;
		padding: 0.08rem 0;
	}
	.follow {
		font-size: 0.2rem;
		color: #757575;
		padding-bottom: 0.16rem;
	}
	.follow img {
		width: 0.3rem;
		height: 0.2rem;
		margin-right: 0.08rem;
	}
	.follow span {
		margin-left: 0.12rem;
	}
</style>
