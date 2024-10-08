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
        // alert("student deleted");

        toast.success('student deleted successfully', {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 3000,
        })

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
    <div className="details">

      {students && (
        <article>
          <h3>{students.name}</h3>
          <p> Done by: {students.author}</p>
          <div>{students.body}</div>
          <button onClick={handleDelete}
            variant="danger" className="mt-3" type="submit">Delete Student </button>

          <Link to={`/edit-details/${students.id}`}>
            <button>
              Edit Student
            </button>
          </Link>

        </article>
      )}

      <ToastContainer />
      {/* this wont work */}
    </div>
  );
}

export default StudentDetails
