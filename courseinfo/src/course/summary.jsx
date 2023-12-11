const Summary = ({ parts }) => {
    console.log(parts)
    var sum_of_exercises = parts.reduce(
      (exercises_sum, part) => exercises_sum + part.exercises, 0
    )
    console.log(sum_of_exercises)
    return (
      <div>
        <b>Number of exercises {sum_of_exercises}</b>
      </div>
    )
}

export default Summary
