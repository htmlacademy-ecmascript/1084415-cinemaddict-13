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
/* harmony import */ var _src_utils_const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/utils/const.js */ "./src/utils/const.js");
/* harmony import */ var _src_view_user_status_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/view/user-status.js */ "./src/view/user-status.js");
/* harmony import */ var _src_view_main_site_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/view/main-site-menu.js */ "./src/view/main-site-menu.js");
/* harmony import */ var _src_view_main_sorting_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/view/main-sorting-filter.js */ "./src/view/main-sorting-filter.js");
/* harmony import */ var _src_view_main_films_section_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/view/main-films-section.js */ "./src/view/main-films-section.js");
/* harmony import */ var _src_view_films_list_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/view/films-list.js */ "./src/view/films-list.js");
/* harmony import */ var _src_view_films_list_container_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/view/films-list-container.js */ "./src/view/films-list-container.js");
/* harmony import */ var _src_view_film_card_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/view/film-card.js */ "./src/view/film-card.js");
/* harmony import */ var _src_view_show_more_button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/view/show-more-button.js */ "./src/view/show-more-button.js");
/* harmony import */ var _src_view_films_list_extra_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/view/films-list-extra.js */ "./src/view/films-list-extra.js");
/* harmony import */ var _src_view_footer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/view/footer.js */ "./src/view/footer.js");
/* harmony import */ var _src_view_film_details_popup_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/view/film-details-popup.js */ "./src/view/film-details-popup.js");













const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeader = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeader, Object(_src_view_user_status_js__WEBPACK_IMPORTED_MODULE_1__["createUserStatus"])());
render(siteMainElement, Object(_src_view_main_site_menu_js__WEBPACK_IMPORTED_MODULE_2__["createMainSiteMenu"])());
render(siteMainElement, Object(_src_view_main_sorting_filter_js__WEBPACK_IMPORTED_MODULE_3__["createMainSortingFilter"])());

const siteFooter = document.querySelector(`.footer`);
render(siteFooter, Object(_src_view_footer_js__WEBPACK_IMPORTED_MODULE_10__["createFooterStats"])());

render(siteMainElement, Object(_src_view_main_films_section_js__WEBPACK_IMPORTED_MODULE_4__["createMainFilmsSection"])());
const siteMainFilms = siteMainElement.querySelector(`.films`);
render(siteMainFilms, Object(_src_view_films_list_js__WEBPACK_IMPORTED_MODULE_5__["createFilmsList"])());
const filmsList = siteMainFilms.querySelector(`.films-list`);
render(filmsList, Object(_src_view_films_list_container_js__WEBPACK_IMPORTED_MODULE_6__["createFilmsListContainer"])());
const filmsListContainer = siteMainFilms.querySelector(`.films-list__container`);

Array(_src_utils_const_js__WEBPACK_IMPORTED_MODULE_0__["CARDS_NUMBER"]).fill(``).forEach(function () {
  render(filmsListContainer, Object(_src_view_film_card_js__WEBPACK_IMPORTED_MODULE_7__["createFilmCard"])());
});

render(filmsList, Object(_src_view_show_more_button_js__WEBPACK_IMPORTED_MODULE_8__["createShowMoreButton"])());

Array(_src_utils_const_js__WEBPACK_IMPORTED_MODULE_0__["EXTRAS_NUMBER"]).fill(``).forEach(function () {
  render(siteMainFilms, Object(_src_view_films_list_extra_js__WEBPACK_IMPORTED_MODULE_9__["createFilmsListExtra"])());
});

const filmsListsExtra = siteMainFilms.querySelectorAll(`.films-list--extra`);
for (const filmsListExtra of filmsListsExtra) {
  render(filmsListExtra, Object(_src_view_films_list_container_js__WEBPACK_IMPORTED_MODULE_6__["createFilmsListContainer"])());
  const extraContainer = filmsListExtra.querySelector(`.films-list__container`);

  Array(_src_utils_const_js__WEBPACK_IMPORTED_MODULE_0__["EXTRAS_NUMBER"]).fill(``).forEach(function () {
    render(extraContainer, Object(_src_view_film_card_js__WEBPACK_IMPORTED_MODULE_7__["createFilmCard"])());
  });
}

render(siteMainElement, Object(_src_view_film_details_popup_js__WEBPACK_IMPORTED_MODULE_11__["createFilmDetailsPopup"])());




/***/ }),

/***/ "./src/utils/const.js":
/*!****************************!*\
  !*** ./src/utils/const.js ***!
  \****************************/
/*! exports provided: CARDS_NUMBER, EXTRAS_NUMBER, EXTRAS_NAMES, FILM_COUNT_PER_STEP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARDS_NUMBER", function() { return CARDS_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTRAS_NUMBER", function() { return EXTRAS_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTRAS_NAMES", function() { return EXTRAS_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILM_COUNT_PER_STEP", function() { return FILM_COUNT_PER_STEP; });
const CARDS_NUMBER = 7;
const EXTRAS_NUMBER = 2;
const EXTRAS_NAMES = [`Top rated`, `Most watched`];
const FILM_COUNT_PER_STEP = 5;


/***/ }),

/***/ "./src/view/film-card.js":
/*!*******************************!*\
  !*** ./src/view/film-card.js ***!
  \*******************************/
/*! exports provided: createFilmCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmCard", function() { return createFilmCard; });
const createFilmCard = () => {
  return (
    `<article class="film-card">
      <h3 class="film-card__title">The Dance of Life</h3>
      <p class="film-card__rating">8.3</p>
      <p class="film-card__info">
        <span class="film-card__year">1929</span>
        <span class="film-card__duration">1h 55m</span>
        <span class="film-card__genre">Musical</span>
      </p>
      <img src="./images/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">
      <p class="film-card__description">Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…</p>
      <a class="film-card__comments">5 comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>`
  );
};




/***/ }),

/***/ "./src/view/film-details-popup.js":
/*!****************************************!*\
  !*** ./src/view/film-details-popup.js ***!
  \****************************************/
/*! exports provided: createFilmDetailsPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmDetailsPopup", function() { return createFilmDetailsPopup; });
const createFilmDetailsPopup = () => {
  return (
    `<section class="film-details">
    <form class="film-details__inner" action="" method="get">
      <div class="form-details__top-container">
        <div class="film-details__close">
          <button class="film-details__close-btn" type="button">close</button>
        </div>
        <div class="film-details__info-wrap">
          <div class="film-details__poster">
            <img class="film-details__poster-img" src="./images/posters/the-great-flamarion.jpg" alt="">
            <p class="film-details__age">18+</p>
          </div>
          <div class="film-details__info">
            <div class="film-details__info-head">
              <div class="film-details__title-wrap">
                <h3 class="film-details__title">The Great Flamarion</h3>
                <p class="film-details__title-original">Original: The Great Flamarion</p>
              </div>
              <div class="film-details__rating">
                <p class="film-details__total-rating">8.9</p>
              </div>
            </div>
            <table class="film-details__table">
              <tr class="film-details__row">
                <td class="film-details__term">Director</td>
                <td class="film-details__cell">Anthony Mann</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Writers</td>
                <td class="film-details__cell">Anne Wigton, Heinz Herald, Richard Weil</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Actors</td>
                <td class="film-details__cell">Erich von Stroheim, Mary Beth Hughes, Dan Duryea</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Release Date</td>
                <td class="film-details__cell">30 March 1945</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Runtime</td>
                <td class="film-details__cell">1h 18m</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Country</td>
                <td class="film-details__cell">USA</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Genres</td>
                <td class="film-details__cell">
                  <span class="film-details__genre">Drama</span>
                  <span class="film-details__genre">Film-Noir</span>
                  <span class="film-details__genre">Mystery</span></td>
              </tr>
            </table>
            <p class="film-details__film-description">
              The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Great Flamarion (Erich von Stroheim) is an arrogant, friendless, and misogynous marksman who displays his trick gunshot act in the vaudeville circuit. His show features a beautiful assistant, Connie (Mary Beth Hughes) and her drunken husband Al (Dan Duryea), Flamarion's other assistant. Flamarion falls in love with Connie, the movie's femme fatale, and is soon manipulated by her into killing her no good husband during one of their acts.
            </p>
          </div>
        </div>
        <section class="film-details__controls">
          <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
          <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>
          <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
          <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>
          <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
          <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
        </section>
      </div>
      <div class="form-details__bottom-container">
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">4</span></h3>
          <ul class="film-details__comments-list">
            <li class="film-details__comment">
              <span class="film-details__comment-emoji">
                <img src="./images/emoji/smile.png" width="55" height="55" alt="emoji-smile">
              </span>
              <div>
                <p class="film-details__comment-text">Interesting setting and a good cast</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">Tim Macoveev</span>
                  <span class="film-details__comment-day">2019/12/31 23:59</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>
            <li class="film-details__comment">
              <span class="film-details__comment-emoji">
                <img src="./images/emoji/sleeping.png" width="55" height="55" alt="emoji-sleeping">
              </span>
              <div>
                <p class="film-details__comment-text">Booooooooooring</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">John Doe</span>
                  <span class="film-details__comment-day">2 days ago</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>
            <li class="film-details__comment">
              <span class="film-details__comment-emoji">
                <img src="./images/emoji/puke.png" width="55" height="55" alt="emoji-puke">
              </span>
              <div>
                <p class="film-details__comment-text">Very very old. Meh</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">John Doe</span>
                  <span class="film-details__comment-day">2 days ago</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>
            <li class="film-details__comment">
              <span class="film-details__comment-emoji">
                <img src="./images/emoji/angry.png" width="55" height="55" alt="emoji-angry">
              </span>
              <div>
                <p class="film-details__comment-text">Almost two hours? Seriously?</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">John Doe</span>
                  <span class="film-details__comment-day">Today</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>
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




/***/ }),

/***/ "./src/view/films-list-container.js":
/*!******************************************!*\
  !*** ./src/view/films-list-container.js ***!
  \******************************************/
/*! exports provided: createFilmsListContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsListContainer", function() { return createFilmsListContainer; });
const createFilmsListContainer = () => {
  return (
    `<div class="films-list__container"></div>`
  );
};




/***/ }),

/***/ "./src/view/films-list-extra.js":
/*!**************************************!*\
  !*** ./src/view/films-list-extra.js ***!
  \**************************************/
/*! exports provided: createFilmsListExtra */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsListExtra", function() { return createFilmsListExtra; });
const createFilmsListExtra = () => {
  return (
    `<section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
    </section>`
  );
};




/***/ }),

/***/ "./src/view/films-list.js":
/*!********************************!*\
  !*** ./src/view/films-list.js ***!
  \********************************/
/*! exports provided: createFilmsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsList", function() { return createFilmsList; });
const createFilmsList = () => {
  return (
    `<section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    </section>`
  );
};




/***/ }),

/***/ "./src/view/footer.js":
/*!****************************!*\
  !*** ./src/view/footer.js ***!
  \****************************/
/*! exports provided: createFooterStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFooterStats", function() { return createFooterStats; });
const createFooterStats = () => {
  return (
    `<section class="footer__statistics">
      <p>130 291 movies inside</p>
    </section>`
  );
};




/***/ }),

/***/ "./src/view/main-films-section.js":
/*!****************************************!*\
  !*** ./src/view/main-films-section.js ***!
  \****************************************/
/*! exports provided: createMainFilmsSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMainFilmsSection", function() { return createMainFilmsSection; });
const createMainFilmsSection = () => {
  return (
    `<section class="films"></section>`
  );
};




/***/ }),

/***/ "./src/view/main-site-menu.js":
/*!************************************!*\
  !*** ./src/view/main-site-menu.js ***!
  \************************************/
/*! exports provided: createMainSiteMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMainSiteMenu", function() { return createMainSiteMenu; });
const createMainSiteMenu = () => {
  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
        <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
        <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
  );
};




/***/ }),

/***/ "./src/view/main-sorting-filter.js":
/*!*****************************************!*\
  !*** ./src/view/main-sorting-filter.js ***!
  \*****************************************/
/*! exports provided: createMainSortingFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMainSortingFilter", function() { return createMainSortingFilter; });
const createMainSortingFilter = () => {
  return (
    `<ul class="sort">
      <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
      <li><a href="#" class="sort__button">Sort by date</a></li>
      <li><a href="#" class="sort__button">Sort by rating</a></li>
    </ul>`
  );
};




/***/ }),

/***/ "./src/view/show-more-button.js":
/*!**************************************!*\
  !*** ./src/view/show-more-button.js ***!
  \**************************************/
/*! exports provided: createShowMoreButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShowMoreButton", function() { return createShowMoreButton; });
const createShowMoreButton = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};




/***/ }),

/***/ "./src/view/user-status.js":
/*!*********************************!*\
  !*** ./src/view/user-status.js ***!
  \*********************************/
/*! exports provided: createUserStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserStatus", function() { return createUserStatus; });
const createUserStatus = () => {
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">Movie Buff</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map