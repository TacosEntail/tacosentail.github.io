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

    //Change the name of the spell list at the top of the screen so the user knows what they are looking at
    if (urlParamater.length > 19) {
        urlParamater = ""
        document.getElementById("SpellHeader").textContent = urlParamater + " Spells";
        
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
            if (urlParamater == "Artificer") {
                if (filters[f] == "Artificer") {
                    var elements = document.getElementsByClassName(filters[f]);
                    for (i=0; i<elements.length; i++) {
                        elements[i].style.display = '';
                    }
                }
            }
            //else if (urlParamater == "Bard") {
            //}
            //else if (urlParamater == "Cleric") {
            //}
            //else if (urlParamater == "Druid") {
            //}
            //else if (urlParamater == "Fighter") {
            //}
            //else if (urlParamater == "Paladin") {
            //}
            //else if (urlParamater == "Ranger") {
            //}
            //else if (urlParamater == "Rogue") {
            //}
            //else if (urlParamater == "Sorcerer") {
            //}
            //else if (urlParamater == "Warlock") {
            //}
            //else if (urlParamater == "Wizard") {
            //}
            //else if (urlParamater == "Abjuration") {
            //}
            //else if (urlParamater == "Conjuration") {
            //}
            //else if (urlParamater == "Divination") {
            //}
            //else if (urlParamater == "Enchantment") {
            //}
            //else if (urlParamater == "Evocation") {
            //}
            //else if (urlParamater == "Illusion") {
            //}
            //else if (urlParamater == "Necromancy") {
            //}
            //else if (urlParamater == "Transmutation") {
            //}
            //else if (urlParamater == "Dunamancy") {
            //}
            //else if (urlParamater == "Homebrew") {
            //}
            //else if (urlParamater == "Ritual") {
            //}
            //else if (urlParamater == "Technomagic") {
            //}
            //else if (urlParamater == "Unearthed Arcana") {
            //}
        }
    }
}