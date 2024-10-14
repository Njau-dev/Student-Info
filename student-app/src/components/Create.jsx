import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        axios.post('http://localhost:4000/students', data)
            .then(res => {
                toast.success('new student added successfully', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                })
            })

            .catch(err => {
                toast.error('An error occured while adding the student', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                })
            })

    }


    return (
        <div className="form-parent">
            <form id="create-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" onChange={handleChange} placeholder="Enter the title" id="borders" />

                <label htmlFor="email">Email:</label>
                <input type="text" name="email" onChange={handleChange} placeholder="Enter author's name" id="borders" />


                <label htmlFor="admin">Admin-no:</label>
                <input type="text" name="admin" onChange={handleChange} placeholder="Enter author's name" id="borders" />

                <label htmlFor="course">Course:</label>
                <input type="text" name="course" onChange={handleChange} placeholder="Enter author's name" id="borders" />


                <button type="submit">save info</button>

                <ToastContainer />

            </form>

        </div>
    )
}

export default Create
