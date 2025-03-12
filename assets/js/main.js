// INFO: chatagores BUTTONS

const chatagoresButtons = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((response) => response.json())
    .then((data) => displayCategories(data.categories));
};
const displayCategories = (Categories) => {
  const categoriesContainer = document.getElementById(
    "chatagoresButton-container"
  );
  for (const names of Categories) {
    const chatagoreDiv = document.createElement("span");
    chatagoreDiv.innerHTML = `
            <button class="bg-slate-200 hover:bg-slate-300 text-black duration-300 font-medium py-2 px-4 rounded">
            ${names.category}
            </button>
        `;
    categoriesContainer.append(chatagoreDiv);
  }
};
chatagoresButtons();
