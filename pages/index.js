import Head from "next/head";
import Footer from "../components/footer/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import Slider from "../components/Slider";

export default function Home() {
  const slides = [{ url: "/avocato-burger.jpeg" }, { url: "/store.jpeg" }];
  return (
    <div>
      <Head>
        <title>The Green Concept</title>
        <meta name="description" content="The Green Concept Ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Slider images={slides} />
      <Products />
      <Footer />
    </div>
  );
}
