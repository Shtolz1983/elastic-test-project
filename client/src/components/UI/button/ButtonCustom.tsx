import LoadingButton from '@mui/lab/LoadingButton';
import { FC } from 'react';

interface ButtonCustomProps {
  textButton: string;
  isLoading: boolean;

  handlerButton: () => void;
}

const ButtonCustom: FC<ButtonCustomProps> = ({
  textButton,
  isLoading,
  handlerButton,
}) => {
  return (
    <LoadingButton
      loading={isLoading}
      style={{ height: 56 }}
      variant="outlined"
      onClick={handlerButton}
    >
      {textButton}
    </LoadingButton>
  );
};

export default ButtonCustom;
