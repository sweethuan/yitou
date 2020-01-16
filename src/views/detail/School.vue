<template>
	<div class="school">
		<nav-bar class="nav-bar">
			<div slot='left' @click="back"><img src="~assets/img/home/left_btn.png"></div>
			<div slot='center'>日本留学</div>
		</nav-bar>
		<school-tab @itemClick='itemClick'></school-tab>
		<scroll class="scroll">
			<div class="content">
						<school-intro class="content-item" :class="{active:current==0}" :info='intro1'></school-intro>
						<school-price class="content-item" :class="{active:current==1}" :price='price'></school-price>
						<school-japanese class="content-item" :class="{active:current==2}" :japanese='japanese'></school-japanese>
			<!-- 			<school-intro class="content-item" v-show="current==0"  :info='intro1'></school-intro>
						<school-price class="content-item" v-show="current==1"    :price='price'></school-price>
						<school-japanese class="content-item" v-show="current==2"   :japanese='japanese'></school-japanese> -->
					</div>
		</scroll>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavTab.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'

	import SchoolTab from './SchoolTab.vue'
	import SchoolIntro from './SchoolIntro.vue'
	import SchoolPrice from './SchoolPrice.vue'
	import SchoolJapanese from './SchoolJapanese.vue'

	import {
		getSchoolIntroData,
		getSchoolPriceData,
		getSchoolJapaneseData
	} from 'network/home.js'
	export default {
		name: 'School',
		components: {
			NavBar,
			Scroll,
			SchoolTab,
			SchoolIntro,
			SchoolPrice,
			SchoolJapanese
		},
		data() {
			return {
				current:0,
				intro1: null,
				price: null,
				japanese: null,
			}
		},
		created() {
			getSchoolIntroData().then(res => {
					this.intro1 = res.data
				}),
			getSchoolPriceData().then(res => {
				this.price = res.data.content
			}),
			getSchoolJapaneseData().then(res => {
				console.log(res.data)
				this.japanese = res.data
			})
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			itemClick(index){
				this.current = index
				console.log(index)
			}
		}
	}
</script>

<style scoped>
	.school {
		position: relative;
		font-size: 0.34rem;
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
	.content-item {
		display: none;
	}
	.active {
		display: block;
	}
	.scroll {
		position: absolute;
		left: 0;
		right: 0;
		top: 1.74rem;
		bottom: 0;
		background-color: #fff;
		z-index: 1;
	}
</style>
