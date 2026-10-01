import { use, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import Swal from "sweetalert2";

const ActiveAuction = ({ auctionPromise }) => {
    const activeProduct = use(auctionPromise);
    const [liked, setLiked] = useState([]);

    const favoriteItems = activeProduct.filter((product) => liked.includes(product.id));

    let totalAmount = 0;
    for (const item of favoriteItems) {
        totalAmount = totalAmount + item.currentBidPrice;
    }

    const handleBid = (productId) => {
        console.log(`Bid placed for product with ID: ${productId}`);
        if (liked.includes(productId)) {
            setLiked(liked.filter((id) => id !== productId));
        }
        else {
            setLiked([...liked, productId]);

            Swal.fire({
                title: "Added to Favorites!",
                text: product.title,
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
            });
        }


    }


    return (
        <div className='text-[#0E2954] mt-10 mr-10 ml-10 '>
            <h1 className="text-xl">Active Auctions</h1>
            <p className="text-sm opacity-80">Discover and bid on extraordinary items</p>

            <div className="flex justify-center gap-10">

                <div className="overflow-x-auto bg-[#ffffff] rounded-lg my-8 w-2/3">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Items</th>
                                <th>Current Bid</th>
                                <th>Time left</th>
                                <th>Bid Now</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {activeProduct.map((product) => (
                                <tr key={product.id} >
                                    <td>
                                        <div className="flex items-center gap-3 ">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={product.image}
                                                        alt={product.title}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{product.title}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>${product.currentBidPrice.toFixed(2)}</td>
                                    <td>{product.timeLeft}</td>
                                    <td>
                                        <button className="cursor-pointer" onClick={() => handleBid(product.id)}  >
                                            {liked.includes(product.id) ? <FaHeart size={'20px'} className="text-red-500" /> : <CiHeart size={'25px'} />}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

                <div className="bg-[#ffffff] rounded-lg my-8  w-1/3 h-[300px] py-5 flex flex-col  gap-5">
                    <div>
                        <h1 className="text-xl text-center flex items-center justify-center gap-2 border-b-2 border-gray-300 pb-2"><CiHeart /> Favorites Items</h1>
                        {/* Here i want to display favorite items which is i clicked with a sweet alert */}

                    </div>
                    <div className="text-xl flex items-center justify-around gap-2 mt-auto border-t-2 border-gray-300 pt-2 footer">
                        <h1 >Total Amount :</h1>
                        <h1> ${totalAmount.toFixed(2)}</h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ActiveAuction;