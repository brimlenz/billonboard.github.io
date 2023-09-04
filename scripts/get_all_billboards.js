
axios.get('http://localhost:5001/api/billboards')
  .then(function(response) {
    const data = response.data;
    // Call a function to display the data on the HTML page
    displayData(data);
  })
  .catch(function(error) {
    console.error('An error occurred:', error);
  });

// app.js

function displayData(data) {
    const container = document.getElementById('billboard-container'); //<div> with id "billboard-container" to hold the data
    
    // Map through the data and create HTML elements
    data.forEach(function(item) {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
      <div class="col-sm-6 col-lg-3 mb-3 mb-md-0">
        <div class="card text-white h-100">
            <img class="card-img-top" src="../../assets/img/billboard/IMG_0823.JPG" alt="..." style="object-fit: contain; height: 300px;">
            <div class="card-body rounded-top">
                <h4 class="card-title">${item.name_of_billboard}</h4>
                <div class="tags d-flex">
                    <h6 class="m-2">Ad Agency:</h6><a href=""><span
                            class="badge badge-phoenix badge-phoenix-primary mb-2">${item.ad_agency_name}</span></a>
                </div>
                <div class="tags d-flex">
                    <h6 class="m-2">Location:</h6><a href=""><span
                            class="badge badge-phoenix badge-phoenix-danger mb-2 uil-location-pin-alt ">
                            ${item.location}</span></a>
                </div>
                <div class="tags d-flex">
                    <h6 class="m-2">Brand:</h6><a href=""><span
                            class="badge badge-phoenix badge-phoenix-success mb-2 ">${item.location}</span></a>
                </div>
                <div class="tags d-flex">
                    <h6 class="m-2">BOB Rating:</h6><a href=""><span
                            class="badge badge-phoenix badge-phoenix-success mb-2 "> ${item.bob_rating}/10</span></a>
                </div>
                <p class="card-text  text-900" style="display: -webkit-box;
                        overflow : hidden;
                        text-overflow: ellipsis;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;">${item?.description}</p>
                <p class="card-text">
                    <small class="text-muted">Last updated 45 mins ago</small>
                </p>
                <a class="btn-link px-0 d-flex align-items-center fs--1 fw-bold" href="billboards.html" role="button">Read
                    more<svg class="svg-inline--fa fa-angle-right ms-2" aria-hidden="true" focusable="false"
                        data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 512" data-fa-i2svg="">
                        <path fill="currentColor"
                            d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z">
                        </path>
                    </svg>
                    <!-- <span class="fa-solid fa-angle-right ms-2"></span> Font Awesome fontawesome.com --></a>
            </div>
        </div>

    </div>
      `;
      
      container.appendChild(postElement);
    });
  }
  
  