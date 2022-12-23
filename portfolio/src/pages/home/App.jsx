
import logo from '../../resources/logo.svg';
import NavBar from '../../components/NavBar'

const links = {
    linkedin : "https://www.linkedin.com/in/richcherngchaosil95",
    github: "https://github.com/RichCherng"
}

const Home = () => {
    return (<div className="Home">
        <NavBar logo={ {img: logo } } links={links} />
        HOME
    </div>)
};


export default Home;