function generateName() {
    var dates = document.getElementById('date').value;
    var month = document.getElementById('month').value;
    var year=document.getElementById('year').value;
    var yearOfBirth = new Date(year+ '/' +month + '/' + dates);
    var dayOfBirth = yearOfBirth.getDay();
    var genders = document.getElementById("gender");
    var gender = genders.options[genders.selectedIndex].text;
    var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleName = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (gender === "Male") {
        document.getElementById("result").innerHTML ="Amazing!" +"You were born on " + dayOfWeek[dayOfBirth] + " and your name is " + maleName[dayOfBirth ];
    } else if(gender === "Female") {
        document.getElementById("result").innerHTML ="Amazing!" +"You were born on " + dayOfWeek[dayOfBirth ] + " and your name is " + femaleName[dayOfBirth ];
    };
    function myFunction() {
        document.getElementById("myForm").reset();
      }
}
