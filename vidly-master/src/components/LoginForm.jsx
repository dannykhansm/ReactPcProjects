import React, { useState } from "react";
import Input from "./common/Input";

const LoginForm = () => {
  const account = {
    username: "",
    password: "",
  };
  const [input, setInput] = useState(account);

  const handleChange = (e) => {
    const account = { ...input };
    account[e.currentTarget.name] = e.target.value;
    setInput(account);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          value={input.username}
          label="Username"
          onchange={handleChange}
        />
        <Input
          name="password"
          value={input.password}
          label="Password"
          onchange={handleChange}
        />

        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
