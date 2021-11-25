window.player = {
    main: document.querySelector('#main'),
    title: document.querySelector('.card-content h5'),
    artist: document.querySelector('.artist'),
    cover: document.querySelector('.card-image'),
    audio: document.querySelector('audio'),

    audioData: audios,
    currentAudio: {},
    currentPlaying: 0,
  
    start() {
      this.update();
      this.audio.onended = () => this.next();
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
      this.audio.src = path(this.currentAudio.file);
    },

    restart() {
      if(this.currentPlaying == this.audioData.length){
        this.currentPlaying = 0;
        this.update();
      }
    }

  }