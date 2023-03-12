import React, { useState } from "react";

const LoginSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleToggleSignup = () => {
    setIsNewUser(!isNewUser);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // perform login logic using email and password
  };

  const handleSignup = (event) => {
    event.preventDefault();
    // perform signup logic using email and password
  };
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await props.cosmosClient.signup(username, password);
  //     if (response.success) {
  //       history.push('/dashboard');
  //     } else {
  //       alert(response.message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className="card mt-5">
    <div className="card-header">
    <h2>{isNewUser ? "Signup" : "Login"}</h2>
    </div>
    <div className="card-body">

    <form onSubmit={isNewUser ? handleSignup : handleLogin}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email"value={email} className="form-control" onChange={handleEmailChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" name="password" onChange={handlePasswordChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">{isNewUser ? "Signup" : "Login"}</button>
        </div>
    </form>

      

      <p className="btn btn-success" onClick={handleToggleSignup}>
        {isNewUser ? "Already have an account? Login" : "New user? Signup here"}
      </p>
   
      </div>

</div>
    
  );
};

export default LoginSignup;
