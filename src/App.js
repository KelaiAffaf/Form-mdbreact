import './App.css';

import Layout from './Components/Layout'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Formulaire from './Components/Formulaire'
import RegistrationForm from './Components/RegisterForm'
import Essai from './Components/Essai'

function App() {
  return (
    <div className="App">
    
     <NavBar></NavBar>
     {/* <Layout></Layout> */}
    {/* <Formulaire></Formulaire> */}
    <RegistrationForm></RegistrationForm>
     <Footer></Footer>
     
    </div>

  );
}

export default App;
