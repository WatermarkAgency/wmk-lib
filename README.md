# wmk-lib

> Watermark Component Library

[![NPM](https://img.shields.io/npm/v/wmk-lib.svg)](https://www.npmjs.com/package/wmk-lib) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save wmk-lib
```

## Usage

#### SocialMediaIcons -

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

Given an array of social media link objects, will render social media icons.

### Layout

#### Copyright

```jsx
const Copyright = ({children, className, id})...
<Copyright>Company Name. Copyright text goes here.</Copyright>
```

#### Header

```jsx
const Header = React.forwardRef(({ children, className, style }, ref)...
<Header className="main-header" style={{color: 'blue'}}><Menu /><Header/>
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

Puts content into main element and inserts header and footer components.

#### Sticky

```jsx
const Sticky = ({Alert, className, children, absolute, style, zIndex, width, trigger})...
<Sticky Alert={AlertBar}><Header /></Sticky>
```

### SEO

#### WmkSeo.Meta

```jsx
WmkSeo.Meta = ({description, lang, title, path, slug, ogImage, twitterImage, twitterHandle, baseUrl, siteTitle})...
```

Assists with page SEO meta data (including open graph and twitter image).
Note: ogImage, twitterImage and twitterHandle expect a string. If undefined is passed, you will see console errors. To intentionally leave out this data, you must pass 'null' to these props. For the images, it is good to have a conditional to check for the url or pass null to avoid the console logs.

#### WmkSeo.Schema

```jsx
WmkSeo.Schema = ({ graphs, baseUrl, siteTitle })...
```

Helps dynamically generate on-page schema.

## Helper classes and functions

### Pagination

Pass an array of items to get back an array that contains arrays up to the
maximum amount of items per page. Each index of the parent array corresponds to a page of paginated results. Default number of items per page is 20 items.
```js

new Pagination(array, items_per_page)
```

- *Pagination.pages* - Array of array of paged items
- *Pagination.length* - Number of paginated pages
- *Pagination.total* - Total number of paginated items
- *Pagination.perPage* - Number of items per page


### MediaQueries Methods (class object)
A class utility for managing breakpoints 
and writing consistent media queries in Javascript

#### addSize()
```js
MediaQueries.addSize(size, amount, units)
// @param {string} size
// @param {number} amount
// @param {string} [units=px] 

mq.addSize('xl',1500,'px');
```
Adds a named media query to an instance.

Above results in:
```css
@media [mediaType.qualifier=only] [mediaType.type=screen] and ([])
```

#### max() / min()
```js
MediaQueries.addSize(size, css, mediaType)
// @param {string} size
// @param {string} css
// @param {Object} [mediaType={type: "screen", qualifier: "only"}] 
// @returns {string} CSS media query

mq.max('sm',`
color: pink;
opacity: .5;
`);
```
Returns a media query to a max-width or min-width, with a default of being only screen.

#### only()
```js
only(css, mediaType){
// @param {string} css
// @param {string} [mediaType=screen]
// @returns {string} CSS media query
}
```

#### query()
```js
query(type, features, css){
// @param {Object} type | {type, qualifier}
// @param {[Object]} features | [{feature, break}]
// @returns {string} CSS media query
}
```
Can be used to build any kind of media query and is the base for the other getter methods.

#### range()
```js
range(min, max, css, type){
// @param {string} min | Named breakpoint (object key)
// @param {string} max | Named breakpoint
// @param {string} css | CSS media query
// @param {Object} type | {type, qualifier}
// @returns {string} CSS media query
}
```
Used for a media query valid between a min and max range.

### UrlPaths Methods (class object)
A class utility for keeping Full/Relative paths 
dynamic and consistent

#### (Constructor) UrlPaths()
```js
query(baseUrl,paths){
// @param {string} baseUrl
// @param {[paths]} paths | [{path, name}]
}
```

#### url()
```js
query(key,slug){
// @param {string} key | valid path key OR empty string ("") for root
// @param {string} slug | slug and/or remaining portion of path
// @returns {string} full URL path including baseUrl
}
```

#### rel()
```js
query(key,slug){
// @param {string} key | valid path key OR empty string ("") for root
// @param {string} slug | slug and/or remaining portion of path
// @returns {string} path relative to root
}
```

## License

MIT © [peterwatermark](https://github.com/peterwatermark)
