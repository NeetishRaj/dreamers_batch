import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';


function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
