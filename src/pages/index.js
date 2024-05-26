import Head from "next/head";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import Header from "./components/header";
import Component from "./components/component";
import RepeatComponent from "./components/repeat-component";
import Enquiry from "./components/enquiry";
import Footer from "./components/footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head></Head>
      <Header></Header>
      <Component></Component>
      <RepeatComponent></RepeatComponent>
      <Enquiry></Enquiry>
      <Footer></Footer>
    </>
  );
}
