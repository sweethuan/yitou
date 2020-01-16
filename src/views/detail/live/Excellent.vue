<template>
	<div>
		<excellent-item v-for="(item,index) in you" :item='item' :key="index"></excellent-item>
	</div>
</template>

<script>
	import ExcellentItem from './ExcellentItem.vue'
	export default {
		name: 'Excellent',
		props: ['you'],
		components: {
			ExcellentItem
		}
	}
</script>

<style scoped>
	
</style>
