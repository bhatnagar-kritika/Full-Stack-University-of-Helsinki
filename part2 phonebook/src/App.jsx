import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm.jsx'
import Persons from './components/Persons.jsx'
import FilterName from './components/FilterName.jsx'
import phoneService from './services/phonebook.js'
import PersonAfterFilter from './components/PersonAfterFilter.jsx'
import './index.css'
import AlertMessage from './components/AlertMessage.jsx'


const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [alertMessage, setAlertMessage] = useState(null)
  

  useEffect(() => {
    console.log('effect')
    phoneService
    .getAll()
    .then(phonebook=> {
      setPersons(phonebook)
    })
      
  },[])
  

  const handleNameChange = (event) => {
    console.log('in handleNameChange', event.target.value)
    setNewName(event.target.value)

  }

  const handleNumberChange = (event) => {
    console.log('in handleNumberChange', event.target.value)
    setNewNumber(event.target.value)
  }

  const handleDelete = (id) => {
    console.log('id received',id)

    const deleteEntry = persons.find(person=> person.id===id)

    if(window.confirm(`Delete ${deleteEntry.name}?`)) {
      phoneService
        .deleteNumber(id)
        .then((()=> {
          console.log(`Phoneno with id ${id} and name ${deleteEntry.name} deleted successfully`)

          setPersons(persons.filter(person=> person.id!==id))

          setAlertMessage(`${deleteEntry.name}'s details have been deleted from the phonebook`)
          setTimeout(() => {
            setAlertMessage(null)
          }, 5000);
        }))
        .catch(error => {
          console.error('error deleting the no', error)
          setAlertMessage(`${deleteEntry.name}'s details have already been deleted from the server`)
          setTimeout(() => {
            setAlertMessage(null)
          }, 5000);
        })
    }
  }
  

    const AddPerson = (event) => {
    event.preventDefault()

    console.log('inside AddPerson event received is',event)    

    const personObject = {
      name:newName.trim(),
      number:newNumber.trim(),
      
    }
    
    const duplicateFound = persons.find(person => person.name.toLowerCase().trim() === newName.toLowerCase().trim())
    console.log('duplicate found',duplicateFound)
    if(duplicateFound) {
           
           if(duplicateFound.number===personObject.number)
            {
              console.log('number is same')
              alert(`${personObject.name} is already in the phonebook`)
              setNewName('')
              setNewNumber('')
            }
           else {
            console.log('number is not same')
            if(window.confirm(`${personObject.name} is already in the phonebook, would you like to update the phone number?`))
            {
              phoneService
                .updateNumber(duplicateFound.id, personObject)
                .then((updatedPerson) => {
                  
                  setPersons(
                    persons.map((person) => 
                      person.id !== duplicateFound.id? person : updatedPerson)
                  )
                  
                  setAlertMessage(`${personObject.name}'s number has been updated in the phonebook`)
                  setTimeout(() => {
                    setAlertMessage(null)
                  }, 5000);

                  setNewName('')
                  setNewNumber('')
                })
                .catch((error) => {
                  console.log('Error updating the phone number:', error)
                })
            }
           }
         }
      
      else{
           phoneService
            .create(personObject)
            .then((response) => {
              console.log('new entry:',response)
              setPersons([...persons,response])

              setAlertMessage(`${personObject.name} was added to the phonebook`)
              setTimeout(() => {
                setAlertMessage(null)
              }, 5000);

              setNewName('')
              setNewNumber('')
            }
            )
            .catch((error)=> {console.error('Error in addition of phone no', error)})
              
     }

   

  }

 

  

  const FilterPerson = (event) => {
    setSearchName(event.target.value)
  }

  const filteredResult = searchName
    ?persons.filter(person=> person.name.toLowerCase().includes(searchName.toLowerCase()))
    :[]

  
  return (
    <>
    <div>
      <h1> Phonebook </h1>
    </div>

    <FilterName searchName={searchName} FilterPerson= {FilterPerson} />
    
    <div>The search result is </div>
    
    {searchName&&filteredResult.length===0
      ?(<div>No matching results</div>)
      :(<PersonAfterFilter persons= {filteredResult} />)}
    
    

    <div>
    <PersonForm 
        AddPerson= {AddPerson}
        newName = {newName}
        newNumber= {newNumber}
        handleNameChange = {handleNameChange}
        handleNumberChange = {handleNumberChange} />
    </div>

    <div>
      <AlertMessage message={alertMessage} />
    </div>

    <div>
      <h2> Numbers: </h2>
    </div>
      <Persons 
      persons= {persons}
      handleDelete={handleDelete}
      />
    </>
  )

}


export default App