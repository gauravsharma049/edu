function footer() {
  return (
    `<footer class="bg-light text-center text-lg-start">
    <div class="container p-4">
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase">Footer Content</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est atque cumque eum delectus sint!</p>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>
          <ul class="list-unstyled mb-0">
            <li><a href="#!" class="text-dark">Link 1</a></li>
            <li><a href="#!" class="text-dark">Link 2</a></li>
            <li><a href="#!" class="text-dark">Link 3</a></li>
            <li><a href="#!" class="text-dark">Link 4</a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>
          <ul class="list-unstyled mb-0">
            <li><a href="#!" class="text-dark">Link 1</a></li>
            <li><a href="#!" class="text-dark">Link 2</a></li>
            <li><a href="#!" class="text-dark">Link 3</a></li>
            <li><a href="#!" class="text-dark">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2021 YourSite.com
    </div>
  </footer>
  `
  );
}

function navbar(){
    return (
        `<nav class="navbar navbar-expand-md navbar-light bg-warning">
        <div class="container-fluid">
          <a class="navbar-brand" href="/"><img height="40px" src="images/logo.png" alt="Logo"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="edu/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/articles.html">Articles</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/tutorials.html">Tutorials</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/faq.html">FAQ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contactus.html">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>`
    );
}

//function to write in the document body
function writeInBody() {
    document.getElementsByTagName('navbar')[0].innerHTML = navbar();
    document.getElementsByTagName('footer')[0].innerHTML = footer();
}

writeInBody();

