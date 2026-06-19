function HeaderRoot() {
    const template = document.createElement('template')
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