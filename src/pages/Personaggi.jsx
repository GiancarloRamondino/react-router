import Navbar from "../components/Nabar.jsx";
import Lista from "../components/Lista.jsx";

function Personaggi() {
  return (
    <>
      <Navbar/>
      <div>
        <h1>Personaggi</h1>
        <p>Questa è la pagina dei personaggi.</p>
      </div>
      <div>
        <Lista/>
      </div>
      
    </>
  );
}

export default Personaggi;