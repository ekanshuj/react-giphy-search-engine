const toggle__btn = document.getElementById('toggle');
const toggle__responsive = document.querySelector('.primary__navigation');
const search = document.getElementById('search__tab');
let results = [];

toggle__btn.addEventListener('click', () => {
  try {
    const isVisible = toggle__responsive.getAttribute('data-visible')

    if (isVisible === 'false') {
      toggle__responsive.setAttribute('data-visible', true);
      toggle__btn.setAttribute('aria-expanded', true);
    }
    else if (isVisible === 'true') {
      toggle__responsive.setAttribute('data-visible', false);
      toggle__btn.setAttribute('aria-expanded', false);
    };

  } catch (err) {
    console.error(err);
  };

})



search.addEventListener('keyup', (elem) => {
  const searchVal = elem.target.value.toLowerCase();
  const filteredVal = results.data.filter((elem) => { return elem.title.toLowerCase().includes(searchVal.toLowerCase()) });
  displayStickers(filteredVal);
})


const fetchTrendingStickers = async () => {
  const response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=BKW082Zov3URJSUoF5UWPmGvQgoT2XZL&q=fish&limit=50&offset=0&rating=g&lang=en');
  let results = await response.json();
  // let results = data.data;
  console.log(results);
  displayStickers(results);
}

const displayStickers = (results) => {
  try {
    let cardData = '';
    results.data.map(result => {
      let dataVal = `
      <div class="grid__division">
      <a href="${result.url}" class="cursor:pointer;" target="_blank"><img style="border-radius: 1.25%;height: 220px;width: 250px;" src="${(result.images && result.images.original) ? result.images.original.url : undefined}" alt="${result.title}"></a>
      </div>
      `;
      cardData += dataVal;
    });
    document.getElementById('sticker-data').innerHTML = cardData;

  } catch (err) {
    console.log(err);
  }
}

fetchTrendingStickers();