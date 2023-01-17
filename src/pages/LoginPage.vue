<template>
  <section class="" style="background-color: #508bfc">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <p>user name : "kminchelle"</p>
              <p>pass : "0lelplR"</p>
              <h3 class="mb-5">Sign in</h3>

              <div class="form-outline mb-4">
                <input
                  type="text"
                  id="typeEmailX-2"
                  class="form-control form-control-lg"
                  v-model="username"
                />
                <label class="form-label" for="typeEmailX-2">Email</label>
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="typePasswordX-2"
                  class="form-control form-control-lg"
                  v-model="password"
                />
                <label class="form-label" for="typePasswordX-2">Password</label>
              </div>

              <button
                class="btn btn-primary btn-lg btn-block"
                type="submit"
                @click.prevent="login"
              >
                Login
              </button>

              <hr class="my-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
          // expiresInMins: 60, // optional
        }),
      });
      const check = await res.json();

      if (res.ok) {
        console.log(check);
        this.$router.push({ name: "checkout" });
      } else {
        alert("invalid");
      }
    },
  },
};
</script>

<style scoped></style>
