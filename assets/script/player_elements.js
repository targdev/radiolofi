export default {
    set() {
        this.title = document.querySelector('.card-content h5');
        this.artist = document.querySelector('.artist');
        this.cover = document.querySelector('.card-image');
        this.playPause = document.querySelector('#play-pause')
        this.mute = document.querySelector('#vol');
    },
    createAudioElement(audio) {
        this.audio = new Audio(audio)
    },
    actions() {
        this.playPause.onclick = () => this.togglePlayPause();
        this.mute.onclick = () => this.toggleMute();
    }
};