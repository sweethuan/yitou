import {request} from './request.js'

export function getHomemultidata() {
	return request({
		url: '/home'
	})
}

export function getDetaildata() {
	return request({
		url: '/experience'
	})
}
export function getSchoolIntroData() {
	return request({
		url: '/intro'
	})
}
export function getSchoolPriceData() {
	return request({
		url: '/price'
	})
}
export function getSchoolJapaneseData() {
	return request({
		url: '/japanese'
	})
}
export function getSchoolJapanData() {
	return request({
		url: '/japan'
	})
}
export function getSchoolWorldData() {
	return request({
		url: '/world'
	})
}
export function getSchoolSceneData() {
	return request({
		url: '/scene'
	})
}
export function getSchoolYouData() {
	return request({
		url: '/you'
	})
}
export function getSchoolOutlookData() {
	return request({
		url: '/outlook'
	})
}
export function getSchoolHorizonData() {
	return request({
		url: '/horizon'
	})
}
export function getSchoolAbroadData() {
	return request({
		url: '/abroad'
	})
}

