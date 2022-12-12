import {renderBlock} from './lib.js'

//1. Написать две функции.
export class User {
  username: string
  avatarUrl: string

  constructor(username: string, avatarUrl: string) {
    this.username = username
    this.avatarUrl = avatarUrl
  }
}

//1. Первая getUserData
export const getUserData = (): User => {
  try {
    const user: unknown = JSON.parse(localStorage.getItem('user'))
    Object.setPrototypeOf(user, User.prototype)

    if(user instanceof User) {
      return user
    } else {
      new Error('Сведений о пользователе в localstorage нет')
    }
  } catch (err) {
    console.log(`Сведений о пользователе в localstorage нет: -> ${err}`)
  }
}

//2. Вторая функция getFavoritesAmount
export const getFavoritesAmount = (): number => {
  try {
    const amount: unknown = localStorage.getItem('favoritesAmount')
    return +amount
  } catch (err) {
    console.log(`Сведений о пользователе в localstorage нет: -> ${err}`)
    return 0
  }
}

export function renderUserBlock(name: string, avatar: string, countFavorite?: number) {
  const favorite = countFavorite ? countFavorite : 'ничего нет';
  const isFavorite = countFavorite ? ' active' : '';

  renderBlock(
    'user-block',
    `
    <div class="header-container"}>
      <img class="avatar" src="${avatar}" alt="${name}" />
      <div class="info" id="avatar_info" style="cursor: pointer">
          <p class="name">${name}</p>
          <p class="fav">
            <i class="heart-icon${isFavorite}"></i>${favorite}
          </p>
      </div>
    </div>
    `
  )
}