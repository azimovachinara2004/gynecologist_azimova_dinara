import pic1 from './images/pic1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={pic1} alt='my picture' className='pic1'/>
     <h1>Dinara Azimova</h1>
     <h3>Gynecologist</h3>
     <p>Compassionate Gynecologist with 10 years of hospital and private practice experience. Adept at closely monitoring patient vitals and comfort levels throughout various procedures. Committed to thorough patient education and creating innovative and effective treatment plans.</p>
    </div>
  );
}

export default App;
