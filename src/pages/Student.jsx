import React, { useState, useEffect } from "react";

function Student({ user }) {
  const [student, setStudent] = useState();

  useEffect(() => {
    async function apiCall() {
      const loggedInResponse = await fetch(
        `${import.meta.env.VITE_API}/student`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user[0]}`,
          },
        }
      );
      const loggedIn = await loggedInResponse.json();
      setStudent(loggedIn);
      console.log(loggedIn);
    }
    apiCall();
  }, []);
  return (
    <>
      <h1>Student</h1>
      {student ? (
        <div>
          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
          <p>Student: {student.studentId}</p>
          <p>Hours Attended: {student.hoursAttended}</p>
          <p>HoursFinished : {student.hoursFinished}</p>
          <p>Expected Total Hours: {student.expectedTotalHours}</p>
        </div>
      ) : (
        <p> Loading...</p>
      )}
    </>
  );
}

export default Student;
