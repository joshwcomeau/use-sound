import React from 'react';
import styled from 'styled-components';

const PRIMARY = 'hsl(240deg, 85%, 55%)';

const Button = props => {
  return <DefaultButton {...props} />;
};

const UnstyledButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;

  &:focus {
    outline: 2px auto ${PRIMARY};
    outline-offset: 2px;
  }
`;

const DefaultButton = styled(UnstyledButton)`
  color: white;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  font-size: 18px;
  height: 60px;
  padding: 0 32px;
  font-weight: bold;
  background-color: ${PRIMARY};
  border-radius: 5px;
`;

export default Button;
