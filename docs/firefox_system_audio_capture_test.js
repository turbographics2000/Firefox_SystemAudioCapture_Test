navigator.mediaDevices.getUserMedia({
  audio: {
    mediaSource: 'audioCapture'
  },
  video: false
}).then(stream => {
  vid.srcObject = stream;
  vid.play();
});
