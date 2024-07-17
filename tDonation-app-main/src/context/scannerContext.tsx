/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {createContext, useContext, useState} from 'react';


// Create the context
const defaultValue = {
    sampleID: 'sampleID',
    setSampleID: (newSampleID: string) => {},
  };
const ScannerContext = createContext(defaultValue);

const useScannerContext = () => useContext(ScannerContext);

// Create a component to wrap your application and provide the context
const ScannerContextProvider = ({children}) => {
  // Define your state variable and setter function
  const [sampleID, setSampleID] = useState('sampleID');

  // Return the provider with the state value and setter function as the value
  return (
    <ScannerContext.Provider value={{sampleID, setSampleID}}>
      {children}
    </ScannerContext.Provider>
  );
};

export {ScannerContextProvider, useScannerContext};
