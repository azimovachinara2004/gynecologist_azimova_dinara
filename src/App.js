import pic1 from './images/pic1.jpg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <Header/>
      <img src={pic1} alt='my picture' className='pic1'/>
     <h1>Dinara Azimova</h1>
     <h2>Gynecologist</h2>
     <p>Compassionate Gynecologist with 10 years of hospital and private practice experience. Adept at closely monitoring patient vitals and comfort levels throughout various procedures. Committed to thorough patient education and creating innovative and effective treatment plans.</p>
     <About/>
     <Services/>
     <Contacts/>
    </div>
  );
}

export default App;
