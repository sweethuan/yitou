<template>
	<div class="school-intro">
		<div class="imgs"><img src="~assets/img/home/school_ad_img1.png"></div>
		<div class="info" v-html="info.intro.intro"></div>
		<div>
			<div class="shool-item" v-for="(item,index) in info.list" :key='index'>
				<div class="fl1"><img :src="item.img"></div>
				<div class="fr">
					<div class="title"><span>{{index + 1}}</span>{{item.name}}</div>
					<p>{{item.intro}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SchoolIntro',
		props: ['info']
	}
</script>

<style scoped>
	.imgs img {
		width: 100%;
		margin-bottom: 0.48rem;
	}

	.info {
		padding: 0 0.3rem;
		border-bottom: .1rem solid #e6e7e5;
	}

	.shool-item {
		display: flex;
		padding: 0.16rem 0.3rem;
		border-bottom: .1rem solid #e6e7e5;
	}

	.shool-item .fl1 {
		width: 1.76rem;
		height: 2.18rem;
		margin-right: 0.1rem;
	}

	.shool-item .fl1 img {
		height: 100%;
		width: 100%;
	}
	.shool-item .fr {
		flex: 1;
	}
	.fr .title {
		height: .48rem;
		line-height: .48rem;
		font-size: .26rem;
		font-weight: 500;
		color: #000;
		margin-bottom: .1rem;
		background: url(~assets/img/home/school_list_bg.png) no-repeat;
		background-size: 100%;
	}

	.fr .title span {
		vertical-align: middle;
		color: #345c8d;
		font-size: .4rem;
		font-weight: 600;
		margin-right: .1rem;
		margin-left: .1rem;
	}

	.fr p {
		font-size: .2rem;
		color: #adadad;
		line-height: 1.5;
	}
</style>
