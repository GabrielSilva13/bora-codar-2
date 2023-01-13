import { CouchSection } from "./components/CouchSection"
import { InfoSection } from "./components/InfoSection"

function App() {
  return (
    <main
      className="container 
    max-w-[875px] 
    h-screen 
    flex 
    md:flex-row 
    flex-col 
    gap-7 
    justify-center 
    items-center "
    >
      <CouchSection />

      <InfoSection />
    </main>
  )
}

export default App
