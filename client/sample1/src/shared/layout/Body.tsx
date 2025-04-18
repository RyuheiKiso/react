import React from 'react';

type BodyProps = {
  content: React.ReactNode;
};

const Body: React.FC<BodyProps> = ({ content }) => {
  return <div>{content}</div>;
};

export default Body;
