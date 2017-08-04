/**
 * Created by Chris on 2017/7/10.
 */
import {
    HEAD_SHOW_SUCCESS,
    HEAD_SHOW_FAIL,
    LONGING_SHOW,
    LONGING_HIDE,
    HIDE_FOOTER,
    SHOW_FOOTER

} from './types'


const  state = {
    headShow:true,
    loading:false,
    hideFooter:true
}

const mutations={
    [HEAD_SHOW_SUCCESS](state){
        state.headShow = true;
    },
    [HEAD_SHOW_FAIL](state){
        state.headShow = false;
    },
    [LONGING_HIDE](state){
        state.loading = false
    },
    [LONGING_SHOW](state){
        state.loading = true;
    },
    [HIDE_FOOTER](state){
        state.hideFooter = false;
    },
    [SHOW_FOOTER](state){
        state.hideFooter = true;
    }
}
//
const getters={
    headShow(state){
        return state.headShow;
    },
    loading(state){
        return state.loading;
    },
    hideFooter(state){
        return state.hideFooter
    }
}
export default {
    state,
    mutations,
    getters
}
