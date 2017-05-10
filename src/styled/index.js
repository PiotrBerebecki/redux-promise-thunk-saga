import styled, { injectGlobal } from 'styled-components';
import { lighten } from 'polished';
import { NavLink } from 'react-router-dom';

const colorText = '#484848';
const colorTextMuted = lighten(0.2, colorText);
const colorPrimary = '#008489';
const colorBoxShadowBorder = 'rgba(0, 0, 0, 0.05)';
const colorBoxShadowSpread = 'rgba(0, 0, 0, 0.05)';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

export const AppWrapper = styled.div`
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  color: ${'colorText'};
`;

export const HeaderWrapper = styled.section`
  padding-top: 1.2rem;
  box-shadow: 0 1px 1px ${colorBoxShadowBorder},
              0px 2px 10px ${colorBoxShadowSpread};
`;

export const Ul = styled.ul`
  list-style: none;
`;

export const NavMenu = styled(Ul)`
  display: flex;
  justify-content: space-around;
`;

export const NavMenuLink = styled(NavLink).attrs({
  activeClassName: 'selected',
})`
  color: ${colorTextMuted};
  text-transform: uppercase;
  text-decoration: none;
  transition: color .2s;

  &:hover {
    color: ${colorText};
  }

  &.${props => props.activeClassName} {
    color: ${colorPrimary};
  }

  &:after {
    content: '';
    display: block;
    border-bottom: solid 3px ${colorPrimary};
    padding-bottom: 0.9rem;
    transform: scaleX(0);
    transition: transform .2s;
  }

  &.selected:after {
    transform: scaleX(1);
    transition: transform .2s;
  }
`;

export const ListItem = styled(Ul)`
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  border-bottom: solid 1px #f0f0f0;
  color: ${colorText};
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 1rem;
`;

export const ExternalLink = styled.a`
  color: ${colorPrimary};
  text-decoration: none;
  user-select: none;

  &:hover {
    color: ${colorPrimary};
    text-decoration: underline;
  }

  &:active {
    text-decoration: none;
  }
`;
