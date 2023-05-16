import{aa as e,b as a,a as l,r as t,h as r,Y as o,j as d,w as u,i as n,f as i,aj as s,o as p,y as c,C as m,l as y,ag as v,am as f,q as b,t as _,D as h,E as g,ae as C,_ as I}from"./index-dedb117b.js";const k={class:"app-container"},w={class:"toolbar-wrapper"},x={class:"card-container"},N=a({name:"ElementPlus"}),T=I(a({...N,setup(a){const I=l(!1),N=l(!1),T=l(null),V=t({typeId:"",typeName:""}),$=t({typeName:[{required:!0,trigger:"blur",message:"请输入车型名称"}]}),D=()=>{var a;null==(a=T.value)||a.validate((a=>{if(!a)return!1;var l;void 0===z.value?(l=V,e({url:"TbCarType",method:"post",data:l})).then((e=>{e.data?(B(),j(),N.value=!1,g.success("新增成功")):g.error("新增失败")})):function(a){return e({url:`TbCarType/${a.typeId}`,method:"put",data:a})}(V).then((e=>{e.data?(B(),j(),N.value=!1,g.success("修改成功")):g.error("修改失败")}))}))},j=()=>{z.value=void 0,V.typeName="",V.typeId=""},q=a=>{a.typeId?C.confirm(`您确定删除【${a.typeName}】吗？`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{var l;(l=a.typeId,e({url:`TbCarType/${l}`,method:"delete"})).then((()=>{g.success("删除成功"),B()}))})):g.error("无法删除该车型！")},z=l(void 0),E=l([]),B=async()=>{I.value=!0;try{const a=await function(a=1,l=9999){return e({url:`TbCarType/getList/${a}/${l}`,method:"get"})}();E.value=a.data}catch(a){console.error(a),E.value=[]}finally{I.value=!1}};return B(),(e,a)=>{const l=i("el-button"),t=i("el-tooltip"),g=i("el-table-column"),C=i("el-table"),U=i("el-card"),L=i("el-text"),P=i("el-form-item"),R=i("el-input"),S=i("el-form"),Y=i("el-dialog"),A=s("loading");return p(),r("div",k,[o((p(),d(U,{shadow:"never"},{default:u((()=>[c("div",w,[c("div",null,[n(l,{type:"primary",icon:y(v),onClick:a[0]||(a[0]=e=>N.value=!0)},{default:u((()=>[m("新增车型")])),_:1},8,["icon"])]),c("div",null,[n(t,{content:"刷新表格"},{default:u((()=>[n(l,{type:"primary",icon:y(f),circle:"",onClick:B},null,8,["icon"])])),_:1})])]),n(C,{data:E.value,style:{width:"100%"},"row-key":"id",border:""},{default:u((()=>[n(g,{prop:"typeId",label:"车型ID"}),n(g,{prop:"typeName",label:"车型名称"}),n(g,{fixed:"right",label:"操作",width:"170",align:"center"},{default:u((e=>[n(l,{type:"primary",text:"",bg:"",size:"small",icon:"Edit",onClick:a=>{return l=e.row,z.value=l.typeId,V.typeName=l.typeName,V.typeId=l.typeId,void(N.value=!0);var l}},{default:u((()=>[m("修改")])),_:2},1032,["onClick"]),n(l,{type:"danger",text:"",bg:"",size:"small",icon:"Delete",onClick:a=>q(e.row)},{default:u((()=>[m("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])])),_:1})),[[A,I.value]]),n(Y,{modelValue:N.value,"onUpdate:modelValue":a[4]||(a[4]=e=>N.value=e),title:void 0===z.value?"新增车型":"修改车型",onClose:j},{footer:u((()=>[n(l,{onClick:a[3]||(a[3]=e=>N.value=!1)},{default:u((()=>[m("取消")])),_:1}),n(l,{type:"primary",onClick:D},{default:u((()=>[m("确认")])),_:1})])),default:u((()=>[n(S,{model:V,ref_key:"formRef",ref:T,rules:$,"label-position":"left","label-width":"100px",size:"default",onSubmit:a[2]||(a[2]=b((()=>{}),["prevent"]))},{default:u((()=>[c("div",x,[z.value?(p(),d(P,{key:0,label:"车型 ID"},{default:u((()=>[n(L,null,{default:u((()=>[m(_(z.value),1)])),_:1})])),_:1})):h("",!0),n(P,{label:"车型名称",prop:"typeName",class:"required"},{default:u((()=>[n(R,{modelValue:V.typeName,"onUpdate:modelValue":a[1]||(a[1]=e=>V.typeName=e),type:"text",clearable:"",placeholder:"请输入车型名称"},null,8,["modelValue"])])),_:1})])])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}}),[["__scopeId","data-v-4493a9d2"]]);export{T as default};