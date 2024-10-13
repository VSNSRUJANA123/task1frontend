import React, { useState, useEffect } from "react";
import axios from "axios";
import "./navbar.css";
import { url } from "../url";
const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`${url}/api/users`);
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="admin-dashboard">
      <h1 className="title">Admin Dashboard</h1>
      <hr />
      {users.map((user) => (
        <div key={user._id} style={{ marginTop: "10px" }}>
          <h3 style={{ paddingBottom: "10px" }}>Name: {user.name}</h3>
          <p style={{ paddingBottom: "10px" }}>Handler:{user.handle}</p>
          <div className="img-container">
            {user.images.map((image, idx) => {
              console.log(image);
              return (
                <img
                  key={idx}
                  src={`${url}/${image}`}
                  alt="User Upload"
                  style={{
                    width: "250px",
                    marginRight: "10px",
                    border: "1px solid",
                  }}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
