import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyLayout from './pages/Layout'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={
            <MyLayout/>
          }>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
