<template>
	<div class="container">
		<div class="list-bar">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ListBar'
	}
</script>

<style scoped>
	.container {
		position: relative;
		z-index: 19;
		padding: 0.3rem 0.75rem;
		background-color: #fff;
	}
	.list-bar {
		display: flex;
		
		border-bottom: 1px solid red;
		font-size: 0.32rem;
		height: 1rem;
		line-height: 0.92rem;
		border: 0.02rem solid #2b97ec;
		border-radius: 0.46rem;
		overflow: hidden;
	}
</style>
