import React from 'react';

export type FooterProps = {};

const FOOTER_HEIGHT = 50;

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer style={{ height: FOOTER_HEIGHT, backgroundColor: '#eee', padding: 8 }}>
      <div>© 2023 Example Company</div>
    </footer>
  );
};

export default Footer;
