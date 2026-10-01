import { Suspense } from 'react'
import './App.css'
import ActiveAuction from './Components/ActiveAuction';
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'

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
      </div>
    </>
  )
}

export default App;