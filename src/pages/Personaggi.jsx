import { NavLink } from "react-router-dom";

function Personaggi() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Homepage</NavLink>
            </li>
            <li>
              <NavLink to="/personaggi">Personaggi</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contatti</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h1>Personaggi</h1>
        <p>Questa è la pagina dei personaggi.</p>
      </div>
    </>
  );
}

export default Personaggi;