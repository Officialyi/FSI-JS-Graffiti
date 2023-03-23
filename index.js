let header = document.querySelector('#page-header');
header.style.textAlign = "left";
document.getElementById("Doggos").innerHTML="Old Dogs > Cats";
header.style.backgroundColor="coral";


let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50px'
}
