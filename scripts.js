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
    var phoneContainer = document.createElement("div");
    phoneContainer.className = "phoneContainerClass";

   for (var index=0; index < listOfProducts.length; index++) {
      
        //console.log(listOfProducts[index].title);
       //listOfProducts[index].title hämtar titlen från json filen
       // skriva ut titelarna i div.phoneItemClass

       //hämtar funktionen dataFromProducts med all data
       var phoneItem = dataFromProducts(listOfProducts[index]);


        // Lägger till alla divar med titlar i diven phoneItemClass
        phoneContainer.appendChild(phoneItem);
        
        
    //var testing = phoneItem
    //testing.length;
    //console.log('testing');
   
   }

    //Lägger till div.phoneItemclass till div.main
    mainContent.appendChild(phoneContainer);

}

function dataFromProducts(listOfProducts) {
       //En div till varje titel
       var phoneItem = document.createElement("div");
       phoneItem.className = "phoneItemClass";
       
      //Lägger in titlarna i en variabel
      var getPhoneTitle = document.createElement("h1");
      getPhoneTitle.innerText = listOfProducts.title;
      phoneItem.appendChild(getPhoneTitle);

      var getPhoneDescription = document.createElement("h5");
      getPhoneDescription.innerText = listOfProducts.description;
      phoneItem.appendChild(getPhoneDescription);
      
      var getPhonePrice = document.createElement("p");
      getPhonePrice.innerText = listOfProducts.price;
      phoneItem.appendChild(getPhonePrice);

      //lägger till titlarna i form av text i var sin div
      var getPhoneImage = document.createElement("img");
      getPhoneImage.src = "assets/" + listOfProducts.image;
      phoneItem.appendChild(getPhoneImage);

      //lägg till köpknapp
      var buyButton = document.createElement("button");
      buyButton.id = "button";
      buyButton.onclick = function() { 
        var amount = listOfProducts;
            console.log(listOfProducts);
       };
      buyButton.innerText = "Lägg till i kundvagnen";
      phoneItem.appendChild(buyButton);

      return phoneItem; //sparar all data så jag kan återanvända

    }




/* Read the projects readme before you start! */
/* Good luck and have fun 🤓 */