# EmailsEditor Examples

## Example Wrapper

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Test</title>
        <script src="dist/emails-editor.umd.js"></script>
    </head>

    <body data-capture="#emails-editor">
        <div id="emails-editor"></div>

        <script>
            // Some code ...
        </script>
    </body>
</html>
```

## Example 1

```js
const container = document.querySelector('#emails-editor');

new EmailsEditor({ container });
```

## Example 2

```js
const container = document.querySelector('#emails-editor');

new EmailsEditor({ container, boardName: 'Custom Board Name' });
```

## Example 3

```js
const container = document.querySelector('#emails-editor');
const editor = new EmailsEditor({ container });

editor.setEmailsList(['valid-email@domain.com', 'invalid-email']);
```

## Example 4

```js
const container = document.querySelector('#emails-editor');
const editor = new EmailsEditor({ container });

editor.getEmailsList();
```

## Example 4

```js
const container = document.querySelector('#emails-editor');
const editor = new EmailsEditor({ container });

editor.subscribe((emails) => {
    console.log('Emails changed', emails);
});
```

## Example 5

```js
const container = document.querySelector('#emails-editor');
const editor = new EmailsEditor({ container });

const handleChange = (emails) => {
    console.log('Emails changed', emails);
};

editor.subscribe(handleChange);
editor.unsubscribe(handleChange);
```
