"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[501],{25:function(t,n,e){e.d(n,{Hg:function(){return p},TP:function(){return h},gH:function(){return l},tx:function(){return m},zv:function(){return x}});var r=e(861),a=e(757),c=e.n(a),i=e(388),u="307015ca02e8a519abbd25ab35659215",s=i.Z.create({baseURL:"https://api.themoviedb.org/3/"}),o="language=en-US";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/trending/all/day?api_key=".concat(u));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t,n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(n,e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/search/movie?api_key=".concat(u,"&").concat(o,"&query=").concat(n,"&page=").concat(e,"&include_adult=false"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(n,"?api_key=").concat(u,"&").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(n,"/credits?api_key=").concat(u,"&").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t,n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function t(n,e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(n,"/reviews?api_key=").concat(u,"&").concat(o,"&page=").concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},501:function(t,n,e){e.r(n),e.d(n,{default:function(){return h}});var r,a,c=e(885),i=e(25),u=e(791),s=e(739),o=e(168),p=e(444),f=p.ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding: 15px;\n"]))),l=p.ZP.ul(a||(a=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),d=e(184),h=function(){var t=(0,s.UO)().movieId,n=(0,u.useState)([]),e=(0,c.Z)(n,2),r=e[0],a=e[1];return(0,u.useEffect)((function(){(0,i.zv)(t).then((function(t){return a(t.cast)})).catch(console.error)}),[t]),r.length<1?(0,d.jsx)(f,{children:(0,d.jsx)("p",{children:"We don't have any casts for this movie."})}):(0,d.jsx)(f,{children:(0,d.jsx)(l,{children:r.map((function(t){var n;return(0,d.jsxs)("li",{children:[(0,d.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w500".concat(t.profile_path):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRIwd-UFT6cmM0mhCyVVBI4oJN87ZizN1YKQ&usqp=CAU",alt:r.original_title,width:"150"}),(0,d.jsx)("p",{children:t.name}),(0,d.jsxs)("p",{children:["Character: ",null!==(n=t.character)&&void 0!==n?n:"-"]})]},t.id)}))})})}}}]);
//# sourceMappingURL=501.7bab6ed4.chunk.js.map