import { useEffect, useState } from "react";
import './App.css'

const ProductCard = ({name,image,price}) =>{
    return (
        <div className="product-card">
            <img src={image} alt={name} />
            <span>{name}</span>
            <span>${price}</span>
        </div>
    )
}

const App = () => {
    const [products,setProducts] = useState(null);
    const [currentPage,setCurrentPage] = useState(1);

    const getProducts = async () => {
        const data = await fetch('https://dummyjson.com/products?limit=200');
        const json = await data.json();
        setProducts(json);
    }

    const handleClick = (btnName,totalPages)=>{
        if(btnName=='prev'){
            if(currentPage==1) return;
            setCurrentPage(currentPage-1);
        }else{
            if(currentPage==totalPages)return;
            setCurrentPage(currentPage+1);
        }
    }

    useEffect(()=>{
        getProducts();
    },[])

    if(!products){
        return <div>Loading....</div>
    }else{
        const {products:productList,total} = products;
        const pageSize = 10;
        const start = (currentPage-1)*pageSize;
        const end = start+pageSize;
        const totalPages = Math.ceil(total/pageSize);
        return (
            <div className="container">
                <div className="page-number">
                    <button onClick={()=> handleClick('prev',totalPages)}>Prev</button>
                    {[...new Array(totalPages).keys()].map((val)=>{
                        return <span key={val} onClick={()=>setCurrentPage(val+1)} style={{background:(val+1)===currentPage?'black':'',color:(val+1)===currentPage?'white':''}}>{val+1}</span>
                    })}
                    <button onClick={()=>handleClick('next',totalPages)}>Next</button>
                </div>
                <div className="product-container">
                {productList.slice(start,end).map((product)=>{
                    return<ProductCard key={product.id} name={product.title} image={product.thumbnail} price={product.price}/>
                })}
                </div>
            </div>
        )
    }
}

export default App;