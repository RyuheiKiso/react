import React, { useEffect, useState } from 'react';
import { getClientIp as fetchClientIp } from '../network/APIHandler';
import { trackInteraction } from '../utils/CommonTracking';

export type HeaderProps = {
  logoUrl: string;
  navigationItems: { label: string; path: string }[];
};

const HEADER_HEIGHT = 60;

const Header: React.FC<HeaderProps> = ({ logoUrl, navigationItems }) => {
  const [clientIp, setClientIp] = useState<string | null>(null);

  useEffect(() => {
    fetchClientIp().then(setClientIp).catch(console.error);
  }, []);

  const renderLogo = () => (
    <img src={logoUrl} alt="logo" style={{ height: HEADER_HEIGHT - 10 }} />
  );

  const renderMenu = () => (
    <nav>
      {navigationItems.map((item, idx) => (
        <a
          key={idx}
          href={item.path}
          onClick={() => trackInteraction(new Event('nav-click'), item)}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );

  const renderClientIp = () => (
    <div style={{ marginLeft: 'auto' }}>IP: {clientIp || '取得中...'}</div>
  );

  return (
    <header style={{ display: 'flex', alignItems: 'center', height: HEADER_HEIGHT }}>
      {renderLogo()}
      {renderMenu()}
      {renderClientIp()}
    </header>
  );
};

export default Header;
