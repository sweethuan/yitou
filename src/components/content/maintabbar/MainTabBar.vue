<template>
  <tab-bar>
    <tab-bar-item path='/home' activeColor="#1682d6">
      <img src="~assets/img/tabbar/home.gif" slot='icon'>
      <img src="~assets/img/tabbar/home_active.gif" slot='icon_active'>
      <div slot='text'>颐投首页</div>
    </tab-bar-item>
    <tab-bar-item path='/category' activeColor="#1682d6">
      <img src="~assets/img/tabbar/category.gif" slot='icon' >
      <img src="~assets/img/tabbar/category_active.gif" slot='icon_active' >
      <div slot='text'>我要报名</div>
    </tab-bar-item>
    <tab-bar-item path='/shopcart' activeColor="#1682d6">
      <img src="~assets/img/tabbar/shopcart.gif" slot='icon' >
      <img src="~assets/img/tabbar/shopcart_active.gif" slot='icon_active' >
      <div slot='text'>联系我们</div>
    </tab-bar-item>
    <tab-bar-item path='/profile' activeColor="#1682d6">
      <img src="~assets/img/tabbar/profile.gif" slot='icon' >
      <img src="~assets/img/tabbar/profile_active.gif" slot='icon_active' >
      <div slot='text'>关于颐投</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar.vue'
  import TabBarItem from 'components/common/tabbar/TaBarItem.vue'

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
</style>
