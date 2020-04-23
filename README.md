# wmk-lib

> Watermark Component Library

[![NPM](https://img.shields.io/npm/v/wmk-lib.svg)](https://www.npmjs.com/package/wmk-lib) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save wmk-lib
```

## Change Log
  1.1.4 - Anchor classes name fix
  1.1.3 - Video Component (Not Working)
  1.1.2 - Update Readme
  1.1.1 - Added first layout components

## Usage

### Links

#### Anchor

```jsx
const Anchor = ({ to, id, className, target, children })...
<Anchor to={'http://link.com'}>Link Text</Anchor>
```

Creates an anchor link for external links.
*target* can be "\_blank" (new window) or "\_self".
*to* is href

#### WMKLink

```jsx
const WMKLink = React.forwardRef(
  ({ id, children, target, mailto, tel, style, className, speed }, ref)...
<WMKLink to={'/page'}>Link Text</WMKLink>
<WMKLink to="http://site.com" target="blank">Link Text</WMKLink>
```
*target* any target will trigger external link _except_ internal, \_internal, link and \_link, which will use Gatsby <Link>
*to* can be left blank for *tel* and *mailto* if {children} is phone number / email.

#### SocialMediaIcons - NOT WORKING

```jsx
const SocialMediaIcons = { query, platforms, className };
const socials = graphql`
{ 
  socials {
    title
    url
    target
  }
}
`
<SocialMediaIcons query={socials} />
```

Given an array of social media link objects, 
will render social media icons.

### Layout

#### Copyright
```jsx
const Copyright = ({children, className, id})...
<Copyright>Company Name. Copyright text goes here.</Copyright>
```

Component renders copyright text with symbol and date.

#### FlexSpacer
```jsx
const FlexSpacer = ({ className, id })...
<FlexSpacer />
```
Component will fill vertical space in flex layouts.

#### MainLayout
```jsx
const MainLayout = ({ children, Header, Footer })...
<MainLayout><Content /></MainLayout>
```
Puts content into main element, 
inserts header and footer components.

### Media

#### Video - NOT WORKING
```jsx
<Video url={url} />
```
Component will load video player with Loader/Spinner.

## License

MIT © [peterwatermark](https://github.com/peterwatermark)
