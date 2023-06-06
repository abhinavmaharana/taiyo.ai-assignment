import RootLayout from './Components/RootLayout';
import { Route, Routes } from "react-router-dom";
import MainApp from './Pages/MainApp';
import Create from './Pages/CRUD/Create';
import Update from './Pages/CRUD/Update';
import CovidMap from './Pages/CRUD/CovidMap';
import Settings from './Pages/Settings';

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path='/' element={<MainApp />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Update />} />
        <Route path="/map" element={<CovidMap />} />
        <Route path="/graphs" element={<Settings />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
