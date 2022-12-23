"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[129],{9890:function(n,e,t){t(2791);e.Z=t.p+"static/media/logo.f23fe2f7d3b5b409ab81b1dd231accac.svg"},9129:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var a=t(885),r=t(4376),o=t(2791),i=t(6871),s=t(1830),d=t.n(s),l=t(8168),u=t(8395),p=t(9890),c=t(184);function m(){var n=(0,o.useContext)(l.I).setFreelancerLoginData,e=(0,i.s0)(),t=(0,r.D)(u.e),s=(0,a.Z)(t,2),m=s[0],_=s[1],g=(_.data,_.loading,_.error);if(!g)return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("section",{className:"Freelancer-sign-container ",children:[(0,c.jsx)("div",{className:"Wall-left bg-secondary",children:(0,c.jsx)("div",{children:(0,c.jsx)("img",{src:p.Z,alt:"signup logo"})})}),(0,c.jsxs)("div",{className:"signUp-form-right",children:[(0,c.jsx)("h2",{children:"Are you a freelancer?"}),(0,c.jsx)("h3",{children:"Create an Account"}),(0,c.jsxs)("form",{className:"form-style-4",onSubmit:function(t){if(t.preventDefault(),t.target.password.value!==t.target.repeatPassword.value)return d().fire({position:"top",icon:"error",title:"Your passwords do not match",showConfirmButton:!1,timer:2e3});m({variables:{first_name:t.target.first_name.value,last_name:t.target.last_name.value,phone:t.target.phone.value,email:t.target.email.value,password:t.target.password.value,repeatPassword:t.target.repeatPassword.value,description:t.target.description.value,hourly_rate:Number(t.target.hourly_rate.value)}}).then((function(t){t.data&&(n(t.data),d().fire({position:"top",icon:"success",title:"Account Created",showConfirmButton:!1,timer:2e3}),e("/freelancer-login"))}))},children:[(0,c.jsx)("legend",{children:"Let's find you some work"}),(0,c.jsxs)("label",{children:[(0,c.jsx)("span",{children:"First Name"}),(0,c.jsx)("input",{type:"text",name:"first_name",required:!0,minLength:"2",maxLength:"50"})]}),(0,c.jsxs)("label",{children:[(0,c.jsx)("span",{children:"Last Name"}),(0,c.jsx)("input",{type:"text",name:"last_name",required:!0,minLength:"2",maxLength:"50"})]}),(0,c.jsxs)("label",{children:[(0,c.jsx)("span",{children:"Email"}),(0,c.jsx)("input",{type:"email",name:"email",required:!0,minLength:"2",maxLength:"50"})]}),(0,c.jsxs)("label",{children:[(0,c.jsx)("span",{children:"Phone"}),(0,c.jsx)("input",{type:"Phone",name:"phone",required:!0,minLength:"2",maxLength:"50"})]}),(0,c.jsxs)("label",{children:[(0,c.jsx)("span",{children:"Password"}),(0,c.jsx)("input",{type:"password",name:"password",required:!0,minLength:"2",maxLength:"50"})]}),(0,c.jsxs)("label",{children:[(0,c.jsx)("span",{children:"Repeat Password"}),(0,c.jsx)("input",{type:"password",name:"repeatPassword",required:!0,minLength:"2",maxLength:"50"})]}),(0,c.jsxs)("label",{children:[(0,c.jsx)("span",{children:"Hourly Rate"}),(0,c.jsx)("input",{type:"number",name:"hourly_rate",minLength:"1",maxLength:"10"})]}),(0,c.jsxs)("label",{children:[(0,c.jsx)("span",{children:"Describe your Roll"})," ",(0,c.jsx)("br",{}),(0,c.jsx)("textarea",{name:"description",required:!0,minLength:"5",maxLength:"500"})]}),(0,c.jsxs)("label",{children:[(0,c.jsx)("span",{children:" "}),(0,c.jsx)("input",{type:"submit",value:"Sign Up"})]})]})]})]})})}},8395:function(n,e,t){t.d(e,{AX:function(){return C},AZ:function(){return k},Bk:function(){return b},ET:function(){return w},O$:function(){return I},Wr:function(){return P},X$:function(){return j},bc:function(){return S},e:function(){return x},lx:function(){return D},pY:function(){return y},qD:function(){return L},rc:function(){return N},rn:function(){return v}});var a,r,o,i,s,d,l,u,p,c,m,_,g,f,h=t(168),$=t(7570),y=(0,$.Ps)(a||(a=(0,h.Z)(["\n  mutation AddCompany(\n    $company_Name: String!\n    $owner_name: String!\n    $company_type: String!\n    $address: String!\n    $phone: String!\n    $email: String!\n    $password: String!\n    $description: String!\n  ) {\n    addCompany(\n      company_Name: $company_Name\n      owner_name: $owner_name\n      company_type: $company_type\n      address: $address\n      phone: $phone\n      email: $email\n      password: $password\n      description: $description\n    ) {\n      company_Name\n      owner_name\n      company_type\n      address\n      phone\n      email\n      password\n      description\n    }\n  }\n"]))),b=(0,$.Ps)(r||(r=(0,h.Z)(["\n  mutation LoginCompany($email: String!, $password: String!) {\n    loginCompany(email: $email, password: $password) {\n      token\n      tokenExpiration\n      company {\n        id\n        company_Name\n        owner_name\n        avatar\n        company_type\n        address\n        phone\n        email\n        description\n        favorite {\n          first_name\n          last_name\n          avatar\n          email\n          description\n        }\n        jobs {\n          id\n          job_Title\n          num_of_people_needed\n          job_description\n          issued_At\n          start_Date\n          end_Date\n        }\n      }\n    }\n  }\n"]))),v=(0,$.Ps)(o||(o=(0,h.Z)(["\n  mutation DeleteCompany($deleteCompanyId: ID) {\n    deleteCompany(id: $deleteCompanyId) {\n      success\n    }\n  }\n"]))),j=(0,$.Ps)(i||(i=(0,h.Z)(["\n  mutation UpdateCompany(\n    $updateCompanyId: ID!\n    $companyName: String\n    $ownerName: String\n    $file: Upload\n    $companyType: String\n    $address: String\n    $phone: String\n    $email: String\n    $password: String\n    $description: String\n  ) {\n    updateCompany(\n      id: $updateCompanyId\n      company_Name: $companyName\n      owner_name: $ownerName\n      file: $file\n      company_type: $companyType\n      address: $address\n      phone: $phone\n      email: $email\n      password: $password\n      description: $description\n    ) {\n      id\n      company_Name\n      owner_name\n      avatar\n      company_type\n      address\n      phone\n      email\n      password\n      description\n    }\n  }\n"]))),D=(0,$.Ps)(s||(s=(0,h.Z)(["\n  mutation updateCompanyFavorite($userId: ID!, $companyId: ID!) {\n    updateCompanyFavorite(userId: $userId, companyId: $companyId) {\n      id\n      company_Name\n      owner_name\n      avatar\n      company_type\n      address\n      phone\n      email\n      password\n      description\n    }\n  }\n"]))),w=(0,$.Ps)(d||(d=(0,h.Z)(["\n  mutation DeleteCompanyFavorite($companyId: ID!, $userId: ID!) {\n    deleteCompanyFavorite(companyId: $companyId, userId: $userId) {\n      id\n      company_Name\n      owner_name\n      avatar\n      company_type\n      address\n      phone\n      email\n      password\n      description\n    }\n  }\n"]))),x=(0,$.Ps)(l||(l=(0,h.Z)(["\n  mutation addUser(\n    $first_name: String!\n    $last_name: String!\n    $phone: String!\n    $email: String!\n    $password: String!\n    $hourly_rate: Int!\n    $description: String!\n  ) {\n    addUser(\n      first_name: $first_name\n      last_name: $last_name\n      phone: $phone\n      email: $email\n      password: $password\n      hourly_rate: $hourly_rate\n      description: $description\n    ) {\n      id\n    }\n  }\n"]))),I=(0,$.Ps)(u||(u=(0,h.Z)(["\n  mutation updateUserFavorite($userId: ID!, $job: JobInputType) {\n    updateUserFavorite(userId: $userId, job: $job) {\n      id\n      first_name\n      last_name\n      email\n      favorite {\n        job_Title\n        start_Date\n        end_Date\n        issued_At\n        created_by {\n          company_Name\n          company_type\n          email\n        }\n      }\n    }\n  }\n"]))),S=(0,$.Ps)(p||(p=(0,h.Z)(["\n  mutation LoginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      token\n      tokenExpiration\n      user {\n        first_name\n        last_name\n        avatar\n        email\n        phone\n        password\n        hourly_rate\n        description\n        id\n        favorite {\n          id\n          job_Title\n          start_Date\n          end_Date\n          num_of_people_needed\n        }\n      }\n    }\n  }\n"]))),k=(0,$.Ps)(c||(c=(0,h.Z)(["\n  mutation DeleteUser($deleteUserId: ID) {\n    deleteUser(id: $deleteUserId) {\n      success\n    }\n  }\n"]))),C=(0,$.Ps)(m||(m=(0,h.Z)(["\n  mutation UpdateUser(\n    $updateUserId: ID!\n    $firstName: String\n    $lastName: String\n    $file: Upload\n    $email: String\n    $password: String\n    $phone: String\n    $hourlyRate: Int\n    $description: String\n  ) {\n    updateUser(\n      id: $updateUserId\n      first_name: $firstName\n      last_name: $lastName\n      file: $file\n      email: $email\n      password: $password\n      phone: $phone\n      hourly_rate: $hourlyRate\n      description: $description\n    ) {\n      id\n      first_name\n      last_name\n      avatar\n      email\n      phone\n      password\n      hourly_rate\n      description\n    }\n  }\n"]))),N=(0,$.Ps)(_||(_=(0,h.Z)(["\n  mutation AddJob(\n    $jobTitle: String!\n    $startDate: String!\n    $endDate: String!\n    $numOfPeopleNeeded: Int!\n    $jobDescription: String!\n    $createdBy: ID!\n  ) {\n    addJob(\n      job_Title: $jobTitle\n      start_Date: $startDate\n      end_Date: $endDate\n      num_of_people_needed: $numOfPeopleNeeded\n      job_description: $jobDescription\n      created_by: $createdBy\n    ) {\n      job_Title\n      start_Date\n      end_Date\n      num_of_people_needed\n      job_description\n      created_by {\n        company_Name\n      }\n    }\n  }\n"]))),P=(0,$.Ps)(g||(g=(0,h.Z)(["\n  mutation DeleteJob($deleteJobId: ID) {\n    deleteJob(id: $deleteJobId) {\n      success\n    }\n  }\n"]))),L=(0,$.Ps)(f||(f=(0,h.Z)(["\n  mutation UpdateJob(\n    $updateJobId: ID!\n    $jobTitle: String\n    $startDate: String\n    $endDate: String\n    $numOfPeopleNeeded: Int\n    $jobDescription: String\n  ) {\n    updateJob(\n      id: $updateJobId\n      job_Title: $jobTitle\n      start_Date: $startDate\n      end_Date: $endDate\n      num_of_people_needed: $numOfPeopleNeeded\n      job_description: $jobDescription\n    ) {\n      id\n      job_Title\n      start_Date\n      end_Date\n      num_of_people_needed\n      job_description\n    }\n  }\n"])))},168:function(n,e,t){function a(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}t.d(e,{Z:function(){return a}})},5046:function(n,e,t){t.d(e,{x:function(){return i}});var a=t(7251),r=t(2791),o=t(9819);function i(n){var e=(0,r.useContext)((0,o.K)()),t=n||e.client;return __DEV__?(0,a.kG)(!!t,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,a.kG)(!!t,29),t}},4376:function(n,e,t){t.d(e,{D:function(){return u}});var a=t(9388),r=t(2791),o=t(2642),i=t(5970),s=t(2364),d=t(9484),l=t(5046);function u(n,e){var t=(0,l.x)(null===e||void 0===e?void 0:e.client);(0,s.Vp)(n,s.n_.Mutation);var u=(0,r.useState)({called:!1,loading:!1,client:t}),p=u[0],c=u[1],m=(0,r.useRef)({result:p,mutationId:0,isMounted:!0,client:t,mutation:n,options:e});Object.assign(m.current,{client:t,options:e,mutation:n});var _=(0,r.useCallback)((function(n){void 0===n&&(n={});var e=m.current,t=e.client,r=e.options,s=e.mutation,l=(0,a.pi)((0,a.pi)({},r),{mutation:s});m.current.result.loading||l.ignoreResults||c(m.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:t});var u=++m.current.mutationId,p=(0,o.J)(l,n);return t.mutate(p).then((function(e){var a,r,o=e.data,s=e.errors,_=s&&s.length>0?new d.c({graphQLErrors:s}):void 0;if(u===m.current.mutationId&&!p.ignoreResults){var g={called:!0,loading:!1,data:o,error:_,client:t};m.current.isMounted&&!(0,i.D)(m.current.result,g)&&c(m.current.result=g)}return null===(a=l.onCompleted)||void 0===a||a.call(l,e.data),null===(r=n.onCompleted)||void 0===r||r.call(n,e.data),e})).catch((function(e){var a,r;if(u===m.current.mutationId&&m.current.isMounted){var o={loading:!1,error:e,data:void 0,called:!0,client:t};(0,i.D)(m.current.result,o)||c(m.current.result=o)}if(l.onError||p.onError)return null===(a=l.onError)||void 0===a||a.call(l,e),null===(r=n.onError)||void 0===r||r.call(n,e),{data:void 0,errors:e};throw e}))}),[]),g=(0,r.useCallback)((function(){c({called:!1,loading:!1,client:t})}),[]);return(0,r.useEffect)((function(){return function(){m.current.isMounted=!1}}),[]),[_,(0,a.pi)({reset:g},p)]}},2364:function(n,e,t){t.d(e,{Vp:function(){return s},n_:function(){return a}});var a,r=t(7251);!function(n){n[n.Query=0]="Query",n[n.Mutation=1]="Mutation",n[n.Subscription=2]="Subscription"}(a||(a={}));var o=new Map;function i(n){var e;switch(n){case a.Query:e="Query";break;case a.Mutation:e="Mutation";break;case a.Subscription:e="Subscription"}return e}function s(n,e){var t=function(n){var e,t,i=o.get(n);if(i)return i;__DEV__?(0,r.kG)(!!n&&!!n.kind,"Argument of ".concat(n," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):(0,r.kG)(!!n&&!!n.kind,30);var s=n.definitions.filter((function(n){return"FragmentDefinition"===n.kind})),d=n.definitions.filter((function(n){return"OperationDefinition"===n.kind&&"query"===n.operation})),l=n.definitions.filter((function(n){return"OperationDefinition"===n.kind&&"mutation"===n.operation})),u=n.definitions.filter((function(n){return"OperationDefinition"===n.kind&&"subscription"===n.operation}));__DEV__?(0,r.kG)(!s.length||d.length||l.length||u.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):(0,r.kG)(!s.length||d.length||l.length||u.length,31),__DEV__?(0,r.kG)(d.length+l.length+u.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(n," had ").concat(d.length," queries, ").concat(u.length," ")+"subscriptions and ".concat(l.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):(0,r.kG)(d.length+l.length+u.length<=1,32),t=d.length?a.Query:a.Mutation,d.length||l.length||(t=a.Subscription);var p=d.length?d:l.length?l:u;__DEV__?(0,r.kG)(1===p.length,"react-apollo only supports one definition per HOC. ".concat(n," had ")+"".concat(p.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):(0,r.kG)(1===p.length,33);var c=p[0];e=c.variableDefinitions||[];var m={name:c.name&&"Name"===c.name.kind?c.name.value:"data",type:t,variables:e};return o.set(n,m),m}(n),s=i(e),d=i(t.type);__DEV__?(0,r.kG)(t.type===e,"Running a ".concat(s," requires a graphql ")+"".concat(s,", but a ").concat(d," was used instead.")):(0,r.kG)(t.type===e,34)}}}]);
//# sourceMappingURL=129.3efdf8d4.chunk.js.map