<template>
  <div class="mb-8 px-2 md:px-0 w-full">
    <SocialHead
      title="JennyKittyBaby"
      description="Genderfluid amateuer porn person"
    />
    <div class="w-full shadow-lg overflow-hidden flex">
      <picture class="w-full h-20v">
        <source
          :srcset="img.banner.webp.srcSet"
          type="image/webp"
          sizes="100vw"
        />
        <source
          :srcset="img.banner.jpg.srcSet"
          sizes="100vw"
          type="image/jpeg"
        />
        <img
          ref="banner"
          class="object-cover w-full h-20v"
          :src="img.banner.jpg.src"
          sizes="100vw"
          alt="Banner image showing pink thigh highs, a BunnyHopps diaper, kitty ears, a pink chastity cage and a magic wand."
          @load="img.banner.loaded = true"
        />
      </picture>
      <img
        :class="
          'object-cover h-20v w-full' + (img.banner.loaded ? ' fade-slow' : '')
        "
        :src="img.banner.placeholder"
        aria-hidden
        style="margin-left: -100%"
      />
    </div>
    <div class="w-full">
      <div class="flex -mt-12 sm:-mt-16 md:-mt-24 justify-center">
        <picture>
          <source
            :srcset="img.profile.webp.srcSet"
            type="image/webp"
            sizes="192px"
          />
          <source
            :srcset="img.profile.jpg.srcSet"
            sizes="192px"
            type="image/jpeg"
          />
          <img
            ref="profile"
            :class="profileClasses"
            :src="img.profile.jpg.src"
            sizes="192px"
            alt="Portrait picture of Jenny Kitty Baby"
            width="192"
            height="192"
            @load="img.profile.loaded = true"
          />
        </picture>
        <img
          :class="profileClasses + (img.profile.loaded ? ' fade-fast' : '')"
          :src="img.profile.placeholder"
          aria-hidden
          width="192"
          height="192"
          style="margin-left: -192px"
        />
      </div>
      <div class="grid justify-items-center flex-col w-full">
        <h1 class="font-display mt-2 pt-8 text-xl sm:text-2xl md:text-3xl">
          JennyKittyBaby
        </h1>
        <p class="max-w-full md:max-w-lg text-center mt-8 font-light">
          Hi I'm Jenny, genderfluid (she/it/he) amateuer porn person.
          <br />
          Say hi or support me on the websites below :3
        </p>
        <Link
          class="mt-8"
          title="💖 Become a fan 💖"
          subtitle="$5/month to access all my content! :3"
          href="https://justfor.fans/JennyKittyBaby"
          icon="~assets/icons/jff.jpg"
          icon-alt="Just For Fans Logo"
        />
        <Link
          title="Best place to contact me"
          subtitle="...and just generally where I'm most active"
          href="https://twitter.com/JennyKittyBaby"
          icon="~assets/icons/twitter.svg"
          icon-alt="Twitter Logo"
        />
        <Link
          title="Ask me stuff!"
          subtitle="Ask pretty much anything, just don't be rude"
          href="https://curiouscat.qa/JennyKittyBaby"
          icon="~assets/icons/curiouscat.svg"
          icon-alt="Curious Cat Logo"
        />
        <Link
          title="Buy me stuff :3"
          subtitle="Note: Amazon US even tho I'm in Denmark"
          href="https://www.amazon.com/hz/wishlist/ls/3L878J496FC21"
          icon="~assets/icons/amazon.png"
          icon-alt="Amazon Wishlists Icon"
        />
        <Link
          title="Fetlife"
          subtitle="No idea how to use it! :P"
          href="https://fetlife.com/users/12739819"
          icon="~assets/icons/fetlife.svg"
          icon-alt="Fetlife Logo"
        />
        <Link
          title="Reddit"
          subtitle="Please bug me to post more here xD"
          href="https://www.reddit.com/user/JennyKittyBaby"
          icon="~assets/icons/reddit.svg"
          icon-alt="Reddit Logo"
        />
        <p class="max-w-full md:max-w-lg text-center mt-4 mb-2 font-light">
          I also have accounts on these sites, mostly as a precaution in case
          Twitter purges NSFW content.
        </p>
        <Link
          title="Switter"
          href="https://switter.at/web/accounts/743297"
          icon="~assets/icons/switter.jpg"
          icon-alt="SwitterLogo"
          rounded-full
        />
        <Link
          title="Pillowfort"
          href="https://pillowfort.social/JennyKittyBaby"
          icon="~assets/icons/pillowfort.jpg"
          icon-alt="Pillowfort Logo"
          rounded-full
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

const img = {
  banner: {
    webp: require('~/assets/banner.jpg?resize&sizes[]=600&sizes[]=1000&sizes[]=1200&sizes[]=1400&sizes[]=1600&sizes[]=1800&sizes[]=2000&sizes[]=2500&sizes[]=3000&format=webp'),
    jpg: require('~/assets/banner.jpg?resize&sizes[]=600&sizes[]=1000&sizes[]=1200&sizes[]=1400&sizes[]=1600&sizes[]=1800&sizes[]=2000&sizes[]=2500&sizes[]=3000&format=jpg'),
    placeholder: require('~/assets/banner.jpg?lqip'),
    loaded: false,
  },
  profile: {
    webp: require('~/assets/profile.jpg?resize&sizes[]=100&sizes[]=250&sizes[]=500&sizes[]=750&sizes[]=1000&format=webp'),
    jpg: require('~/assets/profile.jpg?resize&sizes[]=100&sizes[]=250&sizes[]=500&sizes[]=750&sizes[]=1000&format=jpg'),
    placeholder: require('~/assets/profile.jpg?lqip'),
    loaded: false,
  },
}

@Component
export default class Index extends Vue {
  img = img

  profileClasses =
    'inline-block h-24 w-24 sm:h-32 sm:w-32 md:h-48 md:w-48 rounded-full ring-4 ring-white object-cover shadow-lg relative'
}
</script>

<style>
.fade-slow {
  animation: 1s ease-in 0s 1 forwards fade;
}
.fade-fast {
  animation: 0.2s ease-in 0s 1 forwards fade;
}

@keyframes fade {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
