import { useField } from '@unform/core';
import { useEffect, useRef } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import * as S from './styles/index';

interface Props {
  name: string;
  type: string;
  placeholder: string;
  field: string;
  toggleIconPassword?: boolean;
  handleTogglePassowrd?: () => void;
  handleHiddenPassowrd?: () => void;
  togglePassword?: boolean;
}

export function Input({
  name,
  placeholder,
  field,
  toggleIconPassword,
  handleTogglePassowrd,
  handleHiddenPassowrd,
  togglePassword,
  ...rest
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <div>
        <div style={{ marginTop: 16, fontSize: 12 }}>{field}</div>
        <S.CustomInput
          inputRef={inputRef}
          {...rest}
          placeholder={placeholder}
          style={{ padding: 4, border: 'none' }}
          endAdornment={
            toggleIconPassword &&
            (togglePassword ? (
              <BsFillEyeFill style={{ cursor: 'pointer' }} onClick={handleTogglePassowrd} />
            ) : (
              <BsFillEyeSlashFill style={{ cursor: 'pointer' }} onClick={handleHiddenPassowrd} />
            ))
          }
        />
      </div>
      {error && (
        <span
          style={{
            color: '#f00',
            flexDirection: 'column',
            display: 'flex',
            fontSize: 14,
            marginTop: 5,
          }}>
          {error}
        </span>
      )}
    </div>
  );
}
