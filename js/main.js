console.log('Walidacja formularza zapisu do Newslettera - Warsztat');

let newsletterForm = document.getElementById('newsletter-form');
let AllZgodaCheckbox = document.getElementById('all-zgoda');

const validate = (event) => {
    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let zgoda1 = document.getElementById('zgoda-1');
    let errors = document.getElementById('errors');

    // To pozwala nam na czyszczenie naszej listy po każdej walidacji 
    errors.innerHTML = '';

    // funkcja TRIM() usuwa wszystkie białe znaki z lewej i prawej strony
    if (txtName.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imię i nazwisko';
        errors.appendChild(liError)
    }

    if (txtEmail.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adres email';
        errors.appendChild(liError)
    }

    // warunek gdyby ktoś nie miał obsługi w przeglądarce automatycznego sprawdzania @
    if (!txtEmail.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adres email';
        errors.appendChild(liError)
    }

    if (!zgoda1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Nie wyraziłeś zgody 1';
        errors.appendChild(liError)
    }  
    
    if (errors.children.length > 0) {
        event.preventDefault();
    }


    // event.preventDefault();

    // console.log(errors);
}

const allZgoda = () => {
    let zgoda1 = document.getElementById('zgoda-1');
    let zgoda2 = document.getElementById('zgoda-2');

    zgoda1.checked = event.target.checked;
    zgoda2.checked = event.target.checked;

    zgoda1.disabled = event.target.checked;
    zgoda2.disabled = event.target.checked;
}

newsletterForm.addEventListener('submit', validate);
AllZgodaCheckbox.addEventListener('change', allZgoda);
