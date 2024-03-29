class Header{
    constructor(parent,props){
        this.parentElement = parent;
        this.props = props;

        this.template;
    }

    init(){
        this.initElements();
        this.initEventListener();
    }

    initElements(){
        this.template = this.initTemplate();

        this.elements = {

        }

        this.parentElement.appendChild(this.template);
    }

    initEventListener(){

    }

    initTemplate() {
        const parser = new DOMParser();
        const templateString = `
        <header>
            <nav class="header-nav">
                <div class="nav-logo">
                    <h1><span class="logo-color-accent">R</span>eading<span class="logo-color-accent">R</span>oom</h1>
                </div>
                <div class="nav-links">
                    <div class="nav-link"><a href=""><h4>Prenota</h4></a></div>
                    <div class="nav-link"><a href=""><h4>ContactUs</h4></a></div>
                    <div class="nav-link" ><a href=""><h4>Home</h4></a></div>
                </div>

                <div class="nav-auth">
                    <button class="button-auth">
                        <h4>Accedi</h4>
                    </button>
                </div>
            </nav>
        </header>`;
        const templateElement = parser.parseFromString(templateString, 'text/html');
        return templateElement.documentElement.querySelector("body > header");
    }
}

export default Header;