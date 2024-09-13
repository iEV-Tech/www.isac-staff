"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1128],{5454:(L,y,c)=>{c.d(y,{K5:()=>F,X1:()=>u,c5:()=>q,cj:()=>M,fy:()=>k,ke:()=>A,nj:()=>j,wP:()=>E});var m=c(467),f=c(5972);const u=function(){var g=(0,m.A)(function*(e){var i,l,a,s,p,_,P,C,T,$,b;e.params=e.params||{},(0,f.Ll)({url:"api/RequestService/create",params:{ServiceId:null!==(i=e.params.ServiceId)&&void 0!==i?i:null,ChargePackageId:null!==(l=e.params.ChargePackageId)&&void 0!==l?l:null,RequestAddress:null!==(a=e.params.RequestAddress)&&void 0!==a?a:null,RequestLat:null!==(s=e.params.RequestLat)&&void 0!==s?s:null,RequestLong:null!==(p=e.params.RequestLong)&&void 0!==p?p:null,DestAddress:null!==(_=e.params.DestAddress)&&void 0!==_?_:null,DestLat:null!==(P=e.params.DestLat)&&void 0!==P?P:null,DestLong:null!==(C=e.params.DestLong)&&void 0!==C?C:null,ExecutionDateAsString:null!==(T=e.params.ExecutionDate)&&void 0!==T?T:null,ExecutionTimeAsString:null!==($=e.params.ExecutionTime)&&void 0!==$?$:null,Notes:null!==(b=e.params.Notes)&&void 0!==b?b:null},success:h=>{"function"==typeof e.callback&&e.callback(h.data||null)},error:h=>{var I;"function"==typeof e.callback&&e.callback(null==h||null===(I=h.response)||void 0===I?void 0:I.data),console.error(h)},loading:e.loading,loadingController:e.loadingController})});return function(i){return g.apply(this,arguments)}}(),k=function(){var g=(0,m.A)(function*(e){var i,l,a,s;e.params=e.params||{},(0,f.hm)({url:"api/RequestService/get-myhistory",params:{VRequestStatus:null!==(i=e.params.VRequestStatus)&&void 0!==i?i:null,VRequestStatusMulti:null!==(l=e.params.VRequestStatusMulti)&&void 0!==l?l:null,PageNumber:null!==(a=e.params.PageNumber)&&void 0!==a?a:1,PageSize:null!==(s=e.params.PageSize)&&void 0!==s?s:10},success:p=>{"function"==typeof e.callback&&e.callback(p.data||null)},error:p=>{var _;"function"==typeof e.callback&&e.callback(null==p||null===(_=p.response)||void 0===_?void 0:_.data),console.error(p)},loading:e.loading,loadingController:e.loadingController})});return function(i){return g.apply(this,arguments)}}(),F=function(){var g=(0,m.A)(function*(e){var i;e.params=e.params||{},(0,f.hm)({url:`api/RequestService/get-detail/${e.params.RequestServiceId}`,params:{RequestServiceId:null!==(i=e.params.RequestServiceId)&&void 0!==i?i:null},success:l=>{"function"==typeof e.callback&&e.callback(l.data||null)},error:l=>{var a;"function"==typeof e.callback&&e.callback(null==l||null===(a=l.response)||void 0===a?void 0:a.data),console.error(l)},loading:e.loading,loadingController:e.loadingController})});return function(i){return g.apply(this,arguments)}}(),M=function(){var g=(0,m.A)(function*(e){var i,l;e.params=e.params||{},(0,f.hm)({url:"api/RequestService/get-requesting",params:{PageNumber:null!==(i=e.params.PageNumber)&&void 0!==i?i:1,PageSize:null!==(l=e.params.PageSize)&&void 0!==l?l:10},success:a=>{"function"==typeof e.callback&&e.callback(a.data||null)},error:a=>{var s;"function"==typeof e.callback&&e.callback(null==a||null===(s=a.response)||void 0===s?void 0:s.data),console.error(a)},loading:e.loading,loadingController:e.loadingController})});return function(i){return g.apply(this,arguments)}}(),A=function(){var g=(0,m.A)(function*(e){var i,l;e.params=e.params||{},(0,f.hm)({url:"api/RequestService/get-waitconfirm",params:{PageNumber:null!==(i=e.params.PageNumber)&&void 0!==i?i:1,PageSize:null!==(l=e.params.PageSize)&&void 0!==l?l:10},success:a=>{"function"==typeof e.callback&&e.callback(a.data||null)},error:a=>{var s;"function"==typeof e.callback&&e.callback(null==a||null===(s=a.response)||void 0===s?void 0:s.data),console.error(a)},loading:e.loading,loadingController:e.loadingController})});return function(i){return g.apply(this,arguments)}}(),q=function(){var g=(0,m.A)(function*(e){var i;e.params=e.params||{},(0,f.Ll)({url:"api/RequestService/wait-confirm",params:{RequestServiceId:null!==(i=e.params.RequestServiceId)&&void 0!==i?i:null},success:l=>{"function"==typeof e.callback&&e.callback(l.data||null)},error:l=>{var a;"function"==typeof e.callback&&e.callback(null==l||null===(a=l.response)||void 0===a?void 0:a.data),console.error(l)},loading:e.loading,loadingController:e.loadingController})});return function(i){return g.apply(this,arguments)}}(),E=function(){var g=(0,m.A)(function*(e){var i,l;e.params=e.params||{},(0,f.Ll)({url:"api/RequestService/assign",params:{RequestServiceId:null!==(i=e.params.RequestServiceId)&&void 0!==i?i:null,StaffUserId:null!==(l=e.params.StaffUserId)&&void 0!==l?l:null},success:a=>{"function"==typeof e.callback&&e.callback(a.data||null)},error:a=>{var s;"function"==typeof e.callback&&e.callback(null==a||null===(s=a.response)||void 0===s?void 0:s.data),console.error(a)},loading:e.loading,loadingController:e.loadingController})});return function(i){return g.apply(this,arguments)}}(),j=function(){var g=(0,m.A)(function*(e){var i,l;e.params=e.params||{},(0,f.Ll)({url:"api/RequestService/decline",params:{RequestServiceId:null!==(i=e.params.RequestServiceId)&&void 0!==i?i:null,Reason:null!==(l=e.params.Reason)&&void 0!==l?l:null},success:a=>{"function"==typeof e.callback&&e.callback(a.data||null)},error:a=>{var s;"function"==typeof e.callback&&e.callback(null==a||null===(s=a.response)||void 0===s?void 0:s.data),console.error(a)},loading:e.loading,loadingController:e.loadingController})});return function(i){return g.apply(this,arguments)}}()},1128:(L,y,c)=>{c.r(y),c.d(y,{RequestServicePageModule:()=>I});var m=c(177),f=c(9417),u=c(9465),D=c(7625),k=c(467),F=c(5312),M=c(5454),A=c(6539),q=c(8517),E=c(2021),j=c(3588),g=c(8833),e=c(4438),i=c(3656),l=c(4842);const a=r=>({$implicit:r});function s(r,v){if(1&r&&(e.qex(0),e.j41(1,"div",12),e.eu8(2,13),e.k0s(),e.bVm()),2&r){const d=v.$implicit;e.XpG(2);const t=e.sdS(32);e.R7$(2),e.Y8G("ngTemplateOutlet",t)("ngTemplateOutletContext",e.eq3(2,a,d))}}function p(r,v){if(1&r&&(e.j41(0,"div",8)(1,"div",10),e.DNE(2,s,3,4,"ng-container",11),e.k0s()()),2&r){const d=e.XpG();e.R7$(2),e.Y8G("ngForOf",d.requestServices)}}function _(r,v){1&r&&(e.j41(0,"div",14),e.nrm(1,"img",15),e.j41(2,"div",16),e.EFF(3),e.nI1(4,"translate"),e.k0s()()),2&r&&(e.R7$(3),e.JRh(e.bMT(4,1,"DataNotFound")))}function P(r,v){if(1&r){const d=e.RV6();e.j41(0,"ion-infinite-scroll",17),e.bIt("ionInfinite",function(n){e.eBV(d);const o=e.XpG();return e.Njj(o.onIonInfinite(n))}),e.nrm(1,"ion-infinite-scroll-content"),e.k0s()}}function C(r,v){if(1&r){const d=e.RV6();e.j41(0,"div",18),e.bIt("click",function(){let n;const o=e.eBV(d).$implicit,R=e.XpG();return e.Njj(R.navigateByUrl(R.APP_ROUTE.REQUEST_SERVICE_DETAIL.replace(":id",null!==(n=null==o.RequestServiceId?null:o.RequestServiceId.toString())&&void 0!==n?n:"")))}),e.j41(1,"div",19)(2,"b"),e.EFF(3),e.k0s(),e.j41(4,"ion-chip")(5,"ion-label"),e.EFF(6),e.k0s()()(),e.j41(7,"div",20)(8,"small",21),e.EFF(9),e.k0s(),e.j41(10,"ion-text",22)(11,"small")(12,"b"),e.EFF(13),e.k0s()()()()()}if(2&r){let d;const t=v.$implicit,n=e.XpG();e.R7$(3),e.JRh(t.ServiceName),e.R7$(3),e.SpI("",n.APP_FUNC_FormatMoney(null!==(d=t.PayValue)&&void 0!==d?d:0),"\u0111"),e.R7$(3),e.JRh(n.APP_FUNC_FormatDate(t.RequestDate)),e.R7$(),e.Y8G("color",n.APP_FUNC_GetColor_VRequestStatus(t.VRequestStatus)),e.R7$(3),e.JRh(t.VRequestStatusName)}}const $=[{path:"",component:(()=>{var r;class v{constructor(t,n,o,R,S,N){this.router=t,this.platform=n,this.modalController=o,this.animationController=R,this.toastController=S,this.loadingController=N,this.APP_ROUTE=g._,this.APP_FUNC_FormatMoney=q.xi,this.APP_FUNC_FormatDate=q.Rv,this.APP_FUNC_GetColor_VRequestStatus=q.rZ,this.v_request_status=j.Gz,this.readfile_url=F.c.readfile_url,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.requestServices=[],this.limitLoad=0}ngOnInit(){this.IsOnInit=!0,(0,A.kU)().then(t=>{t&&this.refreshData()})}ionViewDidEnter(){this.IsOnInit?this.IsOnInit=!1:this.refreshData()}onIonRefresher(t){this.filter={},this.refreshData(()=>{t.target.complete()})}onIonInfinite(t){this.loadMore(()=>{t.target.complete()})}onIonSegmentChange(t){this.filter.VRequestStatusMulti=t.detail.value,this.filterChange()}pushData(t){1==this.paging.page&&(this.requestServices.length=0),this.requestServices=this.requestServices.concat(t)}refreshData(t){this.filter={},this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit(t)}loadMore(t){this.paging.page+=1,this.loadData_Paging_Limit(t)}searchChange(t){this.filter.search=t.target.value.replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}sortChange(t,n){this.paging.sortfield=t||null,this.paging.sorttype=n||null,this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}filterChange(){this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}loadData_Paging_Limit(t){var n=this;return(0,k.A)(function*(){if(n.limitLoad>0)return void(t&&t());n.limitLoad=300;let o=setInterval(()=>{n.limitLoad-=100,n.limitLoad<=0&&(clearInterval(o),n.loadData_Paging(t))},100)})()}loadData_Paging(t){var n=this;return(0,k.A)(function*(){n.paging.loading=!0,(0,M.fy)({loadingController:n.loadingController,params:{VRequestStatusMulti:n.filter.VRequestStatusMulti,PageNumber:n.paging.page,PageSize:n.paging.limit},callback:o=>{var R;n.response=o,null!=o&&o.Succeeded?n.pushData(null!==(R=o.Data)&&void 0!==R?R:[]):(0,E.cX)(n.toastController,{},o).then(S=>S.present()),n.paging.loading=!1,n.paging.active=!(null==o||!o.HasNextPage),t&&t()}})})()}navigateByUrl(t){this.router.navigateByUrl(t)}}return(r=v).\u0275fac=function(t){return new(t||r)(e.rXU(D.Ix),e.rXU(i.OD),e.rXU(u.W3),e.rXU(u.Hx),e.rXU(u.K_),e.rXU(u.Xi))},r.\u0275cmp=e.VBU({type:r,selectors:[["app-request-service"]],decls:33,vars:28,consts:[["templateRequestService",""],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],[1,"container","px-0"],["mode","md",3,"ionChange","value"],["value",""],[3,"value"],[1,"container","pt-3","pb-4"],[3,"ionInfinite",4,"ngIf"],[1,"row"],[4,"ngFor","ngForOf"],[1,"col-12","col-lg-6","mb-3"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"container","py-5","text-center"],["src","../../../assets/image/default/no-info.svg"],[1,"text-muted","mt-4"],[3,"ionInfinite"],[1,"card-order","cursor-pointer",3,"click"],[1,"d-flex","align-items-start","justify-content-between"],[1,"d-flex","align-items-end","justify-content-between","mt-2"],[1,"text-muted"],[3,"color"]],template:function(t,n){if(1&t){const o=e.RV6();e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1),e.nrm(3,"ion-back-button",2),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.nI1(6,"translate"),e.k0s()()(),e.j41(7,"ion-content")(8,"ion-refresher",3),e.bIt("ionRefresh",function(S){return e.eBV(o),e.Njj(n.onIonRefresher(S))}),e.nrm(9,"ion-refresher-content"),e.k0s(),e.j41(10,"div",4)(11,"ion-segment",5),e.bIt("ionChange",function(S){return e.eBV(o),e.Njj(n.onIonSegmentChange(S))}),e.j41(12,"ion-segment-button",6)(13,"ion-label"),e.EFF(14),e.nI1(15,"translate"),e.k0s()(),e.j41(16,"ion-segment-button",7)(17,"ion-label"),e.EFF(18),e.nI1(19,"translate"),e.k0s()(),e.j41(20,"ion-segment-button",7)(21,"ion-label"),e.EFF(22),e.nI1(23,"translate"),e.k0s()(),e.j41(24,"ion-segment-button",7)(25,"ion-label"),e.EFF(26),e.nI1(27,"translate"),e.k0s()()()(),e.DNE(28,p,3,1,"div",8)(29,_,5,3)(30,P,2,0,"ion-infinite-scroll",9),e.k0s(),e.DNE(31,C,14,5,"ng-template",null,0,e.C5r)}if(2&t){let o;e.R7$(3),e.Y8G("defaultHref",n.APP_ROUTE.DEFAULT),e.R7$(2),e.JRh(e.bMT(6,18,"ServiceHistory")),e.R7$(6),e.Y8G("value",null!==(o=n.filter.VRequestStatusMulti)&&void 0!==o?o:""),e.R7$(3),e.JRh(e.bMT(15,20,"All")),e.R7$(2),e.yjJ("value","",n.v_request_status.YeuCauDichVu,",",n.v_request_status.NhanVienDangDiDen,",",n.v_request_status.DangPhucVu,""),e.R7$(2),e.JRh(e.bMT(19,22,"Processing")),e.R7$(2),e.FS9("value",n.v_request_status.HoanTat),e.R7$(2),e.JRh(e.bMT(23,24,"Completed")),e.R7$(2),e.yjJ("value","",n.v_request_status.KhachHangHuy,",",n.v_request_status.TuChoiPhucVu,",",n.v_request_status.Loi,""),e.R7$(2),e.JRh(e.bMT(27,26,"Error")),e.R7$(2),e.vxM(28,n.requestServices.length?28:n.response?29:-1),e.R7$(2),e.Y8G("ngIf",n.paging.active)}},dependencies:[m.Sq,m.bT,m.T3,u.QW,u.ZB,u.W9,u.eU,u.Ax,u.Hp,u.he,u.To,u.Ki,u.Gp,u.eP,u.IO,u.BC,u.ai,u.Je,u.el,l.D9],styles:[".card-order[_ngcontent-%COMP%]{padding:1rem;border-radius:1rem;background-color:var(--ion-color-light);color:var(--ion-color-light-contrast)}.card-order[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{min-height:1.25rem;padding-top:.25rem;padding-bottom:.25rem;background:transparent}.card-order[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;line-height:0;border:1px solid var(--ion-color-medium-tint)}"]}),v})()}];let b=(()=>{var r;class v{}return(r=v).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[D.iI.forChild($),D.iI]}),v})();var h=c(3664);let I=(()=>{var r;class v{}return(r=v).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[m.MD,f.YN,u.bv,b,h.x]}),v})()}}]);