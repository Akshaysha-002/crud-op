import React,{ useEffect , useState} from 'react'
import axios from 'axios';

export default function Table({UpdateUser, Deletuser}) {
    const [data, setData] = useState([])



    useEffect(() => {
        async function FeatchData() {

              try {
                const FeathUser=await axios.get(`http://localhost:4000/api/get`)
                const response = FeathUser.data 
                // console.log(response)
                setData(response)
              } catch (error) {
                
              }
          
           
        }
        FeatchData()

    }, [data])

 





  return (
    
                 <>
                   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

                     <div className="container">
                         <div className="table-wrapper">
                             <div className="table-title">
                                 <div className="row">
                                     <div className="col-sm-6">
                                         <h2> <b> Manage Employees</b></h2>
                                     </div>
                                     <div className="col-sm-6">
                                       <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                                       <i  class="fa-solid fa-circle-plus"></i> <span>Add New Employee</span>
                                         </a>
                                     </div>
                                 </div>
                             </div>
                             <table className="table table-striped table-hover">
                                 <thead>
                                
                                     <tr>
                                        <th> </th>
                                       <th>FirstName</th>
                                        <th>LastName</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Actions</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                 {data.user?.map((elem, index) => {
                                return (
                                    <tr>
                                        <td></td>
                                        <td>{elem.firstname}</td>
                                        <td>{elem.lastname}</td>
                                        <td>{elem.email}</td>
                                        <td>{elem.phone}</td>
                                        <td>
                                            <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => UpdateUser(elem._id)}>
                                                <i class="fa-solid fa-pen-to-square" title="Edit"></i>

                                            </a>
                                            <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={() => Deletuser(elem._id)}>
                                                <i class="fa-solid fa-trash" title="delete" ></i>

                                            </a>                                                  
                                        </td>
                                    </tr>
                                )
                            })}
                                         
                                       </tbody>
                             </table>
                         </div>
                     </div >
        
        
                 </>
             );
         }
  

















