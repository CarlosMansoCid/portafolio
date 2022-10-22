import './App.css';
import Home from './views/Home/Home';
import { Route, Routes} from 'react-router-dom';


function App() {

  
  return(
    <>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
      </Routes>
    </>

  ); 
}


export default App;
