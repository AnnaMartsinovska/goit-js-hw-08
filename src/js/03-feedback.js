import throttle from "lodash.throttle";

const refs = {
    inputEmailEl: document.querySelector('input'),
    inputMessageEl: document.querySelector('textarea'),
    formEl: document.querySelector('.feedback-form')
};

const localStorageKey = "feedback-form-state";
let data = {};

refs.inputEmailEl.addEventListener('input', onDataInput);
refs.inputMessageEl.addEventListener('input', onDataInput);
refs.formEl.addEventListener('submit', throttle(saveForm, 500));


function saveForm(e){ 
    e.preventDefault();
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
    console.log(data);
    refs.inputEmailEl.value = data.email || "";
    refs.inputMessageEl.value = data.message || "";
};

onLoadPage();