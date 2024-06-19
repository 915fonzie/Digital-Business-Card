import "../css/App.css"
import profilePic from '../images/profile-pic.png'
import linkedIn from '../images/linkedin.svg'
import email from '../images/email.svg'

function Info() {
    return (
        <section className="info-container">
            <img src={profilePic} className="profile-img"/>
            <div className="info">
                <h1>Alfonso<br></br>Pruneda-Suarez</h1>
                <h3>Frontend Developer</h3>
                <a href="https://fonziepruneda.com" target="_blank">Portfolio Website</a>
                <div className="buttons">
                    <button className="email-btn">
                        <img src={email} className="email-img" />
                        Email
                    </button>
                    <button className="linkedin-btn">
                        <img src={linkedIn} className="linkedin-img" />
                        LinkedIn
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Info
