const hamburger = document.querySelector(".hamburger");
let nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
	menu.classList.add("active");
	document.body.classList.add("_lock");
	document.body.classList.add("_lock-scrollbar");
	hamburger.classList.add("hidden");
	nav.classList.add("hidden");
});

closeElem.addEventListener("click", () => {
	menu.classList.remove("active");
	document.body.classList.remove("_lock");
	document.body.classList.remove("_lock-scrollbar");
	hamburger.classList.remove("hidden");
	nav.classList.remove("hidden");
});


//! закрытие по клику по пустому месту
menu.addEventListener("click", (event) => {
	if (
		event.target.classList.contains("menu__overlay") ||
		event.target.classList.contains("logo-a")
	) {
		menu.classList.remove("active");
		document.body.classList.remove("_lock");
		document.body.classList.remove("_lock-scrollbar");
		hamburger.classList.remove("hidden");
		nav.classList.remove("hidden");
	}
});
// ------------------------------------
menu.querySelectorAll(".menu__link").forEach((link) => {
	link.addEventListener("click", () => {
		menu.classList.remove("active");
		document.body.classList.remove("_lock");
		document.body.classList.remove("_lock-scrollbar");
		hamburger.classList.remove("hidden");
	});
});

//! плавный скрол меню
const anchors = document.querySelectorAll('a[href*="#"]');
anchors.forEach((anchor) => {
	anchor.addEventListener("click", (event) => {
		event.preventDefault();

		const blockID = anchor.getAttribute("href").substring(1);
		document.getElementById(blockID).scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});
});

// -------------------------------------------------
// Получаем ссылку на элемент навигационной панели

// Функция для проверки, является ли текущая страница главным экраном
function isMainScreen() {
	// Проверяем, есть ли элемент с классом "promo" на странице
	return document.querySelector(".promo") !== null;
}

// Функция для отображения или скрытия навигационной панели
function toggleNav() {
	if (isMainScreen()) {
		nav.style.display = "block"; // Показываем навигационную панель
	} else {
		nav.style.display = "none"; // Скрываем навигационную панель
	}
}

// Вызываем функцию toggleNav() при загрузке страницы и при изменении размера окна
window.addEventListener("DOMContentLoaded", toggleNav);
window.addEventListener("resize", toggleNav);

const promoSection = document.querySelector(".promo");
let isNavVisible = false; // Флаг для отслеживания видимости навигационной панели

// Функция для проверки положения прокрутки и отображения/скрытия навигационной панели
function toggleNavOnScroll() {
	const scrollPosition = window.scrollY;
	const promoSectionHeight = promoSection.offsetHeight;

	if (scrollPosition < promoSectionHeight && !isNavVisible) {
		nav.style.display = "block"; // Показываем навигационную панель
		isNavVisible = true;
		nav.classList.remove("hidden");
	} else if (scrollPosition >= promoSectionHeight && isNavVisible) {
		nav.style.display = "none"; // Скрываем навигационную панель
		isNavVisible = false;
	}
}

// Вызываем функцию toggleNavOnScroll() при прокрутке страницы
window.addEventListener("scroll", toggleNavOnScroll);
// ------------------------------------------------

const counters = document.querySelectorAll(".skills__ratings-counter"),
	lines = document.querySelectorAll(".skills__ratings-line span");

counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});
