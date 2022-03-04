import logo from './logo.svg';
import './App.css';

function App() {
  const data = ["Andriod", "Blackberry", "iPhone", "Windows phone"];

  const data2 = ["Samsung", "HTC", "Micromax", "Apple"]

  return(
    <div>
      <h1>Mobile Operating System</h1>
      <ul>
        {data.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
      <h1>Mobile Manufacturers</h1>
      <ul>
        {data2.map((g) => (
          <li>{g}</li>
        ))}
      </ul>
    </div>
    
  );

}


export default App;


