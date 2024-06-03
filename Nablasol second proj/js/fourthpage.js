
document.addEventListener('DOMContentLoaded', function() {
    const everyoneSection = document.getElementById('everyone');
    const adminSection = document.getElementById('admin');
    const peopleSection = document.getElementById('people');

    everyoneSection.addEventListener('click', function() {
        everyoneSection.classList.add('selected');
        adminSection.classList.remove('selected');
        peopleSection.classList.remove('selected');
    });

    adminSection.addEventListener('click', function() {
        adminSection.classList.add('selected');
        everyoneSection.classList.remove('selected');
        peopleSection.classList.remove('selected');
    });
    peopleSection.addEventListener('click', function() {
        peopleSection.classList.add('selected');
        everyoneSection.classList.remove('selected');
        adminSection.classList.remove('selected');
    });
});

function goBack(){
    window.location.href=('/thirdpage.html')
}
function goNext(){
    window.location.href=('/index.html')
}