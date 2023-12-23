const currentURL = window.location.href;
const url = new URL(currentURL);
const search = url.search; 

const searchParams = new URLSearchParams(url.search);
let board_id = searchParams.get('id');

axios.get(`http://localhost:5001/api/billboard/${board_id}`)
  .then(function(response) {
    const data = response.data;
    displayData(data);
  })
  .catch(function(error) {
    console.error('An error occurred:', error);
  });

  function displayData(item) {
    const container = document.getElementById('billboard-container'); //<div> with id "billboard-container" to hold the data
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
    <div class="col-12 col-xl-10 order-1 order-xl-0">
    <div class="card shadow-none border border-300 mb-3" data-component-card="data-component-card">
        <div class="card-header p-4 border-bottom border-300 bg-soft">
            <div class="row g-3 justify-content-between align-items-end">
                <div class="col-12 col-md">
                    <h3 class="ms-1 mb-3 lh-sm">${item?.name_of_billboard}</h3>
                    <span class="badge badge-phoenix badge-phoenix-primary mb-2">${item?.ad_agency_name}</span>
                    <span class="badge badge-phoenix badge-phoenix-primary mb-2">${item?.number_of_sides} sides</span>
                    <h5 class=" mb-3">B.O.B Rating: <span>${item?.bob_rating}/10</span></h5>
                    <hr>
                    {item?.advertisement_data.forEach((side)=>{
                            <div>
                            <h4 class="ms-2 mb-3">Message: <span>${item?.description}</span></h4>
                            <h6 class="ms-4 mb-3">Location: <span> ${item?.location}</span></h6>
        
                            <p class="card-text  text-900 ms-5">School will remain clsed till end of january
                                2023
                                As they prepare fore next year, schools have their billboards out there.
                                we came across this billboard when it was being erected on sunday 4th Dec -
                                Notice the tiny looking men who are perched on top.</p>
        
                            <p class="card-text text-end">
                                <small class="text-muted ">Posted 8 December 2022</small>
                            </p>
                            </div>
                    })}
                </div>

            </div>
        </div>
        <div class="carousel slide carousel-fade" id="carouselExampleCaptions" data-ride="carousel">
            <div class="carousel-indicators">
                <button class="" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2" class="active" aria-current="true"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner rounded-1 light">
                <div class="carousel-item">
                    <img class="d-block w-100" src="../../../assets/img/billboard/IMG_0780.JPG"
                        alt="First slide">
                    <div
                        class="carousel-caption d-none d-md-block badge badge-phoenix badge-phoenix-primary">
                        <h5 class="text-dark">Side A</h5>
                        <p>Side facing you as you enter Rongai town</p>
                    </div>
                </div>
                <div class="carousel-item active">
                    <img class="d-block w-100" src="../../../assets/img/billboard/IMG_E1447.JPG"
                        alt="Second slide">
                    <div
                        class="carousel-caption d-none d-md-block badge badge-phoenix badge-phoenix-primary">
                        <h5 class="text-dark">Side B</h5>
                        <p>Side Opposite Mirror hardware</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="../../../assets/img/billboard/IMG_0816.JPG"
                        alt="Third slide">
                    <div
                        class="carousel-caption d-none d-md-block  badge badge-phoenix badge-phoenix-primary">
                        <h5 class="text-dark">Side C</h5>
                        <p>Side facing you when you leaving rongai town</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button"
                data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only text-dark">Previous</span>
            </button>
            <button class="carousel-control-next" type="button"
                data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </button>
        </div>


    </div>

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
    <hr>
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
        <div class="tab-pane fade" id="tab-Photos" role="tabpanel" aria-labelledby="Photos-tab">
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

            <ul class="nav nav-underline" id="myTab" role="tablist">
                <li class="nav-item" role="presentation"><a class="nav-link active" id="home-tab"
                        data-bs-toggle="tab" href="tabs.html#tab-home" role="tab"
                        aria-controls="tab-home" aria-selected="false" tabindex="-1">Side A</a></li>
                <li class="nav-item" role="presentation"><a class="nav-link" id="profile-tab"
                        data-bs-toggle="tab" href="tabs.html#tab-profile" role="tab"
                        aria-controls="tab-profile" aria-selected="false" tabindex="-1">Side B</a></li>
                <li class="nav-item" role="presentation"><a class="nav-link " id="contact-tab"
                        data-bs-toggle="tab" href="tabs.html#tab-contact" role="tab"
                        aria-controls="tab-contact" aria-selected="true">Side C</a></li>
            </ul>
            <div class="tab-content mt-3" id="myTabContent">
                <div class="tab-pane fade" id="tab-home" role="tabpanel" aria-labelledby="home-tab"><div class="row h-100 g-3 ">
                    <div class="col-sm-6 col-lg-3 mb-3 mb-md-0">
                        <a class="" data-bs-toggle="modal" data-bs-target="#verticallyCentered"> <img
                                class="card-img-top" src="../../assets/img/billboard/IMG_0828.JPG"
                                alt="..."> </a>
                        <p class="card-text text-end">
                            <small class="text-muted ">Posted 8 December 2022</small>
                        </p>
                        <div class="modal fade" id="verticallyCentered" tabindex="-1"
                            aria-labelledby="verticallyCenteredModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">

                                    <div class="modal-body">
                                        <img class="card-img-top"
                                            src="../../assets/img/billboard/IMG_0833.JPG" alt="...">
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-3 mb-3 mb-md-0">
                        <a class="" data-bs-toggle="modal" data-bs-target="#verticallyCentered"> <img
                                class="card-img-top" src="../../assets/img/billboard/IMG_0841.JPG"
                                alt="..."> </a>
                        <p class="card-text text-end">
                            <small class="text-muted ">Posted 8 December 2022</small>
                        </p>
                        <div class="modal fade" id="verticallyCentered" tabindex="-1"
                            aria-labelledby="verticallyCenteredModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">

                                    <div class="modal-body">
                                        <img class="card-img-top"
                                            src="../../assets/img/billboard/IMG_0844.JPG" alt="...">
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-3 mb-3 mb-md-0">
                        <a class="" data-bs-toggle="modal" data-bs-target="#verticallyCentered"> <img
                                class="card-img-top" src="../../assets/img/billboard/IMG_0849.JPG"
                                alt="..."> </a>
                        <p class="card-text text-end">
                            <small class="text-muted ">Posted 8 December 2022</small>
                        </p>
                        <div class="modal fade" id="verticallyCentered" tabindex="-1"
                            aria-labelledby="verticallyCenteredModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">

                                    <div class="modal-body">
                                        <img class="card-img-top"
                                            src="../../assets/img/billboard/IMG_0854.JPG" alt="...">
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-3 mb-3 mb-md-0">
                        <a class="" data-bs-toggle="modal" data-bs-target="#verticallyCentered"> <img
                                class="card-img-top" src="../../assets/img/billboard/IMG_0864.JPG"
                                alt="..."> </a>
                        <p class="card-text text-end">
                            <small class="text-muted ">Posted 8 December 2022</small>
                        </p>
                        <div class="modal fade" id="verticallyCentered" tabindex="-1"
                            aria-labelledby="verticallyCenteredModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">

                                    <div class="modal-body">
                                        <img class="card-img-top"
                                            src="../../assets/img/billboard/IMG_0870.JPG" alt="...">
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-3 mb-3 mb-md-0">
                        <a class="" data-bs-toggle="modal" data-bs-target="#verticallyCentered"> <img
                                class="card-img-top" src="../../assets/img/billboard/IMG_0871.JPG"
                                alt="..."> </a>
                        <p class="card-text text-end">
                            <small class="text-muted ">Posted 8 December 2022</small>
                        </p>
                        <div class="modal fade" id="verticallyCentered" tabindex="-1"
                            aria-labelledby="verticallyCenteredModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">

                                    <div class="modal-body">
                                        <img class="card-img-top"
                                            src="../../assets/img/billboard/IMG_0872.JPG" alt="...">
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div></div>
                <div class="tab-pane fade" id="tab-profile" role="tabpanel"
                    aria-labelledby="profile-tab"><div class="row h-100 g-3 ">
                        <div class="col-sm-6 col-lg-3 mb-3 mb-md-0">
                            <a class="" data-bs-toggle="modal" data-bs-target="#verticallyCentered"> <img
                                    class="card-img-top" src="../../assets/img/billboard/IMG_0877.JPG"
                                    alt="..."> </a>
                            <p class="card-text text-end">
                                <small class="text-muted ">Posted 8 December 2022</small>
                            </p>
                            <div class="modal fade" id="verticallyCentered" tabindex="-1"
                                aria-labelledby="verticallyCenteredModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">

                                        <div class="modal-body">
                                            <img class="card-img-top"
                                                src="../../assets/img/billboard/IMG_0879.JPG" alt="...">
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-3 mb-3 mb-md-0">
                            <a class="" data-bs-toggle="modal" data-bs-target="#verticallyCentered"> <img
                                    class="card-img-top" src="../../assets/img/billboard/IMG_0869.JPG"
                                    alt="..."> </a>
                            <p class="card-text text-end">
                                <small class="text-muted ">Posted 8 December 2022</small>
                            </p>
                            <div class="modal fade" id="verticallyCentered" tabindex="-1"
                                aria-labelledby="verticallyCenteredModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">

                                        <div class="modal-body">
                                            <img class="card-img-top"
                                                src="../../assets/img/billboard/IMG_0866.JPG" alt="...">
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-3 mb-3 mb-md-0">
                            <a class="" data-bs-toggle="modal" data-bs-target="#verticallyCentered"> <img
                                    class="card-img-top" src="../../assets/img/billboard/IMG_0823.JPG"
                                    alt="..."> </a>
                            <p class="card-text text-end">
                                <small class="text-muted ">Posted 8 December 2022</small>
                            </p>
                            <div class="modal fade" id="verticallyCentered" tabindex="-1"
                                aria-labelledby="verticallyCenteredModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">

                                        <div class="modal-body">
                                            <img class="card-img-top"
                                                src="../../assets/img/billboard/IMG_0823.JPG" alt="...">
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-3 mb-3 mb-md-0">
                            <a class="" data-bs-toggle="modal" data-bs-target="#verticallyCentered"> <img
                                    class="card-img-top" src="../../assets/img/billboard/IMG_0825.JPG"
                                    alt="..."> </a>
                            <p class="card-text text-end">
                                <small class="text-muted ">Posted 8 December 2022</small>
                            </p>
                            <div class="modal fade" id="verticallyCentered" tabindex="-1"
                                aria-labelledby="verticallyCenteredModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">

                                        <div class="modal-body">
                                            <img class="card-img-top"
                                                src="../../assets/img/billboard/IMG_0825.JPG" alt="...">
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-3 mb-3 mb-md-0">
                            <a class="" data-bs-toggle="modal" data-bs-target="#verticallyCentered"> <img
                                    class="card-img-top" src="../../assets/img/billboard/IMG_0829.JPG"
                                    alt="..."> </a>
                            <p class="card-text text-end">
                                <small class="text-muted ">Posted 8 December 2022</small>
                            </p>
                            <div class="modal fade" id="verticallyCentered" tabindex="-1"
                                aria-labelledby="verticallyCenteredModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">

                                        <div class="modal-body">
                                            <img class="card-img-top"
                                                src="../../assets/img/billboard/IMG_0829.JPG" alt="...">
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>
                <div class="tab-pane fade active show" id="tab-contact" role="tabpanel"
                    aria-labelledby="contact-tab"><div class="row h-100 g-3 ">
                        <div class="col-sm-6 col-lg-3 mb-3 mb-md-0">
                            <a class="" data-bs-toggle="modal" data-bs-target="#verticallyCentered"> <img
                                    class="card-img-top" src="../../assets/img/billboard/IMG_0816.JPG"
                                    alt="..."> </a>
                            <p class="card-text text-end">
                                <small class="text-muted ">Posted 8 December 2022</small>
                            </p>
                            <div class="modal fade" id="verticallyCentered" tabindex="-1"
                                aria-labelledby="verticallyCenteredModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">

                                        <div class="modal-body">
                                            <img class="card-img-top"
                                                src="../../assets/img/billboard/IMG_0821.JPG" alt="...">
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-3 mb-3 mb-md-0">
                            <a class="" data-bs-toggle="modal" data-bs-target="#verticallyCentered"> <img
                                    class="card-img-top" src="../../assets/img/billboard/IMG_0822.JPG"
                                    alt="..."> </a>
                            <p class="card-text text-end">
                                <small class="text-muted ">Posted 8 December 2022</small>
                            </p>
                            <div class="modal fade" id="verticallyCentered" tabindex="-1"
                                aria-labelledby="verticallyCenteredModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">

                                        <div class="modal-body">
                                            <img class="card-img-top"
                                                src="../../assets/img/billboard/IMG_0822.JPG" alt="...">
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-3 mb-3 mb-md-0">
                            <a class="" data-bs-toggle="modal" data-bs-target="#verticallyCentered"> <img
                                    class="card-img-top" src="../../assets/img/billboard/IMG_0823.JPG"
                                    alt="..."> </a>
                            <p class="card-text text-end">
                                <small class="text-muted ">Posted 8 December 2022</small>
                            </p>
                            <div class="modal fade" id="verticallyCentered" tabindex="-1"
                                aria-labelledby="verticallyCenteredModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">

                                        <div class="modal-body">
                                            <img class="card-img-top"
                                                src="../../assets/img/billboard/IMG_0823.JPG" alt="...">
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-3 mb-3 mb-md-0">
                            <a class="" data-bs-toggle="modal" data-bs-target="#verticallyCentered"> <img
                                    class="card-img-top" src="../../assets/img/billboard/IMG_0825.JPG"
                                    alt="..."> </a>
                            <p class="card-text text-end">
                                <small class="text-muted ">Posted 8 December 2022</small>
                            </p>
                            <div class="modal fade" id="verticallyCentered" tabindex="-1"
                                aria-labelledby="verticallyCenteredModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">

                                        <div class="modal-body">
                                            <img class="card-img-top"
                                                src="../../assets/img/billboard/IMG_0825.JPG" alt="...">
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-3 mb-3 mb-md-0">
                            <a class="" data-bs-toggle="modal" data-bs-target="#verticallyCentered"> <img
                                    class="card-img-top" src="../../assets/img/billboard/IMG_0829.JPG"
                                    alt="..."> </a>
                            <p class="card-text text-end">
                                <small class="text-muted ">Posted 8 December 2022</small>
                            </p>
                            <div class="modal fade" id="verticallyCentered" tabindex="-1"
                                aria-labelledby="verticallyCenteredModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">

                                        <div class="modal-body">
                                            <img class="card-img-top"
                                                src="../../assets/img/billboard/IMG_0829.JPG" alt="...">
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>
            </div>


            

            <!-- Center-->
            <nav aria-label="Page navigation example m-5">
                <ul class="pagination justify-content-center">
                    <li class="page-item"><a class="page-link" href="#" tabindex="-1"
                            aria-disabled="true">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item active" aria-current="page"><a class="page-link" href="#">4</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>

        </div>
        <div class="tab-pane fade" id="tab-Map" role="tabpanel" aria-labelledby="Map-tab">
            <!--   Google Maps-->
            <div id="map" style="height: 500px;
    width: 100%;"></div>

        </div>
    </div>


</div>
    `;
    
    container.appendChild(postElement);
  }