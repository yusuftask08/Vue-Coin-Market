<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-dark navbar-linear"
    :class="{ change_color: windowTop > 50 }"
  >
    <div class="container-fluid">
      <a
        class="navbar-brand"
        href="/"
        style="margin-right: 20px; margin-left: 50px"
      >
        <img
          src="https://fontmeme.com/permalink/210430/e2a4bcf352254f362ae0da7347cd4283.png"
          alt="netflix-font"
          style="width: 150px"
          border="0"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Borsa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Piyasa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Yatırma</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Çekme</a>
          </li>
        </ul>
        <form class="d-flex">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >Favorilerim</a
              >
            </li>
          </ul>
          <button class="btn btn-outline-success" type="submit">
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      windowTop: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop; // scrool bar takip ediyorum ve 0 a bağlıyorum
    },
  },
};
</script>

<style>
.change_color {
  background-color: rgb(20, 20, 20) !important;
}
.change_color_a {
  color: #fff;
}
.nav-item a {
  font-size: 15px;
  font-weight: 500;
  color: #000 !important;
}
.btn {
  margin-right: 50px;
}
</style>