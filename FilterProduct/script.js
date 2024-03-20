const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoryBtns=document.querySelectorAll('.category-btn')


function filterProduct(){
    const searchValue=searchInput.value.toLowerCase();
    const productItems=document.querySelectorAll('.product-item');

    productItems.forEach(item=>{
        const title =item.querySelector('h3').innerText.toLowerCase();
        const category= item.dataset.category;

        const activeCategory =document.querySelector('.category-btn.active').dataset.category;

        if((title.includes(searchValue) || searchValue=='' || category.includes(searchValue)) && (category===activeCategory || activeCategory==='all')){
               item.style.display='block';
        }else{
            item.style.display='none'; 
        }
    })

}

function setCategory(e){

    //removing active class from all category
   categoryBtns.forEach(btn=>
    btn.classList.remove('active'));

   //adding active class to perticular selected category
   e.target.classList.add('active')

   filterProduct();

}

searchBtn.addEventListener('click',filterProduct);
searchInput.addEventListener('keyup',filterProduct);

categoryBtns.forEach(btn=>{
    btn.addEventListener('click',setCategory);
})


filterProduct();
