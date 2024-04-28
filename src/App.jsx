import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products?search=" + search);
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, [search]);

  // if (error) {
  //   return <h1>Something went wrong!</h1>
  // }
  // if (loading) {
  //   return <h1>Loading...</h1>
  // }

  return (
    <>
      <h1>APIs Handling in react like a pro </h1>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong!</h1>}
      <h2>Number of Products are: {products.length}</h2>
    </>
  );
}

export default App;
