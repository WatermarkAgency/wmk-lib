# wmk-lib

> Watermark Component Library

[![NPM](https://img.shields.io/npm/v/wmk-lib.svg)](https://www.npmjs.com/package/wmk-lib) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save wmk-lib
```

## Usage

### Links

#### WMKLink

```jsx
const WMKLink = React.forwardRef(
  ({ id, children, target, mailto, tel, style, className, speed }, ref)...
<WMKLink to={'/page'}>Link Text</WMKLink>
<WMKLink to="http://site.com" target="blank">Link Text</WMKLink>
```

_target_ any target will trigger external link. It's best to leave target _undefined_ if intended to use Gatsby <Link>.
_to_ can be left blank for _tel_ and _mailto_ if {children} is phone number / email.

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

#### Footer

```jsx
const Footer = React.forwardRef(({ children, className, id },ref)...
<Footer><Contents /><Footer />
```

#### ListItemColumns

```jsx
const ListItemColumns = ({ list, cols, JSX, className })...
```

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

### Search

#### SearchSliderOpen

```jsx
const SearchSliderOpen = ({isSearchOpen, setIsSearchOpen, className, children, style})...
<SearchSliderOpen><SearchIcon /><SearchSliderOpen>
```

Toggles SearchSliderDrawer.

#### SearchSliderDrawer

```jsx
const SearchSliderDrawer = ({isSearchOpen, setIsSearchOpen, query, Result, Close, className, style, useAlgorithm})...
```

_query_ is graphql query as a collection of allNodes.edges.node.
_Result_ is the JSX for search results.
_Close_ is the JSX to close drawer.
_useAlgorithm_ Hook that allows to modify/extend search algorithm.

### Media

#### LightBoxImage

```jsx
const LightBoxImage = ({ url, alt, caption, fluid, prefix })...
<LightBoxImage props={...props}>
```

#### Video -

```jsx
const Video = ({ id, className, url, poster, dimensions, Loader })...
<Video url={url} />
```

_Loader_ is JSX for a preloader/spinner until video is ready

Component will load video player with Loader/Spinner.

### Menus

#### MenuItems

```jsx
const MenuItems = ({ Header, header, menus, Menu })...
```

Intended to be used as dropdown or mega menu category.

### CMS

#### ContentfulLogo

```jsx
const ContentfulLogo = ({fluid, fixed, contentType, url, id, className, to, alt, target})...
```

Helps with loading and linking logo images from within Contentful. Detects whether to use Gatsby Image for raster or embed SVG.

### SEO

#### SEO.Meta

```jsx
SEO.Meta = ({description, lang, title, path, slug, ogImage, twitterImage, twitterHandle, baseUrl, siteTitle})...
```

Assists with page SEO meta data (including open graph and twitter image).
Note: ogImage, twitterImage and twitterHandle expect a string. If undefined is passed, you will see console errors. To intentionally leave out this data, you must pass 'null' to these props. For the images, it is good to have a conditional to check for the url or pass null to avoid the console logs.

#### SEO.Schema

```jsx
SEO.Schema = ({ graphs, baseUrl, siteTitle })...
```

Helps dynamically generate on-page schema.

## License

MIT © [peterwatermark](https://github.com/peterwatermark)
