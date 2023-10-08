import React from 'react'
import { styled, css } from 'styled-components'
import ThemeContext from '../ThemeContext'

export default function SkillName(props) {
  const theme = React.useContext(ThemeContext)
  const Box = styled.div`
  display: flex;
    color: #FFFFFF;
    border-radius: 1.25rem;
    width: 8rem;
    padding: 0.5rem 1.5rem 0.5rem 1.5rem;
    justify-content: center;
    align-items: center; 
    background: ${theme.primaryColor};
    box-shadow: 0px 3px 6px 0px rgba(48, 48, 48, 0.50);
    ${() =>
      props.gradient &&
      css`
        background: linear-gradient(180deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%);;
      `};
  `
  return (
    <Box>{props.children}</Box>
  )
}
