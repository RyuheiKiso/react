import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

type QRGeneratorProps = {
  value: string;
};

const QRGenerator: React.FC<QRGeneratorProps> = ({ value }) => {
  return <QRCodeCanvas value={value} />;
};

const downloadQR = (filename: string = 'qr-code.png') => {
  const canvas = document.querySelector('canvas');
  if (canvas) {
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = filename;
    link.click();
  }
};

export default QRGenerator;
