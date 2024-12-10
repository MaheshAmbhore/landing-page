// import Image from "next/image";
import Header from "./components/Header";
import Content from "./components/Content";
import Ingredients from "./components/Ingredients";
import Footer from "./components/Footer";
import LatestNews from "./components/LatestNews";

export default function Home() {
  return (
    <>
      <Header/>
      <Content/>
      <Ingredients/>
      <LatestNews/>
      <Footer/>
    </>
  );
}
