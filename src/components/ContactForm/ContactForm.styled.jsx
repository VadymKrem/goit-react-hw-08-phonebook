import styled from '@emotion/styled';

export const Form = styled.form`
  width: 350px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
  border: 2px solid black;
  margin-bottom: 25px;
  background-color: #ddd;
  flex-wrap: wrap;
  align-content: center;
  align-item: center;
`;

export const Label = styled.label`
  display: block;
  font-size: 20px;
  font-weight: 700;
`;

export const Input = styled.input`
  display: block;
  margin-top: 10px;
  border: 2px solid;
  border-radius: 4px;
  height: 20px;
`;

export const Button = styled.button`
  width: 100px;
  border: 2px solid grey;
  border-radius: 2px;
  background-color: inherit;
  background-color: #f1d50b;
`;