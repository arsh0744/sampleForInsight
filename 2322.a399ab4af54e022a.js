"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2322],{2322:(A,u,r)=>{r.r(u),r.d(u,{SignupPageModule:()=>T});var _=r(36895),p=r(24006),g=r(90603),c=r(93165),h=r(15861),m=r(88075),e=r(94650),C=r(80529);function f(a,d){if(1&a&&(e.TgZ(0,"ion-select-option",32),e._uU(1),e.qZA()),2&a){const i=d.$implicit;e.s9C("value",i.Farm_ID),e.xp6(1),e.hij("",i.Farm_Name," ")}}function v(a,d){if(1&a&&(e.TgZ(0,"ion-select-option",32),e._uU(1),e.qZA()),2&a){const i=d.$implicit;e.s9C("value",i.CollectionCentre_ID),e.xp6(1),e.hij("",i.CollectionCentre_Name," ")}}const M=[{path:"",component:(()=>{class a extends m.P{constructor(i,t,l,n){super(),this.navCtrl=i,this.http=t,this.loadingCtrl=l,this.toastCtrl=n,this.farmDetail_arr=[],this.collectionCenter_arr=[],this.first_name="",this.middle_name="",this.last_name="",this.phone="",this.pan="",this.aadhar="",this.cattle_cow="",this.calves_cow="",this.cattle_buffalo="",this.calve_buffalo="",this.cattle_desi="",this.calves_desi=""}ionViewDidLoad(){console.log("ionViewDidLoad SignupPage")}ngOnInit(){}getFarms(){var i=this.BASE_URL+"api/DairyFarmApi/getAllDairyFarm?UserId=2&Key="+this.key+"&con="+this.DatabaseCode;new FormData,console.log("url:-"+i),this.http.get(i).subscribe(l=>{this.farmDetail_arr=[];try{var n=JSON.parse(JSON.stringify(l));for(let o=0;o<n.length;o++)this.farmDetail_arr.push({Farm_ID:n[o].Farm_ID,Farm_Name:n[o].Farm_Name,Comany_Name:n[o].Comany_Name,Address:n[o].Address,Zip_Code:n[o].Zip_Code,City_ID:n[o].City_ID,State_ID:n[o].State_ID,Country_ID:n[o].Country_ID,Owner_Name:n[o].Owner_Name,Contact_Person:n[o].Contact_Person}),this.getCollectionCenters()}catch(o){console.log(o)}},l=>{console.log("API Error",l),this.somethingWentWrongError(this.toastCtrl)})}getCollectionCenters(){var i=this.BASE_URL+"api/CollectionCentreApi/getAllCollectionCentre?UserId=2&Key="+this.key+"&con="+this.DatabaseCode;new FormData,console.log("url:-"+i),this.http.get(i).subscribe(l=>{this.collectionCenter_arr=[];try{var n=JSON.parse(JSON.stringify(l));for(let o=0;o<n.length;o++)this.collectionCenter_arr.push({CollectionCentre_ID:n[o].CollectionCentre_ID,CollectionCentre_Name:n[o].CollectionCentre_Name,PCollectionCentre_ID:n[o].PCollectionCentre_ID,CollectionCentre_Type:n[o].CollectionCentre_Type,Farm_ID:n[o].Farm_ID,Address:n[o].Address,Zip_Code:n[o].Zip_Code,City_ID:n[o].City_ID,Owner_ID:n[o].Owner_ID,SupervisorName:n[o].SupervisorName,Modified_By:n[o].Modified_By,Modified_On:n[o].Modified_On,City_Name:n[o].City_Name,Owner_Name:n[o].Owner_Name})}catch(o){console.log(o)}},l=>{console.log("API Error",l),this.somethingWentWrongError(this.toastCtrl)})}makeSignupRequest(){let i={FirstName:this.first_name,MiddleName:this.middle_name,LastName:this.last_name,Phone:this.phone,PAN:this.pan,RFID:"10",Aadhar:this.aadhar,Farm_ID:this.farmDetail_arr[Number(this.selected_farm)],CollectionCentre_ID:this.collectionCenter_arr[Number(this.selected_cc)],CattleCowNo:this.cattle_cow,CalvesCowNo:this.calves_cow,CattleBuffaloNo:this.cattle_buffalo,CalvesBuffaloNo:this.calve_buffalo,CattleDesiCowNo:this.cattle_desi,CalvesDesiCowNo:this.calves_desi},t=[];return t.push(i),JSON.stringify(t)}callSignupAPI(){var i=this;return(0,h.Z)(function*(){let t=yield i.loadingComp(i.loadingCtrl);t.present();var l=i.BASE_URL+"api/FarmerApi/addFarmer?FarmerDetail="+i.makeSignupRequest()+"&Key="+i.key+"&con="+i.DatabaseCode;let n=new FormData;console.log("url:-"+l),i.http.post(l,n).subscribe(o=>{t.dismiss();try{"true"==JSON.stringify(o)?(i.presentToast(i.toastCtrl,"User Register! Please Login Now."),i.navCtrl.pop()):i.presentToast(i.toastCtrl,"Something went wrong")}catch(s){console.log(s)}},o=>{t.dismiss(),console.log("API Error",o),i.somethingWentWrongError(i.toastCtrl)})})()}backToLogin(){this.navCtrl.pop()}}return a.\u0275fac=function(i){return new(i||a)(e.Y36(g.SH),e.Y36(C.eN),e.Y36(g.HT),e.Y36(g.yF))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-signup"]],features:[e.qOj],decls:82,vars:16,consts:[[2,"height","100%","background-color","#ffffff","position","absolute","z-index","-1"],[1,"bg"],[1,"test"],[2,"position","absolute","z-index","1","padding-left","7px","padding-right","7px"],[2,"border-radius","10px","margin-top","25px"],[1,"signup_main_div"],[1,"signup_left_img_div"],["src","../../../assets/imgs/ic_user.png",2,"width","12px"],["placeholder","First Name",1,"signup_input",3,"ngModel","ngModelChange"],["placeholder","Middle Name",1,"signup_input",3,"ngModel","ngModelChange"],["placeholder","Last Name",1,"signup_input",3,"ngModel","ngModelChange"],["placeholder","Phone",1,"signup_input",3,"ngModel","ngModelChange"],["placeholder","PAN",1,"signup_input",3,"ngModel","ngModelChange"],["placeholder","Aadhar Number",1,"signup_input",3,"ngModel","ngModelChange"],[2,"display","flex"],[2,"width","50%","padding-right","5px"],["placeholder","Cattle Cow",1,"signup_input",3,"ngModel","ngModelChange"],[2,"width","50%","padding-left","5px"],["placeholder","Calves Cow",1,"signup_input",3,"ngModel","ngModelChange"],["placeholder","Cattle Buffalo",1,"signup_input",3,"ngModel","ngModelChange"],["placeholder","Calves Buffalo",1,"signup_input",3,"ngModel","ngModelChange"],["placeholder","Cattle Mix",1,"signup_input",3,"ngModel","ngModelChange"],["placeholder","Calves Mix",1,"signup_input",3,"ngModel","ngModelChange"],[2,"border-bottom","1px solid #bdbdbd"],[3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["lines","none",2,"background-color","#ffffff","margin-top","10px","margin-bottom","10px"],[2,"display","flex","text-align","center","justify-content","center","align-items","center",3,"click"],[2,"background-color","#88dd4b","width","80%","display","flex","text-align","center","justify-content","center","align-items","center","border-radius","20px","height","40px"],[2,"font-size","15px","font-weight","bolder","color","#ffffff","font-family","nexa_bold"],[1,"flex_center_content"],[2,"font-family","nexa_bold",3,"click"],[3,"value"]],template:function(i,t){1&i&&(e.TgZ(0,"ion-content")(1,"div",0)(2,"div",1),e._UZ(3,"div",2),e.qZA()(),e.TgZ(4,"div",3)(5,"ion-card",4)(6,"ion-card-content")(7,"div",5)(8,"div",6),e._UZ(9,"img",7),e.qZA(),e.TgZ(10,"input",8),e.NdJ("ngModelChange",function(n){return t.first_name=n}),e.qZA()(),e.TgZ(11,"div",5)(12,"div",6),e._UZ(13,"img",7),e.qZA(),e.TgZ(14,"input",9),e.NdJ("ngModelChange",function(n){return t.middle_name=n}),e.qZA()(),e.TgZ(15,"div",5)(16,"div",6),e._UZ(17,"img",7),e.qZA(),e.TgZ(18,"input",10),e.NdJ("ngModelChange",function(n){return t.last_name=n}),e.qZA()(),e.TgZ(19,"div",5)(20,"div",6),e._UZ(21,"img",7),e.qZA(),e.TgZ(22,"input",11),e.NdJ("ngModelChange",function(n){return t.phone=n}),e.qZA()(),e.TgZ(23,"div",5)(24,"div",6),e._UZ(25,"img",7),e.qZA(),e.TgZ(26,"input",12),e.NdJ("ngModelChange",function(n){return t.pan=n}),e.qZA()(),e.TgZ(27,"div",5)(28,"div",6),e._UZ(29,"img",7),e.qZA(),e.TgZ(30,"input",13),e.NdJ("ngModelChange",function(n){return t.aadhar=n}),e.qZA()(),e.TgZ(31,"div",14)(32,"div",15)(33,"div",5)(34,"div",6),e._UZ(35,"img",7),e.qZA(),e.TgZ(36,"input",16),e.NdJ("ngModelChange",function(n){return t.cattle_cow=n}),e.qZA()()(),e.TgZ(37,"div",17)(38,"div",5)(39,"div",6),e._UZ(40,"img",7),e.qZA(),e.TgZ(41,"input",18),e.NdJ("ngModelChange",function(n){return t.calves_cow=n}),e.qZA()()()(),e.TgZ(42,"div",14)(43,"div",15)(44,"div",5)(45,"div",6),e._UZ(46,"img",7),e.qZA(),e.TgZ(47,"input",19),e.NdJ("ngModelChange",function(n){return t.cattle_buffalo=n}),e.qZA()()(),e.TgZ(48,"div",17)(49,"div",5)(50,"div",6),e._UZ(51,"img",7),e.qZA(),e.TgZ(52,"input",20),e.NdJ("ngModelChange",function(n){return t.calve_buffalo=n}),e.qZA()()()(),e.TgZ(53,"div",14)(54,"div",15)(55,"div",5)(56,"div",6),e._UZ(57,"img",7),e.qZA(),e.TgZ(58,"input",21),e.NdJ("ngModelChange",function(n){return t.cattle_desi=n}),e.qZA()()(),e.TgZ(59,"div",17)(60,"div",5)(61,"div",6),e._UZ(62,"img",7),e.qZA(),e.TgZ(63,"input",22),e.NdJ("ngModelChange",function(n){return t.calves_desi=n}),e.qZA()()()(),e.TgZ(64,"ion-item",23)(65,"ion-label"),e._uU(66,"Farms"),e.qZA(),e.TgZ(67,"ion-select",24),e.NdJ("ngModelChange",function(n){return t.selected_farm=n}),e.YNc(68,f,2,2,"ion-select-option",25),e.qZA()(),e.TgZ(69,"ion-item",23)(70,"ion-label"),e._uU(71,"Collection Center"),e.qZA(),e.TgZ(72,"ion-select",24),e.NdJ("ngModelChange",function(n){return t.selected_cc=n}),e.YNc(73,v,2,2,"ion-select-option",25),e.qZA()()()()()(),e.TgZ(74,"ion-footer",26)(75,"div",27),e.NdJ("click",function(){return t.callSignupAPI()}),e.TgZ(76,"div",28)(77,"p",29),e._uU(78," Sign up "),e.qZA()()(),e.TgZ(79,"div",30)(80,"p",31),e.NdJ("click",function(){return t.backToLogin()}),e._uU(81," Already have an account? Sign In "),e.qZA()()()),2&i&&(e.xp6(10),e.Q6J("ngModel",t.first_name),e.xp6(4),e.Q6J("ngModel",t.middle_name),e.xp6(4),e.Q6J("ngModel",t.last_name),e.xp6(4),e.Q6J("ngModel",t.phone),e.xp6(4),e.Q6J("ngModel",t.pan),e.xp6(4),e.Q6J("ngModel",t.aadhar),e.xp6(6),e.Q6J("ngModel",t.cattle_cow),e.xp6(5),e.Q6J("ngModel",t.calves_cow),e.xp6(6),e.Q6J("ngModel",t.cattle_buffalo),e.xp6(5),e.Q6J("ngModel",t.calve_buffalo),e.xp6(6),e.Q6J("ngModel",t.cattle_desi),e.xp6(5),e.Q6J("ngModel",t.calves_desi),e.xp6(4),e.Q6J("ngModel",t.selected_farm),e.xp6(1),e.Q6J("ngForOf",t.farmDetail_arr),e.xp6(4),e.Q6J("ngModel",t.selected_cc),e.xp6(1),e.Q6J("ngForOf",t.collectionCenter_arr))},dependencies:[_.sg,p.Fj,p.JJ,p.On,g.PM,g.FN,g.W2,g.fr,g.Ie,g.Q$,g.t9,g.n0,g.QI],styles:['.signup_input[_ngcontent-%COMP%]{width:100%;height:30px;border:none;padding-left:7px;padding-right:7px;font-size:12px;font-family:nexa_bold}.signup_left_img_div[_ngcontent-%COMP%]{display:flex;text-align:center;align-items:center;justify-content:center;width:45px;height:30px;border-right:1px solid #bdbdbd}.signup_main_div[_ngcontent-%COMP%]{display:flex;border:1px solid #bdbdbd;border-radius:7px;margin-top:10px}.bg[_ngcontent-%COMP%]{background:#74b743;height:25vh;width:100vw;position:relative}.bg[_ngcontent-%COMP%]:after{position:absolute;top:100%;left:0;content:"";height:0;width:0;border-left:100vw solid #74b743;border-bottom:55vw solid transparent;border-top:0px solid transparent;overflow:hidden}']}),a})()}];let Z=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[c.Bz.forChild(M),c.Bz]}),a})(),T=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[_.ez,p.u5,g.Pc,Z]}),a})()}}]);