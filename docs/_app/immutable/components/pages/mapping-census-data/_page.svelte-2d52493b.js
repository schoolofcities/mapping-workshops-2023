import{S as ei,i as ti,s as ai,k as t,a as l,w as oi,q as n,I as ni,l as a,h as o,c,x as ri,m as i,r,n as s,J as j,G as e,b as _r,y as si,B as ii,f as li,t as ci,z as di}from"../../../chunks/index-a8a08db8.js";import{T as hi}from"../../../chunks/TopSofC-39b9506d.js";/* empty css                             */const Ns=""+new URL("../../../assets/toronto-density-33b1c910.png",import.meta.url).href,Hs=""+new URL("../../../assets/ontario-french-a86bc40b.png",import.meta.url).href,pi=""+new URL("../../../assets/ontario-language-dbd21b05.png",import.meta.url).href,Ks=""+new URL("../../../assets/census-boundaries-legend-eg-69844584.png",import.meta.url).href,$s=""+new URL("../../../assets/spatial-data-2dcc30b3.svg",import.meta.url).href,Xs=""+new URL("../../../assets/toronto-1909-b2f68b67.png",import.meta.url).href,Ys=""+new URL("../../../assets/portuguese-toronto-16fe25e7.png",import.meta.url).href,ui=""+new URL("../../../assets/qgis-blank-c49863c8.png",import.meta.url).href,fi=""+new URL("../../../assets/qgis-choropleth-81a06853.png",import.meta.url).href;function gi(Zs){let Q,U,ye,_e,ke,Ee,Ce,Ie,Te,Se,Ae,Me,Pe,Ge,De,xe,Le,Oe,ze,Ht,V,Kt,v,T,Ze,ra,sa,et,ia,la,tt,B,ca,da,at,ha,pa,u,qe,J,ua,fa,ga,ot,ma,ba,nt,wa,va,N,je,kr,ya,rt,_a,ka,H,Qe,Er,Ea,st,Ca,Ia,it,Ta,Sa,S,lt,Aa,Ma,ct,Pa,Ga,Re,Da,K,xa,La,Fe,Oa,$,za,qa,g,dt,ja,Qa,ht,Ra,Fa,pt,Wa,Ua,X,Va,Y,Ba,Ja,Na,Z,We,Cr,Ha,ee,Ka,te,$a,Xa,Ya,ut,Za,eo,ae,Ue,Ir,to,f,ft,ao,oo,gt,no,ro,mt,so,io,oe,Ve,Tr,lo,bt,co,ho,wt,po,uo,ne,Be,Sr,fo,re,go,se,mo,bo,wo,ie,vo,le,yo,_o,ko,y,vt,Eo,Co,Je,ce,Io,To,So,de,Ao,yt,Mo,Po,Go,he,Ne,Ar,Do,O,xo,pe,Lo,Oo,ue,zo,qo,jo,E,Qo,_t,Ro,Fo,kt,Wo,Uo,Et,Vo,Bo,Ct,Jo,No,Ho,d,It,Ko,$o,fe,Xo,ge,Yo,Zo,en,me,tn,be,an,on,nn,Tt,rn,sn,He,Mr,ln,k,cn,St,dn,hn,At,pn,un,Mt,fn,gn,Pt,mn,bn,Gt,wn,vn,yn,z,_n,Dt,kn,En,xt,Cn,In,Tn,G,Sn,Lt,An,Mn,Ot,Pn,Gn,zt,Dn,xn,Ln,C,On,qt,zn,qn,jt,jn,Qn,Qt,Rn,Fn,Rt,Wn,Un,Vn,I,Bn,we,Jn,Nn,Ft,Hn,Kn,Wt,$n,Xn,Ut,Yn,Zn,er,ve,tr,Vt,ar,or,nr,Bt,rr,sr,Ke,Pr,ir,q,lr,Jt,cr,dr,Nt,hr,pr,ur,fr,gr,mr,$t;return V=new hi({}),{c(){Q=t("link"),U=t("link"),ye=t("link"),_e=t("link"),ke=t("meta"),Ee=t("meta"),Ce=t("meta"),Ie=t("meta"),Te=t("meta"),Se=t("meta"),Ae=t("meta"),Me=t("meta"),Pe=t("meta"),Ge=t("meta"),De=t("meta"),xe=t("meta"),Le=t("meta"),Oe=t("meta"),ze=t("meta"),Ht=l(),oi(V.$$.fragment),Kt=l(),v=t("main"),T=t("div"),Ze=t("h1"),ra=n("Mapping Canadian Census Data"),sa=l(),et=t("p"),ia=n("An introductory tutorial for creating maps of Canadian Census data using CensusMapper and QGIS"),la=l(),tt=t("p"),B=t("a"),ca=n("Jeff Allen"),da=l(),at=t("p"),ha=n("February, 2023"),pa=l(),u=t("div"),qe=t("p"),J=t("a"),ua=n("Statistics Canada"),fa=n(" conducts a national census of the population every five years, asking a range of demographic and socio-economic questions. The most recent census was in 2021."),ga=l(),ot=t("p"),ma=n("Lots of census data are publicly available for download. Most data are pre-aggregated to a variety of geographic boundaries (e.g. provinces, cities, neighbourhoods, blocks, etc.), which allow for making a range of maps."),ba=l(),nt=t("p"),wa=n("For example, here's a map of population density in the Greater Toronto Area (GTA), clearly showing where people are clustered throughout the region. (Click the image to expand)."),va=l(),N=t("a"),je=t("img"),ya=l(),rt=t("p"),_a=n("And here's a simple map of French speakers in Ontario."),ka=l(),H=t("a"),Qe=t("img"),Ea=l(),st=t("p"),Ca=n("Maps like these are pretty easy to make! Let's learn how."),Ia=l(),it=t("p"),Ta=n("Specifically, this tutorial covers:"),Sa=l(),S=t("ul"),lt=t("li"),Aa=n("an overview of Canadian Census data"),Ma=l(),ct=t("li"),Pa=n("an overview of maps and spatial data"),Ga=l(),Re=t("li"),Da=n("how to explore census data using "),K=t("a"),xa=n("CensusMapper"),La=l(),Fe=t("li"),Oa=n("how to download census data and make custom maps in "),$=t("a"),za=n("QGIS"),qa=l(),g=t("div"),dt=t("h2"),ja=n("Canadian Census Data"),Qa=l(),ht=t("p"),Ra=n("There are two parts to the census, the short-form survey and the long-form survey. The short-form survey asks a set of basic household and demographic questions (e.g. address, age, marital status, etc.) and is sent to all households in Canada. The long-from survey is sent to 25% of households in Canada. It asks additional questions pertaining to a broader range of demographic, social, and economic topics (e.g. religion, education, journey to work, etc.). Statistics Canada also augments collected census survey data by joining in data from other administrative sources, including income data collected by the Canadian Revenue Agency (CRA)."),Fa=l(),pt=t("p"),Wa=n('Census data are collected primarily on a household-by-household basis (one adult member in each household usually fills out the census on behalf of everyone in the household). Data of individual responses from the census are often called census "micro-data". Because of personal identification concerns, this data is only accessible by accredited researchers. (A public use microdata file called the PUMF is available though. It is a random sample of the overall population, with several of the identifying variables removed, such as home addresses and postal code).'),Ua=l(),X=t("p"),Va=n("Summaries (i.e. aggregations) of census data to a range of geographic units are publicly available to view online or download. These are super useful for understanding the demographics of a place. For example, the total population in a province, the number of people who speak Spanish in Toronto, or the average income in a specific neighbourhood. The "),Y=t("a"),Ba=n("Census Profile"),Ja=n(` tables on Statistics Canada's website allow for searching for census data for specific variables and geographic areas. For example, here's an output of "Knowledge of Official Languages" in Ontario.`),Na=l(),Z=t("a"),We=t("img"),Ha=l(),ee=t("p"),Ka=n("The are a number of "),te=t("a"),$a=n("geographic boundaries"),Xa=n(" available with associated census data, ranging in scale from city blocks to the entire country. Below is an example of commonly used boundaries for urban-scale maps and analysis."),Ya=l(),ut=t("p"),Za=n("Each polygon on this map has associated summary census data. Joining this tabular data to these spatial boundaries allows for making a wide range of maps showing the distribution of demographics and socio-economic variables."),eo=l(),ae=t("a"),Ue=t("img"),to=l(),f=t("div"),ft=t("h2"),ao=n("Spatial Data, GIS, and Cartography"),oo=l(),gt=t("p"),no=n("Before moving on to how we can make maps of census data, let's first briefly cover the basics of spatial data and map making."),ro=l(),mt=t("p"),so=n("Spatial data are any data that are a combination of attribute data (i.e. the what) and location data (i.e. the where). When working with census and other urban data, location data are based on reference to the Earth's surface. Common ways of representing spatial features are as single points, as lines of connected points, as polygons of enclosed lines, or grids of equal size and spacing."),io=l(),oe=t("a"),Ve=t("img"),lo=l(),bt=t("p"),co=n("Spatial data can be symbolized based on its attribute data. This can be based on categorical data (e.g. in the map above, three different colours of lines are used to represent three different types of census boundaries), or this can be based on numeric data (e.g. the map showed at the top of this page shades polygons based on their population density)."),ho=l(),wt=t("p"),po=n("Cartography is the art and science of creating maps. Maps are a combination of spatial data layered on top of each other. Good cartography requires careful thought about how to symbolize each layer, to aid communication, and to be in harmony with other layers on the map. Check out historical map below of the Toronto Harbour from 1909, each type of feature (water, railways, etc.) has its own carefully chosen symbology."),uo=l(),ne=t("a"),Be=t("img"),fo=l(),re=t("p"),go=n("Geographic Information Systems (GIS) are tools and software for working with spatial data. We can use GIS to make maps and visualize spatial data, but also for a number of data processing and analytical tasks (e.g. we can count how many people live within 1km of a public library). There is a wide range of GIS software available, some cost money, others are free. The mostly widely used free and open-source desktop GIS software is "),se=t("a"),mo=n("QGIS"),bo=n("."),wo=l(),ie=t("p"),vo=n("There are also an increasing number of interactive maps and web-GIS tools available online that are built for specific use-cases. One of which is "),le=t("a"),yo=n("CensusMapper"),_o=n(", built for visualizing and downloading Canadian census data."),ko=l(),y=t("div"),vt=t("h2"),Eo=n("Using CensusMapper"),Co=l(),Je=t("p"),ce=t("a"),Io=n("CensusMapper"),To=n(" is a website for exploring and downloading census data across Canada. When we first land on the website, it defaults to a map of Population Density in Vancouver and it shares a number of preset options for making maps."),So=l(),de=t("p"),Ao=n("If we want to search for a specific census variable, we can click "),yt=t("i"),Mo=n("Make a map"),Po=n(" in the top right, and then select the year (e.g. 2021). Here we can search and explore all available data. Using the search icon at the top-left or by clicking inset Canada map can help us to navigate elsewhere in the country. Just through a few clicks, I was able to create this map of knowledge of Portuguese in Toronto."),Go=l(),he=t("a"),Ne=t("img"),Do=l(),O=t("p"),xo=n("When working with census data, it's often advisable to use the "),pe=t("a"),Lo=n("Census Dictionary"),Oo=n(", the main reference guidebook, to understand what different data variables and geographies in the census represent. For example, here's the entry for "),ue=t("a"),zo=n("Knowledge of non-official languages"),qo=n("."),jo=l(),E=t("p"),Qo=n("We can also use CensusMapper to download census data for specified geographic boundaries. To do so, click on "),_t=t("i"),Ro=n("API"),Fo=n(" on the top right. First select the census year. "),kt=t("i"),Wo=n("Variable Selection"),Uo=n(" is used for searching for and selecting the variables (i.e. attribute data such as knowledge of a particular language) to download. "),Et=t("i"),Vo=n("Region Selection"),Bo=n(" is the geographic area that we want download data for (e.g. for Toronto). In the "),Ct=t("i"),Jo=n("Overview"),No=n(" panel, we can view what we've selected as well as pick the geographic aggregation level (e.g. Census Tracts, Dissemination Areas, etc.). Once selected, we can then download the attribute table and/or geographic boundaries."),Ho=l(),d=t("div"),It=t("h2"),Ko=n("Making Census Maps in QGIS"),$o=l(),fe=t("p"),Xo=n("While CensusMapper (and other online tools like it) are great for exploring and downloading data, we often want to make more customized maps (e.g. for a report, a paper, a website, etc.) or analyze census data in conjunction with other data sources (e.g. comparing  demographic data to the location of libraries, public transit, or grocery stores, etc.). We can do this in desktop GIS software like "),ge=t("a"),Yo=n("QGIS"),Zo=n("."),en=l(),me=t("p"),tn=n("Let's open up QGIS and add in some example data that can be downloaded from "),be=t("a"),an=n("here"),on=n("."),nn=l(),Tt=t("p"),rn=n(`This is the 'empty' view of QGIS when it's first opened. The "Browser" on the left allows for navigating and loading datasets. The "Layers" panel will populate with each dataset that is added to the project. And the big blank square is where your map data will be visualized.`),sn=l(),He=t("img"),ln=l(),k=t("p"),cn=n("In the download link above, we have a line layer representing major transit lines in Toronto ("),St=t("code"),dn=n("ttc_routes.geojson"),hn=n(") and a point layer representing transit stations ("),At=t("code"),pn=n("ttc_stops.geojson"),un=n("). Vector data like this can be added into QGIS either by dragging and dropping them from your file manager onto the map or layers panel. Or they can be added by going to "),Mt=t("i"),fn=n("Layer"),gn=n(", then "),Pt=t("i"),mn=n("Data Source Manager"),bn=n(", and navigating to "),Gt=t("i"),wn=n("Vector"),vn=n("."),yn=l(),z=t("p"),_n=n("There are a number of ways we can symbolize this data. If we right click a layer in the layers panel, go to "),Dt=t("i"),kn=n("Properties"),En=n(", and then "),xt=t("i"),Cn=n("Symbology"),In=n(", there are lots of options to choose from."),Tn=l(),G=t("p"),Sn=n("In the download link above, there is also a polygon layer that represents neighbourhood Census Tract polygons ("),Lt=t("code"),An=n("toronto_census_tract_2021.shp"),Mn=n("). Also included is a "),Ot=t("code"),Pn=n(".csv"),Gn=n(" table which contains data linked to the unique identifier, "),zt=t("code"),Dn=n("ctuid"),xn=n(", of each Census Tract. (This data and others like it can also be queried and downloaded from CensusMapper or directly form Statistics Canada)."),Ln=l(),C=t("p"),On=n("We can use the "),qt=t("code"),zn=n("ctuid"),qn=n(" to join the tabular data to the spatial boundaries of Census Tracts. Do so by first adding the table as a layer into QGIS. Then open up the "),jt=t("i"),jn=n("Properties"),Qn=n(" of the Census Tract polygon layer, and go to "),Qt=t("i"),Rn=n("Joins"),Fn=n(". Add a new join, using "),Rt=t("code"),Wn=n("ctuid"),Un=n(" as the source and target fields. Once complete, we can open up the attribute table and see these additional columns."),Vn=l(),I=t("p"),Bn=n("We can now visualize these polygons as a "),we=t("a"),Jn=n("choropleth map"),Nn=n(" (maps where polygons are shaded by numeric attribute values). Open up the layer "),Ft=t("i"),Hn=n("Properties"),Kn=n(", go to "),Wt=t("i"),$n=n("Symbology"),Xn=n(", and style based on "),Ut=t("i"),Yn=n("Graduated symbols"),Zn=n(". It's often preferred to visualize a choropleth as a percent or a density (in terms of people per area) in order not to exaggerate counts in larger areas."),er=l(),ve=t("p"),tr=n("(Note that a numeric column like population or median income might be imported as a string. If this is the case, to convert to a number to visualize, click on the epsilon on the top-right, and use the "),Vt=t("code"),ar=n("to_real()"),or=n(" function to convert to a numeric value)."),nr=l(),Bt=t("p"),rr=n("For example, the following shows a choropleth map of the percent of people who live in low-income households by neighbourhood relative to major transit lines."),sr=l(),Ke=t("img"),ir=l(),q=t("p"),lr=n("The legend and scale bar were added by going to "),Jt=t("i"),cr=n("Project"),dr=n(", selecting "),Nt=t("i"),hr=n("New Print Layout"),pr=n(", and then adding in a map view, legend, and scale bar to the blank page."),ur=l(),fr=t("br"),gr=l(),mr=t("br"),this.h()},l(m){const p=ni("svelte-j28anw",document.head);Q=a(p,"LINK",{rel:!0,href:!0}),U=a(p,"LINK",{rel:!0,href:!0,crossorigin:!0}),ye=a(p,"LINK",{href:!0,rel:!0}),_e=a(p,"LINK",{href:!0,rel:!0}),ke=a(p,"META",{name:!0,content:!0}),Ee=a(p,"META",{name:!0,content:!0}),Ce=a(p,"META",{name:!0,content:!0}),Ie=a(p,"META",{property:!0,content:!0}),Te=a(p,"META",{property:!0,content:!0}),Se=a(p,"META",{property:!0,content:!0}),Ae=a(p,"META",{property:!0,content:!0}),Me=a(p,"META",{property:!0,content:!0}),Pe=a(p,"META",{property:!0,content:!0}),Ge=a(p,"META",{name:!0,content:!0}),De=a(p,"META",{name:!0,content:!0}),xe=a(p,"META",{name:!0,content:!0}),Le=a(p,"META",{name:!0,content:!0}),Oe=a(p,"META",{name:!0,content:!0}),ze=a(p,"META",{name:!0,content:!0}),p.forEach(o),Ht=c(m),ri(V.$$.fragment,m),Kt=c(m),v=a(m,"MAIN",{});var A=i(v);T=a(A,"DIV",{id:!0});var R=i(T);Ze=a(R,"H1",{});var Gr=i(Ze);ra=r(Gr,"Mapping Canadian Census Data"),Gr.forEach(o),sa=c(R),et=a(R,"P",{});var Dr=i(et);ia=r(Dr,"An introductory tutorial for creating maps of Canadian Census data using CensusMapper and QGIS"),Dr.forEach(o),la=c(R),tt=a(R,"P",{});var xr=i(tt);B=a(xr,"A",{href:!0,target:!0});var Lr=i(B);ca=r(Lr,"Jeff Allen"),Lr.forEach(o),xr.forEach(o),da=c(R),at=a(R,"P",{});var Or=i(at);ha=r(Or,"February, 2023"),Or.forEach(o),R.forEach(o),pa=c(A),u=a(A,"DIV",{id:!0});var b=i(u);qe=a(b,"P",{});var br=i(qe);J=a(br,"A",{href:!0,target:!0});var zr=i(J);ua=r(zr,"Statistics Canada"),zr.forEach(o),fa=r(br," conducts a national census of the population every five years, asking a range of demographic and socio-economic questions. The most recent census was in 2021."),br.forEach(o),ga=c(b),ot=a(b,"P",{});var qr=i(ot);ma=r(qr,"Lots of census data are publicly available for download. Most data are pre-aggregated to a variety of geographic boundaries (e.g. provinces, cities, neighbourhoods, blocks, etc.), which allow for making a range of maps."),qr.forEach(o),ba=c(b),nt=a(b,"P",{});var jr=i(nt);wa=r(jr,"For example, here's a map of population density in the Greater Toronto Area (GTA), clearly showing where people are clustered throughout the region. (Click the image to expand)."),jr.forEach(o),va=c(b),N=a(b,"A",{href:!0,target:!0});var Qr=i(N);je=a(Qr,"IMG",{src:!0,alt:!0}),Qr.forEach(o),ya=c(b),rt=a(b,"P",{});var Rr=i(rt);_a=r(Rr,"And here's a simple map of French speakers in Ontario."),Rr.forEach(o),ka=c(b),H=a(b,"A",{href:!0,target:!0});var Fr=i(H);Qe=a(Fr,"IMG",{src:!0,alt:!0}),Fr.forEach(o),Ea=c(b),st=a(b,"P",{});var Wr=i(st);Ca=r(Wr,"Maps like these are pretty easy to make! Let's learn how."),Wr.forEach(o),Ia=c(b),it=a(b,"P",{});var Ur=i(it);Ta=r(Ur,"Specifically, this tutorial covers:"),Ur.forEach(o),Sa=c(b),S=a(b,"UL",{class:!0});var F=i(S);lt=a(F,"LI",{});var Vr=i(lt);Aa=r(Vr,"an overview of Canadian Census data"),Vr.forEach(o),Ma=c(F),ct=a(F,"LI",{});var Br=i(ct);Pa=r(Br,"an overview of maps and spatial data"),Br.forEach(o),Ga=c(F),Re=a(F,"LI",{});var wr=i(Re);Da=r(wr,"how to explore census data using "),K=a(wr,"A",{href:!0,target:!0});var Jr=i(K);xa=r(Jr,"CensusMapper"),Jr.forEach(o),wr.forEach(o),La=c(F),Fe=a(F,"LI",{});var vr=i(Fe);Oa=r(vr,"how to download census data and make custom maps in "),$=a(vr,"A",{href:!0,target:!0});var Nr=i($);za=r(Nr,"QGIS"),Nr.forEach(o),vr.forEach(o),F.forEach(o),b.forEach(o),qa=c(A),g=a(A,"DIV",{id:!0});var _=i(g);dt=a(_,"H2",{});var Hr=i(dt);ja=r(Hr,"Canadian Census Data"),Hr.forEach(o),Qa=c(_),ht=a(_,"P",{});var Kr=i(ht);Ra=r(Kr,"There are two parts to the census, the short-form survey and the long-form survey. The short-form survey asks a set of basic household and demographic questions (e.g. address, age, marital status, etc.) and is sent to all households in Canada. The long-from survey is sent to 25% of households in Canada. It asks additional questions pertaining to a broader range of demographic, social, and economic topics (e.g. religion, education, journey to work, etc.). Statistics Canada also augments collected census survey data by joining in data from other administrative sources, including income data collected by the Canadian Revenue Agency (CRA)."),Kr.forEach(o),Fa=c(_),pt=a(_,"P",{});var $r=i(pt);Wa=r($r,'Census data are collected primarily on a household-by-household basis (one adult member in each household usually fills out the census on behalf of everyone in the household). Data of individual responses from the census are often called census "micro-data". Because of personal identification concerns, this data is only accessible by accredited researchers. (A public use microdata file called the PUMF is available though. It is a random sample of the overall population, with several of the identifying variables removed, such as home addresses and postal code).'),$r.forEach(o),Ua=c(_),X=a(_,"P",{});var Xt=i(X);Va=r(Xt,"Summaries (i.e. aggregations) of census data to a range of geographic units are publicly available to view online or download. These are super useful for understanding the demographics of a place. For example, the total population in a province, the number of people who speak Spanish in Toronto, or the average income in a specific neighbourhood. The "),Y=a(Xt,"A",{href:!0,target:!0});var Xr=i(Y);Ba=r(Xr,"Census Profile"),Xr.forEach(o),Ja=r(Xt,` tables on Statistics Canada's website allow for searching for census data for specific variables and geographic areas. For example, here's an output of "Knowledge of Official Languages" in Ontario.`),Xt.forEach(o),Na=c(_),Z=a(_,"A",{href:!0,target:!0});var Yr=i(Z);We=a(Yr,"IMG",{src:!0,alt:!0}),Yr.forEach(o),Ha=c(_),ee=a(_,"P",{});var Yt=i(ee);Ka=r(Yt,"The are a number of "),te=a(Yt,"A",{href:!0,target:!0});var Zr=i(te);$a=r(Zr,"geographic boundaries"),Zr.forEach(o),Xa=r(Yt," available with associated census data, ranging in scale from city blocks to the entire country. Below is an example of commonly used boundaries for urban-scale maps and analysis."),Yt.forEach(o),Ya=c(_),ut=a(_,"P",{});var es=i(ut);Za=r(es,"Each polygon on this map has associated summary census data. Joining this tabular data to these spatial boundaries allows for making a wide range of maps showing the distribution of demographics and socio-economic variables."),es.forEach(o),eo=c(_),ae=a(_,"A",{href:!0,target:!0});var ts=i(ae);Ue=a(ts,"IMG",{src:!0,alt:!0}),ts.forEach(o),_.forEach(o),to=c(A),f=a(A,"DIV",{id:!0});var w=i(f);ft=a(w,"H2",{});var as=i(ft);ao=r(as,"Spatial Data, GIS, and Cartography"),as.forEach(o),oo=c(w),gt=a(w,"P",{});var os=i(gt);no=r(os,"Before moving on to how we can make maps of census data, let's first briefly cover the basics of spatial data and map making."),os.forEach(o),ro=c(w),mt=a(w,"P",{});var ns=i(mt);so=r(ns,"Spatial data are any data that are a combination of attribute data (i.e. the what) and location data (i.e. the where). When working with census and other urban data, location data are based on reference to the Earth's surface. Common ways of representing spatial features are as single points, as lines of connected points, as polygons of enclosed lines, or grids of equal size and spacing."),ns.forEach(o),io=c(w),oe=a(w,"A",{href:!0,target:!0});var rs=i(oe);Ve=a(rs,"IMG",{src:!0,alt:!0}),rs.forEach(o),lo=c(w),bt=a(w,"P",{});var ss=i(bt);co=r(ss,"Spatial data can be symbolized based on its attribute data. This can be based on categorical data (e.g. in the map above, three different colours of lines are used to represent three different types of census boundaries), or this can be based on numeric data (e.g. the map showed at the top of this page shades polygons based on their population density)."),ss.forEach(o),ho=c(w),wt=a(w,"P",{});var is=i(wt);po=r(is,"Cartography is the art and science of creating maps. Maps are a combination of spatial data layered on top of each other. Good cartography requires careful thought about how to symbolize each layer, to aid communication, and to be in harmony with other layers on the map. Check out historical map below of the Toronto Harbour from 1909, each type of feature (water, railways, etc.) has its own carefully chosen symbology."),is.forEach(o),uo=c(w),ne=a(w,"A",{href:!0,target:!0});var ls=i(ne);Be=a(ls,"IMG",{src:!0,alt:!0}),ls.forEach(o),fo=c(w),re=a(w,"P",{});var Zt=i(re);go=r(Zt,"Geographic Information Systems (GIS) are tools and software for working with spatial data. We can use GIS to make maps and visualize spatial data, but also for a number of data processing and analytical tasks (e.g. we can count how many people live within 1km of a public library). There is a wide range of GIS software available, some cost money, others are free. The mostly widely used free and open-source desktop GIS software is "),se=a(Zt,"A",{href:!0,target:!0});var cs=i(se);mo=r(cs,"QGIS"),cs.forEach(o),bo=r(Zt,"."),Zt.forEach(o),wo=c(w),ie=a(w,"P",{});var ea=i(ie);vo=r(ea,"There are also an increasing number of interactive maps and web-GIS tools available online that are built for specific use-cases. One of which is "),le=a(ea,"A",{href:!0,target:!0});var ds=i(le);yo=r(ds,"CensusMapper"),ds.forEach(o),_o=r(ea,", built for visualizing and downloading Canadian census data."),ea.forEach(o),w.forEach(o),ko=c(A),y=a(A,"DIV",{id:!0});var M=i(y);vt=a(M,"H2",{});var hs=i(vt);Eo=r(hs,"Using CensusMapper"),hs.forEach(o),Co=c(M),Je=a(M,"P",{});var yr=i(Je);ce=a(yr,"A",{href:!0,target:!0});var ps=i(ce);Io=r(ps,"CensusMapper"),ps.forEach(o),To=r(yr," is a website for exploring and downloading census data across Canada. When we first land on the website, it defaults to a map of Population Density in Vancouver and it shares a number of preset options for making maps."),yr.forEach(o),So=c(M),de=a(M,"P",{});var ta=i(de);Ao=r(ta,"If we want to search for a specific census variable, we can click "),yt=a(ta,"I",{});var us=i(yt);Mo=r(us,"Make a map"),us.forEach(o),Po=r(ta," in the top right, and then select the year (e.g. 2021). Here we can search and explore all available data. Using the search icon at the top-left or by clicking inset Canada map can help us to navigate elsewhere in the country. Just through a few clicks, I was able to create this map of knowledge of Portuguese in Toronto."),ta.forEach(o),Go=c(M),he=a(M,"A",{href:!0,target:!0});var fs=i(he);Ne=a(fs,"IMG",{src:!0,alt:!0}),fs.forEach(o),Do=c(M),O=a(M,"P",{});var $e=i(O);xo=r($e,"When working with census data, it's often advisable to use the "),pe=a($e,"A",{href:!0,target:!0});var gs=i(pe);Lo=r(gs,"Census Dictionary"),gs.forEach(o),Oo=r($e,", the main reference guidebook, to understand what different data variables and geographies in the census represent. For example, here's the entry for "),ue=a($e,"A",{href:!0,target:!0});var ms=i(ue);zo=r(ms,"Knowledge of non-official languages"),ms.forEach(o),qo=r($e,"."),$e.forEach(o),jo=c(M),E=a(M,"P",{});var D=i(E);Qo=r(D,"We can also use CensusMapper to download census data for specified geographic boundaries. To do so, click on "),_t=a(D,"I",{});var bs=i(_t);Ro=r(bs,"API"),bs.forEach(o),Fo=r(D," on the top right. First select the census year. "),kt=a(D,"I",{});var ws=i(kt);Wo=r(ws,"Variable Selection"),ws.forEach(o),Uo=r(D," is used for searching for and selecting the variables (i.e. attribute data such as knowledge of a particular language) to download. "),Et=a(D,"I",{});var vs=i(Et);Vo=r(vs,"Region Selection"),vs.forEach(o),Bo=r(D," is the geographic area that we want download data for (e.g. for Toronto). In the "),Ct=a(D,"I",{});var ys=i(Ct);Jo=r(ys,"Overview"),ys.forEach(o),No=r(D," panel, we can view what we've selected as well as pick the geographic aggregation level (e.g. Census Tracts, Dissemination Areas, etc.). Once selected, we can then download the attribute table and/or geographic boundaries."),D.forEach(o),M.forEach(o),Ho=c(A),d=a(A,"DIV",{id:!0});var h=i(d);It=a(h,"H2",{});var _s=i(It);Ko=r(_s,"Making Census Maps in QGIS"),_s.forEach(o),$o=c(h),fe=a(h,"P",{});var aa=i(fe);Xo=r(aa,"While CensusMapper (and other online tools like it) are great for exploring and downloading data, we often want to make more customized maps (e.g. for a report, a paper, a website, etc.) or analyze census data in conjunction with other data sources (e.g. comparing  demographic data to the location of libraries, public transit, or grocery stores, etc.). We can do this in desktop GIS software like "),ge=a(aa,"A",{href:!0,target:!0});var ks=i(ge);Yo=r(ks,"QGIS"),ks.forEach(o),Zo=r(aa,"."),aa.forEach(o),en=c(h),me=a(h,"P",{});var oa=i(me);tn=r(oa,"Let's open up QGIS and add in some example data that can be downloaded from "),be=a(oa,"A",{href:!0,target:!0});var Es=i(be);an=r(Es,"here"),Es.forEach(o),on=r(oa,"."),oa.forEach(o),nn=c(h),Tt=a(h,"P",{});var Cs=i(Tt);rn=r(Cs,`This is the 'empty' view of QGIS when it's first opened. The "Browser" on the left allows for navigating and loading datasets. The "Layers" panel will populate with each dataset that is added to the project. And the big blank square is where your map data will be visualized.`),Cs.forEach(o),sn=c(h),He=a(h,"IMG",{src:!0,alt:!0}),ln=c(h),k=a(h,"P",{});var P=i(k);cn=r(P,"In the download link above, we have a line layer representing major transit lines in Toronto ("),St=a(P,"CODE",{});var Is=i(St);dn=r(Is,"ttc_routes.geojson"),Is.forEach(o),hn=r(P,") and a point layer representing transit stations ("),At=a(P,"CODE",{});var Ts=i(At);pn=r(Ts,"ttc_stops.geojson"),Ts.forEach(o),un=r(P,"). Vector data like this can be added into QGIS either by dragging and dropping them from your file manager onto the map or layers panel. Or they can be added by going to "),Mt=a(P,"I",{});var Ss=i(Mt);fn=r(Ss,"Layer"),Ss.forEach(o),gn=r(P,", then "),Pt=a(P,"I",{});var As=i(Pt);mn=r(As,"Data Source Manager"),As.forEach(o),bn=r(P,", and navigating to "),Gt=a(P,"I",{});var Ms=i(Gt);wn=r(Ms,"Vector"),Ms.forEach(o),vn=r(P,"."),P.forEach(o),yn=c(h),z=a(h,"P",{});var Xe=i(z);_n=r(Xe,"There are a number of ways we can symbolize this data. If we right click a layer in the layers panel, go to "),Dt=a(Xe,"I",{});var Ps=i(Dt);kn=r(Ps,"Properties"),Ps.forEach(o),En=r(Xe,", and then "),xt=a(Xe,"I",{});var Gs=i(xt);Cn=r(Gs,"Symbology"),Gs.forEach(o),In=r(Xe,", there are lots of options to choose from."),Xe.forEach(o),Tn=c(h),G=a(h,"P",{});var W=i(G);Sn=r(W,"In the download link above, there is also a polygon layer that represents neighbourhood Census Tract polygons ("),Lt=a(W,"CODE",{});var Ds=i(Lt);An=r(Ds,"toronto_census_tract_2021.shp"),Ds.forEach(o),Mn=r(W,"). Also included is a "),Ot=a(W,"CODE",{});var xs=i(Ot);Pn=r(xs,".csv"),xs.forEach(o),Gn=r(W," table which contains data linked to the unique identifier, "),zt=a(W,"CODE",{});var Ls=i(zt);Dn=r(Ls,"ctuid"),Ls.forEach(o),xn=r(W,", of each Census Tract. (This data and others like it can also be queried and downloaded from CensusMapper or directly form Statistics Canada)."),W.forEach(o),Ln=c(h),C=a(h,"P",{});var x=i(C);On=r(x,"We can use the "),qt=a(x,"CODE",{});var Os=i(qt);zn=r(Os,"ctuid"),Os.forEach(o),qn=r(x," to join the tabular data to the spatial boundaries of Census Tracts. Do so by first adding the table as a layer into QGIS. Then open up the "),jt=a(x,"I",{});var zs=i(jt);jn=r(zs,"Properties"),zs.forEach(o),Qn=r(x," of the Census Tract polygon layer, and go to "),Qt=a(x,"I",{});var qs=i(Qt);Rn=r(qs,"Joins"),qs.forEach(o),Fn=r(x,". Add a new join, using "),Rt=a(x,"CODE",{});var js=i(Rt);Wn=r(js,"ctuid"),js.forEach(o),Un=r(x," as the source and target fields. Once complete, we can open up the attribute table and see these additional columns."),x.forEach(o),Vn=c(h),I=a(h,"P",{});var L=i(I);Bn=r(L,"We can now visualize these polygons as a "),we=a(L,"A",{href:!0,target:!0});var Qs=i(we);Jn=r(Qs,"choropleth map"),Qs.forEach(o),Nn=r(L," (maps where polygons are shaded by numeric attribute values). Open up the layer "),Ft=a(L,"I",{});var Rs=i(Ft);Hn=r(Rs,"Properties"),Rs.forEach(o),Kn=r(L,", go to "),Wt=a(L,"I",{});var Fs=i(Wt);$n=r(Fs,"Symbology"),Fs.forEach(o),Xn=r(L,", and style based on "),Ut=a(L,"I",{});var Ws=i(Ut);Yn=r(Ws,"Graduated symbols"),Ws.forEach(o),Zn=r(L,". It's often preferred to visualize a choropleth as a percent or a density (in terms of people per area) in order not to exaggerate counts in larger areas."),L.forEach(o),er=c(h),ve=a(h,"P",{});var na=i(ve);tr=r(na,"(Note that a numeric column like population or median income might be imported as a string. If this is the case, to convert to a number to visualize, click on the epsilon on the top-right, and use the "),Vt=a(na,"CODE",{});var Us=i(Vt);ar=r(Us,"to_real()"),Us.forEach(o),or=r(na," function to convert to a numeric value)."),na.forEach(o),nr=c(h),Bt=a(h,"P",{});var Vs=i(Bt);rr=r(Vs,"For example, the following shows a choropleth map of the percent of people who live in low-income households by neighbourhood relative to major transit lines."),Vs.forEach(o),sr=c(h),Ke=a(h,"IMG",{src:!0,alt:!0}),ir=c(h),q=a(h,"P",{});var Ye=i(q);lr=r(Ye,"The legend and scale bar were added by going to "),Jt=a(Ye,"I",{});var Bs=i(Jt);cr=r(Bs,"Project"),Bs.forEach(o),dr=r(Ye,", selecting "),Nt=a(Ye,"I",{});var Js=i(Nt);hr=r(Js,"New Print Layout"),Js.forEach(o),pr=r(Ye,", and then adding in a map view, legend, and scale bar to the blank page."),Ye.forEach(o),ur=c(h),fr=a(h,"BR",{}),gr=c(h),mr=a(h,"BR",{}),h.forEach(o),A.forEach(o),this.h()},h(){s(Q,"rel","preconnect"),s(Q,"href","https://fonts.googleapis.com"),s(U,"rel","preconnect"),s(U,"href","https://fonts.gstatic.com"),s(U,"crossorigin",""),s(ye,"href","https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap"),s(ye,"rel","stylesheet"),s(_e,"href","https://fonts.googleapis.com/css2?family=Roboto&family=Source+Serif+Pro&display=swap"),s(_e,"rel","stylesheet"),s(ke,"name","viewport"),s(ke,"content","width=device-width, initial-scale=1, minimum-scale=1"),document.title="Mapping Canadian Census Data",s(Ee,"name","description"),s(Ee,"content","An introductory tutorial for creating maps of Canadian Census data using CensusMapper and QGIS"),s(Ce,"name","author"),s(Ce,"content","Jeff Allen"),s(Ie,"property","og:title"),s(Ie,"content","Mapping Canadian Census Data"),s(Te,"property","og:description"),s(Te,"content","An introductory tutorial for creating maps of Canadian Census data using CensusMapper and QGIS"),s(Se,"property","og:type"),s(Se,"content","website"),s(Ae,"property","og:url"),s(Ae,"content","https://schoolofcities.github.io/mapping-workshops-2023/mapping-census-data"),s(Me,"property","og:image"),s(Me,"content","https://raw.githubusercontent.com/schoolofcities/mapping-workshops-2023/main/src/routes/mapping-census-data/assets/census-map-eg.png"),s(Pe,"property","og:locale"),s(Pe,"content","en_CA"),s(Ge,"name","twitter:card"),s(Ge,"content","summary_large_image"),s(De,"name","twitter:site"),s(De,"content","https://schoolofcities.github.io/mapping-workshops-2023/mapping-census-data"),s(xe,"name","twitter:creator"),s(xe,"content","@JeffAllenMaps"),s(Le,"name","twitter:title"),s(Le,"content","Mapping Canadian Census Data"),s(Oe,"name","twitter:description"),s(Oe,"content","An introductory tutorial for creating maps of Canadian Census data using CensusMapper and QGIS"),s(ze,"name","twitter:image"),s(ze,"content","https://raw.githubusercontent.com/schoolofcities/mapping-workshops-2023/main/src/routes/mapping-census-data/assets/census-map-eg.png"),s(B,"href","https://jamaps.github.io/"),s(B,"target","_blank"),s(T,"id","title"),s(J,"href","https://www12.statcan.gc.ca/census-recensement/index-eng.cfm"),s(J,"target","_blank"),j(je.src,kr=Ns)||s(je,"src",kr),s(je,"alt","toronto-density"),s(N,"href",Ns),s(N,"target","_blank"),j(Qe.src,Er=Hs)||s(Qe,"src",Er),s(Qe,"alt","toronto-french"),s(H,"href",Hs),s(H,"target","_blank"),s(K,"href","https://censusmapper.ca/"),s(K,"target","_blank"),s($,"href","https://www.qgis.org/en/site/"),s($,"target","_blank"),s(S,"class","list"),s(u,"id","text"),s(Y,"href","https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/index.cfm?Lang=E"),s(Y,"target","_blank"),j(We.src,Cr=pi)||s(We,"src",Cr),s(We,"alt","ontario-language"),s(Z,"href","https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/details/page.cfm?LANG=E&GENDERlist=1,2,3&STATISTIClist=1&DGUIDlist=2021A000235&HEADERlist=,15,13,18,12,16,14,17&SearchText=Ontario"),s(Z,"target","_blank"),s(te,"href","https://www12.statcan.gc.ca/census-recensement/2021/geo/ref/index-eng.cfm"),s(te,"target","_blank"),j(Ue.src,Ir=Ks)||s(Ue,"src",Ir),s(Ue,"alt","census-boundaries"),s(ae,"href",Ks),s(ae,"target","_blank"),s(g,"id","text"),j(Ve.src,Tr=$s)||s(Ve,"src",Tr),s(Ve,"alt","spatial-data-types"),s(oe,"href",$s),s(oe,"target","_blank"),j(Be.src,Sr=Xs)||s(Be,"src",Sr),s(Be,"alt","toronto-1909"),s(ne,"href",Xs),s(ne,"target","_blank"),s(se,"href","https://www.qgis.org/en/site/"),s(se,"target","_blank"),s(le,"href","https://censusmapper.ca/"),s(le,"target","_blank"),s(f,"id","text"),s(ce,"href","https://censusmapper.ca/"),s(ce,"target","_blank"),j(Ne.src,Ar=Ys)||s(Ne,"src",Ar),s(Ne,"alt","toronto-portuguese"),s(he,"href",Ys),s(he,"target","_blank"),s(pe,"href","https://www12.statcan.gc.ca/census-recensement/2021/ref/dict/az/index-eng.cfm"),s(pe,"target","_blank"),s(ue,"href","https://www12.statcan.gc.ca/census-recensement/2021/ref/dict/az/Definition-eng.cfm?ID=pop054"),s(ue,"target","_blank"),s(y,"id","text"),s(ge,"href","https://www.qgis.org/en/site/"),s(ge,"target","_blank"),s(be,"href","https://github.com/schoolofcities/mapping-workshops-2023/raw/main/notebooks/mapping-census-data/mapping-census-data.zip"),s(be,"target","_blank"),j(He.src,Mr=ui)||s(He,"src",Mr),s(He,"alt","qgis-blank"),s(we,"href","https://en.wikipedia.org/wiki/Choropleth_map"),s(we,"target","_blank"),j(Ke.src,Pr=fi)||s(Ke,"src",Pr),s(Ke,"alt","qgis-choropleth"),s(d,"id","text")},m(m,p){e(document.head,Q),e(document.head,U),e(document.head,ye),e(document.head,_e),e(document.head,ke),e(document.head,Ee),e(document.head,Ce),e(document.head,Ie),e(document.head,Te),e(document.head,Se),e(document.head,Ae),e(document.head,Me),e(document.head,Pe),e(document.head,Ge),e(document.head,De),e(document.head,xe),e(document.head,Le),e(document.head,Oe),e(document.head,ze),_r(m,Ht,p),si(V,m,p),_r(m,Kt,p),_r(m,v,p),e(v,T),e(T,Ze),e(Ze,ra),e(T,sa),e(T,et),e(et,ia),e(T,la),e(T,tt),e(tt,B),e(B,ca),e(T,da),e(T,at),e(at,ha),e(v,pa),e(v,u),e(u,qe),e(qe,J),e(J,ua),e(qe,fa),e(u,ga),e(u,ot),e(ot,ma),e(u,ba),e(u,nt),e(nt,wa),e(u,va),e(u,N),e(N,je),e(u,ya),e(u,rt),e(rt,_a),e(u,ka),e(u,H),e(H,Qe),e(u,Ea),e(u,st),e(st,Ca),e(u,Ia),e(u,it),e(it,Ta),e(u,Sa),e(u,S),e(S,lt),e(lt,Aa),e(S,Ma),e(S,ct),e(ct,Pa),e(S,Ga),e(S,Re),e(Re,Da),e(Re,K),e(K,xa),e(S,La),e(S,Fe),e(Fe,Oa),e(Fe,$),e($,za),e(v,qa),e(v,g),e(g,dt),e(dt,ja),e(g,Qa),e(g,ht),e(ht,Ra),e(g,Fa),e(g,pt),e(pt,Wa),e(g,Ua),e(g,X),e(X,Va),e(X,Y),e(Y,Ba),e(X,Ja),e(g,Na),e(g,Z),e(Z,We),e(g,Ha),e(g,ee),e(ee,Ka),e(ee,te),e(te,$a),e(ee,Xa),e(g,Ya),e(g,ut),e(ut,Za),e(g,eo),e(g,ae),e(ae,Ue),e(v,to),e(v,f),e(f,ft),e(ft,ao),e(f,oo),e(f,gt),e(gt,no),e(f,ro),e(f,mt),e(mt,so),e(f,io),e(f,oe),e(oe,Ve),e(f,lo),e(f,bt),e(bt,co),e(f,ho),e(f,wt),e(wt,po),e(f,uo),e(f,ne),e(ne,Be),e(f,fo),e(f,re),e(re,go),e(re,se),e(se,mo),e(re,bo),e(f,wo),e(f,ie),e(ie,vo),e(ie,le),e(le,yo),e(ie,_o),e(v,ko),e(v,y),e(y,vt),e(vt,Eo),e(y,Co),e(y,Je),e(Je,ce),e(ce,Io),e(Je,To),e(y,So),e(y,de),e(de,Ao),e(de,yt),e(yt,Mo),e(de,Po),e(y,Go),e(y,he),e(he,Ne),e(y,Do),e(y,O),e(O,xo),e(O,pe),e(pe,Lo),e(O,Oo),e(O,ue),e(ue,zo),e(O,qo),e(y,jo),e(y,E),e(E,Qo),e(E,_t),e(_t,Ro),e(E,Fo),e(E,kt),e(kt,Wo),e(E,Uo),e(E,Et),e(Et,Vo),e(E,Bo),e(E,Ct),e(Ct,Jo),e(E,No),e(v,Ho),e(v,d),e(d,It),e(It,Ko),e(d,$o),e(d,fe),e(fe,Xo),e(fe,ge),e(ge,Yo),e(fe,Zo),e(d,en),e(d,me),e(me,tn),e(me,be),e(be,an),e(me,on),e(d,nn),e(d,Tt),e(Tt,rn),e(d,sn),e(d,He),e(d,ln),e(d,k),e(k,cn),e(k,St),e(St,dn),e(k,hn),e(k,At),e(At,pn),e(k,un),e(k,Mt),e(Mt,fn),e(k,gn),e(k,Pt),e(Pt,mn),e(k,bn),e(k,Gt),e(Gt,wn),e(k,vn),e(d,yn),e(d,z),e(z,_n),e(z,Dt),e(Dt,kn),e(z,En),e(z,xt),e(xt,Cn),e(z,In),e(d,Tn),e(d,G),e(G,Sn),e(G,Lt),e(Lt,An),e(G,Mn),e(G,Ot),e(Ot,Pn),e(G,Gn),e(G,zt),e(zt,Dn),e(G,xn),e(d,Ln),e(d,C),e(C,On),e(C,qt),e(qt,zn),e(C,qn),e(C,jt),e(jt,jn),e(C,Qn),e(C,Qt),e(Qt,Rn),e(C,Fn),e(C,Rt),e(Rt,Wn),e(C,Un),e(d,Vn),e(d,I),e(I,Bn),e(I,we),e(we,Jn),e(I,Nn),e(I,Ft),e(Ft,Hn),e(I,Kn),e(I,Wt),e(Wt,$n),e(I,Xn),e(I,Ut),e(Ut,Yn),e(I,Zn),e(d,er),e(d,ve),e(ve,tr),e(ve,Vt),e(Vt,ar),e(ve,or),e(d,nr),e(d,Bt),e(Bt,rr),e(d,sr),e(d,Ke),e(d,ir),e(d,q),e(q,lr),e(q,Jt),e(Jt,cr),e(q,dr),e(q,Nt),e(Nt,hr),e(q,pr),e(d,ur),e(d,fr),e(d,gr),e(d,mr),$t=!0},p:ii,i(m){$t||(li(V.$$.fragment,m),$t=!0)},o(m){ci(V.$$.fragment,m),$t=!1},d(m){o(Q),o(U),o(ye),o(_e),o(ke),o(Ee),o(Ce),o(Ie),o(Te),o(Se),o(Ae),o(Me),o(Pe),o(Ge),o(De),o(xe),o(Le),o(Oe),o(ze),m&&o(Ht),di(V,m),m&&o(Kt),m&&o(v)}}}class vi extends ei{constructor(Q){super(),ti(this,Q,null,gi,ai,{})}}export{vi as default};