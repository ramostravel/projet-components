import ProfilePhoto from './components/Profile/ProfilePhoto';
import FullName from './components/Profile/FullName';
import Address from './components/Profile/Address';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfilePhoto/>
        <FullName/>
        <Address/>
      </header>
    </div>
  );
}

export default App;
