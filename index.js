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
    const ramenMenuDiv = document.getElementById('ramen-menu');
    const ramenImage = document.createElement("img");
    ramenImage.src=ramen.image;
    ramenMenuDiv.append(ramenImage)

    //adding event listeners
    ramenImage.addEventListener("click", e => renderDetails(ramen))
}
function renderDetails(ramen) {
    console.log(ramen.image)

}