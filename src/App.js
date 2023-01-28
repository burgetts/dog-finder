import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dogs from './Dogs';
import DogDetails from './DogDetails';
import dogs from './dogInfo';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <nav>
        <ul>
          <li><Link to='/dogs'>Dogs</Link></li>
        </ul>
      </nav>
        <Routes>
            <Route path='dogs'>
              <Route index element={<Dogs dogs={dogs}/>} />
              <Route index path= '/dogs/:name' element={<DogDetails dogs={dogs}/>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
   
  );
}

export default App;
