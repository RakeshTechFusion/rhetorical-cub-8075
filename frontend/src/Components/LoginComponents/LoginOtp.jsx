import React from "react";
import { MdClose, MdSmartphone } from "react-icons/md";
import {
  EnterOtpDiv,
  EnterOtpForm,
  EnterOtpFormInput,
  EnterOtpFormInputDiv,
  EnterOtpFormInputMainDiv,
  EnterOtpFormInputVerifyButton,
  EnterOtpheader,
  LoginContainer,
  LoginHeader,
  LoginHeaderTitle,
  MobileOTPBoxBottomMessage,
  MobileOTPBoxBottomMessageDes,
  MobileOTPBoxBottomMessageLink,
  MobileOTPBoxBottomMessageLinkDiv,
  MobileOTPBoxBottomMessageTitle,
  MobileOTPBoxContainer,
  MobileOTPBoxFooter,
  MobileOTPBoxFooterCheckbox,
  MobileOTPBoxFooterCheckboxLabel,
  MobileOTPBoxFooterLink,
  MobileOTPBoxHeader,
  MobileOTPBoxHeaderTitle,
  MobileOTPForm,
  MobileOTPFormBottomHR,
  MobileOTPFormendNum,
  MobileOTPFormInput,
  MobileOTPFormInputDiv,
  MobileOTPFormInputEnd,
  MobileOTPFormInputEndInput,
  MobileOTPFormInputMiddle,
  MobileOTPFormMessage,
  MobileOTPFormMessageDiv,
  MobileOTPFormstartDiv,
} from "./Login.style";

const LoginOtp = () => {
  return (
    <LoginContainer>
      <LoginHeader>
        <MdClose />
        <LoginHeaderTitle>Login/Sign Up</LoginHeaderTitle>
      </LoginHeader>
      <MobileOTPBoxContainer>
        <MobileOTPBoxHeader>
          <MdSmartphone style={{ height: "30px", width: "30px" }} />
          <MobileOTPBoxHeaderTitle>
            Login/Sign Up Using Phone
          </MobileOTPBoxHeaderTitle>
        </MobileOTPBoxHeader>
        <MobileOTPForm>
          <MobileOTPFormstartDiv>
            <MobileOTPFormendNum>+91</MobileOTPFormendNum>
          </MobileOTPFormstartDiv>
          <MobileOTPFormInputMiddle>
            <MobileOTPFormInputDiv>
              <MobileOTPFormInput autoComplete="off" type="tel" maxLength="1" />
            </MobileOTPFormInputDiv>
            <MobileOTPFormInputDiv>
              <MobileOTPFormInput autoComplete="off" type="tel" maxLength="1" />
            </MobileOTPFormInputDiv>
            <MobileOTPFormInputDiv>
              <MobileOTPFormInput autoComplete="off" type="tel" maxLength="1" />
            </MobileOTPFormInputDiv>
            <MobileOTPFormInputDiv>
              <MobileOTPFormInput autoComplete="off" type="tel" maxLength="1" />
            </MobileOTPFormInputDiv>
            <MobileOTPFormInputDiv>
              <MobileOTPFormInput autoComplete="off" type="tel" maxLength="1" />
            </MobileOTPFormInputDiv>
            <MobileOTPFormInputDiv>
              <MobileOTPFormInput autoComplete="off" type="tel" maxLength="1" />
            </MobileOTPFormInputDiv>
            <MobileOTPFormInputDiv>
              <MobileOTPFormInput autoComplete="off" type="tel" maxLength="1" />
            </MobileOTPFormInputDiv>
            <MobileOTPFormInputDiv>
              <MobileOTPFormInput autoComplete="off" type="tel" maxLength="1" />
            </MobileOTPFormInputDiv>
            <MobileOTPFormInputDiv>
              <MobileOTPFormInput autoComplete="off" type="tel" maxLength="1" />
            </MobileOTPFormInputDiv>
            <MobileOTPFormInputDiv>
              <MobileOTPFormInput autoComplete="off" type="tel" maxLength="1" />
            </MobileOTPFormInputDiv>
          </MobileOTPFormInputMiddle>
          <MobileOTPFormInputEnd>
            <MobileOTPFormInputEndInput type="submit" value="Request OTP" />
          </MobileOTPFormInputEnd>
        </MobileOTPForm>
        <MobileOTPFormMessageDiv>
          <MobileOTPFormMessage>
            Enter your phone number to request an OTP
          </MobileOTPFormMessage>
        </MobileOTPFormMessageDiv>
        <MobileOTPFormBottomHR />
        <EnterOtpDiv>
          <EnterOtpheader>
            Enter the 4 digit OTP received on your phone.
          </EnterOtpheader>
          <EnterOtpForm>
            <EnterOtpFormInputMainDiv>
              <EnterOtpFormInputDiv>
                <EnterOtpFormInput type="tel" maxLength="1" />
              </EnterOtpFormInputDiv>
              <EnterOtpFormInputDiv>
                <EnterOtpFormInput />
              </EnterOtpFormInputDiv>
              <EnterOtpFormInputDiv>
                <EnterOtpFormInput />
              </EnterOtpFormInputDiv>
              <EnterOtpFormInputDiv>
                <EnterOtpFormInput />
              </EnterOtpFormInputDiv>
            </EnterOtpFormInputMainDiv>
            <EnterOtpFormInputVerifyButton type="submit" value="Verify OTP" />
          </EnterOtpForm>
        </EnterOtpDiv>
        <MobileOTPBoxFooter>
          <MobileOTPBoxFooterCheckbox type="checkbox" />
          <MobileOTPBoxFooterCheckboxLabel>
            Get Important Updates on Whatsapp.
          </MobileOTPBoxFooterCheckboxLabel>
          <MobileOTPBoxFooterLink>Terms and Conditions</MobileOTPBoxFooterLink>
        </MobileOTPBoxFooter>
      </MobileOTPBoxContainer>
      <MobileOTPBoxBottomMessage>
        <MobileOTPBoxBottomMessageTitle>
          Registering for this site allows you to access your order status and
          history. Just fill in the fields below, and we'll get a new account
          set up for you in no time. We will only ask you for information
          necessary to make the purchase process faster and easier.
        </MobileOTPBoxBottomMessageTitle>
        <MobileOTPBoxBottomMessageLinkDiv>
          <MobileOTPBoxBottomMessageDes>
            By Signing up or logging in, you agree to our
          </MobileOTPBoxBottomMessageDes>
          <MobileOTPBoxBottomMessageLink>
            {" "}
            Terms and Conditions
          </MobileOTPBoxBottomMessageLink>
        </MobileOTPBoxBottomMessageLinkDiv>
      </MobileOTPBoxBottomMessage>
    </LoginContainer>
  );
};

export default LoginOtp;
