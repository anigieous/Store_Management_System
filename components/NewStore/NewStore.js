import StoreForm from "./StoreForm";
import "./NewStore.css";
const NewStore = (props) => {
  const submitDataHandler = (enteredStoreData) => {
    const storeData = {
      ...enteredStoreData,
      id: Math.random().toString(),
    };
    props.addStoreData(storeData);
  };
  return (
    <div className="new-store">
      <StoreForm onSubmit={submitDataHandler} />
    </div>
  );
};

export default NewStore;
