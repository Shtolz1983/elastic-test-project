import InputCustom from './UI/input/InputCustom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { searchSlice } from '../redux/reducers/search';
import SelectCustom, { IOption } from './UI/select/SelectCustom';
import ButtonCustom from './UI/button/ButtonCustom';
import { Box } from '@mui/material';
import { getSearchUser, getPaginationUser } from '../redux/reducers/users';
import { LIMIT } from '../constants';

const options: IOption[] = [
  { name: 'None', value: 'None' },
  { name: 'name', value: 'name' },
  { name: 'username', value: 'username' },
  { name: 'email', value: 'email' },
  { name: 'phone', value: 'phone' },
  { name: 'website', value: 'website' },
];

const SerachBlock = () => {
  const state = useAppSelector((state) => state.search);
  const actions = searchSlice.actions;
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.users);

  const handlerInput = (value: string) => {
    dispatch(actions.setInput(value));
    dispatch(actions.setInputError(''));
  };

  const handlerSelect = (value: string | number) => {
    dispatch(actions.setSelect(value));
    dispatch(actions.setInput(''));
    dispatch(actions.setInputError(''));
  };

  const handlerSearch = () => {
    if (!state.input && state.select !== options[0].value) {
      return dispatch(actions.setInputError('Поле не может быть пустым'));
    }
    if (state.select == options[0].value) {
      return dispatch(getPaginationUser({ page: 1, limit: LIMIT }));
    }
    dispatch(getSearchUser(state));
  };

  return (
    <div className="search-block">
      <InputCustom
        label="Search"
        input={state.input}
        handlerInput={handlerInput}
        error={state.inputError}
      />

      <Box sx={{ minWidth: 150 }}>
        <SelectCustom
          label="Type"
          options={options}
          value={state.select}
          handlerSelect={handlerSelect}
        />
      </Box>
      <ButtonCustom
        isLoading={isLoading}
        textButton="search"
        handlerButton={handlerSearch}
      />
    </div>
  );
};

export default SerachBlock;
