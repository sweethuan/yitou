<template>
	<div class="life">
		<div class="title">留学生活</div>
		<life-item v-for='item in scene' :item='item'></life-item>
	</div>
</template>

<script> 
	import LifeItem from './LifeItem.vue'
	
	export default {
		name: 'Life',
		props: ['scene'],
		components: {
			LifeItem
		}
	} 
</script>

<style scoped>
	.life {
		font-size: 0.3rem;
		background-color: #fff;
		border-top: 1px solid #f0f0f0;
		border-bottom: 1px solid #f0f0f0;
		margin-top: 0.18rem;
	}
	.title {
		text-align: center;
		background: url(~assets/img/home/live_future_tit.png) no-repeat center;
		background-size: 4.8rem;
		color: #232323;
		padding: 0.5rem 0;
		font-weight: bold;
		border-bottom: 1px solid #e6e6e6;
	}
</style>
