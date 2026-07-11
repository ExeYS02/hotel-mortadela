// App.jsx
import { useState, useEffect } from 'react';
import './App.css'; // Importing the CSS file

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    // Fetching data from the Node.js API
    fetch('http://localhost:5000/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.text))
      .catch((err) => setMessage('Error connecting to backend'));
  }, []);

  return (
    <div className="container">
      <h1>Full-Stack App</h1>
      <div className="api-box">
        <p>{message}</p>
      </div>
    </div>
  );
}
export default App;