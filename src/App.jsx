import { Welcome, Navbar, Dock } from "#components"
import { Draggable } from "gsap/Draggable"
import gsap from "gsap";
import { ContactWindow, FinderWindow, ResumeWindow, TerminalWindow, TextWindow, ImageWindow } from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Dock />
      <TerminalWindow />
      <ResumeWindow />
      <FinderWindow />
      <TextWindow />
      <ImageWindow />
      <ContactWindow />
    </div>
  )
}

export default App