import React ,{useEffect,useState} from 'react'
import api from './api/contacts'
export default function App() {
  const [users,setUsers]=useState(null);
  const getContacts=async()=>{
    const response= await api.get("/contacts");
    return response.data
  }
  const addContact=async()=>{
    const response = await api.delete("/contacts/3")
    setUsers([...users,response.data])
  }
  useEffect(()=>{
    const getAllContacts=async()=>{
      const allContacts = await getContacts();
      if(allContacts){
        console.log(allContacts);
        setUsers(allContacts)
      }

    }
    getAllContacts()
  },[])
  
  return (
    <div>App

      {/* <button onClick={()=>addContact()}>Add user</button>
      {users && users.map(e=>e.name)} */}
    </div>
  )
}
