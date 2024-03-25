import './App.css';

import Configuration from './components/sub-components/Configuration';
import MyProfile from './components/sub-components/MyProfile';
import Host from './components/sub-components/Host';
import Inbox from './components/sub-components/Inbox';
import Tracks from './components/sub-components/Tracks';
import Docs from './components/sub-components/Docs';
import Dashboard from './components/sub-components/Dashboard';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DebugStress from './components/sub-components/dashboard-components/DebugStress';
import InspectWorld from './components/sub-components/dashboard-components/InspectWorld';

import Trackers from './components/sub-components/track-components/Trackers';
import Trackings from './components/sub-components/track-components/Trackings';

import Snippets from './components/sub-components/my-profile/Snippets';
import JoySources from './components/sub-components/my-profile/JoySources';
import MyDocs from './components/sub-components/my-profile/MyDocs';

import Register from './components/sub-components/Register';
import Main from './components/Main';
import Login from './components/sub-components/Login';
import ForgotPassword from './components/sub-components/ForgotPassword';
import HostDocs from './components/sub-components/HostDocs';
import ReadDocs from './components/sub-components/ReadDocs';
import EditProfile from './components/sub-components/EditProfile';
import ResetPassword from './components/sub-components/ResetPassword';

function App() {
  return (
    <>
      <Router>

            <Routes>
              <Route path="/" element={<Main/>}>
                <Route path="/" element={<Dashboard/>}>
                  <Route index element={<DebugStress/>}/>
                </Route>
                <Route path="/dashboard" element={<Dashboard/>}>
                  <Route index element={<DebugStress/>}/>
                  <Route path="debug-stress" element={<DebugStress/>}/>
                  <Route path="inspect-world" element={<InspectWorld/>}/>
                </Route>
                <Route path="/configuration" element={<Configuration/>}/>
                <Route path="/profile/:id" element={<MyProfile/>}>
                  <Route index element={<Snippets/>}/>
                  <Route path="snippets" element={<Snippets/>}/>
                  <Route path="joy-source" element={<JoySources/>}/>
                  <Route path="my-docs" element={<MyDocs/>}/>
                </Route>
                <Route path="/host" element={<Host/>}/>
                <Route path="/reset-password" element={<ResetPassword/>}/>
                <Route path="/read-docs/:id" element={<ReadDocs/>}/>
                <Route path="/host-doc" element={<HostDocs/>}/>
                <Route path="/edit-profile" element={<EditProfile/>}/>
                <Route path="/inbox" element={<Inbox/>}/>
                <Route path="/tracks" element={<Tracks/>}>
                  <Route index element={<Trackers/>}/>
                  <Route path="trackers" element={<Trackers/>}/>
                  <Route path="trackings" element={<Trackings/>}/>
                </Route>
                <Route path="/docs" element={<Docs/>}/>
                {/* <Route path="*" element={<Dashboard/>}/> */}
                </Route>
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/forgot-password" element={<ForgotPassword/>}/>
            </Routes>
      </Router>
    </>
  );
}

export default App;
