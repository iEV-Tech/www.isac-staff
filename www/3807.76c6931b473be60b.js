"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3807],{3807:(G,m,r)=>{r.r(m),r.d(m,{RequestProcessedPageModule:()=>O});var c=r(177),f=r(9417),o=r(9465),d=r(7625),p=r(467),v=r(5312),R=r(7142),_=r(6539),h=r(9136),C=r(2678),I=r(3588),F=r(8833),e=r(4438),T=r(3656),M=r(9777),j=r(4842);const D=s=>({$implicit:s});function q(s,l){if(1&s&&(e.qex(0),e.j41(1,"div",12),e.eu8(2,13),e.k0s(),e.bVm()),2&s){const a=l.$implicit;e.XpG(2);const t=e.sdS(33);e.R7$(2),e.Y8G("ngTemplateOutlet",t)("ngTemplateOutletContext",e.eq3(2,D,a))}}function S(s,l){if(1&s&&(e.j41(0,"div",8)(1,"div",10),e.DNE(2,q,3,4,"ng-container",11),e.k0s()()),2&s){const a=e.XpG();e.R7$(2),e.Y8G("ngForOf",a.requestProcesseds)}}function E(s,l){1&s&&(e.j41(0,"div",14),e.nrm(1,"img",15),e.j41(2,"div",16),e.EFF(3),e.nI1(4,"translate"),e.k0s()()),2&s&&(e.R7$(3),e.JRh(e.bMT(4,1,"DataNotFound")))}function U(s,l){if(1&s){const a=e.RV6();e.j41(0,"ion-infinite-scroll",17),e.bIt("ionInfinite",function(n){e.eBV(a);const i=e.XpG();return e.Njj(i.onIonInfinite(n))}),e.nrm(1,"ion-infinite-scroll-content"),e.k0s()}}function V(s,l){if(1&s){const a=e.RV6();e.j41(0,"div",18),e.bIt("click",function(){let n;const i=e.eBV(a).$implicit,u=e.XpG();return e.Njj(u.navigateByUrl(u.APP_ROUTE.REQUEST_PROCESSED_DETAIL.replace(":id",null!==(n=null==i.RequestProcessedId?null:i.RequestProcessedId.toString())&&void 0!==n?n:"")))}),e.j41(1,"div",19)(2,"ion-text",20)(3,"b",21),e.EFF(4),e.k0s()(),e.j41(5,"span",22),e.EFF(6),e.k0s()(),e.j41(7,"div",23),e.EFF(8),e.k0s(),e.j41(9,"div",24)(10,"small",25),e.EFF(11),e.k0s()()()}if(2&s){const a=l.$implicit,t=e.XpG();e.R7$(2),e.Y8G("color",t.APP_FUNC_GetColor_VProcessStatus(a.VProcessStatus)),e.R7$(2),e.JRh(a.VProcessStatusName),e.R7$(2),e.JRh(t.APP_FUNC_FormatDate(a.RequestDate)),e.R7$(2),e.JRh(a.ServiceName),e.R7$(3),e.JRh(a.RequestAddress)}}const $=[{path:"",component:(()=>{var s;class l{constructor(t,n,i,u,g,N,x){this.activatedRoute=t,this.router=n,this.platform=i,this.modalController=u,this.animationController=g,this.toastController=N,this.loadingController=x,this.APP_ROUTE=F._,this.APP_FUNC_FormatMoney=h.xi,this.APP_FUNC_FormatDate=h.Rv,this.APP_FUNC_GetColor_VProcessStatus=h.R0,this.v_process_status=I.Sx,this.readfile_url=v.c.readfile_url,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.requestProcesseds=[],this.limitLoad=0;let P=t.snapshot.queryParams.tab;P&&(this.filter.VProcessStatusMulti=P)}ngOnInit(){this.IsOnInit=!0,(0,_.kU)().then(t=>{t&&this.refreshData()})}ionViewDidEnter(){this.IsOnInit?this.IsOnInit=!1:this.refreshData()}onIonRefresher(t){this.filter={},this.paging.page=1,this.paging.active=!0,this.refreshData(()=>{t.target.complete()})}onIonInfinite(t){this.loadMore(()=>{t.target.complete()})}onIonSegmentChange(t){this.filter.VProcessStatusMulti=t.detail.value,this.filterChange(),this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{tab:this.filter.VProcessStatusMulti},queryParamsHandling:"merge",replaceUrl:!0})}pushData(t){1==this.paging.page&&(this.requestProcesseds.length=0),this.requestProcesseds=this.requestProcesseds.concat(t)}refreshData(t){this.loadData_Paging_Limit(t)}loadMore(t){this.paging.page+=1,this.loadData_Paging_Limit(t)}searchChange(t){this.filter.search=t.target.value.replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}sortChange(t,n){this.paging.sortfield=t||null,this.paging.sorttype=n||null,this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}filterChange(){this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}loadData_Paging_Limit(t){var n=this;return(0,p.A)(function*(){if(n.limitLoad>0)return void(t&&t());n.limitLoad=300;let i=setInterval(()=>{n.limitLoad-=100,n.limitLoad<=0&&(clearInterval(i),n.loadData_Paging(t))},100)})()}loadData_Paging(t){var n=this;return(0,p.A)(function*(){n.paging.loading=!0,(0,R.Ms)({loadingController:n.loadingController,params:{VProcessStatusMulti:n.filter.VProcessStatusMulti,PageNumber:n.paging.page,PageSize:n.paging.limit},callback:i=>{var u;n.response=i,null!=i&&i.Succeeded?n.pushData(null!==(u=i.Data)&&void 0!==u?u:[]):(0,C.cX)(n.toastController,{},i).then(g=>g.present()),n.paging.loading=!1,n.paging.active=!(null==i||!i.HasNextPage),t&&t()}})})()}navigateByUrl(t){this.router.navigateByUrl(t)}}return(s=l).\u0275fac=function(t){return new(t||s)(e.rXU(d.nX),e.rXU(d.Ix),e.rXU(T.OD),e.rXU(o.W3),e.rXU(o.Hx),e.rXU(o.K_),e.rXU(o.Xi))},s.\u0275cmp=e.VBU({type:s,selectors:[["app-request-processed"]],decls:34,vars:27,consts:[["templateRequestService",""],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],[1,"container","px-0"],["mode","md",3,"ionChange","value"],["value",""],[3,"value"],[1,"container","pt-3","pb-4"],[3,"ionInfinite",4,"ngIf"],[1,"row"],[4,"ngFor","ngForOf"],[1,"col-12","col-lg-6","mb-3"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"container","py-5","text-center"],["src","../../../assets/image/default/no-info.svg"],[1,"text-muted","mt-4"],[3,"ionInfinite"],[1,"card-order","cursor-pointer",3,"click"],[1,"d-flex","align-items-start","justify-content-between"],[3,"color"],[1,"fs-14"],[1,"fs-14","text-muted"],[1,"mt-2","fw-600"],[1,"mt-2"],[1,"text-muted"]],template:function(t,n){if(1&t){const i=e.RV6();e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1),e.nrm(3,"ion-back-button",2),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.nI1(6,"translate"),e.k0s()()(),e.j41(7,"ion-content")(8,"ion-refresher",3),e.bIt("ionRefresh",function(g){return e.eBV(i),e.Njj(n.onIonRefresher(g))}),e.nrm(9,"ion-refresher-content"),e.k0s(),e.j41(10,"div",4)(11,"ion-segment",5),e.bIt("ionChange",function(g){return e.eBV(i),e.Njj(n.onIonSegmentChange(g))}),e.j41(12,"ion-segment-button",6)(13,"ion-label"),e.EFF(14),e.nI1(15,"translate"),e.k0s()(),e.j41(16,"ion-segment-button",7)(17,"ion-label"),e.EFF(18),e.nI1(19,"translate"),e.k0s()(),e.j41(20,"ion-segment-button",7)(21,"ion-label"),e.EFF(22),e.nI1(23,"translate"),e.k0s()(),e.j41(24,"ion-segment-button",7)(25,"ion-label"),e.EFF(26),e.nI1(27,"translate"),e.k0s()()()(),e.DNE(28,S,3,1,"div",8)(29,E,5,3)(30,U,2,0,"ion-infinite-scroll",9),e.k0s(),e.nrm(31,"app-footer-tabs"),e.DNE(32,V,12,5,"ng-template",null,0,e.C5r)}if(2&t){let i;e.R7$(3),e.Y8G("defaultHref",n.APP_ROUTE.DEFAULT),e.R7$(2),e.JRh(e.bMT(6,17,"ServiceHistory")),e.R7$(6),e.Y8G("value",null!==(i=n.filter.VProcessStatusMulti)&&void 0!==i?i:""),e.R7$(3),e.JRh(e.bMT(15,19,"All")),e.R7$(2),e.FCK("value","",n.v_process_status.NhanDichVu,",",n.v_process_status.DangPhucVu,""),e.R7$(2),e.JRh(e.bMT(19,21,"Processing")),e.R7$(2),e.FS9("value",n.v_process_status.HoanTat),e.R7$(2),e.JRh(e.bMT(23,23,"Completed")),e.R7$(2),e.yjJ("value","",n.v_process_status.KhachHangHuy,",",n.v_process_status.NhanVienTuChoi,",",n.v_process_status.TuChoiKhongPhaiXeVIP,""),e.R7$(2),e.JRh(e.bMT(27,25,"Error")),e.R7$(2),e.vxM(28,n.requestProcesseds.length?28:n.response?29:-1),e.R7$(2),e.Y8G("ngIf",n.paging.active)}},dependencies:[c.Sq,c.bT,c.T3,o.QW,o.W9,o.eU,o.Ax,o.Hp,o.he,o.To,o.Ki,o.Gp,o.eP,o.IO,o.BC,o.ai,o.Je,o.el,M.x,j.D9],styles:[".card-order[_ngcontent-%COMP%]{padding:1rem;border-radius:1rem;background-color:var(--ion-color-light);color:var(--ion-color-light-contrast)}.card-order[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{min-height:1.25rem;padding-top:.25rem;padding-bottom:.25rem;background:transparent}.card-order[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;line-height:0;border:1px solid var(--ion-color-medium-tint)}"]}),l})()}];let b=(()=>{var s;class l{}return(s=l).\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.$C({type:s}),s.\u0275inj=e.G2t({imports:[d.iI.forChild($),d.iI]}),l})();var y=r(3664);let O=(()=>{var s;class l{}return(s=l).\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.$C({type:s}),s.\u0275inj=e.G2t({imports:[c.MD,f.YN,o.bv,b,y.x]}),l})()}}]);