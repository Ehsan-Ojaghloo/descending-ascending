import React , {useRef , useState , useEffect} from 'react'
import "./App.scss"

function App() {

  const [newUsers , setNewUsers] = useState([]);

  const query = useRef();
  const input = useRef();

  function btn() {
    fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: `${query.current.value}`,
        lastName: `${input.current.value}`
      })
    })
    .then(res => res.json())
    .then(console.log);
  }

  return (
    <div className='items-con'>
      <input type="text" ref={query} id='firstName' placeholder='First Name'/>
      <input type="text" ref={input}  id='lastName' placeholder='Last Name'/>
      <button className='add-btn' onClick={btn}> Add </button>
    </div>
  )
}

export default App