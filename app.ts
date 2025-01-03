// console.log("Hello tyscript");

/**  
  TYPES INFERENCE;
  UNDERSTANDING TYPES INFRENCE;
  TYPE ANNOTATION
 */


// const  a :number = 55;  // jab ap type n batai ts khud pata kr are called type infrence;

// interface User {
//      name:string,
//      age:number,
//      email:string,
//      isloggedIn:boolean,
//      gender?:string

// } 


// // function userData(obj:user):void{
// //      for (const key in obj) {
// //         console.log(obj[key])
// //      }
// // }

// function userData(obj:User): void {
//     for (const key in obj) {
//         if (Object.prototype.hasOwnProperty.call(obj, key)) {
//             console.log(obj[key as keyof User]); // Use `keyof User` for type safety
//         }
//     }
// }

// const obj:User = {
//     name:'javed',
//     age:18,
//     email:'javedchohan32@gamil.com',
//     isloggedIn:true
// }

// userData(obj)


// =============================Problem no 1   ============ 

// let card  = document.querySelector(".container");

// interface products {
//      id:number,
//      name:string,
//      category:string,
//      instock:true;

// }
// function renderItem(productItem:products){
//     card.innerHTML = `
//     <div class="card">
//       <img src="${productItem.id}" alt="${productItem}" class="card-image" />
//       <div class="card-content">
//         <h2 class="card-title">${productItem.name}</h2>
//         <p class="card-description">${productItem.category}</p>
//         <p class="card-description">${productItem.instock}</p>
//       </div>
//     </div>
     
//     `
//     console.log(    productItem.name);
//     console.log(productItem.id);
//     console.log(productItem.category);
//     console.log(productItem.instock);
// }

// const products:products = {
//     id:88,
//     name:'Mobile',
//     category:'electronic',
//     instock:true
// }

// renderItem(products)




// let card = document.querySelector(".container");

// interface Product {
//   id: number;
//   name: string;
//   category: string;
//   instock: boolean;
//   stock:number
// }

// function renderItem(productItem: Product): void {
//   if (!card) {
//     console.error("Card container not found!");
//     return;
//   }
//   card.innerHTML = `
//     <div class="card">
//       <p>${productItem.name}</p>
//       <div class="card-content">
//         <h2 class="card-title">${productItem.name}</h2>
//         <p class="card-description">Category: ${productItem.category}</p>
//         <p class="card-description">In Stock: ${productItem.instock ? "Yes" : "No"}</p>
//         <p class="card-description">number of item: ${productItem.stock}</p>
//       </div>
//     </div>
//   `;
//   console.log("Name:", productItem.name);
//   console.log("ID:", productItem.id);
//   console.log("Category:", productItem.category);
//   console.log("In Stock:", productItem.instock);
// }

// const product: Product = {
//   id: 88,
//   name: "Mobile",
//   category: "Electronics",
//   instock: true,
//   stock:88
// };

// renderItem(product);



interface User{
   name:string;
   age:number;
   islogged:boolean;
   salary:number;
}

interface Teacher extends User{
      assets:string;
}

const Manager : Teacher = {
   name:"javed",
   age:45,
   islogged:true,
   salary:5000000,
   assets:'i sercert of company'
}


function compnayData(ManagerData:Teacher):string {
  return `${ManagerData.assets}`
}

 const data = compnayData(Manager);
 console.log(data)