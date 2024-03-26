<template>
  <button :type="customType" :class="`hai-button ${customClass}`" :style='{"backgroundColor":colorVal}' :size="customSize" :disabled="disabled">
    <!-- <template v-show="iconType" #icon>
      <component :is="iconType" />
    </template> -->
    <slot />
  </button>
</template>
<script>
import { defineComponent, ref, watch } from "vue";
export default defineComponent({
  name: "HaiButtonIndex",
  props: {
    type: { type: String, default: "" },
    size: { type: String, default: "" },
    icon: { type: String, default: "" },
    color: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
    permission: { type: [String, Boolean], default: true },
  },
  setup(props) {
    const customClass = ref("hai-button-default");
    const customType = ref("");
    const customSize = ref("middle");
    const iconType = ref("");
    const colorVal = ref("")
    watch(
      () => props.type,
      (v) => {
        switch (v) {
          case "yellow":
            customClass.value = "hai-button-yellow";
            customType.value = "default";
            break;
          case "warning":
            customClass.value = "hai-button-warning";
            customType.value = "default";
            break;
          case "error":
            customClass.value = "hai-button-error";
            customType.value = "default";
            break;
          case "success":
            customClass.value = "hai-button-success";
            customType.value = "default";
            break;
          case "primary":
            customClass.value = "hai-button-primary";
            customType.value = "primary";
            break;
          case "cyan":
            customClass.value = "hai-button-cyan";
            customType.value = "default";
            break;
          case "black":
            customClass.value = "hai-button-black";
            customType.value = "default";
            break;
          case "purple":
            customClass.value = "hai-button-purple";
            customType.value = "default";
            break;
          case "text":
            customClass.value = "";
            customType.value = "text";
            break;
          case "link":
            customClass.value = "";
            customType.value = "link";
            break;
          default:
            customClass.value = "hai-button-default";
            customType.value = "default";
            break;
        }
      },
      { immediate: true }
    );
    watch(
      () => props.size,
      (v) => {
        customSize.value = !v ? "middle" : v;
      },
      { immediate: true }
    );
    watch(
      () => props.icon,
      (v) => {
        iconType.value = v;
      },
      { immediate: true }
    );
    watch(
      () => props.color,
      (v) => {
        colorVal.value = v;
      },
      { immediate: true }
    );
    watch(
      () => props,
      () => {},
      { immediate: true }
    );
    return {
      customClass,
      customType,
      customSize,
      iconType,
    };
  },
});
</script>
<style lang="less">
@import url('./index.less');
</style>

