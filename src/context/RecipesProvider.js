import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import fetchRecipes from '../services/requestAPI';
import RecipesContext from './RecipesContext';

export default function RecipesProvider({ children }) {
  const [drinks, setDrinks] = useState([]);
  const [meals, setMeals] = useState([]);
  const [renderDrinks, setRenderDrinks] = useState([]);
  const [renderMeals, setRenderMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [catDrink, setCatDrink] = useState([]);
  const [catMeal, setCatMeal] = useState([]);
  const [searchInput, setSearchInput] = useState(false);
  const [path, setPath] = useState();
  const [url, setUrl] = useState('');
  const [list, setList] = useState();
  const [listMeals, setListMeals] = useState();
  const [listDrinks, setListDrinks] = useState();
  const [btn, setBtn] = useState(false);
  const [togleCat, setTogleCat] = useState('');

  const mealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const drinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const catDrinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const catMealUrl = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

  useEffect(() => {
    async function fetch() {
      setDrinks(await fetchRecipes(drinkUrl));
      setRenderDrinks(await fetchRecipes(drinkUrl));
      setMeals(await fetchRecipes(mealsUrl));
      setRenderMeals(await fetchRecipes(mealsUrl));
      setCatDrink(await fetchRecipes(catDrinkUrl));
      setCatMeal(await fetchRecipes(catMealUrl));
      setLoading(false);
    }
    fetch();
  }, []);

  const value = useMemo(() => ({
    catMeal,
    catDrink,
    drinks,
    meals,
    loading,
    searchInput,
    path,
    url,
    listMeals,
    listDrinks,
    list,
    btn,
    renderDrinks,
    renderMeals,
    togleCat,
    setTogleCat,
    setRenderMeals,
    setRenderDrinks,
    setBtn,
    setList,
    setListDrinks,
    setListMeals,
    setUrl,
    setDrinks,
    setMeals,
    setSearchInput,
    setLoading,
    setPath,
  }), [
    drinks,
    meals,
    loading,
    catDrink,
    catMeal,
    searchInput,
    path,
    url,
    listDrinks,
    listMeals,
    list,
    btn,
    renderDrinks,
    renderMeals,
    togleCat,
  ]);

  return (
    <RecipesContext.Provider value={ value }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
