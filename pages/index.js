import Head from "next/head";
import Image from "next/image";
import Aside from "../components/Aside";
import CalendarCard from "../components/CalendarCard";
import Header from "../components/Header";
import PatientCard from "../components/PatientCard";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex bg-gradient-to-r from-blue-200 to-blue-50 h-screen w-screen">
      <div className="bg-white w-[100%] max-w-[1200px] mx-auto my-auto rounded-3xl flex mt-10">
        <div>
          <Sidebar />
        </div>
        <div className="bg-gray-50 flex-grow overflow-scroll rounded-2xl">
          <Header />
          <div className="flex h-full mt-10 ml-10 space-x-10 flex-col xl:flex-row">
            <div className="flex-grow space-y-10">
              <PatientCard />
              <CalendarCard />
            </div>
            <Aside />
          </div>
        </div>
      </div>
    </div>
  );
}
