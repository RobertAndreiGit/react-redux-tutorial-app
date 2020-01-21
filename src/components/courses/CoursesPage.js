import React, { useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

function CoursesPage({ courses, dispatch }) {
  let [course, setCourse] = useState({ title: "" });

  function handleChange(e) {
    setCourse({ title: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    debugger;
    dispatch(courseActions.createCourse(course));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Courses</h3>
      <input type="text" onChange={handleChange} value={course.title} />
      <input type="submit" value="Save" />
      {courses.map(coursee => (
        <div key={coursee.title}>{coursee.title}</div>
      ))}
    </form>
  );
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  debugger;
  return {
    courses: state.courses
  };
}

function mapDispatchToProps() {
  return;
}

export default connect(mapStateToProps)(CoursesPage);
