<template>
	<div class="detail">
		<nav-bar class="nav-bar">
			<div slot='left' @click="back"><img src="~assets/img/home/left_btn.png" ></div>
			<div slot='center'>游学体验</div>
		</nav-bar>
		<scroll class="scroll">
			<div v-html="content" class="content"></div>
		</scroll>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavTab.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'
	import {getDetaildata} from 'network/home.js'
	export default {
		name: 'Details',
		data(){
			return {
				content: null
			}
		},
		components: {
			NavBar,
			Scroll
		},
		created() {
			getDetaildata().then(res => {
				console.log(res.data)
				this.content = res.data.content
			})
		},
		methods: {
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	.detail {
		position: relative;
		height: 100vh;
	}
	.nav-bar {
		position: relative;
		z-index: 19;
		font-size: 0.34rem;
		color: #fff;
		line-height: 0.88rem;
		background-color: #1682d6;
	}
	.nav-bar img {
		height: 0.30rem;
	}
	
	.content {
		width: 100%;
		font-size: 0.3rem;
	}
	.content >>> img{
		width: 100% !important;
	}
	.scroll {
		position: absolute;
		top: 0.88rem;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 9;
		background-color: #fff;
	}
</style>
