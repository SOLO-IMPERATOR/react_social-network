import './App.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";


const App = () => {
    return (
        <div className="main-wrapper">
            <Header />
            <Navigation />
            <Profile/>
        </div>
    );
}
export default App;
