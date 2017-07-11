/**
 * Created by Chris on 2017/7/4.
 */
import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import Column from './components/Column.vue'
import UserInfo from './components/UserInfo.vue'

export default[
    {
        path:'/home',
        component:Home
    },
    {
        path:'/follow',
        component:Follow
    },
    {
        path:'/column',
        component:Column
    },
    {
        path:"/user-info",
        component:UserInfo
    }
    ,
    {
        path:"/",
        redirect:"/home"
    }
]