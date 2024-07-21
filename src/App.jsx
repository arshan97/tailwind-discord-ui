import "./App.css";

function App() {
  return (
    <div className="flex h-screen text-white">
      <div className="bg-gray-800 p-4">
        <div className="text-gray-800 bg-white rounded-full w-12 h-12 flex items-center justify-center">
          TW
        </div>
      </div>
      <div className="bg-gray-700 w-60 flex flex-col">
        <div className="p-4 shadow-md">Tailwind CSS</div>
        <div className="flex-1 p-4">Channels</div>
      </div>
      <div className="bg-gray-600 flex-1 flex flex-col">
        <div className="p-4 shadow-md">General</div>
        <div className="p-4 flex-1">Messages</div>
      </div>
    </div>
  );
}

export default App;
