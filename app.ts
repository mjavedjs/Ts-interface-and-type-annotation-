// console.log("Hello tyscript");

/**  
  TYPES INFERENCE;
  UNDERSTANDING TYPES INFRENCE;
  TYPE ANNOTATION
 */


// const  a :number = 55;  // jab ap type n batai ts khud pata kr are called type infrence;

interface User {
     name:string,
     age:number,
     email:string,
     isloggedIn:boolean
}


// function userData(obj:user):void{
//      for (const key in obj) {
//         console.log(obj[key])
//      }
// }
function userData(obj:User): void {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            console.log(obj[key as keyof User]); // Use `keyof User` for type safety
        }
    }
}

const obj:User = {
    name:'javed',
    age:18,
    email:'javedchohan32@gamil.com',
    isloggedIn:true
}

userData(obj)