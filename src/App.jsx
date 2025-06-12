import './assets/styles/App.css'
import Footer from './battledex/Footer';
import Header from './battledex/Header';
import Main from './battledex/Main';
import DexAI from './components/DexAI'; 

function App() {
  return (

    <div className="flex flex-col min-h-screen">
      <Header /> 
      <main className="flex-grow"> 
        <DexAI />
        <Main /> 
      </main>
      <Footer />
    </div>
  )
}

export default App;