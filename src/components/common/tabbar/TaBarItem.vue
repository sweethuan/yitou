<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="icon"></slot>
    <slot v-else name="icon_active"></slot>
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data(){
      return {
        // isActive: true
      }
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) != -1
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    methods: {
      itemClick(){
        // console.log(this.path)
       // this.$router.push(this.path)
				this.$router.currentRoute.path == this.path || this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
 .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 0.98rem;
		font-size: 0.22rem;
		font-weight: bold;
		color: #949191;
  }
  .tab-bar-item img{
    width: 0.48rem;
    height: 0.48rem;
		margin: 0.06rem 0;
  }
 
</style>
