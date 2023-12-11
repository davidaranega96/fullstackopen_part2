import Content from './content'
import Summary from './summary'

const Header = ({ name }) => {
    console.log("Header: ", name)
    return (
      <div>
          <h1>{name}</h1>
      </div>
    )
  }

const Course = ({ course }) => {
    console.log("Course: ", course)
    return (
        <div>
          <Header name={course.name} />
          <Content parts={course.parts}/>
          <Summary parts={course.parts}/>
        </div>
      )
}

export default Course
