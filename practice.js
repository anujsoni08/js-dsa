// let name = {
//   firstName: "anuj",
//   lastName: "soni",
// };

// let printFullName = function (hometown, state) {
//   console.log(
//     this.firstName + " " + this.lastName + " from " + hometown + ", " + state
//   );
// };

// printFullName.call(name, "Rohtak", "Haryana");

// let name2 = {
//   firstName: "arjun",
//   lastName: "singh",
// };

// printFullName.call(name2, "Delhi", "Delhi");
// printFullName.apply(name2, ["Delhi", "Delhi"]);

// let printMyName = printFullName.bind(name2, "Delhi", "Delhi");
// printMyName();

// console.log(name2.printFullName())

// function name(n){
//   this.name = n;
// }

// let nameObj = new name('anuj')
// console.log(nameObj)

// Promise.race([
//   new Promise((resolve, reject) => {
//     setTimeout(() => reject("1st resolved"), 2000);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => reject("2nd resolved"), 3000);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => reject("3rd resolved"), 10000);
//   }),
// ]).then((result) => console.log(result));

// function f1() {
//   console.log("hello");
//   //   return "hello";
// }

// function f2() {
//   console.log("world");
//   //   return "world";
// }

// f1();

// (async function (f2) {
//   await setTimeout(f2, 3000);

// })(f2);

// f2();

// function f3(f1, f2) {
//   f1();
//   setTimeout(f2, 3000);
// }

// f3(f1, f2);

// f1()

// function f3(callback) {
//   new Promise((resolve) => {
//       resolve(setTimeout(callback,3000))
//   });
// }

// f3(f2);

// let promise = Promise.reject();

// // promise.catch((e) => {
// //   alert("error occured");
// // });

// console.log(this)

// window.addEventListener("unhandledrejection", () => {
//   console.log("unhandled called");
// });

// console.log("hi");

let removeElement = function (nums, val) {
  let count = nums.length;
  nums.forEach((num) => {
    if (num === val) {
      count--;
    }
  });
  return count;
};

console.log(removeElement([3, 2, 2, 3], 3));
