import React from 'react'
import StudentList from './StudentList';
import useFetch from './useFetch';

const Home = () => {

  const { data: students } = useFetch('http://localhost:4000/students')


  return (
    <div className="home">

      {students && <StudentList students={students} title="All students" />}

    </div>
  );
}

export default Home
