<template>
	<div class="plan-item swiper-slide" :class="{flag:flag}">
		<div class="imgs"><img :src="item.img" @load="imgload"></div>
		<div class="right">
			<div class="msg"><b>{{item.name}}</b><span>{{item.degree}}</span></div>
			<div class="urse"><span>{{item.age}}岁</span><span>{{item.sex | sex}}</span><span>{{item.address}}</span></div>
			<div class="recommend">推荐指数：<img src="~assets/img/home/star.png" v-for="i in item.recommend">
					<img src="~assets/img/home/star1.png" v-for="i in (5-item.recommend)" :key='i'>	
			</div>
			<div class="intro">名师简介: <span>{{item.intro}}...</span></div>
		</div>
		<div class="drop" v-if="flag">
			<div class="drop-item" @click="jump('/shopcart')">立即咨询</div>
			<div class="drop-item" @click="jump('/category')">立即报名</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'PlanItem',
		props: {
			item: Object,
			flag: {
				type: Boolean,
				default: false
			}
		},
		
		filters: {
			sex(index){
				return index == 1 ? '男' : '女'
			}
		},
		methods: {
			imgload(){
				this.$emit('imgload')
			},
			jump(path){
				this.$router.push(path)
			}
		}
	}
</script>

<style scoped>
	.plan-item {
		position: relative;
		display: flex;
		padding: 0.3rem 0.3rem 0.5rem;
		background-color: #fff;
	}
	.flag {
		padding-bottom: 1.2rem;
	}
	.imgs {
		width: 2.02rem;
		height: 3.02rem;
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
		font-weight: bold;
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
	.drop {
		position: absolute;
		display: flex;
		left: 0;
		right: 0;
		bottom: 0;
		height: 0.88rem;
		line-height: 0.88rem;
	}
	.drop-item {
		flex: 1;
		text-align: center;
		font-size: 0.26rem;
	}
	.drop-item:first-child {
		background-color: #f0f0f0;
		color: #454545;
	}
	.drop-item:last-child {
		background-color: #4ba7ef;
		color: #fff;
	}
</style>
