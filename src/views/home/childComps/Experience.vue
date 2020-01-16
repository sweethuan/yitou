<template>
	<div class="experience">
		<div class="title">游学体验</div>
		<div class="bg">
			<div class="content"  @click='itemclick'>
				<div class="img-list">
					<div class="img-item" v-for="item in experience.img" :key='item'>
						<img :src="item" >
					</div>
				</div>
				<p>{{experience.intro}}<span>查看详情>></span></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Experience',
		props: {
			experience: {
				type: Object,
				default(){
					return {}
				}
			}
		},
		methods: {
			itemclick(){
				//console.log(123)
				this.$router.push('/details')
			}
		}
	}
</script>

<style scoped="scoped">
	.experience {
		background-color: #fff;
		font-size: 0.3rem;
		font-weight: bold;
	}
	.bg {
		background-color: #f4f4f4;
		padding: 0.3rem ;
		border-top: 1px solid #f0f0f0;
		border-bottom:  1px solid #f0f0f0;
	}
	.content {
		background-color: #fff;
		border-radius: 0 0 0.2rem 0.2rem ;
		border: 1px solid #e6e6e6;
	}
	.title {
		text-align: center;
		background: url(~assets/img/home/live_future_tit.png) no-repeat center;
		background-size: 4.8rem;
		color: #232323;
		padding: 0.5rem 0;
	}
	.img-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.img-item {
		height: 1.6rem;
		width: 48%;
		padding-bottom: 0.12rem;
	}
	.img-item img {
		width: 100%;
		height: 100%;
	}
	p {
		position: relative;
		font-size: 0.22rem;
		color: #555;
		line-height: 0.36rem;
		height: 0.72rem;
		margin: 0 0.18rem 0.3rem;
	}
	p span {
		position: absolute;
		bottom: 0;
	right: 0;
		color: #f34e0c;
		
	}
</style>
