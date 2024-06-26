import{V as d,U as m,D as f}from"./entry.6e39450e.js";import{J as w,c as h,u as n}from"./index.aad0ddd6.js";const y=d(),c=y.public.apiBaseUrl,i=new w,k=async(e,t)=>{try{h();const a=i.serialize({stuff:{type:"token",email:e,password:t}}),r=await n(`${c}/login`,{headers:{Accept:"application/vnd.api+json","Content-type":"application/vnd.api+json"},method:"POST",body:a},"$sfSBpgpvJ4");if(r?.data?.value?.access_token){const o=r.data.value.access_token;localStorage.setItem("authToken",o)}else throw new Error("Invalid credentials!")}catch(a){throw new Error(a.message)}},v=async(e,t,a,r)=>{try{h();const o=i.serialize({stuff:{type:"users",name:e,email:t,password:a,password_confirmation:r}}),{data:g,error:l}=await n(`${c}/register`,{method:"POST",body:o},"$3wUTDNeRrn");if(l.value){const p=l.value.data.message;throw new Error(p)}const{access_token:u}=g.value;return localStorage.setItem("authToken",u),u}catch(o){throw new Error(o.message)}},S=async()=>{try{const e=localStorage.getItem("authToken");await n(`${c}/logout`,{method:"POST",headers:{Authorization:`Bearer ${e}`}},"$y1mDe3UnHV"),localStorage.removeItem("authToken")}catch(e){throw new Error(e.message)}},T=async()=>{const e=localStorage.getItem("authToken"),t=await n(`${c}/me?include=roles`,{method:"GET",headers:{Authorization:`Bearer ${e}`}},"$W69d7eEhqt");return i.deserialize(t.data.value)},$=async(e,t)=>{const a=localStorage.getItem("authToken");try{return await n(`${c}/users/${e}`,{method:"PATCH",headers:{Authorization:`Bearer ${a}`,Accept:"application/vnd.api+json","Content-type":"application/vnd.api+json"},body:t},"$jEkGOgCRuv")}catch(r){m("error",r.message)}},s={login:k,register:v,logout:S,getProfile:T,updateProfile:$},I=f("AuthStore",{state:()=>({currentUser:null,userRole:null}),actions:{async login({email:e,password:t}){await s.login(e,t),this.getProfile()},async register({name:e,email:t,password:a,passwordConfirm:r}){await s.register(e,t,a,r),this.getProfile()},async logout(){await s.logout()},checkIsAuthenticated(){return!!localStorage.getItem("authToken")},async getProfile(){this.currentUser=await s.getProfile(),this.userRole=this.currentUser.roles[0].name},async updateProfile(e,t){const a=await s.updateProfile(e,t);return await this.getProfile(),a}}});export{I as u};
