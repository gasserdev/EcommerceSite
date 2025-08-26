import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../CSS/style.css';
import axios from 'axios';
axios.get('https://fakestoreapi.com/products')
  .then(function (response) {
    for (let i = 0 ; i < 4 ; i++){
      let product = response.data[i];
      let productCard = `
        <div class="col">
            <div class="card">
              <img src="${product.image}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${product.title}</h5>
                  <p class="card-text">$${product.price}</p>
              </div>
            </div>
        </div>      
      `
      let cards = document.getElementById('cards');
      cards.innerHTML += productCard;
    };
  });

