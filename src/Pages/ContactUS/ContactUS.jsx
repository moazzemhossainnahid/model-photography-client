import React from 'react';
import ContactDetails from '../../Components/ContactUS/ContactDetails';
import ContactStep from '../../Components/ContactUS/ContactStep';

const ContactUS = () => {
    return (
        <div className="container w-full py-10 px-6">
            <ContactDetails />
            <ContactStep/>
        </div>
    );
};

export default ContactUS;