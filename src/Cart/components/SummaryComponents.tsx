import styled from 'styled-components';

export const Container = styled.div`
  font-weight: 100;
  font-size: 1.5rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-left: auto;
`;

export const Row = styled.div`
  border-top: 1px solid #aaa;
  padding: 1rem 0;
  display: flex;
  label {
    padding-right: 40px;
    display: flex;
    flex: 1 50%;
  }
  span {
    display: flex;
    text-align: right;
    font-weight: bold;
    flex: 1 50%;
  }
`;
