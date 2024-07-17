import React, { createContext, useState, useContext } from 'react';

const BloodDonationContext = createContext();

export const BloodDonationProvider = ({ children }) => {
    const [request, setRequest] = useState(0);
    const [submit, setSubmit] = useState(0);
    const [donor, setDonor] = useState(0);
    const [center, setCenter] = useState(0);

    return (
        <BloodDonationContext.Provider value={{ request, setRequest, submit, setSubmit, donor, setDonor, center, setCenter }}>
            {children}
        </BloodDonationContext.Provider>
    );
};

export const useBloodDonation = () => {
    const context = useContext(BloodDonationContext);
    if (context === undefined) {
        throw new Error('useBloodDonation must be used within a BloodDonationProvider');
    }
    return context;
};
