<template>
    <div id='home'>
        <div class="content">
            <Slider></Slider>
            <div class="newsList">
                <ul>
                    <li v-for="item in arrList">
                        <router-link :to="'/article/'+item.id">
                            <h2>{{item.title}}</h2>
                            <p>{{item.detail}}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
 </div>

</template>

<script>
import Slider from './Slider.vue'
	export default {
		data(){
			return {
				arrList:[]
			}
		},
		components:{
			Slider
		},
        mounted(){
		    //默认执行方法
            this.getData();

        },
		methods:{
			//获取数据
            getData(){
                //jsonp写法
//                this.$jsonp('https://api.douban.com/v2/book/1220562',null, function (err, data) {
//                    if (err) {
//                        console.error(err.message);
//                    } else {
//                        console.log(data);
//                    }
//                });
                var that = this;
                this.$http.get("src/data/index.data").then(function (res) {
                   // console.log(res);
                    that.arrList = res.data;
//                    console.log(that.arrList);
                }).catch(function (err) {
                    console.log('首页请求失败',err)
                });
            }

		}
	}

</script>