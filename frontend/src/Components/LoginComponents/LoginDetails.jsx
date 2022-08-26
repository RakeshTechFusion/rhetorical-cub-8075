import React from "react";
import { MdClose, MdSmartphone } from "react-icons/md";
import {
  LoginContainer,
  LoginHeader,
  LoginHeaderTitle,
  MobileOTPBoxBottomMessage,
  MobileOTPBoxBottomMessageDes,
  MobileOTPBoxBottomMessageLink,
  MobileOTPBoxBottomMessageLinkDiv,
  MobileOTPBoxBottomMessageTitle,
  MobileOTPBoxContainer,
  MobileOTPBoxHeader,
  MobileOTPBoxHeaderTitle,
} from "./Login.style";

const LoginDetails = () => {
  return (
    <LoginContainer>
      <LoginHeader>
        <MdClose />
        <LoginHeaderTitle>Login/Sign Up</LoginHeaderTitle>
      </LoginHeader>
      <MobileOTPBoxContainer>
        <MobileOTPBoxHeader>
          <MdSmartphone style={{ height: "30px", width: "30px" }} />
          <MobileOTPBoxHeaderTitle>Welcome!</MobileOTPBoxHeaderTitle>
        </MobileOTPBoxHeader>
        <MobileOTPBoxBottomMessageLinkDiv>
          <MobileOTPBoxBottomMessageDes fs="16px">
           Phone Number Verified - +91 xxxxxxxxx
          </MobileOTPBoxBottomMessageDes>
          <MobileOTPBoxBottomMessageLink fs="16px">
           
            (Terms and Conditions)
          </MobileOTPBoxBottomMessageLink>
        </MobileOTPBoxBottomMessageLinkDiv>
      </MobileOTPBoxContainer>
      <MobileOTPBoxBottomMessage>
        <MobileOTPBoxBottomMessageTitle>
          Registering for this site allows you to access your order status and
          history. Just fill in the fields below, and we'll get a new account
          set up for you in no time. We will only ask you for information
          necessary to make the purchase process faster and easier.
        </MobileOTPBoxBottomMessageTitle>
        <MobileOTPBoxBottomMessageLinkDiv>
          <MobileOTPBoxBottomMessageDes fs="12px">
            By Signing up or logging in, you agree to our
          </MobileOTPBoxBottomMessageDes>
          <MobileOTPBoxBottomMessageLink fs="14px">
            {" "}
            Terms and Conditions
          </MobileOTPBoxBottomMessageLink>
        </MobileOTPBoxBottomMessageLinkDiv>
      </MobileOTPBoxBottomMessage>
    </LoginContainer>
  );
};

export default LoginDetails;
