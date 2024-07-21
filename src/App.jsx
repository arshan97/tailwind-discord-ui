import "./App.css";

function App() {
  return (
    <div className="flex h-screen text-white">
      <div className="bg-gray-800 p-3 space-y-2 overflow-y-scroll">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="text-gray-800 bg-white rounded-full w-12 h-12 flex items-center justify-center"
          >
            {i}
          </div>
        ))}
      </div>
      <div className="bg-gray-700 w-60 flex flex-col">
        <div className="flex items-center px-3 h-12 shadow-md ">
          Tailwind CSS
        </div>
        <div className="p-3 flex-1 overflow-y-scroll space-y-2">
          {[...Array(40)].map((_, i) => (
            <p key={i}>Channel {i}</p>
          ))}
        </div>
      </div>
      <div className="bg-gray-600 flex-1 flex flex-col">
        <div className="px-3 flex items-center h-12 shadow-md">General</div>
        <div className="p-3 flex-1 space-y-2 overflow-y-scroll">
          {[...Array(40)].map((_, i) => (
            <p key={i}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              harum, tempora nam ducimus eligendi eum, omnis quibusdam
              molestiae, commodi reprehenderit velit eaque. Sunt, eos molestias
              quia distinctio explicabo modi quae!
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;