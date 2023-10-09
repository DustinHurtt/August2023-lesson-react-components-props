
const Greetings = (props) => {

    console.log("This is the props object ===>", props)

  return (
    <div>
      <u>Hello {props.firstName}!</u>
    </div>
  )
}

export default Greetings