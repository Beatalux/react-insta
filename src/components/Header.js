import React from 'react';
import styled from 'styled-components';

export default function Header({ changeUser, user, imgURL }) {
  return (
    <Wrapper>
      <ProfileCard onClick={changeUser}>
        <ProfileImage src={imgURL} width='70' height='70' />
        <ProfileInfo>
          <Name>{user}</Name>
          <Status>현재 활동 중</Status>
        </ProfileInfo>
      </ProfileCard>
    </Wrapper>
  );
}
const Wrapper = styled.div`
position: fixed;
width: 100%;

`
const ProfileCard = styled.div`
  background-color: #f5f5f5;
  color: black;
  display: flex;
  border-bottom:1px solid black;
`;
const ProfileInfo = styled.div`
  flex-direction: column;
`;
const ProfileImage = styled.img`
  border-radius: 40%;
  margin: 15px 15px 0px 15px;
  display: flex;
`;

const Name = styled.ul`
  font-size: 20px;
`;

const Status = styled.ul``;
