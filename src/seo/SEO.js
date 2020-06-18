import React from "react";

const SEO = {};

export default SEO;

SEO.Meta = ({
  description,
  lang,
  title,
  path,
  slug,
  ogImage,
  twitterImage,
  twitterHandle,
  baseUrl,
  siteTitle
}) => {
  const slugVar = !slug || slug === "/" ? "" : slug;
  const pathVar = !slug || slug === "/" ? "" : path;
  const metaProps = [
    {
      name: `description`,
      content: description
    },
    {
      property: `og:title`,
      content: title
    },
    {
      property: `og:description`,
      content: description
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      property: `og:sitename`,
      content: baseUrl
    },
    {
      name: `twitter:card`,
      content: `summary`
    },
    {
      name: `twitter:creator`,
      content: siteTitle
    },
    {
      name: `twitter:image:alt`,
      content: title
    },
    {
      name: `twitter:title`,
      content: title
    },
    {
      name: `twitter:description`,
      content: description
    }
  ];
  if (ogImage) {
    metaProps.push({
      property: `og:image`,
      content: ogImage
    });
  } else {
    console.log("No Open Graph Image set in SEO.Meta");
  }

  if (twitterImage) {
    metaProps.push({
      name: `twitter:image`,
      content: `https:${twitterImage}`
    });
  } else {
    console.log("No Open Graph Image set in SEO.Meta");
  }

  if (twitterHandle) {
    metaProps.push({
      name: `twitter:site`,
      content: twitterHandle
    });
  }

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      link={[
        {
          rel: "canonical",
          href: `${site.baseUrl}${pathVar}${slugVar}`
        }
      ]}
      title={title}
      titleTemplate={`%s | ${site.title}`}
      meta={metaProps}
    />
  );
};

SEO.Meta.defaultProps = {
  lang: `en`,
  description: ``,
  path: "/"
};

SEO.Meta.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  path: PropTypes.string,
  slug: PropTypes.string.isRequired,
  ogImage: PropTypes.string,
  twitterImage: PropTypes.string,
  twitterHandle: PropTypes.string,
  baseUrl: PropTypes.string.isRequired,
  siteTitle: PropTypes.string.isRequired
};

export default SEO;
