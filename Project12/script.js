document.addEventListener('DOMContentLoaded',()=>{

    const form = document.querySelector('form');
    const container = document.querySelector('.container');
    const searchResult = document.querySelector('.search-result');
    let searchQuery = '';
    const APP_ID = 'a3c677a2';
    const APP_Key = '9520fe07fa6c058a8613d928c57a79fc';
    
    
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        // const inputValue = form.querySelector('input').value;
        searchQuery = e.target.querySelector('input').value;
        // console.log(searchQuery);
        e.target.querySelector('input').value = '';
        searchRecipe(searchQuery);
    })
    
    
    async function searchRecipe(value){
        const baseURL = `https://api.edamam.com/search?q=${value}&app_id=${APP_ID}&app_key=${APP_Key}&to=20`;
        const response = await fetch(baseURL);
        const data = await response.json();
        const Recipes = data.hits;
        displayRecipe(Recipes);
        // displayRecipe(recipe.recipe);
    }
    
    // searchRecipe()
    function displayRecipe(Recipes){
        const result = Recipes.map(recipe => {
            const value = recipe.recipe;
            // console.log(recipe.recipe);
            return `
            <div class="item">
                <img src="${value.image}" alt="">
                <div class="flex-cont">
                    <h1 class="title">${value.label}</h1>
                    <a href="${value.url}"  target="_blank" >View Recipe</a>
                </div>
                <p class="item-data">Calories : ${value.calories.toFixed(2)}</p>
                <p class="item-data">Diet Label : ${value.dietLabels}</p>
                <p class="item-data">healthLabels : ${(value.healthLabels).splice(0,4)}</p>
            </div>`
        }).join('');
    
        searchResult.innerHTML = result;
        // console.log(searchResult.innerHTML);
    }
})




