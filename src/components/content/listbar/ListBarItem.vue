<template>
	<div class="list-bar-item">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'ListBarItem'
	}
</script>

<style scoped>
	.list-bar-item {
		flex: 1;
		text-align: center;
		color: #2b97ec;
		background-color: #fff;
	}
	.current {
		background-color: #2b97ec;
		color: #fff;
	}
</style>
