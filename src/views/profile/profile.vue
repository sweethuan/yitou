<template>
  <div>
    <nav-bar class="nav-bar"><div slot='center'>关于颐投</div></nav-bar>
		<list-bar>
			<list-bar-item v-for="(item,index) in lists" @click.native='itemClick(index)' :class="{current:current==index}" :key='index'>{{item}}</list-bar-item>
		</list-bar>
		<div>
			<intro v-show="current==0"></intro>
			<abroad :abroad='abroad' v-show="current==1"></abroad>
		</div>
  </div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavTab.vue'
	import ListBar from 'components/content/listbar/ListBar.vue'
	import ListBarItem from 'components/content/listbar/ListBarItem.vue'
	
	import Abroad from './childComps/Abroad.vue'
	import Intro from './childComps/Intro.vue'
	import {getSchoolAbroadData} from 'network/home.js'
  export default {
    name: 'profile',
		data(){
			return {
				lists: ['颐投介绍','留学通'],
				current: 0,
				abroad: null
			}
		},
		created() {
			getSchoolAbroadData().then(res => {
				console.log(res)
				this.abroad = res.data
			})
		},
		components: {
			NavBar,
			ListBar,
			ListBarItem,
			Abroad,
			Intro
		},
		methods: {
			itemClick(index) {
				this.current = index
			}
		}
  }
</script>

<style scoped> 
	.nav-bar {
		height: 0.88rem;
		line-height: 0.88rem;
		background-color: #1682d6;
		font-size: 0.36rem;
		color: #fff;
		font-weight: 900;
	}
	.current {
		background-color: #2b97ec;
		color: #fff;
	}
</style>
