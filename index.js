function fetchImage() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
      .then(resp => resp.json())
      .then(json => renderImg(json))
  }
function renderImg(images) {
    const loc = document.getElementById("dog-image-container")
    images.message.forEach(Image => {
      const img = document.createElement('img');
      img.src = Image;
      loc.appendChild(img)
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    fetchImage()
  })