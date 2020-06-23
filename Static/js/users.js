//show user list
function renderUserList() {
    const userList = getUsers();
    for (const value of userList) {

    }

}

//TODO: create fake password settings for users

function createUser(event) {
    event.preventDefault();

    const userName = document.getElementById('userName').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    //Store the new user
    const newUser = { userName, firstName, lastName }
    const userList = getUsers();
    if (isUserInputValid()) {
        userList.push(newUser);
        saveUsers(userList);
        event.target.reset();
    }
}


//TODO: create a textbox that show what is required to fill
function isUserInputValid() {
    const userName = document.getElementById('userName').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    if (userName != 0 && firstName != 0 && lastName != 0) {
        return true
    }
}