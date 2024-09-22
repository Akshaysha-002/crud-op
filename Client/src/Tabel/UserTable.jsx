import React, { useState } from 'react';
import Table from '../Component/Table';
import AddUser from '../Component/AddUser';
import DeletUser from '../Component/DeletUser';
import UpdatedUser from '../Component/updatedUser';
import axios from 'axios';
import toast from 'react-hot-toast';


export default function UserTable() {
  const [value, setValue]=useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: ''
})

const [updateid , setUpdateid]=useState()
const [deletId,setDeletId]=useState()

const handleChange=(e)=>{
  setValue({
      ...value,
      [e.target.name]:e.target.value
  })
}
const handleSubmit= async(e)=>{
  e.preventDefault()
 try {
     const updateUser = await axios.put(`http://localhost:4000/api/update/${updateid} `, value)
     const response = updateUser.data
     if(response.success){
       toast.success(response.message)
     }
     console.log(response)
 } catch (error) {
     console.log(error)
 }
}
     
  const UpdateUser =(id)=>{
    setUpdateid(id)
  }
 
  const Deletuser = (deletId)=>{
    setDeletId(deletId)
  }
  const handleDelet =async ()=>{
    try {
      const deletuser = await axios.delete(`http://localhost:4000/api/delete/${deletId}`)
      const response=deletuser.data 
      if(response.success){
        toast.success(response.message)
      }



    } catch (error) {
      console.log(error)
    }
  }

      
  return (
  <>
 <Table UpdateUser={UpdateUser} Deletuser={Deletuser} ></Table>
 <AddUser></AddUser>
 <UpdatedUser value={value} handleChange={handleChange} 
 handleSubmit={handleSubmit}></UpdatedUser>
  <DeletUser handleDelet={handleDelet}></DeletUser>


  </>
  )
}
















