class Authentication {
    constructor(parentElement, propsLogin, propsRegistration) {
        this.parentElement = parentElement;
        this.propsLogin = propsLogin;
        this.propsRegistration = propsRegistration;
        this.template = null;
        this.elements = {};
        this.addNumberCounter = 0; // Initialize counter
    }

    init() {
        this.initElements();
        this.initEventListeners();
    }

    initElements() {
        this.template = this.initTemplate();
        this.elements = {
            registrationButton: this.template.querySelector('.register-link'),
            loginButton: this.template.querySelector('.login-link'),
            modalWindow: this.template.querySelector('.modal-content'),
            registrationAddNumber: this.template.querySelector('.registration-add-number'),
            wrapperInputRegistrationData: this.template.querySelector('.wrapper-input-registration-data'),
            addNumber: this.template.querySelectorAll('input.add-number'),
        };
        this.parentElement.appendChild(this.template);
    }

    destroyTemplate() {
        this.template.remove();
        this.template = null;
    }

    initEventListeners() {
        if (this.elements.registrationButton) {
            this.elements.registrationButton.addEventListener('click', (e) => {
                this.propsRegistration = true;
                this.propsLogin = false;
                this.destroyTemplate();
                this.init();
                this.elements.registrationAddNumber.addEventListener('click', this.handleAddNumberClick);
                this.addNumberCounter = 0; 
            });
        }

        if (this.elements.loginButton) {
            this.elements.loginButton.addEventListener('click', (e) => {
                this.propsRegistration = false;
                this.propsLogin = true;
                this.destroyTemplate();
                this.init();
            });
        }
    }

    handleAddNumberClick = (e) => {
        console.log(e.target);
        console.log(this.elements.wrapperInputRegistrationData);
        console.log(this.initTemplateTelefone);
        if (this.addNumberCounter < 2) {
            const addNumberInput = this.initTemplateTelefone();
            this.elements.wrapperInputRegistrationData.appendChild(addNumberInput);
            this.addNumberCounter++; // Increment counter
        } if (this.addNumberCounter === 2) {
            this.elements.registrationAddNumber.innerHTML = "Atri numeri potrai aggiungere nei impostazioni";
        }
    }

    initTemplate() {
        const parser = new DOMParser();
        let templateString = "";

        if (this.propsLogin) {
            templateString = `
            <div class="modal-window">
                <div class="modal-content login-window">
                    <h2 class="modal-content-logo">Login</h2>
                    <form class="auth-form">
                        <input class="input-data input-data-auth" type="text" placeholder="login">
                        <input class="input-data input-data-auth" type="password" placeholder="pass">
                        <button class="confirm-button confirm-auth-button">
                            <h4>Prenota adesso</h4>
                        </button>
                        <h4 class="reminder-text">Non hai account? <a class="register-link">Registra</a></h4>
                    </form>
                </div>
            </div>`;
        } else if (this.propsRegistration) {
            templateString = `
            <div class="modal-window">
                <div class="modal-content registration-window">
                    <h2 class="modal-content-logo">Registration</h2>
                    <form class="auth-form auth-form-registration">
                        <div class="wrapper-registration-data">
                            <div class="wrapper-input-registration-data">
                                <input class="input-data input-data-auth" type="text" placeholder="nome">
                                <input class="input-data input-data-auth" type="password" placeholder="cognome">
                                <input class="input-data input-data-auth" type="text" placeholder="codice fiscale">
                                <input class="input-data input-data-auth" type="password" placeholder="email">
                            </div>
                            <div class="wrapper-add-registration-data">
                                <h4 class="registration-add-number">Aggiungi il numero</h4>
                            </div>
                        </div>

                        <div class="wrapper-button-data">
                            <button class="confirm-button confirm-auth-button">
                                <h4>Prenota adesso</h4>
                            </button>
                            <h4 class="reminder-text">Non hai account? <a class="login-link">Login</a></h4>
                        </div>
                    </form>
                </div>
            </div>`;
        }

        const templateElement = parser.parseFromString(templateString, 'text/html');
        return templateElement.querySelector("body > div");
    }
    initTemplateTelefone() {
        const parser = new DOMParser();
        let templateString = `
        <input class="input-data input-data-auth add-number" type="password" placeholder="telefono">
        `;

        const templateElement = parser.parseFromString(templateString, 'text/html');
        return templateElement.querySelector("body > input");
    }
}

export default Authentication;
