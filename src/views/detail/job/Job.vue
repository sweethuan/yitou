<template>
	<div class="job">
		<nav-bar class="nav-bar">
			<div slot='left' @click="back"><img src="~assets/img/home/left_btn.png"></div>
			<div slot='center'>毕业就业</div>
		</nav-bar>
		<list-bar>
			<list-bar-item v-for="(item,index) in lists" @click.native='itemClick(index)' :class="{current:current==index}" :key='index'>{{item}}</list-bar-item>
		</list-bar>
		<scroll class="content">
			<job-japan :japan='japan' v-show="current==0"></job-japan>
			<job-world :world='world' v-show="current==1"></job-world>
		</scroll>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavTab.vue'
	import ListBar from 'components/content/listbar/ListBar.vue'
	import ListBarItem from 'components/content/listbar/ListBarItem.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'

	import JobJapan from './JobJapan.vue'
	import JobWorld from './JobWorld.vue'

	import {
		getSchoolJapanData,
		getSchoolWorldData
	} from 'network/home.js'
	export default {
		name: 'Job',
		components: {
			NavBar,
			ListBar,
			ListBarItem,
			Scroll,
			JobJapan,
			JobWorld
		},
		data() {
			return {
				lists: ['日本就业', '全球展望'],
				current: 0,
				japan: null,
				world: null
			}
		},
		created() {
			getSchoolJapanData().then(res => {
				this.japan = res.data
			}),
			getSchoolWorldData().then(res => {
				console.log(res.data)
				this.world = res.data
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
	.job {
		position: relative;
		height: 100vh;
	}
	.content {
		position: absolute;
		left: 0;
		right: 0;
		top: 2.48rem;
		bottom: 0;
		background-color: #fff;
		z-index: 1;
		
	}
</style>
