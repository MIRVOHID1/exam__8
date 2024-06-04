import "./Contact.css"
import Qr from '../../assets/Images/Qr.png'

const Contact = () => {
    return (
        <div className="contact__container">
            <h1>Bog'lanish</h1>
            <div className="contact__wrapper">
                <div className="contact__content1">
                    <div className="contact__qr"><img className="contact__img" src={Qr} alt="" /></div>
                    <h2 className="contact__text1">Telegramda sharh qoldiring yoki savol bering</h2>
                    <a href="https://t.me/maxwaymasterfood_bot" className="contact__text2">@maxwaymasterfood_bot</a>
                </div>
                <div className="contact__content2">
                    <h2>Yagona aloqa markazi</h2>
                    <p className="contact__tel">+998712005400</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;