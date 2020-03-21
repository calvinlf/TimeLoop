<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <router-link to="/"><img class="plain" src="/images/logo.png" alt="logo"></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-item nav-link text-info" to="/about">About</router-link>
        </div>
        <div class="navbar-nav">
          <router-link class="nav-item nav-link text-info" to="/play">Start</router-link>
        </div>
      </div>
    </nav>
    <router-view/>
    <footer class="bg-dark">
      <p><a href="https://github.com/calvinlf/TimeLoop" class="text-info">GitHub Repo for nerds</a></p>
    </footer>
  </div>
</template>

<style>
  .btn {
    margin: 5px !important;
  }

  .bg-dark {
    background-color: #34495E !important;
  }

  .bg-light {
    background-color: #D8E8F2 !important;
  }

  .bg-primary {
    background-color: rgb(69, 134, 191) !important;
  }

  .bg-secondary {
    background-color: rgb(68, 120, 166) !important;
  }

  .bg-info {
    background-color: rgb(137, 179, 217) !important;
  }

  .text-dark {
    color-color: #34495E !important;
  }

  .text-light {
    color: #D8E8F2 !important;
  }

  .text-primary {
    color: rgb(69, 134, 191) !important;
  }

  .text-secondary {
    color: rgb(68, 120, 166) !important;
  }

  .text-info {
    color: rgb(137, 179, 217) !important;
  }

  footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
  }

  html {
    background: #D8E8F2;
  }

  .centered {
    padding-left: 25%;
    padding-right: 25%;
  }

  .spaced {
    padding-bottom: 100px;
  }

  .grid {
    display: grid;
    grid-template-columns: 30px 30px 30px;
    grid-template-rows: 30px 30px 30px;
    justify-content: center;
  }
</style>
