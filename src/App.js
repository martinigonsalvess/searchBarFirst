import React, { useEffect, useState } from 'react'
import './App.css';
import Recipe from './Recipe';

const App = () => {
  

    const APP_ID = '439d148a';
    const APP_KEY = '656b9f2c04daa032243be7bf3454c466';

    const[recipes, setRecipes] = useState([]);
    //create State for search
    const[search, setSearch] = useState('');
    //submit itself after we click the 'search' button
    const[query, setQuery] = useState('pig');

    useEffect(  () =>{
      getRecipes();
    },[query]);//query only going to run after we click submit button

    const getRecipes = async()=>{
        const response = await fetch( `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        //console.log(data.hits);
        setRecipes(data.hits);
    }
    //create function for onChange
    const updateSearch = e =>{
      setSearch(e.target.value);//value of the input
    };
    //getsearch on submit
    const getSearch = e => {
      e.preventDefault();//prevent page refresh
      setQuery(search);//get query that's in our search
      setSearch(''); //empy search field

    }

    return(

      <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
          <button className="search-button" type="submit">Search</button>
        
        </form>
          <div className="recipes">
        {recipes.map(recipe => (<Recipe title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />))};
          </div>
      </div>


    )
  
}




export default App;
