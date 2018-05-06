var audio_context;
var recorder;
var audio_data;

function startUserMedia(stream) {
  var input = audio_context.createMediaStreamSource(stream);
  console.log('Media stream created.');

  recorder = new Recorder(input);
  console.log('Recorder initialized.');
}

function initialize() {
  try {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
    window.URL = window.URL || window.webkitURL;
    audio_context = new AudioContext;
    console.log('Audio context set up.');
    console.log('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!'));
  } catch (e) {
    alert('No web audio support in this browser!');
  }

  navigator.getUserMedia({ audio: true }, startUserMedia, function (e) {
      console.log('No live audio input: ' + e);
  });
}

function startRecording(button) {
  recorder && recorder.record();
  console.log('Recording started.');
}

function ExportWavBlob() {
  recorder && recorder.exportWAV(function (blob) {
    this.audio_data = blob;
  }, "audio/wav");
}

function stopRecording(button) {
  recorder && recorder.stop();
  console.log('Recording stopped.');
  ExportWavBlob();
  createDownloadLink();
  recorder && recorder.clear();
}

function createDownloadLink() {
  recorder && recorder.exportWAV(function (blob) {
    var url = URL.createObjectURL(blob);
    var li = document.createElement('li');
    var au = document.createElement('audio');
    au.attachShadow = true;
    var hf = document.createElement('a');
    au.controls = true;
    au.src = url;
    hf.href = url;
    hf.download = new Date().toISOString() + '.wav';
    hf.innerHTML = hf.download;

    hf.onclick = function () {
      window.location = url;
    };

    li.appendChild(au);
    recordingslist.appendChild(li);
  }, "audio/wav");
}
