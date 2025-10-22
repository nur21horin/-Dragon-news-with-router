import React, { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RighAside from "../components/homelayout/RighAside";
import Loading from "../pages/loading";
const HomeLayout = () => {
  const { state } = useNavigation();
  const [showLoading, setshowLoading] = useState(false);
  useEffect(() => {
    let timer;
    if (state === "loading") {
      setshowLoading(true);
      timer = setTimeout(() => {
        setshowLoading(false);
      }, 3000);
    }else{
      timer=setTimeout(()=>{
        setshowLoading(false);
      },3000);
    }
    return ()=>clearTimeout(timer);

  },[state]);
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-3  grid grid-cols-12 gap-5">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          {showLoading ? <Loading></Loading> : <Outlet></Outlet>}
        </section>
        <aside className="col-span-3">
          <RighAside></RighAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
