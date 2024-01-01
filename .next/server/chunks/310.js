exports.id = 310;
exports.ids = [310];
exports.modules = {

/***/ 4266:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addBasePath", ({
    enumerable: true,
    get: function() {
        return addBasePath;
    }
}));
const _addpathprefix = __webpack_require__(1751);
const _normalizetrailingslash = __webpack_require__(2387);
const basePath =  false || "";
function addBasePath(path, required) {
    return (0, _normalizetrailingslash.normalizePathTrailingSlash)( false ? 0 : (0, _addpathprefix.addPathPrefix)(path, basePath));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map


/***/ }),

/***/ 370:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addLocale", ({
    enumerable: true,
    get: function() {
        return addLocale;
    }
}));
const _normalizetrailingslash = __webpack_require__(2387);
const addLocale = function(path) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    if (false) {}
    return path;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 3991:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PrefetchKind: function() {
        return PrefetchKind;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_NAVIGATE: function() {
        return ACTION_NAVIGATE;
    },
    ACTION_RESTORE: function() {
        return ACTION_RESTORE;
    },
    ACTION_SERVER_PATCH: function() {
        return ACTION_SERVER_PATCH;
    },
    ACTION_PREFETCH: function() {
        return ACTION_PREFETCH;
    },
    ACTION_FAST_REFRESH: function() {
        return ACTION_FAST_REFRESH;
    },
    ACTION_SERVER_ACTION: function() {
        return ACTION_SERVER_ACTION;
    }
});
const ACTION_REFRESH = "refresh";
const ACTION_NAVIGATE = "navigate";
const ACTION_RESTORE = "restore";
const ACTION_SERVER_PATCH = "server-patch";
const ACTION_PREFETCH = "prefetch";
const ACTION_FAST_REFRESH = "fast-refresh";
const ACTION_SERVER_ACTION = "server-action";
var PrefetchKind;
(function(PrefetchKind) {
    PrefetchKind["AUTO"] = "auto";
    PrefetchKind["FULL"] = "full";
    PrefetchKind["TEMPORARY"] = "temporary";
})(PrefetchKind || (PrefetchKind = {}));
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer-types.js.map


/***/ }),

/***/ 1516:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getDomainLocale", ({
    enumerable: true,
    get: function() {
        return getDomainLocale;
    }
}));
const _normalizetrailingslash = __webpack_require__(2387);
const basePath = (/* unused pure expression or super */ null && ( false || ""));
function getDomainLocale(path, locale, locales, domainLocales) {
    if (false) {} else {
        return false;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-domain-locale.js.map


/***/ }),

/***/ 8872:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "Image", ({
    enumerable: true,
    get: function() {
        return Image;
    }
}));
const _interop_require_default = __webpack_require__(167);
const _interop_require_wildcard = __webpack_require__(8760);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(6689));
const _reactdom = __webpack_require__(6405);
const _head = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2636));
const _getimgprops = __webpack_require__(5132);
const _imageconfig = __webpack_require__(5843);
const _imageconfigcontext = __webpack_require__(744);
const _warnonce = __webpack_require__(618);
const _routercontext = __webpack_require__(4964);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(7746));
// This is replaced by webpack define plugin
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false};
if (true) {
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized) {
    const src = img == null ? void 0 : img.src;
    if (!img || img["data-loaded-src"] === src) {
        return;
    }
    img["data-loaded-src"] = src;
    const p = "decode" in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder !== "empty") {
            setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event("load");
            Object.defineProperty(event, "target", {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current({
                ...event,
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            });
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
            onLoadingCompleteRef.current(img);
        }
        if (false) {}
    });
}
function getDynamicProps(fetchPriority) {
    const [majorStr, minorStr] = _react.version.split(".");
    const major = parseInt(majorStr, 10);
    const minor = parseInt(minorStr, 10);
    if (major > 18 || major === 18 && minor >= 3) {
        // In React 18.3.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)((param, forwardedRef)=>{
    let { src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, onLoad, onError, ...rest } = param;
    return /*#__PURE__*/ _react.default.createElement("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading: loading,
        width: width,
        height: height,
        decoding: decoding,
        "data-nimg": fill ? "fill" : "1",
        className: className,
        style: style,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes: sizes,
        srcSet: srcSet,
        src: src,
        ref: (0, _react.useCallback)((img)=>{
            if (forwardedRef) {
                if (typeof forwardedRef === "function") forwardedRef(img);
                else if (typeof forwardedRef === "object") {
                    // @ts-ignore - .current is read only it's usually assigned by react internally
                    forwardedRef.current = img;
                }
            }
            if (!img) {
                return;
            }
            if (onError) {
                // If the image has an error before react hydrates, then the error is lost.
                // The workaround is to wait until the image is mounted which is after hydration,
                // then we set the src again to trigger the error handler (if there was an error).
                // eslint-disable-next-line no-self-assign
                img.src = img.src;
            }
            if (false) {}
            if (img.complete) {
                handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
            }
        }, [
            src,
            placeholder,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            onError,
            unoptimized,
            forwardedRef
        ]),
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder !== "empty") {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    });
});
function ImagePreload(param) {
    let { isAppRouter, imgAttributes } = param;
    const opts = {
        as: "image",
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: imgAttributes.crossOrigin,
        referrerPolicy: imgAttributes.referrerPolicy,
        ...getDynamicProps(imgAttributes.fetchPriority)
    };
    if (isAppRouter && _reactdom.preload) {
        // See https://github.com/facebook/react/pull/26940
        (0, _reactdom.preload)(imgAttributes.src, opts);
        return null;
    }
    return /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("link", {
        key: "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
        rel: "preload",
        // Note how we omit the `href` attribute, as it would only be relevant
        // for browsers that do not support `imagesrcset`, and in those cases
        // it would cause the incorrect image to be preloaded.
        //
        // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
        href: imgAttributes.srcSet ? undefined : imgAttributes.src,
        ...opts
    }));
}
const Image = /*#__PURE__*/ (0, _react.forwardRef)((props, forwardedRef)=>{
    const pagesRouter = (0, _react.useContext)(_routercontext.RouterContext);
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const configContext = (0, _react.useContext)(_imageconfigcontext.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes
        };
    }, [
        configContext
    ]);
    const { onLoad, onLoadingComplete } = props;
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
        defaultLoader: _imageloader.default,
        imgConf: config,
        blurComplete,
        showAltText
    });
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(ImageElement, {
        ...imgAttributes,
        unoptimized: imgMeta.unoptimized,
        placeholder: imgMeta.placeholder,
        fill: imgMeta.fill,
        onLoadRef: onLoadRef,
        onLoadingCompleteRef: onLoadingCompleteRef,
        setBlurComplete: setBlurComplete,
        setShowAltText: setShowAltText,
        ref: forwardedRef
    }), imgMeta.priority ? /*#__PURE__*/ _react.default.createElement(ImagePreload, {
        isAppRouter: isAppRouter,
        imgAttributes: imgAttributes
    }) : null);
});
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image-component.js.map


/***/ }),

/***/ 5569:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _interop_require_default = __webpack_require__(167);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(6689));
const _resolvehref = __webpack_require__(7782);
const _islocalurl = __webpack_require__(1109);
const _formaturl = __webpack_require__(3938);
const _utils = __webpack_require__(9232);
const _addlocale = __webpack_require__(370);
const _routercontext = __webpack_require__(4964);
const _approutercontext = __webpack_require__(3280);
const _useintersection = __webpack_require__(508);
const _getdomainlocale = __webpack_require__(1516);
const _addbasepath = __webpack_require__(4266);
const _routerreducertypes = __webpack_require__(3991);
const prefetched = new Set();
function prefetch(router, href, as, options, appOptions, isAppRouter) {
    if (true) {
        return;
    }
    // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    if (!isAppRouter && !(0, _islocalurl.isLocalURL)(href)) {
        return;
    }
    // We should only dedupe requests when experimental.optimisticClientCache is
    // disabled.
    if (!options.bypassPrefetchedCheck) {
        const locale = typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : undefined;
        const prefetchedKey = href + "%" + as + "%" + locale;
        // If we've already fetched the key, then don't prefetch it again!
        if (prefetched.has(prefetchedKey)) {
            return;
        }
        // Mark this URL as prefetched.
        prefetched.add(prefetchedKey);
    }
    const prefetchPromise = isAppRouter ? router.prefetch(href, appOptions) : router.prefetch(href, as, options);
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    Promise.resolve(prefetchPromise).catch((err)=>{
        if (false) {}
    });
}
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute("target");
    return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === "A";
    if (isAnchorNodeName && (isModifiedEvent(e) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    !isAppRouter && !(0, _islocalurl.isLocalURL)(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // If the router is an NextRouter instance it will have `beforePopState`
        const routerScroll = scroll != null ? scroll : true;
        if ("beforePopState" in router) {
            router[replace ? "replace" : "push"](href, as, {
                shallow,
                locale,
                scroll: routerScroll
            });
        } else {
            router[replace ? "replace" : "push"](as || href, {
                forceOptimisticNavigation: !prefetchEnabled,
                scroll: routerScroll
            });
        }
    };
    if (isAppRouter) {
        _react.default.startTransition(navigate);
    } else {
        navigate();
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === "string") {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
/**
 * React Component that enables client-side transitions between routes.
 */ const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
    let children;
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, locale, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = true === false, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /*#__PURE__*/ _react.default.createElement("a", null, children);
    }
    const pagesRouter = _react.default.useContext(_routercontext.RouterContext);
    const appRouter = _react.default.useContext(_approutercontext.AppRouterContext);
    const router = pagesRouter != null ? pagesRouter : appRouter;
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const prefetchEnabled = prefetchProp !== false;
    /**
     * The possible states for prefetch are:
     * - null: this is the default "auto" mode, where we will prefetch partially if the link is in the viewport
     * - true: we will prefetch if the link is visible and prefetch the full page, not just partially
     * - false: we will not prefetch if in the viewport at all
     */ const appPrefetchKind = prefetchProp === null ? _routerreducertypes.PrefetchKind.AUTO : _routerreducertypes.PrefetchKind.FULL;
    if (false) {}
    if (false) {}
    const { href, as } = _react.default.useMemo(()=>{
        if (!pagesRouter) {
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
        const [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(pagesRouter, hrefProp, true);
        return {
            href: resolvedHref,
            as: asProp ? (0, _resolvehref.resolveHref)(pagesRouter, asProp) : resolvedAs || resolvedHref
        };
    }, [
        pagesRouter,
        hrefProp,
        asProp
    ]);
    const previousHref = _react.default.useRef(href);
    const previousAs = _react.default.useRef(as);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (false) {} else {
            child = _react.default.Children.only(children);
        }
    } else {
        if (false) {}
    }
    const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
    const [setIntersectionRef, isVisible, resetVisible] = (0, _useintersection.useIntersection)({
        rootMargin: "200px"
    });
    const setRef = _react.default.useCallback((el)=>{
        // Before the link getting observed, check if visible state need to be reset
        if (previousAs.current !== as || previousHref.current !== href) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href;
        }
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === "function") childRef(el);
            else if (typeof childRef === "object") {
                childRef.current = el;
            }
        }
    }, [
        as,
        childRef,
        href,
        resetVisible,
        setIntersectionRef
    ]);
    // Prefetch the URL if we haven't already and it's visible.
    _react.default.useEffect(()=>{
        // in dev, we only prefetch on hover to avoid wasting resources as the prefetch will trigger compiling the page.
        if (false) {}
        if (!router) {
            return;
        }
        // If we don't need to prefetch the URL, don't do prefetch.
        if (!isVisible || !prefetchEnabled) {
            return;
        }
        // Prefetch the URL.
        prefetch(router, href, as, {
            locale
        }, {
            kind: appPrefetchKind
        }, isAppRouter);
    }, [
        as,
        href,
        isVisible,
        locale,
        prefetchEnabled,
        pagesRouter == null ? void 0 : pagesRouter.locale,
        router,
        isAppRouter,
        appPrefetchKind
    ]);
    const childProps = {
        ref: setRef,
        onClick (e) {
            if (false) {}
            if (!legacyBehavior && typeof onClick === "function") {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === "function") {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ((!prefetchEnabled || "production" === "development") && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        },
        onTouchStart (e) {
            if (!legacyBehavior && typeof onTouchStartProp === "function") {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the domain and locale.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : pagesRouter == null ? void 0 : pagesRouter.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = (pagesRouter == null ? void 0 : pagesRouter.isLocaleDomain) && (0, _getdomainlocale.getDomainLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.locales, pagesRouter == null ? void 0 : pagesRouter.domainLocales);
        childProps.href = localeDomain || (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.defaultLocale));
    }
    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ _react.default.createElement("a", {
        ...restProps,
        ...childProps
    }, children);
});
const _default = Link;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map


/***/ }),

/***/ 2387:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizePathTrailingSlash", ({
    enumerable: true,
    get: function() {
        return normalizePathTrailingSlash;
    }
}));
const _removetrailingslash = __webpack_require__(3297);
const _parsepath = __webpack_require__(8854);
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith("/") || undefined) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    if (false) {}
    return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map


/***/ }),

/***/ 508:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "useIntersection", ({
    enumerable: true,
    get: function() {
        return useIntersection;
    }
}));
const _react = __webpack_require__(6689);
const _requestidlecallback = __webpack_require__(29);
const hasIntersectionObserver = typeof IntersectionObserver === "function";
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
    };
    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
    let instance;
    if (existing) {
        instance = observers.get(existing);
        if (instance) {
            return instance;
        }
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    instance = {
        id,
        observer,
        elements
    };
    idList.push(id);
    observers.set(id, instance);
    return instance;
}
function observe(element, callback, options) {
    const { id, observer, elements } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
function useIntersection(param) {
    let { rootRef, rootMargin, disabled } = param;
    const isDisabled = disabled || !hasIntersectionObserver;
    const [visible, setVisible] = (0, _react.useState)(false);
    const elementRef = (0, _react.useRef)(null);
    const setElement = (0, _react.useCallback)((element)=>{
        elementRef.current = element;
    }, []);
    (0, _react.useEffect)(()=>{
        if (hasIntersectionObserver) {
            if (isDisabled || visible) return;
            const element = elementRef.current;
            if (element && element.tagName) {
                const unobserve = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
                    root: rootRef == null ? void 0 : rootRef.current,
                    rootMargin
                });
                return unobserve;
            }
        } else {
            if (!visible) {
                const idleCallback = (0, _requestidlecallback.requestIdleCallback)(()=>setVisible(true));
                return ()=>(0, _requestidlecallback.cancelIdleCallback)(idleCallback);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled,
        rootMargin,
        rootRef,
        visible,
        elementRef.current
    ]);
    const resetVisible = (0, _react.useCallback)(()=>{
        setVisible(false);
    }, []);
    return [
        setElement,
        visible,
        resetVisible
    ];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 2555:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    unstable_getImgProps: function() {
        return unstable_getImgProps;
    }
});
const _interop_require_default = __webpack_require__(167);
const _getimgprops = __webpack_require__(5132);
const _warnonce = __webpack_require__(618);
const _imagecomponent = __webpack_require__(8872);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(7746));
const unstable_getImgProps = (imgProps)=>{
    (0, _warnonce.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false}
    });
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
};
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map


/***/ }),

/***/ 7746:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
function defaultLoader(param) {
    let { config, src, width, quality } = param;
    if (false) {}
    return config.path + "?url=" + encodeURIComponent(src) + "&w=" + width + "&q=" + (quality || 75) + ( false ? 0 : "");
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map


/***/ }),

/***/ 5675:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(2555)


/***/ }),

/***/ 1664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(5569)


/***/ }),

/***/ 7696:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* binding */ _t)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_namespaceObject = /*#__PURE__*/__webpack_require__.t(external_react_, 2);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/match.js
function match_u(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,match_u),t}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/class-names.js
function class_names_t(...r){return Array.from(new Set(r.flatMap(n=>typeof n=="string"?n.split(" "):[]))).filter(Boolean).join(" ")}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/render.js
var S=(a=>(a[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a))(S||{}),j=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(j||{});function render_X({ourProps:r,theirProps:t,slot:e,defaultTag:a,features:s,visible:n=!0,name:f}){let o=N(t,r);if(n)return c(o,e,a,f);let u=s!=null?s:0;if(u&2){let{static:l=!1,...p}=o;if(l)return c(p,e,a,f)}if(u&1){let{unmount:l=!0,...p}=o;return match_u(l?0:1,{[0](){return null},[1](){return c({...p,hidden:!0,style:{display:"none"}},e,a,f)}})}return c(o,e,a,f)}function c(r,t={},e,a){let{as:s=e,children:n,refName:f="ref",...o}=g(r,["unmount","static"]),u=r.ref!==void 0?{[f]:r.ref}:{},l=typeof n=="function"?n(t):n;"className"in o&&o.className&&typeof o.className=="function"&&(o.className=o.className(t));let p={};if(t){let i=!1,m=[];for(let[y,d]of Object.entries(t))typeof d=="boolean"&&(i=!0),d===!0&&m.push(y);i&&(p["data-headlessui-state"]=m.join(" "))}if(s===external_react_.Fragment&&Object.keys(R(o)).length>0){if(!(0,external_react_.isValidElement)(l)||Array.isArray(l)&&l.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(o).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));let i=l.props,m=typeof(i==null?void 0:i.className)=="function"?(...d)=>class_names_t(i==null?void 0:i.className(...d),o.className):class_names_t(i==null?void 0:i.className,o.className),y=m?{className:m}:{};return (0,external_react_.cloneElement)(l,Object.assign({},N(l.props,R(g(o,["ref"]))),p,u,w(l.ref,u.ref),y))}return (0,external_react_.createElement)(s,Object.assign({},g(o,["ref"]),s!==external_react_.Fragment&&u,s!==external_react_.Fragment&&p),l)}function w(...r){return{ref:r.every(t=>t==null)?void 0:t=>{for(let e of r)e!=null&&(typeof e=="function"?e(t):e.current=t)}}}function N(...r){var a;if(r.length===0)return{};if(r.length===1)return r[0];let t={},e={};for(let s of r)for(let n in s)n.startsWith("on")&&typeof s[n]=="function"?((a=e[n])!=null||(e[n]=[]),e[n].push(s[n])):t[n]=s[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(s=>[s,void 0])));for(let s in e)Object.assign(t,{[s](n,...f){let o=e[s];for(let u of o){if((n instanceof Event||(n==null?void 0:n.nativeEvent)instanceof Event)&&n.defaultPrevented)return;u(n,...f)}}});return t}function D(r){var t;return Object.assign((0,external_react_.forwardRef)(r),{displayName:(t=r.displayName)!=null?t:r.name})}function R(r){let t=Object.assign({},r);for(let e in t)t[e]===void 0&&delete t[e];return t}function g(r,t=[]){let e=Object.assign({},r);for(let a of t)a in e&&delete e[a];return e}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/env.js
var i=Object.defineProperty;var env_d=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var r=(t,e,n)=>(env_d(t,typeof e!="symbol"?e+"":e,n),n);class o{constructor(){r(this,"current",this.detect());r(this,"handoffState","pending");r(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window=="undefined"||typeof document=="undefined"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}}let env_s=new o;

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
let use_iso_morphic_effect_l=(e,f)=>{env_s.isServer?(0,external_react_.useEffect)(e,f):(0,external_react_.useLayoutEffect)(e,f)};

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-latest-value.js
function use_latest_value_s(e){let r=(0,external_react_.useRef)(e);return use_iso_morphic_effect_l(()=>{r.current=e},[e]),r}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-event.js
let use_event_o=function(t){let e=use_latest_value_s(t);return external_react_.useCallback((...r)=>e.current(...r),[e])};

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
let u=Symbol();function T(t,n=!0){return Object.assign(t,{[u]:n})}function use_sync_refs_y(...t){let n=(0,external_react_.useRef)(t);(0,external_react_.useEffect)(()=>{n.current=t},[t]);let c=use_event_o(e=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(e):o.current=e)});return t.every(e=>e==null||(e==null?void 0:e[u]))?void 0:c}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/keyboard.js
var keyboard_o=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(keyboard_o||{});

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/bugs.js
function bugs_r(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=(e==null?void 0:e.getAttribute("disabled"))==="";return t&&bugs_i(l)?!1:t}function bugs_i(n){if(!n)return!1;let e=n.previousElementSibling;for(;e!==null;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
function use_server_handoff_complete_s(){let r=typeof document=="undefined";return"useSyncExternalStore" in external_react_namespaceObject?(o=>o.useSyncExternalStore)(external_react_namespaceObject)(()=>()=>{},()=>!1,()=>!r):!1}function use_server_handoff_complete_l(){let r=use_server_handoff_complete_s(),[e,n]=external_react_.useState(env_s.isHandoffComplete);return e&&env_s.isHandoffComplete===!1&&n(!1),external_react_.useEffect(()=>{e!==!0&&n(!0)},[e]),external_react_.useEffect(()=>env_s.handoff(),[]),r?!1:e}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-id.js
var use_id_o;let I=(use_id_o=external_react_.useId)!=null?use_id_o:function(){let n=use_server_handoff_complete_l(),[e,u]=external_react_.useState(n?()=>env_s.nextId():null);return use_iso_morphic_effect_l(()=>{e===null&&u(env_s.nextId())},[e]),e!=null?""+e:void 0};

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/internal/hidden.js
let hidden_a="div";var p=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(p||{});function hidden_s(t,o){let{features:n=1,...e}=t,d={ref:o,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return render_X({ourProps:d,theirProps:e,slot:{},defaultTag:hidden_a,name:"Hidden"})}let hidden_c=D(hidden_s);

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/owner.js
function owner_e(r){return env_s.isServer?null:r instanceof Node?r.ownerDocument:r!=null&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/focus-management.js
let focus_management_c=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var focus_management_M=(n=>(n[n.First=1]="First",n[n.Previous=2]="Previous",n[n.Next=4]="Next",n[n.Last=8]="Last",n[n.WrapAround=16]="WrapAround",n[n.NoScroll=32]="NoScroll",n))(focus_management_M||{}),focus_management_N=(o=>(o[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o))(focus_management_N||{}),F=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(F||{});function f(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(focus_management_c)).sort((r,t)=>Math.sign((r.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var focus_management_T=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(focus_management_T||{});function h(e,r=0){var t;return e===((t=owner_e(e))==null?void 0:t.body)?!1:match_u(r,{[0](){return e.matches(focus_management_c)},[1](){let l=e;for(;l!==null;){if(l.matches(focus_management_c))return!0;l=l.parentElement}return!1}})}function focus_management_D(e){let r=m(e);b().nextFrame(()=>{r&&!h(r.activeElement,0)&&focus_management_y(e)})}var focus_management_w=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(focus_management_w||{});typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function focus_management_y(e){e==null||e.focus({preventScroll:!0})}let focus_management_S=["textarea","input"].join(",");function H(e){var r,t;return(t=(r=e==null?void 0:e.matches)==null?void 0:r.call(e,focus_management_S))!=null?t:!1}function focus_management_I(e,r=t=>t){return e.slice().sort((t,l)=>{let o=r(t),i=r(l);if(o===null||i===null)return 0;let n=o.compareDocumentPosition(i);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function _(e,r){return O(f(),r,{relativeTo:e})}function O(e,r,{sorted:t=!0,relativeTo:l=null,skipElements:o=[]}={}){let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,n=Array.isArray(e)?t?focus_management_I(e):e:f(e);o.length>0&&n.length>1&&(n=n.filter(s=>!o.includes(s))),l=l!=null?l:i.activeElement;let E=(()=>{if(r&5)return 1;if(r&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=(()=>{if(r&1)return 0;if(r&2)return Math.max(0,n.indexOf(l))-1;if(r&4)return Math.max(0,n.indexOf(l))+1;if(r&8)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=r&32?{preventScroll:!0}:{},d=0,a=n.length,u;do{if(d>=a||d+a<=0)return 0;let s=x+d;if(r&16)s=(s+a)%a;else{if(s<0)return 3;if(s>=a)return 1}u=n[s],u==null||u.focus(p),d+=E}while(u!==i.activeElement);return r&6&&H(u)&&u.select(),2}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-window-event.js
function use_window_event_s(e,r,n){let o=use_latest_value_s(r);(0,external_react_.useEffect)(()=>{function t(i){o.current(i)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var use_tab_direction_s=(r=>(r[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r))(use_tab_direction_s||{});function use_tab_direction_n(){let e=(0,external_react_.useRef)(0);return use_window_event_s("keydown",o=>{o.key==="Tab"&&(e.current=o.shiftKey?1:0)},!0),e}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
function use_is_mounted_f(){let e=(0,external_react_.useRef)(!1);return use_iso_morphic_effect_l(()=>(e.current=!0,()=>{e.current=!1}),[]),e}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-owner.js
function use_owner_n(...e){return (0,external_react_.useMemo)(()=>owner_e(...e),[...e])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-event-listener.js
function E(n,e,a,t){let i=use_latest_value_s(a);(0,external_react_.useEffect)(()=>{n=n!=null?n:window;function r(o){i.current(o)}return n.addEventListener(e,r,t),()=>n.removeEventListener(e,r,t)},[n,e,t])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/micro-task.js
function micro_task_t(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(o=>setTimeout(()=>{throw o}))}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-watch.js
function use_watch_m(u,t){let e=(0,external_react_.useRef)([]),r=use_event_o(u);(0,external_react_.useEffect)(()=>{let o=[...e.current];for(let[n,a]of t.entries())if(e.current[n]!==a){let l=r(t,o);return e.current=t,l}},[r,...t])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/disposables.js
function disposables_o(){let n=[],r={addEventListener(e,t,s,a){return e.addEventListener(t,s,a),r.add(()=>e.removeEventListener(t,s,a))},requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add(()=>cancelAnimationFrame(t))},nextFrame(...e){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...e))},setTimeout(...e){let t=setTimeout(...e);return r.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return micro_task_t(()=>{t.current&&e[0]()}),r.add(()=>{t.current=!1})},style(e,t,s){let a=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:s}),this.add(()=>{Object.assign(e.style,{[t]:a})})},group(e){let t=disposables_o();return e(t),this.add(()=>t.dispose())},add(e){return n.push(e),()=>{let t=n.indexOf(e);if(t>=0)for(let s of n.splice(t,1))s()}},dispose(){for(let e of n.splice(0))e()}};return r}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-disposables.js
function use_disposables_p(){let[e]=(0,external_react_.useState)(disposables_o);return (0,external_react_.useEffect)(()=>()=>e.dispose(),[e]),e}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/document-ready.js
function t(n){function e(){document.readyState!=="loading"&&(n(),document.removeEventListener("DOMContentLoaded",e))}typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("DOMContentLoaded",e),e())}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
function use_on_unmount_c(t){let r=use_event_o(t),e=(0,external_react_.useRef)(!1);(0,external_react_.useEffect)(()=>(e.current=!1,()=>{e.current=!0,micro_task_t(()=>{e.current&&r()})}),[r])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function P(t){if(!t)return new Set;if(typeof t=="function")return new Set(t());let r=new Set;for(let e of t.current)e.current instanceof HTMLElement&&r.add(e.current);return r}let J="div";var focus_trap_h=(n=>(n[n.None=1]="None",n[n.InitialFocus=2]="InitialFocus",n[n.TabLock=4]="TabLock",n[n.FocusLock=8]="FocusLock",n[n.RestoreFocus=16]="RestoreFocus",n[n.All=30]="All",n))(focus_trap_h||{});function X(t,r){let e=(0,external_react_.useRef)(null),o=use_sync_refs_y(e,r),{initialFocus:u,containers:i,features:n=30,...l}=t;use_server_handoff_complete_l()||(n=1);let m=use_owner_n(e);Y({ownerDocument:m},Boolean(n&16));let c=Z({ownerDocument:m,container:e,initialFocus:u},Boolean(n&2));$({ownerDocument:m,container:e,containers:i,previousActiveElement:c},Boolean(n&8));let v=use_tab_direction_n(),y=use_event_o(s=>{let T=e.current;if(!T)return;(B=>B())(()=>{match_u(v.current,{[use_tab_direction_s.Forwards]:()=>{O(T,focus_management_M.First,{skipElements:[s.relatedTarget]})},[use_tab_direction_s.Backwards]:()=>{O(T,focus_management_M.Last,{skipElements:[s.relatedTarget]})}})})}),_=use_disposables_p(),b=(0,external_react_.useRef)(!1),j={ref:o,onKeyDown(s){s.key=="Tab"&&(b.current=!0,_.requestAnimationFrame(()=>{b.current=!1}))},onBlur(s){let T=P(i);e.current instanceof HTMLElement&&T.add(e.current);let d=s.relatedTarget;d instanceof HTMLElement&&d.dataset.headlessuiFocusGuard!=="true"&&(focus_trap_S(T,d)||(b.current?O(e.current,match_u(v.current,{[use_tab_direction_s.Forwards]:()=>focus_management_M.Next,[use_tab_direction_s.Backwards]:()=>focus_management_M.Previous})|focus_management_M.WrapAround,{relativeTo:s.target}):s.target instanceof HTMLElement&&focus_management_y(s.target)))}};return external_react_.createElement(external_react_.Fragment,null,Boolean(n&4)&&external_react_.createElement(hidden_c,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:y,features:p.Focusable}),render_X({ourProps:j,theirProps:l,defaultTag:J,name:"FocusTrap"}),Boolean(n&4)&&external_react_.createElement(hidden_c,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:y,features:p.Focusable}))}let z=D(X),focus_trap_ge=Object.assign(z,{features:focus_trap_h}),focus_trap_a=[];t(()=>{function t(r){r.target instanceof HTMLElement&&r.target!==document.body&&focus_trap_a[0]!==r.target&&(focus_trap_a.unshift(r.target),focus_trap_a=focus_trap_a.filter(e=>e!=null&&e.isConnected),focus_trap_a.splice(10))}window.addEventListener("click",t,{capture:!0}),window.addEventListener("mousedown",t,{capture:!0}),window.addEventListener("focus",t,{capture:!0}),document.body.addEventListener("click",t,{capture:!0}),document.body.addEventListener("mousedown",t,{capture:!0}),document.body.addEventListener("focus",t,{capture:!0})});function Q(t=!0){let r=(0,external_react_.useRef)(focus_trap_a.slice());return use_watch_m(([e],[o])=>{o===!0&&e===!1&&micro_task_t(()=>{r.current.splice(0)}),o===!1&&e===!0&&(r.current=focus_trap_a.slice())},[t,focus_trap_a,r]),use_event_o(()=>{var e;return(e=r.current.find(o=>o!=null&&o.isConnected))!=null?e:null})}function Y({ownerDocument:t},r){let e=Q(r);use_watch_m(()=>{r||(t==null?void 0:t.activeElement)===(t==null?void 0:t.body)&&focus_management_y(e())},[r]),use_on_unmount_c(()=>{r&&focus_management_y(e())})}function Z({ownerDocument:t,container:r,initialFocus:e},o){let u=(0,external_react_.useRef)(null),i=use_is_mounted_f();return use_watch_m(()=>{if(!o)return;let n=r.current;n&&micro_task_t(()=>{if(!i.current)return;let l=t==null?void 0:t.activeElement;if(e!=null&&e.current){if((e==null?void 0:e.current)===l){u.current=l;return}}else if(n.contains(l)){u.current=l;return}e!=null&&e.current?focus_management_y(e.current):O(n,focus_management_M.First)===focus_management_N.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),u.current=t==null?void 0:t.activeElement})},[o]),u}function $({ownerDocument:t,container:r,containers:e,previousActiveElement:o},u){let i=use_is_mounted_f();E(t==null?void 0:t.defaultView,"focus",n=>{if(!u||!i.current)return;let l=P(e);r.current instanceof HTMLElement&&l.add(r.current);let m=o.current;if(!m)return;let c=n.target;c&&c instanceof HTMLElement?focus_trap_S(l,c)?(o.current=c,focus_management_y(c)):(n.preventDefault(),n.stopPropagation(),focus_management_y(m)):focus_management_y(o.current)},!0)}function focus_trap_S(t,r){for(let e of t)if(e.contains(r))return!0;return!1}

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(6405);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/internal/portal-force-root.js
let e=(0,external_react_.createContext)(!1);function portal_force_root_l(){return (0,external_react_.useContext)(e)}function portal_force_root_P(o){return external_react_.createElement(e.Provider,{value:o.force},o.children)}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/portal/portal.js
function portal_F(p){let l=portal_force_root_l(),n=(0,external_react_.useContext)(v),e=use_owner_n(p),[a,o]=(0,external_react_.useState)(()=>{if(!l&&n!==null||env_s.isServer)return null;let t=e==null?void 0:e.getElementById("headlessui-portal-root");if(t)return t;if(e===null)return null;let r=e.createElement("div");return r.setAttribute("id","headlessui-portal-root"),e.body.appendChild(r)});return (0,external_react_.useEffect)(()=>{a!==null&&(e!=null&&e.body.contains(a)||e==null||e.body.appendChild(a))},[a,e]),(0,external_react_.useEffect)(()=>{l||n!==null&&o(n.current)},[n,o,l]),a}let U=external_react_.Fragment;function portal_N(p,l){let n=p,e=(0,external_react_.useRef)(null),a=use_sync_refs_y(T(u=>{e.current=u}),l),o=use_owner_n(e),t=portal_F(e),[r]=(0,external_react_.useState)(()=>{var u;return env_s.isServer?null:(u=o==null?void 0:o.createElement("div"))!=null?u:null}),i=(0,external_react_.useContext)(portal_f),C=use_server_handoff_complete_l();return use_iso_morphic_effect_l(()=>{!t||!r||t.contains(r)||(r.setAttribute("data-headlessui-portal",""),t.appendChild(r))},[t,r]),use_iso_morphic_effect_l(()=>{if(r&&i)return i.register(r)},[i,r]),use_on_unmount_c(()=>{var u;!t||!r||(r instanceof Node&&t.contains(r)&&t.removeChild(r),t.childNodes.length<=0&&((u=t.parentElement)==null||u.removeChild(t)))}),C?!t||!r?null:(0,external_react_dom_.createPortal)(render_X({ourProps:{ref:a},theirProps:n,defaultTag:U,name:"Portal"}),r):null}let portal_S=external_react_.Fragment,v=(0,external_react_.createContext)(null);function portal_j(p,l){let{target:n,...e}=p,o={ref:use_sync_refs_y(l)};return external_react_.createElement(v.Provider,{value:n},render_X({ourProps:o,theirProps:e,defaultTag:portal_S,name:"Popover.Group"}))}let portal_f=(0,external_react_.createContext)(null);function portal_ae(){let p=(0,external_react_.useContext)(portal_f),l=(0,external_react_.useRef)([]),n=use_event_o(o=>(l.current.push(o),p&&p.register(o),()=>e(o))),e=use_event_o(o=>{let t=l.current.indexOf(o);t!==-1&&l.current.splice(t,1),p&&p.unregister(o)}),a=(0,external_react_.useMemo)(()=>({register:n,unregister:e,portals:l}),[n,e,l]);return[l,(0,external_react_.useMemo)(()=>function({children:t}){return external_react_.createElement(portal_f.Provider,{value:a},t)},[a])]}let portal_D=D(portal_N),portal_I=D(portal_j),portal_pe=Object.assign(portal_D,{Group:portal_I});

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/description/description.js
let description_d=(0,external_react_.createContext)(null);function description_f(){let r=(0,external_react_.useContext)(description_d);if(r===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,description_f),t}return r}function description_M(){let[r,t]=(0,external_react_.useState)([]);return[r.length>0?r.join(" "):void 0,(0,external_react_.useMemo)(()=>function(e){let i=use_event_o(s=>(t(o=>[...o,s]),()=>t(o=>{let p=o.slice(),c=p.indexOf(s);return c!==-1&&p.splice(c,1),p}))),n=(0,external_react_.useMemo)(()=>({register:i,slot:e.slot,name:e.name,props:e.props}),[i,e.slot,e.name,e.props]);return external_react_.createElement(description_d.Provider,{value:n},e.children)},[t])]}let description_S="p";function description_h(r,t){let a=I(),{id:e=`headlessui-description-${a}`,...i}=r,n=description_f(),s=use_sync_refs_y(t);use_iso_morphic_effect_l(()=>n.register(e),[e,n.register]);let o={ref:s,...n.props,id:e};return render_X({ourProps:o,theirProps:i,slot:n.slot||{},defaultTag:description_S,name:n.name||"Description"})}let y=D(description_h),description_b=Object.assign(y,{});

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/internal/open-closed.js
let n=(0,external_react_.createContext)(null);n.displayName="OpenClosedContext";var open_closed_d=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(open_closed_d||{});function C(){return (0,external_react_.useContext)(n)}function open_closed_c({value:o,children:r}){return l.createElement(n.Provider,{value:o},r)}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/internal/stack-context.js
let stack_context_a=(0,external_react_.createContext)(()=>{});stack_context_a.displayName="StackContext";var stack_context_s=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(stack_context_s||{});function x(){return (0,external_react_.useContext)(stack_context_a)}function stack_context_M({children:i,onUpdate:r,type:e,element:n,enabled:u}){let l=x(),o=use_event_o((...t)=>{r==null||r(...t),l(...t)});return use_iso_morphic_effect_l(()=>{let t=u===void 0||u===!0;return t&&o(0,e,n),()=>{t&&o(1,e,n)}},[o,e,n,u]),external_react_.createElement(stack_context_a.Provider,{value:o},i)}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-document-event.js
function use_document_event_d(e,r,n){let o=use_latest_value_s(r);(0,external_react_.useEffect)(()=>{function t(u){o.current(u)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function use_outside_click_h(s,m,a=!0){let i=(0,external_react_.useRef)(!1);(0,external_react_.useEffect)(()=>{requestAnimationFrame(()=>{i.current=a})},[a]);function c(e,r){if(!i.current||e.defaultPrevented)return;let t=r(e);if(t===null||!t.getRootNode().contains(t)||!t.isConnected)return;let E=function u(n){return typeof n=="function"?u(n()):Array.isArray(n)||n instanceof Set?n:[n]}(s);for(let u of E){if(u===null)continue;let n=u instanceof HTMLElement?u:u.current;if(n!=null&&n.contains(t)||e.composed&&e.composedPath().includes(n))return}return!h(t,focus_management_T.Loose)&&t.tabIndex!==-1&&e.preventDefault(),m(e,t)}let o=(0,external_react_.useRef)(null);use_document_event_d("pointerdown",e=>{var r,t;i.current&&(o.current=((t=(r=e.composedPath)==null?void 0:r.call(e))==null?void 0:t[0])||e.target)},!0),use_document_event_d("mousedown",e=>{var r,t;i.current&&(o.current=((t=(r=e.composedPath)==null?void 0:r.call(e))==null?void 0:t[0])||e.target)},!0),use_document_event_d("click",e=>{o.current&&(c(e,()=>o.current),o.current=null)},!0),use_document_event_d("touchend",e=>c(e,()=>e.target instanceof HTMLElement?e.target:null),!0),use_window_event_s("blur",e=>c(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js
function useSyncExternalStoreShimClient_i(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const useSyncExternalStoreShimClient_d=typeof Object.is=="function"?Object.is:useSyncExternalStoreShimClient_i,{useState:useSyncExternalStoreShimClient_u,useEffect:useSyncExternalStoreShimClient_h,useLayoutEffect:useSyncExternalStoreShimClient_f,useDebugValue:useSyncExternalStoreShimClient_p}=external_react_namespaceObject;let useSyncExternalStoreShimClient_S=(/* unused pure expression or super */ null && (!1)),useSyncExternalStoreShimClient_=(/* unused pure expression or super */ null && (!1));function useSyncExternalStoreShimClient_y(e,t,c){const a=t(),[{inst:n},o]=useSyncExternalStoreShimClient_u({inst:{value:a,getSnapshot:t}});return useSyncExternalStoreShimClient_f(()=>{n.value=a,n.getSnapshot=t,useSyncExternalStoreShimClient_r(n)&&o({inst:n})},[e,a,t]),useSyncExternalStoreShimClient_h(()=>(useSyncExternalStoreShimClient_r(n)&&o({inst:n}),e(()=>{useSyncExternalStoreShimClient_r(n)&&o({inst:n})})),[e]),useSyncExternalStoreShimClient_p(a),a}function useSyncExternalStoreShimClient_r(e){const t=e.getSnapshot,c=e.value;try{const a=t();return!useSyncExternalStoreShimClient_d(c,a)}catch{return!0}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js
function useSyncExternalStoreShimServer_t(r,e,n){return e()}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
const use_sync_external_store_shim_r=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",use_sync_external_store_shim_s=!use_sync_external_store_shim_r,use_sync_external_store_shim_c=use_sync_external_store_shim_s?useSyncExternalStoreShimServer_t:useSyncExternalStoreShimClient_y,use_sync_external_store_shim_a="useSyncExternalStore" in external_react_namespaceObject?(n=>n.useSyncExternalStore)(external_react_namespaceObject):use_sync_external_store_shim_c;

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-store.js
function use_store_S(t){return use_sync_external_store_shim_a(t.subscribe,t.getSnapshot,t.getSnapshot)}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/store.js
function store_a(o,r){let t=o(),n=new Set;return{getSnapshot(){return t},subscribe(e){return n.add(e),()=>n.delete(e)},dispatch(e,...s){let i=r[e].call(t,...s);i&&(t=i,n.forEach(c=>c()))}}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function adjust_scrollbar_padding_c(){let o;return{before({doc:e}){var l;let n=e.documentElement;o=((l=e.defaultView)!=null?l:window).innerWidth-n.clientWidth},after({doc:e,d:n}){let t=e.documentElement,l=t.clientWidth-t.offsetWidth,r=o-l;n.style(t,"paddingRight",`${r}px`)}}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/platform.js
function platform_t(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function platform_i(){return/Android/gi.test(window.navigator.userAgent)}function platform_n(){return platform_t()||platform_i()}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function handle_ios_locking_T(){if(!platform_t())return{};let l;return{before(){l=window.pageYOffset},after({doc:o,d:t,meta:s}){function i(n){return s.containers.flatMap(e=>e()).some(e=>e.contains(n))}t.microTask(()=>{if(window.getComputedStyle(o.documentElement).scrollBehavior!=="auto"){let e=disposables_o();e.style(o.documentElement,"scroll-behavior","auto"),t.add(()=>t.microTask(()=>e.dispose()))}t.style(o.body,"marginTop",`-${l}px`),window.scrollTo(0,0);let n=null;t.addEventListener(o,"click",e=>{if(e.target instanceof HTMLElement)try{let r=e.target.closest("a");if(!r)return;let{hash:c}=new URL(r.href),a=o.querySelector(c);a&&!i(a)&&(n=a)}catch{}},!0),t.addEventListener(o,"touchmove",e=>{e.target instanceof HTMLElement&&!i(e.target)&&e.preventDefault()},{passive:!1}),t.add(()=>{window.scrollTo(0,window.pageYOffset+l),n&&n.isConnected&&(n.scrollIntoView({block:"nearest"}),n=null)})})}}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function prevent_scroll_l(){return{before({doc:e,d:o}){o.style(e.documentElement,"overflow","hidden")}}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function overflow_store_m(e){let n={};for(let t of e)Object.assign(n,t(n));return n}let overflow_store_a=store_a(()=>new Map,{PUSH(e,n){var o;let t=(o=this.get(e))!=null?o:{doc:e,count:0,d:disposables_o(),meta:new Set};return t.count++,t.meta.add(n),this.set(e,t),this},POP(e,n){let t=this.get(e);return t&&(t.count--,t.meta.delete(n)),this},SCROLL_PREVENT({doc:e,d:n,meta:t}){let o={doc:e,d:n,meta:overflow_store_m(t)},c=[handle_ios_locking_T(),adjust_scrollbar_padding_c(),prevent_scroll_l()];c.forEach(({before:r})=>r==null?void 0:r(o)),c.forEach(({after:r})=>r==null?void 0:r(o))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});overflow_store_a.subscribe(()=>{let e=overflow_store_a.getSnapshot(),n=new Map;for(let[t]of e)n.set(t,t.documentElement.style.overflow);for(let t of e.values()){let o=n.get(t.doc)==="hidden",c=t.count!==0;(c&&!o||!c&&o)&&overflow_store_a.dispatch(t.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",t),t.count===0&&overflow_store_a.dispatch("TEARDOWN",t)}});

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function use_document_overflow_p(e,r,n){let f=use_store_S(overflow_store_a),o=e?f.get(e):void 0,i=o?o.count>0:!1;return use_iso_morphic_effect_l(()=>{if(!(!e||!r))return overflow_store_a.dispatch("PUSH",e,n),()=>overflow_store_a.dispatch("POP",e,n)},[r,e]),i}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-inert.js
let use_inert_u=new Map,use_inert_t=new Map;function use_inert_h(r,l=!0){use_iso_morphic_effect_l(()=>{var o;if(!l)return;let e=typeof r=="function"?r():r.current;if(!e)return;function a(){var d;if(!e)return;let i=(d=use_inert_t.get(e))!=null?d:1;if(i===1?use_inert_t.delete(e):use_inert_t.set(e,i-1),i!==1)return;let n=use_inert_u.get(e);n&&(n["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",n["aria-hidden"]),e.inert=n.inert,use_inert_u.delete(e))}let f=(o=use_inert_t.get(e))!=null?o:0;return use_inert_t.set(e,f+1),f!==0||(use_inert_u.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0),a},[r,l])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-root-containers.js
function use_root_containers_j({defaultContainers:t=[],portals:r,mainTreeNodeRef:u}={}){var c;let o=(0,external_react_.useRef)((c=u==null?void 0:u.current)!=null?c:null),l=use_owner_n(o),f=use_event_o(()=>{var i;let n=[];for(let e of t)e!==null&&(e instanceof HTMLElement?n.push(e):"current"in e&&e.current instanceof HTMLElement&&n.push(e.current));if(r!=null&&r.current)for(let e of r.current)n.push(e);for(let e of(i=l==null?void 0:l.querySelectorAll("html > *, body > *"))!=null?i:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&e.id!=="headlessui-portal-root"&&(e.contains(o.current)||n.some(T=>e.contains(T))||n.push(e));return n});return{resolveContainers:f,contains:use_event_o(n=>f().some(i=>i.contains(n))),mainTreeNodeRef:o,MainTreeNode:(0,external_react_.useMemo)(()=>function(){return u!=null?null:external_react_.createElement(hidden_c,{features:p.Hidden,ref:o})},[o,u])}}function use_root_containers_y(){let t=a(null);return{mainTreeNodeRef:t,MainTreeNode:m(()=>function(){return s.createElement(M,{features:d.Hidden,ref:t})},[t])}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/dialog/dialog.js
var _e=(o=>(o[o.Open=0]="Open",o[o.Closed=1]="Closed",o))(_e||{}),Ie=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Ie||{});let Me={[0](t,e){return t.titleId===e.id?t:{...t,titleId:e.id}}},dialog_I=(0,external_react_.createContext)(null);dialog_I.displayName="DialogContext";function dialog_b(t){let e=(0,external_react_.useContext)(dialog_I);if(e===null){let o=new Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,dialog_b),o}return e}function we(t,e,o=()=>[document.body]){use_document_overflow_p(t,e,i=>{var n;return{containers:[...(n=i.containers)!=null?n:[],o]}})}function Be(t,e){return match_u(e.type,Me,t,e)}let He="div",Ge=S.RenderStrategy|S.Static;function Ne(t,e){var X;let o=I(),{id:i=`headlessui-dialog-${o}`,open:n,onClose:l,initialFocus:s,__demoMode:g=!1,...T}=t,[m,h]=(0,external_react_.useState)(0),a=C();n===void 0&&a!==null&&(n=(a&open_closed_d.Open)===open_closed_d.Open);let D=(0,external_react_.useRef)(null),Q=use_sync_refs_y(D,e),f=use_owner_n(D),N=t.hasOwnProperty("open")||a!==null,U=t.hasOwnProperty("onClose");if(!N&&!U)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!N)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!U)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof n!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n}`);if(typeof l!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`);let p=n?0:1,[S,Z]=(0,external_react_.useReducer)(Be,{titleId:null,descriptionId:null,panelRef:(0,external_react_.createRef)()}),P=use_event_o(()=>l(!1)),W=use_event_o(r=>Z({type:0,id:r})),L=use_server_handoff_complete_l()?g?!1:p===0:!1,F=m>1,Y=(0,external_react_.useContext)(dialog_I)!==null,[ee,te]=portal_ae(),{resolveContainers:M,mainTreeNodeRef:k,MainTreeNode:oe}=use_root_containers_j({portals:ee,defaultContainers:[(X=S.panelRef.current)!=null?X:D.current]}),re=F?"parent":"leaf",$=a!==null?(a&open_closed_d.Closing)===open_closed_d.Closing:!1,ne=(()=>Y||$?!1:L)(),le=(0,external_react_.useCallback)(()=>{var r,c;return(c=Array.from((r=f==null?void 0:f.querySelectorAll("body > *"))!=null?r:[]).find(d=>d.id==="headlessui-portal-root"?!1:d.contains(k.current)&&d instanceof HTMLElement))!=null?c:null},[k]);use_inert_h(le,ne);let ae=(()=>F?!0:L)(),ie=(0,external_react_.useCallback)(()=>{var r,c;return(c=Array.from((r=f==null?void 0:f.querySelectorAll("[data-headlessui-portal]"))!=null?r:[]).find(d=>d.contains(k.current)&&d instanceof HTMLElement))!=null?c:null},[k]);use_inert_h(ie,ae);let se=(()=>!(!L||F))();use_outside_click_h(M,P,se);let pe=(()=>!(F||p!==0))();E(f==null?void 0:f.defaultView,"keydown",r=>{pe&&(r.defaultPrevented||r.key===keyboard_o.Escape&&(r.preventDefault(),r.stopPropagation(),P()))});let de=(()=>!($||p!==0||Y))();we(f,de,M),(0,external_react_.useEffect)(()=>{if(p!==0||!D.current)return;let r=new ResizeObserver(c=>{for(let d of c){let x=d.target.getBoundingClientRect();x.x===0&&x.y===0&&x.width===0&&x.height===0&&P()}});return r.observe(D.current),()=>r.disconnect()},[p,D,P]);let[ue,fe]=description_M(),ge=(0,external_react_.useMemo)(()=>[{dialogState:p,close:P,setTitleId:W},S],[p,S,P,W]),J=(0,external_react_.useMemo)(()=>({open:p===0}),[p]),Te={ref:Q,id:i,role:"dialog","aria-modal":p===0?!0:void 0,"aria-labelledby":S.titleId,"aria-describedby":ue};return external_react_.createElement(stack_context_M,{type:"Dialog",enabled:p===0,element:D,onUpdate:use_event_o((r,c)=>{c==="Dialog"&&match_u(r,{[stack_context_s.Add]:()=>h(d=>d+1),[stack_context_s.Remove]:()=>h(d=>d-1)})})},external_react_.createElement(portal_force_root_P,{force:!0},external_react_.createElement(portal_pe,null,external_react_.createElement(dialog_I.Provider,{value:ge},external_react_.createElement(portal_pe.Group,{target:D},external_react_.createElement(portal_force_root_P,{force:!1},external_react_.createElement(fe,{slot:J,name:"Dialog.Description"},external_react_.createElement(focus_trap_ge,{initialFocus:s,containers:M,features:L?match_u(re,{parent:focus_trap_ge.features.RestoreFocus,leaf:focus_trap_ge.features.All&~focus_trap_ge.features.FocusLock}):focus_trap_ge.features.None},external_react_.createElement(te,null,render_X({ourProps:Te,theirProps:T,slot:J,defaultTag:He,features:Ge,visible:p===0,name:"Dialog"}))))))))),external_react_.createElement(oe,null))}let Ue="div";function We(t,e){let o=I(),{id:i=`headlessui-dialog-overlay-${o}`,...n}=t,[{dialogState:l,close:s}]=dialog_b("Dialog.Overlay"),g=use_sync_refs_y(e),T=use_event_o(a=>{if(a.target===a.currentTarget){if(bugs_r(a.currentTarget))return a.preventDefault();a.preventDefault(),a.stopPropagation(),s()}}),m=(0,external_react_.useMemo)(()=>({open:l===0}),[l]);return render_X({ourProps:{ref:g,id:i,"aria-hidden":!0,onClick:T},theirProps:n,slot:m,defaultTag:Ue,name:"Dialog.Overlay"})}let Ye="div";function $e(t,e){let o=I(),{id:i=`headlessui-dialog-backdrop-${o}`,...n}=t,[{dialogState:l},s]=dialog_b("Dialog.Backdrop"),g=use_sync_refs_y(e);(0,external_react_.useEffect)(()=>{if(s.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[s.panelRef]);let T=(0,external_react_.useMemo)(()=>({open:l===0}),[l]);return external_react_.createElement(portal_force_root_P,{force:!0},external_react_.createElement(portal_pe,null,render_X({ourProps:{ref:g,id:i,"aria-hidden":!0},theirProps:n,slot:T,defaultTag:Ye,name:"Dialog.Backdrop"})))}let Je="div";function Xe(t,e){let o=I(),{id:i=`headlessui-dialog-panel-${o}`,...n}=t,[{dialogState:l},s]=dialog_b("Dialog.Panel"),g=use_sync_refs_y(e,s.panelRef),T=(0,external_react_.useMemo)(()=>({open:l===0}),[l]),m=use_event_o(a=>{a.stopPropagation()});return render_X({ourProps:{ref:g,id:i,onClick:m},theirProps:n,slot:T,defaultTag:Je,name:"Dialog.Panel"})}let je="h2";function Ke(t,e){let o=I(),{id:i=`headlessui-dialog-title-${o}`,...n}=t,[{dialogState:l,setTitleId:s}]=dialog_b("Dialog.Title"),g=use_sync_refs_y(e);(0,external_react_.useEffect)(()=>(s(i),()=>s(null)),[i,s]);let T=(0,external_react_.useMemo)(()=>({open:l===0}),[l]);return render_X({ourProps:{ref:g,id:i},theirProps:n,slot:T,defaultTag:je,name:"Dialog.Title"})}let Ve=D(Ne),qe=D($e),ze=D(Xe),Qe=D(We),Ze=D(Ke),_t=Object.assign(Ve,{Backdrop:qe,Panel:ze,Overlay:Qe,Title:Ze,Description:description_b});


/***/ })

};
;