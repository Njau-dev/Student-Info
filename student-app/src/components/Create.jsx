import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const Create = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        admin: '',
        course: ''
    })


    const handleChange = (event) => {
        const { name, value } = event.target;

        setData((prev) => {
            return { ...prev, [name]: value };
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/', data)
            .then(res => {
                toast.success('new student added successfully', {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose: 3000,
                }) 

            })
        
            .catch(err => {
                toast.error('An error occured while adding the student', {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose: 3000,
                }) 
            })


    }



  return (
    <div className="form-parent">
            <form id="create-form" onSubmit={handleSubmit}>
                <label htmlFor="Title">Name:</label>
                <input type="text" name="name" onChange={handleChange} placeholder="Enter the title" id="borders"/>
                
                <label htmlFor="Author">Email:</label>
                <input type="text" name="email" onChange={handleChange} placeholder="Enter author's name" id="borders"/>


                <label htmlFor="Body">Admin-no:</label>
                <input type="text" name="admin" onChange={handleChange} placeholder="Enter author's name" id="borders"/>

                <label htmlFor="Body">Course:</label>
                <input type="text" name="course" onChange={handleChange} placeholder="Enter author's name" id="borders"/>


                <button type="submit">save info</button>

                <ToastContainer />
                
            </form>

        </div>
  )
}

export default Create
