import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderContainer>
			<HeaderInfo>
      	<h2>Pop Lock</h2>
			</HeaderInfo>
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div`
	margin: none;
	height: 100vh;
	width: 300px;
	background-color: orange;
`;

const HeaderInfo = styled.div`
	color: white;
	margin-top: 340px;
	display: flex;
	justify-content: center;
	font-size: xx-large;
`;
