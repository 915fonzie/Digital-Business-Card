import "../css/App.css"
import twitter from '../images/twitter.svg'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import github from '../images/github.svg'

function Footer() {
    return (
        <footer>
            <a className="twitter" href="https://x.com/915fonzie" target="_blank">
                <img src={twitter} className="twitter-img"></img>
            </a>
            <a className="facebook" href="https://www.facebook.com/915fonzie" target="_blank">
                <img src={facebook} className="facebook-img" />
            </a>
            <a className="instagram" href="https://www.instagram.com/fonziepruneda/" target="_blank">
                <img src={instagram} className="instagram-img" />
            </a>
            <a className="github" href="https://github.com/915fonzie" target="_blank">
                <img src={github} className="github-img" />
            </a>
        </footer>
    )
}

export default Footer
 