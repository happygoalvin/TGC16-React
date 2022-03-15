import React from "react"
import AlertBox from "../AlertBox";
import Form from "./Form";


function App() {
  return (
    <React.Fragment>
      <Form />
      <AlertBox bgcolor="orange" msg="Please enter your email and name" />
    </React.Fragment>
  );
}

export default App;
