<template>
  <div v-if="saveData">
    <template v-if="!final">
      <div class="alert alert-success">Valid save data detected... here's the info.</div>
      <h4>You have played {{ saveData.TOTAL_TIME}} hours.</h4>
      <hr />
    </template>
    <template v-else>
        <div class="alert alert-warning">This will be your final save data, becareful!</div>
        </template>
    <p>
      Units:
      <b>{{ saveData.UNITS }}</b>
    </p>
    <p>
      Nanites:
      <b>{{ saveData.NANITES }}</b>
    </p>
    <p>
      QuickSilver:
      <b>{{ saveData.QUICKSILVER }}</b>
    </p>
    <p>
      Current game mode:
      <b :class="[difficultyGameMode]">{{ $gameModeTxt }}</b>
    </p>
  </div>
</template>

<script>
import SaveEditor from "./../save-data";

export default {
  props: {
    saveData: {
      type: Object,
      default: null
    },
    final: {
      type: Boolean,
      default: false
    },
    finalTxt: {
        type: String,
        default: null
    }
  },
  computed: {
    $gameMode() {
      return this.saveData
        ? parseFloat(this.saveData.GAME_MODE_ID.toString().substr(0, 2))
        : null;
    },
    $gameModeTxt() {
      switch (this.$gameMode) {
        case SaveEditor.difficulty.NORMAL:
          return "NORMAL";
        case SaveEditor.difficulty.SURVIVAL:
          return "SURVIVAL";
        case SaveEditor.difficulty.CREATIVE:
          return "CREATIVE";
      }
      return "UNKNOWN (PERMADEATH MAYBE?)";
    },
    difficultyGameMode() {
      switch (this.$gameMode) {
        case SaveEditor.difficulty.NORMAL:
          return "text-info";
        case SaveEditor.difficulty.SURVIVAL:
          return "text-primary";
        case SaveEditor.difficulty.CREATIVE:
          return "text-success";
      }
      return "text-danger";
    }
  }
};
</script>

<style>
</style>