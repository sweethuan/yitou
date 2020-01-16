<template>
	<div class="job-japan">
		<div class="title">{{japan.title}}</div>
		<div class="lable">
			<span>作者:{{japan.name}}</span>
			<span>时间:{{japan.update_time | showDate}}</span>
			<span>浏览:{{japan.num}}次</span>
		</div>
		<div v-html="japan.content"></div>
	</div>
</template>

<script>
	import {dateFormat} from 'common/const.js'
	export default {
		name: 'JobJapan',
		props: ['japan'],
		filters: {
			showDate(value){
				const date = new Date(value * 1000)
				return dateFormat("YYYY-mm-dd", date)
			}
		}
	}
</script>

<style scoped>
	.job-japan {
		font-size: 0.3rem;
		padding: 0.1rem 0.3rem;
	}
	.job-japan >>> img{
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
	}
	.lable span:nth-child(2) {
		margin: 0 0.16rem;
	}
</style>
