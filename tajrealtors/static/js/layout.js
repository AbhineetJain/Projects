window.addEventListener('load', main)

function main() {
    pageTitle = document.title.split('|')[1].trim()
    navLinks =  document.getElementsByClassName('navLinks')
    for(i=0; i<navLinks.length; i++){
        if (navLinks[i].innerHTML == pageTitle) {
            navLinks[i].parentElement.style.backgroundColor = '#08088A'
            navLinks[i].style.color = 'white'
            break
        }
    }
    $('.navListItem').hover(function() {
        $(this).css('backgroundColor', '#08088A')
        $(this.children[0]).css('color', 'white')        
    },
    function() {
        if ($(this.children[0]).html()!=pageTitle) {
            $(this).css('backgroundColor', 'rgba(255, 255, 255, 0.75)')
            $(this.children[0]).css('color', '#08088A')
        }
    })
}