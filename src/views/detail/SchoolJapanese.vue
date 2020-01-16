<template>
	<div class="school-japanese">
		<div class="imgs">
			<img src="~assets/img/home/school_lx_ad.png">
			<div class="school-list">
				<div class="school-item" v-for="(item,index) in japanese" :key='index'>
					<img :src="item.logo">
					<div>{{item.name}}</div>
				</div>
			</div>
		</div>

		<div v-html="item.content" v-for="(item,index) in japanese" :key='index'></div>
	</div>
</template>

<script>
	export default {
		name: 'SchoolJapanese',
		props: ['japanese']
	}
</script>

<style scoped>
	.school-japanese>>>img {
		width: 100%;
	}

	.imgs {
		position: relative;
		padding-bottom: 0.32rem;
		margin-bottom: 0.3rem;
	}

	.school-list {
		display: flex;
		position: absolute;
		bottom: 0;
		left: 0.3rem;
		right: 0.3rem;
		background: hsla(0, 0%, 98%, .95);
		justify-content: flex-start;
		padding: .36rem 0;
		border-radius: .1rem;
		box-shadow: 0 0 0.15rem 0.05rem #eee;
	}

	.school-item {
		flex: 1;
		text-align: center;
		font-size: .24rem;
		font-weight: 500;
		color: #000;
	}

	.school-item img {
		width: 1.18rem;
		height: 1.18rem;
		border-radius: 50%;
	}
</style>
