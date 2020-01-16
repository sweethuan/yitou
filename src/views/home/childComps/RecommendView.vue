<template>
	<div class="recommend">
		<div class="recommend-item" v-for="item in imgList" @click="itemClick(item.path)">
			<img :src="item.src">
			<div>{{item.title}}</div>
		</div>

	</div>
</template>

<script>
	import imgtit from "assets/img/home/shop.gif"
	export default {
		name: 'RecommendView',
		props: {
			recommends: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {
				imgList: [{
						src: imgtit,
						title: '日本留学',
						path:"/school"
					},
					{
						src: imgtit,
						title: '毕业就业',
						path:"/job"
					},
					{
						src: imgtit,
						title: '留学生活',
						path:"/live"
					},
					{
						src: imgtit,
						title: '名师规划',
						path:"/details"
					}
				]
			}
		},
		methods: {
			itemClick(path) {
				this.$router.push(path)
			}
		}
	}
</script>

<style scoped="scoped">
	.recommend {
		display: flex;
		text-align: center;
		font-size: 0.24rem;
		color: #555;
		background-color: #fff;
		border-bottom: 1px solid #d7d8d6;
		padding: 0.3rem 0;
		margin-bottom: 0.18rem;
	}

	.recommend-item {
		flex: 1;
	}

	.recommend img {
		width: 1rem;
		height: 1rem;
		margin-bottom: 0.1rem;
		font-weight: 900;
	}
</style>
