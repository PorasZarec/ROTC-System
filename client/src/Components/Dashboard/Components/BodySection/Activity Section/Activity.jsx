import React from "react";
import "./activity.css";

// imported Images

import user from "../../../../Assets/user (3).jpg";

// imported Icons

import { BsArrowRightShort } from "react-icons/bs";

const Activity = () => {
	return (
		<div className="activitySection">
			<div className="heading flex">
				<h1>Recent Activity</h1>
				<button className="btn flex">
					See All
					<BsArrowRightShort className="icon" />
				</button>
			</div>

			<div className="secContainer grid">
				<div className="singleCustomer flex">
					<img src={user} alt="Customer Image" />
					<div className="customerDetails">
						<span className="name">Ola Marta</span>
						<small>Ordered a new plant</small>
					</div>
					<div className="duration">2 min ago</div>
				</div>

				<div className="singleCustomer flex">
					<img src={user} alt="Customer Image" />
					<div className="customerDetails">
						<span className="name">Ola Marta</span>
						<small>Ordered a new plant</small>
					</div>
					<div className="duration">2 min ago</div>
				</div>

				<div className="singleCustomer flex">
					<img src={user} alt="Customer Image" />
					<div className="customerDetails">
						<span className="name">Ola Marta</span>
						<small>Ordered a new plant</small>
					</div>
					<div className="duration">2 min ago</div>
				</div>

				<div className="singleCustomer flex">
					<img src={user} alt="Customer Image" />
					<div className="customerDetails">
						<span className="name">Ola Marta</span>
						<small>Ordered a new plant</small>
					</div>
					<div className="duration">2 min ago</div>
				</div>

				<div className="singleCustomer flex">
					<img src={user} alt="Customer Image" />
					<div className="customerDetails">
						<span className="name">Ola Marta</span>
						<small>Ordered a new plant</small>
					</div>
					<div className="duration">2 min ago</div>
				</div>
			</div>
		</div>
	);
};

export default Activity;
