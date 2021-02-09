import './App.css';
import {useState, useEffect} from 'react';
import Reviews from './Reviews'

function App() {
  const arrayList = [];
  const [selectObject, setselectObject] = useState("");
  const [myUrl, setmyUrl] = useState("");
  const [data, setdata] = useState([])
  
  for(let i=1; i<=20; i++)
  {
      arrayList.push(i);
  }

  function cunstructUrl(value){
    const str = `http://www.i2ce.in/reviews/${value}`
    return str;
  }

   useEffect(() => {
    var value = 1; 
    setselectObject(value); 
    let myUrl = cunstructUrl(value);
    setmyUrl(myUrl);   
    fetch(myUrl)
    .then(response => response.json())
    .then(json => setdata(json))
    .catch(e => {
      console.log(e);
      return e;
    });
   }, []) 
  

  async function onChangeHandler(selectObject){
    var value = selectObject.target.value; 
    setselectObject(value); 
    let myUrl = cunstructUrl(value);
    setmyUrl(myUrl); 
    console.log(myUrl); 
    fetch(myUrl)
    .then(response => response.json())
    .then(json => setdata(json))
    .catch(e => {
      console.log(e);
      return e;
    });
  }

  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1">Navbar</span>
      </nav>
      <div className="container my-3 mt-5 inputSection">
          <p> <b>Select any Product Id </b> </p>
          <select className="dropdown-toggle" id="comboA" value={selectObject} onChange={onChangeHandler} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {
            arrayList.map(arrayValue => {
              return  <option key={arrayValue} value={arrayValue}>{arrayValue}</option>
            })
          } 
          </select>
      </div>

      <div className=" container text-justify outputSection">
        <Reviews data={data} />
      </div>

    </div>
  );
}

export default App;
