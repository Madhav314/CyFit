import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/regisration';
import Workout from './pages/workouttracker';
import Mainpage from './pages/mainpage';
import DietTracker from './pages/dietTracker';
import Backside from './pages/backside';
import Tripage from './pages/workoutpages/tripage';
import Calfpage from './pages/workoutpages/calfpage';
import Delt from './pages/workoutpages/delt';
import Glute from './pages/workoutpages/glute';
import Hampage from './pages/workoutpages/hampage';
import Latpage from './pages/workoutpages/latpage';
import Lowerback from './pages/workoutpages/lowerback';
import Terespage from './pages/workoutpages/terespage';
import Trappage from './pages/workoutpages/trappage';
import Abs from './pages/workoutpages/abs';
import Bicep from './pages/workoutpages/bicep';
import Chest from './pages/workoutpages/chest';
import Forearm from './pages/workoutpages/forearm';
import Knee from './pages/workoutpages/knee';
import Quad from './pages/workoutpages/quad';
import Sideabs from './pages/workoutpages/sideabs';
import Shoulder from './pages/workoutpages/shoulder';
import NavigationBar from './pages/navigationBar';
import WorkoutLog from './pages/workoutlog';
function App() {
  return (
    <div>
    <NavigationBar/>
    <Router>
       <Routes>
         <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Workoutlog" element={<WorkoutLog />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/mainpage" element={<Mainpage />} />
          <Route path="/dietTracker" element={<DietTracker />} />
          <Route path="/backside" element={<Backside />} />
          <Route path="/tripage" element={<Tripage />} />
          <Route path="/calfpage" element={<Calfpage />} />
          <Route path="/delt" element={<Delt />} />
          <Route path="/glute" element={<Glute />} />
          <Route path="/hampage" element={<Hampage />} />
          <Route path="/latpage" element={<Latpage />} />
          <Route path="/lowerback" element={<Lowerback />} />
          <Route path="/terespage" element={<Terespage />} />
          <Route path="/trappage" element={<Trappage />} />
          <Route path="/abs" element={<Abs />} />
          <Route path="/bicep" element={<Bicep />} />
          <Route path="/chest" element={<Chest />} />
          <Route path="/forearm" element={<Forearm />} />
          <Route path="/knee" element={<Knee />} />
          <Route path="/quad" element={<Quad />} />
          <Route path="/sideabs" element={<Sideabs />} />
          <Route path="/shoulder" element={<Shoulder />} />
       </Routes>
    </Router>
    </div>
    
  );
}

export default App;