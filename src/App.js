import { useEffect,useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';

function App() {

  const API_URL ="https://dummyjson.com/users";
  const [data,setData] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }
        const items = await response.json();
        setData(items.users);
        console.log(items.users);
      } catch(err) {
        alert(err.message);
      }
    } 
    setTimeout(() => {
      (async() => await fetchItems())();
    },1000)
  },[]);


  return (
    <div className="App">
      <article className='Page'>
        <Header />
        <Table 
        data = {data}/>
      </article>
    </div>
  );
}

export default App;
