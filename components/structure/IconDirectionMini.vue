<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="11" stroke="#666666" stroke-width="2" />
    <path
      d="M17 12H7M7 12L10.6364 8M7 12L10.6364 16"
      stroke="#666666"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: [String, Number],
      default: 24,
      required: false,
    },
    height: {
      type: [String, Number],
      default: 24,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped></style>
