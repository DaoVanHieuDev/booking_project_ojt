// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Featured from "../components/featured/Featured";
import PropertyList from "../components/propertyList/PropertyList";
import FeatureedProperties from "../components/FeaturedProperties/FeatureedProperties";
import { Footer } from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container mx-auto mt-12 flex flex-col gap-4 items-center justify-center rounded-t-xl	">
        <div className=" w-full">
          <img
            className="w-full"
            src="https://ik.imagekit.io/tvlk/image/imageResource/2023/12/11/1702282079827-1ecaea191048ac82823b4cd410be281c.png?tr=q-75,w-1280"
            alt=""
          />
        </div>
        <div className="text-3xl w-full">
          <img
            className="w-full"
            src="https://ik.imagekit.io/tvlk/image/imageResource/2023/12/20/1703036383694-89e163c8c59b70d884359bba236fe840.jpeg?tr=q-75,w-1280"
            alt=""
          />
        </div>
        <Featured />
        <div className="text-3xl w-full">
          <h1 className="text-3xl font-bold "> Browse by property type</h1>
        </div>
        <PropertyList />

        <div className="text-3xl w-full">
          <h1 className="text-3xl font-bold "> Love Home</h1>
        </div>
        <FeatureedProperties />
      </div>
      <Footer />
    </>
  );
};

export default Home;
