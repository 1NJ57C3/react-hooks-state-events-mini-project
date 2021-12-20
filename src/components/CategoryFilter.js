import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  
  function clickHandler(e) {
    setSelectedCategory(e.target.name)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => <button key={category} onClick={clickHandler} name={category} className={category === selectedCategory ? "selected" : null} >{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
