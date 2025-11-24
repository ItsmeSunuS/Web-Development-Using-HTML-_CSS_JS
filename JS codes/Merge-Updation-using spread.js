// Initial profile object
const profile = {
  name: "John Doe",
  age: 30,
  address: {
    city: "New York",
    zipcode: "10001"
  }
};

// Updates object
const updates = {
  age: 31,
  address: {
    ...profile.address, // Include the existing address properties
    zipcode: "10002",    // Overwrite the zipcode
    country: "USA"       // Add a new property
  }
};

// Merging the objects using the spread operator
const mergedProfile = {
  ...profile,           // Spread the properties from the profile
  ...updates,           // Spread the properties from the updates (this will overwrite profile properties)
};

console.log(mergedProfile);
