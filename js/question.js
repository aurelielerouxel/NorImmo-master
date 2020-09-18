var accItem = document.getElementsByClassName('accordionObject');
var accHD = document.getElementsByClassName('accordionObjectHeading');

for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionObject close';
    }
    if (itemClass == 'accordionObject close') {
        this.parentNode.className = 'accordionObject open';
    }
}