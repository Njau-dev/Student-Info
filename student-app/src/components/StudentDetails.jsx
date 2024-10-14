import React from 'react';
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useFetch from './useFetch';
import { Link } from 'react-router-dom';


const StudentDetails = () => {
  const { id } = useParams();

  const { data: students } = useFetch('http://localhost:4000/students/' + id);

  const history = useHistory();

  const handleDelete = (e) => {
    e.preventDefault()

    axios.delete('http://localhost:4000/students/' + id)
      .then(res => {
        alert("Student Deleted Successfully");
        history.push('/');
      })

      .catch(err => {
        toast.error('An error occured while deleting the student', {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 3000,
        })
      })
  }

  return (
    <div className="view-student">

      {students && (
        <article>
          <h2>Student Details</h2>

          <p><strong>Name:</strong> {students.name}</p>
          <p><strong>Admission no:</strong> {students.admin}</p>
          <p><strong>E-mail:</strong> {students.email}</p>
          <p><strong>Course:</strong> {students.course}</p>


          {/* buttons */}
          <Link to="/">
            <button className='view-btn'>All students</button>
          </Link>

          <Link to={`/edit-details/${students.id}`}>
            <button className='edit-btn'>
              Edit Student
            </button>
          </Link>

          <button className='delete-btn' onClick={handleDelete}>
            Delete Student
          </button >

        </article>
      )}

      <ToastContainer />

    </div>
  );
}

export default StudentDetails
