import React from 'react';
import Header, { HeaderProps } from './Header';
import Body, { BodyProps } from './Body';
import Footer, { FooterProps } from './Footer';

const BASEPAGE_MARGIN = 20;

type BasePageProps = {
  headerProps: HeaderProps;
  bodyProps: BodyProps;
  footerProps: FooterProps;
};

const BasePage: React.FC<BasePageProps> = ({ headerProps, bodyProps, footerProps }) => {
  const renderHeader = () => <Header {...headerProps} />;
  const renderBody = () => <Body {...bodyProps} />;
  const renderFooter = () => <Footer {...footerProps} />;

  return (
    <div style={{ margin: BASEPAGE_MARGIN }}>
      {renderHeader()}
      {renderBody()}
      {renderFooter()}
    </div>
  );
};

export default BasePage;
