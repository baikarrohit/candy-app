import { useEffect, useState } from "react";
import ItemContext from "./item-context";

const ItemProvider = (props) => {
  const [items, setItems] = useState([]);

  const onRefresh = async () => {
    try {
      const res = await fetch(
        "https://hrs-candy-project-default-rtdb.firebaseio.com/item.json"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      if (data) {
        const fetchedItems = Object.values(data);
        setItems(fetchedItems);
      }
    } catch (err) {
      console.log("error while refreshing:", err);
    }
  };

  useEffect(() => {
    onRefresh();
  }, []);

  const addItemHandler = async (item) => {
    setItems([...items, item]);

    await fetch(
      "https://hrs-candy-project-default-rtdb.firebaseio.com/item.json",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "content-type": "application/json",
        },
      }
    );
  };

  const itemContext = {
    items: items,
    addItem: addItemHandler,
  };
  return (
    <ItemContext.Provider value={itemContext}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
