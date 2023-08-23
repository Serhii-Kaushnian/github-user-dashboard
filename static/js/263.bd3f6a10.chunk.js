"use strict";(self.webpackChunkgithub_user_dashboard=self.webpackChunkgithub_user_dashboard||[]).push([[263,808,278],{8263:function(n,r,i){i.r(r),i.d(r,{default:function(){return w}});i(2791);var e,l,t,d,a,s=i(9434),c=i(2027),o=i(184),u=function(){var n=(0,s.v9)(c.PR);return n&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(b,{user:n})})},x=(i(9808),i(9966),i(2558),i(1087)),p=i(3951),g=i(168),h=i(5706),f=h.Z.ul(e||(e=(0,g.Z)(["\n  margin: 0;\n  width: 100%;\n"]))),m=h.Z.img(l||(l=(0,g.Z)(["\n  display: block;\n  border-radius: 10px;\n  margin: 15px;\n  width: 250px;\n  height: 250px;\n"]))),j=h.Z.li(t||(t=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),Z=h.Z.div(d||(d=(0,g.Z)(["\n  display: flex;\n  background-color: #e7eaf6;\n  border-radius: 25px;\n\n  padding: 10px;\n\n  @media (max-width: 600px) {\n    flex-direction: column;\n  }\n"]))),b=function(n){var r=n.user;return r&&(0,o.jsxs)(Z,{children:[(0,o.jsx)(m,{src:r.avatar_url,alt:"user avatar"}),(0,o.jsxs)(j,{children:[(0,o.jsxs)(f,{children:[" ",r.login&&(0,o.jsxs)(p.M,{children:["Login: ",r.login]})]}),(0,o.jsx)(f,{children:r.name&&(0,o.jsxs)(p.M,{children:["Name: ",r.name]})}),(0,o.jsx)(f,{children:r.location&&(0,o.jsxs)(p.M,{children:["Location: ",r.location]})}),(0,o.jsxs)(f,{children:[" ",r.email&&(0,o.jsxs)(p.M,{children:["E-Mail: ",r.email]})]}),(0,o.jsxs)(f,{children:[" ",r.twitter_username&&(0,o.jsxs)(p.M,{children:["Twitter: ",r.twitter_username]})]}),(0,o.jsx)(f,{children:r.blog&&(0,o.jsxs)(p.M,{children:["Blog:"," ",(0,o.jsx)(x.rU,{to:r.blog,target:"new",children:r.blog.slice(0,24)})]})})]})]})},v=(i(7278),i(8955),h.Z.main(a||(a=(0,g.Z)(["\n  height: calc(100% - 100px);\n\n  background-color: #a2a8d3;\n  padding: 10px;\n"])))),w=function(){return(0,o.jsx)(v,{children:(0,o.jsx)(u,{})})}},7278:function(n,r,i){i.r(r),i.d(r,{default:function(){return b}});var e,l,t,d,a=i(2791),s=i(9434),c=i(620),o=i(2027),u=i(3951),x=i(168),p=i(5706),g=p.Z.div(e||(e=(0,x.Z)(["\n  padding: 10px;\n"]))),h=p.Z.li(l||(l=(0,x.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: 10px;\n  list-style: none;\n"]))),f=p.Z.ul(t||(t=(0,x.Z)(["\n  background-color: #e7eaf6;\n  margin: 5px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n"]))),m=p.Z.img(d||(d=(0,x.Z)(["\n  display: block;\n  border-radius: 10px;\n  margin: 5px;\n  width: 200px;\n"]))),j=i(9217),Z=i(184),b=function(){var n=(0,s.I0)(),r=(0,s.v9)(o.dX),i=(0,s.v9)(o.br),e=(0,s.v9)(o.PR);return(0,a.useEffect)((function(){e&&n((0,c.ET)(e.followers_url))}),[n,e]),e&&(0,Z.jsxs)(g,{children:[i&&(0,Z.jsx)(j.dM,{}),(0,Z.jsx)(h,{children:r&&r.map((function(n){return(0,Z.jsxs)(f,{children:[(0,Z.jsx)(m,{src:n.avatar_url,alt:"follower ".concat(n.id)}),(0,Z.jsx)(u.M,{children:n.login}),(0,Z.jsxs)(u.F,{to:n.html_url,target:"new",children:["To ",n.login,"'s gitHub page"]})]},n.id)}))})]})}},9808:function(n,r,i){i.r(r),i.d(r,{default:function(){return b}});var e,l,t,d,a=i(2791),s=i(9434),c=i(620),o=i(2027),u=i(168),x=i(5706),p=x.Z.div(e||(e=(0,u.Z)(["\n  padding: 10px;\n"]))),g=x.Z.li(l||(l=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: 10px;\n  list-style: none;\n"]))),h=x.Z.ul(t||(t=(0,u.Z)(["\n  background-color: #e7eaf6;\n  margin: 5px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n"]))),f=x.Z.p(d||(d=(0,u.Z)(["\n  max-width: 200px;\n  overflow: auto;\n  font-weight: 500;\n"]))),m=i(3951),j=i(9217),Z=i(184),b=function(){var n=(0,s.I0)(),r=(0,s.v9)(o.Tg),i=(0,s.v9)(o.kn),e=(0,s.v9)(o.PR);return(0,a.useEffect)((function(){e&&n((0,c.uE)(e.repos_url))}),[n,e]),e&&(0,Z.jsxs)(p,{children:[i&&(0,Z.jsx)(j.dM,{}),(0,Z.jsx)(g,{children:r&&r.map((function(n){return(0,Z.jsxs)(h,{children:[(0,Z.jsx)(f,{children:n.name}),(0,Z.jsx)(f,{children:n.description}),(0,Z.jsx)(m.F,{to:n.html_url,target:"new",children:"To repository"})]},n.id)}))})]})}}}]);
//# sourceMappingURL=263.bd3f6a10.chunk.js.map