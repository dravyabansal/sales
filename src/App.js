
import './App.scss';
import Header from './components/header/Header';
import Dashboard from './screen/dashboard/Dashboard';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App text-white ">
      <Header />
  
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
