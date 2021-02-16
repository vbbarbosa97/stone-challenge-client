/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FormHandles, FormHelpers, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import BackgroundUpdate from '../../assets/BackgroundUpdate.jpeg';
import { useAuthenticationContext } from '../../context/reducers/auth/authContext';
import { IRequestUpdateUser } from '../../models/UpdateUser';
import { Input } from '../../shared/components/Form';
import * as S from './styles/index';

interface FormData {
  name: string;
  email: string;
  password?: string;
  oldPassword?: string;
}

interface IUpdate {
  navigateToDashboard: () => void;
  actionUpdateUser: (data: IRequestUpdateUser) => Promise<boolean>;
}

export const Update = ({ navigateToDashboard, actionUpdateUser }: IUpdate) => {
  const formRef = useRef<FormHandles>(null);
  const { state } = useAuthenticationContext();

  const [togglePassword, setTogglePassword] = useState<boolean>(false);
  const [togglePasswordConfirm, setTogglePasswordConfirm] = useState<boolean>(false);

  const { user } = state;
  const initialData: FormData = {
    email: user.email,
    name: user.userName,
  };

  const handleVisiblePassword = () => {
    setTogglePassword(false);
  };

  const handleHiddenPassword = () => {
    setTogglePassword(true);
  };

  const handleVisiblePasswordConfirm = () => {
    setTogglePasswordConfirm(false);
  };

  const handleHiddenPasswordConfirm = () => {
    setTogglePasswordConfirm(true);
  };

  const handleSubmit: SubmitHandler<FormData> = async (data: FormData, { reset }: FormHelpers) => {
    try {
      formRef.current!.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome e obrigatorio'),
        email: Yup.string().email('Digite um e-mail').required('O e-mail e obrigatorio'),
        oldPassword: Yup.string(),
        password: Yup.string().when('oldPassword', {
          is: (val: string | unknown[]) => !!val.length,
          then: Yup.string().required('Campo obrigatório'),
          otherwise: Yup.string(),
        }),
        passwordVerification: Yup.string()
          .when('oldPassword', {
            is: (val: string | unknown[]) => !!val.length,
            then: Yup.string().required('Campo obrigatório'),
            otherwise: Yup.string(),
          })
          .oneOf([Yup.ref('password'), null], 'Confirmação incorreta.'),
      });

      await schema.validate(data, { abortEarly: false });

      const request: IRequestUpdateUser = {
        name: data.name,
        email: data.email,
        password: data.password,
        oldPassword: data.oldPassword,
      };

      const response = await actionUpdateUser(request);
      if (response) {
        reset();
      }

      formRef.current!.setErrors({});
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          formRef.current?.setFieldError(error.path!, error.message);
        });
      }
    }
  };

  return (
    <S.MainContainer>
      <S.CustomCard>
        <S.Logo src={BackgroundUpdate} alt="logo" />
        <S.CustomTitle variant="h5">Meu perfil</S.CustomTitle>
        <S.CustomDiv>
          <Form
            initialData={initialData}
            ref={formRef}
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <Input type="name" name="name" placeholder="Insira seu nome" field="Nome" />
            <Input type="email" name="email" placeholder="Insira seu e-mail" field="E-mail" />
            <Input
              type={togglePassword ? 'text' : 'password'}
              name="oldPassword"
              placeholder="Insira sua atual"
              field="Senha atual"
              toggleIconPassword
              togglePassword={togglePassword}
              handleTogglePassowrd={handleVisiblePassword}
              handleHiddenPassowrd={handleHiddenPassword}
            />
            <Input
              type={togglePasswordConfirm ? 'text' : 'password'}
              name="password"
              placeholder="Nova senha"
              field="Nova senha"
              toggleIconPassword
              togglePassword={togglePasswordConfirm}
              handleTogglePassowrd={handleVisiblePasswordConfirm}
              handleHiddenPassowrd={handleHiddenPasswordConfirm}
            />
            <Input
              type={togglePasswordConfirm ? 'text' : 'password'}
              name="passwordVerification"
              placeholder="Confirmação de nova senha"
              field="Confirmação de senha"
              toggleIconPassword
              togglePassword={togglePasswordConfirm}
              handleTogglePassowrd={handleVisiblePasswordConfirm}
              handleHiddenPassowrd={handleHiddenPasswordConfirm}
            />
            <S.CustomDivButton>
              <S.CustomButtonCancel onClick={navigateToDashboard} type="button">
                Cancelar
              </S.CustomButtonCancel>
              <S.CustomButton type="submit">Salvar alteracoes</S.CustomButton>
            </S.CustomDivButton>
          </Form>
        </S.CustomDiv>
      </S.CustomCard>
    </S.MainContainer>
  );
};
