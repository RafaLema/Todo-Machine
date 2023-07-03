import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                localStorageItem && setItem(JSON.parse(localStorageItem));
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setError(true);
            }
        }, 2000);
    }, [])
  
    const saveItems = (newItem) => {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    }
  
    return {item, saveItems, loading, error};
  }

  export { useLocalStorage };