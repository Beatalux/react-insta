import React from 'react';
import styled from 'styled-components';


export default function MessageSender({
  addNewChat,
  newMessage,
  changeInputChat,
}) {
  return (
    <Wrapper>
      <Form>
        <Input
          type="text"
          name="content"
          placeholder="      Message..."
          value={newMessage.content}
          onChange={changeInputChat}
        ></Input>
        <Button onClick={addNewChat}>전송</Button>
      </Form>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
 
`;
const Form = styled.form`
  display: flex;
  height: 50px;
  padding: 10px;
  align-content: stretch;
  background-color: white;
  background: white;
`;

const Input = styled.input`
flex-grow:5;
type="text";
border: 1px solid rgba(0, 0, 0, 0.1);
border-radius:10%;
margin-right :15px;
margin-left :15px;
`;
const Button = styled.button`
flex-grow:1;
height:30

margin-right: 10px;
border:none;
border-radius:20px;
background-color:	#FFFF00;
text-align:center
`;
