"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1900],{6043:(x,O,c)=>{c.d(O,{V:()=>y,j:()=>h});var S=c(467),b=c(5972);const h=function(){var C=(0,S.A)(function*(p){p.params=p.params||{},(0,b.hm)({url:`api/ChargingConnector/get-byqr/${p.params.QrCode}`,success:m=>{"function"==typeof p.callback&&p.callback(m.data||null)},error:m=>{var M;"function"==typeof p.callback&&p.callback(null==m||null===(M=m.response)||void 0===M?void 0:M.data),console.error(m)},loading:p.loading,loadingController:p.loadingController})});return function(m){return C.apply(this,arguments)}}(),y=function(){var C=(0,S.A)(function*(p){p.params=p.params||{},(0,b.hm)({url:`api/ChargingConnector/get-byid/${p.params.ChargeConnectorId}`,success:m=>{"function"==typeof p.callback&&p.callback(m.data||null)},error:m=>{var M;"function"==typeof p.callback&&p.callback(null==m||null===(M=m.response)||void 0===M?void 0:M.data),console.error(m)},loading:p.loading,loadingController:p.loadingController})});return function(m){return C.apply(this,arguments)}}()},6944:(x,O,c)=>{c.d(O,{KX:()=>C,UV:()=>y,_$:()=>P,aN:()=>M,eu:()=>R,w0:()=>m,wm:()=>I});var S=c(467),b=c(5972);const y=function(){var g=(0,S.A)(function*(o){var n,l,d,f;o.params=o.params||{},(0,b.hm)({url:"api/ChargingSession/get-mystaff-chargingsessions",params:{VSessionStatus:null!==(n=o.params.VSessionStatus)&&void 0!==n?n:null,VSessionStatusMulti:null!==(l=o.params.VSessionStatusMulti)&&void 0!==l?l:null,PageNumber:null!==(d=o.params.PageNumber)&&void 0!==d?d:1,PageSize:null!==(f=o.params.PageSize)&&void 0!==f?f:10},success:v=>{"function"==typeof o.callback&&o.callback(v.data||null)},error:v=>{var T;"function"==typeof o.callback&&o.callback(null==v||null===(T=v.response)||void 0===T?void 0:T.data),console.error(v)},loading:o.loading,loadingController:o.loadingController})});return function(n){return g.apply(this,arguments)}}(),C=function(){var g=(0,S.A)(function*(o){var n,l,d;o.params=o.params||{},(0,b.hm)({url:"api/ChargingSession/get-mybyordercode",params:{OrderCode:null!==(n=o.params.OrderCode)&&void 0!==n?n:null,PageNumber:null!==(l=o.params.PageNumber)&&void 0!==l?l:1,PageSize:null!==(d=o.params.PageSize)&&void 0!==d?d:10},success:f=>{"function"==typeof o.callback&&o.callback(f.data||null)},error:f=>{var v;"function"==typeof o.callback&&o.callback(null==f||null===(v=f.response)||void 0===v?void 0:v.data),console.error(f)},loading:o.loading,loadingController:o.loadingController})});return function(n){return g.apply(this,arguments)}}(),m=function(){var g=(0,S.A)(function*(o){o.params=o.params||{},(0,b.hm)({url:`api/ChargingSession/get-byid/${o.params.ChargeSessionId}`,success:n=>{"function"==typeof o.callback&&o.callback(n.data||null)},error:n=>{var l;"function"==typeof o.callback&&o.callback(null==n||null===(l=n.response)||void 0===l?void 0:l.data),console.error(n)},loading:o.loading,loadingController:o.loadingController})});return function(n){return g.apply(this,arguments)}}(),M=function(){var g=(0,S.A)(function*(o){var n;o.params=o.params||{},(0,b.Ll)({url:"api/ChargingSession/start-create",params:{RequestProcessedId:null!==(n=o.params.RequestProcessedId)&&void 0!==n?n:null,ConnectorId:1},success:l=>{"function"==typeof o.callback&&o.callback(l.data||null)},error:l=>{var d;"function"==typeof o.callback&&o.callback(null==l||null===(d=l.response)||void 0===d?void 0:d.data),console.error(l)},loading:o.loading,loadingController:o.loadingController})});return function(n){return g.apply(this,arguments)}}(),I=function(){var g=(0,S.A)(function*(o){var n;o.params=o.params||{},(0,b.Ll)({url:"api/ChargingSession/start",params:{ChargeSessionId:null!==(n=o.params.ChargeSessionId)&&void 0!==n?n:null},success:l=>{"function"==typeof o.callback&&o.callback(l.data||null)},error:l=>{var d;"function"==typeof o.callback&&o.callback(null==l||null===(d=l.response)||void 0===d?void 0:d.data),console.error(l)},loading:o.loading,loadingController:o.loadingController})});return function(n){return g.apply(this,arguments)}}(),P=function(){var g=(0,S.A)(function*(o){var n;o.params=o.params||{},(0,b.Ll)({url:"api/ChargingSession/stop",params:{ChargeSessionId:null!==(n=o.params.ChargeSessionId)&&void 0!==n?n:null},success:l=>{"function"==typeof o.callback&&o.callback(l.data||null)},error:l=>{var d;"function"==typeof o.callback&&o.callback(null==l||null===(d=l.response)||void 0===d?void 0:d.data),console.error(l)},loading:o.loading,loadingController:o.loadingController})});return function(n){return g.apply(this,arguments)}}(),R=function(){var g=(0,S.A)(function*(o){o.params=o.params||{},(0,b.hm)({url:`api/ChargingSession/monitor/${o.params.StationCode}/${o.params.ConnectorId}`,success:n=>{"function"==typeof o.callback&&o.callback(n.data||null)},error:n=>{var l;"function"==typeof o.callback&&o.callback(null==n||null===(l=n.response)||void 0===l?void 0:l.data),console.error(n)},loading:o.loading,loadingController:o.loadingController})});return function(n){return g.apply(this,arguments)}}()},1900:(x,O,c)=>{c.r(O),c.d(O,{ChargingSessionDetailPageModule:()=>Z});var S=c(177),b=c(9417),h=c(9465),y=c(7625),C=c(467),p=c(9051),m=c(6116),M=c(6043),E=c(6944),I=c(6539),V=c(2313),P=c(8517),R=c(2021),g=c(3588),o=c(8833),n=c(4438),l=c(4842);const d=a=>({$implicit:a});function f(a,u){1&a&&(n.j41(0,"div",10),n.nrm(1,"img",11),n.j41(2,"div",12),n.EFF(3),n.nI1(4,"translate"),n.k0s()()),2&a&&(n.R7$(3),n.JRh(n.bMT(4,1,"DataNotFound")))}function v(a,u){1&a&&(n.j41(0,"div",6)(1,"div",13),n.nrm(2,"ion-spinner",14),n.j41(3,"div",15)(4,"ion-chip",16),n.EFF(5),n.nI1(6,"translate"),n.k0s()()()()),2&a&&(n.R7$(5),n.JRh(n.bMT(6,1,"WaitingForConnectChargingConnector")))}function T(a,u){if(1&a&&(n.j41(0,"div",51)(1,"h6",54)(2,"b"),n.EFF(3),n.nI1(4,"translate"),n.k0s()(),n.nrm(5,"hr",55),n.j41(6,"div")(7,"b",60),n.EFF(8),n.k0s()()()),2&a){const s=n.XpG(2);n.R7$(3),n.JRh(n.bMT(4,2,"EstimateChargeTime")),n.R7$(5),n.JRh(null==s.monitor?null:s.monitor.EstimateChargeTime)}}function G(a,u){if(1&a&&(n.j41(0,"div",56)(1,"table",61)(2,"tr")(3,"td"),n.EFF(4,"D\u1ecbch v\u1ee5"),n.k0s(),n.j41(5,"td")(6,"b",62),n.EFF(7),n.k0s()()(),n.j41(8,"tr")(9,"td"),n.EFF(10,"Ng\u01b0\u1eddi y\xeau c\u1ea7u"),n.k0s(),n.j41(11,"td")(12,"b"),n.EFF(13),n.k0s()()(),n.j41(14,"tr")(15,"td"),n.EFF(16,"Nh\xe2n vi\xean th\u1ef1c hi\u1ec7n"),n.k0s(),n.j41(17,"td")(18,"b"),n.EFF(19),n.k0s()()(),n.j41(20,"tr")(21,"td"),n.EFF(22,"Xe d\u1ecbch v\u1ee5"),n.k0s(),n.j41(23,"td")(24,"b"),n.EFF(25),n.k0s()()()()()),2&a){const s=n.XpG(2);n.R7$(7),n.JRh(s.chargingSession.ServiceName),n.R7$(6),n.JRh(s.chargingSession.CustomerFullName),n.R7$(6),n.JRh(s.chargingSession.StaffFullName),n.R7$(6),n.JRh(s.chargingSession.VehicleNumber)}}function A(a,u){if(1&a&&(n.j41(0,"h5",63),n.nrm(1,"ion-icon",64),n.j41(2,"span",65),n.EFF(3),n.nI1(4,"translate"),n.k0s()(),n.j41(5,"div",58)(6,"div",66),n.eu8(7,67),n.k0s(),n.j41(8,"div",68),n.eu8(9,67),n.k0s()()),2&a){const s=n.XpG(2),e=n.sdS(20),t=n.sdS(22);n.R7$(3),n.JRh(null!=s.chargingStation&&s.chargingStation.IsMobileStation?n.bMT(4,5,"MobileStation"):null==s.chargingLocation?null:s.chargingLocation.LocName),n.R7$(4),n.Y8G("ngTemplateOutlet",e)("ngTemplateOutletContext",n.eq3(7,d,s.chargingStation)),n.R7$(2),n.Y8G("ngTemplateOutlet",t)("ngTemplateOutletContext",n.eq3(9,d,s.chargingConnector))}}function U(a,u){if(1&a&&(n.j41(0,"div",69)(1,"div",70)(2,"h6",54)(3,"b"),n.EFF(4),n.nI1(5,"translate"),n.k0s()(),n.nrm(6,"hr",55),n.j41(7,"div")(8,"b",60),n.EFF(9),n.k0s()()()()),2&a){let s;const e=n.XpG(2);n.R7$(4),n.JRh(n.bMT(5,2,"ChargingStartTime")),n.R7$(5),n.JRh(e.APP_FUNC_FormatDate(null!==(s=null==e.monitor?null:e.monitor.StartTime)&&void 0!==s?s:e.chargingSession.ChargingStart))}}function N(a,u){if(1&a&&(n.j41(0,"div",69)(1,"div",70)(2,"h6",54)(3,"b"),n.EFF(4),n.nI1(5,"translate"),n.k0s()(),n.nrm(6,"hr",55),n.j41(7,"div")(8,"b",60),n.EFF(9),n.k0s()()()()),2&a){let s;const e=n.XpG(2);n.R7$(4),n.JRh(n.bMT(5,2,"ChargingEndTime")),n.R7$(5),n.JRh(e.APP_FUNC_FormatDate(null!==(s=null==e.monitor?null:e.monitor.StopTime)&&void 0!==s?s:e.chargingSession.ChargingEnd))}}function B(a,u){if(1&a&&(n.j41(0,"div",7)(1,"div",17)(2,"div",18)(3,"div",19)(4,"div",20)(5,"div",21)(6,"div",22)(7,"ion-chip",23),n.nrm(8,"ion-icon",24),n.j41(9,"ion-label"),n.EFF(10),n.k0s()()()(),n.j41(11,"div",25)(12,"div",26)(13,"div",27),n.EFF(14),n.nI1(15,"translate"),n.k0s(),n.j41(16,"div")(17,"span",28),n.nrm(18,"span",29),n.k0s(),n.j41(19,"span",30),n.nrm(20,"span",29),n.k0s(),n.j41(21,"div",31)(22,"div",32)(23,"div",33),n.nrm(24,"ion-icon",34)(25,"br"),n.j41(26,"ion-text",35),n.EFF(27),n.k0s()()()()(),n.j41(28,"div",36)(29,"div",27),n.EFF(30),n.nI1(31,"translate"),n.k0s(),n.j41(32,"div",37),n.EFF(33),n.k0s()()(),n.j41(34,"div",38)(35,"div",39)(36,"div",27),n.EFF(37),n.nI1(38,"translate"),n.k0s(),n.j41(39,"div",40)(40,"ion-chip",41),n.nrm(41,"ion-icon",42),n.k0s(),n.j41(42,"span")(43,"b"),n.EFF(44),n.k0s(),n.EFF(45," %"),n.k0s()()(),n.nrm(46,"hr",43),n.j41(47,"div",39)(48,"div",27),n.EFF(49),n.nI1(50,"translate"),n.k0s(),n.j41(51,"div",40)(52,"ion-chip",41),n.nrm(53,"ion-icon",44),n.k0s(),n.j41(54,"span")(55,"b"),n.EFF(56),n.k0s(),n.EFF(57),n.nI1(58,"translate"),n.k0s()()()()()(),n.j41(59,"div",45)(60,"div",46)(61,"div",47)(62,"div"),n.nrm(63,"ion-img",48),n.k0s(),n.j41(64,"div",49)(65,"div",27),n.EFF(66),n.nI1(67,"translate"),n.k0s(),n.j41(68,"div")(69,"strong"),n.EFF(70),n.k0s(),n.j41(71,"small"),n.EFF(72),n.k0s()()()(),n.j41(73,"div",50)(74,"div",27),n.EFF(75),n.nI1(76,"translate"),n.k0s(),n.j41(77,"div")(78,"strong"),n.EFF(79),n.k0s(),n.j41(80,"small"),n.EFF(81),n.k0s()()()()()(),n.DNE(82,T,9,4,"div",51),n.k0s(),n.j41(83,"div",52)(84,"div",53)(85,"h6",54)(86,"b"),n.EFF(87),n.nI1(88,"translate"),n.k0s()(),n.nrm(89,"hr",55),n.DNE(90,G,26,4,"div",56),n.k0s()(),n.j41(91,"div",52)(92,"div",53)(93,"h6",54)(94,"b"),n.EFF(95),n.nI1(96,"translate"),n.k0s()(),n.nrm(97,"hr",55),n.DNE(98,A,10,11),n.k0s()(),n.j41(99,"div",57)(100,"div",58),n.DNE(101,U,10,4,"div",59)(102,N,10,4,"div",59),n.k0s()()()()),2&a){let s,e,t,i;const r=n.XpG();n.R7$(3),n.HbH("border-"+r.APP_FUNC_GetColor_VSessionStatus(r.chargingSession.VSessionStatus)),n.R7$(4),n.Y8G("color",r.APP_FUNC_GetColor_VSessionStatus(r.chargingSession.VSessionStatus)),n.R7$(3),n.JRh(r.chargingSession.VSessionStatusName),n.R7$(4),n.SpI("% ",n.bMT(15,37,"VehicleBattery"),""),n.R7$(2),n.STu("mx-auto mt-2 progress progress-",r.APP_FUNC_GetColor_VSessionStatus(r.chargingSession.VSessionStatus)," progress-",r.getBatteryLevel(),""),n.R7$(8),n.Y8G("color",r.APP_FUNC_GetColor_VSessionStatus(r.chargingSession.VSessionStatus)),n.R7$(2),n.Y8G("color",r.APP_FUNC_GetColor_VSessionStatus(r.chargingSession.VSessionStatus)),n.R7$(),n.SpI("",r.getBatteryPercent(),"%"),n.R7$(3),n.JRh(n.bMT(31,39,"ElectricUsed")),n.R7$(3),n.Lme("",r.getMeter(),"",null!==(s=r.chargingSession.Unit)&&void 0!==s?s:"kWh",""),n.R7$(4),n.JRh(n.bMT(38,41,"ChargedPowerOnPackage")),n.R7$(3),n.Y8G("color",r.APP_FUNC_GetColor_VSessionStatus(r.chargingSession.VSessionStatus)),n.R7$(4),n.JRh(r.getMeterPercent()),n.R7$(5),n.JRh(n.bMT(50,43,"ChargedTime")),n.R7$(3),n.Y8G("color",r.APP_FUNC_GetColor_VSessionStatus(r.chargingSession.VSessionStatus)),n.R7$(4),n.JRh(r.getTimeCharging()),n.R7$(),n.SpI(" ",n.bMT(58,45,"Minute"),""),n.R7$(9),n.JRh(n.bMT(67,47,"ChargingPackage")),n.R7$(4),n.SpI("",r.APP_FUNC_FormatMoney(null!==(e=r.chargingSession.PayValue)&&void 0!==e?e:0),"\u0111"),n.R7$(2),n.Lme(" /",r.chargingSession.MaxElectricUsed,"",null!==(t=r.chargingSession.Unit)&&void 0!==t?t:"kWh",""),n.R7$(3),n.JRh(n.bMT(76,49,"Used")),n.R7$(4),n.SpI("",r.APP_FUNC_FormatMoney(r.getMoney()),"\u0111"),n.R7$(2),n.Lme(" /",r.getMeter(),"",null!==(i=r.chargingSession.Unit)&&void 0!==i?i:"kWh",""),n.R7$(),n.vxM(82,r.chargingSession.VSessionStatus==r.v_session_status.DangSac&&null!=r.monitor&&r.monitor.EstimateChargeTime?82:-1),n.R7$(5),n.JRh(n.bMT(88,51,"ServiceDetail")),n.R7$(3),n.vxM(90,r.chargingSession?90:-1),n.R7$(5),n.JRh(n.bMT(96,53,"ChargingStation")),n.R7$(3),n.vxM(98,r.chargingConnector?98:-1),n.R7$(3),n.Y8G("ngIf",r.chargingSession.ChargingStart),n.R7$(),n.Y8G("ngIf",r.chargingSession.ChargingEnd)}}function w(a,u){if(1&a){const s=n.RV6();n.qex(0),n.j41(1,"ion-footer")(2,"div",71)(3,"ion-button",72),n.bIt("click",function(t){n.eBV(s);const i=n.XpG();return n.Njj(i.presentModalConfirm_ChargingSession_Stop(t))}),n.j41(4,"ion-label"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()()(),n.bVm()}2&a&&(n.R7$(5),n.JRh(n.bMT(6,1,"ChargingStop")))}function J(a,u){if(1&a){const s=n.RV6();n.qex(0),n.j41(1,"ion-footer")(2,"div",71)(3,"ion-button",73),n.bIt("click",function(t){n.eBV(s);const i=n.XpG();return n.Njj(i.createBill(t))}),n.j41(4,"ion-label"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()()(),n.bVm()}2&a&&(n.R7$(5),n.JRh(n.bMT(6,1,"ChargingComplete")))}function L(a,u){if(1&a){const s=n.RV6();n.qex(0),n.j41(1,"ion-footer")(2,"div",71)(3,"div",74)(4,"div",75)(5,"ion-chip",76),n.bIt("click",function(){n.eBV(s);const t=n.XpG();return n.Njj(t.navigateByUrl(t.APP_ROUTE.TABS_DEFAULT))}),n.nrm(6,"ion-icon",77),n.j41(7,"ion-label"),n.EFF(8),n.nI1(9,"translate"),n.k0s()()(),n.nrm(10,"div",20),n.k0s()()(),n.bVm()}2&a&&(n.R7$(8),n.JRh(n.bMT(9,1,"Home")))}function X(a,u){if(1&a){const s=n.RV6();n.qex(0),n.j41(1,"ion-footer")(2,"div",71)(3,"ion-button",78),n.bIt("click",function(t){n.eBV(s);const i=n.XpG();return n.Njj(i.presentModalAddFeedback(t))}),n.j41(4,"ion-label"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()()(),n.bVm()}2&a&&(n.R7$(5),n.JRh(n.bMT(6,1,"SendFeedback")))}function Y(a,u){if(1&a){const s=n.RV6();n.qex(0),n.j41(1,"ion-footer")(2,"div",71)(3,"ion-button",78),n.bIt("click",function(t){n.eBV(s);const i=n.XpG();return n.Njj(i.presentModalAddFeedback(t))}),n.j41(4,"ion-label"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()()(),n.bVm()}2&a&&(n.R7$(5),n.JRh(n.bMT(6,1,"SendFeedback")))}function W(a,u){if(1&a&&(n.j41(0,"div",79)(1,"div",80),n.nrm(2,"img",81),n.k0s(),n.j41(3,"div",82)(4,"div")(5,"b"),n.EFF(6),n.nI1(7,"translate"),n.k0s()(),n.j41(8,"div"),n.EFF(9),n.k0s()()()),2&a){const s=u.$implicit,e=n.XpG();n.R7$(2),n.Y8G("src",e.APP_FUNC_GetLocImage(e.chargingLocation,"assets/image/default/ev-station.png"),n.B4B),n.R7$(4),n.Lme("",n.bMT(7,4,"ChargingStation")," ",null!=s&&s.IsAC?"AC":"DC",""),n.R7$(3),n.SpI("ID: ",null==s?null:s.StationCode,"")}}function z(a,u){if(1&a&&(n.j41(0,"div",79)(1,"div",80),n.nrm(2,"img",83),n.k0s(),n.j41(3,"div",82)(4,"div")(5,"b"),n.EFF(6),n.nI1(7,"translate"),n.k0s()(),n.j41(8,"div"),n.EFF(9),n.k0s()()()),2&a){const s=u.$implicit,e=n.XpG();n.R7$(2),n.Y8G("src",e.getCoverConnector(s),n.B4B),n.R7$(4),n.Lme("",n.bMT(7,4,"Connector")," ",null==s?null:s.ConnectorType,""),n.R7$(3),n.SpI("ID: ",null==s?null:s.ConnectorId,"")}}const H=[{path:"",component:(()=>{var a;class u{constructor(e,t,i,r,_,$){var k;this.router=e,this.activatedRoute=t,this.loadingController=i,this.toastController=r,this.modalController=_,this.animationController=$,this.APP_ROUTE=o._,this.APP_FUNC_FormatDate=P.Rv,this.APP_FUNC_DivDateTime=P.Wv,this.APP_FUNC_FormatMoney=P.xi,this.APP_FUNC_GetColor_VSessionStatus=P.kH,this.APP_FUNC_GetLocImage=P.Zn,this.v_session_status=g.jT,this.VSessionStatus=0;let F=null!==(k=t.snapshot.params.id)&&void 0!==k?k:"";F&&(this.ChargeSessionId=parseFloat(F))}ngOnInit(){var e=this;this.IsOnInit=!0,(0,C.A)(function*(){(yield(0,I.kU)())&&e.refreshData(()=>{e.loadChargingConnector()})})()}ionViewDidEnter(){this.IsOnInit?this.IsOnInit=!1:this.ngOnInit()}ionViewDidLeave(){this.destroyTimeout()}onIonRefresher(e){this.refreshData(()=>{this.loadChargingConnector(),e.target.complete()})}refreshTimeoutSession(){clearTimeout(this.timeoutSession);let e=1e4;if(this.VSessionStatus==g.jT.KhoiTaoPhienSac)e=3e3;else if(this.VSessionStatus==g.jT.DangSac)e=11e3;else{if(this.VSessionStatus!=g.jT.DaSac)return;e=3e3}this.timeoutSession=setTimeout(()=>{[g.jT.KhoiTaoPhienSac,g.jT.DangSac,g.jT.DaSac].includes(this.VSessionStatus)&&this.refreshSession()},e)}refreshTimeoutMonitor(){clearTimeout(this.timeoutMonitor);let e=1e4;this.VSessionStatus==g.jT.DangSac&&(e=11e3*2.2,this.timeoutMonitor=setTimeout(()=>{[g.jT.DangSac].includes(this.VSessionStatus)&&this.refreshMonitor()},e))}destroyTimeout(){clearTimeout(this.timeoutSession),clearTimeout(this.timeoutMonitor)}refreshData(e){var t=this;return(0,C.A)(function*(){t.refreshSession(()=>{t.VSessionStatus==g.jT.DangSac&&t.refreshMonitor(),e&&e()})})()}refreshSession(e){var t=this;return(0,C.A)(function*(){(0,E.w0)({params:{ChargeSessionId:t.ChargeSessionId},callback:i=>{var r,_;t.response=i,null!=i&&i.Succeeded?(t.chargingSession=i.Data,t.VSessionStatus=null!==(r=null===(_=t.chargingSession)||void 0===_?void 0:_.VSessionStatus)&&void 0!==r?r:0,[g.jT.DaSac,g.jT.HoanTat].includes(t.VSessionStatus)&&(t.monitor=void 0),t.refreshTimeoutSession()):(0,R.cX)(t.toastController,{duration:5e3},i).then($=>$.present()),e&&e()}})})()}refreshMonitor(){var e,t;(0,E.eu)({params:{StationCode:null===(e=this.chargingSession)||void 0===e?void 0:e.StationCode,ConnectorId:null===(t=this.chargingSession)||void 0===t?void 0:t.ConnectorId},callback:i=>{null!=i&&i.Succeeded?this.monitor=i.Data:(0,R.cX)(this.toastController,{},i).then(r=>r.present()),this.refreshTimeoutMonitor()}})}loadChargingConnector(){var e=this;return(0,C.A)(function*(){var t,i;null!==(t=e.chargingSession)&&void 0!==t&&t.ChargeConnectorId&&(0,M.V)({loadingController:e.loadingController,params:{ChargeConnectorId:null===(i=e.chargingSession)||void 0===i?void 0:i.ChargeConnectorId},callback:r=>{e.response=r,null!=r&&r.Succeeded?e.chargingConnector=r.Data:(0,R.cX)(e.toastController,{},r).then(_=>_.present())}})})()}get chargingLocation(){var e;return null===(e=this.chargingConnector)||void 0===e?void 0:e.ChargingLocation}get chargingStation(){var e;return null===(e=this.chargingConnector)||void 0===e?void 0:e.ChargingStation}getCoverConnector(e){var t;return`assets/image/connector/${null==e||null===(t=e.ConnectorType)||void 0===t?void 0:t.replace(/[^a-zA-Z0-9]/g,"-")}.png`}navigateByUrl(e){var t=this;return(0,C.A)(function*(){t.router.navigateByUrl(e)})()}getTimeCharging(){var e,t,i,r,_,$,k,F,j,D;return(0,P.Wv)(null!==(e=null===(t=this.monitor)||void 0===t?void 0:t.StartTime)&&void 0!==e?e:null===(i=this.chargingSession)||void 0===i?void 0:i.ChargingStart,(null!==(r=null===(_=this.monitor)||void 0===_?void 0:_.StartTime)&&void 0!==r?r:null!==($=this.chargingSession)&&void 0!==$&&$.ChargingStart)?null!==(k=null!==(F=null===(j=this.monitor)||void 0===j?void 0:j.StopTime)&&void 0!==F?F:null===(D=this.chargingSession)||void 0===D?void 0:D.ChargingEnd)&&void 0!==k?k:new Date:null)}getBatteryLevel(){var e,t,i,r;return(0,P.Rw)(Math.floor((null!==(e=null!==(t=null===(i=this.monitor)||void 0===i?void 0:i.SoC)&&void 0!==t?t:null===(r=this.chargingSession)||void 0===r?void 0:r.BatteryPercent)&&void 0!==e?e:0)/10),100)}getBatteryPercent(){var e,t,i,r;return(0,P.Rw)(null!==(e=null!==(t=null===(i=this.monitor)||void 0===i?void 0:i.SoC)&&void 0!==t?t:null===(r=this.chargingSession)||void 0===r?void 0:r.BatteryPercent)&&void 0!==e?e:0,100)}getBatteryColor(){let e=this.getBatteryPercent();return e<=10?"danger":e<=30?"warning":"primary"}getMeter(){var e,t,i,r,_,$;return(0,P.Rw)(this.monitor?(null!==(e=null===(t=this.monitor)||void 0===t?void 0:t.LastMeter)&&void 0!==e?e:0)-(null!==(i=null===(r=this.monitor)||void 0===r?void 0:r.MeterStart)&&void 0!==i?i:0):null!==(_=null===($=this.chargingSession)||void 0===$?void 0:$.ElectricUsed)&&void 0!==_?_:0,100)}getMeterPercent(){var e,t;return null!==(e=this.chargingSession)&&void 0!==e&&e.PayValue&&null!==(t=this.chargingSession)&&void 0!==t&&t.MaxElectricUsed?(0,P.Rw)(this.getMeter()/this.chargingSession.MaxElectricUsed*100,1):0}getMoney(){var e,t,i;return null!==(e=this.chargingSession)&&void 0!==e&&e.PayValue&&null!==(t=this.chargingSession)&&void 0!==t&&t.MaxElectricUsed?(0,P.Rw)((null===(i=this.chargingSession)||void 0===i?void 0:i.PayValue)*this.getMeter()/this.chargingSession.MaxElectricUsed,1):0}chargingStart(e){var t=this;return(0,C.A)(function*(){(0,E.wm)({loadingController:t.loadingController,params:{ChargeSessionId:t.ChargeSessionId},callback:i=>{null!=i&&i.Succeeded?t.refreshData():(0,R.cX)(t.toastController,{duration:7e3},i).then(r=>r.present())}})})()}chargingStop(e){var t=this;return(0,C.A)(function*(){(0,E._$)({loadingController:t.loadingController,params:{ChargeSessionId:t.ChargeSessionId},callback:i=>{null!=i&&i.Succeeded?t.refreshData():(0,R.cX)(t.toastController,{duration:7e3},i).then(r=>r.present())}})})()}createBill(e){var t=this;return(0,C.A)(function*(){(0,m.MN)({params:{ChargeSessionId:t.ChargeSessionId},callback:i=>{null!=i&&i.Succeeded?t.refreshData(()=>{}):(0,R.cX)(t.toastController,{duration:7e3},i).then(r=>r.present())}})})()}openDetailRequestProcessed(e){var t=this;return(0,C.A)(function*(){var i,r;t.router.navigateByUrl(o._.REQUEST_PROCESSED_DETAIL.replace(":id",null!==(i=null===(r=t.chargingSession)||void 0===r||null===(r=r.RequestProcessedId)||void 0===r?void 0:r.toString())&&void 0!==i?i:""))})()}presentModalAddFeedback(e){var t=this;return(0,C.A)(function*(){var i;let r=yield t.modalController.create({component:p.l,componentProps:{feedback:{DocType:V.vK.CHARGING_SESSION,DocId:null===(i=t.chargingSession)||void 0===i?void 0:i.ChargeSessionId}},cssClass:"ion-modal-breakpoint",breakpoints:[0,.5,1],initialBreakpoint:1});r.onDidDismiss().then(_=>{"success"==_.role&&t.refreshData()}),r.present()})()}presentModalConfirm_ChargingSession_Stop(e){var t=this;return(0,C.A)(function*(){(0,R.Yy)(t.modalController,t.animationController,{selectedId:t.ChargeSessionId,message:{TitleConfirm:"AreYouSureYouWantToStopCharging",Img:"/assets/image/stop-changing.svg",TextConfirm:"ChargingStop",TextCancel:"Close"},fnConfirm:()=>{t.chargingStop()}})})()}}return(a=u).\u0275fac=function(e){return new(e||a)(n.rXU(y.Ix),n.rXU(y.nX),n.rXU(h.Xi),n.rXU(h.K_),n.rXU(h.W3),n.rXU(h.Hx))},a.\u0275cmp=n.VBU({type:a,selectors:[["app-charging-session-detail"]],decls:23,vars:13,consts:[["templateChargingStation",""],["templateChargingConnector",""],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container py-5 text-center",4,"ngIf"],[1,"container","text-center","line-height-0","mt-2","mb-3"],[1,"container","mt-3"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"container","py-5","text-center"],["src","../../../assets/image/default/no-info.svg"],[1,"text-muted","mt-4"],[1,"card-day","rounded","bg-white","px-3","py-4"],["color","primary","name","crescent"],[1,"text-center","mt-4"],["color","primary"],[1,"row","align-items-stretch"],[1,"col-12","col-lg-6","mb-4","d-flex","flex-column"],[1,"flex-grow-1","card-day","d-flex","flex-column","rounded","bg-white","border"],[1,"flex-grow-1"],[1,"d-flex","justify-content-center"],[1,"card-status"],[1,"no-opacity",3,"color"],["src","../../../assets/icon/ion-icon/battery.svg"],[1,"d-flex","mt-3"],[1,"col-6","px-0","text-center"],[1,"text-muted","fs-3"],[1,"progress-left"],[1,"progress-bar"],[1,"progress-right"],[1,"progress-value"],[1,"d-flex","w-100","h-100","align-items-center","justify-content-center","text-center"],[1,"line-height-1"],["src","../../../assets/icon/ion-icon/battery-2.svg",3,"color"],[3,"color"],[1,"status-item","mt-3","mb-3"],[1,"font-weight-medium"],[1,"col-6","px-0"],[1,"status-item","mb-3"],[1,"mt-2"],[1,"ion-chip-icon",3,"color"],["src","../../../assets/icon/ion-icon/electric-2.svg"],[1,"my-3","mr-2"],["src","../../../assets/icon/ion-icon/time-2.svg"],[1,"p-2"],[1,"card-package","rounded","border","d-flex","align-items-stretch","p-2"],[1,"col-7","pl-0","d-flex","align-items-center","pr-2","border-right"],["src","../../../assets/icon/ion-img/charge-package.svg"],[1,"align-self-stretch","pl-2","d-flex","flex-column","justify-content-between"],[1,"col-5","pl-2","pr-0","flex-grow-1","d-flex","flex-column","justify-content-between"],[1,"card-day","rounded","bg-white","p-3","mt-3"],[1,"col-12","col-lg-6","mb-4"],[1,"card-day","h-100","rounded","bg-white","p-3"],[1,"m-0"],[1,"border-dashed","mt-2","mb-3"],[1,"d-flex","align-items-start"],[1,"col-12","col-lg-6"],[1,"row"],["class","col-12 mb-4",4,"ngIf"],[1,"text-medium"],[1,"table","table-borderless","m-0"],[1,"text-primary"],[1,"mt-0","mb-3","text-primary","d-flex","align-items-center"],["src","../../../assets/icon/ion-icon/changing-station.svg"],[1,"ml-2"],[1,"col-6","pr-2"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"col-6","pl-2"],[1,"col-12","mb-4"],[1,"card-day","rounded","bg-white","p-3"],[1,"container","py-3"],["color","danger","shape","round","expand","block",3,"click"],["color","primary","shape","round","expand","block",3,"click"],[1,"d-flex","align-items-center"],[1,"pr-3"],["color","primary",3,"click"],["name","home-outline",1,"fs-24"],["color","medium","shape","round","fill","outline","expand","block",3,"click"],[1,"rounded","border","p-2"],[1,"embed-responsive","embed-responsive-1by1"],["onError","this.src='assets/image/default/ev-station.png'",1,"embed-responsive-item","rounded",3,"src"],[1,"mt-2","text-center"],[1,"embed-responsive-item","rounded",3,"src"]],template:function(e,t){if(1&e){const i=n.RV6();n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",2),n.nrm(3,"ion-back-button",3),n.k0s(),n.j41(4,"ion-title"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()(),n.j41(7,"ion-content")(8,"ion-refresher",4),n.bIt("ionRefresh",function(_){return n.eBV(i),n.Njj(t.onIonRefresher(_))}),n.nrm(9,"ion-refresher-content"),n.k0s(),n.DNE(10,f,5,3,"div",5)(11,v,7,3,"div",6)(12,B,103,55,"div",7),n.k0s(),n.qex(13,8),n.DNE(14,w,7,3,"ng-container",9)(15,J,7,3,"ng-container",9)(16,L,11,3,"ng-container",9)(17,X,7,3,"ng-container",9)(18,Y,7,3,"ng-container",9),n.bVm(),n.DNE(19,W,10,6,"ng-template",null,0,n.C5r)(21,z,10,6,"ng-template",null,1,n.C5r)}2&e&&(n.R7$(3),n.Y8G("defaultHref",t.APP_ROUTE.TABS_CHARGING_SESSION),n.R7$(2),n.JRh(n.bMT(6,11,"Charger")),n.R7$(5),n.Y8G("ngIf",t.response&&!t.chargingSession),n.R7$(),n.vxM(11,(null==t.chargingSession?null:t.chargingSession.VSessionStatus)==t.v_session_status.KhoiTaoPhienSac?11:-1),n.R7$(),n.vxM(12,t.chargingSession?12:-1),n.R7$(),n.Y8G("ngSwitch",null==t.chargingSession?null:t.chargingSession.VSessionStatus),n.R7$(),n.Y8G("ngSwitchCase",t.v_session_status.DangSac),n.R7$(),n.Y8G("ngSwitchCase",t.v_session_status.DaSac),n.R7$(),n.Y8G("ngSwitchCase",t.v_session_status.HoanTat),n.R7$(),n.Y8G("ngSwitchCase",t.v_session_status.HuyPhienSac),n.R7$(),n.Y8G("ngSwitchCase",t.v_session_status.Loi))},dependencies:[S.bT,S.T3,S.ux,S.e1,h.Jm,h.QW,h.ZB,h.W9,h.M0,h.eU,h.iq,h.KW,h.he,h.To,h.Ki,h.w2,h.IO,h.BC,h.ai,h.el,l.D9],styles:['.card-day.rounded[_ngcontent-%COMP%], .card-day.rounded[_ngcontent-%COMP%]   .rounded[_ngcontent-%COMP%]{border-radius:1rem!important}.card-day[_ngcontent-%COMP%]   .card-status[_ngcontent-%COMP%]{margin-top:-1rem}.card-day[_ngcontent-%COMP%]   .card-package[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:3rem}.status-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:.5rem;vertical-align:middle;font-size:1.5rem}.status-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}.ion-chip-icon[_ngcontent-%COMP%]{margin:0 .5rem 0 0;padding:.25rem}.ion-chip-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}ion-spinner[_ngcontent-%COMP%]{width:3rem;height:3rem}.progress[_ngcontent-%COMP%]{width:5rem;height:5rem;line-height:5rem;background:none;margin:0;box-shadow:none;position:relative}.progress[_ngcontent-%COMP%]:after{content:"";width:100%;height:100%;border-radius:50%;border:.3125rem solid var(--ion-color-medium-tint);position:absolute;top:0;left:0}.progress[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:50%;height:100%;overflow:hidden;position:absolute;top:0;z-index:1}.progress[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]{left:0}.progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{width:100%;height:100%;background:none;border-width:.4rem;border-style:solid;position:absolute;top:0}.progress[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{left:100%;border-top-right-radius:5rem;border-bottom-right-radius:5rem;border-left:0;transform-origin:center left}.progress[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]{right:0}.progress[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{left:-100%;border-top-left-radius:5rem;border-bottom-left-radius:5rem;border-right:0;transform-origin:center right}.progress[_ngcontent-%COMP%]   .progress-value[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%;font-size:1rem;text-align:center;position:absolute;top:0;left:0}.progress[_ngcontent-%COMP%]   .progress-value[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem}.progress-tertiary[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{border-color:var(--ion-color-tertiary)}.progress-success[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{border-color:var(--ion-color-success)}.progress-warning[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{border-color:var(--ion-color-warning)}.progress-danger[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{border-color:var(--ion-color-danger)}.progress-1[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-2 1.8s linear forwards}.progress-2[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-4 1.8s linear forwards}.progress-3[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-6 1.8s linear forwards}.progress-4[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-8 1.8s linear forwards}.progress-5[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%], .progress-6[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-10 1.8s linear forwards}.progress-6[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-2 1.5s linear forwards 1.8s}.progress-7[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-10 1.8s linear forwards}.progress-7[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-4 1.5s linear forwards 1.8s}.progress-8[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-10 1.8s linear forwards}.progress-8[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-6 1.5s linear forwards 1.8s}.progress-9[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-10 1.8s linear forwards}.progress-9[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-8 1.5s linear forwards 1.8s}.progress-10[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-10 1.8s linear forwards}.progress-10[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-10 1.5s linear forwards 1.8s}@keyframes _ngcontent-%COMP%_loading-1{0%{transform:rotate(0)}to{transform:rotate(18deg)}}@keyframes _ngcontent-%COMP%_loading-2{0%{transform:rotate(0)}to{transform:rotate(36deg)}}@keyframes _ngcontent-%COMP%_loading-3{0%{transform:rotate(0)}to{transform:rotate(54deg)}}@keyframes _ngcontent-%COMP%_loading-4{0%{transform:rotate(0)}to{transform:rotate(72deg)}}@keyframes _ngcontent-%COMP%_loading-5{0%{transform:rotate(0)}to{transform:rotate(90deg)}}@keyframes _ngcontent-%COMP%_loading-6{0%{transform:rotate(0)}to{transform:rotate(108deg)}}@keyframes _ngcontent-%COMP%_loading-7{0%{transform:rotate(0)}to{transform:rotate(126deg)}}@keyframes _ngcontent-%COMP%_loading-8{0%{transform:rotate(0)}to{transform:rotate(144deg)}}@keyframes _ngcontent-%COMP%_loading-9{0%{transform:rotate(0)}to{transform:rotate(162deg)}}@keyframes _ngcontent-%COMP%_loading-10{0%{transform:rotate(0)}to{transform:rotate(180deg)}}']}),u})()}];let K=(()=>{var a;class u{}return(a=u).\u0275fac=function(e){return new(e||a)},a.\u0275mod=n.$C({type:a}),a.\u0275inj=n.G2t({imports:[y.iI.forChild(H),y.iI]}),u})();var Q=c(3890);let Z=(()=>{var a;class u{}return(a=u).\u0275fac=function(e){return new(e||a)},a.\u0275mod=n.$C({type:a}),a.\u0275inj=n.G2t({imports:[S.MD,b.YN,h.bv,K,Q.x]}),u})()}}]);