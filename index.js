//fetching data from the Api server
fetch("http://localhost:3000/ramens")
.then((res) =>res.json())
.then(renderRamens)
//iterating over each ramen
function renderRamens(ramens){
ramens.forEach(renderRamen)
}
//adding images
function renderRamen(ramen){
    const ramenMenuDiv = element('ramen-menu');

    const ramenImage = document.createElement("img");
    ramenImage.src=ramen.image;
    ramenMenuDiv.append(ramenImage)

    //adding event listeners
    ramenImage.addEventListener("click", e => renderDetails(ramen))
}
function renderDetails(ramen){
 const detailImage = element("detail-image")
   const ramenName = element("ramen-name")
   const restaurantName =element("restaurant-name") 
   const ratingDisplay = element("rating-display")
    const commentDisplay = element("comment-display")

   detailImage.src= ramen.image;
   detailImage.alt= ramen.name;
   ramenName.innerHTML =ramen.name;
   restaurantName.innerHTML= ramen.restaurant;
   ratingDisplay.innerHTML = ramen.rating
   commentDisplay.innerHTML = ramen.comment

}

function element(elementName){
return document.getElementById(elementName)
}
