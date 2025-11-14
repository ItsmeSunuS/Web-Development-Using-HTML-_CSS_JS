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

////// Login/////

function login(userName, password) {
    
    const users = ["john", "sarah", "adam", "sunil", "maria"];

    if (!users.includes(userName)) {
        return "User Not Found, Please Signup";
    }

    if (password !== "Emp@123") {
        return "Wrong Password...";
    }

    return "Login Successful...";
}


console.log(login("john", "Emp@123"));  
console.log(login("sam", "Emp@123"));    
console.log(login("adam", "wrong"));     
