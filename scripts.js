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

    //Hämtar diven med id:et main för att sedan kunna appenda
    var mainContent = document.getElementById("main");

    //skapar div med class där en produkt ska ligga.
    var phoneItem = document.createElement("div");
    phoneItem.className = "phoneContainerClass";

   for (var index=0; index < listOfProducts.length; index++) {
      
        //console.log(listOfProducts[index].title);
       //listOfProducts[index].title hämtar titlen från json filen
       // skriva ut titelarna i div.phoneItemClass

       //En div till varje titel
        var phoneTitle = document.createElement("div");
        phoneTitle.className = "phoneItemClass";
        
       //Lägger in titlarna i en variabel
       var getPhoneTitle = document.createElement("h1");
       getPhoneTitle.innerText = listOfProducts[index].title;
       phoneTitle.appendChild(getPhoneTitle);

       var getPhoneDescription = document.createElement("h5");
       getPhoneDescription.innerText = listOfProducts[index].description;
       phoneTitle.appendChild(getPhoneDescription);


       
       var getPhonePrice = document.createElement("p");
       getPhonePrice.innerText = listOfProducts[index].price;
       phoneTitle.appendChild(getPhonePrice);

       //lägger till titlarna i form av text i var sin div
       var getPhoneImage = document.createElement("img");
       getPhoneImage.src = "assets/" + listOfProducts[index].image;
       phoneTitle.appendChild(getPhoneImage);
        // Lägger till alla divar med titlar i diven phoneItemClass
       phoneItem.appendChild(phoneTitle);
   }


    //Lägger till div.phoneItemclass till div.main
    mainContent.appendChild(phoneItem);

}


/* Read the projects readme before you start! */
/* Good luck and have fun 🤓 */