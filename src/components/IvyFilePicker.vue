<template>
  <div
    class="ivy-file-picker"
    v-cloak
    @drop.prevent="dropFile"
    @dragover.prevent
    @click="$refs.filePicker.click()"
    :class="[$errorClass]"
  >
    <div class="text-center">
      <img src="/img/drag-drop.jpg" style="height:3rem; opacity:0.7" class="mb-3" />
      <p class="w-100 text-lighter">{{ file ? file.name : text }}</p>
    </div>

    <input ref="filePicker" @change="pickFile()" type="file" accept=".hg" style="display:none" />
  </div>
</template>

<script>
export default {
  name: "IvyFilePicker",
  props: {
    text: {
      type: String,
      default: null
    },
    errorText: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      error: false,
      file: null
    };
  },
  watch: {
    error(v) {
      if (!v) return;
      setTimeout(() => {
        this.error = false;
      }, 1200);
    }
  },
  computed: {
    $errorClass() {
      return this.error ? "border-danger text-danger error" : "";
    }
  },
  methods: {
    // process file for Drag'n'Drop
    dropFile($e) {
      let files = $e.dataTransfer.files;
      if (!files) return;

      this.processFile(files[0]);
    },
    // process file for file picker
    pickFile() {
      const files = this.$refs.filePicker.files;
      if (!files.length) {
        this.throwError();
        return;
      }


      this.processFile(files[0]);
      this.$refs.filePicker.value = '';
    },
    throwError() {
      this.error = true;
      this.$bvToast.toast(this.errorText, {
        title: "Error",
        variant: "danger",
        autoHideDelay: 5000
      });
    },
    processFile(file) {
      const ext = file.name.split(".")[1].toUpperCase();

      if (ext !== "HG") {
        this.throwError();
        return;
      }

      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = evt => {
        if (!evt.target.result) {
          this.throwError();
          return;
        }
        const fileContents = evt.target.result;
        this.$emit("input", {filename: file.name, data: fileContents});
        this.file = file;
        console.log(fileContents)
      };
      reader.onerror = () => {
        this.throwError();
      };
    }
  }
};
</script>

<style>
.ivy-file-picker {
  cursor: pointer;
  width: 100%;
  border: 3px dashed #ccc;
  border-radius: 0.25rem;
  height: 10rem;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ivy-file-picker.error {
  animation: shakeX;
  animation-duration: 0.75s; /* don't forget to set a duration! */
}
</style>