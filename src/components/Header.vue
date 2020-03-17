<template>
  <!---<div class="container is-fluid">
    <h1 class="title">Front PAge</h1>
  </div>-->
  <div>
    <div class="hero-body level">
      <div class="container level-left">
        <h1 class="title nurture-title is-flex-mobile">Nurture Wellness Studio</h1>
      </div>
      <div class="container level-right">
        <ul>
          <li>Phone: 828-400-9616</li>
          <li>jackiebeecher50@gmail.com</li>
          <li>Bryson City, NC</li>
        </ul>
      </div>
    </div>
    <nav class="navbar has-background-grey-light" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          @click="hamburg = !hamburg"
          :class="{ 'is-active': hamburg}"
          data-target="nurture-wellness-nav"
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div id="nurture-wellness-nav" class="navbar-menu" :class="{ 'is-active': hamburg}">
        <div class="navbar-start tabs is-toggle is-toggle-rounded">
          <a class="navbar-item">Home</a>
          <a class="navbar-item">Massage</a>
          <a class="navbar-item">Yoga</a>
          <a class="navbar-item">Acupuncture</a>
          <a class="navbar-item">Contact</a>
        </div>
        <!-- <div class="tabs is-toggle is-fullwidth is-large">
          <ul>
            <li class="is-active">
              <a>
                <span class="icon">
                  <i class="fas fa-image" aria-hidden="true"></i>
                </span>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon">
                  <i class="fas fa-music" aria-hidden="true"></i>
                </span>
                <span>Massage</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon">
                  <i class="fas fa-film" aria-hidden="true"></i>
                </span>
                <span>Yoga</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon">
                  <i class="far fa-file-alt" aria-hidden="true"></i>
                </span>
                <span>Accupuncture</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon">
                  <i class="far fa-file-alt" aria-hidden="true"></i>
                </span>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>-->
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hamburg: false
    };
  }
};
</script>

<style scoped>
#bulma-hero {
  background-image: url("../assets/fontana-yoga.jpg");
  background-repeat: no-repeat;
  background-attachment: local;
  background-size: initial;
}

.nurture-title {
  font-size: 5rem;
  font-family: "Alice", cursive;
}
/* .navbar-menu a {
  display: inline-block;
  color: black;
  text-align: center;
  padding: 14px;
  text-decoration: none;
  font-size: 17px;
  border-radius: 5px;
}


.navbar-menu a:hover {
  background-color: #ddd;
  color: black;
}


.navbar-menu a.active {
  background-color: dodgerblue;
  color: white;
} */
</style>