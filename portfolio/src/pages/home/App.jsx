
import logo from '../../resources/logo.svg';
import NavBar from '../../components/NavBar'
import SnakeGame from '../SnakeGame/App'

const links = {
    linkedin : "https://www.linkedin.com/in/richcherngchaosil95",
    github: "https://github.com/RichCherng"
}

const Home = () => {
    return (<div className="Home">
        <NavBar logo={ {img: logo } } links={links} />
        <SnakeGame />
    </div>)
};


export default Home;