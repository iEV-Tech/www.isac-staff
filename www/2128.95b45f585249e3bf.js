"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2128],{2128:(x,d,r)=>{r.r(d),r.d(d,{ChargingReservationPageModule:()=>$});var h=r(177),f=r(9417),g=r(9465),p=r(7625),v=r(467),R=r(1278),C=r(6539),u=r(8517),P=r(2021),m=r(8833),t=r(4438),I=r(4842);const D=n=>({$implicit:n});function F(n,s){1&n&&(t.j41(0,"div",9),t.nrm(1,"ion-img",10),t.j41(2,"div",11),t.EFF(3),t.nI1(4,"translate"),t.k0s()()),2&n&&(t.R7$(3),t.JRh(t.bMT(4,1,"DataNotFound")))}function T(n,s){if(1&n&&(t.qex(0),t.j41(1,"div",12),t.eu8(2,13),t.k0s(),t.bVm()),2&n){const o=s.$implicit;t.XpG();const e=t.sdS(16);t.R7$(2),t.Y8G("ngTemplateOutlet",e)("ngTemplateOutletContext",t.eq3(2,D,o))}}function j(n,s){if(1&n){const o=t.RV6();t.j41(0,"ion-infinite-scroll",14),t.bIt("ionInfinite",function(i){t.eBV(o);const a=t.XpG();return t.Njj(a.onIonInfinite(i))}),t.nrm(1,"ion-infinite-scroll-content"),t.k0s()}}function M(n,s){if(1&n){const o=t.RV6();t.j41(0,"div",15),t.bIt("click",function(i){const a=t.eBV(o).$implicit,l=t.XpG();return t.Njj(l.openDetail(i,a))}),t.j41(1,"div",16)(2,"b"),t.EFF(3),t.nrm(4,"br"),t.EFF(5),t.k0s()(),t.j41(6,"div",17)(7,"small",18),t.EFF(8),t.nI1(9,"translate"),t.k0s(),t.j41(10,"ion-text",19)(11,"small"),t.EFF(12),t.k0s()()()()}if(2&n){const o=s.$implicit,e=t.XpG();t.R7$(3),t.JRh(o.ApplyDate),t.R7$(2),t.Lme("",o.ApplyTimeStart," - ",o.ApplyTimeEnd,""),t.R7$(3),t.Lme("",t.bMT(9,7,"CreatedDate"),": ",e.APP_FUNC_FormatDate(o.CreatedDate),""),t.R7$(2),t.Y8G("color","Scheduled"==o.StatusName?"tertiary":"Cancelled"==o.StatusName?"danger":""),t.R7$(2),t.JRh(o.StatusDescription)}}const _=[{path:"",component:(()=>{var n;class s{constructor(e,i,a){this.router=e,this.loadingController=i,this.toastController=a,this.APP_ROUTE=m._,this.APP_FUNC_FormatMoney=u.xi,this.APP_FUNC_FormatDate=u.Rv,this.paging={sortfield:null,sorttype:null,page:1,limit:20,loading:!1,active:!0},this.filter={},this.chargingReservations=[]}openDetail(e,i){var a=this;return(0,v.A)(function*(){var l,c;a.router.navigateByUrl(m._.CHARGING_RESERVATION_DETAIL.replace(":id",null!==(l=null===(c=i.ChargeReservationId)||void 0===c?void 0:c.toString())&&void 0!==l?l:""))})()}ngOnInit(){var e=this;(0,v.A)(function*(){(yield(0,C.kU)())&&e.refreshData()})()}onIonRefresher(e){this.filter={},this.refreshData(()=>{e.target.complete()})}onIonInfinite(e){this.loadMore(()=>{e.target.complete()})}pushData(e){1==this.paging.page&&(this.chargingReservations.length=0),this.chargingReservations=this.chargingReservations.concat(e)}refreshData(e){this.filter={},this.paging.page=1,this.paging.active=!0,this.loadData_Paging(e)}loadMore(e){this.paging.page+=1,this.loadData_Paging(e)}searchChange(e){this.filter.search=e.target.value.replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}sortChange(e,i){this.paging.sortfield=e||null,this.paging.sorttype=i||null,this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}filterChange(){this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}loadData_Paging(e){var i=this;return(0,v.A)(function*(){i.paging.loading=!0,(0,R.W1)({loadingController:i.loadingController,params:{PageNumber:i.paging.page,PageSize:i.paging.limit},callback:a=>{var l;i.response=a,null!=a&&a.Succeeded?i.pushData(null!==(l=null==a?void 0:a.Data)&&void 0!==l?l:[]):(0,P.cX)(i.toastController,{},a).then(c=>c.present()),i.paging.loading=!1,i.paging.active=!(null==a||!a.HasNextPage),e&&e()}})})()}}return(n=s).\u0275fac=function(e){return new(e||n)(t.rXU(p.Ix),t.rXU(g.Xi),t.rXU(g.K_))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-charging-reservation"]],decls:17,vars:7,consts:[["templateChargingReservation",""],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container container-loading py-5 text-center",4,"ngIf"],[1,"container"],[1,"row"],[4,"ngFor","ngForOf"],[3,"ionInfinite",4,"ngIf"],[1,"container","container-loading","py-5","text-center"],["src","../../../assets/icon/ion-img/no-data.svg"],[1,"text-muted","mt-4"],[1,"col-12","col-lg-6","mb-3"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ionInfinite"],[1,"card-reservation","cursor-pointer",3,"click"],[1,"d-flex","align-items-start","justify-content-between"],[1,"d-flex","align-items-end","justify-content-between","mt-2"],[1,"text-muted"],[3,"color"]],template:function(e,i){if(1&e){const a=t.RV6();t.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1),t.nrm(3,"ion-back-button",2),t.k0s(),t.j41(4,"ion-title"),t.EFF(5),t.nI1(6,"translate"),t.k0s()()(),t.j41(7,"ion-content")(8,"ion-refresher",3),t.bIt("ionRefresh",function(c){return t.eBV(a),t.Njj(i.onIonRefresher(c))}),t.nrm(9,"ion-refresher-content"),t.k0s(),t.DNE(10,F,5,3,"div",4),t.j41(11,"div",5)(12,"div",6),t.DNE(13,T,3,4,"ng-container",7),t.k0s()(),t.DNE(14,j,2,0,"ion-infinite-scroll",8),t.k0s(),t.DNE(15,M,13,9,"ng-template",null,0,t.C5r)}2&e&&(t.R7$(3),t.Y8G("defaultHref",i.APP_ROUTE.TABS_USER),t.R7$(2),t.JRh(t.bMT(6,5,"Booking")),t.R7$(5),t.Y8G("ngIf",i.response&&!i.chargingReservations.length),t.R7$(3),t.Y8G("ngForOf",i.chargingReservations),t.R7$(),t.Y8G("ngIf",i.paging.active))},dependencies:[h.Sq,h.bT,h.T3,g.QW,g.W9,g.eU,g.KW,g.Ax,g.Hp,g.To,g.Ki,g.IO,g.BC,g.ai,g.el,I.D9],styles:[".card-reservation[_ngcontent-%COMP%]{padding:1rem;border-radius:1rem;background-color:var(--ion-color-light);color:var(--ion-color-light-contrast)}.card-reservation[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{min-height:1.25rem;padding-top:.25rem;padding-bottom:.25rem}.card-reservation[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;line-height:0}"]}),s})()}];let y=(()=>{var n;class s{}return(n=s).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[p.iI.forChild(_),p.iI]}),s})();var N=r(3890);let $=(()=>{var n;class s{}return(n=s).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[h.MD,f.YN,g.bv,y,N.x]}),s})()}}]);