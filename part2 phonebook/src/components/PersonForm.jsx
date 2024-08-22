const PersonForm = ({AddPerson, newName, newNumber, handleNameChange, handleNumberChange}) => {

  return (
    
  <div>
    <form onSubmit={AddPerson}>
      <h2>Add a new number: </h2>
      <div>
        Name: <input value = {newName} onChange={handleNameChange} />
      </div>

      <div>
        Number: <input value = {newNumber} onChange = {handleNumberChange} />
      </div>

      <div>
        <button type="submit"> Add </button>
      </div>
    </form>
  </div>
  )
}

export default PersonForm