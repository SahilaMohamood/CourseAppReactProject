import React,{useState} from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/course-action"

const initialFieldValues={
  title:"",
  slug:"",
  category:""
}

const CourseForm = (props) => {
  const [values,setValues] = useState(initialFieldValues);

  const resetFormFields = () => {
    setValues(initialFieldValues);
  };

  const handleInputChange = event =>{
    const {name,value} = event.target
    setValues({
      ...values,
      [name]:value
    })
  }


const handleAddCourse=event=>{
  event.preventDefault()
  console.log(values)
  
  props.createCourses(values,()=>{window.alert('inserted')})
  resetFormFields();
  
}

  return (
    <form onSubmit={handleAddCourse}>
      <div className="mb-3">
        <input
        className="form-control"
        placeholder="Course Id (auto)"
        readOnly="readonly"/>
        <label className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={values.title}
          required
          placeholder="Enter Title of Course"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Slug
        </label>
        <input
          type="text"
          className="form-control"
          name="slug"
          value={values.slug}
          required
          placeholder="Enter Slug of Course"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Category
        </label>
        <input
          type="text"
          className="form-control"
          value={values.category}
          required
          name="category"
          placeholder="category"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
      <button type="submit" className="btn btn-primary mb-3">Add Course</button>
      <button onClick={resetFormFields} className="btn btn-dark mb-3">Reset</button>
      
      </div>
    </form>
  );
};

const mapStateToProps = state=>({
  courseList:state.course.list
})

const mapActionToProps = {
  createCourses:actions.create
}

export default connect(mapStateToProps,mapActionToProps)(CourseForm);
