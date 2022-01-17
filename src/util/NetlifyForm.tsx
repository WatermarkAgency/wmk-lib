import * as React from "react";
import { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import get from "lodash/get";
import { useState, useRef, useEffect } from "react";

const isReactComponent = (V) => {
  return (
    (typeof V === "function" && React.isValidElement(<V />)) ||
    (V !== null && React.isValidElement(V))
  );
};

//const getComp = (V) => {}

const NullComponent = () => <></>;

const FieldName = ({ isRequired = true, showLabel = false }) => {
  return (
    <Row>
      <Col lg={6}>
        <Form.Label
          htmlFor="firstName"
          visuallyHidden={showLabel ? undefined : true}>
          First Name {isRequired ? <span>*</span> : null}
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          id="firstName"
          name="firstName"
          required={isRequired}
        />
      </Col>
      <Col lg={6}>
        <Form.Label
          htmlFor="lastName"
          visuallyHidden={showLabel ? undefined : true}>
          Last Name {isRequired ? <span>*</span> : null}
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          id="lastName"
          name="lastName"
          required={isRequired}
        />
      </Col>
    </Row>
  );
};

const FieldEmail = ({ isRequired = true, showLabel = false }) => {
  return (
    <Row>
      <Col>
        <Form.Label
          htmlFor="email"
          visuallyHidden={showLabel ? undefined : true}>
          Email {isRequired ? <span>*</span> : null}
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="Email Address"
          id="email"
          name="email"
          required={isRequired}
        />
      </Col>
    </Row>
  );
};

const FieldSingle = ({
  name,
  label,
  isRequired,
  showLabel = false
}: {
  name: string;
  label: string;
  isRequired: boolean;
  showLabel?: boolean;
}) => {
  return (
    <Row>
      <Col>
        {label && (
          <Form.Label
            htmlFor={name}
            visuallyHidden={showLabel ? undefined : true}>
            {label} {isRequired ? <span>*</span> : null}
          </Form.Label>
        )}
        <Form.Control
          type={name}
          placeholder={label}
          id={name}
          name={name}
          required={isRequired}
        />
      </Col>
    </Row>
  );
};

const FieldPhone = ({ isRequired = true, showLabel = false }) => {
  return (
    <Row>
      <Col>
        <Form.Label
          htmlFor="phone"
          visuallyHidden={showLabel ? undefined : true}>
          Phone Number {isRequired ? <span>*</span> : null}
        </Form.Label>
        <Form.Control
          type="tel"
          placeholder="Phone Number"
          id="phone"
          name="phone"
          required={isRequired}
        />
      </Col>
    </Row>
  );
};

const FieldAddress = ({
  states = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Federated States of Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Island",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ],
  isRequired = false,
  showLabel = false
}) => {
  return (
    <Row>
      <Col lg={12}>
        <Form.Label
          htmlFor="addressStreet"
          visuallyHidden={showLabel ? undefined : true}>
          Street Address {isRequired ? <span>*</span> : null}
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Street Address"
          id="addressStreet"
          name="addressStreet"
          required={isRequired}
        />
      </Col>
      <Col lg={6}>
        <Form.Label
          htmlFor="addressCity"
          visuallyHidden={showLabel ? undefined : true}>
          City {isRequired ? <span>*</span> : null}
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="City"
          id="addressCity"
          name="addressCity"
          required={isRequired}
        />
      </Col>
      <Col lg={6}>
        <Form.Label
          htmlFor="addressState"
          visuallyHidden={showLabel ? undefined : true}>
          State {isRequired ? <span>*</span> : null}
        </Form.Label>
        <Form.Control
          as="select"
          id="addressState"
          name="addressState"
          required={isRequired}
          defaultValue="">
          <option disabled={true} value="">
            Choose a State
          </option>
          {states.map((state, i) => (
            <option key={`${state}-${i}`}>{state}</option>
          ))}
        </Form.Control>
      </Col>
      <Col lg={6}>
        <Form.Label
          htmlFor="addressPostalCode"
          visuallyHidden={showLabel ? undefined : true}>
          Postal Code {isRequired ? <span>*</span> : null}
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Postal Code"
          id="addressPostalCode"
          name="addressPostalCode"
          required={isRequired}
        />
      </Col>
    </Row>
  );
};

const FieldSelect = ({
  name,
  label,
  options,
  isRequired,
  showLabel = false
}: {
  name: string;
  label: string;
  options: string[];
  isRequired: boolean;
  showLabel?: boolean;
}) => {
  return (
    <Row>
      <Col>
        <Form.Label
          htmlFor={name}
          visuallyHidden={showLabel ? undefined : true}>
          {label} {isRequired ? <span>*</span> : null}
        </Form.Label>
        <Form.Control
          as="select"
          id={name}
          name={name}
          required={isRequired}
          defaultValue="">
          <option disabled={true} value="">
            {label}
          </option>
          {options.map((option, i: number) => {
            return <option key={option + i}>{option}</option>;
          })}
        </Form.Control>
      </Col>
    </Row>
  );
};

const FieldCheckbox = ({
  label,
  name,
  text,
  isRequired,
  showLabel = false
}: {
  name: string;
  label: string;
  text: string;
  isRequired: boolean;
  showLabel?: boolean;
}) => {
  return (
    <Row>
      <Col>
        <Form.Label
          htmlFor={name}
          className="show"
          visuallyHidden={showLabel ? undefined : true}>
          {label} {isRequired ? <span>*</span> : null}
        </Form.Label>
        <Form.Check
          type="checkbox"
          id={name}
          name={name}
          label={text}
          required={isRequired}
        />
      </Col>
    </Row>
  );
};

const FieldMessage = ({
  isRequired,
  showLabel = false
}: {
  isRequired: boolean;
  showLabel?: boolean;
}) => {
  return (
    <>
      <Row>
        <Col>
          <Form.Label
            htmlFor="message"
            visuallyHidden={showLabel ? undefined : true}>
            Message {isRequired ? <span>*</span> : null}
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Message"
            id="message"
            name="message"
            required={isRequired}
          />
        </Col>
      </Row>
    </>
  );
};

const FieldRadio = ({
  options,
  inline = true,
  name,
  label,
  showLabel
}: {
  options: { label: string }[];
  inline?: boolean;
  name: string;
  label: string;
  showLabel: boolean;
}) => {
  return (
    <Form.Group>
      <Form.Label
        style={{ marginRight: ".5rem" }}
        visuallyHidden={showLabel ? undefined : true}>
        {label}
      </Form.Label>
      {Array.isArray(options)
        ? options.map((o, i) => {
            const radioLabel = get(o, `label`);
            const disabled = get(o, `disabled`);
            return (
              <Form.Check
                key={radioLabel + i}
                inline={inline ? "yes" : undefined}
                label={radioLabel}
                name={name}
                type="radio"
                id={name + "-" + i}
                disabled={disabled ? "yes" : undefined}
              />
            );
          })
        : null}{" "}
    </Form.Group>
  );
};

const registeredFields = {
  name: FieldName,
  email: FieldEmail,
  phone: FieldPhone,
  address: FieldAddress,
  select: FieldSelect,
  checkbox: FieldCheckbox,
  single: FieldSingle,
  message: FieldMessage,
  radio: FieldRadio
};

/**
 * Netlify Form Builder Utility
 * @param {string | Component} title
 * @param {array} fields - array of form field options
 * @param {Object} form configuration options
 * @returns
 */
export const NetlifyForm = ({
  title,
  fields,
  config
}: {
  title: string | Component;
  fields: object[];
  config: object;
}) => {
  //console.log("props:", title, fields, config);
  const [submitted, setSubmitted] = useState();
  const [formElement, setFormElement] = useState();
  const TitleComp = title;

  const formName = get(config, `name`);
  const thankYou = get(
    config,
    `thankYou`,
    get(config, `thankYouPage`, `/thank-you`)
  );
  const consoleMessage = get(config, `consoleMessage`);
  const submit = get(config, `submit`, `Submit`);
  const postUrl = get(config, `postUrl`, "/");
  const keepDom = get(config, `keepDom`);
  let ThankYouJsx = null;
  //console.log(thankYou);
  switch (true) {
    case isReactComponent(thankYou):
      ThankYouJsx = thankYou;
      break;
    case typeof thankYou === "string" && thankYou.indexOf("/") === 0:
      break;
    case typeof thankYou === "string" && thankYou.indexOf("http") === 0:
      break;
    case typeof thankYou === "string":
      ThankYouJsx = ({ thankYou }) => <p>{thankYou}</p>;
      break;
    default:
      ThankYouJsx = () => <div>Thank you for your submission!</div>;
  }

  const curForm = useRef();

  useEffect(() => {
    const current = curForm.current;
    setFormElement(current);
  }, [setFormElement]);

  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formElement);
    const body = new URLSearchParams(formData).toString();
    fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body
    })
      .then(() => {
        if (consoleMessage) {
          console.log("Form submit success: ", body);
        }
      })
      .then(() => {
        if (!ThankYouJsx) {
          window.location.href = thankYou;
        } else {
          setSubmitted(true);
        }
      })
      .catch((error) => console.log(error));
  };
  const showForm = ThankYouJsx && keepDom;
  return (
    <>
      {submitted && !showForm ? (
        <ThankYouJsx />
      ) : (
        <>
          <div style={{ display: submitted && showForm ? "none" : "block" }}>
            {typeof title === "string" ? (
              <h2>{title}</h2>
            ) : isReactComponent(title) ? (
              <TitleComp />
            ) : null}
            <Form
              name={formName}
              method="post"
              ref={curForm}
              data-netlify="true"
              onSubmit={formSubmit}>
              <input type="hidden" name="form-name" value={formName} />
              <Container fluid="true">
                {Array.isArray(fields)
                  ? fields.map((field, i) => {
                      const fieldType = get(field, `as`);
                      const FieldComp = get(field, `Component`);
                      const FieldJsx =
                        FieldComp && isReactComponent(FieldComp)
                          ? FieldComp
                          : get(
                              registeredFields,
                              `[${fieldType}]`,
                              NullComponent
                            );
                      const props = get(field, `props`);
                      return <FieldJsx key={fieldType + i} {...props} />;
                    })
                  : null}
                <Row>
                  <Col className="submit-col">
                    <Button type="submit">{submit}</Button>
                  </Col>
                </Row>
              </Container>
            </Form>
          </div>
          {submitted && showForm ? (
            <Row>
              <Col>
                <ThankYouJsx />
              </Col>
            </Row>
          ) : null}
        </>
      )}
    </>
  );
};
