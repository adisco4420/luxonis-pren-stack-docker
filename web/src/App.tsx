import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/navbar/Navbar';
import Properties from './components/properties/Properties';

function App() {
  return(
    <>
      <NavBar />
      <div className='container mb-5'>
          <Properties />
      </div>
    </>
  );
}

export default App
