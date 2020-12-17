import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { PersonAdd } from '@styled-icons/ionicons-outline/PersonAdd';
import { Link } from 'react-router-dom';
import { ChevronRight } from '@styled-icons/boxicons-regular/ChevronRight';
import { Timeline } from '@styled-icons/material/Timeline';
import { Notifications } from '@styled-icons/ionicons-outline/Notifications';
import { PrivacyTip } from '@styled-icons/material/PrivacyTip';
import { HelpCircle } from '@styled-icons/boxicons-regular/HelpCircle';

const SettingFactors = [
  { text: 'Follow and Invite Friends', icon: <PersonAdd size='20' />,},
  { text: 'Your Activity', icon: <Timeline size='20' /> },
  { text: '  Notifications', icon: <Notifications size='20' /> },
  { text: 'Privacy', icon: <PrivacyTip size='20' /> },
  { text: ' Help', icon: <HelpCircle size='20' /> },
];
export default function UserSettingScreen({}) {
  const [color, setColor] = useState('white');
  const [search, setSearch] = useState('');
  const [settingList, setSettingList] = useState(SettingFactors);
  const [filteredSettings, setFilteredSettings] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFilteredSettings(
      settingList.filter((setting) => {
        return setting.text.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, settingList]);
  return (
    <Wrapper>
      <Header>
       <BackButton>
          <StyledLink exact to='/'>main</StyledLink>
        </BackButton>
      <SearchBox
        type='text'
        placeholder='  search'
        onChange={handleChange}
        size='40'
      ></SearchBox>
      </Header>

      {filteredSettings.map((info, index) => {
        return (
          <SettingSection>
            <Blank>{info.icon}</Blank>
            <SettingText>{info.text}</SettingText>
            <ChevronRight size='25' color='grey' />
          </SettingSection>
        );
      })}
      <hr class='solid'></hr>
      <Blank>
        {' '}
        <h3>Logins</h3>
      </Blank>
      <SettingSection>
        Login info
        <ChevronRight size='25' color='grey' />
      </SettingSection>
      <SettingSection>Add Account</SettingSection>
      <SettingSection>Log Out</SettingSection>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Search = styled.div`
  margin-top: 10px;
`;
const LoginsSetting = styled.h4`
  margin-left: 15px;
  margin-top: 10px;
  color: skyblue;
  font-size: 15px;
`;
const SettingSection = styled.button`
  width: 80%;
  font-size: 18px;
  margin-left: 10px;
  margin-top: 10px;
  display: flex;
  border: none;
  background-color: white;
  transition-duration: 0.4s;
  border-radius: 8px;
  &:hover {
    background-color: #e1dfdf;
    color: black;
  }
`;
const SettingText = styled.ul`
  margin-top: 5px;
  margin-left: -40px;
  font-size: 15px;
`;
const Blank = styled.div`
  margin-right: 10px;
  margin-left: 10px;
`;
const SearchBox = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10%;
  margin-top: 10px;
  margin-right: 15px;
  margin-left: 15px;
  font-size:20px;
`;

const BackButton = styled.button`
  flex-grow: 0.5;
  margin: 10px 0px 0px 20px;
  
  
`;

const Header = styled.header`
  display:flex;

`;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;