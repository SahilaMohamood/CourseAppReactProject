import { COURSE_ACTION_TYPES } from "../actions/course-action";

const INITIAL_STATE ={
    list:[]
}


export const course = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case COURSE_ACTION_TYPES.FETCH_ALL_COURSE:
            return{
                ...state,
                list:[...action.payload]
            }
        case COURSE_ACTION_TYPES.CREATE_COURSE:
            return{
                ...state,
                list :[...state.list,action.payload]
            }
        case COURSE_ACTION_TYPES.DELETE_COURSE:
            return{
                    ...state,
                    list : state.list.filter(x=>x.id !== action.payload)
                }
        default:
            return state
    }
}