import React from 'react'

function App() {
    const fileRef = React.useState()
    function handleUpload()
    {
        fileRef.current.click()
    }
  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input ref={fileRef} data-testid="file-picker" type="file" accept="image/*" />
        <button onClick={handleUpload}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;
