import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { wmkClass } from "../../logic";
import postscribe from "postscribe";

const SSFormEmbed = React.forwardRef(
  ({ account, formID, width, height, domain, hidden, className }, ref) => {
    const formRef = useRef();
    useEffect(() => {
      const target = formRef.current;
      window.ss_form = {
        account,
        formID,
        width,
        height,
        domain,
        hidden
      };

      const domainIdSplit = domain.split(".")[0];
      const domainId = domainIdSplit.substr(4, domain.length - 4);

      postscribe(
        target,
        `<script type="text/javascript" src="https://koi-${domainId}.marketingautomation.services/client/form.js?ver=2.0.1"></script>`
      );

      return () => empty(target);
    });
    return (
      <div
        className={wmkClass("form-embed", "sharpspring", className)}
        ref={ref}
      >
        <div ref={formRef}></div>
      </div>
    );
  }
);

export default SSFormEmbed;

SSFormEmbed.propTypes = {
  account: PropTypes.string.isRequired,
  formID: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  domain: PropTypes.string.isRequired,
  hidden: PropTypes.object
};

SSFormEmbed.defaultProps = {
  width: "100%",
  height: 1,
  hidden: null
};

const empty = tar => {
  while (tar.firstChild) tar.removeChild(tar.firstChild);
  return tar;
};
