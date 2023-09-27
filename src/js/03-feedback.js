import throttle from "lodash.throttle";

const refs = {
    formEl: document.querySelector('.feedback-form'),
    emailInput: document.querySelector('input[name="email"]'),
    messageInput: document.querySelector('textarea[name="message"]')
};

const localStorageKey = "feedback-form-state";
let data = {};

refs.formEl.addEventListener('input', throttle(onDataInput, 500));
refs.formEl.addEventListener('submit', saveForm);


function saveForm(e){ 
    e.preventDefault();

    const { email, message } = e.target.elements;
    if (email.value === "" || message.value === "") {return alert('Заповніть пусті поля') };

    console.log(data);
    e.target.reset();
    localStorage.removeItem(localStorageKey);
    data = {};   
};


function onDataInput(evt) { 
    const key = evt.target.name;
    const value = evt.target.value;

    data[key] = value;
    saveToLS(localStorageKey, data);
};

function saveToLS(key, value) { 
    localStorage.setItem(key, JSON.stringify(value));
};

function loadFromLS(key) {
    const data = localStorage.getItem(key);
    try {
        return JSON.parse(data);
    } catch {
        return data;
    }
 };


function onLoadPage() { 
    data = loadFromLS(localStorageKey) || {};
    refs.emailInput.value = data.email || "";
    refs.messageInput.value = data.message || "";
};

onLoadPage();