import './App.css';
import React, {useState, useEffect} from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'

export function UploadImages() {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageURLs = [];
    images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
    setImageURLs(newImageURLs);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  return (
    <>
      <input type="file" accept="image/*" onChange={onImageChange} />
      {imageURLs.map(imageURL => <JigsawPuzzle imageSrc={imageURL} rows={2} columns={2} onSolved={() => alert('Solved!')} />)}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <UploadImages />
    </div>
  );
}

export default App;
