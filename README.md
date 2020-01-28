# EmailsEditor

<div align="center">
    <a href="https://vsn4ik.github.io/emails-editor/">
        <img src="/docs/screenshots/default.png">
    </a>
</div>


## Installation

### 1. Package Manager

```bash
# With npm
npm install @vsn4ik/emails-editor

# With Yarn
yarn add @vsn4ik/emails-editor
```

### 2. Distribution targets

EmailsEditor is distributed in 2 different versions, in 2 different file formats.

The 2 file formats are:

- `es` (works with `import` syntax — **recommended**)
- `umd` (works with `<script>` tags or RequireJS or CommonJS)


### 3. Usage

```html
<div id="emails-editor"></div>
<script src="dist/emails-editor.umd.js"></script>
<script>
    const container = document.querySelector('#emails-editor');
    new EmailsEditor({ container });
    // some code to control emails via library
</script>
```

```html
<div id="emails-editor"></div>

<script type="module">
    import EmailsEditor from 'emails-editor';

    const container = document.querySelector('#emails-editor');
    new EmailsEditor({ container });
    // some code to control emails via library
</script>
```

### 4. Hacking the library

If you want to play with the library, implement new features, fix a bug you
found, or simply experiment with it, this section is for you!

First of all, make sure to have
[npm installed](https://docs.npmjs.com/cli/install).

Install the development dependencies:

```bash
npm install
```

And run the development environment:

```bash
npm run build
npm run build:dev
npm run serve
```

Then, simply open one the development server web page:

```bash
# macOS and Linux
open localhost:5000

# Windows
start localhost:5000
```

From there, you can open any of the examples (`es.html` or `umd.html` files) to fiddle with
them.
