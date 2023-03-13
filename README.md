<!doctype html>
<html> 
 <head> 
  <title>DOGGO'S - Adopt a Dog Today!</title> 
  <style>
    body {
      background-color: black;
      color: white;
      font-family: Arial, sans-serif;
    }

    h1 {
      font-size: 6rem;
      text-align: center;
      margin-top: 3rem;
    }

    h1 span {
      font-size: 2rem;
      display: block;
    }

    button {
      background-color: red;
      color: white;
      font-size: 1.5rem;
      padding: 1rem 2rem;
      border: none;
      border-radius: 5px;
      margin: 2rem auto;
      display: block;
    }

    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin: 2rem auto;
      max-width: 1000px;
    }

    .card {
      background-color: #333;
      border-radius: 10px;
      margin: 1rem;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 300px;
    }

    .card img {
      width: 250px;
      height: 250px;
      object-fit: cover;
      border-radius: 50%;
      margin-bottom: 1rem;
    }

    .card h2 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    .card p {
      font-size: 1.5rem;
      margin: 0.5rem;
      text-align: center;
    }

    .call-btn {
      background-color: red;
      color: white;
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 5px;
      margin-top: 1rem;
      align-self: flex-end;
      cursor: pointer;
    }
  </style> 
 </head> 
 <body> 
  <h1>DOGGO's</h1> 
  <h1><span>Find your Ultimate Dog Companion</span></h1> <button>Our Mission</button> 
  <p>Click on "Choose File" to upload the picture, fill in the details, and click "Submit" for adoption.</p> 
  <form action="process_form.php" method="post" enctype="multipart/form-data"> <label for="picture">Picture:</label> 
   <input type="file" id="picture" name="picture"> 
   <br> 
   <br> <label for="breed"> Breed:</label> 
   <input type="text" id="breed" name="breed" required> <label for="location">Location:</label> 
   <input type="text" id="location" name="location" required> 
   <br> 
   <br> <label for="phone">Phone Number (India):</label> 
   <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required> <label for="gender">Gender:</label> <select id="gender" name="gender"> <option value="male">Male</option> <option value="female">Female</option> </select> 
   <br> 
   <br> <label> <input type="radio" name="status" value="adoption"> For Adoption </label> <label> <input type="radio" name="status" value="lost"> Lost </label> <label> <input type="radio" name="status" value="Profile"> Profile </label> 
   <br> 
   <br> 
   <input type="submit" value="Submit"> 
  </form> 
  <div class="container"> 
   <div class="container"> 
    <div class="row"> 
     <div class="col-md-6"> 
      <div class="card"> 
       <img src="https://via.placeholder.com/250" alt="Dog 1" onclick="showImage(this.src)"> 
       <h2>Buddy</h2> 
       <p>Breed: Golden Retriever</p> 
       <p>Address: 123 Main St.</p> 
       <p>Phone: 555-1234</p> 
       <p>Gender: Male</p> 
       <p>Status: For Adoption</p> <button class="call-btn" onclick="window.location.href='tel:6000246732'"> Call Now</button> 
      </div> 
     </div> 
     <div class="col-md-6"> 
      <div class="card"> 
       <img src="https://via.placeholder.com/250" alt="Dog 2" onclick="showImage(this.src)"> 
       <h2>Daisy</h2> 
       <p>Breed: Beagle</p> 
       <p>Address: 456 Elm St.</p> 
       <p>Phone: 555-5678</p> 
       <p>Gender: Female</p> 
       <p>Status: For Adoption</p> <button class="call-btn" onclick="window.location.href='tel:6000246732'"> Call Now</button> 
      </div> 
     </div> 
    </div> 
    <div class="row"> 
     <div class="col-md-6"> 
      <div class="card"> 
       <img src="https://via.placeholder.com/250" alt="Dog 3" onclick="showImage(this.src)"> 
       <h2>Rocco</h2> 
       <p>Breed: Rottweiler</p> 
       <p>Address: 456 Elm St.</p> 
       <p>Phone: 555-5678</p> 
       <p>Gender: Male</p> 
       <p>Status: Lost </p> <button class="call-btn" onclick="window.location.href='tel:6000246732'"> Call Now</button> 
      </div> 
     </div> 
     <div class="col-md-6"> 
      <div class="card"> 
       <img src="https://via.placeholder.com/250" alt="Dog 4" onclick="showImage(this.src)"> 
       <h2>Maggie</h2> 
       <p>Breed: Lhasa Apso</p> 
       <p>Address: Uzanbazar</p> 
       <p>Phone: 6000246732</p> 
       <p>Gender: Female</p> 
       <p>Status: For Adoption</p> <button class="call-btn" onclick="window.location.href='tel:6000246732'">Call Now</button> 
      </div> 
     </div> 
    </div> 
   </div> 
   <script>
function showImage(src) {
  // create a new HTML element for the image
  var img = document.createElement("img");
  img.src = src;

  // create a new div to hold the image and add it to the page
  var modal = document.createElement("div");
  modal.classList.add("modal");
  modal.appendChild(img);
  document.body.appendChild(modal);

  // add a click event listener to the modal to close it when clicked
  modal.addEventListener("click", function() {
    document.body.removeChild(modal);
  });
}
</script> 
   <style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal img {
  max-width: 90%;
  max-height: 90%;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
}

.col-md-6 {
  flex: 0 0 50%;
 
     </div> 
  </div> 
 </body>
</html></style>
  </div>
 </body>
</html>
