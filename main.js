import './style.less'
import contentInfo from './src/data/content'

const ACTIVE = 'active'

const videos = document.querySelectorAll('video')
const toggle = document.querySelector('.menu-toggle')
const content = document.querySelector('.text-description')
const main = document.querySelector('.mian-structure')
const buttons = document.querySelectorAll('.aside-menu a')
const overlay = document.querySelector('.video-overlay')
overlay.className = 'video-overlay video-overlay-island'
toggle.addEventListener('click', () => {
  toggle.classList.toggle(ACTIVE)
  main.classList.toggle(ACTIVE)
})
buttons.forEach((ele, index) => {
  ele.addEventListener('click', (e) => {
    setContent(index)
    setVideoActive(index)
    
  })
})
const setVideoActive = (i) => {
  videos.forEach((ele, index) => {
    ele.classList.remove(ACTIVE)
    if (index === i) {
      ele.classList.add(ACTIVE)
    }
  })
}

const setContent = (i) => {
  overlay.className =  `video-overlay video-overlay-${contentInfo[i].name}`
  content.children[0].innerHTML = contentInfo[i].h1
  content.children[1].innerHTML = contentInfo[i].h2
  content.children[2].innerHTML = contentInfo[i].p
}

setVideoActive(0)
setContent(0)