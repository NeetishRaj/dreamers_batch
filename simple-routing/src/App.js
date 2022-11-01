import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import HomePage from './components/HomePage';
import ContactUsPage from './components/ContactUsPage';
import AboutUsPage from './components/AboutUsPage';
import PageNotFound from './components/PagerNotFound';
import Nitin from './components/Nitin';
import Layout from './components/Layout';
import SearchComponent from './components/SearchComponent';
import AccountProfile from './components/AccountProfile';

function App() {

  let { accountName } = useParams();

  return (
    <Router>
      <Layout />

      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />

          <Route path="about" element={<AboutUsPage />} />
          
          <Route path="contact" element={<ContactUsPage />} />

          <Route path="contact/nitin" element={<Nitin />}/>

          <Route path="accounts/:accountName" element={<AccountProfile />} />

          <Route path="search" element={<SearchComponent />} />

          <Route path="*" element={<PageNotFound />}/>
        </Route>


      </Routes>      

    </Router>
  );
}

export default App;
