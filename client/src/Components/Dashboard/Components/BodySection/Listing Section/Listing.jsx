import React from "react";
import "./listing.css";

// imported Images

import img from "../../../../Assets/image(5).png";

import user from "../../../../Assets/user (2).jpg";


// imported Icons

import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";


const Listing = () => {
	return (
		<div className="listingSection">

			<div className="heading flex">
				<h1>My Listings</h1>
				<button className="btn flex">
					See All <BsArrowRightShort className="icon" />
				</button>
			</div>

			<div className="secContainer flex">

				<div className="singleItem">
					<AiFillHeart className="icon" />
					<img src={img} alt="Image Name" />
                    <h3>Annual Vince</h3>
				</div>

				<div className="singleItem">
					<AiOutlineHeart className="icon" />
					<img src={img} alt="Image Name" />
                    <h3>Coffee Plant</h3>
				</div>

				<div className="singleItem">
					<AiOutlineHeart className="icon" />
					<img src={img} alt="Image Name" />
                    <h3>Superman</h3>
				</div>

				<div className="singleItem">
					<AiFillHeart className="icon" />
					<img src={img} alt="Image Name" />
                    <h3>Spider Man</h3>
				</div>
			</div>

            <div className="sellers flex">
                <div className="topSellers">
                    <div className="heading flex">
                        <h3>Top Sellers</h3>
                        <button className="btn flex">
                            See All <BsArrowRightShort className="icon" />
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={user} alt="User Image" />
                            <img src={user} alt="User Image" />
                            <img src={user} alt="User Image" />
                            <img src={user} alt="User Image" />
                        </div>
                        <div className="cardText">
                            <span>14.556 Plant sold<br/>
                                <small>21 sellers
                                    <span className="date">7 Days</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>


                <div className="featuredSellers">
                    <div className="heading flex">
                        <h3>Featured Sellers</h3>
                        <button className="btn flex">
                            See All <BsArrowRightShort className="icon" />
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={user} alt="User Image" />
                            <img src={user} alt="User Image" />
                            <img src={user} alt="User Image" />
                            <img src={user} alt="User Image" />
                        </div>
                        <div className="cardText">
                            <span>12,556 Plant sold<br/>
                                <small>26 sellers
                                    <span className="date">31 Days</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	);
};

export default Listing;
