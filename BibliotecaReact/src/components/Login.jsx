import React from "react";
import "./css/login.css";
/*import { auth } from "../firebase";
import { withRouter } from "react-router-dom";
*/
const Login = (props) => {
  const [correo, setCorreo] = React.useState("");
  const [clave, setClave] = React.useState("");
  const [error, setError] = React.useState(null);

  const procesarDatos = (e) => {
    e.preventDefault();
    if (!correo.trim()) {
      setError("¡Ingresa tu Email!");
      return;
    }
    if (!clave.trim()) {
      setError("¡Ingresa tu Password!");
      return;
    }
    if (clave.length < 6) {
      setError("Ingresar contraseña con mas de 5 caracteres");
      return;
    }
    setError(null);
  };
 /* const Login = React.useCallback(async () => {
    try {
      const res = await auth.signInWithEmailAndPassword(correo, clave);
      console.log(res);
      setCorreo("");
      setEmail("");
      setError(null);
      props.history.push("/inicio");
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-email") {
        setError("Correo no registrado");
      }
      if (error.code === "auth/user-not-found") {
        setError("Usuario no registrado");
      }
      if (error.code === "auth/wrong-password") {
        setError("Contraseña Incorrecta");
      }
    }
  }, [correo, clave, props.history]);
*/
  return (
    <div className="App-login">
      <div className="sectionLeft">
        <div className="boxOpacity">
          <div className="sectionLogo">
            <h1 className="titleApp">UniCosta</h1>
            <h1 className="titleApp">BiblioTec</h1>
            <h2 className="titleInicio"> Welcome User!</h2>
          </div>

          <div className="boxLogin">
            <form onSubmit={procesarDatos} class="formLogin">
              {error && <div className="alert">{error}</div>}
              <label htmlFor="email" className="titleInputlogin">
                Email
              </label>
              <input
                class="inputLogin"
                type="email"
                name="correo"
                id="emailAdmin"
                onChange={(e) => setCorreo(e.target.value)}
                value={correo}
              />

              <label htmlFor="pass" className="titleInputlogin">
                Password
              </label>
              <input
                class="inputLogin"
                type="password"
                name="clave"
                id="passAdmin"
                onChange={(e) => setClave(e.target.value)}
                value={clave}
              />

              <button
                type="submit"
                className="buttonLogin"
                /*onClick={login}*/
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
