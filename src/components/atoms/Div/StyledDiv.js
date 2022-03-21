import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ isHeaderWrapper }) =>
    isHeaderWrapper &&
    css`
      position: fixed;
      top: 0;
      z-index: 99;
      width: 100vw;
      display: flex;
      justify-content: flex-end;
      max-width: 1200px;
      margin: 0 auto;
      background: ${({ theme }) => theme.colors.white};
    `}

  ${({ isHeaderNavLink }) =>
    isHeaderNavLink &&
    css`
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      background: ${({ theme }) => theme.colors.white};
      width: 100vw;
      height: 100%;
      transform: translateX(100%);
      transition: transform 0.3s 0.1s linear;
      &.active {
        transform: translateX(0);
      }

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        transform: translateX(0);
        height: 56px;
        align-items: center;
        justify-content: flex-end;
        max-width: 1200px;
      }
    `}


    ${({ isLoginFormWrapper }) =>
    isLoginFormWrapper &&
    css`
      width: 100%;
      padding: 0 20px;
      max-width: 400px;
      margin: 0 auto;
    `}

    ${({ isRegisterFormWrapper }) =>
    isRegisterFormWrapper &&
    css`
      width: 100%;
      padding: 0 20px;
      max-width: 400px;
      margin: 0 auto;
    `}

    ${({ isContactWrapper }) =>
    isContactWrapper &&
    css`
      width: 100%;
      padding: 0 20px;
      max-width: 400px;
      margin: 0 auto;
    `}

    ${({ isContentWrapper }) =>
    isContentWrapper &&
    css`
      width: 100%;
      padding: 0 20px;
      max-width: 400px;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        grid-area: 1 / 1 / 3 / 1;
        margin: 0 20px;
      }
    `}

    ${({ isDeliveryMethod }) =>
    isDeliveryMethod &&
    css`
      margin-top: 20px;
    `}

    ${({ isRegisterTermsWrapper }) =>
    isRegisterTermsWrapper &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    `}
    ${({ isHomeWrapper }) =>
    isHomeWrapper &&
    css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      margin-bottom: 20px;

      @media (min-width: ${({ theme }) => theme.devices.desktop}) {
        margin: 0;
      }
    `}

    ${({ isContactTermsWrapper }) =>
    isContactTermsWrapper &&
    css`
      position: relative;
      display: flex;
      align-items: center;
      margin-top: 20px;
      left: -10px;
    `}

    ${({ isPlusMinusWrapper }) =>
    isPlusMinusWrapper &&
    css`
      display: flex;
      align-items: center;
      grid-row: 2 / auto;
      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        grid-area: 1 / 3;
      }
    `} 

    ${({ isLastThreeNewItems }) =>
    isLastThreeNewItems &&
    css`
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;

      @media (min-width: ${({ theme }) => theme.devices.desktop}) {
        flex-direction: row;
        justify-content: center;
      }
    `}

    ${({ isHomeSentenceWrapper }) =>
    isHomeSentenceWrapper &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      height: 150px;
      width: 100%;
      background: ${({ theme }) => theme.colors.darkBlue};
    `}
    
    
    ${({ isHomeAbout }) =>
    isHomeAbout &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      @media (min-width: ${({ theme }) => theme.devices.desktop}) {
        flex-direction: row;
      }
    `}

    ${({ isHomeAboutContent }) =>
    isHomeAboutContent &&
    css`
      display: flex;
      flex-direction: column;
    `}

    ${({ isFooterSocial }) =>
    isFooterSocial &&
    css`
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: grid;
      align-content: center;
      height: 85px;
      width: 100%;
      background: ${({ theme }) => theme.colors.darkKhaki};
    `}

    ${({ isModalFilter }) =>
    isModalFilter &&
    css`
      display: flex;
      margin-top: 10px;
      justify-content: center;
    `}

    ${({ isHomeCycle }) =>
    isHomeCycle &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      @media (min-width: ${({ theme }) => theme.devices.desktop}) {
        flex-direction: row-reverse;
      }
    `}

    ${({ isHomeCycleContent }) =>
    isHomeCycleContent &&
    css`
      display: flex;
      flex-direction: column;
    `}

    ${({ isCartImgHeadingWrapper }) =>
    isCartImgHeadingWrapper &&
    css`
      display: flex;
    `}

    ${({ isPaypalButtons }) =>
    isPaypalButtons &&
    css`
      position: relative;
      z-index: 0;
      padding: 0 20px;
      max-width: 400px;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        width: 400px;
        padding: 0;
        grid-area: 2 / 2;
      }
    `}

    ${({ isCheckoutWrapper }) =>
    isCheckoutWrapper &&
    css`
      display: grid;
      place-items: center;
      grid-template-columns: 1fr;
      grid-template-rows: 2fr auto auto;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
      }
    `}

    ${({ isTotalCost }) =>
    isTotalCost &&
    css`
      margin: 20px 0;
    `}

    ${({ isSingleProductWrapper }) =>
    isSingleProductWrapper &&
    css`
      display: grid;
      place-items: center;
      margin: 80px 10px 0;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr auto auto auto;
      }
    `}

    ${({ headerUl__dropdown }) =>
    headerUl__dropdown &&
    css`
      position: relative;
    `}

    ${({ headerUl__dropdownMenu }) =>
    headerUl__dropdownMenu &&
    css`
      position: absolute;
      left: 0;
      top: calc(100% + 0.25rem);
      background-color: ${({ theme }) => theme.colors.white};
      padding: 0.75rem;
      border-radius: 0.25rem;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
      opacity: 0;
      /* pointer-events: none; */
      transform: translateY(-10px)
      transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    `}

    ${({ paymentWrapper }) =>
    paymentWrapper &&
    css`
      width: 100%;
      padding: 10%;
    `}

    ${({ paymentWrapper__cart }) =>
    paymentWrapper__cart &&
    css`
      margin: 15px 0 20px 0;
    `}
`;
