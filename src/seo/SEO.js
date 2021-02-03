import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

const sanitizeSocialImageUrl = url => {
  let _url = typeof url === "string" || url instanceof String ? url : "";
  return _url.indexOf("//") === 0 ? "https:" + _url : _url;
};

export const SEO = ({
  description,
  lang,
  title,
  path,
  slug,
  ogImage,
  twitterImage,
  twitterHandle,
  baseUrl,
  siteTitle,
  //fbAppId,
  graphs
}) => {
  const slugVar = !slug || slug === "/" ? "" : slug;
  const pathVar = !slug || slug === "/" ? "" : path;
  const metaProps = [
    {
      name: `description`,
      content: description
    },
    // {
    //   name: `fb:app_id`,
    //   content: fbAppId
    // },
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
      property: `og:url`,
      content: `${baseUrl}${pathVar}${slugVar}`
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
  if (typeof ogImage !== "undefined") {
    if (typeof ogImage === "string" || ogImage instanceof String) {
      metaProps.push({
        property: `og:image`,
        content: sanitizeSocialImageUrl(ogImage)
      });
    }
  } else {
    console.log("No Open Graph Image set in SEO.Meta");
  }

  if (typeof twitterImage !== "undefined") {
    if (typeof ogImage === "string" || ogImage instanceof String) {
      metaProps.push({
        name: `twitter:image`,
        content: sanitizeSocialImageUrl(twitterImage)
      });
    }
  } else {
    console.log("No Twitter Image set in SEO.Meta");
  }

  if (typeof twitterHandle !== "undefined") {
    if (typeof ogImage === "string" || ogImage instanceof String) {
      metaProps.push({
        name: `twitter:site`,
        content: twitterHandle
      });
    }
  } else {
    console.log("No Twitter Handle set in SEO.Meta");
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": []
  };
  graphs.forEach(graph => schema["@graph"].push(graph));
  const website = generateGraph(
    "WebSite",
    {
      name: siteTitle,
      url: baseUrl,
      publisher: {
        "@id": baseUrl + "/#organization"
      }
    },
    baseUrl
  );
  graphs.push(website);
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      link={[
        {
          rel: "canonical",
          href: `${baseUrl}${pathVar}${slugVar}`
        }
      ]}
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
      meta={metaProps}
    >
      {" "}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  description: ``,
  path: "/",
  graphs: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  path: PropTypes.string,
  slug: PropTypes.string.isRequired,
  ogImage: PropTypes.string,
  twitterImage: PropTypes.string,
  twitterHandle: PropTypes.string,
  baseUrl: PropTypes.string.isRequired,
  siteTitle: PropTypes.string.isRequired,
  fbAppId: PropTypes.string,
  graphs: PropTypes.array
};

export const generateGraph = (type, graphMeta = {}, baseUrl) => {
  const info = {
    "@type": type,
    "@id": baseUrl + "/#" + type.toLowerCase()
  };
  return {
    ...info,
    ...graphMeta
  };
};
