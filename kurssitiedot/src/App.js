const Header = (props) => {
  console.log('nimi', props.course.name)
  return (
    <h1>
      {props.course.name}
    </h1>
  )
}

const Content = (props) => {
  console.log('Contenttia', props.course.parts[0].name)
  return (
    <div>
      {/*{props.part} {props.exercises}*/}
      <Part part={props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
      <Part part={props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
      <Part part={props.course.parts[2].name} exercises={props.course.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  
  return (
    <div>
      Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + 
      props.course.parts[2].exercises}
    </div>
  )
}

const Part = (props) => {
  
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      {/*<Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} 
      exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises}/>
  <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />*/}
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App