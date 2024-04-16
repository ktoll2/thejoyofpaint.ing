import './App.css';

function App() {
  return (
    <div className={`App font-sans overflow-auto bg-no-repeat bg-cover bg-center h-screen w-screen bg-[url('../public/images/bg.png')]`}>
      <div className="flex flex-col h-full w-full items-center justify-center">
        <iframe className="w-3/4 aspect-video rounded-xl" src="https://www.youtube.com/embed/videoseries?si=Y356vtgZIKH3y6M8&amp;list=PLAEQD0ULngi67rwmhrkNjMZKvyCReqDV4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
    </div>
  );
}

export default App;
