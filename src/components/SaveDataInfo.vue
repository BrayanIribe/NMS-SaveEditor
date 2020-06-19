<template>
  <div v-if="saveData">
      <div class="alert alert-success">Valid save data detected... here's the info.</div>
      <h4>You have played {{ saveData.TOTAL_TIME}} hours.</h4>
      <hr />
      <p>Units: <b>{{ saveData.UNITS }}</b></p>
      <p>Nanites: <b>{{ saveData.NANITES }}</b></p>
      <p>QuickSilver: <b>{{ saveData.QUICKSILVER }}</b></p>
      <p>Current game mode: <b :class="[difficultyGameMode]">{{ $gameModeTxt }}</b></p>
    </div>
</template>

<script>
import SaveEditor from './../save-data'

export default {
    props: {
        saveData: {
            type: Object,
            default: null
        }
    },
    computed:{
        $gameMode(){
            return this.saveData ? parseFloat(this.saveData.GAME_MODE_ID.toString().substr(0, 2)) : null
        },
        $gameModeTxt(){
            switch (this.$gameMode){
                case SaveEditor.difficulty.NORMAL: return "NORMAL";
                case SaveEditor.difficulty.SURVIVAL: return "SURVIVAL";
                case SaveEditor.difficulty.CREATIVE: return "CREATIVE";
            }
            return "UNKNOWN (PERMADEATH MAYBE?)";
        }
    }
}
</script>

<style>

</style>