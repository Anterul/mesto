(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===t(i)?i:String(i)),r)}var i}var n=function(){function t(e,n,o,r){var i=r.handleCardClick,u=r.handleDeleteIconClick,a=r.toggleLike;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._link=e.link,this._name=e.name,this._likes=e.likes,this._ownerId=e.owner._id,this._templateElement=n,this._userId=o,this._handleCardClick=i,this._handleDeleteIconClick=u,this._isLiked=!1,this._toggleLike=a}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateElement).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".card__image"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardTitle=this._element.querySelector(".card__title"),this._cardTitle.textContent=this._name,this._cardLikeCounter=this._element.querySelector(".card__like-counter"),this._cardLikeCounter.textContent=this._likes.length,this._setEventListeners(),this._element}},{key:"_checkLike",value:function(){var t=this;this._likes.forEach((function(e){e._id===t._userId?(t._isLiked=!0,t._likeButton.classList.add("card__like-button_active")):t._likeButton.classList.remove("card__like-button_active")}))}},{key:"setLikes",value:function(t){this._likes=t,this._cardLikeCounter.textContent=this._likes}},{key:"switchIsLiked",value:function(){this._isLiked=!this._isLiked}},{key:"deleteCard",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton=this._element.querySelector(".card__like-button"),this._likeButton.addEventListener("click",(function(){t._likeButton.classList.toggle("card__like-button_active"),t._toggleLike()})),this._deleteButton=this._element.querySelector(".card__delete-button"),this._ownerId!=this._userId?this._deleteButton.remove():this._deleteButton.addEventListener("click",(function(){t._handleDeleteIconClick()})),this._cardImage.addEventListener("click",(function(){t._handleCardClick()})),this._checkLike()}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._formElement=n}var e,n;return e=t,(n=[{key:"_showError",value:function(t,e){var n=this._formElement.querySelector("#".concat(t.id,"-error"));t.classList.add(this._config.inputErrorClass),n.classList.add(this._config.errorClass),n.textContent=e}},{key:"_hideError",value:function(t){var e=this._formElement.querySelector("#".concat(t.id,"-error"));t.classList.remove(this._config.inputErrorClass),e.classList.remove(this._config.errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideError(t):this._showError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_disableButton",value:function(){this._saveButtonElement.classList.add(this._config.inactiveButtonClass),this._saveButtonElement.setAttribute("disabled",!0)}},{key:"_activateButton",value:function(){this._saveButtonElement.classList.remove(this._config.inactiveButtonClass),this._saveButtonElement.removeAttribute("disabled")}},{key:"_setButtonState",value:function(){this._hasInvalidInput()?this._disableButton():this._activateButton()}},{key:"resetValidation",value:function(){var t=this;this._setButtonState(),this._inputList.forEach((function(e){t._hideError(e)}))}},{key:"enableValidation",value:function(){var t=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._saveButtonElement=this._formElement.querySelector(this._config.submitButtonSelector),this._setButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._setButtonState()}))}))}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==u(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===u(r)?r:String(r)),o)}var r}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this),this._closeByClick=this._closeByClick.bind(this),this._popupCloseButton=this._popup.querySelector(".popup__close-button")}var e,n;return e=t,(n=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_closeByClick",value:function(t){t.target.classList.contains("popup_opened")&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose),this._popup.addEventListener("mousedown",this._closeByClick)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose),this._popup.removeEventListener("mousedown",this._closeByClick)}},{key:"setEventListeners",value:function(){var t=this;this._popupCloseButton.addEventListener("click",(function(){t.close()}))}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==s(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===s(r)?r:String(r)),o)}var r}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=p(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},f.apply(this,arguments)}function p(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=v(t)););return t}function y(t,e){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},y(t,e)}function h(t,e){if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&y(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(o);if(r){var n=v(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return h(this,t)});function u(t,e){var n,o=e.submitCallback;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitCallback=o,n._popupForm=n._popup.querySelector(".popup__form"),n._inputList=n._popup.querySelectorAll(".popup__input"),n._saveButton=n._popup.querySelector(".popup__save-button"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"close",value:function(){f(v(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"_renderButtonText",value:function(t){this._saveButton.textContent=t?"Сохранение...":this._saveButton}},{key:"setEventListeners",value:function(){var t=this;f(v(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._renderButtonText(!0),t._submitCallback(t._getInputValues()),t.close()}))}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function m(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==b(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===b(r)?r:String(r)),o)}var r}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=k(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},_.apply(this,arguments)}function k(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function S(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=w(o);if(r){var n=w(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return S(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__image"),e._popupTitle=e._popup.querySelector(".popup__title"),e}return e=u,(n=[{key:"open",value:function(t,e){_(w(u.prototype),"open",this).call(this),this._popupImage.src=t,this._popupImage.alt=e,this._popupTitle.textContent=e}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function C(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==j(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===j(r)?r:String(r)),o)}var r}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=O(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},P.apply(this,arguments)}function O(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function T(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(o);if(r){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return T(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupYesButton=e._popup.querySelector(".popup__form"),e}return e=u,(n=[{key:"setSubmitAction",value:function(t){this._submitCallback=t}},{key:"setEventListeners",value:function(){var t=this;P(B(u.prototype),"setEventListeners",this).call(this),this._popupYesButton.addEventListener("submit",(function(e){e.preventDefault(),t._submitCallback()}))}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function x(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==q(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===q(r)?r:String(r)),o)}var r}var R=function(){function t(e,n){var o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"renderCard",value:function(t){this._renderer(t)}},{key:"addItem",value:function(t){this._container.append(t)}},{key:"prependItem",value:function(t){this._container.prepend(t)}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function z(t){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(t)}function U(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==z(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==z(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===z(r)?r:String(r)),o)}var r}var D=function(){function t(e){var n=e.nameSelector,o=e.infoSelector,r=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._yourName=document.querySelector(n),this._yourJob=document.querySelector(o),this._avatar=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._userInfo={yourName:this._yourName.textContent,yourJob:this._yourJob.textContent}}},{key:"setUserInfo",value:function(t,e,n){this._yourName.textContent=t,this._yourJob.textContent=e,this._avatar.src=n}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function V(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==A(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===A(r)?r:String(r)),o)}var r}var N,J=function(){function t(e){var n=e.baseUrl,o=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this.authorization=o.authorization}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(t){return fetch(t,{method:"GET",headers:{authorization:this.authorization}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status," ").concat(t.statusText))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:{authorization:this.authorization}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status," ").concat(t.statusText))}))}},{key:"submitProfileData",value:function(t,e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this.authorization,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:e})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status," ").concat(t.statusText))}))}},{key:"deleteCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this.authorization}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status," ").concat(t.statusText))}))}},{key:"addNewCard",value:function(t,e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this.authorization,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:e})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status," ").concat(t.statusText))}))}},{key:"likeCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this.authorization}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status," ").concat(t.statusText))}))}},{key:"dislikeCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this.authorization}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status," ").concat(t.statusText))}))}},{key:"updateAvatar",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this.authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status," ").concat(t.statusText))}))}}])&&V(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),F=document.querySelector(".page"),G=F.querySelector(".profile__edit-button"),H=F.querySelector(".profile__add-button"),Y=F.querySelector(".profile__update-button"),M={};function K(t){var e=new n(t,".template","d84a187fdaa1defe11442536",{handleCardClick:function(){Z.open(t.link,t.name)},handleDeleteIconClick:function(){et.open(),et.setSubmitAction((function(){Q.deleteCard(t._id).then((function(){e.deleteCard(),et.close()})).catch((function(t){console.log("Ошибка: ".concat(t))}))}))},toggleLike:function(){!function(t,e,n){e?Q.dislikeCard(n).then((function(e){t.setLikes(e.likes.length),t.switchIsLiked()})).catch((function(t){console.log("Ошибка: ".concat(t))})):Q.likeCard(n).then((function(e){t.setLikes(e.likes.length),t.switchIsLiked()})).catch((function(t){console.log("Ошибка: ".concat(t))}))}(e,e._isLiked,t._id)}});return e.generateCard()}N={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},Array.from(document.querySelectorAll(N.formSelector)).forEach((function(t){var e=new i(N,t);e.enableValidation();var n=t.getAttribute("name");M[n]=e}));var Q=new J({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-57",headers:{authorization:"cc8211c2-a478-4e6c-819c-a7ec6fb1096c"}}),W=new R({renderer:function(t){var e=K(t);W.addItem(e)}},".cards");Q.getInitialCards().then((function(t){W.renderItems(t)})).catch((function(t){console.log("Ошибка: ".concat(t))}));var X=new D({nameSelector:".profile__title",infoSelector:".profile__subtitle",avatarSelector:".profile__avatar"});Q.getUserInfo("https://nomoreparties.co/v1/cohort-57/users/me").then((function(t){X.setUserInfo(t.name,t.about,t.avatar)})).catch((function(t){console.log("Ошибка: ".concat(t))}));var Z=new E(".popup_name_picture"),$=new d(".popup_name_profile",{submitCallback:function(t){Q.submitProfileData(t.yourName,t.yourJob).then((function(t){X.setUserInfo(t.name,t.about,t.avatar)})).catch((function(t){console.log("Ошибка: ".concat(t))}))}}),tt=new d(".popup_name_add-card",{submitCallback:function(t){Q.addNewCard(t.name,t.link).then((function(t){var e=K(t);W.prependItem(e)})).catch((function(t){console.log("Ошибка: ".concat(t))}))}}),et=new I(".popup_name_delete-card"),nt=new d(".popup_name_update-avatar",{submitCallback:function(t){Q.updateAvatar(t.avatar).then((function(t){X.setUserInfo(t.name,t.about,t.avatar)})).catch((function(t){console.log("Ошибка: ".concat(t))}))}});Z.setEventListeners(),tt.setEventListeners(),$.setEventListeners(),et.setEventListeners(),nt.setEventListeners(),G.addEventListener("click",(function(){$.open(),M.popupFormProfile.resetValidation(),$.setInputValues(X.getUserInfo())})),H.addEventListener("click",(function(){tt.open(),M.popupFormAddCard.resetValidation()})),Y.addEventListener("click",(function(){nt.open()}))})();