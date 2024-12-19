import React, { useRef } from 'react';
import { FooterConatiner, FooterIcons } from './style/FooterStyle';

const Footer = () => {
  const footer_datas = useRef([
    { title: '고객센터 이용문의', info: 'cs@popflix.co.kr / 02-123-1234 (유료)' },
    { title: '회사명', info: 'POPFLIX' },
    { title: '대표', info: '귀엽조' },
    { title: '주소', info: '서울특별시 용산구 한강대로 32' },
    { title: '사업자등록번호', info: '123-12-123456' },
  ]);

  return (
    <FooterConatiner>
      <div className="inner__section bold">
        <div className="info__section">
          <div className="info__wrap">
            <div className="info__top">Popflix 서비스 이용약관 &nbsp; | &nbsp; 개인정보 처리 방침 &nbsp; | &nbsp; 고객센터</div>
            <div className="info__section info__mid ">
              {footer_datas.current.map((data, index) => {
                return (
                  <div className="div__row regular" key={data.title + index}>
                    <div className="info__left">{data.title}</div>
                    <div>{data.info}</div>
                  </div>
                );
              })}
            </div>
            <div className="div__row">
              <img className="img" src="/assets/logo.svg" alt="로고 이미지" />
              <span className="text__bottom">Copyright ⓒ 2024 by Popflix, Inc, All rights reserved.</span>
            </div>
          </div>
        </div>
        <div className="info__wrap">
          <FooterIcons className="icons">
            <img className="icon" src="/assets/youtube_dark.svg" alt="유튜브 로고" />
            <img className="icon" src="/assets/instagram_dark.svg" alt="인스타그램 로고" />
            <img className="icon" src="/assets/x_dark.svg" alt="X 로고" />
            <img className="icon" src="/assets/blog_dark.svg" alt="네이버 블로그 로고" />
          </FooterIcons>
        </div>
      </div>
    </FooterConatiner>
  );
};

export default Footer;
