function closeContent() {
    document.getElementById("TableClose").style.display = 'none';
    document.getElementById("TableOpen").style.display = 'contents';
}
function OpenContent() {
    document.getElementById("TableClose").style.display = 'contents';
    document.getElementById("TableOpen").style.display = 'none';
}
function printInfo(information) {
    console.log(information);
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
        if (urlParamater == "Unearthed%20Arcana") {
            urlParamater = "Unearthed Arcana"
        }
        document.getElementById("SpellHeader").textContent = urlParamater + " Spells";
    
        filters = ["Artificer","Bard","Cleric","Druid","Fighter","Paladin","Ranger","Rogue","Sorcerer","Warlock","Wizard","Abjuration","Conjuration","Divination","Enchantment","Evocation","Illusion","Necromancy","Transmutation","Dunamancy","Homebrew","Ritual","Technomagic","Unearthed Arcana"];
    
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
            else if ((urlParamater == "Dunamancy") & (filters[f] == "Dunamancy")) {
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
            else if ((urlParamater == "Ritual") & (filters[f] == "Ritual")) {
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
        }
    }
}