import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const EditStudent = () => {

    const { id } = useParams();

    const history = useHistory();

    const [student, setStudent] = useState({
        name: '',
        email: '',
        admin: '',
        course: ''
    });


    useEffect(() => {

        const fetchStudent = async () => {

            try {
                const response = await axios.get(`http://localhost:4000/students/${id}`);
                setStudent({
                    name: response.data.name,
                    email: response.data.email,
                    admin: response.data.admin,
                    course: response.data.course
                });

            } catch (err) {
                setError('Could not fetch student data');

            }
        };
        fetchStudent();

    }, [id]);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:4000/students/${id}`, student);
            alert('Student Updated Successfully')

            history.push('/');
        } catch (err) {
            setError('Could not update student');
        }
    };


    return (
        <div className="edit-student-container">
            <h2>Edit Student Details</h2>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={student.name}
                    onChange={handleChange}
                />
                <br />

                <label>E-mail:</label>
                <input
                    type="text"
                    name="email"
                    value={student.email}
                    onChange={handleChange}
                />
                <br />

                <label>Admission no:</label>
                <input
                    type="text"
                    name="admin"
                    value={student.admin}
                    onChange={handleChange}
                />
                <br />

                <label>Course:</label>
                <input
                    type="text"
                    name="course"
                    value={student.course}
                    onChange={handleChange}
                />
                <br />

                <div className="button-group">
                    <button className='view-btn' type="submit">Update Student</button>

                    <button className='delete-btn' type="button" onClick={() => history.push('/')}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default EditStudent;
