document.addEventListener("DOMContentLoaded", () => {
    const projectForm = document.getElementById("project-form");
    const backButton = document.getElementById("back-button");
    const nextButton = document.getElementById("next-button");
    const newClientButton = document.getElementById("new-client");
    const newClient = document.getElementById("client");

    projectForm.addEventListener("submit", (event) => {
        event.preventDefault();
        var projectData = {
            projectName: document.getElementById("project-name").value,
            client: document.getElementById("client").value,
            startDate: document.getElementById("start-date").value,
            endDate: document.getElementById("end-date").value,
            notes: document.getElementById("notes").value
        };

        localStorage.setItem("projectData", JSON.stringify(projectData));

        alert("Form submitted!");
        window.location.href=('../secondpage.html')
    });
    

    backButton.addEventListener("click", () => {
        location.reload()
    });

    newClientButton.addEventListener("click", () => {
        
        let clientName = prompt("Enter client here")
        
       const newOptionElement =  document.createElement('option')
        newOptionElement.value = clientName
        newOptionElement.text = clientName
        newClient.add(newOptionElement);
       

    });
});