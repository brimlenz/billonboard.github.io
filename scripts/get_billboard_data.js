const currentURL = window.location.href;
const url = new URL(currentURL);
const search = url.search; 

const searchParams = new URLSearchParams(url.search);
let board_id = searchParams.get('id');

axios.get(`http://localhost:5001/api/billboard/${board_id}`)
  .then(function(response) {
    const data = response.data;
    console.log(data)
    displayData(data);
  })
  .catch(function(error) {
    console.error('An error occurred:', error);
  });

  function displayData(item) {
    const container = document.getElementById('billboard-container'); //<div> with id "billboard-container" to hold the data
    
    // Create a parent container for all components
    const parentContainer = document.createElement('div');

    // Part 1: Add section one to the parent container
    const BoardHeader = document.createElement('div');
    BoardHeader.classList.add('BoardHeader');
    BoardHeader.innerHTML = `
        <div class="card-header p-4 border-bottom border-300 bg-soft">
            <div class="row g-3 justify-content-between align-items-end">
                <div class="col-12 col-md">
                    <h3 class="ms-1 mb-3 lh-sm">${item?.name_of_billboard}</h3>
                    <span class="badge badge-phoenix badge-phoenix-primary mb-2">${item?.ad_agency_name}</span>
                    <span class="badge badge-phoenix badge-phoenix-primary mb-2">${item?.number_of_sides} sides</span>
                    <h5 class=" mb-3">B.O.B Rating: <span>${item?.bob_rating}/10</span></h5>
                    <hr>
                </div>
            </div>
        </div>
    `;
    parentContainer.appendChild(BoardHeader);

    // Part 2: Create the carousel element
    const carouselContainer = document.createElement('div');
    carouselContainer.classList.add('carousel', 'slide', 'carousel-fade');
    carouselContainer.id = 'carouselExampleCaptions';
    carouselContainer.setAttribute('data-ride', 'carousel');

    // Create a container for carousel items (slides)
    const carouselInner = document.createElement('div');
    carouselInner.classList.add('carousel-inner', 'rounded-1', 'light');

    // Loop over the advertisement_data array to create carousel items
    item?.advertisement_data?.forEach((side, index) => {
        // Create a div for each carousel item (slide)
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');

        // If it's the first item, mark it as active
        if (index === 0) {
            carouselItem.classList.add('active');
        }

        // Fill in the HTML for each carousel item (slide)
        carouselItem.innerHTML = `
            <h4 class="ms-2 mb-3">Topic: <span>${side?.main_topic}</span></h4>
            <h6 class="ms-4 mb-3">Message: <span>${side?.message}</span></h6>
            <p class="card-text text-900 ms-5">${side?.catch_phrase}</p>
            <p class="card-text text-end">
                <small class="text-muted">Posted ${side?.from_date}</small>
            </p>
            <img
            class="d-block w-100 h-100"
            src="${side.image_urls}"
            onerror="this.onerror=null; this.src='../../../assets/img/billboard/IMG_0780.JPG'"
            alt="side ${index + 1}"
            />
            
            <div class="carousel-caption d-none d-md-block badge badge-phoenix badge-phoenix-primary">
                <h5 class="text-dark">side ${side.side_ref_Id}</h5>
                <p>${side.orientation}</p>
            </div>
        `;

        // Append the carousel item to the carousel inner container
        carouselInner.appendChild(carouselItem);
    });

    // Append the carousel inner container to the carousel container
    carouselContainer.appendChild(carouselInner);

    // Create carousel control buttons
    const carouselPrevButton = document.createElement('button');
    carouselPrevButton.classList.add('carousel-control-prev');
    carouselPrevButton.type = 'button';
    carouselPrevButton.setAttribute('data-bs-target', '#carouselExampleCaptions');
    carouselPrevButton.setAttribute('data-bs-slide', 'prev');
    carouselPrevButton.innerHTML = `
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only text-dark">Previous</span>
    `;

    const carouselNextButton = document.createElement('button');
    carouselNextButton.classList.add('carousel-control-next');
    carouselNextButton.type = 'button';
    carouselNextButton.setAttribute('data-bs-target', '#carouselExampleCaptions');
    carouselNextButton.setAttribute('data-bs-slide', 'next');
    carouselNextButton.innerHTML = `
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    `;

    // Append the carousel control buttons to the carousel container
    carouselContainer.appendChild(carouselPrevButton);
    carouselContainer.appendChild(carouselNextButton);

    // Append the carousel container to the parent container
    parentContainer.appendChild(carouselContainer);

    const DetailsSection = document.createElement('div');
    DetailsSection.classList.add('DetailsSection');
    DetailsSection.innerHTML = `
        <ul class="nav nav-underline m-3" id="myTab" role="tablist">
            <li class="nav-item" role="presentation"><a class="nav-link active" id="About-tab"
                    data-bs-toggle="tab" href="#tab-About" role="tab" aria-controls="tab-About"
                    aria-selected="true">About</a></li>
            <li class="nav-item" role="presentation"><a class="nav-link" id="Photos-tab"
                    data-bs-toggle="tab" href="#tab-Photos" role="tab" aria-controls="tab-Photos"
                    aria-selected="false" tabindex="-1">Photos</a></li>
            <li class="nav-item" role="presentation"><a class="nav-link" id="Map-tab" data-bs-toggle="tab"
                    href="#tab-Map" role="tab" aria-controls="tab-Map" aria-selected="false"
                    tabindex="-1">Map</a></li>
        </ul>
    `;

    parentContainer.appendChild(DetailsSection);

    const AboutDetailsSection = document.createElement('div');
    AboutDetailsSection.classList.add('AboutDetailsSection');
    AboutDetailsSection.innerHTML = `
        <div class="tab-content m-3 " id="myTabContent">
            <div class="tab-pane fade show active" id="tab-About" role="tabpanel"
                aria-labelledby="About-tab">
                <table class="table table-borderless mt-4">
                    <tbody>
                        <tr>
                            <td class="py-2 ps-0">
                                <div class="d-flex"><span class="fs-5 me-2" data-feather="map-pin"
                                        style="height:16px; width:16px;"> </span>
                                    <h5 class="lh-sm me-4">Location</h5>
                                </div>
                            </td>
                            <td class="py-2 fw-bold lh-sm">:</td>
                            <td class="py-2 px-3">
                                <h5 class="lh-sm fw-normal text-800">${item?.location}
                                </h5>
                            </td>
                        </tr>
                        <tr>
                            <td class="py-2 ps-0">
                                <div class="d-flex"><span class="fs-5 me-2" data-feather="book-open"
                                        style="height:16px; width:16px;"> </span>
                                    <h5 class="lh-sm me-4">Description</h5>
                                </div>
                            </td>
                            <td class="py-2 fw-bold lh-sm">:</td>
                            <td class="py-2 px-3">
                                <h5 class="lh-lg fw-normal text-800">${item?.description}</h5>
                            </td>
                        </tr>
                        <tr>
                            <td class="py-2 ps-0">
                                <div class="d-flex"><span class="fs-5 me-2" data-feather="phone"
                                        style="height:16px; width:16px;"> </span>
                                    <h5 class="lh-sm me-4">Phone</h5>
                                </div>
                            </td>
                            <td class="py-2 fw-bold lh-sm">:</td>
                            <td class="py-2 px-3">
                                <h5 class="lh-sm fw-normal text-800">${item?.ad_agency_mobile}</h5>
                            </td>
                        </tr>

                        <tr>
                            <td class="py-2 ps-0">
                                <div class="d-flex"><span class="fs-5 me-2" data-feather="clock"
                                        style="height:16px; width:16px;"> </span>
                                    <h5 class="lh-sm me-4">Availability</h5>
                                </div>
                            </td>
                            <td class="py-2 fw-bold lh-sm">:</td>
                            <td class="py-2 px-3">
                                <h5 class="lh-sm fw-normal text-800">${item?.availability_status? 'available' : 'closed'}</h5>
                            </td>
                        </tr>
                        <tr>
                            <td class="py-2 ps-0">
                                <div class="d-flex"><span class="fs-5 me-2" data-feather="columns"
                                        style="height:16px; width:16px;"> </span>
                                    <h5 class="lh-sm me-4">Sides</h5>
                                </div>
                            </td>
                            <td class="py-2 fw-bold lh-sm">:</td>
                            <td class="py-2 px-3">
                                <h5 class="lh-sm fw-normal text-800">${item?.number_of_sides}</h5>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
    parentContainer.appendChild(AboutDetailsSection);
    
    const PhotosSearchSection = document.createElement('div');
    PhotosSearchSection.classList.add('PhotosSearchSection');
    PhotosSearchSection.innerHTML = `
        <div class="row-fluid h-100 g-3 justify-content-center">
            <div class="card text-dark bg-light m-5 justify-content-center">
                <hr>
                <form class="row row-cols-lg-5 g-3 justify-content-center">
                    <div class="col-12 ms-1 ">
                        <label class="sr-only" for="inlineFormSelectPref">Pick a range of
                            Dates</label>
                        <input class="form-control datetimepicker" id="timepicker2" type="text"
                            placeholder="d/m/y to d/m/y"
                            data-options='{"mode":"range","dateFormat":"d/m/y","disableMobile":true}' />

                    </div>
                    <div class="col-12 ms-1">
                        <label class="sr-only" for="inlineFormInputGroupUsername">Brand</label>

                        <input class="form-control" id="inlineFormInputGroupUsername" type="text"
                            placeholder="Search for a Brand">

                    </div>


                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Search</button>
                    </div>
                </form>
                <hr>
            </div>
        </div>
    `
    parentContainer.appendChild(PhotosSearchSection);

    const PhotosMappedSectionContainer = document.createElement('div');

    item?.advertisement_data.forEach((side,index) => {
        // Create a div for each advertisement side
        const PhotosMappedSection = document.createElement('div');
        PhotosMappedSection.classList.add('PhotosMappedSection');

        // Fill in the HTML for each advertisement side
        PhotosMappedSection.innerHTML = `
            <div class="col-sm-6 col-lg-3 mb-3 mb-md-0">
                <a class="" data-bs-toggle="modal" data-bs-target="#verticallyCentered"> 
                    <img
                        class="card-img-top"
                        src="${side?.image_urls}"
                        onerror="this.onerror=null; this.src='../../../assets/img/billboard/IMG_0780.JPG'"
                        alt="side ${index + 1}"
                    />
                </a>
                <p class="card-text text-end">
                    <small class="text-muted ">${side?.from_date}</small>
                </p>
                <div class="modal fade" id="verticallyCentered" tabindex="-1"
                    aria-labelledby="verticallyCenteredModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body">
                                <img
                                    class="card-img-top"
                                    src="${side?.image_urls}"
                                    onerror="this.onerror=null; this.src='../../../assets/img/billboard/IMG_0780.JPG'"
                                    alt="side ${index + 1}"
                                />
                                <p style={{fontWeight:'bold'}}>${side?.main_topic}</p>
                                <p>${side?.message}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>             
        `;

        // Append the advertisement div to the advertisement container
        PhotosMappedSectionContainer.appendChild(PhotosMappedSection);
    });
    parentContainer.appendChild(PhotosMappedSectionContainer);

    container.appendChild(parentContainer);
  }