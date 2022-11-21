import {renderBlock} from './lib.js';
import {getDateStart, getDateEnd, convertDate, increaseDate} from './utilites.js';

const initDateStart:Date = increaseDate(new Date(), 1);
const initDateEnd:Date = getDateEnd(initDateStart);

export function renderSearchFormBlock(dateStart: Date = initDateStart, dateEnd: Date = initDateEnd) {
  const dateStartFunc:Date = getDateStart(dateStart);
  const dateEndFunc:Date = getDateStart(dateStartFunc);
  const dateMaxEndFunc:Date = increaseDate(getDateEnd(dateStart), 1);

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>

<!--          <div class="providers">-->
<!--            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>-->
<!--            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>-->
<!--          </div>-->

        </div>
          <div class="row">
            <div>
                <label for="check-in-date">Дата заезда</label>
                <input 
                    id="check-in-date" 
                    type="date" 
                    value=${convertDate(dateStartFunc)} 
                    min=${convertDate(dateStartFunc)} 
                    max=${convertDate(dateMaxEndFunc)} 
                    name="checkin" />
              </div>
              <div>
                <label for="check-out-date">Дата выезда</label>
                <input 
                    id="check-out-date" 
                    type="date" 
                    value=${convertDate(increaseDate(dateEndFunc, 2))} 
                    min=${convertDate(dateStartFunc)} 
                    max=${convertDate(dateMaxEndFunc)} 
                    name="checkout" />
              </div>
              <div>
                <label for="max-price">Макс. цена суток</label>
                <input id="max-price" type="text" value="" name="price" class="max-price" />
              </div>
              <div>
                <div><button>Найти</button></div>
              </div>
          </div>
      </fieldset>
    </form>
    `
  )
}
