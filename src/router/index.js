import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('views/home/home.vue')
const category = () => import('views/category/category.vue')
const shopcart = () => import('views/shopcart/shopcart.vue')
const profile = () => import('views/profile/profile.vue')
const Details = () => import('views/detail/Details.vue')
const School = () => import('views/detail/School.vue')
const Job = () => import('views/detail/job/Job.vue')
const Live = () => import('views/detail/live/Live.vue')
const Teacher = () => import('views/detail/teacher/Teacher.vue')

Vue.use(VueRouter)

const routes = [
	{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		component: home
	},
	{
		path: '/category',
		component: category
	},
	{
		path: '/shopcart',
		component: shopcart
	},
	{
		path: '/profile',
		component: profile
	},
	{
		path: '/details',
		component: Details
	},
	{
		path: '/school',
		component: School
	},
	{
		path: '/job',
		component: Job
	},
	{
		path: '/live',
		component: Live
	},
	{
		path: '/teacher',
		component: Teacher
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

export default router
