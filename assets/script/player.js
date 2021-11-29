import audios from "./data_base.js"
import { path } from "./utilites.js"
import elements from "./player_elements.js"

export default {
    audioData: audios,
    currentAudio: {},
    currentPlaying: 0,
    isPlaying: false,
  
    start() {
      elements.set.call(this);

      this.update();
      this.audio.onended = () => this.next();
    },

    play() {
      this.isPlaying = true;
      this.audio.play();
      this.playPause.innerText = 'pause';
    },

    pause() {
      this.isPlaying = false;
      this.audio.pause();
      this.playPause.innerText = 'play_arrow';
    },

    togglePlayPause() {
      this.isPlaying ? this.pause() : this.play();
    },

    setSeek(value) {
      this.audio.currentTime = value;
    },

    setVolume(value) {
      this.audio.volume = value / 100
    },

    toggleMute() {
      this.audio.muted = !this.audio.muted;
      this.mute.innerText = this.audio.muted ? "volume_off" : "volume_up"
    },

    next() {
      this.currentPlaying++
      this.restart();
      this.update();
      this.audio.play();
    },

    update() {
      this.currentAudio = this.audioData[this.currentPlaying];

      this.title.innerText = this.currentAudio.title;
      this.artist.innerText = this.currentAudio.artist;
      this.cover.style.background = `url(${path(this.currentAudio.cover)}) no-repeat center center / cover`;
      elements.createAudioElement.call(this, path(this.currentAudio.file))
      this.seekBar.max = this.audio.duration;
      
      this.audio.onloadeddata = () => {
        elements.actions.call(this)
      }
    },

    restart() {
      if(this.currentPlaying == this.audioData.length){
        this.currentPlaying = 0;
        this.update();
      }
    }

  }