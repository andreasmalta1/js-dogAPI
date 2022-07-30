// https://dog.ceo/api/breeds/image/random

const dogImage = document.getElementById('dogImage')
const dogBtn = document.getElementById('getDogBtn')

const getNewDog = () => {
  const url = 'https://dog.ceo/api/breeds/image/random'
  fetch(url)
    .then(response => response.json())
    .then(json => {
      dogImage.innerHTML = `<img src='${json.message}'>`
    })
}



dogBtn.onclick = () => getNewDog()