(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.EmailsEditor = factory());
}(this, (function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');\n\n:root {\n    --main-background: #F8F8F7;\n    --main-color: black;\n    --buttons-background: white;\n}\n\n@media (prefers-color-scheme: dark) {\n    :root {\n        --main-background: hsla(60, 0%, 20%, 1);\n        --main-color: white;\n        --secondary-color: hsla(0, 0%, 30%, 1);\n    }\n}\n\n.emails-editor_wrapper__3fWOn {\n    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);\n    border-radius: 8px;\n    font-family: 'Open Sans';\n}\n\n.emails-editor_main__22fA9 {\n    background-color: var(--main-background);\n    color: var(--main-color);\n    border-radius: 8px 8px 0 0;\n    padding: 32px 50px 24px;\n}\n\n.emails-editor_header__3xVk4 {\n    font-size: 20px;\n    margin-bottom: 24px;\n}\n\n.emails-editor_box-wrapper__1NddF {\n    background-color: var(--secondary-color);\n    border: 1px solid #C3C2CF;\n    border-radius: 4px;\n    height: 96px;\n    padding: 0 8px 8px 0;\n    overflow-y: scroll;\n}\n\n.emails-editor_box__1kKyb {\n    display: flex;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    box-sizing: border-box;\n}\n\n.emails-editor_tag__qcLc5 {\n    position: relative;\n    display: flex;\n    align-items: stretch;\n    flex-shrink: 0;\n    margin-left: 8px;\n    margin-top: 8px;\n    height: 24px;\n    background-color: rgba(102, 153, 255, 0.2);\n    border-radius: 100px;\n    padding-left: 10px;\n    padding-right: 24px;\n}\n\n.emails-editor_item__9ZeQL {\n    line-height: 24px;\n    outline: 0;\n}\n\n.emails-editor_item_invalid__RVPCE {\n    border-bottom: 1px dashed red;\n}\n\n.emails-editor_cross__sGoKQ {\n    position: absolute;\n    top: 8px;\n    right: 8px;\n    height: 8px;\n    width: 8px;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%228%22 height%3D%228%22 fill%3D%22none%22%3E    %3Cpath fill-rule%3D%22evenodd%22 clip-rule%3D%22evenodd%22 d%3D%22M8 .8L7.2 0 4 3.2.8 0 0 .8 3.2 4 0 7.2l.8.8L4 4.8 7.2 8l.8-.8L4.8 4 8 .8z%22 fill%3D%22%23050038%22%2F%3E%3C%2Fsvg%3E\");\n    cursor: pointer;\n}\n\n.emails-editor_input__1fGnc {\n    flex-grow: 1;\n    background: transparent;\n    color: currentColor;\n    border: 0;\n    height: 24px;\n    outline: 0;\n    padding: 0;\n    margin-left: 8px;\n    margin-top: 8px;\n    font-size: inherit;\n}\n\n.emails-editor_buttons__3Lf1U {\n    background-color: var(--secondary-color);\n    border-radius: 0 0 8px 8px;\n    padding: 32px 50px;\n}\n\n.emails-editor_button__2-S5q {\n    padding: 8px 16px;\n    border: 0;\n    outline: 0;\n    border-radius: 6px;\n    background-color: #4262FF;\n    color: #FFFFFF;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 14px;\n    line-height: 24px;\n}\n\n.emails-editor_button__2-S5q + .emails-editor_button__2-S5q {\n    margin-left: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlscy1lZGl0b3IuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQUE2RTs7QUFFN0U7SUFDSSwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJO1FBQ0ksdUNBQXVDO1FBQ3ZDLG1CQUFtQjtRQUNuQixzQ0FBc0M7SUFDMUM7QUFDSjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4Qyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLDBDQUEwQztJQUMxQyxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLHVWQUFvQztJQUNwQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7SUFDWixVQUFVO0lBQ1YsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoiZW1haWxzLWVkaXRvci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcblxuOnJvb3Qge1xuICAgIC0tbWFpbi1iYWNrZ3JvdW5kOiAjRjhGOEY3O1xuICAgIC0tbWFpbi1jb2xvcjogYmxhY2s7XG4gICAgLS1idXR0b25zLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgOnJvb3Qge1xuICAgICAgICAtLW1haW4tYmFja2dyb3VuZDogaHNsYSg2MCwgMCUsIDIwJSwgMSk7XG4gICAgICAgIC0tbWFpbi1jb2xvcjogd2hpdGU7XG4gICAgICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiBoc2xhKDAsIDAlLCAzMCUsIDEpO1xuICAgIH1cbn1cblxuLndyYXBwZXIge1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG59XG5cbi5tYWluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQpO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcbiAgICBwYWRkaW5nOiAzMnB4IDUwcHggMjRweDtcbn1cblxuLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi5ib3gtd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzNDMkNGO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBoZWlnaHQ6IDk2cHg7XG4gICAgcGFkZGluZzogMCA4cHggOHB4IDA7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4udGFnIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDIsIDE1MywgMjU1LCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xufVxuXG4uaXRlbSB7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgb3V0bGluZTogMDtcbn1cblxuLml0ZW1faW52YWxpZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCByZWQ7XG59XG5cbi5jcm9zcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOHB4O1xuICAgIHJpZ2h0OiA4cHg7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgd2lkdGg6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vY3Jvc3Muc3ZnJyk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5wdXQge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogY3VycmVudENvbG9yO1xuICAgIGJvcmRlcjogMDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuLmJ1dHRvbnMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XG4gICAgcGFkZGluZzogMzJweCA1MHB4O1xufVxuXG4uYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBib3JkZXI6IDA7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNjJGRjtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4uYnV0dG9uICsgLmJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG4iXX0= */";
  var styles = {"wrapper":"emails-editor_wrapper__3fWOn","main":"emails-editor_main__22fA9","header":"emails-editor_header__3xVk4","box-wrapper":"emails-editor_box-wrapper__1NddF","box":"emails-editor_box__1kKyb","tag":"emails-editor_tag__qcLc5","item":"emails-editor_item__9ZeQL","item_invalid":"emails-editor_item_invalid__RVPCE","cross":"emails-editor_cross__sGoKQ","input":"emails-editor_input__1fGnc","buttons":"emails-editor_buttons__3Lf1U","button":"emails-editor_button__2-S5q"};
  styleInject(css_248z);

  const EMAIL_REG_EXP = /^\S+@\S+$/;

  const generateEmail = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    return chars[Math.floor(Math.random() * 26)] + Math.random().toString(36).substring(2, 11) + '@domain.com';
  };

  const updateClassListByContent = node => {
    const isValid = EMAIL_REG_EXP.test(node.textContent);
    node.classList.toggle(styles.item_invalid, !isValid);
  };

  class EmailsEditor {
    constructor({
      container,
      ...options
    }) {
      _defineProperty(this, "handleBoxWrapperClick", event => {
        if (event.target === this.boxWrapperNode || event.target === this.boxNode) {
          this.inputNode.focus();
        }
      });

      _defineProperty(this, "handleInputKeyDown", event => {
        if (['Space', 'Enter'].includes(event.code)) {
          event.preventDefault();
        }

        const {
          value
        } = event.currentTarget;

        if (event.code === 'Enter' && value !== '') {
          this.emails.add(value);
          this.update();
          this.inputNode.value = '';
        }
      });

      _defineProperty(this, "handleInputKeyUp", event => {
        if (event.code !== 'Comma') {
          return;
        }

        const emails = event.currentTarget.value.split(',').filter(email => email.length !== 0);
        emails.forEach(email => {
          this.emails.add(email);
        });

        if (emails.length !== 0) {
          this.update();
        }

        this.inputNode.value = '';
      });

      _defineProperty(this, "handleInputPaste", event => {
        event.preventDefault();
        const emails = event.clipboardData.getData('text').replace(/\s/g, '').split(',').filter(email => email.length !== 0);
        emails.forEach(email => {
          this.emails.add(email);
        });

        if (emails.length !== 0) {
          this.update();
        }

        this.inputNode.value = '';
      });

      _defineProperty(this, "handleInputBlur", event => {
        if (event.currentTarget.value !== '') {
          this.emails.add(event.currentTarget.value);
          this.update();
        }

        this.inputNode.value = '';
      });

      _defineProperty(this, "handleTextKeyDown", event => {
        if (['Space', 'Enter'].includes(event.code)) {
          event.preventDefault();
        }

        if (event.code === 'Enter') {
          event.currentTarget.removeEventListener('blur', this.handleTextBlur);
          this.handleTextBlur(event);
          this.inputNode.focus();
        }
      });

      _defineProperty(this, "handleTextKeyUp", event => {
        if (event.code !== 'Comma') {
          return;
        }

        event.currentTarget.removeEventListener('blur', this.handleTextBlur);
        this.handleTextBlur(event);
        this.inputNode.focus();
      });

      _defineProperty(this, "handleTextInput", event => {
        updateClassListByContent(event.currentTarget);
      });

      _defineProperty(this, "handleTextBlur", event => {
        const prev = event.currentTarget.parentNode.dataset.value;
        const next = event.currentTarget.textContent;

        if (next === prev) {
          return;
        }

        const emails = next.replace(/\s/g, '').split(',').filter(email => email.length !== 0);

        if (emails.length === 0) {
          this.emails.delete(prev);
        } else {
          this.emails = Array.from(this.emails).reduce((acc, email) => {
            if (email === prev) {
              emails.forEach(email => {
                acc.add(email);
              });
            } else {
              acc.add(email);
            }

            return acc;
          }, new Set());
        }

        this.update();
      });

      _defineProperty(this, "handleCrossClick", event => {
        this.emails.delete(event.currentTarget.parentNode.dataset.value);
        this.update();
      });

      _defineProperty(this, "handleAddEmailButtonClick", event => {
        const email = generateEmail();
        this.emails.add(email);
        this.update();
      });

      _defineProperty(this, "handleShowEmailsCountButtonClick", event => {
        const count = Array.from(this.emails).filter(email => {
          return EMAIL_REG_EXP.test(email);
        }).length;
        alert(count);
      });

      _defineProperty(this, "handleChange", () => {
        const emails = Array.from(this.emails);
        this.subscribers.forEach(subscriber => {
          subscriber(emails);
        });
      });

      _defineProperty(this, "getEmailsList", () => {
        return Array.from(this.emails);
      });

      _defineProperty(this, "setEmailsList", emailsList => {
        this.emails = new Set(emailsList);
        this.update();
      });

      _defineProperty(this, "subscribe", listener => {
        this.subscribers.push(listener);
      });

      _defineProperty(this, "unsubscribe", listener => {
        this.subscribers = this.subscribers.filter(subscriber => {
          return subscriber !== listener;
        });
      });

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
      this.showEmailsCountButtonNode = document.createElement('button');
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

  }

  return EmailsEditor;

})));
//# sourceMappingURL=emails-editor.umd.js.map
