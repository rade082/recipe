import React,{useState,useEffect}from 'react';
import Recipie from './components/Recipie';
import Footer from './components/Footer';
import './App.css';


function App() {

const API_ID = "ea5a3a4b";
const API_KEY = "f014f17c8a3dff91bbd1f7e2dd125503";


const [recipies, setRecipies] = useState([]);
const [search, setSearch]=useState("")
const [query,setQuery] = useState('cheese')

useEffect(() => {
  getNutrients();
}, [query])

const getNutrients = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
  const data = await response.json();
  setRecipies(data.hits)
}

const updateSearch =  e => {
  setSearch(e.target.value);

}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch(" ")
}

return (
    <div className="App">
      <div className="head">
      <h1 >Cook For Your Soul </h1>
      </div>
     <form onSubmit={getSearch} className="search-form">
       <input type="text" onChange={updateSearch} value={search} className="search-bar"/>
       <button className="search-button" >Search</button>
     </form>
     <div className="recipes">
     {recipies.map(recipie =>(
       <Recipie 
       className="recipes"
        key ={recipie.recipe.label}
        title={recipie.recipe.label}
        calories={recipie.recipe.calories}
        image={recipie.recipe.image}
        ingredients={recipie.recipe.ingredients}/>
     ))}
     </div>
     <div className="footer">
      <Footer/>
     </div>
    </div>
  );
}

export default App;
