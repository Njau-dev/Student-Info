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
                    course: response.data.course,
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
            history.push('/');
            // Redirect to the home page after successful update

        } catch (err) {
            setError('Could not update student');
        }
    };


    return (
        <div>
            <h2>Edit Student Details</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={student.name}
                        onChange={handleChange}
                    />
                </label>
                <br />

                <label>
                    E-mail:
                    <input
                        type="text"
                        name="email"
                        value={student.email}
                        onChange={handleChange}
                    />
                </label>
                <br />

                <label>
                    Admission no:
                    <input
                        type="text"
                        name="admin"
                        value={student.admin}
                        onChange={handleChange}
                    />
                </label>
                <br />

                <label>
                    Course:
                    <input
                        type="text"
                        name="course"
                        value={student.course}
                        onChange={handleChange}
                    />
                </label>
                <br />

                <button type="submit">Update Student</button>
            </form>
        </div>
    );
};

export default EditStudent;
