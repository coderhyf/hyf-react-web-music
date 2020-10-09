import * as actionTypes from './constants';
// 接口
import {
  getSongCategory,
  getSongCategoryList
} from '@/service/songs';
// 封装的工具
import { handleSongsCategory } from '@/utils/handle-data';
// 歌曲目录
const changSongsListAction = res => ({
  type: actionTypes.CHANGE_CATEGORY_SONGS,
  categorySongs: res
})
export const getSongsListAction = page => {
  return (dispatch, getState) => {
    const name = getState().getIn(["songsReducer", "currentCategory"]);
    getSongCategoryList(name, page * actionTypes.PER_PAGE_NUMBER).then(res => {
      dispatch(changSongsListAction(res))
    })
  }
}
// 全部分类
const changeCategoryAction = res => ({
  type: actionTypes.CHANGE_CATEGORY,
  category: res
})
export const getSongCategoryAction = () => {
  return dispatch => {
    getSongCategory().then(res => {
      const categoryData = handleSongsCategory(res)
      dispatch(changeCategoryAction(categoryData))
    })
  }
}
export const changeCurrentCategoryAction = name => ({
  type: actionTypes.CHANGE_CURRENT_CATEGORY,
  currentCategory: name
})