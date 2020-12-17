import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import MessageSender from './MessageSender';
import messageDatas from '../chats/messageData.json'

export default function ChattingScreen({match}) {

  const chatPartner=((match.params.chatID).trim()).replace(":","");
  

  const messageData=messageDatas[chatPartner].chat;
  const EUNKO = 'https://img.techpowerup.org/200908/eun.png';
  const COOL = 'https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png';
 

  const [messageList, setMessage] = useState(messageData);
  const [newMessage, setNewMessage] = useState({
    user: false,
    content: '',
  });

  const addNewChat = (e) => {
    e.preventDefault();
    if (newMessage.content === '') {
      alert('type something!!');
      return;
    }
    setMessage([...messageList, newMessage]);
    setNewMessage({ ...newMessage, content: '' });
  };


  const changeInputChat = (e) => {
    const { name, value } = e.target; //name으로 구별, value는 값 자체
    setNewMessage({
      ...newMessage,
      [name]: value,
    });
  };

  const changeUser = (e) => {
    return newMessage.user
      ? setNewMessage({ user: false, content: newMessage.content })
      : setNewMessage({ user: true, content: newMessage.content });
  };

  useEffect(() => {
    window.scrollBy(1000, document.body.scrollHeight);
  }, [newMessage]);

  return (
    <Wrapper>
      <Header
        {...{ changeUser }}
        user={newMessage.user ? '고은' : '정쿨'}
        imgURL={newMessage.user ? messageDatas[chatPartner].image : COOL}
      ></Header>
      <MessageList>
        {messageList.map((message, index) => {
          if (message.user) {
            return (
              <ChatLine left>
                <Profile src={messageDatas[chatPartner].image} width='50' height='50' />
                <ChatBox left>{message.content}</ChatBox>
              </ChatLine>
            );
          }
          return (
            <ChatLine>
              <ChatBox>{message.content}</ChatBox>
              <Profile src={COOL} width='50' height='50' />
            </ChatLine>
          );
        })}
      </MessageList>
      <MessageSender
        {...{ addNewChat }}
        {...{ newMessage }}
        {...{ changeInputChat }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: "white";
  height:100%;
`;

const MessageList = styled.div`
  background-color: "white";
  overflow-y: hidden;
  padding: 100px 10px;
`;

const ChatLine = styled.div`
  display: flex;
  justify-content: center;
  clear: both;
  float: ${(props) => (props.left ? 'left' : 'right')};

`;
const Profile = styled.img`
  border-radius: 50%;
  margin-top: 15px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
`;
const ChatBox = styled.div`
display:table;
background: white;
padding 1rem; 
border-radius: 40px;
border-style: solid;
border-width: thin;
border-color: #d6d6d6;
margin:15px 10px 0px 10px;
font-size:15px;

background-color:${(props) => (props.left ? 'white' : '#d6d6d6')};

`;
