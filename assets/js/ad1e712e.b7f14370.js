"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[9235],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),u=n,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6592:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],s={title:"Official middlewares",sidebar_position:0},l=void 0,d={unversionedId:"middlewares/intro",id:"middlewares/intro",title:"Official middlewares",description:"Middy comes with a series of additional (opt-in) plugins that are officially maintained by the core team and kept in sync with every release of the core package.",source:"@site/docs/middlewares/00-intro.md",sourceDirName:"middlewares",slug:"/middlewares/intro",permalink:"/docs/middlewares/intro",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/00-intro.md",tags:[],version:"current",lastUpdatedAt:1665847492,formattedLastUpdatedAt:"10/15/2022",sidebarPosition:0,frontMatter:{title:"Official middlewares",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Middlewares",permalink:"/docs/category/middlewares"},next:{title:"Third-party middlewares",permalink:"/docs/middlewares/third-party"}},p={},m=[{value:"Misc",id:"misc",level:2},{value:"Request Transformation",id:"request-transformation",level:2},{value:"Response Transformation",id:"response-transformation",level:2},{value:"Fetch Data",id:"fetch-data",level:2}],c={toc:m};function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Middy comes with a series of additional (opt-in) plugins that are officially maintained by the core team and kept in sync with every release of the core package."),(0,i.kt)("p",null,"These middleware focus on common use cases when using Lambda with other AWS services."),(0,i.kt)("p",null,"Each middleware should do a single task. We try to balance each to be as performant as possible while meeting the majority of developer needs."),(0,i.kt)("h2",{id:"misc"},"Misc"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/cloudwatch-metrics"},(0,i.kt)("inlineCode",{parentName:"a"},"cloudwatch-metrics")),": Hydrates lambda's ",(0,i.kt)("inlineCode",{parentName:"li"},"context.metrics")," property with an instance of AWS MetricLogger"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/do-not-wait-for-empty-event-loop"},(0,i.kt)("inlineCode",{parentName:"a"},"do-not-wait-for-empty-event-loop")),": Sets callbackWaitsForEmptyEventLoop property to false"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/error-logger"},(0,i.kt)("inlineCode",{parentName:"a"},"error-logger")),": Logs errors"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/input-output-logger"},(0,i.kt)("inlineCode",{parentName:"a"},"input-output-logger")),": Logs request and response"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/warmup"},(0,i.kt)("inlineCode",{parentName:"a"},"warmup")),": Used to pre-warm a lambda function")),(0,i.kt)("h2",{id:"request-transformation"},"Request Transformation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/event-normalizer"},(0,i.kt)("inlineCode",{parentName:"a"},"event-normalizer")),": Middleware for iterating through an AWS event records, parsing and normalizing nested events."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/http-content-negotiation"},(0,i.kt)("inlineCode",{parentName:"a"},"http-content-negotiation")),": Parses ",(0,i.kt)("inlineCode",{parentName:"li"},"Accept-*")," headers and provides utilities for content negotiation (charset, encoding, language and media type) for HTTP requests"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/http-event-normalizer"},(0,i.kt)("inlineCode",{parentName:"a"},"http-event-normalizer")),": Normalizes HTTP events by adding an empty object for ",(0,i.kt)("inlineCode",{parentName:"li"},"queryStringParameters"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"multiValueQueryStringParameters")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"pathParameters")," if they are missing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/http-header-normalizer"},(0,i.kt)("inlineCode",{parentName:"a"},"http-header-normalizer")),": Normalizes HTTP header names to their canonical format"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/http-json-body-parser"},(0,i.kt)("inlineCode",{parentName:"a"},"http-json-body-parser")),": Automatically parses HTTP requests with JSON body and converts the body into an object. Also handles gracefully broken JSON if used in combination of\n",(0,i.kt)("inlineCode",{parentName:"li"},"httpErrorHandler"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/http-multipart-body-parser"},(0,i.kt)("inlineCode",{parentName:"a"},"http-multipart-body-parser")),": Automatically parses HTTP requests with content type ",(0,i.kt)("inlineCode",{parentName:"li"},"multipart/form-data")," and converts the body into an object."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/http-urlencode-body-parser"},(0,i.kt)("inlineCode",{parentName:"a"},"http-urlencode-body-parser")),": Automatically parses HTTP requests with URL encoded body (typically the result of a form submit)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/http-urlencode-path-parser"},(0,i.kt)("inlineCode",{parentName:"a"},"http-urlencode-path-parser")),": Automatically parses HTTP requests with URL encoded path."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/validator"},(0,i.kt)("inlineCode",{parentName:"a"},"validator")),": Automatically validates incoming events and outgoing responses against custom schemas."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/ws-json-body-parser"},(0,i.kt)("inlineCode",{parentName:"a"},"ws-json-body-parser")),": Automatically parses WebSocket requests with JSON message and converts the message into an object.")),(0,i.kt)("h2",{id:"response-transformation"},"Response Transformation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/http-content-encoding"},(0,i.kt)("inlineCode",{parentName:"a"},"http-content-encoding")),": Sets HTTP Content-Encoding header on response and compresses response body"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/http-cors"},(0,i.kt)("inlineCode",{parentName:"a"},"http-cors")),": Sets HTTP CORS headers on response"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/http-error-handler"},(0,i.kt)("inlineCode",{parentName:"a"},"http-error-handler")),": Creates a proper HTTP response for errors that are created with the ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/http-errors"},"http-errors")," module and represents proper HTTP errors."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/http-security-headers"},(0,i.kt)("inlineCode",{parentName:"a"},"http-security-headers")),": Applies best practice security headers to responses. It's a simplified port of HelmetJS."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/http-partial-response"},(0,i.kt)("inlineCode",{parentName:"a"},"http-partial-response")),": Filter response objects attributes based on query string parameters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/http-response-serializer"},(0,i.kt)("inlineCode",{parentName:"a"},"http-response-serializer")),": HTTP response serializer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/sqs-partial-batch-failure"},(0,i.kt)("inlineCode",{parentName:"a"},"sqs-partial-batch-failure")),": Handles partially failed SQS batches."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/ws-response"},(0,i.kt)("inlineCode",{parentName:"a"},"ws-response")),": Forwards response to WebSocket endpoint.")),(0,i.kt)("h2",{id:"fetch-data"},"Fetch Data"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/rds-signer"},(0,i.kt)("inlineCode",{parentName:"a"},"rds-signer")),": Fetches token for connecting to RDS with IAM users."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/s3-object-response"},(0,i.kt)("inlineCode",{parentName:"a"},"s3-object-response")),": Gets and write S3 object response."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/secrets-manager"},(0,i.kt)("inlineCode",{parentName:"a"},"secrets-manager")),": Fetches parameters from ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html"},"AWS Secrets Manager"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/service-discovery"},(0,i.kt)("inlineCode",{parentName:"a"},"service-discovery")),": Fetches Service Discovery instances to be used when connecting to other AWS services."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/ssm"},(0,i.kt)("inlineCode",{parentName:"a"},"ssm")),": Fetches parameters from ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-paramstore.html"},"AWS Systems Manager Parameter Store"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/middlewares/sts"},(0,i.kt)("inlineCode",{parentName:"a"},"sts")),": Fetches credentials to assumes IAM roles for connection to other AWS services.")))}u.isMDXComponent=!0}}]);