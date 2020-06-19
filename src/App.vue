<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">No Man's Sky Difficulty Editor</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" @click="english = !english">{{ english ? 'Español' : 'English'}}</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <div class="nmsWallpaper mb-5" :class="[$bindParallax]" />
    <div class="container">
      <h4>{{ $lang.WELCOME_TEXT }}</h4>
      <hr />
      <div class="alert alert-warning" v-html="$lang.WARNING_RISK_DIALOG" />
      <p>{{ $lang.SHORT_DESC }}</p>
      <Step :data="e" v-for="e in $lang.steps" :key="e.id" class="mb-5" />
      <hr />
      <IvyFilePicker :text="$lang.DRAG_N_DROP_SV" :errorText="$lang.ERROR_WRONG_SV" />
      <div class="mb-5 d-block w-100"></div>
      <h4>Disclaimer</h4>
      <hr />
      <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
    </div>
  </div>
</template>

<script>
import { es, en } from "./dictionary";
import Step from './components/Step';
import IvyFilePicker from './components/IvyFilePicker'

export default {
  name: "App",
  components: {
    Step,
    IvyFilePicker
  },
  data() {
    return {
      bottom: false,
      english: true
    };
  },
  computed: {
    $bindParallax() {
      return this.bottom ? "bottom" : "";
    },
    $lang() {
      return this.english ? en : es;
    }
  },
  created() {
    document.title = "No Man's Sky Difficulty Editor";
    setTimeout(() => {
      this.bottom = true;
    }, 100);
  }
};
</script>

<style>
.nmsWallpaper {
  width: 100%;
  height: 20rem;
  background-image: url("https://images4.alphacoders.com/601/thumb-1920-601048.jpg");
  background-position-y: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: background-position-y 5s ease;
}

.nmsWallpaper.bottom {
  background-position-y: bottom;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
