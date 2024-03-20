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

        if(title.includes(searchValue) || searchValue=='' || category.includes(searchValue)){
               item.style.display='block';
        }else{
            item.style.display='none'; 
        }
    })

}

searchBtn.addEventListener('click',filterProduct);
searchInput.addEventListener('keyup',filterProduct);

categoryBtns.forEach(btn=>{
    btn.addEventListener('click',setCategory);
})


filterProduct();
