import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Login from "./Login";
import Student from "./Student";
import Staff from "./Staff";

function Home() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const cookie = [Cookies.get("jwt"), Cookies.get("isStaff")];
    // console.log(cookie)
    cookie[0] && cookie[0].length >= 10 && setUser(cookie);
  }, []);
  return (
    <>
      {user && user[0].length >= 10 ? (
        <div>
          {user[1] == "true" ? <Staff user={user} /> : <Student user={user} />}
        </div>
      ) : (
        <Login setUser={setUser} />
      )}
    </>
  );
}

export default Home;
