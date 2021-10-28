(this["webpackJsonpcrowdfundin-product"]=this["webpackJsonpcrowdfundin-product"]||[]).push([[0],{21:function(n,e,a){},22:function(n,e,a){"use strict";a.r(e);var t,o,c,r=a(1),d=a.n(r),i=a(10),s=a.n(i),l=a(4),m=a(2),b=a(3),p=(a(5),Object(b.b)(t||(t=Object(m.a)(["\n     0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n"])))),u=Object(b.b)(o||(o=Object(m.a)(["\n     0% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n    }\n"]))),h=b.a.header(c||(c=Object(m.a)(["\n  position: relative;\n\n  //heros\n  img {\n    width: 100%;\n    display: block;\n  }\n  .header__heroDesktop {\n    display: block;\n  }\n  .header__heroMobile {\n    display: none;\n  }\n\n  //navigation menu\n  .header__navigation {\n    position: absolute;\n    top: 0;\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    padding: 20px 20px;\n\n    .header__logo {\n      position: relative;\n      left: 120px;\n      top: 30px;\n    }\n\n    .header__ul {\n      position: absolute;\n      right: 120px;\n      top: 50px;\n      display: flex;\n      z-index: 97;\n\n      li {\n        a {\n          font-weight: 500;\n          color: #fff;\n          cursor: pointer;\n\n          &:hover {\n            color: #ececf4;\n          }\n        }\n      }\n\n      li + li {\n        margin-left: 20px;\n      }\n    }\n  }\n\n  //button\n  .header__showMenu {\n    display: none;\n  }\n\n  @media screen and (max-width: 600px) {\n    .header__heroDesktop {\n      display: none;\n    }\n\n    .header__heroMobile {\n      display: block;\n    }\n\n    .header__navigation {\n      .header__logo {\n        position: relative;\n        left: 7px;\n        top: 0;\n      }\n\n      .header__ul {\n        display: none;\n        background-color: #fff;\n        width: 90%;\n        border-radius: 6px;\n        left: 50%;\n        top: 90px;\n        transform: translateX(-50%);\n\n        li {\n          padding: 24px;\n\n          a {\n            color: var(--black);\n          }\n        }\n\n        li + li {\n          border-top: 1px solid #ddd;\n          margin-left: 0;\n        }\n      }\n\n      //animations\n      .fadeIn {\n        animation-name: ",";\n        animation-duration: 1s;\n        animation-fill-mode: both;\n        flex-direction: column;\n      }\n\n      .fadeOut {\n        animation-name: ",";\n        animation-duration: 1s;\n        animation-fill-mode: both;\n      }\n    }\n\n    .header__showMenu {\n      display: block;\n    }\n  }\n"])),p,u);window.onresize=function(){window.innerWidth>601&&(document.querySelector(".header__ul").style.display="flex")};var x,j,_,f,g,y,O,k=a.p+"static/media/icon-hamburger.f8a9f0cf.svg",v=a.p+"static/media/icon-close-menu.32169d31.svg",w=a.p+"static/media/logo.e6f12bc6.svg",N=a.p+"static/media/image-hero-mobile.d4f477d4.jpg",S=a.p+"static/media/image-hero-desktop.631209c1.jpg",q=a(0),M=function(n){var e=Object(r.useState)(!1),a=Object(l.a)(e,2),t=a[0],o=a[1],c=Object(r.useState)({fade:"fadeOut"}),d=Object(l.a)(c,2),i=d[0],s=d[1];return Object(q.jsxs)(h,{className:"header",children:[Object(q.jsx)("img",{className:"header__heroMobile",src:N,alt:"crowdfundin-product-img-mobile"}),Object(q.jsx)("img",{className:"header__heroDesktop",src:S,alt:"crowdfundin-product-img-mobile"}),Object(q.jsxs)("nav",{className:"header__navigation",children:[Object(q.jsx)("a",{href:"index.html",className:"header__logo",children:Object(q.jsx)("img",{src:w,alt:"logo-crowdfundin"})}),Object(q.jsx)("button",{type:"button",className:"header__showMenu",onClick:function(){o(!t),"fadeOut"===i.fade?(s({fade:"fadeIn"}),document.querySelector(".header__ul").style.display="block"):(s({fade:"fadeOut"}),setTimeout((function(){document.querySelector(".header__ul").style.display="none"}),1e3))},children:Object(q.jsx)("img",{src:t?v:k,alt:"menu-hamburguer-img"})}),Object(q.jsxs)("ul",{className:"header__ul ".concat(i.fade),children:[Object(q.jsx)("li",{children:Object(q.jsx)("a",{href:" #",children:"About"})}),Object(q.jsx)("li",{children:Object(q.jsx)("a",{href:" #",children:"Discover"})}),Object(q.jsx)("li",{children:Object(q.jsx)("a",{href:" #",children:"Get Started"})})]})]})]})},z=b.a.section(x||(x=Object(m.a)(['\n  text-align: center;\n\n  .master-craft__container {\n    position: relative;\n    top: -80px;\n    margin: 0 auto;\n    max-width: 670px;\n    border: 1px solid #f4f4f4;\n    background-color: #ffffff;\n    border-radius: 7px;\n\n    .master-craft__logo {\n      position: relative;\n      top: -32px;\n    }\n\n    h2 {\n      font-size: 1.5rem;\n      font-weight: 700;\n      width: 100%;\n    }\n\n    p {\n      color: var(--dark-gray);\n      width: 100%;\n      margin: 20px auto 0 auto;\n      font-size: 1rem;\n      line-height: 1.7;\n      font-weight: 400;\n    }\n\n    .master-craft__buttons {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin: 40px auto 40px auto;\n      width: 94%;\n\n      .master-craft__backProject {\n        width: 190px;\n        height: 50px;\n      }\n      .master-craft__bookmark-area {\n        position: relative;\n        background-color: #f4f8f9;\n        border-radius: 40px;\n        width: 200px;\n        padding: 20px;\n        display: block;\n\n        span {\n          color: var(--moderate-cyan);\n          font-family: "Commissioner", sans-serif;\n          font-weight: 700;\n          margin-left: 45px;\n          cursor: pointer;\n\n          &::before {\n            content: "Bookmarked";\n          }\n\n          &:hover {\n            color: var(--dark-gray);\n\n            &::before {\n              content: " ";\n            }\n            &::after {\n              content: "Bookmark";\n            }\n          }\n        }\n      }\n\n      .master-craft__bookmark {\n        position: absolute;\n        top: 0;\n        left: 0;\n      }\n\n      .master-craft__backProject {\n        &:hover {\n          background-color: var(--dark-cyan);\n        }\n      }\n\n      .master-craft__bookmark--gray {\n        display: none;\n      }\n    }\n  }\n\n  @media screen and (max-width: 600px) {\n    .master-craft__container {\n      width: 85%;\n      top: -50px;\n\n      h2 {\n        font-size: 18px;\n        width: 80%;\n        margin: 0 auto;\n      }\n\n      p {\n        margin: 30px auto 0 auto;\n        padding: 0 20px;\n        font-size: 14px;\n      }\n\n      .master-craft__buttons {\n        display: flex;\n        margin: 30px 20px 40px 20px;\n\n        .master-craft__bookmark {\n          margin-left: 10px;\n        }\n\n        .master-craft__bookmark-area {\n          display: none;\n        }\n\n        .master-craft__bookmark--gray {\n          display: block;\n          margin: 0 30px 0 0;\n        }\n      }\n    }\n  }\n']))),B=b.a.button(j||(j=Object(m.a)(["\n  background-color: ",";\n  width: ",";\n  height: ",";\n  border-radius: 40px;\n  color: #fff;\n"])),(function(n){return n.background?"var(--moderate-cyan)":"#cbcbcb"}),(function(n){return n.widthDefault?"210px":"155px"}),(function(n){return n.heigthDefault?"55px":"50px"})),L=a.p+"static/media/logo-mastercraft.dca2a831.svg",C=a.p+"static/media/icon-bookmark-cyan.6c6172c6.svg",Y=a.p+"static/media/icon-bookmark-gray.7777f8ec.svg",E=function(n){var e=Object(r.useState)(C),a=Object(l.a)(e,2),t=a[0],o=a[1];return Object(q.jsx)(z,{className:"master-craft",children:Object(q.jsxs)("div",{className:"master-craft__container",children:[Object(q.jsx)("img",{className:"master-craft__logo",src:L,alt:"logo-mastercraft"}),Object(q.jsx)("h2",{children:"Mastercraft Bamboo Monitor Riser"}),Object(q.jsx)("p",{children:"A beautiful & handcrafted monitor stand to reduce neck and eye strain."}),Object(q.jsxs)("div",{className:"master-craft__buttons",children:[Object(q.jsx)(B,{className:"master-craft__backProject",background:!0,children:"Back this project"}),Object(q.jsxs)("div",{className:"master-craft__bookmark-area",children:[Object(q.jsx)("span",{onMouseEnter:function(){o(Y)},onMouseLeave:function(){o(C)}}),Object(q.jsx)("button",{className:"master-craft__bookmark",children:Object(q.jsx)("img",{src:t,alt:"Icon-book-mark"})})]}),Object(q.jsx)("button",{className:"master-craft__bookmark--gray",children:Object(q.jsx)("img",{src:Y,alt:"icon-book-mark"})})]})]})})},I=b.a.section(_||(_=Object(m.a)(['\n  .price-area__container {\n    margin: -60px auto 0 auto;\n    max-width: 670px;\n    border: 1px solid #f4f4f4;\n    background-color: #ffffff;\n    border-radius: 7px;\n    padding: 20px;\n    text-align: center;\n\n    .price-area__content {\n      display: flex;\n\n      .price-area__box {\n        margin: 20px 0;\n        border-right: 1px solid #cbcbcb;\n\n        &:last-child {\n          border-right: 0;\n        }\n\n        h2 {\n          font-weight: 700;\n          font-size: 2rem;\n        }\n\n        p {\n          margin-top: 7px;\n          color: var(--dark-gray);\n          font-weight: 400;\n          font-size: 15px;\n        }\n      }\n\n      .box-first {\n        padding: 0 50px 0 20px;\n        text-align: left;\n      }\n\n      .box-second {\n        text-align: left;\n        padding: 0 90px 0 50px;\n      }\n\n      .box-third {\n        text-align: left;\n        padding-left: 30px;\n      }\n    }\n\n    .price-area__progress-bar {\n      &::before {\n        content: ".";\n        color: #f4f4f4;\n      }\n\n      background-color: #f4f4f4;\n      border-radius: 20px;\n      margin: 30px 10px;\n      text-align: left;\n\n      span {\n        &::before {\n          content: ".";\n          color: var(--moderate-cyan);\n        }\n        display: inline-block;\n        background-color: var(--moderate-cyan);\n        border-radius: 20px;\n        margin-right: auto;\n        width: 75%;\n      }\n    }\n  }\n\n  @media screen and (max-width: 600px) {\n    .price-area__container {\n      margin: -20px auto 0 auto;\n      max-width: 85%;\n\n      .price-area__content {\n        flex-direction: column;\n\n        .box-first,\n        .box-second,\n        .box-third {\n          padding: 0;\n          text-align: center;\n        }\n\n        .price-area__box {\n          border-right: 0;\n          padding-right: 0;\n          span {\n            &::before {\n              content: " .";\n              color: #fff;\n            }\n            border-bottom: 1px solid var(--dark-gray);\n            display: inline-block;\n            width: 90px;\n            margin: 10px 0;\n          }\n        }\n      }\n\n      .price-area__progress-bar {\n        margin: 20px 0;\n      }\n    }\n  }\n']))),P=function(n){return Object(q.jsx)(I,{className:"price-area",children:Object(q.jsxs)("div",{className:"price-area__container",children:[Object(q.jsxs)("div",{className:"price-area__content",children:[Object(q.jsxs)("div",{className:"price-area__box box-first",children:[Object(q.jsx)("h2",{children:"$89,914"}),Object(q.jsx)("p",{children:"of $100,000 backed"}),Object(q.jsx)("span",{})]}),Object(q.jsxs)("div",{className:"price-area__box box-second",children:[Object(q.jsx)("h2",{children:"5,007"}),Object(q.jsx)("p",{children:"total backers"}),Object(q.jsx)("span",{})]}),Object(q.jsxs)("div",{className:"price-area__box box-third",children:[Object(q.jsx)("h2",{children:"56"}),Object(q.jsx)("p",{children:"days left"})]})]}),Object(q.jsx)("div",{className:"price-area__progress-bar",children:Object(q.jsx)("span",{})})]})})},$=b.a.section(f||(f=Object(m.a)(["\n  .abount-area__container {\n    margin: 20px auto;\n    max-width: 670px;\n    border: 1px solid #f4f4f4;\n    background-color: #ffffff;\n    border-radius: 7px;\n    padding: 30px 25px 20px 25px;\n\n    .abount-area__description {\n      h2 {\n        margin: 10px 0 30px 0;\n        font-weight: 700;\n      }\n\n      p {\n        margin-bottom: 30px;\n        color: var(--dark-gray);\n        font-weight: 400;\n        font-size: 15px;\n        width: 96%;\n      }\n    }\n  }\n\n  @media screen and (max-width: 600px) {\n    .abount-area__container {\n      width: 85%;\n\n      .abount-area__description {\n        p {\n          font-size: 12px;\n          width: 94%;\n        }\n      }\n    }\n  }\n"]))),T=b.a.div(g||(g=Object(m.a)(["\n  border: 1px solid #d8d8d8;\n  padding: 20px;\n  border-radius: 7px;\n  margin-bottom: 15px;\n\n  .about-card__title {\n    display: flex;\n    justify-content: space-between;\n    margin-right: 15px;\n\n    h3 {\n      font-weight: 700;\n      font-size: 1.2rem;\n    }\n\n    h4 {\n      color: var(--moderate-cyan);\n      font-size: 14px;\n    }\n  }\n\n  .about-card__body {\n    .about-card__description {\n      margin: 25px 0;\n      color: var(--dark-gray);\n      font-weight: 400;\n      font-size: 16px;\n      width: 100%;\n      line-height: 1.8;\n    }\n  }\n\n  .about-card__footer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 15px;\n\n    .about-card__left {\n      font-weight: 700;\n      font-size: 1.6rem;\n\n      span {\n        color: var(--dark-gray);\n        font-weight: 400;\n        font-size: 1.2rem;\n      }\n    }\n\n    .about-card__button {\n      /* background-color: var(--moderate-cyan);\n      width: 210px;\n      height: 55px;\n      border-radius: 40px;\n      color: #fff; */\n\n      &:hover {\n        background-color: var(--dark-cyan);\n      }\n    }\n  }\n\n  //about mahogany button\n  .about-mahogany {\n    .about-card__button-mahogany {\n      &:hover {\n        background-color: none !important;\n      }\n    }\n  }\n  @media screen and (max-width: 600px) {\n    .about-card__title {\n      flex-direction: column;\n\n      h3 {\n        margin-bottom: 7px;\n        font-size: 14px;\n      }\n    }\n\n    .about-card__body {\n      .about-card__description {\n        font-size: 12px;\n        width: 93%;\n        line-height: 1.5;\n      }\n    }\n\n    .about-card__footer {\n      flex-direction: column;\n      align-items: flex-start;\n\n      .about-card__left {\n        margin-bottom: 25px;\n      }\n    }\n  }\n"]))),D=function(n){var e=Object(r.useState)(!1),a=Object(l.a)(e,2),t=a[0],o=a[1];return Object(q.jsx)(q.Fragment,{children:Object(q.jsx)($,{className:"abount-area",children:Object(q.jsxs)("div",{className:"abount-area__container",children:[Object(q.jsxs)("div",{className:"abount-area__description",children:[Object(q.jsx)("h2",{children:"About this project"}),Object(q.jsx)("p",{children:"The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand."}),Object(q.jsx)("p",{children:"Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand."})]}),Object(q.jsxs)("div",{className:"about-area__cards",children:[Object(q.jsxs)(T,{className:"about-card",children:[Object(q.jsxs)("div",{className:"about-card__title",children:[Object(q.jsx)("h3",{children:"Bamboo Stand"}),Object(q.jsx)("h4",{children:"Pledge $25 or more"})]}),Object(q.jsx)("div",{className:"about-card__body",children:Object(q.jsx)("p",{className:"about-card__description",children:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you\u2019ll be added to a special Backer member list."})}),Object(q.jsxs)("div",{className:"about-card__footer",children:[Object(q.jsxs)("p",{className:"about-card__left",children:["101 ",Object(q.jsx)("span",{children:"left"})]}),Object(q.jsx)(B,{background:!0,className:"about-card__button",onClick:function(){o((function(){t||(document.querySelector(".modal").classList.remove("fadeOutModal"),document.querySelector(".modal").classList.add("fadeInModal"),document.querySelector(".modal").style.display="block")}))},children:"Select Reward"})]})]}),Object(q.jsxs)(T,{className:"about-card",children:[Object(q.jsxs)("div",{className:"about-card__title",children:[Object(q.jsx)("h3",{children:"Black Edition Stand"}),Object(q.jsx)("h4",{children:"Pledge $75 or more"})]}),Object(q.jsx)("div",{className:"about-card__body",children:Object(q.jsx)("p",{className:"about-card__description",children:"You get a Black Special Edition computer stand and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included."})}),Object(q.jsxs)("div",{className:"about-card__footer",children:[Object(q.jsxs)("p",{className:"about-card__left",children:["64 ",Object(q.jsx)("span",{children:"left"})]}),Object(q.jsx)(B,{className:"about-card__button",background:!0,onClick:function(){o((function(){t||(document.querySelector(".modal").classList.remove("fadeOutModal"),document.querySelector(".modal").classList.add("fadeInModal"),document.querySelector(".modal").style.display="block")}))},children:"Select Reward"})]})]}),Object(q.jsxs)(T,{className:"about-card about-mahogany",onClick:function(){o((function(){t||(document.querySelector(".modal").classList.remove("fadeOutModal"),document.querySelector(".modal").classList.add("fadeInModal"),document.querySelector(".modal").style.display="block")}))},children:[Object(q.jsxs)("div",{className:"about-card__title",children:[Object(q.jsx)("h3",{style:{color:"#7d7d7d"},children:"Mahogany Special Edition"}),Object(q.jsx)("h4",{style:{color:"#a5d4ce"},children:"Pledge $200 or more"})]}),Object(q.jsx)("div",{className:"about-card__body",children:Object(q.jsx)("p",{className:"about-card__description",style:{color:"#b9b9b9"},children:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included."})}),Object(q.jsxs)("div",{className:"about-card__footer",children:[Object(q.jsxs)("p",{className:"about-card__left",style:{color:"#818181"},children:["0 ",Object(q.jsx)("span",{children:"left"})]}),Object(q.jsx)(B,{className:"about-card__button-mahogany",children:"Out of Stock"})]})]})]})]})})})},R=a.p+"static/media/icon-close-modal.732388df.svg",A=a.p+"static/media/icon-check.bdee5269.svg",F=b.a.div(y||(y=Object(m.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: calc(100vh + 70%);\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 99;\n  display: none;\n\n  .modal__container {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 50%;\n    transform: translate(-50%, -50%);\n    padding: 30px 20px 30px 20px;\n    background-color: #fff;\n    border-radius: 7px;\n\n    //modal - title\n    .modal__title {\n      div {\n        display: flex;\n        justify-content: space-between;\n\n        button {\n          background-color: transparent;\n        }\n      }\n      p {\n        margin: 30px 0 20px 0;\n        color: var(--dark-gray);\n        font-size: 16px;\n      }\n    }\n\n    //modal - container\n    .modal__card {\n      border: 1px solid #d8d8d8;\n      border-radius: 7px;\n      margin-bottom: 15px;\n      position: relative;\n\n      .modal__card-title {\n        display: flex;\n        align-items: center;\n        margin: 10px 0 20px 0;\n        padding: 20px 0 20px 30px;\n\n        div {\n          display: flex;\n          align-items: center;\n          h3 {\n            cursor: pointer;\n\n            &:hover {\n              color: var(--moderate-cyan);\n            }\n          }\n        }\n\n        .modal__card-choose {\n          margin-right: 25px;\n          width: 30px;\n          height: 30px;\n          border: 1px solid #d8d8d8;\n          border-radius: 50%;\n          color: transparent;\n          cursor: default;\n\n          .btn-check {\n            background-color: var(--moderate-cyan);\n            width: 15px;\n            height: 15px;\n            border-radius: 50%;\n            display: inline-block;\n            position: relative;\n            top: 2px;\n            left: -1px;\n            display: none;\n          }\n        }\n\n        h3 {\n          font-size: 14px;\n        }\n\n        h4 {\n          color: var(--moderate-cyan);\n          margin-left: 20px;\n        }\n      }\n\n      .modal__card-body {\n        .modal__card-description {\n          padding: 20px 0 20px 30px;\n\n          p {\n            color: var(--dark-gray);\n            font-size: 16px;\n            width: 97%;\n            line-height: 1.8;\n            padding-left: 50px;\n            margin: -30px 0 15px 0;\n          }\n\n          .modal__card-text {\n            width: 97%;\n          }\n\n          .modal__card-left {\n            font-weight: 700;\n            font-size: 1.6rem;\n            color: var(--black);\n            width: 150px;\n            position: absolute;\n            top: 50px;\n            right: 20px;\n\n            span {\n              color: var(--dark-gray);\n              font-weight: 400;\n              font-size: 1.2rem;\n              margin-left: 6px;\n            }\n          }\n        }\n\n        .modal__pledge {\n          border-top: 1px solid #d8d8d8;\n          width: 100%;\n          display: flex;\n          align-items: center;\n          padding: 20px;\n          display: none;\n\n          h4 {\n            color: var(--dark-gray);\n            font-weight: 400;\n            width: 100%;\n          }\n\n          .modal__pledge-buttons {\n            display: flex;\n            align-items: center;\n            justify-content: end;\n            width: 300px;\n            padding-top: 10px;\n\n            button + button {\n              margin-left: 10px;\n            }\n\n            button {\n              padding: 15px;\n              border-radius: 20px;\n            }\n\n            .modal__pledge-buttons-number {\n              border: 1px solid #d8d8d8;\n              width: 100px;\n              color: var(--black);\n              cursor: default;\n\n              .modal__pledge-dollar-sign {\n                color: var(--dark-gray);\n                margin-left: -17px;\n              }\n\n              .modal__pledge-dollar-price {\n                color: var(--black);\n                font-weight: 700;\n                margin-left: 7px;\n              }\n            }\n\n            .modal_button-continue {\n              background-color: var(--moderate-cyan);\n              width: 120px;\n\n              &:hover {\n                background-color: var(--dark-cyan);\n              }\n\n              span {\n                color: #fff;\n                font-weight: 700;\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n  @media screen and (min-width: 1024px) and (max-width: 1279px) {\n    height: calc(50vh + 65%);\n  }\n\n  @media screen and (min-width: 601px) and (max-width: 1023px) {\n    height: calc(50vh + 73%);\n    .modal__container {\n      width: 85%;\n    }\n  }\n\n  @media screen and (max-width: 600px) {\n    height: calc(70vh + 85%);\n    .modal__container {\n      width: 85%;\n      top: 50%;\n      left: 50%;\n\n      .modal__title {\n        p {\n          font-size: 13px;\n        }\n      }\n\n      .modal__card {\n        .modal__card-title {\n          padding: 20px 0 20px 30px;\n\n          div {\n            flex-direction: column;\n            align-items: flex-start;\n          }\n\n          .modal__card-choose {\n            margin-right: 15px;\n          }\n\n          h4 {\n            margin: 10px 0 0 0;\n          }\n        }\n\n        .modal__card-body {\n          .modal__card-description {\n            p {\n              padding-left: 0;\n              font-size: 13px;\n              width: 90%;\n              margin-top: -30px;\n            }\n            .modal__card-text {\n              width: 92%;\n            }\n            .modal__card-left {\n              position: static;\n              margin: 20px 0 -2px 0;\n            }\n          }\n\n          .modal__pledge {\n            flex-direction: column;\n            align-items: flex-start;\n            padding-bottom: 10px;\n            overflow-x: hidden;\n\n            h4 {\n              margin: 10px 0 15px 0;\n              text-align: center;\n            }\n\n            .modal__pledge-buttons {\n              margin-bottom: 10px;\n              display: block;\n              width: 250px;\n              margin-left: -2px;\n\n              .modal_button-number {\n                width: 100px;\n              }\n              .modal_button-continue {\n                width: 120px;\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),G=b.a.div(O||(O=Object(m.a)(["\n  position: absolute;\n  top: 0;\n  height: calc(100vh * 3);\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 999;\n  display: none;\n\n  .modal-success__container {\n    position: fixed;\n    top: 25%;\n    left: 50%;\n    width: 36%;\n    transform: translate(-50%, -5%);\n    padding: 30px 20px 30px 20px;\n    background-color: #fff;\n    border-radius: 7px;\n    text-align: center;\n    padding: 40px 0;\n\n    img {\n      margin-top: 10px;\n    }\n\n    h2 {\n      margin: 25px 0 15px 0;\n      font-weight: 700;\n      font-size: 18px;\n    }\n\n    p {\n      margin: 10px auto 25px auto;\n      color: var(--dark-gray);\n      width: 100%;\n      font-size: 17px;\n      padding: 0 20px;\n    }\n\n    button {\n      padding: 15px;\n      border-radius: 30px;\n      background-color: var(--moderate-cyan);\n      color: #fff;\n      font-weight: 700;\n      width: 110px;\n\n      &:hover {\n        background-color: var(--dark-cyan);\n      }\n    }\n  }\n\n  @media screen and (min-width: 601px) and (max-width: 1024px) {\n    .modal-success__container {\n      width: 85%;\n      top: 4%;\n    }\n  }\n\n  @media screen and (max-width: 600px) {\n    height: calc(100vh * 4);\n\n    .modal-success__container {\n      width: 85%;\n      padding: 30px 0;\n      top: 40%;\n      transform: translate(-50%, -30%);\n      overflow-x: hidden;\n\n      h2 {\n        margin: 25px 0;\n      }\n\n      p {\n        width: 90%;\n        font-size: 14px;\n      }\n    }\n  }\n"]))),J=function(n){var e=Object(r.useState)(!1),a=Object(l.a)(e,2),t=a[0],o=a[1],c=Object(r.useState)(!1),d=Object(l.a)(c,2),i=d[0],s=d[1],m=Object(r.useState)(!1),b=Object(l.a)(m,2),p=b[0],u=b[1],h=Object(r.useState)(!1),x=Object(l.a)(h,2),j=x[0],_=x[1],f=Object(r.useState)(!1),g=Object(l.a)(f,2),y=g[0],O=g[1];return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(F,{className:"modal",children:Object(q.jsxs)("div",{className:"modal__container",children:[Object(q.jsxs)("div",{className:"modal__title",children:[Object(q.jsxs)("div",{children:[Object(q.jsx)("h2",{children:"Back this project"}),Object(q.jsx)("button",{onClick:function(){o((function(){t||(document.querySelector(".modal").classList.remove("fadeInModal"),document.querySelector(".modal").classList.add("fadeOutModal"),setTimeout((function(){document.querySelector(".modal").style.display="none"}),999))}))},children:Object(q.jsx)("img",{src:R,alt:"icon-close-modal"})})]}),Object(q.jsx)("p",{children:"Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?"})]}),Object(q.jsxs)("div",{className:"modal__card",children:[Object(q.jsxs)("div",{className:"modal__card-title",children:[Object(q.jsxs)("button",{className:"modal__card-choose",children:[".",Object(q.jsx)("span",{className:"btn-check",children:"."})]}),Object(q.jsx)("h3",{children:"Pledge with no reward"})]}),Object(q.jsx)("div",{className:"modal__card-body",children:Object(q.jsx)("div",{className:"modal__card-description",children:Object(q.jsx)("p",{className:"modal__pledge-text",children:"Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."})})})]}),Object(q.jsxs)("div",{className:"modal__card modal__card-bamboo",onMouseLeave:function(){!0===i&&(document.querySelector(".modal__card-bamboo").style.border="1px solid #d8d8d8",document.querySelector(".btn__check-bamboo").style.display="none",document.querySelector(".pledge-bamboo").style.display="none",s(!1))},"aria-hidden":"true",children:[Object(q.jsxs)("div",{className:"modal__card-title",children:[Object(q.jsxs)("button",{className:"modal__card-choose",children:[".",Object(q.jsx)("span",{className:"btn-check btn__check-bamboo",children:"."})]}),Object(q.jsxs)("div",{children:[Object(q.jsx)("h3",{onClick:function(){!1===i&&(document.querySelector(".modal__card-bamboo").style.border="1px solid hsl(176, 50%, 47%)",document.querySelector(".btn__check-bamboo").style.display="inline-block",document.querySelector(".pledge-bamboo").style.display="flex",s(!0))},"aria-hidden":"true",children:"Bamboo Stand"}),Object(q.jsx)("h4",{children:"Pledge $25 or more"})]})]}),Object(q.jsxs)("div",{className:"modal__card-body",children:[Object(q.jsxs)("div",{className:"modal__card-description",children:[Object(q.jsx)("p",{className:"modal__card-text",children:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you\u2019ll be added to a special Backer member list."}),Object(q.jsxs)("p",{className:"modal__card-left",children:["101 ",Object(q.jsx)("span",{children:"left"})]})]}),Object(q.jsxs)("div",{className:"modal__pledge pledge-bamboo",children:[Object(q.jsx)("h4",{children:"Enter your pledge"}),Object(q.jsxs)("div",{className:"modal__pledge-buttons",children:[Object(q.jsxs)("button",{className:"modal__pledge-buttons-number",children:[Object(q.jsx)("span",{className:"modal__pledge-dollar-sign",children:"$"}),Object(q.jsx)("span",{className:"modal__pledge-dollar-price",children:" 25"})]}),Object(q.jsx)("button",{className:"modal_button-continue",onClick:function(){!1===y&&(document.querySelector(".modal-success").classList.remove("fadeOutModal"),document.querySelector(".modal-success").classList.add("fadeInModal"),document.querySelector(".modal-success").style.display="block",document.querySelector(".modal").style.display="none",O(!0))},children:Object(q.jsx)("span",{children:"Continue"})})]})]})]})]}),Object(q.jsxs)("div",{className:"modal__card modal__card-black-edition",onMouseLeave:function(){!0===p&&(document.querySelector(".modal__card-black-edition").style.border="1px solid #d8d8d8",document.querySelector(".btn-check-black-edition").style.display="none",document.querySelector(".pledge-black-edition").style.display="none",u(!1))},"aria-hidden":"true",children:[Object(q.jsxs)("div",{className:"modal__card-title",children:[Object(q.jsxs)("button",{className:"modal__card-choose",children:[".",Object(q.jsx)("span",{className:"btn-check btn-check-black-edition",children:"."})]}),Object(q.jsxs)("div",{children:[Object(q.jsx)("h3",{onClick:function(){!1===p&&(document.querySelector(".modal__card-black-edition").style.border="1px solid hsl(176, 50%, 47%)",document.querySelector(".btn-check-black-edition").style.display="inline-block",document.querySelector(".pledge-black-edition").style.display="flex",u(!0))},"aria-hidden":"true",children:"Black Edition Stand"}),Object(q.jsx)("h4",{children:"Pledge $75 or more"})]})]}),Object(q.jsxs)("div",{className:"modal__card-body",children:[Object(q.jsxs)("div",{className:"modal__card-description",children:[Object(q.jsx)("p",{className:"modal__card-text",children:"You get a Black Special Edition computer stand and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included."}),Object(q.jsxs)("p",{className:"modal__card-left",children:["64 ",Object(q.jsx)("span",{children:"left"})]})]}),Object(q.jsxs)("div",{className:"modal__pledge pledge-black-edition",children:[Object(q.jsx)("h4",{children:"Enter your pledge"}),Object(q.jsxs)("div",{className:"modal__pledge-buttons",children:[Object(q.jsxs)("button",{className:"modal__pledge-buttons-number",children:[Object(q.jsx)("span",{className:"modal__pledge-dollar-sign",children:"$"}),Object(q.jsx)("span",{className:"modal__pledge-dollar-price",children:" 75"})]}),Object(q.jsx)("button",{className:"modal_button-continue",onClick:function(){!1===y&&(document.querySelector(".modal-success").classList.remove("fadeOutModal"),document.querySelector(".modal-success").classList.add("fadeInModal"),document.querySelector(".modal-success").style.display="block",document.querySelector(".modal").style.display="none",O(!0))},children:Object(q.jsx)("span",{children:"Continue"})})]})]})]})]}),Object(q.jsxs)("div",{className:"modal__card modal__card-mahogany",onMouseLeave:function(){!0===j&&(document.querySelector(".modal__card-mahogany").style.border="1px solid #d8d8d8",document.querySelector(".btn-check-mahogany").style.display="none",document.querySelector(".pledge-mahogany").style.display="none",_(!1))},"aria-hidden":"true",children:[Object(q.jsxs)("div",{className:"modal__card-title",children:[Object(q.jsxs)("button",{className:"modal__card-choose",children:[".",Object(q.jsx)("span",{className:"btn-check btn-check-mahogany",children:"."})]}),Object(q.jsxs)("div",{children:[Object(q.jsx)("h3",{style:{color:"#7d7d7d"},onClick:function(){!1===j&&(document.querySelector(".modal__card-mahogany").style.border="1px solid hsl(176, 50%, 47%)",document.querySelector(".btn-check-mahogany").style.display="inline-block",document.querySelector(".pledge-mahogany").style.display="flex",_(!0))},"aria-hidden":"true",children:"Mahogany Special Edition"}),Object(q.jsx)("h4",{style:{color:"#a5d4ce"},children:"Pledge $200 or more"})]})]}),Object(q.jsxs)("div",{className:"modal__card-body",children:[Object(q.jsxs)("div",{className:"modal__card-description",children:[Object(q.jsx)("p",{className:"modal__card-text",style:{color:"#b9b9b9"},children:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included."}),Object(q.jsxs)("p",{className:"modal__card-left",style:{color:"#818181"},children:["0 ",Object(q.jsx)("span",{children:"left"})]})]}),Object(q.jsxs)("div",{className:"modal__pledge pledge-mahogany",children:[Object(q.jsx)("h4",{children:"Enter your pledge"}),Object(q.jsxs)("div",{className:"modal__pledge-buttons",children:[Object(q.jsxs)("button",{className:"modal__pledge-buttons-number",children:[Object(q.jsx)("span",{className:"modal__pledge-dollar-sign",children:"$"}),Object(q.jsx)("span",{className:"modal__pledge-dollar-price",children:" 200"})]}),Object(q.jsx)("button",{className:"modal_button-continue",onClick:function(){!1===y&&(document.querySelector(".modal-success").classList.remove("fadeOutModal"),document.querySelector(".modal-success").classList.add("fadeInModal"),document.querySelector(".modal-success").style.display="block",document.querySelector(".modal").style.display="none",O(!0))},children:Object(q.jsx)("span",{children:"Continue"})})]})]})]})]})]})}),Object(q.jsx)(G,{className:"modal-success",children:Object(q.jsxs)("div",{className:"modal-success__container",children:[Object(q.jsx)("img",{src:A,alt:"icon - check"}),Object(q.jsx)("h2",{children:"Thanks for your support!"}),Object(q.jsx)("p",{children:"Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed."}),Object(q.jsx)("button",{onClick:function(){!0===y&&(document.querySelector(".modal-success").classList.remove("fadeInModal"),document.querySelector(".modal-success").classList.add("fadeOutModal"),setTimeout((function(){document.querySelector(".modal-success").style.display="none"}),1e3),O(!1))},children:"Got it!"})]})})]})},W=function(n){return Object(q.jsxs)("main",{className:"main container",children:[Object(q.jsx)(E,{}),Object(q.jsx)(P,{}),Object(q.jsx)(D,{}),Object(q.jsx)(J,{})]})},U=function(n){return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(M,{}),Object(q.jsx)(W,{})]})};a(21);s.a.render(Object(q.jsx)(d.a.StrictMode,{children:Object(q.jsx)(U,{})}),document.getElementById("root"))},5:function(n,e,a){}},[[22,1,2]]]);
//# sourceMappingURL=main.44c81f77.chunk.js.map