<template>
	<div class="plan">
		<div class="title">名师规划</div>
		<swipers swipeid="plan" ref="swipers" :autoPlay='false'>
			<!-- <div class="swiper-slide" v-for="(item,index) in outlook" :item='item' slot="swiper-con">
				<img :src="item.img" @load="imgLoad">
			</div> -->
			<plan-item @imgload='imgLoad' @click.native='PlanItemClick' v-for="(item,index) in outlook" :key='index' :item='item' slot="swiper-con"></plan-item>
		</swipers>
	</div>
</template>

<script>
	import swipers from 'components/common/swiper/swipers.vue'
	import PlanItem from './PlanItem.vue'
	export default {
		name: 'Plan',
		components: {
			swipers,
			PlanItem
		},
		data() {
			return {
				num: 1
			}
		},
		props: {
			outlook: {
				type: Array,
				default () {
					return []
				}
			}
		},
		/* mounted() {
			this.$refs.swipers.getswiper()
		} */
		methods: {
			imgLoad() {
				this.num++
				if (this.num == this.outlook.length ) {
					
					this.$refs.swipers.getswiper()
				}
			},
			PlanItemClick(){
				this.$router.push('/teacher')
			}
		}
	}
</script>

<style scoped>
	.plan {
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
		border-bottom: 1px solid #f0f0f0;
	}

	img {
		width: 100%;
		vertical-align: middle;
	}
	
	#plan>>>.swiper-pagination>.swiper-pagination-bullet {
		width: 0.15rem;
		height: 0.08rem;
		background-color: #848484;
		border-radius: 0.04rem;
	}
	#plan>>>.swiper-pagination>.swiper-pagination-bullet-active {
		width: 0.32rem;
		background-color: #fa955d;
	}
	
</style>
