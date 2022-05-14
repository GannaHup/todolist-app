import {
  GET_START_DATA,
  SET_DATA_FINISH,
  SET_DATA_UNFINISH,
  SET_CURRENT_PAGE,
  SET_DETAIL_ID,
  SHOW_MODAL_DETAIL
} from '../constant/index'

const initialState = {
  loading: false,
  idDetail: 0,
  dataFinish: [],
  dataUnfinish: [],
  currentPage: 'list',
  showModalDetail: false,
  error: null
}

export default function todolistReducer (state = initialState, action) {
  const { type, data, currentPage, idDetail, value } = action
  switch (type) {
    case GET_START_DATA:
      return {
        ...state,
        loading: true,
        dataFinish: [],
        dataUnfinish: [],
        error: null
      }
    case SET_DATA_FINISH:
      return {
        ...state,
        loading: false,
        dataFinish: data
      }
    case SET_DATA_UNFINISH:
      return {
        ...state,
        loading: false,
        dataUnfinish: data
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: currentPage
      }
    case SET_DETAIL_ID:
      return {
        ...state,
        idDetail: idDetail
      }
    case SHOW_MODAL_DETAIL:
      return {
        ...state,
        showModalDetail: value
      }
    default:
      return state
  }
}
