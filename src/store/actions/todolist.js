import {
  GET_START_DATA, SET_CURRENT_PAGE, SET_DATA_FINISH, SET_DATA_UNFINISH, SET_DETAIL_ID, SHOW_MODAL_DETAIL,
} from "../constant/index"
import axios from "axios"

export const getInitData = () => {
  return (dispatch) => {
    dispatch(getStartData())
    axios
      .get("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list")
      .then(async (res) => {
        const { data } = res
        if (data && data.length > 0) {
          const dataUnfinish = data.filter(item => item.status === 0)
          const dataFinish = data.filter(item => item.status === 1)
  
          dispatch(setDataFinish(dataFinish))
          dispatch(setDataUnfinish(dataUnfinish))
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}


export const getStartData = () => ({
  type: GET_START_DATA
})

export const setDataFinish = (data) => ({
  type: SET_DATA_FINISH,
  data: data
})

export const setDataUnfinish = (data) => ({
  type: SET_DATA_UNFINISH,
  data: data
})

export const setCurrentPage = (value) => ({
  type: SET_CURRENT_PAGE,
  currentPage: value
})

export const setDetailID = (id) => ({
  type: SET_DETAIL_ID,
  idDetail: id
})

export const setShowModalDetail = (value) => ({
  type: SHOW_MODAL_DETAIL,
  value: value
})
