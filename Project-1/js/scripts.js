(function() {

    var data = [
        {
            Title: 'Absolver',
            description: 'Absolver is an online multiplayer combat game where players are placed behind the mask of a Prospect under control of the Guides, the new rulers of the fallen Adal Empire, who will determine your worth in joining their elite corps of Absolvers.',
            Developer: 'Sloclap',
            url: 'https://store.steampowered.com/app/473690/Absolver/',
            Price: '$29.99'
        },
        {
            Title: 'Noita',
            description: 'Noita is a magical action roguelite set in a world where every pixel is physically simulated. Fight, explore, melt, burn, freeze and evaporate your way through the procedurally generated world using spells youve created yourself.',
            Developer: 'Nolla Games',
            url: 'https://store.steampowered.com/app/881100/Noita/',
            Price: '$19.99'
        },
        {
            Title: 'Baldurs Gate 3',
            description: 'Gather your party, and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power.',
            Developer: 'Laurian Studios',
            url: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/',
            Price: '$59.99'
        }
    ];
    
    function Package(data) {
        this.title = data.Title;
        this.description = data.description;
        this.developer = data.developer;
        this.url = data.url;
        this.price = data.price;
        this.selector = data.selector;
    
        this.getFormattedPrice = function () {
            return this.Price.toLocaleString();
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
        titleEl = getEl(selector + 'Title'),
        descEl = getEl(selector + 'description'),
        priceEl = getEl(selector + 'Price'),
        devEl = getEl(selector + 'Developer'),
    
        titleEl.textContent = package.Title; 
        descEl.textContent = package.description;
        priceEl.textContent = package.getFormattedPrice();
        devEl.textContent = package.Developer;
        
    };
    
    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();
    
    var Absolver = new Package(data[0]);
    writePackageInfo(Absolver);
    var Noita = new Package(data[1]);
    writePackageInfo(Noita);
    var Baldurs_Gate_3 = new Package(data[2]);
    writePackageInfo(Baldurs_Gate_3);
}());
