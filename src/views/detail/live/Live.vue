<template>
	<div class="live">
		<nav-bar class="nav-bar">
			<div slot='left' @click="back"><img src="~assets/img/home/left_btn.png"></div>
			<div slot='center'>留学生活</div>
		</nav-bar>
		<list-bar>
			<list-bar-item v-for="(item,index) in lists" @click.native='itemClick(index)' :class="{current:current==index}" :key='index'>{{item}}</list-bar-item>
		</list-bar>
		<scroll class="content">
			<scene :scene='scene' v-show="current==0"></scene>
			<future v-show="current==1"></future>
			<excellent :you='you' v-show="current==2"></excellent>
		</scroll>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavTab.vue'
	import ListBar from 'components/content/listbar/ListBar.vue'
	import ListBarItem from 'components/content/listbar/ListBarItem.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'
	
	import Scene from './Scene.vue'
	import Future from './Future.vue'
	import Excellent from './Excellent.vue'
	
	import {
		getSchoolSceneData,
		getSchoolYouData
	} from 'network/home.js'
	export default {
		name: 'Live',
		components: {
			NavBar,
			ListBar,
			ListBarItem,
			Scroll,
			Scene,
			Future,
			Excellent
		},
		data(){
			return {
				lists: ['留学实况','学子前程','优秀学员'],
				current: 0,
				scene: null,
				you: null
			}
		},
		created() {
			getSchoolSceneData().then(res => {
				this.scene = res.data
			}),
			getSchoolYouData().then(res => {
				console.log(res)
				this.you = res.data
			})
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			itemClick(index) {
				this.current = index
			}
		}
	}
</script>

<style scoped>
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
	.current {
		background-color: #2b97ec;
		color: #fff;
	}
	.content {
		position: absolute;
		left: 0;
		right: 0;
		top: 2.48rem;
		bottom: 0;
		background-color: #fff;
		z-index: 1;
		overflow: hidden;
	}
</style>
