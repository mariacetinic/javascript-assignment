/* GLOBAL VARIABLES */
var listOfProducts;
// add more global variables when needed..

/* Get products from the json file and store it in a javascript variable */
fetch("products.json")
.then(function(response) {
    return response.json();
})
.then(function(products) {
    listOfProducts = products; // listOfProducts innehåller information från json.
    createUIFromLoadedProducts();
});

/** Uses the loaded products data to create a visible product list on the website */
function createUIFromLoadedProducts() {
    
    

    /* Check your console to see that the products are stored in the listOfProducts varible */
    console.log(listOfProducts);

    /* Add your code here, remember to brake your code in to
    smaller function blocks to reduce complexity and increase readability */
    //Hämtar diven med id:et main för att sedan kunna appenda
    var mainContent = document.getElementById("main");

    //skapar div med class där en produkt ska ligga.
    var phoneItem = document.createElement("div");
    phoneItem.className = "phoneItemClass";

   for (var index=0; index < listOfProducts.length; index++) {
      
        console.log(listOfProducts[index].title);
       //listOfProducts[index].title hämtar titlen från json filen
       // skriva ut titelarna i div.phoneItemClass

       //detta skriver ut alla titlar i en phone item div!!! YES!
       var getPhoneTitle = document.createTextNode(listOfProducts[index].title);
       phoneItem.appendChild(getPhoneTitle);
   }

    
    //Lägger till div.phoneItemclass till div.main
    mainContent.appendChild(phoneItem);
    /* Each function must have an explainetory comment like the one for this function, see row 15 */
    
    /* Feel free to remove these other comments */
}


/* Read the projects readme before you start! */
/* Good luck and have fun 🤓 */