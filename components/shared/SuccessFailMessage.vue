<template>
  <Toast position="bottom-center" />
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "SuccessSnackbar",
  data: () => ({
    timeout: 3000,
  }),
  computed: {
    ...mapState({
      status: (state) => state.common.status,
      successMsg: (state) => state.common.successMsg,
      requestType: (state) => state.common.requestType,
      errorMsg: (state) => state.common.errorMsg.message,
      errorList: (state) => state.common.errorMsg.list,
      isMultilineError: (state) => state.common.errorMsg.list.length > 0,
    }),
  },
  watch: {
    status() {
      this.openSuccessSnackbar()
      this.setErrorSnackbar()
    },
  },
  methods: {
    openSuccessSnackbar() {
      if (this.status === "success" && this.requestType !== "get") {
        this.$toast.add({
          severity: "success",
          summary: this.successMsg,
          life: this.timeout,
        })
      }
    },
    setErrorSnackbar() {
      if (this.status === "error") {
        const error = this.isMultilineError
          ? this.errorList.join("\n")
          : this.errorMsg
        this.$toast.add({
          severity: "error",
          summary: error,
        })
      }
    },
  },
}
</script>
