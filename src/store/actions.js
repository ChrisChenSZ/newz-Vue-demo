/**
 * Created by Chris on 2017/7/10.
 */
import * as types from './types'

export default {
   SHOW_HEAD_SUCC:({commit})=>{
       commit(types.HEAD_SHOW_SUCCESS);
   },
   SHOW_HEAD_FAIL:({commit})=>{
       commit(types.HEAD_SHOW_FAIL);
   },
   LOADING_SHOW:({commit})=>{
       commit(types.LONGING_SHOW)
   } ,
   LOADING_HIDE:({commit})=>{
       commit(types.LONGING_HIDE)
   },
   HIDE_FOOTER:({commit})=>{
       commit(types.HIDE_FOOTER)
   } ,
   SHOW_FOOTER:({commit})=>{
       commit(types.SHOW_FOOTER)
   }
}