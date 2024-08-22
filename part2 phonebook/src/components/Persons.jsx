const Persons = ({persons, handleDelete}) => {

  console.log('in persons.jsx', persons)
  return (
    <div>
      {persons.map((person) => 
            (
              
              <div key={person.id}>
              {person.name}  {person.number} {person. id} 
              <button onClick={() => handleDelete(person.id)}>delete </button>
              </div>
              
            ))
          }
    </div>
  )

}

export default Persons