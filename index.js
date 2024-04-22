let imageUrl;
  function handleUpload(){
    const fileInput = document.getElementById("filePicker")
    const image = fileInput.files[0];

    const formData = new FormData();
    const apiKey = 'gx3AKrHiztcWuPt2575izrwx'
    formData.append("image_file",image);
    formData.append("size",'auto');
    fetch('https://api.remove.bg/v1.0/removebg',{
      method:'POST',
      headers:{
        'X-Api-Key':apiKey,
      },
      body:formData

    })
    .then(function(response){
      return response.blob();

    })
    .then(function(blob){
      console.log(blob)
      const url = URL.createObjectURL(blob)
      imageUrl = url
      const img = document.createElement("img")
      img.src = url;
      document.body.appendChild(img)
      
    })
    .catch()
    console.log("clicked")
  }

  function downloadFile(){
    let anchorElement = document.createElement("a");
    anchorElement.href = imageUrl;
    anchorElement.download = "no-bg.png"
    document.body.appendChild(anchorElement)
    anchorElement.click();
    document.body.removeChild(anchorElement)

  }