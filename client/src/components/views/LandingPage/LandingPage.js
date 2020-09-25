import React, { useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

function LandingPage(props) {
  useEffect(() => {
    axios.get("/api/hello").then((resopnse) => {
      console.log(resopnse);
    });
  }, []);

  const onClickHandler = () => {
    axios.get(`api/users/logout`).then((response) => {
      if (response.data.success) {
        props.history.push("/login");
      } else {
        alert("Logout Error");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h2>LandingPage</h2>

      <button onClick={onClickHandler}>LOGOUT</button>
    </div>
  );
}

export default withRouter(LandingPage);
