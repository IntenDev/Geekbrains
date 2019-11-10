'use script';
const products = document.querySelectorAll('.product');

for(let i=0; i<products.length; i++){

    products[i].querySelector('.more').addEventListener('click', function () {
            products[i].querySelector('.photo').classList.add('hidden');
            products[i].querySelector('.description').classList.remove('hidden');
            products[i].querySelector('.cancel').classList.remove('hidden');
            products[i].querySelector('.more').classList.add('hidden');
        }
    );
    products[i].querySelector('.cancel').addEventListener('click', function () {
            products[i].querySelector('.photo').classList.remove('hidden');
            products[i].querySelector('.description').classList.add('hidden');
            products[i].querySelector('.cancel').classList.add('hidden');
            products[i].querySelector('.more').classList.remove('hidden');
        }
    );
}

