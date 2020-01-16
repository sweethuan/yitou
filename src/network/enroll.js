import {request1} from './request.js'

export function postEnrollData() {
	return request1({
		url: '/post_1'
	})
}