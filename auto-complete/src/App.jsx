import { useEffect, useState } from "react";
import './App.css'

const App = () => {
 const [search,setSearch] = useState(null);
 const [products,setProducts] = useState([]);
 const [cache,setCache] = useState({});

 const getData = async () => {
    const result = await fetch('https://dummyjson.com/products/search?q='+search);
    const json = await result.json()
    setProducts(json.products);
    setCache(prev => ({...prev,[search]:json.products}));
 }

 useEffect(()=>{
   let timer=null;

   if(cache[search]){
      setProducts(cache[search]);
   }else if(search){
     timer = setTimeout(()=>{
      getData();
     },600);
   }else{
      setProducts([]);
   }

   return ()=>{
      clearTimeout(timer);
   }
 },[search])

 return <div className="container">
   <h1>Search Products</h1>
    <input type="text" className="search-field" onChange={(e)=>setSearch(e.target.value)}/>
    <div className="search-results">
        {products.map((val)=>(<div key={val.id}>{val.title}</div>))}
    </div>
 </div>   
}

export default App;