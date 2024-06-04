import React from 'react';
import './ConfirmationModal.css';

const ConfirmationModal = ({ show, onClose, onConfirm }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="confirmation-modal__overlay">
            <div className="confirmation-modal">
                <h2>O'chirishni tasdiqlaysizmi?</h2>
                <div className="confirmation-modal__actions">
                    <button onClick={onConfirm}>Ha</button>
                    <button onClick={onClose}>Yo'q</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
