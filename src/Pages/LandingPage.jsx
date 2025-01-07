import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import UserCard from "../Components/UserCard";

function LandingPage() {
  const [users, setUserData] = useState([]);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
      
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response.data);
      if (response.status == 200) {
        setUserData(response.data);
      }
    } catch (error) {
      setError("Failed to fetch data");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div style={{ margin: "100px 0" }}>
      {" "}
      <UserCard users={users} />
    </div>
  );
}

export default LandingPage;
