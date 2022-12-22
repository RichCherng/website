
import logo from '../../resources/logo.svg';
import NavBar from '../../components/NavBar'

const Home = () => {
    return (<div className="Home">
        <NavBar logo={ {img: logo} } />
        HOME
    </div>)
};


export default Home;