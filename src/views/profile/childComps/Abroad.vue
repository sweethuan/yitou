<template>
	<div class="Abroad">
		<ul>
			<li v-for="item in abroad">
				<div class="city">{{item.name}}</div>
				<div class="cont">
					<div>{{item.schools}}</div>
					<div>{{item.schools_jp}}</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Abroad',
		props: ['abroad']
	}
</script>

<style scoped>
	ul {
		padding: 0.5rem 0.3rem;
	}
	li {
		display: flex;
		margin-bottom: 0.16rem;
		background: url(~assets/img/profile/about_bg.png) no-repeat;
		background-size: 100%;
	}
	.city {
		width: 0.94rem;
		line-height: 0.94rem;
		color: #fff;
		font-size: 0.28rem;
		background-color: #77b1f3;
		text-align: center;
	}
	.cont {
		width: 80%;
		font-size: 0.24rem;
		color: #000;
		padding-left: 0.24rem;
		padding-top: 0.08rem;
		line-height: 1.6;
	}
	.cont>div {
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>
