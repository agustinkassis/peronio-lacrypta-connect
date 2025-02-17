import * as React from "react";
import styled from "styled-components";

const SButtonContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 12px;
  text-align: center;
`;

const SButton = styled.button`
  max-width: 400px;
  transition: all 0.15s ease-in-out;
  line-height: 1em;
  background-image: none;
  outline: none;
  overflow: hidden;
  box-shadow: none;
  border: none;
  border-style: none;
  box-sizing: border-box;
  background-color: white;
  border: none;
  color: black;
  box-shadow: 0 4px 6px 0 rgba(50, 50, 93, 0.11),
    0 1px 3px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06);
  border-radius: 32px;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  width: 100%;
  margin: 0 auto;
  padding: ${({ icon }) => (icon ? "8px 5% 7px 17.2%" : "8px 12px")};
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  will-change: transform;

  &:disabled {
    opacity: 0.7;
    box-shadow: 0 4px 6px 0 rgba(50, 50, 93, 0.11),
      0 1px 3px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06);
  }

  @media (hover: hover) {
    &:hover {
      transform: ${({ disabled }) => (!disabled ? "translateY(-1px)" : "none")};
      box-shadow: ${({ disabled }) =>
        !disabled
          ? `0 7px 14px 0 rgba(50, 50, 93, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06)`
          : `0 4px 6px 0 rgba(50, 50, 93, 0.11), 0 1px 3px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06)`};
    }
  }

  &:active {
  }
`;

export const Button = (props) => (
  <SButtonContainer>
    <SButton type='button' {...props}>
      {props.children}
    </SButton>
  </SButtonContainer>
);

Button.defaultProps = {
  disabled: false,
  icon: null,
};

export default Button;
