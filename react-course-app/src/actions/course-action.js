import api from "./api"

export const COURSE_ACTION_TYPES ={
    CREATE_COURSE : "CREATE_COURSE",
    // UPDATE_COURSE : "UPDATE_COURSE",
    DELETE_COURSE : "DELETE_COURSE",
    FETCH_ALL_COURSE : "FETCH_ALL_COURSE"
}

const formatData = data =>({
    ...data
})

export const fetchAll = ()=> dispatch =>{
    api.course().fetchAll()
    .then(
        response =>{
            console.log(response)
            dispatch({
                type:COURSE_ACTION_TYPES.FETCH_ALL_COURSE,
                payload:response.data
            })

        }
    )
    .catch(err => console.log(err))
    
}

export const create = (data, onSuccess) => dispatch=>{
    // data=formatData(data)
    api.course().create(data)
    .then(response=>{
        dispatch({
            type:COURSE_ACTION_TYPES.CREATE_COURSE,
            payload: response.data
        })
        onSuccess()
    })
    .catch(err => console.log(err))
}

export const deleteCourse = (id,data, onSuccess) => dispatch=>{
    api.course().delete(id)
    .then(response=>{
        dispatch({
            type:COURSE_ACTION_TYPES.DELETE_COURSE,
            payload: id
        })
        onSuccess()
    })
    .catch(err => console.log(err))
}