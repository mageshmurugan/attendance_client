import React, { useState, useRef } from "react";
import Cookie from "js-cookie";

function Login({ setUser }) {
  const [isStudent, setIsStudent] = useState("true");
  const email = useRef();
  const password = useRef();
  async function apiCall() {
    const data = {
      email: email.current.value,
      password: password.current.value,
    };

    if (isStudent) {
      try {
        const loggedInResponse = await fetch(
          "http://localhost:3000/student/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const loggedIn = await loggedInResponse.json();
        if (loggedIn && loggedIn.token && loggedIn.token.length >= 10) {
          console.log(loggedIn);
          Cookie.set("isStaff", "false");
          Cookie.set("jwt", loggedIn.token);
          setUser([loggedIn.token, "false"]);
        }
      } catch (e) {
        console.log(e.message);
      }
    } else {
      try {
        const loggedInResponse = await fetch(
          "http://localhost:3000/staffs/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const loggedIn = await loggedInResponse.json();
        if (loggedIn && loggedIn.token && loggedIn.token.length >= 10) {
          console.log(loggedIn);
          Cookie.set("isStaff", "true");
          Cookie.set("jwt", loggedIn.token);
          setUser([loggedIn.token, "true"]);
        }
      } catch (e) {
        console.log(e.message);
      }
    }
  }
  return (
    <>
      <h1>Login</h1>
      <button onClick={() => setIsStudent(true)}>Student</button>
      <button onClick={() => setIsStudent(false)}>Staff</button>
      <input type="email" name="email" ref={email} />
      <input type="password" name="password" ref={password} />
      <button onClick={apiCall}>Submit</button>
    </>
  );
}

export default Login;
