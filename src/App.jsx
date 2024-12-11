import Header from './components/Header'
import Monthcards from './components/Monthcards'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <main className='bg-orange-100'>
        <div className="w-[90%] mx-auto">
          <Header />
          <Monthcards />
          <Footer />
        </div>
      </main>
    </>
  )
}

export default App
