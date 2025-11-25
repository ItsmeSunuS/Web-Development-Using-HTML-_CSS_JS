function countCategories(categories) {
  return categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
}

const input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
console.log(countCategories(input));




// Sort categories by count (descending)

function countAndSortCategories(categories) {
  const counts = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  // Convert to entries, sort, then extract category names
  const sortedCategories = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])   // sort by count descending
    .map(([category]) => category);

  return sortedCategories;
}
