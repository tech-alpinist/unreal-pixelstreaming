import { MetaProvider, MetaEditor, Hooks } from 'pixel-streaming';

function UnrealViewer() {
  const PlayerViewer = () => {
    const actions = Hooks.actions();

    return (
      <div className="flex flex-grow flex-shrink-0 flex-col items-center container px-16 md:px-24">
        <MetaEditor
          debugMode
          showToolbar
          psHost="ws://127.0.0.1:80"
          psConfig={{
            autoPlay: false,
            autoConnect: true,
            startMuted: true,
            hoveringMouse: true,
            fakeMouseWithTouches: true,
            matchViewportRes: true,
          }}
        />
      </div>
    );
  };

  return (
    <MetaProvider>
      <PlayerViewer />
    </MetaProvider>
  );
}

export default UnrealViewer;
