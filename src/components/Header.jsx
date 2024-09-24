import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Container } from './Container';
import { selectTheme, switchTheme } from '../features/theme/theme-slice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {clearControls} from '../features/controls/controls-slice';
import { ThemeSwitcher } from '../features/theme/ThemeSwitcher';
import { useCleanup } from '../features/controls/use-cleanup';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

export const Header = () => {
  const cleanUp = useCleanup();

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title 
          onClick={cleanUp}
          >
            Where is the world?</Title>
            <ThemeSwitcher />
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
