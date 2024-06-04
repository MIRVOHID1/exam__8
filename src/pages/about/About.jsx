import "./About.css"
import Banner from "../../assets/Banners/about.webp"

const About = () => {
    return (
        <div className="about__container">
            <div className="about">
                <h1 className="about__title">Kompaniya haqida</h1>
                <img className="about__banner" src={Banner} alt="" />
                <p className="about__text">Birinchi Max Way muassasasi 2005 yilda ochildi. Dastlabki bosqichda eng yuqori o'rinlarda burgerlar, donarlar va lavashlar edi. Bugungi kunda u Toshkent shahrida 20 ta filialiga ega taniqli va jadal rivojlanayotgan brenddir. Eng ko'p sotilgan taomlar - burgerlar, longerlar, sendvichlar, lavashlar va donar kaboblar.</p>
                <p className="about__text">
                    Max Way mashhur bo'lgan taom - bu klab sendvichi. Tovuq shnitsel maxsus retsept bo'yicha marinadlanadi va ajoyib ta'mga ega bo'ladi. Aynan shuning uchun ko'plab mehmonlar menyudagi shu elementni afzal ko'radi.
                </p>
                <p className="about__text">
                    Max Way faqat halol mahsulotlardan foydalanadi. Asosiy menyuga qo'shimcha ravishda kam yog'li souslar qatorini ham taklif etadi. Tarmoq oshpazlari foydalanayotgan mahsulotlar sifatiga alohida e’tibor qaratadi. Max Way'da mahsulotlar juda yangi va ISO standartlariga muvofiq saqlanadi. Taomlar nafaqat mazali, balki oson hazm bo'ladigan va tez ovqatlanish uchun ham, to'liq ovqatlanish uchun ham mos keladi. Max Way filiallarining har qandayida osoyishta va qulay muhit hukm suradi va tarmoqning do'stona jamoasi uzilishlarsiz va muammosiz ishlaydi. Kun davomida siz tarmoq restoranlarida turli xil mehmonlarni uchratishingiz mumkin: maktab o'quvchilari, talabalar va ishdan keyin to'yimli ovqatlanishni xohlaydigan biznesmenlar.
                </p>
                <p className="about__text">
                    Max Way - bu bolali ota-onalar ham tez-tez tashrif buyuradigan joy va muassasa oilaviy tez xizmat ko'rsatish restoraniga aylandi. Har kimga individual yondashuv, xilma-xil va mazali menyu, malakali va ayni paytda qulay tartib, shuningdek, Max Way'dagi ideal tozalik - bular mehmonlarni restoranga qayta-qayta kelishga undaydigan asosiy belgilardir. Natijada, katta Max Way oilasining muvofiqlashtirilgan ishi 2021 yilda nufuzli 'Yil brendi' mukofotiga sazovor bo'ldi.
                </p>
                <p className="about__text">
                    Tarmoqda yetkazib berish guruhi mavjud. Telefon orqali yoki Telegram boti orqali buyurtma berishingiz mumkin. Maksimal yetkazib berish muddati - 45 daqiqa. Barcha filiallar qulay joylarda joylashgan. Max Way shuningdek, turli xil aksiyalar, bonuslar va chegirmalarni o'tkazadi va menyuni muntazam ravishda yangilab boradi. O'rtacha hisob 30 dan 60 ming so'mgacha o'zgarib turadi. To'lov mijoz uchun qulay bo'lgan har qanday usulda amalga oshirilishi mumkin.
                </p>
            </div>
        </div>
    );
}

export default About;