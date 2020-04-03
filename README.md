# wmk-lib

> Watermark Component Library

[![NPM](https://img.shields.io/npm/v/wmk-lib.svg)](https://www.npmjs.com/package/wmk-lib) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save wmk-lib
```

## Change Log
  1.1.1 - Added first layout components

## Usage

### Links

#### Anchor

```jsx
const Anchor = { to, id, className, target, children };
```

Creates an anchor link for external links.
Target can be "\_blank" (new window) or "\_self".

#### MailTo

```jsx
const MailTo = { className, id, children };
```

Creates an anchor link with mailto attribute for emails.

#### Tel

```jsx
const Tel = { className, id, children };
```

Creates an anchor link with tel atrribute for phone numbers.
Will strip special characters out of tel attr number.

### Layout

#### FlexSpacer
```jsx
const FlexSpacer = ({ className, id })
```
Component will fill vertical space in flex layouts.

#### MainLayout
```jsx
const MainLayout = ({ children, Header, Footer }) 
```

Puts content into main element, 
inserts header and footer components.

## License

MIT © [peterwatermark](https://github.com/peterwatermark)
