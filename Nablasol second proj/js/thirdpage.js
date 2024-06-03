let backBtn = document.getElementById("back-button")
let newBtn = document.getElementById("new-button")

document.addEventListener('DOMContentLoaded', function() {
    const listView = document.getElementById('list-view');
    const boardView = document.getElementById('board-view');

    listView.addEventListener('click', function() {
        listView.classList.add('selected');
        boardView.classList.remove('selected');
    });

    boardView.addEventListener('click', function() {
        boardView.classList.add('selected');
        listView.classList.remove('selected');
    });
});

function goBack(){
    window.location.href=('/secondpage.html')
}
function goNext(){
    window.location.href=("/fourthpage.html")
}