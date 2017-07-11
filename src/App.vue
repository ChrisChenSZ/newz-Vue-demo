<template>
    <div id="app">
        <loading  v-if="loading"></loading>
       <NavView v-show="headShow"></NavView>
       <router-view class="router-view"></router-view>
        <FooterView></FooterView>

    </div>
</template>
<script>
import NavView from './components/Nav.vue'
import FooterView from './components/Footer.vue'


import {mapGetters} from 'vuex'


export default {
        computed:mapGetters([
        'headShow',
        'loading'
         ]),
    watch:{
        $route(to){
            var path = to.path.substring(1);
            console.log(path);
            this.headerChange(path);
                }
        },
    components:{
           NavView,
           FooterView
		},
    methods:{
           headerChange(path){
               if(path == "user-info"){
                   this.$store.dispatch('SHOW_HEAD_FAIL')
               }
           }
        }
	}
</script>
<style>
 @import "./assets/css/index.css";
</style>