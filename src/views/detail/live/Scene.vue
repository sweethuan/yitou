<template>
	<div class="scene">
		<div class="scene-item" v-for="item in scene">
			<img :src="item.img" >
			<div class="title">{{item.title}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Scene',
		props: ['scene']
	}
</script>

<style scoped>
	.scene {
		display: flex;
		padding: 0 0.3rem;
		flex-wrap: wrap;
		justify-content: space-between;
		font-size: 0.24rem;
		color: #000;
	}
	.scene-item {
		width: 48%;
		padding-bottom: 0.1rem;
	}
	.scene-item img{
		width: 100%;
	}
	.title {
		padding-top: 0.1rem;
	}
</style>
