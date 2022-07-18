import StoreDate from "./StoreDate";
import Card from "../UI/Card";
import "./StoreItem.css";

const StoreItem = (props) => {
  return (
    <Card className="store-item">
      <StoreDate date={props.date} />
      <div className="store-item__description">
        <h2>{props.title}</h2>

        <div className="store-item__price">{props.quantity} Units</div>
      </div>
    </Card>
  );
};

export default StoreItem;
