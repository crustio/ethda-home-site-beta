(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{35883:function(){},11396:function(e,t,s){Promise.resolve().then(s.bind(s,46241))},46241:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return page}});var n=s(60230),l=s(57437),o=s(54440),a=s.n(o);let ALoading=e=>{let{className:t,...s}=e;return(0,l.jsx)("div",{...s,className:a()("text-black w-full h-full flex items-center justify-center",t),children:(0,l.jsx)("div",{className:" w-[400px] bg-white flex justify-center h-[340px] rounded-xl",children:(0,l.jsxs)("div",{className:" flex flex-col  items-center w-full justify-center bg-[#FFFAF6]  mx-[10px] my-[10px] border-dashed border rounded-xl border-[#FC7823]",children:[(0,l.jsx)("img",{src:"loading.svg",className:"animate-spin"}),(0,l.jsx)("div",{className:" mt-5 font-medium text-xl text-[#FC7823]  ",children:"Sending"})]})})})},LoadingFull=()=>(0,l.jsx)(ALoading,{className:"fixed z-50 left-0 top-0 w-full !h-full bg-black/25 px-10"}),AToastFull=e=>{let{onLeftButton:t,className:s,onRightButton:n,chilren:o,size:r="",...i}=e;return(0,l.jsx)("div",{...i,className:a()("text-black w-full h-full flex items-center justify-center fixed z-50 left-0 top-0  bg-black/25 px-10",s),children:(0,l.jsx)("div",{className:" w-[420px] bg-white flex justify-center h-[340px] rounded-xl",children:(0,l.jsx)("div",{className:" flex flex-col  items-center w-full justify-center bg-[#FFFAF6]  mx-[10px] my-[10px] border-dashed border rounded-xl border-[#FC7823]",children:o})})})};var r=s(86021);function EncodeBlobs(e){let t=e.length;if(0===t)throw Error("invalid blob data");let s=0,n=-1,l=[new Uint8Array(131072).fill(0)];for(let o=0;o<t;o+=31){4096==++n&&(l.push(new Uint8Array(131072).fill(0)),s++,n=0);let a=o+31;a>t&&(a=t),l[s].set(e.subarray(o,a),32*n+1)}return l}function createMetaDataForBlobs(e,t){return{originator:e,description:"text,image",content_type:"",extras:"",blobs:t.map(e=>({description:"",content_type:e,extras:""}))}}function sleep(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise(t=>{setTimeout(()=>t(void 0),e)})}s(67133).Buffer;let formatEthereumAddress=e=>{if(!e)return"";let t=null==e?void 0:e.slice(0,7),s=null==e?void 0:e.slice(-5);return"".concat(t).concat("...").concat(s)},scrollToTop=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0};function shortStr(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6;if(!e)return"";if(e.length<=t+s)return e;let n=(null==e?void 0:e.substring(0,t))||"",l=(null==e?void 0:e.substring(e.length-s))||"";return"".concat(n,"...").concat(l)}var i=s(32967),c=s(76946),d=s(85002),m=s(14181),x=s(5572),p=s(2265),u=s(91806),h=s(21693),f=s(24985),b=s(56926),g=s(67133).Buffer;function _templateObject(){let e=(0,n._)(["\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  color: #ffffff;\n  justify-content: between;\n  background: #fc7823;\n  align-items: center;\n  font-size: 16px;\n  font-weight: 500;\n  width: 260px;\n  height: 48px;\n  border-radius: 10px;\n"]);return _templateObject=function(){return e},e}let v=u.ZP.button(_templateObject()),j=u.ZP.div(e=>{let{}=e;return{borderRadius:"10px",backgroundImage:"linear-gradient(to left, #000000 30%, transparent 10%), linear-gradient(to left, #000000 30%, transparent 10%), linear-gradient(to top, #000000 40%, transparent 10%), linear-gradient(to top, #000000 30%, transparent 10%)",backgroundPosition:"left top, left bottom, left top, right top",backgroundRepeat:"repeat-x, repeat-x, repeat-y, repeat-y"}}),w=(0,u.ZP)(j)(e=>{let{}=e;return{backgroundSize:"10px 1px, 10px 1px, 1px 9px, 1px 9px"}}),N=(0,u.ZP)(j)(e=>{let{}=e;return{backgroundSize:"10px 1px, 10px 1px, 1px 9px, 1px 9px"}});var page=()=>{let[e,t]=(0,p.useState)(!1),[s,n]=(0,p.useState)({loading:!1,success:!1,error:!1}),o=(0,p.useRef)(null),[a,u]=(0,p.useState)(null),[j,y]=(0,p.useState)(!0),[F,k]=(0,p.useState)(""),C=(0,b.mA)(),T=["image/png","image/jpeg","image/jpg","image/gif","image/svg+xml"],handleBlobClick=e=>{y(e)},S=(0,p.useCallback)(e=>{var t;e.preventDefault();let s=null===(t=e.dataTransfer.files)||void 0===t?void 0:t.item(0),n=s.size/1024;!(n>128)&&T.includes(s.type)&&u(s)},[]),E=(0,p.useCallback)(e=>{var t;let s=null===(t=e.target.files)||void 0===t?void 0:t.item(0);if(!s)return;let n=s.size/1024;n>128||u(s)},[]);(0,p.useEffect)(()=>{(null==C?void 0:C.isConnected)||(t(!1),n({loading:!1,success:!1,error:!1}))},[null==C?void 0:C.isConnected]),(0,p.useEffect)(()=>(s.loading||s.success||s.error?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden"),()=>{document.body.classList.remove("overflow-hidden")}),[s]);let handleFileSelect=()=>{var e;null===(e=o.current)||void 0===e||e.click()},{data:B}=(0,b.py)({chainId:i.k.id}),[A,_]=(0,p.useState)(),onTranscode=async()=>{if(!B||!a||a.size>131072)return;let e=new FileReader;e.onload=()=>{_({text:g.from(F,"utf-8").valueOf(),img:g.from(e.result).valueOf(),imgType:a.type})},e.readAsArrayBuffer(a)},ub8a2numa=e=>{let t=[];for(let s=0;s<e.length;s++)t.push(e[s]);return t},getConvertOfZkg=async e=>{let t=[],s=[],n=[],l=[];for(let o=0;o<e.length;o++){let a=await fetch("https://blobscan-devnet.ethda.io/backend/convert/blob",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:ub8a2numa(e[o])})}).then(e=>e.json());t.push(a.commitments.map(e=>new Uint8Array(e.data))[0]),s.push(a.proofs.map(e=>new Uint8Array(e.data))[0]),n.push(a.versionedHashes.map(e=>new Uint8Array(Object.values(e)))[0]);let r=EncodeBlobs(e[o]);if(r.length>1)throw"blob too large!";l.push(r[0])}return{commitments:t,proofs:s,versionHashs:n,encodeBlobs:l}},loopGetResult=async e=>{let{result:t}=e;for(;;){await sleep(5e3);let e=await fetch("https://rpc-devnet.ethda.io",{method:"POST",body:JSON.stringify({method:"eth_getTransactionReceipt",params:[t],id:1,jsonrpc:"2.0"})}).then(e=>e.json()).catch(e=>console.error(e)).finally(()=>n({loading:!1,success:!1,error:!0}));if(e.result&&"status"in e.result&&"0x1"===e.result.status)return n({loading:!1,success:!0,error:!1}),e;n({loading:!1,success:!1,error:!0});return}},onSendTx=async()=>{if(!B||!A)return;n({loading:!0});let e=[A.text,A.img],{commitments:t,proofs:s,versionHashs:l,encodeBlobs:o}=await getConvertOfZkg(e),[a]=await B.getAddresses(),r=createMetaDataForBlobs(a,["text/plain",A.imgType]),m=(0,h.$G)(JSON.stringify(r)),{result:p}=await fetch("https://rpc-devnet.ethda.io",{method:"POST",body:JSON.stringify({method:"eth_getTransactionCount",params:[a,"latest"],id:1,jsonrpc:"2.0"})}).then(e=>e.json()),u=21000n+10n*BigInt(m.length),b=await B.prepareTransactionRequest({account:a,nonce:p,gas:u,gasPrice:1000000000n,to:x.d,value:0n,data:m,type:"legacy",chain:i.k}),v=await (null==B?void 0:B.signTransaction(b)),j=(0,f.bt)("0x"+v);if(!j)return;let w=c.Gn.custom({name:"ethda",networkId:177,chainId:177},{eips:[1559,3860,4844]}),N=new d.fx({chainId:177n,nonce:p,to:x.d,data:m,value:0n,maxPriorityFeePerGas:1000000000n,maxFeePerGas:1000000000n,gasLimit:j.gas,maxFeePerBlobGas:2000000000000n,blobVersionedHashes:l,blobs:o,kzgCommitments:t,kzgProofs:s,v:(j.v||0n)-2n*177n-35n,r:j.r,s:j.s},{common:w}),y=N.serializeNetworkWrapper(),F=g.from(y).toString("hex");await fetch("https://rpc-devnet.ethda.io",{method:"POST",body:JSON.stringify({method:"eth_sendRawTransaction",params:["0x"+F],id:1,jsonrpc:"2.0"})}).then(e=>e.json()).then(loopGetResult).catch(e=>n({loading:!1,success:!1,error:!0}))},onSwitchTo=()=>{window.open("https://www.eip4844.com","_blank")};return(0,l.jsxs)("div",{className:" font-[Montserrat]",children:[(0,l.jsx)(r.h,{className:" ".concat(e?"bg-[#FFFFFFCC]":"bg-[#FBE8DE]  mo:bg-[#FCE1D6] mo:border-b-[#FCE1D6]","  py-[27px]"),containerClassName:"!w-full pl-9 pr-[31px] mo:w-full mo:pl-0 mo:pr-0 ",logo:"b-EthDA.svg",headerTextClassName:"!text-[#000000] gap-[50px]"}),(0,l.jsx)("div",{className:" ".concat(!e&&" bg-[url(/blobTXBg.svg)] mo:bg-[url(/b-m-EthDA.svg)] "," min-h-[90vh]  bg-cover object-cover "),children:e?(0,l.jsxs)("div",{className:"bg-[url(/black_bg.svg)] mo:bg-none bg-cover h-auto overflow-hidden ",children:[(0,l.jsx)("div",{className:"mo:bg-[#F6F6F6]",children:(0,l.jsx)("div",{className:"mo:w-full mo:px-[30px]  mx-auto w-container md:w-full md:px-[30px]   ",children:(0,l.jsxs)("div",{className:"  flex  flex-row items-center mo:justify-between mo:h-[102px]",children:[(0,l.jsxs)("div",{className:"mo:hidden w-full h-[120px] mo:h-[42px] items-center flex text-2xl md:text-lg font-normal",children:[(0,l.jsxs)("button",{onClick:onSwitchTo,className:"flex flex-row items-center",children:["Experience EIP-4844 ",(0,l.jsx)("img",{src:"/share3.svg",className:" mx-2"})]}),"blob-carrying transactions (Blob TX)"]}),(0,l.jsx)("div",{className:" cursor-default rounded-lg border-[#FC7823] md:text-sm  border  h-[42px] items-center flex text-[#FC7823] px-[15px]",children:formatEthereumAddress(C.address)}),(0,l.jsxs)("div",{onClick:()=>window.open("https://blobscan-devnet.ethda.io/address/".concat(null==C?void 0:C.address),"_blank"),className:" cursor-pointer flex mr-10 mo:mr-0 gap-[13px] items-center",children:[(0,l.jsx)("img",{className:"ml-5 mo:h-[32px]",src:"deal.svg"}),(0,l.jsx)("span",{className:"text-[#FC7823] font-normal text-base",children:"History"})]})]})})}),(0,l.jsx)("div",{className:"mo:w-full mo:px-[30px]  mx-auto w-container md:w-full md:px-[30px] ",children:(0,l.jsxs)("div",{className:"flex mo:gap-5 gap-[100px] md:gap-[50px]  mt-[30px] mo:mt-10 mo:flex mo:flex-wrap mo:w-full",children:[(0,l.jsxs)("div",{className:"w-[440px] md:w-[400px] h-full mo:flex mo:flex-wrap mo:w-full mo:flex-col  ",children:[(0,l.jsxs)("div",{className:"sm:hidden w-full h-[120px] mo:h-auto  items-center flex text-2xl mo:text-3xl md:text-lg font-normal mo:flex-wrap mo:flex-row",children:[(0,l.jsx)("button",{onClick:onSwitchTo,children:" Experience EIP-4844 "}),(0,l.jsx)("img",{src:"/share3.svg",className:" mx-2"})," blob-carrying transactions (Blob TX)"]}),(0,l.jsx)("div",{className:" text-2xl mo:text-[26px] font-normal mo:mt-10",children:"Input"}),(0,l.jsx)("div",{className:" mt-[36px] md:mt-[40px] mo:mt-5 font-medium mo:text-lg md:text-sm mb-5",children:"Type text here"}),(0,l.jsx)(w,{className:" w-full h-[68px] px-2",children:(0,l.jsx)("input",{placeholder:"Please Enter ...",maxLength:40,value:F,onChange:e=>k(e.target.value),className:" mt-2 input-Text mo:w-full w-[425px] md:w-[380px] h-[55px] "})}),(0,l.jsx)("div",{className:" text-base md:text-sm font-medium mt-[27px] mo:text-lg  mo:mt-5",children:"Attach an image, not exceeding 128KB"}),(0,l.jsx)("div",{className:" mo:px-[50px]",children:(0,l.jsx)(w,{className:" mt-5 w-full  h-[303px] md:h-[308px] border-[#000000] mo:mt-5  ",children:(0,l.jsxs)("div",{onDrop:S,onDragOver:e=>{e.preventDefault()},className:" flex items-center justify-center h-full flex-col ",children:[(0,l.jsx)("input",{type:"file",hidden:!0,ref:o,accept:"image/png, image/jpg, image/jpeg, image/gif, image/svg, image/svg+xml",onChange:E}),(0,l.jsx)("div",{onClick:handleFileSelect,className:" cursor-pointer w-[100px] h-[100px] bg-[#FFF8F4] border  border-dashed rounded-[5px] border-[#FC7823] flex items-center justify-center",children:(0,l.jsx)("img",{src:"chooseAnyImg.svg"})}),(0,l.jsxs)("div",{className:" mt-5 mo:mt-[30px] text-center flex flex-col  overflow-hidden truncate w-40",children:[(0,l.jsx)("span",{title:null==a?void 0:a.name,className:"  cursor-default w-full",children:shortStr(null==a?void 0:a.name,5)}),(0,l.jsx)("button",{className:" text-base font-semibold",onClick:handleFileSelect,children:"Browse"})]})]})})}),(0,l.jsx)("div",{className:"mt-5 mo:mt-10 flex justify-center mb-20  mo:px-[50px]",children:(0,l.jsx)("button",{onClick:onTranscode,className:" ".concat((null==a?void 0:a.name)&&F?"bg-[#FC7823] ":"cursor-not-allowed bg-[#BABABA] "," border px-6 text-base font-semibold items-center mo:w-full  flex rounded-xl text-[#FFFFFF] justify-center h-12 text-center"),children:"Transcode"})})]}),(0,l.jsxs)("div",{className:"w-0 flex-1 h-full  mo:mt-[-70px]",children:[(0,l.jsx)("div",{className:" text-2xl  mo:text-[26px] ",children:" Blob Data"}),(0,l.jsxs)("div",{className:"flex gap-[14px] mo:gap-[10px  ",children:[(0,l.jsx)("button",{onClick:()=>handleBlobClick(!0),className:"w-[195px] md:w-[180px] h-[50px] flex border-[#000000] ".concat(j&&"custom-background"," items-center justify-center mo:text-lg mt-[30px] md:text-sm  text-base font-medium "),children:"Blob1(Text data)"}),(0,l.jsx)("button",{onClick:()=>handleBlobClick(!1),className:"w-[200px] md:w-[180px] h-[50px] flex ".concat(!j&&"custom-background"," items-center border-[#000000] mo:text-lg justify-center mt-[30px] md:text-sm  border-dashed text-base font-medium "),children:"Blob2(Image data)"})]}),(0,l.jsx)(N,{className:"overflow-y-auto overflow-x-hidden  h-[442px] mo:h-[303px] p-5 break-all whitespace-normal ",children:A&&A.text&&(0,l.jsx)(l.Fragment,{children:JSON.stringify(ub8a2numa(j?A.text:A.img))})}),(0,l.jsx)("div",{className:"mt-5 mo:mt-[37px] flex justify-center  mb-5 mo:px-[50px] ",children:(0,l.jsx)("button",{className:" ".concat(A?"bg-[#FC7823] ":"cursor-not-allowed bg-[#BABABA] "," border mo:w-full  px-6 text-base font-semibold items-center flex  rounded-xl text-[#FFFFFF]  justify-center  h-12 text-center"),onClick:onSendTx,children:"Send Transaction"})})]})]})})]}):(0,l.jsxs)("div",{className:"mo:w-full mx-auto w-container md:w-full md:px-[30px] mo:px-[30px]",children:[(0,l.jsxs)("div",{className:" flex justify-center  pt-[119px] mo:flex-wrap mo:items-center text-[54px] mo:text-[26px] md:text-[46px]",children:[(0,l.jsx)("span",{className:"font-medium cursor-default  mo:font-bold  mr-3",children:"Experience"}),(0,l.jsxs)("span",{onClick:onSwitchTo,className:"flex font-semibold cursor-pointer mo:font-bold underline",children:["EIP-4844 ",(0,l.jsx)("img",{className:" ml-3 w-[30px] ",src:"/share.svg"})]})]}),(0,l.jsxs)("div",{className:" md:text-[46px] cursor-default flex justify-center mo:flex-wrap  font-medium text-[54px] capitalize mo:text-[26px] mo:font-bold",children:[(0,l.jsx)("div",{className:"",children:"blob-carrying transactions"}),(0,l.jsx)("div",{children:"(Blob TX)"})]}),(0,l.jsxs)("div",{className:"cursor-default mt-[34px] mo:mt-5 justify-center  text-center mo:flex flex-wrap mo:flex-row ",children:[(0,l.jsx)("span",{className:"font-medium  text-xl mo:text-[18px] mo:font-light ",children:"Store a piece of text or an image fully on-chain with EthDA to understand the changes"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"font-medium text-xl mo:text-[18px] mo:font-light",children:" introduced by "}),(0,l.jsx)("button",{onClick:onSwitchTo,className:"font-semibold text-xl mo:text-[18px] mo:font-medium",children:"EIP-4844"}),(0,l.jsx)("span",{className:"font-medium  text-xl mo:text-[18px] mo:font-light ",children:" blob-carrying transactions"}),(0,l.jsx)("span",{className:"font-semibold text-xl mo:text-[18px] mo:font-medium",children:" (Blob TX) "}),(0,l.jsx)("span",{className:"font-medium text-xl mo:text-[18px] mo:font-light",children:" following the "})]}),(0,l.jsx)("span",{className:"font-semibold text-xl mo:text-[18px] mo:font-medium",children:"Ethereum "}),(0,l.jsx)("span",{className:"font-medium text-xl mo:text-[18px] mo:font-light",children:"\xa0Cancun-Deneb Upgrade."})]}),(0,l.jsx)("div",{className:"mt-[60px] mo:mt-[130px] flex justify-center",children:(0,l.jsx)(m.x3.Custom,{children:e=>{let{isConnected:s,show:n,truncatedAddress:o}=e;return s&&t(!0),(0,l.jsxs)(v,{onClick:n,children:[(0,l.jsx)("span",{className:" ml-[17px] mo:ml-5 pr-[17px]  text-base  font-medium",children:"Connect wallet to start"}),(0,l.jsx)("div",{className:" rounded-lg bg-white w-[38px] h-[38px] flex items-center justify-center",children:(0,l.jsx)("img",{src:"/share2.svg"})})]})}})}),(0,l.jsxs)("div",{className:" mt-[100px] mo:mt-[142px] flex mb-[20px]  mo:mx-0 md:mx-[100px] mx-[200px]  mo:text-center mo:justify-center  justify-between mo:flex-wrap mo:w-full",children:[(0,l.jsx)("button",{onClick:()=>window.open("https://docs.ethda.io/resources/network-configuration/add-ethda-network","_blank"),className:"mo:w-full text-base underline mo:text-2xl ",children:"Add EthDA Devnet to wallet"}),(0,l.jsx)("button",{onClick:()=>window.open("https://docs.ethda.io/developers/quick-start/using-ethda-faucet","_blank"),className:"mo:mt-[70px] mo:text-2xl   text-base underline",children:"Gas Faucet"})]})]})}),s.loading&&(0,l.jsx)(LoadingFull,{}),s.success&&(0,l.jsx)(AToastFull,{chilren:(0,l.jsxs)(p.Fragment,{children:[(0,l.jsx)("img",{src:"success.svg"}),(0,l.jsx)("div",{className:"font-medium text-xl text-[#FC7823] mt-[-35px]",children:"Success"}),(0,l.jsxs)("div",{className:"flex gap-[20px] mt-[40px] mb-5",children:[(0,l.jsx)("button",{onClick:()=>{window.open("https://blobscan-devnet.ethda.io/address/".concat(null==C?void 0:C.address),"_blank")},className:" w-[140px] mo:w-[120px] border h-[36px] rounded-lg border-[#000000] px-[10px] font-medium text-base",children:"View History"}),(0,l.jsx)("button",{onClick:()=>{n({success:!1}),k(""),u(null),_(null),scrollToTop()},className:"w-[140px] mo:w-[120px] mo:wa h-[36px] text-[#FFFFFF] rounded-lg  bg-[#FC7823] px-[10px] font-medium text-base",children:"Send More"})]})]})}),s.error&&(0,l.jsx)(AToastFull,{chilren:(0,l.jsxs)(p.Fragment,{children:[(0,l.jsx)("img",{src:"failed.svg"}),(0,l.jsx)("div",{className:"font-medium text-xl text-[#FC7823] mt-[-35px]",children:"Failed"}),(0,l.jsx)("div",{className:"flex gap-[38px] mt-[40px] mb-5",children:(0,l.jsx)("button",{onClick:()=>{n({success:!1,error:!1,loading:!1})},className:"w-[141px] h-[36px] text-[#FFFFFF] rounded-lg  bg-[#FC7823] px-[21px] font-medium text-base",children:"Send Again"})})]})})]})}},86021:function(e,t,s){"use strict";s.d(t,{h:function(){return Header}});var n=s(57437),l=s(16691),o=s.n(l),a=s(24033),r=s(61396),i=s.n(r),c=s(2265),d=s(27431),m=s(54440),x=s.n(m),p=s(19241),components_FullModal=e=>{let{menus:t,keys:s="text",onChooseItem:l,chooseValue:o,wrapperClassName:r}=e,i=(0,a.useRouter)(),d=document.location.pathname.split("/")[1]||"",onClickItem=e=>{if(e.onClick&&e.onClick(),e.to.startsWith("http")){window.open(e.to,"_blank");return}i.push(e.to),"function"==typeof l&&l(e.text)};return(0,n.jsx)("div",{className:x()("fixed inset-0 mt-[81px] backdrop-filter backdrop-blur-md flex ",r),style:{backgroundColor:"rgba(255, 255, 255, 0.90)"},children:(0,n.jsx)("div",{className:"p-8 rounded-md mo:w-full",children:t.map((e,t)=>(0,n.jsxs)(c.Fragment,{children:[e.topSplit&&t>0&&(0,n.jsx)("div",{className:"h-[1px] my-[.625rem] mo:my-[2px] mx-4 bg-[#eeeeee]"}),(0,n.jsxs)("div",{className:x()("flex  w-full items-center py-[.625rem] mo:py-[.875rem]  text-black hover:text-green-2 cursor-pointer"),onClick:()=>onClickItem(e),children:[!!e.icon&&(0,n.jsx)("div",{className:"text-xl mo:text-2xl",children:e.icon}),(0,n.jsxs)("div",{className:" text-[22px] inline-block  font-medium border-b border-[#D9D9D9] border-solid  pb-5 w-full  mo:flex mo:w-full items-center  mo:justify-between",children:[(0,n.jsx)("span",{className:x()({"text-[#FC7823]":!e.to.startsWith("http")&&d===e.to.split("/")[1]}),children:e[s]}),(0,n.jsx)(p.wpV,{className:x()({"text-[#FC7823]":!e.to.startsWith("http")&&d===e.to.split("/")[1]}),size:22})]})]})]},"poper_menu_item".concat(t)))})})};let Header=e=>{let{logo:t="/logo.svg",containerClassName:s="container mx-auto ",headerTextClassName:l,wrapperClassName:r,className:m,btnClassName:p}=e,{push:u}=(0,a.useRouter)(),h=(0,a.usePathname)(),[f,b]=(0,c.useState)(!1),[g,v]=(0,c.useState)(!1),[j,w]=(0,c.useState)(void 0),getWindowWidth=()=>window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,handleResize=()=>{b(900>=getWindowWidth())};(0,c.useEffect)(()=>(handleResize(),window.addEventListener("resize",handleResize),()=>{window.removeEventListener("resize",handleResize)}),[]),(0,c.useEffect)(()=>{g||document.body.classList.remove("overflow-hidden")},[g]);let onSwitchTo=e=>{if(e.startsWith("http")){window.open(e,"_blank");return}u(e)};return(0,n.jsxs)("header",{className:x()("py-5 border-b border-b-[rgba(255,255,255,.2)]",m),children:[(0,n.jsx)("div",{className:" mo:mx-[30px] ",children:(0,n.jsxs)("div",{className:x()("flex justify-between items-center",s),children:[(0,n.jsx)(i(),{href:"/",children:(0,n.jsx)(o(),{src:t,alt:"logo.svg",width:119,height:26})}),f?(0,n.jsx)("button",{onClick:()=>{v(!g),document.body.classList.add("overflow-hidden")},children:g?(0,n.jsx)(d.fMW,{className:x()("w-6 h-6",p)}):(0,n.jsx)(d.otZ,{className:x()(p,"w-6 h-6")})}):(0,n.jsxs)("div",{className:x()("flex items-center gap-8 text-white text-sm",l),children:[(0,n.jsx)("div",{onClick:()=>onSwitchTo("/"),className:"nav-item ".concat("/"===h?"active":""),children:"Home"}),(0,n.jsx)("div",{onClick:()=>onSwitchTo("https://scan-devnet.ethda.io"),className:"nav-item ".concat("/Explorer"===h?"active":""),children:"Explorer"}),(0,n.jsx)("div",{onClick:()=>onSwitchTo("https://blobscan-devnet.ethda.io/"),className:"nav-item ".concat("/Blobscan"===h?"active":""),children:"Blobscan"}),(0,n.jsx)("div",{className:"nav-item ".concat("/build"===h?"active":""),children:"Build"}),(0,n.jsx)("div",{onClick:()=>onSwitchTo("blob-TX"),className:"nav-item ".concat("/blob-TX"===h?"active":""),children:"Try BlobTx"}),(0,n.jsx)(i(),{href:"https://docs.ethda.io/",target:"_blank",className:"block nav-item",children:"Document"})]})]})}),g&&(0,n.jsx)(components_FullModal,{wrapperClassName:r,menus:[{text:"Home",to:"/"},{text:"Explorer",to:"https://scan-devnet.ethda.io"},{text:"Blobscan",to:"https://blobscan-devnet.ethda.io/"},{text:"Try BlobTX",to:"/blob-TX"},{text:"Document",to:"https://docs.ethda.io/"}],onChooseItem:e=>{w(e),v(!1),document.body.classList.remove("overflow-hidden")},chooseValue:j})]})}},32967:function(e,t,s){"use strict";s.d(t,{k:function(){return i}});var n=s(14181),l=s(56926),o=s(1117),a=s(71186),r=s(25566);let i=(0,a.a)({id:177,chainId:177,network:"ethda",name:"Ethda",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc-devnet.ethda.io"]},public:{http:["https://rpc-devnet.ethda.io"]}},blockExplorers:{default:{name:"Etherscan",url:"https://scan-devnet.ethda.io"}},contracts:{}}),c=(0,l._g)((0,n._K)({alchemyId:r.env.ALCHEMY_ID,walletConnectProjectId:"2222222",appName:"EthDa",connectors:[new o.D({chains:[i],options:{headlessMode:!0,appName:"Ethda"}})],appDescription:"Your App Description",appUrl:"https://family.co",appIcon:"https://family.co/logo.png"}));t.Z=c}},function(e){e.O(0,[929,27,982,321,896,354,971,472,744],function(){return e(e.s=11396)}),_N_E=e.O()}]);