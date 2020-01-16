<template>
	<div class="school-tab">
		<div class='school-tab-item' 
		  v-for="(item,index) in lists"
			:class="{active:current==index}"
			@click="itemClick(index)"
			:key='index'>
			<span>{{item}}</span>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'SchoolTab',
		data() {
			return {
				lists:['留学介绍','游学费用','日语培训'],
				current: 0
			}
		},
		methods: {
			itemClick(index) {
				this.current = index
				this.$emit('itemClick',index)
			}
		}
	}
</script>

<style scoped>
	.school-tab {
		display: flex;
		position: relative;
		font-size: 0.26rem;
		color: #666;
		height: 0.8rem;
		line-height: 0.8rem;
		background-color: #fff;
		text-align: center;
		font-weight: 800;
		z-index: 10;
		box-sizing: content-box;
		border-bottom: 0.1rem solid #e6e7e5;
	}
	.school-tab-item {
		flex: 1;
	}
	.school-tab-item span {
		padding: 0 0.15rem 0.07rem ;
	}
	.active {
		color: #2b97ec;
	}
	.active span {
		border-bottom: 0.04rem solid #2b97ec;
	}
</style>
