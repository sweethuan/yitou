<template>
	<div class="nav-bar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default {
		name: 'NavTab'
	}
</script>

<style scoped>
	.nav-bar {
		display: flex;
		height: 0.88rem;
		line-height: 0.88rem;
		text-align: center;
	}
	.left,
	.right {
		width: 1.2rem;
	}
	.center {
		flex: 1;
	}
</style>
