const searchInput = document.getElementById('searchInput');
const productGrid = document.getElementById('productGrid');
const fullscreenOverlay = document.getElementById('fullscreen-overlay');
const fullscreenImage = document.getElementById('fullscreen-image');
const zoomFactor = 1.2;
let currentZoom = 1;

const products = [
    { title: 'Artilac Advance', image: 'pic/Artilac advance.png', keywords: ['Artilac', 'advance', 'eye'] },
    { title: 'Hemagel', image: 'pic/hemagel.png', keywords: ['hemagel', 'burns', 'hemagel'] },
    { title: 'Hemaproct', image: 'pic/hemaproct Final.png', keywords: ['hemaproct', 'hemorrhoids', 'carbox'] },
    { title: 'Lymparza', image: 'pic/Lymparza Final Version.png', keywords: ['Lymparza', 'cancer', 'pancreas'] },
    { title: 'Pediasure', image: 'pic/Pediasure Final.png', keywords: ['Pediasure', 'milk', 'child'] },
    { title: 'ZzzQuilll', image: 'pic/ZzzQuilll Final.png', keywords: ['ZzzQuilll', 'melatonin', 'sleep'] },
    { title: 'TRUVALUG', image: 'pic/TRUVALUG.png', keywords: ['TRUVALUG', 'insulin', 'rapid'] },
    { title: 'Motion sicknessss', image: 'pic/motion sicknessss.jpg', keywords: ['motion sicknessss', 'motion', 'sicknessss'] },
    { title: 'Appetite Stimulants', image: 'pic/Appetite Stimulants Final.png', keywords: ['Appetite Stimulants', 'Appetite', 'Stimulants'] },
    { title: 'PPIs & ENZYMAX', image: 'pic/PPIs & EnzMAX.png', keywords: ['PPIs & EnzyMAX', 'PPIs', 'EnzyMAX'] },
    { title: 'Saline in pregnancy', image: 'pic/Saline Final.png', keywords: ['Saline', 'pregnancy', 'lactation'] },
    { title: 'Jointace Final', image: 'pic/Jointace Final.png', keywords: ['Jointace', 'joints', 'advance'] },
    { title: 'Mounjaro', image: 'pic/mounjaro.png', keywords: ['mounjaro', 'ozempic', 'saxenda'] },
];

function displayProducts(filteredProducts) {
    productGrid.innerHTML = '';
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
        `;
        card.addEventListener('click', () => openFullscreen(product.image));
        productGrid.appendChild(card);
    });
}

function filterProducts(searchTerm) {
    return products.filter(product => {
        return product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
               product.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    });
}

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value;
    const filteredProducts = filterProducts(searchTerm);
    displayProducts(filteredProducts);
});

function openFullscreen(imageSrc) {
    fullscreenImage.src = imageSrc;
    fullscreenOverlay.style.display = 'flex';
    resetZoom();
}

function closeFullscreen() {
    fullscreenOverlay.style.display = 'none';
}
function zoomIn() {
    currentZoom *= zoomFactor;
    applyZoom();
}

function zoomOut() {
    currentZoom /= zoomFactor;
    if (currentZoom < 1) currentZoom = 1;
    applyZoom();
}

function resetZoom() {
    currentZoom = 1;
    applyZoom();
}

function applyZoom() {
    fullscreenImage.style.transform = `scale(${currentZoom})`;
}
// Initial display of all products
displayProducts(products);