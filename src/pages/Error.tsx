import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { t } from 'i18next';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';

const ErrorPageSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0e0620;
  font-size: 1em;
  background: #fff;
`;

const Heading1 = styled.h1`
  font-size: 7.5em;
  margin: 15px 0px;
  font-weight: bold;
`;

const Heading2 = styled.h2`
  font-weight: bold;
`;

const StyledButton = styled.button`
  z-index: 1;
  overflow: hidden;
  background: transparent;
  position: relative;
  padding: 8px 50px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1em;
  letter-spacing: 2px;
  transition: 0.2s ease;
  font-weight: bold;
  border: 4px solid #ed350b;
  color: #0e0620;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 0%;
    height: 100%;
    background: #ed350b;
    z-index: -1;
    transition: width 0.2s ease;
  }

  &:hover {
    color: #fff;
    background: #ed350b;

    &:before {
      width: 100%;
    }
  }
`;

function ErrorPage() {
	const error = useRouteError();
  let errorMessage: string;
	let errorStatus: number;

	console.log(error)

  if (isRouteErrorResponse(error)) {
		errorStatus = error.status;
    errorMessage = error.data || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

	return (
		<ErrorPageSection>
			<div>
        <Heading1>{errorStatus ? `Error ${errorStatus}` : "Opps!"}</Heading1>
				<Heading2>{t('pages.error.message')}</Heading2>
				<Heading2>
					<i>{errorMessage}</i>
				</Heading2>
				<Link to="/">
					<StyledButton>{t('menu.home')}</StyledButton>
				</Link>
			</div>
		</ErrorPageSection>
  );
}

export default withTranslation()(ErrorPage);
