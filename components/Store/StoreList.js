import StoreItem from "./StoreItem";
import "./StoreList.css";

const StoreList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="stores-list__fallback">Found No Expenses</h2>;
  }

  return (
    <ul>
      {props.items.map((store) => (
        <StoreItem
          key={store.id}
          title={store.title}
          quantity={store.quantity}
          date={store.date}
        />
      ))}
    </ul>
  );
};

export default StoreList;
