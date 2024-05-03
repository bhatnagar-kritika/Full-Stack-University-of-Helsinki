// import React from 'react';

const Course = ({course}) => {

  console.log('in course',course)

  return (
    <>
    <Header course={course} />
    <Parts parts={course.parts} />
    </>
  )
  
}


const Header =({course}) => {
  return(
    <h2>
      {course.name}
    </h2>
  )
}

const Parts = ({parts}) => {

  console.log('in Parts', parts)

  const sumOfParts = parts.reduce((sum,part) => sum + part.exercises, 0)

  return (
    <>
    {parts.map(part => <li key= {part.id}>
      {part.name} {part.exercises}
    </li>)}

    <Total sumOfParts={sumOfParts} />
    </>

    
  )
}

const Total = ({sumOfParts}) => <h3> Total of {sumOfParts} exercises </h3>

export default Course