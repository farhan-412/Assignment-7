import react from 'react';
const Footer = () => {
    return (
        <div className="footer-center p-10 bg-base-200 text-base-content rounded">
            <h1>
                <a className="text-[#003EA4] text-xl">Auction<span className="text-[#FFD700]">Gallery</span></a>
            </h1>
            <div>
                <ul  className="menu menu-horizontal px-4">
                    <li><a>Bid.</a></li>
                    <li><a>Own.</a></li>
                    <li><a>Win.</a></li>
                </ul>
            </div>
            <div>
                <ul className="menu menu-horizontal px-4">
                    <li><a>Home</a></li>
                    <li><a>Auctions</a></li>
                    <li><a>Categories</a></li>
                    <li><a>How It Works</a></li>
                </ul>
            </div>
            <p>© 2025 AuctionHub. All rights reserved.</p>
        </div>
    )
};

export default Footer;