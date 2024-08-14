import React, { useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Webcam from 'react-webcam';

function AvatarUploader({ avatar, updateAvatar }) {
  const [capturing, setCapturing] = useState(false);
  const [image, setImage] = useState(avatar);

  const handleCapture = (imageSrc) => {
    setImage(imageSrc);
    updateAvatar(imageSrc);
    setCapturing(false);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      updateAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <div className="mb-3">
        {image ? (
          <Image src={image} roundedCircle width="150" height="150" />
        ) : (
          <Image src="default-avatar.png" roundedCircle width="150" height="150" />
        )}
      </div>
      <Button variant="secondary" onClick={() => setCapturing(!capturing)}>
        {capturing ? 'Stop Camera' : 'Capture from Camera'}
      </Button>
      {capturing && (
        <Webcam
          audio={false}
          screenshotFormat="image/jpeg"
          width={150}
          height={150}
          videoConstraints={{ facingMode: "user" }}
          onUserMedia={() => console.log("Webcam started")}
          onUserMediaError={(error) => console.error("Webcam error:", error)}
          screenshotQuality={1}
          onClick={() => {
            const imageSrc = Webcam.getScreenshot();
            handleCapture(imageSrc);
          }}
        />
      )}
      <div className="mt-2">
        <input type="file" accept="image/*" onChange={handleUpload} />
      </div>
    </div>
  );
}

export default AvatarUploader;
