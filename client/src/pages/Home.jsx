// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Featured from "../components/featured/Featured";
import PropertyList from "../components/propertyList/PropertyList";
import FeatureedProperties from "../components/FeaturedProperties/FeatureedProperties";
import MailList from "../components/mailList/MailList";
import { Footer } from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container mx-auto mt-12 flex flex-col gap-4 items-center justify-center">
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
      <MailList />
      <Footer />
    </>
  );
};

export default Home;
