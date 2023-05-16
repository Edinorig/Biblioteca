import Header from "../../common/lib/header/header.js";

const parentElement = {
    headerWrapper: document.querySelector('#header')
}

const header = new Header(parentElement.headerWrapper);
header.init();