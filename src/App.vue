<template>
    <div id="app">
        <loading  v-if="loading"></loading>
        <NavView v-show="headShow"></NavView>
        <transition name="fade-in">
            <keep-alive>
                <router-view class="router-view"></router-view>
            </keep-alive>
        </transition>
        <FooterView v-show="hideFooter"></FooterView>

    </div>
</template>
<script>
import NavView from './components/Nav.vue'
import FooterView from './components/Footer.vue'
import {mapGetters} from 'vuex'

export default {
        computed:mapGetters([
        'headShow',
        'loading',
        'hideFooter'
         ]),
    watch:{
        $route(to){
            var path = to.path.substring(1);
            console.log(path);
            this.headerChange(path);
            this.footerChange(path);
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
           },
           footerChange(path){
               if(path.indexOf("article") == -1){
                   this.$store.dispatch('SHOW_FOOTER')
               }
           }
        }
	}
</script>
<style scoped>
 @import "./assets/css/index.css";
 .fade-in-enter-active,.fade-in-live-active{
     transition:opacity .5s;
 }
 .fade-in-enter,.fade-in-live-active{
    opacity: 0;
 }
</style>