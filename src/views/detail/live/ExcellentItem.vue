<template>
	<div class="excellent-item">
		<div class="imgs"><img :src="item.img"></div>
		<div class="right">
			<div class="msg"><b>{{item.name}}</b><span>{{item.school}}</span></div>
			<div class="urse"><span>{{item.age}}岁</span><span>{{item.sex | sex}}</span><span>{{item.address}}</span></div>
			<div class="recommend">教授点评：<img src="~assets/img/home/star.png" v-for="i in item.pj">
					<img src="~assets/img/home/star1.png" v-for="i in (5-item.pj)" :key='i'>	
					{{item.pj}}分
			</div>
			<div class="intro">个人感官: <span>{{item.testimonial}}...</span></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ExcellentItem',
		props: ['item'],
		filters: {
			sex(index){
				return index == 1 ? '男' : '女'
			}
		}
	}
</script>

<style scoped>
	.excellent-item {
		display: flex;
		padding: 0.3rem 0.3rem 0.5rem;
	}
	.excellent-item ~ .excellent-item {
		border-top: 0.2rem solid #e6e7e5;
	}
	.imgs {
		width: 2.2rem;
		height: 3rem;
	}
	.imgs img {
		width: 100%;
		height: 100%;
		border-radius: 0.1rem;
	}
	.right{
		flex: 1;
		margin-left: 0.26rem;
		font-size: 0.24rem;
		color: #666;
	}
	.msg {
		padding-top: 0.08rem;
		border-bottom: 1px solid #bcbbbb;
		line-height: 0.4rem;
		padding-bottom: 0.08rem;
	}
	.msg b {
		font-size: 0.3rem;
		color: #333333;
		border-bottom: 3px solid #333;
		padding-bottom: 0.08rem;
	}
	.msg span {
		float: right;
	}
	.urse {
		padding: 0.20rem 0;
		
	}
	.urse span:nth-child(2){
		margin: 0 0.6rem ;
	}
	.recommend img {
		width: 0.24rem;
		height: 0.24rem;
	}
	.intro {
		padding-top: 0.3rem;
		font-size: 0.22rem;
		line-height: 0.36rem;
	}
	.intro span {
		color: #909090;
	}
</style>
