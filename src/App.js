import { Route, Routes } from 'react-router-dom';
import './App.css';
import * as te from 'tw-elements';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import AboutUS from './Pages/AboutUS/AboutUS';
import ContactUS from './Pages/ContactUS/ContactUS';
import NotFound from './Pages/NotFound/NotFound';
import Gallery from './Pages/Gallery/Gallery';


function App() {
  return (
    <div className="App pt-20 overflow-hidden">
      <Header />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/contactus" element={<ContactUS />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
