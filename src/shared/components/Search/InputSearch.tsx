import { FormControl, Grid, IconButton, InputAdornment } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import { IoMdClose, IoMdSearch } from 'react-icons/io';
import { CustomInput } from '../styled/CustomInput';

interface IInputSearch {
  actionSearch: (value: string) => Promise<void>;
}

export const InputSearch = ({ actionSearch }: IInputSearch) => {
  const [value, setValue] = useState<string>('');

  const handleChangeText = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const cleanCode = () => {
    setValue('');
  };

  const handleSearch = async () => {
    await actionSearch(value);
  };

  return (
    <Grid container>
      <Grid item xs={12} lg={12}>
        <FormControl fullWidth>
          <CustomInput
            fullWidth
            placeholder="Pesquise"
            variant="outlined"
            value={value}
            onChange={handleChangeText}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={cleanCode}>
                    <IoMdClose />
                  </IconButton>
                  <IconButton onClick={handleSearch}>
                    <IoMdSearch />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};
