import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Forms from './component/Forms';
import Footer from './component/Footer';
import SignIn from './component/SignIn';

function App() {
  return (
    <>
    <Footer/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Forms/>} />
      <Route path='/successfull-entry' element={<SignIn/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
