<template>
	<div class="school-price">
		<div><img src="~assets/img/home/school_ad_img2.png"></div>
		<div v-html="price"></div>
	</div>
</template>

<script>
	export default {
		name: 'SchoolPrice',
		props: ['price']
	}
</script>

<style scoped>
	
	.school-price >>> img {
		width: 100%;
	}
</style>
