import styled from '@emotion/styled';

export const ListContainer = styled.ul`
  margin-top: 30px;
  list-style: none;
  padding: 0;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const ListItem = styled.li`
  margin-top: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ContactInfo = styled.div`
  flex-grow: 1;
`;

export const DeleteButton = styled.button`
  margin-left: 10px;
  padding: 8px 16px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
`;
