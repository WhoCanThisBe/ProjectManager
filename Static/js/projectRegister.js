//Register new project
function createProj(event) {
    event.preventDefault();
    const projectName = document.getElementById('projectName').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const projectDescription = document.getElementById('projectDescription').value;

    const projectList = getProjects();
    const newProject = { projectName, startDate, endDate, projectDescription };

    //check if projectform is not valid or duplicate of projectName
    if (isNotDuplicateProjectName(projectName, projectList) && projectValidInput() && isProjectDateValid(startDate, endDate)) {
        projectList.push(newProject)
        saveProjects(projectList)
        event.target.reset();
    }
}


//TODO: show message for duplicates
//checks if new register Project is a duplicate
function isNotDuplicateProjectName(projectName, projectList) {
    const projectDuplicateCheck = projectList.filter(project => project.projectName == projectName);

    if (projectDuplicateCheck.length != 0) {
        // showStatusMessage(`Project with name: ${projectName} already exists`, false);
        return false,
            console.log('duplicate', projectName);
    } else return true;
}

//TODO: show message for input not filled
// checks if required inputs are filled
function projectValidInput() {

    const projectName = document.getElementById('projectName').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    if (projectName != "" && startDate != "" && endDate != "") {
        return true;
    } else return false, console.log('fill blanks');
}

//TODO: show message when dates are not valid
//checks if project start date is before end Date
function isProjectDateValid(startDateString, endDateString) {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);

    if (startDate > endDate) {
        return false, console.log('start date must come before end date')
    } else return true
}