// console.log("Hello tyscript");
var Manager = {
    name: "javed",
    age: 45,
    islogged: true,
    salary: 5000000,
    assets: 'i sercert of company'
};
function compnayData(ManagerData) {
    return "".concat(ManagerData.assets);
}
var data = compnayData(Manager);
console.log(data);
