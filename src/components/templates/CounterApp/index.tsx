import Styled from '@emotion/styled';

import { Title } from 'components/atoms/Title';
import { Counter } from 'components/organisms/Counter';

const Container = Styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const CounterApp = () => {
    return (
        <Container>
            <Title title="Counter App" />
            <Counter />
        </Container>
    );
};