import NewProject from "./Components/NewProject.jsx";
import ProjectsSidebar from "./Components/ProjectsSidebar.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      <NewProject />
    </main>
  );
}

export default App;
