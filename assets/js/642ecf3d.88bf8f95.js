"use strict";(self.webpackChunkzio_http_docs=self.webpackChunkzio_http_docs||[]).push([[818],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return b}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),b=o,f=u["".concat(p,".").concat(b)]||u[b]||m[b]||a;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7194:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={},p="Simple Websocket Server",s={unversionedId:"v1.x/examples/zio-http-basic-examples/web-socket",id:"v1.x/examples/zio-http-basic-examples/web-socket",isDocsHomePage:!1,title:"Simple Websocket Server",description:"",source:"@site/docs/v1.x/examples/zio-http-basic-examples/web-socket.md",sourceDirName:"v1.x/examples/zio-http-basic-examples",slug:"/v1.x/examples/zio-http-basic-examples/web-socket",permalink:"/zio-http/docs/v1.x/examples/zio-http-basic-examples/web-socket",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Simple HTTP Client",permalink:"/zio-http/docs/v1.x/examples/zio-http-basic-examples/simple-client"},next:{title:"Authentication",permalink:"/zio-http/docs/v1.x/examples/advanced-examples/authentication"}},l=[],m={toc:l};function u(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"simple-websocket-server"},"Simple Websocket Server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zhttp.http._\nimport zhttp.service._\nimport zhttp.socket._\nimport zio._\nimport zio.duration._\nimport zio.stream.ZStream\n\nobject WebSocketEcho extends App {\n  private val socket =\n    Socket.collect[WebSocketFrame] {\n      case WebSocketFrame.Text("FOO")  => ZStream.succeed(WebSocketFrame.text("BAR"))\n      case WebSocketFrame.Text("BAR")  => ZStream.succeed(WebSocketFrame.text("FOO"))\n      case WebSocketFrame.Ping         => ZStream.succeed(WebSocketFrame.pong)\n      case WebSocketFrame.Pong         => ZStream.succeed(WebSocketFrame.ping)\n      case fr @ WebSocketFrame.Text(_) => ZStream.repeat(fr).schedule(Schedule.spaced(1 second)).take(10)\n    }\n\n  private val app =\n    Http.collectZIO[Request] {\n      case Method.GET -> !! / "greet" / name  => Response.text(s"Greetings {$name}!").wrapZIO\n      case Method.GET -> !! / "subscriptions" => socket.toResponse\n    }\n\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    Server.start(8090, app).exitCode\n}\n\n')))}u.isMDXComponent=!0}}]);