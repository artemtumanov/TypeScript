import { renderBlock } from './lib.js'

export function renderUserBlock (name:string, avatar:string, fav:number) {
  const favorite = fav ? fav : 'ничего нет';
  const isFavorite = fav ? ' active' : '';

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatar}" alt="${name}" />
      <div class="info">
          <p class="name">${name}</p>
          <p class="fav">
            <i class="heart-icon${isFavorite}"></i>${favorite}
          </p>
      </div>
    </div>
    `
  )
}
