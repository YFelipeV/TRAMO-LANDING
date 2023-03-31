import logo from "../assets/icons/horizontal.jpg";
import movil1 from "../assets/ilustraciones/movil-inicio.png";
import movil2 from "../assets/ilustraciones/movil-cliente.png";
import login from "../assets/ilustraciones/login.gif";
import ilu from "../assets/ilustraciones/interface.gif";
import { useNavigate } from "react-router-dom";
import "../css/style.css"
import "../css/styleAdmin.css"

import { useState } from "react";

function Login() {
  const [correoAdmin, setCorreo] = useState("");
  const [passwordAdmin, setContrasenia] = useState("");
  const navigate = useNavigate();

  const user = {
    correoAdmin: correoAdmin,
    passwordAdmin: passwordAdmin,
  };

  function handle(event) {
    event.preventDefault();
  }

  return (
    <>
      <div className="fondo " style={{ minHeight: "100vh" }}>
        <div className="container py-5 h-100 justify-content-center d-flex container-login ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-1">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <a href="/">
                          <img
                            src={logo}
                            style={{ width: "97%", marginBottom: "17%" }}
                            className="logo-empresa"
                            alt="logo"
                          />
                        </a>
                      </div>
                      {/* <h4 className="mb-4">Iniciar Sesión </h4> */}
                      <form autoComplete="on" onSubmit={handle}>
                        <div className="form mb-4">
                          <label className="form-label">
                            Correo Electronico
                          </label>
                          <input
                            type="email"
                            onChange={(e) => setCorreo(e.target.value)}
                            name="correoAdmin"
                            id="form-label"
                            className="form-control p-3 "
                            placeholder="Ingrese correo electrónico"
                          />
                        </div>

                        <div className="form- mb-2">
                          <label className="form-label">Contraseña</label>
                          <input
                            type="password"
                            onChange={(e) => setContrasenia(e.target.value)}
                            name="passwordAdmin"
                            id="passwordAdmin"
                            className="form-control p-3"
                            placeholder="Ingrese la contraseña"
                          />
                        </div>

                        <div className="d-grid gap-2 col-12 mx-auto text-center pt-1 mb-5 pb-1 mt-4">
                          <button
                            type="submit"
                            className="btn text-white gradient-custom-button  w-100 fs- pb-2"
                            onClick={() => handleSubmit(user, navigate)}
                          >
                            Iniciar sesión
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6   contan1 ">
                    <picture className="d-flex align-items-end justify-content-end mt-4">
                      <img src={login} width={"95%"} alt="" />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
