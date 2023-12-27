import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId =
  "462014511839-4i2bkt7oaihra19j8v6opaff6nf1ss6m.apps.googleusercontent.com";

function LoginGoogle() {
  const onSuccess = (res) => {
    console.log("login succes", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("login failed", res);
  };
  return (
    <div id="signButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default LoginGoogle;
