import React, { useState, useEffect } from "react";
import Classdiv from "../Components/Classdiv";

function Staff({ user }) {
  const [staff, setStaff] = useState();

  useEffect(() => {
    async function apiCall() {
      const loggedInResponse = await fetch(
        `${import.meta.env.VITE_API}/staffs`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user[0]}`,
          },
        }
      );
      const loggedIn = await loggedInResponse.json();
      setStaff(loggedIn);
      console.log(loggedIn);
    }

    if (staff == null) {
      apiCall();
    }
  }, []);
  return (
    <>
      {staff ? (
        <div>
          <h1>Staff</h1>
          <h3>{staff.name}</h3>
          <h3>{staff.email}</h3>
          {staff.class.map((c, key) => {
            return <Classdiv key={key} classes={c} />;
          })}
        </div>
      ) : (
        <p> Loading...</p>
      )}
    </>
  );
}

export default Staff;
