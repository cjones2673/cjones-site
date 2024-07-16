import HomePage from './pages/HomePage';  
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div id='root'>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />}></Route> {/* HomePage is the landing page of the webapp. */}
            </Routes>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
