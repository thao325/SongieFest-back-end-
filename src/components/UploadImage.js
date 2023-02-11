import React, { useState } from 'react';
import axios from 'axios';

function UploadImage() {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('image', image);

    axios.post('/server/upload', formData)
      .then(response => {
        console.log(response.data);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      {image && <img src={URL.createObjectURL(image)} alt="Preview" />}
    </div>
  );
}

export default UploadImage;