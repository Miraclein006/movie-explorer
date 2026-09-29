function CategoryFilter({ onSelect }) {
  const categories = [
    "Action",
    "Comedy",
    "Drama",
    "Horror",
    "Romance",
    "Thriller",
  ];

  return (
    <div className="category-section">
      <h3>Browse Categories</h3>

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;