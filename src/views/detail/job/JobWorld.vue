<template>
	<div class="job-world">
		<div class="title">{{world.title}}</div>
		<div class="lable">
			<span>作者:{{world.name}}</span>
			<span>时间:{{world.update_time | showDate}}</span>
			<span>浏览:{{world.num}}次</span>
		</div>
		<div v-html="world.content"></div>
	</div>
</template>

<script>
	import {dateFormat} from 'common/const.js'
	export default {
		name: 'JobWorld',
		props: ['world'],
		filters: {
			showDate(value){
				const date = new Date(value * 1000)
				return dateFormat("YYYY-mm-dd", date)
			}
		}
	}
</script>

<style scoped>
	.job-world {
		font-size: 0.3rem;
		padding: 0.1rem 0.3rem;
	}
	.job-world >>> img{
		width: 100%;
	}
	.title {
		width: 100%;
		font-size: .38rem;
		font-weight: 600;
		text-align: center;
		margin-bottom: .15rem;
	}
	.lable {
		text-align: center;
		font-size: 0.22rem;
		color: #999;
		margin-bottom: 0.2rem;
	}
	.lable span:nth-child(2) {
		margin: 0 0.16rem;
	}
</style>
