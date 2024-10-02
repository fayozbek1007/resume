import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MyInfo from './pages/MyInfo/MyInfo';
import Dashbord from './Dashbord/Dashbord';
import Contact from './pages/Conatct/Contact';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import Resume from './pages/Resume/Resume';
import Skills from './pages/Skills/Skills';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Dashbord />}>
          <Route path='/' element={<MyInfo />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/skills' element={<Skills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
