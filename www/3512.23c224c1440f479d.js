"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3512],{3512:(x,u,c)=>{c.r(u),c.d(u,{CustomerInvoicePageModule:()=>$});var g=c(177),f=c(9417),r=c(9465),p=c(7625),h=c(467),I=c(1806),v=c(5970),d=c(2021),C=c(8833),t=c(4438),P=c(4842);const R=n=>({$implicit:n});function _(n,l){1&n&&(t.j41(0,"div",14),t.nrm(1,"ion-img",15),t.j41(2,"div",16),t.EFF(3),t.nI1(4,"translate"),t.k0s()()),2&n&&(t.R7$(3),t.JRh(t.bMT(4,1,"DataNotFound")))}function b(n,l){if(1&n&&(t.qex(0),t.j41(1,"div",17),t.eu8(2,18),t.k0s(),t.bVm()),2&n){const a=l.$implicit;t.XpG();const e=t.sdS(26);t.R7$(2),t.Y8G("ngTemplateOutlet",e)("ngTemplateOutletContext",t.eq3(2,R,a))}}function M(n,l){if(1&n){const a=t.RV6();t.j41(0,"ion-infinite-scroll",19),t.bIt("ionInfinite",function(o){t.eBV(a);const i=t.XpG();return t.Njj(i.onIonInfinite(o))}),t.nrm(1,"ion-infinite-scroll-content"),t.k0s()}}function F(n,l){1&n&&(t.j41(0,"small",31),t.EFF(1),t.nI1(2,"translate"),t.k0s()),2&n&&(t.R7$(),t.SpI("(",t.bMT(2,1,"Default"),")"))}function j(n,l){if(1&n){const a=t.RV6();t.j41(0,"div",20)(1,"div",21)(2,"div",22)(3,"b",23),t.EFF(4),t.nI1(5,"translate"),t.k0s(),t.DNE(6,F,3,3,"small",24),t.k0s(),t.j41(7,"div",25)(8,"ion-button",26),t.bIt("click",function(o){const i=t.eBV(a).$implicit,s=t.XpG();return t.Njj(s.editCustomerInvoice(o,i.CustomerInvoiceId))}),t.nrm(9,"ion-icon",27),t.k0s(),t.j41(10,"ion-button",28),t.bIt("click",function(o){const i=t.eBV(a).$implicit,s=t.XpG();return t.Njj(s.deleteCustomerInvoice(o,i.CustomerInvoiceId))}),t.nrm(11,"ion-icon",29),t.k0s()()(),t.nrm(12,"hr"),t.j41(13,"table",30)(14,"tr")(15,"td"),t.EFF(16),t.nI1(17,"translate"),t.k0s(),t.j41(18,"td")(19,"b"),t.EFF(20),t.k0s()()(),t.j41(21,"tr")(22,"td"),t.EFF(23),t.nI1(24,"translate"),t.k0s(),t.j41(25,"td")(26,"b"),t.EFF(27),t.k0s()()(),t.j41(28,"tr")(29,"td"),t.EFF(30),t.nI1(31,"translate"),t.k0s(),t.j41(32,"td")(33,"b"),t.EFF(34),t.k0s()()(),t.j41(35,"tr")(36,"td"),t.EFF(37),t.nI1(38,"translate"),t.k0s(),t.j41(39,"td")(40,"b"),t.EFF(41),t.k0s()()(),t.j41(42,"tr")(43,"td"),t.EFF(44),t.nI1(45,"translate"),t.k0s(),t.j41(46,"td")(47,"b"),t.EFF(48),t.k0s()()()()()}if(2&n){const a=l.$implicit;t.R7$(4),t.JRh(t.bMT(5,12,"ExportBillInfo")),t.R7$(2),t.Y8G("ngIf",a.IsDefault),t.R7$(10),t.JRh(t.bMT(17,14,"BillCompanyName")),t.R7$(4),t.JRh(a.CompanyName),t.R7$(3),t.JRh(t.bMT(24,16,"BillCompanyAddress")),t.R7$(4),t.JRh(a.Address),t.R7$(3),t.JRh(t.bMT(31,18,"BillCompanyTax")),t.R7$(4),t.JRh(a.TaxCode),t.R7$(3),t.JRh(t.bMT(38,20,"Email")),t.R7$(4),t.JRh(a.BuyerEmail),t.R7$(3),t.JRh(t.bMT(45,22,"Mobile")),t.R7$(4),t.JRh(a.BuyerPhone)}}const T=[{path:"",component:(()=>{var n;class l{constructor(e,o,i,s){this.modalController=e,this.toastController=o,this.loadingController=i,this.animationController=s,this.APP_ROUTE=C._,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.customerInvoices=[]}ngOnInit(){this.refreshData()}onIonRefresher(e){this.filter={},this.refreshData(()=>{e.target.complete()})}onIonInfinite(e){this.loadMore(()=>{e.target.complete()})}pushData(e){1==this.paging.page&&(this.customerInvoices.length=0),this.customerInvoices=this.customerInvoices.concat(e)}totalData(){return this.customerInvoices.length}refreshData(e){this.filter={},this.paging.page=1,this.paging.active=!0,this.loadData_Paging(e)}loadMore(e){this.paging.page+=1,this.loadData_Paging(e)}searchChange(e){this.filter={},this.filter.search=e.target.value.replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}sortChange(e,o){this.paging.sortfield=e||null,this.paging.sorttype=o||null,this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}filterChange(){this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}loadData_Paging(e){var o=this;return(0,h.A)(function*(){o.paging.loading=!0,(0,v.Ul)({loadingController:o.loadingController,params:{PageNumber:o.paging.page,PageSize:o.paging.limit},callback:i=>{var s;o.response=i,null!=i&&i.Succeeded?o.pushData(null!==(s=i.Data)&&void 0!==s?s:[]):(0,d.cX)(o.toastController,{},i).then(m=>m.present()),o.paging.loading=!1,o.paging.active=!(null==i||!i.HasNextPage),e&&e()}})})()}editCustomerInvoice(e,o){this.presentModalAddCustomerInvoice(e,o)}deleteCustomerInvoice(e,o){o&&(0,d.Yy)(this.modalController,this.animationController,{selectedId:o,message:{TitleConfirm:"Delete_Confirm",TextConfirm:"Delete"},fnConfirm:i=>{(0,v.NT)({loadingController:this.loadingController,params:{CustomerInvoiceId:i},callback:s=>{null!=s&&s.Succeeded?this.refreshData():(0,d.cX)(this.toastController,{},s).then(m=>m.present())}})}})}changeCustomerInvoice(e){this.CustomerInvoiceId=e.detail.value}presentModalAddCustomerInvoice(e,o){var i=this;return(0,h.A)(function*(){const s=yield i.modalController.create({component:I.$,componentProps:{CustomerInvoiceId:o}});s.onDidDismiss().then(m=>{"success"==m.role&&i.refreshData()}),s.present()})()}}return(n=l).\u0275fac=function(e){return new(e||n)(t.rXU(r.W3),t.rXU(r.K_),t.rXU(r.Xi),t.rXU(r.Hx))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-customer-invoice"]],inputs:{CustomerInvoiceId:"CustomerInvoiceId"},decls:27,vars:13,consts:[["templateCustomerInvoice",""],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container container-loading py-5 text-center",4,"ngIf"],[1,"container"],[1,"row"],[4,"ngFor","ngForOf"],[1,"col-12"],["color","primary","expand","block","shape","round","fill","outline",3,"click"],["slot","start","src","../../../assets/icon/ion-icon/plus-circle.svg"],[1,"col-12","my-3","text-center"],[1,"text-muted"],[3,"ionInfinite",4,"ngIf"],[1,"container","container-loading","py-5","text-center"],["src","../../../assets/icon/ion-img/no-data.svg"],[1,"text-muted","mt-4"],[1,"col-12","mb-3"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ionInfinite"],[1,"card-customer-invoice","rounded","bg-white"],[1,"d-flex","justify-content-between"],[1,"text-wrap"],[1,"mr-1"],["class","text-primary d-inline-block",4,"ngIf"],[1,"text-nowrap"],["size","small","color","medium","fill","clear",3,"click"],["src","../../../assets/icon/ion-icon/edit.svg",1,"fs-4"],["size","small","color","danger","fill","clear",3,"click"],["name","close-outline",1,"fs-5"],[1,"table","table-borderless","m-0"],[1,"text-primary","d-inline-block"]],template:function(e,o){if(1&e){const i=t.RV6();t.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1),t.nrm(3,"ion-back-button",2),t.k0s(),t.j41(4,"ion-title"),t.EFF(5),t.nI1(6,"translate"),t.k0s()()(),t.j41(7,"ion-content")(8,"ion-refresher",3),t.bIt("ionRefresh",function(m){return t.eBV(i),t.Njj(o.onIonRefresher(m))}),t.nrm(9,"ion-refresher-content"),t.k0s(),t.DNE(10,_,5,3,"div",4),t.j41(11,"div",5)(12,"div",6),t.DNE(13,b,3,4,"ng-container",7),t.j41(14,"div",8)(15,"ion-button",9),t.bIt("click",function(m){return t.eBV(i),t.Njj(o.presentModalAddCustomerInvoice(m))}),t.nrm(16,"ion-icon",10),t.j41(17,"ion-label"),t.EFF(18),t.nI1(19,"translate"),t.k0s()()(),t.j41(20,"div",11)(21,"small",12),t.EFF(22),t.nI1(23,"translate"),t.k0s()()()(),t.DNE(24,M,2,0,"ion-infinite-scroll",13),t.k0s(),t.DNE(25,j,49,24,"ng-template",null,0,t.C5r)}2&e&&(t.R7$(3),t.Y8G("defaultHref",o.APP_ROUTE.TABS_USER),t.R7$(2),t.JRh(t.bMT(6,7,"ExportBillInfo")),t.R7$(5),t.Y8G("ngIf",o.response&&!o.customerInvoices.length),t.R7$(3),t.Y8G("ngForOf",o.customerInvoices),t.R7$(5),t.JRh(t.bMT(19,9,"Create")),t.R7$(4),t.JRh(t.bMT(23,11,"CustomerInvoiceNotice")),t.R7$(2),t.Y8G("ngIf",o.paging.active))},dependencies:[g.Sq,g.bT,g.T3,r.Jm,r.QW,r.W9,r.eU,r.iq,r.KW,r.Ax,r.Hp,r.he,r.To,r.Ki,r.BC,r.ai,r.el,P.D9],styles:[".table[_ngcontent-%COMP%]{table-layout:fixed}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem;vertical-align:top}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{width:40%;padding-left:0;padding-right:.5rem;color:var(--ion-color-medium-shade)}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-left:.5rem;padding-right:0;text-align:right}.card-customer-invoice[_ngcontent-%COMP%]{padding:1rem}.card-customer-invoice.rounded[_ngcontent-%COMP%]{border-radius:1.5rem!important}.card-customer-invoice[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border-style:dashed!important}.card-customer-invoice[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:2rem;height:2rem;min-width:2rem;min-height:2rem;--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;--border-radius: .5rem}"]}),l})()}];let k=(()=>{var n;class l{}return(n=l).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[p.iI.forChild(T),p.iI]}),l})();var E=c(3890);let $=(()=>{var n;class l{}return(n=l).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[g.MD,f.YN,r.bv,k,E.x]}),l})()}}]);