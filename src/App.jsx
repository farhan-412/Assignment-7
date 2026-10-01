import { Suspense } from 'react'
import './App.css'
import ActiveAuction from './Components/ActiveAuction';
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';

const auctionPromise = fetch("/blogs.json").then((res) => res.json());

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <Suspense fallback={<span className="loading loading-spinner"></span>}>
          <ActiveAuction auctionPromise={auctionPromise} />
        </Suspense>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App;