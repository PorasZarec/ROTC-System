import React from "react";
import "./top.css";

// imported icons
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";

// Imported Images and video
import img from "../../../../Assets/user (3).jpg";
import img2 from "../../../../Assets/image(9).png";
import vid from "../../../../../LoginAssets/video.mp4";

const Top = () => {
	return (
		<div className="topSection">
			<div className="headerSection flex">
				<div className="title">
					<h1>Welcome to our website</h1>
					<p>Hello Admin, Welcome back!</p>
				</div>

				<div className="searchBar flex">
					<input type="text" placeholder="Search Dashboard" />
					<BiSearchAlt className="icon" />
				</div>

				<div className="adminDiv flex">
					<TbMessageCircle className="icon" />
					<IoMdNotificationsOutline className="icon" />
					<div className="adminImage">
						<img src={img} alt="Admin Image" />
					</div>
				</div>
			</div>

			<div className="cardSection flex">

				<div className="rightCard flex">
					<h1>Create and sell extraordinary products</h1>
					<p>
						The World's first growing industry today are natural
						made products!
					</p>

					<div className="buttons flex">
						<button className="btn">Explore More</button>
						<button className="btn transparent">Top Sellers</button>
					</div>

					<div className="videoDiv">
						<video src={vid} autoPlay loop muted></video>
					</div>
				</div>

				<div className="leftCard flex">
					<div className="main flex">

						<div className="textDiv">
							<h1>My Stat</h1>

							<div className="flex">
								<span>
									Today <br /> <small>4 Orders</small>
								</span>
								<span>
									This Month <br /> <small>127 Orders</small>
								</span>
							</div>

							<span className="flex link">
								Go to my orders{" "}
								<BsArrowRightShort className="icon" />
							</span>
						</div>

						<div className="imgDiv">
							<img src={img2} alt="Image Name" />
						</div>
                        
						{/* later use of this card..... */}
						<div className="sideBarCard">
                            <BsQuestionCircle className="icon" />
                            <div className="cardContent">
                                <div className="circle1"></div>
                                <div className="circle2"></div>

                                <h3>Help Center</h3>
                                <p>
                                    Having Trouble in your account? Check out our help
                                    center for answers to common questions.
                                </p>

                                <button className="btn">Go to help center</button>
                            </div>
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Top;
