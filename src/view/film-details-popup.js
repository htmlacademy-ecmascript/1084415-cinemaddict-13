import {MONTHS} from "../utils/const.js";

export const createFilmDetailsPopup = (film) => {
  const {title, rating, genre, runtime, commentsCount, comments, poster, originalTitle, director, writers, actors, releaseFullDate, country, fullDescription, ageRestriction, isWatched, isWatchingList, isFavorite} = film;
  const day = releaseFullDate.getDate();
  const month = releaseFullDate.getMonth();
  const year = releaseFullDate.getFullYear();

  const monthToWord = (elem) => {
    const word = MONTHS[elem];
    return word;
  };

  const releaseDate = `${day} ${monthToWord(month)} ${year}`;

  const watchingListClassName = isWatchingList ? `film-details__control-input:checked + .film-details__control-label ` : `film-details__control-label--watchlist::before`;
  const favoriteClassName = isFavorite ? `film-details__control-input:checked + .film-details__control-label` : `film-details__control-label--favorite::before`;
  const watchedClassName = isWatched ? `film-details__control-input:checked + .film-details__control-label ` : `film-details__control-label--watched::before`; // Проверить, правильные ли классы и логика показа
  const getRunTime = () => {
    if (runtime.hours === 0) {
      return (
        ` ${runtime.minutes}m`
      );
    } else if (runtime.minutes === 0) {
      return (
        `${runtime.hours}h`
      );
    } else {
      return (
        `${runtime.hours}h ${runtime.minutes}m`
      );
    }
  };

  const createGenresTemplate = () => {
    if (genre.length === 1) {
      return (
        `<tr class="film-details__row">
          <td class="film-details__term">Genre</td>
          <td class="film-details__cell">
            <span class="film-details__genre">${genre}</span>
        </tr>`
      );
    } else {
      return (
        `<tr class="film-details__row">
          <td class="film-details__term">Genres</td>
          <td class="film-details__cell">
            <span class="film-details__genre">${genre.join(` `)}</span>
        </tr>`
      );
    }
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
        commentMinutes = `0${commentMinutes}`;
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
                <td class="film-details__cell">${getRunTime()}</td>
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
          <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
          <label for="watchlist" class="film-details__control-label ${watchingListClassName}">Add to watchlist</label>
          <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
          <label for="watched" class="film-details__control-label ${watchedClassName}">Already watched</label>
          <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
          <label for="favorite" class="film-details__control-label ${favoriteClassName}">Add to favorites</label>
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
