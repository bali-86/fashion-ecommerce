<template>
  <div>
    <section class="main bg-light col-lg-12">
      <div class="container text-align-center">
        <div class="row py-5">
          <div class="col-12 col-lg-6 justify-content-center pt-5">
            <p>Winter Fashion</p>
            <h1>Fashion Collection 2022</h1>
            <button class="btn2 mt-3">SHOP NOW</button>
          </div>
          <div class="main-pic col-12 col-lg-6 mt-5"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-pic {
  background: url(../assets/hero-img.jpg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
}

.main p {
  font-size: 1.5rem;
  text-transform: uppercase;
}
.main h1 {
  font-size: 4rem;
  font-weight: 800;
}
.btn2 {
  height: 45px;
  width: 40%;
  color: white;
  outline: none;
  border: none;
  background-color: rgb(218, 11, 105);
  font-weight: bold;
  /* transition: all 0.4s; */
  cursor: pointer;
}
.btn2:hover {
  border: 1px solid rgb(218, 11, 105);
  background: transparent;
  color: rgb(218, 11, 105);
  transition: all 0.9s;
}
</style>
