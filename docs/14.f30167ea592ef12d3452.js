(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"8XJj":function(l,n,u){"use strict";u.r(n);var t=u("LoAr"),e=function(){return function(){}}(),o=u("C9Ky"),a=u("pLqg"),r=u("7tlY"),b=u("Ckq/"),i=u("EAoM"),c=u("X7Hn"),s=u("UelK"),d=u("SPdK"),f=u("x8+N"),h=u("//aV"),p=u("U+go"),m=u("JZJv"),g=u("QoAl"),A=u("320Y"),y=u("ChgE"),w=u("fxml"),x=u("YzpY"),C=u("TeY9"),v=u("WV+C"),k=u("WT9V"),S=u("WgBV"),M=u("C7Lb"),O=u("fDe+"),H=u("jQpT"),I=u("wfyj"),_=u("1WY5"),j=function(){function l(l,n){this.docs=l,this.titleService=n,this.code="import { ShareButtonsModule } from '@ngx-share/buttons';\nimport { ShareButtonsConfig, IShareButtons } from '@ngx-share/core';\n\nconst customConfig: ShareButtonsConfig = {\n  include: ['facebook', 'twitter', 'google'],\n  exclude: [],\n  theme: 'modern-light',\n  gaTracking: true,\n  autoSetMeta: true,\n  twitterAccount: 'username',\n  prop: {\n    facebook: {\n      icon: ['fab', 'facebook-square']\n    },\n    twitter: {\n      icon: ['fab', 'twitter-square'],\n      text: 'Tweet'\n    },\n    // and so on...\n  }\n}",this.global="import { SHARE_BUTTONS_CONFIG } from '@ngx-share/core';\n\n@NgModule({\n  providers: [\n    {\n      provide: SHARE_BUTTONS_CONFIG,\n      value: customConfig\n    }\n  ]\n})\nexport class AppModule { }",this.lazyLoad="@NgModule({\n  imports: [\n    ShareButtonsModule.withConfig(customConfig)\n  ]\n})\nexport class FeatureModule { }",this.displayedColumns=["name","description"]}return l.prototype.ngOnInit=function(){this.titleService.setTitle("Global options");var l=new I.b(this.docs.getOptionsApi());this.dataSource=new I.a(l)},l}(),R=u("SeAg"),L=t.qb({encapsulation:0,styles:[[""]],data:{}});function T(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,3,"mat-header-cell",[["class","mat-header-cell"],["fxFlex","130px"],["role","columnheader"]],null,null,null,null,null)),t.rb(1,16384,null,0,i.e,[c.d,t.k],null,null),t.rb(2,737280,null,0,s.a,[d.h,t.k,[3,s.d],d.l,d.f],{flex:[0,"flex"]},null),(l()(),t.Kb(-1,null,[" Name"]))],function(l,n){l(n,2,0,"130px")},null)}function E(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,4,"mat-cell",[["class","mat-cell"],["fxFlex","130px"],["role","gridcell"]],null,null,null,null,null)),t.rb(1,16384,null,0,i.a,[c.d,t.k],null,null),t.rb(2,737280,null,0,s.a,[d.h,t.k,[3,s.d],d.l,d.f],{flex:[0,"flex"]},null),(l()(),t.sb(3,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Kb(4,null,["",""]))],function(l,n){l(n,2,0,"130px")},function(l,n){l(n,4,0,n.context.$implicit.name)})}function K(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t.rb(1,16384,null,0,i.e,[c.d,t.k],null,null),(l()(),t.Kb(-1,null,[" Description"]))],null,null)}function N(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t.rb(1,16384,null,0,i.a,[c.d,t.k],null,null),(l()(),t.Kb(2,null,[" ",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.description)})}function D(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,2,"mat-header-row",[["class","mat-header-row"],["role","row"]],null,null,null,f.d,f.a)),t.Hb(6144,null,c.k,null,[i.g]),t.rb(2,49152,null,0,i.g,[],null,null)],null,null)}function q(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,2,"mat-row",[["class","mat-row"],["role","row"]],null,null,null,f.e,f.b)),t.Hb(6144,null,c.m,null,[i.i]),t.rb(2,49152,null,0,i.i,[],null,null)],null,null)}function Y(l){return t.Mb(2,[(l()(),t.sb(0,0,null,null,69,"ng-scrollbar",[["shown","hover"]],[[1,"trackX",0],[1,"trackY",0],[1,"compact",0],[1,"autoHide",0]],null,null,h.b,h.a)),t.rb(1,4374528,null,0,p.a,[t.h,m.a,t.C],{shown:[0,"shown"],compact:[1,"compact"]},null),(l()(),t.sb(2,0,null,0,3,"header",[],null,null,null,g.b,g.a)),t.rb(3,49152,null,0,A.a,[],null,null),(l()(),t.sb(4,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Global Options"])),(l()(),t.sb(6,0,null,0,61,"div",[["class","page-content container"]],null,null,null,null,null)),(l()(),t.sb(7,0,null,null,18,"section",[],null,null,null,null,null)),(l()(),t.sb(8,0,null,null,2,"section-title",[],null,null,null,y.b,y.a)),t.rb(9,49152,null,0,w.a,[],null,null),(l()(),t.Kb(-1,0,["Setting custom options"])),(l()(),t.sb(11,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["To avoid setting the same options on each share component/directive, you can set your custom options that applies on all share buttons components across your app."])),(l()(),t.sb(13,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t.sb(14,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Example"])),(l()(),t.sb(16,0,null,null,1,"hl-code",[],null,null,null,x.b,x.a)),t.rb(17,4243456,null,0,C.a,[v.a,k.d],{code:[0,"code"],height:[1,"height"]},null),(l()(),t.sb(18,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["If you want to set the options globally while lazy loading the library, then just provide the custom options as `SHARE_BUTTONS_CONFIG` value, this will set global config before the library is even loaded"])),(l()(),t.sb(20,0,null,null,1,"hl-code",[],null,null,null,x.b,x.a)),t.rb(21,4243456,null,0,C.a,[v.a,k.d],{code:[0,"code"]},null),(l()(),t.sb(22,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Or you can set these config with the library import using `withConfig()` function:"])),(l()(),t.sb(24,0,null,null,1,"hl-code",[],null,null,null,x.b,x.a)),t.rb(25,4243456,null,0,C.a,[v.a,k.d],{code:[0,"code"]},null),(l()(),t.sb(26,0,null,null,41,"section",[["fxHide.lt-md","true"],["fxShow",""]],null,null,null,null,null)),t.rb(27,737280,null,0,S.c,[d.h,[8,null],t.k,d.l,t.C,[2,d.k]],{show:[0,"show"],hideLtMd:[1,"hideLtMd"]},null),(l()(),t.sb(28,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Available options:"])),(l()(),t.sb(30,0,null,null,37,"mat-table",[["class","mat-table"]],null,null,null,f.f,f.c)),t.rb(31,2342912,null,4,i.k,[t.t,t.h,t.k,[8,null],[2,M.b],k.d,v.a],{dataSource:[0,"dataSource"]},null),t.Ib(603979776,1,{_contentColumnDefs:1}),t.Ib(603979776,2,{_contentRowDefs:1}),t.Ib(603979776,3,{_contentHeaderRowDefs:1}),t.Ib(603979776,4,{_contentFooterRowDefs:1}),(l()(),t.sb(36,0,null,null,12,null,null,null,null,null,null,null)),t.Hb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[i.c]),t.rb(38,16384,null,3,i.c,[],{name:[0,"name"]},null),t.Ib(335544320,5,{cell:0}),t.Ib(335544320,6,{headerCell:0}),t.Ib(335544320,7,{footerCell:0}),t.Hb(2048,[[1,4]],c.d,null,[i.c]),(l()(),t.jb(0,null,null,2,null,T)),t.rb(44,16384,null,0,i.f,[t.O],null,null),t.Hb(2048,[[6,4]],c.j,null,[i.f]),(l()(),t.jb(0,null,null,2,null,E)),t.rb(47,16384,null,0,i.b,[t.O],null,null),t.Hb(2048,[[5,4]],c.b,null,[i.b]),(l()(),t.sb(49,0,null,null,12,null,null,null,null,null,null,null)),t.Hb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[i.c]),t.rb(51,16384,null,3,i.c,[],{name:[0,"name"]},null),t.Ib(335544320,8,{cell:0}),t.Ib(335544320,9,{headerCell:0}),t.Ib(335544320,10,{footerCell:0}),t.Hb(2048,[[1,4]],c.d,null,[i.c]),(l()(),t.jb(0,null,null,2,null,K)),t.rb(57,16384,null,0,i.f,[t.O],null,null),t.Hb(2048,[[9,4]],c.j,null,[i.f]),(l()(),t.jb(0,null,null,2,null,N)),t.rb(60,16384,null,0,i.b,[t.O],null,null),t.Hb(2048,[[8,4]],c.b,null,[i.b]),(l()(),t.jb(0,null,null,2,null,D)),t.rb(63,540672,null,0,i.h,[t.O,t.t],{columns:[0,"columns"]},null),t.Hb(2048,[[3,4]],c.l,null,[i.h]),(l()(),t.jb(0,null,null,2,null,q)),t.rb(66,540672,null,0,i.j,[t.O,t.t],{columns:[0,"columns"]},null),t.Hb(2048,[[2,4]],c.n,null,[i.j]),(l()(),t.sb(68,0,null,0,1,"footer",[],null,null,null,O.b,O.a)),t.rb(69,49152,null,0,H.a,[],null,null)],function(l,n){var u=n.component;l(n,1,0,"hover",!0),l(n,17,0,u.code,400),l(n,21,0,u.global),l(n,25,0,u.lazyLoad),l(n,27,0,"","true"),l(n,31,0,u.dataSource),l(n,38,0,"name"),l(n,51,0,"description"),l(n,63,0,u.displayedColumns),l(n,66,0,u.displayedColumns)},function(l,n){l(n,0,0,t.Cb(n,1).trackX,t.Cb(n,1).trackY,t.Cb(n,1).compact,"hover"===t.Cb(n,1).shown)})}function F(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,"global-options",[["class","page"]],null,null,null,Y,L)),t.rb(1,114688,null,0,j,[_.a,R.j],null,null)],function(l,n){l(n,1,0)},null)}var V=t.ob("global-options",j,F,{},{},[]),z=u("LYzL"),B=u("y7gG"),X=u("eXL1"),G=u("CRa1"),U=u("SECt"),J=u("s8WJ"),W=u("IfiR"),P=u("981U"),Q=u("a198"),$=u("IvSS"),Z=u("V3Ng"),ll=u("euho"),nl=u("abkR"),ul=u("Ho7M"),tl=u("0xYh"),el=u("+3V+"),ol=u("dgjn"),al=u("GcYS"),rl=u("8xy9"),bl=u("e8uv"),il=u("rXXt"),cl=u("Hfg7"),sl=u("XIB+"),dl=u("z1EI"),fl=u("qXP9"),hl=u("5dmV"),pl=u("LxDK"),ml=u("V7OE"),gl=u("AFqu"),Al=u("wEfT"),yl=u("FOLC"),wl=u("vA/A"),xl=u("6yYy"),Cl=u("PCNd"),vl=u("rh80");u.d(n,"GlobalOptionsPageModuleNgFactory",function(){return kl});var kl=t.pb(e,[],function(l){return t.zb([t.Ab(512,t.j,t.eb,[[8,[o.a,a.a,r.a,b.a,V]],[3,t.j],t.y]),t.Ab(4608,k.n,k.m,[t.v,[2,k.z]]),t.Ab(4608,z.b,z.b,[]),t.Ab(4608,B.c,B.c,[]),t.Ab(4608,R.f,z.c,[[2,z.g],[2,z.l]]),t.Ab(4608,X.c,X.c,[X.i,X.e,t.j,X.h,X.f,t.r,t.A,k.d,M.b,[2,k.h]]),t.Ab(5120,X.j,X.k,[X.c]),t.Ab(5120,G.a,G.b,[X.c]),t.Ab(5120,U.b,U.c,[X.c]),t.Ab(5120,J.c,J.d,[X.c]),t.Ab(135680,J.e,J.e,[X.c,t.r,[2,k.h],[2,J.b],J.c,[3,J.e],X.e]),t.Ab(4608,d.j,d.i,[d.d,d.g]),t.Ab(5120,t.b,function(l,n){return[d.m(l,n)]},[k.d,t.C]),t.Ab(4608,W.p,W.p,[]),t.Ab(4608,W.d,W.d,[]),t.Ab(1073742336,k.c,k.c,[]),t.Ab(1073742336,P.r,P.r,[[2,P.x],[2,P.o]]),t.Ab(1073742336,c.p,c.p,[]),t.Ab(1073742336,M.a,M.a,[]),t.Ab(1073742336,z.l,z.l,[[2,z.d],[2,R.g]]),t.Ab(1073742336,i.l,i.l,[]),t.Ab(1073742336,Q.d,Q.d,[]),t.Ab(1073742336,v.b,v.b,[]),t.Ab(1073742336,$.c,$.c,[]),t.Ab(1073742336,Z.h,Z.h,[]),t.Ab(1073742336,z.u,z.u,[]),t.Ab(1073742336,B.d,B.d,[]),t.Ab(1073742336,ll.c,ll.c,[]),t.Ab(1073742336,nl.f,nl.f,[]),t.Ab(1073742336,X.g,X.g,[]),t.Ab(1073742336,z.s,z.s,[]),t.Ab(1073742336,z.q,z.q,[]),t.Ab(1073742336,ul.d,ul.d,[]),t.Ab(1073742336,G.d,G.d,[]),t.Ab(1073742336,tl.a,tl.a,[]),t.Ab(1073742336,U.e,U.e,[]),t.Ab(1073742336,el.c,el.c,[]),t.Ab(1073742336,ol.b,ol.b,[]),t.Ab(1073742336,al.c,al.c,[]),t.Ab(1073742336,z.m,z.m,[]),t.Ab(1073742336,rl.b,rl.b,[]),t.Ab(1073742336,bl.c,bl.c,[]),t.Ab(1073742336,il.c,il.c,[]),t.Ab(1073742336,cl.a,cl.a,[]),t.Ab(1073742336,sl.d,sl.d,[]),t.Ab(1073742336,dl.a,dl.a,[]),t.Ab(1073742336,J.h,J.h,[]),t.Ab(1073742336,fl.b,fl.b,[]),t.Ab(1073742336,hl.a,hl.a,[]),t.Ab(1073742336,d.e,d.e,[]),t.Ab(1073742336,s.b,s.b,[]),t.Ab(1073742336,S.b,S.b,[]),t.Ab(1073742336,pl.a,pl.a,[]),t.Ab(1073742336,ml.a,ml.a,[[2,d.k],t.C]),t.Ab(1073742336,W.o,W.o,[]),t.Ab(1073742336,W.g,W.g,[]),t.Ab(1073742336,W.n,W.n,[]),t.Ab(1073742336,m.c,m.c,[]),t.Ab(1073742336,p.d,p.d,[]),t.Ab(1073742336,p.b,p.b,[]),t.Ab(1073742336,gl.d,gl.d,[]),t.Ab(1073742336,Al.e,Al.e,[]),t.Ab(1073742336,yl.f,yl.f,[]),t.Ab(1073742336,wl.b,wl.b,[]),t.Ab(1073742336,xl.b,xl.b,[]),t.Ab(1073742336,Cl.a,Cl.a,[]),t.Ab(1073742336,e,e,[]),t.Ab(256,Q.a,{separatorKeyCodes:[vl.f]},[]),t.Ab(1024,P.m,function(){return[[{path:"",component:j}]]},[])])})},wfyj:function(l,n,u){"use strict";u.d(n,"b",function(){return a}),u.d(n,"a",function(){return r});var t=u("D57K"),e=u("PVb+"),o=u("LiEJ"),a=function(){return function(l){var n=this;this.dataChange=new o.a([]),l.subscribe(function(l){n.dataChange.next(l)})}}(),r=function(l){function n(n){var u=l.call(this)||this;return u._apiDatabase=n,u}return t.c(n,l),n.prototype.connect=function(){return this._apiDatabase.dataChange},n.prototype.disconnect=function(){},n}(e.b)},"x8+N":function(l,n,u){"use strict";u.d(n,"c",function(){return o}),u.d(n,"f",function(){return a}),u.d(n,"a",function(){return r}),u.d(n,"d",function(){return b}),u.d(n,"b",function(){return i}),u.d(n,"e",function(){return c});var t=u("LoAr"),e=(u("EAoM"),u("WT9V"),u("X7Hn")),o=(u("C7Lb"),u("LYzL"),u("SeAg"),u("WV+C"),t.qb({encapsulation:2,styles:["mat-table{display:block}mat-header-row{min-height:56px}mat-footer-row,mat-row{min-height:48px}mat-footer-row,mat-header-row,mat-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-footer-row::after,mat-header-row::after,mat-row::after{display:inline-block;min-height:inherit;content:''}mat-cell:first-of-type,mat-footer-cell:first-of-type,mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-footer-cell:last-of-type,mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-footer-cell,mat-header-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-footer-row,tr.mat-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}td.mat-cell,td.mat-footer-cell,th.mat-header-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type,th.mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type,[dir=rtl] th.mat-header-cell:first-of-type{padding-left:0;padding-right:24px}td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type,th.mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type,[dir=rtl] th.mat-header-cell:last-of-type{padding-right:0;padding-left:24px}"],data:{}}));function a(l){return t.Mb(2,[t.Ib(402653184,1,{_rowOutlet:0}),t.Ib(402653184,2,{_headerRowOutlet:0}),t.Ib(402653184,3,{_footerRowOutlet:0}),(l()(),t.sb(3,16777216,null,null,1,null,null,null,null,null,null,null)),t.rb(4,16384,[[2,4]],0,e.s,[t.R,t.k],null,null),(l()(),t.sb(5,16777216,null,null,1,null,null,null,null,null,null,null)),t.rb(6,16384,[[1,4]],0,e.q,[t.R,t.k],null,null),(l()(),t.sb(7,16777216,null,null,1,null,null,null,null,null,null,null)),t.rb(8,16384,[[3,4]],0,e.r,[t.R,t.k],null,null)],null,null)}var r=t.qb({encapsulation:2,styles:[],data:{}});function b(l){return t.Mb(2,[(l()(),t.sb(0,16777216,null,null,1,null,null,null,null,null,null,null)),t.rb(1,147456,null,0,e.c,[t.R],null,null)],null,null)}var i=t.qb({encapsulation:2,styles:[],data:{}});function c(l){return t.Mb(2,[(l()(),t.sb(0,16777216,null,null,1,null,null,null,null,null,null,null)),t.rb(1,147456,null,0,e.c,[t.R],null,null)],null,null)}}}]);