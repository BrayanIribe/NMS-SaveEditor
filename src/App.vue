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
      <div class="row mb-3">
        <div class="col-sm-6 mb-3">
          <div class="alert alert-info">{{ $lang.SRC_SAVE_DATA }}</div>
          <IvyFilePicker
            @input="parseSrcSaveData"
            :text="$lang.DRAG_N_DROP_SV"
            :errorText="$lang.ERROR_WRONG_SV"
            class="mb-3"
          />
          <SaveDataInfo :save-data="srcSaveData" v-if="srcSaveData" class="mb-3" />
        </div>
        <div class="col-sm-6 mb-3">
          <div class="alert alert-info">{{ $lang.DEST_SAVE_DATA }}</div>
          <IvyFilePicker
            @input="parseDestSaveData"
            :text="$lang.DRAG_N_DROP_SV"
            :errorText="$lang.ERROR_WRONG_SV"
            class="mb-3"
          />
          <SaveDataInfo :save-data="destSaveData" v-if="destSaveData" class="mb-3" />
        </div>
      </div>
      <template v-if="srcSaveData && destSaveData">
        <h4>Final save data</h4>
        <hr />
        <SaveDataInfo :save-data="finalSaveData" v-if="finalSaveData" class="mb-3" final :final-txt="$lang.FINAL_SV_TEXT"/>
        <b-button variant="danger" @click="downloadFinalSave">{{ $lang.DOWNLOAD_BT_TEXT }}</b-button>
      </template>
      <div class="mb-5 d-block w-100"></div>
      <h4>Disclaimer</h4>
      <hr />
      <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
    </div>
    <div class="w-100 bg-dark d-block text-center text-light" style="padding:1rem;">
      <img src="https://avatars2.githubusercontent.com/u/520683?s=460&u=4c84240f1443770a9df9096cf2965862a2a2f279&v=4" style="max-height:60px" class="rounded-circle mr-3" /> <span>Developed with ❤️ by Brayan Iribe. <a href="https://github.com/BrayanIribe">Visit me on GitHub!</a></span>
    </div>
  </div>
</template>

<script>
import { es, en } from "./dictionary";
import Step from "./components/Step";
import IvyFilePicker from "./components/IvyFilePicker";
import SaveDataInfo from "./components/SaveDataInfo";
import SaveEditor from "./save-data";
import download from "downloadjs"

export default {
  name: "App",
  components: {
    Step,
    IvyFilePicker,
    SaveDataInfo
  },
  data() {
    return {
      bottom: false,
      english: true,
      srcSaveData: null,
      destSaveData: null,
      finalSaveData: null
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
  methods: {
    generateFinalSaveData() {
      if (!this.srcSaveData || !this.destSaveData) {
        this.finalSaveData = null;
        return null;
      }

      this.finalSaveData = JSON.parse(JSON.stringify(this.destSaveData));
      this.finalSaveData.GAME_MODE_ID = this.srcSaveData.GAME_MODE_ID;
    },
    parseSrcSaveData(v) {
      this.srcSaveData = SaveEditor.parse(v.data, v.filename);
      console.log(this.srcSaveData);
      this.generateFinalSaveData();
    },
    parseDestSaveData(v) {
      this.destSaveData = SaveEditor.parse(v.data, v.filename);
      console.log(this.destSaveData);
      this.generateFinalSaveData();
    },
    downloadFinalSave(){
      if (!this.finalSaveData)
      return null;

      // finalSaveData is a clone of dest with no funcs, so work directly on dest...

      const f = SaveEditor.parse(this.destSaveData.raw);
      f.GAME_MODE_ID = this.srcSaveData.GAME_MODE_ID;

      // so now, add verifier byte

      const p = f.generate();
      console.log(JSON.stringify(p));

      download(JSON.stringify(p) + f.verifierByte, this.destSaveData.filename);

    }
  },
  created() {
    const lang = navigator.language || navigator.userLanguage;
    if (lang.toUpperCase().substr(0, 2) === 'ES'){
      this.english = false;
    }
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

html, body {
  margin-bottom: 0;
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
