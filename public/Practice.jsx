import React, { useState, useEffect } from 'react';

// Assuming ApiData is defined somewhere
type ApiData = /* Define your data structure here */;

const YourComponent = () => {
  const [localStore, setLocalStore] = useState<ApiData[]>([]);
  const data: ApiData 

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    try {
      if (storedCart) {
        const storeData = JSON.parse(storedCart);
        setLocalStore(storeData);
      }
    } catch (err) {
      alert(err);
    }
  }, []);

  const handleClick = () => {
    setLocalStore([data]);
    alert(localStore.length);
    localStorage.setItem('cart', JSON.stringify([data]));
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(localStore));
  }, [localStore]);

  return (
    /* Your component JSX here */
  );
};

export default YourComponent;
