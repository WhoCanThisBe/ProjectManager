
//User IdGenerator
function userID() {
    let IdCounter = "";
    let userList = JSON.parse(window.localStorage.getItem("Members"));

    if (userList === null || userList.length == 0) {
        IdCounter = 4000
    } else {
        IdCounter = 4000 + userList.length
    }

    return IdCounter;
}


//TODO: create fake password settings for users

function createUser(event) {
    event.preventDefault();

    const userName = document.getElementById('userName').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    //Store the new user
    const newUser = { id: userID, userName, firstName, lastName }
    const userList = getUsers();
    if (isUserInputValid()) {
        userList.push(newUser);
        saveUsers(userList);
        renderUserList();
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

// function to create select element
function createElOption(parentElement, id, userName) {
    const option = document.createElement('option');
    option.setAttribute('value', id);
    option.textContent = userName;
    parentElement.appendChild(option);
}

//update the dropdown menu for creating new users.
function renderUserList() {
    const registeredMembers = document.querySelector('#registerd-user-list');
    const userList = getUsers();

    //Delete old userlist
    if (registeredMembers != 0) {
        while (registeredMembers.lastElementChild) {
            registeredMembers.removeChild(registeredMembers.lastChild)
        }
    }

    //Updates userlist with the new created user
    for (const list of userList) {
        const { id, userName } = list
        createElOption(registeredMembers, id, userName)
    }
}

renderUserList()

//click versions

//when click on Show Registered Button
document
    .querySelector('.show-user-btn')
    .addEventListener('click', () => {
        document.querySelector('#user-list').style.display = 'block';
        document.querySelector('.show-user-btn').style.display = 'none';
    });

//When click on Close User List
document
    .querySelector('.close-user-list-btn')
    .addEventListener('click', () => {
        document.querySelector('#user-list').style.display = 'none';
        document.querySelector('.show-user-btn').style.display = 'block';
    });