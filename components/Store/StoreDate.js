import "./StoreDate.css";

const StoreDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="store-date">
      <div className="store-date__month">{month}</div>
      <div className="store-date__year">{year}</div>
      <div className="store-date__day">{day}</div>
    </div>
  );
};

export default StoreDate;
