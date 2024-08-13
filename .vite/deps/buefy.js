import {
  Comment,
  Fragment,
  Static,
  Text,
  Transition,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createTextVNode,
  createVNode,
  guardReactiveProps,
  h,
  mergeProps,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onUpdated,
  openBlock,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDirective,
  resolveDynamicComponent,
  toDisplayString,
  toHandlerKey,
  toHandlers,
  toRaw,
  vModelCheckbox,
  vModelDynamic,
  vModelRadio,
  vModelSelect,
  vShow,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-L4HIV4YJ.js";

// node_modules/buefy/dist/esm/typeof-Z4rCTFCZ.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// node_modules/buefy/dist/esm/helpers-O9h6_ICO.js
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function signPoly(value) {
  if (value < 0) return -1;
  return value > 0 ? 1 : 0;
}
var sign = Math.sign || signPoly;
function hasFlag(val, flag) {
  return (val & flag) === flag;
}
function mod(n, mod2) {
  return (n % mod2 + mod2) % mod2;
}
function bound(val, min, max) {
  return Math.max(min, Math.min(max, val));
}
function getValueByPath(obj, path) {
  return path.split(".").reduce(function(o, i) {
    return o ? o[i] : null;
  }, obj);
}
function indexOf(array, obj, fn) {
  if (!array) return -1;
  if (!fn || typeof fn !== "function") return array.indexOf(obj);
  for (var i = 0; i < array.length; i++) {
    if (fn(array[i], obj)) {
      return i;
    }
  }
  return -1;
}
var isObject = function isObject2(item) {
  return _typeof(item) === "object" && !Array.isArray(item);
};
var mergeFn = function mergeFn2(target, source) {
  var deep = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  if (deep || !Object.assign) {
    var isDeep = function isDeep2(prop) {
      return isObject(source[prop]) && target !== null && Object.prototype.hasOwnProperty.call(target, prop) && isObject(target[prop]);
    };
    var replaced = Object.getOwnPropertyNames(source).map(function(prop) {
      return _defineProperty({}, prop, isDeep(prop) ? mergeFn2(target[prop], source[prop], deep) : source[prop]);
    }).reduce(function(a, b) {
      return _objectSpread(_objectSpread({}, a), b);
    }, {});
    return _objectSpread(_objectSpread({}, target), replaced);
  } else {
    return Object.assign(target, source);
  }
};
var merge = mergeFn;
var isMobile = {
  Android: function Android() {
    return typeof window !== "undefined" && window.navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function BlackBerry() {
    return typeof window !== "undefined" && window.navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return typeof window !== "undefined" && (window.navigator.userAgent.match(/iPhone|iPad|iPod/i) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
  },
  Opera: function Opera() {
    return typeof window !== "undefined" && window.navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function Windows() {
    return typeof window !== "undefined" && window.navigator.userAgent.match(/IEMobile/i);
  },
  any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};
function removeElement(el) {
  if (typeof el.remove !== "undefined") {
    el.remove();
  } else if (typeof el.parentNode !== "undefined" && el.parentNode !== null) {
    el.parentNode.removeChild(el);
  }
}
function createAbsoluteElement(el) {
  var root = document.createElement("div");
  root.style.position = "absolute";
  root.style.left = "0px";
  root.style.top = "0px";
  root.style.width = "100%";
  var wrapper = document.createElement("div");
  root.appendChild(wrapper);
  wrapper.appendChild(el);
  document.body.appendChild(root);
  return root;
}
function isVueComponent(c) {
  return c && c.$ != null && c.$.vnode != null;
}
function escapeRegExpChars(value) {
  if (!value) return value;
  return value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
function removeDiacriticsFromString(value) {
  if (!value) return value;
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function multiColumnSort(inputArray, sortingPriority) {
  var array = JSON.parse(JSON.stringify(inputArray));
  var fieldSorter = function fieldSorter2(fields) {
    return function(a, b) {
      return fields.map(function(o) {
        var field = o.field, order = o.order, customSort = o.customSort;
        if (typeof customSort === "function") {
          return customSort(a, b, order !== "desc");
        } else {
          var aValue = getValueByPath(a, field);
          var bValue = getValueByPath(b, field);
          var ord = aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
          return order === "desc" ? -ord : ord;
        }
      }).reduce(function(p, n) {
        return p || n;
      }, 0);
    };
  };
  return array.sort(fieldSorter(sortingPriority));
}
function createNewEvent(eventName) {
  var event;
  if (typeof Event === "function") {
    event = new Event(eventName);
  } else {
    event = document.createEvent("Event");
    event.initEvent(eventName, true, true);
  }
  return event;
}
function toCssWidth(width) {
  return width === void 0 ? null : isNaN(width) ? width : width + "px";
}
function getMonthNames() {
  var locale2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
  var format = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "long";
  var dates = [];
  for (var i = 0; i < 12; i++) {
    dates.push(new Date(2e3, i, 15));
  }
  var dtf2 = new Intl.DateTimeFormat(locale2, {
    month: format
  });
  return dates.map(function(d) {
    return dtf2.format(d);
  });
}
function getWeekdayNames() {
  var locale2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
  var format = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "narrow";
  var dates = [];
  for (var i = 0; i < 7; i++) {
    var dt = new Date(2e3, 0, i + 1);
    dates[dt.getDay()] = dt;
  }
  var dtf2 = new Intl.DateTimeFormat(locale2, {
    weekday: format
  });
  return dates.map(function(d) {
    return dtf2.format(d);
  });
}
function matchWithGroups(pattern, str) {
  var matches = str.match(pattern);
  return pattern.toString().match(/<(.+?)>/g).map(function(group) {
    var groupMatches = group.match(/<(.+)>/);
    if (!groupMatches || groupMatches.length <= 0) {
      return null;
    }
    return group.match(/<(.+)>/)[1];
  }).reduce(function(acc, curr, index, arr) {
    if (matches && matches.length > index) {
      acc[curr] = matches[index + 1];
    } else {
      acc[curr] = null;
    }
    return acc;
  }, {});
}
function isWebpSupported() {
  return new Promise(function(resolve) {
    var image = new Image();
    image.onerror = function() {
      return resolve(false);
    };
    image.onload = function() {
      return resolve(image.width === 1);
    };
    image.src = "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=";
  })["catch"](function() {
    return false;
  });
}
function isCustomElement(vm) {
  return "shadowRoot" in vm.$root.$options;
}
var isDefined = function isDefined2(d) {
  return d !== void 0;
};
var isNil = function isNil2(value) {
  return value === null || value === void 0;
};
function isFragment(vnode) {
  return vnode.type === Fragment;
}
function isTag(vnode) {
  return vnode.type !== Comment && vnode.type !== Text && vnode.type !== Static;
}
function getComponentFromVNode(vnode) {
  if (!vnode) {
    return void 0;
  }
  var component = vnode.component;
  if (!component) {
    return void 0;
  }
  return component.exposed && component.exposeProxy || component.proxy;
}
function copyAppContext(src, dest) {
  var srcContext = src._context;
  var destContext = dest._context;
  destContext.config = srcContext.config;
  destContext.mixins = srcContext.mixins;
  destContext.components = srcContext.components;
  destContext.directives = srcContext.directives;
  destContext.provides = srcContext.provides;
  destContext.optionsCache = srcContext.optionsCache;
  destContext.propsCache = srcContext.propsCache;
  destContext.emitsCache = srcContext.emitsCache;
  if ("__VUE_I18N_SYMBOL__" in src) {
    dest.__VUE_I18N_SYMBOL__ = src.__VUE_I18N_SYMBOL__;
  }
}
var translateTouchAsDragEvent = function translateTouchAsDragEvent2(event, options) {
  var type = options.type, target = options.target;
  var translateX = 0;
  var translateY = 0;
  if (target != null && target !== event.target) {
    var baseRect = event.target.getBoundingClientRect();
    var targetRect = target.getBoundingClientRect();
    translateX = targetRect.left - baseRect.left;
    translateY = targetRect.top - baseRect.top;
  }
  var touch = event.touches[0] || event.changedTouches[0];
  return new DragEvent(type, {
    dataTransfer: new DataTransfer(),
    bubbles: true,
    screenX: touch.screenX,
    screenY: touch.screenY,
    clientX: touch.clientX + translateX,
    clientY: touch.clientY + translateY,
    ctrlKey: event.ctrlKey,
    shiftKey: event.shiftKey,
    altKey: event.altKey,
    metaKey: event.metaKey
  });
};

// node_modules/buefy/dist/esm/config-nHWiBviw.js
var config = {
  defaultContainerElement: null,
  defaultIconPack: "mdi",
  defaultIconComponent: null,
  defaultIconPrev: "chevron-left",
  defaultIconNext: "chevron-right",
  defaultLocale: void 0,
  defaultDialogConfirmText: null,
  defaultDialogCancelText: null,
  defaultSnackbarDuration: 3500,
  defaultSnackbarPosition: null,
  defaultToastDuration: 2e3,
  defaultToastPosition: null,
  defaultNotificationDuration: 2e3,
  defaultNotificationPosition: null,
  defaultTooltipType: "is-primary",
  defaultTooltipDelay: null,
  defaultTooltipCloseDelay: null,
  defaultSidebarDelay: null,
  defaultInputAutocomplete: "on",
  defaultDateFormatter: null,
  defaultDateParser: null,
  defaultDateCreator: null,
  defaultTimeCreator: null,
  defaultDayNames: null,
  defaultMonthNames: null,
  defaultFirstDayOfWeek: null,
  defaultUnselectableDaysOfWeek: null,
  defaultTimeFormatter: null,
  defaultTimeParser: null,
  defaultModalCanCancel: ["escape", "x", "outside", "button"],
  defaultModalScroll: null,
  defaultDatepickerMobileNative: true,
  defaultTimepickerMobileNative: true,
  defaultTimepickerMobileModal: true,
  defaultNoticeQueue: true,
  defaultInputHasCounter: true,
  /**
   * Whether `class`, `style`, and `id` are applied to the root element in
   * components that are affected by Vue 3 change in fallthgourh beahvior.
   * See: https://github.com/ntohq/buefy-next/issues/16
   */
  defaultCompatFallthrough: true,
  defaultTaginputHasCounter: true,
  defaultUseHtml5Validation: true,
  defaultDropdownMobileModal: true,
  defaultFieldLabelPosition: null,
  defaultDatepickerYearsRange: [-100, 10],
  defaultDatepickerNearbyMonthDays: true,
  defaultDatepickerNearbySelectableMonthDays: false,
  defaultDatepickerShowWeekNumber: false,
  defaultDatepickerWeekNumberClickable: false,
  defaultDatepickerMobileModal: true,
  defaultTrapFocus: true,
  defaultAutoFocus: true,
  defaultButtonRounded: false,
  defaultSwitchRounded: true,
  defaultCarouselInterval: 3500,
  defaultTabsExpanded: false,
  defaultTabsAnimated: true,
  defaultTabsType: null,
  defaultStatusIcon: true,
  defaultProgrammaticPromise: false,
  defaultLinkTags: ["a", "button", "input", "router-link", "nuxt-link", "n-link", "RouterLink", "NuxtLink", "NLink"],
  defaultImageWebpFallback: null,
  defaultImageLazy: true,
  defaultImageResponsive: true,
  defaultImageRatio: null,
  defaultImageSrcsetFormatter: null,
  defaultBreadcrumbTag: "a",
  defaultBreadcrumbAlign: "is-left",
  defaultBreadcrumbSeparator: "",
  defaultBreadcrumbSize: "is-medium",
  customIconPacks: null
};
var setOptions = function setOptions2(options) {
  config = options;
};

// node_modules/buefy/dist/esm/CompatFallthroughMixin-Ev2XGfi3.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
var _excluded = ["style", "class", "id"];
var CompatFallthroughMixin = {
  inheritAttrs: false,
  props: {
    compatFallthrough: {
      type: Boolean,
      "default": function _default() {
        return config.defaultCompatFallthrough;
      }
    }
  },
  computed: {
    rootAttrs: function rootAttrs() {
      return this.compatFallthrough ? {
        "class": this.$attrs["class"],
        style: this.$attrs.style,
        id: this.$attrs.id
      } : {};
    },
    fallthroughAttrs: function fallthroughAttrs() {
      if (this.compatFallthrough) {
        var _this$$attrs = this.$attrs;
        _this$$attrs.style;
        _this$$attrs["class"];
        _this$$attrs.id;
        var rest = _objectWithoutProperties(_this$$attrs, _excluded);
        return rest;
      } else {
        return this.$attrs;
      }
    }
  }
};

// node_modules/buefy/dist/esm/FormElementMixin-ILDlgM3i.js
var FormElementMixin = {
  props: {
    size: String,
    expanded: Boolean,
    loading: Boolean,
    rounded: Boolean,
    icon: String,
    iconPack: String,
    // Native options to use in HTML5 validation
    autocomplete: String,
    maxlength: [Number, String],
    useHtml5Validation: {
      type: Boolean,
      "default": function _default2() {
        return config.defaultUseHtml5Validation;
      }
    },
    validationMessage: String,
    locale: {
      type: [String, Array],
      "default": function _default3() {
        return config.defaultLocale;
      }
    },
    statusIcon: {
      type: Boolean,
      "default": function _default4() {
        return config.defaultStatusIcon;
      }
    }
  },
  emits: ["blur", "focus"],
  data: function data() {
    return {
      isValid: true,
      isFocused: false,
      newIconPack: this.iconPack || config.defaultIconPack
    };
  },
  computed: {
    /**
     * Find parent Field, max 3 levels deep.
     */
    parentField: function parentField() {
      var parent = this.$parent;
      for (var i = 0; i < 3; i++) {
        if (parent && !parent.$data._isField) {
          parent = parent.$parent;
        }
      }
      return parent;
    },
    /**
     * Get the type prop from parent if it's a Field.
     */
    statusType: function statusType() {
      var _ref = this.parentField || {}, newType = _ref.newType;
      if (!newType) return;
      if (typeof newType === "string") {
        return newType;
      } else {
        for (var key in newType) {
          if (newType[key]) {
            return key;
          }
        }
      }
    },
    /**
     * Get the message prop from parent if it's a Field.
     */
    statusMessage: function statusMessage() {
      if (!this.parentField) return;
      return this.parentField.newMessage || this.parentField.$slots.message;
    },
    /**
     * Fix icon size for inputs, large was too big
     */
    iconSize: function iconSize() {
      switch (this.size) {
        case "is-small":
          return this.size;
        case "is-medium":
          return;
        case "is-large":
          return this.newIconPack === "mdi" ? "is-medium" : "";
      }
    }
  },
  methods: {
    /**
     * Focus method that work dynamically depending on the component.
     */
    focus: function focus() {
      var el = this.getElement();
      if (el === void 0) return;
      this.$nextTick(function() {
        if (el) el.focus();
      });
    },
    onBlur: function onBlur($event) {
      this.isFocused = false;
      this.$emit("blur", $event);
      this.checkHtml5Validity();
    },
    onFocus: function onFocus($event) {
      this.isFocused = true;
      this.$emit("focus", $event);
    },
    getElement: function getElement() {
      var el = this.$refs[this.$data._elementRef];
      while (el != null && "$refs" in el) {
        el = el.$refs[el.$data._elementRef];
      }
      return el;
    },
    setInvalid: function setInvalid() {
      var type = "is-danger";
      var message = this.validationMessage || this.getElement().validationMessage;
      this.setValidity(type, message);
    },
    setValidity: function setValidity(type, message) {
      var _this = this;
      this.$nextTick(function() {
        if (_this.parentField) {
          if (!_this.parentField.type) {
            _this.parentField.newType = type;
          }
          if (!_this.parentField.message) {
            _this.parentField.newMessage = message;
          }
        }
      });
    },
    /**
     * Check HTML5 validation, set isValid property.
     * If validation fail, send 'is-danger' type,
     * and error message to parent if it's a Field.
     */
    checkHtml5Validity: function checkHtml5Validity() {
      if (!this.useHtml5Validation) return;
      var el = this.getElement();
      if (el == null) return;
      if (!el.checkValidity()) {
        this.setInvalid();
        this.isValid = false;
      } else {
        this.setValidity(null, null);
        this.isValid = true;
      }
      return this.isValid;
    }
  }
};

// node_modules/buefy/dist/esm/Icon-fJqkx1gN.js
var mdiIcons = {
  sizes: {
    "default": "mdi-24px",
    "is-small": null,
    "is-medium": "mdi-36px",
    "is-large": "mdi-48px"
  },
  iconPrefix: "mdi-"
};
var faIcons = function faIcons2() {
  var faIconPrefix = config && config.defaultIconComponent ? "" : "fa-";
  return {
    sizes: {
      "default": null,
      "is-small": null,
      "is-medium": faIconPrefix + "lg",
      "is-large": faIconPrefix + "2x"
    },
    iconPrefix: faIconPrefix,
    internalIcons: {
      information: "info-circle",
      alert: "exclamation-triangle",
      "alert-circle": "exclamation-circle",
      "chevron-right": "angle-right",
      "chevron-left": "angle-left",
      "chevron-down": "angle-down",
      "eye-off": "eye-slash",
      "menu-down": "caret-down",
      "menu-up": "caret-up",
      "close-circle": "times-circle"
    }
  };
};
var getIcons = function getIcons2() {
  var icons = {
    mdi: mdiIcons,
    fa: faIcons(),
    fas: faIcons(),
    far: faIcons(),
    fad: faIcons(),
    fab: faIcons(),
    fal: faIcons(),
    "fa-solid": faIcons(),
    "fa-regular": faIcons(),
    "fa-light": faIcons(),
    "fa-thin": faIcons(),
    "fa-duotone": faIcons(),
    "fa-brands": faIcons()
  };
  if (config && config.customIconPacks) {
    icons = merge(icons, config.customIconPacks, true);
  }
  return icons;
};
var getIcons$1 = getIcons;
var script = {
  name: "BIcon",
  props: {
    type: [String, Object],
    component: String,
    pack: String,
    icon: String,
    size: String,
    customSize: String,
    customClass: String,
    both: Boolean
    // This is used internally to show both MDI and FA icon
  },
  computed: {
    iconConfig() {
      const allIcons = getIcons$1();
      return allIcons[this.newPack];
    },
    iconPrefix() {
      if (this.iconConfig && this.iconConfig.iconPrefix) {
        return this.iconConfig.iconPrefix;
      }
      return "";
    },
    /**
    * Internal icon name based on the pack.
    * If pack is 'fa', gets the equivalent FA icon name of the MDI,
    * internal icons are always MDI.
    */
    newIcon() {
      return `${this.iconPrefix}${this.getEquivalentIconOf(this.icon)}`;
    },
    newPack() {
      return this.pack || config.defaultIconPack;
    },
    newType() {
      if (!this.type) return;
      let splitType = [];
      if (typeof this.type === "string") {
        splitType = this.type.split("-");
      } else {
        for (const key in this.type) {
          if (this.type[key]) {
            splitType = key.split("-");
            break;
          }
        }
      }
      if (splitType.length <= 1) return;
      const [, ...type] = splitType;
      return `has-text-${type.join("-")}`;
    },
    newCustomSize() {
      return this.customSize || this.customSizeByPack;
    },
    customSizeByPack() {
      if (this.iconConfig && this.iconConfig.sizes) {
        if (this.size && this.iconConfig.sizes[this.size] !== void 0) {
          return this.iconConfig.sizes[this.size];
        } else if (this.iconConfig.sizes.default) {
          return this.iconConfig.sizes.default;
        }
      }
      return null;
    },
    useIconComponent() {
      return this.component || config.defaultIconComponent;
    }
  },
  methods: {
    /**
    * Equivalent icon name of the MDI.
    */
    getEquivalentIconOf(value) {
      if (!this.both) {
        return value;
      }
      if (this.iconConfig && this.iconConfig.internalIcons && this.iconConfig.internalIcons[value]) {
        return this.iconConfig.internalIcons[value];
      }
      return value;
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "span",
    {
      class: normalizeClass(["icon", [$options.newType, $props.size]])
    },
    [
      !$options.useIconComponent ? (openBlock(), createElementBlock(
        "i",
        {
          key: 0,
          class: normalizeClass([$options.newPack, $options.newIcon, $options.newCustomSize, $props.customClass])
        },
        null,
        2
        /* CLASS */
      )) : (openBlock(), createBlock(resolveDynamicComponent($options.useIconComponent), {
        key: 1,
        icon: [$options.newPack, $options.newIcon],
        size: $options.newCustomSize,
        class: normalizeClass([$props.customClass])
      }, null, 8, ["icon", "size", "class"]))
    ],
    2
    /* CLASS */
  );
}
script.render = render;
script.__file = "src/components/icon/Icon.vue";

// node_modules/buefy/dist/esm/Input-0ivJhXUC.js
var script2 = {
  name: "BInput",
  components: {
    [script.name]: script
  },
  mixins: [CompatFallthroughMixin, FormElementMixin],
  props: {
    modelValue: [Number, String],
    type: {
      type: String,
      default: "text"
    },
    lazy: {
      type: Boolean,
      default: false
    },
    passwordReveal: Boolean,
    iconClickable: Boolean,
    hasCounter: {
      type: Boolean,
      default: () => config.defaultInputHasCounter
    },
    customClass: {
      type: String,
      default: ""
    },
    iconRight: String,
    iconRightClickable: Boolean,
    iconRightType: String
  },
  emits: [
    "icon-click",
    "icon-right-click",
    "update:modelValue"
  ],
  data() {
    return {
      newValue: this.modelValue,
      newType: this.type,
      newAutocomplete: this.autocomplete || config.defaultInputAutocomplete,
      isPasswordVisible: false,
      _elementRef: this.type === "textarea" ? "textarea" : "input"
    };
  },
  computed: {
    computedValue: {
      get() {
        return this.newValue;
      },
      set(value) {
        this.newValue = value;
        this.$emit("update:modelValue", value);
      }
    },
    rootClasses() {
      return [
        this.iconPosition,
        this.size,
        {
          "is-expanded": this.expanded,
          "is-loading": this.loading,
          "is-clearfix": !this.hasMessage
        }
      ];
    },
    inputClasses() {
      return [
        this.statusType,
        this.size,
        { "is-rounded": this.rounded }
      ];
    },
    hasIconRight() {
      return this.passwordReveal || this.loading || this.statusIcon && this.statusTypeIcon || this.iconRight;
    },
    rightIcon() {
      if (this.passwordReveal) {
        return this.passwordVisibleIcon;
      } else if (this.iconRight) {
        return this.iconRight;
      }
      return this.statusTypeIcon;
    },
    rightIconType() {
      if (this.passwordReveal) {
        return "is-primary";
      } else if (this.iconRight) {
        return this.iconRightType || null;
      }
      return this.statusType;
    },
    /**
    * Position of the icon or if it's both sides.
    */
    iconPosition() {
      let iconClasses = "";
      if (this.icon) {
        iconClasses += "has-icons-left ";
      }
      if (this.hasIconRight) {
        iconClasses += "has-icons-right";
      }
      return iconClasses;
    },
    /**
    * Icon name (MDI) based on the type.
    */
    statusTypeIcon() {
      switch (this.statusType) {
        case "is-success":
          return "check";
        case "is-danger":
          return "alert-circle";
        case "is-info":
          return "information";
        case "is-warning":
          return "alert";
        default:
          return void 0;
      }
    },
    /**
    * Check if have any message prop from parent if it's a Field.
    */
    hasMessage() {
      return !!this.statusMessage;
    },
    /**
    * Current password-reveal icon name.
    */
    passwordVisibleIcon() {
      return !this.isPasswordVisible ? "eye" : "eye-off";
    },
    /**
    * Get value length
    */
    valueLength() {
      if (typeof this.computedValue === "string") {
        return Array.from(this.computedValue).length;
      } else if (typeof this.computedValue === "number") {
        return this.computedValue.toString().length;
      }
      return 0;
    }
  },
  watch: {
    /**
    * When v-model is changed:
    *   1. Set internal value.
    *   2. Validate it if the value came from outside;
    *      i.e., not equal to computedValue
    */
    modelValue(value) {
      const fromOutside = this.computedValue != value;
      this.newValue = value;
      if (fromOutside) {
        this.$nextTick(() => {
          !this.isValid && this.checkHtml5Validity();
        });
      }
    },
    type(type) {
      this.newType = type;
    }
  },
  methods: {
    /**
    * Toggle the visibility of a password-reveal input
    * by changing the type and focus the input right away.
    */
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
      this.newType = this.isPasswordVisible ? "text" : "password";
      this.$nextTick(() => {
        this.focus();
      });
    },
    iconClick(emit2, event) {
      this.$emit(emit2, event);
      this.$nextTick(() => {
        this.focus();
      });
    },
    rightIconClick(event) {
      if (this.passwordReveal) {
        this.togglePasswordVisibility();
      } else if (this.iconRightClickable) {
        this.iconClick("icon-right-click", event);
      }
    },
    onInput(event) {
      if (!this.lazy) {
        const value = event.target.value;
        this.updateValue(value);
      }
    },
    onChange(event) {
      if (this.lazy) {
        const value = event.target.value;
        this.updateValue(value);
      }
    },
    updateValue(value) {
      this.computedValue = value;
      !this.isValid && this.checkHtml5Validity();
    }
  }
};
var _hoisted_1 = ["type", "autocomplete", "maxlength", "value"];
var _hoisted_2 = ["maxlength", "value"];
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");
  return openBlock(), createElementBlock(
    "div",
    mergeProps({
      class: ["control", $options.rootClasses]
    }, _ctx.rootAttrs),
    [
      $props.type !== "textarea" ? (openBlock(), createElementBlock("input", mergeProps({
        key: 0,
        ref: "input",
        class: ["input", [$options.inputClasses, $props.customClass]],
        type: $data.newType,
        autocomplete: $data.newAutocomplete,
        maxlength: _ctx.maxlength,
        value: $options.computedValue
      }, _ctx.fallthroughAttrs, {
        onInput: _cache[0] || (_cache[0] = (...args) => $options.onInput && $options.onInput(...args)),
        onChange: _cache[1] || (_cache[1] = (...args) => $options.onChange && $options.onChange(...args)),
        onBlur: _cache[2] || (_cache[2] = (...args) => _ctx.onBlur && _ctx.onBlur(...args)),
        onFocus: _cache[3] || (_cache[3] = (...args) => _ctx.onFocus && _ctx.onFocus(...args))
      }), null, 16, _hoisted_1)) : (openBlock(), createElementBlock("textarea", mergeProps({
        key: 1,
        ref: "textarea",
        class: ["textarea", [$options.inputClasses, $props.customClass]],
        maxlength: _ctx.maxlength,
        value: $options.computedValue
      }, _ctx.fallthroughAttrs, {
        onInput: _cache[4] || (_cache[4] = (...args) => $options.onInput && $options.onInput(...args)),
        onChange: _cache[5] || (_cache[5] = (...args) => $options.onChange && $options.onChange(...args)),
        onBlur: _cache[6] || (_cache[6] = (...args) => _ctx.onBlur && _ctx.onBlur(...args)),
        onFocus: _cache[7] || (_cache[7] = (...args) => _ctx.onFocus && _ctx.onFocus(...args))
      }), null, 16, _hoisted_2)),
      _ctx.icon ? (openBlock(), createBlock(_component_b_icon, {
        key: 2,
        class: normalizeClass(["is-left", { "is-clickable": $props.iconClickable }]),
        icon: _ctx.icon,
        pack: _ctx.iconPack,
        size: _ctx.iconSize,
        onClick: _cache[8] || (_cache[8] = ($event) => $options.iconClick("icon-click", $event))
      }, null, 8, ["class", "icon", "pack", "size"])) : createCommentVNode("v-if", true),
      !_ctx.loading && $options.hasIconRight ? (openBlock(), createBlock(_component_b_icon, {
        key: 3,
        class: normalizeClass(["is-right", { "is-clickable": $props.passwordReveal || $props.iconRightClickable }]),
        icon: $options.rightIcon,
        pack: _ctx.iconPack,
        size: _ctx.iconSize,
        type: $options.rightIconType,
        both: "",
        onClick: $options.rightIconClick
      }, null, 8, ["class", "icon", "pack", "size", "type", "onClick"])) : createCommentVNode("v-if", true),
      _ctx.maxlength && $props.hasCounter && $props.type !== "number" ? (openBlock(), createElementBlock(
        "small",
        {
          key: 4,
          class: normalizeClass(["help counter", { "is-invisible": !_ctx.isFocused }])
        },
        toDisplayString($options.valueLength) + " / " + toDisplayString(_ctx.maxlength),
        3
        /* TEXT, CLASS */
      )) : createCommentVNode("v-if", true)
    ],
    16
    /* FULL_PROPS */
  );
}
script2.render = render2;
script2.__file = "src/components/input/Input.vue";

// node_modules/buefy/dist/esm/Autocomplete-PtCdVo_0.js
var script3 = {
  name: "BAutocomplete",
  components: {
    [script2.name]: script2
  },
  mixins: [CompatFallthroughMixin, FormElementMixin],
  props: {
    modelValue: [Number, String],
    data: {
      type: Array,
      default: () => []
    },
    field: {
      type: String,
      default: "value"
    },
    keepFirst: Boolean,
    clearOnSelect: Boolean,
    openOnFocus: Boolean,
    customFormatter: Function,
    checkInfiniteScroll: Boolean,
    keepOpen: Boolean,
    selectOnClickOutside: Boolean,
    clearable: Boolean,
    maxHeight: [String, Number],
    dropdownPosition: {
      type: String,
      default: "auto"
    },
    groupField: String,
    groupOptions: String,
    iconRight: String,
    iconRightClickable: Boolean,
    appendToBody: Boolean,
    type: {
      type: String,
      default: "text"
    },
    confirmKeys: {
      type: Array,
      default: () => ["Tab", "Enter"]
    },
    selectableHeader: Boolean,
    selectableFooter: Boolean
  },
  emits: [
    "active",
    "blur",
    "focus",
    "icon-click",
    "icon-right-click",
    "infinite-scroll",
    "select",
    "select-footer",
    "select-header",
    "typing",
    "update:modelValue"
  ],
  data() {
    return {
      selected: null,
      hovered: null,
      headerHovered: null,
      footerHovered: null,
      isActive: false,
      newValue: this.modelValue,
      newAutocomplete: this.autocomplete || "off",
      ariaAutocomplete: this.keepFirst ? "both" : "list",
      isListInViewportVertically: true,
      hasFocus: false,
      style: {},
      _isAutocomplete: true,
      _elementRef: "input",
      _bodyEl: void 0,
      // Used to append to body
      timeOutID: null
    };
  },
  computed: {
    computedData() {
      if (this.groupField) {
        if (this.groupOptions) {
          const newData = [];
          this.data.forEach((option) => {
            const group = getValueByPath(option, this.groupField);
            const items2 = getValueByPath(option, this.groupOptions);
            newData.push({ group, items: items2 });
          });
          return newData;
        } else {
          const tmp = {};
          this.data.forEach((option) => {
            const group = getValueByPath(option, this.groupField);
            if (!tmp[group]) tmp[group] = [];
            tmp[group].push(option);
          });
          const newData = [];
          Object.keys(tmp).forEach((group) => {
            newData.push({ group, items: tmp[group] });
          });
          return newData;
        }
      }
      return [{ items: this.data }];
    },
    isEmpty() {
      if (!this.computedData) return true;
      return !this.computedData.some((element) => element.items && element.items.length);
    },
    /**
     * White-listed items to not close when clicked.
     * Add input, dropdown and all children.
     */
    whiteList() {
      const whiteList = [];
      whiteList.push(this.$refs.input.$el.querySelector("input"));
      whiteList.push(this.$refs.dropdown);
      if (this.$refs.dropdown != null) {
        const children = this.$refs.dropdown.querySelectorAll("*");
        for (const child of children) {
          whiteList.push(child);
        }
      }
      if (this.$parent.$data._isTaginput) {
        whiteList.push(this.$parent.$el);
        const tagInputChildren = this.$parent.$el.querySelectorAll("*");
        for (const tagInputChild of tagInputChildren) {
          whiteList.push(tagInputChild);
        }
      }
      return whiteList;
    },
    /**
     * Check if exists default slot
     */
    hasDefaultSlot() {
      return !!this.$slots.default;
    },
    /**
     * Check if exists group slot
     */
    hasGroupSlot() {
      return !!this.$slots.group;
    },
    /**
     * Check if exists "empty" slot
     */
    hasEmptySlot() {
      return !!this.$slots.empty;
    },
    /**
     * Check if exists "header" slot
     */
    hasHeaderSlot() {
      return !!this.$slots.header;
    },
    /**
     * Check if exists "footer" slot
     */
    hasFooterSlot() {
      return !!this.$slots.footer;
    },
    /**
     * Apply dropdownPosition property
     */
    isOpenedTop() {
      return this.dropdownPosition === "top" || this.dropdownPosition === "auto" && !this.isListInViewportVertically;
    },
    newIconRight() {
      if (this.clearable && this.newValue) {
        return "close-circle";
      }
      return this.iconRight;
    },
    newIconRightClickable() {
      if (this.clearable) {
        return true;
      }
      return this.iconRightClickable;
    },
    contentStyle() {
      return {
        maxHeight: toCssWidth(this.maxHeight)
      };
    }
  },
  watch: {
    /**
     * When dropdown is toggled, check the visibility to know when
     * to open upwards.
     */
    isActive(active) {
      if (this.dropdownPosition === "auto") {
        if (active) {
          this.calcDropdownInViewportVertical();
        } else {
          this.timeOutID = setTimeout(() => {
            this.calcDropdownInViewportVertical();
          }, 100);
        }
      }
      this.$nextTick(() => {
        this.$emit("active", active);
      });
    },
    /**
     * When checkInfiniteScroll property changes scroll event should be removed or added
     */
    checkInfiniteScroll(checkInfiniteScroll) {
      if ((this.$refs.dropdown && this.$refs.dropdown.querySelector(".dropdown-content")) === false) return;
      const list = this.$refs.dropdown.querySelector(".dropdown-content");
      if (checkInfiniteScroll === true) {
        list.addEventListener("scroll", this.checkIfReachedTheEndOfScroll);
        return;
      }
      list.removeEventListener("scroll", this.checkIfReachedTheEndOfScroll);
    },
    /**
     * When updating input's value
     *   1. Emit changes
     *   2. If value isn't the same as selected, set null
     *   3. Close dropdown if value is clear or else open it
     */
    newValue(value) {
      this.$emit("update:modelValue", value);
      const currentValue = this.getValue(this.selected);
      if (currentValue && currentValue !== value) {
        this.setSelected(null, false);
      }
      if (this.hasFocus && (!this.openOnFocus || value)) {
        this.isActive = !!value;
      }
    },
    /**
     * When v-model is changed:
     *   1. Update internal value.
     *   2. If it's invalid, validate again.
     */
    modelValue(value) {
      this.newValue = value;
    },
    /**
     * Select first option if "keep-first
     */
    data() {
      if (this.keepFirst) {
        this.$nextTick(() => {
          if (this.isActive) {
            this.selectFirstOption(this.computedData);
          } else {
            this.setHovered(null);
          }
        });
      } else {
        if (this.hovered) {
          const hoveredValue = this.getValue(this.hovered);
          const data8 = this.computedData.map((d) => d.items).reduce((a, b) => [...a, ...b], []);
          if (!data8.some((d) => this.getValue(d) === hoveredValue)) {
            this.setHovered(null);
          }
        }
      }
    }
  },
  methods: {
    /**
     * Set which option is currently hovered.
     */
    setHovered(option) {
      if (option === void 0) return;
      this.hovered = option;
    },
    /**
     * Set which option is currently selected, update v-model,
     * update input value and close dropdown.
     */
    setSelected(option, closeDropdown = true, event = void 0) {
      if (option === void 0) return;
      this.selected = option;
      this.$emit("select", this.selected, event);
      if (this.selected !== null) {
        if (this.clearOnSelect) {
          const input = this.$refs.input;
          input.newValue = "";
          input.$refs.input.value = "";
        } else {
          this.newValue = this.getValue(this.selected);
        }
        this.setHovered(null);
      }
      closeDropdown && this.$nextTick(() => {
        this.isActive = false;
      });
      this.checkValidity();
    },
    /**
     * Select first option
     */
    selectFirstOption(computedData) {
      this.$nextTick(() => {
        const nonEmptyElements = computedData.filter(
          (element) => element.items && element.items.length
        );
        if (nonEmptyElements.length) {
          const option = nonEmptyElements[0].items[0];
          this.setHovered(option);
        } else {
          this.setHovered(null);
        }
      });
    },
    keydown(event) {
      const { key } = event;
      if (key === "Enter") event.preventDefault();
      if (key === "Escape" || key === "Tab") {
        this.isActive = false;
      }
      if (this.confirmKeys.indexOf(key) >= 0) {
        if (key === ",") event.preventDefault();
        const closeDropdown = !this.keepOpen || key === "Tab";
        if (this.hovered === null) {
          this.checkIfHeaderOrFooterSelected(event, null, closeDropdown);
          return;
        }
        this.setSelected(this.hovered, closeDropdown, event);
      }
    },
    selectHeaderOrFoterByClick(event, origin) {
      this.checkIfHeaderOrFooterSelected(event, { origin });
    },
    /**
     * Check if header or footer was selected.
     */
    checkIfHeaderOrFooterSelected(event, triggerClick, closeDropdown = true) {
      if (this.selectableHeader && (this.headerHovered || triggerClick && triggerClick.origin === "header")) {
        this.$emit("select-header", event);
        this.headerHovered = false;
        if (triggerClick) this.setHovered(null);
        if (closeDropdown) this.isActive = false;
      }
      if (this.selectableFooter && (this.footerHovered || triggerClick && triggerClick.origin === "footer")) {
        this.$emit("select-footer", event);
        this.footerHovered = false;
        if (triggerClick) this.setHovered(null);
        if (closeDropdown) this.isActive = false;
      }
    },
    /**
     * Close dropdown if clicked outside.
     */
    clickedOutside(event) {
      const target = isCustomElement(this) ? event.composedPath()[0] : event.target;
      if (!this.hasFocus && this.whiteList.indexOf(target) < 0) {
        if (this.keepFirst && this.hovered && this.selectOnClickOutside) {
          this.setSelected(this.hovered, true);
        } else {
          this.isActive = false;
        }
      }
    },
    /**
     * Return display text for the input.
     * If object, get value from path, or else just the value.
     */
    getValue(option) {
      if (option === null) return;
      if (typeof this.customFormatter !== "undefined") {
        return this.customFormatter(option);
      }
      return typeof option === "object" ? getValueByPath(option, this.field) : option;
    },
    /**
     * Check if the scroll list inside the dropdown
     * reached it's end.
     */
    checkIfReachedTheEndOfScroll() {
      const list = this.$refs.dropdown.querySelector(".dropdown-content");
      const footerHeight = this.hasFooterSlot ? list.querySelectorAll("div.dropdown-footer")[0].clientHeight : 0;
      if (list.clientHeight !== list.scrollHeight && list.scrollTop + list.parentElement.clientHeight + footerHeight >= list.scrollHeight) {
        this.$emit("infinite-scroll");
      }
    },
    /**
     * Calculate if the dropdown is vertically visible when activated,
     * otherwise it is openened upwards.
     */
    calcDropdownInViewportVertical() {
      this.$nextTick(() => {
        if (this.$refs.dropdown == null) return;
        const rect = this.$refs.dropdown.getBoundingClientRect();
        this.isListInViewportVertically = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
        if (this.appendToBody) {
          this.updateAppendToBody();
        }
      });
    },
    /**
     * Arrows keys listener.
     * If dropdown is active, set hovered option, or else just open.
     */
    keyArrows(direction) {
      const sum = direction === "down" ? 1 : -1;
      if (this.isActive) {
        const data8 = this.computedData.map(
          (d) => d.items
        ).reduce((a, b) => [...a, ...b], []);
        if (this.hasHeaderSlot && this.selectableHeader) {
          data8.unshift(void 0);
        }
        if (this.hasFooterSlot && this.selectableFooter) {
          data8.push(void 0);
        }
        let index;
        if (this.headerHovered) {
          index = 0 + sum;
        } else if (this.footerHovered) {
          index = data8.length - 1 + sum;
        } else {
          index = data8.indexOf(this.hovered) + sum;
        }
        index = index > data8.length - 1 ? data8.length - 1 : index;
        index = index < 0 ? 0 : index;
        this.footerHovered = false;
        this.headerHovered = false;
        this.setHovered(data8[index] !== void 0 ? data8[index] : null);
        if (this.hasFooterSlot && this.selectableFooter && index === data8.length - 1) {
          this.footerHovered = true;
        }
        if (this.hasHeaderSlot && this.selectableHeader && index === 0) {
          this.headerHovered = true;
        }
        const list = this.$refs.dropdown.querySelector(".dropdown-content");
        let querySelectorText = "a.dropdown-item:not(.is-disabled)";
        if (this.hasHeaderSlot && this.selectableHeader) {
          querySelectorText += ",div.dropdown-header";
        }
        if (this.hasFooterSlot && this.selectableFooter) {
          querySelectorText += ",div.dropdown-footer";
        }
        const element = list.querySelectorAll(querySelectorText)[index];
        if (!element) return;
        const visMin = list.scrollTop;
        const visMax = list.scrollTop + list.clientHeight - element.clientHeight;
        if (element.offsetTop < visMin) {
          list.scrollTop = element.offsetTop;
        } else if (element.offsetTop >= visMax) {
          list.scrollTop = element.offsetTop - list.clientHeight + element.clientHeight;
        }
      } else {
        this.isActive = true;
      }
    },
    /**
     * Focus listener.
     * If value is the same as selected, select all text.
     */
    focused(event) {
      if (this.getValue(this.selected) === this.newValue) {
        this.$el.querySelector("input").select();
      }
      if (this.openOnFocus) {
        this.isActive = true;
        if (this.keepFirst) {
          this.selectFirstOption(this.computedData);
        }
      }
      this.hasFocus = true;
      this.$emit("focus", event);
    },
    /**
     * Blur listener.
     */
    onBlur(event) {
      this.hasFocus = false;
      this.$emit("blur", event);
    },
    onInput() {
      const currentValue = this.getValue(this.selected);
      if (currentValue && currentValue === this.newValue) return;
      this.$emit("typing", this.newValue);
      this.checkValidity();
    },
    rightIconClick(event) {
      if (this.clearable) {
        this.newValue = "";
        this.setSelected(null, false);
        if (this.openOnFocus) {
          this.$refs.input.$el.focus();
        }
      } else {
        this.$emit("icon-right-click", event);
      }
    },
    checkValidity() {
      if (this.useHtml5Validation) {
        this.$nextTick(() => {
          this.checkHtml5Validity();
        });
      }
    },
    updateAppendToBody() {
      const dropdownMenu = this.$refs.dropdown;
      const trigger = this.$parent.$data._isTaginput ? this.$parent.$el : this.$refs.input.$el;
      if (dropdownMenu && trigger) {
        const root = this.$data._bodyEl;
        root.classList.forEach((item) => root.classList.remove(item));
        root.classList.add("autocomplete");
        root.classList.add("control");
        if (this.expandend) {
          root.classList.add("is-expandend");
        }
        const rect = trigger.getBoundingClientRect();
        let top = rect.top + window.scrollY;
        const left = rect.left + window.scrollX;
        if (!this.isOpenedTop) {
          top += trigger.clientHeight;
        } else {
          top -= dropdownMenu.clientHeight;
        }
        this.style = {
          position: "absolute",
          top: `${top}px`,
          left: `${left}px`,
          width: `${trigger.clientWidth}px`,
          maxWidth: `${trigger.clientWidth}px`,
          zIndex: "99"
        };
      }
    }
  },
  created() {
    if (typeof window !== "undefined") {
      document.addEventListener("click", this.clickedOutside);
      if (this.dropdownPosition === "auto") {
        window.addEventListener("resize", this.calcDropdownInViewportVertical);
      }
    }
  },
  mounted() {
    if (this.checkInfiniteScroll && this.$refs.dropdown && this.$refs.dropdown.querySelector(".dropdown-content")) {
      const list = this.$refs.dropdown.querySelector(".dropdown-content");
      list.addEventListener("scroll", this.checkIfReachedTheEndOfScroll);
    }
    if (this.appendToBody) {
      this.$data._bodyEl = createAbsoluteElement(this.$refs.dropdown);
      this.updateAppendToBody();
    }
  },
  beforeUnmount() {
    if (typeof window !== "undefined") {
      document.removeEventListener("click", this.clickedOutside);
      if (this.dropdownPosition === "auto") {
        window.removeEventListener("resize", this.calcDropdownInViewportVertical);
      }
    }
    if (this.checkInfiniteScroll && this.$refs.dropdown && this.$refs.dropdown.querySelector(".dropdown-content")) {
      const list = this.$refs.dropdown.querySelector(".dropdown-content");
      list.removeEventListener("scroll", this.checkIfReachedTheEndOfScroll);
    }
    if (this.appendToBody) {
      removeElement(this.$data._bodyEl);
    }
    clearTimeout(this.timeOutID);
  }
};
var _hoisted_12 = {
  key: 1,
  class: "has-text-weight-bold"
};
var _hoisted_22 = ["onClick"];
var _hoisted_3 = { key: 1 };
var _hoisted_4 = {
  key: 1,
  class: "dropdown-item is-disabled"
};
function render3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_input = resolveComponent("b-input");
  return openBlock(), createElementBlock(
    "div",
    mergeProps({
      class: ["autocomplete control", { "is-expanded": _ctx.expanded }]
    }, _ctx.rootAttrs),
    [
      createVNode(_component_b_input, mergeProps({
        modelValue: $data.newValue,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.newValue = $event),
        ref: "input",
        type: $props.type,
        size: _ctx.size,
        loading: _ctx.loading,
        rounded: _ctx.rounded,
        icon: _ctx.icon,
        "icon-right": $options.newIconRight,
        "icon-right-clickable": $options.newIconRightClickable,
        "icon-pack": _ctx.iconPack,
        maxlength: _ctx.maxlength,
        autocomplete: $data.newAutocomplete,
        "use-html5-validation": false,
        "aria-autocomplete": $data.ariaAutocomplete
      }, _ctx.fallthroughAttrs, {
        "onUpdate:modelValue": $options.onInput,
        onFocus: $options.focused,
        onBlur: $options.onBlur,
        onKeydown: [
          $options.keydown,
          _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => $options.keyArrows("up"), ["prevent"]), ["up"])),
          _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => $options.keyArrows("down"), ["prevent"]), ["down"]))
        ],
        onIconRightClick: $options.rightIconClick,
        onIconClick: _cache[3] || (_cache[3] = (event) => _ctx.$emit("icon-click", event))
      }), null, 16, ["modelValue", "type", "size", "loading", "rounded", "icon", "icon-right", "icon-right-clickable", "icon-pack", "maxlength", "autocomplete", "aria-autocomplete", "onUpdate:modelValue", "onFocus", "onBlur", "onKeydown", "onIconRightClick"]),
      createVNode(Transition, {
        name: "fade",
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode(
            "div",
            {
              class: normalizeClass(["dropdown-menu", { "is-opened-top": $options.isOpenedTop && !$props.appendToBody }]),
              style: normalizeStyle($data.style),
              ref: "dropdown"
            },
            [
              withDirectives(createBaseVNode(
                "div",
                {
                  class: "dropdown-content",
                  style: normalizeStyle($options.contentStyle)
                },
                [
                  $options.hasHeaderSlot ? (openBlock(), createElementBlock(
                    "div",
                    {
                      key: 0,
                      class: normalizeClass(["dropdown-item dropdown-header", { "is-hovered": $data.headerHovered }]),
                      role: "button",
                      tabindex: "0",
                      onClick: _cache[4] || (_cache[4] = ($event) => $options.selectHeaderOrFoterByClick($event, "header"))
                    },
                    [
                      renderSlot(_ctx.$slots, "header")
                    ],
                    2
                    /* CLASS */
                  )) : createCommentVNode("v-if", true),
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList($options.computedData, (element, groupindex) => {
                      return openBlock(), createElementBlock(
                        Fragment,
                        null,
                        [
                          element.group ? (openBlock(), createElementBlock("div", {
                            key: groupindex + "group",
                            class: "dropdown-item"
                          }, [
                            $options.hasGroupSlot ? renderSlot(_ctx.$slots, "group", {
                              key: 0,
                              group: element.group,
                              index: groupindex
                            }) : (openBlock(), createElementBlock(
                              "span",
                              _hoisted_12,
                              toDisplayString(element.group),
                              1
                              /* TEXT */
                            ))
                          ])) : createCommentVNode("v-if", true),
                          (openBlock(true), createElementBlock(
                            Fragment,
                            null,
                            renderList(element.items, (option, index) => {
                              return openBlock(), createElementBlock("a", {
                                key: groupindex + ":" + index,
                                class: normalizeClass(["dropdown-item", { "is-hovered": option === $data.hovered }]),
                                role: "button",
                                tabindex: "0",
                                onClick: withModifiers(($event) => $options.setSelected(option, !$props.keepOpen, $event), ["stop"])
                              }, [
                                $options.hasDefaultSlot ? renderSlot(_ctx.$slots, "default", {
                                  key: 0,
                                  option,
                                  index
                                }) : (openBlock(), createElementBlock(
                                  "span",
                                  _hoisted_3,
                                  toDisplayString($options.getValue(option, true)),
                                  1
                                  /* TEXT */
                                ))
                              ], 10, _hoisted_22);
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ],
                        64
                        /* STABLE_FRAGMENT */
                      );
                    }),
                    256
                    /* UNKEYED_FRAGMENT */
                  )),
                  $options.isEmpty && $options.hasEmptySlot ? (openBlock(), createElementBlock("div", _hoisted_4, [
                    renderSlot(_ctx.$slots, "empty")
                  ])) : createCommentVNode("v-if", true),
                  $options.hasFooterSlot ? (openBlock(), createElementBlock(
                    "div",
                    {
                      key: 2,
                      class: normalizeClass(["dropdown-item dropdown-footer", { "is-hovered": $data.footerHovered }]),
                      role: "button",
                      tabindex: "0",
                      onClick: _cache[5] || (_cache[5] = ($event) => $options.selectHeaderOrFoterByClick($event, "footer"))
                    },
                    [
                      renderSlot(_ctx.$slots, "footer")
                    ],
                    2
                    /* CLASS */
                  )) : createCommentVNode("v-if", true)
                ],
                4
                /* STYLE */
              ), [
                [vShow, $data.isActive]
              ])
            ],
            6
            /* CLASS, STYLE */
          ), [
            [vShow, $data.isActive && (!$options.isEmpty || $options.hasEmptySlot || $options.hasHeaderSlot || $options.hasFooterSlot)]
          ])
        ]),
        _: 3
        /* FORWARDED */
      })
    ],
    16
    /* FULL_PROPS */
  );
}
script3.render = render3;
script3.__file = "src/components/autocomplete/Autocomplete.vue";

// node_modules/buefy/dist/esm/plugins-1raZX6c5.js
var use = function use2(plugin) {
  if (typeof window !== "undefined" && window.Vue) {
    window.Vue.use(plugin);
  }
};
var registerComponent = function registerComponent2(Vue, component, name) {
  Vue.component(name || component.name, component);
};
var registerComponentProgrammatic = function registerComponentProgrammatic2(Vue, property, component) {
  if (!Vue.config.globalProperties.$buefy) Vue.config.globalProperties.$buefy = {};
  Vue.config.globalProperties.$buefy[property] = component;
};

// node_modules/buefy/dist/esm/autocomplete.js
var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, script3);
  }
};
use(Plugin);

// node_modules/buefy/dist/esm/breadcrumb.js
var script$1 = {
  name: "BBreadcrumb",
  props: {
    align: {
      type: String,
      default: () => {
        return config.defaultBreadcrumbAlign;
      }
    },
    separator: {
      type: String,
      default: () => {
        return config.defaultBreadcrumbSeparator;
      }
    },
    size: {
      type: String,
      default: () => {
        return config.defaultBreadcrumbSize;
      }
    }
  },
  computed: {
    breadcrumbClasses() {
      return ["breadcrumb", this.align, this.separator, this.size];
    }
  }
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "nav",
    {
      class: normalizeClass($options.breadcrumbClasses)
    },
    [
      createBaseVNode("ul", null, [
        renderSlot(_ctx.$slots, "default")
      ])
    ],
    2
    /* CLASS */
  );
}
script$1.render = render$1;
script$1.__file = "src/components/breadcrumb/Breadcrumb.vue";
var script4 = {
  name: "BBreadcrumbItem",
  mixins: [CompatFallthroughMixin],
  props: {
    tag: {
      type: String,
      default: () => {
        return config.defaultBreadcrumbTag;
      }
    },
    active: Boolean
  }
};
function render4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "li",
    mergeProps({
      class: { "is-active": $props.active }
    }, _ctx.rootAttrs),
    [
      (openBlock(), createBlock(
        resolveDynamicComponent($props.tag),
        normalizeProps(guardReactiveProps(_ctx.fallthroughAttrs)),
        {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
          /* FORWARDED */
        },
        16
        /* FULL_PROPS */
      ))
    ],
    16
    /* FULL_PROPS */
  );
}
script4.render = render4;
script4.__file = "src/components/breadcrumb/BreadcrumbItem.vue";
var Plugin2 = {
  install: function install2(Vue) {
    registerComponent(Vue, script$1);
    registerComponent(Vue, script4);
  }
};
use(Plugin2);

// node_modules/buefy/dist/esm/Button-KVoJ7jHH.js
var script5 = {
  name: "BButton",
  components: {
    [script.name]: script
  },
  inheritAttrs: false,
  props: {
    type: [String, Object],
    size: String,
    label: String,
    iconPack: String,
    iconLeft: String,
    iconRight: String,
    rounded: {
      type: Boolean,
      default: () => {
        return config.defaultButtonRounded;
      }
    },
    loading: Boolean,
    outlined: Boolean,
    expanded: Boolean,
    inverted: Boolean,
    focused: Boolean,
    active: Boolean,
    hovered: Boolean,
    selected: Boolean,
    nativeType: {
      type: String,
      default: "button",
      validator: (value) => {
        return [
          "button",
          "submit",
          "reset"
        ].indexOf(value) >= 0;
      }
    },
    tag: {
      type: String,
      default: "button",
      validator: (value) => {
        return config.defaultLinkTags.indexOf(value) >= 0;
      }
    }
  },
  computed: {
    computedTag() {
      if (this.$attrs.disabled !== void 0 && this.$attrs.disabled !== false) {
        return "button";
      }
      return this.tag;
    },
    iconSize() {
      if (!this.size || this.size === "is-medium") {
        return "is-small";
      } else if (this.size === "is-large") {
        return "is-medium";
      }
      return this.size;
    }
  }
};
var _hoisted_13 = { key: 1 };
var _hoisted_23 = { key: 2 };
function render5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");
  return openBlock(), createBlock(resolveDynamicComponent($options.computedTag), mergeProps({ class: "button" }, _ctx.$attrs, {
    type: ["button", "input"].includes($options.computedTag) ? $props.nativeType : void 0,
    class: [$props.size, $props.type, {
      "is-rounded": $props.rounded,
      "is-loading": $props.loading,
      "is-outlined": $props.outlined,
      "is-fullwidth": $props.expanded,
      "is-inverted": $props.inverted,
      "is-focused": $props.focused,
      "is-active": $props.active,
      "is-hovered": $props.hovered,
      "is-selected": $props.selected
    }]
  }), {
    default: withCtx(() => [
      $props.iconLeft ? (openBlock(), createBlock(_component_b_icon, {
        key: 0,
        pack: $props.iconPack,
        icon: $props.iconLeft,
        size: $options.iconSize
      }, null, 8, ["pack", "icon", "size"])) : createCommentVNode("v-if", true),
      $props.label ? (openBlock(), createElementBlock(
        "span",
        _hoisted_13,
        toDisplayString($props.label),
        1
        /* TEXT */
      )) : _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_23, [
        renderSlot(_ctx.$slots, "default")
      ])) : createCommentVNode("v-if", true),
      $props.iconRight ? (openBlock(), createBlock(_component_b_icon, {
        key: 3,
        pack: $props.iconPack,
        icon: $props.iconRight,
        size: $options.iconSize
      }, null, 8, ["pack", "icon", "size"])) : createCommentVNode("v-if", true)
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["type", "class"]);
}
script5.render = render5;
script5.__file = "src/components/button/Button.vue";

// node_modules/buefy/dist/esm/button.js
var Plugin3 = {
  install: function install3(Vue) {
    registerComponent(Vue, script5);
  }
};
use(Plugin3);

// node_modules/buefy/dist/esm/InjectedChildMixin-95-VbgK7.js
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var items = 1;
var sorted$1 = 3;
var Sorted$1 = sorted$1;
var ProviderParentMixin = function(itemName) {
  var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var mixin = {
    provide: function provide2() {
      return _defineProperty({}, "b" + itemName, this);
    }
  };
  if (hasFlag(flags, items)) {
    mixin.data = function() {
      return _objectSpread$1({
        childItems: []
      }, hasFlag(flags, sorted$1) ? {
        nextIndex: 0
      } : {});
    };
    mixin.methods = {
      _registerItem: function _registerItem(item) {
        if (hasFlag(flags, sorted$1)) {
          item.dynamicIndex = this.nextIndex;
          ++this.nextIndex;
        }
        this.childItems.push(item);
      },
      _unregisterItem: function _unregisterItem(item) {
        this.childItems = this.childItems.filter(function(i) {
          return i.uniqueValue !== item.uniqueValue;
        });
      }
    };
    if (hasFlag(flags, sorted$1)) {
      mixin.computed = {
        /**
         * When items are added/removed sort them according to their position
         */
        sortedItems: function sortedItems() {
          return this.childItems.slice().sort(function(i1, i2) {
            return i1.index - i2.index;
          });
        }
      };
    }
  }
  return mixin;
};
function ownKeys2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys2(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var sorted = 1;
var optional = 2;
var Sorted = sorted;
var InjectedChildMixin = function(parentItemName) {
  var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var mixin = {
    inject: {
      parent: {
        from: "b" + parentItemName,
        "default": false
      }
    },
    props: {
      // if `value` is non-null, it must be unique among all the siblings.
      // see `uniqueValue`
      value: {
        type: String,
        "default": null
      }
    },
    computed: {
      // `ProviderParentMixin` uses `uniqueValue` computed value to
      // identify the child in its `childItems` collection.
      // so the value must be unique among all the siblings.
      // falls back to the `uid` internal field to ensure uniqueness.
      uniqueValue: function uniqueValue() {
        return this.value != null ? this.value : this.$.uid;
      }
    },
    created: function created3() {
      if (!this.parent) {
        if (!hasFlag(flags, optional)) {
          throw new Error("You should wrap " + this.$options.name + " in a " + parentItemName);
        }
      } else if (this.parent._registerItem) {
        this.parent._registerItem(this);
      }
    },
    beforeUnmount: function beforeUnmount2() {
      if (this.parent && this.parent._unregisterItem) {
        this.parent._unregisterItem(this);
      }
    }
  };
  if (hasFlag(flags, sorted)) {
    mixin.props = _objectSpread2(_objectSpread2({}, mixin.props), {}, {
      order: {
        type: Number,
        required: false
      }
    });
    mixin.data = function() {
      return {
        dynamicIndex: null
      };
    };
    mixin.computed = _objectSpread2(_objectSpread2({}, mixin.computed), {}, {
      index: function index() {
        return this.order != null ? this.order : this.dynamicIndex;
      }
    });
  }
  return mixin;
};

// node_modules/buefy/dist/esm/Image-s3Blktdg.js
var script6 = {
  name: "BImage",
  props: {
    src: String,
    alt: String,
    srcFallback: String,
    webpFallback: {
      type: String,
      default: () => {
        return config.defaultImageWebpFallback;
      }
    },
    lazy: {
      type: Boolean,
      default: () => {
        return config.defaultImageLazy;
      }
    },
    responsive: {
      type: Boolean,
      default: () => {
        return config.defaultImageResponsive;
      }
    },
    ratio: {
      type: String,
      default: () => {
        return config.defaultImageRatio;
      }
    },
    placeholder: String,
    srcset: String,
    srcsetSizes: Array,
    srcsetFormatter: {
      type: Function,
      default: (src, size, vm) => {
        if (typeof config.defaultImageSrcsetFormatter === "function") {
          return config.defaultImageSrcsetFormatter(src, size);
        } else {
          return vm.formatSrcset(src, size);
        }
      }
    },
    rounded: {
      type: Boolean,
      default: false
    },
    captionFirst: {
      type: Boolean,
      default: false
    },
    customClass: String
  },
  emits: ["load", "error"],
  data() {
    return {
      clientWidth: 0,
      webpSupportVerified: false,
      webpSupported: false,
      useNativeLazy: false,
      observer: null,
      inViewPort: false,
      bulmaKnownRatio: ["square", "1by1", "5by4", "4by3", "3by2", "5by3", "16by9", "b2y1", "3by1", "4by5", "3by4", "2by3", "3by5", "9by16", "1by2", "1by3"],
      loaded: false,
      failed: false
    };
  },
  computed: {
    ratioPattern() {
      return /([0-9]+)by([0-9]+)/;
    },
    hasRatio() {
      return this.ratio && this.ratioPattern.test(this.ratio);
    },
    figureClasses() {
      const classes = { image: this.responsive };
      if (this.hasRatio && this.bulmaKnownRatio.indexOf(this.ratio) >= 0) {
        classes[`is-${this.ratio}`] = true;
      }
      return classes;
    },
    figureStyles() {
      if (this.hasRatio && this.bulmaKnownRatio.indexOf(this.ratio) < 0) {
        const ratioValues = this.ratioPattern.exec(this.ratio);
        return {
          paddingTop: `${ratioValues[2] / ratioValues[1] * 100}%`
        };
      }
      return void 0;
    },
    imgClasses() {
      return {
        "is-rounded": this.rounded,
        "has-ratio": this.hasRatio,
        [this.customClass]: !!this.customClass
      };
    },
    srcExt() {
      return this.getExt(this.src);
    },
    isWepb() {
      return this.srcExt === "webp";
    },
    computedSrc() {
      let src = this.src;
      if (this.failed && this.srcFallback) {
        src = this.srcFallback;
      }
      if (!this.webpSupported && this.isWepb && this.webpFallback) {
        if (this.webpFallback.startsWith(".")) {
          return src.replace(/\.webp/gi, `${this.webpFallback}`);
        }
        return this.webpFallback;
      }
      return src;
    },
    computedWidth() {
      if (this.responsive && this.clientWidth > 0) {
        return this.clientWidth;
      }
      return void 0;
    },
    computedNativeLazy() {
      if (this.lazy && this.useNativeLazy) {
        return "lazy";
      }
      return void 0;
    },
    isDisplayed() {
      return (this.webpSupportVerified || !this.isWepb) && (!this.lazy || this.useNativeLazy || this.inViewPort);
    },
    placeholderExt() {
      if (this.placeholder) {
        return this.getExt(this.placeholder);
      }
      return void 0;
    },
    isPlaceholderWepb() {
      if (this.placeholder) {
        return this.placeholderExt === "webp";
      }
      return false;
    },
    computedPlaceholder() {
      if (!this.webpSupported && this.isPlaceholderWepb && this.webpFallback && this.webpFallback.startsWith(".")) {
        return this.placeholder.replace(/\.webp/gi, `${this.webpFallback}`);
      }
      return this.placeholder;
    },
    isPlaceholderDisplayed() {
      return !this.loaded && (this.$slots.placeholder || this.placeholder && (this.webpSupportVerified || !this.isPlaceholderWepb));
    },
    computedSrcset() {
      if (this.srcset) {
        if (!this.webpSupported && this.isWepb && this.webpFallback && this.webpFallback.startsWith(".")) {
          return this.srcset.replace(/\.webp/gi, `${this.webpFallback}`);
        }
        return this.srcset;
      }
      if (this.srcsetSizes && Array.isArray(this.srcsetSizes) && this.srcsetSizes.length > 0) {
        return this.srcsetSizes.map((size) => {
          return `${this.srcsetFormatter(this.computedSrc, size, this)} ${size}w`;
        }).join(",");
      }
      return void 0;
    },
    computedSizes() {
      if (this.computedSrcset && this.computedWidth) {
        return `${this.computedWidth}px`;
      }
      return void 0;
    },
    isCaptionFirst() {
      return this.$slots.caption && this.captionFirst;
    },
    isCaptionLast() {
      return this.$slots.caption && !this.captionFirst;
    }
  },
  methods: {
    getExt(filename, clean = true) {
      if (filename) {
        const noParam = clean ? filename.split("?")[0] : filename;
        return noParam.split(".").pop();
      }
      return "";
    },
    setWidth() {
      this.clientWidth = this.$el.clientWidth;
    },
    formatSrcset(src, size) {
      const ext = this.getExt(src, false);
      const name = src.split(".").slice(0, -1).join(".");
      return `${name}-${size}.${ext}`;
    },
    onLoad(event) {
      this.loaded = true;
      this.emit("load", event);
    },
    onError(event) {
      this.emit("error", event);
      if (!this.failed) {
        this.failed = true;
      }
    },
    emit(eventName, event) {
      const { target } = event;
      this.$emit(eventName, event, target.currentSrc || target.src || this.computedSrc);
    }
  },
  created() {
    if (this.isWepb) {
      isWebpSupported().then((supported) => {
        this.webpSupportVerified = true;
        this.webpSupported = supported;
      });
    }
    if (this.lazy) {
      const nativeLazySupported = typeof window !== "undefined" && "HTMLImageElement" in window && "loading" in HTMLImageElement.prototype;
      const intersectionObserverSupported = typeof window !== "undefined" && "IntersectionObserver" in window;
      if (!nativeLazySupported && intersectionObserverSupported) {
        this.observer = new IntersectionObserver((events2) => {
          const { target, isIntersecting } = events2[0];
          if (isIntersecting && !this.inViewPort) {
            this.inViewPort = true;
            this.observer.unobserve(target);
          }
        });
      } else {
        this.useNativeLazy = true;
      }
    }
  },
  mounted() {
    if (this.lazy && this.observer) {
      this.observer.observe(this.$el);
    }
    this.setWidth();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.setWidth);
    }
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.setWidth);
    }
  }
};
var _hoisted_14 = { key: 0 };
var _hoisted_24 = ["srcset", "src", "alt", "width", "sizes", "loading"];
var _hoisted_32 = ["src", "alt"];
var _hoisted_42 = { key: 1 };
function render6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "figure",
    {
      class: normalizeClass(["b-image-wrapper", $options.figureClasses]),
      style: normalizeStyle($options.figureStyles)
    },
    [
      $options.isCaptionFirst ? (openBlock(), createElementBlock("figcaption", _hoisted_14, [
        renderSlot(_ctx.$slots, "caption")
      ])) : createCommentVNode("v-if", true),
      createVNode(Transition, { name: "fade" }, {
        default: withCtx(() => [
          $options.isDisplayed ? (openBlock(), createElementBlock("img", {
            key: 0,
            srcset: $options.computedSrcset,
            src: $options.computedSrc,
            alt: $props.alt,
            class: normalizeClass($options.imgClasses),
            width: $options.computedWidth,
            sizes: $options.computedSizes,
            loading: $options.computedNativeLazy,
            onLoad: _cache[0] || (_cache[0] = (...args) => $options.onLoad && $options.onLoad(...args)),
            onError: _cache[1] || (_cache[1] = (...args) => $options.onError && $options.onError(...args))
          }, null, 42, _hoisted_24)) : createCommentVNode("v-if", true)
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(Transition, { name: "fade" }, {
        default: withCtx(() => [
          $options.isPlaceholderDisplayed ? renderSlot(_ctx.$slots, "placeholder", { key: 0 }, () => [
            createBaseVNode("img", {
              src: $options.computedPlaceholder,
              alt: $props.alt,
              class: normalizeClass([$options.imgClasses, "placeholder"])
            }, null, 10, _hoisted_32)
          ]) : createCommentVNode("v-if", true)
        ]),
        _: 3
        /* FORWARDED */
      }),
      $options.isCaptionLast ? (openBlock(), createElementBlock("figcaption", _hoisted_42, [
        renderSlot(_ctx.$slots, "caption")
      ])) : createCommentVNode("v-if", true)
    ],
    6
    /* CLASS, STYLE */
  );
}
script6.render = render6;
script6.__file = "src/components/image/Image.vue";

// node_modules/buefy/dist/esm/carousel.js
var script$2 = {
  name: "BCarousel",
  components: {
    [script.name]: script
  },
  mixins: [ProviderParentMixin("carousel", Sorted$1)],
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    animated: {
      type: String,
      default: "slide"
    },
    interval: Number,
    hasDrag: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    pauseHover: {
      type: Boolean,
      default: true
    },
    pauseInfo: {
      type: Boolean,
      default: true
    },
    pauseInfoType: {
      type: String,
      default: "is-white"
    },
    pauseText: {
      type: String,
      default: "Pause"
    },
    arrow: {
      type: Boolean,
      default: true
    },
    arrowHover: {
      type: Boolean,
      default: true
    },
    repeat: {
      type: Boolean,
      default: true
    },
    iconPack: String,
    iconSize: String,
    iconPrev: {
      type: String,
      default: () => {
        return config.defaultIconPrev;
      }
    },
    iconNext: {
      type: String,
      default: () => {
        return config.defaultIconNext;
      }
    },
    indicator: {
      type: Boolean,
      default: true
    },
    indicatorBackground: Boolean,
    indicatorCustom: Boolean,
    indicatorCustomSize: {
      type: String,
      default: "is-small"
    },
    indicatorInside: {
      type: Boolean,
      default: true
    },
    indicatorMode: {
      type: String,
      default: "click"
    },
    indicatorPosition: {
      type: String,
      default: "is-bottom"
    },
    indicatorStyle: {
      type: String,
      default: "is-dots"
    },
    overlay: Boolean,
    progress: Boolean,
    progressType: {
      type: String,
      default: "is-primary"
    },
    withCarouselList: Boolean
  },
  emits: ["change", "click", "update:modelValue"],
  data() {
    return {
      transition: "next",
      activeChild: this.modelValue || 0,
      isPause: false,
      dragX: false,
      timer: null
    };
  },
  computed: {
    indicatorClasses() {
      return [
        {
          "has-background": this.indicatorBackground,
          "has-custom": this.indicatorCustom,
          "is-inside": this.indicatorInside
        },
        this.indicatorCustom && this.indicatorCustomSize,
        this.indicatorInside && this.indicatorPosition
      ];
    },
    // checking arrows
    hasPrev() {
      return this.repeat || this.activeChild !== 0;
    },
    hasNext() {
      return this.repeat || this.activeChild < this.childItems.length - 1;
    },
    activeChildIndex() {
      const item = this.sortedItems[this.activeChild];
      return item != null ? item.index : void 0;
    }
  },
  watch: {
    /**
     * When v-model is changed set the new active item.
     */
    modelValue(value) {
      this.changeActive(value);
    },
    /**
     * When carousel-items are updated, set active one.
     */
    sortedItems(items2) {
      if (this.activeChild >= items2.length && this.activeChild > 0) {
        this.changeActive(this.activeChild - 1);
      }
    },
    /**
     *  When autoplay is changed, start or pause timer accordingly
     */
    autoplay(status) {
      status ? this.startTimer() : this.pauseTimer();
    },
    /**
     *  Since the timer can get paused at the end, if repeat is changed we need to restart it
     */
    repeat(status) {
      if (status) {
        this.startTimer();
      }
    }
  },
  methods: {
    startTimer() {
      if (!this.autoplay || this.timer) return;
      this.isPause = false;
      this.timer = setInterval(() => {
        if (!this.repeat && this.activeChild >= this.childItems.length - 1) {
          this.pauseTimer();
        } else {
          this.next();
        }
      }, this.interval || config.defaultCarouselInterval);
    },
    pauseTimer() {
      this.isPause = true;
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    restartTimer() {
      this.pauseTimer();
      this.startTimer();
    },
    checkPause() {
      if (this.pauseHover && this.autoplay) {
        this.pauseTimer();
      }
    },
    /**
     * Change the active item and emit change event.
     * action only for animated slide, there true = next, false = prev
     */
    changeActive(newIndex, direction = 0) {
      if (this.activeChild === newIndex || isNaN(newIndex)) return;
      direction = direction || newIndex - this.activeChild;
      newIndex = this.repeat ? mod(newIndex, this.childItems.length) : bound(newIndex, 0, this.childItems.length - 1);
      this.transition = direction > 0 ? "prev" : "next";
      this.activeChild = newIndex;
      if (newIndex !== this.modelValue) {
        this.$emit("update:modelValue", newIndex);
      }
      this.restartTimer();
      this.$emit("change", newIndex);
    },
    // Indicator trigger when change active item.
    modeChange(trigger, value) {
      if (this.indicatorMode === trigger) {
        return this.changeActive(value);
      }
    },
    prev() {
      this.changeActive(this.activeChild - 1, -1);
    },
    next() {
      this.changeActive(this.activeChild + 1, 1);
    },
    // handle drag event
    dragStart(event) {
      if (!this.hasDrag || !event.target.draggable) return;
      this.dragX = event.touches ? event.changedTouches[0].pageX : event.pageX;
      if (event.touches) {
        this.pauseTimer();
      } else {
        event.preventDefault();
      }
    },
    dragEnd(event) {
      if (this.dragX === false) return;
      const detected = event.touches ? event.changedTouches[0].pageX : event.pageX;
      const diffX = detected - this.dragX;
      if (Math.abs(diffX) > 30) {
        if (diffX < 0) {
          this.next();
        } else {
          this.prev();
        }
      } else {
        event.target.click();
        this.sortedItems[this.activeChild].$emit("click");
        this.$emit("click");
      }
      if (event.touches) {
        this.startTimer();
      }
      this.dragX = false;
    }
  },
  mounted() {
    this.startTimer();
  },
  beforeUnmount() {
    this.pauseTimer();
  }
};
var _hoisted_1$2 = ["value", "max"];
var _hoisted_25 = {
  key: 1,
  class: "carousel-pause"
};
var _hoisted_33 = ["onMouseover", "onClick"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["carousel", { "is-overlay": $props.overlay }]),
      onMouseenter: _cache[4] || (_cache[4] = (...args) => $options.checkPause && $options.checkPause(...args)),
      onMouseleave: _cache[5] || (_cache[5] = (...args) => $options.startTimer && $options.startTimer(...args))
    },
    [
      $props.progress ? (openBlock(), createElementBlock("progress", {
        key: 0,
        class: normalizeClass(["progress", $props.progressType]),
        value: $data.activeChild,
        max: _ctx.childItems.length - 1
      }, toDisplayString(_ctx.childItems.length - 1), 11, _hoisted_1$2)) : createCommentVNode("v-if", true),
      createBaseVNode(
        "div",
        {
          class: "carousel-items",
          onMousedown: _cache[0] || (_cache[0] = (...args) => $options.dragStart && $options.dragStart(...args)),
          onMouseup: _cache[1] || (_cache[1] = (...args) => $options.dragEnd && $options.dragEnd(...args)),
          onTouchstart: _cache[2] || (_cache[2] = withModifiers((...args) => $options.dragStart && $options.dragStart(...args), ["stop"])),
          onTouchend: _cache[3] || (_cache[3] = withModifiers((...args) => $options.dragEnd && $options.dragEnd(...args), ["stop"]))
        },
        [
          renderSlot(_ctx.$slots, "default"),
          $props.arrow ? (openBlock(), createElementBlock(
            "div",
            {
              key: 0,
              class: normalizeClass(["carousel-arrow", { "is-hovered": $props.arrowHover }])
            },
            [
              withDirectives(createVNode(_component_b_icon, {
                class: "has-icons-left",
                onClick: $options.prev,
                pack: $props.iconPack,
                icon: $props.iconPrev,
                size: $props.iconSize,
                both: ""
              }, null, 8, ["onClick", "pack", "icon", "size"]), [
                [vShow, $options.hasPrev]
              ]),
              withDirectives(createVNode(_component_b_icon, {
                class: "has-icons-right",
                onClick: $options.next,
                pack: $props.iconPack,
                icon: $props.iconNext,
                size: $props.iconSize,
                both: ""
              }, null, 8, ["onClick", "pack", "icon", "size"]), [
                [vShow, $options.hasNext]
              ])
            ],
            2
            /* CLASS */
          )) : createCommentVNode("v-if", true)
        ],
        32
        /* HYDRATE_EVENTS */
      ),
      $props.autoplay && $props.pauseHover && $props.pauseInfo && $data.isPause ? (openBlock(), createElementBlock("div", _hoisted_25, [
        createBaseVNode(
          "span",
          {
            class: normalizeClass(["tag", $props.pauseInfoType])
          },
          toDisplayString($props.pauseText),
          3
          /* TEXT, CLASS */
        )
      ])) : createCommentVNode("v-if", true),
      $props.withCarouselList && !$props.indicator ? renderSlot(_ctx.$slots, "list", {
        key: 2,
        active: $data.activeChild,
        switch: $options.changeActive
      }) : createCommentVNode("v-if", true),
      $props.indicator ? (openBlock(), createElementBlock(
        "div",
        {
          key: 3,
          class: normalizeClass(["carousel-indicator", $options.indicatorClasses])
        },
        [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.sortedItems, (item, index) => {
              return openBlock(), createElementBlock("a", {
                class: normalizeClass(["indicator-item", { "is-active": item.isActive }]),
                onMouseover: ($event) => $options.modeChange("hover", index),
                onClick: ($event) => $options.modeChange("click", index),
                key: item._uid
              }, [
                renderSlot(_ctx.$slots, "indicators", { i: index }, () => [
                  createBaseVNode(
                    "span",
                    {
                      class: normalizeClass(["indicator-style", $props.indicatorStyle])
                    },
                    null,
                    2
                    /* CLASS */
                  )
                ])
              ], 42, _hoisted_33);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true),
      $props.overlay ? renderSlot(_ctx.$slots, "overlay", { key: 4 }) : createCommentVNode("v-if", true)
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
script$2.render = render$2;
script$2.__file = "src/components/carousel/Carousel.vue";
var script$12 = {
  name: "BCarouselItem",
  mixins: [InjectedChildMixin("carousel", Sorted)],
  data() {
    return {
      transitionName: null
    };
  },
  computed: {
    transition() {
      if (this.parent.animated === "fade") {
        return "fade";
      } else if (this.parent.transition) {
        return "slide-" + this.parent.transition;
      } else {
        return void 0;
      }
    },
    isActive() {
      return this.parent.activeChildIndex === this.index;
    }
  }
};
var _hoisted_1$1 = { class: "carousel-item" };
function render$12(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: $options.transition,
    persisted: ""
  }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode(
        "div",
        _hoisted_1$1,
        [
          renderSlot(_ctx.$slots, "default")
        ],
        512
        /* NEED_PATCH */
      ), [
        [vShow, $options.isActive]
      ])
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
script$12.render = render$12;
script$12.__file = "src/components/carousel/CarouselItem.vue";
var script7 = {
  name: "BCarouselList",
  components: {
    [script.name]: script,
    [script6.name]: script6
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: Number,
      default: 0
    },
    scrollValue: {
      type: Number,
      default: 0
    },
    hasDrag: {
      type: Boolean,
      default: true
    },
    hasGrayscale: Boolean,
    hasOpacity: Boolean,
    repeat: Boolean,
    itemsToShow: {
      type: Number,
      default: 4
    },
    itemsToList: {
      type: Number,
      default: 1
    },
    asIndicator: Boolean,
    arrow: {
      type: Boolean,
      default: true
    },
    arrowHover: {
      type: Boolean,
      default: true
    },
    iconPack: String,
    iconSize: String,
    iconPrev: {
      type: String,
      default: () => {
        return config.defaultIconPrev;
      }
    },
    iconNext: {
      type: String,
      default: () => {
        return config.defaultIconNext;
      }
    },
    breakpoints: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["switch", "update:modelValue", "updated:scroll"],
  data() {
    return {
      activeItem: this.modelValue,
      scrollIndex: this.asIndicator ? this.scrollValue : this.modelValue,
      delta: 0,
      dragX: false,
      hold: 0,
      windowWidth: 0,
      touch: false,
      observer: null,
      refresh_: 0
    };
  },
  computed: {
    dragging() {
      return this.dragX !== false;
    },
    listClass() {
      return [
        {
          "has-grayscale": this.settings.hasGrayscale,
          "has-opacity": this.settings.hasOpacity,
          "is-dragging": this.dragging
        }
      ];
    },
    itemStyle() {
      return `width: ${this.itemWidth}px;`;
    },
    translation() {
      return -bound(
        this.delta + this.scrollIndex * this.itemWidth,
        0,
        (this.data.length - this.settings.itemsToShow) * this.itemWidth
      );
    },
    total() {
      return this.data.length - this.settings.itemsToShow;
    },
    hasPrev() {
      return this.settings.repeat || this.scrollIndex > 0;
    },
    hasNext() {
      return this.settings.repeat || this.scrollIndex < this.total;
    },
    breakpointKeys() {
      return Object.keys(this.breakpoints).sort((a, b) => b - a);
    },
    settings() {
      const breakpoint = this.breakpointKeys.filter((breakpoint2) => {
        if (this.windowWidth >= breakpoint2) {
          return true;
        } else {
          return false;
        }
      })[0];
      if (breakpoint) {
        return { ...this.$props, ...this.breakpoints[breakpoint] };
      }
      return this.$props;
    },
    itemWidth() {
      if (this.windowWidth) {
        this.refresh_;
        const rect = this.$el.getBoundingClientRect();
        return rect.width / this.settings.itemsToShow;
      }
      return 0;
    }
  },
  watch: {
    /**
     * When v-model is changed set the new active item.
     */
    modelValue(value) {
      this.switchTo(this.asIndicator ? value - (this.itemsToShow - 3) / 2 : value);
      if (this.activeItem !== value) {
        this.activeItem = bound(value, 0, this.data.length - 1);
      }
    },
    scrollValue(value) {
      this.switchTo(value);
    }
  },
  methods: {
    resized() {
      this.windowWidth = window.innerWidth;
    },
    switchTo(newIndex) {
      if (newIndex === this.scrollIndex || isNaN(newIndex)) {
        return;
      }
      if (this.settings.repeat) {
        newIndex = mod(newIndex, this.total + 1);
      }
      newIndex = bound(newIndex, 0, this.total);
      this.scrollIndex = newIndex;
      if (!this.asIndicator && this.modelValue !== newIndex) {
        this.$emit("update:modelValue", newIndex);
      } else if (this.scrollIndex !== newIndex) {
        this.$emit("updated:scroll", newIndex);
      }
    },
    next() {
      this.switchTo(this.scrollIndex + this.settings.itemsToList);
    },
    prev() {
      this.switchTo(this.scrollIndex - this.settings.itemsToList);
    },
    checkAsIndicator(value, event) {
      if (!this.asIndicator) return;
      const dragEndX = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
      if (this.hold - Date.now() > 2e3 || Math.abs(this.dragX - dragEndX) > 10) return;
      this.dragX = false;
      this.hold = 0;
      event.preventDefault();
      this.activeItem = value;
      this.$emit("switch", value);
    },
    // handle drag event
    dragStart(event) {
      if (this.dragging || !this.settings.hasDrag || event.button !== 0 && event.type !== "touchstart") return;
      this.hold = Date.now();
      this.touch = !!event.touches;
      this.dragX = this.touch ? event.touches[0].clientX : event.clientX;
      window.addEventListener(this.touch ? "touchmove" : "mousemove", this.dragMove);
      window.addEventListener(this.touch ? "touchend" : "mouseup", this.dragEnd);
    },
    dragMove(event) {
      if (!this.dragging) return;
      const dragEndX = event.touches ? (event.changedTouches[0] || event.touches[0]).clientX : event.clientX;
      this.delta = this.dragX - dragEndX;
      if (!event.touches) {
        event.preventDefault();
      }
    },
    dragEnd() {
      if (!this.dragging && !this.hold) return;
      if (this.hold) {
        const signCheck = sign(this.delta);
        const results = Math.round(Math.abs(this.delta / this.itemWidth) + 0.15);
        this.switchTo(this.scrollIndex + signCheck * results);
      }
      this.delta = 0;
      this.dragX = false;
      window.removeEventListener(this.touch ? "touchmove" : "mousemove", this.dragMove);
      window.removeEventListener(this.touch ? "touchend" : "mouseup", this.dragEnd);
    },
    refresh() {
      this.$nextTick(() => {
        this.refresh_++;
      });
    }
  },
  mounted() {
    if (typeof window !== "undefined") {
      if (window.ResizeObserver) {
        this.observer = new ResizeObserver(this.refresh);
        this.observer.observe(this.$el);
      }
      window.addEventListener("resize", this.resized);
      document.addEventListener("animationend", this.refresh);
      document.addEventListener("transitionend", this.refresh);
      document.addEventListener("transitionstart", this.refresh);
      this.resized();
    }
    if (this.$attrs.config) {
      throw new Error("The config prop was removed, you need to use v-bind instead");
    }
  },
  beforeUnmount() {
    if (typeof window !== "undefined") {
      if (window.ResizeObserver) {
        this.observer.disconnect();
      }
      window.removeEventListener("resize", this.resized);
      document.removeEventListener("animationend", this.refresh);
      document.removeEventListener("transitionend", this.refresh);
      document.removeEventListener("transitionstart", this.refresh);
      this.dragEnd();
    }
  }
};
var _hoisted_15 = ["onMouseup", "onTouchend"];
function render7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_image = resolveComponent("b-image");
  const _component_b_icon = resolveComponent("b-icon");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["carousel-list", { "has-shadow": $data.scrollIndex > 0 }]),
      onMousedown: _cache[0] || (_cache[0] = withModifiers((...args) => $options.dragStart && $options.dragStart(...args), ["prevent"])),
      onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.dragStart && $options.dragStart(...args))
    },
    [
      createBaseVNode(
        "div",
        {
          class: normalizeClass(["carousel-slides", $options.listClass]),
          style: normalizeStyle("transform:translateX(" + $options.translation + "px)")
        },
        [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($props.data, (list, index) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(["carousel-slide", { "is-active": $props.asIndicator ? $data.activeItem === index : $data.scrollIndex === index }]),
                onMouseup: ($event) => $options.checkAsIndicator(index, $event),
                onTouchend: ($event) => $options.checkAsIndicator(index, $event),
                key: index,
                style: normalizeStyle($options.itemStyle)
              }, [
                renderSlot(_ctx.$slots, "item", mergeProps({
                  index,
                  active: $data.activeItem,
                  scroll: $data.scrollIndex
                }, list, { list }), () => [
                  createVNode(_component_b_image, mergeProps({
                    src: list.image
                  }, list), null, 16, ["src"])
                ])
              ], 46, _hoisted_15);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        6
        /* CLASS, STYLE */
      ),
      $props.arrow ? (openBlock(), createElementBlock(
        "div",
        {
          key: 0,
          class: normalizeClass(["carousel-arrow", { "is-hovered": $options.settings.arrowHover }])
        },
        [
          withDirectives(createVNode(_component_b_icon, {
            class: "has-icons-left",
            onClick: withModifiers($options.prev, ["prevent"]),
            pack: $options.settings.iconPack,
            icon: $options.settings.iconPrev,
            size: $options.settings.iconSize,
            both: ""
          }, null, 8, ["onClick", "pack", "icon", "size"]), [
            [vShow, $options.hasPrev]
          ]),
          withDirectives(createVNode(_component_b_icon, {
            class: "has-icons-right",
            onClick: withModifiers($options.next, ["prevent"]),
            pack: $options.settings.iconPack,
            icon: $options.settings.iconNext,
            size: $options.settings.iconSize,
            both: ""
          }, null, 8, ["onClick", "pack", "icon", "size"]), [
            [vShow, $options.hasNext]
          ])
        ],
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true)
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
script7.render = render7;
script7.__file = "src/components/carousel/CarouselList.vue";
var Plugin4 = {
  install: function install4(Vue) {
    registerComponent(Vue, script$2);
    registerComponent(Vue, script$12);
    registerComponent(Vue, script7);
  }
};
use(Plugin4);

// node_modules/buefy/dist/esm/CheckRadioMixin-I9QgrPGQ.js
var CheckRadioMixin = {
  props: {
    modelValue: [String, Number, Boolean, Function, Object, Array],
    nativeValue: [String, Number, Boolean, Function, Object, Array],
    type: String,
    disabled: Boolean,
    required: Boolean,
    name: String,
    size: String
  },
  emits: ["update:modelValue"],
  data: function data2() {
    return {
      newValue: this.modelValue
    };
  },
  computed: {
    computedValue: {
      get: function get() {
        return this.newValue;
      },
      set: function set(value) {
        this.newValue = value;
        this.$emit("update:modelValue", value);
      }
    },
    disabledOrUndefined: function disabledOrUndefined() {
      return this.disabled || void 0;
    },
    requiredOrUndefined: function requiredOrUndefined() {
      return this.required || void 0;
    }
  },
  watch: {
    /**
    * When v-model change, set internal value.
    */
    modelValue: function modelValue(value) {
      this.newValue = value;
    }
  },
  methods: {
    focus: function focus2() {
      this.$refs.input.focus();
    }
  }
};

// node_modules/buefy/dist/esm/Checkbox-o2PhGepR.js
var script8 = {
  name: "BCheckbox",
  mixins: [CheckRadioMixin],
  props: {
    indeterminate: Boolean,
    ariaLabelledby: String,
    trueValue: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: false
    },
    autocomplete: {
      type: String,
      default: "on"
    },
    inputId: {
      type: String,
      default: ""
    }
  }
};
var _hoisted_16 = ["disabled"];
var _hoisted_26 = ["id", ".indeterminate", "autocomplete", "disabled", "required", "name", "value", "true-value", "false-value", "aria-labelledby"];
var _hoisted_34 = ["id"];
function render8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", {
    class: normalizeClass(["b-checkbox checkbox", [_ctx.size, { "is-disabled": _ctx.disabled }]]),
    ref: "label",
    disabled: _ctx.disabledOrUndefined,
    onClick: _cache[2] || (_cache[2] = (...args) => _ctx.focus && _ctx.focus(...args)),
    onKeydown: [
      _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => _ctx.$refs.label.click(), ["prevent"]), ["enter"])),
      _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => _ctx.$refs.label.click(), ["prevent"]), ["space"]))
    ]
  }, [
    createCommentVNode(" Checkbox needs to listen for a space event instead of a just a\n             click and enter event so that that using the keyboard spacebar will also\n             trigger the checkbox change in the b-table "),
    withDirectives(createBaseVNode("input", {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.computedValue = $event),
      id: $props.inputId,
      ".indeterminate": $props.indeterminate,
      type: "checkbox",
      ref: "input",
      onClick: _cache[1] || (_cache[1] = withModifiers(() => {
      }, ["stop"])),
      autocomplete: $props.autocomplete,
      disabled: _ctx.disabledOrUndefined,
      required: _ctx.requiredOrUndefined,
      name: _ctx.name,
      value: _ctx.nativeValue,
      "true-value": $props.trueValue,
      "false-value": $props.falseValue,
      "aria-labelledby": $props.ariaLabelledby
    }, null, 8, _hoisted_26), [
      [vModelCheckbox, _ctx.computedValue]
    ]),
    createBaseVNode(
      "span",
      {
        class: normalizeClass(["check", _ctx.type])
      },
      null,
      2
      /* CLASS */
    ),
    createBaseVNode("span", {
      id: $props.ariaLabelledby,
      class: "control-label"
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 8, _hoisted_34)
  ], 42, _hoisted_16);
}
script8.render = render8;
script8.__file = "src/components/checkbox/Checkbox.vue";

// node_modules/buefy/dist/esm/checkbox.js
var script9 = {
  name: "BCheckboxButton",
  mixins: [CheckRadioMixin],
  props: {
    type: {
      type: String,
      default: "is-primary"
    },
    expanded: Boolean
  },
  data() {
    return {
      isFocused: false
    };
  },
  computed: {
    checked() {
      if (Array.isArray(this.newValue)) {
        return this.newValue.indexOf(this.nativeValue) >= 0;
      }
      return this.newValue === this.nativeValue;
    }
  }
};
var _hoisted_17 = ["disabled"];
var _hoisted_27 = ["disabled", "required", "name", "value"];
function render9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["control", { "is-expanded": $props.expanded }])
    },
    [
      createBaseVNode("label", {
        class: normalizeClass(["b-checkbox checkbox button", [$options.checked ? $props.type : null, _ctx.size, {
          "is-disabled": _ctx.disabled,
          "is-focused": $data.isFocused
        }]]),
        ref: "label",
        disabled: _ctx.disabledOrUndefined,
        onClick: _cache[4] || (_cache[4] = (...args) => _ctx.focus && _ctx.focus(...args)),
        onKeydown: _cache[5] || (_cache[5] = withKeys(withModifiers(($event) => _ctx.$refs.label.click(), ["prevent"]), ["enter"]))
      }, [
        renderSlot(_ctx.$slots, "default"),
        withDirectives(createBaseVNode("input", {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.computedValue = $event),
          type: "checkbox",
          ref: "input",
          onClick: _cache[1] || (_cache[1] = withModifiers(() => {
          }, ["stop"])),
          disabled: _ctx.disabledOrUndefined,
          required: _ctx.requiredOrUndefined,
          name: _ctx.name,
          value: _ctx.nativeValue,
          onFocus: _cache[2] || (_cache[2] = ($event) => $data.isFocused = true),
          onBlur: _cache[3] || (_cache[3] = ($event) => $data.isFocused = false)
        }, null, 40, _hoisted_27), [
          [vModelCheckbox, _ctx.computedValue]
        ])
      ], 42, _hoisted_17)
    ],
    2
    /* CLASS */
  );
}
script9.render = render9;
script9.__file = "src/components/checkbox/CheckboxButton.vue";
var Plugin5 = {
  install: function install5(Vue) {
    registerComponent(Vue, script8);
    registerComponent(Vue, script9);
  }
};
use(Plugin5);

// node_modules/buefy/dist/esm/collapse.js
var script10 = {
  name: "BCollapse",
  props: {
    modelValue: {
      type: Boolean,
      default: true
    },
    animation: {
      type: String,
      default: "fade"
    },
    ariaId: {
      type: String,
      default: ""
    },
    position: {
      type: String,
      default: "is-top",
      validator(value) {
        return [
          "is-top",
          "is-bottom"
        ].indexOf(value) > -1;
      }
    }
  },
  emits: ["close", "open", "update:modelValue"],
  data() {
    return {
      isOpen: this.modelValue
    };
  },
  watch: {
    modelValue(value) {
      this.isOpen = value;
    }
  },
  methods: {
    /**
    * Toggle and emit events
    */
    toggle() {
      this.isOpen = !this.isOpen;
      this.$emit("update:modelValue", this.isOpen);
      this.$emit(this.isOpen ? "open" : "close");
    }
  },
  render() {
    const trigger = h(
      "div",
      {
        class: "collapse-trigger",
        onClick: this.toggle
      },
      this.$slots.trigger ? this.$slots.trigger({ open: this.isOpen }) : void 0
    );
    const content = withDirectives(
      h(
        Transition,
        { name: this.animation },
        () => [
          h(
            "div",
            {
              class: "collapse-content",
              id: this.ariaId
            },
            this.$slots
          )
        ]
      ),
      [[vShow, this.isOpen]]
    );
    return h(
      "div",
      { class: "collapse" },
      this.position === "is-top" ? [trigger, content] : [content, trigger]
    );
  }
};
script10.__file = "src/components/collapse/Collapse.vue";
var Plugin6 = {
  install: function install6(Vue) {
    registerComponent(Vue, script10);
  }
};
use(Plugin6);

// node_modules/buefy/dist/esm/TimepickerMixin-M_pQh7UT.js
var AM = "AM";
var PM = "PM";
var HOUR_FORMAT_24 = "24";
var HOUR_FORMAT_12 = "12";
var defaultTimeFormatter = function defaultTimeFormatter2(date, vm) {
  return vm.dtf.format(date);
};
var defaultTimeParser = function defaultTimeParser2(timeString, vm) {
  if (timeString) {
    var d = null;
    if (vm.computedValue && !isNaN(vm.computedValue)) {
      d = new Date(vm.computedValue);
    } else {
      d = vm.timeCreator();
      d.setMilliseconds(0);
    }
    if (vm.dtf.formatToParts && typeof vm.dtf.formatToParts === "function") {
      var formatRegex = vm.dtf.formatToParts(d).map(function(part) {
        if (part.type === "literal") {
          return part.value.replace(/ /g, "\\s?");
        } else if (part.type === "dayPeriod") {
          return "((?!=<".concat(part.type, ">)(").concat(vm.amString, "|").concat(vm.pmString, "|").concat(AM, "|").concat(PM, "|").concat(AM.toLowerCase(), "|").concat(PM.toLowerCase(), ")?)");
        }
        return "((?!=<".concat(part.type, ">)\\d+)");
      }).join("");
      var timeGroups = matchWithGroups(formatRegex, timeString);
      timeGroups.hour = timeGroups.hour ? parseInt(timeGroups.hour, 10) : null;
      timeGroups.minute = timeGroups.minute ? parseInt(timeGroups.minute, 10) : null;
      timeGroups.second = timeGroups.second ? parseInt(timeGroups.second, 10) : null;
      if (timeGroups.hour && timeGroups.hour >= 0 && timeGroups.hour < 24 && timeGroups.minute && timeGroups.minute >= 0 && timeGroups.minute < 59) {
        if (timeGroups.dayPeriod && (timeGroups.dayPeriod.toLowerCase() === vm.pmString.toLowerCase() || timeGroups.dayPeriod.toLowerCase() === PM.toLowerCase()) && timeGroups.hour < 12) {
          timeGroups.hour += 12;
        }
        d.setHours(timeGroups.hour);
        d.setMinutes(timeGroups.minute);
        d.setSeconds(timeGroups.second || 0);
        return d;
      }
    }
    var am = false;
    if (vm.hourFormat === HOUR_FORMAT_12) {
      var dateString12 = timeString.split(" ");
      timeString = dateString12[0];
      am = dateString12[1] === vm.amString || dateString12[1] === AM;
    }
    var time = timeString.split(":");
    var hours2 = parseInt(time[0], 10);
    var minutes2 = parseInt(time[1], 10);
    var seconds2 = vm.enableSeconds ? parseInt(time[2], 10) : 0;
    if (isNaN(hours2) || hours2 < 0 || hours2 > 23 || vm.hourFormat === HOUR_FORMAT_12 && (hours2 < 1 || hours2 > 12) || isNaN(minutes2) || minutes2 < 0 || minutes2 > 59) {
      return null;
    }
    d.setSeconds(seconds2);
    d.setMinutes(minutes2);
    if (vm.hourFormat === HOUR_FORMAT_12) {
      if (am && hours2 === 12) {
        hours2 = 0;
      } else if (!am && hours2 !== 12) {
        hours2 += 12;
      }
    }
    d.setHours(hours2);
    return new Date(d.getTime());
  }
  return null;
};
var TimepickerMixin = {
  mixins: [CompatFallthroughMixin, FormElementMixin],
  props: {
    modelValue: Date,
    inline: Boolean,
    minTime: Date,
    maxTime: Date,
    placeholder: String,
    editable: Boolean,
    disabled: Boolean,
    hourFormat: {
      type: String,
      validator: function validator(value) {
        return value === HOUR_FORMAT_24 || value === HOUR_FORMAT_12;
      }
    },
    incrementHours: {
      type: Number,
      "default": 1
    },
    incrementMinutes: {
      type: Number,
      "default": 1
    },
    incrementSeconds: {
      type: Number,
      "default": 1
    },
    timeFormatter: {
      type: Function,
      "default": function _default5(date, vm) {
        if (typeof config.defaultTimeFormatter === "function") {
          return config.defaultTimeFormatter(date);
        } else {
          return defaultTimeFormatter(date, vm);
        }
      }
    },
    timeParser: {
      type: Function,
      "default": function _default6(date, vm) {
        if (typeof config.defaultTimeParser === "function") {
          return config.defaultTimeParser(date);
        } else {
          return defaultTimeParser(date, vm);
        }
      }
    },
    mobileNative: {
      type: Boolean,
      "default": function _default7() {
        return config.defaultTimepickerMobileNative;
      }
    },
    mobileModal: {
      type: Boolean,
      "default": function _default8() {
        return config.defaultTimepickerMobileModal;
      }
    },
    timeCreator: {
      type: Function,
      "default": function _default9() {
        if (typeof config.defaultTimeCreator === "function") {
          return config.defaultTimeCreator();
        } else {
          return /* @__PURE__ */ new Date();
        }
      }
    },
    position: String,
    unselectableTimes: Array,
    openOnFocus: Boolean,
    enableSeconds: Boolean,
    defaultMinutes: Number,
    defaultSeconds: Number,
    focusable: {
      type: Boolean,
      "default": true
    },
    tzOffset: {
      type: Number,
      "default": 0
    },
    appendToBody: Boolean,
    resetOnMeridianChange: {
      type: Boolean,
      "default": false
    }
  },
  emits: ["update:modelValue"],
  data: function data3() {
    return {
      dateSelected: this.modelValue,
      hoursSelected: null,
      minutesSelected: null,
      secondsSelected: null,
      meridienSelected: null,
      _elementRef: "input",
      AM,
      PM,
      HOUR_FORMAT_24,
      HOUR_FORMAT_12
    };
  },
  computed: {
    computedValue: {
      get: function get2() {
        return this.dateSelected;
      },
      set: function set2(value) {
        this.dateSelected = value;
        this.$emit("update:modelValue", this.dateSelected);
      }
    },
    localeOptions: function localeOptions() {
      return new Intl.DateTimeFormat(this.locale, {
        hour: "numeric",
        minute: "numeric",
        second: this.enableSeconds ? "numeric" : void 0
      }).resolvedOptions();
    },
    dtf: function dtf() {
      return new Intl.DateTimeFormat(this.locale, {
        hour: this.localeOptions.hour || "numeric",
        minute: this.localeOptions.minute || "numeric",
        second: this.enableSeconds ? this.localeOptions.second || "numeric" : void 0,
        // Fixes 12 hour display github.com/buefy/buefy/issues/3418
        hourCycle: !this.isHourFormat24 ? "h12" : "h23"
      });
    },
    newHourFormat: function newHourFormat() {
      return this.hourFormat || (this.localeOptions.hour12 ? HOUR_FORMAT_12 : HOUR_FORMAT_24);
    },
    sampleTime: function sampleTime() {
      var d = this.timeCreator();
      d.setHours(10);
      d.setSeconds(0);
      d.setMinutes(0);
      d.setMilliseconds(0);
      return d;
    },
    hourLiteral: function hourLiteral() {
      if (this.dtf.formatToParts && typeof this.dtf.formatToParts === "function") {
        var d = this.sampleTime;
        var parts = this.dtf.formatToParts(d);
        var literal = parts.find(function(part, idx) {
          return idx > 0 && parts[idx - 1].type === "hour";
        });
        if (literal) {
          return literal.value;
        }
      }
      return ":";
    },
    minuteLiteral: function minuteLiteral() {
      if (this.dtf.formatToParts && typeof this.dtf.formatToParts === "function") {
        var d = this.sampleTime;
        var parts = this.dtf.formatToParts(d);
        var literal = parts.find(function(part, idx) {
          return idx > 0 && parts[idx - 1].type === "minute";
        });
        if (literal) {
          return literal.value;
        }
      }
      return ":";
    },
    secondLiteral: function secondLiteral() {
      if (this.dtf.formatToParts && typeof this.dtf.formatToParts === "function") {
        var d = this.sampleTime;
        var parts = this.dtf.formatToParts(d);
        var literal = parts.find(function(part, idx) {
          return idx > 0 && parts[idx - 1].type === "second";
        });
        if (literal) {
          return literal.value;
        }
      }
    },
    amString: function amString() {
      if (this.dtf.formatToParts && typeof this.dtf.formatToParts === "function") {
        var d = this.sampleTime;
        d.setHours(10);
        var dayPeriod = this.dtf.formatToParts(d).find(function(part) {
          return part.type === "dayPeriod";
        });
        if (dayPeriod) {
          return dayPeriod.value;
        }
      }
      return AM;
    },
    pmString: function pmString() {
      if (this.dtf.formatToParts && typeof this.dtf.formatToParts === "function") {
        var d = this.sampleTime;
        d.setHours(20);
        var dayPeriod = this.dtf.formatToParts(d).find(function(part) {
          return part.type === "dayPeriod";
        });
        if (dayPeriod) {
          return dayPeriod.value;
        }
      }
      return PM;
    },
    hours: function hours() {
      if (!this.incrementHours || this.incrementHours < 1) throw new Error("Hour increment cannot be null or less than 1.");
      var hours2 = [];
      var numberOfHours = this.isHourFormat24 ? 24 : 12;
      for (var i = 0; i < numberOfHours; i += this.incrementHours) {
        var value = i;
        var label = value;
        if (!this.isHourFormat24) {
          value = i + 1;
          label = value;
          if (this.meridienSelected === this.amString) {
            if (value === 12) {
              value = 0;
            }
          } else if (this.meridienSelected === this.pmString) {
            if (value !== 12) {
              value += 12;
            }
          }
        }
        hours2.push({
          label: this.formatNumber(label),
          value
        });
      }
      return hours2;
    },
    minutes: function minutes() {
      if (!this.incrementMinutes || this.incrementMinutes < 1) throw new Error("Minute increment cannot be null or less than 1.");
      var minutes2 = [];
      for (var i = 0; i < 60; i += this.incrementMinutes) {
        minutes2.push({
          label: this.formatNumber(i, true),
          value: i
        });
      }
      return minutes2;
    },
    seconds: function seconds() {
      if (!this.incrementSeconds || this.incrementSeconds < 1) throw new Error("Second increment cannot be null or less than 1.");
      var seconds2 = [];
      for (var i = 0; i < 60; i += this.incrementSeconds) {
        seconds2.push({
          label: this.formatNumber(i, true),
          value: i
        });
      }
      return seconds2;
    },
    meridiens: function meridiens() {
      return [this.amString, this.pmString];
    },
    isMobile: function isMobile$1() {
      return this.mobileNative && isMobile.any();
    },
    isHourFormat24: function isHourFormat24() {
      return this.newHourFormat === HOUR_FORMAT_24;
    },
    disabledOrUndefined: function disabledOrUndefined2() {
      return this.disabled || void 0;
    }
  },
  watch: {
    hourFormat: function hourFormat() {
      if (this.hoursSelected !== null) {
        this.meridienSelected = this.hoursSelected >= 12 ? this.pmString : this.amString;
      }
    },
    locale: function locale() {
      if (!this.value) {
        this.meridienSelected = this.amString;
      }
    },
    /**
     * When v-model is changed:
     *   1. Update internal value.
     *   2. If it's invalid, validate again.
     */
    modelValue: {
      handler: function handler(value) {
        this.updateInternalState(value);
        !this.isValid && this.$refs.input.checkHtml5Validity();
      },
      immediate: true
    }
  },
  methods: {
    onMeridienChange: function onMeridienChange(value) {
      if (this.hoursSelected !== null && this.resetOnMeridianChange) {
        this.hoursSelected = null;
        this.minutesSelected = null;
        this.secondsSelected = null;
        this.computedValue = null;
      } else if (this.hoursSelected !== null) {
        if (value === this.pmString) {
          this.hoursSelected += 12;
        } else if (value === this.amString) {
          this.hoursSelected -= 12;
        }
      }
      this.updateDateSelected(this.hoursSelected, this.minutesSelected, this.enableSeconds ? this.secondsSelected : 0, value);
    },
    onHoursChange: function onHoursChange(value) {
      if (!this.minutesSelected && typeof this.defaultMinutes !== "undefined") {
        this.minutesSelected = this.defaultMinutes;
      }
      if (!this.secondsSelected && typeof this.defaultSeconds !== "undefined") {
        this.secondsSelected = this.defaultSeconds;
      }
      this.updateDateSelected(parseInt(value, 10), this.minutesSelected, this.enableSeconds ? this.secondsSelected : 0, this.meridienSelected);
    },
    onMinutesChange: function onMinutesChange(value) {
      if (!this.secondsSelected && this.defaultSeconds) {
        this.secondsSelected = this.defaultSeconds;
      }
      this.updateDateSelected(this.hoursSelected, parseInt(value, 10), this.enableSeconds ? this.secondsSelected : 0, this.meridienSelected);
    },
    onSecondsChange: function onSecondsChange(value) {
      this.updateDateSelected(this.hoursSelected, this.minutesSelected, parseInt(value, 10), this.meridienSelected);
    },
    updateDateSelected: function updateDateSelected(hours2, minutes2, seconds2, meridiens2) {
      if (hours2 != null && minutes2 != null && (!this.isHourFormat24 && meridiens2 !== null || this.isHourFormat24)) {
        var time = null;
        if (this.computedValue && !isNaN(this.computedValue)) {
          time = new Date(this.computedValue);
        } else {
          time = this.timeCreator();
          time.setMilliseconds(0);
        }
        time.setHours(hours2);
        time.setMinutes(minutes2);
        time.setSeconds(seconds2);
        if (!isNaN(time.getTime())) this.computedValue = new Date(time.getTime());
      }
    },
    updateInternalState: function updateInternalState(value) {
      if (value) {
        this.hoursSelected = value.getHours();
        this.minutesSelected = value.getMinutes();
        this.secondsSelected = value.getSeconds();
        this.meridienSelected = value.getHours() >= 12 ? this.pmString : this.amString;
      } else {
        this.hoursSelected = null;
        this.minutesSelected = null;
        this.secondsSelected = null;
        this.meridienSelected = this.amString;
      }
      this.dateSelected = value;
    },
    isHourDisabled: function isHourDisabled(hour) {
      var _this = this;
      var disabled = false;
      if (this.minTime) {
        var minHours = this.minTime.getHours();
        var noMinutesAvailable = this.minutes.every(function(minute) {
          return _this.isMinuteDisabledForHour(hour, minute.value);
        });
        disabled = hour < minHours || noMinutesAvailable;
      }
      if (this.maxTime) {
        if (!disabled) {
          var maxHours = this.maxTime.getHours();
          disabled = hour > maxHours;
        }
      }
      if (this.unselectableTimes) {
        if (!disabled) {
          var unselectable = this.unselectableTimes.filter(function(time) {
            if (_this.enableSeconds && _this.secondsSelected !== null) {
              return time.getHours() === hour && time.getMinutes() === _this.minutesSelected && time.getSeconds() === _this.secondsSelected;
            } else if (_this.minutesSelected !== null) {
              return time.getHours() === hour && time.getMinutes() === _this.minutesSelected;
            }
            return false;
          });
          if (unselectable.length > 0) {
            disabled = true;
          } else {
            disabled = this.minutes.every(function(minute) {
              return _this.unselectableTimes.filter(function(time) {
                return time.getHours() === hour && time.getMinutes() === minute.value;
              }).length > 0;
            });
          }
        }
      }
      return disabled;
    },
    isMinuteDisabledForHour: function isMinuteDisabledForHour(hour, minute) {
      var disabled = false;
      if (this.minTime) {
        var minHours = this.minTime.getHours();
        var minMinutes = this.minTime.getMinutes();
        disabled = hour === minHours && minute < minMinutes;
      }
      if (this.maxTime) {
        if (!disabled) {
          var maxHours = this.maxTime.getHours();
          var maxMinutes = this.maxTime.getMinutes();
          disabled = hour === maxHours && minute > maxMinutes;
        }
      }
      return disabled;
    },
    isMinuteDisabled: function isMinuteDisabled(minute) {
      var _this2 = this;
      var disabled = false;
      if (this.hoursSelected !== null) {
        if (this.isHourDisabled(this.hoursSelected)) {
          disabled = true;
        } else {
          disabled = this.isMinuteDisabledForHour(this.hoursSelected, minute);
        }
        if (this.unselectableTimes) {
          if (!disabled) {
            var unselectable = this.unselectableTimes.filter(function(time) {
              if (_this2.enableSeconds && _this2.secondsSelected !== null) {
                return time.getHours() === _this2.hoursSelected && time.getMinutes() === minute && time.getSeconds() === _this2.secondsSelected;
              } else {
                return time.getHours() === _this2.hoursSelected && time.getMinutes() === minute;
              }
            });
            disabled = unselectable.length > 0;
          }
        }
      }
      return disabled;
    },
    isSecondDisabled: function isSecondDisabled(second) {
      var _this3 = this;
      var disabled = false;
      if (this.minutesSelected !== null) {
        if (this.isMinuteDisabled(this.minutesSelected)) {
          disabled = true;
        } else {
          if (this.minTime) {
            var minHours = this.minTime.getHours();
            var minMinutes = this.minTime.getMinutes();
            var minSeconds = this.minTime.getSeconds();
            disabled = this.hoursSelected === minHours && this.minutesSelected === minMinutes && second < minSeconds;
          }
          if (this.maxTime) {
            if (!disabled) {
              var maxHours = this.maxTime.getHours();
              var maxMinutes = this.maxTime.getMinutes();
              var maxSeconds = this.maxTime.getSeconds();
              disabled = this.hoursSelected === maxHours && this.minutesSelected === maxMinutes && second > maxSeconds;
            }
          }
        }
        if (this.unselectableTimes) {
          if (!disabled) {
            var unselectable = this.unselectableTimes.filter(function(time) {
              return time.getHours() === _this3.hoursSelected && time.getMinutes() === _this3.minutesSelected && time.getSeconds() === second;
            });
            disabled = unselectable.length > 0;
          }
        }
      }
      return disabled;
    },
    /*
     * Parse string into date
     */
    onChange: function onChange(value) {
      var date = this.timeParser(value, this);
      this.updateInternalState(date);
      if (date && !isNaN(date)) {
        this.computedValue = date;
      } else {
        this.computedValue = null;
        this.$refs.input.newValue = this.computedValue;
      }
    },
    /*
     * Toggle timepicker
     */
    toggle: function toggle(active) {
      if (this.$refs.dropdown) {
        this.$refs.dropdown.isActive = typeof active === "boolean" ? active : !this.$refs.dropdown.isActive;
      }
    },
    /*
     * Close timepicker
     */
    close: function close() {
      this.toggle(false);
    },
    /*
     * Call default onFocus method and show timepicker
     */
    handleOnFocus: function handleOnFocus() {
      this.onFocus();
      if (this.openOnFocus) {
        this.toggle(true);
      }
    },
    /*
     * Format date into string 'HH-MM-SS'
     */
    formatHHMMSS: function formatHHMMSS(value) {
      var date = new Date(value);
      if (value && !isNaN(date)) {
        var hours2 = date.getHours();
        var minutes2 = date.getMinutes();
        var seconds2 = date.getSeconds();
        return this.formatNumber(hours2, true) + ":" + this.formatNumber(minutes2, true) + ":" + this.formatNumber(seconds2, true);
      }
      return "";
    },
    /*
     * Parse time from string
     */
    onChangeNativePicker: function onChangeNativePicker(event) {
      var date = event.target.value;
      if (date) {
        var time = null;
        if (this.computedValue && !isNaN(this.computedValue)) {
          time = new Date(this.computedValue);
        } else {
          time = /* @__PURE__ */ new Date();
          time.setMilliseconds(0);
        }
        var t = date.split(":");
        time.setHours(parseInt(t[0], 10));
        time.setMinutes(parseInt(t[1], 10));
        time.setSeconds(t[2] ? parseInt(t[2], 10) : 0);
        this.computedValue = new Date(time.getTime());
      } else {
        this.computedValue = null;
      }
    },
    formatNumber: function formatNumber(value, prependZero) {
      return this.isHourFormat24 || prependZero ? this.pad(value) : value;
    },
    pad: function pad(value) {
      return (value < 10 ? "0" : "") + value;
    },
    /*
     * Format date into string
     */
    formatValue: function formatValue(date) {
      if (date && !isNaN(date)) {
        return this.timeFormatter(date, this);
      } else {
        return null;
      }
    },
    /**
     * Keypress event that is bound to the document.
     */
    keyPress: function keyPress(_ref) {
      var key = _ref.key;
      if (this.$refs.dropdown && this.$refs.dropdown.isActive && (key === "Escape" || key === "Esc")) {
        this.toggle(false);
      }
    },
    /**
     * Emit 'blur' event on dropdown is not active (closed)
     */
    onActiveChange: function onActiveChange(value) {
      if (!value) {
        this.onBlur();
      }
    }
  },
  created: function created() {
    if (typeof window !== "undefined") {
      document.addEventListener("keyup", this.keyPress);
    }
  },
  beforeUnmounted: function beforeUnmounted() {
    if (typeof window !== "undefined") {
      document.removeEventListener("keyup", this.keyPress);
    }
  }
};

// node_modules/buefy/dist/esm/trapFocus-IMs77O3T.js
var findFocusable = function findFocusable2(element) {
  var programmatic = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  if (!element) {
    return null;
  }
  if (programmatic) {
    return element.querySelectorAll('*[tabindex="-1"]');
  }
  return element.querySelectorAll('a[href]:not([tabindex="-1"]),\n                                     area[href],\n                                     input:not([disabled]),\n                                     select:not([disabled]),\n                                     textarea:not([disabled]),\n                                     button:not([disabled]),\n                                     iframe,\n                                     object,\n                                     embed,\n                                     *[tabindex]:not([tabindex="-1"]),\n                                     *[contenteditable]');
};
var onKeyDown;
var beforeMount = function beforeMount2(el, _ref) {
  var _ref$value = _ref.value, value = _ref$value === void 0 ? true : _ref$value;
  if (value) {
    var focusable = findFocusable(el);
    var focusableProg = findFocusable(el, true);
    if (focusable && focusable.length > 0) {
      onKeyDown = function onKeyDown2(event) {
        focusable = findFocusable(el);
        focusableProg = findFocusable(el, true);
        var firstFocusable = focusable[0];
        var lastFocusable = focusable[focusable.length - 1];
        if (event.target === firstFocusable && event.shiftKey && event.key === "Tab") {
          event.preventDefault();
          lastFocusable.focus();
        } else if ((event.target === lastFocusable || Array.from(focusableProg).indexOf(event.target) >= 0) && !event.shiftKey && event.key === "Tab") {
          event.preventDefault();
          firstFocusable.focus();
        }
      };
      el.addEventListener("keydown", onKeyDown);
    }
  }
};
var unmounted = function unmounted2(el) {
  el.removeEventListener("keydown", onKeyDown);
};
var directive = {
  beforeMount,
  unmounted
};
var trapFocus = directive;

// node_modules/buefy/dist/esm/DropdownItem-yQcaSZL4.js
var DEFAULT_CLOSE_OPTIONS = ["escape", "outside"];
var DROPDOWN_INJECTION_KEY = Symbol("bdropdown");
var script$13 = {
  name: "BDropdown",
  directives: {
    trapFocus
  },
  provide() {
    return {
      [DROPDOWN_INJECTION_KEY]: this
    };
  },
  props: {
    modelValue: {
      type: [String, Number, Boolean, Object, Array, Function],
      default: null
    },
    disabled: Boolean,
    inline: Boolean,
    scrollable: Boolean,
    maxHeight: {
      type: [String, Number],
      default: 200
    },
    position: {
      type: String,
      validator(value) {
        return [
          "is-top-right",
          "is-top-left",
          "is-bottom-left",
          "is-bottom-right"
        ].indexOf(value) > -1;
      }
    },
    triggers: {
      type: Array,
      default: () => ["click"]
    },
    mobileModal: {
      type: Boolean,
      default: () => {
        return config.defaultDropdownMobileModal;
      }
    },
    ariaRole: {
      type: String,
      validator(value) {
        return [
          "menu",
          "list",
          "dialog"
        ].indexOf(value) > -1;
      },
      default: null
    },
    animation: {
      type: String,
      default: "fade"
    },
    multiple: Boolean,
    trapFocus: {
      type: Boolean,
      default: () => {
        return config.defaultTrapFocus;
      }
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    canClose: {
      type: [Array, Boolean],
      default: true
    },
    expanded: Boolean,
    appendToBody: Boolean,
    appendToBodyCopyParent: Boolean,
    triggerTabindex: {
      type: Number,
      default: 0
    }
  },
  emits: ["active-change", "change", "update:modelValue"],
  data() {
    return {
      selected: this.modelValue,
      style: {},
      isActive: false,
      isHoverable: false,
      maybeTap: false,
      isTouchEnabled: false,
      _bodyEl: void 0,
      // Used to append to body
      timeOutID: null,
      timeOutID2: null
    };
  },
  computed: {
    rootClasses() {
      return [this.position, {
        "is-disabled": this.disabled,
        "is-hoverable": this.hoverable,
        "is-inline": this.inline,
        "is-active": this.isActive || this.inline,
        "is-mobile-modal": this.isMobileModal,
        "is-expanded": this.expanded,
        "is-touch-enabled": this.isTouchEnabled
      }];
    },
    isMobileModal() {
      return this.mobileModal && !this.inline;
    },
    cancelOptions() {
      return typeof this.canClose === "boolean" ? this.canClose ? DEFAULT_CLOSE_OPTIONS : [] : this.canClose;
    },
    contentStyle() {
      return {
        maxHeight: this.scrollable ? toCssWidth(this.maxHeight) : null,
        overflow: this.scrollable ? "auto" : null
      };
    },
    hoverable() {
      return this.triggers.indexOf("hover") >= 0;
    }
  },
  watch: {
    /**
    * When v-model is changed set the new selected item.
    */
    modelValue(value) {
      this.selected = value;
    },
    /**
    * Emit event when isActive value is changed.
    *
    * Also resets `isTouchEnabled` when it turns inactive.
    */
    isActive(value) {
      this.$emit("active-change", value);
      if (!value) {
        this.timeOutID = setTimeout(() => {
          if (!this.isActive) {
            this.isTouchEnabled = false;
          }
        }, 250);
      }
      this.handleScroll();
      if (this.appendToBody) {
        this.$nextTick(() => {
          this.updateAppendToBody();
        });
      }
    },
    isHoverable(value) {
      if (this.hoverable) {
        this.$emit("active-change", value);
      }
    }
  },
  methods: {
    handleScroll() {
      if (typeof window === "undefined") return;
      if (this.isMobileModal) {
        if (this.isActive) {
          document.documentElement.classList.add("is-clipped-touch");
        } else {
          document.documentElement.classList.remove("is-clipped-touch");
        }
      }
    },
    /**
     * Click listener from DropdownItem.
     *   1. Set new selected item.
     *   2. Emit input event to update the user v-model.
     *   3. Close the dropdown.
     */
    selectItem(value) {
      if (this.multiple) {
        if (this.selected) {
          if (this.selected.indexOf(value) === -1) {
            this.selected = [...this.selected, value];
          } else {
            this.selected = this.selected.filter((val) => val !== value);
          }
        } else {
          this.selected = [value];
        }
        this.$emit("change", this.selected);
      } else {
        if (this.selected !== value) {
          this.selected = value;
          this.$emit("change", this.selected);
        }
      }
      this.$emit("update:modelValue", this.selected);
      if (!this.multiple) {
        this.isActive = !this.closeOnClick;
        if (this.hoverable && this.closeOnClick) {
          this.isHoverable = false;
        }
      }
    },
    /**
    * White-listed items to not close when clicked.
    */
    isInWhiteList(el) {
      if (el === this.$refs.dropdownMenu) return true;
      if (el === this.$refs.trigger) return true;
      if (this.$refs.dropdownMenu != null) {
        const children = this.$refs.dropdownMenu.querySelectorAll("*");
        for (const child of children) {
          if (el === child) {
            return true;
          }
        }
      }
      if (this.$refs.trigger != null) {
        const children = this.$refs.trigger.querySelectorAll("*");
        for (const child of children) {
          if (el === child) {
            return true;
          }
        }
      }
      return false;
    },
    /**
    * Close dropdown if clicked outside.
    */
    clickedOutside(event) {
      if (this.cancelOptions.indexOf("outside") < 0) return;
      if (this.inline) return;
      const target = isCustomElement(this) ? event.composedPath()[0] : event.target;
      if (!this.isInWhiteList(target)) this.isActive = false;
    },
    /**
     * Keypress event that is bound to the document
     */
    keyPress({ key }) {
      if (this.isActive && (key === "Escape" || key === "Esc")) {
        if (this.cancelOptions.indexOf("escape") < 0) return;
        this.isActive = false;
      }
    },
    onClick() {
      if (this.triggers.indexOf("hover") !== -1) return;
      if (this.triggers.indexOf("click") < 0) return;
      this.toggle();
    },
    onContextMenu() {
      if (this.triggers.indexOf("contextmenu") < 0) return;
      this.toggle();
    },
    onHover() {
      if (this.triggers.indexOf("hover") < 0) return;
      if (this.isTouchEnabled) return;
      this.isHoverable = true;
    },
    // takes care of touch-enabled devices
    // - does nothing if hover trigger is disabled
    // - suppresses hover trigger by setting isTouchEnabled
    // - handles only a tap; i.e., touchstart on the trigger immediately
    //   folowed by touchend
    onTouchStart() {
      this.maybeTap = true;
    },
    onTouchMove() {
      this.maybeTap = false;
    },
    onTouchEnd(e) {
      if (this.triggers.indexOf("hover") === -1) return;
      if (!this.maybeTap) return;
      e.preventDefault();
      this.maybeTap = false;
      this.isTouchEnabled = true;
      this.toggle();
    },
    onFocus() {
      if (this.triggers.indexOf("focus") < 0) return;
      this.toggle();
    },
    /**
    * Toggle dropdown if it's not disabled.
    */
    toggle() {
      if (this.disabled) return;
      if (!this.isActive) {
        this.timeOutID2 = setTimeout(() => {
          const value = !this.isActive;
          this.isActive = value;
        });
      } else {
        this.isActive = !this.isActive;
      }
    },
    updateAppendToBody() {
      const dropdown = this.$refs.dropdown;
      const dropdownMenu = this.$refs.dropdownMenu;
      const trigger = this.$refs.trigger;
      if (dropdownMenu && trigger) {
        const dropdownWrapper = this.$data._bodyEl.children[0];
        dropdownWrapper.classList.forEach((item) => dropdownWrapper.classList.remove(item));
        dropdownWrapper.classList.add("dropdown");
        dropdownWrapper.classList.add("dropdown-menu-animation");
        if (this.$vnode && this.$vnode.data && this.$vnode.data.staticClass) {
          dropdownWrapper.classList.add(this.$vnode.data.staticClass);
        }
        this.rootClasses.forEach((item) => {
          if (item && typeof item === "object") {
            for (const key in item) {
              if (item[key]) {
                dropdownWrapper.classList.add(key);
              }
            }
          }
        });
        if (this.appendToBodyCopyParent) {
          const parentNode = this.$refs.dropdown.parentNode;
          const parent = this.$data._bodyEl;
          parent.classList.forEach((item) => parent.classList.remove(item));
          parentNode.classList.forEach((item) => {
            parent.classList.add(item);
          });
        }
        const rect = trigger.getBoundingClientRect();
        let top = rect.top + window.scrollY;
        let left = rect.left + window.scrollX;
        if (!this.position || this.position.indexOf("bottom") >= 0) {
          top += trigger.clientHeight;
        } else {
          top -= dropdownMenu.clientHeight;
        }
        if (this.position && this.position.indexOf("left") >= 0) {
          left -= dropdownMenu.clientWidth - trigger.clientWidth;
        }
        this.style = {
          position: "absolute",
          top: `${top}px`,
          left: `${left}px`,
          zIndex: "99",
          width: this.expanded ? `${dropdown.offsetWidth}px` : void 0
        };
      }
    }
  },
  mounted() {
    if (this.appendToBody) {
      this.$data._bodyEl = createAbsoluteElement(this.$refs.dropdownMenu);
      this.updateAppendToBody();
    }
  },
  created() {
    if (typeof window !== "undefined") {
      document.addEventListener("click", this.clickedOutside);
      document.addEventListener("keyup", this.keyPress);
    }
  },
  beforeUnmount() {
    if (typeof window !== "undefined") {
      document.removeEventListener("click", this.clickedOutside);
      document.removeEventListener("keyup", this.keyPress);
    }
    if (this.appendToBody) {
      removeElement(this.$data._bodyEl);
    }
    clearTimeout(this.timeOutID);
    clearTimeout(this.timeOutID2);
  }
};
var _hoisted_1$12 = ["tabindex"];
var _hoisted_2$1 = ["aria-hidden"];
var _hoisted_3$1 = ["aria-hidden"];
var _hoisted_43 = ["role", "aria-modal"];
function render$13(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_trap_focus = resolveDirective("trap-focus");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["dropdown dropdown-menu-animation", $options.rootClasses]),
      ref: "dropdown",
      onMouseleave: _cache[7] || (_cache[7] = ($event) => $data.isHoverable = false)
    },
    [
      !$props.inline ? (openBlock(), createElementBlock("div", {
        key: 0,
        tabindex: $props.disabled ? false : $props.triggerTabindex,
        ref: "trigger",
        class: "dropdown-trigger",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args)),
        onContextmenu: _cache[1] || (_cache[1] = withModifiers((...args) => $options.onContextMenu && $options.onContextMenu(...args), ["prevent"])),
        onMouseenter: _cache[2] || (_cache[2] = (...args) => $options.onHover && $options.onHover(...args)),
        onFocusCapture: _cache[3] || (_cache[3] = (...args) => $options.onFocus && $options.onFocus(...args)),
        onTouchstart: _cache[4] || (_cache[4] = (...args) => $options.onTouchStart && $options.onTouchStart(...args)),
        onTouchmove: _cache[5] || (_cache[5] = (...args) => $options.onTouchMove && $options.onTouchMove(...args)),
        onTouchend: _cache[6] || (_cache[6] = (...args) => $options.onTouchEnd && $options.onTouchEnd(...args)),
        "aria-haspopup": "true"
      }, [
        renderSlot(_ctx.$slots, "trigger", { active: $data.isActive })
      ], 40, _hoisted_1$12)) : createCommentVNode("v-if", true),
      createVNode(Transition, { name: $props.animation }, {
        default: withCtx(() => [
          $options.isMobileModal ? withDirectives((openBlock(), createElementBlock("div", {
            key: 0,
            class: "background",
            "aria-hidden": !$data.isActive
          }, null, 8, _hoisted_2$1)), [
            [vShow, $data.isActive]
          ]) : createCommentVNode("v-if", true)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["name"]),
      createVNode(Transition, {
        name: $props.animation,
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives((openBlock(), createElementBlock("div", {
            ref: "dropdownMenu",
            class: "dropdown-menu",
            style: normalizeStyle($data.style),
            "aria-hidden": !$data.isActive
          }, [
            createBaseVNode("div", {
              class: "dropdown-content",
              role: $props.ariaRole,
              "aria-modal": !$props.inline,
              style: normalizeStyle($options.contentStyle)
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 12, _hoisted_43)
          ], 12, _hoisted_3$1)), [
            [vShow, !$props.disabled && ($data.isActive || $data.isHoverable) || $props.inline],
            [_directive_trap_focus, $props.trapFocus]
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["name"])
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
script$13.render = render$13;
script$13.__file = "src/components/dropdown/Dropdown.vue";
var script11 = {
  name: "BDropdownItem",
  inject: {
    parent: {
      from: DROPDOWN_INJECTION_KEY,
      default: void 0
    }
  },
  props: {
    value: {
      type: [String, Number, Boolean, Object, Array, Function],
      default: null
    },
    separator: Boolean,
    disabled: Boolean,
    custom: Boolean,
    focusable: {
      type: Boolean,
      default: true
    },
    paddingless: Boolean,
    hasLink: Boolean,
    ariaRole: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  computed: {
    anchorClasses() {
      return {
        "is-disabled": this.parent.disabled || this.disabled,
        "is-paddingless": this.paddingless,
        "is-active": this.isActive
      };
    },
    itemClasses() {
      return {
        "dropdown-item": !this.hasLink,
        "is-disabled": this.disabled,
        "is-paddingless": this.paddingless,
        "is-active": this.isActive,
        "has-link": this.hasLink
      };
    },
    ariaRoleItem() {
      return this.ariaRole === "menuitem" || this.ariaRole === "listitem" ? this.ariaRole : null;
    },
    isClickable() {
      return !this.parent.disabled && !this.separator && !this.disabled && !this.custom;
    },
    isActive() {
      if (this.parent.selected === null) return false;
      if (this.parent.multiple) return this.parent.selected.indexOf(this.value) >= 0;
      return this.value === this.parent.selected;
    },
    isFocusable() {
      return this.hasLink ? false : this.focusable;
    }
  },
  methods: {
    /**
    * Click listener, select the item.
    */
    selectItem() {
      if (!this.isClickable) return;
      this.parent.selectItem(this.value);
      this.$emit("click");
    }
  }
};
var _hoisted_18 = {
  key: 0,
  class: "dropdown-divider"
};
var _hoisted_28 = ["role", "tabindex"];
var _hoisted_35 = ["role", "tabindex"];
function render10(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.separator ? (openBlock(), createElementBlock("hr", _hoisted_18)) : !$props.custom && !$props.hasLink ? (openBlock(), createElementBlock("a", {
    key: 1,
    class: normalizeClass(["dropdown-item", $options.anchorClasses]),
    onClick: _cache[0] || (_cache[0] = (...args) => $options.selectItem && $options.selectItem(...args)),
    role: $options.ariaRoleItem,
    tabindex: $options.isFocusable ? 0 : null
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_28)) : (openBlock(), createElementBlock("div", {
    key: 2,
    class: normalizeClass($options.itemClasses),
    onClick: _cache[1] || (_cache[1] = (...args) => $options.selectItem && $options.selectItem(...args)),
    role: $options.ariaRoleItem,
    tabindex: $options.isFocusable ? 0 : null
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_35));
}
script11.render = render10;
script11.__file = "src/components/dropdown/DropdownItem.vue";

// node_modules/buefy/dist/esm/Field-CMd66v8h.js
var script$14 = {
  name: "BFieldBody",
  inject: {
    parent: {
      from: "BField",
      default: null
    }
  },
  props: {
    message: {
      type: [String, Array]
    },
    type: {
      type: [String, Object]
    }
  },
  render() {
    let first = true;
    let children = typeof this.$slots.default === "function" ? this.$slots.default() : this.$slots.default;
    if (children != null && children.length === 1 && children[0].type === Fragment) {
      children = children[0].children;
    }
    return h(
      "div",
      { class: "field-body" },
      {
        default: () => {
          return children != null && children.map((element) => {
            if (element.type === Comment || element.type === Text) {
              return element;
            }
            let message;
            if (first) {
              message = this.message;
              first = false;
            }
            return h(
              this.parent ? this.parent.$.type : resolveComponent("b-field"),
              {
                type: this.type,
                message
              },
              () => element
            );
          });
        }
      }
    );
  }
};
script$14.__file = "src/components/field/FieldBody.vue";
var script12 = {
  name: "BField",
  components: {
    [script$14.name]: script$14
  },
  provide() {
    return {
      BField: this
    };
  },
  inject: {
    parent: {
      from: "BField",
      default: false
    }
  },
  // Used internally only when using Field in Field
  props: {
    type: [String, Object],
    label: String,
    labelFor: String,
    message: [String, Array, Object],
    grouped: Boolean,
    groupMultiline: Boolean,
    position: String,
    expanded: Boolean,
    horizontal: Boolean,
    addons: {
      type: Boolean,
      default: true
    },
    customClass: String,
    labelPosition: {
      type: String,
      default: () => {
        return config.defaultFieldLabelPosition;
      }
    }
  },
  data() {
    return {
      newType: this.type,
      newMessage: this.message,
      fieldLabelSize: null,
      numberInputClasses: [],
      _isField: true
      // Used internally by Input and Select
    };
  },
  computed: {
    rootClasses() {
      return [
        {
          "is-expanded": this.expanded,
          "is-horizontal": this.horizontal,
          "is-floating-in-label": this.hasLabel && !this.horizontal && this.labelPosition === "inside",
          "is-floating-label": this.hasLabel && !this.horizontal && this.labelPosition === "on-border"
        },
        this.numberInputClasses
      ];
    },
    innerFieldClasses() {
      return [
        this.fieldType(),
        this.newPosition,
        {
          "is-grouped-multiline": this.groupMultiline
        }
      ];
    },
    hasInnerField() {
      return this.grouped || this.groupMultiline || this.hasAddons();
    },
    /**
    * Correct Bulma class for the side of the addon or group.
    *
    * This is not kept like the others (is-small, etc.),
    * because since 'has-addons' is set automatically it
    * doesn't make sense to teach users what addons are exactly.
    */
    newPosition() {
      if (this.position === void 0) return;
      const position2 = this.position.split("-");
      if (position2.length < 1) return;
      const prefix = this.grouped ? "is-grouped-" : "has-addons-";
      if (this.position) return prefix + position2[1];
      return void 0;
    },
    /**
    * Formatted message in case it's an array
    * (each element is separated by <br> tag)
    */
    formattedMessage() {
      if (this.parent && this.parent.hasInnerField) {
        return "";
      }
      if (typeof this.newMessage === "string") {
        return [this.newMessage];
      }
      const messages = [];
      if (Array.isArray(this.newMessage)) {
        this.newMessage.forEach((message) => {
          if (typeof message === "string") {
            messages.push(message);
          } else {
            for (const key in message) {
              if (message[key]) {
                messages.push(key);
              }
            }
          }
        });
      } else {
        for (const key in this.newMessage) {
          if (this.newMessage[key]) {
            messages.push(key);
          }
        }
      }
      return messages.filter((m) => !!m);
    },
    hasLabel() {
      return this.label || this.$slots.label;
    },
    hasMessage() {
      return (!this.parent || !this.parent.hasInnerField) && this.newMessage || this.$slots.message;
    }
  },
  watch: {
    /**
    * Set internal type when prop change.
    */
    type(value) {
      this.newType = value;
    },
    /**
    * Set internal message when prop change.
    */
    message(value) {
      if (JSON.stringify(value) !== JSON.stringify(this.newMessage)) {
        this.newMessage = value;
      }
    },
    /**
    * Set parent message if we use Field in Field.
    */
    newMessage(value) {
      if (this.parent && this.parent.hasInnerField) {
        if (!this.parent.type) {
          this.parent.newType = this.newType;
        }
        if (!this.parent.message) {
          this.parent.newMessage = value;
        }
      }
    }
  },
  methods: {
    /**
    * Field has addons if there are more than one slot
    * (element / component) in the Field.
    * Or is grouped when prop is set.
    * Is a method to be called when component re-render.
    */
    fieldType() {
      if (this.grouped) return "is-grouped";
      if (this.hasAddons()) return "has-addons";
    },
    hasAddons() {
      let renderedNode = 0;
      if (this.$slots.default) {
        renderedNode = this.$slots.default().reduce((i, node) => isTag(node) ? i + 1 : i, 0);
      }
      return renderedNode > 1 && this.addons && !this.horizontal;
    },
    // called by a number input if it is a direct child.
    wrapNumberinput({ controlsPosition, size }) {
      const classes = ["has-numberinput"];
      if (controlsPosition) {
        classes.push(`has-numberinput-${controlsPosition}`);
      }
      if (size) {
        classes.push(`has-numberinput-${size}`);
      }
      this.numberInputClasses = classes;
    }
  },
  mounted() {
    if (this.horizontal) {
      const elements = this.$el.querySelectorAll(".input, .select, .button, .textarea, .b-slider");
      if (elements.length > 0) {
        this.fieldLabelSize = "is-normal";
      }
    }
  }
};
var _hoisted_19 = ["for"];
var _hoisted_29 = ["for"];
var _hoisted_36 = {
  key: 3,
  class: "field-body"
};
function render11(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_field_body = resolveComponent("b-field-body");
  const _component_b_field = resolveComponent("b-field");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["field", $options.rootClasses])
    },
    [
      $props.horizontal ? (openBlock(), createElementBlock(
        "div",
        {
          key: 0,
          class: normalizeClass(["field-label", [$props.customClass, $data.fieldLabelSize]])
        },
        [
          $options.hasLabel ? (openBlock(), createElementBlock("label", {
            key: 0,
            for: $props.labelFor,
            class: normalizeClass([$props.customClass, "label"])
          }, [
            _ctx.$slots.label ? renderSlot(_ctx.$slots, "label", { key: 0 }) : (openBlock(), createElementBlock(
              Fragment,
              { key: 1 },
              [
                createTextVNode(
                  toDisplayString($props.label),
                  1
                  /* TEXT */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            ))
          ], 10, _hoisted_19)) : createCommentVNode("v-if", true)
        ],
        2
        /* CLASS */
      )) : (openBlock(), createElementBlock(
        Fragment,
        { key: 1 },
        [
          $options.hasLabel ? (openBlock(), createElementBlock("label", {
            key: 0,
            for: $props.labelFor,
            class: normalizeClass([$props.customClass, "label"])
          }, [
            _ctx.$slots.label ? renderSlot(_ctx.$slots, "label", { key: 0 }) : (openBlock(), createElementBlock(
              Fragment,
              { key: 1 },
              [
                createTextVNode(
                  toDisplayString($props.label),
                  1
                  /* TEXT */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            ))
          ], 10, _hoisted_29)) : createCommentVNode("v-if", true)
        ],
        64
        /* STABLE_FRAGMENT */
      )),
      $props.horizontal ? (openBlock(), createBlock(_component_b_field_body, {
        key: 2,
        message: $data.newMessage ? $options.formattedMessage : "",
        type: $data.newType
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["message", "type"])) : $options.hasInnerField ? (openBlock(), createElementBlock("div", _hoisted_36, [
        createVNode(_component_b_field, {
          addons: false,
          type: $props.type,
          class: normalizeClass($options.innerFieldClasses)
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["type", "class"])
      ])) : renderSlot(_ctx.$slots, "default", { key: 4 }),
      $options.hasMessage && !$props.horizontal ? (openBlock(), createElementBlock(
        "p",
        {
          key: 5,
          class: normalizeClass(["help", $data.newType])
        },
        [
          _ctx.$slots.message ? renderSlot(_ctx.$slots, "message", {
            key: 0,
            messages: $options.formattedMessage
          }) : (openBlock(true), createElementBlock(
            Fragment,
            { key: 1 },
            renderList($options.formattedMessage, (mess, i) => {
              return openBlock(), createElementBlock(
                Fragment,
                null,
                [
                  createTextVNode(
                    toDisplayString(mess) + " ",
                    1
                    /* TEXT */
                  ),
                  i + 1 < $options.formattedMessage.length ? (openBlock(), createElementBlock("br", { key: i })) : createCommentVNode("v-if", true)
                ],
                64
                /* STABLE_FRAGMENT */
              );
            }),
            256
            /* UNKEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
script12.render = render11;
script12.__file = "src/components/field/Field.vue";

// node_modules/buefy/dist/esm/clockpicker.js
var indicatorSize = 40;
var paddingInner = 5;
var script$15 = {
  name: "BClockpickerFace",
  props: {
    pickerSize: Number,
    min: Number,
    max: Number,
    double: Boolean,
    value: Number,
    faceNumbers: Array,
    disabledValues: Function
  },
  emits: ["change", "input"],
  data() {
    return {
      isDragging: false,
      inputValue: this.value,
      prevAngle: 720
    };
  },
  computed: {
    /**
    * How many number indicators are shown on the face
    */
    count() {
      return this.max - this.min + 1;
    },
    /**
    * How many number indicators are shown per ring on the face
    */
    countPerRing() {
      return this.double ? this.count / 2 : this.count;
    },
    /**
    * Radius of the clock face
    */
    radius() {
      return this.pickerSize / 2;
    },
    /**
    * Radius of the outer ring of number indicators
    */
    outerRadius() {
      return this.radius - paddingInner - indicatorSize / 2;
    },
    /**
    * Radius of the inner ring of number indicators
    */
    innerRadius() {
      return Math.max(
        this.outerRadius * 0.6,
        this.outerRadius - paddingInner - indicatorSize
      );
    },
    /**
    * The angle for each selectable value
    * For hours this ends up being 30 degrees, for minutes 6 degrees
    */
    degreesPerUnit() {
      return 360 / this.countPerRing;
    },
    /**
    * Used for calculating x/y grid location based on degrees
    */
    degrees() {
      return this.degreesPerUnit * Math.PI / 180;
    },
    /**
    * Calculates the angle the clock hand should be rotated for the
    * selected value
    */
    handRotateAngle() {
      let currentAngle = this.prevAngle;
      while (currentAngle < 0) currentAngle += 360;
      const targetAngle = this.calcHandAngle(this.displayedValue);
      const degreesDiff = this.shortestDistanceDegrees(currentAngle, targetAngle);
      const angle = this.prevAngle + degreesDiff;
      return angle;
    },
    /**
    * Determines how long the selector hand is based on if the
    * selected value is located along the outer or inner ring
    */
    handScale() {
      return this.calcHandScale(this.displayedValue);
    },
    handStyle() {
      return {
        transform: `rotate(${this.handRotateAngle}deg) scaleY(${this.handScale})`,
        transition: ".3s cubic-bezier(.25,.8,.50,1)"
      };
    },
    /**
    * The value the hand should be pointing at
    */
    displayedValue() {
      return this.inputValue == null ? this.min : this.inputValue;
    }
  },
  watch: {
    value(value) {
      if (value !== this.inputValue) {
        this.prevAngle = this.handRotateAngle;
      }
      this.inputValue = value;
    }
  },
  methods: {
    isDisabled(value) {
      return this.disabledValues && this.disabledValues(value);
    },
    /**
    * Calculates the distance between two points
    */
    euclidean(p0, p1) {
      const dx = p1.x - p0.x;
      const dy = p1.y - p0.y;
      return Math.sqrt(dx * dx + dy * dy);
    },
    shortestDistanceDegrees(start, stop) {
      const modDiff = (stop - start) % 360;
      const shortestDistance = 180 - Math.abs(Math.abs(modDiff) - 180);
      return (modDiff + 360) % 360 < 180 ? shortestDistance * 1 : shortestDistance * -1;
    },
    /**
    * Calculates the angle of the line from the center point
    * to the given point.
    */
    coordToAngle(center, p1) {
      const value = 2 * Math.atan2(p1.y - center.y - this.euclidean(center, p1), p1.x - center.x);
      return Math.abs(value * 180 / Math.PI);
    },
    /**
    * Generates the inline style translate() property for a
    * number indicator, which determines it's location on the
    * clock face
    */
    getNumberTranslate(value) {
      const { x, y } = this.getNumberCoords(value);
      return `translate(${x}px, ${y}px)`;
    },
    /***
    * Calculates the coordinates on the clock face for a number
    * indicator value
    */
    getNumberCoords(value) {
      const radius = this.isInnerRing(value) ? this.innerRadius : this.outerRadius;
      return {
        x: Math.round(radius * Math.sin((value - this.min) * this.degrees)),
        y: Math.round(-radius * Math.cos((value - this.min) * this.degrees))
      };
    },
    getFaceNumberClasses(num) {
      return {
        active: num.value === this.displayedValue,
        disabled: this.isDisabled(num.value)
      };
    },
    /**
    * Determines if a value resides on the inner ring
    */
    isInnerRing(value) {
      return this.double && value - this.min >= this.countPerRing;
    },
    calcHandAngle(value) {
      let angle = this.degreesPerUnit * (value - this.min);
      if (this.isInnerRing(value)) angle -= 360;
      return angle;
    },
    calcHandScale(value) {
      return this.isInnerRing(value) ? this.innerRadius / this.outerRadius : 1;
    },
    onMouseDown(e) {
      e.preventDefault();
      this.isDragging = true;
      this.onDragMove(e);
    },
    onMouseUp() {
      this.isDragging = false;
      if (!this.isDisabled(this.inputValue)) {
        this.$emit("change", this.inputValue);
      }
    },
    onDragMove(e) {
      e.preventDefault();
      if (!this.isDragging && e.type !== "click") return;
      const { width, top, left } = this.$refs.clock.getBoundingClientRect();
      const { clientX, clientY } = "touches" in e ? e.touches[0] : e;
      const center = { x: width / 2, y: -width / 2 };
      const coords = { x: clientX - left, y: top - clientY };
      const handAngle = Math.round(this.coordToAngle(center, coords) + 360) % 360;
      const insideClick = this.double && this.euclidean(center, coords) < (this.outerRadius + this.innerRadius) / 2 - 16;
      let value = Math.round(handAngle / this.degreesPerUnit) + this.min + (insideClick ? this.countPerRing : 0);
      if (handAngle >= 360 - this.degreesPerUnit / 2) {
        value = insideClick ? this.max : this.min;
      }
      this.update(value);
    },
    update(value) {
      if (this.inputValue !== value && !this.isDisabled(value)) {
        this.prevAngle = this.handRotateAngle;
        this.inputValue = value;
        this.$emit("input", value);
      }
    }
  }
};
var _hoisted_1$13 = {
  class: "b-clockpicker-face-outer-ring",
  ref: "clock"
};
function render$14(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: "b-clockpicker-face",
      onMousedown: _cache[0] || (_cache[0] = (...args) => $options.onMouseDown && $options.onMouseDown(...args)),
      onMouseup: _cache[1] || (_cache[1] = (...args) => $options.onMouseUp && $options.onMouseUp(...args)),
      onMousemove: _cache[2] || (_cache[2] = (...args) => $options.onDragMove && $options.onDragMove(...args)),
      onTouchstart: _cache[3] || (_cache[3] = (...args) => $options.onMouseDown && $options.onMouseDown(...args)),
      onTouchend: _cache[4] || (_cache[4] = (...args) => $options.onMouseUp && $options.onMouseUp(...args)),
      onTouchmove: _cache[5] || (_cache[5] = (...args) => $options.onDragMove && $options.onDragMove(...args))
    },
    [
      createBaseVNode(
        "div",
        _hoisted_1$13,
        [
          createBaseVNode(
            "div",
            {
              class: "b-clockpicker-face-hand",
              style: normalizeStyle($options.handStyle)
            },
            null,
            4
            /* STYLE */
          ),
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($props.faceNumbers, (num, index) => {
              return openBlock(), createElementBlock(
                "span",
                {
                  key: index,
                  class: normalizeClass(["b-clockpicker-face-number", $options.getFaceNumberClasses(num)]),
                  style: normalizeStyle({ transform: $options.getNumberTranslate(num.value) })
                },
                [
                  createBaseVNode(
                    "span",
                    null,
                    toDisplayString(num.label),
                    1
                    /* TEXT */
                  )
                ],
                6
                /* CLASS, STYLE */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        512
        /* NEED_PATCH */
      )
    ],
    32
    /* HYDRATE_EVENTS */
  );
}
script$15.render = render$14;
script$15.__file = "src/components/clockpicker/ClockpickerFace.vue";
var outerPadding = 12;
var script13 = {
  name: "BClockpicker",
  components: {
    [script$15.name]: script$15,
    [script2.name]: script2,
    [script12.name]: script12,
    [script.name]: script,
    [script$13.name]: script$13,
    [script11.name]: script11
  },
  mixins: [TimepickerMixin],
  props: {
    pickerSize: {
      type: Number,
      default: 290
    },
    incrementMinutes: {
      type: Number,
      default: 5
    },
    autoSwitch: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "is-primary"
    },
    hoursLabel: {
      type: String,
      default: () => config.defaultClockpickerHoursLabel || "Hours"
    },
    minutesLabel: {
      type: String,
      default: () => config.defaultClockpickerMinutesLabel || "Min"
    }
  },
  data() {
    return {
      isSelectingHour: true,
      isDragging: false,
      _isClockpicker: true
    };
  },
  computed: {
    hoursDisplay() {
      if (this.hoursSelected == null) return "--";
      if (this.isHourFormat24) return this.pad(this.hoursSelected);
      let display = this.hoursSelected;
      if (this.meridienSelected === this.pmString) {
        display -= 12;
      }
      if (display === 0) display = 12;
      return display;
    },
    minutesDisplay() {
      return this.minutesSelected == null ? "--" : this.pad(this.minutesSelected);
    },
    minFaceValue() {
      return this.isSelectingHour && !this.isHourFormat24 && this.meridienSelected === this.pmString ? 12 : 0;
    },
    maxFaceValue() {
      return this.isSelectingHour ? !this.isHourFormat24 && this.meridienSelected === this.amString ? 11 : 23 : 59;
    },
    faceSize() {
      return this.pickerSize - outerPadding * 2;
    },
    faceDisabledValues() {
      return this.isSelectingHour ? this.isHourDisabled : this.isMinuteDisabled;
    }
  },
  methods: {
    onClockInput(value) {
      if (this.isSelectingHour) {
        this.hoursSelected = value;
        this.onHoursChange(value);
      } else {
        this.minutesSelected = value;
        this.onMinutesChange(value);
      }
    },
    onClockChange(value) {
      if (this.autoSwitch && this.isSelectingHour) {
        this.isSelectingHour = !this.isSelectingHour;
      }
    },
    onMeridienClick(value) {
      if (this.meridienSelected !== value) {
        this.meridienSelected = value;
        this.onMeridienChange(value);
      }
    },
    /*
     * Avoid dropdown toggle when is already visible
     */
    onInputClick(event) {
      if (this.$refs.dropdown.isActive) {
        event.stopPropagation();
      }
    }
  }
};
var _hoisted_110 = ["disabled"];
var _hoisted_210 = {
  key: 0,
  class: "card-header"
};
var _hoisted_37 = { class: "b-clockpicker-header card-header-title" };
var _hoisted_44 = { class: "b-clockpicker-time" };
var _hoisted_5 = {
  key: 0,
  class: "b-clockpicker-period"
};
var _hoisted_6 = { class: "card-content" };
var _hoisted_7 = {
  key: 0,
  class: "b-clockpicker-time"
};
var _hoisted_8 = {
  key: 1,
  class: "b-clockpicker-period"
};
var _hoisted_9 = {
  key: 1,
  class: "b-clockpicker-footer card-footer"
};
function render12(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_input = resolveComponent("b-input");
  const _component_b_clockpicker_face = resolveComponent("b-clockpicker-face");
  const _component_b_dropdown = resolveComponent("b-dropdown");
  return openBlock(), createElementBlock(
    "div",
    mergeProps({
      class: ["b-clockpicker control", [_ctx.size, $props.type, { "is-expanded": _ctx.expanded }]]
    }, _ctx.rootAttrs),
    [
      !_ctx.isMobile || _ctx.inline ? (openBlock(), createBlock(_component_b_dropdown, {
        key: 0,
        ref: "dropdown",
        position: _ctx.position,
        disabled: _ctx.disabledOrUndefined,
        inline: _ctx.inline,
        "mobile-modal": _ctx.mobileModal,
        "append-to-body": _ctx.appendToBody,
        "append-to-body-copy-parent": "",
        onActiveChange: _ctx.onActiveChange
      }, createSlots({
        default: withCtx(() => [
          createBaseVNode("div", {
            class: "card",
            disabled: _ctx.disabledOrUndefined,
            custom: ""
          }, [
            _ctx.inline ? (openBlock(), createElementBlock("header", _hoisted_210, [
              createBaseVNode("div", _hoisted_37, [
                createBaseVNode("div", _hoisted_44, [
                  createBaseVNode(
                    "span",
                    {
                      class: normalizeClass(["b-clockpicker-btn", { active: $data.isSelectingHour }]),
                      onClick: _cache[3] || (_cache[3] = ($event) => $data.isSelectingHour = true)
                    },
                    toDisplayString($options.hoursDisplay),
                    3
                    /* TEXT, CLASS */
                  ),
                  createBaseVNode(
                    "span",
                    null,
                    toDisplayString(_ctx.hourLiteral),
                    1
                    /* TEXT */
                  ),
                  createBaseVNode(
                    "span",
                    {
                      class: normalizeClass(["b-clockpicker-btn", { active: !$data.isSelectingHour }]),
                      onClick: _cache[4] || (_cache[4] = ($event) => $data.isSelectingHour = false)
                    },
                    toDisplayString($options.minutesDisplay),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                !_ctx.isHourFormat24 ? (openBlock(), createElementBlock("div", _hoisted_5, [
                  createBaseVNode(
                    "div",
                    {
                      class: normalizeClass(["b-clockpicker-btn", {
                        active: _ctx.meridienSelected === _ctx.amString || _ctx.meridienSelected === _ctx.AM
                      }]),
                      onClick: _cache[5] || (_cache[5] = ($event) => $options.onMeridienClick(_ctx.amString))
                    },
                    toDisplayString(_ctx.amString),
                    3
                    /* TEXT, CLASS */
                  ),
                  createBaseVNode(
                    "div",
                    {
                      class: normalizeClass(["b-clockpicker-btn", {
                        active: _ctx.meridienSelected === _ctx.pmString || _ctx.meridienSelected === _ctx.PM
                      }]),
                      onClick: _cache[6] || (_cache[6] = ($event) => $options.onMeridienClick(_ctx.pmString))
                    },
                    toDisplayString(_ctx.pmString),
                    3
                    /* TEXT, CLASS */
                  )
                ])) : createCommentVNode("v-if", true)
              ])
            ])) : createCommentVNode("v-if", true),
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode(
                "div",
                {
                  class: "b-clockpicker-body",
                  style: normalizeStyle({ width: $options.faceSize + "px", height: $options.faceSize + "px" })
                },
                [
                  !_ctx.inline ? (openBlock(), createElementBlock("div", _hoisted_7, [
                    createBaseVNode(
                      "div",
                      {
                        class: normalizeClass(["b-clockpicker-btn", { active: $data.isSelectingHour }]),
                        onClick: _cache[7] || (_cache[7] = ($event) => $data.isSelectingHour = true)
                      },
                      toDisplayString($props.hoursLabel),
                      3
                      /* TEXT, CLASS */
                    ),
                    createBaseVNode(
                      "span",
                      {
                        class: normalizeClass(["b-clockpicker-btn", { active: !$data.isSelectingHour }]),
                        onClick: _cache[8] || (_cache[8] = ($event) => $data.isSelectingHour = false)
                      },
                      toDisplayString($props.minutesLabel),
                      3
                      /* TEXT, CLASS */
                    )
                  ])) : createCommentVNode("v-if", true),
                  !_ctx.isHourFormat24 && !_ctx.inline ? (openBlock(), createElementBlock("div", _hoisted_8, [
                    createBaseVNode(
                      "div",
                      {
                        class: normalizeClass(["b-clockpicker-btn", {
                          active: _ctx.meridienSelected === _ctx.amString || _ctx.meridienSelected === _ctx.AM
                        }]),
                        onClick: _cache[9] || (_cache[9] = ($event) => $options.onMeridienClick(_ctx.amString))
                      },
                      toDisplayString(_ctx.amString),
                      3
                      /* TEXT, CLASS */
                    ),
                    createBaseVNode(
                      "div",
                      {
                        class: normalizeClass(["b-clockpicker-btn", {
                          active: _ctx.meridienSelected === _ctx.pmString || _ctx.meridienSelected === _ctx.PM
                        }]),
                        onClick: _cache[10] || (_cache[10] = ($event) => $options.onMeridienClick(_ctx.pmString))
                      },
                      toDisplayString(_ctx.pmString),
                      3
                      /* TEXT, CLASS */
                    )
                  ])) : createCommentVNode("v-if", true),
                  createVNode(_component_b_clockpicker_face, {
                    "picker-size": $options.faceSize,
                    min: $options.minFaceValue,
                    max: $options.maxFaceValue,
                    "face-numbers": $data.isSelectingHour ? _ctx.hours : _ctx.minutes,
                    "disabled-values": $options.faceDisabledValues,
                    double: $data.isSelectingHour && _ctx.isHourFormat24,
                    value: $data.isSelectingHour ? _ctx.hoursSelected : _ctx.minutesSelected,
                    onInput: $options.onClockInput,
                    onChange: $options.onClockChange
                  }, null, 8, ["picker-size", "min", "max", "face-numbers", "disabled-values", "double", "value", "onInput", "onChange"])
                ],
                4
                /* STYLE */
              )
            ]),
            _ctx.$slots.default !== void 0 && _ctx.$slots.default().length ? (openBlock(), createElementBlock("footer", _hoisted_9, [
              renderSlot(_ctx.$slots, "default")
            ])) : createCommentVNode("v-if", true)
          ], 8, _hoisted_110)
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        !_ctx.inline ? {
          name: "trigger",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "trigger", {}, () => [
              createVNode(_component_b_input, mergeProps({
                ref: "input",
                autocomplete: "off",
                value: _ctx.formatValue(_ctx.computedValue),
                placeholder: _ctx.placeholder,
                size: _ctx.size,
                icon: _ctx.icon,
                "icon-pack": _ctx.iconPack,
                loading: _ctx.loading,
                disabled: _ctx.disabledOrUndefined,
                readonly: !_ctx.editable,
                rounded: _ctx.rounded
              }, _ctx.fallthroughAttrs, {
                "use-html5-validation": _ctx.useHtml5Validation,
                onClick: $options.onInputClick,
                onKeyup: _cache[0] || (_cache[0] = withKeys(($event) => _ctx.toggle(true), ["enter"])),
                onChange: _cache[1] || (_cache[1] = ($event) => _ctx.onChange($event.target.value)),
                onFocus: _ctx.handleOnFocus,
                onBlur: _cache[2] || (_cache[2] = ($event) => _ctx.checkHtml5Validity())
              }), null, 16, ["value", "placeholder", "size", "icon", "icon-pack", "loading", "disabled", "readonly", "rounded", "use-html5-validation", "onClick", "onFocus"])
            ])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["position", "disabled", "inline", "mobile-modal", "append-to-body", "onActiveChange"])) : (openBlock(), createBlock(_component_b_input, mergeProps({
        key: 1,
        ref: "input",
        type: "time",
        autocomplete: "off",
        value: _ctx.formatHHMMSS(_ctx.computedValue),
        placeholder: _ctx.placeholder,
        size: _ctx.size,
        icon: _ctx.icon,
        "icon-pack": _ctx.iconPack,
        loading: _ctx.loading,
        max: _ctx.formatHHMMSS(_ctx.maxTime),
        min: _ctx.formatHHMMSS(_ctx.minTime),
        disabled: _ctx.disabledOrUndefined,
        readonly: false
      }, _ctx.fallthroughAttrs, {
        "use-html5-validation": _ctx.useHtml5Validation,
        onClick: _cache[11] || (_cache[11] = withModifiers(($event) => _ctx.toggle(true), ["stop"])),
        onKeyup: _cache[12] || (_cache[12] = withKeys(($event) => _ctx.toggle(true), ["enter"])),
        onChange: _ctx.onChangeNativePicker,
        onFocus: _ctx.handleOnFocus,
        onBlur: _cache[13] || (_cache[13] = ($event) => _ctx.onBlur() && _ctx.checkHtml5Validity())
      }), null, 16, ["value", "placeholder", "size", "icon", "icon-pack", "loading", "max", "min", "disabled", "use-html5-validation", "onChange", "onFocus"]))
    ],
    16
    /* FULL_PROPS */
  );
}
script13.render = render12;
script13.__file = "src/components/clockpicker/Clockpicker.vue";
var Plugin7 = {
  install: function install7(Vue) {
    registerComponent(Vue, script13);
  }
};
use(Plugin7);

// node_modules/buefy/dist/esm/classCallCheck-E4khD9xn.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// node_modules/buefy/dist/esm/Select-DY-wGhZc.js
var script14 = {
  name: "BSelect",
  components: {
    [script.name]: script
  },
  mixins: [CompatFallthroughMixin, FormElementMixin],
  props: {
    modelValue: {
      type: [String, Number, Boolean, Object, Array, Function, Date],
      default: null
    },
    placeholder: String,
    multiple: Boolean,
    nativeSize: [String, Number]
  },
  emits: ["blur", "focus", "update:modelValue"],
  data() {
    return {
      selected: this.modelValue,
      _elementRef: "select"
    };
  },
  computed: {
    computedValue: {
      get() {
        return this.selected;
      },
      set(value) {
        this.selected = value;
        this.$emit("update:modelValue", value);
        !this.isValid && this.checkHtml5Validity();
      }
    },
    spanClasses() {
      return [this.size, this.statusType, {
        "is-fullwidth": this.expanded,
        "is-loading": this.loading,
        "is-multiple": this.multiple,
        "is-rounded": this.rounded,
        "is-empty": this.selected === null
      }];
    }
  },
  watch: {
    /**
    * When v-model is changed:
    *   1. Set the selected option.
    *   2. If it's invalid, validate again.
    */
    modelValue(value) {
      this.selected = value;
      !this.isValid && this.checkHtml5Validity();
    }
  }
};
var _hoisted_111 = ["multiple", "size"];
var _hoisted_211 = {
  key: 0,
  value: null,
  disabled: "",
  hidden: ""
};
function render13(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");
  return openBlock(), createElementBlock(
    "div",
    mergeProps({
      class: ["control", { "is-expanded": _ctx.expanded, "has-icons-left": _ctx.icon }]
    }, _ctx.rootAttrs),
    [
      createBaseVNode(
        "span",
        {
          class: normalizeClass(["select", $options.spanClasses])
        },
        [
          withDirectives(createBaseVNode("select", mergeProps({
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.computedValue = $event),
            ref: "select",
            multiple: $props.multiple,
            size: $props.nativeSize
          }, _ctx.fallthroughAttrs, {
            onBlur: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("blur", $event) && _ctx.checkHtml5Validity()),
            onFocus: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("focus", $event))
          }), [
            $props.placeholder ? (openBlock(), createElementBlock(
              Fragment,
              { key: 0 },
              [
                $options.computedValue == null ? (openBlock(), createElementBlock(
                  "option",
                  _hoisted_211,
                  toDisplayString($props.placeholder),
                  1
                  /* TEXT */
                )) : createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : createCommentVNode("v-if", true),
            renderSlot(_ctx.$slots, "default")
          ], 16, _hoisted_111), [
            [vModelSelect, $options.computedValue]
          ])
        ],
        2
        /* CLASS */
      ),
      _ctx.icon ? (openBlock(), createBlock(_component_b_icon, {
        key: 0,
        class: "is-left",
        icon: _ctx.icon,
        pack: _ctx.iconPack,
        size: _ctx.iconSize
      }, null, 8, ["icon", "pack", "size"])) : createCommentVNode("v-if", true)
    ],
    16
    /* FULL_PROPS */
  );
}
script14.render = render13;
script14.__file = "src/components/select/Select.vue";

// node_modules/buefy/dist/esm/Tooltip-WHq2LJas.js
var script15 = {
  name: "BTooltip",
  props: {
    active: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: () => config.defaultTooltipType
    },
    label: String,
    delay: {
      type: Number,
      default: () => config.defaultTooltipDelay
    },
    closeDelay: {
      type: Number,
      default: () => config.defaultTooltipCloseDelay
    },
    position: {
      type: String,
      default: "is-top",
      validator(value) {
        return [
          "is-top",
          "is-bottom",
          "is-left",
          "is-right"
        ].indexOf(value) > -1;
      }
    },
    triggers: {
      type: Array,
      default: () => ["hover"]
    },
    always: Boolean,
    square: Boolean,
    dashed: Boolean,
    multilined: Boolean,
    size: {
      type: String,
      default: "is-medium"
    },
    appendToBody: Boolean,
    animated: {
      type: Boolean,
      default: true
    },
    animation: {
      type: String,
      default: "fade"
    },
    contentClass: String,
    autoClose: {
      type: [Array, Boolean],
      default: true
    }
  },
  emits: ["close", "open"],
  data() {
    return {
      isActive: false,
      triggerStyle: {},
      timer: null,
      _bodyEl: void 0,
      // Used to append to body
      resizeObserver: void 0,
      resizeListener: void 0,
      timeOutID: null
    };
  },
  computed: {
    rootClasses() {
      return ["b-tooltip", this.type, this.position, this.size, {
        "is-square": this.square,
        "is-always": this.always,
        "is-multiline": this.multilined,
        "is-dashed": this.dashed
      }];
    },
    newAnimation() {
      return this.animated ? this.animation : void 0;
    }
  },
  watch: {
    isActive() {
      this.$emit(this.isActive ? "open" : "close");
      if (this.appendToBody) {
        this.updateAppendToBody();
      }
    }
  },
  methods: {
    updateAppendToBody() {
      const tooltip = this.$refs.tooltip;
      const trigger = this.$refs.trigger;
      if (tooltip && trigger) {
        const tooltipEl = this.$data._bodyEl.children[0];
        tooltipEl.classList.forEach((item) => tooltipEl.classList.remove(item));
        if (this.$vnode && this.$vnode.data && this.$vnode.data.staticClass) {
          tooltipEl.classList.add(this.$vnode.data.staticClass);
        }
        this.rootClasses.forEach((item) => {
          if (typeof item === "object") {
            for (const key in item) {
              if (item[key]) {
                tooltipEl.classList.add(key);
              }
            }
          } else {
            tooltipEl.classList.add(item);
          }
        });
        const rect = trigger.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const left = rect.left + window.scrollX;
        tooltipEl.style.position = "absolute";
        switch (this.position) {
          case "is-top":
            tooltipEl.style.width = `${trigger.clientWidth}px`;
            tooltipEl.style.height = "0px";
            tooltipEl.style.top = "0px";
            tooltipEl.style.left = "0px";
            break;
          case "is-bottom":
            tooltipEl.style.width = `${trigger.clientWidth}px`;
            tooltipEl.style.height = "0px";
            tooltipEl.style.top = `${trigger.clientHeight}px`;
            tooltipEl.style.left = "0px";
            break;
          case "is-left":
            tooltipEl.style.width = "0px";
            tooltipEl.style.height = `${trigger.clientHeight}px`;
            tooltipEl.style.top = "0px";
            tooltipEl.style.left = "0px";
            break;
          case "is-right":
            tooltipEl.style.width = "0px";
            tooltipEl.style.height = `${trigger.clientHeight}px`;
            tooltipEl.style.top = "0px";
            tooltipEl.style.left = `${trigger.clientWidth}px`;
            break;
        }
        const wrapper = this.$data._bodyEl;
        wrapper.style.position = "absolute";
        wrapper.style.top = `${top}px`;
        wrapper.style.left = `${left}px`;
        wrapper.style.width = "0px";
        wrapper.style.zIndex = this.isActive || this.always ? "99" : "-1";
        this.triggerStyle = {
          zIndex: this.isActive || this.always ? "100" : void 0
        };
      }
    },
    onClick() {
      if (this.triggers.indexOf("click") < 0) return;
      this.$nextTick(() => {
        this.timeOutID = setTimeout(() => this.open());
      });
    },
    onHover() {
      if (this.triggers.indexOf("hover") < 0) return;
      this.open();
    },
    onContextMenu(e) {
      if (this.triggers.indexOf("contextmenu") < 0) return;
      e.preventDefault();
      this.open();
    },
    onFocus() {
      if (this.triggers.indexOf("focus") < 0) return;
      this.open();
    },
    open() {
      if (this.delay) {
        this.timer = setTimeout(() => {
          this.isActive = true;
          this.timer = null;
        }, this.delay);
      } else {
        this.isActive = true;
      }
    },
    close() {
      if (typeof this.autoClose === "boolean") {
        if (this.autoClose && this.timer) clearTimeout(this.timer);
        if (this.closeDelay) {
          this.timer = setTimeout(() => {
            this.isActive = !this.autoClose;
            this.timer = null;
          }, this.closeDelay);
        } else {
          this.isActive = !this.autoClose;
        }
      }
    },
    /**
    * Close tooltip if clicked outside.
    */
    clickedOutside(event) {
      if (this.isActive) {
        if (Array.isArray(this.autoClose)) {
          if (this.autoClose.includes("outside")) {
            if (!this.isInWhiteList(event.target)) {
              this.isActive = false;
              return;
            }
          }
          if (this.autoClose.includes("inside")) {
            if (this.isInWhiteList(event.target)) this.isActive = false;
          }
        }
      }
    },
    /**
     * Keypress event that is bound to the document
     */
    keyPress({ key }) {
      if (this.isActive && (key === "Escape" || key === "Esc")) {
        if (Array.isArray(this.autoClose)) {
          if (this.autoClose.indexOf("escape") >= 0) this.isActive = false;
        }
      }
    },
    /**
    * White-listed items to not close when clicked.
    */
    isInWhiteList(el) {
      if (el === this.$refs.content) return true;
      if (this.$refs.content != null) {
        const children = this.$refs.content.querySelectorAll("*");
        for (const child of children) {
          if (el === child) {
            return true;
          }
        }
      }
      return false;
    }
  },
  mounted() {
    if (this.appendToBody && typeof window !== "undefined") {
      this.controller = new window.AbortController();
      this.$data._bodyEl = createAbsoluteElement(this.$refs.content);
      this.updateAppendToBody();
      const animation = this.$el.closest(".animation-content");
      if (animation != null) {
        const listener = () => {
          this.updateAppendToBody();
          animation.removeEventListener("transitionend", listener);
        };
        animation.addEventListener("transitionend", listener, {
          signal: this.controller.signal
        });
      }
      this.resizeListener = () => this.updateAppendToBody();
      window.addEventListener("resize", this.resizeListener);
      this.resizeObserver = new ResizeObserver(this.resizeListener);
      if (this.$el.parentNode != null && this.$el.parentNode.nodeType === Node.ELEMENT_NODE) {
        this.resizeObserver.observe(this.$el.parentNode);
      }
    }
  },
  created() {
    if (typeof window !== "undefined") {
      document.addEventListener("click", this.clickedOutside);
      document.addEventListener("keyup", this.keyPress);
    }
  },
  beforeUnmount() {
    if (typeof window !== "undefined") {
      document.removeEventListener("click", this.clickedOutside);
      document.removeEventListener("keyup", this.keyPress);
    }
    if (this.resizeListener != null) {
      window.removeEventListener("resize", this.resizeListener);
    }
    if (this.resizeObserver != null) {
      this.resizeObserver.disconnect();
    }
    if (this.appendToBody) {
      removeElement(this.$data._bodyEl);
    }
    if (this.controller != null) {
      this.controller.abort();
    }
    clearTimeout(this.timer);
    clearTimeout(this.timeOutID);
  }
};
function render14(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      ref: "tooltip",
      class: normalizeClass($options.rootClasses)
    },
    [
      createVNode(Transition, {
        name: $options.newAnimation,
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode(
            "div",
            {
              ref: "content",
              class: normalizeClass(["tooltip-content", $props.contentClass])
            },
            [
              $props.label ? (openBlock(), createElementBlock(
                Fragment,
                { key: 0 },
                [
                  createTextVNode(
                    toDisplayString($props.label),
                    1
                    /* TEXT */
                  )
                ],
                64
                /* STABLE_FRAGMENT */
              )) : _ctx.$slots.content ? renderSlot(_ctx.$slots, "content", { key: 1 }) : createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          ), [
            [vShow, $props.active && ($data.isActive || $props.always)]
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["name"]),
      createBaseVNode(
        "div",
        {
          ref: "trigger",
          class: "tooltip-trigger",
          style: normalizeStyle($data.triggerStyle),
          onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args)),
          onContextmenu: _cache[1] || (_cache[1] = (...args) => $options.onContextMenu && $options.onContextMenu(...args)),
          onMouseenter: _cache[2] || (_cache[2] = (...args) => $options.onHover && $options.onHover(...args)),
          onFocusCapture: _cache[3] || (_cache[3] = (...args) => $options.onFocus && $options.onFocus(...args)),
          onBlurCapture: _cache[4] || (_cache[4] = (...args) => $options.close && $options.close(...args)),
          onMouseleave: _cache[5] || (_cache[5] = (...args) => $options.close && $options.close(...args))
        },
        [
          renderSlot(_ctx.$slots, "default", { ref: "slot" })
        ],
        36
        /* STYLE, HYDRATE_EVENTS */
      )
    ],
    2
    /* CLASS */
  );
}
script15.render = render14;
script15.__file = "src/components/tooltip/Tooltip.vue";

// node_modules/buefy/dist/esm/index-q6XsbEz4.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _isNativeFunction(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  } catch (e) {
    return typeof fn === "function";
  }
}
function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct$1()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2) _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2)) return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2)) return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var colorChannels = ["red", "green", "blue", "alpha"];
var colorsNammed = {
  transparent: "#00000000",
  black: "#000000",
  silver: "#c0c0c0",
  gray: "#808080",
  white: "#ffffff",
  maroon: "#800000",
  red: "#ff0000",
  purple: "#800080",
  fuchsia: "#ff00ff",
  green: "#008000",
  lime: "#00ff00",
  olive: "#808000",
  yellow: "#ffff00",
  navy: "#000080",
  blue: "#0000ff",
  teal: "#008080",
  aqua: "#00ffff",
  orange: "#ffa500",
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  blanchedalmond: "#ffebcd",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  oldlace: "#fdf5e6",
  olivedrab: "#6b8e23",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  whitesmoke: "#f5f5f5",
  yellowgreen: "#9acd32",
  rebeccapurple: "#663399"
};
var ColorTypeError = function(_Error) {
  _inherits(ColorTypeError2, _Error);
  var _super = _createSuper(ColorTypeError2);
  function ColorTypeError2() {
    _classCallCheck(this, ColorTypeError2);
    return _super.call(this, "ColorTypeError: type must be hex(a), rgb(a) or hsl(a)");
  }
  return _createClass(ColorTypeError2);
}(_wrapNativeSuper(Error));
var Color = function(_Symbol$toString) {
  function Color2() {
    var _this = this;
    _classCallCheck(this, Color2);
    if (arguments.length > 0) {
      return Color2.parse.apply(Color2, arguments);
    }
    this.$channels = new Uint8Array(colorChannels.length);
    colorChannels.forEach(function(channel, index) {
      Object.defineProperty(_this, channel, {
        get: function get3() {
          return _this.$channels[index];
        },
        set: function set3(_byte) {
          if (!Number.isNaN(_byte / 1)) {
            _this.$channels[index] = Math.min(255, Math.max(0, _byte));
          }
        },
        enumerable: true,
        configurable: true
      });
    });
    ["hue", "saturation", "lightness"].forEach(function(name) {
      var capitalizedName = name.replace(/^./, function(m) {
        return m.toUpperCase();
      });
      Object.defineProperty(_this, name, {
        get: function get3() {
          return _this["get".concat(capitalizedName)]();
        },
        set: function set3(value) {
          if (!Number.isNaN(value / 1)) {
            _this["set".concat(capitalizedName)](value);
          }
        },
        enumerable: true,
        configurable: true
      });
    });
  }
  _createClass(Color2, [{
    key: "getHue",
    value: function getHue() {
      var _Array$from$map = Array.from(this.$channels).map(function(c) {
        return c / 255;
      }), _Array$from$map2 = _slicedToArray(_Array$from$map, 3), red = _Array$from$map2[0], green = _Array$from$map2[1], blue = _Array$from$map2[2];
      var _ref = [Math.min(red, green, blue), Math.max(red, green, blue)], min = _ref[0], max = _ref[1];
      var delta = max - min;
      var hue = 0;
      if (delta === 0) {
        return hue;
      }
      if (red === max) {
        hue = (green - blue) / delta % 6;
      } else if (green === max) {
        hue = (blue - red) / delta + 2;
      } else {
        hue = (red - green) / delta + 4;
      }
      hue *= 60;
      while (hue !== -Infinity && hue < 0) hue += 360;
      return Math.round(hue % 360);
    }
  }, {
    key: "setHue",
    value: function setHue(value) {
      var color = Color2.fromHSL(value, this.saturation, this.lightness, this.alpha / 255);
      for (var i = 0; i < this.$channels.length; i++) {
        this.$channels[i] = Number(color.$channels[i]);
      }
    }
  }, {
    key: "getSaturation",
    value: function getSaturation() {
      var _Array$from$map3 = Array.from(this.$channels).map(function(c) {
        return c / 255;
      }), _Array$from$map4 = _slicedToArray(_Array$from$map3, 3), red = _Array$from$map4[0], green = _Array$from$map4[1], blue = _Array$from$map4[2];
      var _ref2 = [Math.min(red, green, blue), Math.max(red, green, blue)], min = _ref2[0], max = _ref2[1];
      var delta = max - min;
      return delta !== 0 ? Math.round(delta / (1 - Math.abs(2 * this.lightness - 1)) * 100) / 100 : 0;
    }
  }, {
    key: "setSaturation",
    value: function setSaturation(value) {
      var _this2 = this;
      var color = Color2.fromHSL(this.hue, value, this.lightness, this.alpha / 255);
      colorChannels.forEach(function(_, i) {
        return _this2.$channels[i] = color.$channels[i];
      });
    }
  }, {
    key: "getLightness",
    value: function getLightness() {
      var _Array$from$map5 = Array.from(this.$channels).map(function(c) {
        return c / 255;
      }), _Array$from$map6 = _slicedToArray(_Array$from$map5, 3), red = _Array$from$map6[0], green = _Array$from$map6[1], blue = _Array$from$map6[2];
      var _ref3 = [Math.min(red, green, blue), Math.max(red, green, blue)], min = _ref3[0], max = _ref3[1];
      return Math.round((max + min) / 2 * 100) / 100;
    }
  }, {
    key: "setLightness",
    value: function setLightness(value) {
      var _this3 = this;
      var color = Color2.fromHSL(this.hue, this.lightness, value, this.alpha / 255);
      colorChannels.forEach(function(_, i) {
        return _this3.$channels[i] = color.$channels[i];
      });
    }
  }, {
    key: "clone",
    value: function clone() {
      var _this4 = this;
      var color = new Color2();
      colorChannels.forEach(function(_, i) {
        return color.$channels[i] = _this4.$channels[i];
      });
      return color;
    }
  }, {
    key: "toString",
    value: function toString() {
      var _this5 = this;
      var type = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "hex";
      switch (String(type).toLowerCase()) {
        case "hex":
          return "#" + colorChannels.slice(0, 3).map(function(channel) {
            return _this5[channel].toString(16).padStart(2, "0");
          }).join("");
        case "hexa":
          return "#" + colorChannels.map(function(channel) {
            return _this5[channel].toString(16).padStart(2, "0");
          }).join("");
        case "rgb":
          return "rgb(".concat(this.red, ", ").concat(this.green, ", ").concat(this.blue, ")");
        case "rgba":
          return "rgba(".concat(this.red, ", ").concat(this.green, ", ").concat(this.blue, ", ").concat(Math.round(this.alpha / 2.55) / 100, ")");
        case "hsl":
          return "hsl(".concat(Math.round(this.hue), "deg, ").concat(Math.round(this.saturation * 100), "%, ").concat(Math.round(this.lightness * 100), "%)");
        case "hsla":
          return "hsla(".concat(Math.round(this.hue), "deg, ").concat(Math.round(this.saturation * 100), "%, ").concat(Math.round(this.lightness * 100), "%, ").concat(Math.round(this.alpha / 2.55) / 100, ")");
        default:
          throw new ColorTypeError();
      }
    }
  }, {
    key: _Symbol$toString,
    get: function get3() {
      return this.toString("hex");
    }
  }], [{
    key: "parse",
    value: function parse() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (_typeof(args[0]) === "object") {
        return Color2.parseObject(args[0]);
      } else if (args.every(function(arg) {
        return !Number.isNaN(arg / 1);
      })) {
        var color = new Color2();
        if (args.length > 3) {
          color.red = args[0];
          color.green = args[1];
          color.blue = args[2];
          if (args[3]) {
            color.alpha = args[3];
          }
        } else if (args.length === 1) {
          var index = Number(args[0]);
          return Color2.parseIndex(index, index > Math.pow(2, 24) ? 3 : 4);
        }
      } else if (typeof args[0] === "string") {
        var match = null;
        if (typeof colorsNammed[args[0].toLowerCase()] === "string") {
          return Color2.parseHex(colorsNammed[args[0].toLowerCase()]);
        } else if ((match = args[0].match(/^(#|&h|0x)?(([a-f0-9]{3,4}){1,2})$/i)) !== null) {
          return Color2.parseHex(match[2]);
        } else if ((match = args[0].match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(\s*,\s*(\d*\.?\d+))?\s*\)$/i)) !== null) {
          var channels = [match[1], match[2], match[3], typeof match[5] !== "undefined" ? match[5] : 1];
          return Color2.fromRGB.apply(Color2, _toConsumableArray(channels.map(function(value) {
            return Number(value);
          })));
        } else if (args[0].match(/^(h(sl|wb)a?|lab|color|cmyk)\(/i)) {
          throw new Error("Color expression not implemented yet");
        }
      }
      throw new Error("Invalid color expression");
    }
  }, {
    key: "parseObject",
    value: function parseObject(object) {
      var color = new Color2();
      if (object === null || _typeof(object) !== "object") {
        return color;
      }
      if (Color2.isColor(object)) {
        return object.clone();
      }
      colorChannels.forEach(function(channel) {
        if (!Number.isNaN(object[channel])) {
          color[channel] = object[channel];
        }
      });
      return color;
    }
  }, {
    key: "parseHex",
    value: function parseHex(hex) {
      if (typeof hex !== "string") {
        throw new Error("Hex expression must be a string");
      }
      hex = hex.trim().replace(/^(0x|&h|#)/i, "");
      if (hex.length === 3 || hex.length === 4) {
        hex = hex.split("").map(function(c) {
          return c.repeat(2);
        }).join("");
      }
      if (!(hex.length === 6 || hex.length === 8)) {
        throw new Error("Incorrect Hex expression length");
      }
      var chans = hex.split(/(..)/).filter(function(value) {
        return value;
      }).map(function(value) {
        return Number.parseInt(value, 16);
      });
      if (typeof chans[3] === "number") {
        chans[3] /= 255;
      }
      return Color2.fromRGB.apply(Color2, _toConsumableArray(chans));
    }
  }, {
    key: "parseIndex",
    value: function parseIndex(value) {
      var channels = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
      var color = new Color2();
      for (var i = 0; i < 4; i++) {
        color[colorChannels[i]] = value >> (channels - i) * 8 && 255;
      }
      return color;
    }
  }, {
    key: "fromRGB",
    value: function fromRGB(red, green, blue) {
      var alpha = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
      if ([red, green, blue, alpha].some(function(arg) {
        return Number.isNaN(arg / 1);
      })) {
        throw new Error("Invalid arguments");
      }
      alpha *= 255;
      var color = new Color2();
      [red, green, blue, alpha].forEach(function(value, index) {
        color[colorChannels[index]] = value;
      });
      return color;
    }
  }, {
    key: "fromHSL",
    value: function fromHSL(hue, saturation, lightness) {
      var alpha = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
      if ([hue, saturation, lightness, alpha].some(function(arg) {
        return Number.isNaN(arg);
      })) {
        throw new Error("Invalid arguments");
      }
      while (hue < 0 && hue !== -Infinity) hue += 360;
      hue = hue % 360;
      saturation = Math.max(0, Math.min(1, saturation));
      lightness = Math.max(0, Math.min(1, lightness));
      alpha = Math.max(0, Math.min(1, alpha));
      var c = (1 - Math.abs(2 * lightness - 1)) * saturation;
      var x = c * (1 - Math.abs(hue / 60 % 2 - 1));
      var m = lightness - c / 2;
      var _ref4 = hue < 60 ? [c, x, 0] : hue < 120 ? [x, c, 0] : hue < 180 ? [0, c, x] : hue < 240 ? [0, x, c] : hue < 300 ? [x, 0, c] : [c, 0, x], _ref5 = _slicedToArray(_ref4, 3), r = _ref5[0], g = _ref5[1], b = _ref5[2];
      return Color2.fromRGB((r + m) * 255, (g + m) * 255, (b + m) * 255, alpha);
    }
  }, {
    key: "isColor",
    value: function isColor(arg) {
      return arg instanceof Color2;
    }
  }]);
  return Color2;
}(Symbol.toString);
var Color$1 = Color;
var cos30 = 0.86602540378;
var sin30 = 0.5;
var id = 0;
var script$3 = {
  name: "BColorpickerHSLRepresentationTriangle",
  props: {
    value: {
      type: Object,
      required: true,
      validator(value) {
        return typeof value.hue === "number" && typeof value.saturation === "number" && typeof value.lightness === "number";
      }
    },
    size: {
      type: Number,
      default: 200
    },
    thickness: {
      type: Number,
      default: 20
    }
  },
  emits: ["input"],
  data() {
    return {
      id: id++,
      hue: this.value.hue,
      saturation: this.value.saturation,
      lightness: this.value.lightness,
      captureMouse: false,
      captureType: "hue",
      clientOffset: {
        cx: -1,
        cy: -1,
        width: 0,
        height: 0
      },
      cos30,
      sin30,
      debounce: 0
    };
  },
  computed: {
    viewBox() {
      const { size } = this;
      return `0 0 ${size} ${size}`;
    },
    internalRadius() {
      return this.size / 2 - this.thickness;
    },
    haloPath() {
      const { size, thickness } = this;
      const radius = size / 2 - 2;
      const thicknessRadius = radius - thickness;
      const center = size / 2;
      return `M${center - radius} ${center}a${radius}  ${radius}  0 1 1 ${2 * radius} 0h${-thickness}a${-thicknessRadius}  ${thicknessRadius}  0 1 0 ${-2 * thicknessRadius} 0a${thicknessRadius}  ${thicknessRadius}  0 1 0 ${2 * thicknessRadius} 0h${thickness}a${radius}  ${radius}  0 1 1 ${-2 * radius} 0z`;
    },
    trianglePath() {
      const { size, thickness } = this;
      const radius = size - 4;
      const thicknessRadius = (radius - 2 * thickness) / 2;
      return `M0 ${-thicknessRadius}L${cos30 * thicknessRadius} ${sin30 * thicknessRadius}H${-cos30 * thicknessRadius}z`;
    }
  },
  watch: {
    captureMouse(newValue, oldValue) {
      if (oldValue === false && newValue !== false) {
        const rect = this.$el.getBoundingClientRect();
        this.clientOffset.cx = rect.x + rect.width / 2;
        this.clientOffset.cy = rect.y + rect.height / 2;
        this.clientOffset.width = rect.width;
        this.clientOffset.height = rect.height;
      }
    },
    value: {
      deep: true,
      handler(newColor) {
        const { hue, saturation, lightness } = newColor;
        window.clearTimeout(this.debounce);
        this.debounce = window.setTimeout(() => {
          if (lightness >= 0.03 && lightness <= 0.97 && saturation > 0) {
            this.hue = hue;
          }
          this.saturation = saturation;
          this.lightness = lightness;
        }, 200);
      }
    }
  },
  methods: {
    increaseHue(value = 1) {
      this.hue = (this.hue + value) % 360;
    },
    decreaseHue(value = 1) {
      this.hue = (360 + this.hue - value) % 360;
    },
    increaseSaturation(value = 0.01) {
      this.saturation = Math.min(1, Math.max(0, this.saturation + value));
      this.lightness = Math.min(
        0.5 + (1 - this.saturation) * 0.5,
        Math.max(
          0.5 - (1 - this.saturation) * 0.5,
          this.lightness
        )
      );
    },
    decreaseSaturation(value = 0.01) {
      this.saturation = Math.min(1, Math.max(0, this.saturation - value));
      this.lightness = Math.min(
        0.5 + (1 - this.saturation) * 0.5,
        Math.max(
          0.5 - (1 - this.saturation) * 0.5,
          this.lightness
        )
      );
    },
    increaseLightness(value = 0.01) {
      this.lightness = Math.min(
        0.5 + (1 - this.saturation) * 0.5,
        Math.max(
          0.5 - (1 - this.saturation) * 0.5,
          this.lightness + value
        )
      );
    },
    decreaseLightness(value = 0.01) {
      this.lightness = Math.min(
        0.5 + (1 - this.saturation) * 0.5,
        Math.max(
          0.5 - (1 - this.saturation) * 0.5,
          this.lightness - value
        )
      );
    },
    hueKeyPress(event) {
      let handled = false;
      switch (event.key) {
        case "ArrowRight":
        case "ArrowUp":
          this.increaseHue();
          handled = true;
          break;
        case "ArrowLeft":
        case "ArrowDown":
          this.decreaseHue();
          handled = true;
          break;
        case "Home":
          this.increaseHue(360 - this.hue);
          handled = true;
          break;
        case "End":
          this.decreaseHue(this.hue);
          handled = true;
          break;
        case "PageUp":
          this.increaseHue(60 - this.hue % 60);
          handled = true;
          break;
        case "PageDown":
          this.decreaseHue(60 + this.hue % 60);
          handled = true;
          break;
      }
      if (handled) {
        event.preventDefault();
        event.stopPropagation();
        this.emitColor();
      }
    },
    slKeyPress(event) {
      let handled = false;
      switch (event.key) {
        case "ArrowRight":
          this.decreaseLightness();
          handled = true;
          break;
        case "ArrowUp":
          this.increaseSaturation();
          handled = true;
          break;
        case "ArrowLeft":
          this.increaseLightness();
          handled = true;
          break;
        case "ArrowDown":
          this.decreaseSaturation();
          handled = true;
          break;
        case "Home":
          this.increaseLightness(1 - this.lightness);
          handled = true;
          break;
        case "End":
          this.decreaseLightness(this.lightness);
          handled = true;
          break;
        case "PageUp":
          this.increaseSaturation(1 - this.saturation);
          handled = true;
          break;
        case "PageDown":
          this.decreaseSaturation(this.saturation);
          handled = true;
          break;
      }
      if (handled) {
        event.preventDefault();
        event.stopPropagation();
        this.emitColor();
      }
    },
    clickHue(event) {
      this.startMouseCapture(event);
      this.trackMouse(event);
      this.stopMouseCapture(event);
      this.$refs.hueCursor.focus();
    },
    clickSL(event) {
      this.startMouseCapture(event);
      this.trackMouse(event);
      this.stopMouseCapture(event);
      this.$refs.slCursor.focus();
    },
    trackMouse(event) {
      if (this.captureMouse === false) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      let [mouseX, mouseY] = [0, 0];
      if (typeof event.touches !== "undefined" && event.touches.length) {
        [mouseX, mouseY] = [event.touches[0].clientX, event.touches[0].clientY];
      } else {
        [mouseX, mouseY] = [event.clientX, event.clientY];
      }
      const angle = Math.atan2(
        mouseY - this.clientOffset.cy,
        mouseX - this.clientOffset.cx
      );
      if (this.captureType === "sl") {
        const d = Math.sqrt(
          Math.pow(mouseX - this.clientOffset.cx, 2) + Math.pow(mouseY - this.clientOffset.cy, 2)
        );
        const ratio = this.size / this.clientOffset.width;
        const dx = d * Math.cos(angle - this.hue / 180 * Math.PI) * ratio;
        const dy = d * Math.sin(angle - this.hue / 180 * Math.PI) * ratio;
        const radius = this.internalRadius;
        const saturation = 1 - (Math.min(
          radius * sin30,
          Math.max(
            -radius,
            dy
          )
        ) + radius) / (radius + radius * sin30);
        const lightness = (Math.min(
          radius * cos30 * (1 - saturation),
          Math.max(
            -radius * cos30 * (1 - saturation),
            dx
          )
        ) + radius * cos30) / (radius * 2 * cos30);
        this.saturation = Math.round(saturation * 1e3) / 1e3;
        this.lightness = 1 - Math.round(lightness * 1e3) / 1e3;
      } else {
        this.hue = Math.round(angle / Math.PI * 180 + 90) % 360;
      }
      this.emitColor();
    },
    startMouseCapture(event) {
      event.stopPropagation();
      this.captureMouse = true;
      if (event.target.closest(".colorpicker-triangle-slider-sl") !== null) {
        this.captureType = "sl";
      } else {
        this.captureType = "hue";
      }
    },
    stopMouseCapture(event) {
      if (this.captureMouse !== false) {
        event.preventDefault();
        event.stopPropagation();
        this.$refs[this.captureType === "sl" ? "slCursor" : "hueCursor"].focus();
      }
      this.captureMouse = false;
    },
    emitColor() {
      const { hue, saturation, lightness } = this;
      this.$emit("input", Color$1.fromHSL(hue, saturation, lightness));
      window.clearTimeout(this.debounce);
    }
  },
  mounted() {
    window.addEventListener("mousemove", this.trackMouse);
    window.addEventListener("touchmove", this.trackMouse, { passive: false });
    window.addEventListener("mouseup", this.stopMouseCapture);
    window.addEventListener("touchend", this.stopMouseCapture);
  },
  beforeUnmount() {
    window.removeEventListener("mousemove", this.trackMouse);
    window.removeEventListener("touchmove", this.trackMouse);
    window.removeEventListener("mouseup", this.stopMouseCapture);
    window.removeEventListener("touchend", this.stopMouseCapture);
    clearTimeout(this.debounce);
  }
};
var _hoisted_1$3 = ["viewBox"];
var _hoisted_2$12 = ["id"];
var _hoisted_3$12 = createBaseVNode(
  "stop",
  {
    offset: "0%",
    "stop-color": "#fff"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_4$1 = createBaseVNode(
  "stop",
  {
    offset: "100%",
    "stop-color": "#000"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_52 = [
  _hoisted_3$12,
  _hoisted_4$1
];
var _hoisted_62 = ["id"];
var _hoisted_72 = ["stop-color"];
var _hoisted_82 = ["stop-color"];
var _hoisted_92 = ["id"];
var _hoisted_10 = ["d"];
var _hoisted_11 = { class: "colorpicker-triangle-slider-hue" };
var _hoisted_122 = ["width", "height", "clip-path"];
var _hoisted_132 = ["x", "height"];
var _hoisted_142 = ["aria-valuenow"];
var _hoisted_152 = ["d", "fill"];
var _hoisted_162 = ["d", "fill"];
var _hoisted_172 = ["x", "y"];
var _hoisted_182 = ["aria-datavalues"];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: $options.viewBox,
    class: "b-colorpicker-triangle"
  }, [
    createBaseVNode("defs", null, [
      createBaseVNode("linearGradient", {
        id: `cp-triangle-gradient-ligthness-${$data.id}`,
        x1: "0",
        y1: "0",
        x2: "1",
        y2: "0"
      }, [..._hoisted_52], 8, _hoisted_2$12),
      createBaseVNode("linearGradient", {
        id: `cp-triangle-gradient-saturation-${$data.id}`,
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "1"
      }, [
        createBaseVNode("stop", {
          offset: "0%",
          "stop-color": `hsl(${$data.hue}deg, 100%, 50%)`,
          "stop-opacity": "1"
        }, null, 8, _hoisted_72),
        createBaseVNode("stop", {
          offset: "100%",
          "stop-color": `hsl(${$data.hue}deg, 100%, 50%)`,
          "stop-opacity": "0"
        }, null, 8, _hoisted_82)
      ], 8, _hoisted_62),
      createBaseVNode("clipPath", {
        id: `cp-triangle-clip-${$data.id}`
      }, [
        createBaseVNode("path", { d: $options.haloPath }, null, 8, _hoisted_10)
      ], 8, _hoisted_92)
    ]),
    createBaseVNode("g", _hoisted_11, [
      (openBlock(), createElementBlock("foreignObject", {
        x: 0,
        y: 0,
        width: $props.size,
        height: $props.size,
        "clip-path": `url(#cp-triangle-clip-${$data.id})`
      }, [
        createBaseVNode(
          "div",
          {
            class: "colorpicker-triangle-hue",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHue && $options.clickHue(...args)),
            onMousedown: _cache[1] || (_cache[1] = withModifiers((...args) => $options.startMouseCapture && $options.startMouseCapture(...args), ["prevent"])),
            onTouchstart: _cache[2] || (_cache[2] = withModifiers((...args) => $options.startMouseCapture && $options.startMouseCapture(...args), ["prevent"]))
          },
          null,
          32
          /* HYDRATE_EVENTS */
        )
      ], 8, _hoisted_122)),
      createBaseVNode(
        "g",
        {
          style: normalizeStyle(`transform: rotate(${$data.hue}deg)`)
        },
        [
          (openBlock(), createElementBlock("foreignObject", {
            x: $props.size / 2 - 4,
            y: 0,
            width: "8",
            height: $props.thickness + 4
          }, [
            createBaseVNode("div", {
              ref: "hueCursor",
              class: "hue-range-thumb",
              style: normalizeStyle(`background-color: hsl(${$data.hue}deg, 100%, 50%)`),
              role: "slider",
              tabindex: "0",
              "aria-label": "Hue",
              "aria-valuemin": "0",
              "aria-valuenow": $data.hue,
              "aria-valuemax": "360",
              onClick: _cache[3] || (_cache[3] = (...args) => $options.clickHue && $options.clickHue(...args)),
              onKeydown: _cache[4] || (_cache[4] = (...args) => $options.hueKeyPress && $options.hueKeyPress(...args)),
              onMousedown: _cache[5] || (_cache[5] = withModifiers((...args) => $options.startMouseCapture && $options.startMouseCapture(...args), ["prevent"])),
              onTouchstart: _cache[6] || (_cache[6] = withModifiers((...args) => $options.startMouseCapture && $options.startMouseCapture(...args), ["prevent"]))
            }, null, 44, _hoisted_142)
          ], 8, _hoisted_132))
        ],
        4
        /* STYLE */
      )
    ]),
    createBaseVNode(
      "g",
      {
        class: "colorpicker-triangle-slider-sl",
        style: normalizeStyle(`transform: rotate(${$data.hue}deg) translate(50%, 50%)`),
        role: "graphics-datagroup",
        "aria-datascales": "lightness, saturation"
      },
      [
        createBaseVNode("path", {
          d: $options.trianglePath,
          fill: `url(#cp-triangle-gradient-ligthness-${$data.id})`
        }, null, 8, _hoisted_152),
        createBaseVNode("path", {
          d: $options.trianglePath,
          fill: `url(#cp-triangle-gradient-saturation-${$data.id})`,
          style: { "mix-blend-mode": "overlay" },
          onClick: _cache[7] || (_cache[7] = (...args) => $options.clickSL && $options.clickSL(...args)),
          onMousedown: _cache[8] || (_cache[8] = withModifiers((...args) => $options.startMouseCapture && $options.startMouseCapture(...args), ["prevent"])),
          onTouchstart: _cache[9] || (_cache[9] = withModifiers((...args) => $options.startMouseCapture && $options.startMouseCapture(...args), ["prevent"]))
        }, null, 40, _hoisted_162),
        (openBlock(), createElementBlock("foreignObject", {
          x: ($options.internalRadius - 3) * $data.cos30 * (-$data.lightness + 0.5) * 2 - 6,
          y: -$options.internalRadius + (1 - $data.saturation) * ($options.internalRadius - 3) * 1.5 - 3,
          width: "12",
          height: "12"
        }, [
          createBaseVNode("div", {
            ref: "slCursor",
            class: "sl-range-thumb",
            style: normalizeStyle({
              backgroundColor: `hsl(${$data.hue}deg, ${$data.saturation * 100}%, ${$data.lightness * 100}%)`
            }),
            tabindex: "0",
            "aria-datavalues": `${$data.saturation * 100}%, ${$data.lightness * 100}%`,
            onClick: _cache[10] || (_cache[10] = (...args) => $options.clickSL && $options.clickSL(...args)),
            onKeydown: _cache[11] || (_cache[11] = (...args) => $options.slKeyPress && $options.slKeyPress(...args)),
            onMousedown: _cache[12] || (_cache[12] = withModifiers((...args) => $options.startMouseCapture && $options.startMouseCapture(...args), ["prevent"])),
            onTouchstart: _cache[13] || (_cache[13] = withModifiers((...args) => $options.startMouseCapture && $options.startMouseCapture(...args), ["prevent"]))
          }, null, 44, _hoisted_182)
        ], 8, _hoisted_172))
      ],
      4
      /* STYLE */
    )
  ], 8, _hoisted_1$3);
}
script$3.render = render$3;
script$3.__file = "src/components/colorpicker/ColorpickerHSLRepresentationTriangle.vue";
var precision = (strs, ...values) => {
  const tmp = [];
  strs.forEach((str, i) => {
    tmp.push(str);
    if (values[i]) {
      tmp.push(
        Number.isNaN(values[i] / 1) ? values[i] : Math.round(values * 10) / 10
      );
    }
  });
  return tmp.join("");
};
var script$22 = {
  name: "BColorpickerHSLRepresentationSquare",
  props: {
    value: {
      type: Object,
      required: true,
      validator(value) {
        return typeof value.hue === "number" && typeof value.saturation === "number" && typeof value.lightness === "number";
      }
    },
    size: {
      type: Number,
      default: 200
    },
    thickness: {
      type: Number,
      default: 20
    }
  },
  emits: ["input"],
  data() {
    return {
      hue: this.value.hue,
      saturation: this.value.saturation,
      lightness: this.value.lightness,
      captureMouse: false,
      captureType: "hue",
      clientOffset: {
        cx: -1,
        cy: -1,
        width: 0,
        height: 0
      },
      debounce: 0
    };
  },
  computed: {
    hueThumbStyle() {
      const { hue, size, thickness } = this;
      const side = size - thickness;
      const offset = size / 2;
      const angle = (hue + 720 + 90) % 360 / 180 * Math.PI;
      const ciq = 1 / Math.cos(Math.PI / 4);
      const { x, y } = {
        x: -Math.min(1, Math.max(-1, ciq * Math.cos(angle))) / 2 * side + offset,
        y: -Math.min(1, Math.max(-1, ciq * Math.sin(angle))) / 2 * side + offset
      };
      return {
        background: `hsl(${hue}deg, 100%, 50%)`,
        left: precision`${x}px`,
        top: precision`${y}px`,
        width: precision`${thickness - 2}px`
      };
    },
    slThumbStyle() {
      let { hue, saturation, lightness } = this;
      saturation = Math.max(0, Math.min(1, saturation));
      lightness = Math.max(0, Math.min(1, lightness));
      return {
        background: `hsl(${hue}deg, ${saturation * 100}%, ${lightness * 100}%)`,
        left: `${saturation * 100}%`,
        top: `${(1 - lightness) * 100}%`
      };
    },
    SLBackground() {
      const { hue } = this;
      return `linear-gradient(90deg, hsl(${hue}deg, 0%, 50%), hsl(${hue}deg, 100%, 50%))`;
    }
  },
  watch: {
    captureMouse(newValue, oldValue) {
      if (oldValue === false && newValue !== false) {
        const rect = this.$el.getBoundingClientRect();
        this.clientOffset.cx = rect.x + rect.width / 2;
        this.clientOffset.cy = rect.y + rect.height / 2;
        this.clientOffset.width = rect.width;
        this.clientOffset.height = rect.height;
      }
    },
    value: {
      deep: true,
      handler(newColor) {
        const { hue, saturation, lightness } = newColor;
        window.clearTimeout(this.debounce);
        this.debounce = window.setTimeout(() => {
          this.hue = hue;
          this.saturation = saturation;
          this.lightness = lightness;
        }, 200);
      }
    }
  },
  methods: {
    increaseHue(value = 1) {
      this.hue = (this.hue + value) % 360;
    },
    decreaseHue(value = 1) {
      this.hue = (360 + this.hue - value) % 360;
    },
    increaseSaturation(value = 0.01) {
      this.saturation = Math.min(1, Math.max(0, this.saturation + value));
      this.lightness = Math.min(
        0.5 + (1 - this.saturation) * 0.5,
        Math.max(
          0.5 - (1 - this.saturation) * 0.5,
          this.lightness
        )
      );
    },
    decreaseSaturation(value = 0.01) {
      this.saturation = Math.min(1, Math.max(0, this.saturation - value));
      this.lightness = Math.min(
        0.5 + (1 - this.saturation) * 0.5,
        Math.max(
          0.5 - (1 - this.saturation) * 0.5,
          this.lightness
        )
      );
    },
    increaseLightness(value = 0.01) {
      this.lightness = Math.min(
        0.5 + (1 - this.saturation) * 0.5,
        Math.max(
          0.5 - (1 - this.saturation) * 0.5,
          this.lightness + value
        )
      );
    },
    decreaseLightness(value = 0.01) {
      this.lightness = Math.min(
        0.5 + (1 - this.saturation) * 0.5,
        Math.max(
          0.5 - (1 - this.saturation) * 0.5,
          this.lightness - value
        )
      );
    },
    hueKeyPress(event) {
      let handled = false;
      switch (event.key) {
        case "ArrowRight":
        case "ArrowUp":
          this.increaseHue();
          handled = true;
          break;
        case "ArrowLeft":
        case "ArrowDown":
          this.decreaseHue();
          handled = true;
          break;
        case "Home":
          this.increaseHue(360 - this.hue);
          handled = true;
          break;
        case "End":
          this.decreaseHue(this.hue);
          handled = true;
          break;
        case "PageUp":
          this.increaseHue(60 - this.hue % 60);
          handled = true;
          break;
        case "PageDown":
          this.decreaseHue(60 + this.hue % 60);
          handled = true;
          break;
      }
      if (handled) {
        event.preventDefault();
        event.stopPropagation();
        this.emitColor();
      }
    },
    slKeyPress(event) {
      let handled = false;
      switch (event.key) {
        case "ArrowRight":
          this.increaseSaturation();
          handled = true;
          break;
        case "ArrowUp":
          this.increaseLightness();
          handled = true;
          break;
        case "ArrowLeft":
          this.decreaseSaturation();
          handled = true;
          break;
        case "ArrowDown":
          this.decreaseLightness();
          handled = true;
          break;
        case "Home":
          this.increaseLightness(1 - this.lightness);
          handled = true;
          break;
        case "End":
          this.decreaseLightness(this.lightness);
          handled = true;
          break;
        case "PageUp":
          this.increaseSaturation(1 - this.saturation);
          handled = true;
          break;
        case "PageDown":
          this.decreaseSaturation(this.saturation);
          handled = true;
          break;
      }
      if (handled) {
        event.preventDefault();
        event.stopPropagation();
        this.emitColor();
      }
    },
    startMouseCapture(event) {
      event.stopPropagation();
      this.captureMouse = true;
      if (event.target.closest(".colorpicker-square-slider-sl") !== null) {
        this.captureType = "sl";
      } else {
        this.captureType = "hue";
      }
    },
    stopMouseCapture(event) {
      if (this.captureMouse !== false) {
        event.preventDefault();
        event.stopPropagation();
        this.$refs[this.captureType === "sl" ? "slCursor" : "hueCursor"].focus();
      }
      this.captureMouse = false;
    },
    clickHue(event) {
      this.startMouseCapture(event);
      this.trackMouse(event);
      this.stopMouseCapture(event);
      this.$refs.hueCursor.focus();
    },
    clickSL(event) {
      this.startMouseCapture(event);
      this.trackMouse(event);
      this.stopMouseCapture(event);
      this.$refs.slCursor.focus();
    },
    trackMouse(event) {
      if (this.captureMouse === false) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      let [mouseX, mouseY] = [0, 0];
      if (typeof event.touches !== "undefined" && event.touches.length) {
        [mouseX, mouseY] = [event.touches[0].clientX, event.touches[0].clientY];
      } else {
        [mouseX, mouseY] = [event.clientX, event.clientY];
      }
      const angle = Math.atan2(
        mouseY - this.clientOffset.cy,
        mouseX - this.clientOffset.cx
      );
      if (this.captureType === "sl") {
        const saturation = (mouseX - this.clientOffset.cx) / (this.clientOffset.width - this.thickness * 2) + 0.5;
        const lightness = (mouseY - this.clientOffset.cy) / (this.clientOffset.height - this.thickness * 2) + 0.5;
        this.saturation = Math.round(Math.min(1, Math.max(0, saturation)) * 1e3) / 1e3;
        this.lightness = 1 - Math.round(Math.min(1, Math.max(0, lightness)) * 1e3) / 1e3;
      } else {
        this.hue = Math.round(angle / Math.PI * 180 + 90) % 360;
      }
      this.emitColor();
    },
    emitColor() {
      const { hue, saturation, lightness } = this;
      this.$emit("input", Color$1.fromHSL(hue, saturation, lightness));
      window.clearTimeout(this.debounce);
    }
  },
  mounted() {
    window.addEventListener("mousemove", this.trackMouse);
    window.addEventListener("touchmove", this.trackMouse, { passive: false });
    window.addEventListener("mouseup", this.stopMouseCapture);
    window.addEventListener("touchend", this.stopMouseCapture);
  },
  beforeUnmount() {
    window.removeEventListener("mousemove", this.trackMouse);
    window.removeEventListener("touchmove", this.trackMouse);
    window.removeEventListener("mouseup", this.stopMouseCapture);
    window.removeEventListener("touchend", this.stopMouseCapture);
    clearTimeout(this.debounce);
  }
};
var _hoisted_1$22 = ["aria-datavalues"];
function render$22(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: "b-colorpicker-square",
      style: normalizeStyle({ width: `${$props.size}px` })
    },
    [
      createBaseVNode(
        "div",
        {
          class: "colorpicker-square-slider-hue",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHue && $options.clickHue(...args)),
          onMousedown: _cache[1] || (_cache[1] = withModifiers((...args) => $options.startMouseCapture && $options.startMouseCapture(...args), ["prevent"])),
          onTouchstart: _cache[2] || (_cache[2] = withModifiers((...args) => $options.startMouseCapture && $options.startMouseCapture(...args), ["prevent"]))
        },
        [
          createBaseVNode(
            "div",
            {
              ref: "hueCursor",
              role: "slider",
              class: "hue-range-thumb",
              tabindex: "0",
              "aria-label": "Hue",
              "aria-valuemin": "0",
              "aria-valuemax": "359",
              style: normalizeStyle($options.hueThumbStyle)
            },
            null,
            4
            /* STYLE */
          )
        ],
        32
        /* HYDRATE_EVENTS */
      ),
      createBaseVNode(
        "div",
        {
          class: "colorpicker-square-slider-sl",
          style: normalizeStyle({
            background: $options.SLBackground,
            margin: `${$props.thickness}px`
          }),
          "aria-datascales": "lightness, saturation",
          onClick: _cache[7] || (_cache[7] = (...args) => $options.clickSL && $options.clickSL(...args)),
          onMousedown: _cache[8] || (_cache[8] = withModifiers((...args) => $options.startMouseCapture && $options.startMouseCapture(...args), ["prevent"])),
          onTouchstart: _cache[9] || (_cache[9] = withModifiers((...args) => $options.startMouseCapture && $options.startMouseCapture(...args), ["prevent"]))
        },
        [
          createBaseVNode("div", {
            ref: "slCursor",
            role: "slider",
            class: "sl-range-thumb",
            tabindex: "0",
            "aria-datavalues": `${$data.saturation * 100}%, ${$data.lightness * 100}%`,
            style: normalizeStyle($options.slThumbStyle),
            onClick: _cache[3] || (_cache[3] = (...args) => $options.clickSL && $options.clickSL(...args)),
            onKeydown: _cache[4] || (_cache[4] = (...args) => $options.slKeyPress && $options.slKeyPress(...args)),
            onMousedown: _cache[5] || (_cache[5] = withModifiers((...args) => $options.startMouseCapture && $options.startMouseCapture(...args), ["prevent"])),
            onTouchstart: _cache[6] || (_cache[6] = withModifiers((...args) => $options.startMouseCapture && $options.startMouseCapture(...args), ["prevent"]))
          }, null, 44, _hoisted_1$22)
        ],
        36
        /* STYLE, HYDRATE_EVENTS */
      )
    ],
    4
    /* STYLE */
  );
}
script$22.render = render$22;
script$22.__file = "src/components/colorpicker/ColorpickerHSLRepresentationSquare.vue";
var script$16 = {
  name: "BColorpickerAlphaSlider",
  components: {
    [script15.name]: script15
  },
  props: {
    value: {
      type: Number,
      validator: (value) => value >= 0 && value < 256
    },
    color: [String, Object]
  },
  emits: ["input"],
  data() {
    const color = Color$1.parse(this.color);
    color.alpha = 0;
    return {
      startColor: color.toString("hex"),
      endColor: color.toString("hexa"),
      percent: Math.round((1 - this.value / 255) * 100),
      captureMouse: false,
      clientOffset: {
        cx: -1,
        cy: -1,
        width: 0,
        height: 0
      }
    };
  },
  computed: {
    style() {
      return {
        backgroundImage: `linear-gradient(90deg, ${this.startColor} 0%, ${this.endColor} 100%),
                    linear-gradient(45deg, #c7c7c7 25%, transparent 25%, transparent 75%, #c7c7c7 75%, #c7c7c7),
                    linear-gradient(45deg, #c7c7c7 25%, transparent 25%, transparent 75%, #c7c7c7 75%, #c7c7c7)`,
        backgroundSize: "100% 100%, 1em 1em, 1em 1em",
        backgroundPosition: "0 0, .5em .5em, 0 0"
      };
    }
  },
  watch: {
    value(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.percent = Math.round((1 - newValue / 255) * 100);
      }
    },
    color(newColor) {
      const color = Color$1.parse(newColor);
      color.alpha = 0;
      this.startColor = color.toString("hex");
      this.endColor = color.toString("hexa");
    },
    captureMouse(newValue, oldValue) {
      if (oldValue === false && newValue !== false) {
        const rect = this.$el.getBoundingClientRect();
        this.clientOffset.cx = rect.x + rect.width / 2;
        this.clientOffset.cy = rect.y + rect.height / 2;
        this.clientOffset.width = rect.width;
        this.clientOffset.height = rect.height;
      }
    }
  },
  methods: {
    increaseAlpha(value = 1) {
      this.percent = Math.max(0, Math.min(100, this.percent + value));
    },
    decreaseAlpha(value = 0.01) {
      this.increaseAlpha(-value);
    },
    alphaKeyPress(event) {
      let handled = false;
      switch (event.key) {
        case "ArrowRight":
        case "ArrowUp":
          this.increaseAlpha();
          handled = true;
          break;
        case "ArrowLeft":
        case "ArrowDown":
          this.decreaseAlpha();
          handled = true;
          break;
        case "Home":
          this.decreaseAlpha(this.percent);
          handled = true;
          break;
        case "End":
          this.increaseAlpha(100 - this.percent);
          handled = true;
          break;
        case "PageUp":
          this.increaseAlpha(10 - this.percent % 10);
          handled = true;
          break;
        case "PageDown":
          this.decreaseAlpha(this.percent % 10);
          handled = true;
          break;
      }
      if (handled) {
        event.preventDefault();
        event.stopPropagation();
        this.emitAlpha();
      }
    },
    clickAlpha(event) {
      this.startMouseCapture(event);
      this.trackMouse(event);
      this.stopMouseCapture(event);
      this.$refs.alphaCursor.focus();
    },
    startMouseCapture(event) {
      event.stopPropagation();
      this.captureMouse = true;
    },
    trackMouse(event) {
      if (this.captureMouse === false) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      let [mouseX] = [0, 0];
      if (typeof event.touches !== "undefined" && event.touches.length) {
        [mouseX] = [event.touches[0].clientX];
      } else {
        [mouseX] = [event.clientX];
      }
      const ratio = 0.5 + (this.clientOffset.cx - mouseX) / this.clientOffset.width;
      this.percent = Math.round(100 - Math.max(0, Math.min(1, ratio)) * 100);
      this.emitAlpha();
    },
    stopMouseCapture(event) {
      if (this.captureMouse !== false) {
        event.preventDefault();
        event.stopPropagation();
        this.$refs.alphaCursor.focus();
      }
      this.captureMouse = false;
    },
    emitAlpha() {
      this.$emit("input", (1 - this.percent / 100) * 255);
    }
  },
  mounted() {
    window.addEventListener("mousemove", this.trackMouse);
    window.addEventListener("touchmove", this.trackMouse, { passive: false });
    window.addEventListener("mouseup", this.stopMouseCapture);
    window.addEventListener("touchend", this.stopMouseCapture);
  },
  beforeUnmount() {
    window.removeEventListener("mousemove", this.trackMouse);
    window.removeEventListener("touchmove", this.trackMouse);
    window.removeEventListener("mouseup", this.stopMouseCapture);
    window.removeEventListener("touchend", this.stopMouseCapture);
  }
};
var _hoisted_1$14 = ["aria-valuenow"];
function render$15(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_tooltip = resolveComponent("b-tooltip");
  return openBlock(), createElementBlock(
    "div",
    {
      class: "b-colorpicker-alpha-slider",
      style: normalizeStyle($options.style),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickAlpha && $options.clickAlpha(...args)),
      onKeydown: _cache[1] || (_cache[1] = (...args) => $options.alphaKeyPress && $options.alphaKeyPress(...args)),
      onMousedown: _cache[2] || (_cache[2] = (...args) => $options.startMouseCapture && $options.startMouseCapture(...args)),
      onTouchstart: _cache[3] || (_cache[3] = withModifiers((...args) => $options.startMouseCapture && $options.startMouseCapture(...args), ["prevent"]))
    },
    [
      createBaseVNode("div", {
        ref: "alphaCursor",
        role: "slider",
        class: "alpha-range-thumb",
        tabindex: "0",
        "aria-label": "Tranparency",
        "aria-valuemin": "0",
        "aria-valuenow": $data.percent,
        "aria-valuemax": "100",
        style: normalizeStyle({ left: `${$data.percent}%` })
      }, [
        createVNode(_component_b_tooltip, {
          label: `${$data.percent}%`,
          always: $data.captureMouse
        }, {
          default: withCtx(() => [
            createTextVNode("   ")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["label", "always"])
      ], 12, _hoisted_1$14)
    ],
    36
    /* STYLE, HYDRATE_EVENTS */
  );
}
script$16.render = render$15;
script$16.__file = "src/components/colorpicker/ColorpickerAlphaSlider.vue";
var defaultColorFormatter = (color, vm) => {
  if (color.alpha < 1) {
    return color.toString("hexa");
  } else {
    return color.toString("hex");
  }
};
var defaultColorParser = (color, vm) => {
  return Color$1.parse(color);
};
var script16 = {
  name: "BColorpicker",
  components: {
    [script$3.name]: script$3,
    [script$22.name]: script$22,
    [script$16.name]: script$16,
    [script2.name]: script2,
    [script12.name]: script12,
    [script14.name]: script14,
    [script.name]: script,
    [script$13.name]: script$13,
    [script11.name]: script11
  },
  mixins: [FormElementMixin],
  inheritAttrs: false,
  provide() {
    return {
      $colorpicker: this
    };
  },
  props: {
    modelValue: {
      type: [String, Object],
      validator(value) {
        return typeof value === "string" || typeof value === "object" && typeof value.red === "number" && typeof value.green === "number" && typeof value.blue === "number";
      }
    },
    representation: {
      type: String,
      default: "triangle",
      value(value) {
        return ["triangle", "square"].some((r) => r === value);
      }
    },
    inline: Boolean,
    disabled: Boolean,
    horizontalColorPicker: {
      type: Boolean,
      default: false
    },
    colorFormatter: {
      type: Function,
      default: (color, vm) => {
        if (typeof config.defaultColorFormatter === "function") {
          return config.defaultColorFormatter(color);
        } else {
          return defaultColorFormatter(color);
        }
      }
    },
    colorParser: {
      type: Function,
      default: (color, vm) => {
        if (typeof config.defaultColorParser === "function") {
          return config.defaultColorParser(color);
        } else {
          return defaultColorParser(color);
        }
      }
    },
    alpha: {
      type: Boolean,
      default: false
    },
    expanded: Boolean,
    position: String,
    mobileModal: {
      type: Boolean,
      default: () => config.defaultDatepickerMobileModal
    },
    focusable: {
      type: Boolean,
      default: true
    },
    trapFocus: {
      type: Boolean,
      default: () => config.defaultTrapFocus
    },
    appendToBody: Boolean
  },
  emits: ["active-change", "update:modelValue"],
  data() {
    return {
      color: this.parseColor(this.modelValue)
    };
  },
  computed: {
    computedValue: {
      set(value) {
        this.color = this.parseColor(value);
      },
      get() {
        return this.color;
      }
    },
    background() {
      if (this.alpha) {
        return `linear-gradient(
                    45deg,
                    ${this.computedValue.toString("hex")} 50%,
                    ${this.computedValue.toString("hexa")} 50%
                )`;
      } else {
        const hex = this.computedValue.toString("hex");
        return `linear-gradient(
                    45deg,
                    ${hex} 50%,
                    ${hex} 50%
                )`;
      }
    },
    triggerStyle() {
      const { red, green, blue } = this.computedValue;
      const light = red * 0.299 + green * 0.587 + blue * 0.114 > 186;
      return {
        backgroundColor: "#ffffff",
        backgroundImage: `
                    ${this.background},
                    linear-gradient(45deg, #c7c7c7 25%, transparent 25%, transparent 75%, #c7c7c7 75%, #c7c7c7),
                    linear-gradient(45deg, #c7c7c7 25%, transparent 25%, transparent 75%, #c7c7c7 75%, #c7c7c7)
                `,
        backgroundSize: "100% 100%, 16px 16px, 16px 16px",
        backgroundPosition: "0 0, 8px 8px, 0 0",
        color: light ? "#000000" : "#FFFFFF",
        textShadow: `0 0 2px ${light ? "#FFFFFFAA" : "#000000AA"}`
      };
    },
    isMobile() {
      return this.mobileNative && isMobile.any();
    },
    ariaRole() {
      if (!this.inline) {
        return "dialog";
      } else {
        return void 0;
      }
    }
  },
  watch: {
    modelValue(value) {
      this.computedValue = new Color$1(value);
    }
  },
  methods: {
    parseColor(color) {
      try {
        return this.colorParser(color);
      } catch (e) {
        return new Color$1();
      }
    },
    updateColor(value) {
      value.alpha = this.computedValue.alpha;
      this.computedValue = value;
      this.$emit("update:modelValue", value);
    },
    updateAlpha(alpha) {
      this.computedValue.alpha = alpha;
      this.$emit("update:modelValue", this.computedValue);
    },
    updateRGB() {
      this.$emit("update:modelValue", this.computedValue);
    },
    /*
     * Format color into string
     */
    formatValue(value) {
      return value ? this.colorFormatter(value, this) : null;
    },
    /*
     * Toggle datepicker
     */
    togglePicker(active) {
      if (this.$refs.dropdown) {
        const isActive2 = typeof active === "boolean" ? active : !this.$refs.dropdown.isActive;
        if (isActive2) {
          this.$refs.dropdown.isActive = isActive2;
        } else if (this.closeOnClick) {
          this.$refs.dropdown.isActive = isActive2;
        }
      }
    },
    /*
     * Call default onFocus method and show datepicker
     */
    handleOnFocus(event) {
      this.onFocus(event);
      if (this.openOnFocus) {
        this.togglePicker(true);
      }
    },
    /*
     * Toggle dropdown
     */
    toggle() {
      if (this.mobileNative && this.isMobile) {
        const input = this.$refs.input.$refs.input;
        input.focus();
        input.click();
        return;
      }
      this.$refs.dropdown.toggle();
    },
    /*
     * Avoid dropdown toggle when is already visible
     */
    onInputClick(event) {
      if (this.$refs.dropdown.isActive) {
        event.stopPropagation();
      }
    },
    /**
     * Keypress event that is bound to the document.
     */
    keyPress({ key }) {
      if (this.$refs.dropdown && this.$refs.dropdown.isActive && (key === "Escape" || key === "Esc")) {
        this.togglePicker(false);
      }
    },
    /**
     * Emit 'blur' event on dropdown is not active (closed)
     */
    onActiveChange(value) {
      if (!value) {
        this.onBlur();
      }
      this.$emit("active-change", value);
    }
  }
};
var _hoisted_112 = { class: "color-name" };
var _hoisted_212 = { class: "colorpicker-header" };
var _hoisted_38 = { class: "colorpicker-content" };
var _hoisted_45 = { class: "colorpicker-footer" };
function render15(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_button = resolveComponent("b-button");
  const _component_b_colorpicker_h_s_l_representation_square = resolveComponent("b-colorpicker-h-s-l-representation-square");
  const _component_b_colorpicker_h_s_l_representation_triangle = resolveComponent("b-colorpicker-h-s-l-representation-triangle");
  const _component_b_colorpicker_alpha_slider = resolveComponent("b-colorpicker-alpha-slider");
  const _component_b_input = resolveComponent("b-input");
  const _component_b_field = resolveComponent("b-field");
  const _component_b_dropdown_item = resolveComponent("b-dropdown-item");
  const _component_b_dropdown = resolveComponent("b-dropdown");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["colorpicker control", [_ctx.size, { "is-expanded": $props.expanded }]])
    },
    [
      !$options.isMobile || $props.inline ? (openBlock(), createBlock(_component_b_dropdown, {
        key: 0,
        ref: "dropdown",
        position: $props.position,
        expanded: $props.expanded,
        disabled: $props.disabled,
        inline: $props.inline,
        "mobile-modal": $props.mobileModal,
        "trap-focus": $props.trapFocus,
        "aria-role": $options.ariaRole,
        "append-to-body": $props.appendToBody,
        "append-to-body-copy-parent": "",
        onActiveChange: $options.onActiveChange
      }, createSlots({
        default: withCtx(() => [
          createVNode(_component_b_dropdown_item, {
            disabled: $props.disabled,
            focusable: $props.focusable,
            custom: "",
            class: normalizeClass({ "dropdown-horizontal-colorpicker": $props.horizontalColorPicker })
          }, {
            default: withCtx(() => [
              createBaseVNode("div", null, [
                createBaseVNode("header", _hoisted_212, [
                  _ctx.$slots.header !== void 0 && _ctx.$slots.header.length ? renderSlot(_ctx.$slots, "header", { key: 0 }) : createCommentVNode("v-if", true)
                ]),
                createBaseVNode("div", _hoisted_38, [
                  $props.representation === "square" ? (openBlock(), createBlock(_component_b_colorpicker_h_s_l_representation_square, {
                    key: 0,
                    value: $options.computedValue,
                    onInput: $options.updateColor
                  }, null, 8, ["value", "onInput"])) : (openBlock(), createBlock(_component_b_colorpicker_h_s_l_representation_triangle, {
                    key: 1,
                    value: $options.computedValue,
                    onInput: $options.updateColor
                  }, null, 8, ["value", "onInput"]))
                ])
              ]),
              createBaseVNode("footer", _hoisted_45, [
                $props.alpha ? (openBlock(), createBlock(_component_b_colorpicker_alpha_slider, {
                  key: 0,
                  value: $options.computedValue.alpha,
                  onInput: $options.updateAlpha,
                  color: $options.computedValue
                }, null, 8, ["value", "onInput", "color"])) : createCommentVNode("v-if", true),
                renderSlot(_ctx.$slots, "footer", { color: $options.computedValue }, () => [
                  createVNode(_component_b_field, {
                    class: "colorpicker-fields",
                    grouped: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_b_field, {
                        horizontal: "",
                        label: "R"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_b_input, {
                            type: "number",
                            modelValue: $options.computedValue.red,
                            "onUpdate:modelValue": [
                              _cache[0] || (_cache[0] = ($event) => $options.computedValue.red = $event),
                              $options.updateRGB
                            ],
                            modelModifiers: { number: true },
                            size: "is-small",
                            "aria-label": "Red"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      createVNode(_component_b_field, {
                        horizontal: "",
                        label: "G"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_b_input, {
                            type: "number",
                            modelValue: $options.computedValue.green,
                            "onUpdate:modelValue": [
                              _cache[1] || (_cache[1] = ($event) => $options.computedValue.green = $event),
                              $options.updateRGB
                            ],
                            modelModifiers: { number: true },
                            size: "is-small",
                            "aria-label": "Green"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      createVNode(_component_b_field, {
                        horizontal: "",
                        label: "B"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_b_input, {
                            type: "number",
                            modelValue: $options.computedValue.blue,
                            "onUpdate:modelValue": [
                              _cache[2] || (_cache[2] = ($event) => $options.computedValue.blue = $event),
                              $options.updateRGB
                            ],
                            modelModifiers: { number: true },
                            size: "is-small",
                            "aria-label": "Blue"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ])
              ])
            ]),
            _: 3
            /* FORWARDED */
          }, 8, ["disabled", "focusable", "class"])
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        !$props.inline ? {
          name: "trigger",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "trigger", {}, () => [
              createVNode(_component_b_button, {
                style: normalizeStyle($options.triggerStyle),
                expanded: $props.expanded,
                disabled: $props.disabled
              }, {
                default: withCtx(() => [
                  createBaseVNode(
                    "span",
                    _hoisted_112,
                    toDisplayString($props.colorFormatter($options.computedValue)),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["style", "expanded", "disabled"])
            ])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["position", "expanded", "disabled", "inline", "mobile-modal", "trap-focus", "aria-role", "append-to-body", "onActiveChange"])) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
script16.render = render15;
script16.__file = "src/components/colorpicker/Colorpicker.vue";
var Plugin8 = {
  install: function install8(Vue) {
    registerComponent(Vue, script16);
  }
};
use(Plugin8);

// node_modules/buefy/dist/esm/Datepicker-r7KMGxsC.js
var script$32 = {
  name: "BDatepickerTableRow",
  inject: {
    $datepicker: { name: "$datepicker", default: false }
  },
  props: {
    selectedDate: {
      type: [Date, Array]
    },
    hoveredDateRange: Array,
    day: {
      type: Number
    },
    week: {
      type: Array,
      required: true
    },
    month: {
      type: Number,
      required: true
    },
    minDate: Date,
    maxDate: Date,
    disabled: Boolean,
    unselectableDates: [Array, Function],
    unselectableDaysOfWeek: Array,
    selectableDates: [Array, Function],
    events: Array,
    indicators: String,
    dateCreator: Function,
    nearbyMonthDays: Boolean,
    nearbySelectableMonthDays: Boolean,
    showWeekNumber: Boolean,
    weekNumberClickable: Boolean,
    range: Boolean,
    multiple: Boolean,
    rulesForFirstWeek: Number,
    firstDayOfWeek: Number
  },
  emits: ["change-focus", "rangeHoverEndDate", "select"],
  watch: {
    day(day) {
      const refName = `day-${this.month}-${day}`;
      this.$nextTick(() => {
        let cell;
        if (Array.isArray(this.$refs[refName])) {
          cell = this.$refs[refName][0];
        } else {
          cell = this.$refs[refName];
        }
        if (cell) {
          cell.focus();
        }
      });
    }
  },
  methods: {
    firstWeekOffset(year, dow, doy) {
      const fwd = 7 + dow - doy;
      const firstJanuary = new Date(year, 0, fwd);
      const fwdlw = (7 + firstJanuary.getDay() - dow) % 7;
      return -fwdlw + fwd - 1;
    },
    daysInYear(year) {
      return this.isLeapYear(year) ? 366 : 365;
    },
    isLeapYear(year) {
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },
    getSetDayOfYear(input) {
      return Math.round((input - new Date(input.getFullYear(), 0, 1)) / 864e5) + 1;
    },
    weeksInYear(year, dow, doy) {
      const weekOffset = this.firstWeekOffset(year, dow, doy);
      const weekOffsetNext = this.firstWeekOffset(year + 1, dow, doy);
      return (this.daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    },
    getWeekNumber(mom) {
      const dow = this.firstDayOfWeek;
      const doy = this.rulesForFirstWeek;
      const weekOffset = this.firstWeekOffset(mom.getFullYear(), dow, doy);
      const week = Math.floor((this.getSetDayOfYear(mom) - weekOffset - 1) / 7) + 1;
      let resWeek;
      let resYear;
      if (week < 1) {
        resYear = mom.getFullYear() - 1;
        resWeek = week + this.weeksInYear(resYear, dow, doy);
      } else if (week > this.weeksInYear(mom.getFullYear(), dow, doy)) {
        resWeek = week - this.weeksInYear(mom.getFullYear(), dow, doy);
        resYear = mom.getFullYear() + 1;
      } else {
        resYear = mom.getFullYear();
        resWeek = week;
      }
      return { week: resWeek, year: resYear };
    },
    clickWeekNumber(weekData) {
      if (this.weekNumberClickable) {
        this.$datepicker.$emit("week-number-click", weekData.week, weekData.year);
      }
    },
    /*
     * Check that selected day is within earliest/latest params and
     * is within this month
     */
    selectableDate(day) {
      const validity = [];
      if (this.minDate) {
        validity.push(day >= this.minDate);
      }
      if (this.maxDate) {
        validity.push(day <= this.maxDate);
      }
      if (this.nearbyMonthDays && !this.nearbySelectableMonthDays) {
        validity.push(day.getMonth() === this.month);
      }
      if (this.selectableDates) {
        if (typeof this.selectableDates === "function") {
          if (this.selectableDates(day)) {
            return true;
          } else {
            validity.push(false);
          }
        } else {
          for (let i = 0; i < this.selectableDates.length; i++) {
            const enabledDate = this.selectableDates[i];
            if (day.getDate() === enabledDate.getDate() && day.getFullYear() === enabledDate.getFullYear() && day.getMonth() === enabledDate.getMonth()) {
              return true;
            } else {
              validity.push(false);
            }
          }
        }
      }
      if (this.unselectableDates) {
        if (typeof this.unselectableDates === "function") {
          validity.push(!this.unselectableDates(day));
        } else {
          for (let i = 0; i < this.unselectableDates.length; i++) {
            const disabledDate = this.unselectableDates[i];
            validity.push(
              day.getDate() !== disabledDate.getDate() || day.getFullYear() !== disabledDate.getFullYear() || day.getMonth() !== disabledDate.getMonth()
            );
          }
        }
      }
      if (this.unselectableDaysOfWeek) {
        for (let i = 0; i < this.unselectableDaysOfWeek.length; i++) {
          const dayOfWeek = this.unselectableDaysOfWeek[i];
          validity.push(day.getDay() !== dayOfWeek);
        }
      }
      return validity.indexOf(false) < 0;
    },
    /*
    * Emit select event with chosen date as payload
    */
    emitChosenDate(day) {
      if (this.disabled) return;
      if (this.selectableDate(day)) {
        this.$emit("select", day);
      }
    },
    eventsDateMatch(day) {
      if (!this.events || !this.events.length) return false;
      const dayEvents = [];
      for (let i = 0; i < this.events.length; i++) {
        if (this.events[i].date.getDay() === day.getDay()) {
          dayEvents.push(this.events[i]);
        }
      }
      if (!dayEvents.length) {
        return false;
      }
      return dayEvents;
    },
    /*
    * Build classObject for cell using validations
    */
    classObject(day) {
      function dateMatch(dateOne, dateTwo, multiple) {
        if (!dateOne || !dateTwo || multiple) {
          return false;
        }
        if (Array.isArray(dateTwo)) {
          return dateTwo.some((date) => dateOne.getDate() === date.getDate() && dateOne.getFullYear() === date.getFullYear() && dateOne.getMonth() === date.getMonth());
        }
        return dateOne.getDate() === dateTwo.getDate() && dateOne.getFullYear() === dateTwo.getFullYear() && dateOne.getMonth() === dateTwo.getMonth();
      }
      function dateWithin(dateOne, dates, multiple) {
        if (!Array.isArray(dates) || multiple) {
          return false;
        }
        return dateOne > dates[0] && dateOne < dates[1];
      }
      return {
        "is-selected": dateMatch(day, this.selectedDate) || dateWithin(day, this.selectedDate, this.multiple),
        "is-first-selected": dateMatch(
          day,
          Array.isArray(this.selectedDate) && this.selectedDate[0],
          this.multiple
        ),
        "is-within-selected": dateWithin(day, this.selectedDate, this.multiple),
        "is-last-selected": dateMatch(
          day,
          Array.isArray(this.selectedDate) && this.selectedDate[1],
          this.multiple
        ),
        "is-within-hovered-range": this.hoveredDateRange && this.hoveredDateRange.length === 2 && (dateMatch(day, this.hoveredDateRange) || dateWithin(day, this.hoveredDateRange)),
        "is-first-hovered": dateMatch(
          day,
          Array.isArray(this.hoveredDateRange) && this.hoveredDateRange[0]
        ),
        "is-within-hovered": dateWithin(day, this.hoveredDateRange),
        "is-last-hovered": dateMatch(
          day,
          Array.isArray(this.hoveredDateRange) && this.hoveredDateRange[1]
        ),
        "is-today": dateMatch(day, this.dateCreator()),
        "is-selectable": this.selectableDate(day) && !this.disabled,
        "is-unselectable": !this.selectableDate(day) || this.disabled,
        "is-invisible": !this.nearbyMonthDays && day.getMonth() !== this.month,
        "is-nearby": this.nearbySelectableMonthDays && day.getMonth() !== this.month,
        "has-event": this.eventsDateMatch(day),
        [this.indicators]: this.eventsDateMatch(day)
      };
    },
    setRangeHoverEndDate(day) {
      if (this.range) {
        this.$emit("rangeHoverEndDate", day);
      }
    },
    manageKeydown(event, weekDay) {
      const { key } = event;
      let preventDefault = true;
      switch (key) {
        case "Tab": {
          preventDefault = false;
          break;
        }
        case " ":
        case "Space":
        case "Spacebar":
        case "Enter": {
          this.emitChosenDate(weekDay);
          break;
        }
        case "ArrowLeft":
        case "Left": {
          this.changeFocus(weekDay, -1);
          break;
        }
        case "ArrowRight":
        case "Right": {
          this.changeFocus(weekDay, 1);
          break;
        }
        case "ArrowUp":
        case "Up": {
          this.changeFocus(weekDay, -7);
          break;
        }
        case "ArrowDown":
        case "Down": {
          this.changeFocus(weekDay, 7);
          break;
        }
      }
      if (preventDefault) {
        event.preventDefault();
      }
    },
    changeFocus(day, inc) {
      const nextDay = new Date(day.getTime());
      nextDay.setDate(day.getDate() + inc);
      while ((!this.minDate || nextDay > this.minDate) && (!this.maxDate || nextDay < this.maxDate) && !this.selectableDate(nextDay)) {
        nextDay.setDate(nextDay.getDate() + Math.sign(inc));
      }
      this.setRangeHoverEndDate(nextDay);
      this.$emit("change-focus", nextDay);
    }
  }
};
var _hoisted_1$32 = { class: "datepicker-row" };
var _hoisted_2$3 = ["disabled", "onClick", "onMouseenter", "onKeydown", "tabindex"];
var _hoisted_3$2 = {
  key: 0,
  class: "events"
};
var _hoisted_4$2 = {
  key: 0,
  class: "events"
};
function render$32(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$32, [
    $props.showWeekNumber ? (openBlock(), createElementBlock(
      "a",
      {
        key: 0,
        class: normalizeClass(["datepicker-cell is-week-number", { "is-clickable": $props.weekNumberClickable }]),
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.clickWeekNumber($options.getWeekNumber($props.week[6])), ["prevent"]))
      },
      [
        createBaseVNode(
          "span",
          null,
          toDisplayString($options.getWeekNumber($props.week[6]).week),
          1
          /* TEXT */
        )
      ],
      2
      /* CLASS */
    )) : createCommentVNode("v-if", true),
    (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList($props.week, (weekDay, index) => {
        return openBlock(), createElementBlock(
          Fragment,
          { key: index },
          [
            $options.selectableDate(weekDay) && !$props.disabled ? (openBlock(), createElementBlock("a", {
              key: 0,
              ref_for: true,
              ref: `day-${weekDay.getMonth()}-${weekDay.getDate()}`,
              class: normalizeClass([$options.classObject(weekDay), "datepicker-cell"]),
              role: "button",
              href: "#",
              disabled: $props.disabled || void 0,
              onClick: withModifiers(($event) => $options.emitChosenDate(weekDay), ["prevent"]),
              onMouseenter: ($event) => $options.setRangeHoverEndDate(weekDay),
              onKeydown: ($event) => $options.manageKeydown($event, weekDay),
              tabindex: $props.day === weekDay.getDate() && $props.month === weekDay.getMonth() ? null : -1
            }, [
              createBaseVNode(
                "span",
                null,
                toDisplayString(weekDay.getDate()),
                1
                /* TEXT */
              ),
              $options.eventsDateMatch(weekDay) ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($options.eventsDateMatch(weekDay), (event, evIdx) => {
                    return openBlock(), createElementBlock(
                      "div",
                      {
                        class: normalizeClass(["event", event.type]),
                        key: evIdx
                      },
                      null,
                      2
                      /* CLASS */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : createCommentVNode("v-if", true)
            ], 42, _hoisted_2$3)) : (openBlock(), createElementBlock(
              "div",
              {
                key: 1,
                class: normalizeClass([$options.classObject(weekDay), "datepicker-cell"])
              },
              [
                createBaseVNode(
                  "span",
                  null,
                  toDisplayString(weekDay.getDate()),
                  1
                  /* TEXT */
                ),
                $options.eventsDateMatch(weekDay) ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList($options.eventsDateMatch(weekDay), (event, evIdx) => {
                      return openBlock(), createElementBlock(
                        "div",
                        {
                          class: normalizeClass(["event", event.type]),
                          key: evIdx
                        },
                        null,
                        2
                        /* CLASS */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            ))
          ],
          64
          /* STABLE_FRAGMENT */
        );
      }),
      128
      /* KEYED_FRAGMENT */
    ))
  ]);
}
script$32.render = render$32;
script$32.__file = "src/components/datepicker/DatepickerTableRow.vue";
var script$23 = {
  name: "BDatepickerTable",
  components: {
    [script$32.name]: script$32
  },
  props: {
    modelValue: {
      type: [Date, Array]
    },
    dayNames: Array,
    monthNames: Array,
    firstDayOfWeek: Number,
    events: Array,
    indicators: String,
    minDate: Date,
    maxDate: Date,
    focused: Object,
    disabled: Boolean,
    dateCreator: Function,
    unselectableDates: [Array, Function],
    unselectableDaysOfWeek: Array,
    selectableDates: [Array, Function],
    nearbyMonthDays: Boolean,
    nearbySelectableMonthDays: Boolean,
    showWeekNumber: Boolean,
    weekNumberClickable: Boolean,
    rulesForFirstWeek: Number,
    range: Boolean,
    multiple: Boolean
  },
  emits: ["range-end", "range-start", "update:focused", "update:modelValue"],
  data() {
    return {
      selectedBeginDate: void 0,
      selectedEndDate: void 0,
      hoveredEndDate: void 0
    };
  },
  computed: {
    multipleSelectedDates: {
      get() {
        return this.multiple && this.modelValue ? this.modelValue : [];
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    },
    visibleDayNames() {
      const visibleDayNames = [];
      let index = this.firstDayOfWeek;
      while (visibleDayNames.length < this.dayNames.length) {
        const currentDayName = this.dayNames[index % this.dayNames.length];
        visibleDayNames.push(currentDayName);
        index++;
      }
      if (this.showWeekNumber) visibleDayNames.unshift("");
      return visibleDayNames;
    },
    hasEvents() {
      return this.events && this.events.length;
    },
    /*
    * Return array of all events in the specified month
    */
    eventsInThisMonth() {
      if (!this.events) return [];
      const monthEvents = [];
      for (let i = 0; i < this.events.length; i++) {
        let event = this.events[i];
        if (!Object.prototype.hasOwnProperty.call(event, "date")) {
          event = { date: event };
        }
        if (!Object.prototype.hasOwnProperty.call(event, "type")) {
          event.type = "is-primary";
        }
        if (event.date.getMonth() === this.focused.month && event.date.getFullYear() === this.focused.year) {
          monthEvents.push(event);
        }
      }
      return monthEvents;
    },
    /*
    * Return array of all weeks in the specified month
    */
    weeksInThisMonth() {
      this.validateFocusedDay();
      const month = this.focused.month;
      const year = this.focused.year;
      const weeksInThisMonth = [];
      let startingDay = 1;
      while (weeksInThisMonth.length < 6) {
        const newWeek = this.weekBuilder(startingDay, month, year);
        weeksInThisMonth.push(newWeek);
        startingDay += 7;
      }
      return weeksInThisMonth;
    },
    hoveredDateRange() {
      if (!this.range) {
        return [];
      }
      if (!isNaN(this.selectedEndDate)) {
        return [];
      }
      if (this.hoveredEndDate < this.selectedBeginDate) {
        return [this.hoveredEndDate, this.selectedBeginDate].filter(isDefined);
      }
      return [this.selectedBeginDate, this.hoveredEndDate].filter(isDefined);
    },
    disabledOrUndefined() {
      return this.disabled || void 0;
    }
  },
  methods: {
    /*
    * Emit input event with selected date as payload for v-model in parent
    */
    updateSelectedDate(date) {
      if (!this.range && !this.multiple) {
        this.$emit("update:modelValue", date);
      } else if (this.range) {
        this.handleSelectRangeDate(date);
      } else if (this.multiple) {
        this.handleSelectMultipleDates(date);
      }
    },
    /*
    * If both begin and end dates are set, reset the end date and set the begin date.
    * If only begin date is selected, emit an array of the begin date and the new date.
    * If not set, only set the begin date.
    */
    handleSelectRangeDate(date) {
      if (this.selectedBeginDate && this.selectedEndDate) {
        this.selectedBeginDate = date;
        this.selectedEndDate = void 0;
        this.$emit("range-start", date);
      } else if (this.selectedBeginDate && !this.selectedEndDate) {
        if (this.selectedBeginDate > date) {
          this.selectedEndDate = this.selectedBeginDate;
          this.selectedBeginDate = date;
        } else {
          this.selectedEndDate = date;
        }
        this.$emit("range-end", date);
        this.$emit("update:modelValue", [this.selectedBeginDate, this.selectedEndDate]);
      } else {
        this.selectedBeginDate = date;
        this.$emit("range-start", date);
      }
    },
    /*
    * If selected date already exists list of selected dates, remove it from the list
    * Otherwise, add date to list of selected dates
    */
    handleSelectMultipleDates(date) {
      const multipleSelect = this.multipleSelectedDates.filter(
        (selectedDate) => selectedDate.getDate() === date.getDate() && selectedDate.getFullYear() === date.getFullYear() && selectedDate.getMonth() === date.getMonth()
      );
      if (multipleSelect.length) {
        this.multipleSelectedDates = this.multipleSelectedDates.filter(
          (selectedDate) => selectedDate.getDate() !== date.getDate() || selectedDate.getFullYear() !== date.getFullYear() || selectedDate.getMonth() !== date.getMonth()
        );
      } else {
        this.multipleSelectedDates = [...this.multipleSelectedDates, date];
      }
    },
    /*
     * Return array of all days in the week that the startingDate is within
     */
    weekBuilder(startingDate, month, year) {
      const thisMonth = new Date(year, month);
      const thisWeek = [];
      const dayOfWeek = new Date(year, month, startingDate).getDay();
      const end = dayOfWeek >= this.firstDayOfWeek ? dayOfWeek - this.firstDayOfWeek : 7 - this.firstDayOfWeek + dayOfWeek;
      let daysAgo = 1;
      for (let i = 0; i < end; i++) {
        thisWeek.unshift(
          new Date(
            thisMonth.getFullYear(),
            thisMonth.getMonth(),
            startingDate - daysAgo
          )
        );
        daysAgo++;
      }
      thisWeek.push(new Date(year, month, startingDate));
      let daysForward = 1;
      while (thisWeek.length < 7) {
        thisWeek.push(new Date(year, month, startingDate + daysForward));
        daysForward++;
      }
      return thisWeek;
    },
    validateFocusedDay() {
      const focusedDate = new Date(this.focused.year, this.focused.month, this.focused.day);
      if (this.selectableDate(focusedDate)) return;
      let day = 0;
      const monthDays = new Date(this.focused.year, this.focused.month + 1, 0).getDate();
      let firstFocusable = null;
      while (!firstFocusable && ++day < monthDays) {
        const date = new Date(this.focused.year, this.focused.month, day);
        if (this.selectableDate(date)) {
          firstFocusable = focusedDate;
          const focused = {
            day: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear()
          };
          this.$emit("update:focused", focused);
        }
      }
    },
    /*
     * Check that selected day is within earliest/latest params and
     * is within this month
     */
    selectableDate(day) {
      const validity = [];
      if (this.minDate) {
        validity.push(day >= this.minDate);
      }
      if (this.maxDate) {
        validity.push(day <= this.maxDate);
      }
      if (this.nearbyMonthDays && !this.nearbySelectableMonthDays) {
        validity.push(day.getMonth() === this.focused.month);
      }
      if (this.selectableDates) {
        if (typeof this.selectableDates === "function") {
          if (this.selectableDates(day)) {
            return true;
          } else {
            validity.push(false);
          }
        } else {
          for (let i = 0; i < this.selectableDates.length; i++) {
            const enabledDate = this.selectableDates[i];
            if (day.getDate() === enabledDate.getDate() && day.getFullYear() === enabledDate.getFullYear() && day.getMonth() === enabledDate.getMonth()) {
              return true;
            } else {
              validity.push(false);
            }
          }
        }
      }
      if (this.unselectableDates) {
        if (typeof this.unselectableDates === "function") {
          validity.push(!this.unselectableDates(day));
        } else {
          for (let i = 0; i < this.unselectableDates.length; i++) {
            const disabledDate = this.unselectableDates[i];
            validity.push(
              day.getDate() !== disabledDate.getDate() || day.getFullYear() !== disabledDate.getFullYear() || day.getMonth() !== disabledDate.getMonth()
            );
          }
        }
      }
      if (this.unselectableDaysOfWeek) {
        for (let i = 0; i < this.unselectableDaysOfWeek.length; i++) {
          const dayOfWeek = this.unselectableDaysOfWeek[i];
          validity.push(day.getDay() !== dayOfWeek);
        }
      }
      return validity.indexOf(false) < 0;
    },
    eventsInThisWeek(week) {
      return this.eventsInThisMonth.filter((event) => {
        const stripped = new Date(Date.parse(event.date));
        stripped.setHours(0, 0, 0, 0);
        const timed = stripped.getTime();
        return week.some((weekDate) => weekDate.getTime() === timed);
      });
    },
    setRangeHoverEndDate(day) {
      this.hoveredEndDate = day;
    },
    changeFocus(day) {
      const focused = {
        day: day.getDate(),
        month: day.getMonth(),
        year: day.getFullYear()
      };
      this.$emit("update:focused", focused);
    }
  }
};
var _hoisted_1$23 = { class: "datepicker-table" };
var _hoisted_2$2 = { class: "datepicker-header" };
function render$23(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_datepicker_table_row = resolveComponent("b-datepicker-table-row");
  return openBlock(), createElementBlock("section", _hoisted_1$23, [
    createBaseVNode("header", _hoisted_2$2, [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($options.visibleDayNames, (day, index) => {
          return openBlock(), createElementBlock("div", {
            key: index,
            class: "datepicker-cell"
          }, [
            createBaseVNode(
              "span",
              null,
              toDisplayString(day),
              1
              /* TEXT */
            )
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]),
    createBaseVNode(
      "div",
      {
        class: normalizeClass(["datepicker-body", { "has-events": $options.hasEvents }])
      },
      [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($options.weeksInThisMonth, (week, index) => {
            return openBlock(), createBlock(_component_b_datepicker_table_row, {
              key: index,
              "selected-date": $props.modelValue,
              day: $props.focused.day,
              week,
              month: $props.focused.month,
              "min-date": $props.minDate,
              "max-date": $props.maxDate,
              disabled: $options.disabledOrUndefined,
              "unselectable-dates": $props.unselectableDates,
              "unselectable-days-of-week": $props.unselectableDaysOfWeek,
              "selectable-dates": $props.selectableDates,
              events: $options.eventsInThisWeek(week),
              indicators: $props.indicators,
              "date-creator": $props.dateCreator,
              "nearby-month-days": $props.nearbyMonthDays,
              "nearby-selectable-month-days": $props.nearbySelectableMonthDays,
              "show-week-number": $props.showWeekNumber,
              "week-number-clickable": $props.weekNumberClickable,
              "first-day-of-week": $props.firstDayOfWeek,
              "rules-for-first-week": $props.rulesForFirstWeek,
              range: $props.range,
              "hovered-date-range": $options.hoveredDateRange,
              onSelect: $options.updateSelectedDate,
              onRangeHoverEndDate: $options.setRangeHoverEndDate,
              multiple: $props.multiple,
              onChangeFocus: $options.changeFocus
            }, null, 8, ["selected-date", "day", "week", "month", "min-date", "max-date", "disabled", "unselectable-dates", "unselectable-days-of-week", "selectable-dates", "events", "indicators", "date-creator", "nearby-month-days", "nearby-selectable-month-days", "show-week-number", "week-number-clickable", "first-day-of-week", "rules-for-first-week", "range", "hovered-date-range", "onSelect", "onRangeHoverEndDate", "multiple", "onChangeFocus"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      2
      /* CLASS */
    )
  ]);
}
script$23.render = render$23;
script$23.__file = "src/components/datepicker/DatepickerTable.vue";
var script$17 = {
  name: "BDatepickerMonth",
  props: {
    modelValue: {
      type: [Date, Array]
    },
    monthNames: Array,
    events: Array,
    indicators: String,
    minDate: Date,
    maxDate: Date,
    focused: Object,
    disabled: Boolean,
    dateCreator: Function,
    unselectableDates: [Array, Function],
    unselectableDaysOfWeek: Array,
    selectableDates: [Array, Function],
    range: Boolean,
    multiple: Boolean
  },
  emits: ["change-focus", "range-end", "range-start", "update:modelValue"],
  data() {
    return {
      selectedBeginDate: void 0,
      selectedEndDate: void 0,
      hoveredEndDate: void 0,
      multipleSelectedDates: this.multiple && this.modelValue ? this.modelValue : []
    };
  },
  computed: {
    hasEvents() {
      return this.events && this.events.length;
    },
    /*
    * Return array of all events in the specified month
    */
    eventsInThisYear() {
      if (!this.events) return [];
      const yearEvents = [];
      for (let i = 0; i < this.events.length; i++) {
        let event = this.events[i];
        if (!Object.prototype.hasOwnProperty.call(event, "date")) {
          event = { date: event };
        }
        if (!Object.prototype.hasOwnProperty.call(event, "type")) {
          event.type = "is-primary";
        }
        if (event.date.getFullYear() === this.focused.year) {
          yearEvents.push(event);
        }
      }
      return yearEvents;
    },
    monthDates() {
      const year = this.focused.year;
      const months = [];
      for (let i = 0; i < 12; i++) {
        const d = new Date(year, i, 1);
        d.setHours(0, 0, 0, 0);
        months.push(d);
      }
      return months;
    },
    focusedMonth() {
      return this.focused.month;
    },
    hoveredDateRange() {
      if (!this.range) {
        return [];
      }
      if (!isNaN(this.selectedEndDate)) {
        return [];
      }
      if (this.hoveredEndDate < this.selectedBeginDate) {
        return [this.hoveredEndDate, this.selectedBeginDate].filter(isDefined);
      }
      return [this.selectedBeginDate, this.hoveredEndDate].filter(isDefined);
    },
    disabledOrUndefined() {
      return this.disabled || void 0;
    }
  },
  watch: {
    focusedMonth(month) {
      const refName = `month-${month}`;
      this.$nextTick(() => {
        let cell;
        if (Array.isArray(this.$refs[refName])) {
          cell = this.$refs[refName][0];
        } else {
          cell = this.$refs[refName];
        }
        if (cell) {
          cell.focus();
        }
      });
    }
  },
  methods: {
    selectMultipleDates(date) {
      const multipleSelect = this.multipleSelectedDates.filter(
        (selectedDate) => selectedDate.getDate() === date.getDate() && selectedDate.getFullYear() === date.getFullYear() && selectedDate.getMonth() === date.getMonth()
      );
      if (multipleSelect.length) {
        this.multipleSelectedDates = this.multipleSelectedDates.filter(
          (selectedDate) => selectedDate.getDate() !== date.getDate() || selectedDate.getFullYear() !== date.getFullYear() || selectedDate.getMonth() !== date.getMonth()
        );
      } else {
        this.multipleSelectedDates.push(date);
      }
      this.$emit("update:modelValue", this.multipleSelectedDates);
    },
    selectableDate(day) {
      const validity = [];
      if (this.minDate) {
        validity.push(day >= this.minDate);
      }
      if (this.maxDate) {
        validity.push(day <= this.maxDate);
      }
      validity.push(day.getFullYear() === this.focused.year);
      if (this.selectableDates) {
        if (typeof this.selectableDates === "function") {
          if (this.selectableDates(day)) {
            return true;
          } else {
            validity.push(false);
          }
        } else {
          for (let i = 0; i < this.selectableDates.length; i++) {
            const enabledDate = this.selectableDates[i];
            if (day.getFullYear() === enabledDate.getFullYear() && day.getMonth() === enabledDate.getMonth()) {
              return true;
            } else {
              validity.push(false);
            }
          }
        }
      }
      if (this.unselectableDates) {
        if (typeof this.unselectableDates === "function") {
          validity.push(!this.unselectableDates(day));
        } else {
          for (let i = 0; i < this.unselectableDates.length; i++) {
            const disabledDate = this.unselectableDates[i];
            validity.push(
              day.getFullYear() !== disabledDate.getFullYear() || day.getMonth() !== disabledDate.getMonth()
            );
          }
        }
      }
      if (this.unselectableDaysOfWeek) {
        for (let i = 0; i < this.unselectableDaysOfWeek.length; i++) {
          const dayOfWeek = this.unselectableDaysOfWeek[i];
          validity.push(day.getDay() !== dayOfWeek);
        }
      }
      return validity.indexOf(false) < 0;
    },
    eventsDateMatch(day) {
      if (!this.eventsInThisYear.length) return false;
      const monthEvents = [];
      for (let i = 0; i < this.eventsInThisYear.length; i++) {
        if (this.eventsInThisYear[i].date.getMonth() === day.getMonth()) {
          monthEvents.push(this.events[i]);
        }
      }
      if (!monthEvents.length) {
        return false;
      }
      return monthEvents;
    },
    /*
    * Build classObject for cell using validations
    */
    classObject(day) {
      function dateMatch(dateOne, dateTwo, multiple) {
        if (!dateOne || !dateTwo || multiple) {
          return false;
        }
        if (Array.isArray(dateTwo)) {
          return dateTwo.some((date) => dateOne.getFullYear() === date.getFullYear() && dateOne.getMonth() === date.getMonth());
        }
        return dateOne.getFullYear() === dateTwo.getFullYear() && dateOne.getMonth() === dateTwo.getMonth();
      }
      function dateWithin(dateOne, dates, multiple) {
        if (!Array.isArray(dates) || multiple) {
          return false;
        }
        return dateOne > dates[0] && dateOne < dates[1];
      }
      function dateMultipleSelected(dateOne, dates, multiple) {
        if (!Array.isArray(dates) || !multiple) {
          return false;
        }
        return dates.some((date) => dateOne.getDate() === date.getDate() && dateOne.getFullYear() === date.getFullYear() && dateOne.getMonth() === date.getMonth());
      }
      return {
        "is-selected": dateMatch(day, this.modelValue, this.multiple) || dateWithin(day, this.modelValue, this.multiple) || dateMultipleSelected(day, this.multipleSelectedDates, this.multiple),
        "is-first-selected": dateMatch(
          day,
          Array.isArray(this.modelValue) && this.modelValue[0],
          this.multiple
        ),
        "is-within-selected": dateWithin(day, this.modelValue, this.multiple),
        "is-last-selected": dateMatch(
          day,
          Array.isArray(this.modelValue) && this.modelValue[1],
          this.multiple
        ),
        "is-within-hovered-range": this.hoveredDateRange && this.hoveredDateRange.length === 2 && (dateMatch(day, this.hoveredDateRange) || dateWithin(day, this.hoveredDateRange)),
        "is-first-hovered": dateMatch(
          day,
          Array.isArray(this.hoveredDateRange) && this.hoveredDateRange[0]
        ),
        "is-within-hovered": dateWithin(day, this.hoveredDateRange),
        "is-last-hovered": dateMatch(
          day,
          Array.isArray(this.hoveredDateRange) && this.hoveredDateRange[1]
        ),
        "is-today": dateMatch(day, this.dateCreator()),
        "is-selectable": this.selectableDate(day) && !this.disabled,
        "is-unselectable": !this.selectableDate(day) || this.disabled
      };
    },
    manageKeydown({ key }, date) {
      switch (key) {
        case " ":
        case "Space":
        case "Spacebar":
        case "Enter": {
          this.updateSelectedDate(date);
          break;
        }
        case "ArrowLeft":
        case "Left": {
          this.changeFocus(date, -1);
          break;
        }
        case "ArrowRight":
        case "Right": {
          this.changeFocus(date, 1);
          break;
        }
        case "ArrowUp":
        case "Up": {
          this.changeFocus(date, -3);
          break;
        }
        case "ArrowDown":
        case "Down": {
          this.changeFocus(date, 3);
          break;
        }
      }
    },
    /*
    * Emit input event with selected date as payload for v-model in parent
    */
    updateSelectedDate(date) {
      if (!this.range && !this.multiple) {
        this.emitChosenDate(date);
      } else if (this.range) {
        this.handleSelectRangeDate(date);
      } else if (this.multiple) {
        this.selectMultipleDates(date);
      }
    },
    /*
     * Emit select event with chosen date as payload
     */
    emitChosenDate(day) {
      if (this.disabled) return;
      if (!this.multiple) {
        if (this.selectableDate(day)) {
          this.$emit("update:modelValue", day);
        }
      } else {
        this.selectMultipleDates(day);
      }
    },
    /*
    * If both begin and end dates are set, reset the end date and set the begin date.
    * If only begin date is selected, emit an array of the begin date and the new date.
    * If not set, only set the begin date.
    */
    handleSelectRangeDate(date) {
      if (this.disabled) return;
      if (this.selectedBeginDate && this.selectedEndDate) {
        this.selectedBeginDate = date;
        this.selectedEndDate = void 0;
        this.$emit("range-start", date);
      } else if (this.selectedBeginDate && !this.selectedEndDate) {
        if (this.selectedBeginDate > date) {
          this.selectedEndDate = this.selectedBeginDate;
          this.selectedBeginDate = date;
        } else {
          this.selectedEndDate = date;
        }
        this.$emit("range-end", date);
        this.$emit("update:modelValue", [this.selectedBeginDate, this.selectedEndDate]);
      } else {
        this.selectedBeginDate = date;
        this.$emit("range-start", date);
      }
    },
    setRangeHoverEndDate(day) {
      if (this.range) {
        this.hoveredEndDate = day;
      }
    },
    changeFocus(month, inc) {
      const nextMonth = month;
      nextMonth.setMonth(month.getMonth() + inc);
      this.$emit("change-focus", nextMonth);
    }
  }
};
var _hoisted_1$15 = { class: "datepicker-table" };
var _hoisted_2$13 = { class: "datepicker-months" };
var _hoisted_3$13 = ["disabled", "onClick", "onMouseenter", "onKeydown", "tabindex"];
var _hoisted_4$12 = {
  key: 0,
  class: "events"
};
function render$16(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", _hoisted_1$15, [
    createBaseVNode(
      "div",
      {
        class: normalizeClass(["datepicker-body", { "has-events": $options.hasEvents }])
      },
      [
        createBaseVNode("div", _hoisted_2$13, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($options.monthDates, (date, index) => {
              return openBlock(), createElementBlock(
                Fragment,
                { key: index },
                [
                  $options.selectableDate(date) && !$props.disabled ? (openBlock(), createElementBlock("a", {
                    key: 0,
                    ref_for: true,
                    ref: `month-${date.getMonth()}`,
                    class: normalizeClass([[
                      $options.classObject(date),
                      { "has-event": $options.eventsDateMatch(date) },
                      $props.indicators
                    ], "datepicker-cell"]),
                    role: "button",
                    href: "#",
                    disabled: $options.disabledOrUndefined,
                    onClick: withModifiers(($event) => $options.updateSelectedDate(date), ["prevent"]),
                    onMouseenter: ($event) => $options.setRangeHoverEndDate(date),
                    onKeydown: withModifiers(($event) => $options.manageKeydown($event, date), ["prevent"]),
                    tabindex: $props.focused.month === date.getMonth() ? null : -1
                  }, [
                    createTextVNode(
                      toDisplayString($props.monthNames[date.getMonth()]) + " ",
                      1
                      /* TEXT */
                    ),
                    $options.eventsDateMatch(date) ? (openBlock(), createElementBlock("div", _hoisted_4$12, [
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList($options.eventsDateMatch(date), (event, evIdx) => {
                          return openBlock(), createElementBlock(
                            "div",
                            {
                              class: normalizeClass(["event", event.type]),
                              key: evIdx
                            },
                            null,
                            2
                            /* CLASS */
                          );
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])) : createCommentVNode("v-if", true)
                  ], 42, _hoisted_3$13)) : (openBlock(), createElementBlock(
                    "div",
                    {
                      key: 1,
                      class: normalizeClass([$options.classObject(date), "datepicker-cell"])
                    },
                    toDisplayString($props.monthNames[date.getMonth()]),
                    3
                    /* TEXT, CLASS */
                  ))
                ],
                64
                /* STABLE_FRAGMENT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ],
      2
      /* CLASS */
    )
  ]);
}
script$17.render = render$16;
script$17.__file = "src/components/datepicker/DatepickerMonth.vue";
var defaultDateFormatter = (date, vm) => {
  const targetDates = Array.isArray(date) ? date : [date];
  const dates = targetDates.map((date2) => {
    const d = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate(), 12);
    return !vm.isTypeMonth ? vm.dtf.format(d) : vm.dtfMonth.format(d);
  });
  return !vm.multiple ? dates.join(" - ") : dates.join(", ");
};
var defaultDateParser = (date, vm) => {
  if (vm.dtf.formatToParts && typeof vm.dtf.formatToParts === "function") {
    const formatRegex = (vm.isTypeMonth ? vm.dtfMonth : vm.dtf).formatToParts(new Date(2e3, 11, 25)).map((part) => {
      if (part.type === "literal") {
        return part.value;
      }
      return `((?!=<${part.type}>)\\d+)`;
    }).join("");
    const dateGroups = matchWithGroups(formatRegex, date);
    if (dateGroups.year && dateGroups.year.length === 4 && dateGroups.month && dateGroups.month <= 12) {
      if (vm.isTypeMonth) return new Date(dateGroups.year, dateGroups.month - 1);
      else if (dateGroups.day && dateGroups.day <= 31) {
        return new Date(dateGroups.year, dateGroups.month - 1, dateGroups.day, 12);
      }
    }
  }
  if (!vm.isTypeMonth) return new Date(Date.parse(date));
  if (date) {
    const s = date.split("/");
    const year = s[0].length === 4 ? s[0] : s[1];
    const month = s[0].length === 2 ? s[0] : s[1];
    if (year && month) {
      return new Date(parseInt(year, 10), parseInt(month - 1, 10), 1, 0, 0, 0, 0);
    }
  }
  return null;
};
var script17 = {
  name: "BDatepicker",
  components: {
    [script$23.name]: script$23,
    [script$17.name]: script$17,
    [script2.name]: script2,
    [script12.name]: script12,
    [script14.name]: script14,
    [script.name]: script,
    [script$13.name]: script$13,
    [script11.name]: script11
  },
  mixins: [CompatFallthroughMixin, FormElementMixin],
  provide() {
    return {
      $datepicker: this
    };
  },
  props: {
    modelValue: {
      type: [Date, Array]
    },
    dayNames: {
      type: Array,
      default: () => {
        if (!Array.isArray(config.defaultDayNames)) {
          return void 0;
        }
        return config.defaultDayNames;
      }
    },
    monthNames: {
      type: Array,
      default: () => {
        if (!Array.isArray(config.defaultMonthNames)) {
          return void 0;
        }
        return config.defaultMonthNames;
      }
    },
    firstDayOfWeek: {
      type: Number,
      default: () => {
        if (typeof config.defaultFirstDayOfWeek === "number") {
          return config.defaultFirstDayOfWeek;
        } else {
          return 0;
        }
      }
    },
    inline: Boolean,
    minDate: Date,
    maxDate: Date,
    focusedDate: Date,
    placeholder: String,
    editable: Boolean,
    disabled: Boolean,
    horizontalTimePicker: Boolean,
    unselectableDates: [Array, Function],
    unselectableDaysOfWeek: {
      type: Array,
      default: () => config.defaultUnselectableDaysOfWeek
    },
    selectableDates: [Array, Function],
    dateFormatter: {
      type: Function,
      default: (date, vm) => {
        if (typeof config.defaultDateFormatter === "function") {
          return config.defaultDateFormatter(date);
        } else {
          return defaultDateFormatter(date, vm);
        }
      }
    },
    dateParser: {
      type: Function,
      default: (date, vm) => {
        if (typeof config.defaultDateParser === "function") {
          return config.defaultDateParser(date);
        } else {
          return defaultDateParser(date, vm);
        }
      }
    },
    dateCreator: {
      type: Function,
      default: () => {
        if (typeof config.defaultDateCreator === "function") {
          return config.defaultDateCreator();
        } else {
          return /* @__PURE__ */ new Date();
        }
      }
    },
    mobileNative: {
      type: Boolean,
      default: () => config.defaultDatepickerMobileNative
    },
    position: String,
    iconRight: String,
    iconRightClickable: Boolean,
    events: Array,
    indicators: {
      type: String,
      default: "dots"
    },
    openOnFocus: Boolean,
    iconPrev: {
      type: String,
      default: () => config.defaultIconPrev
    },
    iconNext: {
      type: String,
      default: () => config.defaultIconNext
    },
    yearsRange: {
      type: Array,
      default: () => config.defaultDatepickerYearsRange
    },
    type: {
      type: String,
      validator: (value) => {
        return [
          "month"
        ].indexOf(value) >= 0;
      }
    },
    nearbyMonthDays: {
      type: Boolean,
      default: () => config.defaultDatepickerNearbyMonthDays
    },
    nearbySelectableMonthDays: {
      type: Boolean,
      default: () => config.defaultDatepickerNearbySelectableMonthDays
    },
    showWeekNumber: {
      type: Boolean,
      default: () => config.defaultDatepickerShowWeekNumber
    },
    weekNumberClickable: {
      type: Boolean,
      default: () => config.defaultDatepickerWeekNumberClickable
    },
    rulesForFirstWeek: {
      type: Number,
      default: () => 4
    },
    range: {
      type: Boolean,
      default: false
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    mobileModal: {
      type: Boolean,
      default: () => config.defaultDatepickerMobileModal
    },
    focusable: {
      type: Boolean,
      default: true
    },
    trapFocus: {
      type: Boolean,
      default: () => config.defaultTrapFocus
    },
    appendToBody: Boolean,
    ariaNextLabel: String,
    ariaPreviousLabel: String
  },
  emits: [
    "active-change",
    "change-month",
    "change-year",
    "icon-right-click",
    "range-end",
    "range-start",
    "update:modelValue",
    "week-number-click"
    // emitted from `DatepickerTableRow`
  ],
  data() {
    const focusedDate = (Array.isArray(this.modelValue) ? this.modelValue[0] : this.modelValue) || this.focusedDate || this.dateCreator();
    if (!this.modelValue && this.maxDate && this.maxDate.getFullYear() < focusedDate.getFullYear()) {
      focusedDate.setFullYear(this.maxDate.getFullYear());
    }
    return {
      dateSelected: this.modelValue,
      focusedDateData: {
        day: focusedDate.getDate(),
        month: focusedDate.getMonth(),
        year: focusedDate.getFullYear()
      },
      _elementRef: "input",
      _isDatepicker: true
    };
  },
  computed: {
    computedValue: {
      get() {
        return this.dateSelected;
      },
      set(value) {
        this.updateInternalState(value);
        if (!this.multiple) this.togglePicker(false);
        this.$emit("update:modelValue", value);
        if (this.useHtml5Validation) {
          this.$nextTick(() => {
            this.checkHtml5Validity();
          });
        }
      }
    },
    formattedValue() {
      return this.formatValue(this.computedValue);
    },
    localeOptions() {
      return new Intl.DateTimeFormat(this.locale, {
        year: "numeric",
        month: "numeric"
      }).resolvedOptions();
    },
    dtf() {
      return new Intl.DateTimeFormat(this.locale);
    },
    dtfMonth() {
      return new Intl.DateTimeFormat(this.locale, {
        year: this.localeOptions.year || "numeric",
        month: this.localeOptions.month || "2-digit"
      });
    },
    newMonthNames() {
      if (Array.isArray(this.monthNames)) {
        return this.monthNames;
      }
      return getMonthNames(this.locale);
    },
    newDayNames() {
      if (Array.isArray(this.dayNames)) {
        return this.dayNames;
      }
      return getWeekdayNames(this.locale);
    },
    listOfMonths() {
      let minMonth = 0;
      let maxMonth = 12;
      if (this.minDate && this.focusedDateData.year === this.minDate.getFullYear()) {
        minMonth = this.minDate.getMonth();
      }
      if (this.maxDate && this.focusedDateData.year === this.maxDate.getFullYear()) {
        maxMonth = this.maxDate.getMonth();
      }
      return this.newMonthNames.map((name, index) => {
        return {
          name,
          index,
          disabled: index < minMonth || index > maxMonth
        };
      });
    },
    /*
     * Returns an array of years for the year dropdown. If earliest/latest
     * dates are set by props, range of years will fall within those dates.
     */
    listOfYears() {
      let latestYear = this.focusedDateData.year + this.yearsRange[1];
      if (this.maxDate && this.maxDate.getFullYear() < latestYear) {
        latestYear = Math.max(this.maxDate.getFullYear(), this.focusedDateData.year);
      }
      let earliestYear = this.focusedDateData.year + this.yearsRange[0];
      if (this.minDate && this.minDate.getFullYear() > earliestYear) {
        earliestYear = Math.min(this.minDate.getFullYear(), this.focusedDateData.year);
      }
      const arrayOfYears = [];
      for (let i = earliestYear; i <= latestYear; i++) {
        arrayOfYears.push(i);
      }
      return arrayOfYears.reverse();
    },
    showPrev() {
      if (!this.minDate) return false;
      if (this.isTypeMonth) {
        return this.focusedDateData.year <= this.minDate.getFullYear();
      }
      const dateToCheck = new Date(this.focusedDateData.year, this.focusedDateData.month);
      const date = new Date(this.minDate.getFullYear(), this.minDate.getMonth());
      return dateToCheck <= date;
    },
    showNext() {
      if (!this.maxDate) return false;
      if (this.isTypeMonth) {
        return this.focusedDateData.year >= this.maxDate.getFullYear();
      }
      const dateToCheck = new Date(this.focusedDateData.year, this.focusedDateData.month);
      const date = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth());
      return dateToCheck >= date;
    },
    isMobile() {
      return this.mobileNative && isMobile.any();
    },
    isTypeMonth() {
      return this.type === "month";
    },
    ariaRole() {
      if (!this.inline) {
        return "dialog";
      } else {
        return void 0;
      }
    },
    disabledOrUndefined() {
      return this.disabled || void 0;
    }
  },
  watch: {
    /**
     * When v-model is changed:
     *   1. Update internal value.
     *   2. If it's invalid, validate again.
     */
    modelValue(value) {
      this.updateInternalState(value);
      if (!this.multiple) this.togglePicker(false);
    },
    focusedDate(value) {
      if (value) {
        this.focusedDateData = {
          day: value.getDate(),
          month: value.getMonth(),
          year: value.getFullYear()
        };
      }
    },
    /*
     * Emit input event on month and/or year change
     */
    "focusedDateData.month"(value) {
      this.$emit("change-month", value);
    },
    "focusedDateData.year"(value) {
      this.$emit("change-year", value);
    }
  },
  methods: {
    /*
     * Parse string into date
     */
    onChange(value) {
      const date = this.dateParser(value, this);
      if (date && (!isNaN(date) || Array.isArray(date) && date.length === 2 && !isNaN(date[0]) && !isNaN(date[1]))) {
        this.computedValue = date;
      } else {
        this.computedValue = null;
        if (this.$refs.input) {
          this.$refs.input.newValue = this.computedValue;
        }
      }
    },
    /*
     * Format date into string
     */
    formatValue(value) {
      if (Array.isArray(value)) {
        const isArrayWithValidDates = Array.isArray(value) && value.every((v) => !isNaN(v));
        return isArrayWithValidDates ? this.dateFormatter([...value], this) : null;
      }
      return value && !isNaN(value) ? this.dateFormatter(value, this) : null;
    },
    /*
     * Either decrement month by 1 if not January or decrement year by 1
     * and set month to 11 (December) or decrement year when 'month'
     */
    prev() {
      if (this.disabled) return;
      if (this.isTypeMonth) {
        this.focusedDateData.year -= 1;
      } else {
        if (this.focusedDateData.month > 0) {
          this.focusedDateData.month -= 1;
        } else {
          this.focusedDateData.month = 11;
          this.focusedDateData.year -= 1;
        }
      }
    },
    /*
     * Either increment month by 1 if not December or increment year by 1
     * and set month to 0 (January) or increment year when 'month'
     */
    next() {
      if (this.disabled) return;
      if (this.isTypeMonth) {
        this.focusedDateData.year += 1;
      } else {
        if (this.focusedDateData.month < 11) {
          this.focusedDateData.month += 1;
        } else {
          this.focusedDateData.month = 0;
          this.focusedDateData.year += 1;
        }
      }
    },
    formatNative(value) {
      return this.isTypeMonth ? this.formatYYYYMM(value) : this.formatYYYYMMDD(value);
    },
    /*
     * Format date into string 'YYYY-MM-DD'
     */
    formatYYYYMMDD(value) {
      const date = new Date(value);
      if (value && !isNaN(date)) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return year + "-" + ((month < 10 ? "0" : "") + month) + "-" + ((day < 10 ? "0" : "") + day);
      }
      return "";
    },
    /*
     * Format date into string 'YYYY-MM'
     */
    formatYYYYMM(value) {
      const date = new Date(value);
      if (value && !isNaN(date)) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        return year + "-" + ((month < 10 ? "0" : "") + month);
      }
      return "";
    },
    /*
     * Parse date from string
     */
    onChangeNativePicker(event) {
      const date = event.target.value;
      const s = date ? date.split("-") : [];
      if (s.length === 3) {
        const year = parseInt(s[0], 10);
        const month = parseInt(s[1]) - 1;
        const day = parseInt(s[2]);
        this.computedValue = new Date(year, month, day);
      } else {
        this.computedValue = null;
      }
    },
    updateInternalState(value) {
      if (this.dateSelected === value) return;
      const isArray = Array.isArray(value);
      const currentDate = isArray ? !value.length ? this.dateCreator() : value[value.length - 1] : !value ? this.dateCreator() : value;
      if (!isArray || isArray && this.dateSelected && value.length > this.dateSelected.length) {
        this.focusedDateData = {
          day: currentDate.getDate(),
          month: currentDate.getMonth(),
          year: currentDate.getFullYear()
        };
      }
      this.dateSelected = value;
    },
    /*
     * Toggle datepicker
     */
    togglePicker(active) {
      if (this.$refs.dropdown) {
        const isActive2 = typeof active === "boolean" ? active : !this.$refs.dropdown.isActive;
        if (isActive2) {
          this.$refs.dropdown.isActive = isActive2;
        } else if (this.closeOnClick) {
          this.$refs.dropdown.isActive = isActive2;
        }
      }
    },
    /*
     * Call default onFocus method and show datepicker
     */
    handleOnFocus(event) {
      this.onFocus(event);
      if (this.openOnFocus) {
        this.togglePicker(true);
      }
    },
    /*
     * Toggle dropdown
     */
    toggle() {
      if (this.mobileNative && this.isMobile) {
        const input = this.$refs.input.$refs.input;
        input.focus();
        input.click();
        return;
      }
      this.$refs.dropdown.toggle();
    },
    /*
     * Avoid dropdown toggle when is already visible
     */
    onInputClick(event) {
      if (this.$refs.dropdown.isActive) {
        event.stopPropagation();
      }
    },
    /**
     * Keypress event that is bound to the document.
     */
    keyPress({ key }) {
      if (this.$refs.dropdown && this.$refs.dropdown.isActive && (key === "Escape" || key === "Esc")) {
        this.togglePicker(false);
      }
    },
    /**
     * Emit 'blur' event on dropdown is not active (closed)
     */
    onActiveChange(value) {
      if (!value) {
        this.onBlur();
      }
      this.$emit("active-change", value);
    },
    changeFocus(day) {
      this.focusedDateData = {
        day: day.getDate(),
        month: day.getMonth(),
        year: day.getFullYear()
      };
    }
  },
  created() {
    if (typeof window !== "undefined") {
      document.addEventListener("keyup", this.keyPress);
    }
  },
  beforeUnmount() {
    if (typeof window !== "undefined") {
      document.removeEventListener("keyup", this.keyPress);
    }
  }
};
var _hoisted_113 = { class: "datepicker-header" };
var _hoisted_213 = ["disabled", "aria-label"];
var _hoisted_39 = ["disabled", "aria-label"];
var _hoisted_46 = { class: "pagination-list" };
var _hoisted_53 = ["value", "disabled"];
var _hoisted_63 = ["value"];
var _hoisted_73 = { key: 1 };
function render16(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_input = resolveComponent("b-input");
  const _component_b_icon = resolveComponent("b-icon");
  const _component_b_select = resolveComponent("b-select");
  const _component_b_field = resolveComponent("b-field");
  const _component_b_datepicker_table = resolveComponent("b-datepicker-table");
  const _component_b_datepicker_month = resolveComponent("b-datepicker-month");
  const _component_b_dropdown_item = resolveComponent("b-dropdown-item");
  const _component_b_dropdown = resolveComponent("b-dropdown");
  return openBlock(), createElementBlock(
    "div",
    mergeProps({
      class: ["datepicker control", [_ctx.size, { "is-expanded": _ctx.expanded }]]
    }, _ctx.rootAttrs),
    [
      !$options.isMobile || $props.inline ? (openBlock(), createBlock(_component_b_dropdown, {
        key: 0,
        ref: "dropdown",
        position: $props.position,
        disabled: $options.disabledOrUndefined,
        inline: $props.inline,
        "mobile-modal": $props.mobileModal,
        "trap-focus": $props.trapFocus,
        "aria-role": $options.ariaRole,
        "append-to-body": $props.appendToBody,
        "append-to-body-copy-parent": "",
        onActiveChange: $options.onActiveChange,
        "trigger-tabindex": -1
      }, createSlots({
        default: withCtx(() => [
          createVNode(_component_b_dropdown_item, {
            disabled: $options.disabledOrUndefined,
            focusable: $props.focusable,
            custom: "",
            class: normalizeClass({ "dropdown-horizontal-timepicker": $props.horizontalTimePicker })
          }, {
            default: withCtx(() => [
              createBaseVNode("div", null, [
                createBaseVNode("header", _hoisted_113, [
                  _ctx.$slots.header !== void 0 && _ctx.$slots.header().length ? renderSlot(_ctx.$slots, "header", { key: 0 }) : (openBlock(), createElementBlock(
                    "div",
                    {
                      key: 1,
                      class: normalizeClass(["pagination field is-centered", _ctx.size])
                    },
                    [
                      withDirectives(createBaseVNode("a", {
                        class: "pagination-previous",
                        role: "button",
                        href: "#",
                        disabled: $options.disabledOrUndefined,
                        "aria-label": $props.ariaPreviousLabel,
                        onClick: _cache[3] || (_cache[3] = withModifiers((...args) => $options.prev && $options.prev(...args), ["prevent"])),
                        onKeydown: [
                          _cache[4] || (_cache[4] = withKeys(withModifiers((...args) => $options.prev && $options.prev(...args), ["prevent"]), ["enter"])),
                          _cache[5] || (_cache[5] = withKeys(withModifiers((...args) => $options.prev && $options.prev(...args), ["prevent"]), ["space"]))
                        ]
                      }, [
                        createVNode(_component_b_icon, {
                          icon: $props.iconPrev,
                          pack: _ctx.iconPack,
                          both: "",
                          type: "is-primary is-clickable"
                        }, null, 8, ["icon", "pack"])
                      ], 40, _hoisted_213), [
                        [vShow, !$options.showPrev && !$props.disabled]
                      ]),
                      withDirectives(createBaseVNode("a", {
                        class: "pagination-next",
                        role: "button",
                        href: "#",
                        disabled: $options.disabledOrUndefined,
                        "aria-label": $props.ariaNextLabel,
                        onClick: _cache[6] || (_cache[6] = withModifiers((...args) => $options.next && $options.next(...args), ["prevent"])),
                        onKeydown: [
                          _cache[7] || (_cache[7] = withKeys(withModifiers((...args) => $options.next && $options.next(...args), ["prevent"]), ["enter"])),
                          _cache[8] || (_cache[8] = withKeys(withModifiers((...args) => $options.next && $options.next(...args), ["prevent"]), ["space"]))
                        ]
                      }, [
                        createVNode(_component_b_icon, {
                          icon: $props.iconNext,
                          pack: _ctx.iconPack,
                          both: "",
                          type: "is-primary is-clickable"
                        }, null, 8, ["icon", "pack"])
                      ], 40, _hoisted_39), [
                        [vShow, !$options.showNext && !$props.disabled]
                      ]),
                      createBaseVNode("div", _hoisted_46, [
                        createVNode(_component_b_field, null, {
                          default: withCtx(() => [
                            !$options.isTypeMonth ? (openBlock(), createBlock(_component_b_select, {
                              key: 0,
                              modelValue: $data.focusedDateData.month,
                              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.focusedDateData.month = $event),
                              disabled: $options.disabledOrUndefined,
                              size: _ctx.size
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(
                                  Fragment,
                                  null,
                                  renderList($options.listOfMonths, (month) => {
                                    return openBlock(), createElementBlock("option", {
                                      value: month.index,
                                      key: month.name,
                                      disabled: month.disabled || void 0
                                    }, toDisplayString(month.name), 9, _hoisted_53);
                                  }),
                                  128
                                  /* KEYED_FRAGMENT */
                                ))
                              ]),
                              _: 1
                              /* STABLE */
                            }, 8, ["modelValue", "disabled", "size"])) : createCommentVNode("v-if", true),
                            createVNode(_component_b_select, {
                              modelValue: $data.focusedDateData.year,
                              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $data.focusedDateData.year = $event),
                              disabled: $options.disabledOrUndefined,
                              size: _ctx.size
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(
                                  Fragment,
                                  null,
                                  renderList($options.listOfYears, (year) => {
                                    return openBlock(), createElementBlock("option", {
                                      value: year,
                                      key: year
                                    }, toDisplayString(year), 9, _hoisted_63);
                                  }),
                                  128
                                  /* KEYED_FRAGMENT */
                                ))
                              ]),
                              _: 1
                              /* STABLE */
                            }, 8, ["modelValue", "disabled", "size"])
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ])
                    ],
                    2
                    /* CLASS */
                  ))
                ]),
                !$options.isTypeMonth ? (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 0,
                    class: normalizeClass(["datepicker-content", { "content-horizontal-timepicker": $props.horizontalTimePicker }])
                  },
                  [
                    createVNode(_component_b_datepicker_table, {
                      modelValue: $options.computedValue,
                      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $options.computedValue = $event),
                      "day-names": $options.newDayNames,
                      "month-names": $options.newMonthNames,
                      "first-day-of-week": $props.firstDayOfWeek,
                      "rules-for-first-week": $props.rulesForFirstWeek,
                      "min-date": $props.minDate,
                      "max-date": $props.maxDate,
                      focused: $data.focusedDateData,
                      disabled: $options.disabledOrUndefined,
                      "unselectable-dates": $props.unselectableDates,
                      "unselectable-days-of-week": $props.unselectableDaysOfWeek,
                      "selectable-dates": $props.selectableDates,
                      events: $props.events,
                      indicators: $props.indicators,
                      "date-creator": $props.dateCreator,
                      "type-month": $options.isTypeMonth,
                      "nearby-month-days": $props.nearbyMonthDays,
                      "nearby-selectable-month-days": $props.nearbySelectableMonthDays,
                      "show-week-number": $props.showWeekNumber,
                      "week-number-clickable": $props.weekNumberClickable,
                      range: $props.range,
                      multiple: $props.multiple,
                      onRangeStart: _cache[12] || (_cache[12] = (date) => _ctx.$emit("range-start", date)),
                      onRangeEnd: _cache[13] || (_cache[13] = (date) => _ctx.$emit("range-end", date)),
                      onClose: _cache[14] || (_cache[14] = ($event) => $options.togglePicker(false)),
                      "onUpdate:focused": _cache[15] || (_cache[15] = ($event) => $data.focusedDateData = $event)
                    }, null, 8, ["modelValue", "day-names", "month-names", "first-day-of-week", "rules-for-first-week", "min-date", "max-date", "focused", "disabled", "unselectable-dates", "unselectable-days-of-week", "selectable-dates", "events", "indicators", "date-creator", "type-month", "nearby-month-days", "nearby-selectable-month-days", "show-week-number", "week-number-clickable", "range", "multiple"])
                  ],
                  2
                  /* CLASS */
                )) : (openBlock(), createElementBlock("div", _hoisted_73, [
                  createVNode(_component_b_datepicker_month, {
                    modelValue: $options.computedValue,
                    "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $options.computedValue = $event),
                    "month-names": $options.newMonthNames,
                    "min-date": $props.minDate,
                    "max-date": $props.maxDate,
                    focused: $data.focusedDateData,
                    disabled: $options.disabledOrUndefined,
                    "unselectable-dates": $props.unselectableDates,
                    "unselectable-days-of-week": $props.unselectableDaysOfWeek,
                    "selectable-dates": $props.selectableDates,
                    events: $props.events,
                    indicators: $props.indicators,
                    "date-creator": $props.dateCreator,
                    range: $props.range,
                    multiple: $props.multiple,
                    onRangeStart: _cache[17] || (_cache[17] = (date) => _ctx.$emit("range-start", date)),
                    onRangeEnd: _cache[18] || (_cache[18] = (date) => _ctx.$emit("range-end", date)),
                    onClose: _cache[19] || (_cache[19] = ($event) => $options.togglePicker(false)),
                    onChangeFocus: $options.changeFocus,
                    "onUpdate:focused": _cache[20] || (_cache[20] = ($event) => $data.focusedDateData = $event)
                  }, null, 8, ["modelValue", "month-names", "min-date", "max-date", "focused", "disabled", "unselectable-dates", "unselectable-days-of-week", "selectable-dates", "events", "indicators", "date-creator", "range", "multiple", "onChangeFocus"])
                ]))
              ]),
              _ctx.$slots.default !== void 0 && _ctx.$slots.default().length ? (openBlock(), createElementBlock(
                "footer",
                {
                  key: 0,
                  class: normalizeClass(["datepicker-footer", { "footer-horizontal-timepicker": $props.horizontalTimePicker }])
                },
                [
                  renderSlot(_ctx.$slots, "default")
                ],
                2
                /* CLASS */
              )) : createCommentVNode("v-if", true)
            ]),
            _: 3
            /* FORWARDED */
          }, 8, ["disabled", "focusable", "class"])
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        !$props.inline ? {
          name: "trigger",
          fn: withCtx((props) => [
            renderSlot(_ctx.$slots, "trigger", normalizeProps(guardReactiveProps(props)), () => [
              createVNode(_component_b_input, mergeProps({
                ref: "input",
                autocomplete: "off",
                "model-value": $options.formattedValue,
                placeholder: $props.placeholder,
                size: _ctx.size,
                icon: _ctx.icon,
                "icon-right": $props.iconRight,
                "icon-right-clickable": $props.iconRightClickable,
                "icon-pack": _ctx.iconPack,
                rounded: _ctx.rounded,
                loading: _ctx.loading,
                disabled: $options.disabledOrUndefined,
                readonly: !$props.editable
              }, _ctx.fallthroughAttrs, {
                "use-html5-validation": false,
                onClick: $options.onInputClick,
                onIconRightClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("icon-right-click", $event)),
                onKeyup: _cache[1] || (_cache[1] = withKeys(($event) => $options.togglePicker(true), ["enter"])),
                onChange: _cache[2] || (_cache[2] = ($event) => $options.onChange($event.target.value)),
                onFocus: $options.handleOnFocus
              }), null, 16, ["model-value", "placeholder", "size", "icon", "icon-right", "icon-right-clickable", "icon-pack", "rounded", "loading", "disabled", "readonly", "onClick", "onFocus"])
            ])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["position", "disabled", "inline", "mobile-modal", "trap-focus", "aria-role", "append-to-body", "onActiveChange"])) : (openBlock(), createBlock(_component_b_input, mergeProps({
        key: 1,
        ref: "input",
        type: !$options.isTypeMonth ? "date" : "month",
        autocomplete: "off",
        "model-value": $options.formatNative($options.computedValue),
        placeholder: $props.placeholder,
        size: _ctx.size,
        icon: _ctx.icon,
        "icon-pack": _ctx.iconPack,
        rounded: _ctx.rounded,
        loading: _ctx.loading,
        max: $options.formatNative($props.maxDate),
        min: $options.formatNative($props.minDate),
        disabled: $options.disabledOrUndefined,
        readonly: false
      }, _ctx.fallthroughAttrs, {
        "use-html5-validation": false,
        onChange: $options.onChangeNativePicker,
        onFocus: _ctx.onFocus,
        onBlur: _ctx.onBlur
      }), null, 16, ["type", "model-value", "placeholder", "size", "icon", "icon-pack", "rounded", "loading", "max", "min", "disabled", "onChange", "onFocus", "onBlur"]))
    ],
    16
    /* FULL_PROPS */
  );
}
script17.render = render16;
script17.__file = "src/components/datepicker/Datepicker.vue";

// node_modules/buefy/dist/esm/datepicker.js
var Plugin9 = {
  install: function install9(Vue) {
    registerComponent(Vue, script17);
  }
};
use(Plugin9);

// node_modules/buefy/dist/esm/Timepicker-sqpkdcr1.js
var script18 = {
  name: "BTimepicker",
  components: {
    [script2.name]: script2,
    [script12.name]: script12,
    [script14.name]: script14,
    [script.name]: script,
    [script$13.name]: script$13,
    [script11.name]: script11
  },
  mixins: [TimepickerMixin],
  data() {
    return {
      _isTimepicker: true
    };
  },
  computed: {
    nativeStep() {
      if (this.enableSeconds) {
        return "1";
      } else {
        return void 0;
      }
    }
  }
};
var _hoisted_114 = ["value", "disabled"];
var _hoisted_214 = { class: "control is-colon" };
var _hoisted_310 = ["value", "disabled"];
var _hoisted_47 = { class: "control is-colon" };
var _hoisted_54 = ["value", "disabled"];
var _hoisted_64 = { class: "control is-colon" };
var _hoisted_74 = ["value"];
var _hoisted_83 = {
  key: 0,
  class: "timepicker-footer"
};
function render17(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_input = resolveComponent("b-input");
  const _component_b_select = resolveComponent("b-select");
  const _component_b_field = resolveComponent("b-field");
  const _component_b_dropdown_item = resolveComponent("b-dropdown-item");
  const _component_b_dropdown = resolveComponent("b-dropdown");
  return openBlock(), createElementBlock(
    "div",
    mergeProps({
      class: ["timepicker control", [_ctx.size, { "is-expanded": _ctx.expanded }]]
    }, _ctx.rootAttrs),
    [
      !_ctx.isMobile || _ctx.inline ? (openBlock(), createBlock(_component_b_dropdown, {
        key: 0,
        ref: "dropdown",
        position: _ctx.position,
        disabled: _ctx.disabledOrUndefined,
        inline: _ctx.inline,
        "mobile-modal": _ctx.mobileModal,
        "append-to-body": _ctx.appendToBody,
        "append-to-body-copy-parent": "",
        onActiveChange: _ctx.onActiveChange
      }, createSlots({
        default: withCtx(() => [
          createVNode(_component_b_dropdown_item, {
            disabled: _ctx.disabledOrUndefined,
            focusable: _ctx.focusable,
            custom: ""
          }, {
            default: withCtx(() => [
              createVNode(_component_b_field, {
                grouped: "",
                position: "is-centered"
              }, {
                default: withCtx(() => [
                  createVNode(_component_b_select, {
                    modelValue: _ctx.hoursSelected,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.hoursSelected = $event),
                    onChange: _cache[3] || (_cache[3] = ($event) => _ctx.onHoursChange($event.target.value)),
                    disabled: _ctx.disabledOrUndefined,
                    placeholder: "00"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList(_ctx.hours, (hour) => {
                          return openBlock(), createElementBlock("option", {
                            value: hour.value,
                            key: hour.value,
                            disabled: _ctx.isHourDisabled(hour.value) || void 0
                          }, toDisplayString(hour.label), 9, _hoisted_114);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue", "disabled"]),
                  createBaseVNode(
                    "span",
                    _hoisted_214,
                    toDisplayString(_ctx.hourLiteral),
                    1
                    /* TEXT */
                  ),
                  createVNode(_component_b_select, {
                    modelValue: _ctx.minutesSelected,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.minutesSelected = $event),
                    onChange: _cache[5] || (_cache[5] = ($event) => _ctx.onMinutesChange($event.target.value)),
                    disabled: _ctx.disabledOrUndefined,
                    placeholder: "00"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList(_ctx.minutes, (minute) => {
                          return openBlock(), createElementBlock("option", {
                            value: minute.value,
                            key: minute.value,
                            disabled: _ctx.isMinuteDisabled(minute.value) || void 0
                          }, toDisplayString(minute.label), 9, _hoisted_310);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue", "disabled"]),
                  _ctx.enableSeconds ? (openBlock(), createElementBlock(
                    Fragment,
                    { key: 0 },
                    [
                      createBaseVNode(
                        "span",
                        _hoisted_47,
                        toDisplayString(_ctx.minuteLiteral),
                        1
                        /* TEXT */
                      ),
                      createVNode(_component_b_select, {
                        modelValue: _ctx.secondsSelected,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.secondsSelected = $event),
                        onChange: _cache[7] || (_cache[7] = ($event) => _ctx.onSecondsChange($event.target.value)),
                        disabled: _ctx.disabledOrUndefined,
                        placeholder: "00"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(
                            Fragment,
                            null,
                            renderList(_ctx.seconds, (second) => {
                              return openBlock(), createElementBlock("option", {
                                value: second.value,
                                key: second.value,
                                disabled: _ctx.isSecondDisabled(second.value) || void 0
                              }, toDisplayString(second.label), 9, _hoisted_54);
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["modelValue", "disabled"]),
                      createBaseVNode(
                        "span",
                        _hoisted_64,
                        toDisplayString(_ctx.secondLiteral),
                        1
                        /* TEXT */
                      )
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  )) : createCommentVNode("v-if", true),
                  !_ctx.isHourFormat24 ? (openBlock(), createBlock(_component_b_select, {
                    key: 1,
                    modelValue: _ctx.meridienSelected,
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.meridienSelected = $event),
                    onChange: _cache[9] || (_cache[9] = ($event) => _ctx.onMeridienChange($event.target.value)),
                    disabled: _ctx.disabledOrUndefined
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList(_ctx.meridiens, (meridien) => {
                          return openBlock(), createElementBlock("option", {
                            value: meridien,
                            key: meridien
                          }, toDisplayString(meridien), 9, _hoisted_74);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue", "disabled"])) : createCommentVNode("v-if", true)
                ]),
                _: 1
                /* STABLE */
              }),
              _ctx.$slots.default !== void 0 ? (openBlock(), createElementBlock("footer", _hoisted_83, [
                renderSlot(_ctx.$slots, "default")
              ])) : createCommentVNode("v-if", true)
            ]),
            _: 3
            /* FORWARDED */
          }, 8, ["disabled", "focusable"])
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        !_ctx.inline ? {
          name: "trigger",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "trigger", {}, () => [
              createVNode(_component_b_input, mergeProps({
                ref: "input",
                autocomplete: "off",
                "model-value": _ctx.formatValue(_ctx.computedValue),
                placeholder: _ctx.placeholder,
                size: _ctx.size,
                icon: _ctx.icon,
                "icon-pack": _ctx.iconPack,
                loading: _ctx.loading,
                disabled: _ctx.disabledOrUndefined,
                readonly: !_ctx.editable || void 0,
                rounded: _ctx.rounded
              }, _ctx.fallthroughAttrs, {
                "use-html5-validation": _ctx.useHtml5Validation,
                onKeyup: _cache[0] || (_cache[0] = withKeys(($event) => _ctx.toggle(true), ["enter"])),
                onChange: _cache[1] || (_cache[1] = ($event) => _ctx.onChange($event.target.value)),
                onFocus: _ctx.handleOnFocus
              }), null, 16, ["model-value", "placeholder", "size", "icon", "icon-pack", "loading", "disabled", "readonly", "rounded", "use-html5-validation", "onFocus"])
            ])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["position", "disabled", "inline", "mobile-modal", "append-to-body", "onActiveChange"])) : (openBlock(), createBlock(_component_b_input, mergeProps({
        key: 1,
        ref: "input",
        type: "time",
        step: $options.nativeStep,
        autocomplete: "off",
        "model-value": _ctx.formatHHMMSS(_ctx.computedValue),
        placeholder: _ctx.placeholder,
        size: _ctx.size,
        icon: _ctx.icon,
        "icon-pack": _ctx.iconPack,
        rounded: _ctx.rounded,
        loading: _ctx.loading,
        max: _ctx.formatHHMMSS(_ctx.maxTime),
        min: _ctx.formatHHMMSS(_ctx.minTime),
        disabled: _ctx.disabledOrUndefined,
        readonly: false
      }, _ctx.fallthroughAttrs, {
        "use-html5-validation": _ctx.useHtml5Validation,
        onChange: _cache[10] || (_cache[10] = ($event) => _ctx.onChange($event.target.value)),
        onFocus: _ctx.handleOnFocus,
        onBlur: _cache[11] || (_cache[11] = ($event) => _ctx.onBlur() && _ctx.checkHtml5Validity())
      }), null, 16, ["step", "model-value", "placeholder", "size", "icon", "icon-pack", "rounded", "loading", "max", "min", "disabled", "use-html5-validation", "onFocus"]))
    ],
    16
    /* FULL_PROPS */
  );
}
script18.render = render17;
script18.__file = "src/components/timepicker/Timepicker.vue";

// node_modules/buefy/dist/esm/datetimepicker.js
var AM2 = "AM";
var PM2 = "PM";
var script19 = {
  name: "BDatetimepicker",
  components: {
    [script17.name]: script17,
    [script18.name]: script18
  },
  mixins: [FormElementMixin],
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Date
    },
    editable: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    horizontalTimePicker: Boolean,
    disabled: Boolean,
    firstDayOfWeek: {
      type: Number,
      default: () => {
        if (typeof config.defaultFirstDayOfWeek === "number") {
          return config.defaultFirstDayOfWeek;
        } else {
          return 0;
        }
      }
    },
    rulesForFirstWeek: {
      type: Number,
      default: () => 4
    },
    icon: String,
    iconRight: String,
    iconRightClickable: Boolean,
    iconPack: String,
    inline: Boolean,
    openOnFocus: Boolean,
    position: String,
    mobileNative: {
      type: Boolean,
      default: true
    },
    minDatetime: Date,
    maxDatetime: Date,
    nearbyMonthDays: {
      type: Boolean,
      default: config.defaultDatepickerNearbyMonthDays
    },
    datetimeFormatter: {
      type: Function
    },
    datetimeParser: {
      type: Function
    },
    datetimeCreator: {
      type: Function,
      default: (date) => {
        if (typeof config.defaultDatetimeCreator === "function") {
          return config.defaultDatetimeCreator(date);
        } else {
          return date;
        }
      }
    },
    datepicker: Object,
    timepicker: Object,
    tzOffset: {
      type: Number,
      default: 0
    },
    focusable: {
      type: Boolean,
      default: true
    },
    appendToBody: Boolean
  },
  emits: [
    "active-change",
    "change-month",
    "change-year",
    "icon-right-click",
    "update:modelValue"
  ],
  data() {
    return {
      newValue: this.adjustValue(this.modelValue)
    };
  },
  computed: {
    computedValue: {
      get() {
        return this.newValue;
      },
      set(value) {
        if (value) {
          let val = new Date(value.getTime());
          if (this.newValue) {
            if ((value.getDate() !== this.newValue.getDate() || value.getMonth() !== this.newValue.getMonth() || value.getFullYear() !== this.newValue.getFullYear()) && value.getHours() === 0 && value.getMinutes() === 0 && value.getSeconds() === 0) {
              val.setHours(
                this.newValue.getHours(),
                this.newValue.getMinutes(),
                this.newValue.getSeconds(),
                0
              );
            }
          } else {
            val = this.datetimeCreator(value);
          }
          if (this.minDatetime && val < this.adjustValue(this.minDatetime)) {
            val = this.adjustValue(this.minDatetime);
          } else if (this.maxDatetime && val > this.adjustValue(this.maxDatetime)) {
            val = this.adjustValue(this.maxDatetime);
          }
          this.newValue = new Date(val.getTime());
        } else {
          this.newValue = this.adjustValue(value);
        }
        const adjustedValue = this.adjustValue(this.newValue, true);
        this.$emit("update:modelValue", adjustedValue);
      }
    },
    localeOptions() {
      return new Intl.DateTimeFormat(this.locale, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: this.enableSeconds() ? "numeric" : void 0
      }).resolvedOptions();
    },
    dtf() {
      return new Intl.DateTimeFormat(this.locale, {
        year: this.localeOptions.year || "numeric",
        month: this.localeOptions.month || "numeric",
        day: this.localeOptions.day || "numeric",
        hour: this.localeOptions.hour || "numeric",
        minute: this.localeOptions.minute || "numeric",
        second: this.enableSeconds() ? this.localeOptions.second || "numeric" : void 0,
        hourCycle: !this.isHourFormat24() ? "h12" : "h23"
      });
    },
    isMobileNative() {
      return this.mobileNative && this.tzOffset === 0;
    },
    isMobile() {
      return this.isMobileNative && isMobile.any();
    },
    minDate() {
      if (!this.minDatetime) {
        return this.datepicker ? this.adjustValue(this.datepicker.minDate) : null;
      }
      const adjMinDatetime = this.adjustValue(this.minDatetime);
      return new Date(
        adjMinDatetime.getFullYear(),
        adjMinDatetime.getMonth(),
        adjMinDatetime.getDate(),
        0,
        0,
        0,
        0
      );
    },
    maxDate() {
      if (!this.maxDatetime) {
        return this.datepicker ? this.adjustValue(this.datepicker.maxDate) : null;
      }
      const adjMaxDatetime = this.adjustValue(this.maxDatetime);
      return new Date(
        adjMaxDatetime.getFullYear(),
        adjMaxDatetime.getMonth(),
        adjMaxDatetime.getDate(),
        0,
        0,
        0,
        0
      );
    },
    minTime() {
      if (!this.minDatetime || (this.newValue === null || typeof this.newValue === "undefined")) {
        return this.timepicker ? this.adjustValue(this.timepicker.minTime) : null;
      }
      const adjMinDatetime = this.adjustValue(this.minDatetime);
      if (adjMinDatetime.getFullYear() === this.newValue.getFullYear() && adjMinDatetime.getMonth() === this.newValue.getMonth() && adjMinDatetime.getDate() === this.newValue.getDate()) {
        return adjMinDatetime;
      }
      return void 0;
    },
    maxTime() {
      if (!this.maxDatetime || (this.newValue === null || typeof this.newValue === "undefined")) {
        return this.timepicker ? this.adjustValue(this.timepicker.maxTime) : null;
      }
      const adjMaxDatetime = this.adjustValue(this.maxDatetime);
      if (adjMaxDatetime.getFullYear() === this.newValue.getFullYear() && adjMaxDatetime.getMonth() === this.newValue.getMonth() && adjMaxDatetime.getDate() === this.newValue.getDate()) {
        return adjMaxDatetime;
      }
      return void 0;
    },
    datepickerSize() {
      return this.datepicker && this.datepicker.size ? this.datepicker.size : this.size;
    },
    timepickerSize() {
      return this.timepicker && this.timepicker.size ? this.timepicker.size : this.size;
    },
    timepickerDisabled() {
      return this.timepicker && this.timepicker.disabled ? this.timepicker.disabled : this.disabled;
    },
    disabledOrUndefined() {
      return this.disabled || void 0;
    }
  },
  watch: {
    modelValue() {
      this.newValue = this.adjustValue(this.modelValue);
    },
    tzOffset() {
      this.newValue = this.adjustValue(this.modelValue);
    }
  },
  methods: {
    enableSeconds() {
      if (this.$refs.timepicker) {
        return this.$refs.timepicker.enableSeconds;
      }
      return false;
    },
    isHourFormat24() {
      if (this.$refs.timepicker) {
        return this.$refs.timepicker.isHourFormat24;
      }
      return !this.localeOptions.hour12;
    },
    adjustValue(value, reverse = false) {
      if (!value) return value;
      if (reverse) {
        return new Date(value.getTime() - this.tzOffset * 6e4);
      } else {
        return new Date(value.getTime() + this.tzOffset * 6e4);
      }
    },
    defaultDatetimeParser(date) {
      if (typeof this.datetimeParser === "function") {
        return this.datetimeParser(date);
      } else if (typeof config.defaultDatetimeParser === "function") {
        return config.defaultDatetimeParser(date);
      } else {
        if (this.dtf.formatToParts && typeof this.dtf.formatToParts === "function") {
          const dayPeriods = [AM2, PM2, AM2.toLowerCase(), PM2.toLowerCase()];
          if (this.$refs.timepicker) {
            dayPeriods.push(this.$refs.timepicker.amString);
            dayPeriods.push(this.$refs.timepicker.pmString);
          }
          const parts = this.dtf.formatToParts(/* @__PURE__ */ new Date());
          const formatRegex = parts.map((part, idx) => {
            if (part.type === "literal") {
              if (idx + 1 < parts.length && parts[idx + 1].type === "hour") {
                return "[^\\d]+";
              }
              return part.value.replace(/ /g, "\\s?");
            } else if (part.type === "dayPeriod") {
              return `((?!=<${part.type}>)(${dayPeriods.join("|")})?)`;
            }
            return `((?!=<${part.type}>)\\d+)`;
          }).join("");
          const datetimeGroups = matchWithGroups(formatRegex, date);
          if (datetimeGroups.year && datetimeGroups.year.length === 4 && datetimeGroups.month && datetimeGroups.month <= 12 && datetimeGroups.day && datetimeGroups.day <= 31 && datetimeGroups.hour && datetimeGroups.hour >= 0 && datetimeGroups.hour < 24 && datetimeGroups.minute && datetimeGroups.minute >= 0 && datetimeGroups.minute <= 59) {
            const d = new Date(
              datetimeGroups.year,
              datetimeGroups.month - 1,
              datetimeGroups.day,
              datetimeGroups.hour,
              datetimeGroups.minute,
              datetimeGroups.second || 0
            );
            return d;
          }
        }
        return new Date(Date.parse(date));
      }
    },
    defaultDatetimeFormatter(date) {
      if (typeof this.datetimeFormatter === "function") {
        return this.datetimeFormatter(date);
      } else if (typeof config.defaultDatetimeFormatter === "function") {
        return config.defaultDatetimeFormatter(date);
      } else {
        return this.dtf.format(date);
      }
    },
    /*
    * Parse date from string
    */
    onChangeNativePicker(event) {
      const date = event.target.value;
      const s = date ? date.split(/\D/) : [];
      if (s.length >= 5) {
        const year = parseInt(s[0], 10);
        const month = parseInt(s[1], 10) - 1;
        const day = parseInt(s[2], 10);
        const hours2 = parseInt(s[3], 10);
        const minutes2 = parseInt(s[4], 10);
        this.computedValue = new Date(year, month, day, hours2, minutes2);
      } else {
        this.computedValue = null;
      }
    },
    /*
     * Emit 'active-change' on datepicker active state change
     */
    onActiveChange(value) {
      this.$emit("active-change", value);
    },
    formatNative(value) {
      const date = new Date(value);
      if (value && !isNaN(date)) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours2 = date.getHours();
        const minutes2 = date.getMinutes();
        const seconds2 = date.getSeconds();
        return year + "-" + ((month < 10 ? "0" : "") + month) + "-" + ((day < 10 ? "0" : "") + day) + "T" + ((hours2 < 10 ? "0" : "") + hours2) + ":" + ((minutes2 < 10 ? "0" : "") + minutes2) + ":" + ((seconds2 < 10 ? "0" : "") + seconds2);
      }
      return "";
    },
    toggle() {
      this.$refs.datepicker.toggle();
    }
  },
  mounted() {
    if (!this.isMobile || this.inline) {
      if (this.newValue) {
        this.$refs.datepicker.$forceUpdate();
      }
    }
  }
};
var _hoisted_115 = { class: "level is-mobile" };
var _hoisted_215 = {
  key: 0,
  class: "level-item has-text-centered"
};
var _hoisted_311 = { class: "level-item has-text-centered" };
var _hoisted_48 = {
  key: 1,
  class: "level-item has-text-centered"
};
function render18(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_timepicker = resolveComponent("b-timepicker");
  const _component_b_datepicker = resolveComponent("b-datepicker");
  const _component_b_input = resolveComponent("b-input");
  return !$options.isMobile || $props.inline ? (openBlock(), createBlock(_component_b_datepicker, mergeProps({
    key: 0,
    ref: "datepicker",
    modelValue: $options.computedValue,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $options.computedValue = $event)
  }, $props.datepicker, {
    rounded: _ctx.rounded,
    "open-on-focus": $props.openOnFocus,
    position: $props.position,
    loading: _ctx.loading,
    inline: $props.inline,
    editable: $props.editable,
    expanded: _ctx.expanded,
    "close-on-click": false,
    "first-day-of-week": $props.firstDayOfWeek,
    "rules-for-first-week": $props.rulesForFirstWeek,
    "date-formatter": $options.defaultDatetimeFormatter,
    "date-parser": $options.defaultDatetimeParser,
    "min-date": $options.minDate,
    "max-date": $options.maxDate,
    "nearby-month-days": $props.nearbyMonthDays,
    icon: $props.icon,
    "icon-right": $props.iconRight,
    "icon-right-clickable": $props.iconRightClickable,
    "icon-pack": $props.iconPack,
    size: $options.datepickerSize,
    placeholder: $props.placeholder,
    "horizontal-time-picker": $props.horizontalTimePicker,
    range: false,
    disabled: $options.disabledOrUndefined,
    "mobile-native": $options.isMobileNative,
    locale: _ctx.locale,
    focusable: $props.focusable,
    "append-to-body": $props.appendToBody,
    onFocus: _ctx.onFocus,
    onBlur: _ctx.onBlur,
    onActiveChange: $options.onActiveChange,
    onIconRightClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("icon-right-click")),
    onChangeMonth: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("change-month", $event)),
    onChangeYear: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("change-year", $event))
  }), {
    default: withCtx(() => [
      createBaseVNode("nav", _hoisted_115, [
        _ctx.$slots.left !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_215, [
          renderSlot(_ctx.$slots, "left")
        ])) : createCommentVNode("v-if", true),
        createBaseVNode("div", _hoisted_311, [
          createVNode(_component_b_timepicker, mergeProps({ ref: "timepicker" }, $props.timepicker, {
            modelValue: $options.computedValue,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.computedValue = $event),
            inline: "",
            editable: $props.editable,
            "min-time": $options.minTime,
            "max-time": $options.maxTime,
            size: $options.timepickerSize,
            disabled: $options.timepickerDisabled || void 0,
            focusable: $props.focusable,
            "mobile-native": $options.isMobileNative,
            locale: _ctx.locale
          }), null, 16, ["modelValue", "editable", "min-time", "max-time", "size", "disabled", "focusable", "mobile-native", "locale"])
        ]),
        _ctx.$slots.right !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_48, [
          renderSlot(_ctx.$slots, "right")
        ])) : createCommentVNode("v-if", true)
      ])
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["modelValue", "rounded", "open-on-focus", "position", "loading", "inline", "editable", "expanded", "first-day-of-week", "rules-for-first-week", "date-formatter", "date-parser", "min-date", "max-date", "nearby-month-days", "icon", "icon-right", "icon-right-clickable", "icon-pack", "size", "placeholder", "horizontal-time-picker", "disabled", "mobile-native", "locale", "focusable", "append-to-body", "onFocus", "onBlur", "onActiveChange"])) : (openBlock(), createBlock(_component_b_input, mergeProps({
    key: 1,
    ref: "input",
    type: "datetime-local",
    autocomplete: "off",
    "model-value": $options.formatNative($options.computedValue),
    placeholder: $props.placeholder,
    size: _ctx.size,
    icon: $props.icon,
    "icon-pack": $props.iconPack,
    rounded: _ctx.rounded,
    loading: _ctx.loading,
    max: $options.formatNative($options.maxDate),
    min: $options.formatNative($options.minDate),
    disabled: $options.disabledOrUndefined,
    readonly: false
  }, _ctx.$attrs, {
    "use-html5-validation": _ctx.useHtml5Validation,
    onChange: $options.onChangeNativePicker,
    onFocus: _ctx.onFocus,
    onBlur: _ctx.onBlur
  }), null, 16, ["model-value", "placeholder", "size", "icon", "icon-pack", "rounded", "loading", "max", "min", "disabled", "use-html5-validation", "onChange", "onFocus", "onBlur"]));
}
script19.render = render18;
script19.__file = "src/components/datetimepicker/Datetimepicker.vue";
var Plugin10 = {
  install: function install10(Vue) {
    registerComponent(Vue, script19);
  }
};
use(Plugin10);

// node_modules/buefy/dist/esm/Modal-nlbxVy5Q.js
var script20 = {
  name: "BModal",
  directives: {
    trapFocus
  },
  props: {
    modelValue: Boolean,
    component: [Object, Function, String],
    content: [String, Array],
    programmatic: Boolean,
    props: Object,
    events: Object,
    width: {
      type: [String, Number],
      default: 960
    },
    hasModalCard: Boolean,
    animation: {
      type: String,
      default: "zoom-out"
    },
    canCancel: {
      type: [Array, Boolean],
      default: () => {
        return config.defaultModalCanCancel;
      }
    },
    cancelCallback: {
      type: Function,
      default: () => {
      }
    },
    scroll: {
      type: String,
      default: () => {
        return config.defaultModalScroll ? config.defaultModalScroll : "clip";
      },
      validator: (value) => {
        return [
          "clip",
          "keep"
        ].indexOf(value) >= 0;
      }
    },
    fullScreen: Boolean,
    trapFocus: {
      type: Boolean,
      default: () => {
        return config.defaultTrapFocus;
      }
    },
    autoFocus: {
      type: Boolean,
      default: () => {
        return config.defaultAutoFocus;
      }
    },
    customClass: String,
    customContentClass: [String, Array, Object],
    ariaRole: {
      type: String,
      validator: (value) => {
        return [
          "dialog",
          "alertdialog"
        ].indexOf(value) >= 0;
      }
    },
    ariaModal: Boolean,
    ariaLabel: {
      type: String,
      validator: (value) => {
        return Boolean(value);
      }
    },
    closeButtonAriaLabel: String,
    destroyOnHide: {
      type: Boolean,
      default: true
    },
    renderOnMounted: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "after-enter",
    "after-leave",
    "cancel",
    "close",
    "update:modelValue"
  ],
  data() {
    return {
      isActive: this.modelValue || false,
      savedScrollTop: null,
      newWidth: typeof this.width === "number" ? this.width + "px" : this.width,
      animating: !this.modelValue,
      destroyed: !(this.modelValue || this.renderOnMounted)
    };
  },
  computed: {
    cancelOptions() {
      return typeof this.canCancel === "boolean" ? this.canCancel ? config.defaultModalCanCancel : [] : this.canCancel;
    },
    showX() {
      return this.cancelOptions.indexOf("x") >= 0;
    },
    customStyle() {
      if (!this.fullScreen) {
        return { maxWidth: this.newWidth };
      }
      return null;
    }
  },
  watch: {
    modelValue(value) {
      this.isActive = value;
    },
    isActive(value) {
      if (value) this.destroyed = false;
      this.handleScroll();
      this.$nextTick(() => {
        if (value && this.$el && this.$el.focus && this.autoFocus) {
          this.$el.focus();
        }
      });
    }
  },
  methods: {
    handleScroll() {
      if (typeof window === "undefined") return;
      if (this.scroll === "clip") {
        if (this.isActive) {
          document.documentElement.classList.add("is-clipped");
        } else {
          document.documentElement.classList.remove("is-clipped");
        }
        return;
      }
      this.savedScrollTop = !this.savedScrollTop ? document.documentElement.scrollTop : this.savedScrollTop;
      if (this.isActive) {
        document.body.classList.add("is-noscroll");
      } else {
        document.body.classList.remove("is-noscroll");
      }
      if (this.isActive) {
        document.body.style.top = `-${this.savedScrollTop}px`;
        return;
      }
      document.documentElement.scrollTop = this.savedScrollTop;
      document.body.style.top = null;
      this.savedScrollTop = null;
    },
    /**
    * Close the Modal if canCancel and call the cancelCallback prop (function).
    */
    cancel(method) {
      if (this.cancelOptions.indexOf(method) < 0) return;
      this.$emit("cancel", arguments);
      this.cancelCallback.apply(null, arguments);
      this.close();
    },
    /**
    * Call the cancelCallback prop (function).
    * Emit events, and destroy modal if it's programmatic.
    */
    close() {
      this.$emit("close");
      this.$emit("update:modelValue", false);
      if (this.programmatic) {
        this.isActive = false;
        setTimeout(() => {
          removeElement(this.$el);
        }, 150);
      }
    },
    /**
    * Keypress event that is bound to the document.
    */
    keyPress({ key }) {
      if (this.isActive && (key === "Escape" || key === "Esc")) this.cancel("escape");
    },
    /**
    * Transition after-enter hook
    */
    afterEnter() {
      this.animating = false;
      this.$emit("after-enter");
    },
    /**
    * Transition before-leave hook
    */
    beforeLeave() {
      this.animating = true;
    },
    /**
    * Transition after-leave hook
    */
    afterLeave() {
      if (this.destroyOnHide) {
        this.destroyed = true;
      }
      this.$emit("after-leave");
    }
  },
  created() {
    if (typeof window !== "undefined") {
      document.addEventListener("keyup", this.keyPress);
    }
  },
  mounted() {
    if (this.programmatic) {
      document.body.appendChild(this.$el);
      this.isActive = true;
    } else if (this.isActive) this.handleScroll();
  },
  beforeUnmount() {
    if (typeof window !== "undefined") {
      document.removeEventListener("keyup", this.keyPress);
      document.documentElement.classList.remove("is-clipped");
      const savedScrollTop = !this.savedScrollTop ? document.documentElement.scrollTop : this.savedScrollTop;
      document.body.classList.remove("is-noscroll");
      document.documentElement.scrollTop = savedScrollTop;
      document.body.style.top = null;
    }
  }
};
var _hoisted_116 = ["role", "aria-label", "aria-modal"];
var _hoisted_216 = ["innerHTML"];
var _hoisted_312 = ["aria-label"];
function render19(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_trap_focus = resolveDirective("trap-focus");
  return openBlock(), createBlock(Transition, {
    name: $props.animation,
    onAfterEnter: $options.afterEnter,
    onBeforeLeave: $options.beforeLeave,
    onAfterLeave: $options.afterLeave
  }, {
    default: withCtx(() => [
      !$data.destroyed ? withDirectives((openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["modal is-active", [{ "is-full-screen": $props.fullScreen }, $props.customClass]]),
        tabindex: "-1",
        role: $props.ariaRole,
        "aria-label": $props.ariaLabel,
        "aria-modal": $props.ariaModal || void 0
      }, [
        createBaseVNode("div", {
          class: "modal-background",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.cancel("outside"))
        }),
        createBaseVNode(
          "div",
          {
            class: normalizeClass(["animation-content", [{ "modal-content": !$props.hasModalCard }, $props.customContentClass]]),
            style: normalizeStyle($options.customStyle)
          },
          [
            $props.component ? (openBlock(), createBlock(resolveDynamicComponent($props.component), mergeProps({ key: 0 }, $props.props, toHandlers($props.events), {
              "can-cancel": $props.canCancel,
              onClose: $options.close
            }), null, 16, ["can-cancel", "onClose"])) : $props.content ? (openBlock(), createElementBlock(
              Fragment,
              { key: 1 },
              [
                createCommentVNode(" eslint-disable-next-line vue/no-v-html "),
                createBaseVNode("div", { innerHTML: $props.content }, null, 8, _hoisted_216)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : renderSlot(_ctx.$slots, "default", {
              key: 2,
              canCancel: $props.canCancel,
              close: $options.close
            }),
            $options.showX ? withDirectives((openBlock(), createElementBlock("button", {
              key: 3,
              type: "button",
              class: "modal-close is-large",
              "aria-label": $props.closeButtonAriaLabel,
              onClick: _cache[1] || (_cache[1] = ($event) => $options.cancel("x"))
            }, null, 8, _hoisted_312)), [
              [vShow, !$data.animating]
            ]) : createCommentVNode("v-if", true)
          ],
          6
          /* CLASS, STYLE */
        )
      ], 10, _hoisted_116)), [
        [vShow, $data.isActive],
        [_directive_trap_focus, $props.trapFocus]
      ]) : createCommentVNode("v-if", true)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name", "onAfterEnter", "onBeforeLeave", "onAfterLeave"]);
}
script20.render = render19;
script20.__file = "src/components/modal/Modal.vue";

// node_modules/buefy/dist/esm/dialog.js
var script21 = {
  name: "BDialog",
  components: {
    [script.name]: script,
    [script5.name]: script5
  },
  directives: {
    trapFocus
  },
  extends: script20,
  props: {
    title: String,
    message: [String, Array],
    icon: String,
    iconPack: String,
    hasIcon: Boolean,
    type: {
      type: String,
      default: "is-primary"
    },
    size: String,
    confirmText: {
      type: String,
      default: () => {
        return config.defaultDialogConfirmText ? config.defaultDialogConfirmText : "OK";
      }
    },
    cancelText: {
      type: String,
      default: () => {
        return config.defaultDialogCancelText ? config.defaultDialogCancelText : "Cancel";
      }
    },
    hasInput: Boolean,
    // Used internally to know if it's prompt
    inputAttrs: {
      type: Object,
      default: () => ({})
    },
    confirmCallback: {
      type: Function,
      default: () => {
      }
    },
    closeOnConfirm: {
      type: Boolean,
      default: true
    },
    container: {
      type: String,
      default: () => {
        return config.defaultContainerElement;
      }
    },
    focusOn: {
      type: String,
      default: "confirm"
    },
    trapFocus: {
      type: Boolean,
      default: () => {
        return config.defaultTrapFocus;
      }
    },
    ariaRole: {
      type: String,
      validator: (value) => {
        return [
          "dialog",
          "alertdialog"
        ].indexOf(value) >= 0;
      }
    },
    ariaModal: Boolean
  },
  emits: ["confirm"],
  data() {
    const prompt = this.hasInput ? this.inputAttrs.value || "" : "";
    return {
      prompt,
      isActive: false,
      validationMessage: "",
      isCompositing: false,
      isLoading: false
    };
  },
  computed: {
    // `safeInputAttrs` is a shallow copy of `inputAttrs` except for `value`
    // `value` should not be specified to `v-bind` of the input element
    // because it inhibits `v-model` of the input on Vue 3
    safeInputAttrs() {
      const attrs = { ...this.inputAttrs };
      delete attrs.value;
      if (typeof attrs.required === "undefined") {
        attrs.required = true;
      }
      return attrs;
    },
    dialogClass() {
      return [this.size, {
        "has-custom-container": this.container !== null
      }];
    },
    /**
    * Icon name (MDI) based on the type.
    */
    iconByType() {
      switch (this.type) {
        case "is-info":
          return "information";
        case "is-success":
          return "check-circle";
        case "is-warning":
          return "alert";
        case "is-danger":
          return "alert-circle";
        default:
          return null;
      }
    },
    showCancel() {
      return this.cancelOptions.indexOf("button") >= 0;
    }
  },
  methods: {
    /**
    * If it's a prompt Dialog, validate the input.
    * Call the confirmCallback prop (function) and close the Dialog.
    */
    confirm() {
      if (this.$refs.input !== void 0) {
        if (this.isCompositing) return;
        if (!this.$refs.input.checkValidity()) {
          this.validationMessage = this.$refs.input.validationMessage;
          this.$nextTick(() => this.$refs.input.select());
          return;
        }
      }
      this.$emit("confirm", this.prompt);
      this.confirmCallback(this.prompt, this);
      if (this.closeOnConfirm) this.close();
    },
    /**
    * Close the Dialog.
    */
    close() {
      this.isActive = false;
      this.isLoading = false;
      setTimeout(() => {
        removeElement(this.$el);
      }, 150);
    },
    /**
    * Start the Loading.
    */
    startLoading() {
      this.isLoading = true;
    },
    /**
    * Cancel the Loading.
    */
    cancelLoading() {
      this.isLoading = false;
    }
  },
  beforeMount() {
    if (typeof window !== "undefined") {
      this.$nextTick(() => {
        const container2 = document.querySelector(this.container) || document.body;
        container2.appendChild(this.$el);
      });
    }
  },
  mounted() {
    this.isActive = true;
    this.$nextTick(() => {
      if (this.hasInput) {
        this.$refs.input.focus();
      } else if (this.focusOn === "cancel" && this.showCancel) {
        this.$refs.cancelButton.$el.focus();
      } else {
        this.$refs.confirmButton.$el.focus();
      }
    });
  }
};
var _hoisted_117 = ["role", "aria-modal"];
var _hoisted_217 = { class: "modal-card animation-content" };
var _hoisted_313 = {
  key: 0,
  class: "modal-card-head"
};
var _hoisted_49 = { class: "modal-card-title" };
var _hoisted_55 = { class: "media" };
var _hoisted_65 = {
  key: 0,
  class: "media-left"
};
var _hoisted_75 = { class: "media-content" };
var _hoisted_84 = ["innerHTML"];
var _hoisted_93 = {
  key: 0,
  class: "field"
};
var _hoisted_102 = { class: "control" };
var _hoisted_118 = { class: "help is-danger" };
var _hoisted_123 = { class: "modal-card-foot" };
function render20(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");
  const _component_b_button = resolveComponent("b-button");
  const _directive_trap_focus = resolveDirective("trap-focus");
  return openBlock(), createBlock(Transition, { name: _ctx.animation }, {
    default: withCtx(() => [
      $data.isActive ? withDirectives((openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["dialog modal is-active", $options.dialogClass]),
        role: $props.ariaRole,
        "aria-modal": $props.ariaModal
      }, [
        createBaseVNode("div", {
          class: "modal-background",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.cancel("outside"))
        }),
        createBaseVNode("div", _hoisted_217, [
          $props.title ? (openBlock(), createElementBlock("header", _hoisted_313, [
            createBaseVNode(
              "p",
              _hoisted_49,
              toDisplayString($props.title),
              1
              /* TEXT */
            )
          ])) : createCommentVNode("v-if", true),
          createBaseVNode(
            "section",
            {
              class: normalizeClass(["modal-card-body", { "is-titleless": !$props.title, "is-flex": $props.hasIcon }])
            },
            [
              createBaseVNode("div", _hoisted_55, [
                $props.hasIcon && ($props.icon || $options.iconByType) ? (openBlock(), createElementBlock("div", _hoisted_65, [
                  createVNode(_component_b_icon, {
                    icon: $props.icon ? $props.icon : $options.iconByType,
                    pack: $props.iconPack,
                    type: $props.type,
                    both: !$props.icon,
                    size: "is-large"
                  }, null, 8, ["icon", "pack", "type", "both"])
                ])) : createCommentVNode("v-if", true),
                createBaseVNode("div", _hoisted_75, [
                  createBaseVNode("p", null, [
                    _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock(
                      Fragment,
                      { key: 1 },
                      [
                        createCommentVNode(" eslint-disable-next-line vue/no-v-html "),
                        createBaseVNode("div", { innerHTML: $props.message }, null, 8, _hoisted_84)
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    ))
                  ]),
                  $props.hasInput ? (openBlock(), createElementBlock("div", _hoisted_93, [
                    createBaseVNode("div", _hoisted_102, [
                      withDirectives(createBaseVNode(
                        "input",
                        mergeProps({
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.prompt = $event),
                          class: ["input", { "is-danger": $data.validationMessage }],
                          ref: "input"
                        }, $options.safeInputAttrs, {
                          onCompositionstart: _cache[2] || (_cache[2] = ($event) => $data.isCompositing = true),
                          onCompositionend: _cache[3] || (_cache[3] = ($event) => $data.isCompositing = false),
                          onKeydown: _cache[4] || (_cache[4] = withKeys((...args) => $options.confirm && $options.confirm(...args), ["enter"]))
                        }),
                        null,
                        16
                        /* FULL_PROPS */
                      ), [
                        [vModelDynamic, $data.prompt]
                      ])
                    ]),
                    createBaseVNode(
                      "p",
                      _hoisted_118,
                      toDisplayString($data.validationMessage),
                      1
                      /* TEXT */
                    )
                  ])) : createCommentVNode("v-if", true)
                ])
              ])
            ],
            2
            /* CLASS */
          ),
          createBaseVNode("footer", _hoisted_123, [
            $options.showCancel ? (openBlock(), createBlock(_component_b_button, {
              key: 0,
              ref: "cancelButton",
              disabled: $data.isLoading,
              onClick: _cache[5] || (_cache[5] = ($event) => _ctx.cancel("button"))
            }, {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString($props.cancelText),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["disabled"])) : createCommentVNode("v-if", true),
            createVNode(_component_b_button, {
              type: $props.type,
              ref: "confirmButton",
              loading: $data.isLoading,
              onClick: $options.confirm
            }, {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString($props.confirmText),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["type", "loading", "onClick"])
          ])
        ])
      ], 10, _hoisted_117)), [
        [_directive_trap_focus, $props.trapFocus]
      ]) : createCommentVNode("v-if", true)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
script21.render = render20;
script21.__file = "src/components/dialog/Dialog.vue";
function ownKeys3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys3(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function open(propsData, app) {
  var slot;
  if (Array.isArray(propsData.message)) {
    slot = propsData.message;
    delete propsData.message;
  }
  function createDialog(_onConfirm, _onCancel) {
    var container2 = document.createElement("div");
    var vueInstance = createApp({
      data: function data8() {
        return {
          dialogVNode: null
        };
      },
      methods: {
        close: function close4() {
          var dialog = getComponentFromVNode(this.dialogVNode);
          if (dialog) {
            dialog.close();
          }
        },
        startLoading: function startLoading() {
          var dialog = getComponentFromVNode(this.dialogVNode);
          if (dialog) {
            dialog.startLoading();
          }
        },
        cancelLoading: function cancelLoading() {
          var dialog = getComponentFromVNode(this.dialogVNode);
          if (dialog) {
            dialog.cancelLoading();
          }
        }
      },
      render: function render45() {
        this.dialogVNode = h(script21, _objectSpread3(_objectSpread3({}, propsData), {}, {
          // intentionally overrides propsData.onConfirm
          // to prevent propsData.onConfirm from receiving a "confirm" event
          onConfirm: function onConfirm() {
            if (_onConfirm != null) {
              _onConfirm.apply(void 0, arguments);
            }
          },
          // intentionally override propsData.onCancel
          // to prevent propsData.onCancel from receiving a "cancel" event
          onCancel: function onCancel() {
            if (_onCancel != null) {
              _onCancel.apply(void 0, arguments);
            }
            vueInstance.unmount();
          },
          confirmCallback: function confirmCallback() {
            if (propsData.onConfirm != null) {
              propsData.onConfirm.apply(propsData, arguments);
            }
          },
          cancelCallback: function cancelCallback() {
            if (propsData.onCancel != null) {
              propsData.onCancel.apply(propsData, arguments);
            }
          }
        }), slot ? {
          "default": function _default10() {
            return slot;
          }
        } : void 0);
        return this.dialogVNode;
      }
    });
    if (app) {
      copyAppContext(app, vueInstance);
    }
    return vueInstance.mount(container2);
  }
  if (!config.defaultProgrammaticPromise) {
    return createDialog();
  } else {
    return new Promise(function(resolve) {
      var dialog = createDialog(function(event) {
        return resolve({
          result: event || true,
          dialog
        });
      }, function() {
        return resolve({
          result: false,
          dialog
        });
      });
    });
  }
}
var DialogProgrammatic = function() {
  function DialogProgrammatic2(app) {
    _classCallCheck(this, DialogProgrammatic2);
    this.app = app;
  }
  _createClass(DialogProgrammatic2, [{
    key: "alert",
    value: function alert(params) {
      if (typeof params === "string") {
        params = {
          message: params
        };
      }
      var defaultParam = {
        canCancel: false
      };
      var propsData = merge(defaultParam, params);
      return open(propsData, this.app);
    }
  }, {
    key: "confirm",
    value: function confirm(params) {
      var defaultParam = {};
      var propsData = merge(defaultParam, params);
      return open(propsData, this.app);
    }
  }, {
    key: "prompt",
    value: function prompt(params) {
      var defaultParam = {
        hasInput: true
      };
      var propsData = merge(defaultParam, params);
      return open(propsData, this.app);
    }
  }]);
  return DialogProgrammatic2;
}();
var Plugin11 = {
  install: function install11(Vue) {
    registerComponent(Vue, script21);
    registerComponentProgrammatic(Vue, "dialog", new DialogProgrammatic(Vue));
  }
};
use(Plugin11);

// node_modules/buefy/dist/esm/dropdown.js
var Plugin12 = {
  install: function install12(Vue) {
    registerComponent(Vue, script$13);
    registerComponent(Vue, script11);
  }
};
use(Plugin12);

// node_modules/buefy/dist/esm/field.js
var Plugin13 = {
  install: function install13(Vue) {
    registerComponent(Vue, script12);
  }
};
use(Plugin13);

// node_modules/buefy/dist/esm/icon.js
var Plugin14 = {
  install: function install14(Vue) {
    registerComponent(Vue, script);
  }
};
use(Plugin14);

// node_modules/buefy/dist/esm/image.js
var Plugin15 = {
  install: function install15(Vue) {
    registerComponent(Vue, script6);
  }
};
use(Plugin15);

// node_modules/buefy/dist/esm/input.js
var Plugin16 = {
  install: function install16(Vue) {
    registerComponent(Vue, script2);
  }
};
use(Plugin16);

// node_modules/buefy/dist/esm/ssr-jg9-YOst.js
var isSSR = typeof window === "undefined";
var HTMLElement = isSSR ? Object : window.HTMLElement;
var File = isSSR ? Object : window.File;

// node_modules/buefy/dist/esm/Loading-p2sa5IKE.js
var script22 = {
  name: "BLoading",
  props: {
    modelValue: Boolean,
    programmatic: Boolean,
    container: [Object, Function, HTMLElement],
    isFullPage: {
      type: Boolean,
      default: true
    },
    animation: {
      type: String,
      default: "fade"
    },
    canCancel: {
      type: Boolean,
      default: false
    },
    onCancel: {
      type: Function,
      default: () => {
      }
    }
  },
  emits: ["close", "update:is-full-page", "update:modelValue"],
  data() {
    return {
      isActive: this.modelValue || false,
      displayInFullPage: this.isFullPage
    };
  },
  watch: {
    modelValue(value) {
      this.isActive = value;
    },
    isFullPage(value) {
      this.displayInFullPage = value;
    }
  },
  methods: {
    /**
    * Close the Modal if canCancel.
    */
    cancel() {
      if (!this.canCancel || !this.isActive) return;
      this.close();
    },
    /**
    * Emit events, and destroy modal if it's programmatic.
    */
    close() {
      this.onCancel.apply(null, arguments);
      this.$emit("close");
      this.$emit("update:modelValue", false);
      if (this.programmatic) {
        this.isActive = false;
        setTimeout(() => {
          removeElement(this.$el);
        }, 150);
      }
    },
    /**
    * Keypress event that is bound to the document.
    */
    keyPress({ key }) {
      if (key === "Escape" || key === "Esc") this.cancel();
    }
  },
  created() {
    if (typeof window !== "undefined") {
      document.addEventListener("keyup", this.keyPress);
    }
  },
  mounted() {
    if (this.programmatic) {
      if (!this.container) {
        document.body.appendChild(this.$el);
      } else {
        this.displayInFullPage = false;
        this.$emit("update:is-full-page", false);
        this.container.appendChild(this.$el);
      }
      this.isActive = true;
    }
  },
  beforeUnmount() {
    if (typeof window !== "undefined") {
      document.removeEventListener("keyup", this.keyPress);
    }
  }
};
var _hoisted_119 = createBaseVNode(
  "div",
  { class: "loading-icon" },
  null,
  -1
  /* HOISTED */
);
function render21(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, { name: $props.animation }, {
    default: withCtx(() => [
      $data.isActive ? withDirectives((openBlock(), createElementBlock(
        "div",
        {
          key: 0,
          class: normalizeClass(["loading-overlay is-active", { "is-full-page": $data.displayInFullPage }])
        },
        [
          createBaseVNode("div", {
            class: "loading-background",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.cancel && $options.cancel(...args))
          }),
          renderSlot(_ctx.$slots, "default", {}, () => [
            _hoisted_119
          ])
        ],
        2
        /* CLASS */
      )), [
        [vShow, $data.isActive]
      ]) : createCommentVNode("v-if", true)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
script22.render = render21;
script22.__file = "src/components/loading/Loading.vue";

// node_modules/buefy/dist/esm/loading.js
function ownKeys4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys4(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys4(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var LoadingProgrammatic = function() {
  function LoadingProgrammatic2(app) {
    _classCallCheck(this, LoadingProgrammatic2);
    this.app = app;
  }
  _createClass(LoadingProgrammatic2, [{
    key: "open",
    value: function open2(params) {
      var defaultParam = {
        programmatic: true
      };
      var propsData = merge(defaultParam, params);
      var container2 = document.createElement("div");
      var vueInstance = createApp({
        data: function data8() {
          return {
            loadingVNode: null
          };
        },
        methods: {
          close: function close4() {
            var loading = getComponentFromVNode(this.loadingVNode);
            if (loading) {
              loading.close();
            }
          }
        },
        render: function render45() {
          this.loadingVNode = h(script22, _objectSpread4(_objectSpread4({}, propsData), {}, {
            onClose: function onClose() {
              if (propsData.onClose) {
                propsData.onClose.apply(propsData, arguments);
              }
              setTimeout(function() {
                vueInstance.unmount();
              }, 150);
            }
          }));
          return this.loadingVNode;
        }
      });
      if (this.app) {
        copyAppContext(this.app, vueInstance);
      }
      return vueInstance.mount(container2);
    }
  }]);
  return LoadingProgrammatic2;
}();
var Plugin17 = {
  install: function install17(Vue) {
    registerComponent(Vue, script22);
    registerComponentProgrammatic(Vue, "loading", new LoadingProgrammatic(Vue));
  }
};
use(Plugin17);

// node_modules/buefy/dist/esm/menu.js
var MenuItemContainerMixin = {
  provide: function provide() {
    return {
      BMenuItemContainer: this
    };
  },
  data: function data4() {
    return {
      menuItems: []
    };
  },
  methods: {
    appendMenuItem: function appendMenuItem(item) {
      this.menuItems.push(item);
    },
    removeMenuItem: function removeMenuItem(item) {
      var index = this.menuItems.indexOf(item);
      if (index !== -1) {
        this.menuItems.splice(index, 1);
      }
    }
  }
};
var script$24 = {
  name: "BMenu",
  mixins: [MenuItemContainerMixin],
  props: {
    accordion: {
      type: Boolean,
      default: true
    },
    activable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      _isMenu: true
      // Used by MenuItem
    };
  }
};
var _hoisted_1$24 = { class: "menu" };
function render$24(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$24, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
script$24.render = render$24;
script$24.__file = "src/components/menu/Menu.vue";
var script$18 = {
  name: "BMenuList",
  props: {
    label: String,
    icon: String,
    iconPack: String,
    ariaRole: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "is-small"
    }
  }
};
var _hoisted_1$16 = {
  key: 0,
  class: "menu-label"
};
var _hoisted_2$14 = ["role"];
function render$17(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      $props.label || _ctx.$slots.label ? (openBlock(), createElementBlock("p", _hoisted_1$16, [
        $props.label ? (openBlock(), createElementBlock(
          Fragment,
          { key: 0 },
          [
            $props.icon ? (openBlock(), createElementBlock(
              Fragment,
              { key: 0 },
              [
                createVNode(_component_b_icon, {
                  icon: $props.icon,
                  pack: $props.iconPack,
                  size: $props.size
                }, null, 8, ["icon", "pack", "size"]),
                createBaseVNode(
                  "span",
                  null,
                  toDisplayString($props.label),
                  1
                  /* TEXT */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (openBlock(), createElementBlock(
              Fragment,
              { key: 1 },
              [
                createTextVNode(
                  toDisplayString($props.label),
                  1
                  /* TEXT */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            ))
          ],
          64
          /* STABLE_FRAGMENT */
        )) : renderSlot(_ctx.$slots, "label", { key: 1 })
      ])) : createCommentVNode("v-if", true),
      createBaseVNode("ul", {
        class: "menu-list",
        role: $props.ariaRole === "menu" ? $props.ariaRole : void 0
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, _hoisted_2$14)
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
script$18.render = render$17;
script$18.__file = "src/components/menu/MenuList.vue";
var script23 = {
  name: "BMenuItem",
  components: {
    [script.name]: script
  },
  mixins: [CompatFallthroughMixin, MenuItemContainerMixin],
  inject: {
    parent: {
      from: "BMenuItemContainer",
      default: null
    }
  },
  // deprecated, to replace with default 'value' in the next breaking change
  model: {
    prop: "active",
    event: "update:active"
  },
  props: {
    label: String,
    active: Boolean,
    expanded: Boolean,
    disabled: Boolean,
    iconPack: String,
    icon: String,
    animation: {
      type: String,
      default: "slide"
    },
    tag: {
      type: String,
      default: "a",
      validator: (value) => {
        return config.defaultLinkTags.indexOf(value) >= 0;
      }
    },
    ariaRole: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "is-small"
    }
  },
  emits: ["update:active", "update:expanded"],
  data() {
    return {
      newActive: this.active,
      newExpanded: this.expanded
    };
  },
  computed: {
    ariaRoleMenu() {
      return this.ariaRole === "menuitem" ? this.ariaRole : null;
    }
  },
  watch: {
    active(value) {
      this.newActive = value;
    },
    expanded(value) {
      this.newExpanded = value;
    }
  },
  methods: {
    onClick(event) {
      if (this.disabled) return;
      const menu = this.getMenu();
      this.reset(this.parent, menu);
      this.newExpanded = this.$props.expanded || !this.newExpanded;
      this.$emit("update:expanded", this.newExpanded);
      if (menu && menu.activable) {
        this.newActive = true;
        this.$emit("update:active", this.newActive);
      }
    },
    reset(parent, menu) {
      if (parent == null) {
        return;
      }
      parent.menuItems.forEach((item) => {
        if (item !== this) {
          this.reset(item, menu);
          if (!parent.$data._isMenu || parent.$data._isMenu && parent.accordion) {
            item.newExpanded = false;
            item.$emit("update:expanded", item.newActive);
          }
          if (menu && menu.activable) {
            item.newActive = false;
            item.$emit("update:active", item.newActive);
          }
        }
      });
    },
    getMenu() {
      let parent = this.$parent;
      while (parent && !parent.$data._isMenu) {
        parent = parent.$parent;
      }
      return parent;
    }
  },
  mounted() {
    if (this.parent) {
      this.parent.appendMenuItem(this);
    }
  },
  beforeUnmount() {
    if (this.parent) {
      this.parent.removeMenuItem(this);
    }
  }
};
var _hoisted_120 = ["role"];
var _hoisted_218 = { key: 1 };
function render22(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");
  return openBlock(), createElementBlock("li", mergeProps({ role: $options.ariaRoleMenu }, _ctx.rootAttrs), [
    (openBlock(), createBlock(resolveDynamicComponent($props.tag), mergeProps(_ctx.fallthroughAttrs, {
      class: {
        "is-active": $data.newActive,
        "is-expanded": $data.newExpanded,
        "is-disabled": $props.disabled,
        "icon-text": $props.icon
      },
      onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick($event))
    }), {
      default: withCtx(() => [
        $props.icon ? (openBlock(), createBlock(_component_b_icon, {
          key: 0,
          icon: $props.icon,
          pack: $props.iconPack,
          size: $props.size
        }, null, 8, ["icon", "pack", "size"])) : createCommentVNode("v-if", true),
        $props.label ? (openBlock(), createElementBlock(
          "span",
          _hoisted_218,
          toDisplayString($props.label),
          1
          /* TEXT */
        )) : renderSlot(_ctx.$slots, "label", {
          key: 2,
          expanded: $data.newExpanded,
          active: $data.newActive
        })
      ]),
      _: 3
      /* FORWARDED */
    }, 16, ["class"])),
    createCommentVNode(" sub menu items "),
    _ctx.$slots.default ? (openBlock(), createBlock(Transition, {
      key: 0,
      name: $props.animation,
      persisted: ""
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode(
          "ul",
          null,
          [
            renderSlot(_ctx.$slots, "default")
          ],
          512
          /* NEED_PATCH */
        ), [
          [vShow, $data.newExpanded]
        ])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["name"])) : createCommentVNode("v-if", true)
  ], 16, _hoisted_120);
}
script23.render = render22;
script23.__file = "src/components/menu/MenuItem.vue";
var Plugin18 = {
  install: function install18(Vue) {
    registerComponent(Vue, script$24);
    registerComponent(Vue, script$18, "BMenuList");
    registerComponent(Vue, script23);
  }
};
use(Plugin18);

// node_modules/buefy/dist/esm/MessageMixin-KdZp92I_.js
var MessageMixin = {
  components: _defineProperty({}, script.name, script),
  props: {
    modelValue: {
      type: Boolean,
      "default": true
    },
    title: String,
    closable: {
      type: Boolean,
      "default": true
    },
    message: String,
    type: String,
    hasIcon: Boolean,
    size: String,
    icon: String,
    iconPack: String,
    iconSize: String,
    autoClose: {
      type: Boolean,
      "default": false
    },
    duration: {
      type: Number,
      "default": 2e3
    },
    progressBar: {
      type: Boolean,
      "default": false
    }
  },
  emits: ["click", "close", "update:modelValue"],
  data: function data5() {
    return {
      isActive: this.modelValue,
      remainingTime: this.duration / 1e3,
      // in seconds
      newIconSize: this.iconSize || this.size || "is-large"
    };
  },
  watch: {
    modelValue: function modelValue2(value) {
      this.isActive = value;
    },
    isActive: function isActive(value) {
      if (value) {
        this.setAutoClose();
        this.setDurationProgress();
      } else {
        if (this.timer) {
          clearTimeout(this.timer);
        }
      }
    }
  },
  computed: {
    /**
     * Icon name (MDI) based on type.
     */
    computedIcon: function computedIcon() {
      if (this.icon) {
        return this.icon;
      }
      switch (this.type) {
        case "is-info":
          return "information";
        case "is-success":
          return "check-circle";
        case "is-warning":
          return "alert";
        case "is-danger":
          return "alert-circle";
        default:
          return null;
      }
    }
  },
  methods: {
    /**
     * Close the Message and emit events.
     */
    close: function close2() {
      this.isActive = false;
      this.resetDurationProgress();
      this.$emit("close");
      this.$emit("update:modelValue", false);
    },
    click: function click() {
      this.$emit("click");
    },
    /**
     * Set timer to auto close message
     */
    setAutoClose: function setAutoClose() {
      var _this = this;
      if (this.autoClose) {
        this.timer = setTimeout(function() {
          if (_this.isActive) {
            _this.close();
          }
        }, this.duration);
      }
    },
    setDurationProgress: function setDurationProgress() {
      var _this2 = this;
      if (this.progressBar || this.autoClose) {
        this.$buefy.globalNoticeInterval = setInterval(function() {
          if (_this2.remainingTime !== 0) {
            _this2.remainingTime -= 1;
          } else {
            _this2.resetDurationProgress();
          }
        }, 1e3);
      }
    },
    resetDurationProgress: function resetDurationProgress() {
      var _this3 = this;
      setTimeout(function() {
        _this3.remainingTime = _this3.duration / 1e3;
        clearInterval(_this3.$buefy.globalNoticeInterval);
      }, 100);
    }
  },
  mounted: function mounted() {
    this.setAutoClose();
  }
};

// node_modules/buefy/dist/esm/message.js
var script24 = {
  name: "BMessage",
  mixins: [MessageMixin],
  props: {
    ariaCloseLabel: String
  }
};
var _hoisted_121 = {
  key: 0,
  class: "message-header"
};
var _hoisted_219 = { key: 0 };
var _hoisted_314 = { key: 1 };
var _hoisted_410 = ["aria-label"];
var _hoisted_56 = {
  key: 1,
  class: "message-body"
};
var _hoisted_66 = { class: "media" };
var _hoisted_76 = {
  key: 0,
  class: "media-left"
};
var _hoisted_85 = { class: "media-content" };
function render23(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");
  const _component_b_progress = resolveComponent("b-progress");
  return openBlock(), createBlock(Transition, {
    name: "fade",
    persisted: ""
  }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode(
        "article",
        {
          class: normalizeClass(["message", [_ctx.type, _ctx.size]])
        },
        [
          _ctx.$slots.header || _ctx.title ? (openBlock(), createElementBlock("header", _hoisted_121, [
            _ctx.$slots.header ? (openBlock(), createElementBlock("div", _hoisted_219, [
              renderSlot(_ctx.$slots, "header")
            ])) : _ctx.title ? (openBlock(), createElementBlock(
              "p",
              _hoisted_314,
              toDisplayString(_ctx.title),
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true),
            _ctx.closable ? (openBlock(), createElementBlock("button", {
              key: 2,
              type: "button",
              class: "delete",
              onClick: _cache[0] || (_cache[0] = (...args) => _ctx.close && _ctx.close(...args)),
              "aria-label": $props.ariaCloseLabel
            }, null, 8, _hoisted_410)) : createCommentVNode("v-if", true)
          ])) : createCommentVNode("v-if", true),
          _ctx.$slots.default ? (openBlock(), createElementBlock("section", _hoisted_56, [
            createBaseVNode("div", _hoisted_66, [
              _ctx.computedIcon && _ctx.hasIcon ? (openBlock(), createElementBlock("div", _hoisted_76, [
                createVNode(_component_b_icon, {
                  icon: _ctx.computedIcon,
                  pack: _ctx.iconPack,
                  class: normalizeClass(_ctx.type),
                  both: "",
                  size: _ctx.newIconSize
                }, null, 8, ["icon", "pack", "class", "size"])
              ])) : createCommentVNode("v-if", true),
              createBaseVNode("div", _hoisted_85, [
                renderSlot(_ctx.$slots, "default")
              ])
            ])
          ])) : createCommentVNode("v-if", true),
          _ctx.progressBar ? (openBlock(), createBlock(_component_b_progress, {
            key: 2,
            class: "auto-close-progress",
            value: _ctx.remainingTime - 1,
            max: _ctx.duration / 1e3 - 1,
            type: _ctx.type,
            rounded: false
          }, null, 8, ["value", "max", "type"])) : createCommentVNode("v-if", true)
        ],
        2
        /* CLASS */
      ), [
        [vShow, _ctx.isActive]
      ])
    ]),
    _: 3
    /* FORWARDED */
  });
}
script24.render = render23;
script24.__file = "src/components/message/Message.vue";
var Plugin19 = {
  install: function install19(Vue) {
    registerComponent(Vue, script24);
  }
};
use(Plugin19);

// node_modules/buefy/dist/esm/modal.js
function ownKeys5(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread5(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys5(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys5(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var ModalProgrammatic = function() {
  function ModalProgrammatic2(app) {
    _classCallCheck(this, ModalProgrammatic2);
    this.app = app;
  }
  _createClass(ModalProgrammatic2, [{
    key: "open",
    value: function open2(params) {
      if (typeof params === "string") {
        params = {
          content: params
        };
      }
      var defaultParam = {
        programmatic: true
      };
      if (params.parent) {
        delete params.parent;
      }
      var slot;
      if (Array.isArray(params.content)) {
        slot = params.content;
        delete params.content;
      }
      var propsData = merge(defaultParam, params);
      var container2 = document.createElement("div");
      var vueInstance = createApp({
        data: function data8() {
          return {
            modalVNode: null
          };
        },
        methods: {
          close: function close4() {
            var modal = getComponentFromVNode(this.modalVNode);
            if (modal) {
              modal.close();
            }
          }
        },
        render: function render45() {
          this.modalVNode = h(script20, _objectSpread5(_objectSpread5({}, propsData), {}, {
            onClose: function onClose() {
              vueInstance.unmount();
            },
            // intentionally overrides propsData.onCancel
            // to prevent propsData.onCancel from receiving a "cancel" event
            onCancel: function onCancel() {
            },
            cancelCallback: function cancelCallback() {
              if (propsData.onCancel != null) {
                propsData.onCancel.apply(propsData, arguments);
              }
            }
          }), slot ? {
            "default": function _default10() {
              return slot;
            }
          } : void 0);
          return this.modalVNode;
        }
      });
      if (this.app) {
        copyAppContext(this.app, vueInstance);
      }
      return vueInstance.mount(container2);
    }
  }]);
  return ModalProgrammatic2;
}();
var Plugin20 = {
  install: function install20(Vue) {
    registerComponent(Vue, script20);
    registerComponentProgrammatic(Vue, "modal", new ModalProgrammatic(Vue));
  }
};
use(Plugin20);

// node_modules/buefy/dist/esm/Progress-7Ux1HulH.js
var PROGRESS_INJECTION_KEY = Symbol("bprogress");
var script25 = {
  name: "BProgress",
  provide() {
    return {
      [PROGRESS_INJECTION_KEY]: this
    };
  },
  props: {
    type: {
      type: [String, Object],
      default: "is-darkgrey"
    },
    size: String,
    rounded: {
      type: Boolean,
      default: true
    },
    value: {
      type: Number,
      default: void 0
    },
    max: {
      type: Number,
      default: 100
    },
    showValue: {
      type: Boolean,
      default: false
    },
    format: {
      type: String,
      default: "raw",
      validator: (value) => {
        return [
          "raw",
          "percent"
        ].indexOf(value) >= 0;
      }
    },
    precision: {
      type: Number,
      default: 2
    },
    keepTrailingZeroes: {
      type: Boolean,
      default: false
    },
    locale: {
      type: [String, Array],
      default: () => {
        return config.defaultLocale;
      }
    }
  },
  computed: {
    isIndeterminate() {
      return this.value === void 0 || this.value === null;
    },
    newType() {
      return [
        this.size,
        this.type,
        {
          "is-more-than-half": this.value && this.value > this.max / 2
        }
      ];
    },
    newValue() {
      return this.calculateValue(this.value);
    },
    isNative() {
      return this.$slots.bar === void 0;
    },
    wrapperClasses() {
      return {
        "is-not-native": !this.isNative,
        [this.size]: typeof this.size === "string" && !this.isNative
      };
    }
  },
  watch: {
    /**
     * When value is changed back to undefined, value of native progress get reset to 0.
     * Need to add and remove the value attribute to have the indeterminate or not.
     */
    isIndeterminate(indeterminate) {
      this.$nextTick(() => {
        if (this.$refs.progress) {
          if (indeterminate) {
            this.$refs.progress.removeAttribute("value");
          } else {
            this.$refs.progress.setAttribute("value", this.value);
          }
        }
      });
    }
  },
  methods: {
    calculateValue(value) {
      if (value === void 0 || value === null || isNaN(value)) {
        return void 0;
      }
      const minimumFractionDigits = this.keepTrailingZeroes ? this.precision : 0;
      const maximumFractionDigits = this.precision;
      if (this.format === "percent") {
        return new Intl.NumberFormat(
          this.locale,
          {
            style: "percent",
            minimumFractionDigits,
            maximumFractionDigits
          }
        ).format(value / this.max);
      }
      return new Intl.NumberFormat(
        this.locale,
        {
          minimumFractionDigits,
          maximumFractionDigits
        }
      ).format(value);
    }
  }
};
var _hoisted_124 = ["max", "value"];
var _hoisted_220 = {
  key: 2,
  class: "progress-value"
};
function render24(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["progress-wrapper", [$options.wrapperClasses, { "is-squared": !$props.rounded }]])
    },
    [
      $options.isNative ? (openBlock(), createElementBlock("progress", {
        key: 0,
        ref: "progress",
        class: normalizeClass(["progress", [$options.newType, { "is-squared": !$props.rounded }]]),
        max: $props.max,
        value: $props.value
      }, toDisplayString($options.newValue), 11, _hoisted_124)) : renderSlot(_ctx.$slots, "bar", { key: 1 }),
      $options.isNative && $props.showValue ? (openBlock(), createElementBlock("p", _hoisted_220, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(
            toDisplayString($options.newValue),
            1
            /* TEXT */
          )
        ])
      ])) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
script25.render = render24;
script25.__file = "src/components/progress/Progress.vue";

// node_modules/buefy/dist/esm/NoticeMixin-6c_QVv-2.js
var NoticeMixin = {
  props: {
    type: {
      type: String,
      "default": "is-dark"
    },
    message: [String, Array],
    duration: Number,
    queue: {
      type: Boolean,
      "default": void 0
    },
    indefinite: {
      type: Boolean,
      "default": false
    },
    pauseOnHover: {
      type: Boolean,
      "default": false
    },
    position: {
      type: String,
      "default": "is-top",
      validator: function validator2(value) {
        return ["is-top-right", "is-top", "is-top-left", "is-bottom-right", "is-bottom", "is-bottom-left"].indexOf(value) > -1;
      }
    },
    container: String
  },
  emits: ["click", "close"],
  data: function data6() {
    return {
      isActive: false,
      isPaused: false,
      parentTop: null,
      parentBottom: null,
      newContainer: this.container || config.defaultContainerElement
    };
  },
  computed: {
    correctParent: function correctParent() {
      switch (this.position) {
        case "is-top-right":
        case "is-top":
        case "is-top-left":
          return this.parentTop;
        case "is-bottom-right":
        case "is-bottom":
        case "is-bottom-left":
          return this.parentBottom;
      }
    },
    transition: function transition() {
      switch (this.position) {
        case "is-top-right":
        case "is-top":
        case "is-top-left":
          return {
            enter: "fadeInDown",
            leave: "fadeOut"
          };
        case "is-bottom-right":
        case "is-bottom":
        case "is-bottom-left":
          return {
            enter: "fadeInUp",
            leave: "fadeOut"
          };
      }
    }
  },
  methods: {
    pause: function pause() {
      if (this.pauseOnHover && !this.indefinite) {
        this.isPaused = true;
        clearInterval(this.$buefy.globalNoticeInterval);
      }
    },
    removePause: function removePause() {
      if (this.pauseOnHover && !this.indefinite) {
        this.isPaused = false;
        this.close();
      }
    },
    shouldQueue: function shouldQueue() {
      var queue2 = this.queue !== void 0 ? this.queue : config.defaultNoticeQueue;
      if (!queue2) return false;
      return this.parentTop.childElementCount > 0 || this.parentBottom.childElementCount > 0;
    },
    click: function click2() {
      this.$emit("click");
    },
    close: function close3() {
      var _this = this;
      if (!this.isPaused) {
        clearTimeout(this.timer);
        this.isActive = false;
        this.$emit("close");
        setTimeout(function() {
          removeElement(_this.$el);
        }, 150);
      }
    },
    timeoutCallback: function timeoutCallback() {
      return this.close();
    },
    showNotice: function showNotice() {
      var _this2 = this;
      if (this.shouldQueue()) this.correctParent.innerHTML = "";
      this.correctParent.insertAdjacentElement("afterbegin", this.$el);
      this.isActive = true;
      if (!this.indefinite) {
        this.timer = setTimeout(function() {
          return _this2.timeoutCallback();
        }, this.newDuration);
      }
    },
    setupContainer: function setupContainer() {
      this.parentTop = document.querySelector((this.newContainer ? this.newContainer : "body") + ">.notices.is-top");
      this.parentBottom = document.querySelector((this.newContainer ? this.newContainer : "body") + ">.notices.is-bottom");
      if (this.parentTop && this.parentBottom) return;
      if (!this.parentTop) {
        this.parentTop = document.createElement("div");
        this.parentTop.className = "notices is-top";
      }
      if (!this.parentBottom) {
        this.parentBottom = document.createElement("div");
        this.parentBottom.className = "notices is-bottom";
      }
      var container2 = document.querySelector(this.newContainer) || document.body;
      container2.appendChild(this.parentTop);
      container2.appendChild(this.parentBottom);
      if (this.newContainer) {
        this.parentTop.classList.add("has-custom-container");
        this.parentBottom.classList.add("has-custom-container");
      }
    }
  },
  beforeMount: function beforeMount3() {
    this.setupContainer();
  },
  mounted: function mounted2() {
    this.showNotice();
  }
};

// node_modules/buefy/dist/esm/notification.js
var script$19 = {
  name: "BNotification",
  components: {
    // directly registers Progress
    // in case Notification is programmatically opened
    [script25.name]: script25
  },
  mixins: [MessageMixin],
  props: {
    position: String,
    ariaCloseLabel: String,
    animation: {
      type: String,
      default: "fade"
    }
  }
};
var _hoisted_125 = ["aria-label"];
var _hoisted_221 = {
  key: 1,
  class: "media"
};
var _hoisted_315 = {
  key: 0,
  class: "media-left"
};
var _hoisted_411 = { class: "media-content" };
var _hoisted_57 = ["innerHTML"];
function render$18(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");
  const _component_b_progress = resolveComponent("b-progress");
  return openBlock(), createBlock(Transition, {
    name: $props.animation,
    persisted: ""
  }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode(
        "article",
        {
          class: normalizeClass(["notification", [_ctx.type, $props.position]]),
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.click && _ctx.click(...args))
        },
        [
          _ctx.closable ? (openBlock(), createElementBlock("button", {
            key: 0,
            class: "delete",
            type: "button",
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.close && _ctx.close(...args)),
            "aria-label": $props.ariaCloseLabel
          }, null, 8, _hoisted_125)) : createCommentVNode("v-if", true),
          _ctx.$slots.default || _ctx.message ? (openBlock(), createElementBlock("div", _hoisted_221, [
            _ctx.computedIcon && _ctx.hasIcon ? (openBlock(), createElementBlock("div", _hoisted_315, [
              createVNode(_component_b_icon, {
                icon: _ctx.computedIcon,
                pack: _ctx.iconPack,
                size: _ctx.newIconSize,
                both: "",
                "aria-hidden": ""
              }, null, 8, ["icon", "pack", "size"])
            ])) : createCommentVNode("v-if", true),
            createBaseVNode("div", _hoisted_411, [
              _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock(
                Fragment,
                { key: 1 },
                [
                  createCommentVNode(" eslint-disable-next-line vue/no-v-html "),
                  createBaseVNode("p", {
                    class: "text",
                    innerHTML: _ctx.message
                  }, null, 8, _hoisted_57)
                ],
                64
                /* STABLE_FRAGMENT */
              ))
            ])
          ])) : createCommentVNode("v-if", true),
          _ctx.progressBar ? (openBlock(), createBlock(_component_b_progress, {
            key: 2,
            class: "auto-close-progress",
            value: _ctx.remainingTime - 1,
            max: _ctx.duration / 1e3 - 1,
            type: _ctx.type,
            rounded: false
          }, null, 8, ["value", "max", "type"])) : createCommentVNode("v-if", true)
        ],
        2
        /* CLASS */
      ), [
        [vShow, _ctx.isActive]
      ])
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
script$19.render = render$18;
script$19.__file = "src/components/notification/Notification.vue";
function ownKeys$12(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$12(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$12(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$12(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var _NoticeMixin$props = NoticeMixin.props;
var queue = _NoticeMixin$props.queue;
var indefinite = _NoticeMixin$props.indefinite;
var pauseOnHover = _NoticeMixin$props.pauseOnHover;
var position = _NoticeMixin$props.position;
var container = _NoticeMixin$props.container;
var NoticeMixinSubset = _objectSpread$12(_objectSpread$12({}, NoticeMixin), {}, {
  props: {
    queue,
    indefinite,
    pauseOnHover,
    position,
    container
  }
});
var script26 = {
  name: "BNotificationNotice",
  components: {
    [script$19.name]: script$19
  },
  mixins: [NoticeMixinSubset],
  props: {
    duration: Number
  },
  emits: ["close"],
  data() {
    return {
      newDuration: this.duration || config.defaultNotificationDuration
    };
  },
  methods: {
    close() {
      if (!this.isPaused) {
        clearTimeout(this.timer);
        this.$refs.notification.isActive = false;
        this.$emit("close");
        setTimeout(() => {
          removeElement(this.$el);
        }, 150);
      }
    }
  }
};
function render25(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_notification = resolveComponent("b-notification");
  return _ctx.$slots.default != null ? (openBlock(), createBlock(_component_b_notification, mergeProps({
    key: 0,
    ref: "notification",
    position: _ctx.position,
    "model-value": _ctx.isActive
  }, _ctx.$attrs, {
    duration: $props.duration,
    onClick: _ctx.click,
    onClose: $options.close,
    onMouseenter: _ctx.pause,
    onMouseleave: _ctx.removePause
  }), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["position", "model-value", "duration", "onClick", "onClose", "onMouseenter", "onMouseleave"])) : (openBlock(), createBlock(_component_b_notification, mergeProps({
    key: 1,
    ref: "notification",
    position: _ctx.position,
    "model-value": _ctx.isActive
  }, _ctx.$attrs, {
    duration: $props.duration,
    onClick: _ctx.click,
    onClose: $options.close,
    onMouseenter: _ctx.pause,
    onMouseleave: _ctx.removePause
  }), null, 16, ["position", "model-value", "duration", "onClick", "onClose", "onMouseenter", "onMouseleave"]));
}
script26.render = render25;
script26.__file = "src/components/notification/NotificationNotice.vue";
function ownKeys6(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread6(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys6(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys6(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var NotificationProgrammatic = function() {
  function NotificationProgrammatic2(app) {
    _classCallCheck(this, NotificationProgrammatic2);
    this.app = app;
  }
  _createClass(NotificationProgrammatic2, [{
    key: "open",
    value: function open2(params) {
      if (typeof params === "string") {
        params = {
          message: params
        };
      }
      var defaultParam = {
        position: config.defaultNotificationPosition || "is-top-right"
      };
      if (params.parent) {
        delete params.parent;
      }
      var _onClose;
      if (typeof params.onClose === "function") {
        _onClose = params.onClose;
        delete params.onClose;
      }
      var slot;
      if (Array.isArray(params.message)) {
        slot = params.message;
        delete params.message;
      }
      var propsData = merge(defaultParam, params);
      var container2 = document.createElement("div");
      var vueInstance = createApp({
        data: function data8() {
          return {
            noticeVNode: null
          };
        },
        methods: {
          close: function close4() {
            var notice = getComponentFromVNode(this.noticeVNode);
            if (notice) {
              notice.close();
            }
          }
        },
        render: function render45() {
          this.noticeVNode = h(script26, _objectSpread6(_objectSpread6({}, propsData), {}, {
            onClose: function onClose() {
              if (_onClose != null) {
                _onClose();
              }
              setTimeout(function() {
                vueInstance.unmount();
              }, 150);
            }
          }), slot != null ? {
            "default": function _default10() {
              return slot;
            }
          } : void 0);
          return this.noticeVNode;
        }
      });
      if (this.app) {
        copyAppContext(this.app, vueInstance);
      } else {
        vueInstance.use({
          install: function install44(Vue) {
            Vue.config.globalProperties.$buefy = {
              globalNoticeInterval: null
            };
          }
        });
      }
      return vueInstance.mount(container2);
    }
  }]);
  return NotificationProgrammatic2;
}();
var Plugin21 = {
  install: function install21(Vue) {
    registerComponent(Vue, script$19);
    registerComponentProgrammatic(Vue, "notification", new NotificationProgrammatic(Vue));
  }
};
use(Plugin21);

// node_modules/buefy/dist/esm/navbar.js
var script$33 = {
  name: "NavbarBurger",
  props: {
    isOpened: {
      type: Boolean,
      default: false
    }
  }
};
var _hoisted_126 = ["aria-expanded"];
var _hoisted_222 = createBaseVNode(
  "span",
  { "aria-hidden": "true" },
  null,
  -1
  /* HOISTED */
);
var _hoisted_316 = createBaseVNode(
  "span",
  { "aria-hidden": "true" },
  null,
  -1
  /* HOISTED */
);
var _hoisted_412 = createBaseVNode(
  "span",
  { "aria-hidden": "true" },
  null,
  -1
  /* HOISTED */
);
var _hoisted_58 = [
  _hoisted_222,
  _hoisted_316,
  _hoisted_412
];
function render$25(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("a", mergeProps({
    role: "button",
    class: ["navbar-burger burger", { "is-active": $props.isOpened }],
    "aria-label": "menu",
    "aria-expanded": $props.isOpened || void 0
  }, _ctx.$attrs, { tabindex: "0" }), [..._hoisted_58], 16, _hoisted_126);
}
script$33.render = render$25;
script$33.__file = "src/components/navbar/NavbarBurger.vue";
var isTouch = typeof window !== "undefined" && ("ontouchstart" in window || navigator.msMaxTouchPoints > 0);
var events = isTouch ? ["touchstart", "click"] : ["click"];
var instances = [];
function processArgs(bindingValue) {
  var isFunction = typeof bindingValue === "function";
  if (!isFunction && _typeof(bindingValue) !== "object") {
    throw new Error("v-click-outside: Binding value should be a function or an object, ".concat(_typeof(bindingValue), " given"));
  }
  return {
    handler: isFunction ? bindingValue : bindingValue.handler,
    middleware: bindingValue.middleware || function(isClickOutside) {
      return isClickOutside;
    },
    events: bindingValue.events || events
  };
}
function onEvent(_ref) {
  var el = _ref.el, event = _ref.event, handler2 = _ref.handler, middleware = _ref.middleware;
  var isClickOutside = event.target !== el && !el.contains(event.target);
  if (!isClickOutside || !middleware(event, el)) {
    return;
  }
  handler2(event, el);
}
function toggleEventListeners() {
  var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, eventHandlers = _ref2.eventHandlers;
  var action = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "add";
  eventHandlers.forEach(function(_ref3) {
    var event = _ref3.event, handler2 = _ref3.handler;
    document["".concat(action, "EventListener")](event, handler2);
  });
}
function beforeMount4(el, _ref4) {
  var value = _ref4.value;
  var _processArgs = processArgs(value), _handler = _processArgs.handler, middleware = _processArgs.middleware, events2 = _processArgs.events;
  var instance = {
    el,
    eventHandlers: events2.map(function(eventName) {
      return {
        event: eventName,
        handler: function handler2(event) {
          return onEvent({
            event,
            el,
            handler: _handler,
            middleware
          });
        }
      };
    })
  };
  toggleEventListeners(instance, "add");
  instances.push(instance);
}
function updated(el, _ref5) {
  var value = _ref5.value;
  var _processArgs2 = processArgs(value), _handler2 = _processArgs2.handler, middleware = _processArgs2.middleware, events2 = _processArgs2.events;
  var instance = instances.filter(function(instance2) {
    return instance2.el === el;
  })[0];
  toggleEventListeners(instance, "remove");
  instance.eventHandlers = events2.map(function(eventName) {
    return {
      event: eventName,
      handler: function handler2(event) {
        return onEvent({
          event,
          el,
          handler: _handler2,
          middleware
        });
      }
    };
  });
  toggleEventListeners(instance, "add");
}
function unmounted3(el) {
  var instance = instances.filter(function(instance2) {
    return instance2.el === el;
  })[0];
  toggleEventListeners(instance, "remove");
}
var directive2 = {
  beforeMount: beforeMount4,
  updated,
  unmounted: unmounted3,
  instances
};
var clickOutside = directive2;
var FIXED_TOP_CLASS = "is-fixed-top";
var BODY_FIXED_TOP_CLASS = "has-navbar-fixed-top";
var BODY_SPACED_FIXED_TOP_CLASS = "has-spaced-navbar-fixed-top";
var FIXED_BOTTOM_CLASS = "is-fixed-bottom";
var BODY_FIXED_BOTTOM_CLASS = "has-navbar-fixed-bottom";
var BODY_SPACED_FIXED_BOTTOM_CLASS = "has-spaced-navbar-fixed-bottom";
var BODY_CENTERED_CLASS = "has-navbar-centered";
var isFilled = (str) => !!str;
var script$25 = {
  name: "BNavbar",
  components: {
    NavbarBurger: script$33
  },
  directives: {
    clickOutside
  },
  props: {
    type: [String, Object],
    transparent: {
      type: Boolean,
      default: false
    },
    fixedTop: {
      type: Boolean,
      default: false
    },
    fixedBottom: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    centered: {
      type: Boolean,
      default: false
    },
    wrapperClass: {
      type: [String, Array, Object]
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    mobileBurger: {
      type: Boolean,
      default: true
    },
    spaced: Boolean,
    shadow: Boolean
  },
  emits: ["update:modelValue"],
  data() {
    return {
      internalIsActive: this.modelValue,
      _isNavBar: true
      // Used internally by NavbarItem
    };
  },
  computed: {
    isOpened() {
      return this.internalIsActive;
    },
    computedClasses() {
      return [
        this.type,
        {
          [FIXED_TOP_CLASS]: this.fixedTop,
          [FIXED_BOTTOM_CLASS]: this.fixedBottom,
          [BODY_CENTERED_CLASS]: this.centered,
          "is-spaced": this.spaced,
          "has-shadow": this.shadow,
          "is-transparent": this.transparent
        }
      ];
    }
  },
  watch: {
    modelValue: {
      handler(active) {
        this.internalIsActive = active;
      },
      immediate: true
    },
    fixedTop(isSet) {
      this.setBodyFixedTopClass(isSet);
    },
    bottomTop(isSet) {
      this.setBodyFixedBottomClass(isSet);
    }
  },
  methods: {
    toggleActive() {
      this.internalIsActive = !this.internalIsActive;
      this.emitUpdateParentEvent();
    },
    closeMenu() {
      if (this.closeOnClick && this.internalIsActive) {
        this.internalIsActive = false;
        this.emitUpdateParentEvent();
      }
    },
    emitUpdateParentEvent() {
      this.$emit("update:modelValue", this.internalIsActive);
    },
    setBodyClass(className) {
      if (typeof window !== "undefined") {
        document.body.classList.add(className);
      }
    },
    removeBodyClass(className) {
      if (typeof window !== "undefined") {
        document.body.classList.remove(className);
      }
    },
    checkIfFixedPropertiesAreColliding() {
      const areColliding = this.fixedTop && this.fixedBottom;
      if (areColliding) {
        throw new Error("You should choose if the BNavbar is fixed bottom or fixed top, but not both");
      }
    },
    genNavbar() {
      const navBarSlots = [
        this.genNavbarBrandNode(),
        this.genNavbarSlotsNode()
      ];
      if (!isFilled(this.wrapperClass)) {
        return this.genNavbarSlots(navBarSlots);
      }
      const navWrapper = h(
        "div",
        { class: this.wrapperClass },
        navBarSlots
      );
      return this.genNavbarSlots([navWrapper]);
    },
    genNavbarSlots(slots) {
      const vnode = h(
        "nav",
        {
          class: ["navbar", this.computedClasses],
          role: "navigation",
          "aria-label": "main navigation"
        },
        slots
      );
      return withDirectives(vnode, [
        [resolveDirective("click-outside"), this.closeMenu]
      ]);
    },
    genNavbarBrandNode() {
      const children = this.$slots.brand != null ? [this.$slots.brand(), this.genBurgerNode()] : this.genBurgerNode();
      return h(
        "div",
        { class: "navbar-brand" },
        children
      );
    },
    genBurgerNode() {
      if (this.mobileBurger) {
        const defaultBurgerNode = h(
          resolveComponent("navbar-burger"),
          {
            isOpened: this.isOpened,
            onClick: this.toggleActive,
            onKeyup: (event) => {
              if (event.keyCode !== 13) return;
              this.toggleActive();
            }
          }
        );
        const hasBurgerSlot = !!this.$slots.burger;
        return hasBurgerSlot ? this.$slots.burger({
          isOpened: this.isOpened,
          toggleActive: this.toggleActive
        }) : defaultBurgerNode;
      }
    },
    genNavbarSlotsNode() {
      return h(
        "div",
        { class: ["navbar-menu", { "is-active": this.isOpened }] },
        [
          this.genMenuPosition("start"),
          this.genMenuPosition("end")
        ]
      );
    },
    genMenuPosition(positionName) {
      return h(
        "div",
        { class: `navbar-${positionName}` },
        this.$slots[positionName] != null ? this.$slots[positionName]() : []
      );
    },
    setBodyFixedTopClass(isSet) {
      this.checkIfFixedPropertiesAreColliding();
      if (isSet) {
        this.setBodyClass(BODY_FIXED_TOP_CLASS);
        this.spaced && this.setBodyClass(BODY_SPACED_FIXED_TOP_CLASS);
      } else {
        this.removeBodyClass(BODY_FIXED_TOP_CLASS);
        this.removeBodyClass(BODY_SPACED_FIXED_TOP_CLASS);
      }
    },
    setBodyFixedBottomClass(isSet) {
      this.checkIfFixedPropertiesAreColliding();
      if (isSet) {
        this.setBodyClass(BODY_FIXED_BOTTOM_CLASS);
        this.spaced && this.setBodyClass(BODY_SPACED_FIXED_BOTTOM_CLASS);
      } else {
        this.removeBodyClass(BODY_FIXED_BOTTOM_CLASS);
        this.removeBodyClass(BODY_SPACED_FIXED_BOTTOM_CLASS);
      }
    }
  },
  beforeMount() {
    this.fixedTop && this.setBodyFixedTopClass(true);
    this.fixedBottom && this.setBodyFixedBottomClass(true);
  },
  beforeUnmount() {
    if (this.fixedTop) {
      const className = this.spaced ? BODY_SPACED_FIXED_TOP_CLASS : BODY_FIXED_TOP_CLASS;
      this.removeBodyClass(className);
    } else if (this.fixedBottom) {
      const className = this.spaced ? BODY_SPACED_FIXED_BOTTOM_CLASS : BODY_FIXED_BOTTOM_CLASS;
      this.removeBodyClass(className);
    }
  },
  render() {
    return this.genNavbar();
  }
};
script$25.__file = "src/components/navbar/Navbar.vue";
var clickableWhiteList = ["div", "span", "input"];
var script$110 = {
  name: "BNavbarItem",
  inheritAttrs: false,
  props: {
    tag: {
      type: String,
      default: "a"
    },
    active: Boolean
  },
  methods: {
    /**
     * Keypress event that is bound to the document
     */
    keyPress({ key }) {
      if (key === "Escape" || key === "Esc") {
        this.closeMenuRecursive(this, ["NavBar"]);
      }
    },
    /**
     * Close parent if clicked outside.
     */
    handleClickEvent(event) {
      const isOnWhiteList = clickableWhiteList.some((item) => item === event.target.localName);
      if (!isOnWhiteList) {
        const parent = this.closeMenuRecursive(this, ["NavbarDropdown", "NavBar"]);
        if (parent && parent.$data._isNavbarDropdown) this.closeMenuRecursive(parent, ["NavBar"]);
      }
    },
    /**
     * Close parent recursively
     */
    closeMenuRecursive(current, targetComponents) {
      if (!current.$parent) return null;
      const foundItem = targetComponents.reduce((acc, item) => {
        if (current.$parent.$data[`_is${item}`]) {
          current.$parent.closeMenu();
          return current.$parent;
        }
        return acc;
      }, null);
      return foundItem || this.closeMenuRecursive(current.$parent, targetComponents);
    }
  },
  mounted() {
    if (typeof window !== "undefined") {
      this.$el.addEventListener("click", this.handleClickEvent);
      document.addEventListener("keyup", this.keyPress);
    }
  },
  beforeUnmount() {
    if (typeof window !== "undefined") {
      this.$el.removeEventListener("click", this.handleClickEvent);
      document.removeEventListener("keyup", this.keyPress);
    }
  }
};
function render$19(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), mergeProps({
    class: ["navbar-item", {
      "is-active": $props.active
    }]
  }, _ctx.$attrs), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["class"]);
}
script$110.render = render$19;
script$110.__file = "src/components/navbar/NavbarItem.vue";
var script27 = {
  name: "BNavbarDropdown",
  directives: {
    clickOutside
  },
  mixins: [CompatFallthroughMixin],
  props: {
    label: String,
    hoverable: Boolean,
    active: Boolean,
    right: Boolean,
    arrowless: Boolean,
    boxed: Boolean,
    closeOnClick: {
      type: Boolean,
      default: true
    },
    collapsible: Boolean,
    tag: {
      type: String,
      default: "a"
    }
  },
  emits: ["active-change"],
  data() {
    return {
      newActive: this.active,
      isHoverable: this.hoverable,
      _isNavbarDropdown: true
      // Used internally by NavbarItem
    };
  },
  watch: {
    active(value) {
      this.newActive = value;
    },
    newActive(value) {
      this.$emit("active-change", value);
    }
  },
  methods: {
    toggleMenu() {
      this.newActive = !this.newActive;
    },
    showMenu() {
      this.newActive = true;
    },
    /**
    * See naming convetion of navbaritem
    */
    closeMenu() {
      this.newActive = !this.closeOnClick;
      if (this.hoverable && this.closeOnClick) {
        this.isHoverable = false;
      }
    },
    checkHoverable() {
      if (this.hoverable) {
        this.isHoverable = true;
      }
    }
  }
};
function render26(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_click_outside = resolveDirective("click-outside");
  return withDirectives((openBlock(), createElementBlock(
    "div",
    mergeProps({
      class: ["navbar-item has-dropdown", {
        "is-hoverable": $data.isHoverable,
        "is-active": $data.newActive
      }],
      onMouseenter: _cache[0] || (_cache[0] = (...args) => $options.checkHoverable && $options.checkHoverable(...args))
    }, _ctx.rootAttrs),
    [
      (openBlock(), createBlock(resolveDynamicComponent($props.tag), mergeProps({
        class: ["navbar-link", {
          "is-arrowless": $props.arrowless,
          "is-active": $data.newActive && $props.collapsible
        }]
      }, _ctx.fallthroughAttrs, {
        "aria-haspopup": "true",
        onClick: withModifiers($options.toggleMenu, ["prevent"]),
        onKeyup: withKeys($options.toggleMenu, ["enter"]),
        tabindex: "0"
      }), {
        default: withCtx(() => [
          $props.label ? (openBlock(), createElementBlock(
            Fragment,
            { key: 0 },
            [
              createTextVNode(
                toDisplayString($props.label),
                1
                /* TEXT */
              )
            ],
            64
            /* STABLE_FRAGMENT */
          )) : renderSlot(_ctx.$slots, "label", { key: 1 })
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["class", "onClick", "onKeyup"])),
      createBaseVNode(
        "div",
        {
          class: normalizeClass(["navbar-dropdown", {
            "is-right": $props.right,
            "is-boxed": $props.boxed,
            "is-hidden-touch": $props.collapsible && !$data.newActive
          }])
        },
        [
          renderSlot(_ctx.$slots, "default")
        ],
        2
        /* CLASS */
      )
    ],
    16
    /* FULL_PROPS */
  )), [
    [_directive_click_outside, $options.closeMenu]
  ]);
}
script27.render = render26;
script27.__file = "src/components/navbar/NavbarDropdown.vue";
var Plugin22 = {
  install: function install22(Vue) {
    registerComponent(Vue, script$25);
    registerComponent(Vue, script$110);
    registerComponent(Vue, script27);
  }
};
use(Plugin22);

// node_modules/buefy/dist/esm/numberinput.js
var script28 = {
  name: "BNumberinput",
  components: {
    [script.name]: script,
    [script2.name]: script2
  },
  mixins: [CompatFallthroughMixin, FormElementMixin],
  inject: {
    field: {
      from: "BField",
      default: false
    }
  },
  props: {
    modelValue: Number,
    min: {
      type: [Number, String]
    },
    max: [Number, String],
    step: [Number, String],
    minStep: [Number, String],
    exponential: [Boolean, Number],
    disabled: Boolean,
    type: {
      type: String,
      default: "is-primary"
    },
    editable: {
      type: Boolean,
      default: true
    },
    controls: {
      type: Boolean,
      default: true
    },
    controlsAlignment: {
      type: String,
      default: "center",
      validator: (value) => {
        return [
          "left",
          "right",
          "center"
        ].indexOf(value) >= 0;
      }
    },
    controlsRounded: {
      type: Boolean,
      default: false
    },
    controlsPosition: String,
    placeholder: [Number, String],
    ariaMinusLabel: String,
    ariaPlusLabel: String,
    longPress: {
      type: Boolean,
      default: true
    }
  },
  emits: ["blur", "focus", "update:modelValue"],
  data() {
    return {
      newValue: this.modelValue,
      newStep: this.step || 1,
      newMinStep: this.minStep,
      timesPressed: 1,
      _elementRef: "input"
    };
  },
  computed: {
    computedValue: {
      get() {
        return this.newValue;
      },
      set(value) {
        let newValue = Number(value) === 0 ? 0 : Number(value) || null;
        if (value === "" || value === void 0 || value === null) {
          newValue = null;
        }
        this.newValue = newValue;
        if (newValue === null) {
          this.$emit("update:modelValue", newValue);
        } else if (!isNaN(newValue) && newValue !== "-0") {
          this.$emit("update:modelValue", Number(newValue));
        }
        this.$nextTick(() => {
          if (this.$refs.input) {
            this.$refs.input.checkHtml5Validity();
          }
        });
      }
    },
    controlsLeft() {
      if (this.controls && this.controlsAlignment !== "right") {
        return this.controlsAlignment === "left" ? ["minus", "plus"] : ["minus"];
      }
      return [];
    },
    controlsRight() {
      if (this.controls && this.controlsAlignment !== "left") {
        return this.controlsAlignment === "right" ? ["minus", "plus"] : ["plus"];
      }
      return [];
    },
    fieldClasses() {
      return [
        { "has-addons": this.controlsPosition === "compact" },
        { "is-grouped": this.controlsPosition !== "compact" },
        { "is-expanded": this.expanded }
      ];
    },
    buttonClasses() {
      return [this.type, this.size, { "is-rounded": this.controlsRounded }];
    },
    minNumber() {
      return typeof this.min === "string" ? parseFloat(this.min) : this.min;
    },
    maxNumber() {
      return typeof this.max === "string" ? parseFloat(this.max) : this.max;
    },
    stepNumber() {
      if (this.newStep === "any") {
        return 1;
      }
      return typeof this.newStep === "string" ? parseFloat(this.newStep) : this.newStep;
    },
    minStepNumber() {
      if (this.newStep === "any" && typeof this.newMinStep === "undefined") {
        return "any";
      }
      const step = typeof this.newMinStep !== "undefined" ? this.newMinStep : this.newStep;
      return typeof step === "string" ? parseFloat(step) : step;
    },
    disabledMin() {
      return this.computedValue - this.stepNumber < this.minNumber;
    },
    disabledMax() {
      return this.computedValue + this.stepNumber > this.maxNumber;
    },
    stepDecimals() {
      const step = this.minStepNumber.toString();
      const index = step.indexOf(".");
      if (index >= 0) {
        return step.substring(index + 1).length;
      }
      return 0;
    },
    disabledOrUndefined() {
      return this.disabled || void 0;
    }
  },
  watch: {
    /**
     * When v-model is changed:
     *   1. Set internal value.
     */
    modelValue: {
      immediate: true,
      handler(value) {
        this.newValue = value;
      }
    },
    step(value) {
      this.newStep = value;
    },
    minStep(value) {
      this.newMinStep = value;
    }
  },
  methods: {
    isDisabled(control) {
      return this.disabled || (control === "plus" ? this.disabledMax : this.disabledMin);
    },
    decrement() {
      if (this.computedValue === null || typeof this.computedValue === "undefined") {
        if (this.maxNumber !== null && typeof this.maxNumber !== "undefined") {
          this.computedValue = this.maxNumber;
          return;
        }
        this.computedValue = 0;
      }
      if (typeof this.minNumber === "undefined" || this.computedValue - this.stepNumber >= this.minNumber) {
        const value = this.computedValue - this.stepNumber;
        this.computedValue = parseFloat(value.toFixed(this.stepDecimals));
      }
    },
    increment() {
      if (this.computedValue === null || typeof this.computedValue === "undefined" || this.computedValue < this.minNumber) {
        if (this.minNumber !== null && typeof this.minNumber !== "undefined") {
          this.computedValue = this.minNumber;
          return;
        }
        this.computedValue = 0;
      }
      if (typeof this.maxNumber === "undefined" || this.computedValue + this.stepNumber <= this.maxNumber) {
        const value = this.computedValue + this.stepNumber;
        this.computedValue = parseFloat(value.toFixed(this.stepDecimals));
      }
    },
    onControlClick(event, inc) {
      if (event.detail !== 0 || event.type !== "click") return;
      if (inc) this.increment();
      else this.decrement();
    },
    longPressTick(inc) {
      if (inc) this.increment();
      else this.decrement();
      if (!this.longPress) return;
      this._$intervalRef = setTimeout(() => {
        this.longPressTick(inc);
      }, this.exponential ? 250 / (this.exponential * this.timesPressed++) : 250);
    },
    onStartLongPress(event, inc) {
      if (event.button !== 0 && event.type !== "touchstart") return;
      clearTimeout(this._$intervalRef);
      this.longPressTick(inc);
    },
    onStopLongPress() {
      if (!this._$intervalRef) return;
      this.timesPressed = 1;
      clearTimeout(this._$intervalRef);
      this._$intervalRef = null;
    }
  },
  mounted() {
    if (this.field === this.$parent) {
      this.$parent.wrapNumberinput({
        controlsPosition: this.controlsPosition,
        size: this.size
      });
    }
  },
  beforeUnmount() {
    clearTimeout(this._$intervalRef);
  }
};
var _hoisted_127 = ["disabled", "aria-label", "onMousedown", "onTouchstart", "onClick"];
var _hoisted_223 = ["disabled", "aria-label", "onMousedown", "onTouchstart", "onClick"];
function render27(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");
  const _component_b_input = resolveComponent("b-input");
  return openBlock(), createElementBlock(
    "div",
    mergeProps({
      class: ["b-numberinput field", $options.fieldClasses]
    }, _ctx.rootAttrs),
    [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($options.controlsLeft, (control) => {
          return openBlock(), createElementBlock(
            "p",
            {
              key: control,
              class: normalizeClass(["control", control]),
              onMouseup: _cache[0] || (_cache[0] = (...args) => $options.onStopLongPress && $options.onStopLongPress(...args)),
              onMouseleave: _cache[1] || (_cache[1] = (...args) => $options.onStopLongPress && $options.onStopLongPress(...args)),
              onTouchend: _cache[2] || (_cache[2] = (...args) => $options.onStopLongPress && $options.onStopLongPress(...args)),
              onTouchcancel: _cache[3] || (_cache[3] = (...args) => $options.onStopLongPress && $options.onStopLongPress(...args))
            },
            [
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass(["button", $options.buttonClasses]),
                disabled: $options.isDisabled(control) || void 0,
                "aria-label": control === "plus" ? $props.ariaPlusLabel : $props.ariaMinusLabel,
                onMousedown: ($event) => !$options.isDisabled(control) && $options.onStartLongPress($event, control === "plus"),
                onTouchstart: withModifiers(($event) => !$options.isDisabled(control) && $options.onStartLongPress($event, control === "plus"), ["prevent"]),
                onClick: ($event) => !$options.isDisabled(control) && $options.onControlClick($event, control === "plus")
              }, [
                createVNode(_component_b_icon, {
                  both: "",
                  icon: control,
                  pack: _ctx.iconPack,
                  size: _ctx.iconSize
                }, null, 8, ["icon", "pack", "size"])
              ], 42, _hoisted_127)
            ],
            34
            /* CLASS, HYDRATE_EVENTS */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      createVNode(_component_b_input, mergeProps({
        type: "number",
        ref: "input",
        modelValue: $options.computedValue,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $options.computedValue = $event)
      }, _ctx.fallthroughAttrs, {
        step: $options.minStepNumber,
        max: $props.max,
        min: $props.min,
        size: _ctx.size,
        disabled: $options.disabledOrUndefined,
        readonly: !$props.editable,
        loading: _ctx.loading,
        rounded: _ctx.rounded,
        icon: _ctx.icon,
        "icon-pack": _ctx.iconPack,
        autocomplete: _ctx.autocomplete,
        expanded: _ctx.expanded,
        placeholder: $props.placeholder,
        "use-html5-validation": _ctx.useHtml5Validation,
        onFocus: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("focus", $event)),
        onBlur: _cache[6] || (_cache[6] = ($event) => _ctx.$emit("blur", $event))
      }), null, 16, ["modelValue", "step", "max", "min", "size", "disabled", "readonly", "loading", "rounded", "icon", "icon-pack", "autocomplete", "expanded", "placeholder", "use-html5-validation"]),
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($options.controlsRight, (control) => {
          return openBlock(), createElementBlock(
            "p",
            {
              key: control,
              class: normalizeClass(["control", control]),
              onMouseup: _cache[7] || (_cache[7] = (...args) => $options.onStopLongPress && $options.onStopLongPress(...args)),
              onMouseleave: _cache[8] || (_cache[8] = (...args) => $options.onStopLongPress && $options.onStopLongPress(...args)),
              onTouchend: _cache[9] || (_cache[9] = (...args) => $options.onStopLongPress && $options.onStopLongPress(...args)),
              onTouchcancel: _cache[10] || (_cache[10] = (...args) => $options.onStopLongPress && $options.onStopLongPress(...args))
            },
            [
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass(["button", $options.buttonClasses]),
                disabled: $options.isDisabled(control) || void 0,
                "aria-label": control === "plus" ? $props.ariaPlusLabel : $props.ariaMinusLabel,
                onMousedown: ($event) => !$options.isDisabled(control) && $options.onStartLongPress($event, control === "plus"),
                onTouchstart: withModifiers(($event) => !$options.isDisabled(control) && $options.onStartLongPress($event, control === "plus"), ["prevent"]),
                onClick: ($event) => !$options.isDisabled(control) && $options.onControlClick($event, control === "plus")
              }, [
                createVNode(_component_b_icon, {
                  both: "",
                  icon: control,
                  pack: _ctx.iconPack,
                  size: _ctx.iconSize
                }, null, 8, ["icon", "pack", "size"])
              ], 42, _hoisted_223)
            ],
            34
            /* CLASS, HYDRATE_EVENTS */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ],
    16
    /* FULL_PROPS */
  );
}
script28.render = render27;
script28.__file = "src/components/numberinput/Numberinput.vue";
var Plugin23 = {
  install: function install23(Vue) {
    registerComponent(Vue, script28);
  }
};
use(Plugin23);

// node_modules/buefy/dist/esm/Pagination-FX3EMQVP.js
var script$111 = {
  name: "BPaginationButton",
  props: {
    page: {
      type: Object,
      required: true
    },
    tag: {
      type: String,
      default: "a",
      validator: (value) => {
        return config.defaultLinkTags.indexOf(value) >= 0;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    href() {
      if (this.tag === "a") {
        return "#";
      } else {
        return void 0;
      }
    },
    isDisabled() {
      return this.disabled || this.page.disabled;
    },
    disabledOrUndefined() {
      return this.isDisabled || void 0;
    }
  }
};
function render$110(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), mergeProps({
    role: "button",
    href: $options.href,
    disabled: $options.disabledOrUndefined,
    class: ["pagination-link", { "is-current": $props.page.isCurrent, [$props.page.class]: true }]
  }, _ctx.$attrs, {
    onClick: withModifiers($props.page.click, ["prevent"]),
    "aria-label": $props.page["aria-label"],
    "aria-current": $props.page.isCurrent || void 0
  }), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createTextVNode(
          toDisplayString($props.page.number),
          1
          /* TEXT */
        )
      ])
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["href", "disabled", "class", "onClick", "aria-label", "aria-current"]);
}
script$111.render = render$110;
script$111.__file = "src/components/pagination/PaginationButton.vue";
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this;
    var args = arguments;
    var later = function later2() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
var script29 = {
  name: "BPagination",
  components: {
    [script.name]: script,
    [script$111.name]: script$111
  },
  props: {
    total: [Number, String],
    perPage: {
      type: [Number, String],
      default: 20
    },
    modelValue: {
      type: [Number, String],
      default: 1
    },
    rangeBefore: {
      type: [Number, String],
      default: 1
    },
    rangeAfter: {
      type: [Number, String],
      default: 1
    },
    size: String,
    simple: Boolean,
    rounded: Boolean,
    order: String,
    iconPack: String,
    iconPrev: {
      type: String,
      default: () => {
        return config.defaultIconPrev;
      }
    },
    iconNext: {
      type: String,
      default: () => {
        return config.defaultIconNext;
      }
    },
    ariaNextLabel: String,
    ariaPreviousLabel: String,
    ariaPageLabel: String,
    ariaCurrentLabel: String,
    pageInput: {
      type: Boolean,
      default: false
    },
    pageInputPosition: String,
    debouncePageInput: [Number, String]
  },
  data() {
    return {
      inputValue: this.modelValue
    };
  },
  emits: ["change", "update:modelValue"],
  computed: {
    rootClasses() {
      return [
        this.order,
        this.size,
        this.pageInputPosition,
        {
          "is-simple": this.simple,
          "is-rounded": this.rounded,
          "has-input": this.pageInput
        }
      ];
    },
    beforeCurrent() {
      return parseInt(this.rangeBefore);
    },
    afterCurrent() {
      return parseInt(this.rangeAfter);
    },
    /**
    * Total page size (count).
    */
    pageCount() {
      return Math.ceil(this.total / this.perPage);
    },
    /**
    * First item of the page (count).
    */
    firstItem() {
      const firstItem = this.modelValue * this.perPage - this.perPage + 1;
      return firstItem >= 0 ? firstItem : 0;
    },
    /**
    * Check if previous button is available.
    */
    hasPrev() {
      return this.modelValue > 1;
    },
    /**
     * Check if first page button should be visible.
    */
    hasFirst() {
      return this.modelValue >= 2 + this.beforeCurrent;
    },
    /**
    * Check if first ellipsis should be visible.
    */
    hasFirstEllipsis() {
      return this.modelValue >= this.beforeCurrent + 4;
    },
    /**
    * Check if last page button should be visible.
    */
    hasLast() {
      return this.modelValue <= this.pageCount - (1 + this.afterCurrent);
    },
    /**
    * Check if last ellipsis should be visible.
    */
    hasLastEllipsis() {
      return this.modelValue < this.pageCount - (2 + this.afterCurrent);
    },
    /**
    * Check if next button is available.
    */
    hasNext() {
      return this.modelValue < this.pageCount;
    },
    /**
    * Get near pages, 1 before and 1 after the current.
    * Also add the click event to the array.
    */
    pagesInRange() {
      if (this.simple) return;
      let left = Math.max(1, this.modelValue - this.beforeCurrent);
      if (left - 1 === 2) {
        left--;
      }
      let right = Math.min(this.modelValue + this.afterCurrent, this.pageCount);
      if (this.pageCount - right === 2) {
        right++;
      }
      const pages = [];
      for (let i = left; i <= right; i++) {
        pages.push(this.getPage(i));
      }
      return pages;
    }
  },
  watch: {
    /**
    * If current page is trying to be greater than page count, set to last.
    */
    pageCount(value) {
      if (this.modelValue > value) this.last();
    },
    modelValue(value) {
      this.inputValue = value;
    },
    debouncePageInput: {
      handler(value) {
        this.debounceHandlePageInput = debounce(
          this.handleOnInputPageChange,
          value
        );
      },
      immediate: true
    }
  },
  methods: {
    /**
    * Previous button click listener.
    */
    prev(event) {
      this.changePage(this.modelValue - 1, event);
    },
    /**
     * Next button click listener.
    */
    next(event) {
      this.changePage(this.modelValue + 1, event);
    },
    /**
     * First button click listener.
    */
    first(event) {
      this.changePage(1, event);
    },
    /**
    * Last button click listener.
    */
    last(event) {
      this.changePage(this.pageCount, event);
    },
    changePage(num, event) {
      if (this.modelValue === num || num < 1 || num > this.pageCount) return;
      this.$emit("update:modelValue", num);
      this.$emit("change", num);
      if (event && event.target) {
        this.$nextTick(() => event.target.focus());
      }
    },
    getPage(num, options = {}) {
      return {
        number: num,
        isCurrent: this.modelValue === num,
        click: (event) => this.changePage(num, event),
        input: (event, inputNum) => this.changePage(+inputNum, event),
        disabled: options.disabled || false,
        class: options.class || "",
        "aria-label": options["aria-label"] || this.getAriaPageLabel(num, this.modelValue === num)
      };
    },
    /**
    * Get text for aria-label according to page number.
    */
    getAriaPageLabel(pageNumber, isCurrent) {
      if (this.ariaPageLabel && (!isCurrent || !this.ariaCurrentLabel)) {
        return this.ariaPageLabel + " " + pageNumber + ".";
      } else if (this.ariaPageLabel && isCurrent && this.ariaCurrentLabel) {
        return this.ariaCurrentLabel + ", " + this.ariaPageLabel + " " + pageNumber + ".";
      }
      return null;
    },
    handleOnInputPageChange(event) {
      this.getPage(this.inputValue).input(event, this.inputValue);
    },
    handleOnInputDebounce(event) {
      if (this.debouncePageInput) {
        this.debounceHandlePageInput(event);
      } else {
        this.handleOnInputPageChange(event);
      }
    },
    handleOnKeyPress(event) {
      const ASCIICode = event.which || event.keyCode;
      if (ASCIICode >= 48 && ASCIICode <= 57) {
        return true;
      } else {
        return event.preventDefault();
      }
    },
    handleAllowableInputPageRange(event) {
      if (+event.target.value > 0 && +event.target.value <= this.pageCount) {
        this.handleOnInputValue(event);
      } else {
        this.inputValue = 1;
        this.inputValue = "";
      }
    },
    handleOnInputValue(event) {
      const inputValue = +event.target.value;
      this.inputValue = inputValue;
      if (Number.isInteger(this.inputValue)) {
        this.handleOnInputDebounce(event);
      } else {
        this.inputValue = this.modelValue;
      }
    }
  }
};
var _hoisted_128 = { class: "control pagination-input" };
var _hoisted_224 = ["value", "size", "maxlength"];
var _hoisted_317 = {
  key: 4,
  class: "info"
};
var _hoisted_413 = {
  key: 5,
  class: "pagination-list"
};
var _hoisted_59 = { key: 0 };
var _hoisted_67 = { key: 1 };
var _hoisted_77 = createBaseVNode(
  "span",
  { class: "pagination-ellipsis" },
  "…",
  -1
  /* HOISTED */
);
var _hoisted_86 = [
  _hoisted_77
];
var _hoisted_94 = { key: 2 };
var _hoisted_103 = createBaseVNode(
  "span",
  { class: "pagination-ellipsis" },
  "…",
  -1
  /* HOISTED */
);
var _hoisted_1110 = [
  _hoisted_103
];
var _hoisted_129 = { key: 3 };
function render28(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");
  const _component_BPaginationButton = resolveComponent("BPaginationButton");
  return openBlock(), createElementBlock(
    "nav",
    {
      class: normalizeClass(["pagination", $options.rootClasses])
    },
    [
      _ctx.$slots.previous ? renderSlot(_ctx.$slots, "previous", {
        key: 0,
        page: $options.getPage($props.modelValue - 1, {
          disabled: !$options.hasPrev,
          class: "pagination-previous",
          "aria-label": $props.ariaPreviousLabel
        })
      }, () => [
        createVNode(_component_b_icon, {
          icon: $props.iconPrev,
          pack: $props.iconPack,
          both: "",
          "aria-hidden": "true"
        }, null, 8, ["icon", "pack"])
      ]) : (openBlock(), createBlock(_component_BPaginationButton, {
        key: 1,
        class: "pagination-previous",
        disabled: !$options.hasPrev,
        page: $options.getPage($props.modelValue - 1),
        "aria-label": $props.ariaPreviousLabel
      }, {
        default: withCtx(() => [
          createVNode(_component_b_icon, {
            icon: $props.iconPrev,
            pack: $props.iconPack,
            both: "",
            "aria-hidden": "true"
          }, null, 8, ["icon", "pack"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["disabled", "page", "aria-label"])),
      _ctx.$slots.next ? renderSlot(_ctx.$slots, "next", {
        key: 2,
        page: $options.getPage($props.modelValue + 1, {
          disabled: !$options.hasNext,
          class: "pagination-next",
          "aria-label": $props.ariaNextLabel
        })
      }, () => [
        createVNode(_component_b_icon, {
          icon: $props.iconNext,
          pack: $props.iconPack,
          both: "",
          "aria-hidden": "true"
        }, null, 8, ["icon", "pack"])
      ]) : (openBlock(), createBlock(_component_BPaginationButton, {
        key: 3,
        class: "pagination-next",
        disabled: !$options.hasNext,
        page: $options.getPage($props.modelValue + 1),
        "aria-label": $props.ariaNextLabel
      }, {
        default: withCtx(() => [
          createVNode(_component_b_icon, {
            icon: $props.iconNext,
            pack: $props.iconPack,
            both: "",
            "aria-hidden": "true"
          }, null, 8, ["icon", "pack"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["disabled", "page", "aria-label"])),
      createBaseVNode("div", _hoisted_128, [
        $props.pageInput ? (openBlock(), createElementBlock("input", {
          key: 0,
          class: "input",
          value: $data.inputValue,
          onInput: _cache[0] || (_cache[0] = (...args) => $options.handleAllowableInputPageRange && $options.handleAllowableInputPageRange(...args)),
          onKeypress: _cache[1] || (_cache[1] = (...args) => $options.handleOnKeyPress && $options.handleOnKeyPress(...args)),
          size: $options.pageCount.toString().length,
          maxlength: $options.pageCount.toString().length
        }, null, 40, _hoisted_224)) : createCommentVNode("v-if", true)
      ]),
      $props.simple ? (openBlock(), createElementBlock("small", _hoisted_317, [
        $props.perPage == 1 ? (openBlock(), createElementBlock(
          Fragment,
          { key: 0 },
          [
            createTextVNode(
              toDisplayString($options.firstItem) + " / " + toDisplayString($props.total),
              1
              /* TEXT */
            )
          ],
          64
          /* STABLE_FRAGMENT */
        )) : (openBlock(), createElementBlock(
          Fragment,
          { key: 1 },
          [
            createTextVNode(
              toDisplayString($options.firstItem) + "-" + toDisplayString(Math.min($props.modelValue * $props.perPage, $props.total)) + " / " + toDisplayString($props.total),
              1
              /* TEXT */
            )
          ],
          64
          /* STABLE_FRAGMENT */
        ))
      ])) : (openBlock(), createElementBlock("ul", _hoisted_413, [
        createCommentVNode("First"),
        $options.hasFirst ? (openBlock(), createElementBlock("li", _hoisted_59, [
          _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", {
            key: 0,
            page: $options.getPage(1)
          }) : (openBlock(), createBlock(_component_BPaginationButton, {
            key: 1,
            page: $options.getPage(1)
          }, null, 8, ["page"]))
        ])) : createCommentVNode("v-if", true),
        $options.hasFirstEllipsis ? (openBlock(), createElementBlock("li", _hoisted_67, [..._hoisted_86])) : createCommentVNode("v-if", true),
        createCommentVNode("Pages"),
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($options.pagesInRange, (page) => {
            return openBlock(), createElementBlock("li", {
              key: page.number
            }, [
              _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", {
                key: 0,
                page
              }) : (openBlock(), createBlock(_component_BPaginationButton, {
                key: 1,
                page
              }, null, 8, ["page"]))
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        )),
        createCommentVNode("Last"),
        $options.hasLastEllipsis ? (openBlock(), createElementBlock("li", _hoisted_94, [..._hoisted_1110])) : createCommentVNode("v-if", true),
        $options.hasLast ? (openBlock(), createElementBlock("li", _hoisted_129, [
          _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", {
            key: 0,
            page: $options.getPage($options.pageCount)
          }) : (openBlock(), createBlock(_component_BPaginationButton, {
            key: 1,
            page: $options.getPage($options.pageCount)
          }, null, 8, ["page"]))
        ])) : createCommentVNode("v-if", true)
      ]))
    ],
    2
    /* CLASS */
  );
}
script29.render = render28;
script29.__file = "src/components/pagination/Pagination.vue";

// node_modules/buefy/dist/esm/pagination.js
var Plugin24 = {
  install: function install24(Vue) {
    registerComponent(Vue, script29);
    registerComponent(Vue, script$111);
  }
};
use(Plugin24);

// node_modules/buefy/dist/esm/progress.js
var script30 = {
  name: "BProgressBar",
  inject: {
    parent: {
      from: PROGRESS_INJECTION_KEY,
      default: void 0
    }
  },
  props: {
    type: {
      type: [String, Object],
      default: void 0
    },
    value: {
      type: Number,
      default: void 0
    },
    showValue: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    newType() {
      return [
        this.parent.size,
        this.type || this.parent.type
      ];
    },
    newShowValue() {
      return this.showValue || this.parent.showValue;
    },
    newValue() {
      return this.parent.calculateValue(this.value);
    },
    barWidth() {
      return `${this.value * 100 / this.parent.max}%`;
    }
  }
};
var _hoisted_130 = ["aria-valuenow", "aria-valuemax"];
var _hoisted_225 = {
  key: 0,
  class: "progress-value"
};
function render29(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["progress-bar", $options.newType]),
    role: "progressbar",
    "aria-valuenow": $props.value,
    "aria-valuemax": $options.parent.max,
    "aria-valuemin": "0",
    style: normalizeStyle({ width: $options.barWidth })
  }, [
    $options.newShowValue ? (openBlock(), createElementBlock("p", _hoisted_225, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createTextVNode(
          toDisplayString($options.newValue),
          1
          /* TEXT */
        )
      ])
    ])) : createCommentVNode("v-if", true)
  ], 14, _hoisted_130);
}
script30.render = render29;
script30.__file = "src/components/progress/ProgressBar.vue";
var Plugin25 = {
  install: function install25(Vue) {
    registerComponent(Vue, script25);
    registerComponent(Vue, script30);
  }
};
use(Plugin25);

// node_modules/buefy/dist/esm/radio.js
var script$112 = {
  name: "BRadio",
  mixins: [CheckRadioMixin]
};
var _hoisted_1$17 = ["disabled"];
var _hoisted_2$15 = ["disabled", "required", "name", "value"];
var _hoisted_318 = { class: "control-label" };
function render$111(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", {
    class: normalizeClass(["b-radio radio", [_ctx.size, { "is-disabled": _ctx.disabled }]]),
    ref: "label",
    disabled: _ctx.disabledOrUndefined,
    onClick: _cache[2] || (_cache[2] = (...args) => _ctx.focus && _ctx.focus(...args)),
    onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => _ctx.$refs.label.click(), ["prevent"]), ["enter"]))
  }, [
    withDirectives(createBaseVNode("input", {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.computedValue = $event),
      type: "radio",
      ref: "input",
      onClick: _cache[1] || (_cache[1] = withModifiers(() => {
      }, ["stop"])),
      disabled: _ctx.disabledOrUndefined,
      required: _ctx.requiredOrUndefined,
      name: _ctx.name,
      value: _ctx.nativeValue
    }, null, 8, _hoisted_2$15), [
      [vModelRadio, _ctx.computedValue]
    ]),
    createBaseVNode(
      "span",
      {
        class: normalizeClass(["check", _ctx.type])
      },
      null,
      2
      /* CLASS */
    ),
    createBaseVNode("span", _hoisted_318, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 42, _hoisted_1$17);
}
script$112.render = render$111;
script$112.__file = "src/components/radio/Radio.vue";
var script31 = {
  name: "BRadioButton",
  mixins: [CheckRadioMixin],
  props: {
    type: {
      type: String,
      default: "is-primary"
    },
    expanded: Boolean
  },
  data() {
    return {
      isFocused: false
    };
  },
  computed: {
    isSelected() {
      return this.newValue === this.nativeValue;
    },
    labelClass() {
      return [
        this.isSelected ? this.type : null,
        this.size,
        {
          "is-selected": this.isSelected,
          "is-disabled": this.disabled,
          "is-focused": this.isFocused
        }
      ];
    }
  }
};
var _hoisted_131 = ["disabled"];
var _hoisted_226 = ["disabled", "required", "name", "value"];
function render30(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["control", { "is-expanded": $props.expanded }])
    },
    [
      createBaseVNode("label", {
        class: normalizeClass(["b-radio radio button", $options.labelClass]),
        ref: "label",
        disabled: _ctx.disabledOrUndefined,
        onClick: _cache[4] || (_cache[4] = (...args) => _ctx.focus && _ctx.focus(...args)),
        onKeydown: _cache[5] || (_cache[5] = withKeys(withModifiers(($event) => _ctx.$refs.label.click(), ["prevent"]), ["enter"]))
      }, [
        renderSlot(_ctx.$slots, "default"),
        withDirectives(createBaseVNode("input", {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.computedValue = $event),
          type: "radio",
          ref: "input",
          onClick: _cache[1] || (_cache[1] = withModifiers(() => {
          }, ["stop"])),
          disabled: _ctx.disabledOrUndefined,
          required: _ctx.requiredOrUndefined,
          name: _ctx.name,
          value: _ctx.nativeValue,
          onFocus: _cache[2] || (_cache[2] = ($event) => $data.isFocused = true),
          onBlur: _cache[3] || (_cache[3] = ($event) => $data.isFocused = false)
        }, null, 40, _hoisted_226), [
          [vModelRadio, _ctx.computedValue]
        ])
      ], 42, _hoisted_131)
    ],
    2
    /* CLASS */
  );
}
script31.render = render30;
script31.__file = "src/components/radio/RadioButton.vue";
var Plugin26 = {
  install: function install26(Vue) {
    registerComponent(Vue, script$112);
    registerComponent(Vue, script31);
  }
};
use(Plugin26);

// node_modules/buefy/dist/esm/rate.js
var script32 = {
  name: "BRate",
  components: {
    [script.name]: script
  },
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
    },
    icon: {
      type: String,
      default: "star"
    },
    iconPack: String,
    size: String,
    spaced: Boolean,
    rtl: Boolean,
    disabled: Boolean,
    showScore: Boolean,
    showText: Boolean,
    customText: String,
    texts: Array,
    locale: {
      type: [String, Array],
      default: () => {
        return config.defaultLocale;
      }
    }
  },
  emits: ["change", "update:modelValue"],
  data() {
    return {
      newValue: this.modelValue,
      hoverValue: 0
    };
  },
  computed: {
    halfStyle() {
      return `width:${this.valueDecimal}%`;
    },
    showMe() {
      let result = "";
      if (this.showScore) {
        result = this.disabled ? this.modelValue : this.newValue;
        if (result === 0) {
          result = "";
        } else {
          result = new Intl.NumberFormat(this.locale).format(this.modelValue);
        }
      } else if (this.showText) {
        result = this.texts[Math.ceil(this.newValue) - 1];
      }
      return result;
    },
    valueDecimal() {
      return this.modelValue * 100 - Math.floor(this.modelValue) * 100;
    }
  },
  watch: {
    // When v-model is changed set the new value.
    modelValue(value) {
      this.newValue = value;
    }
  },
  methods: {
    resetNewValue() {
      if (this.disabled) return;
      this.hoverValue = 0;
    },
    previewRate(index, event) {
      if (this.disabled) return;
      this.hoverValue = index;
      event.stopPropagation();
    },
    confirmValue(index) {
      if (this.disabled) return;
      this.newValue = index;
      this.$emit("change", this.newValue);
      this.$emit("update:modelValue", this.newValue);
    },
    checkHalf(index) {
      const showWhenDisabled = this.disabled && this.valueDecimal > 0 && index - 1 < this.modelValue && index > this.modelValue;
      return showWhenDisabled;
    },
    rateClass(index) {
      let output = "";
      const currentValue = this.hoverValue !== 0 ? this.hoverValue : this.newValue;
      if (index <= currentValue) {
        output = "set-on";
      } else if (this.disabled && Math.ceil(this.modelValue) === index) {
        output = "set-half";
      }
      return output;
    }
  }
};
var _hoisted_133 = ["onMousemove", "onClick"];
var _hoisted_227 = { key: 0 };
function render31(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["rate", { "is-disabled": $props.disabled, "is-spaced": $props.spaced, "is-rtl": $props.rtl }])
    },
    [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($props.max, (item, index) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(["rate-item", $options.rateClass(item)]),
            key: index,
            onMousemove: ($event) => $options.previewRate(item, $event),
            onMouseleave: _cache[0] || (_cache[0] = (...args) => $options.resetNewValue && $options.resetNewValue(...args)),
            onClick: withModifiers(($event) => $options.confirmValue(item), ["prevent"])
          }, [
            createVNode(_component_b_icon, {
              pack: $props.iconPack,
              icon: $props.icon,
              size: $props.size
            }, null, 8, ["pack", "icon", "size"]),
            $options.checkHalf(item) ? (openBlock(), createBlock(_component_b_icon, {
              key: 0,
              class: "is-half",
              pack: $props.iconPack,
              icon: $props.icon,
              size: $props.size,
              style: normalizeStyle($options.halfStyle)
            }, null, 8, ["pack", "icon", "size", "style"])) : createCommentVNode("v-if", true)
          ], 42, _hoisted_133);
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      $props.showText || $props.showScore || $props.customText ? (openBlock(), createElementBlock(
        "div",
        {
          key: 0,
          class: normalizeClass(["rate-text", $props.size])
        },
        [
          createBaseVNode(
            "span",
            null,
            toDisplayString($options.showMe),
            1
            /* TEXT */
          ),
          $props.customText && !$props.showText ? (openBlock(), createElementBlock(
            "span",
            _hoisted_227,
            toDisplayString($props.customText),
            1
            /* TEXT */
          )) : createCommentVNode("v-if", true)
        ],
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
script32.render = render31;
script32.__file = "src/components/rate/Rate.vue";
var Plugin27 = {
  install: function install27(Vue) {
    registerComponent(Vue, script32);
  }
};
use(Plugin27);

// node_modules/buefy/dist/esm/select.js
var Plugin28 = {
  install: function install28(Vue) {
    registerComponent(Vue, script14);
  }
};
use(Plugin28);

// node_modules/buefy/dist/esm/skeleton.js
var BSkeleton = (props) => {
  if (!props.active) return;
  const items2 = [];
  const width = props.width;
  const height = props.height;
  for (let i = 0; i < props.count; i++) {
    items2.push(h("div", {
      class: [
        "b-skeleton-item",
        { "is-rounded": props.rounded }
      ],
      key: i,
      style: {
        height: height === void 0 ? null : isNaN(height) ? height : height + "px",
        width: width === void 0 ? null : isNaN(width) ? width : width + "px",
        borderRadius: props.circle ? "50%" : null
      }
    }));
  }
  return h(
    "div",
    {
      class: [
        "b-skeleton",
        props.size,
        props.position,
        { "is-animated": props.animated }
      ]
    },
    items2
  );
};
BSkeleton.props = {
  active: {
    type: Boolean,
    default: true
  },
  animated: {
    type: Boolean,
    default: true
  },
  width: [Number, String],
  height: [Number, String],
  circle: Boolean,
  rounded: {
    type: Boolean,
    default: true
  },
  count: {
    type: Number,
    default: 1
  },
  position: {
    type: String,
    default: "",
    validator(value) {
      return [
        "",
        "is-centered",
        "is-right"
      ].indexOf(value) > -1;
    }
  },
  size: String
};
var script33 = BSkeleton;
script33.__file = "src/components/skeleton/Skeleton.vue";
var Plugin29 = {
  install: function install29(Vue) {
    registerComponent(Vue, script33, "BSkeleton");
  }
};
use(Plugin29);

// node_modules/buefy/dist/esm/sidebar.js
var script34 = {
  name: "BSidebar",
  props: {
    modelValue: Boolean,
    type: [String, Object],
    overlay: Boolean,
    position: {
      type: String,
      default: "fixed",
      validator: (value) => {
        return [
          "fixed",
          "absolute",
          "static"
        ].indexOf(value) >= 0;
      }
    },
    fullheight: Boolean,
    fullwidth: Boolean,
    right: Boolean,
    mobile: {
      type: String
    },
    reduce: Boolean,
    expandOnHover: Boolean,
    expandOnHoverFixed: Boolean,
    delay: {
      type: Number,
      default: () => config.defaultSidebarDelay
    },
    canCancel: {
      type: [Array, Boolean],
      default: () => ["escape", "outside"]
    },
    onCancel: {
      type: Function,
      default: () => {
      }
    },
    scroll: {
      type: String,
      default: () => {
        return config.defaultModalScroll ? config.defaultModalScroll : "clip";
      },
      validator: (value) => {
        return [
          "clip",
          "keep"
        ].indexOf(value) >= 0;
      }
    }
  },
  emits: ["close", "update:modelValue"],
  data() {
    return {
      isOpen: this.modelValue,
      isDelayOver: false,
      transitionName: null,
      animating: true,
      savedScrollTop: null,
      hasLeaved: false
    };
  },
  computed: {
    rootClasses() {
      return [this.type, {
        "is-fixed": this.isFixed,
        "is-static": this.isStatic,
        "is-absolute": this.isAbsolute,
        "is-fullheight": this.fullheight,
        "is-fullwidth": this.fullwidth,
        "is-right": this.right,
        "is-mini": this.reduce && !this.isDelayOver,
        "is-mini-expand": this.expandOnHover || this.isDelayOver,
        "is-mini-expand-fixed": this.expandOnHover && this.expandOnHoverFixed || this.isDelayOver,
        "is-mini-delayed": this.delay !== null,
        "is-mini-mobile": this.mobile === "reduce",
        "is-hidden-mobile": this.mobile === "hide",
        "is-fullwidth-mobile": this.mobile === "fullwidth"
      }];
    },
    cancelOptions() {
      return typeof this.canCancel === "boolean" ? this.canCancel ? ["escape", "outside"] : [] : this.canCancel;
    },
    isStatic() {
      return this.position === "static";
    },
    isFixed() {
      return this.position === "fixed";
    },
    isAbsolute() {
      return this.position === "absolute";
    }
  },
  watch: {
    modelValue: {
      handler(value) {
        this.isOpen = value;
        if (this.overlay) {
          this.handleScroll();
        }
        const open2 = this.right ? !value : value;
        this.transitionName = !open2 ? "slide-prev" : "slide-next";
      },
      immediate: true
    }
  },
  methods: {
    /**
    * Keypress event that is bound to the document.
    */
    keyPress({ key }) {
      if (this.isFixed) {
        if (this.isOpen && (key === "Escape" || key === "Esc")) this.cancel("escape");
      }
    },
    /**
    * Close the Sidebar if canCancel and call the onCancel prop (function).
    */
    cancel(method) {
      if (this.cancelOptions.indexOf(method) < 0) return;
      if (this.isStatic) return;
      this.onCancel.apply(null, arguments);
      this.close();
    },
    /**
    * Call the onCancel prop (function) and emit events
    */
    close() {
      this.isOpen = false;
      this.$emit("close");
      this.$emit("update:modelValue", false);
    },
    /**
     * Close fixed sidebar if clicked outside.
     */
    clickedOutside(event) {
      if (!this.isFixed || !this.isOpen || this.animating) {
        return;
      }
      if (!event.composedPath().includes(this.$refs.sidebarContent)) {
        this.cancel("outside");
      }
    },
    /**
    * Transition before-enter hook
    */
    beforeEnter() {
      this.animating = true;
    },
    /**
    * Transition after-leave hook
    */
    afterEnter() {
      this.animating = false;
    },
    handleScroll() {
      if (typeof window === "undefined") return;
      if (this.scroll === "clip") {
        if (this.modelValue) {
          document.documentElement.classList.add("is-clipped");
        } else {
          document.documentElement.classList.remove("is-clipped");
        }
        return;
      }
      this.savedScrollTop = !this.savedScrollTop ? document.documentElement.scrollTop : this.savedScrollTop;
      if (this.modelValue) {
        document.body.classList.add("is-noscroll");
      } else {
        document.body.classList.remove("is-noscroll");
      }
      if (this.modelValue) {
        document.body.style.top = `-${this.savedScrollTop}px`;
        return;
      }
      document.documentElement.scrollTop = this.savedScrollTop;
      document.body.style.top = null;
      this.savedScrollTop = null;
    },
    onHover() {
      if (this.delay) {
        this.hasLeaved = false;
        this.timer = setTimeout(() => {
          if (!this.hasLeaved) {
            this.isDelayOver = true;
          }
          this.timer = null;
        }, this.delay);
      } else {
        this.isDelayOver = false;
      }
    },
    onHoverLeave() {
      this.hasLeaved = true;
      this.timer = null;
      this.isDelayOver = false;
    },
    /**
     * Close sidebar if close button is clicked.
     */
    clickedCloseButton() {
      if (this.isFixed) {
        if (this.isOpen && this.fullwidth) {
          this.cancel("outside");
        }
      }
    }
  },
  created() {
    if (typeof window !== "undefined") {
      document.addEventListener("keyup", this.keyPress);
      document.addEventListener("click", this.clickedOutside);
    }
  },
  mounted() {
    if (typeof window !== "undefined") {
      if (this.isFixed) {
        document.body.appendChild(this.$el);
      }
    }
    if (this.overlay && this.modelValue) {
      this.handleScroll();
    }
  },
  beforeUnmount() {
    if (typeof window !== "undefined") {
      document.removeEventListener("keyup", this.keyPress);
      document.removeEventListener("click", this.clickedOutside);
      if (this.overlay) {
        document.documentElement.classList.remove("is-clipped");
        const savedScrollTop = !this.savedScrollTop ? document.documentElement.scrollTop : this.savedScrollTop;
        document.body.classList.remove("is-noscroll");
        document.documentElement.scrollTop = savedScrollTop;
        document.body.style.top = null;
      }
    }
    if (this.isFixed) {
      removeElement(this.$el);
    }
    clearTimeout(this.timer);
  }
};
var _hoisted_134 = { class: "b-sidebar" };
var _hoisted_228 = {
  key: 0,
  class: "sidebar-background"
};
function render32(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_134, [
    $props.overlay && $data.isOpen ? (openBlock(), createElementBlock("div", _hoisted_228)) : createCommentVNode("v-if", true),
    createVNode(Transition, {
      name: $data.transitionName,
      onBeforeEnter: $options.beforeEnter,
      onAfterEnter: $options.afterEnter,
      persisted: ""
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode(
          "div",
          {
            ref: "sidebarContent",
            class: normalizeClass(["sidebar-content", $options.rootClasses]),
            onMouseenter: _cache[1] || (_cache[1] = (...args) => $options.onHover && $options.onHover(...args)),
            onMouseleave: _cache[2] || (_cache[2] = (...args) => $options.onHoverLeave && $options.onHoverLeave(...args))
          },
          [
            $props.fullwidth ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.clickedCloseButton && $options.clickedCloseButton(...args)),
              class: "modal-close is-large sidebar-close",
              "aria-label": "Close"
            })) : createCommentVNode("v-if", true),
            renderSlot(_ctx.$slots, "default")
          ],
          34
          /* CLASS, HYDRATE_EVENTS */
        ), [
          [vShow, $data.isOpen]
        ])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["name", "onBeforeEnter", "onAfterEnter"])
  ]);
}
script34.render = render32;
script34.__file = "src/components/sidebar/Sidebar.vue";
var Plugin30 = {
  install: function install30(Vue) {
    registerComponent(Vue, script34);
  }
};
use(Plugin30);

// node_modules/buefy/dist/esm/slider.js
var script$26 = {
  name: "BSliderThumb",
  components: {
    [script15.name]: script15
  },
  mixins: [CompatFallthroughMixin],
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: ""
    },
    tooltip: {
      type: Boolean,
      default: true
    },
    indicator: {
      type: Boolean,
      default: false
    },
    customFormatter: Function,
    format: {
      type: String,
      default: "raw",
      validator: (value) => {
        return [
          "raw",
          "percent"
        ].indexOf(value) >= 0;
      }
    },
    locale: {
      type: [String, Array],
      default: () => {
        return config.defaultLocale;
      }
    },
    tooltipAlways: {
      type: Boolean,
      default: false
    }
  },
  emits: ["dragend", "dragstart", "update:modelValue"],
  data() {
    return {
      isFocused: false,
      dragging: false,
      startX: 0,
      startPosition: 0,
      newPosition: null,
      oldValue: this.modelValue
    };
  },
  computed: {
    disabled() {
      return this.$parent.disabled;
    },
    max() {
      return this.$parent.max;
    },
    min() {
      return this.$parent.min;
    },
    step() {
      return this.$parent.step;
    },
    precision() {
      return this.$parent.precision;
    },
    currentPosition() {
      return `${(this.modelValue - this.min) / (this.max - this.min) * 100}%`;
    },
    wrapperStyle() {
      return { left: this.currentPosition };
    },
    formattedValue() {
      if (typeof this.customFormatter !== "undefined") {
        return this.customFormatter(this.modelValue);
      }
      if (this.format === "percent") {
        return new Intl.NumberFormat(
          this.locale,
          {
            style: "percent"
          }
        ).format((this.modelValue - this.min) / (this.max - this.min));
      }
      return new Intl.NumberFormat(this.locale).format(this.modelValue);
    }
  },
  methods: {
    onFocus() {
      this.isFocused = true;
    },
    onBlur() {
      this.isFocused = false;
    },
    onButtonDown(event) {
      if (this.disabled) return;
      event.preventDefault();
      this.onDragStart(event);
      if (typeof window !== "undefined") {
        document.addEventListener("mousemove", this.onDragging);
        document.addEventListener("touchmove", this.onDragging);
        document.addEventListener("mouseup", this.onDragEnd);
        document.addEventListener("touchend", this.onDragEnd);
        document.addEventListener("contextmenu", this.onDragEnd);
      }
    },
    onLeftKeyDown() {
      if (this.disabled || this.modelValue === this.min) return;
      this.newPosition = parseFloat(this.currentPosition) - this.step / (this.max - this.min) * 100;
      this.setPosition(this.newPosition);
      this.$parent.emitValue("change");
    },
    onRightKeyDown() {
      if (this.disabled || this.modelValue === this.max) return;
      this.newPosition = parseFloat(this.currentPosition) + this.step / (this.max - this.min) * 100;
      this.setPosition(this.newPosition);
      this.$parent.emitValue("change");
    },
    onHomeKeyDown() {
      if (this.disabled || this.modelValue === this.min) return;
      this.newPosition = 0;
      this.setPosition(this.newPosition);
      this.$parent.emitValue("change");
    },
    onEndKeyDown() {
      if (this.disabled || this.modelValue === this.max) return;
      this.newPosition = 100;
      this.setPosition(this.newPosition);
      this.$parent.emitValue("change");
    },
    onDragStart(event) {
      this.dragging = true;
      this.$emit("dragstart");
      if (event.type === "touchstart") {
        event.clientX = event.touches[0].clientX;
      }
      this.startX = event.clientX;
      this.startPosition = parseFloat(this.currentPosition);
      this.newPosition = this.startPosition;
    },
    onDragging(event) {
      if (this.dragging) {
        if (event.type === "touchmove") {
          event.clientX = event.touches[0].clientX;
        }
        const diff = (event.clientX - this.startX) / this.$parent.sliderSize() * 100;
        this.newPosition = this.startPosition + diff;
        this.setPosition(this.newPosition);
      }
    },
    onDragEnd() {
      this.dragging = false;
      this.$emit("dragend");
      if (this.modelValue !== this.oldValue) {
        this.$parent.emitValue("change");
      }
      this.setPosition(this.newPosition);
      if (typeof window !== "undefined") {
        document.removeEventListener("mousemove", this.onDragging);
        document.removeEventListener("touchmove", this.onDragging);
        document.removeEventListener("mouseup", this.onDragEnd);
        document.removeEventListener("touchend", this.onDragEnd);
        document.removeEventListener("contextmenu", this.onDragEnd);
      }
    },
    setPosition(percent) {
      if (percent === null || isNaN(percent)) return;
      if (percent < 0) {
        percent = 0;
      } else if (percent > 100) {
        percent = 100;
      }
      const stepLength = 100 / ((this.max - this.min) / this.step);
      const steps = Math.round(percent / stepLength);
      let value = steps * stepLength / 100 * (this.max - this.min) + this.min;
      value = parseFloat(value.toFixed(this.precision));
      this.$emit("update:modelValue", value);
      if (!this.dragging && value !== this.oldValue) {
        this.oldValue = value;
      }
    }
  },
  beforeUnmount() {
    document.removeEventListener("mousemove", this.onDragging);
    document.removeEventListener("touchmove", this.onDragging);
    document.removeEventListener("mouseup", this.onDragEnd);
    document.removeEventListener("touchend", this.onDragEnd);
    document.removeEventListener("contextmenu", this.onDragEnd);
  }
};
var _hoisted_1$25 = ["tabindex"];
var _hoisted_229 = { key: 0 };
function render$26(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_tooltip = resolveComponent("b-tooltip");
  return openBlock(), createElementBlock(
    "div",
    mergeProps({
      class: ["b-slider-thumb-wrapper", { "is-dragging": $data.dragging, "has-indicator": $props.indicator }],
      style: $options.wrapperStyle
    }, _ctx.rootAttrs),
    [
      createVNode(_component_b_tooltip, {
        label: $options.formattedValue,
        type: $props.type,
        always: $data.dragging || $data.isFocused || $props.tooltipAlways,
        active: !$options.disabled && $props.tooltip
      }, {
        default: withCtx(() => [
          createBaseVNode("div", mergeProps({
            class: "b-slider-thumb",
            tabindex: $options.disabled ? false : 0
          }, _ctx.fallthroughAttrs, {
            onMousedown: _cache[0] || (_cache[0] = (...args) => $options.onButtonDown && $options.onButtonDown(...args)),
            onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.onButtonDown && $options.onButtonDown(...args)),
            onFocus: _cache[2] || (_cache[2] = (...args) => $options.onFocus && $options.onFocus(...args)),
            onBlur: _cache[3] || (_cache[3] = (...args) => $options.onBlur && $options.onBlur(...args)),
            onKeydown: [
              _cache[4] || (_cache[4] = withKeys(withModifiers((...args) => $options.onLeftKeyDown && $options.onLeftKeyDown(...args), ["prevent"]), ["left"])),
              _cache[5] || (_cache[5] = withKeys(withModifiers((...args) => $options.onRightKeyDown && $options.onRightKeyDown(...args), ["prevent"]), ["right"])),
              _cache[6] || (_cache[6] = withKeys(withModifiers((...args) => $options.onLeftKeyDown && $options.onLeftKeyDown(...args), ["prevent"]), ["down"])),
              _cache[7] || (_cache[7] = withKeys(withModifiers((...args) => $options.onRightKeyDown && $options.onRightKeyDown(...args), ["prevent"]), ["up"])),
              _cache[8] || (_cache[8] = withKeys(withModifiers((...args) => $options.onHomeKeyDown && $options.onHomeKeyDown(...args), ["prevent"]), ["home"])),
              _cache[9] || (_cache[9] = withKeys(withModifiers((...args) => $options.onEndKeyDown && $options.onEndKeyDown(...args), ["prevent"]), ["end"]))
            ]
          }), [
            $props.indicator ? (openBlock(), createElementBlock(
              "span",
              _hoisted_229,
              toDisplayString($options.formattedValue),
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true)
          ], 16, _hoisted_1$25)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["label", "type", "always", "active"])
    ],
    16
    /* FULL_PROPS */
  );
}
script$26.render = render$26;
script$26.__file = "src/components/slider/SliderThumb.vue";
var script$113 = {
  name: "BSliderTick",
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {
    position() {
      const pos = (this.value - this.$parent.min) / (this.$parent.max - this.$parent.min) * 100;
      return pos >= 0 && pos <= 100 ? pos : 0;
    },
    hidden() {
      return this.value === this.$parent.min || this.value === this.$parent.max;
    }
  },
  methods: {
    getTickStyle(position2) {
      return { left: position2 + "%" };
    }
  },
  created() {
    if (!this.$parent.$data._isSlider) {
      throw new Error("You should wrap bSliderTick on a bSlider");
    }
  }
};
var _hoisted_1$18 = {
  key: 0,
  class: "b-slider-tick-label"
};
function render$112(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["b-slider-tick", { "is-tick-hidden": $options.hidden }]),
      style: normalizeStyle($options.getTickStyle($options.position))
    },
    [
      _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_1$18, [
        renderSlot(_ctx.$slots, "default")
      ])) : createCommentVNode("v-if", true)
    ],
    6
    /* CLASS, STYLE */
  );
}
script$113.render = render$112;
script$113.__file = "src/components/slider/SliderTick.vue";
var script35 = {
  name: "BSlider",
  components: {
    [script$26.name]: script$26,
    [script$113.name]: script$113
  },
  props: {
    modelValue: {
      type: [Number, Array],
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    type: {
      type: String,
      default: "is-primary"
    },
    size: String,
    ticks: {
      type: Boolean,
      default: false
    },
    tooltip: {
      type: Boolean,
      default: true
    },
    tooltipType: String,
    rounded: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    lazy: {
      type: Boolean,
      default: false
    },
    customFormatter: Function,
    ariaLabel: [String, Array],
    biggerSliderFocus: {
      type: Boolean,
      default: false
    },
    indicator: {
      type: Boolean,
      default: false
    },
    format: {
      type: String,
      default: "raw",
      validator: (value) => {
        return [
          "raw",
          "percent"
        ].indexOf(value) >= 0;
      }
    },
    locale: {
      type: [String, Array],
      default: () => {
        return config.defaultLocale;
      }
    },
    tooltipAlways: {
      type: Boolean,
      default: false
    }
  },
  emits: ["change", "dragend", "dragging", "dragstart", "update:modelValue"],
  data() {
    return {
      value1: null,
      value2: null,
      // internal is used to update value1 and value2 with a single shot.
      // internal is also used to stop unnecessary propagation of update.
      internal: {
        value1: null,
        value2: null
      },
      dragging: false,
      isRange: false,
      _isSlider: true,
      // Used by Thumb and Tick
      timeOutID: null
    };
  },
  computed: {
    newTooltipType() {
      return this.tooltipType ? this.tooltipType : this.type;
    },
    tickValues() {
      if (!this.ticks || this.min > this.max || this.step === 0) return [];
      const result = [];
      for (let i = this.min + this.step; i < this.max; i = i + this.step) {
        result.push(i);
      }
      return result;
    },
    minValue() {
      return Math.min(this.value1, this.value2);
    },
    maxValue() {
      return Math.max(this.value1, this.value2);
    },
    barSize() {
      return this.isRange ? `${100 * (this.maxValue - this.minValue) / (this.max - this.min)}%` : `${100 * (this.value1 - this.min) / (this.max - this.min)}%`;
    },
    barStart() {
      return this.isRange ? `${100 * (this.minValue - this.min) / (this.max - this.min)}%` : "0%";
    },
    precision() {
      const precisions = [this.min, this.max, this.step].map((item) => {
        const decimal = ("" + item).split(".")[1];
        return decimal ? decimal.length : 0;
      });
      return Math.max(...precisions);
    },
    barStyle() {
      return {
        width: this.barSize,
        left: this.barStart
      };
    },
    rootClasses() {
      return {
        "is-rounded": this.rounded,
        "is-dragging": this.dragging,
        "is-disabled": this.disabled,
        "slider-focus": this.biggerSliderFocus
      };
    }
  },
  watch: {
    /**
    * When v-model is changed set the new active step.
    */
    modelValue(value) {
      this.setValues(value);
    },
    internal({ value1, value2 }) {
      this.value1 = value1;
      this.value2 = value2;
    },
    value1(newValue) {
      if (this.internal.value1 !== newValue) {
        this.onInternalValueUpdate();
      }
    },
    value2(newValue) {
      if (this.internal.value2 !== newValue) {
        this.onInternalValueUpdate();
      }
    },
    min() {
      this.setValues(this.modelValue);
    },
    max() {
      this.setValues(this.modelValue);
    }
  },
  methods: {
    setValues(newValue) {
      if (this.min > this.max) {
        return;
      }
      if (Array.isArray(newValue)) {
        this.isRange = true;
        const smallValue = typeof newValue[0] !== "number" || isNaN(newValue[0]) ? this.min : bound(newValue[0], this.min, this.max);
        const largeValue = typeof newValue[1] !== "number" || isNaN(newValue[1]) ? this.max : bound(newValue[1], this.min, this.max);
        this.internal = {
          value1: this.isThumbReversed ? largeValue : smallValue,
          value2: this.isThumbReversed ? smallValue : largeValue
        };
      } else {
        this.isRange = false;
        this.internal = {
          value1: isNaN(newValue) ? this.min : bound(newValue, this.min, this.max),
          value2: null
        };
      }
    },
    onInternalValueUpdate() {
      if (this.isRange) {
        this.isThumbReversed = this.value1 > this.value2;
      }
      if (!this.lazy || !this.dragging) {
        this.emitValue("update:modelValue");
      }
      if (this.dragging) {
        this.emitValue("dragging");
      }
    },
    sliderSize() {
      return this.$refs.slider.getBoundingClientRect().width;
    },
    onSliderClick(event) {
      if (this.disabled || this.isTrackClickDisabled) return;
      const sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left;
      const percent = (event.clientX - sliderOffsetLeft) / this.sliderSize() * 100;
      const targetValue = this.min + percent * (this.max - this.min) / 100;
      const diffFirst = Math.abs(targetValue - this.value1);
      if (!this.isRange) {
        if (diffFirst < this.step / 2) return;
        this.$refs.button1.setPosition(percent);
      } else {
        const diffSecond = Math.abs(targetValue - this.value2);
        if (diffFirst <= diffSecond) {
          if (diffFirst < this.step / 2) return;
          this.$refs.button1.setPosition(percent);
        } else {
          if (diffSecond < this.step / 2) return;
          this.$refs.button2.setPosition(percent);
        }
      }
      this.emitValue("change");
    },
    onDragStart() {
      this.dragging = true;
      this.$emit("dragstart");
    },
    onDragEnd() {
      this.isTrackClickDisabled = true;
      this.timeOutID = setTimeout(() => {
        this.isTrackClickDisabled = false;
      }, 0);
      this.dragging = false;
      this.$emit("dragend");
      if (this.lazy) {
        this.emitValue("update:modelValue");
      }
    },
    emitValue(type) {
      this.$emit(type, this.isRange ? [this.minValue, this.maxValue] : this.value1);
    }
  },
  created() {
    this.isThumbReversed = false;
    this.isTrackClickDisabled = false;
    this.setValues(this.modelValue);
  },
  beforeUnmount() {
    clearTimeout(this.timeOutID);
  }
};
var _hoisted_135 = {
  class: "b-slider-track",
  ref: "slider"
};
function render33(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_slider_tick = resolveComponent("b-slider-tick");
  const _component_b_slider_thumb = resolveComponent("b-slider-thumb");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["b-slider", [$props.size, $props.type, $options.rootClasses]]),
      onClick: _cache[2] || (_cache[2] = (...args) => $options.onSliderClick && $options.onSliderClick(...args))
    },
    [
      createBaseVNode(
        "div",
        _hoisted_135,
        [
          createBaseVNode(
            "div",
            {
              class: "b-slider-fill",
              style: normalizeStyle($options.barStyle)
            },
            null,
            4
            /* STYLE */
          ),
          $props.ticks ? (openBlock(true), createElementBlock(
            Fragment,
            { key: 0 },
            renderList($options.tickValues, (val, key) => {
              return openBlock(), createBlock(_component_b_slider_tick, {
                key,
                value: val
              }, null, 8, ["value"]);
            }),
            128
            /* KEYED_FRAGMENT */
          )) : createCommentVNode("v-if", true),
          renderSlot(_ctx.$slots, "default"),
          createVNode(_component_b_slider_thumb, {
            "tooltip-always": $props.tooltipAlways,
            modelValue: $data.value1,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value1 = $event),
            type: $options.newTooltipType,
            tooltip: $props.tooltip,
            "custom-formatter": $props.customFormatter,
            indicator: $props.indicator,
            format: $props.format,
            locale: $props.locale,
            ref: "button1",
            role: "slider",
            "aria-valuenow": $data.value1,
            "aria-valuemin": $props.min,
            "aria-valuemax": $props.max,
            "aria-orientation": "horizontal",
            "aria-label": Array.isArray($props.ariaLabel) ? $props.ariaLabel[0] : $props.ariaLabel,
            "aria-disabled": $props.disabled || void 0,
            onDragstart: $options.onDragStart,
            onDragend: $options.onDragEnd
          }, null, 8, ["tooltip-always", "modelValue", "type", "tooltip", "custom-formatter", "indicator", "format", "locale", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-disabled", "onDragstart", "onDragend"]),
          $data.isRange ? (openBlock(), createBlock(_component_b_slider_thumb, {
            key: 1,
            "tooltip-always": $props.tooltipAlways,
            modelValue: $data.value2,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.value2 = $event),
            type: $options.newTooltipType,
            tooltip: $props.tooltip,
            "custom-formatter": $props.customFormatter,
            indicator: $props.indicator,
            format: $props.format,
            locale: $props.locale,
            ref: "button2",
            role: "slider",
            "aria-valuenow": $data.value2,
            "aria-valuemin": $props.min,
            "aria-valuemax": $props.max,
            "aria-orientation": "horizontal",
            "aria-label": Array.isArray($props.ariaLabel) ? $props.ariaLabel[1] : "",
            "aria-disabled": $props.disabled || void 0,
            onDragstart: $options.onDragStart,
            onDragend: $options.onDragEnd
          }, null, 8, ["tooltip-always", "modelValue", "type", "tooltip", "custom-formatter", "indicator", "format", "locale", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-disabled", "onDragstart", "onDragend"])) : createCommentVNode("v-if", true)
        ],
        512
        /* NEED_PATCH */
      )
    ],
    2
    /* CLASS */
  );
}
script35.render = render33;
script35.__file = "src/components/slider/Slider.vue";
var Plugin31 = {
  install: function install31(Vue) {
    registerComponent(Vue, script35);
    registerComponent(Vue, script$113);
  }
};
use(Plugin31);

// node_modules/buefy/dist/esm/snackbar.js
var script36 = {
  name: "BSnackbar",
  mixins: [NoticeMixin],
  props: {
    actionText: {
      type: String,
      default: "OK"
    },
    onAction: {
      type: Function,
      default: () => {
      }
    },
    cancelText: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      newDuration: this.duration || config.defaultSnackbarDuration
    };
  },
  methods: {
    /**
    * Click listener.
    * Call action prop before closing (from Mixin).
    */
    action() {
      this.onAction();
      this.close();
    }
  }
};
var _hoisted_136 = ["role"];
var _hoisted_230 = ["innerHTML"];
var _hoisted_319 = { class: "button" };
var _hoisted_414 = { class: "button" };
function render34(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    "enter-active-class": _ctx.transition.enter,
    "leave-active-class": _ctx.transition.leave,
    persisted: ""
  }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode("div", {
        class: normalizeClass(["snackbar", [_ctx.type, _ctx.position]]),
        onMouseenter: _cache[2] || (_cache[2] = (...args) => _ctx.pause && _ctx.pause(...args)),
        onMouseleave: _cache[3] || (_cache[3] = (...args) => _ctx.removePause && _ctx.removePause(...args)),
        role: $props.actionText ? "alertdialog" : "alert"
      }, [
        _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock(
          Fragment,
          { key: 1 },
          [
            createCommentVNode(" eslint-disable-next-line vue/no-v-html "),
            createBaseVNode("div", {
              class: "text",
              innerHTML: _ctx.message
            }, null, 8, _hoisted_230)
          ],
          64
          /* STABLE_FRAGMENT */
        )),
        $props.cancelText ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: "action is-light is-cancel",
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.close && _ctx.close(...args))
        }, [
          createBaseVNode(
            "button",
            _hoisted_319,
            toDisplayString($props.cancelText),
            1
            /* TEXT */
          )
        ])) : createCommentVNode("v-if", true),
        $props.actionText ? (openBlock(), createElementBlock(
          "div",
          {
            key: 3,
            class: normalizeClass(["action", _ctx.type]),
            onClick: _cache[1] || (_cache[1] = (...args) => $options.action && $options.action(...args))
          },
          [
            createBaseVNode(
              "button",
              _hoisted_414,
              toDisplayString($props.actionText),
              1
              /* TEXT */
            )
          ],
          2
          /* CLASS */
        )) : createCommentVNode("v-if", true)
      ], 42, _hoisted_136), [
        [vShow, _ctx.isActive]
      ])
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["enter-active-class", "leave-active-class"]);
}
script36.render = render34;
script36.__file = "src/components/snackbar/Snackbar.vue";
function ownKeys7(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread7(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys7(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys7(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var SnackbarProgrammatic = function() {
  function SnackbarProgrammatic2(app) {
    _classCallCheck(this, SnackbarProgrammatic2);
    this.app = app;
  }
  _createClass(SnackbarProgrammatic2, [{
    key: "open",
    value: function open2(params) {
      if (typeof params === "string") {
        params = {
          message: params
        };
      }
      var defaultParam = {
        type: "is-success",
        position: config.defaultSnackbarPosition || "is-bottom-right",
        queue: true
      };
      if (params.parent) {
        delete params.parent;
      }
      var slot;
      if (Array.isArray(params.message)) {
        slot = params.message;
        delete params.message;
      }
      var propsData = merge(defaultParam, params);
      var container2 = document.createElement("div");
      var vueInstance = createApp({
        data: function data8() {
          return {
            snackbarVNode: null
          };
        },
        methods: {
          close: function close4() {
            var snackbar = getComponentFromVNode(this.snackbarVNode);
            if (snackbar) {
              snackbar.close();
            }
          }
        },
        render: function render45() {
          this.snackbarVNode = h(script36, _objectSpread7(_objectSpread7({}, propsData), {}, {
            onClose: function onClose() {
              if (typeof propsData.onClose === "function") {
                propsData.onClose();
              }
              setTimeout(function() {
                vueInstance.unmount();
              }, 150);
            }
          }), slot != null ? {
            "default": function _default10() {
              return slot;
            }
          } : void 0);
          return this.snackbarVNode;
        }
      });
      if (this.app) {
        copyAppContext(this.app, vueInstance);
      } else {
        vueInstance.config.globalProperties.$buefy = {};
      }
      return vueInstance.mount(container2);
    }
  }]);
  return SnackbarProgrammatic2;
}();
var Plugin32 = {
  install: function install32(Vue) {
    registerComponentProgrammatic(Vue, "snackbar", new SnackbarProgrammatic(Vue));
  }
};
use(Plugin32);

// node_modules/buefy/dist/esm/SlotComponent-bRURhcxz.js
var _PatchFlagNames;
var _slotFlagsText;
true ? Object.freeze({}) : {};
true ? Object.freeze([]) : [];
var cacheStringFunction = function cacheStringFunction2(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction(function(str) {
  return str.replace(camelizeRE, function(_, c) {
    return c ? c.toUpperCase() : "";
  });
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction(function(str) {
  return str.replace(hyphenateRE, "-$1").toLowerCase();
});
var capitalize = cacheStringFunction(function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
var toHandlerKey2 = cacheStringFunction(function(str) {
  var s = str ? "on".concat(capitalize(str)) : "";
  return s;
});
_PatchFlagNames = {}, _defineProperty(_PatchFlagNames, 1, "TEXT"), _defineProperty(_PatchFlagNames, 2, "CLASS"), _defineProperty(_PatchFlagNames, 4, "STYLE"), _defineProperty(_PatchFlagNames, 8, "PROPS"), _defineProperty(_PatchFlagNames, 16, "FULL_PROPS"), _defineProperty(_PatchFlagNames, 32, "HYDRATE_EVENTS"), _defineProperty(_PatchFlagNames, 64, "STABLE_FRAGMENT"), _defineProperty(_PatchFlagNames, 128, "KEYED_FRAGMENT"), _defineProperty(_PatchFlagNames, 256, "UNKEYED_FRAGMENT"), _defineProperty(_PatchFlagNames, 512, "NEED_PATCH"), _defineProperty(_PatchFlagNames, 1024, "DYNAMIC_SLOTS"), _defineProperty(_PatchFlagNames, 2048, "DEV_ROOT_FRAGMENT"), _defineProperty(_PatchFlagNames, -1, "HOISTED"), _defineProperty(_PatchFlagNames, -2, "BAIL"), _PatchFlagNames;
_slotFlagsText = {}, _defineProperty(_slotFlagsText, 1, "STABLE"), _defineProperty(_slotFlagsText, 2, "DYNAMIC"), _defineProperty(_slotFlagsText, 3, "FORWARDED"), _slotFlagsText;
var SlotComponent = {
  name: "BSlotComponent",
  props: {
    component: {
      type: Object,
      required: true
    },
    name: {
      type: String,
      "default": "default"
    },
    scoped: {
      type: Boolean
    },
    props: {
      type: Object
    },
    tag: {
      type: String,
      "default": "div"
    },
    event: {
      type: String,
      "default": "vue:updated"
    }
  },
  data: function data7() {
    return {
      updatedHook: void 0,
      handlerKey: void 0
    };
  },
  methods: {
    refresh: function refresh() {
      this.$forceUpdate();
    }
  },
  created: function created2() {
    if (isVueComponent(this.component)) {
      if (this.event === "vue:updated") {
        this.updatedHook = onUpdated(this.refresh, this.component.$);
      } else {
        var vnode = this.component.$.vnode;
        var handlerKey = toHandlerKey2(this.event);
        if (vnode.props == null) {
          vnode.props = _defineProperty({}, handlerKey, this.refresh);
        } else {
          var props = vnode.props;
          if (props[this.handlerKey] == null) {
            handlerKey = toHandlerKey2(camelize(this.event));
            if (props[handlerKey] == null) {
              handlerKey = toHandlerKey2(hyphenate(this.event));
            }
          }
          if (props[handlerKey] == null) {
            handlerKey = toHandlerKey2(this.event);
            props[handlerKey] = this.refresh;
          } else {
            if (Array.isArray(props[handlerKey])) {
              props[handlerKey].push(this.refresh);
            } else {
              props[handlerKey] = [props[handlerKey], this.refresh];
            }
          }
        }
        this.handlerKey = handlerKey;
      }
    }
  },
  beforeUnmount: function beforeUnmount() {
    if (isVueComponent(this.component)) {
      if (this.updatedHook != null) {
        var index = this.component.$.u.indexOf(this.updatedHook);
        if (index !== -1) {
          this.component.$.u.splice(index, 1);
        }
      } else if (this.handlerKey != null) {
        var props = this.component.$.vnode.props;
        if (props != null) {
          if (Array.isArray(props[this.handlerKey])) {
            var _index = props[this.handlerKey].indexOf(this.refresh);
            if (_index > -1) {
              props[this.handlerKey].splice(_index, 1);
              if (props[this.handlerKey].length === 1) {
                props[this.handlerKey] = props[this.handlerKey][0];
              }
            }
          } else {
            delete props[this.handlerKey];
          }
        }
      }
    }
  },
  render: function render35() {
    return h(this.tag, {}, this.component.$slots ? this.scoped ? this.component.$slots[this.name](this.props) : this.component.$slots[this.name]() : void 0);
  }
};

// node_modules/buefy/dist/esm/TabbedChildMixin-foL4cK-M.js
var TabbedMixin = function(cmp) {
  var _components;
  return {
    mixins: [ProviderParentMixin(cmp, Sorted$1)],
    components: (_components = {}, _defineProperty(_components, script.name, script), _defineProperty(_components, SlotComponent.name, SlotComponent), _components),
    props: {
      modelValue: {
        type: [String, Number],
        "default": void 0
      },
      size: String,
      animated: {
        type: Boolean,
        "default": true
      },
      animation: String,
      animateInitially: Boolean,
      vertical: {
        type: Boolean,
        "default": false
      },
      position: String,
      destroyOnHide: {
        type: Boolean,
        "default": false
      }
    },
    emits: ["update:modelValue"],
    data: function data8() {
      return {
        activeId: this.modelValue,
        // Internal state
        defaultSlots: [],
        contentHeight: 0,
        isTransitioning: false
      };
    },
    mounted: function mounted3() {
      if (typeof this.modelValue === "number") {
        var value = bound(this.modelValue, 0, this.items.length - 1);
        this.activeId = this.items[value].uniqueValue;
      } else {
        this.activeId = this.modelValue;
      }
    },
    computed: {
      activeItem: function activeItem() {
        var _this = this;
        return this.activeId === void 0 ? this.items[0] : this.activeId === null ? null : this.childItems.find(function(i) {
          return i.uniqueValue === _this.activeId;
        });
      },
      items: function items2() {
        return this.sortedItems;
      }
    },
    watch: {
      /**
       * When v-model is changed set the new active tab.
       */
      modelValue: function modelValue3(value) {
        if (typeof value === "number") {
          value = bound(value, 0, this.items.length - 1);
          this.activeId = this.items[value].uniqueValue;
        } else {
          this.activeId = value;
        }
      },
      /**
       * Sync internal state with external state
       */
      activeId: function activeId(val, oldValue) {
        var oldTab = oldValue !== void 0 && oldValue !== null ? this.childItems.find(function(i) {
          return i.uniqueValue === oldValue;
        }) : null;
        if (oldTab && this.activeItem) {
          oldTab.deactivate(this.activeItem.index);
          this.activeItem.activate(oldTab.index);
        }
        val = this.activeItem ? typeof this.modelValue === "number" ? this.items.indexOf(this.activeItem) : this.activeItem.uniqueValue : void 0;
        if (val !== this.modelValue) {
          this.$emit("update:modelValue", val);
        }
      }
    },
    methods: {
      /**
      * Child click listener, emit input event and change active child.
      */
      childClick: function childClick(child) {
        this.activeId = child.uniqueValue;
      },
      getNextItemIdx: function getNextItemIdx(fromIdx) {
        var skipDisabled = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var nextItemIdx = null;
        for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          if (fromIdx < item.index && item.visible && (!skipDisabled || skipDisabled && !item.disabled)) {
            nextItemIdx = item.index;
            break;
          }
        }
        return nextItemIdx;
      },
      getPrevItemIdx: function getPrevItemIdx(fromIdx) {
        var skipDisabled = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var prevItemIdx = null;
        for (var i = this.items.length - 1; i >= 0; i--) {
          var item = this.items[i];
          if (item.index < fromIdx && item.visible && (!skipDisabled || skipDisabled && !item.disabled)) {
            prevItemIdx = item.index;
            break;
          }
        }
        return prevItemIdx;
      }
    }
  };
};
var TabbedChildMixin = function(parentCmp) {
  return {
    mixins: [InjectedChildMixin(parentCmp, Sorted)],
    props: {
      label: String,
      icon: String,
      iconPack: String,
      visible: {
        type: Boolean,
        "default": true
      },
      headerClass: {
        type: [String, Array, Object],
        "default": null
      }
    },
    data: function data8() {
      return {
        transitionName: null,
        elementClass: "item",
        elementRole: null
      };
    },
    computed: {
      isActive: function isActive2() {
        return this.parent.activeItem === this;
      }
    },
    methods: {
      /**
       * Activate element, alter animation name based on the index.
       */
      activate: function activate(oldIndex) {
        this.transitionName = this.index < oldIndex ? this.parent.vertical ? "slide-down" : "slide-next" : this.parent.vertical ? "slide-up" : "slide-prev";
      },
      /**
       * Deactivate element, alter animation name based on the index.
       */
      deactivate: function deactivate(newIndex) {
        this.transitionName = newIndex < this.index ? this.parent.vertical ? "slide-down" : "slide-next" : this.parent.vertical ? "slide-up" : "slide-prev";
      }
    },
    render: function render45() {
      var _this = this;
      if (this.parent.destroyOnHide) {
        if (!this.isActive || !this.visible) {
          return;
        }
      }
      var vnode = withDirectives(h("div", {
        // NOTE: possible regression of #3272
        // https://github.com/buefy/buefy/issues/3272
        "class": this.elementClass,
        role: this.elementRole,
        id: "".concat(this.uniqueValue, "-content"),
        "aria-labelledby": this.elementRole ? "".concat(this.uniqueValue, "-label") : null,
        tabindex: this.isActive ? 0 : -1
      }, this.$slots), [[vShow, this.isActive && this.visible]]);
      if (this.parent.animated) {
        return h(Transition, {
          name: this.parent.animation || this.transitionName,
          appear: this.parent.animateInitially === true || void 0,
          onBeforeEnter: function onBeforeEnter() {
            _this.parent.isTransitioning = true;
          },
          onAfterEnter: function onAfterEnter() {
            _this.parent.isTransitioning = false;
          }
        }, {
          "default": function _default10() {
            return vnode;
          }
        });
      }
      return vnode;
    }
  };
};

// node_modules/buefy/dist/esm/steps.js
var script$114 = {
  name: "BSteps",
  components: {
    [script.name]: script
  },
  mixins: [TabbedMixin("step")],
  props: {
    type: [String, Object],
    iconPack: String,
    iconPrev: {
      type: String,
      default: () => {
        return config.defaultIconPrev;
      }
    },
    iconNext: {
      type: String,
      default: () => {
        return config.defaultIconNext;
      }
    },
    hasNavigation: {
      type: Boolean,
      default: true
    },
    labelPosition: {
      type: String,
      validator(value) {
        return [
          "bottom",
          "right",
          "left"
        ].indexOf(value) > -1;
      },
      default: "bottom"
    },
    rounded: {
      type: Boolean,
      default: true
    },
    mobileMode: {
      type: String,
      validator(value) {
        return [
          "minimalist",
          "compact"
        ].indexOf(value) > -1;
      },
      default: "minimalist"
    },
    ariaNextLabel: String,
    ariaPreviousLabel: String
  },
  computed: {
    // Override mixin implementation to always have a value
    activeItem() {
      return this.childItems.filter((i) => i.uniqueValue === this.activeId)[0] || this.items[0];
    },
    wrapperClasses() {
      return [
        this.size,
        {
          "is-vertical": this.vertical,
          [this.position]: this.position && this.vertical
        }
      ];
    },
    mainClasses() {
      return [
        this.type,
        {
          "has-label-right": this.labelPosition === "right",
          "has-label-left": this.labelPosition === "left",
          "is-animated": this.animated,
          "is-rounded": this.rounded,
          [`mobile-${this.mobileMode}`]: this.mobileMode !== null
        }
      ];
    },
    /**
     * Check if previous button is available.
     */
    hasPrev() {
      return this.prevItemIdx !== null;
    },
    /**
     * Retrieves the next visible item index
     */
    nextItemIdx() {
      const idx = this.activeItem ? this.activeItem.index : 0;
      return this.getNextItemIdx(idx);
    },
    /**
     * Retrieves the next visible item
     */
    nextItem() {
      let nextItem = null;
      if (this.nextItemIdx !== null) {
        nextItem = this.items.find((i) => i.index === this.nextItemIdx);
      }
      return nextItem;
    },
    /**
    * Retrieves the next visible item index
    */
    prevItemIdx() {
      if (!this.activeItem) {
        return null;
      }
      const idx = this.activeItem.index;
      return this.getPrevItemIdx(idx);
    },
    /**
     * Retrieves the previous visible item
     */
    prevItem() {
      if (!this.activeItem) {
        return null;
      }
      let prevItem = null;
      if (this.prevItemIdx !== null) {
        prevItem = this.items.find((i) => i.index === this.prevItemIdx);
      }
      return prevItem;
    },
    /**
     * Check if next button is available.
     */
    hasNext() {
      return this.nextItemIdx !== null;
    },
    navigationProps() {
      return {
        previous: {
          disabled: !this.hasPrev,
          action: this.prev
        },
        next: {
          disabled: !this.hasNext,
          action: this.next
        }
      };
    }
  },
  methods: {
    /**
     * Return if the step should be clickable or not.
     */
    isItemClickable(stepItem) {
      if (stepItem.clickable === void 0) {
        return stepItem.index < this.activeItem.index;
      }
      return stepItem.clickable;
    },
    /**
     * Previous button click listener.
     */
    prev() {
      if (this.hasPrev) {
        this.activeId = this.prevItem.uniqueValue;
      }
    },
    /**
     * Previous button click listener.
     */
    next() {
      if (this.hasNext) {
        this.activeId = this.nextItem.uniqueValue;
      }
    }
  }
};
var _hoisted_137 = { class: "step-items" };
var _hoisted_231 = ["onClick"];
var _hoisted_320 = { class: "step-marker" };
var _hoisted_415 = { key: 1 };
var _hoisted_510 = { class: "step-details" };
var _hoisted_68 = { class: "step-title" };
var _hoisted_78 = {
  key: 0,
  class: "step-navigation"
};
var _hoisted_87 = ["disabled", "aria-label"];
var _hoisted_95 = ["disabled", "aria-label"];
function render36(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["b-steps", $options.wrapperClasses])
    },
    [
      createBaseVNode(
        "nav",
        {
          class: normalizeClass(["steps", $options.mainClasses])
        },
        [
          createBaseVNode("ul", _hoisted_137, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_ctx.items, (childItem) => {
                return withDirectives((openBlock(), createElementBlock(
                  "li",
                  {
                    key: childItem.uniqueValue,
                    class: normalizeClass(["step-item", [childItem.type || $props.type, childItem.headerClass, {
                      "is-active": childItem.isActive,
                      "is-previous": $options.activeItem.index > childItem.index
                    }]])
                  },
                  [
                    createBaseVNode("a", {
                      class: normalizeClass(["step-link", { "is-clickable": $options.isItemClickable(childItem) }]),
                      onClick: ($event) => $options.isItemClickable(childItem) && _ctx.childClick(childItem)
                    }, [
                      createBaseVNode("div", _hoisted_320, [
                        childItem.icon ? (openBlock(), createBlock(_component_b_icon, {
                          key: 0,
                          icon: childItem.icon,
                          pack: childItem.iconPack,
                          size: _ctx.size
                        }, null, 8, ["icon", "pack", "size"])) : childItem.step ? (openBlock(), createElementBlock(
                          "span",
                          _hoisted_415,
                          toDisplayString(childItem.step),
                          1
                          /* TEXT */
                        )) : createCommentVNode("v-if", true)
                      ]),
                      createBaseVNode("div", _hoisted_510, [
                        createBaseVNode(
                          "span",
                          _hoisted_68,
                          toDisplayString(childItem.label),
                          1
                          /* TEXT */
                        )
                      ])
                    ], 10, _hoisted_231)
                  ],
                  2
                  /* CLASS */
                )), [
                  [vShow, childItem.visible]
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ],
        2
        /* CLASS */
      ),
      createBaseVNode(
        "section",
        {
          class: normalizeClass(["step-content", { "is-transitioning": _ctx.isTransitioning }])
        },
        [
          renderSlot(_ctx.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      renderSlot(_ctx.$slots, "navigation", {
        previous: $options.navigationProps.previous,
        next: $options.navigationProps.next
      }, () => [
        $props.hasNavigation ? (openBlock(), createElementBlock("nav", _hoisted_78, [
          createBaseVNode("a", {
            role: "button",
            class: "pagination-previous",
            disabled: $options.navigationProps.previous.disabled || void 0,
            onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.navigationProps.previous.action && $options.navigationProps.previous.action(...args), ["prevent"])),
            "aria-label": $props.ariaPreviousLabel
          }, [
            createVNode(_component_b_icon, {
              icon: $props.iconPrev,
              pack: $props.iconPack,
              both: "",
              "aria-hidden": "true"
            }, null, 8, ["icon", "pack"])
          ], 8, _hoisted_87),
          createBaseVNode("a", {
            role: "button",
            class: "pagination-next",
            disabled: $options.navigationProps.next.disabled || void 0,
            onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $options.navigationProps.next.action && $options.navigationProps.next.action(...args), ["prevent"])),
            "aria-label": $props.ariaNextLabel
          }, [
            createVNode(_component_b_icon, {
              icon: $props.iconNext,
              pack: $props.iconPack,
              both: "",
              "aria-hidden": "true"
            }, null, 8, ["icon", "pack"])
          ], 8, _hoisted_95)
        ])) : createCommentVNode("v-if", true)
      ])
    ],
    2
    /* CLASS */
  );
}
script$114.render = render36;
script$114.__file = "src/components/steps/Steps.vue";
var script37 = {
  name: "BStepItem",
  mixins: [TabbedChildMixin("step")],
  props: {
    step: [String, Number],
    type: [String, Object],
    clickable: {
      type: Boolean,
      default: void 0
    }
  },
  data() {
    return {
      elementClass: "step-item"
    };
  }
};
script37.__file = "src/components/steps/StepItem.vue";
var Plugin33 = {
  install: function install33(Vue) {
    registerComponent(Vue, script$114);
    registerComponent(Vue, script37);
  }
};
use(Plugin33);

// node_modules/buefy/dist/esm/switch.js
var script38 = {
  name: "BSwitch",
  props: {
    modelValue: [String, Number, Boolean, Function, Object, Array, Date],
    nativeValue: [String, Number, Boolean, Function, Object, Array, Date],
    disabled: Boolean,
    type: String,
    passiveType: String,
    name: String,
    required: Boolean,
    size: String,
    ariaLabelledby: String,
    trueValue: {
      type: [String, Number, Boolean, Function, Object, Array, Date],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean, Function, Object, Array, Date],
      default: false
    },
    rounded: {
      type: Boolean,
      default: () => {
        return config.defaultSwitchRounded;
      }
    },
    outlined: {
      type: Boolean,
      default: false
    },
    leftLabel: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      newValue: this.modelValue,
      isMouseDown: false
    };
  },
  computed: {
    computedValue: {
      get() {
        return this.newValue;
      },
      set(value) {
        this.newValue = value;
        this.$emit("update:modelValue", value);
      }
    },
    newClass() {
      return [
        this.size,
        {
          "is-disabled": this.disabled,
          "is-rounded": this.rounded,
          "is-outlined": this.outlined,
          "has-left-label": this.leftLabel
        }
      ];
    },
    checkClasses() {
      return [
        { "is-elastic": this.isMouseDown && !this.disabled },
        this.passiveType && `${this.passiveType}-passive`,
        this.type
      ];
    },
    showControlLabel() {
      return !!this.$slots.default;
    },
    disabledOrUndefined() {
      return this.disabled || void 0;
    }
  },
  watch: {
    /**
    * When v-model change, set internal value.
    */
    modelValue(value) {
      this.newValue = value;
    }
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    }
  }
};
var _hoisted_138 = ["disabled"];
var _hoisted_232 = ["disabled", "name", "required", "value", "true-value", "false-value", "aria-labelledby"];
var _hoisted_321 = ["id"];
function render37(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", {
    class: normalizeClass(["switch", $options.newClass]),
    ref: "label",
    disabled: $options.disabledOrUndefined,
    onClick: _cache[2] || (_cache[2] = (...args) => $options.focus && $options.focus(...args)),
    onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => _ctx.$refs.label.click(), ["prevent"]), ["enter"])),
    onMousedown: _cache[4] || (_cache[4] = ($event) => $data.isMouseDown = true),
    onMouseup: _cache[5] || (_cache[5] = ($event) => $data.isMouseDown = false),
    onMouseout: _cache[6] || (_cache[6] = ($event) => $data.isMouseDown = false),
    onBlur: _cache[7] || (_cache[7] = ($event) => $data.isMouseDown = false)
  }, [
    withDirectives(createBaseVNode("input", {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.computedValue = $event),
      type: "checkbox",
      ref: "input",
      onClick: _cache[1] || (_cache[1] = withModifiers(() => {
      }, ["stop"])),
      disabled: $options.disabledOrUndefined,
      name: $props.name,
      required: $props.required,
      value: $props.nativeValue,
      "true-value": $props.trueValue,
      "false-value": $props.falseValue,
      "aria-labelledby": $props.ariaLabelledby
    }, null, 8, _hoisted_232), [
      [vModelCheckbox, $options.computedValue]
    ]),
    createBaseVNode(
      "span",
      {
        class: normalizeClass(["check", $options.checkClasses])
      },
      null,
      2
      /* CLASS */
    ),
    $options.showControlLabel ? (openBlock(), createElementBlock("span", {
      key: 0,
      id: $props.ariaLabelledby,
      class: "control-label"
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 8, _hoisted_321)) : createCommentVNode("v-if", true)
  ], 42, _hoisted_138);
}
script38.render = render37;
script38.__file = "src/components/switch/Switch.vue";
var Plugin34 = {
  install: function install34(Vue) {
    registerComponent(Vue, script38);
  }
};
use(Plugin34);

// node_modules/buefy/dist/esm/table.js
var script$34 = {
  name: "BTableMobileSort",
  components: {
    [script14.name]: script14,
    [script.name]: script
  },
  props: {
    currentSortColumn: Object,
    sortMultipleData: Array,
    isAsc: Boolean,
    columns: Array,
    placeholder: String,
    iconPack: String,
    sortIcon: {
      type: String,
      default: "arrow-up"
    },
    sortIconSize: {
      type: String,
      default: "is-small"
    },
    sortMultiple: {
      type: Boolean,
      default: false
    }
  },
  emits: ["removePriority", "sort"],
  data() {
    return {
      sortMultipleSelect: "",
      sortMultipleSelectIndex: -1,
      mobileSort: this.currentSortColumn,
      mobileSortIndex: this.columns ? this.columns.indexOf(this.currentSortColumn) : -1,
      defaultEvent: {
        shiftKey: true,
        altKey: true,
        ctrlKey: true
      },
      ignoreSort: false
    };
  },
  computed: {
    showPlaceholder() {
      return !this.columns || !this.columns.some((column) => column === this.mobileSort);
    },
    sortableColumns() {
      return this.columns && this.columns.filter((column) => column.sortable);
    }
  },
  watch: {
    sortMultipleSelect(column) {
      if (this.ignoreSort) {
        this.ignoreSort = false;
      } else {
        this.$emit("sort", column, this.defaultEvent);
      }
    },
    sortMultipleSelectIndex(index) {
      if (index !== -1) {
        this.sortMultipleSelect = this.columns[index];
      } else {
        this.sortMultipleSelect = null;
      }
    },
    mobileSort(column) {
      if (this.currentSortColumn === column) return;
      this.$emit("sort", column, this.defaultEvent);
    },
    mobileSortIndex(index) {
      if (index !== -1) {
        this.mobileSort = this.columns[index];
      }
    },
    currentSortColumn(column) {
      this.mobileSort = column;
      this.mobileSortIndex = this.columns ? this.columns.indexOf(column) : -1;
    },
    columns(newColumns) {
      if (this.sortMultiple) {
        this.sortMultipleSelectIndex = newColumns.indexOf(
          this.sortMultipleSelect
        );
      } else {
        this.mobileSortIndex = newColumns.indexOf(this.mobileSort);
      }
    }
  },
  methods: {
    removePriority() {
      this.$emit("removePriority", this.sortMultipleSelect);
      this.ignoreSort = true;
      const remainingFields = this.sortMultipleData.filter((data8) => data8.field !== this.sortMultipleSelect.field).map((data8) => data8.field);
      this.sortMultipleSelectIndex = this.columns.findIndex((column) => remainingFields.includes(column.field));
    },
    getSortingObjectOfColumn(column) {
      return this.sortMultipleData.filter((i) => i.field === column.field)[0];
    },
    columnIsDesc(column) {
      const sortingObject = this.getSortingObjectOfColumn(column);
      if (sortingObject) {
        return !!(sortingObject.order && sortingObject.order === "desc");
      }
      return true;
    },
    getLabel(column) {
      const sortingObject = this.getSortingObjectOfColumn(column);
      if (sortingObject) {
        return column.label + "(" + (this.sortMultipleData.indexOf(sortingObject) + 1) + ")";
      }
      return column.label;
    },
    sort() {
      this.$emit("sort", this.sortMultiple ? this.sortMultipleSelect : this.mobileSort, this.defaultEvent);
    }
  }
};
var _hoisted_1$26 = { class: "field table-mobile-sort" };
var _hoisted_2$22 = { class: "field has-addons" };
var _hoisted_3$22 = ["value"];
var _hoisted_4$22 = ["value"];
var _hoisted_5$1 = { class: "control" };
function render$27(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_select = resolveComponent("b-select");
  const _component_b_icon = resolveComponent("b-icon");
  return openBlock(), createElementBlock("div", _hoisted_1$26, [
    createBaseVNode("div", _hoisted_2$22, [
      $props.sortMultiple ? (openBlock(), createBlock(_component_b_select, {
        key: 0,
        modelValue: $data.sortMultipleSelectIndex,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.sortMultipleSelectIndex = $event),
        expanded: ""
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($options.sortableColumns, (column, index) => {
              return openBlock(), createElementBlock("option", {
                key: index,
                value: index
              }, [
                createTextVNode(
                  toDisplayString($options.getLabel(column)) + " ",
                  1
                  /* TEXT */
                ),
                $options.getSortingObjectOfColumn(column) ? (openBlock(), createElementBlock(
                  Fragment,
                  { key: 0 },
                  [
                    $options.columnIsDesc(column) ? (openBlock(), createElementBlock(
                      Fragment,
                      { key: 0 },
                      [
                        createTextVNode(" ↓ ")
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : (openBlock(), createElementBlock(
                      Fragment,
                      { key: 1 },
                      [
                        createTextVNode(" ↑ ")
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    ))
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : createCommentVNode("v-if", true)
              ], 8, _hoisted_3$22);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])) : (openBlock(), createBlock(_component_b_select, {
        key: 1,
        modelValue: $data.mobileSortIndex,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.mobileSortIndex = $event),
        expanded: ""
      }, {
        default: withCtx(() => [
          $props.placeholder ? withDirectives((openBlock(), createElementBlock(
            "option",
            {
              key: 0,
              value: {},
              selected: "",
              disabled: "",
              hidden: ""
            },
            toDisplayString($props.placeholder),
            513
            /* TEXT, NEED_PATCH */
          )), [
            [vShow, $options.showPlaceholder]
          ]) : createCommentVNode("v-if", true),
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($options.sortableColumns, (column, index) => {
              return openBlock(), createElementBlock("option", {
                key: index,
                value: index
              }, toDisplayString(column.label), 9, _hoisted_4$22);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])),
      createBaseVNode("div", _hoisted_5$1, [
        $props.sortMultiple && $props.sortMultipleData.length > 0 ? (openBlock(), createElementBlock(
          Fragment,
          { key: 0 },
          [
            createBaseVNode("button", {
              class: "button is-primary",
              onClick: _cache[2] || (_cache[2] = (...args) => $options.sort && $options.sort(...args))
            }, [
              createVNode(_component_b_icon, {
                class: normalizeClass({ "is-desc": $options.columnIsDesc($data.sortMultipleSelect) }),
                icon: $props.sortIcon,
                pack: $props.iconPack,
                size: $props.sortIconSize,
                both: ""
              }, null, 8, ["class", "icon", "pack", "size"])
            ]),
            createBaseVNode("button", {
              class: "button is-primary",
              onClick: _cache[3] || (_cache[3] = (...args) => $options.removePriority && $options.removePriority(...args))
            }, [
              createVNode(_component_b_icon, {
                icon: "delete",
                size: $props.sortIconSize,
                both: ""
              }, null, 8, ["size"])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        )) : !$props.sortMultiple ? (openBlock(), createElementBlock("button", {
          key: 1,
          class: "button is-primary",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.sort && $options.sort(...args))
        }, [
          withDirectives(createVNode(_component_b_icon, {
            class: normalizeClass({ "is-desc": !$props.isAsc }),
            icon: $props.sortIcon,
            pack: $props.iconPack,
            size: $props.sortIconSize,
            both: ""
          }, null, 8, ["class", "icon", "pack", "size"]), [
            [vShow, $props.currentSortColumn === $data.mobileSort]
          ])
        ])) : createCommentVNode("v-if", true)
      ])
    ])
  ]);
}
script$34.render = render$27;
script$34.__file = "src/components/table/TableMobileSort.vue";
var script$27 = {
  name: "BTableColumn",
  inject: {
    $table: { name: "$table", default: false }
  },
  props: {
    label: String,
    customKey: [String, Number],
    field: String,
    meta: [String, Number, Boolean, Function, Object, Array],
    width: [Number, String],
    numeric: Boolean,
    centered: Boolean,
    searchable: Boolean,
    sortable: Boolean,
    visible: {
      type: Boolean,
      default: true
    },
    subheading: [String, Number],
    customSort: Function,
    customSearch: Function,
    sticky: Boolean,
    headerSelectable: Boolean,
    headerClass: String,
    cellClass: String,
    thAttrs: {
      type: Function,
      default: () => ({})
    },
    tdAttrs: {
      type: Function,
      default: () => ({})
    }
  },
  data() {
    return {
      newKey: this.customKey || this.label,
      _isTableColumn: true
    };
  },
  computed: {
    thClasses() {
      const attrs = this.thAttrs(this);
      const classes = [this.headerClass, {
        "is-sortable": this.sortable,
        "is-sticky": this.sticky,
        "is-unselectable": this.isHeaderUnSelectable
      }];
      if (attrs && attrs.class) {
        classes.push(attrs.class);
      }
      return classes;
    },
    thStyle() {
      const attrs = this.thAttrs(this);
      const style = [this.style];
      if (attrs && attrs.style) {
        style.push(attrs.style);
      }
      return style;
    },
    thWrapStyle() {
      const width = toCssWidth(this.width);
      if (width != null && !width.trim().endsWith("%")) {
        return { width };
      } else {
        return {};
      }
    },
    rootClasses() {
      return [this.cellClass, {
        "has-text-right": this.numeric && !this.centered,
        "has-text-centered": this.centered,
        "is-sticky": this.sticky
      }];
    },
    style() {
      return {
        width: toCssWidth(this.width)
      };
    },
    hasDefaultSlot() {
      return !!this.$slots.default;
    },
    /**
     * Return if column header is un-selectable
     */
    isHeaderUnSelectable() {
      return !this.headerSelectable && this.sortable;
    }
  },
  methods: {
    getRootClasses(row) {
      const attrs = this.tdAttrs(row, this);
      const classes = [this.rootClasses];
      if (attrs && attrs.class) {
        classes.push(attrs.class);
      }
      return classes;
    },
    getRootStyle(row) {
      const attrs = this.tdAttrs(row, this);
      const style = [];
      if (attrs && attrs.style) {
        style.push(attrs.style);
      }
      return style;
    }
  },
  created() {
    if (!this.$table) {
      throw new Error("You should wrap bTableColumn on a bTable");
    }
    this.$table._registerTableColumn(this);
  },
  beforeUnmount() {
    this.$table._unregisterTableColumn(this);
  },
  render(createElement) {
    return null;
  }
};
script$27.__file = "src/components/table/TableColumn.vue";
var script$115 = {
  name: "BTablePagination",
  components: {
    [script29.name]: script29
  },
  props: {
    paginated: Boolean,
    total: [Number, String],
    perPage: [Number, String],
    currentPage: [Number, String],
    paginationSimple: Boolean,
    paginationSize: String,
    rounded: Boolean,
    iconPack: String,
    ariaNextLabel: String,
    ariaPreviousLabel: String,
    ariaPageLabel: String,
    ariaCurrentLabel: String,
    pageInput: Boolean,
    paginationOrder: String,
    pageInputPosition: String,
    debouncePageInput: [Number, String]
  },
  emits: ["page-change", "update:currentPage"],
  data() {
    return {
      newCurrentPage: this.currentPage
    };
  },
  watch: {
    currentPage(newVal) {
      this.newCurrentPage = newVal;
    }
  },
  methods: {
    /**
    * Paginator change listener.
    */
    pageChanged(page) {
      this.newCurrentPage = page > 0 ? page : 1;
      this.$emit("update:currentPage", this.newCurrentPage);
      this.$emit("page-change", this.newCurrentPage);
    }
  }
};
var _hoisted_1$19 = { class: "top level" };
var _hoisted_2$16 = { class: "level-left" };
var _hoisted_3$14 = { class: "level-right" };
var _hoisted_4$13 = {
  key: 0,
  class: "level-item"
};
function render$113(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_pagination = resolveComponent("b-pagination");
  return openBlock(), createElementBlock("div", _hoisted_1$19, [
    createBaseVNode("div", _hoisted_2$16, [
      renderSlot(_ctx.$slots, "default")
    ]),
    createBaseVNode("div", _hoisted_3$14, [
      $props.paginated ? (openBlock(), createElementBlock("div", _hoisted_4$13, [
        createVNode(_component_b_pagination, {
          "icon-pack": $props.iconPack,
          total: $props.total,
          "per-page": $props.perPage,
          simple: $props.paginationSimple,
          size: $props.paginationSize,
          "model-value": $data.newCurrentPage,
          rounded: $props.rounded,
          onChange: $options.pageChanged,
          "aria-next-label": $props.ariaNextLabel,
          "aria-previous-label": $props.ariaPreviousLabel,
          "aria-page-label": $props.ariaPageLabel,
          "aria-current-label": $props.ariaCurrentLabel,
          "page-input": $props.pageInput,
          order: $props.paginationOrder,
          "page-input-position": $props.pageInputPosition,
          "debounce-page-input": $props.debouncePageInput
        }, null, 8, ["icon-pack", "total", "per-page", "simple", "size", "model-value", "rounded", "onChange", "aria-next-label", "aria-previous-label", "aria-page-label", "aria-current-label", "page-input", "order", "page-input-position", "debounce-page-input"])
      ])) : createCommentVNode("v-if", true)
    ])
  ]);
}
script$115.render = render$113;
script$115.__file = "src/components/table/TablePagination.vue";
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var tinyEmitter = { exports: {} };
function E() {
}
E.prototype = {
  on: function on(name, callback, ctx) {
    var e = this.e || (this.e = {});
    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx
    });
    return this;
  },
  once: function once(name, callback, ctx) {
    var self = this;
    function listener() {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    }
    listener._ = callback;
    return this.on(name, listener, ctx);
  },
  emit: function emit(name) {
    var data8 = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;
    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data8);
    }
    return this;
  },
  off: function off(name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];
    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
      }
    }
    liveEvents.length ? e[name] = liveEvents : delete e[name];
    return this;
  }
};
tinyEmitter.exports = E;
tinyEmitter.exports.TinyEmitter = E;
var tinyEmitterExports = tinyEmitter.exports;
var Emitter = getDefaultExportFromCjs(tinyEmitterExports);
function ownKeys8(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread8(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys8(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys8(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function mockTableColumn(table, column) {
  var eventEmitter = new Emitter();
  var defaultProps = {
    label: void 0,
    customKey: void 0,
    field: void 0,
    meta: void 0,
    width: void 0,
    numeric: void 0,
    centered: void 0,
    searchable: void 0,
    sortable: void 0,
    visible: true,
    subheading: void 0,
    customSort: void 0,
    customSearch: void 0,
    sticky: void 0,
    headerSelectable: void 0,
    headerClass: void 0,
    thAttrs: function thAttrs() {
      return {};
    },
    tdAttrs: function tdAttrs() {
      return {};
    }
  };
  return _objectSpread8(_objectSpread8(_objectSpread8({}, defaultProps), column), {}, {
    // data
    parent: table,
    newKey: column.customKey || column.label,
    _isTableColumn: true,
    // inject
    $table: table,
    // computed
    get thClasses() {
      var attrs = this.thAttrs(this);
      var classes = [this.headerClass, {
        "is-sortable": this.sortable,
        "is-sticky": this.sticky,
        "is-unselectable": this.isHeaderUnSelectable
      }];
      if (attrs && attrs["class"]) {
        classes.push(attrs["class"]);
      }
      return classes;
    },
    get thStyle() {
      var attrs = this.thAttrs(this);
      var style = [this.style];
      if (attrs && attrs.style) {
        style.push(attrs.style);
      }
      return style;
    },
    get thWrapStyle() {
      return this.style;
    },
    get rootClasses() {
      return [this.cellClass, {
        "has-text-right": this.numeric && !this.centered,
        "has-text-centered": this.centered,
        "is-sticky": this.sticky
      }];
    },
    get style() {
      return {
        width: toCssWidth(this.width)
      };
    },
    get hasDefaultSlot() {
      return !!this.$scopedSlots["default"];
    },
    get isHeaderUnSelectable() {
      return !this.headerSelectable && this.sortable;
    },
    // methods
    getRootClasses: function getRootClasses(row) {
      var attrs = this.tdAttrs(row, this);
      var classes = [this.rootClasses];
      if (attrs && attrs["class"]) {
        classes.push(attrs["class"]);
      }
      return classes;
    },
    getRootStyle: function getRootStyle(row) {
      var attrs = this.tdAttrs(row, this);
      var style = [];
      if (attrs && attrs.style) {
        style.push(attrs.style);
      }
      return style;
    },
    $on: function $on() {
      return eventEmitter.on.apply(eventEmitter, arguments);
    },
    $once: function $once() {
      return eventEmitter.once.apply(eventEmitter, arguments);
    },
    $off: function $off() {
      return eventEmitter.off.apply(eventEmitter, arguments);
    },
    $emit: function $emit() {
      return eventEmitter.emit.apply(eventEmitter, arguments);
    },
    // special fields
    _isVue: true,
    $slots: {
      "default": function _default10(props) {
        var vnode = h("span", {
          innerHTML: getValueByPath(props.row, column.field)
        });
        return [vnode];
      }
    }
  });
}
var script39 = {
  name: "BTable",
  components: {
    [script8.name]: script8,
    [script.name]: script,
    [script2.name]: script2,
    [script22.name]: script22,
    [SlotComponent.name]: SlotComponent,
    [script$34.name]: script$34,
    [script$27.name]: script$27,
    [script$115.name]: script$115
  },
  mixins: [CompatFallthroughMixin],
  provide() {
    return {
      $table: this
    };
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    bordered: Boolean,
    striped: Boolean,
    narrowed: Boolean,
    hoverable: Boolean,
    loading: Boolean,
    detailed: Boolean,
    checkable: Boolean,
    headerCheckable: {
      type: Boolean,
      default: true
    },
    checkboxType: {
      type: String,
      default: "is-primary"
    },
    checkboxPosition: {
      type: String,
      default: "left",
      validator: (value) => {
        return [
          "left",
          "right"
        ].indexOf(value) >= 0;
      }
    },
    stickyCheckbox: {
      type: Boolean,
      default: false
    },
    selected: Object,
    isRowSelectable: {
      type: Function,
      default: () => true
    },
    focusable: Boolean,
    customIsChecked: Function,
    isRowCheckable: {
      type: Function,
      default: () => true
    },
    checkedRows: {
      type: Array,
      default: () => []
    },
    mobileCards: {
      type: Boolean,
      default: true
    },
    defaultSort: [String, Array],
    defaultSortDirection: {
      type: String,
      default: "asc"
    },
    sortIcon: {
      type: String,
      default: "arrow-up"
    },
    sortIconSize: {
      type: String,
      default: "is-small"
    },
    sortMultiple: {
      type: Boolean,
      default: false
    },
    sortMultipleData: {
      type: Array,
      default: () => []
    },
    sortMultipleKey: {
      type: String,
      default: null
    },
    paginated: Boolean,
    currentPage: {
      type: Number,
      default: 1
    },
    perPage: {
      type: [Number, String],
      default: 20
    },
    showDetailIcon: {
      type: Boolean,
      default: true
    },
    detailIcon: {
      type: String,
      default: "chevron-right"
    },
    paginationPosition: {
      type: String,
      default: "bottom",
      validator: (value) => {
        return [
          "bottom",
          "top",
          "both"
        ].indexOf(value) >= 0;
      }
    },
    paginationRounded: Boolean,
    backendSorting: Boolean,
    backendFiltering: Boolean,
    rowClass: {
      type: Function,
      default: () => ""
    },
    openedDetailed: {
      type: Array,
      default: () => []
    },
    hasDetailedVisible: {
      type: Function,
      default: () => true
    },
    detailKey: {
      type: String,
      default: ""
    },
    detailTransition: {
      type: String,
      default: ""
    },
    customDetailRow: {
      type: Boolean,
      default: false
    },
    backendPagination: Boolean,
    total: {
      type: [Number, String],
      default: 0
    },
    iconPack: String,
    mobileSortPlaceholder: String,
    customRowKey: String,
    draggable: {
      type: Boolean,
      default: false
    },
    draggableColumn: {
      type: Boolean,
      default: false
    },
    scrollable: Boolean,
    ariaNextLabel: String,
    ariaPreviousLabel: String,
    ariaPageLabel: String,
    ariaCurrentLabel: String,
    stickyHeader: Boolean,
    height: [Number, String],
    filtersEvent: {
      type: String,
      default: ""
    },
    cardLayout: Boolean,
    showHeader: {
      type: Boolean,
      default: true
    },
    debounceSearch: Number,
    caption: String,
    showCaption: {
      type: Boolean,
      default: true
    },
    pageInput: {
      type: Boolean,
      default: false
    },
    paginationOrder: String,
    pageInputPosition: String,
    debouncePageInput: [Number, String]
  },
  emits: [
    "cellclick",
    "check",
    "check-all",
    "click",
    "columndragend",
    "columndragleave",
    "columndragover",
    "columndragstart",
    "columndrop",
    "contextmenu",
    "dblclick",
    "details-close",
    "details-open",
    "dragend",
    "dragleave",
    "dragover",
    "dragstart",
    "drop",
    "filters-change",
    "page-change",
    "select",
    "sort",
    "sorting-priority-removed",
    "update:checkedRows",
    "update:currentPage",
    "update:openedDetailed",
    "update:selected"
  ],
  data() {
    return {
      sortMultipleDataLocal: [],
      getValueByPath,
      visibleDetailRows: this.openedDetailed,
      newData: this.data,
      newDataTotal: this.backendPagination ? this.total : this.data.length,
      newCheckedRows: [...this.checkedRows],
      lastCheckedRowIndex: null,
      newCurrentPage: this.currentPage,
      currentSortColumn: {},
      isAsc: true,
      filters: {},
      defaultSlots: [],
      firstTimeSort: true,
      // Used by first time initSort
      _isTable: true,
      // Used by TableColumn
      isDraggingRow: false,
      isDraggingColumn: false,
      // for touch-enabled devices
      _selectedRow: null,
      mayBeTouchDragging: false,
      touchDragoverTarget: null,
      _draggedCellEl: void 0,
      draggedCellContent: ""
    };
  },
  computed: {
    sortMultipleDataComputed() {
      return this.backendSorting ? this.sortMultipleData : this.sortMultipleDataLocal;
    },
    tableClasses() {
      return {
        "is-bordered": this.bordered,
        "is-striped": this.striped,
        "is-narrow": this.narrowed,
        "is-hoverable": (this.hoverable || this.focusable) && this.visibleData.length
      };
    },
    tableWrapperClasses() {
      return {
        "has-mobile-cards": this.mobileCards,
        "has-sticky-header": this.stickyHeader,
        "is-card-list": this.cardLayout,
        "table-container": this.isScrollable
      };
    },
    tableStyle() {
      return {
        height: toCssWidth(this.height)
      };
    },
    touchDraggedCellClasses() {
      return {
        "has-mobile-cards": this.mobileCards
      };
    },
    /**
    * Splitted data based on the pagination.
    */
    visibleData() {
      if (!this.paginated) return this.newData;
      const currentPage = this.newCurrentPage;
      const perPage = this.perPage;
      if (this.newData.length <= perPage) {
        return this.newData;
      } else {
        const start = (currentPage - 1) * perPage;
        const end = parseInt(start, 10) + parseInt(perPage, 10);
        return this.newData.slice(start, end);
      }
    },
    visibleColumns() {
      if (!this.newColumns) return this.newColumns;
      return this.newColumns.filter((column) => {
        return column.visible || column.visible === void 0;
      });
    },
    /**
    * Check if all rows in the page are checked.
    */
    isAllChecked() {
      const validVisibleData = this.visibleData.filter(
        (row) => this.isRowCheckable(row)
      );
      if (validVisibleData.length === 0) return false;
      const isAllChecked = validVisibleData.some((currentVisibleRow) => {
        return indexOf(this.newCheckedRows, currentVisibleRow, this.customIsChecked) < 0;
      });
      return !isAllChecked;
    },
    /**
    * Check if all rows in the page are checkable.
    */
    isAllUncheckable() {
      const validVisibleData = this.visibleData.filter(
        (row) => this.isRowCheckable(row)
      );
      return validVisibleData.length === 0;
    },
    /**
    * Check if has any sortable column.
    */
    hasSortablenewColumns() {
      return this.newColumns.some((column) => {
        return column.sortable;
      });
    },
    /**
    * Check if has any searchable column.
    */
    hasSearchablenewColumns() {
      return this.newColumns.some((column) => {
        return column.searchable;
      });
    },
    /**
    * Check if has any column using subheading.
    */
    hasCustomSubheadings() {
      if (this.$slots && this.$slots.subheading) return true;
      return this.newColumns.some((column) => {
        return column.subheading || column.$slots.subheading;
      });
    },
    /**
    * Return total column count based if it's checkable or expanded
    */
    columnCount() {
      let count = this.visibleColumns.length;
      count += this.checkable ? 1 : 0;
      count += this.detailed && this.showDetailIcon ? 1 : 0;
      return count;
    },
    /**
    * return if detailed row tabled
    * will be with chevron column & icon or not
    */
    showDetailRowIcon() {
      return this.detailed && this.showDetailIcon;
    },
    /**
    * return if scrollable table
    */
    isScrollable() {
      if (this.scrollable) return true;
      if (!this.newColumns) return false;
      return this.newColumns.some((column) => {
        return column.sticky;
      });
    },
    newColumns() {
      if (this.columns && this.columns.length) {
        return this.columns.map((column) => {
          return mockTableColumn(this, column);
        });
      }
      return this.defaultSlots;
    },
    canDragRow() {
      return this.draggable && !this.isDraggingColumn;
    },
    canDragColumn() {
      return this.draggableColumn && !this.isDraggingRow;
    }
  },
  watch: {
    /**
    * When data prop change:
    *   1. Update internal value.
    *   2. Filter data if it's not backend-filtered.
    *   3. Sort again if it's not backend-sorted.
    *   4. Set new total if it's not backend-paginated.
    */
    data(value) {
      this.newData = value;
      if (!this.backendFiltering) {
        this.newData = value.filter(
          (row) => this.isRowFiltered(row)
        );
      }
      if (!this.backendSorting) {
        this.sort(this.currentSortColumn, true);
      }
      if (!this.backendPagination) {
        this.newDataTotal = this.newData.length;
      }
    },
    /**
    * When Pagination total change, update internal total
    * only if it's backend-paginated.
    */
    total(newTotal) {
      if (!this.backendPagination) return;
      this.newDataTotal = newTotal;
    },
    currentPage(newVal) {
      this.newCurrentPage = newVal;
    },
    newCurrentPage(newVal) {
      this.$emit("update:currentPage", newVal);
    },
    /**
    * When checkedRows prop change, update internal value without
    * mutating original data.
    */
    checkedRows(rows) {
      this.newCheckedRows = [...rows];
    },
    /*
    newColumns(value) {
        this.checkSort()
    },
    */
    debounceSearch: {
      handler(value) {
        this.debouncedHandleFiltersChange = debounce(this.handleFiltersChange, value);
      },
      immediate: true
    },
    filters: {
      handler(value) {
        if (this.debounceSearch) {
          this.debouncedHandleFiltersChange(value);
        } else {
          this.handleFiltersChange(value);
        }
      },
      deep: true
    },
    /**
    * When the user wants to control the detailed rows via props.
    * Or wants to open the details of certain row with the router for example.
    */
    openedDetailed(expandedRows) {
      this.visibleDetailRows = expandedRows;
    }
  },
  methods: {
    onFiltersEvent(event) {
      this.$emit(`filters-event-${this.filtersEvent}`, { event, filters: this.filters });
    },
    handleFiltersChange(value) {
      if (this.backendFiltering) {
        this.$emit("filters-change", value);
      } else {
        this.newData = this.data.filter(
          (row) => this.isRowFiltered(row)
        );
        if (!this.backendPagination) {
          this.newDataTotal = this.newData.length;
        }
        if (!this.backendSorting) {
          if (this.sortMultiple && this.sortMultipleDataLocal && this.sortMultipleDataLocal.length > 0) {
            this.doSortMultiColumn();
          } else if (Object.keys(this.currentSortColumn).length > 0) {
            this.doSortSingleColumn(this.currentSortColumn);
          }
        }
      }
    },
    findIndexOfSortData(column) {
      const sortObj = this.sortMultipleDataComputed.filter((i) => i.field === column.field)[0];
      return this.sortMultipleDataComputed.indexOf(sortObj) + 1;
    },
    removeSortingPriority(column) {
      if (this.backendSorting) {
        this.$emit("sorting-priority-removed", column.field);
      } else {
        this.sortMultipleDataLocal = this.sortMultipleDataLocal.filter(
          (priority) => priority.field !== column.field
        );
        if (this.sortMultipleDataLocal.length === 0) {
          this.resetMultiSorting();
        } else {
          this.newData = multiColumnSort(this.newData, this.sortMultipleDataLocal);
        }
      }
    },
    resetMultiSorting() {
      this.sortMultipleDataLocal = [];
      this.currentSortColumn = {};
      this.newData = this.data;
    },
    /**
    * Sort an array by key without mutating original data.
    * Call the user sort function if it was passed.
    */
    sortBy(array, key, fn, isAsc) {
      let sorted2 = [];
      if (fn && typeof fn === "function") {
        sorted2 = [...array].sort((a, b) => fn(a, b, isAsc));
      } else {
        sorted2 = [...array].sort((a, b) => {
          let newA = getValueByPath(a, key);
          let newB = getValueByPath(b, key);
          if (typeof newA === "boolean" && typeof newB === "boolean") {
            return isAsc ? newA - newB : newB - newA;
          }
          if (!isNil(newB) && isNil(newA)) return isAsc ? 1 : -1;
          if (!isNil(newA) && isNil(newB)) return isAsc ? -1 : 1;
          if (newA === newB) return 0;
          newA = typeof newA === "string" ? newA.toUpperCase() : newA;
          newB = typeof newB === "string" ? newB.toUpperCase() : newB;
          return isAsc ? newA > newB ? 1 : -1 : newA > newB ? -1 : 1;
        });
      }
      return sorted2;
    },
    sortMultiColumn(column) {
      this.currentSortColumn = {};
      if (!this.backendSorting) {
        const existingPriority = this.sortMultipleDataLocal.filter((i) => i.field === column.field)[0];
        if (existingPriority) {
          existingPriority.order = existingPriority.order === "desc" ? "asc" : "desc";
        } else {
          this.sortMultipleDataLocal.push({
            field: column.field,
            order: column.isAsc,
            customSort: column.customSort
          });
        }
        this.doSortMultiColumn();
      }
    },
    doSortMultiColumn() {
      this.newData = multiColumnSort(this.newData, this.sortMultipleDataLocal);
    },
    /**
    * Sort the column.
    * Toggle current direction on column if it's sortable
    * and not just updating the prop.
    */
    sort(column, updatingData = false, event = null) {
      if (!column || !column.sortable) return;
      if (
        // if backend sorting is enabled, just emit the sort press like usual
        // if the correct key combination isnt pressed, sort like usual
        !this.backendSorting && this.sortMultiple && (this.sortMultipleKey && event[this.sortMultipleKey] || !this.sortMultipleKey)
      ) {
        if (updatingData) {
          this.doSortMultiColumn();
        } else {
          this.sortMultiColumn(column);
        }
      } else {
        if (this.sortMultiple) {
          this.sortMultipleDataLocal = [];
        }
        if (!updatingData) {
          this.isAsc = toRaw(column) === toRaw(this.currentSortColumn) ? !this.isAsc : this.defaultSortDirection.toLowerCase() !== "desc";
        }
        if (!this.firstTimeSort) {
          this.$emit("sort", column.field, this.isAsc ? "asc" : "desc", event);
        }
        if (!this.backendSorting) {
          this.doSortSingleColumn(column);
        }
        this.currentSortColumn = column;
      }
    },
    doSortSingleColumn(column) {
      this.newData = this.sortBy(
        this.newData,
        column.field,
        column.customSort,
        this.isAsc
      );
    },
    isRowSelected(row, selected) {
      if (!selected) {
        return false;
      }
      if (this.customRowKey) {
        return row[this.customRowKey] === selected[this.customRowKey];
      }
      return row === selected;
    },
    /**
    * Check if the row is checked (is added to the array).
    */
    isRowChecked(row) {
      return indexOf(this.newCheckedRows, row, this.customIsChecked) >= 0;
    },
    /**
    * Remove a checked row from the array.
    */
    removeCheckedRow(row) {
      const index = indexOf(this.newCheckedRows, row, this.customIsChecked);
      if (index >= 0) {
        this.newCheckedRows.splice(index, 1);
      }
    },
    /**
    * Header checkbox click listener.
    * Add or remove all rows in current page.
    */
    checkAll() {
      const isAllChecked = this.isAllChecked;
      this.visibleData.forEach((currentRow) => {
        if (this.isRowCheckable(currentRow)) {
          this.removeCheckedRow(currentRow);
        }
        if (!isAllChecked) {
          if (this.isRowCheckable(currentRow)) {
            this.newCheckedRows.push(currentRow);
          }
        }
      });
      this.$emit("check", this.newCheckedRows);
      this.$emit("check-all", this.newCheckedRows);
      this.$emit("update:checkedRows", this.newCheckedRows);
    },
    /**
    * Row checkbox click listener.
    */
    checkRow(row, index, event) {
      if (!this.isRowCheckable(row)) return;
      const lastIndex = this.lastCheckedRowIndex;
      this.lastCheckedRowIndex = index;
      if (event.shiftKey && lastIndex !== null && index !== lastIndex) {
        this.shiftCheckRow(row, index, lastIndex);
      } else if (!this.isRowChecked(row)) {
        this.newCheckedRows.push(row);
      } else {
        this.removeCheckedRow(row);
      }
      this.$emit("check", this.newCheckedRows, row);
      this.$emit("update:checkedRows", this.newCheckedRows);
    },
    /**
     * Check row when shift is pressed.
     */
    shiftCheckRow(row, index, lastCheckedRowIndex) {
      const subset = this.visibleData.slice(
        Math.min(index, lastCheckedRowIndex),
        Math.max(index, lastCheckedRowIndex) + 1
      );
      const shouldCheck = !this.isRowChecked(row);
      subset.forEach((item) => {
        this.removeCheckedRow(item);
        if (shouldCheck && this.isRowCheckable(item)) {
          this.newCheckedRows.push(item);
        }
      });
    },
    /**
    * Row click listener.
    * Emit all necessary events.
    */
    selectRow(row, index) {
      this.$emit("click", row);
      this._selectedRow = row;
      if (this.selected === row) return;
      if (!this.isRowSelectable(row)) return;
      this.$emit("select", row, this.selected);
      this.$emit("update:selected", row);
    },
    /**
    * Toggle to show/hide details slot
    */
    toggleDetails(obj) {
      const found = this.isVisibleDetailRow(obj);
      if (found) {
        this.closeDetailRow(obj);
        this.$emit("details-close", obj);
      } else {
        this.openDetailRow(obj);
        this.$emit("details-open", obj);
      }
      this.$emit("update:openedDetailed", this.visibleDetailRows);
    },
    openDetailRow(obj) {
      const index = this.handleDetailKey(obj);
      this.visibleDetailRows.push(index);
    },
    closeDetailRow(obj) {
      const index = this.handleDetailKey(obj);
      const i = this.visibleDetailRows.indexOf(index);
      if (i >= 0) {
        this.visibleDetailRows.splice(i, 1);
      }
    },
    isVisibleDetailRow(obj) {
      const index = this.handleDetailKey(obj);
      return this.visibleDetailRows.indexOf(index) >= 0;
    },
    isActiveDetailRow(row) {
      return this.detailed && !this.customDetailRow && this.isVisibleDetailRow(row);
    },
    isActiveCustomDetailRow(row) {
      return this.detailed && this.customDetailRow && this.isVisibleDetailRow(row);
    },
    isRowFiltered(row) {
      for (const key in this.filters) {
        if (!this.filters[key]) continue;
        const input = this.filters[key];
        const column = this.newColumns.filter((c) => c.field === key)[0];
        if (column && column.customSearch && typeof column.customSearch === "function") {
          if (!column.customSearch(row, input)) return false;
        } else {
          const value = this.getValueByPath(row, key);
          if (value == null) return false;
          if (Number.isInteger(value)) {
            if (value !== Number(input)) return false;
          } else {
            const re = new RegExp(escapeRegExpChars(input), "i");
            if (Array.isArray(value)) {
              const valid = value.some(
                (val) => re.test(removeDiacriticsFromString(val)) || re.test(val)
              );
              if (!valid) return false;
            } else {
              if (!re.test(removeDiacriticsFromString(value)) && !re.test(value)) {
                return false;
              }
            }
          }
        }
      }
      return true;
    },
    /**
    * When the detailKey is defined we use the object[detailKey] as index.
    * If not, use the object reference by default.
    */
    handleDetailKey(index) {
      const key = this.detailKey;
      return !key.length || !index ? index : index[key];
    },
    checkPredefinedDetailedRows() {
      const defaultExpandedRowsDefined = this.openedDetailed.length > 0;
      if (defaultExpandedRowsDefined && !this.detailKey.length) {
        throw new Error('If you set a predefined opened-detailed, you must provide a unique key using the prop "detail-key"');
      }
    },
    /**
    * Call initSort only first time (For example async data).
    */
    checkSort() {
      if (this.newColumns.length && this.firstTimeSort) {
        this.initSort();
        this.firstTimeSort = false;
      } else if (this.newColumns.length) {
        if (Object.keys(this.currentSortColumn).length > 0) {
          for (let i = 0; i < this.newColumns.length; i++) {
            if (this.newColumns[i].field === this.currentSortColumn.field) {
              this.currentSortColumn = this.newColumns[i];
              break;
            }
          }
        }
      }
    },
    /**
    * Check if footer slot has custom content.
    *
    * Assumes that `$slots.footer` is specified.
    */
    hasCustomFooterSlot() {
      const footer = this.$slots.footer();
      if (footer.length > 1) return true;
      if (isFragment(footer[0])) return true;
      const tag = footer[0].tag;
      if (tag !== "th" && tag !== "td") return false;
      return true;
    },
    /**
    * Check if bottom-left slot exists.
    */
    hasBottomLeftSlot() {
      return typeof this.$slots["bottom-left"] !== "undefined";
    },
    /**
    * Table arrow keys listener, change selection.
    */
    pressedArrow(pos) {
      if (!this.visibleData.length) return;
      let index = this.visibleData.indexOf(this.selected) + pos;
      index = index < 0 ? 0 : index > this.visibleData.length - 1 ? this.visibleData.length - 1 : index;
      const row = this.visibleData[index];
      if (!this.isRowSelectable(row)) {
        let newIndex = null;
        if (pos > 0) {
          for (let i = index; i < this.visibleData.length && newIndex === null; i++) {
            if (this.isRowSelectable(this.visibleData[i])) newIndex = i;
          }
        } else {
          for (let i = index; i >= 0 && newIndex === null; i--) {
            if (this.isRowSelectable(this.visibleData[i])) newIndex = i;
          }
        }
        if (newIndex >= 0) {
          this.selectRow(this.visibleData[newIndex]);
        }
      } else {
        this.selectRow(row);
      }
    },
    /**
    * Focus table element if has selected prop.
    */
    focus() {
      if (!this.focusable) return;
      this.$el.querySelector("table").focus();
    },
    /**
    * Initial sorted column based on the default-sort prop.
    */
    initSort() {
      if (this.sortMultiple && this.sortMultipleData) {
        this.sortMultipleData.forEach((column) => {
          this.sortMultiColumn(column);
        });
      } else {
        if (!this.defaultSort) return;
        let sortField = "";
        let sortDirection = this.defaultSortDirection;
        if (Array.isArray(this.defaultSort)) {
          sortField = this.defaultSort[0];
          if (this.defaultSort[1]) {
            sortDirection = this.defaultSort[1];
          }
        } else {
          sortField = this.defaultSort;
        }
        const sortColumn = this.newColumns.filter(
          (column) => column.field === sortField
        )[0];
        if (sortColumn) {
          this.isAsc = sortDirection.toLowerCase() !== "desc";
          this.sort(sortColumn, true);
        }
      }
    },
    /**
    * Emits drag start event (row)
    */
    handleDragStart(event, row, index) {
      if (!this.canDragRow) return;
      this.isDraggingRow = true;
      this.$emit("dragstart", { event, row, index });
    },
    /**
    * Emits drag leave event (row)
    */
    handleDragEnd(event, row, index) {
      if (!this.canDragRow) return;
      this.isDraggingRow = false;
      this.$emit("dragend", { event, row, index });
    },
    /**
    * Emits drop event (row)
    */
    handleDrop(event, row, index) {
      if (!this.canDragRow) return;
      this.$emit("drop", { event, row, index });
    },
    /**
    * Emits drag over event (row)
    */
    handleDragOver(event, row, index) {
      if (!this.canDragRow) return;
      this.$emit("dragover", { event, row, index });
    },
    /**
    * Emits drag leave event (row)
    */
    handleDragLeave(event, row, index) {
      if (!this.canDragRow) return;
      this.$emit("dragleave", { event, row, index });
    },
    emitEventForRow(eventName, event, row) {
      return this.$attrs[`on${eventName}`] ? this.$emit(eventName, row, event) : null;
    },
    /**
    * Emits drag start event (column)
    */
    handleColumnDragStart(event, column, index) {
      if (!this.canDragColumn) return;
      this.isDraggingColumn = true;
      this.$emit("columndragstart", { event, column, index });
    },
    /**
    * Emits drag leave event (column)
    */
    handleColumnDragEnd(event, column, index) {
      if (!this.canDragColumn) return;
      this.isDraggingColumn = false;
      this.$emit("columndragend", { event, column, index });
    },
    /**
    * Emits drop event (column)
    */
    handleColumnDrop(event, column, index) {
      if (!this.canDragColumn) return;
      this.$emit("columndrop", { event, column, index });
    },
    /**
    * Emits drag over event (column)
    */
    handleColumnDragOver(event, column, index) {
      if (!this.canDragColumn) return;
      this.$emit("columndragover", { event, column, index });
    },
    /**
    * Emits drag leave event (column)
    */
    handleColumnDragLeave(event, column, index) {
      if (!this.canDragColumn) return;
      this.$emit("columndragleave", { event, column, index });
    },
    /**
    * Starts monitoring drag-by-touch events (row on touch-enabled devices)
    */
    handleTouchStart(event, row, index) {
      if (!this.canDragRow) return;
      if (this.isDraggingColumn) return;
      if (this._selectedRow !== row) return;
      event.preventDefault();
      this.mayBeTouchDragging = true;
    },
    /**
    * Emits dragover and dragleave events (row on touch-enabled devices)
    *
    * Emits also dragstart if this is the first touchmove after touchstart.
    */
    handleTouchMove(event, row, index) {
      if (!this.canDragRow) return;
      if (!this.mayBeTouchDragging) return;
      if (!this.isDraggingRow) {
        const tr = event.target.closest("tr");
        this.draggedCellContent = tr ? `<table class="table"><tr>${tr.innerHTML}</tr></table>` : event.target.innerHTML;
        this.$refs.draggedCell.style.width = tr ? `${tr.offsetWidth}px` : `${event.target.offsetWidth}px`;
        event.target.dispatchEvent(translateTouchAsDragEvent(event, {
          type: "dragstart"
        }));
      }
      const touch = event.touches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      if (target != null) {
        if (target !== this.touchDragoverTarget) {
          if (this.touchDragoverTarget != null) {
            this.touchDragoverTarget.dispatchEvent(
              translateTouchAsDragEvent(event, {
                type: "dragleave",
                target: this.touchDragoverTarget
              })
            );
          }
          this.touchDragoverTarget = target;
          target.dispatchEvent(
            translateTouchAsDragEvent(event, {
              type: "dragover",
              target
            })
          );
        }
      } else if (this.touchDragoverTarget != null) {
        this.touchDragoverTarget.dispatchEvent(
          translateTouchAsDragEvent(event, {
            type: "dragleave",
            target: this.touchDragoverTarget
          })
        );
        this.touchDragoverTarget = null;
      }
      this.updateDraggedCell(touch);
    },
    /**
    * Emits drop and dragend events (row on touch-enabled devices)
    */
    handleTouchEnd(event, row, index) {
      if (!this.canDragRow) return;
      if (this.isDraggingRow) {
        const touch = event.changedTouches[0];
        const target = document.elementFromPoint(touch.clientX, touch.clientY);
        if (target != null) {
          target.dispatchEvent(translateTouchAsDragEvent(event, {
            type: "drop",
            target
          }));
        }
        event.target.dispatchEvent(translateTouchAsDragEvent(event, {
          type: "dragend"
        }));
        this._selectedRow = null;
      }
      this.mayBeTouchDragging = false;
    },
    /**
    * Starts monitoring drag-by-touch events (column on touch-enabled devices)
    */
    handleColumnTouchStart(event, column, index) {
      if (!this.canDragColumn) return;
      if (this.isDraggingRow) return;
      event.preventDefault();
      this.mayBeTouchDragging = true;
    },
    /**
    * Emits dragover and dragleave events (column on touch-enabled devices)
    *
    * Also emits dragstart if this is the first touchmove after touchstart.
    */
    handleColumnTouchMove(event, column, index) {
      if (!this.canDragColumn) return;
      if (!this.mayBeTouchDragging) return;
      if (!this.isDraggingColumn) {
        this.draggedCellContent = event.target.innerHTML;
        this.$refs.draggedCell.style.width = `${event.target.offsetWidth}px`;
        event.target.dispatchEvent(translateTouchAsDragEvent(event, {
          type: "dragstart"
        }));
      }
      const touch = event.touches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      if (target != null) {
        if (target !== this.touchDragoverTarget) {
          if (this.touchDragoverTarget != null) {
            this.touchDragoverTarget.dispatchEvent(
              translateTouchAsDragEvent(event, {
                type: "dragleave",
                target: this.touchDragoverTarget
              })
            );
          }
          this.touchDragoverTarget = target;
          target.dispatchEvent(
            translateTouchAsDragEvent(event, {
              type: "dragover",
              target
            })
          );
        }
      } else if (this.touchDragoverTarget != null) {
        this.touchDragoverTarget.dispatchEvent(
          translateTouchAsDragEvent(event, {
            type: "dragleave",
            target: this.touchDragoverTarget
          })
        );
        this.touchDragoverTarget = null;
      }
      this.updateDraggedCell(touch);
    },
    /**
    * Emits drop and dragend events (column on touch-enabled devices)
    */
    handleColumnTouchEnd(event, column, index) {
      if (!this.canDragColumn) return;
      if (this.isDraggingColumn) {
        const touch = event.changedTouches[0];
        const target = document.elementFromPoint(touch.clientX, touch.clientY);
        if (target != null) {
          target.dispatchEvent(translateTouchAsDragEvent(event, {
            type: "drop",
            target
          }));
        }
        event.target.dispatchEvent(translateTouchAsDragEvent(event, {
          type: "dragend"
        }));
      }
      this.mayBeTouchDragging = false;
    },
    updateDraggedCell({ clientX, clientY }) {
      const cellRect = this.$refs.draggedCell.getBoundingClientRect();
      const top = clientY + window.scrollY - cellRect.height / 2;
      const left = clientX + window.scrollX - cellRect.width / 2;
      this.$refs.draggedCell.style.top = `calc(${top}px)`;
      this.$refs.draggedCell.style.left = `calc(${left}px)`;
    },
    _registerTableColumn(column) {
      if (column._isTableColumn) {
        this.defaultSlots.push(column);
      }
    },
    _unregisterTableColumn(column) {
      const index = this.defaultSlots.indexOf(column);
      if (index !== -1) {
        this.defaultSlots.splice(index, 1);
      }
    }
  },
  mounted() {
    this.checkPredefinedDetailedRows();
    this.checkSort();
    function prepareDraggedCell(isDraggable) {
      if (isDraggable && this.$data._draggedCellEl == null) {
        this.$data._draggedCellEl = createAbsoluteElement(this.$refs.draggedCell);
      }
    }
    this.$watch("draggable", prepareDraggedCell, { immediate: true });
    this.$watch("draggableColumn", prepareDraggedCell, { immediate: true });
  },
  beforeUnmount() {
    if (this.$data._draggedCellEl) {
      removeElement(this.$data._draggedCellEl);
    }
  }
};
var _hoisted_139 = ["tabindex"];
var _hoisted_233 = { key: 1 };
var _hoisted_322 = {
  key: 0,
  width: "40px"
};
var _hoisted_416 = ["onClick", "draggable", "onDragstart", "onDragend", "onDrop", "onDragover", "onDragleave", "onTouchstart", "onTouchmove", "onTouchend"];
var _hoisted_511 = {
  key: 0,
  class: "multi-sort-icons"
};
var _hoisted_69 = ["onClick"];
var _hoisted_79 = {
  key: 0,
  class: "is-subheading"
};
var _hoisted_88 = {
  key: 0,
  width: "40px"
};
var _hoisted_96 = { key: 1 };
var _hoisted_104 = { key: 2 };
var _hoisted_1111 = { key: 1 };
var _hoisted_1210 = {
  key: 0,
  width: "40px"
};
var _hoisted_1310 = { key: 1 };
var _hoisted_143 = { key: 2 };
var _hoisted_153 = ["onClick", "onDblclick", "onMouseenter", "onMouseleave", "onContextmenu", "draggable", "onDragstart", "onDragend", "onDrop", "onDragover", "onDragleave", "onTouchstart", "onTouchmove", "onTouchend"];
var _hoisted_163 = {
  key: 0,
  class: "chevron-cell"
};
var _hoisted_173 = ["onClick"];
var _hoisted_183 = {
  key: 0,
  class: "detail"
};
var _hoisted_192 = ["colspan"];
var _hoisted_20 = { class: "detail-container" };
var _hoisted_21 = {
  key: 0,
  class: "is-empty"
};
var _hoisted_2210 = ["colspan"];
var _hoisted_234 = { key: 2 };
var _hoisted_242 = { class: "table-footer" };
var _hoisted_252 = ["colspan"];
var _hoisted_262 = ["innerHTML"];
function render38(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_table_mobile_sort = resolveComponent("b-table-mobile-sort");
  const _component_b_table_pagination = resolveComponent("b-table-pagination");
  const _component_b_checkbox = resolveComponent("b-checkbox");
  const _component_b_slot_component = resolveComponent("b-slot-component");
  const _component_b_icon = resolveComponent("b-icon");
  const _component_b_input = resolveComponent("b-input");
  const _component_b_loading = resolveComponent("b-loading");
  return openBlock(), createElementBlock(
    "div",
    mergeProps({ class: "b-table" }, _ctx.rootAttrs),
    [
      renderSlot(_ctx.$slots, "default"),
      $props.mobileCards && $options.hasSortablenewColumns ? (openBlock(), createBlock(_component_b_table_mobile_sort, {
        key: 0,
        "current-sort-column": $data.currentSortColumn,
        "sort-multiple": $props.sortMultiple,
        "sort-multiple-data": $options.sortMultipleDataComputed,
        "is-asc": $data.isAsc,
        columns: $options.newColumns,
        placeholder: $props.mobileSortPlaceholder,
        "icon-pack": $props.iconPack,
        "sort-icon": $props.sortIcon,
        "sort-icon-size": $props.sortIconSize,
        onSort: _cache[0] || (_cache[0] = (column, event) => $options.sort(column, null, event)),
        onRemovePriority: _cache[1] || (_cache[1] = (column) => $options.removeSortingPriority(column))
      }, null, 8, ["current-sort-column", "sort-multiple", "sort-multiple-data", "is-asc", "columns", "placeholder", "icon-pack", "sort-icon", "sort-icon-size"])) : createCommentVNode("v-if", true),
      $props.paginated && ($props.paginationPosition === "top" || $props.paginationPosition === "both") ? renderSlot(_ctx.$slots, "pagination", { key: 1 }, () => [
        createVNode(_component_b_table_pagination, mergeProps(_ctx.fallthroughAttrs, {
          "per-page": $props.perPage,
          paginated: $props.paginated,
          rounded: $props.paginationRounded,
          "icon-pack": $props.iconPack,
          total: $data.newDataTotal,
          "current-page": $data.newCurrentPage,
          "onUpdate:currentPage": _cache[2] || (_cache[2] = ($event) => $data.newCurrentPage = $event),
          "aria-next-label": $props.ariaNextLabel,
          "aria-previous-label": $props.ariaPreviousLabel,
          "aria-page-label": $props.ariaPageLabel,
          "aria-current-label": $props.ariaCurrentLabel,
          onPageChange: _cache[3] || (_cache[3] = (event) => _ctx.$emit("page-change", event)),
          "page-input": $props.pageInput,
          "pagination-order": $props.paginationOrder,
          "page-input-position": $props.pageInputPosition,
          "debounce-page-input": $props.debouncePageInput
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "top-left")
          ]),
          _: 3
          /* FORWARDED */
        }, 16, ["per-page", "paginated", "rounded", "icon-pack", "total", "current-page", "aria-next-label", "aria-previous-label", "aria-page-label", "aria-current-label", "page-input", "pagination-order", "page-input-position", "debounce-page-input"])
      ]) : createCommentVNode("v-if", true),
      createBaseVNode(
        "div",
        {
          class: normalizeClass(["table-wrapper", $options.tableWrapperClasses]),
          style: normalizeStyle($options.tableStyle)
        },
        [
          createBaseVNode("table", {
            class: normalizeClass(["table", $options.tableClasses]),
            tabindex: !$props.focusable ? void 0 : 0,
            onKeydown: [
              _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => $options.pressedArrow(-1), ["self", "prevent"]), ["up"])),
              _cache[5] || (_cache[5] = withKeys(withModifiers(($event) => $options.pressedArrow(1), ["self", "prevent"]), ["down"]))
            ]
          }, [
            $props.caption ? withDirectives((openBlock(), createElementBlock(
              "caption",
              { key: 0 },
              toDisplayString($props.caption),
              513
              /* TEXT, NEED_PATCH */
            )), [
              [vShow, $props.showCaption]
            ]) : createCommentVNode("v-if", true),
            $options.newColumns.length && $props.showHeader ? (openBlock(), createElementBlock("thead", _hoisted_233, [
              createBaseVNode("tr", null, [
                $options.showDetailRowIcon ? (openBlock(), createElementBlock("th", _hoisted_322)) : createCommentVNode("v-if", true),
                $props.checkable && $props.checkboxPosition === "left" ? (openBlock(), createElementBlock(
                  "th",
                  {
                    key: 1,
                    class: normalizeClass(["checkbox-cell", { "is-sticky": $props.stickyCheckbox }])
                  },
                  [
                    $props.headerCheckable ? renderSlot(_ctx.$slots, "check-all", {
                      key: 0,
                      isAllChecked: $options.isAllChecked,
                      isAllUncheckable: $options.isAllUncheckable,
                      checkAll: $options.checkAll
                    }, () => [
                      createVNode(_component_b_checkbox, {
                        autocomplete: "off",
                        "model-value": $options.isAllChecked,
                        type: $props.checkboxType,
                        disabled: $options.isAllUncheckable,
                        onChange: $options.checkAll
                      }, null, 8, ["model-value", "type", "disabled", "onChange"])
                    ]) : createCommentVNode("v-if", true)
                  ],
                  2
                  /* CLASS */
                )) : createCommentVNode("v-if", true),
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($options.visibleColumns, (column, index) => {
                    return openBlock(), createElementBlock("th", mergeProps({
                      key: column.newKey + ":" + index + "header"
                    }, column.thAttrs(column), {
                      class: [column.thClasses, {
                        "is-current-sort": !$props.sortMultiple && $data.currentSortColumn === column
                      }],
                      style: column.thStyle,
                      onClick: withModifiers(($event) => $options.sort(column, null, $event), ["stop"]),
                      draggable: $options.canDragColumn,
                      onDragstart: ($event) => $options.handleColumnDragStart($event, column, index),
                      onDragend: ($event) => $options.handleColumnDragEnd($event, column, index),
                      onDrop: ($event) => $options.handleColumnDrop($event, column, index),
                      onDragover: ($event) => $options.handleColumnDragOver($event, column, index),
                      onDragleave: ($event) => $options.handleColumnDragLeave($event, column, index),
                      onTouchstart: ($event) => $options.handleColumnTouchStart($event, column, index),
                      onTouchmove: ($event) => $options.handleColumnTouchMove($event, column, index),
                      onTouchend: ($event) => $options.handleColumnTouchEnd($event, column, index)
                    }), [
                      createBaseVNode(
                        "div",
                        {
                          class: normalizeClass(["th-wrap is-relative", {
                            "is-numeric": column.numeric,
                            "is-centered": column.centered
                          }]),
                          style: normalizeStyle(column.thWrapStyle)
                        },
                        [
                          column.$slots.header ? (openBlock(), createBlock(_component_b_slot_component, {
                            key: 0,
                            component: column,
                            scoped: "",
                            name: "header",
                            tag: "span",
                            props: { column, index }
                          }, null, 8, ["component", "props"])) : (openBlock(), createElementBlock(
                            Fragment,
                            { key: 1 },
                            [
                              createTextVNode(
                                toDisplayString(column.label) + " ",
                                1
                                /* TEXT */
                              ),
                              $props.sortMultiple && $options.sortMultipleDataComputed && $options.sortMultipleDataComputed.length > 0 && $options.sortMultipleDataComputed.filter((i) => i.field === column.field).length > 0 ? (openBlock(), createElementBlock("span", _hoisted_511, [
                                createVNode(_component_b_icon, {
                                  icon: $props.sortIcon,
                                  pack: $props.iconPack,
                                  both: "",
                                  size: $props.sortIconSize,
                                  class: normalizeClass({
                                    "is-desc": $options.sortMultipleDataComputed.filter((i) => i.field === column.field)[0].order === "desc"
                                  })
                                }, null, 8, ["icon", "pack", "size", "class"]),
                                createTextVNode(
                                  " " + toDisplayString($options.findIndexOfSortData(column)) + " ",
                                  1
                                  /* TEXT */
                                ),
                                createBaseVNode("button", {
                                  class: "delete is-small multi-sort-cancel-icon",
                                  type: "button",
                                  onClick: withModifiers(($event) => $options.removeSortingPriority(column), ["stop"])
                                }, null, 8, _hoisted_69)
                              ])) : (openBlock(), createBlock(_component_b_icon, {
                                key: 1,
                                icon: $props.sortIcon,
                                pack: $props.iconPack,
                                both: "",
                                size: $props.sortIconSize,
                                class: normalizeClass(["sort-icon", {
                                  "is-desc": !$data.isAsc,
                                  "is-invisible": $data.currentSortColumn !== column
                                }])
                              }, null, 8, ["icon", "pack", "size", "class"]))
                            ],
                            64
                            /* STABLE_FRAGMENT */
                          ))
                        ],
                        6
                        /* CLASS, STYLE */
                      )
                    ], 16, _hoisted_416);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                $props.checkable && $props.checkboxPosition === "right" ? (openBlock(), createElementBlock(
                  "th",
                  {
                    key: 2,
                    class: normalizeClass(["checkbox-cell", { "is-sticky": $props.stickyCheckbox }])
                  },
                  [
                    $props.headerCheckable ? renderSlot(_ctx.$slots, "check-all", {
                      key: 0,
                      isAllChecked: $options.isAllChecked,
                      isAllUncheckable: $options.isAllUncheckable,
                      checkAll: $options.checkAll
                    }, () => [
                      createVNode(_component_b_checkbox, {
                        autocomplete: "off",
                        "model-value": $options.isAllChecked,
                        type: $props.checkboxType,
                        disabled: $options.isAllUncheckable,
                        onChange: $options.checkAll
                      }, null, 8, ["model-value", "type", "disabled", "onChange"])
                    ]) : createCommentVNode("v-if", true)
                  ],
                  2
                  /* CLASS */
                )) : createCommentVNode("v-if", true)
              ]),
              $options.hasCustomSubheadings ? (openBlock(), createElementBlock("tr", _hoisted_79, [
                $options.showDetailRowIcon ? (openBlock(), createElementBlock("th", _hoisted_88)) : createCommentVNode("v-if", true),
                $props.checkable && $props.checkboxPosition === "left" ? (openBlock(), createElementBlock("th", _hoisted_96)) : createCommentVNode("v-if", true),
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($options.visibleColumns, (column, index) => {
                    return openBlock(), createElementBlock(
                      "th",
                      {
                        key: column.newKey + ":" + index + "subheading",
                        style: normalizeStyle(column.style)
                      },
                      [
                        createBaseVNode(
                          "div",
                          {
                            class: normalizeClass(["th-wrap", {
                              "is-numeric": column.numeric,
                              "is-centered": column.centered
                            }]),
                            style: normalizeStyle(column.thWrapStyle)
                          },
                          [
                            column.$slots.subheading ? (openBlock(), createBlock(_component_b_slot_component, {
                              key: 0,
                              component: column,
                              scoped: "",
                              name: "subheading",
                              tag: "span",
                              props: { column, index }
                            }, null, 8, ["component", "props"])) : (openBlock(), createElementBlock(
                              Fragment,
                              { key: 1 },
                              [
                                createTextVNode(
                                  toDisplayString(column.subheading),
                                  1
                                  /* TEXT */
                                )
                              ],
                              64
                              /* STABLE_FRAGMENT */
                            ))
                          ],
                          6
                          /* CLASS, STYLE */
                        )
                      ],
                      4
                      /* STYLE */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                $props.checkable && $props.checkboxPosition === "right" ? (openBlock(), createElementBlock("th", _hoisted_104)) : createCommentVNode("v-if", true)
              ])) : createCommentVNode("v-if", true),
              $options.hasSearchablenewColumns ? (openBlock(), createElementBlock("tr", _hoisted_1111, [
                $options.showDetailRowIcon ? (openBlock(), createElementBlock("th", _hoisted_1210)) : createCommentVNode("v-if", true),
                $props.checkable && $props.checkboxPosition === "left" ? (openBlock(), createElementBlock("th", _hoisted_1310)) : createCommentVNode("v-if", true),
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($options.visibleColumns, (column, index) => {
                    return openBlock(), createElementBlock(
                      "th",
                      mergeProps({
                        key: column.newKey + ":" + index + "searchable"
                      }, column.thAttrs(column), {
                        style: column.thStyle,
                        class: { "is-sticky": column.sticky }
                      }),
                      [
                        createBaseVNode(
                          "div",
                          {
                            class: "th-wrap",
                            style: normalizeStyle(column.thWrapStyle)
                          },
                          [
                            column.searchable ? (openBlock(), createElementBlock(
                              Fragment,
                              { key: 0 },
                              [
                                column.$slots.searchable ? (openBlock(), createBlock(_component_b_slot_component, {
                                  key: 0,
                                  component: column,
                                  scoped: true,
                                  name: "searchable",
                                  tag: "span",
                                  props: { column, filters: $data.filters }
                                }, null, 8, ["component", "props"])) : (openBlock(), createBlock(_component_b_input, mergeProps({
                                  key: 1,
                                  [toHandlerKey($props.filtersEvent)]: $options.onFiltersEvent
                                }, {
                                  modelValue: $data.filters[column.field],
                                  "onUpdate:modelValue": ($event) => $data.filters[column.field] = $event,
                                  type: column.numeric ? "number" : "text"
                                }), null, 16, ["modelValue", "onUpdate:modelValue", "type"]))
                              ],
                              64
                              /* STABLE_FRAGMENT */
                            )) : createCommentVNode("v-if", true)
                          ],
                          4
                          /* STYLE */
                        )
                      ],
                      16
                      /* FULL_PROPS */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                $props.checkable && $props.checkboxPosition === "right" ? (openBlock(), createElementBlock("th", _hoisted_143)) : createCommentVNode("v-if", true)
              ])) : createCommentVNode("v-if", true)
            ])) : createCommentVNode("v-if", true),
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($options.visibleData, (row, index) => {
                  return openBlock(), createElementBlock(
                    Fragment,
                    {
                      key: $props.customRowKey ? row[$props.customRowKey] : index
                    },
                    [
                      createBaseVNode("tr", {
                        class: normalizeClass([$props.rowClass(row, index), {
                          "is-selected": $options.isRowSelected(row, $props.selected),
                          "is-checked": $options.isRowChecked(row)
                        }]),
                        onClick: ($event) => $options.selectRow(row),
                        onDblclick: ($event) => _ctx.$emit("dblclick", row),
                        onMouseenter: ($event) => $options.emitEventForRow("mouseenter", $event, row),
                        onMouseleave: ($event) => $options.emitEventForRow("mouseleave", $event, row),
                        onContextmenu: ($event) => _ctx.$emit("contextmenu", row, $event),
                        draggable: $options.canDragRow,
                        onDragstart: ($event) => $options.handleDragStart($event, row, index),
                        onDragend: ($event) => $options.handleDragEnd($event, row, index),
                        onDrop: ($event) => $options.handleDrop($event, row, index),
                        onDragover: ($event) => $options.handleDragOver($event, row, index),
                        onDragleave: ($event) => $options.handleDragLeave($event, row, index),
                        onTouchstart: ($event) => $options.handleTouchStart($event, row, index),
                        onTouchmove: ($event) => $options.handleTouchMove($event, row, index),
                        onTouchend: ($event) => $options.handleTouchEnd($event, row, index)
                      }, [
                        $options.showDetailRowIcon ? (openBlock(), createElementBlock("td", _hoisted_163, [
                          $props.hasDetailedVisible(row) ? (openBlock(), createElementBlock("a", {
                            key: 0,
                            role: "button",
                            onClick: withModifiers(($event) => $options.toggleDetails(row), ["stop"])
                          }, [
                            createVNode(_component_b_icon, {
                              icon: $props.detailIcon,
                              pack: $props.iconPack,
                              both: "",
                              class: normalizeClass({ "is-expanded": $options.isVisibleDetailRow(row) })
                            }, null, 8, ["icon", "pack", "class"])
                          ], 8, _hoisted_173)) : createCommentVNode("v-if", true)
                        ])) : createCommentVNode("v-if", true),
                        $props.checkable && $props.checkboxPosition === "left" ? (openBlock(), createElementBlock(
                          "td",
                          {
                            key: 1,
                            class: normalizeClass(["checkbox-cell", { "is-sticky": $props.stickyCheckbox }])
                          },
                          [
                            createVNode(_component_b_checkbox, {
                              autocomplete: "off",
                              "model-value": $options.isRowChecked(row),
                              type: $props.checkboxType,
                              disabled: !$props.isRowCheckable(row),
                              onClick: withModifiers(($event) => $options.checkRow(row, index, $event), ["prevent", "stop"])
                            }, null, 8, ["model-value", "type", "disabled", "onClick"])
                          ],
                          2
                          /* CLASS */
                        )) : createCommentVNode("v-if", true),
                        (openBlock(true), createElementBlock(
                          Fragment,
                          null,
                          renderList($options.visibleColumns, (column, colindex) => {
                            return openBlock(), createElementBlock(
                              Fragment,
                              {
                                key: column.newKey + ":" + index + ":" + colindex
                              },
                              [
                                column.$slots.default ? (openBlock(), createBlock(_component_b_slot_component, mergeProps({
                                  key: 0,
                                  component: column
                                }, column.tdAttrs(row, column), {
                                  scoped: "",
                                  name: "default",
                                  tag: "td",
                                  class: column.getRootClasses(row),
                                  style: column.getRootStyle(row),
                                  "data-label": column.label,
                                  props: {
                                    row,
                                    column,
                                    index,
                                    colindex,
                                    toggleDetails: $options.toggleDetails,
                                    isActiveDetailRow: $options.isActiveDetailRow
                                  },
                                  onClick: ($event) => _ctx.$emit("cellclick", row, column, index, colindex)
                                }), null, 16, ["component", "class", "style", "data-label", "props", "onClick"])) : createCommentVNode("v-if", true)
                              ],
                              64
                              /* STABLE_FRAGMENT */
                            );
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        )),
                        $props.checkable && $props.checkboxPosition === "right" ? (openBlock(), createElementBlock(
                          "td",
                          {
                            key: 2,
                            class: normalizeClass(["checkbox-cell", { "is-sticky": $props.stickyCheckbox }])
                          },
                          [
                            createVNode(_component_b_checkbox, {
                              autocomplete: "off",
                              "model-value": $options.isRowChecked(row),
                              type: $props.checkboxType,
                              disabled: !$props.isRowCheckable(row),
                              onClick: withModifiers(($event) => $options.checkRow(row, index, $event), ["prevent", "stop"])
                            }, null, 8, ["model-value", "type", "disabled", "onClick"])
                          ],
                          2
                          /* CLASS */
                        )) : createCommentVNode("v-if", true)
                      ], 42, _hoisted_153),
                      createVNode(Transition, { name: $props.detailTransition }, {
                        default: withCtx(() => [
                          $options.isActiveDetailRow(row) ? (openBlock(), createElementBlock("tr", _hoisted_183, [
                            createBaseVNode("td", { colspan: $options.columnCount }, [
                              createBaseVNode("div", _hoisted_20, [
                                renderSlot(_ctx.$slots, "detail", {
                                  row,
                                  index
                                })
                              ])
                            ], 8, _hoisted_192)
                          ])) : createCommentVNode("v-if", true)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["name"]),
                      $options.isActiveCustomDetailRow(row) ? renderSlot(_ctx.$slots, "detail", {
                        key: 0,
                        row,
                        index
                      }) : createCommentVNode("v-if", true)
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              !$options.visibleData.length ? (openBlock(), createElementBlock("tr", _hoisted_21, [
                createBaseVNode("td", { colspan: $options.columnCount }, [
                  renderSlot(_ctx.$slots, "empty")
                ], 8, _hoisted_2210)
              ])) : createCommentVNode("v-if", true)
            ]),
            _ctx.$slots.footer !== void 0 ? (openBlock(), createElementBlock("tfoot", _hoisted_234, [
              createBaseVNode("tr", _hoisted_242, [
                $options.hasCustomFooterSlot() ? renderSlot(_ctx.$slots, "footer", { key: 0 }) : (openBlock(), createElementBlock("th", {
                  key: 1,
                  colspan: $options.columnCount
                }, [
                  renderSlot(_ctx.$slots, "footer")
                ], 8, _hoisted_252))
              ])
            ])) : createCommentVNode("v-if", true)
          ], 42, _hoisted_139),
          $props.loading ? renderSlot(_ctx.$slots, "loading", { key: 0 }, () => [
            createVNode(_component_b_loading, {
              "is-full-page": false,
              "model-value": $props.loading
            }, null, 8, ["model-value"])
          ]) : createCommentVNode("v-if", true)
        ],
        6
        /* CLASS, STYLE */
      ),
      $props.checkable && $options.hasBottomLeftSlot() || $props.paginated && ($props.paginationPosition === "bottom" || $props.paginationPosition === "both") ? renderSlot(_ctx.$slots, "pagination", { key: 2 }, () => [
        createVNode(_component_b_table_pagination, mergeProps(_ctx.fallthroughAttrs, {
          "per-page": $props.perPage,
          paginated: $props.paginated,
          rounded: $props.paginationRounded,
          "icon-pack": $props.iconPack,
          total: $data.newDataTotal,
          "current-page": $data.newCurrentPage,
          "onUpdate:currentPage": _cache[6] || (_cache[6] = ($event) => $data.newCurrentPage = $event),
          "aria-next-label": $props.ariaNextLabel,
          "aria-previous-label": $props.ariaPreviousLabel,
          "aria-page-label": $props.ariaPageLabel,
          "aria-current-label": $props.ariaCurrentLabel,
          onPageChange: _cache[7] || (_cache[7] = (event) => _ctx.$emit("page-change", event)),
          "page-input": $props.pageInput,
          "pagination-order": $props.paginationOrder,
          "page-input-position": $props.pageInputPosition,
          "debounce-page-input": $props.debouncePageInput
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "bottom-left")
          ]),
          _: 3
          /* FORWARDED */
        }, 16, ["per-page", "paginated", "rounded", "icon-pack", "total", "current-page", "aria-next-label", "aria-previous-label", "aria-page-label", "aria-current-label", "page-input", "pagination-order", "page-input-position", "debounce-page-input"])
      ]) : createCommentVNode("v-if", true),
      createCommentVNode(" eslint-disable vue/no-v-html "),
      withDirectives(createBaseVNode("div", {
        ref: "draggedCell",
        class: normalizeClass(["touch-dragged-cell", $options.touchDraggedCellClasses]),
        innerHTML: $data.draggedCellContent
      }, null, 10, _hoisted_262), [
        [vShow, $data.mayBeTouchDragging && ($data.isDraggingRow || $data.isDraggingColumn)]
      ]),
      createCommentVNode(" eslint-enable vue/no-v-html ")
    ],
    16
    /* FULL_PROPS */
  );
}
script39.render = render38;
script39.__file = "src/components/table/Table.vue";
var Plugin35 = {
  install: function install35(Vue) {
    registerComponent(Vue, script39);
    registerComponent(Vue, script$27);
  }
};
use(Plugin35);

// node_modules/buefy/dist/esm/tabs.js
var script$116 = {
  name: "BTabs",
  mixins: [TabbedMixin("tab")],
  props: {
    expanded: {
      type: Boolean,
      default: () => {
        return config.defaultTabsExpanded;
      }
    },
    type: {
      type: [String, Object],
      default: () => {
        return config.defaultTabsType;
      }
    },
    animated: {
      type: Boolean,
      default: () => {
        return config.defaultTabsAnimated;
      }
    },
    multiline: Boolean
  },
  data() {
    return {
      currentFocus: null
    };
  },
  computed: {
    mainClasses() {
      return {
        "is-fullwidth": this.expanded,
        "is-vertical": this.vertical,
        "is-multiline": this.multiline,
        [this.position]: this.position && this.vertical
      };
    },
    navClasses() {
      return [
        this.type,
        this.size,
        {
          [this.position]: this.position && !this.vertical,
          "is-fullwidth": this.expanded,
          "is-toggle": this.type === "is-toggle-rounded"
        }
      ];
    }
  },
  methods: {
    giveFocusToTab(tab) {
      if (Array.isArray(tab)) {
        tab = tab[0];
        if (tab == null) {
          return;
        }
      }
      if (tab.$el && tab.$el.focus) {
        tab.$el.focus();
      } else if (tab.focus) {
        tab.focus();
      }
    },
    manageTablistKeydown(event) {
      const { key } = event;
      switch (key) {
        case (this.vertical ? "ArrowUp" : "ArrowLeft"):
        case (this.vertical ? "Up" : "Left"): {
          let prevIdx = this.getPrevItemIdx(this.currentFocus, true);
          if (prevIdx === null) {
            prevIdx = this.getPrevItemIdx(Infinity, true);
          }
          const prevItem = this.items.find((i) => i.index === prevIdx);
          if (prevItem && this.$refs[`tabLink${prevIdx}`] && !prevItem.disabled) {
            this.giveFocusToTab(this.$refs[`tabLink${prevIdx}`]);
          }
          event.preventDefault();
          break;
        }
        case (this.vertical ? "ArrowDown" : "ArrowRight"):
        case (this.vertical ? "Down" : "Right"): {
          let nextIdx = this.getNextItemIdx(this.currentFocus, true);
          if (nextIdx === null) {
            nextIdx = this.getNextItemIdx(-1, true);
          }
          const nextItem = this.items.find((i) => i.index === nextIdx);
          if (nextItem && this.$refs[`tabLink${nextIdx}`] && !nextItem.disabled) {
            this.giveFocusToTab(this.$refs[`tabLink${nextIdx}`]);
          }
          event.preventDefault();
          break;
        }
      }
    },
    manageTabKeydown(event, childItem) {
      const { key } = event;
      switch (key) {
        case " ":
        case "Space":
        case "Spacebar":
        case "Enter": {
          this.childClick(childItem);
          event.preventDefault();
          break;
        }
      }
    }
  }
};
var _hoisted_140 = ["aria-orientation"];
var _hoisted_235 = ["aria-controls", "aria-selected"];
var _hoisted_323 = ["id", "tabindex", "onFocus", "onClick", "onKeydown"];
function render39(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_slot_component = resolveComponent("b-slot-component");
  const _component_b_icon = resolveComponent("b-icon");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["b-tabs", $options.mainClasses])
    },
    [
      createBaseVNode(
        "nav",
        {
          class: normalizeClass(["tabs", $options.navClasses]),
          onKeydown: _cache[0] || (_cache[0] = (...args) => $options.manageTablistKeydown && $options.manageTablistKeydown(...args))
        },
        [
          renderSlot(_ctx.$slots, "start"),
          createBaseVNode("ul", {
            "aria-orientation": _ctx.vertical ? "vertical" : "horizontal",
            role: "tablist"
          }, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_ctx.items, (childItem) => {
                return withDirectives((openBlock(), createElementBlock("li", {
                  key: childItem.uniqueValue,
                  class: normalizeClass([childItem.headerClass, {
                    "is-active": childItem.isActive,
                    "is-disabled": childItem.disabled
                  }]),
                  role: "tab",
                  "aria-controls": `${childItem.uniqueValue}-content`,
                  "aria-selected": `${childItem.isActive}`
                }, [
                  childItem.$slots.header ? (openBlock(), createBlock(_component_b_slot_component, {
                    key: 0,
                    ref_for: true,
                    ref: `tabLink${childItem.index}`,
                    component: childItem,
                    name: "header",
                    tag: "a",
                    id: `${childItem.uniqueValue}-label`,
                    tabindex: childItem.isActive ? 0 : -1,
                    onFocus: ($event) => $data.currentFocus = childItem.index,
                    onClick: ($event) => _ctx.childClick(childItem),
                    onKeydown: ($event) => $options.manageTabKeydown($event, childItem)
                  }, null, 8, ["component", "id", "tabindex", "onFocus", "onClick", "onKeydown"])) : (openBlock(), createElementBlock("a", {
                    key: 1,
                    ref_for: true,
                    ref: `tabLink${childItem.index}`,
                    id: `${childItem.uniqueValue}-label`,
                    tabindex: childItem.isActive ? 0 : -1,
                    onFocus: ($event) => $data.currentFocus = childItem.index,
                    onClick: ($event) => _ctx.childClick(childItem),
                    onKeydown: ($event) => $options.manageTabKeydown($event, childItem)
                  }, [
                    childItem.icon ? (openBlock(), createBlock(_component_b_icon, {
                      key: 0,
                      icon: childItem.icon,
                      pack: childItem.iconPack,
                      size: _ctx.size
                    }, null, 8, ["icon", "pack", "size"])) : createCommentVNode("v-if", true),
                    createBaseVNode(
                      "span",
                      null,
                      toDisplayString(childItem.label),
                      1
                      /* TEXT */
                    )
                  ], 40, _hoisted_323))
                ], 10, _hoisted_235)), [
                  [vShow, childItem.visible]
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ], 8, _hoisted_140),
          renderSlot(_ctx.$slots, "end")
        ],
        34
        /* CLASS, HYDRATE_EVENTS */
      ),
      createBaseVNode(
        "section",
        {
          class: normalizeClass(["tab-content", { "is-transitioning": _ctx.isTransitioning }])
        },
        [
          renderSlot(_ctx.$slots, "default")
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
script$116.render = render39;
script$116.__file = "src/components/tabs/Tabs.vue";
var script40 = {
  name: "BTabItem",
  mixins: [TabbedChildMixin("tab")],
  props: {
    disabled: Boolean
  },
  data() {
    return {
      elementClass: "tab-item",
      elementRole: "tabpanel"
    };
  }
};
script40.__file = "src/components/tabs/TabItem.vue";
var Plugin36 = {
  install: function install36(Vue) {
    registerComponent(Vue, script$116);
    registerComponent(Vue, script40);
  }
};
use(Plugin36);

// node_modules/buefy/dist/esm/Tag-4gsvDJVD.js
var script41 = {
  name: "BTag",
  props: {
    attached: Boolean,
    closable: Boolean,
    type: [String, Object],
    size: String,
    rounded: Boolean,
    disabled: Boolean,
    ellipsis: Boolean,
    tabstop: {
      type: Boolean,
      default: true
    },
    ariaCloseLabel: String,
    icon: String,
    iconType: String,
    iconPack: String,
    closeType: String,
    closeIcon: String,
    closeIconPack: String,
    closeIconType: String
  },
  emits: ["click", "close"],
  computed: {
    // setting a boolean attribute `false` does not remove it on Vue 3.
    // `null` or `undefined` has to be given to remove it.
    disabledOrUndefined() {
      return this.disabled || void 0;
    }
  },
  methods: {
    /**
    * Emit close event when delete button is clicked
    * or delete key is pressed.
    */
    close(event) {
      if (this.disabled) return;
      this.$emit("close", event);
    },
    /**
    * Emit click event when tag is clicked.
    */
    click(event) {
      if (this.disabled) return;
      this.$emit("click", event);
    }
  }
};
var _hoisted_141 = {
  key: 0,
  class: "tags has-addons inline-tags"
};
var _hoisted_236 = ["aria-label", "tabindex", "disabled"];
var _hoisted_324 = ["aria-label", "disabled", "tabindex"];
function render40(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");
  return $props.attached && $props.closable ? (openBlock(), createElementBlock("div", _hoisted_141, [
    createBaseVNode(
      "span",
      {
        class: normalizeClass(["tag", [$props.type, $props.size, { "is-rounded": $props.rounded }]])
      },
      [
        $props.icon ? (openBlock(), createBlock(_component_b_icon, {
          key: 0,
          icon: $props.icon,
          size: $props.size,
          type: $props.iconType,
          pack: $props.iconPack
        }, null, 8, ["icon", "size", "type", "pack"])) : createCommentVNode("v-if", true),
        createBaseVNode(
          "span",
          {
            class: normalizeClass({ "has-ellipsis": $props.ellipsis }),
            onClick: _cache[0] || (_cache[0] = (...args) => $options.click && $options.click(...args))
          },
          [
            renderSlot(_ctx.$slots, "default")
          ],
          2
          /* CLASS */
        )
      ],
      2
      /* CLASS */
    ),
    createBaseVNode("a", {
      class: normalizeClass(["tag", [
        $props.size,
        $props.closeType,
        { "is-rounded": $props.rounded },
        $props.closeIcon ? "has-delete-icon" : "is-delete"
      ]]),
      role: "button",
      "aria-label": $props.ariaCloseLabel,
      tabindex: $props.tabstop ? 0 : false,
      disabled: $options.disabledOrUndefined,
      onClick: _cache[1] || (_cache[1] = (...args) => $options.close && $options.close(...args)),
      onKeyup: _cache[2] || (_cache[2] = withKeys(withModifiers((...args) => $options.close && $options.close(...args), ["prevent"]), ["delete"]))
    }, [
      $props.closeIcon ? (openBlock(), createBlock(_component_b_icon, {
        key: 0,
        "custom-class": "",
        icon: $props.closeIcon,
        size: $props.size,
        type: $props.closeIconType,
        pack: $props.closeIconPack
      }, null, 8, ["icon", "size", "type", "pack"])) : createCommentVNode("v-if", true)
    ], 42, _hoisted_236)
  ])) : (openBlock(), createElementBlock(
    "span",
    {
      key: 1,
      class: normalizeClass(["tag", [$props.type, $props.size, { "is-rounded": $props.rounded }]])
    },
    [
      $props.icon ? (openBlock(), createBlock(_component_b_icon, {
        key: 0,
        icon: $props.icon,
        size: $props.size,
        type: $props.iconType,
        pack: $props.iconPack
      }, null, 8, ["icon", "size", "type", "pack"])) : createCommentVNode("v-if", true),
      createBaseVNode(
        "span",
        {
          class: normalizeClass({ "has-ellipsis": $props.ellipsis }),
          onClick: _cache[3] || (_cache[3] = (...args) => $options.click && $options.click(...args))
        },
        [
          renderSlot(_ctx.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      $props.closable ? (openBlock(), createElementBlock("a", {
        key: 1,
        role: "button",
        "aria-label": $props.ariaCloseLabel,
        class: normalizeClass(["delete is-small", $props.closeType]),
        disabled: $options.disabledOrUndefined,
        tabindex: $props.tabstop ? 0 : false,
        onClick: _cache[4] || (_cache[4] = (...args) => $options.close && $options.close(...args)),
        onKeyup: _cache[5] || (_cache[5] = withKeys(withModifiers((...args) => $options.close && $options.close(...args), ["prevent"]), ["delete"]))
      }, null, 42, _hoisted_324)) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  ));
}
script41.render = render40;
script41.__file = "src/components/tag/Tag.vue";

// node_modules/buefy/dist/esm/tag.js
var script42 = {
  name: "BTaglist",
  props: {
    attached: Boolean
  }
};
function render41(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["tags", { "has-addons": $props.attached }])
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
script42.render = render41;
script42.__file = "src/components/tag/Taglist.vue";
var Plugin37 = {
  install: function install37(Vue) {
    registerComponent(Vue, script41);
    registerComponent(Vue, script42);
  }
};
use(Plugin37);

// node_modules/buefy/dist/esm/taginput.js
var script43 = {
  name: "BTaginput",
  components: {
    [script3.name]: script3,
    [script41.name]: script41
  },
  mixins: [CompatFallthroughMixin, FormElementMixin],
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    type: String,
    closeType: String,
    rounded: {
      type: Boolean,
      default: false
    },
    attached: {
      type: Boolean,
      default: false
    },
    maxtags: {
      type: [Number, String],
      required: false
    },
    hasCounter: {
      type: Boolean,
      default: () => config.defaultTaginputHasCounter
    },
    field: {
      type: String,
      default: "value"
    },
    autocomplete: Boolean,
    groupField: String,
    groupOptions: String,
    nativeAutocomplete: String,
    openOnFocus: Boolean,
    keepOpen: {
      type: Boolean,
      default: true
    },
    keepFirst: Boolean,
    disabled: Boolean,
    ellipsis: Boolean,
    closable: {
      type: Boolean,
      default: true
    },
    ariaCloseLabel: String,
    confirmKeys: {
      type: Array,
      default: () => [",", "Tab", "Enter"]
    },
    removeOnKeys: {
      type: Array,
      default: () => ["Backspace"]
    },
    allowNew: Boolean,
    onPasteSeparators: {
      type: Array,
      default: () => [","]
    },
    beforeAdding: {
      type: Function,
      default: () => true
    },
    allowDuplicates: {
      type: Boolean,
      default: false
    },
    checkInfiniteScroll: {
      type: Boolean,
      default: false
    },
    createTag: {
      type: Function,
      default: (tag) => tag
    },
    appendToBody: Boolean
  },
  emits: [
    "add",
    "infinite-scroll",
    "remove",
    "typing",
    "update:modelValue"
  ],
  data() {
    return {
      tags: Array.isArray(this.modelValue) ? this.modelValue.slice(0) : this.modelValue || [],
      newTag: "",
      isComposing: false,
      _elementRef: "autocomplete",
      _isTaginput: true,
      requestID: null
    };
  },
  computed: {
    rootClasses() {
      return {
        "is-expanded": this.expanded
      };
    },
    containerClasses() {
      return {
        "is-focused": this.isFocused,
        "is-focusable": this.hasInput
      };
    },
    valueLength() {
      return this.newTag.trim().length;
    },
    hasDefaultSlot() {
      return !!this.$slots.default;
    },
    hasEmptySlot() {
      return !!this.$slots.empty;
    },
    hasHeaderSlot() {
      return !!this.$slots.header;
    },
    hasFooterSlot() {
      return !!this.$slots.footer;
    },
    /**
     * Show the input field if a maxtags hasn't been set or reached.
     */
    hasInput() {
      return this.maxtags == null || this.maxtags === 1 || this.tagsLength < this.maxtags;
    },
    tagsLength() {
      return this.tags.length;
    },
    /**
     * If Taginput has onPasteSeparators prop,
     * returning new RegExp used to split pasted string.
     */
    separatorsAsRegExp() {
      const sep = this.onPasteSeparators;
      return sep.length ? new RegExp(sep.map((s) => {
        return s ? s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : null;
      }).join("|"), "g") : null;
    },
    disabledOrUndefined() {
      return this.disabled || void 0;
    }
  },
  watch: {
    /**
     * When v-model is changed set internal value.
     */
    modelValue(value) {
      this.tags = Array.isArray(value) ? value.slice(0) : value || [];
    },
    hasInput() {
      if (!this.hasInput) this.onBlur();
    }
  },
  methods: {
    addTag(tag) {
      const tagToAdd = tag || this.newTag.trim();
      if (tagToAdd) {
        if (!this.autocomplete) {
          const reg = this.separatorsAsRegExp;
          if (reg && tagToAdd.match(reg)) {
            tagToAdd.split(reg).map((t) => t.trim()).filter((t) => t.length !== 0).map(this.addTag);
            return;
          }
        }
        const add = !this.allowDuplicates ? this.tags.indexOf(tagToAdd) === -1 : true;
        if (add && this.beforeAdding(tagToAdd)) {
          if (this.maxtags === 1) {
            this.tags = [];
          }
          this.tags.push(this.createTag(tagToAdd));
          this.$emit("update:modelValue", this.tags);
          this.$emit("add", tagToAdd);
        }
        this.requestID = requestAnimationFrame(() => {
          this.newTag = "";
          this.$emit("typing", "");
        });
      }
    },
    getNormalizedTagText(tag) {
      if (typeof tag === "object") {
        tag = getValueByPath(tag, this.field);
      }
      return `${tag}`;
    },
    customOnBlur(event) {
      if (!this.autocomplete) this.addTag();
      this.onBlur(event);
    },
    onSelect(option) {
      if (!option) return;
      this.addTag(option);
      this.$nextTick(() => {
        this.newTag = "";
      });
    },
    removeTag(index, event) {
      const tag = this.tags.splice(index, 1)[0];
      this.$emit("update:modelValue", this.tags);
      this.$emit("remove", tag);
      if (event) event.stopPropagation();
      if (this.openOnFocus && this.$refs.autocomplete) {
        this.$refs.autocomplete.focus();
      }
      return tag;
    },
    removeLastTag() {
      if (this.tagsLength > 0) {
        this.removeTag(this.tagsLength - 1);
      }
    },
    keydown(event) {
      const { key } = event;
      if (this.removeOnKeys.indexOf(key) !== -1 && !this.newTag.length) {
        this.removeLastTag();
      }
      if (this.autocomplete && !this.allowNew) return;
      if (this.confirmKeys.indexOf(key) >= 0) {
        if (key !== "Tab") event.preventDefault();
        if (key === "Enter" && this.isComposing) return;
        this.addTag();
      }
    },
    onTyping(event) {
      this.$emit("typing", event.trim());
    },
    emitInfiniteScroll() {
      this.$emit("infinite-scroll");
    }
  },
  beforeUnmount() {
    cancelAnimationFrame(this.requestID);
  }
};
var _hoisted_144 = ["disabled"];
var _hoisted_237 = {
  key: 0,
  class: "help counter"
};
function render42(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_tag = resolveComponent("b-tag");
  const _component_b_autocomplete = resolveComponent("b-autocomplete");
  return openBlock(), createElementBlock(
    "div",
    mergeProps({
      class: ["taginput control", $options.rootClasses]
    }, _ctx.rootAttrs),
    [
      createBaseVNode("div", {
        class: normalizeClass(["taginput-container", [_ctx.statusType, _ctx.size, $options.containerClasses]]),
        disabled: $options.disabledOrUndefined,
        onClick: _cache[3] || (_cache[3] = ($event) => $options.hasInput && _ctx.focus($event))
      }, [
        renderSlot(_ctx.$slots, "selected", { tags: $data.tags }, () => [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($data.tags, (tag, index) => {
              return openBlock(), createBlock(_component_b_tag, {
                key: $options.getNormalizedTagText(tag) + index,
                type: $props.type,
                "close-type": $props.closeType,
                size: _ctx.size,
                rounded: $props.rounded,
                attached: $props.attached,
                tabstop: false,
                disabled: $options.disabledOrUndefined,
                ellipsis: $props.ellipsis,
                closable: $props.closable,
                "aria-close-label": $props.ariaCloseLabel,
                title: $props.ellipsis && $options.getNormalizedTagText(tag),
                onClose: ($event) => $options.removeTag(index, $event)
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "tag", { tag }, () => [
                    createTextVNode(
                      toDisplayString($options.getNormalizedTagText(tag)),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["type", "close-type", "size", "rounded", "attached", "disabled", "ellipsis", "closable", "aria-close-label", "title", "onClose"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        $options.hasInput ? (openBlock(), createBlock(_component_b_autocomplete, mergeProps({
          key: 0,
          ref: "autocomplete",
          modelValue: $data.newTag,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.newTag = $event)
        }, _ctx.fallthroughAttrs, {
          data: $props.data,
          field: $props.field,
          icon: _ctx.icon,
          "icon-pack": _ctx.iconPack,
          maxlength: _ctx.maxlength,
          "has-counter": false,
          size: _ctx.size,
          disabled: $options.disabledOrUndefined,
          loading: _ctx.loading,
          autocomplete: $props.nativeAutocomplete,
          "open-on-focus": $props.openOnFocus,
          "keep-open": $props.keepOpen,
          "keep-first": $props.keepFirst,
          "group-field": $props.groupField,
          "group-options": $props.groupOptions,
          "use-html5-validation": _ctx.useHtml5Validation,
          "check-infinite-scroll": $props.checkInfiniteScroll,
          "append-to-body": $props.appendToBody,
          "confirm-keys": $props.confirmKeys,
          onTyping: $options.onTyping,
          onFocus: _ctx.onFocus,
          onBlur: $options.customOnBlur,
          onKeydown: $options.keydown,
          onCompositionstart: _cache[1] || (_cache[1] = ($event) => $data.isComposing = true),
          onCompositionend: _cache[2] || (_cache[2] = ($event) => $data.isComposing = false),
          onSelect: $options.onSelect,
          onInfiniteScroll: $options.emitInfiniteScroll
        }), createSlots({
          _: 2
          /* DYNAMIC */
        }, [
          $options.hasHeaderSlot ? {
            name: "header",
            fn: withCtx(() => [
              renderSlot(_ctx.$slots, "header")
            ]),
            key: "0"
          } : void 0,
          $options.hasDefaultSlot ? {
            name: "default",
            fn: withCtx((props) => [
              renderSlot(_ctx.$slots, "default", {
                option: props.option,
                index: props.index
              })
            ]),
            key: "1"
          } : void 0,
          $options.hasEmptySlot ? {
            name: "empty",
            fn: withCtx(() => [
              renderSlot(_ctx.$slots, "empty")
            ]),
            key: "2"
          } : void 0,
          $options.hasFooterSlot ? {
            name: "footer",
            fn: withCtx(() => [
              renderSlot(_ctx.$slots, "footer")
            ]),
            key: "3"
          } : void 0
        ]), 1040, ["modelValue", "data", "field", "icon", "icon-pack", "maxlength", "size", "disabled", "loading", "autocomplete", "open-on-focus", "keep-open", "keep-first", "group-field", "group-options", "use-html5-validation", "check-infinite-scroll", "append-to-body", "confirm-keys", "onTyping", "onFocus", "onBlur", "onKeydown", "onSelect", "onInfiniteScroll"])) : createCommentVNode("v-if", true)
      ], 10, _hoisted_144),
      $props.hasCounter && ($props.maxtags || _ctx.maxlength) ? (openBlock(), createElementBlock("small", _hoisted_237, [
        _ctx.maxlength && $options.valueLength > 0 ? (openBlock(), createElementBlock(
          Fragment,
          { key: 0 },
          [
            createTextVNode(
              toDisplayString($options.valueLength) + " / " + toDisplayString(_ctx.maxlength),
              1
              /* TEXT */
            )
          ],
          64
          /* STABLE_FRAGMENT */
        )) : $props.maxtags ? (openBlock(), createElementBlock(
          Fragment,
          { key: 1 },
          [
            createTextVNode(
              toDisplayString($options.tagsLength) + " / " + toDisplayString($props.maxtags),
              1
              /* TEXT */
            )
          ],
          64
          /* STABLE_FRAGMENT */
        )) : createCommentVNode("v-if", true)
      ])) : createCommentVNode("v-if", true)
    ],
    16
    /* FULL_PROPS */
  );
}
script43.render = render42;
script43.__file = "src/components/taginput/Taginput.vue";
var Plugin38 = {
  install: function install38(Vue) {
    registerComponent(Vue, script43);
  }
};
use(Plugin38);

// node_modules/buefy/dist/esm/timepicker.js
var Plugin39 = {
  install: function install39(Vue) {
    registerComponent(Vue, script18);
  }
};
use(Plugin39);

// node_modules/buefy/dist/esm/toast.js
var script44 = {
  name: "BToast",
  mixins: [NoticeMixin],
  data() {
    return {
      newDuration: this.duration || config.defaultToastDuration
    };
  }
};
var _hoisted_145 = ["aria-hidden"];
var _hoisted_238 = ["innerHTML"];
function render43(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    "enter-active-class": _ctx.transition.enter,
    "leave-active-class": _ctx.transition.leave,
    persisted: ""
  }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode("div", {
        onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.pause && _ctx.pause(...args)),
        onMouseleave: _cache[1] || (_cache[1] = (...args) => _ctx.removePause && _ctx.removePause(...args)),
        class: normalizeClass(["toast", [_ctx.type, _ctx.position]]),
        "aria-hidden": !_ctx.isActive,
        role: "alert"
      }, [
        _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock(
          Fragment,
          { key: 1 },
          [
            createCommentVNode(" eslint-disable-next-line vue/no-v-html "),
            createBaseVNode("div", { innerHTML: _ctx.message }, null, 8, _hoisted_238)
          ],
          64
          /* STABLE_FRAGMENT */
        ))
      ], 42, _hoisted_145), [
        [vShow, _ctx.isActive]
      ])
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["enter-active-class", "leave-active-class"]);
}
script44.render = render43;
script44.__file = "src/components/toast/Toast.vue";
function ownKeys9(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread9(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys9(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys9(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var ToastProgrammatic = function() {
  function ToastProgrammatic2(app) {
    _classCallCheck(this, ToastProgrammatic2);
    this.app = app;
  }
  _createClass(ToastProgrammatic2, [{
    key: "open",
    value: function open2(params) {
      if (typeof params === "string") {
        params = {
          message: params
        };
      }
      var defaultParam = {
        position: config.defaultToastPosition || "is-top"
      };
      if (params.parent) {
        delete params.parent;
      }
      var slot;
      if (Array.isArray(params.message)) {
        slot = params.message;
        delete params.message;
      }
      var propsData = merge(defaultParam, params);
      var container2 = document.createElement("div");
      var vueInstance = createApp({
        data: function data8() {
          return {
            toastVNode: null
          };
        },
        methods: {
          close: function close4() {
            var toast = getComponentFromVNode(this.toastVNode);
            if (toast) {
              toast.close();
            }
          }
        },
        render: function render45() {
          this.toastVNode = h(script44, _objectSpread9(_objectSpread9({}, propsData), {}, {
            // On Vue 3, $destroy is no longer available.
            // A toast has to be unmounted manually.
            onClose: function onClose() {
              if (typeof propsData.onClose === "function") {
                propsData.onClose();
              }
              setTimeout(function() {
                vueInstance.unmount();
              }, 150);
            }
          }), slot != null ? {
            "default": function _default10() {
              return slot;
            }
          } : void 0);
          return this.toastVNode;
        }
      });
      if (this.app) {
        copyAppContext(this.app, vueInstance);
      } else {
        vueInstance.config.globalProperties.$buefy = {};
      }
      return vueInstance.mount(container2);
    }
  }]);
  return ToastProgrammatic2;
}();
var Plugin40 = {
  install: function install40(Vue) {
    registerComponentProgrammatic(Vue, "toast", new ToastProgrammatic(Vue));
  }
};
use(Plugin40);

// node_modules/buefy/dist/esm/tooltip.js
var Plugin41 = {
  install: function install41(Vue) {
    registerComponent(Vue, script15);
  }
};
use(Plugin41);

// node_modules/buefy/dist/esm/upload.js
var script45 = {
  name: "BUpload",
  mixins: [CompatFallthroughMixin, FormElementMixin],
  props: {
    modelValue: {
      type: [Object, Function, File, Array]
    },
    multiple: Boolean,
    disabled: Boolean,
    accept: String,
    dragDrop: Boolean,
    type: {
      type: String,
      default: "is-primary"
    },
    native: {
      type: Boolean,
      default: false
    },
    expanded: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  emits: ["invalid", "update:modelValue"],
  data() {
    return {
      newValue: this.modelValue,
      dragDropFocus: false,
      _elementRef: "input"
    };
  },
  computed: {
    disabledOrUndefined() {
      return this.disabled || void 0;
    }
  },
  watch: {
    /**
     *   When v-model is changed:
     *   1. Set internal value.
     *   2. Reset internal input file value
     *   3. If it's invalid, validate again.
     */
    modelValue(value) {
      this.newValue = value;
      if (!value || Array.isArray(value) && value.length === 0) {
        this.$refs.input.value = null;
      }
      !this.isValid && !this.dragDrop && this.checkHtml5Validity();
    }
  },
  methods: {
    /**
    * Listen change event on input type 'file',
    * emit 'input' event and validate
    */
    onFileChange(event) {
      if (this.disabled || this.loading) return;
      if (this.dragDrop) this.updateDragDropFocus(false);
      const value = event.target.files || event.dataTransfer.files;
      if (value.length === 0) {
        if (!this.newValue) return;
        if (this.native) this.newValue = null;
      } else if (!this.multiple) {
        if (this.dragDrop && value.length !== 1) return;
        else {
          const file = value[0];
          if (this.checkType(file)) this.newValue = file;
          else if (this.newValue) {
            this.newValue = null;
            this.clearInput();
          } else {
            this.clearInput();
            this.checkHtml5Validity();
            return;
          }
        }
      } else {
        let newValues = false;
        if (this.native || !this.newValue) {
          this.newValue = [];
          newValues = true;
        }
        for (let i = 0; i < value.length; i++) {
          const file = value[i];
          if (this.checkType(file)) {
            this.newValue.push(file);
            newValues = true;
          }
        }
        if (!newValues) return;
      }
      this.$emit("update:modelValue", this.newValue);
      !this.dragDrop && this.checkHtml5Validity();
    },
    /*
    * Reset file input value
    */
    clearInput() {
      this.$refs.input.value = null;
    },
    /**
    * Listen drag-drop to update internal variable
    */
    updateDragDropFocus(focus3) {
      if (!this.disabled && !this.loading) {
        this.dragDropFocus = focus3;
      }
    },
    /**
    * Check mime type of file
    */
    checkType(file) {
      if (!this.accept) return true;
      const types = this.accept.split(",");
      if (types.length === 0) return true;
      let valid = false;
      for (let i = 0; i < types.length && !valid; i++) {
        const type = types[i].trim();
        if (type) {
          if (type.substring(0, 1) === ".") {
            const extension = file.name.toLowerCase().slice(-type.length);
            if (extension === type.toLowerCase()) {
              valid = true;
            }
          } else {
            if (file.type.match(type)) {
              valid = true;
            }
          }
        }
      }
      if (!valid) this.$emit("invalid");
      return valid;
    }
  }
};
var _hoisted_146 = ["multiple", "accept", "disabled"];
function render44(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "label",
    mergeProps({ class: "upload control" }, _ctx.rootAttrs, {
      class: [{ "is-expanded": $props.expanded, "is-rounded": $props.rounded }]
    }),
    [
      !$props.dragDrop ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock(
        "div",
        {
          key: 1,
          class: normalizeClass(["upload-draggable", [$props.type, {
            "is-loading": _ctx.loading,
            "is-disabled": $props.disabled,
            "is-hovered": $data.dragDropFocus,
            "is-expanded": $props.expanded
          }]]),
          onDragover: _cache[0] || (_cache[0] = withModifiers(($event) => $options.updateDragDropFocus(true), ["prevent"])),
          onDragleave: _cache[1] || (_cache[1] = withModifiers(($event) => $options.updateDragDropFocus(false), ["prevent"])),
          onDragenter: _cache[2] || (_cache[2] = withModifiers(($event) => $options.updateDragDropFocus(true), ["prevent"])),
          onDrop: _cache[3] || (_cache[3] = withModifiers((...args) => $options.onFileChange && $options.onFileChange(...args), ["prevent"]))
        },
        [
          renderSlot(_ctx.$slots, "default")
        ],
        34
        /* CLASS, HYDRATE_EVENTS */
      )),
      createBaseVNode("input", mergeProps({
        ref: "input",
        type: "file"
      }, _ctx.fallthroughAttrs, {
        multiple: $props.multiple,
        accept: $props.accept,
        disabled: $options.disabledOrUndefined,
        onChange: _cache[4] || (_cache[4] = (...args) => $options.onFileChange && $options.onFileChange(...args))
      }), null, 16, _hoisted_146)
    ],
    16
    /* FULL_PROPS */
  );
}
script45.render = render44;
script45.__file = "src/components/upload/Upload.vue";
var Plugin42 = {
  install: function install42(Vue) {
    registerComponent(Vue, script45);
  }
};
use(Plugin42);

// node_modules/buefy/dist/esm/config.js
var ConfigComponent = {
  getOptions: function getOptions() {
    return config;
  },
  setOptions: function setOptions$1(options) {
    setOptions(merge(config, options, true));
  }
};

// node_modules/buefy/dist/esm/index.js
var components = Object.freeze({
  __proto__: null,
  Autocomplete: Plugin,
  Breadcrumb: Plugin2,
  Button: Plugin3,
  Carousel: Plugin4,
  Checkbox: Plugin5,
  Clockpicker: Plugin7,
  Collapse: Plugin6,
  Colorpicker: Plugin8,
  Datepicker: Plugin9,
  Datetimepicker: Plugin10,
  Dialog: Plugin11,
  Dropdown: Plugin12,
  Field: Plugin13,
  Icon: Plugin14,
  Image: Plugin15,
  Input: Plugin16,
  Loading: Plugin17,
  Menu: Plugin18,
  Message: Plugin19,
  Modal: Plugin20,
  Navbar: Plugin22,
  Notification: Plugin21,
  Numberinput: Plugin23,
  Pagination: Plugin24,
  Progress: Plugin25,
  Radio: Plugin26,
  Rate: Plugin27,
  Select: Plugin28,
  Sidebar: Plugin30,
  Skeleton: Plugin29,
  Slider: Plugin31,
  Snackbar: Plugin32,
  Steps: Plugin33,
  Switch: Plugin34,
  Table: Plugin35,
  Tabs: Plugin36,
  Tag: Plugin37,
  Taginput: Plugin38,
  Timepicker: Plugin39,
  Toast: Plugin40,
  Tooltip: Plugin41,
  Upload: Plugin42
});
var Buefy = {
  install: function install43(Vue) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    setOptions(merge(config, options, true));
    for (var componentKey in components) {
      Vue.use(components[componentKey]);
    }
    registerComponentProgrammatic(Vue, "config", ConfigComponent);
    Vue.config.globalProperties.$buefy.globalNoticeInterval = null;
  }
};
use(Buefy);
export {
  Plugin as Autocomplete,
  Plugin2 as Breadcrumb,
  Plugin3 as Button,
  Plugin4 as Carousel,
  Plugin5 as Checkbox,
  Plugin7 as Clockpicker,
  Plugin6 as Collapse,
  Color$1 as Color,
  Plugin8 as Colorpicker,
  ConfigComponent as ConfigProgrammatic,
  Plugin9 as Datepicker,
  Plugin10 as Datetimepicker,
  Plugin11 as Dialog,
  DialogProgrammatic,
  Plugin12 as Dropdown,
  Plugin13 as Field,
  Plugin14 as Icon,
  Plugin15 as Image,
  Plugin16 as Input,
  Plugin17 as Loading,
  LoadingProgrammatic,
  Plugin18 as Menu,
  Plugin19 as Message,
  Plugin20 as Modal,
  ModalProgrammatic,
  Plugin22 as Navbar,
  Plugin21 as Notification,
  NotificationProgrammatic,
  Plugin23 as Numberinput,
  Plugin24 as Pagination,
  Plugin25 as Progress,
  Plugin26 as Radio,
  Plugin27 as Rate,
  Plugin28 as Select,
  Plugin30 as Sidebar,
  Plugin29 as Skeleton,
  Plugin31 as Slider,
  Plugin32 as Snackbar,
  SnackbarProgrammatic,
  Plugin33 as Steps,
  Plugin34 as Switch,
  Plugin35 as Table,
  Plugin36 as Tabs,
  Plugin37 as Tag,
  Plugin38 as Taginput,
  Plugin39 as Timepicker,
  Plugin40 as Toast,
  ToastProgrammatic,
  Plugin41 as Tooltip,
  Plugin42 as Upload,
  bound,
  copyAppContext,
  createAbsoluteElement,
  createNewEvent,
  Buefy as default,
  escapeRegExpChars,
  getComponentFromVNode,
  getMonthNames,
  getValueByPath,
  getWeekdayNames,
  hasFlag,
  indexOf,
  isCustomElement,
  isDefined,
  isFragment,
  isMobile,
  isNil,
  isTag,
  isVueComponent,
  isWebpSupported,
  matchWithGroups,
  merge,
  mod,
  multiColumnSort,
  removeDiacriticsFromString,
  removeElement,
  sign,
  toCssWidth,
  translateTouchAsDragEvent
};
//# sourceMappingURL=buefy.js.map
