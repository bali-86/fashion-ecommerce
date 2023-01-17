<template>
  <div>
    <section class="news pt-5">
      <div class="container-fluid pt-3 text-white">
        <div class="row">
          <div class="col-lg-11 m-auto">
            <div class="row">
              <div class="col-lg-2">
                <h2 class="pb-3">Catogeries</h2>
                <p class="m-0"><a href="#">Male</a></p>
                <p class="m-0"><a href="#">Female</a></p>
                <p class="m-0"><a href="#">kids</a></p>
                <p class="m-0"><a href="#">Shoes</a></p>
              </div>
              <div class="col-lg-2">
                <h2 class="pb-3">Company</h2>
                <p class="m-0"><a href="#">AboutUS</a></p>
                <p class="m-0"><a href="#">Home</a></p>
                <p class="m-0"><a href="#">FAQ'S</a></p>
                <p class="m-0"><a href="#">Contact</a></p>
              </div>
              <div class="col-lg-3">
                <h2 class="pb-3">Address</h2>
                <p>
                  G-297, Johar Town Lahore <br />
                  +92 304 9636186
                </p>
                <a href="#">bilalafzalba59@gmail.com</a>
              </div>
              <div class="col-lg-5">
                <h2 class="pb-3">Newsletter</h2>
                <form action="" class="d-flex">
                  <input
                    type="text"
                    class="n-letter"
                    placeholder="Enter Your E-mail"
                  />
                  <button class="btns">Subscribe</button>
                </form>
              </div>
            </div>
            <hr />
            <p class="text-center pb-3 ftt">All the rights are reserved</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.news {
  background-color: black;
  font-family: "prompt", sans-serif;
}
.news a {
  text-decoration: none;
  color: white;
  cursor: pointer;
  transition: all 0.4s;
}
.news a:hover {
  color: rgb(218, 11, 105);
  padding-left: 5px;
  /* transition: all 0.4s; */
}
.btns {
  height: 50px;
  width: 40%;
  outline: none;
  background: white;
  color: rgb(218, 11, 105);
  font-weight: bold;
}
</style>
