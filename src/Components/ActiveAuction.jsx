import { use } from "react";

const ActiveAuction = ({ auctionPromise }) => {
    const activeProduct = use(auctionPromise);


    return (
        <div className='text-[#0E2954] mt-10 mr-10 ml-10 '>
            <h1 className="text-xl">Active Auctions</h1>
            <p className="text-sm opacity-80">Discover and bid on extraordinary items</p>

            <div className="overflow-x-auto">
                <table className="table">
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
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default ActiveAuction;