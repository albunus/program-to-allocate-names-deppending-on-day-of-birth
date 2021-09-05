function generateName() {
    var dates = document.getElementById('date').value;
    var date =parseInt(dates);
    var month = document.getElementById('month').value;
    var yearOfBirth = document.getElementById('year').value;
    var century = yearOfBirth.slice(0, 2);
    var year = yearOfBirth.slice(2, 4);
    var genders = document.getElementById("gender");
    var gender = genders.options[genders.selectedIndex].text;
    var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleName = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayOfBirths = (((century /4) -2 *century- 1) + ((5 * year / 4)) + ((26 * (month + 1)/ 10)));
    var day = ((dayOfBirths)+(date))%7; 
    var dayOfBirth = Math.floor(day);
    if (gender === "Male") {
        document.getElementById("result").innerHTML = "You were born on " + dayOfWeek[dayOfBirth - 1] + " and your name is " + maleName[dayOfBirth - 1];
    } else if(gender === "Female") {
        document.getElementById("result").innerHTML = "You were born on " + dayOfWeek[dayOfBirth - 1] + " and your name is " + femaleName[dayOfBirth - 1];
    }
}
