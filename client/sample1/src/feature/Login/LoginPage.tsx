import React from 'react';
import BasePage from '../../shared/layout/BasePage';

// 共通ヘッダー・フッター用の props
const headerProps = {
	logoUrl: '/assets/logo.png',
	navigationItems: [
		{ label: 'Home', path: '/' },
		{ label: 'Login', path: '/login' },
	],
};
const bodyProps = { content: <div>Login Page</div> };
const footerProps = {};

const LoginPage: React.FC = () => {
	return (
		<BasePage
			headerProps={headerProps}
			bodyProps={bodyProps}
			footerProps={footerProps}
		/>
	);
};

export default LoginPage;