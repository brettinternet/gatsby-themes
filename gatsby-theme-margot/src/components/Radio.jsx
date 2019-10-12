import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Option = ({ name, field, value, checked, onChange, disabled }) => (
  <Container disabled={disabled}>
    {field}
    <input
      type="radio"
      name={name}
      checked={checked}
      onChange={onChange}
      value={value}
      disabled={disabled}
    />
    <Checkmark />
  </Container>
)

const Radio = ({ name, label, options, required, disabled, onChange }) => (
  <Wrapper>
    <Label required={required} aria-label={name} disabled={disabled}>
      {label}
    </Label>
    <Flex>
      {options.map(({ field, checked, value }, index) => (
        <Option
          key={index}
          field={field}
          onChange={onChange}
          checked={checked}
          name={name}
          value={value}
          required={required && index === 0}
          disabled={disabled}
        />
      ))}
    </Flex>
  </Wrapper>
)

Radio.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.any.isRequired,
      checked: PropTypes.bool,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
}

export default Radio

const Wrapper = styled.div`
  margin-bottom: 12px;
`

const height = 20
const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: ${height}px;
  width: ${height}px;
  background-color: #eee;
  border-radius: 50%;
  transition: background-color 200ms;

  &:after {
    content: "";
    position: absolute;
    display: none;
    top: 7px;
    left: 7px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: white;
  }
`

const Container = styled.label`
  line-height: ${height}px;
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  cursor: pointer;
  user-select: none;
  margin: 6px 0 4px;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:checked ~ ${Checkmark} {
      background-color: black;
    }

    &[value="true"]:checked ~ ${Checkmark} {
      background-color: #77dd77;
    }

    &[value="false"]:checked ~ ${Checkmark} {
      background-color: #ff6961;
    }

    &:checked ~ ${Checkmark}:after {
      display: block;
    }
  }

  &:hover input:not(:checked) ~ ${Checkmark} {
    background-color: #ccc;
  }

  input:not(:checked)[disabled] ~ ${Checkmark} {
    background-color: #aaa;
  }

  &:active input:not(:checked) ~ ${Checkmark} {
    background-color: #aaa;
  }
`

const Flex = styled.div`
  display: flex;

  & > label:first-child {
    margin-right: 1.5rem;
  }
`

const Label = styled.label`
  display: block;

  &[required]:after {
    content: " *";
    color: rgb(168, 0, 0);
    padding-right: 12px;
  }
`
