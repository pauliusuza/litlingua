<template>
  <div id="app">
    <div class="half left">
        <div class="nav">
            <h1 class="logo"><router-link to="/"><img src="/static/logo.svg" :alt="$t('sitename')"/></router-link></h1>
            <p class="tagline">{{$t('tagline')}}</p>
            <div v-if="inner()">
                <ul class="menu">
                    <li><router-link :to="'/'+$i18n.locale()+'/about'">{{ $t('about') }}</router-link></li>
                    <li><router-link :to="'/'+$i18n.locale()+'/customers'">{{ $t('customers') }}</router-link></li>
                    <li><router-link :to="'/'+$i18n.locale()+'/prices'">{{ $t('prices') }}</router-link></li>
                    <li><router-link :to="'/'+$i18n.locale()+'/contact'">{{ $t('contact') }}</router-link></li>
                </ul>
                <a class="lang" href="#" @click.prevent="changeLang">
                   {{ $i18n.locale() == 'lt' ? 'NL' : 'LT' }}
                </a>
            </div>
            <div v-else>
                <ul class="menu">
                    <li><router-link to="/lt/about" class="lang-with-coat">{{ $tlang('lt','lang') }} <img src="/static/lt.svg" class="coat" /></router-link></li>
                    <li><router-link to="/nl/about" class="lang-with-coat">{{ $tlang('nl','lang') }} <img src="/static/nl.svg" class="coat" /></router-link></li>
                </ul>
            </div>
        </div>
    </div>
    <div :class="'half right' + (inner() ? ' inner': ' home')">
        <router-view/>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'

export default {
  name: 'app',
  methods: {
    changeLang() {
        let n = this.$router.currentRoute.params.lang == 'lt' ? 'nl' : 'lt';
        let r = this.$router.currentRoute.path.replace('/'+this.$router.currentRoute.params.lang+'/', '/'+n+'/');
        this.$router.push({ path: r });
    },
    inner() {
        return !!this.$router.currentRoute.params.lang;
    }
  }
}
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
}
body {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
*::-moz-selection {
    background: #FAF076;
}
h1, h2, h3 {
    font-family: 'PT Serif', serif;
    margin-top: 0px;
}
h1 a, h2 a, h3 a {
    text-decoration: none;
}
h1 {
    font-weight: 700;
}
h1, a, a:visited {
    color: #338839;
}
p {
    margin: 0;
    padding-top: .5rem;
    padding-bottom: .5rem;
}
h2, h3 {
    font-weight: 400;
}
h4 {
    color: #999;
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;
}
#app {
    color: #2c3e50;
    flex-direction: row;
    min-height: 100%;
    display: flex;
}
.coat {
    max-height: 36px;
    margin-left: 15px;
}
.lang-with-coat {
    display: flex;
    align-items: center;
    justify-content: right;
}
.logo {
    margin: 0;
    padding: 1rem 0;
    font-size: 3em;
}
.logo img {
    max-width: 280px;
}
.tagline {
    font-size: 1.35em;
}
.half {
    flex: 1;
}
.left {
    background-color: #fefefe;
    background-image: url('/static/white.jpg');
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 20px rgba(0,0,0,0.1);
    z-index: 1;
}
.right {
    background-color: #eee;
    background-image: url('/static/concrete_seamless.png');
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.nav {
    text-align: right;
    width: 75%;
    min-height: 50%;
}
ul.menu {
    list-style: none;
    margin: 1.5em 0px;
    padding: 0px;
}
ul.menu li {
    font-size: 1.35em;
    margin-bottom: 0.25em;
}
ul.menu a {
    text-decoration: none;
    color: #0b8913;
}
ul.menu a:hover {
    color: #31ba3e;
}
a.lang {
    color: #fff;
    text-decoration: none;
    background-color: #0b8913;
    border-radius:15px;
    height: 30px;
    width: 30px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 500;
}
a.lang:hover {
    background-color: #31ba3e;
}
ul.menu a:after {
    content: "";
    width: 0px;
    display: inline-block;
    position: relative;
    transition: width 0.5s;
    font-weight: 700;
}
ul.menu a.router-link-exact-active:after {
    content: "\2039";
    width: 15px;
}
.page {
    width: 75%;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    color: #444;
    min-height: 50%;
}
@media (max-width: 600px) {
  html {
    background-color: #eee;
    background-image: url('/static/concrete_seamless.png');
  }
  body {
    height: auto;
  }
  #app {
    flex-direction: column;
  }
  .nav {
    margin-bottom: 2em;
    min-height: auto;
  }
  .left {
    font-size: 80%;
  }
  .right {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  .home {
    display: none;
  }
}
</style>
