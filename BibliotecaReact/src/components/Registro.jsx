import React from "react";
import "./css/login.css";
import { auth } from "../firebase";

const Registro = (props) => {
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [tipo, setTipo] = React.useState("");
  const [correo, setCorreo] = React.useState("");
  const [clave, setClave] = React.useState("");
  const [error, setError] = React.useState(null);

  const procesarDatos = (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      setError("¡Ingresa tu nombre!");
      return;
    }
    if (!apellido.trim()) {
      setError("¡Ingresa tu apellido!");
      return;
    }
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
  const registrar = React.useCallback(async () => {
    try {
      const res = await auth.createUserWithEmailAndPassword(correo, clave);
      console.log(res.user);
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/invalid-email") {
        setError("Correo no valido");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("El email ya esta registrado");
      }
    }
  }, [correo, clave]);

  return (
    <div className="App-login">
      <div className="sectionLeft">
        <div className="boxOpacity">
          <div className="sectionLogo">
            <h1 className="titleApp">Registro</h1>
            <h2 className="titleInicio">Sign In Here!</h2>
          </div>
          <div className="boxLogin">
            <form onSubmit={procesarDatos} class="formLogin">
              {error && <div className="alert">{error}</div>}
              <label htmlFor="nombre" className="titleInputlogin">
                Nombres
              </label>
              <input
                class="inputLogin"
                type="text"
                name="nombre"
                id="nombreusuario"
                onChange={(e) => setNombre(e.target.value.toUpperCase())}
                value={nombre}
              />
              <label htmlFor="apellido" className="titleInputlogin">
                Apellidos
              </label>
              <input
                class="inputLogin"
                type="text"
                name="apellido"
                id="apellidousuario"
                onChange={(e) => setApellido(e.target.value.toUpperCase())}
                value={apellido}
              />
              <label htmlFor="email" className="titleInputlogin">
                Email
              </label>
              <input
                class="inputLogin"
                type="email"
                name="correo"
                id="emailusuario"
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
                id="pclaveusuario"
                onChange={(e) => setClave(e.target.value)}
                value={clave}
              />
              <button type="submit" className="buttonLogin" onClick={registrar}>
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
