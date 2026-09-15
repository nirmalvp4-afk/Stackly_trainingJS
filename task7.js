// ```javascript
// // Task 1

// const api = "https://fakestoreapi.com/products";

// fetch(api)
//   .then(res => res.json())
//   .then(products => {

//     // show title, price, category
//     products.forEach(p => {
//       console.log(p.title + " | $" + p.price + " | " + p.category);
//     });

//     // map
//     const mapped = products.map(p => {
//       return { title: p.title, price: p.price };
//     });
//     console.log(mapped);

//     // filter
//     const filtered = products.filter(p => p.price > 100);
//     console.log(filtered);

//     // find
//     const found = products.find(p => p.category === "electronics");
//     console.log(found);

//     // reduce
//     const total = products.reduce((sum, p) => sum + p.price, 0);
//     console.log(total);

//     // sort
//     const sorted = [...products].sort((a, b) => b.price - a.price);
//     console.log(sorted);

//   })
//   .catch(err => console.log(err))
//   .finally(() => console.log("Task 1 done"));


// // Task 2

// function dashboard(products) {

//   console.log("===== PRODUCT DASHBOARD =====");

//   console.log("Total Products:", products.length);

//   let count = {};

//   products.forEach(p => {
//     count[p.category] = (count[p.category] || 0) + 1;
//   });

//   for (let c in count) {
//     console.log(c + ":", count[c]);
//   }

//   let prices = products.map(p => p.price);

//   let max = Math.max(...prices);
//   let min = Math.min(...prices);
//   let avg = prices.reduce((a, b) => a + b, 0) / prices.length;

//   console.log("Highest Price: $" + max);
//   console.log("Lowest Price: $" + min);
//   console.log("Average Price: $" + avg.toFixed(2));
// }

// fetch(api)
//   .then(res => res.json())
//   .then(data => dashboard(data));


// // Task 3

// const usersAPI = "https://jsonplaceholder.typicode.com/users";
// const postsAPI = "https://jsonplaceholder.typicode.com/posts";

// // users
// fetch(usersAPI)
//   .then(res => res.json())
//   .then(users => {

//     users.forEach(u => console.log(u.name));

//     users.forEach(u => console.log(u.name + " - " + u.email));

//     let u5 = users.find(u => u.id === 5);
//     console.log(u5);

//     let cityUsers = users.filter(u => u.address.city === "South Christy");
//     console.log(cityUsers);
//   });

// // posts
// fetch(postsAPI)
//   .then(res => res.json())
//   .then(posts => {

//     let user1 = posts.filter(p => p.userId === 1);
//     console.log(user1);

//     console.log(user1.length);

//     let long = posts.find(p => p.title.length > 50);
//     console.log(long);
//   });


// // Task 4

// function searchProducts() {

//   let category = prompt("Enter product category:");
//   let maxPrice = parseFloat(prompt("Enter maximum price:"));

//   fetch(api)
//     .then(res => res.json())
//     .then(products => {

//       let result = products.filter(p =>
//         p.category === category && p.price <= maxPrice
//       );

//       result.forEach(p => {
//         console.log(p.title + " $" + p.price);
//       });

//     });
// }

// // searchProducts();


// // Task 5

// function cart() {

//   fetch(api)
//     .then(res => res.json())
//     .then(products => {

//       products.forEach(p => {
//         console.log(p.id + " " + p.title + " $" + p.price);
//       });

//       let input = prompt("Enter IDs:");
//       let ids = input.split(",").map(x => parseInt(x));

//       let cart = [];

//       ids.forEach(id => {
//         let p = products.find(x => x.id === id);
//         if (p) cart.push(p);
//       });

//       cart.forEach((p, i) => {
//         console.log("Product " + (i + 1) + ": " + p.title);
//         console.log("Price: $" + p.price);
//       });

//       let total = cart.reduce((sum, p) => sum + p.price, 0);

//       let discount = 0;
//       if (total > 200) discount = 0.2;
//       else if (total > 100) discount = 0.1;

//       let final = total - total * discount;

//       console.log("Total: $" + total);
//       console.log("Discount: " + discount * 100 + "%");
//       console.log("Final: $" + final.toFixed(2));
//     });
// }

// // cart();


// // Task 6

// fetch(api)
//   .then(res => res.json())
//   .then(products => {

//     console.log("========== PRODUCT REPORT ==========");

//     console.log("Total:", products.length);

//     products.forEach(p => console.log(p.title));

//     let names = products.map(p => p.title);

//     let above100 = products.filter(p => p.price > 100);
//     console.log(above100);

//     let elec = products.find(p => p.category === "electronics");
//     console.log(elec);

//     let total = products.reduce((sum, p) => sum + p.price, 0);
//     console.log(total);

//     let some = products.some(p => p.price > 500);
//     console.log(some);

//     let every = products.every(p => p.price > 1);
//     console.log(every);

//     let sorted = [...products].sort((a, b) => b.price - a.price);
//     console.log(sorted);

//   })
//   .catch(err => console.log(err))
//   .finally(() => console.log("Task 6 done"));
// ```
