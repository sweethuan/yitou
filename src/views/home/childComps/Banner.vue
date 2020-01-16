<template>
	<swipers swipeid="banner" ref="swipers" :autoPlay='true'>
		<div class="swiper-slide" v-for="(item,index) in banners" :key='index' slot="swiper-con">
			<img :src="item.img" @load="imgLoad">
		</div>
	</swipers>
</template>

<script>
	import swipers from 'components/common/swiper/swipers.vue'
	export default {
		name: 'Banner',
		components: {
			swipers
		},
		data(){
			return {
				num: 1
				
			}
		},
		props: {
			banners: {
				type: Array,
				default () {
					return []
				}
			}
		},
	
		methods: {
			imgLoad () {
				this.num++
				if (this.num == this.banners.length ) {
					
					this.$refs.swipers.getswiper()
				}
			}
		}
	}
</script>

<style scoped>
	img {
		vertical-align: middle;
		width: 100%;
	}
</style>
