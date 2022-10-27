import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './components/HomePage';
import ContactUsPage from './components/ContactUsPage';
import AboutUsPage from './components/AboutUsPage';
import PageNotFound from './components/PagerNotFound';
import Nitin from './components/Nitin';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />

          <Route path="about" element={<AboutUsPage />} />
          
          <Route path="contact" element={<ContactUsPage />} >
            <Route path="nitin" element={<Nitin />}/>
          </Route>

          <Route path="*" element={<PageNotFound />}/>
        </Route>


      </Routes>      

    </Router>
  );
}

export default App;
