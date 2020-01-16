<template>
	<div class="swiper-container" :id="swipeid">
		<div class="swiper-wrapper">
			<slot name="swiper-con"></slot>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	import Swiper from "swiper";
	import "swiper/dist/css/swiper.min.css";

	export default {
		name: "swipers",
		props: ["swipeid", "autoPlay"],
		mounted() {
			//this.getswiper();
		},
		methods: {
			getswiper() {
				let obj = {
					loop: true,
					pagination: {
						el: ".swiper-pagination"
					}
				}
				if (this.autoPlay) {
					obj.autoplay = {
						delay : 2100,
						disableOnInteraction : false
					}
					
				}
				new Swiper("#" + this.swipeid, obj);
			}
		}
	};
</script>

<style scoped>
	
</style>
