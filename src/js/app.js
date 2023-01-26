import { isWebp, headerFixed, anchor } from './modules'

// Проверка браузера на поддерку .webp изображений ====================================================================================================================================================
isWebp()

// Фиксированный header ====================================================================================================================================================
headerFixed()
// ====================================================================================================================================================
anchor()

const iconMenu = document.querySelector('.icon-menu')
const menuBody = document.querySelector('.menu__body')
if (iconMenu) {
	iconMenu.addEventListener('click', e => {
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active')
		menuBody.classList.toggle('_active')
	})
}