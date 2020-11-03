(this["webpackJsonpsearch-books-app"]=this["webpackJsonpsearch-books-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),r=n.n(s),a=n(7),o=n.n(a),i=n.p+"static/media/TT.small.5960418a.png",l=function(){return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("h1",{className:"header__title",children:"Search Book App"}),Object(c.jsx)("img",{src:i,alt:"logo-turtle",className:"header__logo"})]})},u=n(2),j=n(3),b=Object(s.createContext)(),f=function(e){var t=e.children,n=Object(s.useState)(""),r=Object(u.a)(n,2),a=r[0],o=r[1],i=Object(s.useState)([]),l=Object(u.a)(i,2),f=l[0],h=l[1],O=Object(s.useState)(1),m=Object(u.a)(O,2),d=m[0],g=m[1],x=Object(s.useState)(!1),p=Object(u.a)(x,2),v=p[0],_=p[1],k=Object(s.useState)(!1),N=Object(u.a)(k,2),S=N[0],w=N[1],y=Object(s.useState)(!1),C=Object(u.a)(y,2),E=C[0],I=C[1],F=Object(s.useState)(""),B=Object(u.a)(F,2),D=B[0],L=B[1],T=Object(s.useState)(""),A=Object(u.a)(T,2),P=A[0],V=A[1],z=Object(s.useState)(""),J=Object(u.a)(z,2),M=J[0],q=J[1],R=Object(s.useState)(!1),G=Object(u.a)(R,2),U=G[0],W=G[1],Y=Object(s.useState)(!1),Z=Object(u.a)(Y,2),$=Z[0],H=Z[1],K=Object(s.useState)(!1),Q=Object(u.a)(K,2),X=Q[0],ee=Q[1];Object(s.useEffect)((function(){U&&(q(""),L(""),V(""),H(!1),_(!0),I(!1),ee(!1),fetch("https://www.googleapis.com/books/v1/volumes?q=intitle:".concat(a,"&startIndex=0")).then((function(e){return e.json()})).then((function(e){e.items.length<10&&H(!0),h(e.items),_(!1),g(1)})).catch((function(e){_(!1),"Cannot read property 'length' of undefined"===e.message?ee(!0):I(!0)})))}),[a]),Object(s.useEffect)((function(){if(U&&!$){var e=Math.floor(10*d);I(!1),w(!0),fetch("https://www.googleapis.com/books/v1/volumes?q=intitle:".concat(a,"&startIndex=").concat(e)).then((function(e){return e.json()})).then((function(e){e.items.length<10&&H(!0);var t=[].concat(Object(j.a)(f),Object(j.a)(e.items.map((function(e){return e}))));h(t),w(!1)})).catch((function(e){w(!1),"Cannot read property 'length' of undefined"===e.message?H(!0):I(!0)}))}}),[d]);return Object(c.jsx)(b.Provider,{value:{page:d,books:f,loading:v,error:E,author:D,language:P,publishedDate:M,isSearched:U,isEmptyBooksList:X,recharging:S,setIsSearched:W,filterByDate:function(e){q(e)},filterByLanguage:function(e){V(e)},filterByAuthor:function(e){L(e)},setPage:g,setLoading:_,setError:I,setTitle:o},children:t})},h=function(e){if(!e)throw new Error("You must enter a title");if(e.length<=1)throw new Error("The minimum title length is: 2");return!0},O=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)(!1),o=Object(u.a)(a,2),i=o[0],l=o[1],j=Object(s.useState)(""),f=Object(u.a)(j,2),O=f[0],m=f[1],d=Object(s.useContext)(b),g=d.setTitle,x=d.setIsSearched;return Object(c.jsxs)("div",{className:"form",children:[Object(c.jsx)("h2",{className:"form__title",children:"Enter the title of the book"}),Object(c.jsxs)("form",{className:"form__searchForm",onSubmit:function(e){e.preventDefault(),l(!1),m("");try{h(n)}catch(e){return l(!0),void m(e.message)}x(!0),g(n)},children:[Object(c.jsx)("input",{type:"text",value:n,"aria-label":"title",className:"serchForm__input",onChange:function(e){r(e.target.value)}}),Object(c.jsx)("button",{type:"submit",className:"serchForm__button btn",children:"Search"})]}),i?Object(c.jsx)("p",{className:"serchForm__errorMessage error-message",children:O}):null]})},m=function(){return Object(c.jsxs)("div",{className:"spinner",children:[Object(c.jsx)("div",{className:"bounce1"}),Object(c.jsx)("div",{className:"bounce2"}),Object(c.jsx)("div",{className:"bounce3"})]})},d=function(){return Object(c.jsx)("div",{className:"defaultError",children:"Sorry something went wrong. Please try again later \u203c"})},g=n.p+"static/media/defaultBook.4d539b1b.jpg",x=function(e){var t=e.title;return t?Object(c.jsx)("h2",{className:"book__title",children:t}):Object(c.jsx)("h2",{className:"book__title",children:"This book has not title"})},p=function(e){var t=e.text;return t?t.length<200?Object(c.jsx)("p",{className:"book__description",children:t}):Object(c.jsxs)("p",{className:"book__description",children:[t.slice(0,200),"..."]}):Object(c.jsx)("p",{className:"book__description",children:"This book has not description"})},v=function(e){var t=e.src;return t?Object(c.jsx)("img",{src:t.thumbnail,className:"book__img",alt:"book-img"}):Object(c.jsx)("img",{src:g,className:"book__img",alt:"book-default-img"})},_=r.a.forwardRef((function(e,t){return Object(c.jsx)(c.Fragment,{children:e.book?Object(c.jsxs)("div",{className:"book",ref:t,children:[Object(c.jsx)(v,{src:e.book.volumeInfo.imageLinks}),Object(c.jsx)(x,{title:e.book.volumeInfo.title}),Object(c.jsx)(p,{text:e.book.volumeInfo.description})]}):Object(c.jsx)("h2",{children:"Book is not found"})})})),k=function(){return Object(c.jsxs)("div",{className:"emptyBooksList",children:["Uuuups! Nothing found",Object(c.jsx)("span",{role:"img","aria-label":"sad",children:"\ud83d\ude13"})]})},N=function(e,t){if(!t)throw new Error("author is not correct");if(!e||0===e.length)throw new Error("authorsArray is not correct");var n=[];return e.forEach((function(e){var t=e.toLowerCase().split(" ");n.push.apply(n,Object(j.a)(t))})),!!n.includes(t.toLowerCase())},S=function(){var e=Object(s.useContext)(b),t=e.page,n=e.books,r=e.setPage,a=e.language,o=e.author,i=e.publishedDate,l=Object(s.useState)([]),f=Object(u.a)(l,2),h=f[0],O=f[1];Object(s.useEffect)((function(){O(n);var e=Object(j.a)(n);if(o){var t=n.filter((function(e){if(e.volumeInfo.authors&&N(e.volumeInfo.authors,o))return e}));e=Object(j.a)(t),O(e)}if("null"!==a&&a){var c=e.filter((function(e){if(e.volumeInfo.language&&e.volumeInfo.language===a)return e}));e=Object(j.a)(c),O(e)}if("null"!==i&&i){var s=e.filter((function(e){if(e.volumeInfo.publishedDate&&e.volumeInfo.publishedDate.slice(0,4)===i)return e}));e=Object(j.a)(s),O(e)}}),[t,n,a,i,o]);var m=Object(s.useRef)(),d=Object(s.useCallback)((function(e){m.current&&m.current.disconnect(),m.current=new IntersectionObserver((function(e){e[0].isIntersecting&&r((function(e){return e+1}))})),e&&m.current.observe(e)}),[]);return Object(c.jsx)("div",{className:"books",children:h.length>0?h.map((function(e,t){return h.length===t+1?Object(c.jsx)(_,{ref:d,book:e},e.etag):Object(c.jsx)(_,{book:e},e.etag)})):Object(c.jsx)(k,{})})},w=function(){var e=Object(s.useContext)(b),t=e.error,n=e.loading,r=e.isEmptyBooksList,a=e.recharging;return Object(c.jsx)(c.Fragment,{children:n?Object(c.jsx)(m,{}):t?Object(c.jsx)(d,{}):r?Object(c.jsx)(k,{}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(S,{}),a&&Object(c.jsx)(m,{})]})})},y=function(){return Object(c.jsxs)("footer",{className:"footer",children:[Object(c.jsx)("a",{href:"https://github.com/TomaszJarkowski/search-books-app",target:"blank",rel:"noopener noopener",className:"footer__link",children:"Github"}),Object(c.jsx)("a",{href:"https://tomaszjarkowski.github.io/my-portfolio/",target:"blank",rel:"noopener noopener",className:"footer__link",children:"Portfolio"})]})},C=n.p+"static/media/undraw_Bookshelves_re_lxoy.a9499928.svg",E=function(){return Object(c.jsxs)("div",{className:"firstView",children:[Object(c.jsx)("h2",{className:"firstView__title",children:"Welcome in Book Search App"}),Object(c.jsx)("h3",{className:"firstView__info",children:"Enter the title in the field above and start searching for books"}),Object(c.jsx)("img",{src:C,alt:"first view svg",className:"firstView__svg"})]})},I=function(e){if(!e.match(/^[a-zA-Z\u0104\u0105\u0118\u0119\xd3\xf3\u0141\u0142\u015a\u015b\u0104\u0105\u017b\u017c\u0179\u017a\u0106\u0107\u0143\u0144]*$/gm))throw new Error("Author must contain only letters");if(e.length>=1&&e.length<3)throw new Error("The minimum author length is: 3");return!0},F=function(){var e=Object(s.useContext)(b),t=e.filterByAuthor,n=e.loading,r=Object(s.useState)(""),a=Object(u.a)(r,2),o=a[0],i=a[1],l=Object(s.useState)(!1),j=Object(u.a)(l,2),f=j[0],h=j[1],O=Object(s.useState)(""),m=Object(u.a)(O,2),d=m[0],g=m[1];return Object(c.jsx)(c.Fragment,{children:n?null:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h(!1),g("");try{I(o)}catch(e){return h(!0),void g(e.message)}t(o)},className:"filters__item",children:[Object(c.jsx)("h3",{className:"filter__title",children:"Enter author"}),Object(c.jsx)("input",{type:"text",className:"filter__input",onChange:function(e){return i(e.target.value)},"aria-label":"author"}),Object(c.jsx)("button",{type:"submit",className:"filter__btn btn",children:"Filter"}),f?Object(c.jsx)("p",{className:"filter__error error-message",children:d}):null]})})},B=function(){var e=Object(s.useContext)(b),t=e.loading,n=e.filterByLanguage,r=e.books,a=Object(s.useState)([]),o=Object(u.a)(a,2),i=o[0],l=o[1];Object(s.useEffect)((function(){if(r){var e=r.map((function(e){return e.volumeInfo.language}));l(Object(j.a)(new Set(e)))}else l([])}),[r]);return Object(c.jsx)(c.Fragment,{children:t?null:Object(c.jsxs)("form",{className:"filters__item",children:[Object(c.jsx)("h3",{className:"filter__title",children:"Select language"}),Object(c.jsxs)("select",{className:"filter__select",onChange:function(e){var t=e.target;n(t.value)},children:[Object(c.jsx)("option",{value:"null",children:"-"},"firstOption"),i?i.map((function(e){return Object(c.jsx)("option",{value:e,children:e},e)})):null]})]})})},D=function(){var e=Object(s.useContext)(b),t=e.filterByDate,n=e.loading,r=e.books,a=Object(s.useState)([]),o=Object(u.a)(a,2),i=o[0],l=o[1];Object(s.useEffect)((function(){if(r){var e=r.map((function(e){if(e.volumeInfo.publishedDate)return Number(e.volumeInfo.publishedDate.slice(0,4))})).filter((function(e){return e})),t=Object(j.a)(new Set(e)).sort((function(e,t){return e-t}));l(t)}else l([])}),[r]);return Object(c.jsx)(c.Fragment,{children:n?null:Object(c.jsxs)("form",{className:"filters__item",children:[Object(c.jsx)("h3",{className:"filter__title",children:"Select published date"}),Object(c.jsxs)("select",{className:"filter__select",onChange:function(e){t(e.target.value)},children:[Object(c.jsx)("option",{value:"null",children:"-"},"firstOption"),i?i.map((function(e){return Object(c.jsx)("option",{value:e,children:e},e)})):null]})]})})},L=function(){return Object(c.jsxs)("div",{className:"filters",children:[Object(c.jsx)("h2",{className:"filters__title",children:"Filters"}),Object(c.jsxs)("div",{className:"filters__items",children:[Object(c.jsx)(F,{}),Object(c.jsx)(B,{}),Object(c.jsx)(D,{})]})]})},T=function(){var e=Object(s.useContext)(b).isSearched;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(l,{}),Object(c.jsx)(O,{}),e?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(L,{}),Object(c.jsx)(w,{})]}):Object(c.jsx)(E,{}),Object(c.jsx)(y,{})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};n(13);o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(f,{children:Object(c.jsx)(T,{})})}),document.getElementById("root")),A()}},[[14,1,2]]]);
//# sourceMappingURL=main.102c4a06.chunk.js.map