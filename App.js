import React, { useState } from "react";
import Store from "./components/Store/Store";
import NewStore from "./components/NewStore/NewStore";
import StoreTitle from "./components/Store/StoreTitle";
const Dummy_Values = [
  {
    id: "e1",
    title: "Toilet Paper",
    quantity: 90,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Chair",
    quantity: 50,
    date: new Date(2020, 4, 23),
  },
  {
    id: "e3",
    title: "Table",
    quantity: 50,
    date: new Date(2020, 10, 23),
  },
  {
    id: "e4",
    title: "Pens",
    quantity: 100,
    date: new Date(2021, 7, 12),
  },
  {
    id: "e5",
    title: "Dustbin",
    quantity: 30,
    date: new Date(2019, 2, 18),
  },
  
];
const App = () => {
  const [stores, setStores] = useState(Dummy_Values);

  const addDataHandler = (storeData) => {
    setStores((prevStores) => {
      return [storeData, ...prevStores];
    });
  };
  return (
    <div> 
      <StoreTitle />
      <NewStore addStoreData={addDataHandler} />
      <Store items={stores} />
    </div>
  );
};

export default App;
