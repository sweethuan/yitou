<template>
	<div class="teacher">
		<nav-bar class="nav-bar">
			<div slot='left' @click="back"><img src="~assets/img/home/left_btn.png"></div>
			<div slot='center'>名师规划</div>
		</nav-bar>
		<list-bar>
			<list-bar-item v-for="(item,index) in lists" @click.native='itemClick(index)' :class="{current:current==index}" :key='index'>{{item}}</list-bar-item>
		</list-bar>
		<scroll class="content">
			<plan-item v-for="(item,index) in items" :key='index' :flag='true' :item='item' v-show="current==0"></plan-item>
			<div class="horizon" v-show="current==1">
				<horizon-item v-for="(item,index) in horizon" :key='index' :item='item'></horizon-item>
			</div>
		</scroll>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavTab.vue'
	import ListBar from 'components/content/listbar/ListBar.vue'
	import ListBarItem from 'components/content/listbar/ListBarItem.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'
	
	import PlanItem from 'views/home/childComps/PlanItem.vue'
	import HorizonItem from '../horizon/HorizonItem.vue'
	import { 
		getSchoolOutlookData,
		getSchoolHorizonData
	} from 'network/home.js'
	
	export default {
		name: 'Teacher',
		components: {
			NavBar,
			ListBar,
			ListBarItem,
			Scroll,
			PlanItem,
			HorizonItem
		},
		data(){
			return {
				lists: ['名师展望','专业视界'],
				current: 0,
				items: null,
				horizon: null
			}
		},
		created() {
			getSchoolOutlookData().then(res => {
				this.items = res.data
			}),
			getSchoolHorizonData().then(res => {
				console.log(res.data)
				this.horizon = res.data
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
	.teacher {
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
	.current {
		background-color: #2b97ec;
		color: #fff;
	}
	.horizon {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding:  0.3rem;
	}
	.content {
		position: absolute;
		left: 0;
		right: 0;
		top: 2.48rem;
		bottom: 0;
		background-color: #E4E5E3;
		z-index: 1;
		overflow: hidden;
	}
</style>
