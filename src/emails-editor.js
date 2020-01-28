import styles from './emails-editor.css';

const EMAIL_REG_EXP = /^\S+@\S+$/;

const generateEmail = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';

    return chars[Math.floor(Math.random() * 26)] + Math.random().toString(36).substring(2, 11) + '@domain.com';
};

const updateClassListByContent = (node) => {
    const isValid = EMAIL_REG_EXP.test(node.textContent);

    node.classList.toggle(styles.item_invalid, !isValid);
};

class EmailsEditor {
    constructor({ container, ...options }) {
        this.node = container;
        this.boardName = options.boardName || 'Board Name';
        this.emails = new Set();
        this.subscribers = [];

        this.init();
        this.initListeners();
    }

    init() {
        this.wrapperNode = document.createElement('div');
        this.wrapperNode.classList.add(styles.wrapper);

        this.mainNode = document.createElement('div');
        this.mainNode.classList.add(styles.main);

        this.headerNode = document.createElement('div');
        this.headerNode.innerHTML = `Share <strong>${this.boardName}</strong> with others`; // TODO: XSS
        this.headerNode.classList.add(styles.header);

        this.boxWrapperNode = document.createElement('div');
        this.boxWrapperNode.classList.add(styles['box-wrapper']);

        this.boxNode = document.createElement('div');
        this.boxNode.classList.add(styles.box);

        this.inputNode = document.createElement('input');
        this.inputNode.placeholder = 'add more people...';
        this.inputNode.spellcheck = false;
        this.inputNode.classList.add(styles.input);

        this.buttonsNode = document.createElement('div');
        this.buttonsNode.classList.add(styles.buttons);

        this.addEmailButtonNode = document.createElement('button');
        this.addEmailButtonNode.type = 'button';
        this.addEmailButtonNode.textContent = 'Add email';
        this.addEmailButtonNode.classList.add(styles.button);

        this.showEmailsCountButtonNode = document.createElement('button')
        this.showEmailsCountButtonNode.type = 'button';
        this.showEmailsCountButtonNode.textContent = 'Get emails count';
        this.showEmailsCountButtonNode.classList.add(styles.button);

        this.boxNode.appendChild(this.inputNode);
        this.boxWrapperNode.appendChild(this.boxNode);

        this.mainNode.appendChild(this.headerNode);
        this.mainNode.appendChild(this.boxWrapperNode);

        this.buttonsNode.appendChild(this.addEmailButtonNode);
        this.buttonsNode.appendChild(this.showEmailsCountButtonNode);

        this.wrapperNode.appendChild(this.mainNode);
        this.wrapperNode.appendChild(this.buttonsNode);

        this.node.appendChild(this.wrapperNode);
    }

    initListeners() {
        this.inputNode.addEventListener('keydown', this.handleInputKeyDown);
        this.inputNode.addEventListener('keyup', this.handleInputKeyUp);
        this.inputNode.addEventListener('paste', this.handleInputPaste);
        this.inputNode.addEventListener('blur', this.handleInputBlur);
        this.boxWrapperNode.addEventListener('click', this.handleBoxWrapperClick);
        this.addEmailButtonNode.addEventListener('click', this.handleAddEmailButtonClick);
        this.showEmailsCountButtonNode.addEventListener('click', this.handleShowEmailsCountButtonClick);
    }

    clear() {
        Array.from(this.boxNode.children).forEach((element, index, arr) => {
            if (index === arr.length - 1) {
                return;
            }

            element.remove();
        });
    }

    render() {
        Array.from(this.emails).forEach((email, index) => {
            const wrapperNode = document.createElement('div');

            wrapperNode.dataset.value = email;
            wrapperNode.classList.add(styles.tag);

            const textNode = document.createElement('span');

            textNode.contentEditable = true;
            textNode.spellcheck = false;
            textNode.textContent = email;
            textNode.classList.add(styles.item);

            updateClassListByContent(textNode);

            textNode.addEventListener('keydown', this.handleTextKeyDown);
            textNode.addEventListener('keyup', this.handleTextKeyUp);
            textNode.addEventListener('input', this.handleTextInput);
            textNode.addEventListener('blur', this.handleTextBlur);

            const crossNode = document.createElement('div');

            crossNode.classList.add(styles.cross);
            crossNode.addEventListener('click', this.handleCrossClick);

            wrapperNode.append(textNode);
            wrapperNode.append(crossNode);

            this.inputNode.before(wrapperNode);
        });
    }

    update() {
        this.clear();
        this.render();
        this.handleChange();
    }

    handleBoxWrapperClick = (event) => {
        if (event.target === this.boxWrapperNode || event.target === this.boxNode) {
            this.inputNode.focus();
        }
    };

    handleInputKeyDown = (event) => {
        if (['Space', 'Enter'].includes(event.code)) {
            event.preventDefault();
        }

        const { value } = event.currentTarget;

        if (event.code === 'Enter' && value !== '') {
            this.emails.add(value);
            this.update();
            this.inputNode.value = '';
        }
    };

    handleInputKeyUp = (event) => {
        if (event.code !== 'Comma') {
            return;
        }

        const emails = event.currentTarget.value
            .split(',')
            .filter((email) => email.length !== 0);

        emails.forEach((email) => {
            this.emails.add(email);
        });

        if (emails.length !== 0) {
            this.update();
        }

        this.inputNode.value = '';
    };

    handleInputPaste = (event) => {
        event.preventDefault();

        const emails = event.clipboardData.getData('text')
            .replace(/\s/g, '')
            .split(',')
            .filter((email) => email.length !== 0);

        emails.forEach((email) => {
            this.emails.add(email);
        });

        if (emails.length !== 0) {
            this.update();
        }

        this.inputNode.value = '';
    };

    handleInputBlur = (event) => {
        if (event.currentTarget.value !== '') {
            this.emails.add(event.currentTarget.value);
            this.update();
        }

        this.inputNode.value = '';
    };

    handleTextKeyDown = (event) => {
        if (['Space', 'Enter'].includes(event.code)) {
            event.preventDefault();
        }

        if (event.code === 'Enter') {
            event.currentTarget.removeEventListener('blur', this.handleTextBlur);
            this.handleTextBlur(event);
            this.inputNode.focus();
        }
    };

    handleTextKeyUp = (event) => {
        if (event.code !== 'Comma') {
            return;
        }

        event.currentTarget.removeEventListener('blur', this.handleTextBlur);
        this.handleTextBlur(event);
        this.inputNode.focus();
    };

    handleTextInput = (event) => {
        updateClassListByContent(event.currentTarget);
    };

    handleTextBlur = (event) => {
        const prev = event.currentTarget.parentNode.dataset.value;
        const next = event.currentTarget.textContent;

        if (next === prev) {
            return;
        }

        const emails = next
            .replace(/\s/g, '')
            .split(',')
            .filter((email) => email.length !== 0);

        if (emails.length === 0) {
            this.emails.delete(prev);
        } else {
            this.emails = Array.from(this.emails).reduce((acc, email) => {
                if (email === prev) {
                    emails.forEach((email) => {
                        acc.add(email);
                    });
                } else {
                    acc.add(email);
                }

                return acc;
            }, new Set());
        }

        this.update();
    };

    handleCrossClick = (event) => {
        this.emails.delete(event.currentTarget.parentNode.dataset.value);
        this.update();
    };

    handleAddEmailButtonClick = (event) => {
        const email = generateEmail();

        this.emails.add(email);
        this.update();
    };

    handleShowEmailsCountButtonClick = (event) => {
        const count = Array.from(this.emails).filter((email) => {
            return EMAIL_REG_EXP.test(email);
        }).length;

        alert(count);
    };

    handleChange = () => {
        const emails = Array.from(this.emails);

        this.subscribers.forEach((subscriber) => {
            subscriber(emails);
        });
    };

    getEmailsList = () => {
        return Array.from(this.emails);
    };

    setEmailsList = (emailsList) => {
        this.emails = new Set(emailsList);
        this.update();
    };

    subscribe = (listener) => {
        this.subscribers.push(listener);
    };

    unsubscribe = (listener) => {
        this.subscribers = this.subscribers.filter((subscriber) => {
            return subscriber !== listener;
        });
    };
}

export default EmailsEditor;
