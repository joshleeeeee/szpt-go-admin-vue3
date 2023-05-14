import{aa as e,E as a,b as l,ab as t,r as o,W as r,ac as i,ad as d,_ as s,ae as u,f as n,o as p,j as c,w as m,i as f,C as g,t as y,D as h,q as b,af as k,a as _,ag as v,ah as V,ai as w,y as x,h as D,p as C,F as S,n as T,Y as $,aj as U,l as N,ak as P,al as F,am as q,an as I,ao as z}from"./index-a8954f4c.js";import{u as A}from"./usePagination-13052d35.js";import{g as j}from"./index-04550173.js";const E=s(l({components:{QuillEditor:t},props:[],setup(){const l=o({uploadApi:"/api/v1/upload",dialogVisible:!1,isEdit:!1,formData:{goodName:"",cate:[],keyword:"",goodInfo:"",otPrice:"",price:"",vipPrice:"",stock:0,unitName:"",isHot:!0,isShow:!0,isNew:!0,picture:"",description:""},rules:{goodName:[{required:!0,message:"请输入商品名称"}],cate:[{required:!0,message:"请选择商品分类"}],keyword:[{required:!0,message:"请输入商品关键词"}],goodInfo:[{required:!0,message:"请输入商品信息"}],otPrice:[{required:!0,message:"字段值不可为空"},{pattern:/^[-]?\d+(\.\d+)?$/,trigger:["blur","change"],message:"请输入商品原价"}],price:[{required:!0,message:"请输入商品原价"},{pattern:/^[-]?\d+(\.\d+)?$/,trigger:["blur","change"],message:"请输入商品现价"}],vipPrice:[{required:!0,message:"字段值不可为空"},{pattern:/^[-]?\d+(\.\d+)?$/,trigger:["blur","change"],message:"请输入会员价"}],stock:[{required:!0,message:"字段值不可为空"},{pattern:/^[-]?\d+(\.\d+)?$/,trigger:["blur","change"],message:""}],unitName:[{required:!0,message:"字段值不可为空"},{pattern:/^[一-龥]+$/,trigger:["blur","change"],message:"请输入库存单位(如：台)"}],picture:[{required:!1,message:"请上传商品图片"}],description:[{required:!0,message:"请输入商品详情"}]},cateOptions:[],pictureFileList:[],pictureUploadHeaders:{},pictureUploadData:{}}),t=r(),s=()=>{t.proxy.$refs.vForm.resetFields(),l.isEdit=!1,l.dialogVisible=!1};!async function(){const e=await j();l.cateOptions=e.data}();const n=["image/jpeg","image/png","image/jpg","image/gif"];return{...i(l),submitForm:()=>{t.proxy.$refs.vForm.validate((o=>{if(!o)return;l.formData.picture=l.pictureFileList.map((e=>{var a;return(null==(a=e.response)?void 0:a.data)?e.response.data:e.name})).join(",");const r={...l.formData};var i;r.cateId=r.cate[1],r.cate=void 0,l.isEdit?function(a){return e({url:"TbGood",method:"put",data:a})}(r).then((()=>{a.success("修改成功"),s(),t.proxy.$emit("afterSuccess")})):(i=r,i.isDel=!1,i.sales=0,e({url:"TbGood",method:"post",data:i})).then((()=>{a.success("新增成功"),s(),t.proxy.$emit("afterSuccess")}))}))},resetFormConfirm:async()=>{"confirm"===await u.confirm("确认取消吗？取消后您所编辑过内容将不会保存","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"})&&s()},resetForm:s,beforeImageUpload:e=>{const{type:l,size:t}=e;return n.includes(l)?!(t>2097152)||(a.error("图片必须小于2MB"),!1):(a.error("图片格式不支持！"),!1)},Plus:d}}}),[["render",function(e,a,l,t,o,r){const i=n("el-text"),d=n("el-form-item"),s=n("el-input"),u=n("el-cascader"),k=n("el-col"),_=n("el-row"),v=n("el-input-number"),V=n("el-switch"),w=n("Plus"),x=n("el-icon"),D=n("el-upload"),C=n("QuillEditor"),S=n("el-form"),T=n("el-button"),$=n("el-dialog");return p(),c($,{modelValue:e.dialogVisible,"onUpdate:modelValue":a[15]||(a[15]=a=>e.dialogVisible=a),"before-close":e.resetFormConfirm,title:e.isEdit?"修改商品":"新增商品",width:"1024px"},{footer:m((()=>[f(T,{onClick:e.resetFormConfirm},{default:m((()=>[g("取消")])),_:1},8,["onClick"]),f(T,{type:"primary",onClick:e.submitForm},{default:m((()=>[g("确认"+y(e.isEdit?"修改":"新增"),1)])),_:1},8,["onClick"])])),default:m((()=>[f(S,{model:e.formData,ref:"vForm",rules:e.rules,"label-position":"left","label-width":"80px",size:"default",onSubmit:a[14]||(a[14]=b((()=>{}),["prevent"]))},{default:m((()=>[e.formData.id?(p(),c(d,{key:0,label:"商品ID"},{default:m((()=>[f(i,null,{default:m((()=>[g(y(e.formData.id),1)])),_:1})])),_:1})):h("",!0),f(d,{label:"商品名称",prop:"goodName",class:"required"},{default:m((()=>[f(s,{modelValue:e.formData.goodName,"onUpdate:modelValue":a[0]||(a[0]=a=>e.formData.goodName=a),type:"text",placeholder:"请输入商品名称",clearable:""},null,8,["modelValue"])])),_:1}),f(_,null,{default:m((()=>[f(k,{span:12,class:"grid-cell"},{default:m((()=>[f(d,{label:"商品分类",prop:"cate",class:"required"},{default:m((()=>[f(u,{modelValue:e.formData.cate,"onUpdate:modelValue":a[1]||(a[1]=a=>e.formData.cate=a),class:"full-width-input",options:e.cateOptions,clearable:"",filterable:"",props:{children:"categories",label:"name",value:"id"},placeholder:"请选择商品分类"},null,8,["modelValue","options"])])),_:1})])),_:1}),f(k,{offset:1,span:11,class:"grid-cell"},{default:m((()=>[f(d,{label:"商品关键词","label-width":"100px",prop:"keyword",class:"required"},{default:m((()=>[f(s,{modelValue:e.formData.keyword,"onUpdate:modelValue":a[2]||(a[2]=a=>e.formData.keyword=a),type:"text",placeholder:"请输入商品关键词(keyword)",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),f(d,{label:"商品简介",prop:"goodInfo",class:"required"},{default:m((()=>[f(s,{modelValue:e.formData.goodInfo,"onUpdate:modelValue":a[3]||(a[3]=a=>e.formData.goodInfo=a),type:"text",placeholder:"请输入商品简介",clearable:""},null,8,["modelValue"])])),_:1}),f(_,null,{default:m((()=>[f(k,{span:8,class:"grid-cell"},{default:m((()=>[f(d,{label:"原价",prop:"otPrice",class:"required"},{default:m((()=>[f(s,{modelValue:e.formData.otPrice,"onUpdate:modelValue":a[4]||(a[4]=a=>e.formData.otPrice=a),type:"number",placeholder:"请输入商品原价",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),f(k,{span:7,offset:1,class:"grid-cell"},{default:m((()=>[f(d,{label:"现价",prop:"price",class:"required"},{default:m((()=>[f(s,{modelValue:e.formData.price,"onUpdate:modelValue":a[5]||(a[5]=a=>e.formData.price=a),type:"number",placeholder:"请输入商品现价",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),f(k,{span:7,offset:1,class:"grid-cell"},{default:m((()=>[f(d,{label:"会员价",prop:"vipPrice",class:"required"},{default:m((()=>[f(s,{modelValue:e.formData.vipPrice,"onUpdate:modelValue":a[6]||(a[6]=a=>e.formData.vipPrice=a),type:"number",placeholder:"请输入会员价",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),f(_,null,{default:m((()=>[f(k,{span:5,class:"grid-cell"},{default:m((()=>[f(d,{label:"库存数",prop:"stock",class:"required"},{default:m((()=>[f(v,{modelValue:e.formData.stock,"onUpdate:modelValue":a[7]||(a[7]=a=>e.formData.stock=a),class:"full-width-input","controls-position":"right",min:0,max:1e11,precision:0,step:10},null,8,["modelValue"])])),_:1})])),_:1}),f(k,{span:6,class:"grid-cell",offset:1},{default:m((()=>[f(d,{label:"库存单位",prop:"unitName",class:"required"},{default:m((()=>[f(s,{modelValue:e.formData.unitName,"onUpdate:modelValue":a[8]||(a[8]=a=>e.formData.unitName=a),type:"text",placeholder:"请输入库存单位(如：台)",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),f(k,{span:3,class:"grid-cell",offset:1},{default:m((()=>[f(d,{label:"是否热门",prop:"isHot"},{default:m((()=>[f(V,{modelValue:e.formData.isHot,"onUpdate:modelValue":a[9]||(a[9]=a=>e.formData.isHot=a)},null,8,["modelValue"])])),_:1})])),_:1}),f(k,{span:3,class:"grid-cell",offset:1},{default:m((()=>[f(d,{label:"是否上架",prop:"isShow"},{default:m((()=>[f(V,{modelValue:e.formData.isShow,"onUpdate:modelValue":a[10]||(a[10]=a=>e.formData.isShow=a)},null,8,["modelValue"])])),_:1})])),_:1}),f(k,{span:3,class:"grid-cell",offset:1},{default:m((()=>[f(d,{label:"是否新品",prop:"isNew"},{default:m((()=>[f(V,{modelValue:e.formData.isNew,"onUpdate:modelValue":a[11]||(a[11]=a=>e.formData.isNew=a)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),f(d,{label:"商品图片",prop:"picture",class:"required"},{default:m((()=>[f(D,{action:e.uploadApi,"file-list":e.pictureFileList,"onUpdate:fileList":a[12]||(a[12]=a=>e.pictureFileList=a),"before-upload":e.beforeImageUpload,"list-type":"picture-card","show-file-list":"",limit:5},{default:m((()=>[f(x,null,{default:m((()=>[f(w)])),_:1})])),_:1},8,["action","file-list","before-upload"])])),_:1}),f(C,{contentType:"html",theme:"snow",content:e.formData.description,"onUpdate:content":a[13]||(a[13]=a=>e.formData.description=a),placeholder:"请输入商品详情"},null,8,["content"])])),_:1},8,["model","rules"])])),_:1},8,["modelValue","before-close","title"])}],["__scopeId","data-v-aaf155a6"]]),G=l({components:{Upload:k},props:[],setup(){const l=o({dialogVisible:!1,loading:!1,imgBase:"http://110.41.150.2:32976/image/",uploadApi:"/api/v1/upload",formData:[],inputValue:"test",isEditing:!1}),t=_([]),r=_([]),s=_(),u=()=>{var a,l;(l=null==(a=s.value)?void 0:a.id,e({url:`TbGood/${l}`,method:"get"})).then((e=>{r.value=e.data.skuTypes}))};return{...i(l),resetFormConfirm:()=>{l.dialogVisible=!1},CirclePlus:v,insertSkuType:()=>{r.value.push({id:"",name:""})},skuList:t,skuTypes:r,Plus:d,Delete:V,delSku:(l,t,o)=>{var i;o?function(a){return e({url:`TbSku/${a}`,method:"delete"})}(o).then((e=>{var o;e.data?(a.success("删除 Sku 成功"),null==(o=r.value[l].skus)||o.splice(t,1)):a.error("删除 Sku 失败")})):null==(i=r.value[l].skus)||i.splice(t,1)},addSku:(e,l)=>{var t,o;if(!e.id)return void a.error("请先确认商品规格类型");const i={id:"",name:"",picture:"",price:0,productId:(null==(t=s.value)?void 0:t.id)||"",skuTypeId:e.id};r.value[l].skus?null==(o=r.value[l].skus)||o.push(i):r.value[l].skus=[i]},currentGoods:s,delSkuType:l=>{var t;r.value[l].id&&(t=r.value[l].id,e({url:`TbSkuType/${t}`,method:"delete"})).then((e=>{e.data?a.success("删除 Sku Type 成功"):a.error("删除 Sku Type 失败")})),r.value.splice(l,1)},Check:w,loadData:u,openDialog:e=>{l.dialogVisible=!0,s.value=e,u()},handleSkuType:l=>{var t,o;l.name?l.id?(t=l.name,o=l.id,e({url:`TbSkuType/${o}`,method:"put",data:{name:t,id:o}})).then((e=>{e.data?a.success("skuType修改成功"):a.error("skuType修改失败")})):function(a){return e({url:"TbSkuType",method:"post",data:{name:a}})}(l.name).then((e=>{e.data?(l.id=e.data,a.success("skuType新增成功")):a.error("skuType新增失败")})):a.error("不能为空")},handleSku:(l,t)=>{var o;t.name&&t.price?t.id?(o=t,e({url:`TbSku/${o.id}`,method:"put",data:o})).then((e=>{e.data?a.success("sku修改成功"):a.error("sku修改失败")})):(t.productId=s.value.id,t.skuTypeId=l.id,function(a){return e({url:"TbSku",method:"post",data:a})}(t).then((e=>{e.data?(t.id=e.data,a.success("sku新增成功")):a.error("sku新增失败")}))):a.error("不能为空")},handleImageSuccess:(e,a,l)=>{e.data&&"200"===e.code&&(r.value[a].skus[l].picture=e.data)}}}}),L={class:"main"};const B=s(G,[["render",function(e,a,l,t,o,r){var i;const d=n("el-empty"),s=n("el-button"),u=n("el-popconfirm"),y=n("el-col"),h=n("el-input"),b=n("el-row"),k=n("el-divider"),_=n("el-image"),v=n("Upload"),V=n("el-icon"),w=n("el-upload"),T=n("el-card"),$=n("el-scrollbar"),U=n("el-dialog");return p(),c(U,{modelValue:e.dialogVisible,"onUpdate:modelValue":a[0]||(a[0]=a=>e.dialogVisible=a),title:`SKU 管理(${null==(i=e.currentGoods)?void 0:i.goodName})`,width:"700"},{default:m((()=>[e.skuTypes.length?(p(),c($,{key:1,height:"600px",always:!0},{default:m((()=>[x("div",L,[(p(!0),D(S,null,C(e.skuTypes,((a,l)=>(p(),c(T,{class:"box-card",key:a.id,style:{"margin-top":"20px",width:"100%"},shadow:"hover"},{default:m((()=>[f(b,{align:"middle"},{default:m((()=>[f(y,{span:2},{default:m((()=>[f(u,{title:"确认删除吗？",onConfirm:a=>e.delSkuType(l)},{reference:m((()=>[f(s,{type:"danger",icon:e.Delete,bg:"",text:""},null,8,["icon"])])),_:2},1032,["onConfirm"])])),_:2},1024),f(y,{span:21,offset:1},{default:m((()=>[f(h,{placeholder:"请输入商品规格类型（如：颜色、尺寸）",class:"no-border",modelValue:a.name,"onUpdate:modelValue":e=>a.name=e,ref_for:!0,ref:`input${l}`,maxlength:"12"},{prefix:m((()=>[g("商品规格类型： ")])),suffix:m((()=>[f(s,{type:"primary",size:"small",icon:e.Check,onClick:l=>e.handleSkuType(a)},{default:m((()=>[g("确认")])),_:2},1032,["icon","onClick"])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024),f(k),(p(!0),D(S,null,C(a.skus,((t,o)=>(p(),c(b,{align:"middle",key:t.id,style:{"margin-bottom":"5px"}},{default:m((()=>[f(y,{span:1},{default:m((()=>[f(u,{title:"确认删除吗？",onConfirm:a=>e.delSku(l,o,t.id)},{reference:m((()=>[f(s,{type:"danger",icon:e.Delete,circle:"",bg:"",text:""},null,8,["icon"])])),_:2},1032,["onConfirm"])])),_:2},1024),f(y,{span:7,offset:1},{default:m((()=>[f(h,{placeholder:"请输入"+a.name,modelValue:t.name,"onUpdate:modelValue":e=>t.name=e},null,8,["placeholder","modelValue","onUpdate:modelValue"])])),_:2},1024),f(y,{span:7,offset:1},{default:m((()=>[f(h,{placeholder:"请输入价格",modelValue:t.price,"onUpdate:modelValue":e=>t.price=e,type:"number"},{prefix:m((()=>[g("单价：￥")])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1024),f(y,{span:2,offset:1},{default:m((()=>[f(w,{class:"avatar-uploader",action:e.uploadApi,"show-file-list":!1,"on-success":a=>e.handleImageSuccess(a,l,o),"before-upload":e.beforeImageUpload},{default:m((()=>[t.picture?(p(),c(_,{key:0,src:e.imgBase+t.picture,class:"avatar"},null,8,["src"])):(p(),c(V,{key:1,class:"avatar-uploader-icon"},{default:m((()=>[f(v)])),_:1}))])),_:2},1032,["action","on-success","before-upload"])])),_:2},1024),f(y,{span:2,offset:1},{default:m((()=>[f(s,{type:"primary",size:"small",icon:e.Check,onClick:l=>e.handleSku(a,t)},{default:m((()=>[g("确认")])),_:2},1032,["icon","onClick"])])),_:2},1024)])),_:2},1024)))),128)),f(b,{justify:"center"},{default:m((()=>[f(s,{type:"primary",icon:e.CirclePlus,size:"large",onClick:t=>e.addSku(a,l),circle:!0},null,8,["icon","onClick"])])),_:2},1024)])),_:2},1024)))),128))])])),_:1})):(p(),c(d,{key:0})),f(b,{class:"sku-typeadd",justify:"center",style:{"margin-top":"20px"}},{default:m((()=>[f(s,{type:"primary",icon:e.CirclePlus,onClick:e.insertSkuType},{default:m((()=>[g("新增商品规格类型")])),_:1},8,["icon","onClick"])])),_:1})])),_:1},8,["modelValue","title"])}],["__scopeId","data-v-12127946"]]),H={class:"app-container"},O={class:"toolbar-wrapper"},K={class:"table-wrapper"},Q={class:"pager-wrapper"},M=l({name:"goods-list",components:{GoodsAddForm:E,SkuDialog:B},methods:{}}),R=s(l({...M,setup(l){const t=_(!1),{paginationData:i,handleCurrentChange:d,handleSizeChange:s}=A(),b=o("http://110.41.150.2:32976/image/"),k=r(),w=_(),C=(e,a=1,l=10)=>{a<1&&(a=1),l<1&&(l=1);const t=(a-1)*l,o=t+l;return e.slice(t,o)},S=l=>{u.confirm(`您确定删除【${l.goodName}】吗？`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{var t;null==(t=function(l){if(l)return e({url:`TbGood/${l}`,method:"delete"});a.error("删除失败！")}(l.id))||t.then((()=>{a.success("删除成功！")}))}))},j=_([]),G=_([]),L=_([]),M=_(null),R=o({goodName:""}),W=()=>{t.value=!0,function(a=1,l=99999,t=99999){return e({url:`TbGood/getList/${a}/${l}/${t}`,method:"get"})}().then((e=>{G.value=e.data,i.total=G.value.length,j.value=G.value,t.value=!1}))};W();const Y=()=>{t.value=!0,R.goodName?function(a,l=1,t=99999,o=99999){return e({url:`TbGood/getListByName/${l}/${t}/${o}/${a}`,method:"get"})}(R.goodName).then((e=>{L.value=e.data,j.value=C(L.value,i.currentPage,i.pageSize)})):j.value=C(G.value,i.currentPage,i.pageSize),t.value=!1},J=()=>{1===i.currentPage&&Y(),i.currentPage=1},X=()=>{var e;null==(e=M.value)||e.resetFields(),1===i.currentPage&&Y(),i.currentPage=1},Z=()=>{W()};return T([()=>i.currentPage,()=>i.pageSize],Y,{immediate:!0}),(e,a)=>{const l=n("el-input"),o=n("el-form-item"),r=n("el-button"),u=n("el-form"),_=n("el-card"),C=n("el-tooltip"),T=n("el-table-column"),A=n("el-image"),G=n("el-row"),L=n("el-text"),W=n("el-tag"),Y=n("el-table"),ee=n("el-pagination"),ae=U("loading");return p(),D("div",H,[$((p(),c(_,{shadow:"never",class:"search-wrapper"},{default:m((()=>[f(u,{ref_key:"searchFormRef",ref:M,inline:!0,model:R},{default:m((()=>[f(o,{prop:"goodName",label:"商品名称"},{default:m((()=>[f(l,{modelValue:R.goodName,"onUpdate:modelValue":a[0]||(a[0]=e=>R.goodName=e),placeholder:"请输入"},null,8,["modelValue"])])),_:1}),f(o,null,{default:m((()=>[f(r,{type:"primary",icon:N(P),onClick:J},{default:m((()=>[g("查询")])),_:1},8,["icon"]),f(r,{icon:N(F),onClick:X},{default:m((()=>[g("重置")])),_:1},8,["icon"])])),_:1})])),_:1},8,["model"])])),_:1})),[[ae,t.value]]),$((p(),c(_,{shadow:"never"},{default:m((()=>[x("div",O,[x("div",null,[f(r,{type:"primary",icon:N(v),onClick:a[1]||(a[1]=e=>N(k).proxy.$refs.goodsAddForm.dialogVisible=!0)},{default:m((()=>[g("新增商品")])),_:1},8,["icon"]),f(r,{type:"danger",icon:N(V)},{default:m((()=>[g("批量删除")])),_:1},8,["icon"])]),x("div",null,[f(C,{content:"刷新数据"},{default:m((()=>[f(r,{type:"primary",icon:N(q),circle:"",onClick:Z},null,8,["icon"])])),_:1})])]),x("div",K,[f(Y,{data:j.value},{default:m((()=>[f(T,{type:"selection",width:"50",align:"center"}),f(T,{prop:"id",label:"商品ID",width:"180",align:"center"}),f(T,{prop:"goodName",label:"商品","min-width":"100",align:"center"},{default:m((e=>[e.row.picture?(p(),c(G,{key:0,justify:"center"},{default:m((()=>[f(A,{style:{width:"80px",height:"80px","border-radius":"5px","margin-bottom":"5px"},src:b+e.row.picture.split(",")[0]},null,8,["src"])])),_:2},1024)):h("",!0),f(L,null,{default:m((()=>[g(y(e.row.goodName),1)])),_:2},1024)])),_:1}),f(T,{prop:"goodInfo",label:"商品简介",align:"center"}),f(T,{prop:"status","min-width":"120",align:"left",label:"价格"},{default:m((e=>[f(G,null,{default:m((()=>[f(W,{type:"info"},{default:m((()=>[g("原价")])),_:1}),g("￥"+y(e.row.otPrice)+"/"+y(e.row.unitName),1)])),_:2},1024),f(G,{style:{"margin-top":"5px"}},{default:m((()=>[f(W,{type:"success"},{default:m((()=>[g("现价")])),_:1}),g("￥"+y(e.row.price)+"/"+y(e.row.unitName),1)])),_:2},1024),f(G,{style:{"margin-top":"5px"}},{default:m((()=>[f(W,{type:"danger"},{default:m((()=>[g("会员价")])),_:1}),g("￥"+y(e.row.vipPrice)+"/"+y(e.row.unitName),1)])),_:2},1024)])),_:1}),f(T,{prop:"sales",label:"销售额",align:"center"}),f(T,{prop:"stock",label:"库存",align:"center"}),f(T,{prop:"status",label:"状态",align:"center"},{default:m((e=>[e.row.isShow?(p(),c(W,{key:0,type:"success"},{default:m((()=>[g("已上架")])),_:1})):(p(),c(W,{key:1,type:"danger",effect:"light"},{default:m((()=>[g("已下架")])),_:1})),e.row.isNew?(p(),c(W,{key:2,type:"info",style:{"margin-left":"5px"}},{default:m((()=>[g("新品")])),_:1})):h("",!0),e.row.isHot?(p(),c(W,{key:3,type:"danger",style:{"margin-left":"5px"}},{default:m((()=>[g("热销")])),_:1})):h("",!0)])),_:1}),f(T,{fixed:"right",label:"操作",width:"260",align:"center"},{default:m((e=>[f(r,{type:"success",text:"",bg:"",size:"small",icon:N(I),onClick:a=>{return l=e.row,k.proxy.$refs.sku,void k.proxy.$refs.sku.openDialog(l);var l}},{default:m((()=>[g("管理SKU")])),_:2},1032,["icon","onClick"]),f(r,{type:"primary",text:"",bg:"",size:"small",icon:N(z),onClick:a=>(e=>{k.proxy.$refs.goodsAddForm.formData=e,k.proxy.$refs.goodsAddForm.dialogVisible=!0,k.proxy.$refs.goodsAddForm.isEdit=!0,k.proxy.$refs.goodsAddForm.pictureFileList=e.picture.split(",").map((e=>({name:e,url:"http://110.41.150.2:32976/image/"+e})));const a=k.proxy.$refs.goodsAddForm.cateOptions;k.proxy.$refs.goodsAddForm.formData.cate=((e,a)=>{for(const l of e)if(l.categories)for(const e of l.categories)if(e.id===a)return[l.id,e.id]})(a,e.cateId)})(e.row)},{default:m((()=>[g("修改")])),_:2},1032,["icon","onClick"]),f(r,{type:"danger",text:"",bg:"",size:"small",icon:N(V),onClick:a=>S(e.row)},{default:m((()=>[g("删除")])),_:2},1032,["icon","onClick"])])),_:1})])),_:1},8,["data"])]),x("div",Q,[f(ee,{background:"",layout:N(i).layout,"page-sizes":N(i).pageSizes,total:N(i).total,"page-size":N(i).pageSize,currentPage:N(i).currentPage,onSizeChange:N(s),onCurrentChange:N(d)},null,8,["layout","page-sizes","total","page-size","currentPage","onSizeChange","onCurrentChange"])])])),_:1})),[[ae,t.value]]),f(E,{onAfterSuccess:Z,ref:"goodsAddForm"},null,512),f(B,{goods:w.value,ref:"sku"},null,8,["goods"])])}}}),[["__scopeId","data-v-204aefda"]]);export{R as default};
