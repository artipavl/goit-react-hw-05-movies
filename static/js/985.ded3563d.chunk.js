"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[985],{25:function(n,t,e){e.d(t,{Hg:function(){return p},TP:function(){return h},gH:function(){return l},tx:function(){return j},zv:function(){return g}});var r=e(531),a=e(757),c=e.n(a),i=e(388),s="307015ca02e8a519abbd25ab35659215",u=i.Z.create({baseURL:"https://api.themoviedb.org/3/"}),o="language=en-US";function p(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/trending/all/day?api_key=".concat(s));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/search/movie?api_key=".concat(s,"&").concat(o,"&query=").concat(t,"&page=").concat(e,"&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/movie/".concat(t,"?api_key=").concat(s,"&").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/movie/".concat(t,"/credits?api_key=").concat(s,"&").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function j(n,t){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/movie/".concat(t,"/reviews?api_key=").concat(s,"&").concat(o,"&page=").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},985:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,a,c,i,s=e(885),u=e(25),o=e(731),p=e(739),d=e(168),l=e(444),f=l.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  gap: 15px;\n  border-bottom: 1px solid #000;\n  padding: 15px 0px;\n"]))),h=l.ZP.div(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),x=l.ZP.div(c||(c=(0,d.Z)(["\n  padding: 15px;\n"]))),g=(0,l.ZP)(o.rU)(i||(i=(0,d.Z)(["\n  padding: 10px;\n  background: #fafafa;\n  text-transform: none;\n  border-radius: 4px;\n  :hover,\n  :focus {\n    background: #afafaf;\n  }\n"]))),v=e(184),j=function(n){var t=n.data,e=(0,p.TH)(),r=t.genres.map((function(n){return n.name})).join(", "),a=new Date(t.release_date).getFullYear();return(0,v.jsxs)(x,{children:[(0,v.jsx)(g,{to:null!==e.state?e.state:"/",children:"<- Go beck"}),(0,v.jsxs)(f,{children:[(0,v.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w500/".concat(t.poster_path):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfjgn-WI1hCtQ9JSNOlgRYW1MHoer_lTeynw&usqp=CAU",alt:t.original_title,width:"150"}),(0,v.jsxs)(h,{children:[(0,v.jsxs)("h2",{children:[t.original_title," (",a,")"]}),(0,v.jsxs)("p",{children:["User Score: ",Math.round(t.popularity),"%"]}),(0,v.jsx)("b",{children:"Overview"}),(0,v.jsx)("p",{children:t.overview}),(0,v.jsx)("b",{children:"Ganres"}),(0,v.jsx)("p",{children:r.length>1?r:"-"})]})]}),(0,v.jsx)(f,{children:(0,v.jsxs)(h,{children:[(0,v.jsx)("h2",{children:"Additinal information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(o.rU,{to:"cast",state:e.state,children:"cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(o.rU,{to:"reviews",state:e.state,children:"reviews"})})]})]})})]})},b=e(791),m=function(){var n=(0,p.UO)().movieId,t=(0,b.useState)([]),e=(0,s.Z)(t,2),r=e[0],a=e[1];if((0,b.useEffect)((function(){(0,u.TP)(n).then((function(n){return a(n)})).catch(console.error)}),[n]),!(r.length<1))return(0,v.jsxs)("div",{children:[(0,v.jsx)(j,{data:r}),(0,v.jsx)(b.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading..."}),children:(0,v.jsx)(p.j3,{})})]})}}}]);
//# sourceMappingURL=985.ded3563d.chunk.js.map