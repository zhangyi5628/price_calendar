lvping.provide("lvping.ui.Control");
(function(f){var g,m,j,n,k,e,h,o,i,p,l,r=Array.prototype.slice,q=Object.prototype.hasOwnProperty;j=function(a,c,b,d){return d?n(a,d,c,b):m(a,c,b)};m=function(a,c,b){a.jquery||(a=$(a));a.bind(c,b);return function(){a.unbind(c,b);return a=c=b=null}};n=function(a,c,b,d){a.jquery||(a=$(a));a.delegate(c,b,d);return function(){a.undelegate(c,b,d);return a=c=b=d=null}};h=function(a,c){var b;b=typeof c==="string"?a[c]:c;return function(){var c;c=1<=arguments.length?r.call(arguments,0):[];return b.apply(a,
[this].concat(c))}};k=function(a,c,b,d,f){return j(a,c,h(f,d),b)};o=function(a,c){var b;if(!c)return null;b=a.data("ui");if(typeof b==="string"){b=f.trim(b);b.charAt(0)!=="{"&&(b="{"+b+"}");try{b=eval("("+b+")")}catch(d){b=null}}if(b)return f.getOwn(b,c)};e={};l="change|click|contextmenu|dblclick|keydown|keyup|keypress|mousedown|mousemove|mouseout|mouseover|mouseup|reset|resize|scroll|select|submit|focusin|focusout|mouseenter|mouseleave".split("|");i=0;for(p=l.length;i<p;i++)g=l[i],e[g]=k;e.ready=
function(a,c,b,d,f){return $(h(f,d))};e.subscribe=function(a,c,b,d,s){var e;e=f.subscribe(b,s.proxy(d));return function(){f.unsubscribe(e);return e=null}};g=f.Class.extend("lvping.ui.Control",{init:function(){var a,c,b,d;this.actions={};d=this.prototype;for(b in d)if(q.call(d,b)&&(c=d[b],f.isFunction(c)&&(a=this.getAction_(b))))this.actions[b]=a;if(this.onDocument)return new this(document.documentElement)},isAction_:function(a){return e.hasOwnProperty(a)||f.array.indexOf(this.listensTo,a>-1)},getAction_:function(a){var c;
c=a.match(/^(?:(.*?)\s)?(\w+)$/);a=c[2];if(!this.isAction_(a))return null;return{selector:c[1],event:a,processor:this.processors[a]||e[a]||k}},defaults:{},processors:{},listensTo:{}},{setup:function(a,c){var b,d,e;b=this.klass;a.jquery&&(a=a[0]);this.type=(e=b.fullName)!=null?e.split(".").pop().toLowerCase():void 0;this.element=$(a);this.bindings_=[];this.options=f.merge(!0,b.defaults,o(this.element,this.type),c);e=b.actions;for(d in e)q.call(e,d)&&(b=e[d],this.bindings_.push(b.processor(a,b.event,
b.selector,d,this)));return this.bind(a,"destroyed",h(this,"destroy"))},bind:function(a,c,b){typeof a==="string"&&(b=[this.element,a,c],a=b[0],c=b[1],b=b[2]);return this.binder_(a,c,b)},delegate:function(a,c,b,d){typeof a==="string"&&(a=[a,c,b,this.element],c=a[0],b=a[1],d=a[2],a=a[3]);return this.binder_(a,b,d,c)},binder_:function(a,c,b,d){typeof b==="string"&&(b=h(this,b));return this.bindings_.push(j(a,c,b,d))},destroy:function(){var a,c,b,d;d=this.bindings_;c=0;for(b=d.length;c<b;c++)a=d[c],f.isFunction(a)&&
a();this.element=null;return this.destroy=f.fn.noop},find:function(a){return this.element.find(a)},publish:function(a,c){c==null&&(c=this);f.publish(a,c);return this}});g.mixin(f.eventTarget);g.processors=e}).call(this,this.lvping);