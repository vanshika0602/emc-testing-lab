import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./List of Labs/Div/Header";
import { DivWrapper } from "./List of Labs/DivWrapper/DivWrapper";
import { Footer } from "./List of Labs/Footer/Footer";
import { Frame } from "./List of Labs/Frame/Frame";
import { FrameWrapper } from "./List of Labs/FrameWrapper/FrameWrapper";
import { OverlapGroupWrapper } from "./List of Labs/OverlapGroupWrapper/OverlapGroupWrapper";
import { SectionComponentNode } from "./List of Labs/SectionComponentNode/SectionComponentNode";
import { LabOverview } from "./Lab Overview/LabOverview";

function App() {
  return (
    <div className="bg-[#fbfbfb] flex">
      <div className="bg-[#fbfbfb] w-full min-h-screen relative">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Frame />
                <FrameWrapper />
                <OverlapGroupWrapper />
                <SectionComponentNode />
                <DivWrapper />
              </>
            }
          />
          <Route path="/lab/:labId" element={<LabOverview />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
