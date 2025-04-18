import React, { useRef, useState } from 'react';
import Button from '@mui/material/Button';

type CameraProps = {
  onCapture: (imageData: string) => void;
};

const Camera: React.FC<CameraProps> = ({ onCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startCamera = async () => {
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setIsStreaming(true);
        }
      } else {
        setError('カメラがサポートされていません。');
      }
    } catch (err) {
      setError('カメラの起動に失敗しました。');
    }
  };

  const captureImage = () => {
    try {
      if (videoRef.current) {
        const canvas = document.createElement('canvas');
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
          const image = canvas.toDataURL('image/png');
          onCapture(image);
        }
      }
    } catch (err) {
      setError('画像のキャプチャに失敗しました。');
    }
  };

  const rotateCamera = (angle: number) => {
    console.log(`Camera rotated by ${angle} degrees`);
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <video ref={videoRef} style={{ display: isStreaming ? 'block' : 'none' }} />
      {!isStreaming && <p>カメラがオフです。</p>}
      <Button variant="contained" onClick={startCamera}>カメラを起動</Button>
      <Button variant="contained" onClick={captureImage} disabled={!isStreaming}>キャプチャ</Button>
    </div>
  );
};

export default Camera;
