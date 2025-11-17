const modalDomElement = document.getElementById('modal-container');
const messageDomElement = modalDomElement?.querySelector('.modal-content');
const headerDomElement = modalDomElement?.querySelector('.modal-header-content');

export function openModal(headerText: string, innerHtml: string) {
    if (messageDomElement) {
        messageDomElement.innerHTML = innerHtml;
    }

    if (headerDomElement) {
        headerDomElement.textContent = headerText;
    }

    modalDomElement?.classList.remove('hidden');
}

export function closeModal() {
    modalDomElement?.classList.add('hidden');
}

