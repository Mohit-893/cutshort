
import './App.css';
import  Header  from './Components/Header';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import Page4 from './Components/Page4';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className='center'>
      <div className='header'>
      <Header></Header>
      </div>
      <div className='maindiv'>
      <Router>
          <Routes>
            <Route path="/1" element={<Page1/>}></Route>
            <Route index element={<Page1 />}></Route>
            <Route path="/2" element={<Page2 />}></Route>
            <Route path="/3" element={<Page3 />}></Route>
            <Route path="/4" element={<Page4 />}></Route>
          </Routes>
      </Router>
      </div>
    </div>
    
  );
}

export default App;
