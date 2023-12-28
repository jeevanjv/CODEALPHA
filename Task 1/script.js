document.addEventListener('DOMContentLoaded', function() {
  const recipeForm = document.getElementById('recipeForm');
  const recipeList = document.getElementById('recipe-list');

  recipeForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const recipeName = document.getElementById('recipeName').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    if (recipeName && ingredients && instructions) {
      const recipeItem = document.createElement('div');
      recipeItem.innerHTML = `
        <h3>${recipeName}</h3>
        <p><strong>Ingredients:</strong> ${ingredients}</p>
        <p><strong>Instructions:</strong> ${instructions}</p>
        <button onclick="deleteRecipe(this)">Delete</button>
        <button onclick="editRecipe(this)">Edit</button>
      `;

      recipeList.appendChild(recipeItem);
      recipeForm.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
});

function deleteRecipe(button) {
  const recipeItem = button.parentElement;
  recipeItem.remove();
}

function editRecipe(button) {
  const recipeItem = button.parentElement;
  const recipeName = recipeItem.querySelector('h3').innerText;
  const ingredients = recipeItem.querySelector('p:nth-child(2)').innerText.substring(13);
  const instructions = recipeItem.querySelector('p:nth-child(3)').innerText.substring(14);

  document.getElementById('recipeName').value = recipeName;
  document.getElementById('ingredients').value = ingredients;
  document.getElementById('instructions').value = instructions;

  recipeItem.remove();
}