var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,n=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,l=(e,l)=>{for(var s in l||(l={}))t.call(l,s)&&n(e,s,l[s]);if(a)for(var s of a(l))r.call(l,s)&&n(e,s,l[s]);return e};import{q as s,B as o,C as i,M as c,a as m,F as d,I as p,L as h,b as u,c as E,d as g,S as f,R as S,e as b,f as v,g as y,h as C,i as x,j as k,k as T,l as j,m as w,n as N,o as U,p as P,T as M,r as F,s as A,t as I,u as D,v as O,D as L,N as z,w as q,x as $}from"./vendor.0d60739a.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,l)=>{const s=new URL(e,r);if(self[t].moduleMap[s])return a(self[t].moduleMap[s]);const o=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){l(new Error(`Failed to import: ${e}`)),n(i)},onload(){a(self[t].moduleMap[s]),n(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/assets/");let V="";switch(window.location.hostname){case"localhost":case"127.0.0.1":V="http://localhost:3000";break;case"lr-makernote-client.herokuapp.com":V="https://lr-makernote-server.herokuapp.com"}var H=V;const _=s(o)`
margin-right: 1em;
margin-left: -4em;
background-color: #5e4ac7;
border-radius: 10%;
border: none;
color: #f6a73f;
`,R=s(o)`
margin-right: 1em;
margin-left: 1em;
background-color: #5e4ac7;
border-radius: 10%;
border: none;
color: #f6a73f;
`,B=s.h5`
text-align: center;
margin-top: 0.5em;
margin-bottom: 1em;
color: #5e4ac7;
`,J={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},Q={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};class G extends i.Component{constructor(e){super(e),this.formRef=i.createRef(),this.handleSubmit=e=>{this.state.email&&this.state.password?fetch(`${H}/user/create`,{method:"POST",body:JSON.stringify({user:this.state}),headers:new Headers({"Content-Type":"application/json"})}).then((e=>e.json())).then((e=>{console.log(e),console.log(e.error),e.error?"email must be unique"===e.error.errors[0].message&&alert("An account with this email address already exists, please login or sign up with a different email address"):this.props.updateToken(e.sessionToken)})):alert("Please enter first name, last name, email address, and password")},this.modalCancel=()=>this.setState({modalToggle:!1}),this.state={firstName:"",lastName:"",email:"",password:"",errorMessage:"",modalToggle:!0}}render(){return i.createElement(i.Fragment,null,i.createElement(c,{isOpen:this.state.modalToggle},i.createElement(m,null,i.createElement(B,null,"Welcome! Create Your Free Account!"),i.createElement(d,l(l({},J),{name:"register",onFinish:this.handleSubmit,scrollToFirstError:!0}),i.createElement(d.Item,{label:"First Name",rules:[{required:!0}]},i.createElement(p,{id:"firstName",type:"text",name:"firstName",placeholder:"Enter First Name",onChange:e=>this.setState({firstName:e.target.value})})),i.createElement(d.Item,{label:"Last Name",rules:[{required:!0}]},i.createElement(p,{id:"lastName",type:"text",name:"lastName",placeholder:"Enter Last Name",onChange:e=>this.setState({lastName:e.target.value})})),i.createElement(d.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]},i.createElement(p,{id:"email",type:"text",name:"email",placeholder:"Enter Email",onChange:e=>this.setState({email:e.target.value})})),i.createElement(d.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0},i.createElement(p.Password,{id:"su_password",type:"password",name:"password",placeholder:"Enter Password",onChange:e=>this.setState({password:e.target.value}),pattern:"^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$",title:"Must contain at least 6 characters, including one number, one uppercase, and one lowercase letter."})),i.createElement(d.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},({getFieldValue:e})=>({validator:(t,a)=>a&&e("password")!==a?Promise.reject(new Error("The two passwords that you entered do not match!")):Promise.resolve()})]},i.createElement(p.Password,{id:"su_password",type:"password",name:"password",placeholder:"Enter Password",onChange:e=>this.setState({password:e.target.value}),pattern:"^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$",title:"Must contain at least 6 characters, including one number, one uppercase, and one lowercase letter."})),i.createElement(d.Item,l({},Q),i.createElement(_,{type:"primary",htmlType:"submit"},"Create Account!"),i.createElement(R,{type:"primary",onClick:this.modalCancel},"Maybe Later"))))))}}const Z=s(o)`
margin-right: 1em;
background-color: #5e4ac7;
border-radius: 10%;
border: none;
color: #f6a73f;
`,W=s(o)`
margin-right: 1em;
margin-left: 1em;
background-color: #5e4ac7;
border-radius: 10%;
border: none;
color: #f6a73f;
`,Y=s.h5`
text-align: center;
margin-top: 0.5em;
margin-bottom: 1em;
color: #5e4ac7;
`,K={labelCol:{span:8},wrapperCol:{span:16}},X={wrapperCol:{offset:8,span:16}};class ee extends i.Component{constructor(e){super(e),this.formRef=i.createRef(),this.handleSubmit=e=>{this.state.email&&this.state.password&&this.state.email&&this.state.password?fetch(`${H}/user/login`,{method:"POST",body:JSON.stringify({user:this.state}),headers:new Headers({"Content-Type":"application/json"})}).then((e=>e.json())).then((e=>{this.props.updateToken(e.sessionToken),console.log(e),localStorage.setItem("admin",e.user.admin),localStorage.setItem("firstName",e.user.firstName)})):alert("Please enter a valid email address and password")},this.modalCancel=()=>this.setState({modalToggle:!1}),this.state={email:"",password:"",admin:!1,firstName:"",errorMessage:"",modalToggle:!0}}render(){return i.createElement(c,{isOpen:this.state.modalToggle},i.createElement(m,null,i.createElement(Y,null,"Please Login"),i.createElement(d,l(l({},K),{name:"basic",initialValues:{remember:!0},onFinish:this.handleSubmit}),i.createElement(d.Item,{label:"E-mail",name:"email",rules:[{required:!0,message:"Please input your email!"}]},i.createElement(p,{id:"email",type:"text",name:"email",placeholder:"Enter Email",onChange:e=>this.setState({email:e.target.value})})),i.createElement(d.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},i.createElement(p.Password,{id:"su_password",type:"password",name:"password",placeholder:"enter password",onChange:e=>this.setState({password:e.target.value})})),i.createElement(d.Item,l({},X),i.createElement(Z,{type:"primary",htmlType:"submit"},"Login"),i.createElement(W,{type:"primary",onClick:this.modalCancel},"Cancel")))))}}const te=s.div`
margin: 0;
position: absolute;
top: 50%;
left: 50%;
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
// border: red 5px solid;
`,ae=s.h1`
text-align: center;
color: #b820d1;
font-family: 'Tempus Sans ITC';
font-size: 130px;
margin-top: 100px;
`,re=s.p`
text-align: center;
font-size: 30px;
color: #5c4c76;
font-family: 'Calibri';
margin-bottom: 50px;
`,ne=s(h)`
`,le=s(u)`
text-align: center;
display: block;
  margin-left: auto;
  margin-right: auto;
background-color: #5e4ac7;
color: #f6a73f;
  font-size: 30px;
  font-family: 'Tempus Sans ITC'; 
  margin-bottom: 30px; 
  }
  `;class se extends i.Component{constructor(e){super(e)}render(){return i.createElement(i.Fragment,null,i.createElement("div",{className:"auth"},i.createElement(E,{className:"container"},i.createElement(g,null,i.createElement(te,null,i.createElement(ae,null,"MakerNote"),i.createElement(re,null,"Never forget what you've created! MakerNote is the place to store the details of all your projects!"),i.createElement(ne,{to:"/Signup"},i.createElement(le,null,"Create Your Free Journal!")),i.createElement(ne,{to:"/Login"},i.createElement(le,null,"Welcome back, Login!"))),i.createElement("div",null,i.createElement(f,null,i.createElement(S,{exact:!0,path:"/Signup"},i.createElement(G,{updateToken:this.props.updateToken})),i.createElement(S,{exact:!0,path:"/Login"},i.createElement(ee,{updateToken:this.props.updateToken}))))))))}}const oe=s(b)`
width: 18rem; 
margin: 20px; 
border: #b820d1 1px solid;
`,ie=s(u)`
background-color: #5e4ac7;
color: #f6a73f;
margin-left: 2em;
`,ce=s(u)`
background-color: #5e4ac7;
color: #f6a73f;
`,me=s.h1`
text-align: center;
margin: 20px;
font-family: 'Tempus Sans ITC';
color: #b820d1;
`;class de extends i.Component{constructor(e){super(e),this.deleteProject=e=>{fetch(`${H}/projects/delete/${e.id}`,{method:"DELETE",headers:new Headers({"Content-Type":"application/json",Authorization:this.props.token})}).then((()=>this.props.fetchProjects()))}}projectsMapper(){return this.props.projects.sort(((e,t)=>e.projectName.localeCompare(t.projectName))).map(((e,t)=>i.createElement(oe,{className:"p-3 col-2",key:t},i.createElement(b.Img,{variant:"top",height:"250",src:e.pictureUrl1}),i.createElement(b.Body,null,i.createElement(b.Title,null,e.projectName)),i.createElement(v,{className:"list-group-flush"},i.createElement(y,null,i.createElement("b",null,"Date Started:")," ",e.dateStarted),i.createElement(y,null,i.createElement("b",null,"Date Finished:")," ",e.dateFinished),i.createElement(y,null,i.createElement("b",null,"Medium:")," ",e.medium)),i.createElement(b.Body,null,i.createElement(b.Link,null," ",i.createElement(ie,{onClick:()=>{this.props.editUpdateProjects(e),this.props.updateOn()}},"Update")),i.createElement(b.Link,null," ",i.createElement(ce,{onClick:()=>{this.deleteProject(e)}},"Delete"))))))}render(){return i.createElement(i.Fragment,null,i.createElement(me,null,"My Projects"),i.createElement("hr",{style:{backgroundColor:"#5e4ac7"}}),i.createElement(C,{className:"col d-flex align-content-start flex-wrap",style:{marginTop:"2rem",marginRight:"20px",marginLeft:"20px"}},this.projectsMapper()))}}const pe=s.h1`
text-align: center;
width: 50%;
margin: auto;
font-family: 'Tempus Sans ITC';
color: #b820d1;
margin-bottom: 40px;

`,he=s(x)`
margin: auto;
width: 50%;
margin-top: 50px;
padding-left: 70px;
padding-right: 70px;
padding-top: 70px;
padding-bottom: 70px;
background-color: #f8f8f8;
border: #5e4ac7 1px solid;
`,ue=s.div`
margin: auto;
width: 50%;
text-align: center;
margin-top: 20px;
`,Ee=s(u)`
margin-right: 10px;
background-color: #5e4ac7;
color: #f6a73f;

`,ge=s(u)`
margin-right: 10px;
background-color: #5e4ac7;
color: #f6a73f;
`,fe=s.div`

margin: auto;
width: 50%;
`,Se=s(k)`
margin-bottom: 50px;
display: block;
margin-left: auto;
margin-right: auto;
flex: 1;
width: 50%;
// height: 350px;
resizeMode: 'contain';
`;class be extends i.Component{constructor(e){super(e),this.handleSubmit=e=>{e.preventDefault(),fetch(`${H}/projects/update/${this.props.projectsToUpdate.id}`,{method:"PUT",body:JSON.stringify({projects:{projectName:this.state.editProjectName,dateStarted:this.state.editDateStarted,dateFinished:this.state.editDateFinished,medium:this.state.editMedium,editTotalMaterialCost:this.state.editTotalMaterialCost,forSale:this.state.editForSale,dateSold:this.state.editDateSold,price:this.state.editPrice,storeSoldAt:this.state.editStoreSoldAt,status:this.state.editStatus,technique:this.state.editTechnique,dimensions:this.state.editDimensions,tags:this.state.editTags,sold:this.state.editSold,productUrl:this.state.editProductUrl,public:this.state.editPublic,notes:this.state.editNotes}}),headers:new Headers({"Content-Type":"application/json",Authorization:this.props.token})}).then((e=>{console.log(e),this.props.updateOff(),this.props.fetchProjects()}))},this.imgSubmit=async e=>{e.preventDefault();const t=await fetch(`${H}/user/cloudsign`,{method:"GET",headers:{Authorization:this.props.token}}),{sig:a,ts:r}=await t.json(),n=document.getElementById("file-input").files[0],l=new FormData;l.append("file",n),l.append("upload_preset","yawnhulb"),l.append("api_key","776498227515992"),l.append("signature",a),l.append("timestamp",r);const s=await(await fetch("https://api.cloudinary.com/v1_1/dx06fkupm/image/upload",{method:"POST",body:l})).json();this.setState({avUrl:s.secure_url}),console.log(s),await(await fetch(`${H}/projects/imageset/${this.props.projectsToUpdate.id}`,{method:"PUT",headers:{Authorization:this.props.token,"Content-Type":"application/json"},body:JSON.stringify({url:s.secure_url})})).json()},this.state={editProjectName:this.props.projectsToUpdate.projectName,editDateStarted:this.props.projectsToUpdate.dateStarted,editDateFinished:this.props.projectsToUpdate.dateFinished,editMedium:this.props.projectsToUpdate.medium,editTotalMaterialCost:this.props.projectsToUpdate.totalMaterialCost,editForSale:this.props.projectsToUpdate.forSale,editDateSold:this.props.projectsToUpdate.dateSold,editPrice:this.props.projectsToUpdate.price,editStoreSoldAt:this.props.projectsToUpdate.storeSoldAt,editStatus:this.props.projectsToUpdate.status,editTechnique:this.props.projectsToUpdate.technique,editDimensions:this.props.projectsToUpdate.dimensions,editTags:this.props.projectsToUpdate.tags,editSold:this.props.projectsToUpdate.sold,editProductUrl:this.props.projectsToUpdate.productUrl,editNotes:this.props.projectsToUpdate.notes,editPictureUrl1:this.props.projectsToUpdate.pictureUrl1,editPublic:this.props.projectsToUpdate.public,avUrl:"#"}}render(){return i.createElement(i.Fragment,null,i.createElement(he,{onSubmit:this.handleSubmit},i.createElement(pe,null,"Edit Project"),i.createElement(fe,null,i.createElement(Se,{src:this.state.editPictureUrl1})),i.createElement(T,{form:!0},i.createElement(j,{md:6},i.createElement(w,null,i.createElement(N,{for:"projectName"},"Project Name"),i.createElement(U,{id:"projectName",type:"text",name:"projectName",value:this.state.editProjectName,placeholder:"Project Name",onChange:e=>this.setState({editProjectName:e.target.value})}))),i.createElement(j,{md:3},i.createElement(w,null,i.createElement("div",null,i.createElement(N,{htmlFor:"status"},"Status")),i.createElement("select",{id:"status",name:"status",placeholder:"Status",value:this.state.editStatus,onChange:e=>this.setState({editStatus:e.target.value})},i.createElement("option",{value:""}),i.createElement("option",{value:"inProgress"},"In Progress"),i.createElement("option",{value:"finished"},"Finished"),i.createElement("option",{selected:!0,value:"hibernating"},"Hibernating"))))),i.createElement(T,{form:!0},i.createElement(j,{md:3},i.createElement(w,null,i.createElement(N,{htmlFor:"medium"},"Medium"),i.createElement(U,{id:"medium",type:"text",name:"medium",value:this.state.editMedium,placeholder:"Medium",onChange:e=>this.setState({editMedium:e.target.value})}))),i.createElement(j,{md:3},i.createElement(w,null,i.createElement(N,{htmlFor:"technique"},"Technique"),i.createElement(U,{id:"technique",type:"text",name:"technique",value:this.state.editTechnique,placeholder:"Technique",onChange:e=>this.setState({editTechnique:e.target.value})}))),i.createElement(j,{md:3},i.createElement(w,null,i.createElement(N,{for:"dateStarted"},"Date Started"),i.createElement(U,{type:"date",name:"dateStarted",id:"dateStarted",placeholder:"Date Started",value:this.state.editDateStarted,onChange:e=>this.setState({editDateStarted:e.target.value})}))),i.createElement(j,{md:3},i.createElement(w,null,i.createElement(N,{for:"dateFinished"},"Date Finished"),i.createElement(U,{type:"date",name:"dateFinished",id:"dateFinished",placeholder:"Date Finished",value:this.state.editDateFinished,onChange:e=>this.setState({editDateFinished:e.target.value})})))),i.createElement(T,{form:!0},i.createElement(j,{md:3},i.createElement(w,null,i.createElement(N,{htmlFor:"dimensions"},"Dimensions"),i.createElement(U,{id:"dimensions",type:"text",name:"dimensions",value:this.state.editDimensions,placeholder:"Dimensions",onChange:e=>this.setState({editDimensions:e.target.value})}))),i.createElement(j,{md:5},i.createElement(w,null,i.createElement(N,{htmlFor:"productUrl"},"Product URL"),i.createElement(U,{id:"productUrl",type:"text",name:"productUrl",value:this.state.editProductUrl,placeholder:"Product URL",onChange:e=>this.setState({editProductUrl:e.target.value})}))),i.createElement(j,{md:3},i.createElement(w,null,i.createElement(N,{htmlFor:"totalMaterialCost"},"Total Material Cost"),i.createElement("span",null,"$"),i.createElement(U,{id:"totalMaterialCost",type:"number",placeholder:"Total Material Cost",name:"totalMaterialCost",value:this.state.editTotalMaterialCost,onChange:e=>this.setState({editTotalMaterialCost:e.target.value})})))),i.createElement(T,{form:!0},i.createElement(j,{md:2},i.createElement(w,{check:!0},i.createElement(P,{type:"switch",label:"For Sale?",name:"forSale",id:"forSale",checked:this.state.editForSale,onChange:e=>this.setState({editForSale:e.target.checked})}))),i.createElement(j,{md:2},i.createElement(w,{check:!0},i.createElement(P,{type:"switch",name:"sold",id:"sold",label:"Sold?",checked:this.state.editSold,onChange:e=>this.setState({editSold:e.target.checked})}))),i.createElement(j,{md:3},i.createElement(w,null,i.createElement(N,{for:"dateSold"},"Date Sold"),i.createElement(U,{type:"date",name:"dateSold",id:"dateSold",placeholder:"Date Sold",value:this.state.editDateSold,onChange:e=>this.setState({editDateSold:e.target.value})}))),i.createElement(j,{md:2},i.createElement(w,null,i.createElement(N,{htmlFor:"price"},"Price"),i.createElement(U,{id:"price",type:"number",placeholder:"Price",name:"price",value:this.state.editPrice,onChange:e=>this.setState({editPrice:e.target.value})}))),i.createElement(j,{md:3},i.createElement(w,null,i.createElement(N,{htmlFor:"storeSoldAt"},"Store Sold At"),i.createElement(U,{id:"storeSoldAt",type:"text",name:"storeSoldAt",value:this.state.editStoreSoldAt,placeholder:"Store Sold At",onChange:e=>this.setState({editStoreSoldAt:e.target.value})})))),i.createElement(w,{check:!0},i.createElement(P,{type:"switch",name:"public",id:"public",label:"Public?",checked:this.state.editPublic,onChange:e=>this.setState({editPublic:e.target.checked})})),i.createElement(w,null,i.createElement(N,{htmlFor:"notes"},"Notes"),i.createElement(U,{id:"notes",type:"textarea",name:"notes",value:this.state.editNotes,placeholder:"Notes",onChange:e=>this.setState({editNotes:e.target.value})})),i.createElement(ue,null,i.createElement(Ee,{type:"submit"},"Save"),i.createElement(ge,{type:"button",onClick:this.props.updateOff},"Cancel"))))}}class ve extends i.Component{constructor(e){super(e),this.fetchProjects=()=>{fetch(`${H}/projects/mine`,{method:"GET",headers:new Headers({"Content-Type":"application/json",Authorization:this.props.token})}).then((e=>e.json())).then((e=>{this.setState({projects:e}),console.log(e)}))},this.editUpdateProjects=e=>{this.setState({projectsToUpdate:e}),console.log(e)},this.viewProjects=e=>{this.setState({projectsToView:e}),console.log(e)},this.updateOn=()=>{this.setState({updateActive:!0})},this.updateOff=()=>{this.setState({updateActive:!1})},this.handleHide=()=>{this.setState({isActive:!0})},this.state={projects:[],updateActive:!1,projectsToUpdate:{projectName:"",dateStarted:"",dateFinished:"",medium:"",totalMaterialCost:"",forSale:!1,dateSold:"",price:"",storeSoldAt:"",status:"",technique:"",dimensions:"",tags:"",sold:!1,productUrl:"",pictureUrl1:"",public:!1,notes:"",id:1/0},isComponentVisible:!1,projectsToView:{},isActive:!1}}componentDidMount(){console.log("mounted"),this.fetchProjects()}render(){return i.createElement("div",null,this.state.updateActive?i.createElement(be,{projectsToUpdate:this.state.projectsToUpdate,updateOff:this.updateOff,token:this.props.token,fetchProjects:this.fetchProjects}):i.createElement(de,{projects:this.state.projects,editUpdateProjects:this.editUpdateProjects,updateOn:this.updateOn,fetchProjects:this.fetchProjects,token:this.props.token}))}}const ye=s.h1`
text-align: center;
margin: 20px;
font-family: 'Tempus Sans ITC';
color: #b820d1;
`,Ce=s.div`

width: 100vw;
`,xe=s(u)`
background-color: #5e4ac7;
color: #f6a73f;
margin-right: 2em;
margin-left: 2em;

`,ke=s(u)`
background-color: #5e4ac7;
color: #f6a73f;
`,Te=s.td`
color: #b820d1;
`,je=s.th`
color: #5e4ac7;
`;class we extends i.Component{constructor(e){super(e),this.deleteMaterial=e=>{fetch(`${H}/materials/delete/${e.id}`,{method:"DELETE",headers:new Headers({"Content-Type":"application/json",Authorization:this.props.token})}).then((()=>this.props.fetchMaterials()))}}materialsMapper(){return this.props.materials.sort(((e,t)=>e.materialName.localeCompare(t.materialName))).map(((e,t)=>i.createElement("tr",{key:t},i.createElement("th",{scope:"row"},e.id),i.createElement(Te,null,e.materialName),i.createElement(Te,null,e.color),i.createElement(Te,null,e.quantity),i.createElement("td",null,i.createElement(xe,{onClick:()=>{this.props.editUpdateMaterials(e),this.props.updateOn()}},"Update"),i.createElement(ke,{onClick:()=>{this.deleteMaterial(e)}},"Delete")))))}render(){return i.createElement(Ce,null,i.createElement(ye,null,"My Materials"),i.createElement("hr",{style:{backgroundColor:"#5e4ac7"}}),i.createElement(M,{striped:!0},i.createElement("thead",null,i.createElement("tr",null,i.createElement(je,null,"#"),i.createElement(je,null,"Material Name"),i.createElement(je,null,"Color"),i.createElement(je,null,"Quantity"))),i.createElement("tbody",null,this.materialsMapper())))}}const Ne=s.h1`
text-align: center;
margin-bottom: 50px;
font-family: 'Tempus Sans ITC';
color: #b820d1;
width: 100%;
`,Ue=s(x)`
margin-right: 50px;
margin-left: 50px;
padding: 50px;
background-color: #f8f8f8;
border: #5e4ac7 1px solid;
margin-top: 50px;
`,Pe=s.div`
margin: auto;
width: 50%;
text-align: center;
`,Me=s(u)`
margin-right: 10px;
background-color: #5e4ac7;
color: #f6a73f;

`,Fe=s(u)`
margin-right: 10px;
background-color: #5e4ac7;
color: #f6a73f;
`;class Ae extends i.Component{constructor(e){super(e),this.handleSubmit=e=>{e.preventDefault(),fetch(`${H}/materials/update/${this.props.materialsToUpdate.id}`,{method:"PUT",body:JSON.stringify({materials:{materialName:this.state.editMaterialName,quantity:this.state.editQuantity,costPerItem:this.state.editCostPerItem,color:this.state.editColor,size:this.state.editSize,source:this.state.editSource,storageLocation:this.state.editStorageLocation,description:this.state.editDescription,notes:this.state.editNotes}}),headers:new Headers({"Content-Type":"application/json",Authorization:this.props.token})}).then((e=>{console.log(e),this.props.updateOff(),this.props.fetchMaterials()}))},this.state={editMaterialName:this.props.materialsToUpdate.materialName,editQuantity:this.props.materialsToUpdate.quantity,editCostPerItem:this.props.materialsToUpdate.costPerItem,editColor:this.props.materialsToUpdate.color,editSize:this.props.materialsToUpdate.size,editSource:this.props.materialsToUpdate.source,editStorageLocation:this.props.materialsToUpdate.storageLocation,editDescription:this.props.materialsToUpdate.description,editNotes:this.props.materialsToUpdate.notes}}render(){return i.createElement(i.Fragment,null,i.createElement(Ue,{onSubmit:this.handleSubmit},i.createElement(Ne,null,"Update Material"),i.createElement(j,{md:5},i.createElement(w,null,i.createElement(N,{for:"materialName"},"Material Name"),i.createElement(U,{id:"materialName",type:"text",name:"materialName",value:this.state.editMaterialName,placeholder:"Material Name",onChange:e=>this.setState({editMaterialName:e.target.value})}))),i.createElement(T,{form:!0},i.createElement(j,{md:2},i.createElement(w,null,i.createElement(N,{htmlFor:"quantity"},"Quantity"),i.createElement(U,{id:"quantity",type:"number",name:"quantity",value:this.state.editQuantity,placeholder:"Quantity",onChange:e=>this.setState({editQuantity:e.target.value})}))),i.createElement(j,{md:5},i.createElement(w,null,i.createElement(N,{htmlFor:"color"},"Color"),i.createElement(U,{id:"color",type:"text",name:"color",value:this.state.editColor,placeholder:"Color",onChange:e=>this.setState({editColor:e.target.value})}))),i.createElement(j,{md:2},i.createElement(w,null,i.createElement(N,{htmlFor:"costPerItem"},"Cost per Item"),i.createElement(U,{id:"costPerItem",type:"number",name:"costPerItem",value:this.state.editCostPerItem,placeholder:"Cost per Item",onChange:e=>this.setState({editCostPerItem:e.target.value})}))),i.createElement(j,{md:2},i.createElement(w,null,i.createElement(N,{htmlFor:"size"},"Size"),i.createElement(U,{id:"size",type:"text",name:"size",value:this.state.editSize,placeholder:"Size",onChange:e=>this.setState({editSize:e.target.value})})))),i.createElement(T,{form:!0},i.createElement(j,{md:3},i.createElement(w,null,i.createElement(N,{htmlFor:"source"},"Source"),i.createElement(U,{id:"source",type:"text",name:"source",value:this.state.editSource,placeholder:"Source",onChange:e=>this.setState({editSource:e.target.value})}))),i.createElement(j,{md:3},i.createElement(w,null,i.createElement(N,{htmlFor:"storageLocation"},"Storage Location"),i.createElement(U,{id:"storageLocation",type:"text",name:"storageLocation",value:this.state.editStorageLocation,placeholder:"Storage Location",onChange:e=>this.setState({editStorageLocation:e.target.value})}))),i.createElement(j,{md:5},i.createElement(w,null,i.createElement(N,{htmlFor:"description"},"Description"),i.createElement(U,{id:"description",type:"text",name:"description",value:this.state.editDescription,placeholder:"Description",onChange:e=>this.setState({editDescription:e.target.value})}))),i.createElement(j,{md:6},i.createElement(w,null,i.createElement(N,{htmlFor:"notes"},"Notes"),i.createElement(U,{id:"notes",type:"textarea",name:"notes",value:this.state.editNotes,placeholder:"Notes",onChange:e=>this.setState({editNotes:e.target.value})})))),i.createElement(Pe,null,i.createElement(Me,{type:"submit"},"Save"),i.createElement(Fe,{type:"button",onClick:()=>this.props.updateOff()},"Cancel"))))}}class Ie extends i.Component{constructor(e){super(e),this.fetchMaterials=()=>{fetch(`${H}/materials/mine`,{method:"GET",headers:new Headers({"Content-Type":"application/json",Authorization:this.props.token})}).then((e=>e.json())).then((e=>{this.setState({materials:e}),console.log(e)}))},this.editUpdateMaterials=e=>{this.setState({materialsToUpdate:e}),console.log(e)},this.updateOn=()=>{this.setState({updateActive:!0})},this.updateOff=()=>{this.setState({updateActive:!1})},this.state={materials:[],updateActive:!1,isComponentVisible:!1,isActive:!1,materialsToUpdate:{materialName:"",quantity:"",costPerItem:"",color:"",size:"",source:"",storageLocation:"",description:"",notes:"",id:1/0}}}componentDidMount(){console.log("mounted"),this.fetchMaterials()}render(){return i.createElement(E,null,i.createElement(T,null,this.state.updateActive?i.createElement(Ae,{materialsToUpdate:this.state.materialsToUpdate,updateOff:this.updateOff,token:this.props.token,fetchMaterials:this.fetchMaterials}):i.createElement(we,{materials:this.state.materials,editUpdateMaterials:this.editUpdateMaterials,updateOn:this.updateOn,fetchMaterials:this.fetchMaterials,token:this.props.token})))}}const De=s.h1`
text-align: center;
width: 50%;
margin: auto;
font-family: 'Tempus Sans ITC';
color: #b820d1;
margin-bottom: 30px;
`,Oe=s(x)`
margin: auto;
width: 50%;
margin-top: 50px;
padding-left: 70px;
padding-right: 70px;
padding-top: 70px;
padding-bottom: 70px;
background-color: #f8f8f8;
border: #5e4ac7 1px solid;
`,Le=s.div`
margin: auto;
width: 50%;
text-align: center;
margin-top: 20px;
`,ze=s(u)`
margin-right: 10px;
background-color: #5e4ac7;
color: #f6a73f;
`,qe=s(u)`
margin-right: 10px;
background-color: #5e4ac7;
color: #f6a73f;
`,$e=s.form`

`,Ve=s.button`
margin-bottom: 30px;
background-color: #5e4ac7;
color: #f6a73f;
padding-top: 7px;
padding-bottom: 7px;
padding-right: 15px;
padding-left: 15px;
border-radius: 7%;
`,He=s(F)`
margin-left: 15px;
`;class _e extends i.Component{constructor(e){super(e),this.imgSubmit=async e=>{e.preventDefault();const t=await fetch(`${H}/user/cloudsign`,{method:"GET",headers:{Authorization:this.props.token}}),{sig:a,ts:r}=await t.json(),n=document.getElementById("file-input").files[0],l=new FormData;l.append("file",n),l.append("upload_preset","yawnhulb"),l.append("api_key","776498227515992"),l.append("signature",a),l.append("timestamp",r);const s=await(await fetch("https://api.cloudinary.com/v1_1/dx06fkupm/image/upload",{method:"POST",body:l})).json();this.setState({avUrl:s.secure_url}),console.log(s)},this.handleSubmit=e=>{e.preventDefault(),this.state.projectName?fetch(`${H}/projects/create`,{method:"POST",body:JSON.stringify({projects:{projectName:this.state.projectName,dateStarted:this.state.dateStarted,dateFinished:this.state.dateFinished,forSale:this.state.forSale,medium:this.state.medium,totalMaterialCost:this.state.totalMaterialCost,dateSold:this.state.dateSold,price:this.state.price,storeSoldAt:this.state.storeSoldAt,status:this.state.status,technique:this.state.technique,dimensions:this.state.dimensions,tags:this.state.tags,sold:this.state.sold,productUrl:this.state.productUrl,public:this.state.public,pictureUrl1:this.state.avUrl,notes:this.state.notes}}),headers:new Headers({"Content-Type":"application/json",Authorization:this.props.token})}).then((e=>e.json())).then((e=>{console.log(e),this.setState({projectName:"",dateStarted:"",dateFinished:"",medium:"",totalMaterialCost:"",forSale:!1,dateSold:"",price:"",storeSoldAt:"",status:"",technique:"",dimensions:"",tags:"",sold:!1,productUrl:"",public:!1,notes:"",redirectPI:!0})})).catch((e=>{console.error("error: ",e)})):alert("Please enter a name for your project.")},this.close=()=>this.setState({isOpen:!this.state.isOpen}),this.state={projectName:"",dateStarted:"",dateFinished:"",medium:"",totalMaterialCost:"",forSale:!1,dateSold:"",price:"",storeSoldAt:"",status:"",technique:"",dimensions:"",tags:"",sold:!1,productUrl:"",notes:"",isOpen:!0,redirectPI:!1,saleOptions:!1,public:!1,avUrl:"#"}}componentDidMount(){console.log("mounted")}render(){return this.state.redirectPI?i.createElement(A,{to:"/ProjectIndex"}):i.createElement(Oe,{onSubmit:this.handleSubmit},i.createElement(De,null,"Enter a New Project"),i.createElement("div",null,i.createElement(He,{src:this.state.avUrl,alt:"Add A Photo",width:"150",height:"150",rounded:!0}),i.createElement($e,{encType:"multipart/form-data"},i.createElement("input",{id:"file-input",type:"file"}),i.createElement(Ve,{onClick:this.imgSubmit,type:"button"},"Upload Image"))),i.createElement(T,{form:!0},i.createElement(j,{md:6},i.createElement(w,null,i.createElement(N,{for:"projectName"},"Project Name"),i.createElement(U,{id:"projectName",type:"text",name:"projectName",value:this.state.projectName,placeholder:"Project Name",onChange:e=>this.setState({projectName:e.target.value})}))),i.createElement(j,{md:3},i.createElement(w,null,i.createElement("div",null,i.createElement(N,{htmlFor:"status"},"Status")),i.createElement("select",{id:"status",name:"status",placeholder:"Status",value:this.state.status,onChange:e=>this.setState({status:e.target.value})},i.createElement("option",{value:""}),i.createElement("option",{value:"inProgress"},"In Progress"),i.createElement("option",{value:"finished"},"Finished"),i.createElement("option",{selected:!0,value:"hibernating"},"Hibernating"))))),i.createElement(T,{form:!0},i.createElement(j,{md:3},i.createElement(w,null,i.createElement(N,{htmlFor:"medium"},"Medium"),i.createElement(U,{id:"medium",type:"text",name:"medium",value:this.state.medium,placeholder:"Medium",onChange:e=>this.setState({medium:e.target.value})}))),i.createElement(j,{md:3},i.createElement(w,null,i.createElement(N,{htmlFor:"technique"},"Technique"),i.createElement(U,{id:"technique",type:"text",name:"technique",value:this.state.technique,placeholder:"Technique",onChange:e=>this.setState({technique:e.target.value})}))),i.createElement(j,{md:3},i.createElement(w,null,i.createElement(N,{for:"dateStarted"},"Date Started"),i.createElement(U,{type:"date",name:"dateStarted",id:"dateStarted",placeholder:"Date Started",value:this.state.dateStarted,onChange:e=>this.setState({dateStarted:e.target.value})}))),i.createElement(j,{md:3},i.createElement(w,null,i.createElement(N,{for:"dateFinished"},"Date Finished"),i.createElement(U,{type:"date",name:"dateFinished",id:"dateFinished",placeholder:"Date Finished",value:this.state.dateFinished,onChange:e=>this.setState({dateFinished:e.target.value})})))),i.createElement(T,{form:!0},i.createElement(j,{md:3},i.createElement(w,null,i.createElement(N,{htmlFor:"dimensions"},"Dimensions"),i.createElement(U,{id:"dimensions",type:"text",name:"dimensions",value:this.state.dimensions,placeholder:"Dimensions",onChange:e=>this.setState({dimensions:e.target.value})}))),i.createElement(j,{md:5},i.createElement(w,null,i.createElement(N,{htmlFor:"productUrl"},"Product URL"),i.createElement(U,{id:"productUrl",type:"text",name:"productUrl",value:this.state.productUrl,placeholder:"Product URL",onChange:e=>this.setState({productUrl:e.target.value})}))),i.createElement(j,{md:3},i.createElement(w,null,i.createElement(N,{htmlFor:"totalMaterialCost"},"Total Material Cost"),i.createElement("span",null,"$"),i.createElement(U,{id:"totalMaterialCost",type:"number",placeholder:"Total Material Cost",name:"totalMaterialCost",value:this.state.totalMaterialCost,onChange:e=>this.setState({totalMaterialCost:e.target.value})})))),i.createElement(T,{form:!0},i.createElement(j,{md:2},i.createElement(w,{check:!0},i.createElement(P,{type:"switch",label:"For Sale?",name:"forSale",id:"forSale",onChange:e=>this.setState({forSale:e.target.checked,saleOptions:!0})}))),1==this.state.saleOptions?i.createElement(i.Fragment,null,i.createElement(j,{md:2},i.createElement(w,{check:!0},i.createElement(P,{type:"switch",name:"sold",id:"sold",label:"Sold?",onChange:e=>this.setState({sold:e.target.checked})}))),i.createElement(j,{md:3},i.createElement(w,null,i.createElement(N,{for:"dateSold"},"Date Sold"),i.createElement(U,{type:"date",name:"dateSold",id:"dateSold",placeholder:"Date Sold",value:this.state.dateSold,onChange:e=>this.setState({dateSold:e.target.value})}))),i.createElement(j,{md:2},i.createElement(w,null,i.createElement(N,{htmlFor:"price"},"Price"),i.createElement(U,{id:"price",type:"number",placeholder:"Price",name:"price",value:this.state.price,onChange:e=>this.setState({price:e.target.value})}))),i.createElement(j,{md:3},i.createElement(w,null,i.createElement(N,{htmlFor:"storeSoldAt"},"Store Sold At"),i.createElement(U,{id:"storeSoldAt",type:"text",name:"storeSoldAt",value:this.state.storeSoldAt,placeholder:"Store Sold At",onChange:e=>this.setState({storeSoldAt:e.target.value})}))," ")):null),i.createElement(T,{form:!0},i.createElement(j,{md:2},i.createElement(w,{check:!0},i.createElement(P,{type:"switch",name:"public",id:"public",label:"Public?",onChange:e=>this.setState({public:e.target.checked})})))),i.createElement(w,null,i.createElement(N,{htmlFor:"notes"},"Notes"),i.createElement(U,{id:"notes",type:"textarea",name:"notes",value:this.state.notes,placeholder:"Notes",onChange:e=>this.setState({notes:e.target.value})})),i.createElement(Le,null,i.createElement(ze,{type:"submit"},"Save"),i.createElement(h,{to:"/ProjectIndex"},i.createElement(qe,null,"Cancel"))))}}const Re=s.h1`
text-align: center;
width: 50%;
margin: auto;
font-family: 'Tempus Sans ITC';
color: #b820d1;
margin-bottom: 40px;

`,Be=s(x)`
margin: auto;
width: 50%;
margin-top: 50px;
padding-left: 70px;
padding-top: 70px;
padding-bottom: 70px;
background-color: #f8f8f8;
border: #5e4ac7 1px solid;
`,Je=s.div`
margin: auto;
width: 50%;
text-align: center;
margin-top: 20px;
`,Qe=s(u)`
margin-right: 10px;
background-color: #5e4ac7;
color: #f6a73f;

`,Ge=s(u)`
margin-right: 10px;
background-color: #5e4ac7;
color: #f6a73f;
`;class Ze extends i.Component{constructor(e){super(e),this.handleSubmit=e=>{e.preventDefault(),this.state.materialName?fetch(`${H}/materials/create`,{method:"POST",body:JSON.stringify({materials:this.state}),headers:new Headers({"Content-Type":"application/json",Authorization:this.props.token})}).then((e=>e.json())).then((e=>{console.log(e),this.setState({materialName:"",quantity:"",costPerItem:"",color:"",size:"",source:"",storageLocation:"",description:"",notes:"",redirectMI:!0})})):alert("Please enter the name of your material.")},this.state={materialName:"",quantity:"",costPerItem:"",color:"",size:"",source:"",storageLocation:"",description:"",notes:"",redirectMI:!1}}render(){return this.state.redirectMI?i.createElement(A,{to:"/MaterialIndex"}):i.createElement(Be,{onSubmit:this.handleSubmit},i.createElement(Re,null,"Enter a New Material"),i.createElement(j,{md:5},i.createElement(w,null,i.createElement(N,{for:"materialName"},"Material Name"),i.createElement(U,{id:"materialName",type:"text",name:"materialName",value:this.state.materialName,placeholder:"Material Name",onChange:e=>this.setState({materialName:e.target.value})}))),i.createElement(T,{form:!0},i.createElement(j,{md:2},i.createElement(w,null,i.createElement(N,{htmlFor:"quantity"},"Quantity"),i.createElement(U,{id:"quantity",type:"number",name:"quantity",value:this.state.quantity,placeholder:"Quantity",onChange:e=>this.setState({quantity:e.target.value})}))),i.createElement(j,{md:5},i.createElement(w,null,i.createElement(N,{htmlFor:"color"},"Color"),i.createElement(U,{id:"color",type:"text",name:"color",value:this.state.color,placeholder:"Color",onChange:e=>this.setState({color:e.target.value})}))),i.createElement(j,{md:2},i.createElement(w,null,i.createElement(N,{htmlFor:"costPerItem"},"Cost per Item"),i.createElement(U,{id:"costPerItem",type:"text",name:"costPerItem",value:this.state.costPerItem,placeholder:"Cost per Item",onChange:e=>this.setState({costPerItem:e.target.value})}))),i.createElement(j,{md:2},i.createElement(w,null,i.createElement(N,{htmlFor:"size"},"Size"),i.createElement(U,{id:"size",type:"text",name:"size",value:this.state.size,placeholder:"Size",onChange:e=>this.setState({size:e.target.value})})))),i.createElement(T,{form:!0},i.createElement(j,{md:3},i.createElement(w,null,i.createElement(N,{htmlFor:"source"},"Source"),i.createElement(U,{id:"source",type:"text",name:"source",value:this.state.source,placeholder:"Source",onChange:e=>this.setState({source:e.target.value})}))),i.createElement(j,{md:3},i.createElement(w,null,i.createElement(N,{htmlFor:"storageLocation"},"Storage Location"),i.createElement(U,{id:"storageLocation",type:"text",name:"storageLocation",value:this.state.storageLocation,placeholder:"Storage Location",onChange:e=>this.setState({storageLocation:e.target.value})}))),i.createElement(j,{md:5},i.createElement(w,null,i.createElement(N,{htmlFor:"description"},"Description"),i.createElement(U,{id:"description",type:"text",name:"description",value:this.state.description,placeholder:"Description",onChange:e=>this.setState({description:e.target.value})}))),i.createElement(j,{md:5},i.createElement(w,null,i.createElement(N,{htmlFor:"notes"},"Notes"),i.createElement(U,{id:"notes",type:"textarea",name:"notes",value:this.state.notes,placeholder:"Notes",onChange:e=>this.setState({notes:e.target.value})})))),i.createElement(Je,null,i.createElement(Qe,{type:"submit"},"Save"),i.createElement(h,{to:"/MaterialIndex"},i.createElement(Ge,null,"Cancel"))))}}const We=s(b.Header)`
text-align: center;
margin: 20px;
font-family: 'Tempus Sans ITC';
color: #b820d1;
font-size: 40px;
`,Ye=s(F)`
margin-left: 25px;
`,Ke=s(b.Text)`
font-size: 25px;
`,Xe=s.div`
width: 100vw;
`,et=s(I)`
background-color: #5e4ac7;
color: #f6a73f;
margin-right: 2em;

`,tt=s(I)`
background-color: #5e4ac7;
color: #f6a73f;
`,at=s.form`
margin-left: 15px;
`,rt=s.button`
margin-top: 15px;
margin-left: 10px;
background-color: #5e4ac7;
color: #f6a73f;
padding-top: 7px;
padding-bottom: 7px;
padding-right: 15px;
padding-left: 15px;
border-radius: 7%;
`;class nt extends i.Component{constructor(e){super(e),this.handleSubmit=async e=>{e.preventDefault();const t=await fetch(`${H}/user/cloudsign`,{method:"GET",headers:{Authorization:this.props.token}}),{sig:a,ts:r}=await t.json(),n=document.getElementById("file-input").files[0],l=new FormData;l.append("file",n),l.append("upload_preset","yawnhulb"),l.append("api_key","776498227515992"),l.append("signature",a),l.append("timestamp",r);const s=await(await fetch("https://api.cloudinary.com/v1_1/dx06fkupm/image/upload",{method:"POST",body:l})).json();this.setState({avUrl:s.secure_url}),console.log(s),await(await fetch(`${H}/user/imageset`,{method:"PUT",headers:{Authorization:this.props.token,"Content-Type":"application/json"},body:JSON.stringify({url:s.secure_url})})).json()},this.deleteUser=e=>{fetch(`${H}/user/delete/${e.id}`,{method:"DELETE",headers:new Headers({"Content-Type":"application/json",Authorization:this.props.token})})},this.state={avUrl:"#"}}userMapper(){return this.props.user.map(((e,t)=>i.createElement(i.Fragment,null,i.createElement(b,{key:t},i.createElement(We,null,"My Account"),i.createElement(D,null,i.createElement(O,{xs:6,md:4},i.createElement(Ye,{src:e.photo,alt:"user photo",width:"150",height:"150",rounded:!0}),i.createElement(at,{encType:"multipart/form-data",onSubmit:this.handleSubmit},i.createElement("input",{id:"file-input",type:"file"}),i.createElement(rt,null,"Upload Image")))),i.createElement(b.Body,null,i.createElement(Ke,null,"First Name: ",e.firstName),i.createElement(Ke,null,"Last Name: ",e.lastName),i.createElement(Ke,null,"E-mail: ",e.email),i.createElement(Ke,null,"About Me: ",e.aboutMe),i.createElement(et,{onClick:()=>{this.props.editUpdateUser(e),this.props.updateOn()}},"Update"),i.createElement(tt,{onClick:()=>{this.deleteUser(e)}},"Delete"))))))}render(){return i.createElement(Xe,null,this.userMapper())}}const lt=s.div`
width: 100%;
background-color: #f8f8f8;
margin-top: 50px;
padding-bottom: 90px;
border: #5e4ac7 1px solid;
`,st=s.div`
width: 50%;
margin: auto;
`,ot=s.h1`
text-align: center;
margin: 40px;
font-family: 'Tempus Sans ITC';
color: #b820d1;
`,it=s(N)`
margin-left: 18px;
`,ct=s(x)`
margin-top: 100px;
`,mt=s.div`
margin: auto;
width: 50%;
text-align: center;
`,dt=s(u)`
margin-right: 20px;
background-color: #5e4ac7;
color: #f6a73f;
`,pt=s(u)`
background-color: #5e4ac7;
color: #f6a73f;
`;class ht extends i.Component{constructor(e){super(e),this.handleSubmit=e=>{e.preventDefault(),fetch(`${H}/user/update/${this.props.userToUpdate.id}`,{method:"PUT",body:JSON.stringify({user:{email:this.state.editEmail,firstName:this.state.editFirstName,lastName:this.state.editLastName,aboutMe:this.state.editAboutMe}}),headers:new Headers({"Content-Type":"application/json",Authorization:this.props.token})}).then((e=>{console.log(e),this.props.updateOff(),this.props.fetchUser()}))},this.state={editEmail:this.props.userToUpdate.email,editFirstName:this.props.userToUpdate.firstName,editLastName:this.props.userToUpdate.lastName,editAboutMe:this.props.userToUpdate.aboutMe}}render(){return i.createElement(lt,null,i.createElement(ct,{onSubmit:this.handleSubmit},i.createElement(ot,null,"Edit Account Information"),i.createElement(st,null,i.createElement(w,null,i.createElement(it,{for:"email"},"Email"),i.createElement(j,null,i.createElement(U,{id:"email",type:"text",name:"email",value:this.state.editEmail,placeholder:"Email",onChange:e=>this.setState({editEmail:e.target.value})}))),i.createElement(w,null,i.createElement(it,{for:"firstName"},"First Name"),i.createElement(j,null,i.createElement(U,{id:"firstName",type:"text",name:"firstName",value:this.state.editFirstName,placeholder:"First Name",onChange:e=>this.setState({editFirstName:e.target.value})}))),i.createElement(w,null,i.createElement(it,{for:"lastName"},"Last Name"),i.createElement(j,null,i.createElement(U,{id:"lastName",type:"text",name:"lastName",value:this.state.editLastName,placeholder:"Last Name",onChange:e=>this.setState({editLastName:e.target.value})}))),i.createElement(w,null,i.createElement(it,{for:"aboutMe"},"About Me"),i.createElement(j,null,i.createElement(U,{id:"aboutMe",type:"textarea",name:"aboutMe",value:this.state.editAboutMe,placeholder:"About Me",onChange:e=>this.setState({editAboutMe:e.target.value})}))),i.createElement(mt,null,i.createElement(dt,{type:"submit"},"Save"),i.createElement(pt,{onClick:()=>this.props.updateOff()},"Cancel")))))}}class ut extends i.Component{constructor(e){super(e),this.fetchUser=()=>{fetch(`${H}/user/mine`,{method:"GET",headers:new Headers({"Content-Type":"application/json",Authorization:this.props.token})}).then((e=>e.json())).then((e=>{this.setState({user:e}),console.log(e)}))},this.editUpdateUser=e=>{this.setState({userToUpdate:e}),console.log(e)},this.updateOn=()=>{this.setState({updateActive:!0})},this.updateOff=()=>{this.setState({updateActive:!1})},this.state={user:[],updateActive:!1,isComponentVisible:!1,isActive:!1,userToUpdate:{email:"",firstName:"",lastName:"",aboutMe:"",photo:"",id:1/0}}}componentDidMount(){console.log("mounted"),this.fetchUser()}render(){return i.createElement(E,null,i.createElement(T,null,this.state.updateActive?i.createElement(ht,{userToUpdate:this.state.userToUpdate,updateOff:this.updateOff,token:this.props.token,fetchUser:this.fetchUser}):i.createElement(nt,{user:this.state.user,editUpdateUser:this.editUpdateUser,updateOn:this.updateOn,fetchUser:this.fetchUser,token:this.props.token})))}}const Et=s.h1`
text-align: center;
margin: 20px;
font-family: 'Tempus Sans ITC';
color: #b820d1;
`,gt=s.div`
width: 100vw;
`,ft=s.td`
color: #b820d1;
`,St=s.th`
color: #5e4ac7;
`;class bt extends i.Component{constructor(e){super(e),this.deleteUser=e=>{fetch(`${H}/user/delete/${e.id}`,{method:"DELETE",headers:new Headers({"Content-Type":"application/json",Authorization:this.props.token})})}}userMapper(){return this.props.user.map(((e,t)=>i.createElement("tr",{key:t},i.createElement(ft,null,e.email),i.createElement(ft,null,e.firstName),i.createElement(ft,null,e.lastName),i.createElement(ft,null,e.aboutMe))))}render(){return i.createElement(gt,null,i.createElement(Et,null,"Admin Dashboard"),i.createElement("hr",{style:{backgroundColor:"#5e4ac7"}}),i.createElement(M,{striped:!0},i.createElement("thead",null,i.createElement("tr",null,i.createElement(St,null,"Email"),i.createElement(St,null,"First Name"),i.createElement(St,null,"Last Name"),i.createElement(St,null,"About Me"))),i.createElement("tbody",null,this.userMapper())))}}class vt extends i.Component{constructor(e){super(e),this.fetchUser=()=>{fetch(`${H}/user/all`,{method:"GET",headers:new Headers({"Content-Type":"application/json",Authorization:this.props.token})}).then((e=>e.json())).then((e=>{this.setState({user:e}),console.log(e)}))},this.editUpdateUser=e=>{this.setState({userToUpdate:e}),console.log(e)},this.updateOn=()=>{this.setState({updateActive:!0})},this.updateOff=()=>{this.setState({updateActive:!1})},this.state={user:[],updateActive:!1,isComponentVisible:!1,isActive:!1,userToUpdate:{email:"",firstName:"",lastName:"",aboutMe:"",id:1/0}}}componentDidMount(){console.log("mounted"),this.fetchUser()}render(){return i.createElement(E,null,i.createElement(T,null,i.createElement(bt,{user:this.state.user,editUpdateUser:this.editUpdateUser,updateOn:this.updateOn,fetchUser:this.fetchUser,token:this.props.token})))}}const yt=s(b)`
width: 18rem; 
margin: 20px; 
border: #b820d1 1px solid;
`,Ct=s(u)`
background-color: #5e4ac7;
color: #f6a73f;
margin-left: 2em;
`,xt=s.h1`
text-align: center;
margin: 20px;
font-family: 'Tempus Sans ITC';
color: #b820d1;
`;class kt extends i.Component{constructor(e){super(e)}projectsMapper(){return this.props.projects.sort(((e,t)=>t.createdAt.localeCompare(e.createdAt))).map(((e,t)=>i.createElement(i.Fragment,null,e.public&&i.createElement(i.Fragment,null,i.createElement(yt,{className:"p-3 col-2",key:t},i.createElement(b.Img,{variant:"top",height:"250",src:e.pictureUrl1}),i.createElement(b.Body,null,i.createElement(b.Title,null,e.projectName)),i.createElement(v,{className:"list-group-flush"},i.createElement(y,null,i.createElement("b",null,"Date Started:")," ",e.dateStarted),i.createElement(y,null,i.createElement("b",null,"Date Finished:")," ",e.dateFinished),i.createElement(y,null,i.createElement("b",null,"Medium:")," ",e.medium),i.createElement(y,null,i.createElement("b",null,"Maker:")," ",e.user.firstName)),i.createElement(b.Body,null,i.createElement(b.Link,null," ",i.createElement(Ct,{onClick:()=>{this.props.viewProjects(e),this.props.updateOn()}},"View Project"))))))))}render(){return i.createElement(i.Fragment,null,i.createElement(xt,null,"Latest Projects"),i.createElement("hr",{style:{backgroundColor:"#5e4ac7"}}),i.createElement(C,{className:"col d-flex align-content-start flex-wrap",style:{marginTop:"2rem",marginRight:"20px",marginLeft:"20px"}},this.projectsMapper()))}}const Tt=s.h1`
text-align: center;
width: 50%;
margin: auto;
font-family: 'Tempus Sans ITC';
color: #b820d1;
margin-bottom: 40px;

`,jt=s.div`
margin-top: 30px;
`,wt=s.div`
margin: auto;
width: 50%;
text-align: center;
margin-top: 20px;
`;s(u)`
margin-right: 10px;
background-color: #5e4ac7;
color: #f6a73f;

`;const Nt=s(u)`
margin-right: 10px;
background-color: #5e4ac7;
color: #f6a73f;
`,Ut=s.div`

margin: auto;
width: 50%;
`,Pt=s(k)`
margin-bottom: 50px;
display: block;
margin-left: auto;
margin-right: auto;
flex: 1;
width: 25%;
// height: 350px;
resizeMode: 'contain';
`;class Mt extends i.Component{constructor(e){super(e),this.state={avUrl:"#"}}render(){return i.createElement(jt,null,i.createElement(Tt,null,"View Project"),this.props.projectsToView.map((e=>i.createElement(i.Fragment,null,i.createElement("div",null,i.createElement(Ut,null,i.createElement(Pt,{src:e.pictureUrl1}))),i.createElement("div",null,i.createElement(L,{bordered:!0,column:{xxl:4,xl:3,lg:3,md:3,sm:2,xs:1}},i.createElement(L.Item,{label:"Project Name"},e.projectName),i.createElement(L.Item,{label:"Status"},e.status),i.createElement(L.Item,{label:"Medium"},e.medium),i.createElement(L.Item,{label:"Technique"},e.technique),i.createElement(L.Item,{label:"Date Started"},e.dateStarted),i.createElement(L.Item,{label:"Date Finished"},e.dateFinished),i.createElement(L.Item,{label:"Dimensions"},e.dimensions),i.createElement(L.Item,{label:"Product URL"},e.productUrl),i.createElement(L.Item,{label:"Total Material Cost"},e.totalMaterialCost),i.createElement(L.Item,{label:"Notes"},e.notes)),i.createElement(wt,null,i.createElement(Nt,{type:"button",onClick:this.props.updateOff},"Cancel")))))))}}class Ft extends i.Component{constructor(e){super(e),this.fetchProjects=()=>{fetch(`${H}/projects/`,{method:"GET",headers:new Headers({"Content-Type":"application/json",Authorization:this.props.token})}).then((e=>e.json())).then((e=>{this.setState({projects:e}),console.log(e)}))},this.viewProjects=e=>{this.setState({projectsToView:e}),console.log(e)},this.updateOn=()=>{this.setState({updateActive:!0})},this.updateOff=()=>{this.setState({updateActive:!1})},this.handleHide=()=>{this.setState({isActive:!0})},this.state={projects:[],updateActive:!1,projectsToView:[],isComponentVisible:!1,isActive:!1}}componentDidMount(){this.fetchProjects()}render(){return i.createElement("div",null,this.state.updateActive?i.createElement(Mt,{projectsToView:this.state.projectsToView,updateOff:this.updateOff,token:this.props.token,fetchProjects:this.fetchProjects}):i.createElement(kt,{projects:this.state.projects,viewProjects:this.viewProjects,updateOn:this.updateOn,fetchProjects:this.fetchProjects,token:this.props.token}))}}class At extends i.Component{constructor(e){super(e),this.setViewToggle=()=>{this.setState({viewToggle:!0})},this.state={viewToggle:!1}}render(){return i.createElement(g,null,i.createElement(z,{sticky:"top",id:"navbar",expand:"lg"},i.createElement(z.Brand,{id:"navbrand",href:"/"},"MakerNote"),i.createElement(z.Toggle,{"aria-controls":"basic-navbar-nav"}),i.createElement(z.Collapse,{id:"basic-navbar-nav"},i.createElement(q,null,i.createElement(q.Link,{onClick:this.setViewToggle,className:"navlink"},i.createElement(h,{className:"link",to:"/ProjectIndex"},"My Projects")),i.createElement(q.Link,{onClick:this.setViewToggle,className:"navlink"},i.createElement(h,{className:"link",to:"/ProjectCreate"},"New Project")),i.createElement(q.Link,{onClick:this.setViewToggle,className:"navlink"},i.createElement(h,{className:"link",to:"/MaterialIndex"},"My Materials")),i.createElement(q.Link,{onClick:this.setViewToggle,className:"navlink"},i.createElement(h,{className:"link",to:"/MaterialCreate"},"New Material")),i.createElement(q.Link,{onClick:this.setViewToggle,className:"navlink"},i.createElement(h,{className:"link",to:"/UserIndex"},"My Account")),i.createElement(q.Link,{onClick:this.setViewToggle,className:"navlink"}," ","true"===this.props.admin?i.createElement(h,{className:"link",to:"/AdUserIndex"},"Admin Dashboard"):null)),i.createElement(q.Link,{id:"logoutnav",className:"ml-auto"},i.createElement(I,{id:"logoutbutton",onClick:this.props.clickLogout},"Logout")))),"/"!=window.location.pathname?null:i.createElement(Ft,{token:this.props.token}),i.createElement("div",null,i.createElement(f,null,i.createElement(S,{exact:!0,path:"/ProjectIndex"},i.createElement(ve,{token:this.props.token})),i.createElement(S,{exact:!0,path:"/MaterialIndex"},i.createElement(Ie,{token:this.props.token})),i.createElement(S,{exact:!0,path:"/ProjectCreate"},i.createElement(_e,{token:this.props.token})),i.createElement(S,{exact:!0,path:"/MaterialCreate"},i.createElement(Ze,{token:this.props.token})),i.createElement(S,{exact:!0,path:"/UserIndex"},i.createElement(ut,{token:this.props.token})),i.createElement(S,{exact:!0,path:"/AdUserIndex"},i.createElement(vt,{token:this.props.token})))))}}class It extends i.Component{constructor(){super(...arguments),this.state={sessionToken:"",sessionAdmin:"",stateChange:!1},this.updateToken=(e,t)=>{localStorage.setItem("token",e),localStorage.setItem("admin",t),this.setState({sessionToken:e}),this.setState({sessionAdmin:t}),console.log(this.state.sessionToken)},this.clearToken=()=>{localStorage.clear(),this.setState({sessionToken:""}),window.location.href="/"},this.protectedViews=()=>this.state.sessionToken===localStorage.getItem("token")?i.createElement(At,{token:this.state.sessionToken,admin:localStorage.getItem("admin"),clickLogout:this.clearToken}):i.createElement(se,{updateToken:this.updateToken.bind(this)})}componentDidMount(){console.log("hello"),localStorage.getItem("token")&&this.setState({sessionToken:localStorage.getItem("token")})}render(){return i.createElement("div",null,this.protectedViews())}}$.render(i.createElement(i.StrictMode,null,i.createElement(g,null,i.createElement(It,null))),document.getElementById("root"));
