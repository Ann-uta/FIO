const form = document.querySelector("form");
let result = document.querySelector('.result');

form.addEventListener("submit", function(evt){
    evt.preventDefault();
        
    let surname = document.querySelector('input[name="surname"]').value.trim();
        let name1 = document.querySelector('input[name="name1"]').value.trim();
        let name2 = document.querySelector('input[name="name2"]').value.trim();
        
        let newSurname = surname.toLowerCase();
        let finalSurname = newSurname[0].toUpperCase() + newSurname.slice(1);        
        let newName1 = name1.toLowerCase();
        let finalName1 = newName1[0].toUpperCase() + newName1.slice(1);
        let newName2 = name2.toLowerCase();
        let finalName2 = newName2[0].toUpperCase() + newName2.slice(1);

        result.textContent = `Фамилия: ${finalSurname} Имя: ${finalName1} Отчество:${finalName2}`;

});