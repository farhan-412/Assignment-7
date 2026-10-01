import { use } from "react";

const ActiveAuction = ({ auctionPromise }) => {
  const activeProduct = use(auctionPromise);
  

  return (
    <div className='text-[#0E2954] mt-10 mr-10 ml-10 '>
      <h1 className="text-xl">Active Auctions</h1>
      <p className="text-sm opacity-80">Discover and bid on extraordinary items</p>
    </div>
  );
};

export default ActiveAuction;