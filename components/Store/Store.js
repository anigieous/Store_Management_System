import React, { useState } from 'react';
import StoreList from './StoreList';
import StoresFilter from './StoresFilter';
import StoreChart from './StoreChart';
import Card from '../UI/Card';
import './Store.css';
const Store = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredStores = props.items.filter((store) => {
    return store.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='store'>
        <StoresFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <StoreChart stores={filteredStores}/>
        <StoreList items={filteredStores} />
      </Card>
    </div>
  );
};
export default Store;
