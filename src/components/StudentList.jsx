

const StudentList = (props) => {
    console.log("SL props", props)
  return (
    <div>
      <h2>Student List</h2>
      {props.children}
    </div>
  )
}

export default StudentList