(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{18:function(e,t,a){},21:function(e,t,a){e.exports=a(44)},44:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(19),i=a.n(r),o=a(2),c=a(3),m=a(5),l=a(4),u=a(6);n.Component;s.a.Component;var p=a(7),v=a.n(p),d=a(20),g=a(8),f=a.n(g);a(18);var h=function(e){e.id;var t=e.year,a=e.title,n=e.summary,r=e.poster,i=e.genres;return s.a.createElement("div",{class:"moviess"},s.a.createElement("img",{src:r}),s.a.createElement("img",{src:"https://postfiles.pstatic.net/MjAxOTExMjhfMTA3/MDAxNTc0OTIwNzIxMTgw.UnBNHyZFAToN9crdSPpCBpt_-WQ2e6rJCBzhoXp-_Tgg.dMzYe1zkiND64fcn2RVL5o-RUTcc-Yp9--I5v877eHwg.PNG.dall011/image.png?type=w773"}),s.a.createElement("h1",null,a),s.a.createElement("h1",null,n.slice(0,140),"..."),s.a.createElement("h1",null,t),s.a.createElement("ul",{className:"genres"},i.map((function(e,t){return s.a.createElement("li",{key:t},t," : ",e)}))))},y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).getMo=function(){var e=f.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating").data.data.movies;a.setState({movies:e,isLoading:!1})},a.getMovies=Object(d.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:t=e.sent,n=t.data.data.movies,console.log(n),a.setState({movies:n,isLoading:!1});case 6:case"end":return e.stop()}}),e)}))),a.state={isLoading:!0,kor:!0,movies:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getMovies(),setTimeout((function(){e.setState({kor:!1})}),2e3)}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return s.a.createElement("div",null,s.a.createElement("section",{className:"container"},s.a.createElement("p",null,t?s.a.createElement("div",{className:"loader"},s.a.createElement("span",{className:"loader_test"},"Loading..")):a.map((function(e){return s.a.createElement(h,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})})))))}}]),t}(n.Component);i.a.render(s.a.createElement(y,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.b46f6057.chunk.js.map