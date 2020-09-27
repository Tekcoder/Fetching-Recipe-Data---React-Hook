import React, {useState, useEffect} from 'react';
import './App.css';
import Recipe from "./Recipe"

const App = () => {

  const APP_ID = "37e53402"

  const API_KEY = "6308be23a473f83d604ee2fdf904734e"

  const API_URL = `https://api.edamam.com/search?q=banana&app_id=${APP_ID}&app_key=${API_KEY}`

  // console.log(process.env.REACT_APP_RECIPE_API_KEY, process.env.REACT_APP_RECIPE_APP_ID)
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  },[]);

  const loadData = async () => {
    const response = await fetch(API_URL)
    // console.log(API_URL);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits); 
  }

  return (
    <div className="App">
    {
       recipes.map((recipe,id) => (
         <Recipe key={id} title={recipe.recipe} image={recipe.recipe.image} calories={recipe.recipe.calories} />
       ))
     }
   </div>
  );
}

export default App;
