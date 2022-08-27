import Home from "./Compontent/Home/Home";
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Login from "./Compontent/Login";




function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='*'/>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/login" element={<Login />}/>
      </Routes>
    </Router>
      
    


    </>

  );
}

export default App;
