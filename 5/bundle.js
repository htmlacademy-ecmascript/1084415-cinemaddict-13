/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/const.js */ "./src/utils/const.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/utils.js */ "./src/utils/utils.js");
/* harmony import */ var _src_view_user_status_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/view/user-status.js */ "./src/view/user-status.js");
/* harmony import */ var _src_view_main_site_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/view/main-site-menu.js */ "./src/view/main-site-menu.js");
/* harmony import */ var _src_view_main_sorting_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/view/main-sorting-filter.js */ "./src/view/main-sorting-filter.js");
/* harmony import */ var _src_view_main_films_section_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/view/main-films-section.js */ "./src/view/main-films-section.js");
/* harmony import */ var _src_view_films_list_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/view/films-list.js */ "./src/view/films-list.js");
/* harmony import */ var _src_view_films_list_container_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/view/films-list-container.js */ "./src/view/films-list-container.js");
/* harmony import */ var _src_view_film_card_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/view/film-card.js */ "./src/view/film-card.js");
/* harmony import */ var _src_view_show_more_button_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/view/show-more-button.js */ "./src/view/show-more-button.js");
/* harmony import */ var _src_view_films_list_extra_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/view/films-list-extra.js */ "./src/view/films-list-extra.js");
/* harmony import */ var _src_view_footer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/view/footer.js */ "./src/view/footer.js");
/* harmony import */ var _src_view_film_details_popup_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/view/film-details-popup.js */ "./src/view/film-details-popup.js");
/* harmony import */ var _mocks_film_card_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mocks/film-card.js */ "./src/mocks/film-card.js");
/* harmony import */ var _mocks_filter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mocks/filter.js */ "./src/mocks/filter.js");
















const films = new Array(_utils_const_js__WEBPACK_IMPORTED_MODULE_0__["CARDS_NUMBER"]).fill(``).map(_mocks_film_card_js__WEBPACK_IMPORTED_MODULE_13__["generateFilm"]);
const filters = Object(_mocks_filter_js__WEBPACK_IMPORTED_MODULE_14__["generateFilter"])(films);

const siteHeader = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooter = document.querySelector(`.footer`);

Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["render"])(siteHeader, new _src_view_user_status_js__WEBPACK_IMPORTED_MODULE_2__["default"]().getElement(), _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["render"])(siteMainElement, new _src_view_main_site_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"](filters).getElement(), _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["render"])(siteMainElement, new _src_view_main_sorting_filter_js__WEBPACK_IMPORTED_MODULE_4__["default"](filters).getElement(), _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["render"])(siteFooter, new _src_view_footer_js__WEBPACK_IMPORTED_MODULE_11__["default"]().getElement(), _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["render"])(siteMainElement, new _src_view_main_films_section_js__WEBPACK_IMPORTED_MODULE_5__["default"]().getElement(), _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);

const siteMainFilms = siteMainElement.querySelector(`.films`);
Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["render"])(siteMainFilms, new _src_view_films_list_js__WEBPACK_IMPORTED_MODULE_6__["default"]().getElement(), _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);

const filmsList = siteMainFilms.querySelector(`.films-list`);
Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["render"])(filmsList, new _src_view_films_list_container_js__WEBPACK_IMPORTED_MODULE_7__["default"]().getElement(), _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
const filmsListContainer = siteMainFilms.querySelector(`.films-list__container`);

const renderFilm = (filmListElement, film) => {
  const filmComponent = new _src_view_film_card_js__WEBPACK_IMPORTED_MODULE_8__["default"](film);
  const filmDetailsComponent = new _src_view_film_details_popup_js__WEBPACK_IMPORTED_MODULE_12__["default"](film);

  const openPopupElements = filmComponent.getElement().querySelectorAll(`.film-card__title, .film-card__poster, .film-card__comments`);
  for (let elem of openPopupElements) {
    elem.addEventListener(`click`, () => {
      Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["render"])(siteMainElement, filmDetailsComponent.getElement(), _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);

      const body = document.querySelector(`body`);
      body.classList.add(`hide-overflow`);
    });
  }

  const closePopup = filmDetailsComponent.getElement().querySelector(`.film-details__close-btn`);
  closePopup.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    filmDetailsComponent.getElement().remove();

    const body = document.querySelector(`body`);
    body.classList.remove(`hide-overflow`);
  });

  Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["render"])(filmListElement, filmComponent.getElement(), _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
};

films
.slice(0, _utils_const_js__WEBPACK_IMPORTED_MODULE_0__["FILM_COUNT_PER_STEP"])
.forEach((film) => renderFilm(filmsListContainer, film));

if (films.length > _utils_const_js__WEBPACK_IMPORTED_MODULE_0__["FILM_COUNT_PER_STEP"]) {
  let renderedFilmCount = _utils_const_js__WEBPACK_IMPORTED_MODULE_0__["FILM_COUNT_PER_STEP"];

  const showMoreButtonComponent = new _src_view_show_more_button_js__WEBPACK_IMPORTED_MODULE_9__["default"]();
  Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["render"])(filmsList, showMoreButtonComponent.getElement(), _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);

  showMoreButtonComponent.getElement().addEventListener(`click`, (evt) => {
    evt.preventDefault();
    films
    .slice(renderedFilmCount, renderedFilmCount + _utils_const_js__WEBPACK_IMPORTED_MODULE_0__["FILM_COUNT_PER_STEP"])
    .forEach((film) => renderFilm(filmsListContainer, film));

    renderedFilmCount += _utils_const_js__WEBPACK_IMPORTED_MODULE_0__["FILM_COUNT_PER_STEP"];

    if (renderedFilmCount >= films.length) {
      showMoreButtonComponent.getElement().remove();
      showMoreButtonComponent.removeElement();
    }
  });
}

Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["render"])(siteMainFilms, new _src_view_films_list_extra_js__WEBPACK_IMPORTED_MODULE_10__["default"](_utils_const_js__WEBPACK_IMPORTED_MODULE_0__["EXTRAS_NAMES"][0]).getElement(), _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["render"])(siteMainFilms, new _src_view_films_list_extra_js__WEBPACK_IMPORTED_MODULE_10__["default"](_utils_const_js__WEBPACK_IMPORTED_MODULE_0__["EXTRAS_NAMES"][1]).getElement(), _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
const filmsListsExtra = siteMainFilms.querySelectorAll(`.films-list--extra`);

for (const filmsListExtra of filmsListsExtra) {
  Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["render"])(filmsListExtra, new _src_view_films_list_container_js__WEBPACK_IMPORTED_MODULE_7__["default"]().getElement(), _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
  const extraContainer = filmsListExtra.querySelector(`.films-list__container`);
  for (let i = 0; i < _utils_const_js__WEBPACK_IMPORTED_MODULE_0__["EXTRAS_NUMBER"]; i++) {
    const randomIndex = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomIndex"])(films);
    renderFilm(extraContainer, films[randomIndex]);
  }
}



/***/ }),

/***/ "./src/mocks/comments.js":
/*!*******************************!*\
  !*** ./src/mocks/comments.js ***!
  \*******************************/
/*! exports provided: getCommentsArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommentsArray", function() { return getCommentsArray; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");
/* harmony import */ var _utils_const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/const.js */ "./src/utils/const.js");



const getRandomIndex = (indices) => {
  return Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, indices.length - 1);
};

const getRandomElem = (elements) => {
  return elements[getRandomIndex(elements)];
};

const generateDate = () => {
  const releaseDate = new Date(Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["FILMS_START_YEAR"], _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["FILMS_END_YEAR"]), Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["START_MONTH"], _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["END_MONTH"]), Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["START_DATE"], _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["END_DATE"]));
  return releaseDate;
};

const generateComment = () => {
  const commentDate = generateDate();

  commentDate.setDate(Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["START_DATE"], _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["END_DATE"]));
  commentDate.setMonth(Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["START_MONTH"], _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["END_MONTH"]));
  commentDate.setUTCFullYear(Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["COMMENTS_START_YEAR"], _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["COMMENTS_END_YEAR"]));
  commentDate.setHours(Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["COMMENTS_START_HOUR"], _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["COMMENTS_END_HOUR"]));
  commentDate.setMinutes(Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["START_MINUTES"], _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["END_MINUTES"]));

  const comment = {
    content: Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomDescription"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["text"]),
    emoji: getRandomElem(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["EMOJIS"]),
    author: Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomName"])(),
    date: commentDate,
  };
  return comment;
};
const commentsNumber = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["COMMENTS_MAX"]);

const getCommentsArray = () => {
  const commentsArray = [];
  for (let i = 0; i < commentsNumber; i++) {
    const comment = generateComment();
    commentsArray.push(comment);
  }
  return commentsArray;
};


/***/ }),

/***/ "./src/mocks/film-card.js":
/*!********************************!*\
  !*** ./src/mocks/film-card.js ***!
  \********************************/
/*! exports provided: generateFilm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilm", function() { return generateFilm; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");
/* harmony import */ var _utils_const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/const.js */ "./src/utils/const.js");
/* harmony import */ var _mocks_comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mocks/comments.js */ "./src/mocks/comments.js");




const getRandomElements = () => {
  const elements = [];
  const number = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS_MIN"], _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS_MAX"]);
  for (let i = 0; i < number; i++) {
    const elem = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomName"])();
    elements.push(elem);
  }
  return elements;
};

const generateDate = () => {
  const releaseDate = new Date(Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["FILMS_START_YEAR"], _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["FILMS_END_YEAR"]), Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["START_MONTH"], _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["END_MONTH"]), Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["START_DATE"], _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["END_DATE"]));
  return releaseDate;
};

const generateFilm = () => {
  const filmTitle = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomElem"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["TITLES"]);
  const description = _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["text"];
  const filmPoster = `../../images/posters/${Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomElem"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["POSTERS"])}`;
  const filmDate = generateDate();
  filmDate.setDate(Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["START_DATE"], _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["END_DATE"]));
  filmDate.setMonth(Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["START_MONTH"], _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["END_MONTH"]));
  filmDate.setUTCFullYear(Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["FILMS_START_YEAR"], _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["FILMS_END_YEAR"]));
  filmDate.setHours(Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["FILMS_START_HOUR"], _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["FILMS_END_HOUR"]));
  filmDate.setMinutes(Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["START_MINUTES"], _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["END_MINUTES"]));
  const commentsArray = Object(_mocks_comments_js__WEBPACK_IMPORTED_MODULE_2__["getCommentsArray"])();

  return {
    title: filmTitle,
    poster: filmPoster,
    rating: `${Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["RATING_MIN"], _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["RATING_MAX"])}.${Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["RATING_MIN"], _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["RATING_MAX"])}`,
    shortDescription: Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomDescription"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["text"]),
    genre: Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomArray"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["GENRES"]),
    runtime: {
      hours: filmDate.getHours(),
      minutes: filmDate.getMinutes()
    },
    commentsCount: commentsArray.length,
    comments: commentsArray,
    originalTitle: filmTitle,
    director: Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomName"])(),
    writers: getRandomElements(),
    actors: getRandomElements(),
    releaseFullDate: filmDate,
    releaseYear: filmDate.getFullYear(),
    country: Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomElem"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["COUNTRIES"]),
    fullDescription: description,
    ageRestriction: `${Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["AGE_MIN"], _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["AGE_MAX"])}+`,
    isWatched: Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getBoolean"])(),
    isWatchingList: Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getBoolean"])(),
    isFavorite: Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getBoolean"])()
  };
};


/***/ }),

/***/ "./src/mocks/filter.js":
/*!*****************************!*\
  !*** ./src/mocks/filter.js ***!
  \*****************************/
/*! exports provided: generateFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilter", function() { return generateFilter; });
const filmFilterMap = {
  watchlist: (films) => films.filter((film) => film.isWatchingList).length,
  history: (films) => films.filter((film) => film.isWatched).length,
  favorites: (films) => films.filter((film) => film.isFavorite).length,
};

const generateFilter = (films) => {
  return Object.entries(filmFilterMap).map(([filterName, countFilms]) => {
    return {
      name: filterName,
      count: countFilms(films)
    };
  });
};


/***/ }),

/***/ "./src/utils/const.js":
/*!****************************!*\
  !*** ./src/utils/const.js ***!
  \****************************/
/*! exports provided: CARDS_NUMBER, EXTRAS_NUMBER, EXTRAS_NAMES, FILM_COUNT_PER_STEP, MONTHS, ELEMENTS_MIN, ELEMENTS_MAX, EMOJIS, FILMS_START_YEAR, FILMS_END_YEAR, COMMENTS_START_YEAR, COMMENTS_END_YEAR, START_MONTH, END_MONTH, START_DATE, END_DATE, FILMS_START_HOUR, FILMS_END_HOUR, COMMENTS_START_HOUR, COMMENTS_END_HOUR, START_MINUTES, END_MINUTES, COMMENTS_MAX, RATING_MIN, RATING_MAX, AGE_MIN, AGE_MAX, text, TITLES, POSTERS, GENRES, FIRST_NAMES, LAST_NAMES, COUNTRIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARDS_NUMBER", function() { return CARDS_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTRAS_NUMBER", function() { return EXTRAS_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTRAS_NAMES", function() { return EXTRAS_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILM_COUNT_PER_STEP", function() { return FILM_COUNT_PER_STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTHS", function() { return MONTHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEMENTS_MIN", function() { return ELEMENTS_MIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEMENTS_MAX", function() { return ELEMENTS_MAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMOJIS", function() { return EMOJIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILMS_START_YEAR", function() { return FILMS_START_YEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILMS_END_YEAR", function() { return FILMS_END_YEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMENTS_START_YEAR", function() { return COMMENTS_START_YEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMENTS_END_YEAR", function() { return COMMENTS_END_YEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_MONTH", function() { return START_MONTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END_MONTH", function() { return END_MONTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_DATE", function() { return START_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END_DATE", function() { return END_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILMS_START_HOUR", function() { return FILMS_START_HOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILMS_END_HOUR", function() { return FILMS_END_HOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMENTS_START_HOUR", function() { return COMMENTS_START_HOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMENTS_END_HOUR", function() { return COMMENTS_END_HOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_MINUTES", function() { return START_MINUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END_MINUTES", function() { return END_MINUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMENTS_MAX", function() { return COMMENTS_MAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RATING_MIN", function() { return RATING_MIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RATING_MAX", function() { return RATING_MAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGE_MIN", function() { return AGE_MIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGE_MAX", function() { return AGE_MAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLES", function() { return TITLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSTERS", function() { return POSTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENRES", function() { return GENRES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRST_NAMES", function() { return FIRST_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_NAMES", function() { return LAST_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTRIES", function() { return COUNTRIES; });
const CARDS_NUMBER = 18;
const EXTRAS_NUMBER = 2;
const EXTRAS_NAMES = [`Top rated`, `Most watched`];
const FILM_COUNT_PER_STEP = 5;
const MONTHS = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
const ELEMENTS_MIN = 2;
const ELEMENTS_MAX = 4;
const EMOJIS = [`smile`, `sleeping`, `puke`, `angry`];
const FILMS_START_YEAR = 1950;
const FILMS_END_YEAR = 2020;
const COMMENTS_START_YEAR = 2003;
const COMMENTS_END_YEAR = 2020;
const START_MONTH = 0;
const END_MONTH = 11;
const START_DATE = 1;
const END_DATE = 28;
const FILMS_START_HOUR = 0;
const FILMS_END_HOUR = 3;
const COMMENTS_START_HOUR = 0;
const COMMENTS_END_HOUR = 23;
const START_MINUTES = 0;
const END_MINUTES = 59;
const COMMENTS_MAX = 5;
const RATING_MIN = 0;
const RATING_MAX = 9;
const AGE_MIN = 0;
const AGE_MAX = 18;

const text = `The Woman in Black ruined Christmas. You wake up next morning, Christmas Day, you’re still scared. Few horror films have acquired the cult reputation of Herbert Wise’s TV production of The Woman in Black. Adapted by visionary British sci-fi screenwriter Nigel Kneale from Susan Hill’s 1983 novella, it stars a 31-year-old Adrian Rawlins as Edwardian solicitor Arthur Kidd, sent to settle the estate of an eccentric widow, Mrs Drablow, on the north-east coast of England. There, in a remote house at the end of a shingle causeway, he is tormented by terrifying noises and cries – and appearances from a tall woman dressed in black (Pauline Moran), who comes to exert a malevolent hold over his life. The film was a hit with critics and audience alike, yet while Hill’s book went on to sell millions and become a set GCSE text, and Stephen Mallatratt’s stage adaptation began a West End run in 1989 that was halted by Covid-19, Wise’s film slid into relative obscurity.`;


const TITLES = [
  `Playful Wave`,
  `The Silent Legend`,
  `School of Dragon`,
  `The Eye's Scent`,
  `The Children of the Shard`,
  `Game in the Butterfly`
];

const POSTERS = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`
];

const GENRES = [
  `Adventure`,
  `Comedy`,
  `Crime`,
  `Drama`,
  `Fantasy`,
  `Historical`,
  `Horror`,
  `Romance`,
  `Thriller`
];

const FIRST_NAMES = [
  `Jean`,
  `Julia`,
  `Meridith`,
  `Leon`,
  `Victor`,
  `Nickolas`,
  `Helga`,
  `Maria`
];

const LAST_NAMES = [
  `Garsia`,
  `Sveborg`,
  `Tuussinnen`,
  `Warts`,
  `Smirnoff`,
  `Grishko`,
  `Luongo`,
  `ibn Hottab`
];

const COUNTRIES = [
  `USA`,
  `Germany`,
  `Canada`,
  `Italy`,
  `Russia`,
  `South Korea`
];


/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: RenderPosition, render, renderTemplate, createElement, getRandomInteger, getRandomIndex, getRandomElem, getRandomArray, getBoolean, getRandomName, getRandomDescription, getRunTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomIndex", function() { return getRandomIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomElem", function() { return getRandomElem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomArray", function() { return getRandomArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBoolean", function() { return getBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomName", function() { return getRandomName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomDescription", function() { return getRandomDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRunTime", function() { return getRunTime; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.js */ "./src/utils/const.js");


const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};


const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomIndex = (arr) => {
  return getRandomInteger(0, arr.length - 1);
};

const getRandomElem = (elements) => {
  return elements[getRandomIndex(elements)];
};

const getShuffledArray = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }

  return arr;
};

const getRandomArray = (arr) => {
  const clonedArr = arr.slice();

  const shuffledArr = getShuffledArray(clonedArr);
  const result = shuffledArr.slice(getRandomInteger(1, shuffledArr.length - 1));

  return result;
};

const getBoolean = () => {
  return Boolean(getRandomInteger(0, 1));
};

const getRandomName = () => {
  return `${getRandomElem(_const_js__WEBPACK_IMPORTED_MODULE_0__["FIRST_NAMES"])} ${getRandomElem(_const_js__WEBPACK_IMPORTED_MODULE_0__["LAST_NAMES"])}`;
};

const getRandomDescription = (description) => {
  const sentences = description.split(`. `);
  const randomSentences = getRandomArray(sentences);
  const randomDescription = `${randomSentences.join(`. `)}.`;

  return randomDescription;
};

const getRunTime = (hours, minutes) => {
  if (hours === 0) {
    return (
      ` ${minutes}m`
    );
  } else if (minutes === 0) {
    return (
      `${hours}h`
    );
  } else {
    return (
      `${hours}h ${minutes}m`
    );
  }
};


/***/ }),

/***/ "./src/view/film-card.js":
/*!*******************************!*\
  !*** ./src/view/film-card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmCard; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");


const createFilmCard = (film) => {
  const {title, poster, rating, shortDescription, genre, runtime, commentsCount, releaseYear, isWatched, isWatchingList, isFavorite} = film;

  const mainGenre = genre[0];

  const filmRuntime = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRunTime"])(runtime.hours, runtime.minutes);

  const getShortDescription = () => {
    if (shortDescription.length < 140) {
      return shortDescription;
    } else {
      const shortenedDescription = `${shortDescription.substring(0, 140)}...`;
      return shortenedDescription;
    }
  };

  const getComments = () => commentsCount > 1 ? `${commentsCount} comments` : `${commentsCount} comment`;

  const watchingListClassName = isWatchingList ? `film-card__controls-item--add-to-watchlist film-card__controls-item--active` : `film-card__controls-item--add-to-watchlist`;
  const favoriteClassName = isFavorite ? `film-card__controls-item--favorite film-card__controls-item--active` : `film-card__controls-item--favorite`;
  const watchedClassName = isWatched ? `film-card__controls-item--mark-as-watched  film-card__controls-item--active` : `film-card__controls-item--mark-as-watched`; // Проверить, правильные ли классы и логика показа

  return (
    `<article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${releaseYear}</span>
        <span class="film-card__duration">${filmRuntime}</span>
        <span class="film-card__genre">${mainGenre}</span>
      </p>
      <img src="${poster}" alt="${title}" class="film-card__poster">
      <p class="film-card__description">${getShortDescription()}</p>
      <a class="film-card__comments">${getComments()}</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button ${watchingListClassName}">Add to watchlist</button>
        <button class="film-card__controls-item button ${watchedClassName}">Mark as watched</button>
        <button class="film-card__controls-item button ${favoriteClassName}">Mark as favorite</button>
      </form>
    </article>`
  );
};

class FilmCard {
  constructor(film) {
    this._film = film;
    this._element = null;
  }

  getTemplate() {
    return createFilmCard(this._film);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/film-details-popup.js":
/*!****************************************!*\
  !*** ./src/view/film-details-popup.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmDetailsPopup; });
/* harmony import */ var _utils_const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/const.js */ "./src/utils/const.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");



const createFilmDetailsPopup = (film) => {
  const {title, rating, genre, runtime, commentsCount, comments, poster, originalTitle, director, writers, actors, releaseFullDate, country, fullDescription, ageRestriction, isWatched, isWatchingList, isFavorite} = film;
  const day = releaseFullDate.getDate();
  const month = releaseFullDate.getMonth();
  const year = releaseFullDate.getFullYear();

  const monthToWord = (elem) => {
    const word = _utils_const_js__WEBPACK_IMPORTED_MODULE_0__["MONTHS"][elem];
    return word;
  };

  const releaseDate = `${day} ${monthToWord(month)} ${year}`;

  const watchingListChecked = isWatchingList ? `checked` : ``;
  const favoriteChecked = isFavorite ? `checked` : ``;
  const watchedChecked = isWatched ? `checked` : ``;

  const watchingListLabel = isWatchingList ? `Added to watchlist` : `Add to watchlist`;
  const watchedLabel = isWatched ? `Already watched` : `Mark as watched`;
  const favoriteLabel = isFavorite ? `Added to favorites` : `Add to favorites`;

  const filmRuntime = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRunTime"])(runtime.hours, runtime.minutes);

  const createGenresTemplate = () => {
    return (
      `<tr class="film-details__row">
          <td class="film-details__term">Genre</td>
          <td class="film-details__cell">
            <span class="film-details__genre">${genre.join(` `)}</span>
        </tr>`
    );
  };

  const createCommentsTemplate = () => {
    const commentsList = [];

    for (let item of comments) {
      const commentYear = item.date.getFullYear();
      const commentMonth = monthToWord(item.date.getMonth());
      const commentDate = item.date.getDate();

      let commentHour = item.date.getHours();
      if (commentHour < 10) {
        commentHour = `0${commentHour}`;
      }

      let commentMinutes = item.date.getMinutes();
      if (commentMinutes < 10) {
        commentMinutes = commentMinutes.toString().padStart(2, `0`);
      }

      const commentFullDate = `${commentYear}/${commentMonth}/${commentDate}  ${commentHour}:${commentMinutes}`;

      item =
          `<li class="film-details__comment">
          <span class="film-details__comment-emoji">
            <img src="./images/emoji/${item.emoji}.png" width="55" height="55" alt="emoji-${item.emoji}">
          </span>
          <div>
            <p class="film-details__comment-text">${item.content}</p>
            <p class="film-details__comment-info">
              <span class="film-details__comment-author">${item.author}</span>
              <span class="film-details__comment-day">${commentFullDate}</span>
              <button class="film-details__comment-delete">Delete</button>
            </p>
          </div>
        </li>`
      ;
      commentsList.push(item);
    }

    return commentsList.join(``);
  };

  return (
    `<section class="film-details">
    <form class="film-details__inner" action="" method="get">
      <div class="form-details__top-container">
        <div class="film-details__close">
          <button class="film-details__close-btn" type="button">close</button>
        </div>
        <div class="film-details__info-wrap">
          <div class="film-details__poster">
            <img class="film-details__poster-img" src="${poster}" alt="${title}">
            <p class="film-details__age">${ageRestriction}</p>
          </div>
          <div class="film-details__info">
            <div class="film-details__info-head">
              <div class="film-details__title-wrap">
                <h3 class="film-details__title">${title}</h3>
                <p class="film-details__title-original">Original: ${originalTitle}</p>
              </div>
              <div class="film-details__rating">
                <p class="film-details__total-rating">${rating}</p>
              </div>
            </div>
            <table class="film-details__table">
              <tr class="film-details__row">
                <td class="film-details__term">Director</td>
                <td class="film-details__cell">${director}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Writers</td>
                <td class="film-details__cell">${writers.join(`, `)}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Actors</td>
                <td class="film-details__cell">${actors.join(`, `)}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Release Date</td>
                <td class="film-details__cell">${releaseDate}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Runtime</td>
                <td class="film-details__cell">${filmRuntime}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Country</td>
                <td class="film-details__cell">${country}</td>
              </tr>
                ${createGenresTemplate()}
            </table>
            <p class="film-details__film-description">
              ${fullDescription}
            </p>
          </div>
        </div>
        <section class="film-details__controls">
          <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${watchingListChecked}>
          <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">${watchingListLabel}</label>

          <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${watchedChecked}>
          <label for="watched" class="film-details__control-label film-details__control-label--watched">${watchedLabel}</label>

          <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${favoriteChecked}>
          <label for="favorite" class="film-details__control-label film-details__control-label--favorite">${favoriteLabel}</label>
        </section>
      </div>
      <div class="form-details__bottom-container">
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${commentsCount}</span></h3>
          <ul class="film-details__comments-list">
          ${createCommentsTemplate()}
          </ul>
          <div class="film-details__new-comment">
            <div for="add-emoji" class="film-details__add-emoji-label"></div>
            <label class="film-details__comment-label">
              <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
            </label>
            <div class="film-details__emoji-list">
              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
              <label class="film-details__emoji-label" for="emoji-smile">
                <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
              </label>
              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
              <label class="film-details__emoji-label" for="emoji-sleeping">
                <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
              </label>
              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
              <label class="film-details__emoji-label" for="emoji-puke">
                <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
              </label>
              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
              <label class="film-details__emoji-label" for="emoji-angry">
                <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
              </label>
            </div>
          </div>
        </section>
      </div>
    </form>
  </section>`
  );
};

class FilmDetailsPopup {
  constructor(film) {
    this._film = film;
    this._element = null;
  }

  getTemplate() {
    return createFilmDetailsPopup(this._film);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/films-list-container.js":
/*!******************************************!*\
  !*** ./src/view/films-list-container.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsListContainer; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");


const createFilmsListContainer = () => {
  return (
    `<div class="films-list__container"></div>`
  );
};

class FilmsListContainer {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmsListContainer();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/films-list-extra.js":
/*!**************************************!*\
  !*** ./src/view/films-list-extra.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsListExtra; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");


const createFilmsListExtra = (name) => {
  return (
    `<section class="films-list--extra" name="${name}">
      <h2 class="films-list__title">${name}</h2>
    </section>`
  );
};

class FilmsListExtra {
  constructor(name) {
    this.name = name;
    this._element = null;
  }

  getTemplate() {
    return createFilmsListExtra(this.name);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/films-list.js":
/*!********************************!*\
  !*** ./src/view/films-list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsList; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");


const createFilmsList = () => {
  return (
    `<section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    </section>`
  );
};

class FilmsList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmsList();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/footer.js":
/*!****************************!*\
  !*** ./src/view/footer.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterStats; });
/* harmony import */ var _utils_const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/const.js */ "./src/utils/const.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");



const createFooterStats = () => {
  return (
    `<section class="footer__statistics">
      <p>${_utils_const_js__WEBPACK_IMPORTED_MODULE_0__["CARDS_NUMBER"]} movies inside</p>
    </section>`
  );
};

class FooterStats {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFooterStats();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}



/***/ }),

/***/ "./src/view/main-films-section.js":
/*!****************************************!*\
  !*** ./src/view/main-films-section.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainFilmsSection; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");


const createMainFilmsSection = () => {
  return (
    `<section class="films"></section>`
  );
};

class MainFilmsSection {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createMainFilmsSection();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/main-site-menu.js":
/*!************************************!*\
  !*** ./src/view/main-site-menu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteMenu; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");


const createFilterTemplate = (filter) => {
  const {name, count} = filter;

  const upperName = () => {
    const newName = name.charAt(0).toUpperCase() + name.slice(1);
    return newName;
  };

  return (
    `<a href="#${name}" class="main-navigation__item">${upperName()} <span class="main-navigation__item-count">${count}</span></a>`
  );
};


const createMainSiteMenu = (filterItems) => {
  const filterItemsTemplate = filterItems
    .map((filter) => createFilterTemplate(filter))
    .join(``);


  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        ${filterItemsTemplate}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
  );
};

class SiteMenu {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  getTemplate() {
    return createMainSiteMenu(this._filters);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/main-sorting-filter.js":
/*!*****************************************!*\
  !*** ./src/view/main-sorting-filter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainSortingFilters; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");


const createMainSortingFilter = () => {
  return (
    `<ul class="sort">
      <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
      <li><a href="#" class="sort__button">Sort by date</a></li>
      <li><a href="#" class="sort__button">Sort by rating</a></li>
    </ul>`
  );
};

class MainSortingFilters {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createMainSortingFilter();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/show-more-button.js":
/*!**************************************!*\
  !*** ./src/view/show-more-button.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowMoreButton; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");


const createShowMoreButton = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

class ShowMoreButton {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createShowMoreButton();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/user-status.js":
/*!*********************************!*\
  !*** ./src/view/user-status.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserStatus; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");


const createUserStatus = () => {
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">Movie Buff</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};

class UserStatus {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createUserStatus();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map