<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="8" height="8" rx="1" fill="#FFB600" />
    <rect y="12" width="8" height="8" rx="1" fill="#FFB600" />
    <rect y="24" width="8" height="8" rx="1" fill="#FFB600" />
    <rect x="12" width="8" height="8" rx="1" fill="#FFB600" />
    <rect x="24" width="8" height="8" rx="1" fill="#FFB600" />
    <rect x="12" y="12" width="8" height="8" rx="1" fill="#666666" />
    <rect x="24" y="12" width="8" height="8" rx="1" fill="#666666" />
    <rect x="36" y="12" width="8" height="8" rx="1" fill="#666666" />
    <rect x="12" y="24" width="8" height="8" rx="1" fill="#666666" />
    <rect x="24" y="24" width="8" height="8" rx="1" fill="#666666" />
    <rect x="36" y="24" width="8" height="8" rx="1" fill="#666666" />
    <rect x="12" y="36" width="8" height="8" rx="1" fill="#666666" />
    <rect x="24" y="36" width="8" height="8" rx="1" fill="#666666" />
    <rect x="36" y="36" width="8" height="8" rx="1" fill="#666666" />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: [String, Number],
      default: 44,
      required: false,
    },
    height: {
      type: [String, Number],
      default: 44,
      required: false,
    },
  },
}
</script>
