import Product from "./Product";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Container() {
  const [products, setPro] = useState([
    {
      id: 1,
      title: "PC Portable Gamer HP VICTUS",
      price: "7490 DH",
      thumbnail: "HP16D0195NF.jpg",
    },
    {
      id: 2,
      title: "PC Portable Gamer HP VICTUS",
      price: "2190 DH",
      thumbnail: "HP14424U3EA.jpg",
    },
    {
      id: 3,
      title: "Pc Portable Chromebook Acer",
      price: "3640 DH",
      thumbnail: "NXATHEF002.jpg",
    },
    {
      id: 4,
      title: "PC Portable - HUAWEI",
      price: "1270 DH",
      thumbnail: "HUA6901443442959.jpg",
    },
  ]);
  return (
    <div className="container">
      <div className="row mt-5">
        {products.map((ele , index) => {
          return <Product data={ele} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Container;
