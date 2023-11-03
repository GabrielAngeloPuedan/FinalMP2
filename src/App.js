import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}
export default App;
