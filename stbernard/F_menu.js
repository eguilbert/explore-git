//----------DHTML Menu Created using AllWebMenus PRO ver 5.3-#856---------------
//C:\PCstuff\Sidereal\Domaine St. Bernard\Menu source\F.awm
var awmMenuName='F_menu';
var awmLibraryBuild=856;
var awmLibraryPath='/awmdataF';
var awmImagesPath='/awmdataF';
var awmSupported=(navigator.appName + navigator.appVersion.substring(0,1)=="Netscape5" || document.all || document.layers || navigator.userAgent.indexOf('Opera')>-1 || navigator.userAgent.indexOf('Konqueror')>-1)?1:0;
if (awmAltUrl!='' && !awmSupported) window.location.replace(awmAltUrl);
if (awmSupported){
var nua=navigator.userAgent,scriptNo=(nua.indexOf('Chrome')>-1)?2:((nua.indexOf('Safari')>-1)?7:(nua.indexOf('Gecko')>-1)?2:((nua.indexOf('Opera')>-1)?4:1));
var mpi=document.location,xt="";
var mpa=mpi.protocol+"//"+mpi.host;
var mpi=mpi.protocol+"//"+mpi.host+mpi.pathname;
if(scriptNo==1){oBC=document.all.tags("BASE");if(oBC && oBC.length) if(oBC[0].href) mpi=oBC[0].href;}
while (mpi.search(/\\/)>-1) mpi=mpi.replace("\\","/");
mpi=mpi.substring(0,mpi.lastIndexOf("/")+1);
var e=document.getElementsByTagName("SCRIPT");
for (var i=0;i<e.length;i++){if (e[i].src){if (e[i].src.indexOf(awmMenuName+".js")!=-1){xt=e[i].src.split("/");if (xt[xt.length-1]==awmMenuName+".js"){xt=e[i].src.substring(0,e[i].src.length-awmMenuName.length-3);if (e[i].src.indexOf("://")!=-1){mpi=xt;}else{if(xt.substring(0,1)=="/")mpi=mpa+xt; else mpi+=xt;}}}}}
while (mpi.search(/\/\.\//)>-1) {mpi=mpi.replace("/./","/");}
var awmMenuPath=mpi.substring(0,mpi.length-1);
while (awmMenuPath.search("'")>-1) {awmMenuPath=awmMenuPath.replace("'","%27");}
document.write("<SCRIPT SRC='"+awmMenuPath+awmLibraryPath+"/awmlib"+scriptNo+".js'><\/SCRIPT>");
var n=null;
awmzindex=1000;
}

var awmImageName='';
var awmPosID='';
var awmSubmenusFrame='';
var awmSubmenusFrameOffset;
var awmOptimize=1;
var awmHash='TPKRWONHHVREUMWUDCJKUSHAQIWC';
var awmNoMenuPrint=1;
var awmUseTrs=0;
var awmSepr=["0","","",""];
var awmMarg=[0,0,0,0];
function awmBuildMenu(){
if (awmSupported){
awmCreateCSS(0,1,0,n,'#BCA77A',n,n,n,'none','0','#000000','0px 0px 0px 0',0,'0px / 0px');
awmCreateCSS(1,2,1,'#333333','#BCA77A',n,'11px Tahoma, Arial, Helvetica, sans-serif',n,'none','0','#000000','0px 0px 0px 0',1,'0px / 0px');
awmCreateCSS(0,2,1,'#FFFFFF','#BCA77A',n,'11px Tahoma, Arial, Helvetica, sans-serif',n,'none','0','#000000','0px 0px 0px 0',1,'0px / 0px');
awmCreateCSS(1,2,1,'#333333','#BCA77A',n,'11px Tahoma, Arial, Helvetica, sans-serif',n,'none','0','#000000','0px 0px 0px 0',0,'0px / 0px');
awmCreateCSS(0,2,1,'#FFFFFF','#BCA77A',n,'11px Tahoma, Arial, Helvetica, sans-serif',n,'none','0','#000000','0px 0px 0px 0',0,'0px / 0px');
awmCreateCSS(1,2,0,'#333333','#BCA77A',n,'11px Tahoma, Arial, Helvetica, sans-serif',n,'none','0','#000000','3px 8px 3px 8',1,'0px / 0px');
awmCreateCSS(0,2,0,'#FFFFFF','#BCA77A',n,'11px Tahoma, Arial, Helvetica, sans-serif',n,'solid','1','#808080','3px 8px 3px 8',1,'0px / 0px');
var s0=awmCreateMenu(0,0,0,0,1,0,0,0,0,10,10,0,1,0,0,0,1,n,n,100,1,0,0,0,170,-1,1,200,200,0,0,0,"0,0,0",n,n,n,n,n,n,n,n,0,0,0,0,0,0,0,0,1,0);
it=s0.addItem(1,2,n,"Accueil",n,"","","index.html",n,n,n,"index.html",n,139,26,2,0,0,0,n);
it=s0.addItem(3,4,n,"Activités",n,"","","",n,n,n,n,n,139,26,2,0,0,1,n);
var s1=it.addSubmenu(0,0,-1,0,0,0,0,0,0,1,0,n,n,100,-1,1,139,0,1,200,200,0,0,"0,0,0",1,"0",1);
it=s1.addItem(5,6,n,"Vue d&#39;ensemble",n,"","","ActivitiesF.html",n,n,n,"ActivitiesF.html",n,0,0,2,0,0,3,n);
it=s1.addItem(5,6,n,"Pavillon d’astronomie",n,"","","AstronomyF.html",n,n,n,"AstronomyF.html",n,0,0,2,0,0,4,n);
it=s1.addItem(5,6,n,"Centres de la nature ",n,"","","NatureCentresF.html",n,n,n,"NatureCentresF.html",n,0,0,2,0,0,5,n);
it=s1.addItem(5,6,n,"Activités sportives d&#39;hiver",n,"","","CrossCountryF.html",n,n,n,"CrossCountryF.html",n,0,0,2,0,0,15,n);
it=s1.addItem(5,6,n,"Ornithologie",n,"","","OrnithologyF.html",n,n,n,"OrnithologyF.html",n,0,0,2,0,0,2,n);
it=s1.addItem(5,6,n,"Symposium des arts",n,"","","ExpositionsShowsF.html",n,n,n,"ExpositionsShowsF.html",n,0,0,2,0,0,19,n);
it=s1.addItem(5,6,n,"Carte des sentiers",n,"","","TrailMapF.html",n,n,n,"TrailMapF.html",n,0,0,2,0,0,20,n);
it=s0.addItem(3,4,n,"Hébergement",n,"","","",n,n,n,n,n,139,26,2,0,0,10,n);
var s1=it.addSubmenu(0,0,-1,0,0,0,0,0,0,1,0,n,n,100,-1,5,139,0,1,200,200,0,0,"0,0,0",1,"0",1);
it=s1.addItem(5,6,n,"Tarification",n,"","","AccommodationF.html",n,n,n,"AccommodationF.html",n,0,0,2,0,0,27,n);
it=s1.addItem(5,6,n,"Location de salle",n,"","","HallRentalF.html",n,n,n,"HallRentalF.html",n,0,0,2,0,0,29,n);
it=s0.addItem(3,4,n,"À propos de nous",n,"","","",n,n,n,n,n,139,26,2,0,0,9,n);
var s1=it.addSubmenu(0,0,-1,0,0,0,0,0,0,1,0,n,n,100,-1,4,139,0,1,200,200,0,0,"0,0,0",1,"0",1);
it=s1.addItem(5,6,n,"Mission",n,"","","MissionF.html",n,n,n,"MissionF.html",n,0,0,2,0,0,22,n);
it=s1.addItem(5,6,n,"Historique",n,"","","HistoryF.html",n,n,n,"HistoryF.html",n,0,0,2,0,0,23,n);
it=s1.addItem(5,6,n,"Faune et flore",n,"","","FloraFaunaF.html",n,n,n,"FloraFaunaF.html",n,0,0,2,0,0,6,n);
it=s1.addItem(5,6,n,"Gardiens",n,"","","GaurdiansF.html",n,n,n,"GaurdiansF.html",n,0,0,2,0,0,24,n);
it=s1.addItem(5,6,n,"Nos amis",n,"","","FriendsF.html",n,n,n,"FriendsF.html",n,0,0,2,0,0,25,n);
it=s1.addItem(5,6,n,"Rapport annuel",n,"","","Rapport annuel 2009-2010.pdf",n,n,n,"Rapport annuel 2009-2010.pdf",n,0,0,2,0,0,26,n);
it=s0.addItem(1,2,n,"Liens",n,"","","LinksF.html",n,n,n,"LinksF.html",n,139,26,2,0,0,11,n);
it=s0.addItem(1,2,n,"Contactez nous",n,"","","ContactF.html",n,n,n,"ContactF.html",n,139,26,2,0,0,12,n);
it=s0.addItem(1,2,n,"English",n,"","","Home.html",n,n,n,"Home.html",n,139,26,2,0,0,13,n);
s0.pm.buildMenu();
}}
