<template>
	<div class="train">
		<div class="title">日语培训</div>
		<train-item v-for="item in japanese" :item='item'></train-item>
	</div>
</template>

<script>
	import TrainItem from './TrainItem.vue'
	export default {
		name: 'Train',
		components: {
			TrainItem
		},
		props: {
			japanese: {
				type: Array
			}
		}
	}
</script>

<style scoped>
	.train {
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
