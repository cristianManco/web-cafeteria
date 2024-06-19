console.log(productos);

function clear() {
    let paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        paragraph.remove();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showProductos(productos);
    selectProduct();
});

function showProductos(productos) {
    const contenedorTarjeta = document.querySelector('#reposteria');
    clear();

    productos.forEach((card) => {
        const { imagen, nombre, categoria, descripcion } = card;

        const cardHtml = document.createElement('div');
        cardHtml.classList.add('col-md-12', 'mb-3'); // Tres tarjetas por fila en pantallas medianas y superiores

        cardHtml.innerHTML = `
            <div class="card">
                <img src="img/${imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <p class="card-text">${categoria}</p>
                </div>
                <div class="card-footer">
                    <button type="button" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#exampleModal" data-imagen="${imagen}" data-descripcion="${descripcion}" data-nombre="${nombre}">
                        Más Información
                    </button>
                </div>
            </div>
        `;
        contenedorTarjeta.appendChild(cardHtml);
    });
}

function selectProduct() {
    const details = document.querySelector('#reposteria');
    details.addEventListener('click', loadDetails);
}

function loadDetails(e) {
    const imagen = e.target.getAttribute('data-imagen');
    const descripcion = e.target.getAttribute('data-descripcion');
    const nombre = e.target.getAttribute('data-nombre');

    const modalBody = document.querySelector('#modalBody');
    modalBody.innerHTML = `
        <tr>
            <td><img src="img/${imagen}" class="card-img-top" alt="..."></td>
            <td>${nombre}</td>
            <td>${descripcion}</td>
        </tr>
    `;
}
