import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const Wrapper = ({ children }) => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <GlobalStyles />
        {children}
      </InnerWrapper>
    </OuterWrapper>
  );
};

const OuterWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const InnerWrapper = styled.div`
  padding: 48px 64px;
  border: 1px dotted hsla(0deg, 0%, 0%, 0.25);
  border-radius: 16px;
  text-align: center;
`;

const GlobalStyles = createGlobalStyle`
  body, button {
    font-family: Futura, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

export default Wrapper;
