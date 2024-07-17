import { useState } from 'react';
import './App.css';
import Writing from './components/WritingPage/WritingPage';
import Timer from './components/Timer/Timer';
import Navbar from './components/NavBar/NavBar';
import Home from './Home/HomeWrite';
import Speack from './components/SpeakingPage/SpeakingPage';
import HomeSp from './Home/HomeSpeak';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeW from './Home/HomeWrite';
import WriteAndTimePage from './pages/WriteAndTimePage';
import SpeakAndTimePage from './pages/SpeakAndTimePage';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<WriteAndTimePage/>} />
          <Route path="/speak" element={<SpeakAndTimePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;