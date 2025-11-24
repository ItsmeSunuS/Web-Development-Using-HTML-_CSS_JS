// Question a:

if (true) {
  let x = 10;
  var y = 20;
}

console.log(y);
console.log(x);


//Output wili be:
// 20
//ReferenceError: x is not defined

//Explanation

/*  var is function-scoped, not block-scoped.
     So y is accessible outside the if block.

        let is block-scoped.
        So x exists only inside the block, and accessing it outside gives:
        ReferenceError: x is not defined
*/

//Question b:

const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile?.user?.details?.email); 
console.log(profile?.user?.details?.phone); 

//Question c:

// Example where optional chaining prevents an error

const data = {
  product: {
    name: "Laptop"
  }
};

console.log(data.product.specs.weight); 
// Runtime error: Cannot read properties of undefined

//Using optional chaining:
console.log(data?.product?.specs?.weight);
//  Output: undefined (safe)

