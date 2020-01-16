<template>
	<div id="home">
		<nav-tab class="nav-bar"><div slot='center'>颐投国际</div></nav-tab>
		<scroll class="content">
			<banner :banners="banners"></banner>
			<recommend-view></recommend-view>
			<news></news>
			<experience :experience='experience'></experience>
			<plan :outlook="outlook"></plan>
			<ad></ad>
			<train :japanese='japanese'></train>
			<life :scene='scene' @click.native='lifeClick'></life>
		</scroll>
	</div>
</template>

<script>
	import NavTab from 'components/common/navbar/NavTab.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'
	
	import Banner from './childComps/Banner.vue'
	import RecommendView from './childComps/RecommendView.vue'
	import News from './childComps/News.vue'
	import Experience from './childComps/Experience.vue'
	import Plan from './childComps/Plan.vue'
	import Ad from './childComps/Ad.vue'
	import Train from './childComps/Train.vue'
	import Life from './childComps/Life.vue'
	
	import {getHomemultidata} from 'network/home.js'

	export default {
		name: 'home',
		data() {
			return {
				banners: [],
				experience: {},
				outlook: [],
				japanese: [],
				scene: []
			}
		},
		components: {
			NavTab,
			Scroll,
			Banner,
			RecommendView,
			News,
			Experience,
			Plan,
			Ad,
			Train,
			Life
		},
		created() {
			getHomemultidata().then(res => {
				this.banners = res.data.banner
				this.experience = res.data.experience
				this.outlook = res.data.outlook
				this.japanese = res.data.japanese
				this.scene = res.data.scene
			})
		},
		methods: {
			lifeClick(){
				this.$router.push('/live')
			}
		}
	}
</script>

<style scoped="scoped">
	#home {
		position: relative;
		padding-bottom: 1.98rem;
		background-color: #e6e7e5;
		height: 100vh;
	}
	.nav-bar {
		position: relative;
		z-index: 9;
		font-size: 0.36rem;
		color: #fff;
		font-weight: bold;
		background-color: #1682d6;
	}
	.content {
		position: absolute;
		top: 0.88rem;
		bottom: 0.98rem;
		left: 0;
		right: 0;
		overflow: hidden;
	}
</style>
