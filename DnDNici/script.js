function printInfo(information) {
    console.log(information);
}

function HeaderHome() {
    const template = document.createElement('template');
    template.innerHTML=`
    <nav class="navbar fixed-top navbar-expand-md bg-body-tertiary">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">DNDNici</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll">
            <!--<li class="nav-item"><a class="nav-link" href="#Homebrew">Homebrew</a></li>-->
            <li class="nav-item"><a class="nav-link" href="#Spells">Spells</a></li>
            <li class="nav-item"><a class="nav-link" href="#Races">Races</a></li>
            <li class="nav-item"><a class="nav-link" href="#Backgrounds">Backgrounds</a></li>
            <li class="nav-item"><a class="nav-link" href="#Classes">Classes</a></li>
            <!--<li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#Classes" role="button" data-bs-toggle="dropdown" aria-expanded="false">Classes</a>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#Artificer">Artificer</a></li>
                <li><a class="dropdown-item" href="#Barbarian">Barbarian</a></li>
                <li><a class="dropdown-item" href="#Bard">Bard</a></li>
                <li><a class="dropdown-item" href="#Blood Hunter">Blood Hunter</a></li>
                <li><a class="dropdown-item" href="#Cleric">Cleric</a></li>
                <li><a class="dropdown-item" href="#Druid">Druid</a></li>
                <li><a class="dropdown-item" href="#Fighter">Fighter</a></li>
                <li><a class="dropdown-item" href="#Monk">Monk</a></li>
                <li><a class="dropdown-item" href="#Paladin">Paladin</a></li>
                <li><a class="dropdown-item" href="#Ranger">Ranger</a></li>
                <li><a class="dropdown-item" href="#Rogue">Rogue</a></li>
                <li><a class="dropdown-item" href="#Sorcerer">Sorcerer</a></li>
                <li><a class="dropdown-item" href="#Warlock">Warlock</a></li>
                <li><a class="dropdown-item" href="#Wizard">Wizard</a></li>
                </ul>
            </li>-->
            <li class="nav-item"><a class="nav-link" href="#Feats">Feats</a></li>
            <li class="nav-item"><a class="nav-link" href="#Options">Options</a></li>
            <li class="nav-item"><a class="nav-link" href="#Items">Items</a></li>
            <li class="nav-item"><a class="nav-link" href="#Rules">Rules</a></li>
            <!--<li class="nav-item"><a class="nav-link" href="#Miscellaneous">Miscellaneous</a></li>-->
            </ul>
            <!--<form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
            </form>-->
        </div>
        </div>
    </nav>
    <div style="padding-top: 60px;"></div>
    `
    document.body.appendChild(template.content);
}

function HeaderRoot() {
    const template = document.createElement('template');
    template.innerHTML=`
    <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <a class="navbar-brand" href="wikihome.html#">DNDNici</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll">
            <!--<li class="nav-item"><a class="nav-link" href="wikihome.html#Homebrew">Homebrew</a></li>-->
            <li class="nav-item"><a class="nav-link" href="wikihome.html#Spells">Spells</a></li>
            <li class="nav-item"><a class="nav-link" href="wikihome.html#Races">Races</a></li>
            <li class="nav-item"><a class="nav-link" href="wikihome.html#Backgrounds">Backgrounds</a></li>
            <li class="nav-item"><a class="nav-link" href="wikihome.html#Classes">Classes</a></li>
            <!--<li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#Classes" role="button" data-bs-toggle="dropdown" aria-expanded="false">Classes</a>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="wikihome.html#Artificer">Artificer</a></li>
                <li><a class="dropdown-item" href="wikihome.html#Barbarian">Barbarian</a></li>
                <li><a class="dropdown-item" href="wikihome.html#Bard">Bard</a></li>
                <li><a class="dropdown-item" href="wikihome.html#Blood Hunter">Blood Hunter</a></li>
                <li><a class="dropdown-item" href="wikihome.html#Cleric">Cleric</a></li>
                <li><a class="dropdown-item" href="wikihome.html#Druid">Druid</a></li>
                <li><a class="dropdown-item" href="wikihome.html#Fighter">Fighter</a></li>
                <li><a class="dropdown-item" href="wikihome.html#Monk">Monk</a></li>
                <li><a class="dropdown-item" href="wikihome.html#Paladin">Paladin</a></li>
                <li><a class="dropdown-item" href="wikihome.html#Ranger">Ranger</a></li>
                <li><a class="dropdown-item" href="wikihome.html#Rogue">Rogue</a></li>
                <li><a class="dropdown-item" href="wikihome.html#Sorcerer">Sorcerer</a></li>
                <li><a class="dropdown-item" href="wikihome.html#Warlock">Warlock</a></li>
                <li><a class="dropdown-item" href="wikihome.html#Wizard">Wizard</a></li>
                </ul>
            </li>-->
            <li class="nav-item"><a class="nav-link" href="wikihome.html#Feats">Feats</a></li>
            <li class="nav-item"><a class="nav-link" href="wikihome.html#Options">Options</a></li>
            <li class="nav-item"><a class="nav-link" href="wikihome.html#Items">Items</a></li>
            <li class="nav-item"><a class="nav-link" href="wikihome.html#Rules">Rules</a></li>
            <!--<li class="nav-item"><a class="nav-link" href="wikihome.html#Miscellaneous">Miscellaneous</a></li>-->
            </ul>
            <!--<form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
            </form>-->
        </div>
        </div>
    </nav>
    <div style="padding-top: 60px;"></div>
    `
    document.body.appendChild(template.content);
}

function HeaderOneStep() {
    const template = document.createElement('template');
    template.innerHTML=`
    <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <a class="navbar-brand" href="../wikihome.html#">DNDNici</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll">
            <!--<li class="nav-item"><a class="nav-link" href="../wikihome.html#Homebrew">Homebrew</a></li>-->
            <li class="nav-item"><a class="nav-link" href="../wikihome.html#Spells">Spells</a></li>
            <li class="nav-item"><a class="nav-link" href="../wikihome.html#Races">Races</a></li>
            <li class="nav-item"><a class="nav-link" href="../wikihome.html#Backgrounds">Backgrounds</a></li>
            <li class="nav-item"><a class="nav-link" href="../wikihome.html#Classes">Classes</a></li>
            <!--<li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#Classes" role="button" data-bs-toggle="dropdown" aria-expanded="false">Classes</a>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="../wikihome.html#Artificer">Artificer</a></li>
                <li><a class="dropdown-item" href="../wikihome.html#Barbarian">Barbarian</a></li>
                <li><a class="dropdown-item" href="../wikihome.html#Bard">Bard</a></li>
                <li><a class="dropdown-item" href="../wikihome.html#Blood Hunter">Blood Hunter</a></li>
                <li><a class="dropdown-item" href="../wikihome.html#Cleric">Cleric</a></li>
                <li><a class="dropdown-item" href="../wikihome.html#Druid">Druid</a></li>
                <li><a class="dropdown-item" href="../wikihome.html#Fighter">Fighter</a></li>
                <li><a class="dropdown-item" href="../wikihome.html#Monk">Monk</a></li>
                <li><a class="dropdown-item" href="../wikihome.html#Paladin">Paladin</a></li>
                <li><a class="dropdown-item" href="../wikihome.html#Ranger">Ranger</a></li>
                <li><a class="dropdown-item" href="../wikihome.html#Rogue">Rogue</a></li>
                <li><a class="dropdown-item" href="../wikihome.html#Sorcerer">Sorcerer</a></li>
                <li><a class="dropdown-item" href="../wikihome.html#Warlock">Warlock</a></li>
                <li><a class="dropdown-item" href="../wikihome.html#Wizard">Wizard</a></li>
                </ul>
            </li>-->
            <li class="nav-item"><a class="nav-link" href="../wikihome.html#Feats">Feats</a></li>
            <li class="nav-item"><a class="nav-link" href="../wikihome.html#Options">Options</a></li>
            <li class="nav-item"><a class="nav-link" href="../wikihome.html#Items">Items</a></li>
            <li class="nav-item"><a class="nav-link" href="../wikihome.html#Rules">Rules</a></li>
            <!--<li class="nav-item"><a class="nav-link" href="../wikihome.html#Miscellaneous">Miscellaneous</a></li>-->
            </ul>
            <!--<form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
            </form>-->
        </div>
        </div>
    </nav>
    `
    document.body.appendChild(template.content);
}
function HeaderTwoStep() {
    const template = document.createElement('template');
    template.innerHTML=`
    <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <a class="navbar-brand" href="../../wikihome.html#">DNDNici</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll">
            <!--<li class="nav-item"><a class="nav-link" href="../../wikihome.html#Homebrew">Homebrew</a></li>-->
            <li class="nav-item"><a class="nav-link" href="../../wikihome.html#Spells">Spells</a></li>
            <li class="nav-item"><a class="nav-link" href="../../wikihome.html#Races">Races</a></li>
            <li class="nav-item"><a class="nav-link" href="../../wikihome.html#Backgrounds">Backgrounds</a></li>
            <li class="nav-item"><a class="nav-link" href="../../wikihome.html#Classes">Classes</a></li>
            <!--<li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#Classes" role="button" data-bs-toggle="dropdown" aria-expanded="false">Classes</a>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="../../wikihome.html#Artificer">Artificer</a></li>
                <li><a class="dropdown-item" href="../../wikihome.html#Barbarian">Barbarian</a></li>
                <li><a class="dropdown-item" href="../../wikihome.html#Bard">Bard</a></li>
                <li><a class="dropdown-item" href="../../wikihome.html#Blood Hunter">Blood Hunter</a></li>
                <li><a class="dropdown-item" href="../../wikihome.html#Cleric">Cleric</a></li>
                <li><a class="dropdown-item" href="../../wikihome.html#Druid">Druid</a></li>
                <li><a class="dropdown-item" href="../../wikihome.html#Fighter">Fighter</a></li>
                <li><a class="dropdown-item" href="../../wikihome.html#Monk">Monk</a></li>
                <li><a class="dropdown-item" href="../../wikihome.html#Paladin">Paladin</a></li>
                <li><a class="dropdown-item" href="../../wikihome.html#Ranger">Ranger</a></li>
                <li><a class="dropdown-item" href="../../wikihome.html#Rogue">Rogue</a></li>
                <li><a class="dropdown-item" href="../../wikihome.html#Sorcerer">Sorcerer</a></li>
                <li><a class="dropdown-item" href="../../wikihome.html#Warlock">Warlock</a></li>
                <li><a class="dropdown-item" href="../../wikihome.html#Wizard">Wizard</a></li>
                </ul>
            </li>-->
            <li class="nav-item"><a class="nav-link" href="../../wikihome.html#Feats">Feats</a></li>
            <li class="nav-item"><a class="nav-link" href="../../wikihome.html#Options">Options</a></li>
            <li class="nav-item"><a class="nav-link" href="../../wikihome.html#Items">Items</a></li>
            <li class="nav-item"><a class="nav-link" href="../../wikihome.html#Rules">Rules</a></li>
            <!--<li class="nav-item"><a class="nav-link" href="../../wikihome.html#Miscellaneous">Miscellaneous</a></li>-->
            </ul>
            <!--<form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
            </form>-->
        </div>
        </div>
    </nav>
    `
    document.body.appendChild(template.content);
}

function spellVisibility() {
    url = window.location.href;
    urlParamater = url.substring(url.indexOf('?')+6);

    if(urlParamater.substring(urlParamater.length - 1) == '#') {
        urlParamater = urlParamater.substring(0, urlParamater.length - 1);
    }

    if (urlParamater.length > 19) {
        document.getElementById("SpellHeader").textContent = "Spells";
        
        var elements = document.getElementsByClassName("Spells");
        for (i=0; i<elements.length; i++) {
            elements[i].style.display = '';
        }
    }
    else {
        /*if (urlParamater == "Unearthed%20Arcana") {
            urlParamater = "Unearthed Arcana"
        }*/
        document.getElementById("SpellHeader").textContent = urlParamater + " Spells";
    
        filters = ["Artificer","Bard","Cleric","Druid","Fighter","Paladin","Ranger","Rogue","Sorcerer","Warlock","Wizard","Abjuration","Conjuration","Divination","Enchantment","Evocation","Illusion","Necromancy","Transmutation","Concentration","Ritual","Battlezoo","Delve","Ryokos"];
        //"Dunamancy","Homebrew","Technomagic","Unearthed Arcana",
    
        for (f=0; f<filters.length; f++) {
            if ((urlParamater == "Artificer") & (filters[f] == "Artificer")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Bard") & (filters[f] == "Bard")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Cleric") & (filters[f] == "Cleric")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Druid") & (filters[f] == "Druid")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Fighter") & (filters[f] == "Fighter")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Paladin") & (filters[f] == "Paladin")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Ranger") & (filters[f] == "Ranger")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Rogue") & (filters[f] == "Rogue")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Sorcerer") & (filters[f] == "Sorcerer")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Warlock") & (filters[f] == "Warlock")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Wizard") & (filters[f] == "Wizard")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Abjuration") & (filters[f] == "Abjuration")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Conjuration") & (filters[f] == "Conjuration")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Divination") & (filters[f] == "Divination")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Enchantment") & (filters[f] == "Enchantment")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Evocation") & (filters[f] == "Evocation")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Illusion") & (filters[f] == "Illusion")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Necromancy") & (filters[f] == "Necromancy")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Transmutation") & (filters[f] == "Transmutation")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Concentration") & (filters[f] == "Concentration")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Ritual") & (filters[f] == "Ritual")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Battlezoo") & (filters[f] == "Battlezoo")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Delve") & (filters[f] == "Delve")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Ryokos") & (filters[f] == "Ryokos")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            /*else if ((urlParamater == "Dunamancy") & (filters[f] == "Dunamancy")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Homebrew") & (filters[f] == "Homebrew")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Technomagic") & (filters[f] == "Technomagic")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            else if ((urlParamater == "Unearthed Arcana") & (filters[f] == "Unearthed Arcana")) {
                var elements = document.getElementsByClassName(filters[f]);
                for (i=0; i<elements.length; i++) {
                    elements[i].style.display = '';
                }
            }
            */
        }
    }
}

//unused function for closing when clicking on an element
function closeContent() {
    document.getElementById("TableClose").style.display = 'none';
    document.getElementById("TableOpen").style.display = 'contents';
}
//unused function for opening when clicking on an element
function OpenContent() {
    document.getElementById("TableClose").style.display = 'contents';
    document.getElementById("TableOpen").style.display = 'none';
}