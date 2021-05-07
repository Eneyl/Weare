import { getElementByDataId } from '../utility';

const $burger = getElementByDataId(document, 'header-burger');
const $nav = getElementByDataId(document, 'header-nav');
const $lang = getElementByDataId(document, 'header-lang');

$burger.addEventListener('click', () => {
  $burger.classList.toggle('header__burger--active');
  $nav.classList.toggle('nav--active');
  $lang.classList.toggle('header__lang--mobile');
  //setTimeout(() => $lang.classList.toggle('header__lang--mobile'), 500);

})