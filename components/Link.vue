<template>
  <div
    class="w-full sm:w-96 rounded-xl bg-white px-4 py-2 flex mt-4 relative link-box cursor-pointer hover:bg-pink-50 transition-all duration-200"
    @click="onClick"
    @click.middle="onClick"
  >
    <div class="flex-shrink-0 flex flex-col justify-center">
      <img
        :class="{
          'w-16 h-16 text-blue-500': 1,
          rounded: rounded,
          'rounded-full': roundedFull,
        }"
        :src="icon"
        :alt="iconAlt"
        width="64"
        height="64"
      />
    </div>
    <div class="flex flex-col ml-3 justify-center">
      <span class="font-bold leading-2 title transition-all duration-300">{{
        title
      }}</span>
      <span class="text-xs font-light">{{ subtitle }}</span>
      <a
        ref="link"
        class="font-light text-blue-600 link transition-all duration-300 break-all"
        :href="href"
        target="_blank"
        rel="noopener"
      >
        {{ cleanHref }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Link extends Vue {
  @Prop({ type: String, required: true }) readonly href!: string
  @Prop({ type: String, required: true }) readonly title!: string
  @Prop({ type: String, required: true }) readonly icon!: string
  @Prop({ type: String, required: true }) readonly iconAlt!: string
  @Prop({ type: String, default: '' }) readonly subtitle!: string
  @Prop({ type: Boolean, default: true }) readonly rounded!: boolean
  @Prop({ type: Boolean, default: false }) readonly roundedFull!: boolean

  get cleanHref() {
    const url = new URL(this.href)
    return (
      (url.hostname.startsWith('www.')
        ? url.hostname.substr(4)
        : url.hostname) +
      url.pathname +
      url.search
    )
  }

  onClick(e: MouseEvent) {
    e.stopPropagation()

    const noTextSelected = !window.getSelection()?.toString()

    if (noTextSelected) {
      ;(this.$refs.link as HTMLAnchorElement).click()
    }
  }
}
</script>

<style lang="scss" scoped>
.link-box {
  $border: 3px;
  background-clip: padding-box;
  border: solid $border transparent;

  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -$border;
    border-radius: inherit;
    background: linear-gradient(
      90deg,
      rgba(255, 118, 164, 1) 0%,
      rgba(235, 179, 223, 1) 100%
    );
  }

  &:hover .title {
    @apply text-pink-600;
  }

  &:hover .link {
    @apply text-blue-800;
  }
}
</style>
