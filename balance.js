const userSelect = document.getElementById("userSelect");
var users = [];

var userInhandMoney = [];
var userAccountMoney = [];
var userTotalMoney = [];

var currentUser;

// For saving, loading, deleting balance info
function newUser() {
    let username = prompt("Enter username: ");
    while (username == "") {
        if (username == "") alert("Invalid Input!");
        username = prompt("Enter username: ");
    }

    users.push(username);
    userInhandMoney.push(inhandMoney);
    userAccountMoney.push(accountMoney);
    userTotalMoney.push(totalMoney);
    console.log("Created new user: ", username);
    console.log("inhand: ", inhandMoney, " account: ", accountMoney, " total: ", totalMoney)
    console.log("Current users:", users);

    var newUser = document.createElement("option");
    newUser.value = users.length;
    newUser.text = username;

    userSelect.appendChild(newUser);

    // Saves all created users
    localStorage.setItem("Users", users);
}

document.addEventListener('DOMContentLoaded', function(event) {
    let users = JSON.parse(localStorage.getItem('Users'));
    if (users) {
        console.log("Loaded users: ", users);
        users.forEach(function (user, index) {
            localStorage.getItem(index);
            var newUser = document.createElement("option");
            newUser.value = users.length;
            newUser.text = username;

            userSelect.appendChild(newUser);
        });
    }
});

function save() {
    let userIndex = userSelect.selectedIndex - 1;
    alert("Saving all info to user: " + users[userIndex]);
    // The user to save data into
    localStorage.setItem(users[userIndex], userIndex);
    // Saves all users's own info
    localStorage.setItem("Users", JSON.stringify(users));
}