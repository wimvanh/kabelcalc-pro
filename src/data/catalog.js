export const SECTIONS=[1.5,2.5,4,6,10,16,25,35,50,70,95];
export const BREAKERS=[6,10,13,16,20,25,32,40,50,63,80,100,125,160];
export const CABLES={
 XVB:{label:"XVB",material:"Cu",rho:.0225,x:.00008,factor:1,note:"Vaste laagspanningsinstallatie"},
 EXVB:{label:"EXVB",material:"Cu",rho:.0225,x:.00008,factor:.95,note:"Ondergrondse toepassing volgens uitvoering"},
 VOB:{label:"VOB in buis",material:"Cu",rho:.0225,x:.00008,factor:.9,note:"Geïsoleerde draad in buis"},
 H07RNF:{label:"H07RN-F",material:"Cu",rho:.0225,x:.00008,factor:.85,note:"Flexibele rubberkabel"}
};
export const AMPACITY={1.5:16,2.5:20,4:25,6:32,10:50,16:63,25:80,35:100,50:125,70:160,95:200};
export const CIRCUITS={
 lighting:{label:"Verlichting",min:1.5,maxBreaker:16,maxDrop:3,module:"basis",dedicated:false},
 sockets:{label:"Stopcontacten",min:2.5,maxBreaker:20,maxDrop:5,module:"basis",dedicated:false},
 cooktop:{label:"Kookplaat",min:2.5,maxBreaker:40,maxDrop:5,module:"basis",dedicated:true},
 ev:{label:"Laadpaal",min:2.5,maxBreaker:63,maxDrop:5,module:"ev",dedicated:true},
 pv:{label:"PV-omvormer",min:2.5,maxBreaker:63,maxDrop:2,module:"pv",dedicated:true},
 battery:{label:"Thuisbatterij",min:2.5,maxBreaker:63,maxDrop:2,module:"battery",dedicated:true}
};
export const STATUS={green:{label:"Conform binnen app-controles",color:"#55ddb5"},orange:{label:"Aandachtspunt",color:"#ffbe55"},red:{label:"Niet conform binnen app-controles",color:"#ff647c"}};