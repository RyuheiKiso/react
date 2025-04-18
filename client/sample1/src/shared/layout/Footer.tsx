import React from 'react';

const FOOTER_HEIGHT = 50;

const Footer: React.FC = () => {
	return React.createElement(
		'footer',
		{ style: { height: FOOTER_HEIGHT, backgroundColor: '#eee', padding: 8 } },
		React.createElement('div', null, '© 2023 Example Company')
	);
};

export default Footer;
