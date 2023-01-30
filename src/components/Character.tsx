/* eslint-env browser */
/* eslint-disable no-console */
import React, {FunctionComponent, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Character: FunctionComponent = () => {
  return (
    <div>
      <PersonalData />
    </div>
  );
}
const PersonalData: FunctionComponent = () => {
  function useLocalStorage<T>(key: string, initialValue: T): [T, Function] {
    const[storedValue, setStoredValue] = useState<T>(() => {
      try {
        // Get from local storage by key
        const item = localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });

    const setValue = (value: T | ((val: T) => T)): void => {
      try {
        // Allow value to be a function, so we have same API as useState
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(value);
        // Save to local storage
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };

    return [storedValue, setValue];
  }

  const [name, setName] = useLocalStorage('name', '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  return (
    <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
      <div>
        <TextField id="outlined" label="Name / Primary Alias" defaultValue={name} onChange={handleChange} />
      </div>
      {name}
    </Box>
  );
  /**
   <div>
   <TextField id="outlined" label="Metatype" />
   <TextField id="outlined" label="Ethnicity" />
   </div>
   <div>
   <TextField id="outlined" label="Age" />
   <TextField id="outlined" label="Sex" />
   <TextField id="outlined" label="Height" />
   <TextField id="outlined" label="Weight" />
   </div>
   <div>
   <TextField id="outlined" label="Reputation" />
   <TextField id="outlined" label="Heat" />
   </div>
   <div>
   <TextField id="outlined" label="Karma" />
   <TextField id="outlined" label="Total Karma" />
   <TextField id="outlined" label="Misc" />
   </div>
   **/
}

export default Character;