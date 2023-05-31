const btnContainer = document.querySelector('.btn__container');
const btns = ['Главная', 'Платежи и переводы', 'Шаблоны и автоплатежы', 'Документы', 'Счета', 'Тарифы', 'Выписки и отчеты', 'Валютный контроль', 'Зарплатный проект', 'Карты', 'Картотека', 'Аналитика', 'Депозиты', 'Кредиты', 'Гарантии'];

btns.forEach((index) =>{
    const btn = document.createElement("a");;
    btn.classList.add("nav-link");
    btn.innerHTML = `
        <span><img src="./assets/img/home.svg" alt="home"></span>
        <span>${index}</span>
    `;
    

    btn.addEventListener("click", () => {
        const activeLink = document.querySelector(".nav-link.active");
        if (activeLink) {
            activeLink.classList.remove("active");
        }
        btn.classList.add("active");
    });


    btnContainer.appendChild(btn);
})




// btnContainer.innerHTML = `
//     <a href="" class="active">
//         <span><img src="./assets/img/home.svg" alt="home"></span>
//         <span>Главная</span>
//     </a>
// `


const divElement = document.querySelector("#myDiv"); // Assuming you have a <div> element with id "myDiv"

divElement.addEventListener("click", () => {
    divElement.classList.toggle("expanded");
});

