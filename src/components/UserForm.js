import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { url } from "../url";
const UserForm = () => {
  const [name, setName] = useState("");
  const [handle, setHandle] = useState("");
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && handle && images) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("handle", handle);
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }

      await axios.post(`${url}/api/users`, formData);
      alert("Submission successful!");
      setName("");
      setHandle("");
      setImages([]);
      navigate("/");
    } else {
      alert("invalid data");
    }
  };

  return (
    <div className="admin-dashboard ">
      <h1 className="title" style={{ paddingBottom: "10px" }}>
        User Form
      </h1>
      <form onSubmit={handleSubmit} className="form-style">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Social Media Handle"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
        />
        <input
          type="file"
          multiple
          onChange={(e) => setImages(e.target.files)}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
