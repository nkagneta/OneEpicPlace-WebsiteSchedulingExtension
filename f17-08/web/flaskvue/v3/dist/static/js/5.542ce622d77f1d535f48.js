webpackJsonp([5],{lO7g:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={data:function(){return{randomNumber:0}},methods:{getRandom:function(){this.randomNumber=this.getRandomFromBackend()},getRandomFromBackend:function(){var n=this;this.$http.get("https://epic-project-mastrots1.c9users.io/api/random",{}).then(function(e){n.randomNumber=e.data.randomNumber}).catch(function(n){console.log(n)})}},created:function(){this.getRandom()}},r={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("v-jumbotron",[t("p",[n._v("Home page")]),n._v(" "),t("p",[n._v("Random number from backend: "+n._s(n.randomNumber))]),n._v(" "),t("button",{on:{click:n.getRandom}},[n._v("New random number")])])],1)},staticRenderFns:[]},a=t("VU/8")(o,r,!1,null,null,null);e.default=a.exports}});
//# sourceMappingURL=5.542ce622d77f1d535f48.js.map