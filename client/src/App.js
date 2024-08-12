import './App.css';
// import Navbar from './components/navbar';
import AdminPage from './pages/adminpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Quespage from './pages/quespage';
import MainPage from './pages/mainpage';
import Editqes from './pages/editquespage';
export const ToLink = "https://tufflashcard.onrender.com";
// export const ToLink = "http://localhost:8080";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/questions' element={<Quespage />}/>
          <Route path='/admin' element={<AdminPage />}/>
          <Route path='/admin/:id' element={<Editqes/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
