"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5845],{5845:(b,d,s)=>{s.r(d),s.d(d,{SupportPageModule:()=>I});var u=s(177),m=s(9417),i=s(9465),f=s(7625),g=s(467),h=s(5972);const v=function(){var o=(0,g.A)(function*(e){var r,t;e.params=e.params||{},(0,h.hm)({url:"api/Faq/get-faqs",params:{PageNumber:null!==(r=e.params.PageNumber)&&void 0!==r?r:1,PageSize:null!==(t=e.params.PageSize)&&void 0!==t?t:10},success:a=>{"function"==typeof e.callback&&e.callback(a.data||null)},error:a=>{var l;"function"==typeof e.callback&&e.callback(null==a||null===(l=a.response)||void 0===l?void 0:l.data),console.error(a)},loading:e.loading,loadingController:e.loadingController})});return function(r){return o.apply(this,arguments)}}();var P=s(6539),R=s(2021),S=s(8833),n=s(4438),F=s(4842);function y(o,e){1&o&&(n.j41(0,"div",8),n.nrm(1,"img",9),n.j41(2,"div",10),n.EFF(3),n.nI1(4,"translate"),n.k0s()()),2&o&&(n.R7$(3),n.JRh(n.bMT(4,1,"DataNotFound")))}function C(o,e){if(1&o&&(n.qex(0),n.j41(1,"ion-accordion",11)(2,"ion-item",12)(3,"ion-label"),n.EFF(4),n.k0s()(),n.nrm(5,"div",13),n.k0s(),n.bVm()),2&o){const r=e.$implicit;n.R7$(),n.Mz_("value","accordion-",r.FaqId,""),n.R7$(3),n.JRh(r.Question),n.R7$(),n.Y8G("innerHTML",r.Answer,n.npT)}}const M=[{path:"",component:(()=>{var o;class e{constructor(t,a){this.loadingController=t,this.toastController=a,this.APP_ROUTE=S._,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.faqs=[]}ngOnInit(){var t=this;(0,g.A)(function*(){(yield(0,P.kU)())&&t.refreshData()})()}onIonRefresher(t){this.filter={},this.refreshData(()=>{t.target.complete()})}onIonInfinite(t){this.loadMore(()=>{t.target.complete()})}pushData(t){1==this.paging.page&&(this.faqs.length=0),this.faqs=this.faqs.concat(t)}refreshData(t){this.filter={},this.paging.page=1,this.paging.active=!0,this.loadData_Paging(t)}loadMore(t){this.paging.page+=1,this.loadData_Paging(t)}loadData_Paging(t){var a=this;return(0,g.A)(function*(){a.paging.loading=!0,v({loadingController:a.loadingController,params:{PageNumber:a.paging.page,PageSize:a.paging.limit},callback:l=>{var p;a.response=l,null!=l&&l.Succeeded?a.pushData(null!==(p=l.Data)&&void 0!==p?p:[]):(0,R.cX)(a.toastController,{},l).then(c=>c.present()),a.paging.loading=!1,a.paging.active=!(null==l||!l.HasNextPage),t&&t()}})})()}}return(o=e).\u0275fac=function(t){return new(t||o)(n.rXU(i.Xi),n.rXU(i.K_))},o.\u0275cmp=n.VBU({type:o,selectors:[["app-support"]],decls:15,vars:6,consts:[["accordionGroup",""],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container py-5 text-center",4,"ngIf"],[1,"container"],["mode","ios"],[4,"ngFor","ngForOf"],[1,"container","py-5","text-center"],["src","../../../assets/image/default/no-info.svg"],[1,"text-muted","mt-4"],[3,"value"],["slot","header","lines","none","color","light"],["slot","content",1,"ion-padding",3,"innerHTML"]],template:function(t,a){if(1&t){const l=n.RV6();n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1),n.nrm(3,"ion-back-button",2),n.k0s(),n.j41(4,"ion-title"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()(),n.j41(7,"ion-content")(8,"ion-refresher",3),n.bIt("ionRefresh",function(c){return n.eBV(l),n.Njj(a.onIonRefresher(c))}),n.nrm(9,"ion-refresher-content"),n.k0s(),n.DNE(10,y,5,3,"div",4),n.j41(11,"div",5)(12,"ion-accordion-group",6,0),n.DNE(14,C,6,4,"ng-container",7),n.k0s()()()}2&t&&(n.R7$(3),n.Y8G("defaultHref",a.APP_ROUTE.TABS_USER),n.R7$(2),n.JRh(n.bMT(6,4,"FAQ")),n.R7$(5),n.Y8G("ngIf",a.response&&!a.faqs.length),n.R7$(4),n.Y8G("ngForOf",a.faqs))},dependencies:[u.Sq,u.bT,i.xk,i.YH,i.QW,i.W9,i.eU,i.uz,i.he,i.To,i.Ki,i.BC,i.ai,i.el,F.D9],styles:["ion-accordion[_ngcontent-%COMP%]{margin-bottom:1rem;border-radius:.75rem}ion-accordion[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--min-height: 4rem}"]}),e})()}];let T=(()=>{var o;class e{}return(o=e).\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[f.iI.forChild(M),f.iI]}),e})();var $=s(3890);let I=(()=>{var o;class e{}return(o=e).\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[u.MD,m.YN,i.bv,T,$.x]}),e})()}}]);