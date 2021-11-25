
window.player = {
    cover: document.querySelector('.card-image'),
    title: document.querySelector('.card-content h5'),
    artist: document.querySelector('.artist'),
    audio: document.querySelector('audio'),
  
    currentAudio: {
      title: "s t a r s",
      artist: "lofi type beat",
      cover: "assets/files/stars.jpg",
      file: "assets/files/stars.mp3"
    },
  
    start() {
      this.cover.style.background = `url(${this.dataBase.cover}) no-repeat center center / cover`;
      this.title.innerText = this.dataBase.title;
      this.artist.innerText = this.dataBase.artist;
      this.audio.src = this.dataBase.file;
    }
  }