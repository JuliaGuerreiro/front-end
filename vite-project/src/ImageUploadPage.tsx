import React, { useState, ChangeEvent } from 'react';
import api from './api'; // Import your API instance
import { Header, Footer } from './Header-footer';
import './ImageUploadPage.css';

function CreatePost() {
  const [textContent, setTextContent] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleTextContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextContent(e.target.value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('textContent', textContent);
      if (selectedFile) {
        formData.append('mediaFile', selectedFile);
      }

      await api.post('/post/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Optionally, you can redirect the user or perform other actions after a successful post creation.
    } catch (error) {
      console.error('Error creating the post:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="create-post-container">
      
        <h2>new post</h2>

        <label className="upload-button">
          Choose file...
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </label>

        {/*<textarea className="insert-caption"
          placeholder="Enter your caption"
          value={textContent}
          onChange={handleTextContentChange}
  />*/}
        <button onClick={handleSubmit}>Add</button>
      </div>
      <Footer />
    </div>
  );
}

export default CreatePost;
