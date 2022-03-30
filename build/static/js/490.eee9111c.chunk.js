"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[490],{8490:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var o=t(885),a=t(2791),r=t(4376),i=t(8395),s=t(8168),d=t(6871),p=t(3504),l=t(1830),u=t.n(l),c=(t(8012),t(184));function m(){var n=(0,d.s0)(),e=(0,a.useContext)(s.I),t=e.setCompanyLoginData,l=e.setIsCompanyLogin,m=(0,r.D)(i.Bk),_=(0,o.Z)(m,2),f=_[0],$=_[1],g=($.loading,$.error);$.data;if(g){var y=g.message.split(",").splice(0,1),h=g.message.split(",").splice(1,2);u().fire({position:"top",icon:"error",title:" ".concat(y,"\n      ").concat(h),showConfirmButton:!1,timer:2e3,customClass:"swal-width"})}return(0,c.jsx)("div",{className:" CompanyLogin",children:(0,c.jsxs)("div",{className:"FormContainer",children:[(0,c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f({variables:{email:e.target.email.value,password:e.target.password.value}}).then((function(e){e.data&&(t(e.data.loginCompany.company),localStorage.setItem("token",e.data.loginCompany.token),u().fire({position:"top",icon:"success",title:"Login successfully",showConfirmButton:!1,timer:2e3,customClass:"swal-width"}),l(!0),n("/company-profile"))}))},className:"CompanyLoginForm",children:[(0,c.jsx)("h1",{className:"CompanyLoginHeader",children:"Employer Login"}),(0,c.jsx)("div",{className:"m-3 InputForm",children:(0,c.jsx)("input",{name:"email",type:"email",className:"form-control shadow-none",placeholder:"Email"})}),(0,c.jsx)("div",{className:"m-3 InputForm",children:(0,c.jsx)("input",{name:"password",type:"password",className:"form-control shadow-none",placeholder:"Password"})}),(0,c.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"}),(0,c.jsxs)("div",{className:"goToSignUp",children:[(0,c.jsx)("p",{children:"You Dont Have Account ?"}),(0,c.jsx)(p.rU,{to:"/company-signUp",children:"Sign Up"})]})]}),(0,c.jsx)("div",{className:"imageDiv"})]})})}},8395:function(n,e,t){t.d(e,{AX:function(){return k},AZ:function(){return N},Bk:function(){return v},ET:function(){return I},O$:function(){return j},Wr:function(){return P},X$:function(){return D},bc:function(){return C},e:function(){return S},lx:function(){return w},pY:function(){return h},qD:function(){return x},rc:function(){return U},rn:function(){return b}});var o,a,r,i,s,d,p,l,u,c,m,_,f,$,g=t(168),y=t(7570),h=(0,y.Ps)(o||(o=(0,g.Z)(["\n  mutation AddCompany(\n    $company_Name: String!\n    $owner_name: String!\n    $company_type: String!\n    $address: String!\n    $phone: String!\n    $email: String!\n    $password: String!\n    $description: String!\n  ) {\n    addCompany(\n      company_Name: $company_Name\n      owner_name: $owner_name\n      company_type: $company_type\n      address: $address\n      phone: $phone\n      email: $email\n      password: $password\n      description: $description\n    ) {\n      company_Name\n      owner_name\n      company_type\n      address\n      phone\n      email\n      password\n      description\n    }\n  }\n"]))),v=(0,y.Ps)(a||(a=(0,g.Z)(["\n  mutation LoginCompany($email: String!, $password: String!) {\n    loginCompany(email: $email, password: $password) {\n      token\n      tokenExpiration\n      company {\n        id\n        company_Name\n        owner_name\n        avatar\n        company_type\n        address\n        phone\n        email\n        description\n        favorite {\n          first_name\n          last_name\n          avatar\n          email\n          description\n        }\n        jobs {\n          id\n          job_Title\n          num_of_people_needed\n          job_description\n          issued_At\n          start_Date\n          end_Date\n        }\n      }\n    }\n  }\n"]))),b=(0,y.Ps)(r||(r=(0,g.Z)(["\n  mutation DeleteCompany($deleteCompanyId: ID) {\n    deleteCompany(id: $deleteCompanyId) {\n      success\n    }\n  }\n"]))),D=(0,y.Ps)(i||(i=(0,g.Z)(["\n  mutation UpdateCompany(\n    $updateCompanyId: ID!\n    $companyName: String\n    $ownerName: String\n    $file: Upload\n    $companyType: String\n    $address: String\n    $phone: String\n    $email: String\n    $password: String\n    $description: String\n  ) {\n    updateCompany(\n      id: $updateCompanyId\n      company_Name: $companyName\n      owner_name: $ownerName\n      file: $file\n      company_type: $companyType\n      address: $address\n      phone: $phone\n      email: $email\n      password: $password\n      description: $description\n    ) {\n      id\n      company_Name\n      owner_name\n      avatar\n      company_type\n      address\n      phone\n      email\n      password\n      description\n    }\n  }\n"]))),w=(0,y.Ps)(s||(s=(0,g.Z)(["\n  mutation updateCompanyFavorite($userId: ID!, $companyId: ID!) {\n    updateCompanyFavorite(userId: $userId, companyId: $companyId) {\n      id\n      company_Name\n      owner_name\n      avatar\n      company_type\n      address\n      phone\n      email\n      password\n      description\n    }\n  }\n"]))),I=(0,y.Ps)(d||(d=(0,g.Z)(["\n  mutation DeleteCompanyFavorite($companyId: ID!, $userId: ID!) {\n    deleteCompanyFavorite(companyId: $companyId, userId: $userId) {\n      id\n      company_Name\n      owner_name\n      avatar\n      company_type\n      address\n      phone\n      email\n      password\n      description\n    }\n  }\n"]))),S=(0,y.Ps)(p||(p=(0,g.Z)(["\n  mutation addUser(\n    $first_name: String!\n    $last_name: String!\n    $phone: String!\n    $email: String!\n    $password: String!\n    $hourly_rate: Int!\n    $description: String!\n  ) {\n    addUser(\n      first_name: $first_name\n      last_name: $last_name\n      phone: $phone\n      email: $email\n      password: $password\n      hourly_rate: $hourly_rate\n      description: $description\n    ) {\n      id\n    }\n  }\n"]))),j=(0,y.Ps)(l||(l=(0,g.Z)(["\n  mutation updateUserFavorite($userId: ID!, $job: JobInputType) {\n    updateUserFavorite(userId: $userId, job: $job) {\n      id\n      first_name\n      last_name\n      email\n      favorite {\n        job_Title\n        start_Date\n        end_Date\n        issued_At\n        created_by {\n          company_Name\n          company_type\n          email\n        }\n      }\n    }\n  }\n"]))),C=(0,y.Ps)(u||(u=(0,g.Z)(["\n  mutation LoginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      token\n      tokenExpiration\n      user {\n        first_name\n        last_name\n        avatar\n        email\n        phone\n        password\n        hourly_rate\n        description\n        id\n        favorite {\n          id\n          job_Title\n          start_Date\n          end_Date\n          num_of_people_needed\n        }\n      }\n    }\n  }\n"]))),N=(0,y.Ps)(c||(c=(0,g.Z)(["\n  mutation DeleteUser($deleteUserId: ID) {\n    deleteUser(id: $deleteUserId) {\n      success\n    }\n  }\n"]))),k=(0,y.Ps)(m||(m=(0,g.Z)(["\n  mutation UpdateUser(\n    $updateUserId: ID!\n    $firstName: String\n    $lastName: String\n    $file: Upload\n    $email: String\n    $password: String\n    $phone: String\n    $hourlyRate: Int\n    $description: String\n  ) {\n    updateUser(\n      id: $updateUserId\n      first_name: $firstName\n      last_name: $lastName\n      file: $file\n      email: $email\n      password: $password\n      phone: $phone\n      hourly_rate: $hourlyRate\n      description: $description\n    ) {\n      id\n      first_name\n      last_name\n      avatar\n      email\n      phone\n      password\n      hourly_rate\n      description\n    }\n  }\n"]))),U=(0,y.Ps)(_||(_=(0,g.Z)(["\n  mutation AddJob(\n    $jobTitle: String!\n    $startDate: String!\n    $endDate: String!\n    $numOfPeopleNeeded: Int!\n    $jobDescription: String!\n    $createdBy: ID!\n  ) {\n    addJob(\n      job_Title: $jobTitle\n      start_Date: $startDate\n      end_Date: $endDate\n      num_of_people_needed: $numOfPeopleNeeded\n      job_description: $jobDescription\n      created_by: $createdBy\n    ) {\n      job_Title\n      start_Date\n      end_Date\n      num_of_people_needed\n      job_description\n      created_by {\n        company_Name\n      }\n    }\n  }\n"]))),P=(0,y.Ps)(f||(f=(0,g.Z)(["\n  mutation DeleteJob($deleteJobId: ID) {\n    deleteJob(id: $deleteJobId) {\n      success\n    }\n  }\n"]))),x=(0,y.Ps)($||($=(0,g.Z)(["\n  mutation UpdateJob(\n    $updateJobId: ID!\n    $jobTitle: String\n    $startDate: String\n    $endDate: String\n    $numOfPeopleNeeded: Int\n    $jobDescription: String\n  ) {\n    updateJob(\n      id: $updateJobId\n      job_Title: $jobTitle\n      start_Date: $startDate\n      end_Date: $endDate\n      num_of_people_needed: $numOfPeopleNeeded\n      job_description: $jobDescription\n    ) {\n      id\n      job_Title\n      start_Date\n      end_Date\n      num_of_people_needed\n      job_description\n    }\n  }\n"])))},8012:function(){},168:function(n,e,t){function o(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}t.d(e,{Z:function(){return o}})},5046:function(n,e,t){t.d(e,{x:function(){return i}});var o=t(7251),a=t(2791),r=t(9819);function i(n){var e=(0,a.useContext)((0,r.K)()),t=n||e.client;return __DEV__?(0,o.kG)(!!t,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,o.kG)(!!t,29),t}},4376:function(n,e,t){t.d(e,{D:function(){return l}});var o=t(9388),a=t(2791),r=t(2642),i=t(5970),s=t(2364),d=t(9484),p=t(5046);function l(n,e){var t=(0,p.x)(null===e||void 0===e?void 0:e.client);(0,s.Vp)(n,s.n_.Mutation);var l=(0,a.useState)({called:!1,loading:!1,client:t}),u=l[0],c=l[1],m=(0,a.useRef)({result:u,mutationId:0,isMounted:!0,client:t,mutation:n,options:e});Object.assign(m.current,{client:t,options:e,mutation:n});var _=(0,a.useCallback)((function(n){void 0===n&&(n={});var e=m.current,t=e.client,a=e.options,s=e.mutation,p=(0,o.pi)((0,o.pi)({},a),{mutation:s});m.current.result.loading||p.ignoreResults||c(m.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:t});var l=++m.current.mutationId,u=(0,r.J)(p,n);return t.mutate(u).then((function(e){var o,a,r=e.data,s=e.errors,_=s&&s.length>0?new d.c({graphQLErrors:s}):void 0;if(l===m.current.mutationId&&!u.ignoreResults){var f={called:!0,loading:!1,data:r,error:_,client:t};m.current.isMounted&&!(0,i.D)(m.current.result,f)&&c(m.current.result=f)}return null===(o=p.onCompleted)||void 0===o||o.call(p,e.data),null===(a=n.onCompleted)||void 0===a||a.call(n,e.data),e})).catch((function(e){var o,a;if(l===m.current.mutationId&&m.current.isMounted){var r={loading:!1,error:e,data:void 0,called:!0,client:t};(0,i.D)(m.current.result,r)||c(m.current.result=r)}if(p.onError||u.onError)return null===(o=p.onError)||void 0===o||o.call(p,e),null===(a=n.onError)||void 0===a||a.call(n,e),{data:void 0,errors:e};throw e}))}),[]),f=(0,a.useCallback)((function(){c({called:!1,loading:!1,client:t})}),[]);return(0,a.useEffect)((function(){return function(){m.current.isMounted=!1}}),[]),[_,(0,o.pi)({reset:f},u)]}},2364:function(n,e,t){t.d(e,{Vp:function(){return s},n_:function(){return o}});var o,a=t(7251);!function(n){n[n.Query=0]="Query",n[n.Mutation=1]="Mutation",n[n.Subscription=2]="Subscription"}(o||(o={}));var r=new Map;function i(n){var e;switch(n){case o.Query:e="Query";break;case o.Mutation:e="Mutation";break;case o.Subscription:e="Subscription"}return e}function s(n,e){var t=function(n){var e,t,i=r.get(n);if(i)return i;__DEV__?(0,a.kG)(!!n&&!!n.kind,"Argument of ".concat(n," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):(0,a.kG)(!!n&&!!n.kind,30);var s=n.definitions.filter((function(n){return"FragmentDefinition"===n.kind})),d=n.definitions.filter((function(n){return"OperationDefinition"===n.kind&&"query"===n.operation})),p=n.definitions.filter((function(n){return"OperationDefinition"===n.kind&&"mutation"===n.operation})),l=n.definitions.filter((function(n){return"OperationDefinition"===n.kind&&"subscription"===n.operation}));__DEV__?(0,a.kG)(!s.length||d.length||p.length||l.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):(0,a.kG)(!s.length||d.length||p.length||l.length,31),__DEV__?(0,a.kG)(d.length+p.length+l.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(n," had ").concat(d.length," queries, ").concat(l.length," ")+"subscriptions and ".concat(p.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):(0,a.kG)(d.length+p.length+l.length<=1,32),t=d.length?o.Query:o.Mutation,d.length||p.length||(t=o.Subscription);var u=d.length?d:p.length?p:l;__DEV__?(0,a.kG)(1===u.length,"react-apollo only supports one definition per HOC. ".concat(n," had ")+"".concat(u.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):(0,a.kG)(1===u.length,33);var c=u[0];e=c.variableDefinitions||[];var m={name:c.name&&"Name"===c.name.kind?c.name.value:"data",type:t,variables:e};return r.set(n,m),m}(n),s=i(e),d=i(t.type);__DEV__?(0,a.kG)(t.type===e,"Running a ".concat(s," requires a graphql ")+"".concat(s,", but a ").concat(d," was used instead.")):(0,a.kG)(t.type===e,34)}}}]);
//# sourceMappingURL=490.eee9111c.chunk.js.map