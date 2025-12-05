import { Welcome, Navbar, Dock } from "#components"
import { Draggable } from "gsap/Draggable"
import gsap from "gsap";
import { TerminalWindow } from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Dock />
      <TerminalWindow />
    </div>
  )
}

export default App