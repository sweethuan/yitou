<template>
	<div id="app">
		<router-view></router-view>
		<main-tab-bar></main-tab-bar>
	</div>
</template>

<script>
	import 'assets/js/rem.js'
	import MainTabBar from 'components/content/maintabbar/MainTabBar.vue'
	
	export default {
		name: 'App',
		components: {
			MainTabBar
		}
	}
</script>

<style>
	@import url("assets/css/base.css"); 
	
	
</style>
