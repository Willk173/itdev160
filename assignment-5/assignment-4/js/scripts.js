(function() {

    var data = [
        {
            name: 'CSS_Peek',
            description: 'CSS Peak extends HTML and Embedded JavaScript templates with Go To Definition support for CSS classes and IDs found in your markup.',
            author: 'Pranay Prakash',
            url: 'https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek',
            downloads: 1171855,
            stars: 61,
            price: free,
            selectors: 'p1'
        },
        {
            name: 'Rainbow_Brackets',
            description: 'Add some fun into your editor with Rainbow Brackets! This Visual Studio Code extension provides rainbow colors for round brackets, square brackets, and curly brackets. This can be especially helpful for JavaScript programmers!',
            author: '2gua',
            url: 'https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets',
            downloads: 642709,
            stars: 68,
            price: free,
            selectors: 'p2'
        },
        {
            name: 'Instant_Markdown',
            description: 'The Instant Markdown extension lets you edit Markdown documents in VS Code and instantly previews them in browser. It’s super helpful for editing readme files and other documents written in Markdown.',
            author: 'David Bankier',
            url: 'https://marketplace.visualstudio.com/items?itemName=dbankier.vscode-instant-markdown',
            downloads: 117987,
            stars: 38,
            price: free,
            selectors: 'p3'
        }
    ];
    
    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;
    
        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();
        };
    
        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        };
    }
    
    
    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };
    
    var getEl = function (id) {
        return document.getElementById(id);
    }
    
    
    var writePackageInfo = function (package) {
        var selector = package.selector
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        downloadEl = getEl(selector + '-downloads'),
        authEl = getEl(selector + 'author'),
        starsEl = getEl(selector + '-stars');
    
        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
    };
    
    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();
    
    var CSS_Peek = new Package(data[0]);
    writePackageInfo(CSS_Peek);
    var Rainbow_Brackets = new Package(data[1]);
    writePackageInfo(Rainbow_Brackets);
    var Instant_Markdown = new Package(data[2]);
    writePackageInfo(Instant_Markdown);
}());
