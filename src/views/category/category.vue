<template>
	<div class="category">
		<nav-bar class="nav-bar">
			<div slot='center'>我要报名</div>
		</nav-bar>
		<scroll class="content">
			<img src="~assets/img/cart/signup_ad_img.jpg">
			<div class="title1">赴 日 本 留 学 基 本 流 程</div>
			<ul>
				<li>
					<div><img src="~assets/img/cart/live_future_img1.png"></div>
					<div>在颐投教育先进行日语学习，参加JLPT考试 或J-TEST考试，达到初级能力水平</div>
				</li>
				<li>
					<div><img src="~assets/img/cart/live_future_img2.png"></div>
					<div>在颐投教育先进行日语学习，参加JLPT考试 或J-TEST考试，达到初级能力水平</div>
				</li>
				<li>
					<div><img src="~assets/img/cart/live_future_img3.png"></div>
					<div>在颐投教育先进行日语学习，参加JLPT考试 或J-TEST考试，达到初级能力水平</div>
				</li>
			</ul>
			<div class="title2">报名信息</div>
			<div class="sigin">
				<div>真实姓名</div>
				<div><input type="text" placeholder="请输入你的真实姓名" v-model="user.name" @blur="judgeName"></div>
			</div>
			<div v-if="user.isShow1">
				<p v-if="!user.isShow" class="error">请输入正确的姓名(2~30位)</p>
				<p v-else class="righta">姓名正确</p>
			</div>

			<div class="sigin">
				<div>联系电话</div>
				<div><input type="text" placeholder="请输入你的联系方式" v-model="tel.num" @blur="judgeTel"></div>
			</div>
			<div v-if="tel.isShow1">
				<p v-if="!tel.isShow" class="error">请输入正确的联系方式(11位)</p>
				<p v-else class="righta">号码正确</p>
			</div>

			<div class="sigin">
				<div>报名学校</div>
				<div><input type="text" placeholder="请填写你要报名的院校" v-model="school.name" @blur="judgeSchool"></div>
			</div>
			<div v-if="school.isShow1">
				<p v-if="!school.isShow" class="error">请输入正确的学校(2~30位)</p>
				<p v-else class="righta">学校正确</p>
			</div>

			<div class="sigin">
				<div>报名专业</div>
				<div><input type="text" placeholder="请填写你要报考的专业" v-model="subject.name" @blur="judgeSubject"></div>
			</div>
			<div v-if="subject.isShow1">
				<p v-if="!subject.isShow" class="error">请输入正确的专业(2~30位)</p>
				<p v-else class="righta">专业正确</p>
			</div>
			<div class="subim" @click="subimt">提交信息</div>
			<div class="no">1</div>
		</scroll>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavTab.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'
	import axios from 'axios'
	export default {
		name: 'category',
		components: {
			NavBar,
			Scroll
		},
		data() {
			return {
				user: {
					name: '',
					isShow: false,
					isShow1: false,
					Reg: /^(([a-zA-Z+\.?\·?a-zA-Z+]{2,30}$)|([\u4e00-\u9fa5+\·?\u4e00-\u9fa5+]{2,30}$))/
				},
				tel: {
					num: '',
					isShow: false,
					isShow1: false,
					Reg: /^1[3|4|5|7|8]\d{9}$/
				},
				school: {
					name: '',
					isShow: false,
					isShow1: false,
					Reg: /^(([a-zA-Z+\.?\·?a-zA-Z+]{2,30}$)|([\u4e00-\u9fa5+\·?\u4e00-\u9fa5+]{2,30}$))/
				},
				subject: {
					name: '',
					isShow: false,
					isShow1: false,
					Reg: /^(([a-zA-Z+\.?\·?a-zA-Z+]{2,30}$)|([\u4e00-\u9fa5+\·?\u4e00-\u9fa5+]{2,30}$))/
				}
			}
		},
		methods: {
			judgeName() {
				this.user.isShow1 = true
				if (this.user.name.length !== 0 && this.user.Reg.test(this.user.name)) {
					this.user.isShow = true
				} else {
					this.user.isShow = false
				}
			},
			judgeTel() {
				this.tel.isShow1 = true
				if (this.tel.num.length !== 0 && this.tel.Reg.test(this.tel.num)) {
					this.tel.isShow = true
				} else {
					this.tel.isShow = false
				}
			},
			judgeSchool() {
				this.school.isShow1 = true
				if (this.school.name.length !== 0 && this.school.Reg.test(this.school.name)) {
					this.school.isShow = true
				} else {
					this.school.isShow = false
				}
			},
			judgeSubject() {
				this.subject.isShow1 = true
				if (this.subject.name.length !== 0 && this.subject.Reg.test(this.subject.name)) {
					this.subject.isShow = true
				} else {
					this.subject.isShow = false
				}
			},
			subimt() {
				if (this.user.isShow && this.tel.isShow && this.school.isShow && this.subject.isShow) {
					axios.post('http://yitou.liang520.cn/post_1', {
						name: this.user.name,
						tel: this.tel.num,
						school: this.school.name,
						subject: this.subject.name
					}).then(res => {
						console.log(res)
						alert(res.data.msg)
						if (res.data.code == 1) {
							this.$router.push('/home')
						}
					})
				}
			}
		}
	}
</script>

<style scoped>
	.category {
		position: relative;
		height: 100vh;
	}

	.nav-bar {
		height: 0.88rem;
		line-height: 0.88rem;
		background-color: #1682d6;
		font-size: 0.36rem;
		color: #fff;
		font-weight: 900;
	}

	.title1,
	.title2 {
		text-align: center;
		font-size: 0.3rem;
		font-weight: 800;
		line-height: 0.8rem;
		color: #000;
	}

	.title1 {
		background: url(~assets/img/cart/signup_tit_img1.png) no-repeat center;
		background-size: 5.42rem;
	}

	ul {
		font-size: 0.24rem;
		line-height: 1.5;
		color: #000000;
		padding: 0.3rem;
	}

	li {
		display: flex;
		background-color: #F0F0F0;
		margin-bottom: 0.2rem;
		border-radius: 0.06rem;
		padding: 0.3rem;
	}

	li img {
		width: 1.22rem;
		height: 1.22rem;
	}

	li>div:last-child {
		padding-top: 0.1rem;
		padding-left: 0.18rem;
	}

	.title2 {
		background: url(~assets/img/cart/signup_tit_img.png) no-repeat center;
		background-size: 4.06rem;
	}

	.sigin {
		display: flex;
		background-color: #E6E7E5;
		line-height: 0.8rem;
		border-radius: 0.1rem;
		font-size: 0.28rem;
		margin: 0.3rem;
		overflow: hidden;
	}

	.sigin>div:first-child {
		width: 1.7rem;
		background: url(~assets/img/cart/signup_item_img.png) no-repeat;
		background-size: 100%;
		text-align: center;
		color: #fff;
	}

	input {
		border: 0;
		outline: none;
		padding-left: 0.2rem;
		background-color: transparent;
	}

	.subim {
		background-color: #569fef;
		color: #fff;
		height: .8rem;
		line-height: .8rem;
		text-align: center;
		border-radius: .1rem;
		font-size: .3rem;
		margin: 0 0.3rem;
	}

	.no {
		text-indent: -999px;
		height: 10rem;
		width: 100%;
	}

	.content {
		position: absolute;
		left: 0;
		right: 0;
		top: 0.88rem;
		bottom: 1rem;
		background-color: #fff;
		z-index: 1;
		overflow: hidden;
	}

	.content>img {
		width: 100%;
		margin-bottom: 0.3rem;
	}

	p {
		padding: 0 0.3rem;
	}

	.righta {
		font-size: 0.2rem;
		color: green;
	}

	.error {
		font-size: 0.2rem;
		color: red;
	}
</style>
