/* GLOBAL VARIABLES */
var listOfProducts;
// add more global variables when needed..

/* Get products from the json file and store it in a javascript variable */
fetch("products.json")
.then(function(response) {
    return response.json();
})
.then(function(products) {
    listOfProducts = products;
    createUIFromLoadedProducts();
});

/** Uses the loaded products data to create a visible product list on the website */
function createUIFromLoadedProducts() {
    
    //Hämtar diven med id:et main för att sedan kunna appenda
    var mainContent = document.getElementById("main");

    //skapar div med class där en produkt ska ligga.
    var phoneItem = document.createElement("div");
    phoneItem.className = "phoneItemClass";
    /* Check your console to see that the products are stored in the listOfProducts varible */
    console.log(listOfProducts);

    /* Add your code here, remember to brake your code in to
    smaller function blocks to reduce complexity and increase readability */

    /* Each function must have an explainetory comment like the one for this function, see row 15 */
    
    /* Feel free to remove these other comments */
}


/* Read the projects readme before you start! */
/* Good luck and have fun 🤓 */