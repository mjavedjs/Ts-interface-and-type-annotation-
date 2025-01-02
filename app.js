// console.log("Hello tyscript");
// function userData(obj:user):void{
//      for (const key in obj) {
//         console.log(obj[key])
//      }
// }
function userData(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            console.log(obj[key]); // Use `keyof User` for type safety
        }
    }
}
var obj = {
    name: 'javed',
    age: 18,
    email: 'javedchohan32@gamil.com',
    isloggedIn: true
};
userData(obj);
