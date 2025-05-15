import { NavLink } from "react-router-dom";

function Homepage() {
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
        <h1>Benvenuti nella Homepage</h1>
        <p>Questa è la pagina principale dell'applicazione</p>
      </div>
    </>
  );
}   

export default Homepage;