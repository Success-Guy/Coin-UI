var mod_pagespeed_Es86C5DB6c = "/*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\\n* https://github.com/jzaefferer/jquery-validation\n* Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */(function(t){t.extend(t.fn,{validate:function(e){if(!this.length)return e&&e.debug&&window.console&&console.warn(\"Nothing selected, can't validate, returning nothing.\"),void 0;var i=t.data(this[0],\"validator\");return i?i:(this.attr(\"novalidate\",\"novalidate\"),i=new t.validator(e,this[0]),t.data(this[0],\"validator\",i),i.settings.onsubmit&&(this.validateDelegate(\":submit\",\"click\",function(e){i.settings.submitHandler&&(i.submitButton=e.target),t(e.target).hasClass(\"cancel\")&&(i.cancelSubmit=!0),void 0!==t(e.target).attr(\"formnovalidate\")&&(i.cancelSubmit=!0)}),this.submit(function(e){function s(){var s;return i.settings.submitHandler?(i.submitButton&&(s=t(\"<input type='hidden'/>\").attr(\"name\",i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),i.settings.submitHandler.call(i,i.currentForm,e),i.submitButton&&s.remove(),!1):!0}return i.settings.debug&&e.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,s()):i.form()?i.pendingRequest?(i.formSubmitted=!0,!1):s():(i.focusInvalid(),!1)})),i)},valid:function(){if(t(this[0]).is(\"form\"))return this.validate().form();var e=!0,i=t(this[0].form).validate();return this.each(function(){e=e&&i.element(this)}),e},removeAttrs:function(e){var i={},s=this;return t.each(e.split(/\\s/),function(t,e){i[e]=s.attr(e),s.removeAttr(e)}),i},rules:function(e,i){var s=this[0];if(e){var r=t.data(s.form,\"validator\").settings,n=r.rules,a=t.validator.staticRules(s);switch(e){case\"add\":t.extend(a,t.validator.normalizeRule(i)),delete a.messages,n[s.name]=a,i.messages&&(r.messages[s.name]=t.extend(r.messages[s.name],i.messages));break;case\"remove\":if(!i)return delete n[s.name],a;var u={};return t.each(i.split(/\\s/),function(t,e){u[e]=a[e],delete a[e]}),u}}var o=t.validator.normalizeRules(t.extend({},t.validator.classRules(s),t.validator.attributeRules(s),t.validator.dataRules(s),t.validator.staticRules(s)),s);if(o.required){var l=o.required;delete o.required,o=t.extend({required:l},o)}return o}}),t.extend(t.expr[\":\"],{blank:function(e){return!t.trim(\"\"+t(e).val())},filled:function(e){return!!t.trim(\"\"+t(e).val())},unchecked:function(e){return!t(e).prop(\"checked\")}}),t.validator=function(e,i){this.settings=t.extend(!0,{},t.validator.defaults,e),this.currentForm=i,this.init()},t.validator.format=function(e,i){return 1===arguments.length?function(){var i=t.makeArray(arguments);return i.unshift(e),t.validator.format.apply(this,i)}:(arguments.length>2&&i.constructor!==Array&&(i=t.makeArray(arguments).slice(1)),i.constructor!==Array&&(i=[i]),t.each(i,function(t,i){e=e.replace(RegExp(\"\\\\{\"+t+\"\\\\}\",\"g\"),function(){return i})}),e)},t.extend(t.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:\"error\",validClass:\"valid\",errorElement:\"label\",focusInvalid:!0,errorContainer:t([]),errorLabelContainer:t([]),onsubmit:!0,ignore:\":hidden\",ignoreTitle:!1,onfocusin:function(t){this.lastActive=t,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(t)).hide())},onfocusout:function(t){this.checkable(t)||!(t.name in this.submitted)&&this.optional(t)||this.element(t)},onkeyup:function(t,e){(9!==e.which||\"\"!==this.elementValue(t))&&(t.name in this.submitted||t===this.lastElement)&&this.element(t)},onclick:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode)},highlight:function(e,i,s){\"radio\"===e.type?this.findByName(e.name).addClass(i).removeClass(s):t(e).addClass(i).removeClass(s)},unhighlight:function(e,i,s){\"radio\"===e.type?this.findByName(e.name).removeClass(i).addClass(s):t(e).removeClass(i).addClass(s)}},setDefaults:function(e){t.extend(t.validator.defaults,e)},messages:{required:\"This field is required.\",remote:\"Please fix this field.\",email:\"Please enter a valid email address.\",url:\"Please enter a valid URL.\",date:\"Please enter a valid date.\",dateISO:\"Please enter a valid date (ISO).\",number:\"Please enter a valid number.\",digits:\"Please enter only digits.\",creditcard:\"Please enter a valid credit card number.\",equalTo:\"Please enter the same value again.\",maxlength:t.validator.format(\"Please enter no more than {0} characters.\"),minlength:t.validator.format(\"Please enter at least {0} characters.\"),rangelength:t.validator.format(\"Please enter a value between {0} and {1} characters long.\"),range:t.validator.format(\"Please enter a value between {0} and {1}.\"),max:t.validator.format(\"Please enter a value less than or equal to {0}.\"),min:t.validator.format(\"Please enter a value greater than or equal to {0}.\")},autoCreateRanges:!1,prototype:{init:function(){function e(e){var i=t.data(this[0].form,\"validator\"),s=\"on\"+e.type.replace(/^validate/,\"\");i.settings[s]&&i.settings[s].call(i,this[0],e)}this.labelContainer=t(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||t(this.currentForm),this.containers=t(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var i=this.groups={};t.each(this.settings.groups,function(e,s){\"string\"==typeof s&&(s=s.split(/\\s/)),t.each(s,function(t,s){i[s]=e})});var s=this.settings.rules;t.each(s,function(e,i){s[e]=t.validator.normalizeRule(i)}),t(this.currentForm).validateDelegate(\":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] \",\"focusin focusout keyup\",e).validateDelegate(\"[type='radio'], [type='checkbox'], select, option\",\"click\",e),this.settings.invalidHandler&&t(this.currentForm).bind(\"invalid-form.validate\",this.settings.invalidHandler)},form:function(){return this.checkForm(),t.extend(this.submitted,this.errorMap),this.invalid=t.extend({},this.errorMap),this.valid()||t(this.currentForm).triggerHandler(\"invalid-form\",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);return this.valid()},element:function(e){e=this.validationTargetFor(this.clean(e)),this.lastElement=e,this.prepareElement(e),this.currentElements=t(e);var i=this.check(e)!==!1;return i?delete this.invalid[e.name]:this.invalid[e.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),i},showErrors:function(e){if(e){t.extend(this.errorMap,e),this.errorList=[];for(var i in e)this.errorList.push({message:e[i],element:this.findByName(i)[0]});this.successList=t.grep(this.successList,function(t){return!(t.name in e)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){t.fn.resetForm&&t(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData(\"previousValue\")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(t){var e=0;for(var i in t)e++;return e},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{t(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(\":visible\").focus().trigger(\"focusin\")}catch(e){}},findLastActive:function(){var e=this.lastActive;return e&&1===t.grep(this.errorList,function(t){return t.element.name===e.name}).length&&e},elements:function(){var e=this,i={};return t(this.currentForm).find(\"input, select, textarea\").not(\":submit, :reset, :image, [disabled]\").not(this.settings.ignore).filter(function(){return!this.name&&e.settings.debug&&window.console&&console.error(\"%o has no name assigned\",this),this.name in i||!e.objectLength(t(this).rules())?!1:(i[this.name]=!0,!0)})},clean:function(e){return t(e)[0]},errors:function(){var e=this.settings.errorClass.replace(\" \",\".\");return t(this.settings.errorElement+\".\"+e,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=t([]),this.toHide=t([]),this.currentElements=t([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(t){this.reset(),this.toHide=this.errorsFor(t)},elementValue:function(e){var i=t(e).attr(\"type\"),s=t(e).val();return\"radio\"===i||\"checkbox\"===i?t(\"input[name='\"+t(e).attr(\"name\")+\"']:checked\").val():\"string\"==typeof s?s.replace(/\\r/g,\"\"):s},check:function(e){e=this.validationTargetFor(this.clean(e));var i,s=t(e).rules(),r=!1,n=this.elementValue(e);for(var a in s){var u={method:a,parameters:s[a]};try{if(i=t.validator.methods[a].call(this,n,e,u.parameters),\"dependency-mismatch\"===i){r=!0;continue}if(r=!1,\"pending\"===i)return this.toHide=this.toHide.not(this.errorsFor(e)),void 0;if(!i)return this.formatAndAdd(e,u),!1}catch(o){throw this.settings.debug&&window.console&&console.log(\"Exception occurred when checking element \"+e.id+\", check the '\"+u.method+\"' method.\",o),o}}return r?void 0:(this.objectLength(s)&&this.successList.push(e),!0)},customDataMessage:function(e,i){return t(e).data(\"msg-\"+i.toLowerCase())||e.attributes&&t(e).attr(\"data-msg-\"+i.toLowerCase())},customMessage:function(t,e){var i=this.settings.messages[t];return i&&(i.constructor===String?i:i[e])},findDefined:function(){for(var t=0;arguments.length>t;t++)if(void 0!==arguments[t])return arguments[t];return void 0},defaultMessage:function(e,i){return this.findDefined(this.customMessage(e.name,i),this.customDataMessage(e,i),!this.settings.ignoreTitle&&e.title||void 0,t.validator.messages[i],\"<strong>Warning: No message defined for \"+e.name+\"</strong>\")},formatAndAdd:function(e,i){var s=this.defaultMessage(e,i.method),r=/\\$?\\{(\\d+)\\}/g;\"function\"==typeof s?s=s.call(this,i.parameters,e):r.test(s)&&(s=t.validator.format(s.replace(r,\"{$1}\"),i.parameters)),this.errorList.push({message:s,element:e}),this.errorMap[e.name]=s,this.submitted[e.name]=s},addWrapper:function(t){return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t},defaultShowErrors:function(){var t,e;for(t=0;this.errorList[t];t++){var i=this.errorList[t];this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),this.showLabel(i.element,i.message)}if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return t(this.errorList).map(function(){return this.element})},showLabel:function(e,i){var s=this.errorsFor(e);s.length?(s.removeClass(this.settings.validClass).addClass(this.settings.errorClass),s.html(i)):(s=t(\"<\"+this.settings.errorElement+\">\").attr(\"for\",this.idOrName(e)).addClass(this.settings.errorClass).html(i||\"\"),this.settings.wrapper&&(s=s.hide().show().wrap(\"<\"+this.settings.wrapper+\"/>\").parent()),this.labelContainer.append(s).length||(this.settings.errorPlacement?this.settings.errorPlacement(s,t(e)):s.insertAfter(e))),!i&&this.settings.success&&(s.text(\"\"),\"string\"==typeof this.settings.success?s.addClass(this.settings.success):this.settings.success(s,e)),this.toShow=this.toShow.add(s)},errorsFor:function(e){var i=this.idOrName(e);return this.errors().filter(function(){return t(this).attr(\"for\")===i})},idOrName:function(t){return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name)},validationTargetFor:function(t){return this.checkable(t)&&(t=this.findByName(t.name).not(this.settings.ignore)[0]),t},checkable:function(t){return/radio|checkbox/i.test(t.type)},findByName:function(e){return t(this.currentForm).find(\"[name='\"+e+\"']\")},getLength:function(e,i){switch(i.nodeName.toLowerCase()){case\"select\":return t(\"option:selected\",i).length;case\"input\":if(this.checkable(i))return this.findByName(i.name).filter(\":checked\").length}return e.length},depend:function(t,e){return this.dependTypes[typeof t]?this.dependTypes[typeof t](t,e):!0},dependTypes:{\"boolean\":function(t){return t},string:function(e,i){return!!t(e,i.form).length},\"function\":function(t,e){return t(e)}},optional:function(e){var i=this.elementValue(e);return!t.validator.methods.required.call(this,i,e)&&\"dependency-mismatch\"},startRequest:function(t){this.pending[t.name]||(this.pendingRequest++,this.pending[t.name]=!0)},stopRequest:function(e,i){this.pendingRequest--,0>this.pendingRequest&&(this.pendingRequest=0),delete this.pending[e.name],i&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(t(this.currentForm).submit(),this.formSubmitted=!1):!i&&0===this.pendingRequest&&this.formSubmitted&&(t(this.currentForm).triggerHandler(\"invalid-form\",[this]),this.formSubmitted=!1)},previousValue:function(e){return t.data(e,\"previousValue\")||t.data(e,\"previousValue\",{old:null,valid:!0,message:this.defaultMessage(e,\"remote\")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(e,i){e.constructor===String?this.classRuleSettings[e]=i:t.extend(this.classRuleSettings,e)},classRules:function(e){var i={},s=t(e).attr(\"class\");return s&&t.each(s.split(\" \"),function(){this in t.validator.classRuleSettings&&t.extend(i,t.validator.classRuleSettings[this])}),i},attributeRules:function(e){var i={},s=t(e),r=s[0].getAttribute(\"type\");for(var n in t.validator.methods){var a;\"required\"===n?(a=s.get(0).getAttribute(n),\"\"===a&&(a=!0),a=!!a):a=s.attr(n),/min|max/.test(n)&&(null===r||/number|range|text/.test(r))&&(a=Number(a)),a?i[n]=a:r===n&&\"range\"!==r&&(i[n]=!0)}return i.maxlength&&/-1|2147483647|524288/.test(i.maxlength)&&delete i.maxlength,i},dataRules:function(e){var i,s,r={},n=t(e);for(i in t.validator.methods)s=n.data(\"rule-\"+i.toLowerCase()),void 0!==s&&(r[i]=s);return r},staticRules:function(e){var i={},s=t.data(e.form,\"validator\");return s.settings.rules&&(i=t.validator.normalizeRule(s.settings.rules[e.name])||{}),i},normalizeRules:function(e,i){return t.each(e,function(s,r){if(r===!1)return delete e[s],void 0;if(r.param||r.depends){var n=!0;switch(typeof r.depends){case\"string\":n=!!t(r.depends,i.form).length;break;case\"function\":n=r.depends.call(i,i)}n?e[s]=void 0!==r.param?r.param:!0:delete e[s]}}),t.each(e,function(s,r){e[s]=t.isFunction(r)?r(i):r}),t.each([\"minlength\",\"maxlength\"],function(){e[this]&&(e[this]=Number(e[this]))}),t.each([\"rangelength\",\"range\"],function(){var i;e[this]&&(t.isArray(e[this])?e[this]=[Number(e[this][0]),Number(e[this][1])]:\"string\"==typeof e[this]&&(i=e[this].split(/[\\s,]+/),e[this]=[Number(i[0]),Number(i[1])]))}),t.validator.autoCreateRanges&&(e.min&&e.max&&(e.range=[e.min,e.max],delete e.min,delete e.max),e.minlength&&e.maxlength&&(e.rangelength=[e.minlength,e.maxlength],delete e.minlength,delete e.maxlength)),e},normalizeRule:function(e){if(\"string\"==typeof e){var i={};t.each(e.split(/\\s/),function(){i[this]=!0}),e=i}return e},addMethod:function(e,i,s){t.validator.methods[e]=i,t.validator.messages[e]=void 0!==s?s:t.validator.messages[e],3>i.length&&t.validator.addClassRules(e,t.validator.normalizeRule(e))},methods:{required:function(e,i,s){if(!this.depend(s,i))return\"dependency-mismatch\";if(\"select\"===i.nodeName.toLowerCase()){var r=t(i).val();return r&&r.length>0}return this.checkable(i)?this.getLength(e,i)>0:t.trim(e).length>0},email:function(t,e){return this.optional(e)||/^((([a-z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+(\\.([a-z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+)*)|((\\x22)((((\\x20|\\x09)*(\\x0d\\x0a))?(\\x20|\\x09)+)?(([\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x7f]|\\x21|[\\x23-\\x5b]|[\\x5d-\\x7e]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(\\\\([\\x01-\\x09\\x0b\\x0c\\x0d-\\x7f]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]))))*(((\\x20|\\x09)*(\\x0d\\x0a))?(\\x20|\\x09)+)?(\\x22)))@((([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\\.)+(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))$/i.test(t)},url:function(t,e){return this.optional(e)||/^(https?|s?ftp):\\/\\/(((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:)*@)?(((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5]))|((([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\\.)+(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\\.?)(:\\d*)?)(\\/((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:|@)+(\\/(([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:|@)*)*)?)?(\\?((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:|@)|[\\uE000-\\uF8FF]|\\/|\\?)*)?(#((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:|@)|\\/|\\?)*)?$/i.test(t)},date:function(t,e){return this.optional(e)||!/Invalid|NaN/.test(\"\"+new Date(t))},dateISO:function(t,e){return this.optional(e)||/^\\d{4}[\\/\\-]\\d{1,2}[\\/\\-]\\d{1,2}$/.test(t)},number:function(t,e){return this.optional(e)||/^-?(?:\\d+|\\d{1,3}(?:,\\d{3})+)?(?:\\.\\d+)?$/.test(t)},digits:function(t,e){return this.optional(e)||/^\\d+$/.test(t)},creditcard:function(t,e){if(this.optional(e))return\"dependency-mismatch\";if(/[^0-9 \\-]+/.test(t))return!1;var i=0,s=0,r=!1;t=t.replace(/\\D/g,\"\");for(var n=t.length-1;n>=0;n--){var a=t.charAt(n);s=parseInt(a,10),r&&(s*=2)>9&&(s-=9),i+=s,r=!r}return 0===i%10},minlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s},maxlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||s>=r},rangelength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s[0]&&s[1]>=r},min:function(t,e,i){return this.optional(e)||t>=i},max:function(t,e,i){return this.optional(e)||i>=t},range:function(t,e,i){return this.optional(e)||t>=i[0]&&i[1]>=t},equalTo:function(e,i,s){var r=t(s);return this.settings.onfocusout&&r.unbind(\".validate-equalTo\").bind(\"blur.validate-equalTo\",function(){t(i).valid()}),e===r.val()},remote:function(e,i,s){if(this.optional(i))return\"dependency-mismatch\";var r=this.previousValue(i);if(this.settings.messages[i.name]||(this.settings.messages[i.name]={}),r.originalMessage=this.settings.messages[i.name].remote,this.settings.messages[i.name].remote=r.message,s=\"string\"==typeof s&&{url:s}||s,r.old===e)return r.valid;r.old=e;var n=this;this.startRequest(i);var a={};return a[i.name]=e,t.ajax(t.extend(!0,{url:s,mode:\"abort\",port:\"validate\"+i.name,dataType:\"json\",data:a,success:function(s){n.settings.messages[i.name].remote=r.originalMessage;var a=s===!0||\"true\"===s;if(a){var u=n.formSubmitted;n.prepareElement(i),n.formSubmitted=u,n.successList.push(i),delete n.invalid[i.name],n.showErrors()}else{var o={},l=s||n.defaultMessage(i,\"remote\");o[i.name]=r.message=t.isFunction(l)?l(e):l,n.invalid[i.name]=!0,n.showErrors(o)}r.valid=a,n.stopRequest(i,a)}},s)),\"pending\"}}}),t.format=t.validator.format})(jQuery),function(t){var e={};if(t.ajaxPrefilter)t.ajaxPrefilter(function(t,i,s){var r=t.port;\"abort\"===t.mode&&(e[r]&&e[r].abort(),e[r]=s)});else{var i=t.ajax;t.ajax=function(s){var r=(\"mode\"in s?s:t.ajaxSettings).mode,n=(\"port\"in s?s:t.ajaxSettings).port;return\"abort\"===r?(e[n]&&e[n].abort(),e[n]=i.apply(this,arguments),e[n]):i.apply(this,arguments)}}}(jQuery),function(t){t.extend(t.fn,{validateDelegate:function(e,i,s){return this.bind(i,function(i){var r=t(i.target);return r.is(e)?s.apply(r,arguments):void 0})}})}(jQuery);";
var mod_pagespeed_IfrKN1CT1L = "    // -------   Mail Send ajax\n\n     $(document).ready(function() {\n        var form = $('#myForm'); // contact form\n        var submit = $('.submit-btn'); // submit button\n        var alert = $('.alert-msg'); // alert div for show alert message\n\n        // form submit event\n        form.on('submit', function(e) {\n            e.preventDefault(); // prevent default form submit\n\n            $.ajax({\n                url: 'mail.php', // form action url\n                type: 'POST', // form submit method get/post\n                dataType: 'html', // request type html/json/xml\n                data: form.serialize(), // serialize form data\n                beforeSend: function() {\n                    alert.fadeOut();\n                    submit.html('Sending....'); // change submit button text\n                },\n                success: function(data) {\n                    alert.html(data).fadeIn(); // fade in response data\n                    form.trigger('reset'); // reset form\n                    submit.attr(\"style\", \"display: none !important\");; // reset submit button text\n                },\n                error: function(e) {\n                    console.log(e)\n                }\n            });\n        });\n    });";
var mod_pagespeed_XTyAETQiiD = "(function ($) {\r\n\"use strict\";\r\n// TOP Menu Sticky\r\n$(window).on('scroll', function () {\r\n	var scroll = $(window).scrollTop();\r\n	if (scroll < 400) {\r\n    $(\"#sticky-header\").removeClass(\"sticky\");\r\n    $('#back-top').fadeIn(500);\r\n	} else {\r\n    $(\"#sticky-header\").addClass(\"sticky\");\r\n    $('#back-top').fadeIn(500);\r\n	}\r\n});\r\n\r\n\r\n\r\n\r\n\r\n$(document).ready(function(){\r\n\r\n// mobile_menu\r\nvar menu = $('ul#navigation');\r\nif(menu.length){\r\n	menu.slicknav({\r\n		prependTo: \".mobile_menu\",\r\n		closedSymbol: '+',\r\n		openedSymbol:'-'\r\n	});\r\n};\r\n// blog-menu\r\n  // $('ul#blog-menu').slicknav({\r\n  //   prependTo: \".blog_menu\"\r\n  // });\r\n\r\n// review-active\r\n$('.service_active').owlCarousel({\r\n  loop:true,\r\n  margin:30,\r\nitems:1,\r\nautoplay:true,\r\nnavText:['<i class=\"ti-angle-left\"></i>','<i class=\"ti-angle-right\"></i>'],\r\n  nav:true,\r\ndots:false,\r\nautoplayHoverPause: true,\r\nautoplaySpeed: 800,\r\n  responsive:{\r\n      0:{\r\n          items:1,\r\n          nav:false,\r\n      },\r\n      767:{\r\n          items:2,\r\n          nav:true\r\n      },\r\n      992:{\r\n          items:3,\r\n          nav:true\r\n      },\r\n      1200:{\r\n          items:3,\r\n          nav:true\r\n      },\r\n      1600:{\r\n          items:3,\r\n          nav:true\r\n      }\r\n  }\r\n});\r\n\r\n// review-active\r\n$('.testmonial_active').owlCarousel({\r\n  loop:true,\r\n  margin:0,\r\nitems:1,\r\nautoplay:true,\r\nnavText:['<i class=\"ti-angle-left\"></i>','<i class=\"ti-angle-right\"></i>'],\r\n  nav:false,\r\ndots:true,\r\nautoplayHoverPause: true,\r\nautoplaySpeed: 800,\r\n  responsive:{\r\n      0:{\r\n          items:1,\r\n          dots:false,\r\n      },\r\n      767:{\r\n          items:1,\r\n          dots:false,\r\n      },\r\n      992:{\r\n          items:1,\r\n      },\r\n      1200:{\r\n          items:1,\r\n      },\r\n      1500:{\r\n          items:1\r\n      }\r\n  }\r\n});\r\n\r\n// review-active\r\n$('.home_details_active').owlCarousel({\r\n  loop:true,\r\n  margin:0,\r\nitems:1,\r\nautoplay:true,\r\nnavText:['<i class=\"ti-angle-left\"></i>','<i class=\"ti-angle-right\"></i>'],\r\n  nav:true,\r\ndots:false,\r\nautoplayHoverPause: true,\r\nautoplaySpeed: 800,\r\n\r\n  responsive:{\r\n      0:{\r\n          items:1,\r\n          nav:false\r\n      },\r\n      767:{\r\n          items:1,\r\n          nav:false\r\n      },\r\n      992:{\r\n          items:1,\r\n          nav:false\r\n      },\r\n      1200:{\r\n          items:1,\r\n          nav:false\r\n      },\r\n      1500:{\r\n          items:1,\r\n          nav:true\r\n      }\r\n  }\r\n});\r\n\r\n// review-active\r\n$('.case_active').owlCarousel({\r\n  loop:true,\r\n  margin:30,\r\nitems:1,\r\nautoplay:false,\r\nnavText:['<i class=\"ti-angle-left\"></i>','<i class=\"ti-angle-right\"></i>'],\r\n  nav:true,\r\ndots:true,\r\nautoplayHoverPause: true,\r\nautoplaySpeed: 800,\r\n// dotsData: true,\r\ncenter: false,\r\n  responsive:{\r\n      0:{\r\n          items:1,\r\n          nav:false\r\n      },\r\n      767:{\r\n          items:3,\r\n          nav:false\r\n      },\r\n      992:{\r\n          items:3,\r\n          nav:false\r\n      },\r\n      1200:{\r\n          items:3,\r\n          nav:false\r\n      },\r\n      1500:{\r\n          items:3,\r\n          nav:true\r\n      }\r\n  }\r\n});\r\n\r\n// review-active\r\n$('.property_banner_active').owlCarousel({\r\n  loop:true,\r\n  margin:30,\r\nitems:1,\r\nautoplay:false,\r\nnavText:['<i class=\"ti-angle-left\"></i>','<i class=\"ti-angle-right\"></i>'],\r\n  nav:true,\r\ndots:true,\r\nautoplayHoverPause: true,\r\nautoplaySpeed: 800,\r\n// dotsData: true,\r\ncenter: false,\r\n  responsive:{\r\n      0:{\r\n          items:1,\r\n          nav:false\r\n      },\r\n      767:{\r\n          items:1,\r\n          nav:false\r\n      },\r\n      992:{\r\n          items:1\r\n      },\r\n      1200:{\r\n          items:1\r\n      },\r\n      1500:{\r\n          items:1,\r\n          nav:true\r\n      }\r\n  }\r\n});\r\n\r\n// for filter\r\n  // init Isotope\r\n  var $grid = $('.grid').isotope({\r\n    itemSelector: '.grid-item',\r\n    percentPosition: true,\r\n    masonry: {\r\n      // use outer width of grid-sizer for columnWidth\r\n      columnWidth: 1\r\n    }\r\n  });\r\n\r\n  // filter items on button click\r\n  $('.portfolio-menu').on('click', 'button', function () {\r\n    var filterValue = $(this).attr('data-filter');\r\n    $grid.isotope({ filter: filterValue });\r\n  });\r\n\r\n  //for menu active class\r\n  $('.portfolio-menu button').on('click', function (event) {\r\n    $(this).siblings('.active').removeClass('active');\r\n    $(this).addClass('active');\r\n    event.preventDefault();\r\n	});\r\n  \r\n  // wow js\r\n  new WOW().init();\r\n\r\n  // counter \r\n  $('.counter').counterUp({\r\n    delay: 10,\r\n    time: 10000\r\n  });\r\n\r\n/* magnificPopup img view */\r\n$('.popup-image').magnificPopup({\r\n	type: 'image',\r\n	gallery: {\r\n	  enabled: true\r\n	}\r\n});\r\n\r\n/* magnificPopup img view */\r\n$('.img-pop-up').magnificPopup({\r\n	type: 'image',\r\n	gallery: {\r\n	  enabled: true\r\n	}\r\n});\r\n\r\n/* magnificPopup video view */\r\n$('.popup-video').magnificPopup({\r\n	type: 'iframe'\r\n});\r\n\r\n\r\n  // scrollIt for smoth scroll\r\n  $.scrollIt({\r\n    upKey: 38,             // key code to navigate to the next section\r\n    downKey: 40,           // key code to navigate to the previous section\r\n    easing: 'linear',      // the easing function for animation\r\n    scrollTime: 600,       // how long (in ms) the animation takes\r\n    activeClass: 'active', // class given to the active nav element\r\n    onPageChange: null,    // function(pageIndex) that is called when page is changed\r\n    topOffset: 0           // offste (in px) for fixed top navigation\r\n  });\r\n\r\n  // scrollup bottom to top\r\n  $.scrollUp({\r\n    scrollName: 'scrollUp', // Element ID\r\n    topDistance: '4500', // Distance from top before showing element (px)\r\n    topSpeed: 300, // Speed back to top (ms)\r\n    animation: 'fade', // Fade, slide, none\r\n    animationInSpeed: 200, // Animation in speed (ms)\r\n    animationOutSpeed: 200, // Animation out speed (ms)\r\n    scrollText: '<i class=\"fa fa-angle-double-up\"></i>', // Text for element\r\n    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'\r\n  });\r\n\r\n\r\n  // blog-page\r\n\r\n  //brand-active\r\n$('.brand-active').owlCarousel({\r\n  loop:true,\r\n  margin:30,\r\nitems:1,\r\nautoplay:true,\r\n  nav:false,\r\ndots:false,\r\nautoplayHoverPause: true,\r\nautoplaySpeed: 800,\r\n  responsive:{\r\n      0:{\r\n          items:1,\r\n          nav:false\r\n\r\n      },\r\n      767:{\r\n          items:4\r\n      },\r\n      992:{\r\n          items:7\r\n      }\r\n  }\r\n});\r\n\r\n// blog-dtails-page\r\n\r\n  //project-active\r\n$('.project-active').owlCarousel({\r\n  loop:true,\r\n  margin:30,\r\nitems:1,\r\n// autoplay:true,\r\nnavText:['<i class=\"Flaticon flaticon-left-arrow\"></i>','<i class=\"Flaticon flaticon-right-arrow\"></i>'],\r\nnav:true,\r\ndots:false,\r\n// autoplayHoverPause: true,\r\n// autoplaySpeed: 800,\r\n  responsive:{\r\n      0:{\r\n          items:1,\r\n          nav:false\r\n\r\n      },\r\n      767:{\r\n          items:1,\r\n          nav:false\r\n      },\r\n      992:{\r\n          items:2,\r\n          nav:false\r\n      },\r\n      1200:{\r\n          items:1,\r\n      },\r\n      1501:{\r\n          items:2,\r\n      }\r\n  }\r\n});\r\n\r\nif (document.getElementById('default-select')) {\r\n  $('select').niceSelect();\r\n}\r\n\r\n  //about-pro-active\r\n$('.details_active').owlCarousel({\r\n  loop:true,\r\n  margin:0,\r\nitems:1,\r\n// autoplay:true,\r\nnavText:['<i class=\"ti-angle-left\"></i>','<i class=\"ti-angle-right\"></i>'],\r\nnav:true,\r\ndots:false,\r\n// autoplayHoverPause: true,\r\n// autoplaySpeed: 800,\r\n  responsive:{\r\n      0:{\r\n          items:1,\r\n          nav:false\r\n\r\n      },\r\n      767:{\r\n          items:1,\r\n          nav:false\r\n      },\r\n      992:{\r\n          items:1,\r\n          nav:false\r\n      },\r\n      1200:{\r\n          items:1,\r\n      }\r\n  }\r\n});\r\n\r\n});\r\n\r\n// resitration_Form\r\n$(document).ready(function() {\r\n	$('.popup-with-form').magnificPopup({\r\n		type: 'inline',\r\n		preloader: false,\r\n		focus: '#name',\r\n\r\n		// When elemened is focused, some mobile browsers in some cases zoom in\r\n		// It looks not nice, so we disable it:\r\n		callbacks: {\r\n			beforeOpen: function() {\r\n				if($(window).width() < 700) {\r\n					this.st.focus = false;\r\n				} else {\r\n					this.st.focus = '#name';\r\n				}\r\n			}\r\n		}\r\n	});\r\n});\r\n\r\n\r\n\r\n//------- Mailchimp js --------//  \r\nfunction mailChimp() {\r\n  $('#mc_embed_signup').find('form').ajaxChimp();\r\n}\r\nmailChimp();\r\n\r\n\r\n\r\n        // Search Toggle\r\n        $(\"#search_input_box\").hide();\r\n        $(\"#search\").on(\"click\", function () {\r\n            $(\"#search_input_box\").slideToggle();\r\n            $(\"#search_input\").focus();\r\n        });\r\n        $(\"#close_search\").on(\"click\", function () {\r\n            $('#search_input_box').slideUp(500);\r\n        });\r\n        // Search Toggle\r\n        $(\"#search_input_box\").hide();\r\n        $(\"#search_1\").on(\"click\", function () {\r\n            $(\"#search_input_box\").slideToggle();\r\n            $(\"#search_input\").focus();\r\n        });\r\n        $(document).ready(function() {\r\n          $('select').niceSelect();\r\n        });\r\n\r\n        // prise slider \r\n        \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n})(jQuery);	";
