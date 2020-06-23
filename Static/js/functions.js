//IIE Function
(function () {
    navBar();
    getProjects();
})();

//Get projectsList
function getProjects() {
    return JSON.parse(window.localStorage.getItem('projects')) ?? [];
}

//Register new Project functions
function saveProjects(projectList) {
    return window.localStorage.setItem('projects', JSON.stringify(projectList));
}

//Navbar for every html page
function navBar() {
    const ul = document.createElement('ul')
    ul.setAttribute('class', 'navbar')
    ul.innerHTML = `  
        <li><a href="#"><img src="#" alt="Logo"></a></li>
        <li><a class="text" href="/html/users.html">Users</a></li>
        <li><a class="text" href="/html/projects.html">Create Project</a></li>
        <li><a class="text" href="#"> Project Settings</a></li>
        <li><a class="current text" href="/html/projects.html">Project Manager</a></li>`;

    document.getElementsByTagName('header')[0].appendChild(ul)
}

//Get user list
function getUsers() {
    return JSON.parse(window.localStorage.getItem('userList')) ?? [];
}

function saveUsers(userList) {
    return window.localStorage.setItem('userList', JSON.stringify(userList))
}


