import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RighAside from "../components/homelayout/RighAside";
import NewsDetailCard from "../components/NewsDetailCard";
import { useLoaderData, useParams } from "react-router";

const NewsDeatils = () => {
  const data = useLoaderData();
  const { id } = useParams();
 // console.log(id);
  const [news, setNews] = useState({});

  useEffect(() => {
    const NewsDeatils = data.find((singleNews) => singleNews.id == id);
    setNews(NewsDeatils);
  }, [data,id]);
  return (
    <div>
      <header className="py-3">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12">
        <section className="col-span-9">
          <h2 className="font-bold mb-5">News Details</h2>
          <NewsDetailCard news={news}></NewsDetailCard>
        </section>
        <aside className="col-span-3">
          <RighAside></RighAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDeatils;
