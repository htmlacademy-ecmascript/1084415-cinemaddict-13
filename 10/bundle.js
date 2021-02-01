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

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/const.js */ "./src/utils/const.js");
/* harmony import */ var _src_view_user_status_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/view/user-status.js */ "./src/view/user-status.js");
/* harmony import */ var _presenter_movie_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presenter/movie-list.js */ "./src/presenter/movie-list.js");
/* harmony import */ var _src_view_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/view/footer.js */ "./src/view/footer.js");
/* harmony import */ var _mocks_film_card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mocks/film-card.js */ "./src/mocks/film-card.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _presenter_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./presenter/filter.js */ "./src/presenter/filter.js");
/* harmony import */ var _model_films_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model/films.js */ "./src/model/films.js");
/* harmony import */ var _model_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./model/filter.js */ "./src/model/filter.js");










const films = new Array(_utils_const_js__WEBPACK_IMPORTED_MODULE_0__["CARDS_NUMBER"]).fill(``).map(_mocks_film_card_js__WEBPACK_IMPORTED_MODULE_4__["generateFilm"]);

const filmsModel = new _model_films_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
filmsModel.setFilms(films);

const filterModel = new _model_filter_js__WEBPACK_IMPORTED_MODULE_8__["default"]();

const siteHeader = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooter = document.querySelector(`.footer`);

// if (films.length > 0) {
//   render(siteMainFilms, new FilmsListExtra(EXTRAS_NAMES[0]), RenderPosition.BEFOREEND);
//   render(siteMainFilms, new FilmsListExtra(EXTRAS_NAMES[1]), RenderPosition.BEFOREEND);
//   const filmsListsExtra = siteMainFilms.querySelectorAll(`.films-list--extra`);

//   for (const filmsListExtra of filmsListsExtra) {
//     render(filmsListExtra, new FilmsListContainer(), RenderPosition.BEFOREEND);
//     const extraContainer = filmsListExtra.querySelector(`.films-list__container`);
//     for (let i = 0; i < EXTRAS_NUMBER; i++) {
//       const randomIndex = getRandomIndex(films);
//       renderFilm(extraContainer, films[randomIndex]);
//     }
//   }
// }


Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["render"])(siteHeader, new _src_view_user_status_js__WEBPACK_IMPORTED_MODULE_1__["default"](), _utils_render_js__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);
const movieList = new _presenter_movie_list_js__WEBPACK_IMPORTED_MODULE_2__["default"](siteMainElement, filmsModel, filterModel);
const filterPresenter = new _presenter_filter_js__WEBPACK_IMPORTED_MODULE_6__["default"](siteMainElement, filmsModel, filterModel);
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["render"])(siteFooter, new _src_view_footer_js__WEBPACK_IMPORTED_MODULE_3__["default"](), _utils_render_js__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);

filterPresenter.init();
movieList.init();


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




const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

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
  filmDate.setMinutes(Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["START_MINUTES"], _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["END_MINUTES"]));
  const commentsArray = Object(_mocks_comments_js__WEBPACK_IMPORTED_MODULE_2__["getCommentsArray"])();

  return {
    id: generateId(),
    title: filmTitle,
    poster: filmPoster,
    rating: `${Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["RATING_MIN"], _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["RATING_MAX"])}.${Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["RATING_MIN"], _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["RATING_MAX"])}`,
    shortDescription: Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomDescription"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["text"]),
    genre: Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomArray"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["GENRES"]),
    runtime: filmDate.getMinutes(),
    commentsCount: commentsArray.length,
    comments: commentsArray,
    originalTitle: filmTitle,
    director: Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomName"])(),
    writers: getRandomElements(),
    actors: getRandomElements(),
    releaseFullDate: filmDate,
    country: Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomElem"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["COUNTRIES"]),
    fullDescription: description,
    ageRestriction: `${Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["AGE_MIN"], _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["AGE_MAX"])}+`,
    isWatched: Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getBoolean"])(),
    isWatchingList: Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getBoolean"])(),
    isFavorite: Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getBoolean"])()
  };
};


/***/ }),

/***/ "./src/model/films.js":
/*!****************************!*\
  !*** ./src/model/films.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsModel; });
/* harmony import */ var _utils_observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/observer.js */ "./src/utils/observer.js");


class FilmsModel extends _utils_observer_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._films = [];
  }

  setFilms(films) {
    this._films = films.slice();
  }

  getFilms() {
    return this._films;
  }

  updateFilm(updateType, update) {
    const index = this._films.findIndex((film) => film.id === update.id);

    if (index === -1) {
      throw new Error(`Can't update nonexistent film`);
    }

    this._films = [
      ...this._films.slice(0, index),
      update,
      ...this._films.slice(index + 1)
    ];

    this._notify(updateType, update);
  }

  // addComment(updateType, update) {
  //   this._tasks = [
  //     update,
  //     ...this._tasks
  //   ];

  //   this._notify(updateType, update);
  // }

  // deleteComment(updateType, update) {
  //   const index = this._tasks.findIndex((task) => task.id === update.id);

  //   if (index === -1) {
  //     throw new Error(`Can't delete unexisting task`);
  //   }

  //   this._tasks = [
  //     ...this._tasks.slice(0, index),
  //     ...this._tasks.slice(index + 1)
  //   ];

  //   this._notify(updateType);
  // }
}


/***/ }),

/***/ "./src/model/filter.js":
/*!*****************************!*\
  !*** ./src/model/filter.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilterModel; });
/* harmony import */ var _utils_observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/observer.js */ "./src/utils/observer.js");
/* harmony import */ var _utils_const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/const.js */ "./src/utils/const.js");



class FilterModel extends _utils_observer_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._activeFilter = _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterType"].ALL;
  }

  setFilter(updateType, filter) {
    this._activeFilter = filter;
    this._notify(updateType, filter);
  }

  getFilter() {
    return this._activeFilter;
  }
}


/***/ }),

/***/ "./src/presenter/film-card.js":
/*!************************************!*\
  !*** ./src/presenter/film-card.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmCardPresenter; });
/* harmony import */ var _view_film_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/film-card.js */ "./src/view/film-card.js");
/* harmony import */ var _view_film_details_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/film-details-popup.js */ "./src/view/film-details-popup.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _utils_const_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/const.js */ "./src/utils/const.js");





class FilmCardPresenter {
  constructor(movieListContainer, changeData) {
    this._movieListContainer = movieListContainer;
    this._changeData = changeData;

    this._filmComponent = null;
    this._filmDetailsComponent = null;

    this._handleOpenClick = this._handleOpenClick.bind(this);
    this._handleWatchlistClick = this._handleWatchlistClick.bind(this);
    this._handleWatchedClick = this._handleWatchedClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
    this._handleCloseClick = this._handleCloseClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
    this._handleDeleteComment = this._handleDeleteComment.bind(this);
    this._handleAddComment = this._handleAddComment.bind(this);
  }

  init(film) {
    this._film = film;

    const prevFilmComponent = this._filmComponent;
    const prevFilmDetailsComponent = this._filmDetailsComponent;

    this._filmComponent = new _view_film_card_js__WEBPACK_IMPORTED_MODULE_0__["default"](film);
    this._filmDetailsComponent = new _view_film_details_popup_js__WEBPACK_IMPORTED_MODULE_1__["default"](film);
    this._popupContainer = document.querySelector(`main`);

    this._filmComponent.setOpenClickHandler(this._handleOpenClick);
    this._filmComponent.setWatchlistClickHandler(this._handleWatchlistClick);
    this._filmComponent.setWatchedClickHandler(this._handleWatchedClick);
    this._filmComponent.setFavoriteClickHandler(this._handleFavoriteClick);
    this._filmDetailsComponent.setWatchlistPopupClickHandler(this._handleWatchlistPopupClick);
    this._filmDetailsComponent.setWatchedPopupClickHandler(this._handleWatchedPopupClick);
    this._filmDetailsComponent.setFavoritePopupClickHandler(this._handleFavoritePopupClick);
    this._filmDetailsComponent.setClosePopupHandler(this._handleCloseClick);
    // this._filmDetailsComponent.setDeleteCommentHandler(this._handleDeleteComment);
    // this._filmDetailsComponent.setAddCommentHandler(this._handleAddComment);

    if (prevFilmComponent === null || prevFilmDetailsComponent === null) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(this._movieListContainer, this._filmComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].BEFOREEND);
      return;
    }

    if (this._movieListContainer.getElement().contains(prevFilmComponent.getElement())) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._filmComponent, prevFilmComponent);
    }

    if (this._popupContainer.contains(prevFilmDetailsComponent.getElement())) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._filmDetailsComponent, prevFilmDetailsComponent);
    }

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevFilmComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevFilmDetailsComponent);
  }

  destroy() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._filmComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._filmDetailsComponent);
  }

  _escKeyDownHandler(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();

      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._filmDetailsComponent);
    }
  }

  _handleOpenClick() {
    const prevPopup = document.querySelector(`.film-details`);
    if (prevPopup !== null) {
      prevPopup.remove();
    }

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(this._popupContainer, this._filmDetailsComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].BEFOREEND);
    document.addEventListener(`keydown`, this._escKeyDownHandler);
  }

  _handleCloseClick(update) {
    // remove(this._filmDetailsComponent);
    // document.removeEventListener(`keydown`, this._escKeyDownHandler);

    // const isMinorUpdate =
    //   this._filmComponent.isFavorite !== update.isFavorite ||
    //   this._filmComponent.isWatched !== update.isWatched ||
    //   this._filmComponent.isWatchingList !== update.isWatchingList;

    this._changeData(
        _utils_const_js__WEBPACK_IMPORTED_MODULE_3__["UserAction"].UPDATE_FILM,
        _utils_const_js__WEBPACK_IMPORTED_MODULE_3__["UpdateType"].MINOR,
        // isMinorUpdate ? UpdateType.MINOR : UpdateType.PATCH,
        update
    );
  }

  _handleWatchlistClick() {
    this._changeData(
        _utils_const_js__WEBPACK_IMPORTED_MODULE_3__["UserAction"].UPDATE_FILM,
        _utils_const_js__WEBPACK_IMPORTED_MODULE_3__["UpdateType"].MINOR,
        Object.assign(
            {},
            this._film,
            {
              isWatchingList: !this._film.isWatchingList
            }
        )
    );
  }

  _handleWatchlistPopupClick() {
    // Или это здесь презентер должен перерисовать попап на основании полученного update?
    return;
  }

  _handleWatchedClick() {
    this._changeData(
        _utils_const_js__WEBPACK_IMPORTED_MODULE_3__["UserAction"].UPDATE_FILM,
        _utils_const_js__WEBPACK_IMPORTED_MODULE_3__["UpdateType"].MINOR,
        Object.assign(
            {},
            this._film,
            {
              isWatched: !this._film.isWatched
            }
        )
    );
  }

  _handleWatchedPopupClick() {
    return;
  }

  _handleFavoriteClick() {
    this._changeData(
        _utils_const_js__WEBPACK_IMPORTED_MODULE_3__["UserAction"].UPDATE_FILM,
        _utils_const_js__WEBPACK_IMPORTED_MODULE_3__["UpdateType"].MINOR,
        Object.assign(
            {},
            this._film,
            {
              isFavorite: !this._film.isFavorite
            }
        )
    );
  }

  _handleFavoritePopupClick() {
    return;
  }

  _handleDeleteComment() {
    return;
  }

  _handleAddComment() {
    return;
  }
}


/***/ }),

/***/ "./src/presenter/filter.js":
/*!*********************************!*\
  !*** ./src/presenter/filter.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _view_main_site_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/main-site-menu.js */ "./src/view/main-site-menu.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _utils_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/filter.js */ "./src/utils/filter.js");
/* harmony import */ var _utils_const_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/const.js */ "./src/utils/const.js");





class Filter {
  constructor(filterContainer, filmsModel, filterModel) {
    this._filterContainer = filterContainer;
    this._filterModel = filterModel;
    this._filmsModel = filmsModel;
    this._currentFilter = null;

    this._filterComponent = null;

    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);

    this._filmsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);
  }

  init() {
    this._currentFilter = this._filterModel.getFilter();

    const filters = this._getFilters();
    const prevFilterComponent = this._filterComponent;

    this._filterComponent = new _view_main_site_menu_js__WEBPACK_IMPORTED_MODULE_0__["default"](filters, this._currentFilter);
    this._filterComponent.setFilterTypeChangeHandler(this._handleFilterTypeChange);

    if (prevFilterComponent === null) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this._filterContainer, this._filterComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
      return;
    }

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["replace"])(this._filterComponent, prevFilterComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["remove"])(prevFilterComponent);
  }

  _handleModelEvent() {
    this.init();
  }

  _handleFilterTypeChange(filterType) {
    if (this._currentFilter === filterType) {
      return;
    }

    this._filterModel.setFilter(_utils_const_js__WEBPACK_IMPORTED_MODULE_3__["UpdateType"].MAJOR, filterType);
  }

  _getFilters() {
    const films = this._filmsModel.getFilms();

    return [
      {
        type: _utils_const_js__WEBPACK_IMPORTED_MODULE_3__["FilterType"].ALL,
        name: `All movies`,
        count: _utils_filter_js__WEBPACK_IMPORTED_MODULE_2__["filter"][_utils_const_js__WEBPACK_IMPORTED_MODULE_3__["FilterType"].ALL](films).length
      },
      {
        type: _utils_const_js__WEBPACK_IMPORTED_MODULE_3__["FilterType"].WATCHLIST,
        name: `Watchlist`,
        count: _utils_filter_js__WEBPACK_IMPORTED_MODULE_2__["filter"][_utils_const_js__WEBPACK_IMPORTED_MODULE_3__["FilterType"].WATCHLIST](films).length
      },
      {
        type: _utils_const_js__WEBPACK_IMPORTED_MODULE_3__["FilterType"].HISTORY,
        name: `History`,
        count: _utils_filter_js__WEBPACK_IMPORTED_MODULE_2__["filter"][_utils_const_js__WEBPACK_IMPORTED_MODULE_3__["FilterType"].HISTORY](films).length
      },
      {
        type: _utils_const_js__WEBPACK_IMPORTED_MODULE_3__["FilterType"].FAVORITES,
        name: `Favorites`,
        count: _utils_filter_js__WEBPACK_IMPORTED_MODULE_2__["filter"][_utils_const_js__WEBPACK_IMPORTED_MODULE_3__["FilterType"].FAVORITES](films).length
      }
    ];
  }
}


/***/ }),

/***/ "./src/presenter/movie-list.js":
/*!*************************************!*\
  !*** ./src/presenter/movie-list.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovieList; });
/* harmony import */ var _view_main_sorting_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/main-sorting-filter.js */ "./src/view/main-sorting-filter.js");
/* harmony import */ var _view_main_films_section_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/main-films-section.js */ "./src/view/main-films-section.js");
/* harmony import */ var _view_films_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/films-list.js */ "./src/view/films-list.js");
/* harmony import */ var _view_films_list_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/films-list-container */ "./src/view/films-list-container.js");
/* harmony import */ var _film_card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./film-card.js */ "./src/presenter/film-card.js");
/* harmony import */ var _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/show-more-button.js */ "./src/view/show-more-button.js");
/* harmony import */ var _view_no_films_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/no-films.js */ "./src/view/no-films.js");
/* harmony import */ var _utils_const_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/const.js */ "./src/utils/const.js");
/* harmony import */ var _utils_film_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/film.js */ "./src/utils/film.js");
/* harmony import */ var _utils_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/filter.js */ "./src/utils/filter.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");










// import FilmsListExtra from "../view/films-list-extra.js";




class MovieList {
  constructor(movieListContainer, filmsModel, filterModel) {
    this._filmsModel = filmsModel;
    this._filterModel = filterModel;
    this._movieListContainer = movieListContainer;
    this._renderedFilmCount = _utils_const_js__WEBPACK_IMPORTED_MODULE_7__["FILM_COUNT_PER_STEP"];
    this._currentSortType = _utils_const_js__WEBPACK_IMPORTED_MODULE_7__["SortType"].DEFAULT;
    this._filmCardPresenter = {};
    this._filmCardPresenterExtra = {};

    this._mainFilmsSectionComponent = new _view_main_films_section_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this._filmsListComponent = new _view_films_list_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this._filmsListContainerComponent = new _view_films_list_container__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this._noFilmsComponent = new _view_no_films_js__WEBPACK_IMPORTED_MODULE_6__["default"]();

    this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
    this._handleViewAction = this._handleViewAction.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);

    this._filmsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);
  }

  init() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_10__["render"])(this._movieListContainer, this._mainFilmsSectionComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].BEFOREEND);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_10__["render"])(this._mainFilmsSectionComponent, this._filmsListComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].BEFOREEND);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_10__["render"])(this._filmsListComponent, this._filmsListContainerComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].BEFOREEND);

    this._renderFilmsBoard();
    // this._renderExtras();
  }

  _getFilms() {
    const filterType = this._filterModel.getFilter();
    const films = this._filmsModel.getFilms();
    const filteredFilms = _utils_filter_js__WEBPACK_IMPORTED_MODULE_9__["filter"][filterType](films);

    switch (this._currentSortType) {
      case _utils_const_js__WEBPACK_IMPORTED_MODULE_7__["SortType"].DATE:
        return filteredFilms.sort(_utils_film_js__WEBPACK_IMPORTED_MODULE_8__["sortFilmDate"]);
      case _utils_const_js__WEBPACK_IMPORTED_MODULE_7__["SortType"].RATING:
        return filteredFilms.sort(_utils_film_js__WEBPACK_IMPORTED_MODULE_8__["sortFilmRating"]);
    }

    return filteredFilms;
  }

  _handleViewAction(actionType, updateType, update) {
    switch (actionType) {
      case _utils_const_js__WEBPACK_IMPORTED_MODULE_7__["UserAction"].UPDATE_FILM:
        this._filmsModel.updateFilm(updateType, update);
        break;
      case _utils_const_js__WEBPACK_IMPORTED_MODULE_7__["UserAction"].ADD_COMMENT:
        this._commentsModel.addComment(updateType, update);
        break;
      case _utils_const_js__WEBPACK_IMPORTED_MODULE_7__["UserAction"].DELETE_COMMENT:
        this._commentsModel.deleteComment(updateType, update);
        break;
    }
  }

  _handleModelEvent(updateType, data) {
    switch (updateType) {
      case _utils_const_js__WEBPACK_IMPORTED_MODULE_7__["UpdateType"].PATCH:
        this._filmCardPresenter[data.id].init(data);
        break;
      case _utils_const_js__WEBPACK_IMPORTED_MODULE_7__["UpdateType"].MINOR:
        this._clearFilmsBoard();
        this._renderFilmsBoard();
        break;
      case _utils_const_js__WEBPACK_IMPORTED_MODULE_7__["UpdateType"].MAJOR:
        this._clearFilmsBoard({resetRenderedFilmCount: true, resetSortType: true});
        this._renderFilmsBoard();
        break;
    }
  }

  _renderSort() {
    if (this._mainSortingFilterComponent !== null) {
      this._mainSortingFilterComponent = null;
    }

    this._mainSortingFilterComponent = new _view_main_sorting_filter_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._currentSortType);
    this._mainSortingFilterComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_10__["render"])(this._filmsListComponent, this._mainSortingFilterComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].AFTERBEGIN);
  }

  _renderFilm(film) {
    const filmCardPresenter = new _film_card_js__WEBPACK_IMPORTED_MODULE_4__["default"](this._filmsListContainerComponent, this._handleViewAction);
    filmCardPresenter.init(film);
    this._filmCardPresenter[film.id] = filmCardPresenter;
  }

  _renderFilms(films) {
    films.forEach((film) => this._renderFilm(film));
  }

  _renderNoFilms() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_10__["render"])(this._filmsListComponent, this._noFilmsComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].BEFOREEND);
  }

  _handleShowMoreButtonClick() {
    const filmCount = this._getFilms().length;

    const newRenderedFilmCount = Math.min(filmCount, this._renderedFilmCount + _utils_const_js__WEBPACK_IMPORTED_MODULE_7__["FILM_COUNT_PER_STEP"]);
    const films = this._getFilms().slice(this._renderedFilmCount, newRenderedFilmCount);

    this._renderFilms(films);
    this._renderedFilmCount = newRenderedFilmCount;

    if (this._renderedFilmCount >= filmCount) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_10__["remove"])(this._showMoreButtonComponent);
    }
  }

  _renderShowMoreButton() {
    if (this._showMoreButtonComponent !== null) {
      this._showMoreButtonComponent = null;
    }

    this._showMoreButtonComponent = new _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_5__["default"]();

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_10__["render"])(this._filmsListComponent, this._showMoreButtonComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].BEFOREEND);
    this._showMoreButtonComponent.setClickHandler(this._handleShowMoreButtonClick);
  }

  _clearFilmsBoard({resetRenderedFilmCount = false, resetSortType = false} = {}) {
    const filmCount = this._getFilms().length;

    Object
      .values(this._filmCardPresenter)
      .forEach((presenter) => presenter.destroy());
    this._filmCardPresenter = {};

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_10__["remove"])(this._mainSortingFilterComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_10__["remove"])(this._noFilmsComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_10__["remove"])(this._showMoreButtonComponent);

    if (resetRenderedFilmCount) {
      this._renderedFilmCount = _utils_const_js__WEBPACK_IMPORTED_MODULE_7__["FILM_COUNT_PER_STEP"];
    } else {
      // На случай, если перерисовка доски вызвана
      // уменьшением количества задач (например, удаление или перенос в архив)
      // нужно скорректировать число показанных задач
      this._renderedFilmCount = Math.min(filmCount, this._renderedFilmCount);
    }

    if (resetSortType) {
      this._currentSortType = _utils_const_js__WEBPACK_IMPORTED_MODULE_7__["SortType"].DEFAULT;
    }
  }

  _renderFilmsBoard() {
    const films = this._getFilms();
    const filmCount = films.length;

    if (filmCount === 0) {
      this._renderNoFilms();
      return;
    }

    this._renderSort();
    this._renderFilms(films.slice(0, Math.min(filmCount, this._renderedFilmCount)));

    if (filmCount > this._renderedFilmCount) {
      this._renderShowMoreButton();
    }
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._currentSortType = sortType;
    this._clearFilmsBoard({resetRenderedFilmCount: true});
    this._renderFilmsBoard();
  }

  // _renderExtras() {
  //   if (this._films.length > 0) {
  //     const extraRatedList = new FilmsListExtra(EXTRAS_NAMES[0]);
  //     render(this._mainFilmsSectionComponent, extraRatedList, RenderPosition.BEFOREEND);
  //     const extraRatedContainer = new FilmsListContainer();
  //     render(extraRatedList, extraRatedContainer, RenderPosition.BEFOREEND);

  //     const ratedList = this._films.slice().sort(sortFilmRating);
  //     const mostRated = ratedList.slice(0, EXTRAS_NUMBER);
  //     mostRated.forEach((film) => {
  //       const filmCardPresenter = new FilmCardPresenter(extraRatedContainer, this._handleFilmChange);
  //       filmCardPresenter.init(film);
  //       this._filmCardPresenterExtra[film.id] = filmCardPresenter;
  //     });


  //     const mostWatchedList = this._films.slice().filter((film) => film.isWatched);
  //     if (mostWatchedList.length > 0) {
  //       const extraWatchedList = new FilmsListExtra(EXTRAS_NAMES[1]);
  //       render(this._mainFilmsSectionComponent, extraWatchedList, RenderPosition.BEFOREEND);
  //       const extraWatchedContainer = new FilmsListContainer();
  //       render(extraWatchedList, extraWatchedContainer, RenderPosition.BEFOREEND);

  //       const mostWatched = mostWatchedList.slice(0, EXTRAS_NUMBER);
  //       mostWatched.forEach((film) => {
  //         const filmCardPresenter = new FilmCardPresenter(extraWatchedContainer, this._handleFilmChange);
  //         filmCardPresenter.init(film);
  //         this._filmCardPresenterExtra[film.id] = filmCardPresenter;
  //       });
  //     }
  //   }
  // }
}



/***/ }),

/***/ "./src/utils/const.js":
/*!****************************!*\
  !*** ./src/utils/const.js ***!
  \****************************/
/*! exports provided: CARDS_NUMBER, EXTRAS_NUMBER, EXTRAS_NAMES, FILM_COUNT_PER_STEP, MONTHS, ELEMENTS_MIN, ELEMENTS_MAX, EMOJIS, FILMS_START_YEAR, FILMS_END_YEAR, COMMENTS_START_YEAR, COMMENTS_END_YEAR, START_MONTH, END_MONTH, START_DATE, END_DATE, COMMENTS_START_HOUR, COMMENTS_END_HOUR, START_MINUTES, END_MINUTES, COMMENTS_MAX, RATING_MIN, RATING_MAX, AGE_MIN, AGE_MAX, text, TITLES, POSTERS, GENRES, FIRST_NAMES, LAST_NAMES, COUNTRIES, SortType, UserAction, UpdateType, FilterType */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAction", function() { return UserAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateType", function() { return UpdateType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterType", function() { return FilterType; });
const CARDS_NUMBER = 8;
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
const COMMENTS_START_HOUR = 0;
const COMMENTS_END_HOUR = 23;
const START_MINUTES = 10;
const END_MINUTES = 259;
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

const SortType = {
  DEFAULT: `default`,
  DATE: `date`,
  RATING: `rating`
};

const UserAction = {
  UPDATE_FILM: `UPDATE_FILM`,
  ADD_COMMENT: `ADD_COMMENT`,
  DELETE_COMMENT: `DELETE_COMMENT`
};

const UpdateType = {
  PATCH: `PATCH`,
  MINOR: `MINOR`,
  MAJOR: `MAJOR`
};

const FilterType = {
  ALL: `All movies`,
  WATCHLIST: `Watchlist`,
  HISTORY: `History`,
  FAVORITES: `Favorites`
};


/***/ }),

/***/ "./src/utils/film.js":
/*!***************************!*\
  !*** ./src/utils/film.js ***!
  \***************************/
/*! exports provided: sortFilmDate, sortFilmRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortFilmDate", function() { return sortFilmDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortFilmRating", function() { return sortFilmRating; });
const sortFilmDate = (filmA, filmB) => {
  return (filmB.releaseFullDate - filmA.releaseFullDate);
};


const sortFilmRating = (filmA, filmB) => {
  return (Number(filmB.rating) - Number(filmA.rating));
};


/***/ }),

/***/ "./src/utils/filter.js":
/*!*****************************!*\
  !*** ./src/utils/filter.js ***!
  \*****************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.js */ "./src/utils/const.js");


const filter = {
  [_const_js__WEBPACK_IMPORTED_MODULE_0__["FilterType"].ALL]: (films) => films,
  [_const_js__WEBPACK_IMPORTED_MODULE_0__["FilterType"].WATCHLIST]: (films) => films.filter((film) => film.isWatchingList),
  [_const_js__WEBPACK_IMPORTED_MODULE_0__["FilterType"].HISTORY]: (films) => films.filter((film) => film.isWatched),
  [_const_js__WEBPACK_IMPORTED_MODULE_0__["FilterType"].FAVORITES]: (films) => films.filter((film) => film.isFavorite)
};


/***/ }),

/***/ "./src/utils/observer.js":
/*!*******************************!*\
  !*** ./src/utils/observer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Observer; });
class Observer {
  constructor() {
    this._observers = [];
  }

  addObserver(observer) {
    this._observers.push(observer);
  }

  removeObserver(observer) {
    this._observers = this._observers.filter((existedObserver) => existedObserver !== observer);
  }

  _notify(event, payload) {
    this._observers.forEach((observer) => observer(event, payload));
  }
}


/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: RenderPosition, render, renderTemplate, createElement, remove, replace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony import */ var _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract.js */ "./src/view/abstract.js");


const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const render = (container, child, place) => {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  if (child instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    child = child.getElement();
  }

  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      container.append(child);
      break;
  }
};

const renderTemplate = (container, template, place) => {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  container.insertAdjacentHTML(place, template);
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const remove = (component) => {
  if (component === null) {
    return;
  }

  if (!(component instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};

const replace = (newChild, oldChild) => {
  if (oldChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error(`Can't replace unexisting elements`);
  }

  parent.replaceChild(newChild, oldChild);
};


/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: getRandomInteger, getRandomIndex, getRandomElem, getRandomArray, getBoolean, getRandomName, getRandomDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomIndex", function() { return getRandomIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomElem", function() { return getRandomElem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomArray", function() { return getRandomArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBoolean", function() { return getBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomName", function() { return getRandomName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomDescription", function() { return getRandomDescription; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.js */ "./src/utils/const.js");


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


/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Abstract; });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");


class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Abstract class cannot be replicated, use inherited classes instead.`);
    }

    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


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
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);



const createFilmCard = (film) => {
  const {title, poster, rating, shortDescription, genre, runtime, commentsCount, releaseFullDate, isWatched, isWatchingList, isFavorite} = film;

  const mainGenre = genre[0];

  const filmRuntime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(runtime).format(`H[h] MM[m]`);

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
        <span class="film-card__year">${releaseFullDate.getFullYear()}</span>
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

class FilmCard extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(film) {
    super();
    this._film = film;
    this._openClickHandler = this._openClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
    this._watchlistClickHandler = this._watchlistClickHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
  }

  getTemplate() {
    return createFilmCard(this._film);
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--favorite`).addEventListener(`click`, this._favoriteClickHandler);
  }

  _watchlistClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchlistClick();
  }

  setWatchlistClickHandler(callback) {
    this._callback.watchlistClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`).addEventListener(`click`, this._watchlistClickHandler);
  }

  _watchedClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchedClick();
  }

  setWatchedClickHandler(callback) {
    this._callback.watchedClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--mark-as-watched`).addEventListener(`click`, this._watchedClickHandler);
  }

  _openClickHandler(evt) {
    evt.preventDefault();
    this._callback.openClick();
  }

  setOpenClickHandler(callback) {
    this._callback.openClick = callback;
    this.getElement().querySelectorAll(`.film-card__title, .film-card__poster, .film-card__comments`).forEach((elem) => elem.addEventListener(`click`, this._openClickHandler));
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
/* harmony import */ var _smart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart.js */ "./src/view/smart.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable quotes */



const createFilmDetailsPopup = (data) => {
  const {title, rating, genre, runtime, commentsCount, comments, poster, originalTitle, director, writers, actors, releaseFullDate, country, fullDescription, ageRestriction, isWatched, isWatchingList, isFavorite} = data;

  const releaseDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(releaseFullDate).format('DD MMMM YYYY');

  const watchingListChecked = isWatchingList ? `checked` : ``;
  const favoriteChecked = isFavorite ? `checked` : ``;
  const watchedChecked = isWatched ? `checked` : ``;

  const watchingListLabel = isWatchingList ? `Added to watchlist` : `Add to watchlist`;
  const watchedLabel = isWatched ? `Already watched` : `Mark as watched`;
  const favoriteLabel = isFavorite ? `Added to favorites` : `Add to favorites`;

  const filmRuntime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(runtime).format(`H[h] MM[m]`);

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
      const commentFullDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(item.date).format(`YYYY/MM/DD HH:MM`);

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

class FilmDetailsPopup extends _smart_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(film) {
    super();
    this._data = FilmDetailsPopup.parseFilmToData(film);

    this._closePopupHandler = this._closePopupHandler.bind(this);
    this._favoritePopupClickHandler = this._favoritePopupClickHandler.bind(this);
    this._watchlistPopupClickHandler = this._watchlistPopupClickHandler.bind(this);
    this._watchedPopupClickHandler = this._watchedPopupClickHandler.bind(this);
    this._emojiClickHandler = this._emojiClickHandler.bind(this);
    // this._descriptionInputHandler = this._descriptionInputHandler.bind(this);
    // this._addCommentHandler = this._addCommentHandler.bind(this);
    // this._deleteCommentHandler = this._deleteCommentHandler.bind(this);

    this._setInnerHandlers();
  }

  getTemplate() {
    return createFilmDetailsPopup(this._data);
  }

  restoreHandlers() {
    this._setInnerHandlers();
    // this.setAddCommentHandler(this._callback.addComment);
  }

  _setInnerHandlers() {
    // this.getElement()
    //   .querySelector(`.film-details__control-label--favorite`)
    //   .addEventListener(`click`, this._favoritePopupClickHandler);
    // this.getElement()
    //   .querySelector(`.film-details__control-label--watched`)
    //   .addEventListener(`click`, this._watchedPopupClickHandler);
    // this.getElement()
    //   .querySelector(`.film-details__control-label--watchlist`)
    //   .addEventListener(`click`, this._watchlistPopupClickHandler);
    this.getElement()
      .querySelectorAll(`.film-details__emoji-label img`)
      .forEach((elem) => elem.addEventListener(`click`, this._emojiClickHandler));
    this.getElement()
      .querySelector(`.film-details__comment-input`)
      .addEventListener(`input`, this._descriptionInputHandler);
    this.getElement()
      .querySelector(`.film-details__close-btn`)
      .addEventListener(`click`, this._closePopupHandler);

    const deleteButtons = this.getElement().querySelectorAll(`.film-details__comment-delete`);
    if (deleteButtons) {
      for (let button of deleteButtons) {
        button.addEventListener(`click`, this._deleteCommentHandler);
      }
    }
  }

  _favoritePopupClickHandler(evt) {
    evt.preventDefault();
    this._data.scrollPosition = document.querySelector(`.film-details`).scrollTop;
    this.updateData({
      isFavorite: !this.isFavorite
    }, false);

    this._callback.favoritePopupClick();
    document.querySelector(`.film-details`).scrollTop = this._data.scrollPosition;
  }

  setFavoritePopupClickHandler(callback) {
    this._callback.favoritePopupClick = callback;
    this.getElement().querySelector(`.film-details__control-label--favorite`).addEventListener(`click`, this._favoritePopupClickHandler);
  }

  _watchlistPopupClickHandler(evt) {
    evt.preventDefault();
    this._data.scrollPosition = document.querySelector(`.film-details`).scrollTop;
    this.updateData({
      isWatchingList: !this.isWatchingList
    }, false);

    this._callback.watchlistPopupClick(this._data);
    document.querySelector(`.film-details`).scrollTop = this._data.scrollPosition;

  }

  setWatchlistPopupClickHandler(callback) {
    this._callback.watchlistPopupClick = callback;
    this.getElement().querySelector(`.film-details__control-label--watchlist`).addEventListener(`click`, this._watchlistPopupClickHandler);
  }

  _watchedPopupClickHandler(evt) {
    evt.preventDefault();
    this._data.scrollPosition = document.querySelector(`.film-details`).scrollTop;
    this.updateData({
      isWatched: !this.isWatched
    }, false);

    this._callback.watchedPopupClick();
    document.querySelector(`.film-details`).scrollTop = this._data.scrollPosition;
  }

  setWatchedPopupClickHandler(callback) {
    this._callback.watchedPopupClick = callback;
    this.getElement().querySelector(`.film-details__control-label--watched`).addEventListener(`click`, this._watchedPopupClickHandler);
  }

  _closePopupHandler(evt) {
    evt.preventDefault();
    this._callback.closePopup(FilmDetailsPopup.parseDataToFilm(this._data)); // filmDetails обновляется, а модель про это не знает и не обновляет filmsBoard
  }

  setClosePopupHandler(callback) {
    this._callback.closePopup = callback;
    this.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, this._closePopupHandler);
  }

  _emojiClickHandler(evt) {
    const newEmoji = document.createElement(`img`);
    newEmoji.src = evt.target.src;
    newEmoji.style.width = `100%`;

    const newCommentEmoji = document.querySelector(`.film-details__add-emoji-label`);
    if (newCommentEmoji.firstChild) {
      newCommentEmoji.removeChild(newCommentEmoji.firstChild);
    }

    newCommentEmoji.appendChild(newEmoji);
    this.updateData({
      newCommentEmojiTemplate: newEmoji
    }, true);
  }

  // _descriptionInputHandler(evt) {
  //   evt.preventDefault();
  //   this.updateData({
  //     newCommentDescription: evt.target.value
  //   }, true);
  // }

  // _deleteCommentHandler(evt) {
  //   evt.preventDefault();
  //   // const parentComment = evt.target.closest(`.film-details__comment`);
  //   // const commentsList = this.getElement().querySelector(`.film-details__comments-list`);
  //   // commentsList.removeChild(parentComment);
  // }

  // setDeleteCommentHandler(callback) {
  //   this._callback.deleteComment = callback;
  //   this.getElement().querySelectorAll(`.film-details__comment-delete`).forEach((elem) => elem.addEventListener(`click`, this._deleteCommentHandler));
  // }

  // _addCommentHandler(evt) {
  //   evt.preventDefault();

  // }

  // setAddCommentHandler(callback) {
  //   this._callback.addComment = callback;
  //   // this.getElement().querySelector(`.film-details__control-label--favorite`).addEventListener(`click`, this._favoriteClickHandler);
  // }

  // _formSubmitHandler(evt) {
  //   evt.preventDefault();
  //   this._callback.formSubmit(FilmDetailsPopup.parseDataToTask(this._data));
  // }
  // setFormSubmitHandler(callback) {
  //   this._callback.formSubmit = callback;
  //   this.getElement().querySelector(`form`).addEventListener(`submit`, this._formSubmitHandler);
  // }

  static parseFilmToData(film) {
    return Object.assign(
        {},
        film,
        {
          isWatched: film.isWatched,
          isWatchingList: film.isWatchingList,
          isFavorite: film.isFavorite,
          // commentsCount: film.commentsCount,
          // comments: film.comments,
          scrollPosition: null,
          newCommentEmojiTemplate: null,
          newCommentDescription: null
        }
    );
  }

  static parseDataToFilm(data) {
    data = Object.assign({}, data);

    delete data.scrollPosition;

    return data;
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
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmsListContainer = () => {
  return (
    `<div class="films-list__container"></div>`
  );
};

class FilmsListContainer extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createFilmsListContainer();
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
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmsList = () => {
  return (
    `<section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    </section>`
  );
};

class FilmsList extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createFilmsList();
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
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");



const createFooterStats = () => {
  return (
    `<section class="footer__statistics">
      <p>${_utils_const_js__WEBPACK_IMPORTED_MODULE_0__["CARDS_NUMBER"]} movies inside</p>
    </section>`
  );
};

class FooterStats extends _abstract_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  getTemplate() {
    return createFooterStats();
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
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createMainFilmsSection = () => {
  return (
    `<section class="films"></section>`
  );
};

class MainFilmsSection extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createMainFilmsSection();
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainSiteMenu; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilterTemplate = (filter, currentFilterType) => {
  const {type, name, count} = filter;

  return (
    `<a
      href="#${name}"
      id="${name}"
      class="main-navigation__item
      ${type === currentFilterType ? `main-navigation__item--active` : ``}">
      ${name}
      <span class="main-navigation__item-count">${count}</span>
    </a>`
  );
};


const createMainSiteMenu = (filterItems, currentFilterType) => {
  const filterItemsTemplate = filterItems
    .map((filter) => createFilterTemplate(filter, currentFilterType))
    .join(``);


  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        ${filterItemsTemplate}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
  );
};

class MainSiteMenu extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(filters, currentFilterType) {
    super();
    this._filters = filters;
    this._currentFilter = currentFilterType;

    this._filterTypeChangeHandler = this._filterTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createMainSiteMenu(this._filters, this._currentFilter);
  }

  _filterTypeChangeHandler(evt) {
    evt.preventDefault();
    this._callback.filterTypeChange(evt.target.id);
  }

  setFilterTypeChangeHandler(callback) {
    this._callback.filterTypeChange = callback;
    this.getElement().addEventListener(`click`, this._filterTypeChangeHandler);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainSortingFilter; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");
/* harmony import */ var _utils_const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/const.js */ "./src/utils/const.js");



const createMainSortingFilter = (currentSortType) => {
  return (
    `<ul class="sort">
    <li><a href="#" class="sort__button ${currentSortType === _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].DEFAULT ? `sort__button--active` : ``}" data-sort-type="${_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].DEFAULT}">Sort by default</a></li>
    <li><a href="#" class="sort__button ${currentSortType === _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].DATE ? `sort__button--active` : ``}" data-sort-type="${_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].DATE}">Sort by date</a></li>
    <li><a href="#" class="sort__button ${currentSortType === _utils_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].RATING ? `sort__button--active` : ``}" data-sort-type="${_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].RATING}">Sort by rating</a></li>
    </ul>`
  );
};

class MainSortingFilter extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(currentSortType) {
    super();
    this._currentSortType = currentSortType;
    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
    // this._sortActiveChangeHandler = this._sortActiveChangeHandler.bind(this);
  }

  getTemplate() {
    return createMainSortingFilter(this._currentSortType);
  }

  _sortTypeChangeHandler(evt) {
    if (evt.target.tagName !== `A`) {
      return;
    }

    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }

  // _sortActiveChangeHandler(evt) {
  //   if (evt.target.tagName !== `A`) {
  //     return;
  //   }

  //   evt.preventDefault();
  //   this._callback.sortActiveChange(evt);
  // }

  // setSortActiveChangeHandler(callback) {
  //   this._callback.sortActiveChange = callback;
  //   this.getElement().querySelectorAll(`.sort__button`).forEach((elem) => elem.addEventListener(`click`, this._sortActiveChangeHandler));
  // }
}


/***/ }),

/***/ "./src/view/no-films.js":
/*!******************************!*\
  !*** ./src/view/no-films.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoFilms; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createNoFilmsMessage = () => {
  return `<h2 class="films-list__title">There are no movies in our database</h2>`;
};

class NoFilms extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createNoFilmsMessage();
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
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createShowMoreButton = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

class ShowMoreButton extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createShowMoreButton();
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }
}


/***/ }),

/***/ "./src/view/smart.js":
/*!***************************!*\
  !*** ./src/view/smart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Smart; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


class Smart extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._data = {};
  }

  updateData(update, justDataUpdating) {
    if (!update) {
      return;
    }

    this._data = Object.assign(
        {},
        this._data,
        update
    );

    if (justDataUpdating) {
      return;
    }

    this.updateElement();
  }

  updateElement() {
    let prevElement = this.getElement();
    const parent = prevElement.parentElement;
    this.removeElement();

    const newElement = this.getElement();

    parent.replaceChild(newElement, prevElement);

    this.restoreHandlers();
  }

  restoreHandlers() {
    throw new Error(`Smart method not implemented: resetHandlers`);
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
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createUserStatus = () => {
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">Movie Buff</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};

class UserStatus extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createUserStatus();
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map