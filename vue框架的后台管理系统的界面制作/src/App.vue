<template>
  <div id="app">
   <work-header></work-header>
   <work-asides></work-asides>
   <router-view></router-view>
  
   <app-footer></app-footer>
  </div>
</template>

<script>

import workHeader from './components/workHeader'
import workAsides from './components/workAsides'

export default {
  name: 'App',
  components: {
    workHeader,workAsides
  }
};
</script>

<style>
	#app{
		background: url(./assets/flowers.jpg) no-repeat;
  		background-size: 100% 100%;
	}
</style>
