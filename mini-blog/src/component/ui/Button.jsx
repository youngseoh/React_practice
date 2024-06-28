import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
padding : 8px, 16px;
font-size: 16px;
border-width:1px;
border-radius:16px;
cursor:pointer;
`;

function Button(props){
    const{title,onClick}=props;
    return<StyledButton onClick={onClick}>{title||"button"}</StyledButton>; 
    // 버튼이 클릭되었을떄 onClick 함수를 사용 
    // title 에 null 값이 들어가면 :button"을 출력해줌 
}

export default Button; 