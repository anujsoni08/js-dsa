let name = {
  firstName: "anuj",
  lastName: "soni",
};

let printName = function (hometown, state, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " , " +
      hometown +
      " , " +
      state +
      " , " +
      country
  );
};

let printMyName = printName.bind(name, "Dehradun");
printMyName("Haryana", "India");

Function.prototype.myBind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.myBind(name, "Dehradun");
printMyName2("Haryana", "India");
