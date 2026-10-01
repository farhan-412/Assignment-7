import React from "react";
import bannerImage from "../assets/Banner-min.jpg";

const Banner = () => {
    return (
        <div
            className={`banner shadow-sm h-[400px]    text-white`}
            style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <div className="flex flex-col  items-center justify-center h-full w-1/3 ml-10">
                <h1 className="text-4xl font-bold">Bid on Unique Items from Around the World</h1>
                <p className="opacity-80 text-sm">Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
                <button className="btn rounded-[20px]">Explore Auctions</button>
            </div>

        </div>
    );
};

export default Banner;      