import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const StudentList = ({ students, title, deleteStudent }) => {

    const history = useHistory();

    const handleEdit = (id) => {
        history.push(`/student-details/${id}`);
    };

    return (
        <div>
            <h2>{title}</h2>


            {/* Table for students */}
            <table className="student-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Adm. no</th>
                        <th>Course</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.admin}</td>
                            <td>{student.course}</td>
                            <td>
                                <Link to={`/student-details/${student.id}`}>
                                    <button className="view-btn">View</button>
                                </Link>

                                <Link to={`/edit-details/${student.id}`}>
                                    <button className='edit-btn' onClick={() => handleEdit(student.id)}>
                                        Edit
                                    </button>
                                </Link>

                                <button
                                    className="delete-btn"
                                    onClick={() => deleteStudent(student.id)} >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default StudentList
