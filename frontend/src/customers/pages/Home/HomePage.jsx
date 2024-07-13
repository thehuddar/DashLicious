import React, { useEffect } from "react";
import "./HomePage.css";
// import Navbar from "../../components/Navbar/Navbar";

import RestaurantCard from "../../components/RestarentCard/RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllRestaurantsAction } from "../../../State/Customers/Restaurant/restaurant.action";
// import { getAllRestaurantsAction } from "../../../State/Restaurant/Action";
// import RestarantCard from "../../components/RestarentCard/Restaurant";

const HomePage = () => {
  const { auth, restaurant } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.user) {
      dispatch(getAllRestaurantsAction(localStorage.getItem("jwt")));
    }
  }, [auth.user]);
  return (
    <div className="">
      <section className="-z-50 banner relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className=" logo text-2xl lg:text-7xl font-bold z-10 py-5">DAShLicious</p>
          <p className=" logo z-10   text-gray-300 text-xl lg:text-4xl">
          Its my MERN Stack Project 
          </p>
        </div>

        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadout"></div>
      </section>
      <p className=" logo z-10   text-gray-300 text-xl lg:text-4xl">
          RE 
          </p>
      
      <section className="px-5 lg:px-20">
          <div className="flex flex-wrap items-center justify-around ">
            {restaurant.restaurants.map((item, i) => (
              <RestaurantCard data={item} index={i} />
            ))}
          </div>
        
      </section>
    </div>
  );
};

export default HomePage;
