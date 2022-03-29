import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [myData, setMyData] = useState([]);
  const myURL =
    "https://private-86aca7-aoeapi.apiary-mock.com/getAgeofEmpiresData";

  useEffect(() => {
    fetch(myURL)
      .then((res) => res.json())
      .then((data) => setMyData(data[0].units));
  }, []);

  const values = { myData, setMyData };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataContext;
