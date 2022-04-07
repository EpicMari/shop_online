import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ formWrapper }) =>
    formWrapper &&
    css`
      height: 100vh;
      padding: 20vh 20px;
      max-width: 400px;
      margin: 0 auto;
    `}

  ${({ isHeaderWrapper }) =>
    isHeaderWrapper &&
    css`
      position: sticky;
      top: 0;
      z-index: 99;
      width: 100%;
      background: ${({ theme }) => theme.colors.white};
      border-bottom: 2px solid ${({ theme }) => theme.colors.darkBlue};
    `}

  ${({ headerWrapper__content }) =>
    headerWrapper__content &&
    css`
      display: flex;
      justify-content: flex-end;
      max-width: 1200px;
      margin: 0 auto;
    `}

  ${({ isHeaderNavLink }) =>
    isHeaderNavLink &&
    css`
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      background: ${({ theme }) => theme.colors.white};
      height: 100%;
      width: 100%;
      transform: translateX(100%);
      transition: transform 0.3s 0.1s linear;
      &.active {
        transform: translateX(0);
      }

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        flex-direction: row;
        width: fit-content;
        transform: translateX(0);
        height: 56px;
        align-items: center;
        justify-content: flex-end;
      }
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

    ${({ isTermsWrapper }) =>
    isTermsWrapper &&
    css`
      position: relative;
      display: flex;
      align-items: center;
      margin: 20px 0;
      left: -10px;
    `}
    ${({ isHomeWrapper }) =>
    isHomeWrapper &&
    css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 1200px;
      margin: 20px auto 20px;

      @media (min-width: ${({ theme }) => theme.devices.desktop}) {
        margin: 40px auto 0;
      }
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
      margin: 0 auto;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        width: 400px;
        padding: 0;
        grid-area: 2 / 1 / 2 / 3;
        justify-self: center;
      }
    `}

    ${({ isCheckoutWrapper }) =>
    isCheckoutWrapper &&
    css`
      height: 100%;
      display: grid;
      place-items: center;
      grid-template-columns: 1fr;
      grid-template-rows: 2fr auto auto;
      margin-top: 20px;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        height: 100vh;
        margin: 0;
      }
    `}

    ${({ isTotalCost }) =>
    isTotalCost &&
    css`
      margin: 20px 0;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        grid-area: 2 / 2;
        margin: 0;
      }
    `}

    ${({ isSingleProductWrapper }) =>
    isSingleProductWrapper &&
    css`
      padding: 10rem 5%;
      display: grid;
      place-items: center;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        padding: 15rem 0;
      }
    `}

    ${({ singleProductContent }) =>
    singleProductContent &&
    css`
      display: grid;
      place-items: center;
      padding: 20px;
      max-width: 1200px;
      box-shadow: ${({ theme }) => theme.boxShadow};

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
      display: none;
      position: absolute;
      right: -50%;
      text-align: center;
      width: fit-content;
      background-color: ${({ theme }) => theme.colors.white};
      padding: 0.5rem;
      border-radius: 0.25rem;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);

      .dropdown:hover & {
        display: block;
      }

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        right: 0;
      }
    `}

    ${({ paymentWrapper }) =>
    paymentWrapper &&
    css`
      max-width: 1400px;
      margin: 20px auto 0;
      padding: 0 10px;
      min-height: calc(100vh - 56px - 85px);

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        padding: 0;
      }
    `}
    
    ${({ paymentWrapper__content }) =>
    paymentWrapper__content &&
    css`
      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
      }
    `}

    ${({ paymentWrapper__info }) =>
    paymentWrapper__info &&
    css`
      box-shadow: ${({ theme }) => theme.boxShadow};
      padding: 20px;
      height: fit-content;
      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        grid-area: 1 / 1 / 1 / 1;
        justify-self: center;
      }
    `}

    ${({ paymentWrapper__cart }) =>
    paymentWrapper__cart &&
    css`
      margin: 15px 0 20px 0;

      @media (min-width: ${({ theme }) => theme.devices.laptop}) {
        grid-area: 1 / 2 / 1 / 2;
        margin: 0;
        justify-self: center;
      }
    `}
`;
