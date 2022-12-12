import {renderSearchFormBlock} from './search-form.js'
import {renderSearchStubBlock} from './search-results.js'
import {renderUserBlock, User} from './user.js'
import {renderToast} from './lib.js'
import {requestDataRealty} from "./requestDataRealty.js";

const randomFavoriteItem = Math.floor(Math.random() * 10) + 1;

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Lena', './img/avatar.png', randomFavoriteItem)
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {
      name: 'Понял', handler: () => {
        console.log('Уведомление закрыто')
      }
    }
  )

  const avatarInfo = document.querySelector('#avatar_info');
  avatarInfo.addEventListener('click', () =>{
    requestDataRealty(randomFavoriteItem)
  })
})
