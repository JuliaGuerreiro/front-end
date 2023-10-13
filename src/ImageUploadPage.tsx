import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './api'; // Import your API instance
import { Header, Footer } from './Header-footer';
import './ImageUploadPage.css';
import './BackButton.css';

function CreatePost() {
  const [textContent, setTextContent] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

  const handleTextContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextContent(e.target.value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = (event) => {
        if (event.target) {
          // Atualiza o estado da imagem com a URL da imagem carregada
          setImagePreviewUrl(event.target.result as string);
        }
      };
  
      reader.readAsDataURL(file);
      setSelectedFile(file);
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

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Isso vai navegar de volta para a página anterior
  };

  return (
    <div>
      <Header />
      
      <div className="create-post-container">
        
        <div className="container-back-and-title">
          <div className="back-button">
            <a href="#" onClick={goBack}>
              <img src={"back-arrow.png"} alt="Back"/>
            </a>
          </div>

          <h2>New Post</h2>
        </div>

        {/* Input de arquivo oculto */}
        <input type="file" accept="image/*" onChange={handleFileChange} id="fileInput" style={{ display: 'none' }} />

        {/* Exibir a imagem carregada ou o botão de upload */}
        {imagePreviewUrl ? (
          <div className="image-preview">
            <img src={imagePreviewUrl} alt="Uploaded" />
          </div>
        ) : (
          <label className="upload-button" htmlFor="fileInput">
            Choose file...
          </label>
        )}

        <text> What pet is in this image?</text>

        <div className="cat-info">
          <img className="cat-photo" src="user-temp.png"/>
          <p className="cat-name">@cat</p>
        </div>
        
        <textarea 
          placeholder="Enter your caption..."
          value={textContent}
          onChange={handleTextContentChange}
        />
        
        <button onClick={handleSubmit}>Add</button>
      </div>
      <Footer />
    </div>
  );
}

export default CreatePost;
