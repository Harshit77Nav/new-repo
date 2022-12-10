import './App.css';
import Postview from './Postview';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './Landing';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
           <Routes>
             <Route path='/' element = {<Landing/>}/>
             <Route path="/post" element={< Postview/>}/>
           </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
