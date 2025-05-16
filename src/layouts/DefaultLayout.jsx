
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Nabar.jsx'

function DefaultLayout() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
         <div>io  sono un contenuto della home</div>  
         <Outlet />
      </main>
    </div>
  )
}
export default DefaultLayout