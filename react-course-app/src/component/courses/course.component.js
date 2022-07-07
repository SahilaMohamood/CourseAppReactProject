import React,{useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/course-action"
import CourseForm from "./course-form.component";


const Courses =(props)=>{
    
    useEffect(()=>{
        props.fetchAllCourses()
    },[])
    const onDelete = id =>{
        if(window.confirm('Are you sure to delete this record?'))
        props.deleteCourse(id)

    }
    return(
        <div className="container overflow-hidden">
            <div className="row">
            <div className="col p-2 border bg-light">
                <CourseForm/>
            </div>
            <div className="col p-4 border bg-light">
                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Slug</th>
                                <th>Category</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.courseList.map((record,index)=>{
                                return(
                                    <tr key={index}>
                                        <th>{record.title}</th>
                                        <th>{record.slug}</th>
                                        <th>{record.category}</th>
                                        <th>
                                            <button className="btn btn-danger" onClick={()=>onDelete(record.id)} >Delete</button>
                                        </th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>

        </div>
    )
}

const mapStateToProps = state=>({
        courseList:state.course.list
    })

const mapActionToProps = {
    fetchAllCourses:actions.fetchAll,
    deleteCourse:actions.deleteCourse
}

export default connect(mapStateToProps,mapActionToProps)(Courses);