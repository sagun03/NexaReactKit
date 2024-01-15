(self.webpackChunktoast_utility=self.webpackChunktoast_utility||[]).push([[945],{"./stories/toast/Toast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>Toast_stories,toastWithBottomRightPosition:()=>toastWithBottomRightPosition,toastWithCloseButton:()=>toastWithCloseButton,toastWithContent:()=>toastWithContent,toastWithContentAndStyling:()=>toastWithContentAndStyling,toastWithCustomHideDuration:()=>toastWithCustomHideDuration});__webpack_require__("./app/globals.css");var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const components_useToast=function useToast(){var _useState=(0,react.useState)(!1),showToast=_useState[0],setShowToast=_useState[1],_useState2=(0,react.useState)({}),props=_useState2[0],setProps=_useState2[1],timeoutRef=(0,react.useRef)(null);return(0,react.useEffect)((function(){if(showToast){var content=props.content,isCloseIcon=props.isCloseIcon,parentStyle=props.parentStyle,contentStyle=props.contentStyle,closeIconStyling=props.closeIconStyling,_props$position=props.position,position=void 0===_props$position?"top-right":_props$position,portalElement=document.createElement("div");if(portalElement.classList.add("bg-white","text-black","p-4","fixed","z-10","top-10","right-10","shadow-md","border","rounded","w-1/5","h-auto","shadow-xl"),content){var pElement=document.createElement("p");pElement.textContent=content,contentStyle&&Object.entries(contentStyle).forEach((function(_ref){var _ref2=_slicedToArray(_ref,2),key=_ref2[0],value=_ref2[1];pElement.style[key]=value})),portalElement.appendChild(pElement)}if(isCloseIcon){var closeIcon=document.createElement("span");closeIcon.innerHTML="&times;",closeIcon.classList.add("absolute","top-0","right-0","cursor-pointer","p-2"),closeIconStyling&&Object.entries(closeIconStyling).forEach((function(_ref3){var _ref4=_slicedToArray(_ref3,2),key=_ref4[0],value=_ref4[1];closeIcon.style[key]=value})),closeIcon.onclick=function(){timeoutRef.current&&clearTimeout(timeoutRef.current),timeoutRef.current=null,setShowToast(!1),document.body.removeChild(portalElement)},portalElement.appendChild(closeIcon)}parentStyle&&Object.assign(portalElement.style,parentStyle),position&&Object.entries(function getPositionStyles(position){switch(position){case"top-left":return{top:"1.5rem",left:"1.5rem",bottom:"unset",right:"unset"};case"top-right":return{top:"1.5rem",right:"1.5rem",bottom:"unset",left:"unset"};case"bottom-left":return{bottom:"1.5rem",left:"1.5rem",top:"unset",right:"unset"};case"bottom-right":return{bottom:"1.5rem",right:"1.5rem",top:"unset",left:"unset"};case"top-center":return{top:"1.5rem",right:"51%",transform:"translateX(50%)",bottom:"unset",left:"unset"};case"bottom-center":return{bottom:"1.5rem",right:"50%",transform:"translateX(50%)",top:"unset",left:"unset"};default:return{}}}(position)).forEach((function(_ref5){var _ref6=_slicedToArray(_ref5,2),key=_ref6[0],value=_ref6[1];portalElement.style[key]=value})),document.body.appendChild(portalElement);return function cleanup(){setShowToast(!1),timeoutRef.current&&clearTimeout(timeoutRef.current),timeoutRef.current=null,document.body.contains(portalElement)&&document.body.removeChild(portalElement)}}}),[showToast,props]),{addToast:function addToast(props){var _props$autoHideDurati=props.autoHideDuration,autoHideDuration=void 0===_props$autoHideDurati?2e3:_props$autoHideDurati;setShowToast(!0),setProps(props),timeoutRef.current||(timeoutRef.current=window.setTimeout((function(){setShowToast(!1),setProps({})}),autoHideDuration))}}};var __jsx=react.createElement,Toast=function Toast(props){var addToast=components_useToast().addToast;return __jsx("div",null,__jsx("button",{type:"button",className:"h-auto p-4 bg-white text-black rounded",onClick:function onClick(){return function handleClick(props){addToast(props)}(props)}},"Click Me"))};Toast.displayName="Toast";try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{content:{defaultValue:null,description:"message for toast (not mandatory)",name:"content",required:!1,type:{name:"string"}},parentStyle:{defaultValue:null,description:"css for main div of toast (not mandatory)",name:"parentStyle",required:!1,type:{name:"CSSProperties"}},contentStyle:{defaultValue:null,description:"css for message of toast (not mandatory)",name:"contentStyle",required:!1,type:{name:"CSSProperties"}},isCloseIcon:{defaultValue:null,description:"close icon for toast (not mandatory)",name:"isCloseIcon",required:!1,type:{name:"boolean"}},closeIconStyling:{defaultValue:null,description:"styling for close icon of toast (not mandatory)",name:"closeIconStyling",required:!1,type:{name:"CSSProperties"}},position:{defaultValue:null,description:"position of toast\ndefault set to top-left",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-right"'},{value:'"center"'},{value:'"top-center"'},{value:'"bottom-center"'}]}},autoHideDuration:{defaultValue:null,description:"hide duration fo the toast\ndefault set to 2 sec",name:"autoHideDuration",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/toast/Toast.tsx#Toast"]={docgenInfo:Toast.__docgenInfo,name:"Toast",path:"stories/toast/Toast.tsx#Toast"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),Toast_stories_jsx=react.createElement;const Toast_stories={title:"Example/Toast",component:Toast,parameters:{layout:"centered",docs:{page:function page(){return Toast_stories_jsx(react.Fragment,null,Toast_stories_jsx(dist.Dx,null),Toast_stories_jsx(dist.X6,null," Integrated with useToast Hook"),Toast_stories_jsx(dist.QE,null,"Illustrates the integration of the useToast hook within the Toast component. This show how the hook is used to trigger toasts with various configurations."),Toast_stories_jsx(dist.Hw,{dark:!0,format:!0,language:"jsx",code:'\n            const Toast = () => {\n            const { addToast } = useToast();\n            \n            const handleClick = () => {\n              addToast({\n                content: "This is the content",\n                isCloseIcon: true,\n                parentStyle: { padding: "1rem" },\n                contentStyle: { padding: "1rem" },\n                closeIconStyling: { padding: "1rem" },\n                position: "top-right",\n              });\n            }\n\n            return (\n              <button onClick=(() => handleClick())>Click Me</button>\n            );\n            };\n            '}),Toast_stories_jsx(dist.QE,null,"To demostrate we are using the addToast function from useToast hook in Toast Component, passing the props in Toast component and then passing that into addToast function."),Toast_stories_jsx(dist.dk,null),Toast_stories_jsx(dist.sq,null),Toast_stories_jsx(dist.ZX,null),Toast_stories_jsx(dist.fQ,null))}}},tags:["autodocs"],args:{position:"top-right",autoHideDuration:2e3},argTypes:{position:{defaultValue:"top-right",table:{defaultValue:{summary:"top-right"}}},autoHideDuration:{defaultValue:2e3,table:{defaultValue:{summary:"2 sec"}}}}};var toastWithContent={args:{content:"A Basic toast"}},toastWithContentAndStyling={args:{content:"A Basic toast",contentStyle:{backgroundColor:"gray",padding:"1rem"}}},toastWithCloseButton={args:{content:"A Basic toast",isCloseIcon:!0}},toastWithBottomRightPosition={args:{content:"A Basic toast",isCloseIcon:!0,position:"bottom-right"}},toastWithCustomHideDuration={args:{content:"A Basic toast",autoHideDuration:5e3}};toastWithContent.parameters={...toastWithContent.parameters,docs:{...toastWithContent.parameters?.docs,source:{originalSource:'{\n  args: {\n    content: "A Basic toast"\n  }\n}',...toastWithContent.parameters?.docs?.source}}},toastWithContentAndStyling.parameters={...toastWithContentAndStyling.parameters,docs:{...toastWithContentAndStyling.parameters?.docs,source:{originalSource:'{\n  args: {\n    content: "A Basic toast",\n    contentStyle: {\n      backgroundColor: "gray",\n      padding: "1rem"\n    }\n  }\n}',...toastWithContentAndStyling.parameters?.docs?.source}}},toastWithCloseButton.parameters={...toastWithCloseButton.parameters,docs:{...toastWithCloseButton.parameters?.docs,source:{originalSource:'{\n  args: {\n    content: "A Basic toast",\n    isCloseIcon: true\n  }\n}',...toastWithCloseButton.parameters?.docs?.source}}},toastWithBottomRightPosition.parameters={...toastWithBottomRightPosition.parameters,docs:{...toastWithBottomRightPosition.parameters?.docs,source:{originalSource:'{\n  args: {\n    content: "A Basic toast",\n    isCloseIcon: true,\n    position: "bottom-right"\n  }\n}',...toastWithBottomRightPosition.parameters?.docs?.source}}},toastWithCustomHideDuration.parameters={...toastWithCustomHideDuration.parameters,docs:{...toastWithCustomHideDuration.parameters?.docs,source:{originalSource:'{\n  args: {\n    content: "A Basic toast",\n    autoHideDuration: 5000\n  }\n}',...toastWithCustomHideDuration.parameters?.docs?.source}}};const __namedExportsOrder=["toastWithContent","toastWithContentAndStyling","toastWithCloseButton","toastWithBottomRightPosition","toastWithCustomHideDuration"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);