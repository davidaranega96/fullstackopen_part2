const Content = ({ parts }) => {
    console.log(parts)
    return (
      <div>
        {
        parts.map(part => 
          <Part key={part.id} part={part}/>
          )
        }
      </div>
    )
}

const Part = ({ part }) => {
    console.log(part)
    return (
      <div>
        {part.name} {part.exercises}
      </div>
    )
}

export default Content
