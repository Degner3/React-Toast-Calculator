import { useState } from 'react';
import './App.css'
import { Lommergner } from './Components/Lommeregner/Lommergner'
import { Toast } from './Components/Toast/Toast'

function App() {

  const [toast, setToast] = useState([]);
  
  const showToast = (message, type = 'success', position = 'bottom') => {
    const newToast = { message, type, position, id: Date.now() };
    setToast((prevToasts) => [...prevToasts, newToast]);
  };

  return (
    <>
      <section>
        <h1>Lommergner</h1>
        <Lommergner/>
      </section>

      <section>
        <h1>Toast</h1>
        <div className="app">
          <button onClick={() => showToast("Success message")}>
            Show Success
          </button>
          <button
            onClick={() => showToast("Warning message")}
          >
            Show Warning
          </button>
          <button onClick={() => showToast("Error message",)}>
            Show Error
          </button>

          {toast.map((toast) => (
            <Toast key={toast.id} {...toast} />
          ))}
        </div>
      </section>
    </>
  );
}

export default App
