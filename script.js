//step 1
const mainEl = document.querySelector('main');
console.log(mainEl);
//step 2
mainEl.style.backgroundColor = 'var(--main-bg)'
//let backGroundColor = 'var(--main-bg)'
//step 3 
mainEl.innerHTML = '<h1>DOM Manipulation</h1>'
//step 4 
mainEl.classList = 'flex-ctr';

// Creating a menu bar 
//step 1
const topmenuEl = document.getElementById('top-menu')
console.log(topmenuEl);
// step 2
topmenuEl.style.height = ('100%')
// step 3
topmenuEl.style.backgroundColor = 'var(--top-menu-bg)'
//step 4 
topmenuEl.classList = 'flex-around';

// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

// function code(something) {}
// (something) => {}
menuLinks.forEach(
    (buttonLinks) => {
        const linkElements = document.createElement("a")
        linkElements.href = buttonLinks.href
        linkElements.textContent = buttonLinks.text
        topmenuEl.appendChild(linkElements)
    }
)