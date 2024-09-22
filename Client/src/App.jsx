import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import UserTable from './tabel/userTable';
import { Toaster } from 'react-hot-toast';
import './App.css';


export default function App() {
  return (
    <>
    
    <Toaster></Toaster>
    <UserTable></UserTable>
   
   </>
  );
}
