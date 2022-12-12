import {renderBlock} from './lib.js';
import {getDateStart, getDateEnd, convertDate, increaseDate} from './utilites.js';

//2. Создать интерфейс SearchFormData
interface SearchFormData {
  dateStart?: Date
  dateEnd?: Date
  maxPrice?: number
}

//2. Написать функцию-обработчик формы search
const submitFormSearch = (event: Event): void => {
  event.preventDefault()
  const checkIn: Date = new Date(document.querySelector("input[name='checkin']")['value'])
  const checkOut: Date = new Date(document.querySelector("input[name='checkout']")['value'])
  const price: number = +document.querySelector("input[name='price']")['value']

  const resultSearchFormData: SearchFormData = {
    dateStart: checkIn,
    dateEnd: checkOut,
    maxPrice: price
  }

  console.log(resultSearchFormData)
}

//инициализация данных формы поиска
const initDateStart: Date = increaseDate(new Date(), 1);
const initDateEnd: Date = getDateEnd(initDateStart);
const initPrice: number = 0;

const initDateSearchFormBlock: SearchFormData = {
  dateStart: initDateStart,
  dateEnd: initDateEnd,
  maxPrice: initPrice
}

//2. Функция поиска принимает как аргумент переменную интерфейса SearchFormData
export function renderSearchFormBlock(data: SearchFormData = initDateSearchFormBlock) {
  let dateStartFunc: Date = getDateStart(data.dateStart);
  let dateEndFunc: Date = getDateStart(dateStartFunc);
  let dateMaxEndFunc: Date = increaseDate(getDateEnd(data.dateStart), 1);
  let maxDate: number = 0;

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
                <input 
                    id="max-price" 
                    type="text" 
                    value=${maxDate}
                    name="price" 
                    class="max-price" />
              </div>
              <div>
                <div>
                    <button>Найти</button>
                </div>
              </div>
          </div>
      </fieldset>
    </form>
    `
  )
}

//отслеживание нажатия кнопки формы поиска
const submitListener = ():void => {
  const form = document.getElementById('search-form-block')
  try {
    form.addEventListener('submit', submitFormSearch)
  } catch (err) {
    console.log(`элемент form не найден -> ${err}`)
  }
}

submitListener()
