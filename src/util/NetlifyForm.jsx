import * as React from "react";
import { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import get from "lodash/get";
import { useState, useRef, useEffect } from "react";

const NullComponent = () => <></>;

const FieldName = () => {
  return (
    <Row>
      <Col lg={6}>
        <Form.Label htmlFor="firstName" visuallyHidden>
          First Name
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          id="firstName"
          name="firstName"
          required={true}
        />
      </Col>
      <Col lg={6}>
        <Form.Label htmlFor="lastName" visuallyHidden>
          Last Name
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          id="lastName"
          name="lastName"
          required={true}
        />
      </Col>
    </Row>
  );
};

const FieldEmail = () => {
  return (
    <Row>
      <Col>
        <Form.Label htmlFor="email" visuallyHidden>
          Email
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="Email Address"
          id="email"
          name="email"
          required={true}
        />
      </Col>
    </Row>
  );
};

const FieldSingle = ({ name, label, isRequired }) => {
  return (
    <Row>
      <Col>
        <Form.Label htmlFor={name} visuallyHidden>
          {label}
        </Form.Label>
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

const FieldPhone = () => {
  return (
    <Row>
      <Col>
        <Form.Label htmlFor="phone" visuallyHidden>
          Phone Number
        </Form.Label>
        <Form.Control
          type="tel"
          placeholder="Phone Number"
          id="phone"
          name="phone"
          required={true}
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
  ]
}) => {
  return (
    <Row>
      <Col lg={12}>
        <Form.Control
          type="text"
          placeholder="Street Address"
          id="addressStreet"
          name="addressStreet"
          required={false}
        />
      </Col>
      <Col lg={6}>
        <Form.Control
          type="text"
          placeholder="City"
          id="addressCity"
          name="addressCity"
          required={false}
        />
      </Col>
      <Col lg={6}>
        <Form.Control
          as="select"
          id="addressState"
          name="addressState"
          required={false}
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
        <Form.Control
          type="text"
          placeholder="Postal Code"
          id="addressPostalCode"
          name="addressPostalCode"
          required={false}
        />
      </Col>
    </Row>
  );
};

const FieldSelect = ({ name, label, options, isRequired }) => {
  return (
    <Row>
      <Col>
        <Form.Label htmlFor={name} visuallyHidden>
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
          {options.map((option, i) => {
            return <option key={option + i}>{option}</option>;
          })}
        </Form.Control>
      </Col>
    </Row>
  );
};

const FieldCheckbox = ({ label, name, text }) => {
  return (
    <Row>
      <Col>
        <Form.Label htmlFor={name} className="show">
          {label}
        </Form.Label>
        <Form.Check type="checkbox" id={name} name={name} label={text} />
      </Col>
    </Row>
  );
};

const FieldMessage = () => {
  return (
    <>
      <Row>
        <Col>
          <label htmlFor="message">Message</label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Message"
            id="message"
            name="message"
          />
        </Col>
      </Row>
    </>
  );
};

const FieldRadio = ({ options, inline = true, name, label }) => {
  return (
    <Form.Group>
      <Form.Label style={{ marginRight: ".5rem" }}>{label}</Form.Label>
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
export const NetlifyForm = ({ title, fields, config }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formElement, setFormElement] = useState();
  const TitleComp = title;

  const formName = get(config, `name`);
  const redirectOnSubmit = get(config, `redirectOnSubmit`, true);
  const thankYouPage = get(config, `thankYouPage`, `/thank-you`);
  const thankYouMessage = get(config, `thankYouMessage`, `Thank you!`);
  const consoleMessage = get(config, `consoleMessage`);
  const submit = get(config, `submit`, `Submit`);
  const postUrl = get(config, `postUrl`, "/");  

  const curForm = useRef();

  useEffect(() => {
    const current = curForm.current;
    setFormElement(current);
  }, [setFormElement]);

  const submitAction = () => {
    return (
      redirectOnSubmit
        ? window.location.href = thankYouPage
        : setSubmitted(true)
    )
  }
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
      .then(() => submitAction())
      .catch((error) => alert(error));
  };

  return (
    <>
      {typeof title === "string" ? (
        <h2>{title}</h2>
      ) : typeof title === "function" ? (
        <TitleComp />
      ) : null}
      {submitted 
        ? <div id="thank-you-message" style={{padding: '2rem'}}>{thankYouMessage}</div>
        : <Form
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
                      FieldComp && FieldComp instanceof Component
                        ? FieldComp
                        : get(registeredFields, `[${fieldType}]`, NullComponent);
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
      }
    </>
  );
};