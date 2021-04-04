import './style.scss'
import  './test.styl'
import png from './assets/1.png'


const div = document.querySelector('#app')

div.innerHTML = `<img src="${png}">`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
    const promise = import('./lazy.js')
    promise.then( (module) =>{
        const fn = module.default
        fn() 
    }, ()=>{})
}

div.appendChild(button)