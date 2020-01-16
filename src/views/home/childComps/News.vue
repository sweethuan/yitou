<template>
	<div class="news">
		<div class="left"></div>
		<div class="content">
			<div class="imgs"><img src="~assets/img/home/ad_img.png" alt=""></div>
			<div>
				<h3>专家指示应该怎样去游学——2019·5·30</h3>
				<p>各位同学，为了便于解答大家的问题....</p>
			</div>
		</div>
		<div class="right"></div>
	</div>
</template>

<script>
	export default {
		name: 'News'
	}
</script>

<style scoped="scoped">
	.news {
		display: flex;
		height: 1.06rem;
		padding: 0 0.3rem;
		background-color: #fff;
		border-top: 1px solid #d2d2d1;
		border-bottom: 1px solid #d2d2d1;
	}
	
	.news .left,
	.news .right{
		width: 0.8rem;
	}
	.left {
		background: url(~assets/img/home/news.png) no-repeat center;
		background-size: 0.74rem 0.66rem;
	}
	.right {
		background: url(~assets/img/home/right.png) no-repeat center;
		background-size: 0.24rem 0.36rem;
	}
	.content {
		display: flex;
		flex: 1;
		padding-left: 0.2rem;
		font-size: 0.2rem;
		color: #999;
		align-items: center;
	}
	.content h3 {
		font-size: 0.24rem;
		color: #333;
		padding-bottom: 0.08rem;
	}
	.content .imgs {
		padding-right: 0.1rem;
	}
	.content img {
		width: 0.66rem;
		height: 0.66rem;
		vertical-align: middle;
	}
	
</style>
