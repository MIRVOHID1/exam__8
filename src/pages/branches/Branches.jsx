import './Branches.css';
import { Link } from 'react-router-dom';

const Branches = () => {
    return (
        <div className="branches__container">
            <div className="branches__header">
                <h1>Filiallar</h1>
                <div className="branches__buttons">
                    <button className='branches__button1'>Ro'yhat</button>
                    <Link to='/map'><button className='branches__button2'>Xarita</button></Link>
                </div>
            </div>

            <div className="branches__table">
                <div className="table">
                    <div className='table__top'>
                        <div className='table__top__left'>
                            <h2 style={{fontWeight: '700', margin: '0px',}}>MAX WAY BERUNIY</h2>
                            <p style={{margin: '0px', paddingBottom: '20px'}}>улица Беруни, 47, Ташкент</p>
                        </div>
                        <div className='table__top__right'>
                            <p style={{color: 'rgb(90, 197, 58)', marginTop: '0px'}}>23:00 gacha ochiq</p>
                        </div>
                    </div>
                    <div className='table__bottom'>
                        <div className="table__bottom__left">
                            <p style={{color: 'grey', margin: '0px', paddingTop: '20px'}}>ish vaqti:</p>
                            <p style={{margin: '0px'}}>Du-Yak: 10:00-23:00</p>
                        </div>
                        <div className="table__bottom__right">
                            <p style={{textAlign: 'right', color: 'grey', margin: '0px', paddingTop: '20px'}}>Telefon:</p>
                            <p style={{ margin: '0px'}}>+998712005400</p>
                        </div>
                    </div>
                </div>
                <div className="table">
                    <div className='table__top'>
                        <div className='table__top__left'>
                            <h2 style={{fontWeight: '700', margin: '0px',}}>MAX WAY ATLAS</h2>
                            <p style={{margin: '0px', paddingBottom: '20px'}}>улица Катартал, 28, Ташкент</p>
                        </div>
                        <div className='table__top__right'>
                            <p style={{color: 'rgb(90, 197, 58)', marginTop: '0px'}}>22:00 gacha ochiq</p>
                        </div>
                    </div>
                    <div className='table__bottom'>
                        <div className="table__bottom__left">
                            <p style={{color: 'grey', margin: '0px', paddingTop: '20px'}}>ish vaqti:</p>
                            <p style={{margin: '0px'}}>Du-Yak: 10:00-22:00</p>
                        </div>
                        <div className="table__bottom__right">
                            <p style={{textAlign: 'right', color: 'grey', margin: '0px', paddingTop: '20px'}}>Telefon:</p>
                            <p style={{ margin: '0px'}}>+998712005400</p>
                        </div>
                    </div>
                </div>
                <div className="table">
                    <div className='table__top'>
                        <div className='table__top__left'>
                            <h2 style={{fontWeight: '700', margin: '0px',}}>MAX WAY -DRUJBA</h2>
                            <p style={{margin: '0px', paddingBottom: '20px'}}>микрорайон Алмазар, 8/2, Чиланзарский район, Ташкент</p>
                        </div>
                        <div className='table__top__right'>
                            <p style={{color: 'rgb(90, 197, 58)', marginTop: '0px'}}>04:00 gacha ochiq</p>
                        </div>
                    </div>
                    <div className='table__bottom'>
                        <div className="table__bottom__left">
                            <p style={{color: 'grey', margin: '0px', paddingTop: '20px'}}>ish vaqti:</p>
                            <p style={{margin: '0px'}}>Du-Yak: 10:00-04:00</p>
                        </div>
                        <div className="table__bottom__right">
                            <p style={{textAlign: 'right', color: 'grey', margin: '0px', paddingTop: '20px'}}>Telefon:</p>
                            <p style={{ margin: '0px'}}>+998712005400</p>
                        </div>
                    </div>
                </div>
                <div className="table">
                    <div className='table__top'>
                        <div className='table__top__left'>
                            <h2 style={{fontWeight: '700', margin: '0px',}}>MAX WAY MEGA PLANET</h2>
                            <p style={{margin: '0px', paddingBottom: '20px'}}>улица Ниязбек, 1</p>
                        </div>
                        <div className='table__top__right'>
                            <p style={{color: 'rgb(90, 197, 58)', marginTop: '0px'}}>03:00 gacha ochiq</p>
                        </div>
                    </div>
                    <div className='table__bottom'>
                        <div className="table__bottom__left">
                            <p style={{color: 'grey', margin: '0px', paddingTop: '20px'}}>ish vaqti:</p>
                            <p style={{margin: '0px'}}>Du-Yak: 10:00-03:00</p>
                        </div>
                        <div className="table__bottom__right">
                            <p style={{textAlign: 'right', color: 'grey', margin: '0px', paddingTop: '20px'}}>Telefon:</p>
                            <p style={{ margin: '0px'}}>+998712005400</p>
                        </div>
                    </div>
                </div>
                <div className="table">
                    <div className='table__top'>
                        <div className='table__top__left'>
                            <h2 style={{fontWeight: '700', margin: '0px',}}>MAX WAY AVIASOZLAR</h2>
                            <p style={{margin: '0px', paddingBottom: '20px'}}>улица Авиасозлар, 23</p>
                        </div>
                        <div className='table__top__right'>
                            <p style={{color: 'rgb(90, 197, 58)', marginTop: '0px'}}>03:00 gacha ochiq</p>
                        </div>
                    </div>
                    <div className='table__bottom'>
                        <div className="table__bottom__left">
                            <p style={{color: 'grey', margin: '0px', paddingTop: '20px'}}>ish vaqti:</p>
                            <p style={{margin: '0px'}}>Du-Yak: 10:00-03:00</p>
                        </div>
                        <div className="table__bottom__right">
                            <p style={{textAlign: 'right', color: 'grey', margin: '0px', paddingTop: '20px'}}>Telefon:</p>
                            <p style={{ margin: '0px'}}>+998712005400</p>
                        </div>
                    </div>
                </div>
                <div className="table">
                    <div className='table__top'>
                        <div className='table__top__left'>
                            <h2 style={{fontWeight: '700', margin: '0px',}}>MAX WAY RISOVIY</h2>
                            <p style={{margin: '0px', paddingBottom: '20px'}}>Узбекистан, Ташкент, Алтынкульская улица, 10</p>
                        </div>
                        <div className='table__top__right'>
                            <p style={{color: 'rgb(90, 197, 58)', marginTop: '0px'}}>03:00 gacha ochiq</p>
                        </div>
                    </div>
                    <div className='table__bottom'>
                        <div className="table__bottom__left">
                            <p style={{color: 'grey', margin: '0px', paddingTop: '20px'}}>ish vaqti:</p>
                            <p style={{margin: '0px'}}>Du-Yak: 10:00-03:00</p>
                        </div>
                        <div className="table__bottom__right">
                            <p style={{textAlign: 'right', color: 'grey', margin: '0px', paddingTop: '20px'}}>Telefon:</p>
                            <p style={{ margin: '0px'}}>+998712005400</p>
                        </div>
                    </div>
                </div>
                <div className="table">
                    <div className='table__top'>
                        <div className='table__top__left'>
                            <h2 style={{fontWeight: '700', margin: '0px',}}>MAX WAY BERUNIY</h2>
                            <p style={{margin: '0px', paddingBottom: '20px'}}>улица Катартал, 60/5</p>
                        </div>
                        <div className='table__top__right'>
                            <p style={{color: 'rgb(90, 197, 58)', marginTop: '0px'}}>03:00 gacha ochiq</p>
                        </div>
                    </div>
                    <div className='table__bottom'>
                        <div className="table__bottom__left">
                            <p style={{color: 'grey', margin: '0px', paddingTop: '20px'}}>ish vaqti:</p>
                            <p style={{margin: '0px'}}>Du-Yak: 10:00-03:00</p>
                        </div>
                        <div className="table__bottom__right">
                            <p style={{textAlign: 'right', color: 'grey', margin: '0px', paddingTop: '20px'}}>Telefon:</p>
                            <p style={{ margin: '0px'}}>+998712005400</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Branches;