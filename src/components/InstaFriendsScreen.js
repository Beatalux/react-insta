import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from './Header';
import MessageSender from './MessageSender';
import { Search } from '@styled-icons/bootstrap/Search';
import FollowersTab from './FollowersTab';
import FollowingsTab from './FollowingsTab';
import { HelpCircle } from '@styled-icons/boxicons-regular/HelpCircle';
import myImage from './images/settings.png';

const FOLLOWERSLIST = [
  {
    img:
      'https://static.news.zumst.com/images/29/2019/07/11/177ed9dc438e401982b4d5379aad1ab2.jpg',
    id: 'abcd',
    name: '가유빈',
  },
  {
    img:
      'https://mblogthumb-phinf.pstatic.net/MjAxOTA1MjlfODMg/MDAxNTU5MDk3MzkzNjM0.3AmX8o0ocVSBOQWT16avlyAm_rk9bIREiTopeSAqMEkg.vN-D-Wi5zOqoGYS-TJZ7rsfS3WtbNZtJRU4EkgCjquog.JPEG.sungdevilsh/IMG_1840.JPG?type=w800',

    id: 'abcde',
    name: '나유빈',
  },
  {
    img:
      'data:image/jpeg;base64,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',
    id: 'abcdq',
    name: '다유빈',
  },
  {
    img: 'https://t1.daumcdn.net/cfile/tistory/99E736335A13EDDE04',
    id: 'abcda',
    name: '유유유',
  },
  {
    img:
      'https://i.pinimg.com/originals/ed/d8/75/edd875f1fd33a8e6cf46c30b7bebc517.jpg',
    id: 'abcddf',
    name: '빈빈빈',
  },
];

const tabs = {
  0: <FollowersTab />,
  1: <FollowingsTab />,
};

const tabTitle = ['followers', 'followings'];
const InstaFriendsScreen = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Wrapper>
      <Headers>
        <BackButton>
          <StyledLink to='/dm'>dm</StyledLink>
        </BackButton>

        <BackButton>
          <StyledLink to='/setting'>setting</StyledLink>
        </BackButton>

        <ID>realsemprelibera</ID>
        <Nav>
        <FriendsNumberTab>
          {tabTitle.map((str, idx) => {
            return (
              <TabClick onClick={() => setActiveTab(idx)} active={activeTab === idx}>
                {str}
              </TabClick>
            );
          })}
        </FriendsNumberTab>
        </Nav>
      </Headers>
      <SelectedTabs>{tabs[activeTab]}</SelectedTabs>
    </Wrapper>
  );
};

export default InstaFriendsScreen;

const Nav = styled.div`
  display: flex;
  justify-content: center;
`;

const FriendsNumberTab = styled.li`
  display: flex;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 0px;
  padding-bottom:0px;
  text-align: center;
  justify-content: center;
  
`;

const TabClick=styled.ul`
width:50%;
border-bottom: ${(props) => (props.active? "5px solid black" : "none")};
cursor: pointer;
margin-bottom: 0px;
padding-bottom:5px;

`;
//이미지 버튼 어떻게 만드나요??????
const Settingimage = styled.div`
  background-image: url(${myImage});
`;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
`;

const SelectedTabs = styled.div`
  width: 100%;
`;

const FollowersID = styled.ul`
  font-size: 20px;
`;
const RemoveButton = styled.button`
  position: fixed;
  right: 10px;
  background-color: white;
  border-radius: 10%;
  margin-top: 25px;
`;
const Profile = styled.div`
  width: 100%;
`;

const ProfileCard = styled.div`
  background-color: white;
  color: black;
  display: flex;
  margin-right: 20px;
`;
const ProfileInfo = styled.div`
  flex-direction: column;
`;
const ProfileImage = styled.img`
  border-radius: 50%;
  margin: 15px 15px 0px 15px;
  display: flex;
`;

const Headers = styled.header`
  background-color: #cccccc;

`;
const ID = styled.ul`
  font-size: 20px;
  padding-top: 5px;
  text-align: center;
`;
const Name = styled.ul`
  font-size: 10px;
`;
const BackButton = styled.button`
  padding-left: 10px;
  padding-right: 10px;
  margin: 10px 10px 0px 10px;
`;

