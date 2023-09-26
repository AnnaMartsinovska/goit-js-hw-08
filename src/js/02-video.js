
import VimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";

const key = "videoplayer-current-time";
const iframe = document.querySelector('iframe');

const player = new VimeoPlayer(iframe);

function onPlay(currentTime) {
    const time = currentTime.seconds;
    localStorage.setItem(key, JSON.stringify(time));
 };

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(key) || 0));

