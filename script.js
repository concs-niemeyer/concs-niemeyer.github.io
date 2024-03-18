/* 
Script que usa API do museu Rijks para retornar top 20 fotos.
*/

const API_KEY = "ak6pOKhx";
const RANDOM_IMAGES_ENDPOINT = `https://www.rijksmuseum.nl/api/en/collection?key=${API_KEY}&imgonly=true&format=json&ps=20`;

fetch(RANDOM_IMAGES_ENDPOINT)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao carregar as imagens');
    }
    return response.json();
  })
  .then(data => {
    // Aqui você pode manipular os dados retornados pela API
    const imageContainer = document.getElementById('imageContainer');
    const images = data.artObjects.map(object => object.webImage.url);
    let index = 0;

    setInterval(() => {
      // Alterna para a próxima imagem
      imageContainer.innerHTML = `<img src="${images[index]}" alt="Imagem do RijksMuseum">`;
      index = (index + 1) % images.length;
    }, 3000);
  })
  .catch(error => {
    console.error('Erro ao buscar as imagens:', error);
  });
