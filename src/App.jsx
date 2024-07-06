import React , {useState , useEffect} from 'react'
import "./App.scss"

function App() {

  const [products , setProducts] = useState([]);
  const [sorted , setSorted] = useState(false);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      })
  }, []);

  const ascSorted = [...products].sort((a,b)=> a.price - b.price);
  const descSorted = [...products].sort((a,b)=> b.price - a.price);

  return (
    <div className='app-con'>
      <div className="nav-con">
        <nav>
          <button className='asc' onClick={()=> setSorted(false)}>Asc</button>
          <button className='desc' onClick={()=> setSorted(true)}>Desc</button>
        </nav>
      </div>
      <div className='all-products'>
        {sorted ? descSorted.map((data)=>(
          <div key={data.id} className='products'>
            <img src={data.images}/>
            <div className='products-info'>
              <h2>{data.title}</h2>
              <p>{data.description.slice(0 , 180)}...</p>
              <span>{data.price}$</span>
            </div>
          </div>
        ))
        : ascSorted.map((data)=>(
          <div key={data.id} className='products'>
            <img src={data.image}/>
            <div className='products-info'>
              <h2>{data.title}</h2>
              <p>{data.description.slice(0 , 125)}...</p>
              <span>{data.price}$</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App