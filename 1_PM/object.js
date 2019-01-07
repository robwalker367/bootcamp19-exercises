// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
  for (const entry in obj) {
    if (typeof obj[entry] === "object") {
      return hasFalsyValue(obj[entry]);
    }
    if (typeof obj[entry] === "false") {
      return true;
    }
  }
  return false;
};


const object = {1: "1", 2: "2", 3: "false", 4: null, 5: false};
console.log(hasFalsyValue(object));