/**
 * Created by Chris on 2017/7/10.
 */
import {
    HEAD_SHOW_SUCCESS,
    HEAD_SHOW_FAIL,
    LONGING_SHOW,
    LONGING_HIDE

} from './types'


const  state = {
    headShow:true,
    loading:false
}

const mutations={
    [HEAD_SHOW_SUCCESS](state){
        state.headShow=true;
    },
    [HEAD_SHOW_FAIL](state){
        state.headShow=false;
    },
    [LONGING_HIDE](state){
        state.loading=false
    },
    [LONGING_SHOW](state){
        state.loading=true;
    }
}
//
const getters={
    headShow(state){
        return state.headShow;
    },
    loading(state){
        return state.loading;
    }
}
export default {
    state,
    mutations,
    getters
}
