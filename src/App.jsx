import './assets/styles/App.css'
import Footer from './battledex/Footer';
import Header from './battledex/Header';
import Main from './battledex/Main';
import DexAI from './components/DexAI';

function App() {

  return (
    <>
      <DexAI />
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App;