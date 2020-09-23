Vue.component('nav-header', {
  template: `
    <nav class="navbar">
        <h1 class="company-name">Edie</h1>
        <ul class="menu">
            <li class="menu-options"><a href="#home">Home</a></li>
            <li class="menu-options"><a href="#services">Services</a></li>
            <li class="menu-options"><a href="#projects">Our works</a></li>
            <li class="menu-options"><a href="#clients">Clients</a></li>
            <li class="menu-options"><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    `
})

Vue.component('nav-header-mobile', {
  template: `
  <nav class="navbar-mobile">
      <h1 class="company-name">Edie</h1>
      <i class="fas fa-bars hamburger-menu"></i>
      <ul class="menu-mobile">
        <li class="menu-options"><a href="#home">Home</a></li>
        <li class="menu-options"><a href="#services">Services</a></li>
        <li class="menu-options"><a href="#projects">Our works</a></li>
        <li class="menu-options"><a href="#clients">Clients</a></li>
        <li class="menu-options"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  `
})

Vue.component('home-conteiner', {
  template: `
    <div id="home" class="home-conteiner">
    <div class="top-content">
      <h3>Unhappy with your website?</h3>
      <h1>We create a beatiful and fast wev services</h1>
    </div>
    <img src="./IMG/heroImage.jpg" alt="team working" class="cover-img">
    <div class="bottom-content">
      <h1>Story, emotion and purpose</h1>
      <p>We help transform your ideas into real world applications that will outperfom your toughest competition and
        help you achieve your strategic goals in shor period of time.</p>
      <div class="want-us-contact">
        <p>Want us to contact you?</p>
        <form class="form-user-contact">
          <input type="email" placeholder="eufraniodiog@gmail.com">
          <button type="submit">Join</button>
        </form>
      </div>
    </div>
  </div>
    `
})

Vue.component('services-conteiner', {
  template: `
    <div id="services" class="services-conteiner">
        <div class="title-conteiner">
          <h2>We offer high demand services</h2>
        </div>
        <div class="services-provided">
          <a href="#" class="services-link">
            <div class="service-type">
              <i class="fas fa-palette service-icon"></i>
              <h1 class="service-name">UI/UX Design</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus delectus debitis fuga! Numquam,
                ex sed est itaque odit distinctio nobis?</p>
              <button class="get-started-button">
                Get started
              </button>
            </div>
          </a>

          <a href="#" class="services-link">
            <div class="service-type">
              <i class="fas fa-code service-icon"></i>
              <h1 class="service-name">Fronted</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus delectus debitis fuga! Numquam,
                ex sed est itaque odit distinctio nobis?</p>
              <button class="get-started-button">
                Get started
              </button>
            </div>
          </a>

          <a href="#" class="services-link">
            <div class="service-type">
              <i class="fas fa-server service-icon"></i>
              <h1 class="service-name">Back End</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus delectus debitis fuga! Numquam,
                ex sed est itaque odit distinctio nobis?</p>
              <button class="get-started-button">
                Get started
              </button>
            </div>
          </a>

        </div>
      </div>
    `
})

Vue.component('projects-already-done', {
  template: `
    <div id="projects" class="projects-already-done">
        <div class="projects-already-done-title-conteiner">
          <h1 class="projects-already-done-title">Good design means good business</h1>
        </div>
        <div class="projects-preview">
          <div class="project-preview">
            <div class="project-img-conteiner">
              <img src="IMG/onboard.png" alt="" class="project-img">
            </div>
            <div class="project-desc-conteiner">
              <h4 class="project-type">UX/UI design</h4>
              <h3 class="project-description">Smart home dashboard</h3>
            </div>
          </div>

          <div class="project-preview">
            <div class="project-img-conteiner">
              <img src="IMG/booking.png" alt="" class="project-img">
            </div>
            <div class="project-desc-conteiner">
              <h4 class="project-type">UX/UI design</h4>
              <h3 class="project-description">Smart home dashboard</h3>
            </div>
          </div>

          <div class="project-preview">
            <div class="project-img-conteiner">
              <img src="IMG/smarthome.jpg" alt="" class="project-img">
            </div>
            <div class="project-desc-conteiner">
              <h4 class="project-type">UX/UI design</h4>
              <h3 class="project-description">Smart home dashboard</h3>
            </div>
          </div>

          <div class="project-preview">
            <div class="project-img-conteiner">
              <img src="IMG/juice-product.png" alt="" class="project-img">
            </div>
            <div class="project-desc-conteiner">
              <h4 class="project-type">UX/UI design</h4>
              <h3 class="project-description">Smart home dashboard</h3>
            </div>
          </div>

        </div>
        <a href="#" class="see-more">see more</a>
      </div>
    `
})

Vue.component('clients', {
  template: `
  <div id="clients" class="meet-the-team">
        <div class="content-conteiner">
          <h3>Meet the team</h3>
          <h2>We are chilled and laidback team</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates placeat numquam, et blanditiis velit
            necessitatibus.</p>
        </div>
        <div class="team-pictures">
          <img src="IMG/person1.png" alt="">
          <img src="IMG/person2.png" alt="">
          <img src="IMG/person3.png" alt="">
        </div>
      </div>
  `
})

Vue.component('clients-experience', {
  template: `
  <div class="clients-experience">

        <h1>User experiences</h1>
        <div class="client-experience-conteiner">

          <div class="client-experience">
            <div class="client-message">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloremque iure eius et quas enim officia
                obcaecati praesentium suscipit eveniet totam harum, maiores, veritatis non! Ratione saepe laudantium hic
                exercitationem fugiat optio, rem porro magnam placeat delectus mollitia tempora veniam et dignissimos
                beatae modi, enim odit voluptatem consectetur? Officia, molestiae?</p>
            </div>
            <div class="client-profile">
              <img src="IMG/person1.png" alt="" class="client-img">
              <div class="client-info">
                <h3>Carlos Tran</h3>
                <p>The Decorate Gatsby</p>
              </div>
            </div>
          </div>

        </div>
      </div>
  `
})

Vue.component('footer-component', {
  template: `
  <footer id="contact">
      <ul class="footer-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Our Works</a></li>
        <li><a href="#clients">Clients</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div class="socials-medias">
        <h1>Edie</h1>
        <ul class="social-media-conteiner">
          <li><img src="IMG/instagram.svg" alt="Icon Instragram"></li>
          <li><img src="IMG/linkedin.svg" alt="Icon Linkedin"></li>
          <li><img src="IMG/twitter.svg" alt="Icon Twitter"></li>
        </ul>
      </div>

      <div class="want-us-contact">
        <p>Want us to contact you?</p>
        <form class="form-user-contact">
          <input type="email" placeholder="eufraniodiog@gmail.com">
          <button type="submit">Join</button>
        </form>
      </div>

      <h3 class="author">Eufranio Diogo @ DevChallenges</h3>

    </footer>
  `
})


let app = new Vue({
  el: '.main',
  data: {
    menuVisible: false,
  },
  methods: {

  }
})

let menuVisible = false;




function switchMenu() {
  if (!menuVisible) {
    document.querySelector('.menu-mobile').style.display = 'flex';
    menuVisible = true;
  } else {
    document.querySelector('.menu-mobile').style.display = 'none';
    menuVisible = false;
  }
}

if (window.innerWidth <= 750) {
  let itens = document.querySelectorAll('.menu-mobile li  a')

  for (let i = 0; i < itens.length; i++) {
    itens[i].addEventListener('click', () => {
      document.querySelector('.menu-mobile').style.display = 'none';
      menuVisible = false;
    })
  }
}

document.querySelector('.hamburger-menu').addEventListener('click', switchMenu)