navigator.mediaDevices.getUserMedia({
  audio: {
    mediaSource: 'audioCapture'
  },
  video: {
    mediaSource: 'screen'
  }
}).then(stream => {
  vid.srcObject = stream;
  vid.play();
});
