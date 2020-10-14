{function() {


var data = [
    {
        name: 'CSS Peek'
        description: 'CSS Peak extends HTML and Embedded JavaScript templates with Go To Definition support for CSS classes and IDs found in your markup.'
        author: 'Pranay Prakash',
        url: 'https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek'
        downloads: 1171855,
        stars: 61,
        price: free,
        selectors: 'p1'
    },
    {
        name: 'Rainbow Brackets'
        description: 'Add some fun into your editor with Rainbow Brackets! This Visual Studio Code extension provides rainbow colors for round brackets, square brackets, and curly brackets. This can be especially helpful for JavaScript programmers!'
        author: '2gua',
        url: 'https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets'
        downloads: 642709,
        stars: 68,
        price: free,
        selectors: 'p2'

    },
    {
        name: 'Instant Markdown'
        description: 'Add some fun into your editor with Rainbow Brackets! This Visual Studio Code extension provides rainbow colors for round brackets, square brackets, and curly brackets. This can be especially helpful for JavaScript programmers!'
        author: 'David Bankier',
        url: 'https://marketplace.visualstudio.com/items?itemName=dbankier.vscode-instant-markdown'
        downloads: 117987,
        stars: 38,
        price: free,
        selectors: 'p3'

    }
];


var getTodaysDate = function() {
    var today = new Date();
    return today.toDateString();
};

var getEl = function (id) {
    return document.getElementById(id);
}
@param
@return

var writePackageInfro = function() {
    var selector = package.selector
    nameEl = getEl(selector + '-name'),
    descEl = getEl(selector + '-description'),
    authEl = getEl(selector + '-downloads'),
    starsEl = getEl(selector + '-stars');

    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    authEl.textContent = package.author;
    downloadEl.textContent = package.getFormattedDwonloads();
    starsEl.textContent = package.getFormattedStars();
}

dateEl = getEl('date');
dateEl.textContent = getTodaysDate();

var CSS Peek = new Package(data[0]);
writePackageInfo(CSS Peek);
var Rainbow Brackets = new Package(data[1]);
writePackageInfo(Rainbow Brackets);
var Instant Markdown = new Package(data[2);
writePackageInfo(Instant Markdown);

}());
