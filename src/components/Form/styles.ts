import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  align-items: center;
  padding: 30px;
  border: 1px solid #000000;
  box-sizing: border-box;

  input {
    margin-bottom: 30px;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;
