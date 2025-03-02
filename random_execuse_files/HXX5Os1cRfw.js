/*1461678673,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["WOF7d"]); }

__d('AbstractActionList.react',['React','ReactChildren','ReactFragment'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').createElement('span',{role:'presentation','aria-hidden':'true'},' \u00b7 '),i=c('React').createClass({displayName:'AbstractActionList',render:function(){var j=true,k=c('ReactChildren').map(this.props.children,function(l){if(!l)return l;if(j){j=false;return l;}return c('ReactFragment').create({BULLET:h,child:l});});return c('React').createElement('div',this.props,k);}});f.exports=i;},null);
__d('ActionList.react',['AbstractActionList.react','joinClasses','React'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').createClass({displayName:'ActionList',render:function(){return (c('React').createElement(c('AbstractActionList.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"fsm fwn fcg")}),this.props.children));}});f.exports=h;},null);
__d('AbstractCheckboxInput.react',['cx','invariant','React','joinClasses'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=c('React').createClass({displayName:'AbstractCheckboxInput',propTypes:{tooltip:j.string},render:function(){!(!this.props.children||this.props.children.length===0)?i(0):void 0;var l=c('joinClasses')(this.props.className,"_kv1"),m=c('React').createElement('input',babelHelpers['extends']({},this.props,{className:null,type:'checkbox'}),undefined);return (c('React').createElement('label',{className:l},m,c('React').createElement('span',{'data-hover':this.props.tooltip?'tooltip':null,'data-tooltip-content':this.props.tooltip})));}});f.exports=k;},null);
__d('XUICheckboxInput.react',['cx','AbstractCheckboxInput.react','React','joinClasses'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').createClass({displayName:'XUICheckboxInput',render:function(){return (c('React').createElement(c('AbstractCheckboxInput.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_55sg")}),undefined));}});f.exports=i;},null);
__d('CharacterMetadata',['immutable'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('immutable').Map,k=c('immutable').OrderedSet,l=c('immutable').Record,m=k(),n={style:m,entity:null},o=l(n);h=babelHelpers.inherits(p,o);i=h&&h.prototype;p.prototype.getStyle=function(){return this.get('style');};p.prototype.getEntity=function(){return this.get('entity');};p.prototype.hasStyle=function(s){return this.getStyle().has(s);};p.applyStyle=function(s,t){var u=s.set('style',s.getStyle().add(t));return p.create(u);};p.removeStyle=function(s,t){var u=s.set('style',s.getStyle().remove(t));return p.create(u);};p.applyEntity=function(s,t){var u=s.getEntity()===t?s:s.set('entity',t);return p.create(u);};p.create=function(s){if(!s)return q;var t=j({style:m,entity:null}).merge(s),u=r.get(t);if(u)return u;var v=new p(t);r=r.set(t,v);return v;};function p(){h.apply(this,arguments);}var q=new p(),r=j([[j(n),q]]);p.EMPTY=q;f.exports=p;},null);
__d('DraftEntityInstance',['immutable'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('immutable').Record,k=j({type:'TOKEN',mutability:'IMMUTABLE',data:Object});h=babelHelpers.inherits(l,k);i=h&&h.prototype;l.prototype.getType=function(){return this.get('type');};l.prototype.getMutability=function(){return this.get('mutability');};l.prototype.getData=function(){return this.get('data');};function l(){h.apply(this,arguments);}f.exports=l;},null);
__d('DraftEntity',['invariant','DraftEntityInstance','immutable'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('immutable').Map,j=i(),k=0,l={create:function(m,n,o){return l.add(new (c('DraftEntityInstance'))({type:m,mutability:n,data:o||{}}));},add:function(m){var n=''+ ++k;j=j.set(n,m);return n;},get:function(m){var n=j.get(m);!!!n?h(0):void 0;return n;},mergeData:function(m,n){var o=l.get(m),p=babelHelpers['extends']({},o.getData(),n),q=o.set('data',p);j=j.set(m,q);return q;},replaceData:function(m,n){var o=l.get(m),p=o.set('data',n);j=j.set(m,p);return p;}};f.exports=l;},null);
__d('generateRandomKey',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={},i=Math.pow(2,24);function j(){var k=void 0;while(k===undefined||h.hasOwnProperty(k)||!isNaN(+k))k=Math.floor(Math.random()*i).toString(32);h[k]=true;return k;}f.exports=j;},null);
__d('findRangesImmutable',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i,j,k,l){if(!i.size)return;var m=0;i.reduce(function(n,o,p){if(!j(n,o)){if(k(n))l(m,p);m=p;}return o;});k(i.last())&&l(m,i.count());}f.exports=h;},null);
__d('BlockMapBuilder',['immutable'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('immutable').OrderedMap,i={createFromArray:function(j){return h(j.map(function(k){return [k.getKey(),k];}));}};f.exports=i;},null);
__d('BlockTree',['immutable','emptyFunction','findRangesImmutable'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('immutable').List,i=c('immutable').Repeat,j=c('immutable').Record,k=c('emptyFunction').thatReturnsTrue,l='-',m={start:null,end:null},n=j(m),o={start:null,end:null,decoratorKey:null,leaves:null},p=j(o),q={generate:function(t,u){var v=t.getLength();if(!v)return h.of(new p({start:0,end:0,decoratorKey:null,leaves:h.of(new n({start:0,end:0}))}));var w=[],x=u?u.getDecorations(t):h(i(null,v)),y=t.getCharacterList();c('findRangesImmutable')(x,s,k,function(z,aa){w.push(new p({start:z,end:aa,decoratorKey:x.get(z),leaves:r(y.slice(z,aa).toList(),z)}));});return h(w);},getFingerprint:function(t){return t.map(function(u){var v=u.get('decoratorKey'),w=v!==null?v+'.'+(u.get('end')-u.get('start')):'';return ''+w+'.'+u.get('leaves').size;}).join(l);}};function r(t,u){var v=[],w=t.map(function(x){return x.getStyle();}).toList();c('findRangesImmutable')(w,s,k,function(x,y){v.push(new n({start:x+u,end:y+u}));});return h(v);}function s(t,u){return t===u;}f.exports=q;},null);
__d('ContentBlock',['immutable','findRangesImmutable'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('immutable').List,k=c('immutable').OrderedSet,l=c('immutable').Record,m=k(),n={key:'',type:'unstyled',text:'',characterList:j(),depth:0},o=l(n);h=babelHelpers.inherits(p,o);i=h&&h.prototype;p.prototype.getKey=function(){return this.get('key');};p.prototype.getType=function(){return this.get('type');};p.prototype.getText=function(){return this.get('text');};p.prototype.getCharacterList=function(){return this.get('characterList');};p.prototype.getLength=function(){return this.getText().length;};p.prototype.getDepth=function(){return this.get('depth');};p.prototype.getInlineStyleAt=function(s){var t=this.getCharacterList().get(s);return t?t.getStyle():m;};p.prototype.getEntityAt=function(s){var t=this.getCharacterList().get(s);return t?t.getEntity():null;};p.prototype.findStyleRanges=function(s,t){c('findRangesImmutable')(this.getCharacterList(),q,s,t);};p.prototype.findEntityRanges=function(s,t){c('findRangesImmutable')(this.getCharacterList(),r,s,t);};function p(){h.apply(this,arguments);}function q(s,t){return s.getStyle()===t.getStyle();}function r(s,t){return s.getEntity()===t.getEntity();}f.exports=p;},null);
__d('SelectionState',['immutable'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('immutable').Record,k={anchorKey:'',anchorOffset:0,focusKey:'',focusOffset:0,isBackward:false,hasFocus:false},l=j(k);h=babelHelpers.inherits(m,l);i=h&&h.prototype;m.prototype.serialize=function(){return ('Anchor: '+this.getAnchorKey()+':'+this.getAnchorOffset()+', '+'Focus: '+this.getFocusKey()+':'+this.getFocusOffset()+', '+'Is Backward: '+String(this.getIsBackward())+', '+'Has Focus: '+String(this.getHasFocus()));};m.prototype.getAnchorKey=function(){return this.get('anchorKey');};m.prototype.getAnchorOffset=function(){return this.get('anchorOffset');};m.prototype.getFocusKey=function(){return this.get('focusKey');};m.prototype.getFocusOffset=function(){return this.get('focusOffset');};m.prototype.getIsBackward=function(){return this.get('isBackward');};m.prototype.getHasFocus=function(){return this.get('hasFocus');};m.prototype.hasEdgeWithin=function(n,o,p){var q=this.getAnchorKey(),r=this.getFocusKey();if(q===r&&q===n){var s=this.getStartOffset(),t=this.getEndOffset();return o<=t&&s<=p;}if(n!==q&&n!==r)return false;var u=n===q?this.getAnchorOffset():this.getFocusOffset();return o<=u&&p>=u;};m.prototype.isCollapsed=function(){return (this.getAnchorKey()===this.getFocusKey()&&this.getAnchorOffset()===this.getFocusOffset());};m.prototype.getStartKey=function(){return this.getIsBackward()?this.getFocusKey():this.getAnchorKey();};m.prototype.getStartOffset=function(){return this.getIsBackward()?this.getFocusOffset():this.getAnchorOffset();};m.prototype.getEndKey=function(){return this.getIsBackward()?this.getAnchorKey():this.getFocusKey();};m.prototype.getEndOffset=function(){return this.getIsBackward()?this.getAnchorOffset():this.getFocusOffset();};m.createEmpty=function(n){return new m({anchorKey:n,anchorOffset:0,focusKey:n,focusOffset:0,isBackward:false,hasFocus:false});};function m(){h.apply(this,arguments);}f.exports=m;},null);
__d('sanitizeDraftText',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=new RegExp('\r','g');function i(j){return j.replace(h,'');}f.exports=i;},null);
__d('ContentState',['BlockMapBuilder','CharacterMetadata','ContentBlock','immutable','SelectionState','generateRandomKey','sanitizeDraftText'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('immutable').List,k=c('immutable').Record,l=c('immutable').Repeat,m={blockMap:null,selectionBefore:null,selectionAfter:null},n=k(m);h=babelHelpers.inherits(o,n);i=h&&h.prototype;o.prototype.getBlockMap=function(){return this.get('blockMap');};o.prototype.getSelectionBefore=function(){return this.get('selectionBefore');};o.prototype.getSelectionAfter=function(){return this.get('selectionAfter');};o.prototype.getBlockForKey=function(p){var q=this.getBlockMap().get(p);return q;};o.prototype.getKeyBefore=function(p){return this.getBlockMap().reverse().keySeq().skipUntil(function(q){return q===p;}).skip(1).first();};o.prototype.getKeyAfter=function(p){return this.getBlockMap().keySeq().skipUntil(function(q){return q===p;}).skip(1).first();};o.prototype.getBlockAfter=function(p){return this.getBlockMap().skipUntil(function(q,r){return r===p;}).skip(1).first();};o.prototype.getBlockBefore=function(p){return this.getBlockMap().reverse().skipUntil(function(q,r){return r===p;}).skip(1).first();};o.prototype.getBlocksAsArray=function(){return this.getBlockMap().toArray();};o.prototype.getFirstBlock=function(){return this.getBlockMap().first();};o.prototype.getLastBlock=function(){return this.getBlockMap().last();};o.prototype.getPlainText=function(p){return this.getBlockMap().map(function(q){return q?q.getText():'';}).join(p||'\n');};o.prototype.hasText=function(){var p=this.getBlockMap();return (p.size>1||p.first().getLength()>0);};o.createFromBlockArray=function(p){var q=c('BlockMapBuilder').createFromArray(p),r=c('SelectionState').createEmpty(q.first().getKey());return new o({blockMap:q,selectionBefore:r,selectionAfter:r});};o.createFromText=function(p){var q=arguments.length<=1||arguments[1]===undefined?/\r\n?|\n/g:arguments[1],r=p.split(q),s=r.map(function(t){t=c('sanitizeDraftText')(t);return new (c('ContentBlock'))({key:c('generateRandomKey')(),text:t,type:'unstyled',characterList:j(l(c('CharacterMetadata').EMPTY,t.length))});});return o.createFromBlockArray(s);};function o(){h.apply(this,arguments);}f.exports=o;},null);
__d('UnicodeBidiService',['invariant','UnicodeBidi','UnicodeBidiDirection'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();function i(j){if(!j){j=c('UnicodeBidiDirection').getGlobalDir();}else !c('UnicodeBidiDirection').isStrong(j)?h(0):void 0;this.$UnicodeBidiService1=j;this.reset();}i.prototype.reset=function(){this.$UnicodeBidiService2=this.$UnicodeBidiService1;};i.prototype.getDirection=function(j){this.$UnicodeBidiService2=c('UnicodeBidi').getDirection(j,this.$UnicodeBidiService2);return this.$UnicodeBidiService2;};f.exports=i;},null);
__d('EditorBidiService',['immutable','UnicodeBidiService','nullthrows'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('immutable').OrderedMap,i,j={getDirectionMap:function(k,l){if(!i){i=new (c('UnicodeBidiService'))();}else i.reset();var m=k.getBlockMap(),n=m.valueSeq().map(function(p){return c('nullthrows')(i).getDirection(p.getText());}),o=h(m.keySeq().zip(n));if(l!=null&&c('immutable').is(l,o))return l;return o;}};f.exports=j;},null);
__d('EditorState',['BlockTree','ContentState','EditorBidiService','immutable','SelectionState'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('immutable').OrderedSet,i=c('immutable').Record,j=c('immutable').Stack,k={allowUndo:true,currentContent:null,decorator:null,directionMap:null,forceSelection:false,inCompositionMode:false,inlineStyleOverride:null,lastChangeType:null,nativelyRenderedContent:null,redoStack:j(),selection:null,treeMap:null,undoStack:j()},l=i(k);m.createEmpty=function(v){return m.createWithContent(c('ContentState').createFromText(''),v);};m.createWithContent=function(v,w){var x=v.getBlockMap().first().getKey();return m.create({currentContent:v,undoStack:j(),redoStack:j(),decorator:w||null,selection:c('SelectionState').createEmpty(x)});};m.create=function(v){var w=v.currentContent,x=v.decorator,y=babelHelpers['extends']({},v,{treeMap:o(w,x),directionMap:c('EditorBidiService').getDirectionMap(w)});return new m(new l(y));};m.set=function(v,w){var x=v.getImmutable().withMutations(function(y){var z=y.get('decorator'),aa=z;if(w.decorator===null){aa=null;}else if(w.decorator)aa=w.decorator;var ba=w.currentContent||v.getCurrentContent();if(aa!==z){var ca=y.get('treeMap'),da;if(aa&&z){da=q(ba.getBlockMap(),ca,aa,z);}else da=o(ba,aa);y.merge({decorator:aa,treeMap:da,nativelyRenderedContent:null});return;}var ea=v.getCurrentContent();if(ba!==ea)y.set('treeMap',p(v,ba.getBlockMap(),aa));y.merge(w);});return new m(x);};m.prototype.toJS=function(){return this.getImmutable().toJS();};m.prototype.getAllowUndo=function(){return this.getImmutable().get('allowUndo');};m.prototype.getCurrentContent=function(){return this.getImmutable().get('currentContent');};m.prototype.getUndoStack=function(){return this.getImmutable().get('undoStack');};m.prototype.getRedoStack=function(){return this.getImmutable().get('redoStack');};m.prototype.getSelection=function(){return this.getImmutable().get('selection');};m.prototype.getDecorator=function(){return this.getImmutable().get('decorator');};m.prototype.isInCompositionMode=function(){return this.getImmutable().get('inCompositionMode');};m.prototype.mustForceSelection=function(){return this.getImmutable().get('forceSelection');};m.prototype.getNativelyRenderedContent=function(){return this.getImmutable().get('nativelyRenderedContent');};m.prototype.getLastChangeType=function(){return this.getImmutable().get('lastChangeType');};m.prototype.getInlineStyleOverride=function(){return this.getImmutable().get('inlineStyleOverride');};m.setInlineStyleOverride=function(v,w){return m.set(v,{inlineStyleOverride:w});};m.prototype.getCurrentInlineStyle=function(){var v=this.getInlineStyleOverride();if(v!=null)return v;var w=this.getCurrentContent(),x=this.getSelection();if(x.isCollapsed())return s(w,x);return t(w,x);};m.prototype.getBlockTree=function(v){return this.getImmutable().getIn(['treeMap',v]);};m.prototype.isSelectionAtStartOfContent=function(){var v=this.getCurrentContent().getBlockMap().first().getKey();return this.getSelection().hasEdgeWithin(v,0,0);};m.prototype.isSelectionAtEndOfContent=function(){var v=this.getCurrentContent(),w=v.getBlockMap(),x=w.last(),y=x.getLength();return this.getSelection().hasEdgeWithin(x.getKey(),y,y);};m.prototype.getDirectionMap=function(){return this.getImmutable().get('directionMap');};m.acceptSelection=function(v,w){return n(v,w,false);};m.forceSelection=function(v,w){if(!w.getHasFocus())w=w.set('hasFocus',true);return n(v,w,true);};m.moveSelectionToEnd=function(v){var w=v.getCurrentContent(),x=w.getLastBlock(),y=x.getKey(),z=x.getLength();return m.acceptSelection(v,new (c('SelectionState'))({anchorKey:y,anchorOffset:z,focusKey:y,focusOffset:z,isBackward:false}));};m.moveFocusToEnd=function(v){var w=m.moveSelectionToEnd(v);return m.forceSelection(w,w.getSelection());};m.push=function(v,w,x){if(v.getCurrentContent()===w)return v;var y=x!=='insert-characters',z=c('EditorBidiService').getDirectionMap(w,v.getDirectionMap());if(!v.getAllowUndo())return m.set(v,{currentContent:w,directionMap:z,lastChangeType:x,selection:w.getSelectionAfter(),forceSelection:y,inlineStyleOverride:null});var aa=v.getSelection(),ba=v.getCurrentContent(),ca=v.getUndoStack(),da=w;if(aa!==ba.getSelectionAfter()||r(v,x)){ca=ca.push(ba);da=da.set('selectionBefore',aa);}else if(x==='insert-characters'||x==='backspace-character'||x==='delete-character')da=da.set('selectionBefore',ba.getSelectionBefore());var ea=v.getInlineStyleOverride();if(x!=='adjust-depth'&&x!=='change-block-type')ea=null;var fa={currentContent:da,directionMap:z,undoStack:ca,redoStack:j(),lastChangeType:x,selection:w.getSelectionAfter(),forceSelection:y,inlineStyleOverride:ea};return m.set(v,fa);};m.undo=function(v){if(!v.getAllowUndo())return v;var w=v.getUndoStack(),x=w.peek();if(!x)return v;var y=v.getCurrentContent(),z=c('EditorBidiService').getDirectionMap(x,v.getDirectionMap());return m.set(v,{currentContent:x,directionMap:z,undoStack:w.shift(),redoStack:v.getRedoStack().push(y),forceSelection:true,inlineStyleOverride:null,lastChangeType:'undo',nativelyRenderedContent:null,selection:y.getSelectionBefore()});};m.redo=function(v){if(!v.getAllowUndo())return v;var w=v.getRedoStack(),x=w.peek();if(!x)return v;var y=v.getCurrentContent(),z=c('EditorBidiService').getDirectionMap(x,v.getDirectionMap());return m.set(v,{currentContent:x,directionMap:z,undoStack:v.getUndoStack().push(y),redoStack:w.shift(),forceSelection:true,inlineStyleOverride:null,lastChangeType:'redo',nativelyRenderedContent:null,selection:x.getSelectionAfter()});};function m(v){this.$EditorState1=v;}m.prototype.getImmutable=function(){return this.$EditorState1;};function n(v,w,x){return m.set(v,{selection:w,forceSelection:x,nativelyRenderedContent:null,inlineStyleOverride:null});}function o(v,w){return v.getBlockMap().map(function(x){return c('BlockTree').generate(x,w);}).toOrderedMap();}function p(v,w,x){var y=v.getCurrentContent().getBlockMap(),z=v.getImmutable().get('treeMap');return z.merge(w.toSeq().filter(function(aa,ba){return aa!==y.get(ba);}).map(function(aa){return c('BlockTree').generate(aa,x);}));}function q(v,w,x,y){return w.merge(v.toSeq().filter(function(z){return (x.getDecorations(z)!==y.getDecorations(z));}).map(function(z){return c('BlockTree').generate(z,x);}));}function r(v,w){var x=v.getLastChangeType();return (w!==x||w!=='insert-characters'&&w!=='backspace-character'&&w!=='delete-character');}function s(v,w){var x=w.getStartKey(),y=w.getStartOffset(),z=v.getBlockForKey(x);if(y>0)return z.getInlineStyleAt(y-1);if(z.getLength())return z.getInlineStyleAt(0);return u(v,x);}function t(v,w){var x=w.getStartKey(),y=w.getStartOffset(),z=v.getBlockForKey(x);if(y<z.getLength())return z.getInlineStyleAt(y);if(y>0)return z.getInlineStyleAt(y-1);return u(v,x);}function u(v,w){var x=v.getBlockBefore(w),y;while(x){y=x.getLength();if(y)return x.getInlineStyleAt(y-1);x=v.getBlockBefore(x.getKey());}return h();}f.exports=m;},null);
__d('getSafeBodyFromHTML',['UserAgent'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('UserAgent').isBrowser('IE <= 9');function i(j){var k,l=null;if(!h&&document.implementation&&document.implementation.createHTMLDocument){k=document.implementation.createHTMLDocument('foo');k.documentElement.innerHTML=j;l=k.getElementsByTagName('body')[0];}return l;}f.exports=i;},null);
__d('DraftEditor.react',['cx','DefaultDraftInlineStyle','DraftEditorCompositionHandler','DraftEditorContents.react','DraftEditorDragHandler','DraftEditorEditHandler','DraftEditorPlaceholder.react','EditorState','React','ReactDOM','Scroll','Style','UserAgent','emptyFunction','generateRandomKey','getDefaultKeyBinding','nullthrows','getScrollPosition'],function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('UserAgent').isBrowser('IE'),l=!k,m={edit:c('DraftEditorEditHandler'),composite:c('DraftEditorCompositionHandler'),drag:c('DraftEditorDragHandler'),cut:null,render:null};i=babelHelpers.inherits(n,c('React').Component);j=i&&i.prototype;n.defaultProps={blockRendererFn:c('emptyFunction').thatReturnsNull,blockStyleFn:c('emptyFunction').thatReturns(''),keyBindingFn:c('getDefaultKeyBinding'),readOnly:false,spellCheck:false,stripPastedStyles:false};function n(o){j.constructor.call(this,o);this.$DraftEditor1=false;this.$DraftEditor2=null;this.$DraftEditor3=false;this.$DraftEditor4=null;this.$DraftEditor5=0;this.$DraftEditor6=c('generateRandomKey')();this.$DraftEditor7=this.$DraftEditor27('onBeforeInput');this.$DraftEditor8=this.$DraftEditor27('onBlur');this.$DraftEditor9=this.$DraftEditor27('onCharacterData');this.$DraftEditor10=this.$DraftEditor27('onCompositionEnd');this.$DraftEditor11=this.$DraftEditor27('onCompositionStart');this.$DraftEditor12=this.$DraftEditor27('onCopy');this.$DraftEditor13=this.$DraftEditor27('onCut');this.$DraftEditor14=this.$DraftEditor27('onDragEnd');this.$DraftEditor15=this.$DraftEditor27('onDragOver');this.$DraftEditor16=this.$DraftEditor27('onDragStart');this.$DraftEditor17=this.$DraftEditor27('onDrop');this.$DraftEditor18=this.$DraftEditor27('onInput');this.$DraftEditor19=this.$DraftEditor27('onFocus');this.$DraftEditor20=this.$DraftEditor27('onKeyDown');this.$DraftEditor21=this.$DraftEditor27('onKeyPress');this.$DraftEditor22=this.$DraftEditor27('onKeyUp');this.$DraftEditor23=this.$DraftEditor27('onMouseDown');this.$DraftEditor24=this.$DraftEditor27('onMouseUp');this.$DraftEditor25=this.$DraftEditor27('onPaste');this.$DraftEditor26=this.$DraftEditor27('onSelect');this.focus=this.$DraftEditor28.bind(this);this.blur=this.$DraftEditor29.bind(this);this.setMode=this.$DraftEditor30.bind(this);this.exitCurrentMode=this.$DraftEditor31.bind(this);this.restoreEditorDOM=this.$DraftEditor32.bind(this);this.setRenderGuard=this.$DraftEditor33.bind(this);this.removeRenderGuard=this.$DraftEditor34.bind(this);this.setClipboard=this.$DraftEditor35.bind(this);this.getClipboard=this.$DraftEditor36.bind(this);this.getEditorKey=function(){return this.$DraftEditor6;}.bind(this);this.update=this.$DraftEditor37.bind(this);this.onDragEnter=this.$DraftEditor38.bind(this);this.onDragLeave=this.$DraftEditor39.bind(this);this.state={containerKey:0};}n.prototype.$DraftEditor27=function(o){return function(p){if(!this.props.readOnly){var q=this.$DraftEditor4&&this.$DraftEditor4[o];q&&q.call(this,p);}}.bind(this);};n.prototype.$DraftEditor40=function(){var o=this.props.editorState.getCurrentContent(),p=this.props.placeholder&&!this.props.editorState.isInCompositionMode()&&!o.hasText();if(p)return (c('React').createElement(c('DraftEditorPlaceholder.react'),{text:c('nullthrows')(this.props.placeholder),editorState:this.props.editorState,textAlignment:this.props.textAlignment}));};n.prototype.render=function(){var o=this.props,p=o.readOnly,q=o.textAlignment,r="_5rp7"+(q==='left'?' '+"_5rp8":'')+(q==='right'?' '+"_5rp9":'')+(q==='center'?' '+"_5rpa":''),s=this.props.editorState.getCurrentContent().hasText(),t={outline:'none',whiteSpace:'pre-wrap',wordWrap:'break-word'};return (c('React').createElement('div',{className:r},this.$DraftEditor40(),c('React').createElement('div',{className:"_5rpb",key:'editor'+this.state.containerKey,ref:'editorContainer'},c('React').createElement('div',{'aria-activedescendant':p?null:this.props.ariaActiveDescendantID,'aria-autocomplete':p?null:this.props.ariaAutoComplete,'aria-describedby':this.props.ariaDescribedBy,'aria-expanded':p?null:this.props.ariaExpanded,'aria-haspopup':p?null:this.props.ariaHasPopup,'aria-label':this.props.ariaLabel,'aria-owns':p?null:this.props.ariaOwneeID,className:"_5rpu",contentEditable:!p,'data-testid':this.props.webDriverTestID,onBeforeInput:this.$DraftEditor7,onBlur:this.$DraftEditor8,onCompositionEnd:this.$DraftEditor10,onCompositionStart:this.$DraftEditor11,onCopy:this.$DraftEditor12,onCut:this.$DraftEditor13,onDragEnd:this.$DraftEditor14,onDragEnter:this.onDragEnter,onDragLeave:this.onDragLeave,onDragOver:this.$DraftEditor15,onDragStart:this.$DraftEditor16,onDrop:this.$DraftEditor17,onFocus:this.$DraftEditor19,onInput:this.$DraftEditor18,onKeyDown:this.$DraftEditor20,onKeyPress:this.$DraftEditor21,onKeyUp:this.$DraftEditor22,onMouseUp:this.$DraftEditor24,onPaste:this.$DraftEditor25,onSelect:this.$DraftEditor26,ref:'editor',role:p?null:this.props.role||'textbox',spellCheck:l&&this.props.spellCheck,style:t,suppressContentEditableWarning:true,tabIndex:this.props.tabIndex,title:s?null:this.props.placeholder},c('React').createElement(c('DraftEditorContents.react'),{blockRendererFn:c('nullthrows')(this.props.blockRendererFn),blockStyleFn:c('nullthrows')(this.props.blockStyleFn),customStyleMap:babelHelpers['extends']({},c('DefaultDraftInlineStyle'),this.props.customStyleMap),editorKey:this.$DraftEditor6,editorState:this.props.editorState})))));};n.prototype.componentDidMount=function(){this.setMode('edit');if(k)document.execCommand('AutoUrlDetect',false,false);};n.prototype.componentWillUpdate=function(){this.$DraftEditor1=true;};n.prototype.componentDidUpdate=function(){this.$DraftEditor1=false;};n.prototype.$DraftEditor28=function(o){var p=this.props.editorState,q=p.getSelection().getHasFocus(),r=c('ReactDOM').findDOMNode(this.refs.editor),s=c('Style').getScrollParent(r),t=o||c('getScrollPosition')(s),u=t.x,v=t.y;r.focus();if(s===window){window.scrollTo(u,v);}else c('Scroll').setTop(s,v);if(!q)this.update(c('EditorState').forceSelection(p,p.getSelection()));};n.prototype.$DraftEditor29=function(){c('ReactDOM').findDOMNode(this.refs.editor).blur();};n.prototype.$DraftEditor30=function(o){this.$DraftEditor4=m[o];};n.prototype.$DraftEditor31=function(){this.setMode('edit');};n.prototype.$DraftEditor32=function(o){this.setState({containerKey:this.state.containerKey+1},function(){this.$DraftEditor28(o);}.bind(this));};n.prototype.$DraftEditor33=function(){this.$DraftEditor3=true;};n.prototype.$DraftEditor34=function(){this.$DraftEditor3=false;};n.prototype.$DraftEditor35=function(o){this.$DraftEditor2=o;};n.prototype.$DraftEditor36=function(){return this.$DraftEditor2;};n.prototype.$DraftEditor37=function(o){this.props.onChange(o);};n.prototype.$DraftEditor38=function(){this.$DraftEditor5++;};n.prototype.$DraftEditor39=function(){this.$DraftEditor5--;if(this.$DraftEditor5===0)this.exitCurrentMode();};f.exports=n;},null);
__d('createPlainBlocksFromText',['CharacterMetadata','ContentBlock','immutable','generateRandomKey','sanitizeDraftText'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('immutable').List,i=c('immutable').Repeat,j=c('CharacterMetadata').EMPTY;function k(l){return l.map(function(m){m=c('sanitizeDraftText')(m);var n=m.length;return new (c('ContentBlock'))({key:c('generateRandomKey')(),text:m,type:'unstyled',characterList:h(i(j,n))});});}f.exports=k;},null);
__d('createEditorStateWithEntities',['ContentState','EditorState','applyEntityToContentBlock','createPlainBlocksFromText','splitTextIntoTextBlocks'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){var j=i.text,k=i.ranges,l=i.decorator,m=i.entityCreationFn,n=i.splitIntoBlocks,o=i.allowUndo,p,q;if(n===undefined)n=true;if(j){p=n?c('splitTextIntoTextBlocks')(j):[j];q=[];var r=0;p.forEach(function(u){q.push(r);r+=u.length+1;});}else p=[''];var s=c('createPlainBlocksFromText')(p);if(k&&k.length&&m)k.forEach(function(u){var v=m(u.entity);if(v===null)return;var w=u.offset,x,y;for(var z=0;z<q.length;z++){var aa=q[z],ba=q[z+1];if(ba===undefined||w>=aa&&w<ba){x=s[z];y=w-aa;break;}}s[z]=c('applyEntityToContentBlock')(x,y,y+u.length,v);});var t=c('EditorState').createWithContent(c('ContentState').createFromBlockArray(s),l);if(o===false)t=c('EditorState').set(t,{allowUndo:false});return t;}f.exports=h;},null);
__d('DocumentMentionsSource',['invariant'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();function i(j,k){!(typeof j.findMentionableString==='function')?h(0):void 0;this.$DocumentMentionsSource1=j;this.$DocumentMentionsSource2=k;this.$DocumentMentionsSource3=false;}i.prototype.findMatch=function(j){return this.$DocumentMentionsSource1.findMentionableString(j);};i.prototype.bootstrap=function(j){if(!this.$DocumentMentionsSource3){this.$DocumentMentionsSource3=true;this.$DocumentMentionsSource2.bootstrap(j);}};i.prototype.search=function(j,k){this.$DocumentMentionsSource2.search(j,k,{strategyName:this.$DocumentMentionsSource1.name});};f.exports=i;},null);
__d('getMentionsTextForContentState',['DraftEntity','emptyFunction'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('emptyFunction').thatReturnsTrue,i=/[\\\]:]/g;function j(l){var m=l.getBlockMap().map(function(n){var o=n.getText(),p=[];n.findEntityRanges(h,function(q,r){p.push(k(o.slice(q,r),n.getEntityAt(q)));});return p.join('');});return m.join('\n');}function k(l,m){if(m){var n=c('DraftEntity').get(m);if(n.getType()==='MENTION'){l=l.replace(i,function(o){return '\\'+o;});return '@['+n.getData().id+':'+l+']';}else if(n.getType()==='EMOTICON')return n.getData().originalEmoticon;}return l.replace('@[','@ [');}f.exports=j;},null);
__d('FilteredSearchSource',['AbstractSearchSource'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('AbstractSearchSource'));i=h&&h.prototype;function j(k,l){'use strict';i.constructor.call(this);this.$FilteredSearchSource1=k;this.$FilteredSearchSource2=l;}j.prototype.bootstrapImpl=function(k){'use strict';this.$FilteredSearchSource2.bootstrap(k);};j.prototype.searchImpl=function(k,l,m){'use strict';var n=function(o,p){o=this.$FilteredSearchSource3(o,p);l(o,p);}.bind(this);this.$FilteredSearchSource2.search(k,n,m);};j.prototype.$FilteredSearchSource3=function(k,l){'use strict';var m=this.$FilteredSearchSource1;return k.filter(function(n){return m(n,l);});};f.exports=j;},null);
__d("XPluginCommentsCreateCommentAsyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/plugins\/comments\/async\/createComment\/{target_id}\/",{target_id:{type:"Int",required:true}});},null);
__d("XPluginCommentsCreateReplyAsyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/plugins\/comments\/async\/createReply\/{parent_comment_id}\/",{parent_comment_id:{type:"String",required:true}});},null);
__d("XPluginCommentsPagerAsyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/plugins\/comments\/async\/{target_id}\/pager\/{ordering}\/",{target_id:{type:"Int",required:true},ordering:{type:"Enum",required:true,enumType:1}});},null);
__d("XPluginCommentsRepliesPagerAsyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/plugins\/comments\/async\/comment\/{comment_id}\/pager\/",{comment_id:{type:"String",required:true}});},null);
__d('CommentsPluginActions',['CommentsPluginStore','DevxProxyActions'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();f.exports=new (c('DevxProxyActions'))(c('CommentsPluginStore'));},null);
__d("XDeveloperDocumentationController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/docs\/{?path1}\/{?path2}\/{?path3}\/{?path4}\/{?path5}\/{?path6}\/",{path:{type:"String"},version:{type:"String"},preview:{type:"Exists",defaultValue:false},revisionid:{type:"Int"},locale:{type:"String"},path1:{type:"String"},path2:{type:"String"},path3:{type:"String"},path4:{type:"String"},path5:{type:"String"},path6:{type:"String"}});},null);