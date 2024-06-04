import './Language.css';
import React, { useState } from 'react';
import uzFlag from '../../../assets/flags/uzbekistan.svg'; 
import ruFlag from '../../../assets/flags/ru.svg';
import enFlag from '../../../assets/flags/en.svg';

const languages = [
    { code: 'uz', name: "O'zbekcha", flag: uzFlag },
    { code: 'ru', name: 'Русский', flag: ruFlag },
    { code: 'en', name: 'English', flag: enFlag }
];

const LanguageSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        setIsOpen(false);
    };

    return (
        <div className="language-selector">
            <button onClick={toggleDropdown} className="selected-language">
                <img src={selectedLanguage.flag} alt={selectedLanguage.name} />
                <span className="arrow">{isOpen ? '▲' : '▼'}</span>
            </button>
            {isOpen && (
                <div className="language-options">
                    {languages.map((language) => (
                        <div
                            key={language.code}
                            className={`language-option ${selectedLanguage.code === language.code ? 'selected' : ''}`}
                            onClick={() => handleLanguageChange(language)}
                        >
                            <img src={language.flag} alt={language.name} />
                            <span>{language.name} </span>
                            {selectedLanguage.code === language.code && <span>✔</span>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
