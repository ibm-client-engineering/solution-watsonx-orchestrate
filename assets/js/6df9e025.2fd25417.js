"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3214],{7401:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=s(5893),n=s(1151);const r={title:"User Authentication",sidebar_position:1,description:"sample page",custom_edit_url:null},a="User Authentication",o={id:"Business Overview/Use Cases/user_authentication",title:"User Authentication",description:"sample page",source:"@site/docs/01-Business Overview/02-Use Cases/01-user_authentication.mdx",sourceDirName:"01-Business Overview/02-Use Cases",slug:"/Business Overview/Use Cases/user_authentication",permalink:"/solution-watsonx-orchestrate/Business Overview/Use Cases/user_authentication",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"User Authentication",sidebar_position:1,description:"sample page",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/solution-watsonx-orchestrate/Business Overview/Overview"},next:{title:"GenAI Routing",permalink:"/solution-watsonx-orchestrate/Business Overview/Use Cases/GenAI_routing"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"<strong>Examples</strong>",id:"examples",level:3},{value:"Solution Implementation",id:"solution-implementation",level:2},{value:"<strong>Simulation</strong>",id:"simulation",level:3},{value:"<strong>IBM Security Verify</strong>",id:"ibm-security-verify",level:3}];function u(e){const t={h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"user-authentication",children:"User Authentication"}),"\n",(0,i.jsx)("div",{style:{borderBottom:"1px solid #000",marginTop:"20px",marginBottom:"20px"}}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"It is essential to consider the security and access control aspects for the user interface within the agent. Implementing user login functionality allows users to securely authenticate themselves, enabling them to access specific actions and features based on their access rights. By integrating user access information with the chatbot, the system can ensure that users can only interact with and modify data they are authorized to access. This not only enhances the overall security of the system but also provides a more personalized and controlled user experience."}),"\n",(0,i.jsx)(t.p,{children:"For instance, a user with administrative privileges may have access to change theirs' and others' passwords , while a regular user will be limited to basic functions.\nThis approach ensures that users are only exposed to the features and actions they are qualified to perform, reducing the risk of errors and improving the usability of the chatbot."}),"\n",(0,i.jsx)(t.h3,{id:"examples",children:(0,i.jsx)(t.strong,{children:"Examples"})}),"\n",(0,i.jsx)(t.p,{children:"For this solution there was a focus on four simulated personas."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://media.github.ibm.com/user/386696/files/f08aec9d-0c3a-4984-8903-8f499ec14a42",alt:"User Examples"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Admin"})," : Has the ability to change passwords"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Manager"})," : Has the ability to file short-term disablity requests for oneself and others"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Employees"})," : Has the ability to search corpus for answers and open tickets to change passwords or open short-term disablity requests"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"fixed-income access"})," : Has the ability to search documents pertaining to fixed-income reports"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"real-estate access"})," : Has the ability to search documents pertaining to real-estate reports"]}),"\n",(0,i.jsx)(t.h2,{id:"solution-implementation",children:"Solution Implementation"}),"\n",(0,i.jsx)(t.h3,{id:"simulation",children:(0,i.jsx)(t.strong,{children:"Simulation"})}),"\n",(0,i.jsx)(t.p,{children:"Simulating user login within Watsonx Orchestrate Assistant Builder can be achieved by storing simulated individuals in a data structure. This data structure, typically a list or map, can store information about each simulated user, such as their name, access level, and other relevant details. By initializing this data structure with a set of simulated users, you can create a realistic login scenario where the system checks user credentials and grants or denies access accordingly."}),"\n",(0,i.jsx)(t.p,{children:"Storing simulated individuals in a data structure within Watsonx Orchestrate Assistant Builder allows you to test the login functionality and ensure that the system behaves as expected. This can help identify potential issues early in the development process, saving time and resources. Additionally, you can customize the simulated users' data to represent different user types, enabling you to test the system's access control mechanisms and ensure that users are only granted access to the appropriate actions and data."}),"\n",(0,i.jsx)(t.p,{children:"By using simulated users in this manner, you can thoroughly test the user login functionality and ensure that the unified agent with generative AI capabilities is secure, reliable, and user-friendly."}),"\n",(0,i.jsx)(t.p,{children:"[HOW TO]"}),"\n",(0,i.jsx)(t.h3,{id:"ibm-security-verify",children:(0,i.jsx)(t.strong,{children:"IBM Security Verify"})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>a});var i=s(7294);const n={},r=i.createContext(n);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);