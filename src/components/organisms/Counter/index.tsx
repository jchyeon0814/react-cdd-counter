import styled from '@emotion/styled';
import { Button } from 'components/atoms/Button';
import { Count } from 'components/atoms/Count';

import { useState } from 'react';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Counter = () => {
  const [value, setValue] = useState(0);

  const onAdd = () => {
    setValue(value + 1);
  };

  const onSub = () => {
    setValue(value - 1);
  };

  return (
    <Container>
      <Button label="-" onClick={onSub} />
      <Count value={value} />
      <Button label="+" onClick={onAdd} />
    </Container>
  );
};
