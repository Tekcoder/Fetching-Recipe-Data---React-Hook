import React, {useState, useEffect} from 'react';
import './App.css';
import Recipe from "./Recipe"

const App = () => {

  const APP_ID = "37e53402"

  const APP_KEY = "6308be23a473f83d604ee2fdf904734e"
  const API_URL = `https://api.edamam.com/search?q=banana&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [recipe, setRecipes] = useState([])

  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  },[]);

  const loadData = async () => {
    const response = await fetch(API_URL)

    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  return (
    <div className="App">
    {
       recipe.map((recipes,id) => (
         <Recipe key={id} title={recipes.recipe.label} image={recipes.recipe.image} calories={recipes.recipe.calories} />
       ))
     }
   </div>
  );
}

export default App;
