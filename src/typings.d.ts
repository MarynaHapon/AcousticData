/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare module '*.json' {
  const value: any;
  export default value;
}
// audio recorder
/**
declare function startRecording(button): void;
declare function stopRecording(button): void;
declare function initialize(): void;
declare function ExportWavBlob(): void;
declare function clear(): void;
**/

// mic online -- spectrogram
declare function init(btnMic, btnSong, select): void;
declare function requestMic(): void;
declare function stopSong(): void;
