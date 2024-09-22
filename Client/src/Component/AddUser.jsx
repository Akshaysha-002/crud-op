import React,{useState,useRef, CloseRef} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';




export default function AddUser() {

    const [value, setValue] = useState({
                 firstname: '',
                 lastname: '',
                 email: '',
                 phone: ''
             })
          
         

             const handleOnchange = (e) => {
                 setValue({
                     ...value,
                    //  ...userdata,
                    [e.target.name]: e.target.value
                })
             };
             const CloseRef = useRef(); 
             const handleSubmit =async(e) => {
                e.preventDefault();

               try {
                const adduser=await axios.post(`http://localhost:4000/api/create`, value );
                const response=adduser.data;
                console.log(response)
                if (response.success) {
                    toast.success(response.message)
                                 
                }
                console.log(response)
               } catch (error) {
               

                console.log(error)
                
               }
                console.log(value);
   
             };


  return (
    <>


                <div id="addEmployeeModal" className="modal fade">
                     <div className="modal-dialog">
                         <div className="modal-content">
                             <form onSubmit={handleSubmit}>
                                 <div className="modal-header">
                                     <h4 className="modal-title">Add Employee</h4>
                                     <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true" ref={CloseRef}>&times; </button>
                                 </div>
                                 <div className="modal-body">
                                     <div className="form-group">
                                         <label>FirstName</label>
                                         <input type="text" value={value.firstname} name='firstname' onChange={handleOnchange} className="form-control" required />
                                     </div>
                                     <div className="form-group">
                                         <label>LastName </label>
                                         <input type="text" value={value.lastnamename} name='lastname' onChange={handleOnchange} className="form-control" required />
                                     </div>
                                     <div className="form-group">
                                         <label>Email</label>
                                         <input type="email" value={value.email} name='email' onChange={handleOnchange} className="form-control" required />
    
                                     </div>
                                     <div className="form-group">
                                         <label>Phone</label>
                                         <input type="text" value={value.phone} name='phone' onChange={handleOnchange} className="form-control" required />
                                     </div>
                                 </div>
                                 <div className="modal-footer">
                                     <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                     <input type="submit" className="btn btn-primary" data-bs-dismiss="modal" value="Add" />
                                 </div>
    
                             </form>
                         </div>
                     </div>
                 </div>
    
    
    
             </>
  )
}



