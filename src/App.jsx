import React , {useRef , useState , useEffect} from 'react'
import "./App.scss"

function App() {

  const [products , setProducts] = useState([]);

  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products?offset=3&limit=8')
      .then(res => res.json())
      .then((output) => {
        console.log(output)
        setProducts(output)
      })
  }, [])

  return (
    <div className='items-con'>
      {products.map((data) =>(
        <div key={data.id} className='items'>
          <img src={data.images}/> 
          <h1><b>{data.title}</b></h1>
          <h2>{data.price}</h2>
          <hr/>
        </div>
      ))}
    </div>
  )
}

export default App