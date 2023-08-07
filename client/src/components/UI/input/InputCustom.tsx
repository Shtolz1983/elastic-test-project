import { TextField } from '@mui/material';
import { FC } from 'react';

interface InputCustomProps {
  label: string;
  input: string;
  error: string;
  handlerInput: (input: string) => void;
}

const InputCustom: FC<InputCustomProps> = ({
  label,
  input,
  handlerInput,
  error,
}) => {
  return (
    <>
      <TextField
        error={error ? true : false}
        id="outlined-basic"
        label={error ? 'Error' : label}
        value={input}
        variant="outlined"
        helperText={error ? error : ''}
        onChange={(e) => handlerInput(e.target.value)}
      />
    </>
  );
};

export default InputCustom;
