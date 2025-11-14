function signup(userName) {
    let userArr = ["john", "emma", "alex", "maria"];

    if (userArr.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        userArr.push(userName);
        return "Signup Successful, Please Login";
    }
}

console.log(signup("john"));   
console.log(signup("newUser")); 
