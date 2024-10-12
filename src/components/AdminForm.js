import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminForm = () => {
  const [state, setState] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const onHandle = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    if (state.username !== "" && state.password !== "") {
      navigate("/user");
    } else {
      alert("invalid data");
    }
  };
  return (
    <div className="admin-dashboard ">
      <h1 style={{ paddingBottom: "10px" }} className="title">
        Admin Form
      </h1>
      <form className="form-style" onSubmit={handleSubmit}>
        <input
          onChange={onHandle}
          value={state.username}
          type="text"
          name="username"
          placeholder="username"
        />
        <input
          onChange={onHandle}
          value={state.password}
          type="password"
          name="password"
          placeholder="password"
        />
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminForm;
