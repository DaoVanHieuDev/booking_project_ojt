import { GoogleLogout } from "react-google-login";

const clientId =
  "462014511839-4i2bkt7oaihra19j8v6opaff6nf1ss6m.apps.googleusercontent.com";

function LogoutGoogle() {
  const onSuccess = () => {
    console.log("Log out success");
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default LogoutGoogle;
