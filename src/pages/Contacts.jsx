import { NavLink } from "react-router-dom";

function Contacts() {
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
            <div className="contacts">
                <h1>Contatti</h1>
                <p>Per qualsiasi informazione, non esitate a contattarci!</p>
            </div>
        </>
    );
}





export default Contacts
