<template>
  <client-only>
    <section class="min-h-screen w-full bg-[#718f67] overflow-hidden">
      <VueSlickCarousel @beforeChange="handleSwipe" ref="carousel">
        <div v-for="item in musicArr" :key="item.id" class="flex justify-center mt-20">
          <img @click="playNotification()" src="@/static/images/record.png" :alt="item.title" class="h-64 w-64 md:h-80 md:w-80 duration-300 mx-auto cursor-pointer" :class="{'animate-spin': isSpin}">
          <h2 class="text-center text-white text-2xl font-bold mt-10">{{ item.title }}</h2>
        </div>
      </VueSlickCarousel>
      <div class="w-screen flex flex-col align-center mt-6">
        <input @change="changeDuration" v-model="currentTime" :style="runTime" min="0" :max="duration" step="1" type="range" class="timeBar w-[80%] md:w-[30%]">
        <div class="flex align-center justify-center mt-4">
          <fa @click="changeMusic(false)" icon="fa-solid fa-backward-fast" class="text-white cursor-pointer text-2xl" />
          <fa v-if="!isPlay" @click="playNotification()" icon="fa-solid fa-play" class="text-white text-2xl cursor-pointer mx-10" />
          <fa v-else @click="playNotification()" icon="fa-solid fa-pause" class="text-white text-2xl cursor-pointer mx-10" />
          <fa @click="changeMusic(true)" icon="fa-solid fa-forward-fast" class="text-white text-2xl cursor-pointer" />
        </div>
        <div class="w-full flex justify-center mt-6 gap-2">
          <button v-if="gainNode != 0" @click="cacheGainNode = gainNode, gainNode = 0, changeVolume()">
            <fa icon="fa-solid fa-volume-high" class="text-white text-2xl" />
          </button>
          <button v-else @click="gainNode = cacheGainNode, changeVolume()">
            <fa icon="fa-solid fa-volume-xmark" class="text-white text-2xl" />
          </button>
          <input @change="changeVolume" v-model="gainNode" min="0" max="1" step="0.01" type="range" :style="volumeVal" class="changeVolume mt-7">
        </div>
      </div>
    </section>
  </client-only>
</template>

<script>
import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'IndexPage',
  components: { VueSlickCarousel, RangeSlider },
  data() {
    return {
      musicArr: [
        {id: 1, title: 'Emberz - Embers', sound: require('@/static/music/embers.mp3').default},
        {id: 2, title: '告五人十首精選歌曲', sound: require('@/static/music/告五人Accusefive.mp3').default},
        {id: 3, title: '周杰倫15首精選', sound: require('@/static/music/jaychou.mp3').default}
      ],
      isPlay: false,
      audio: null,
      duration: 100,
      currentTime: 0,
      isSpin: false,
      audioVolume: 1,
      gainNode: 0.5,
      cacheGainNode: 0,
      currentItem: 0
    }
  },
  watch: {
    gainNode: function() {
      this.audioVolume = this.gainNode
    }
  },
  computed: {
    runTime() {
      let duration = parseInt(this.currentTime / this.duration * 100 + 1)
      return `backgroundSize: ${duration}% 100%`
    },
    volumeVal() {
      return `backgroundSize: ${(this.gainNode / 1) * 100}% 100%`
    }
  },
  methods: {
    handleSwipe(oldSlideIndex, newSlideIndex) {
      if (this.audio) {
        this.audio.pause()
        this.audio = null
      }
      if (this.isPlay) {
        this.isPlay = false
        this.isSpin = false
        this.audio = new Audio(this.musicArr[newSlideIndex].sound)
        this.currentTime = 0
        this.currentItem = newSlideIndex
        this.audioVolume = this.audio.volume
        this.audioVolume = this.gainNode

        setTimeout(() => {
          this.isPlay = true
          this.isSpin = true
        }, 500)

        setTimeout(() => {
          this.duration = parseInt(this.audio.duration)
          this.audio.play()
          const playerTimer = setInterval(() => {
            if (this.audio) {
              this.currentTime = parseInt(this.audio.currentTime)
            } else {
              clearInterval(playerTimer)
            }
            if (this.currentTime === this.duration) {
              this.isPlay = false
              this.isSpin = false
              clearInterval(playerTimer)
            }
          }, 1000)
        }, 1000)
      } else {
        this.audio = new Audio(this.musicArr[newSlideIndex].sound)
        this.currentTime = 0
        this.currentItem = newSlideIndex
      }
    },
    changeVolume() {
      if (this.audio) this.audio.volume = this.gainNode
    },
    changeDuration() {
      if (this.audio) this.audio.currentTime = this.currentTime
    },
    playNotification() {
      this.isSpin = !this.isSpin
      if (this.isPlay) {
        this.isPlay = false
        this.audio.pause()
      } else {
        this.audioVolume = this.audio.volume
        this.audioVolume = this.gainNode
        this.duration = parseInt(this.audio.duration)
        this.isPlay = true
        this.audio.play()

        const playerTimer = setInterval(() => {
          if (this.audio) {
            this.currentTime = parseInt(this.audio.currentTime)
          } else {
            clearInterval(playerTimer)
          }
          if (this.currentTime === this.duration) {
            this.changeMusic(true)
            clearInterval(playerTimer)
          }
        }, 1000)
      }
    },
    changeMusic(bool) {
      if (bool) {
        this.$refs.carousel.next()
      } else {
        this.$refs.carousel.prev()
      }
    }
  },
  mounted() {
    this.audio = new Audio(this.musicArr[0].sound)
  }
}
</script>
<style>
.slider {
  width: 350px;
  margin: 30px auto;
}
@media(max-width: 768px) {
  .slider {
    width: 80%;
  }
}
.volumeSlider {
  width: 150px;
  margin: 30px auto;
}
@media(max-width: 768px) {
  .volumeSlider {
    width: 200px;
  }
}
.timeBar {
  -webkit-appearance: none;
  margin-right: 15px;
  margin: 0 auto;
  margin-bottom: 30px;
  height: 7px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  background-image: linear-gradient(#79aa79, #79aa79);
  background-size: 0% 100%;
  background-repeat: no-repeat;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.timeBar::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #79aa79;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background .3s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.timeBar::-moz-range-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #79aa79;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background .3s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.timeBar::-ms-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #79aa79;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background .3s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.timeBar::-webkit-slider-thumb:hover {
  background: #648d64;
}

.timeBar::-moz-range-thumb:hover {
  background: #648d64;
}

.timeBar::-ms-thumb:hover {
  background: #648d64;
}

.timeBar::-webkit-slider-runnable-track  {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}

.timeBar::-moz-range-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}

.timeBar::-ms-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}

.changeVolume {
  -webkit-appearance: none;
  margin-right: 15px;
  margin-bottom: 30px;
  height: 7px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  background-image: linear-gradient(#79aa79, #79aa79);
  background-size: 0% 100%;
  background-repeat: no-repeat;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.changeVolume::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #79aa79;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background .3s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.changeVolume::-moz-range-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #79aa79;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background .3s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.changeVolume::-ms-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #79aa79;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background .3s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.changeVolume::-webkit-slider-thumb:hover {
  background: #648d64;
}

.changeVolume::-moz-range-thumb:hover {
  background: #648d64;
}

.changeVolume::-ms-thumb:hover {
  background: #648d64;
}

.changeVolume::-webkit-slider-runnable-track  {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}

.changeVolume::-moz-range-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}

.changeVolume::-ms-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}
</style>
