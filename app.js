import {ts_apikey_hash} from './cred.js'

const main = document.querySelector('main')
var offset = 0
const loading = document.querySelector('.loading')
const getMoreBtn = document.querySelector('.get-more button')
getMoreBtn.addEventListener('click', getMore)


function getMore(e) {
    e.preventDefault()

    loading.style.display = ""
    getMoreBtn.style.display = "none"

    offset += 100
    getItems()
}

// To get all the characters
function getItems(){
    fetch(`http://gateway.marvel.com/v1/public/characters?limit=100&offset=${offset}&${ts_apikey_hash}`)
    .then(res => res.json())
    .then(data => updateUI(data))
    .catch(err => console.log(err))
}

// To set all the characters on the screen
function updateUI(data) {
    setfooter(data.attributionHTML)
    data.data.results.forEach(d => {
        let a = document.createElement('a')
        a.href = d.urls[0].url
        a.target = "_blank"

        let div = document.createElement('div')
        div.classList.add('character')

        let img = document.createElement('img')
        img.src = d.thumbnail.path + "/standard_fantastic." + d.thumbnail.extension
        img.alt = d.name
        div.appendChild(img)

        let h2 = document.createElement('h2')
        h2.innerText = d.name
        div.appendChild(h2)

        a.appendChild(div)
        main.appendChild(a)
    });

    loading.style.display = "none"
    getMoreBtn.style.display = ""
}

function setfooter(footer) {
    document.querySelector('footer').innerHTML = footer
}


getMoreBtn.style.display = "none"
getItems()