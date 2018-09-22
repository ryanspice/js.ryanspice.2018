(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["test-0"] = factory();
	else
		root["test-0"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return webpackJsonptest_0([1],{

/***/ "./node_modules/babel-polyfill/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__("./node_modules/core-js/shim.js");

__webpack_require__("./node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js");

__webpack_require__("./node_modules/core-js/fn/regexp/escape.js");

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/fn/regexp/escape.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/core.regexp.escape.js");
module.exports = __webpack_require__("./node_modules/core-js/modules/_core.js").RegExp.escape;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/***/ (function(module, exports, __webpack_require__) {

var cof = __webpack_require__("./node_modules/core-js/modules/_cof.js");
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__("./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__("./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-from-iterable.js":
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__("./node_modules/core-js/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__("./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__("./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__("./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__("./node_modules/core-js/modules/_iobject.js");
var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__("./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__("./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__("./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__("./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__("./node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__("./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__("./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__("./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__("./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__("./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__("./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__("./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__("./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__("./node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__("./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__("./node_modules/core-js/modules/_classof.js");
var from = __webpack_require__("./node_modules/core-js/modules/_array-from-iterable.js");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__("./node_modules/core-js/modules/_redefine-all.js");
var getWeak = __webpack_require__("./node_modules/core-js/modules/_meta.js").getWeak;
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__("./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__("./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__("./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__("./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__("./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__("./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__("./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__("./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__("./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__("./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__("./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__("./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__("./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__("./node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-iso-string.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__("./node_modules/core-js/modules/_fails.js");
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-primitive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/modules/_to-primitive.js");
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__("./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__("./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__("./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
var core = __webpack_require__("./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__("./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__("./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__("./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__("./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__("./node_modules/core-js/modules/_redefine.js");
var fails = __webpack_require__("./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__("./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__("./node_modules/core-js/modules/_wks.js");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flatten-into-array.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__("./node_modules/core-js/modules/_is-array.js");
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");
var ctx = __webpack_require__("./node_modules/core-js/modules/_ctx.js");
var IS_CONCAT_SPREADABLE = __webpack_require__("./node_modules/core-js/modules/_wks.js")('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__("./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__("./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__("./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__("./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__("./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__("./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__("./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__("./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__("./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__("./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__("./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__("./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__("./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__("./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__("./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__("./node_modules/core-js/modules/_has.js");
var Iterators = __webpack_require__("./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__("./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__("./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__("./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-fround.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__("./node_modules/core-js/modules/_math-sign.js");
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-scale.js":
/***/ (function(module, exports) {

// https://rwaldron.github.io/proposal-math-extensions/
module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (
    arguments.length === 0
      // eslint-disable-next-line no-self-compare
      || x != x
      // eslint-disable-next-line no-self-compare
      || inLow != inLow
      // eslint-disable-next-line no-self-compare
      || inHigh != inHigh
      // eslint-disable-next-line no-self-compare
      || outLow != outLow
      // eslint-disable-next-line no-self-compare
      || outHigh != outHigh
  ) return NaN;
  if (x === Infinity || x === -Infinity) return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__("./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__("./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_metadata.js":
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__("./node_modules/core-js/modules/es6.map.js");
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var shared = __webpack_require__("./node_modules/core-js/modules/_shared.js")('metadata');
var store = shared.store || (shared.store = new (__webpack_require__("./node_modules/core-js/modules/es6.weak-map.js"))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
var macrotask = __webpack_require__("./node_modules/core-js/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("./node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("./node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__("./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__("./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__("./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__("./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__("./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__("./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__("./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__("./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__("./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__("./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-forced-pam.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Forced replacement prototype accessors methods
module.exports = __webpack_require__("./node_modules/core-js/modules/_library.js") || !__webpack_require__("./node_modules/core-js/modules/_fails.js")(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () { /* empty */ });
  delete __webpack_require__("./node_modules/core-js/modules/_global.js")[K];
});


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__("./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__("./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__("./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js");
var gOPN = __webpack_require__("./node_modules/core-js/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__("./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__("./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__("./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__("./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__("./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var core = __webpack_require__("./node_modules/core-js/modules/_core.js");
var fails = __webpack_require__("./node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__("./node_modules/core-js/modules/_object-keys.js");
var toIObject = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js");
var isEnum = __webpack_require__("./node_modules/core-js/modules/_object-pie.js").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__("./node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__("./node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var Reflect = __webpack_require__("./node_modules/core-js/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-float.js":
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__("./node_modules/core-js/modules/_global.js").parseFloat;
var $trim = __webpack_require__("./node_modules/core-js/modules/_string-trim.js").trim;

module.exports = 1 / $parseFloat(__webpack_require__("./node_modules/core-js/modules/_string-ws.js") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-int.js":
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__("./node_modules/core-js/modules/_global.js").parseInt;
var $trim = __webpack_require__("./node_modules/core-js/modules/_string-trim.js").trim;
var ws = __webpack_require__("./node_modules/core-js/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__("./node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__("./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__("./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__("./node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_replacer.js":
/***/ (function(module, exports) {

module.exports = function (regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-collection-from.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__("./node_modules/core-js/modules/_a-function.js");
var ctx = __webpack_require__("./node_modules/core-js/modules/_ctx.js");
var forOf = __webpack_require__("./node_modules/core-js/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-collection-of.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__("./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__("./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__("./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__("./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__("./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__("./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__("./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__("./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("./node_modules/core-js/modules/_fails.js");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__("./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("./node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__("./node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var fails = __webpack_require__("./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__("./node_modules/core-js/modules/_defined.js");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");
var repeat = __webpack_require__("./node_modules/core-js/modules/_string-repeat.js");
var defined = __webpack_require__("./node_modules/core-js/modules/_defined.js");

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__("./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__("./node_modules/core-js/modules/_defined.js");

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var defined = __webpack_require__("./node_modules/core-js/modules/_defined.js");
var fails = __webpack_require__("./node_modules/core-js/modules/_fails.js");
var spaces = __webpack_require__("./node_modules/core-js/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("./node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__("./node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__("./node_modules/core-js/modules/_html.js");
var cel = __webpack_require__("./node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("./node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-index.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__("./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__("./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_typed-array.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__("./node_modules/core-js/modules/_descriptors.js")) {
  var LIBRARY = __webpack_require__("./node_modules/core-js/modules/_library.js");
  var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
  var fails = __webpack_require__("./node_modules/core-js/modules/_fails.js");
  var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
  var $typed = __webpack_require__("./node_modules/core-js/modules/_typed.js");
  var $buffer = __webpack_require__("./node_modules/core-js/modules/_typed-buffer.js");
  var ctx = __webpack_require__("./node_modules/core-js/modules/_ctx.js");
  var anInstance = __webpack_require__("./node_modules/core-js/modules/_an-instance.js");
  var propertyDesc = __webpack_require__("./node_modules/core-js/modules/_property-desc.js");
  var hide = __webpack_require__("./node_modules/core-js/modules/_hide.js");
  var redefineAll = __webpack_require__("./node_modules/core-js/modules/_redefine-all.js");
  var toInteger = __webpack_require__("./node_modules/core-js/modules/_to-integer.js");
  var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");
  var toIndex = __webpack_require__("./node_modules/core-js/modules/_to-index.js");
  var toAbsoluteIndex = __webpack_require__("./node_modules/core-js/modules/_to-absolute-index.js");
  var toPrimitive = __webpack_require__("./node_modules/core-js/modules/_to-primitive.js");
  var has = __webpack_require__("./node_modules/core-js/modules/_has.js");
  var classof = __webpack_require__("./node_modules/core-js/modules/_classof.js");
  var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
  var toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js");
  var isArrayIter = __webpack_require__("./node_modules/core-js/modules/_is-array-iter.js");
  var create = __webpack_require__("./node_modules/core-js/modules/_object-create.js");
  var getPrototypeOf = __webpack_require__("./node_modules/core-js/modules/_object-gpo.js");
  var gOPN = __webpack_require__("./node_modules/core-js/modules/_object-gopn.js").f;
  var getIterFn = __webpack_require__("./node_modules/core-js/modules/core.get-iterator-method.js");
  var uid = __webpack_require__("./node_modules/core-js/modules/_uid.js");
  var wks = __webpack_require__("./node_modules/core-js/modules/_wks.js");
  var createArrayMethod = __webpack_require__("./node_modules/core-js/modules/_array-methods.js");
  var createArrayIncludes = __webpack_require__("./node_modules/core-js/modules/_array-includes.js");
  var speciesConstructor = __webpack_require__("./node_modules/core-js/modules/_species-constructor.js");
  var ArrayIterators = __webpack_require__("./node_modules/core-js/modules/es6.array.iterator.js");
  var Iterators = __webpack_require__("./node_modules/core-js/modules/_iterators.js");
  var $iterDetect = __webpack_require__("./node_modules/core-js/modules/_iter-detect.js");
  var setSpecies = __webpack_require__("./node_modules/core-js/modules/_set-species.js");
  var arrayFill = __webpack_require__("./node_modules/core-js/modules/_array-fill.js");
  var arrayCopyWithin = __webpack_require__("./node_modules/core-js/modules/_array-copy-within.js");
  var $DP = __webpack_require__("./node_modules/core-js/modules/_object-dp.js");
  var $GOPD = __webpack_require__("./node_modules/core-js/modules/_object-gopd.js");
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/modules/_descriptors.js");
var LIBRARY = __webpack_require__("./node_modules/core-js/modules/_library.js");
var $typed = __webpack_require__("./node_modules/core-js/modules/_typed.js");
var hide = __webpack_require__("./node_modules/core-js/modules/_hide.js");
var redefineAll = __webpack_require__("./node_modules/core-js/modules/_redefine-all.js");
var fails = __webpack_require__("./node_modules/core-js/modules/_fails.js");
var anInstance = __webpack_require__("./node_modules/core-js/modules/_an-instance.js");
var toInteger = __webpack_require__("./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");
var toIndex = __webpack_require__("./node_modules/core-js/modules/_to-index.js");
var gOPN = __webpack_require__("./node_modules/core-js/modules/_object-gopn.js").f;
var dP = __webpack_require__("./node_modules/core-js/modules/_object-dp.js").f;
var arrayFill = __webpack_require__("./node_modules/core-js/modules/_array-fill.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/modules/_set-to-string-tag.js");
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),

/***/ "./node_modules/core-js/modules/_typed.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__("./node_modules/core-js/modules/_hide.js");
var uid = __webpack_require__("./node_modules/core-js/modules/_uid.js");
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
var core = __webpack_require__("./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__("./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__("./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = __webpack_require__("./node_modules/core-js/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__("./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__("./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__("./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__("./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__("./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/core.regexp.escape.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/benjamingr/RexExp.escape
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $re = __webpack_require__("./node_modules/core-js/modules/_replacer.js")(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { copyWithin: __webpack_require__("./node_modules/core-js/modules/_array-copy-within.js") });

__webpack_require__("./node_modules/core-js/modules/_add-to-unscopables.js")('copyWithin');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $every = __webpack_require__("./node_modules/core-js/modules/_array-methods.js")(4);

$export($export.P + $export.F * !__webpack_require__("./node_modules/core-js/modules/_strict-method.js")([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { fill: __webpack_require__("./node_modules/core-js/modules/_array-fill.js") });

__webpack_require__("./node_modules/core-js/modules/_add-to-unscopables.js")('fill');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $filter = __webpack_require__("./node_modules/core-js/modules/_array-methods.js")(2);

$export($export.P + $export.F * !__webpack_require__("./node_modules/core-js/modules/_strict-method.js")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__("./node_modules/core-js/modules/_array-methods.js")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__("./node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $forEach = __webpack_require__("./node_modules/core-js/modules/_array-methods.js")(0);
var STRICT = __webpack_require__("./node_modules/core-js/modules/_strict-method.js")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("./node_modules/core-js/modules/_ctx.js");
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js");
var call = __webpack_require__("./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__("./node_modules/core-js/modules/_is-array-iter.js");
var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");
var createProperty = __webpack_require__("./node_modules/core-js/modules/_create-property.js");
var getIterFn = __webpack_require__("./node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__("./node_modules/core-js/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $indexOf = __webpack_require__("./node_modules/core-js/modules/_array-includes.js")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__("./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__("./node_modules/core-js/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__("./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__("./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js");
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__("./node_modules/core-js/modules/_iobject.js") != Object || !__webpack_require__("./node_modules/core-js/modules/_strict-method.js")(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js");
var toInteger = __webpack_require__("./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__("./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $map = __webpack_require__("./node_modules/core-js/modules/_array-methods.js")(1);

$export($export.P + $export.F * !__webpack_require__("./node_modules/core-js/modules/_strict-method.js")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var createProperty = __webpack_require__("./node_modules/core-js/modules/_create-property.js");

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__("./node_modules/core-js/modules/_fails.js")(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__("./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__("./node_modules/core-js/modules/_strict-method.js")([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__("./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__("./node_modules/core-js/modules/_strict-method.js")([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var html = __webpack_require__("./node_modules/core-js/modules/_html.js");
var cof = __webpack_require__("./node_modules/core-js/modules/_cof.js");
var toAbsoluteIndex = __webpack_require__("./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__("./node_modules/core-js/modules/_fails.js")(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $some = __webpack_require__("./node_modules/core-js/modules/_array-methods.js")(3);

$export($export.P + $export.F * !__webpack_require__("./node_modules/core-js/modules/_strict-method.js")([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__("./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js");
var fails = __webpack_require__("./node_modules/core-js/modules/_fails.js");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__("./node_modules/core-js/modules/_strict-method.js")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/_set-species.js")('Array');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-iso-string.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var toISOString = __webpack_require__("./node_modules/core-js/modules/_date-to-iso-string.js");

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/modules/_to-primitive.js");

$export($export.P + $export.F * __webpack_require__("./node_modules/core-js/modules/_fails.js")(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-primitive.js":
/***/ (function(module, exports, __webpack_require__) {

var TO_PRIMITIVE = __webpack_require__("./node_modules/core-js/modules/_wks.js")('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__("./node_modules/core-js/modules/_hide.js")(proto, TO_PRIMITIVE, __webpack_require__("./node_modules/core-js/modules/_date-to-primitive.js"));


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__("./node_modules/core-js/modules/_redefine.js")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.P, 'Function', { bind: __webpack_require__("./node_modules/core-js/modules/_bind.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.has-instance.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
var getPrototypeOf = __webpack_require__("./node_modules/core-js/modules/_object-gpo.js");
var HAS_INSTANCE = __webpack_require__("./node_modules/core-js/modules/_wks.js")('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__("./node_modules/core-js/modules/_object-dp.js").f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("./node_modules/core-js/modules/_object-dp.js").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__("./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__("./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.acosh.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var log1p = __webpack_require__("./node_modules/core-js/modules/_math-log1p.js");
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.asinh.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cbrt.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var sign = __webpack_require__("./node_modules/core-js/modules/_math-sign.js");

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.clz32.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cosh.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.expm1.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $expm1 = __webpack_require__("./node_modules/core-js/modules/_math-expm1.js");

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.fround.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { fround: __webpack_require__("./node_modules/core-js/modules/_math-fround.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.imul.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__("./node_modules/core-js/modules/_fails.js")(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log10.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log1p.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { log1p: __webpack_require__("./node_modules/core-js/modules/_math-log1p.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log2.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sign.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { sign: __webpack_require__("./node_modules/core-js/modules/_math-sign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sinh.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__("./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__("./node_modules/core-js/modules/_fails.js")(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.tanh.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__("./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.trunc.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
var has = __webpack_require__("./node_modules/core-js/modules/_has.js");
var cof = __webpack_require__("./node_modules/core-js/modules/_cof.js");
var inheritIfRequired = __webpack_require__("./node_modules/core-js/modules/_inherit-if-required.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/modules/_to-primitive.js");
var fails = __webpack_require__("./node_modules/core-js/modules/_fails.js");
var gOPN = __webpack_require__("./node_modules/core-js/modules/_object-gopn.js").f;
var gOPD = __webpack_require__("./node_modules/core-js/modules/_object-gopd.js").f;
var dP = __webpack_require__("./node_modules/core-js/modules/_object-dp.js").f;
var $trim = __webpack_require__("./node_modules/core-js/modules/_string-trim.js").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("./node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("./node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("./node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.epsilon.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-finite.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var _isFinite = __webpack_require__("./node_modules/core-js/modules/_global.js").isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { isInteger: __webpack_require__("./node_modules/core-js/modules/_is-integer.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var isInteger = __webpack_require__("./node_modules/core-js/modules/_is-integer.js");
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-float.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__("./node_modules/core-js/modules/_parse-float.js");
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__("./node_modules/core-js/modules/_parse-int.js");
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var toInteger = __webpack_require__("./node_modules/core-js/modules/_to-integer.js");
var aNumberValue = __webpack_require__("./node_modules/core-js/modules/_a-number-value.js");
var repeat = __webpack_require__("./node_modules/core-js/modules/_string-repeat.js");
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__("./node_modules/core-js/modules/_fails.js")(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-precision.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $fails = __webpack_require__("./node_modules/core-js/modules/_fails.js");
var aNumberValue = __webpack_require__("./node_modules/core-js/modules/_a-number-value.js");
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("./node_modules/core-js/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("./node_modules/core-js/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__("./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__("./node_modules/core-js/modules/_object-dps.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__("./node_modules/core-js/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__("./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__("./node_modules/core-js/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__("./node_modules/core-js/modules/_object-gopd.js").f;

__webpack_require__("./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__("./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyNames', function () {
  return __webpack_require__("./node_modules/core-js/modules/_object-gopn-ext.js").f;
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__("./node_modules/core-js/modules/_object-gpo.js");

__webpack_require__("./node_modules/core-js/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");

__webpack_require__("./node_modules/core-js/modules/_object-sap.js")('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");

__webpack_require__("./node_modules/core-js/modules/_object-sap.js")('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");

__webpack_require__("./node_modules/core-js/modules/_object-sap.js")('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { is: __webpack_require__("./node_modules/core-js/modules/_same-value.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__("./node_modules/core-js/modules/_object-keys.js");

__webpack_require__("./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__("./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__("./node_modules/core-js/modules/_object-sap.js")('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__("./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__("./node_modules/core-js/modules/_object-sap.js")('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__("./node_modules/core-js/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__("./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__("./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__("./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-float.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__("./node_modules/core-js/modules/_parse-float.js");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__("./node_modules/core-js/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("./node_modules/core-js/modules/_library.js");
var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__("./node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__("./node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__("./node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__("./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__("./node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__("./node_modules/core-js/modules/_species-constructor.js");
var task = __webpack_require__("./node_modules/core-js/modules/_task.js").set;
var microtask = __webpack_require__("./node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__("./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__("./node_modules/core-js/modules/_perform.js");
var promiseResolve = __webpack_require__("./node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("./node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__("./node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__("./node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__("./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var rApply = (__webpack_require__("./node_modules/core-js/modules/_global.js").Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__("./node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var create = __webpack_require__("./node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__("./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__("./node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__("./node_modules/core-js/modules/_bind.js");
var rConstruct = (__webpack_require__("./node_modules/core-js/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__("./node_modules/core-js/modules/_object-dp.js");
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/modules/_to-primitive.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__("./node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var gOPD = __webpack_require__("./node_modules/core-js/modules/_object-gopd.js").f;
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__("./node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__("./node_modules/core-js/modules/_object-gopd.js");
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var getProto = __webpack_require__("./node_modules/core-js/modules/_object-gpo.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__("./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__("./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__("./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', { ownKeys: __webpack_require__("./node_modules/core-js/modules/_own-keys.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var setProto = __webpack_require__("./node_modules/core-js/modules/_set-proto.js");

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__("./node_modules/core-js/modules/_object-dp.js");
var gOPD = __webpack_require__("./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__("./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__("./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var createDesc = __webpack_require__("./node_modules/core-js/modules/_property-desc.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
    existingDescriptor.value = V;
    dP.f(receiver, propertyKey, existingDescriptor);
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
var inheritIfRequired = __webpack_require__("./node_modules/core-js/modules/_inherit-if-required.js");
var dP = __webpack_require__("./node_modules/core-js/modules/_object-dp.js").f;
var gOPN = __webpack_require__("./node_modules/core-js/modules/_object-gopn.js").f;
var isRegExp = __webpack_require__("./node_modules/core-js/modules/_is-regexp.js");
var $flags = __webpack_require__("./node_modules/core-js/modules/_flags.js");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__("./node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__("./node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__("./node_modules/core-js/modules/_wks.js")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__("./node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}

__webpack_require__("./node_modules/core-js/modules/_set-species.js")('RegExp');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__("./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__("./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__("./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__("./node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__("./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__("./node_modules/core-js/modules/_is-regexp.js");
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__("./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__("./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__("./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.anchor.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.big.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.blink.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.bold.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.code-point-at.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $at = __webpack_require__("./node_modules/core-js/modules/_string-at.js")(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__("./node_modules/core-js/modules/_string-context.js");
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__("./node_modules/core-js/modules/_fails-is-regexp.js")(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fixed.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontcolor.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontsize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.from-code-point.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var toAbsoluteIndex = __webpack_require__("./node_modules/core-js/modules/_to-absolute-index.js");
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var context = __webpack_require__("./node_modules/core-js/modules/_string-context.js");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.raw.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.repeat.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__("./node_modules/core-js/modules/_string-repeat.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.small.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__("./node_modules/core-js/modules/_string-context.js");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__("./node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.strike.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sup.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__("./node_modules/core-js/modules/_string-html.js")('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.trim.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__("./node_modules/core-js/modules/_string-trim.js")('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
var has = __webpack_require__("./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__("./node_modules/core-js/modules/_redefine.js");
var META = __webpack_require__("./node_modules/core-js/modules/_meta.js").KEY;
var $fails = __webpack_require__("./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__("./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__("./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__("./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__("./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__("./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__("./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__("./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
var toIObject = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__("./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__("./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__("./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__("./node_modules/core-js/modules/_object-gopd.js");
var $DP = __webpack_require__("./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__("./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__("./node_modules/core-js/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $typed = __webpack_require__("./node_modules/core-js/modules/_typed.js");
var buffer = __webpack_require__("./node_modules/core-js/modules/_typed-buffer.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var toAbsoluteIndex = __webpack_require__("./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
var ArrayBuffer = __webpack_require__("./node_modules/core-js/modules/_global.js").ArrayBuffer;
var speciesConstructor = __webpack_require__("./node_modules/core-js/modules/_species-constructor.js");
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__("./node_modules/core-js/modules/_fails.js")(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var final = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < final) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__("./node_modules/core-js/modules/_set-species.js")(ARRAY_BUFFER);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.data-view.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
$export($export.G + $export.W + $export.F * !__webpack_require__("./node_modules/core-js/modules/_typed.js").ABV, {
  DataView: __webpack_require__("./node_modules/core-js/modules/_typed-buffer.js").DataView
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/_typed-array.js")('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float64-array.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/_typed-array.js")('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int16-array.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/_typed-array.js")('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int32-array.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/_typed-array.js")('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int8-array.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/_typed-array.js")('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint16-array.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/_typed-array.js")('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint32-array.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/_typed-array.js")('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-array.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each = __webpack_require__("./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__("./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__("./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__("./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__("./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__("./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__("./node_modules/core-js/modules/_fails.js");
var validate = __webpack_require__("./node_modules/core-js/modules/_validate-collection.js");
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__("./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-set.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__("./node_modules/core-js/modules/_collection-weak.js");
var validate = __webpack_require__("./node_modules/core-js/modules/_validate-collection.js");
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__("./node_modules/core-js/modules/_collection.js")(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flat-map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var flattenIntoArray = __webpack_require__("./node_modules/core-js/modules/_flatten-into-array.js");
var toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");
var aFunction = __webpack_require__("./node_modules/core-js/modules/_a-function.js");
var arraySpeciesCreate = __webpack_require__("./node_modules/core-js/modules/_array-species-create.js");

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__("./node_modules/core-js/modules/_add-to-unscopables.js")('flatMap');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flatten.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var flattenIntoArray = __webpack_require__("./node_modules/core-js/modules/_flatten-into-array.js");
var toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__("./node_modules/core-js/modules/_to-integer.js");
var arraySpeciesCreate = __webpack_require__("./node_modules/core-js/modules/_array-species-create.js");

$export($export.P, 'Array', {
  flatten: function flatten(/* depthArg = 1 */) {
    var depthArg = arguments[0];
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

__webpack_require__("./node_modules/core-js/modules/_add-to-unscopables.js")('flatten');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $includes = __webpack_require__("./node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("./node_modules/core-js/modules/_add-to-unscopables.js")('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.asap.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var microtask = __webpack_require__("./node_modules/core-js/modules/_microtask.js")();
var process = __webpack_require__("./node_modules/core-js/modules/_global.js").process;
var isNode = __webpack_require__("./node_modules/core-js/modules/_cof.js")(process) == 'process';

$export($export.G, {
  asap: function asap(fn) {
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.error.is-error.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/ljharb/proposal-is-error
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var cof = __webpack_require__("./node_modules/core-js/modules/_cof.js");

$export($export.S, 'Error', {
  isError: function isError(it) {
    return cof(it) === 'Error';
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.global.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.G, { global: __webpack_require__("./node_modules/core-js/modules/_global.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.map.from.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__("./node_modules/core-js/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.map.of.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__("./node_modules/core-js/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.map.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__("./node_modules/core-js/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.clamp.js":
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.deg-per-rad.js":
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.degrees.js":
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var RAD_PER_DEG = 180 / Math.PI;

$export($export.S, 'Math', {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.fscale.js":
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var scale = __webpack_require__("./node_modules/core-js/modules/_math-scale.js");
var fround = __webpack_require__("./node_modules/core-js/modules/_math-fround.js");

$export($export.S, 'Math', {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround(scale(x, inLow, inHigh, outLow, outHigh));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.iaddh.js":
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.imulh.js":
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.isubh.js":
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.rad-per-deg.js":
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.radians.js":
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var DEG_PER_RAD = Math.PI / 180;

$export($export.S, 'Math', {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.scale.js":
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { scale: __webpack_require__("./node_modules/core-js/modules/_math-scale.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.signbit.js":
/***/ (function(module, exports, __webpack_require__) {

// http://jfbastien.github.io/papers/Math.signbit.html
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { signbit: function signbit(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.umulh.js":
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.define-getter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js");
var aFunction = __webpack_require__("./node_modules/core-js/modules/_a-function.js");
var $defineProperty = __webpack_require__("./node_modules/core-js/modules/_object-dp.js");

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
__webpack_require__("./node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__("./node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.define-setter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js");
var aFunction = __webpack_require__("./node_modules/core-js/modules/_a-function.js");
var $defineProperty = __webpack_require__("./node_modules/core-js/modules/_object-dp.js");

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
__webpack_require__("./node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__("./node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $entries = __webpack_require__("./node_modules/core-js/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var ownKeys = __webpack_require__("./node_modules/core-js/modules/_own-keys.js");
var toIObject = __webpack_require__("./node_modules/core-js/modules/_to-iobject.js");
var gOPD = __webpack_require__("./node_modules/core-js/modules/_object-gopd.js");
var createProperty = __webpack_require__("./node_modules/core-js/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.lookup-getter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/modules/_to-primitive.js");
var getPrototypeOf = __webpack_require__("./node_modules/core-js/modules/_object-gpo.js");
var getOwnPropertyDescriptor = __webpack_require__("./node_modules/core-js/modules/_object-gopd.js").f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
__webpack_require__("./node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__("./node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.lookup-setter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__("./node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/modules/_to-primitive.js");
var getPrototypeOf = __webpack_require__("./node_modules/core-js/modules/_object-gpo.js");
var getOwnPropertyDescriptor = __webpack_require__("./node_modules/core-js/modules/_object-gopd.js").f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
__webpack_require__("./node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__("./node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $values = __webpack_require__("./node_modules/core-js/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.observable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/zenparsing/es-observable
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
var core = __webpack_require__("./node_modules/core-js/modules/_core.js");
var microtask = __webpack_require__("./node_modules/core-js/modules/_microtask.js")();
var OBSERVABLE = __webpack_require__("./node_modules/core-js/modules/_wks.js")('observable');
var aFunction = __webpack_require__("./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var anInstance = __webpack_require__("./node_modules/core-js/modules/_an-instance.js");
var redefineAll = __webpack_require__("./node_modules/core-js/modules/_redefine-all.js");
var hide = __webpack_require__("./node_modules/core-js/modules/_hide.js");
var forOf = __webpack_require__("./node_modules/core-js/modules/_for-of.js");
var RETURN = forOf.RETURN;

var getMethod = function (fn) {
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function (subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function (subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function (subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function (observer, subscriber) {
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  } if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() { closeSubscription(this); }
});

var SubscriptionObserver = function (subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (core.Promise || global.Promise)(function (resolve, reject) {
      aFunction(fn);
      var subscription = that.subscribe({
        next: function (value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          try {
            if (forOf(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done) return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function () { return this; });

$export($export.G, { Observable: $Observable });

__webpack_require__("./node_modules/core-js/modules/_set-species.js")('Observable');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var core = __webpack_require__("./node_modules/core-js/modules/_core.js");
var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
var speciesConstructor = __webpack_require__("./node_modules/core-js/modules/_species-constructor.js");
var promiseResolve = __webpack_require__("./node_modules/core-js/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.try.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var newPromiseCapability = __webpack_require__("./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__("./node_modules/core-js/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.define-metadata.js":
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__("./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__("./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__("./node_modules/core-js/modules/es6.set.js");
var from = __webpack_require__("./node_modules/core-js/modules/_array-from-iterable.js");
var metadata = __webpack_require__("./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__("./node_modules/core-js/modules/_object-gpo.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata.js":
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__("./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__("./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__("./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__("./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-metadata.js":
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__("./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__("./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__("./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.metadata.js":
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__("./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__("./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__("./node_modules/core-js/modules/_a-function.js");
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.set.from.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__("./node_modules/core-js/modules/_set-collection-from.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.set.of.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__("./node_modules/core-js/modules/_set-collection-of.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.set.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__("./node_modules/core-js/modules/_collection-to-json.js")('Set') });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.at.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/mathiasbynens/String.prototype.at
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $at = __webpack_require__("./node_modules/core-js/modules/_string-at.js")(true);

$export($export.P, 'String', {
  at: function at(pos) {
    return $at(this, pos);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.match-all.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/String.prototype.matchAll/
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var defined = __webpack_require__("./node_modules/core-js/modules/_defined.js");
var toLength = __webpack_require__("./node_modules/core-js/modules/_to-length.js");
var isRegExp = __webpack_require__("./node_modules/core-js/modules/_is-regexp.js");
var getFlags = __webpack_require__("./node_modules/core-js/modules/_flags.js");
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function (regexp, string) {
  this._r = regexp;
  this._s = string;
};

__webpack_require__("./node_modules/core-js/modules/_iter-create.js")($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-end.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__("./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__("./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__("./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__("./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-left.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__("./node_modules/core-js/modules/_string-trim.js")('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-right.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__("./node_modules/core-js/modules/_string-trim.js")('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.observable.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.system.global.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");

$export($export.S, 'System', { global: __webpack_require__("./node_modules/core-js/modules/_global.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-map.from.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__("./node_modules/core-js/modules/_set-collection-from.js")('WeakMap');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-map.of.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__("./node_modules/core-js/modules/_set-collection-of.js")('WeakMap');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-set.from.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
__webpack_require__("./node_modules/core-js/modules/_set-collection-from.js")('WeakSet');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-set.of.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
__webpack_require__("./node_modules/core-js/modules/_set-collection-of.js")('WeakSet');


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__("./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__("./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__("./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__("./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__("./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var $task = __webpack_require__("./node_modules/core-js/modules/_task.js");
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__("./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__("./node_modules/core-js/modules/_export.js");
var userAgent = __webpack_require__("./node_modules/core-js/modules/_user-agent.js");
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "./node_modules/core-js/shim.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/modules/es6.symbol.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.create.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.define-property.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.define-properties.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.get-prototype-of.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.keys.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.get-own-property-names.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.freeze.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.seal.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.prevent-extensions.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.is-frozen.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.is-sealed.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.is-extensible.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.assign.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.is.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.set-prototype-of.js");
__webpack_require__("./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/modules/es6.function.bind.js");
__webpack_require__("./node_modules/core-js/modules/es6.function.name.js");
__webpack_require__("./node_modules/core-js/modules/es6.function.has-instance.js");
__webpack_require__("./node_modules/core-js/modules/es6.parse-int.js");
__webpack_require__("./node_modules/core-js/modules/es6.parse-float.js");
__webpack_require__("./node_modules/core-js/modules/es6.number.constructor.js");
__webpack_require__("./node_modules/core-js/modules/es6.number.to-fixed.js");
__webpack_require__("./node_modules/core-js/modules/es6.number.to-precision.js");
__webpack_require__("./node_modules/core-js/modules/es6.number.epsilon.js");
__webpack_require__("./node_modules/core-js/modules/es6.number.is-finite.js");
__webpack_require__("./node_modules/core-js/modules/es6.number.is-integer.js");
__webpack_require__("./node_modules/core-js/modules/es6.number.is-nan.js");
__webpack_require__("./node_modules/core-js/modules/es6.number.is-safe-integer.js");
__webpack_require__("./node_modules/core-js/modules/es6.number.max-safe-integer.js");
__webpack_require__("./node_modules/core-js/modules/es6.number.min-safe-integer.js");
__webpack_require__("./node_modules/core-js/modules/es6.number.parse-float.js");
__webpack_require__("./node_modules/core-js/modules/es6.number.parse-int.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.acosh.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.asinh.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.atanh.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.cbrt.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.clz32.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.cosh.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.expm1.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.fround.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.hypot.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.imul.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.log10.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.log1p.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.log2.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.sign.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.sinh.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.tanh.js");
__webpack_require__("./node_modules/core-js/modules/es6.math.trunc.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.from-code-point.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.raw.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.trim.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.code-point-at.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.ends-with.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.includes.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.repeat.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.starts-with.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.anchor.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.big.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.blink.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.bold.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.fixed.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.fontcolor.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.fontsize.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.italics.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.link.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.small.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.strike.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.sub.js");
__webpack_require__("./node_modules/core-js/modules/es6.string.sup.js");
__webpack_require__("./node_modules/core-js/modules/es6.date.now.js");
__webpack_require__("./node_modules/core-js/modules/es6.date.to-json.js");
__webpack_require__("./node_modules/core-js/modules/es6.date.to-iso-string.js");
__webpack_require__("./node_modules/core-js/modules/es6.date.to-string.js");
__webpack_require__("./node_modules/core-js/modules/es6.date.to-primitive.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.is-array.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.from.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.of.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.join.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.slice.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.sort.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.for-each.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.map.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.filter.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.some.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.every.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.reduce.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.reduce-right.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.index-of.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.last-index-of.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.copy-within.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.fill.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.find.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.find-index.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.species.js");
__webpack_require__("./node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__("./node_modules/core-js/modules/es6.regexp.constructor.js");
__webpack_require__("./node_modules/core-js/modules/es6.regexp.to-string.js");
__webpack_require__("./node_modules/core-js/modules/es6.regexp.flags.js");
__webpack_require__("./node_modules/core-js/modules/es6.regexp.match.js");
__webpack_require__("./node_modules/core-js/modules/es6.regexp.replace.js");
__webpack_require__("./node_modules/core-js/modules/es6.regexp.search.js");
__webpack_require__("./node_modules/core-js/modules/es6.regexp.split.js");
__webpack_require__("./node_modules/core-js/modules/es6.promise.js");
__webpack_require__("./node_modules/core-js/modules/es6.map.js");
__webpack_require__("./node_modules/core-js/modules/es6.set.js");
__webpack_require__("./node_modules/core-js/modules/es6.weak-map.js");
__webpack_require__("./node_modules/core-js/modules/es6.weak-set.js");
__webpack_require__("./node_modules/core-js/modules/es6.typed.array-buffer.js");
__webpack_require__("./node_modules/core-js/modules/es6.typed.data-view.js");
__webpack_require__("./node_modules/core-js/modules/es6.typed.int8-array.js");
__webpack_require__("./node_modules/core-js/modules/es6.typed.uint8-array.js");
__webpack_require__("./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js");
__webpack_require__("./node_modules/core-js/modules/es6.typed.int16-array.js");
__webpack_require__("./node_modules/core-js/modules/es6.typed.uint16-array.js");
__webpack_require__("./node_modules/core-js/modules/es6.typed.int32-array.js");
__webpack_require__("./node_modules/core-js/modules/es6.typed.uint32-array.js");
__webpack_require__("./node_modules/core-js/modules/es6.typed.float32-array.js");
__webpack_require__("./node_modules/core-js/modules/es6.typed.float64-array.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.apply.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.define-property.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.delete-property.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.enumerate.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.has.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.is-extensible.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.own-keys.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.set.js");
__webpack_require__("./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
__webpack_require__("./node_modules/core-js/modules/es7.array.includes.js");
__webpack_require__("./node_modules/core-js/modules/es7.array.flat-map.js");
__webpack_require__("./node_modules/core-js/modules/es7.array.flatten.js");
__webpack_require__("./node_modules/core-js/modules/es7.string.at.js");
__webpack_require__("./node_modules/core-js/modules/es7.string.pad-start.js");
__webpack_require__("./node_modules/core-js/modules/es7.string.pad-end.js");
__webpack_require__("./node_modules/core-js/modules/es7.string.trim-left.js");
__webpack_require__("./node_modules/core-js/modules/es7.string.trim-right.js");
__webpack_require__("./node_modules/core-js/modules/es7.string.match-all.js");
__webpack_require__("./node_modules/core-js/modules/es7.symbol.async-iterator.js");
__webpack_require__("./node_modules/core-js/modules/es7.symbol.observable.js");
__webpack_require__("./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
__webpack_require__("./node_modules/core-js/modules/es7.object.values.js");
__webpack_require__("./node_modules/core-js/modules/es7.object.entries.js");
__webpack_require__("./node_modules/core-js/modules/es7.object.define-getter.js");
__webpack_require__("./node_modules/core-js/modules/es7.object.define-setter.js");
__webpack_require__("./node_modules/core-js/modules/es7.object.lookup-getter.js");
__webpack_require__("./node_modules/core-js/modules/es7.object.lookup-setter.js");
__webpack_require__("./node_modules/core-js/modules/es7.map.to-json.js");
__webpack_require__("./node_modules/core-js/modules/es7.set.to-json.js");
__webpack_require__("./node_modules/core-js/modules/es7.map.of.js");
__webpack_require__("./node_modules/core-js/modules/es7.set.of.js");
__webpack_require__("./node_modules/core-js/modules/es7.weak-map.of.js");
__webpack_require__("./node_modules/core-js/modules/es7.weak-set.of.js");
__webpack_require__("./node_modules/core-js/modules/es7.map.from.js");
__webpack_require__("./node_modules/core-js/modules/es7.set.from.js");
__webpack_require__("./node_modules/core-js/modules/es7.weak-map.from.js");
__webpack_require__("./node_modules/core-js/modules/es7.weak-set.from.js");
__webpack_require__("./node_modules/core-js/modules/es7.global.js");
__webpack_require__("./node_modules/core-js/modules/es7.system.global.js");
__webpack_require__("./node_modules/core-js/modules/es7.error.is-error.js");
__webpack_require__("./node_modules/core-js/modules/es7.math.clamp.js");
__webpack_require__("./node_modules/core-js/modules/es7.math.deg-per-rad.js");
__webpack_require__("./node_modules/core-js/modules/es7.math.degrees.js");
__webpack_require__("./node_modules/core-js/modules/es7.math.fscale.js");
__webpack_require__("./node_modules/core-js/modules/es7.math.iaddh.js");
__webpack_require__("./node_modules/core-js/modules/es7.math.isubh.js");
__webpack_require__("./node_modules/core-js/modules/es7.math.imulh.js");
__webpack_require__("./node_modules/core-js/modules/es7.math.rad-per-deg.js");
__webpack_require__("./node_modules/core-js/modules/es7.math.radians.js");
__webpack_require__("./node_modules/core-js/modules/es7.math.scale.js");
__webpack_require__("./node_modules/core-js/modules/es7.math.umulh.js");
__webpack_require__("./node_modules/core-js/modules/es7.math.signbit.js");
__webpack_require__("./node_modules/core-js/modules/es7.promise.finally.js");
__webpack_require__("./node_modules/core-js/modules/es7.promise.try.js");
__webpack_require__("./node_modules/core-js/modules/es7.reflect.define-metadata.js");
__webpack_require__("./node_modules/core-js/modules/es7.reflect.delete-metadata.js");
__webpack_require__("./node_modules/core-js/modules/es7.reflect.get-metadata.js");
__webpack_require__("./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");
__webpack_require__("./node_modules/core-js/modules/es7.reflect.get-own-metadata.js");
__webpack_require__("./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");
__webpack_require__("./node_modules/core-js/modules/es7.reflect.has-metadata.js");
__webpack_require__("./node_modules/core-js/modules/es7.reflect.has-own-metadata.js");
__webpack_require__("./node_modules/core-js/modules/es7.reflect.metadata.js");
__webpack_require__("./node_modules/core-js/modules/es7.asap.js");
__webpack_require__("./node_modules/core-js/modules/es7.observable.js");
__webpack_require__("./node_modules/core-js/modules/web.timers.js");
__webpack_require__("./node_modules/core-js/modules/web.immediate.js");
__webpack_require__("./node_modules/core-js/modules/web.dom.iterable.js");
module.exports = __webpack_require__("./node_modules/core-js/modules/_core.js");


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _EXPOSURE_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _IS_PROD_; });
var _EXPOSURE_ = true;
var _IS_PROD_ = false;
/* unused harmony default export */ var _unused_webpack_default_export = ({
	_EXPOSURE_: _EXPOSURE_,
	_IS_PROD_: _IS_PROD_
});

/***/ }),

/***/ "./src/modules/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__("./src/modules/state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_core__ = __webpack_require__("./src/modules/core/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var IApp = __WEBPACK_IMPORTED_MODULE_2__core_interfaces_ITypes__["b" /* IApp */],
    IClient = __WEBPACK_IMPORTED_MODULE_2__core_interfaces_ITypes__["f" /* IClient */],
    IOptions = __WEBPACK_IMPORTED_MODULE_2__core_interfaces_ITypes__["q" /* IOptions */];

var AppEventTarget = function () {
    function AppEventTarget(input) {
        return input != null && (IApp(input.app) || input.app instanceof Object) && input instanceof EventTarget;
    }

    ;
    Object.defineProperty(AppEventTarget, Symbol.hasInstance, {
        value: function value(input) {
            return AppEventTarget(input);
        }
    });
    return AppEventTarget;
}();

var AppEvent = function () {
    function AppEvent(input) {
        return input != null && AppEventTarget(input.target) && input instanceof Event;
    }

    ;
    Object.defineProperty(AppEvent, Symbol.hasInstance, {
        value: function value(input) {
            return AppEvent(input);
        }
    });
    return AppEvent;
}();

/** Core of the framework, initalizes client, input and listeners.
* @module
* @protected */

var App = function (_Core) {
    _inherits(App, _Core);

    function App(map) {
        var _ret;

        _classCallCheck(this, App);

        if (!(map instanceof WeakMap)) {
            throw new TypeError('Value of argument "map" violates contract.\n\nExpected:\nWeakMap<*, *>\n\nGot:\n' + _inspect(map));
        }

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, map));

        return _ret = _this, _possibleConstructorReturn(_this, _ret);
    }

    /**
    *  This function Starts the application by running InitalizeComponents and then InitalizeLoop
    * @method
    * @override */

    _createClass(App, [{
        key: 'Start',
        value: function Start() {
            var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (!(w == null || typeof w === 'number')) {
                throw new TypeError('Value of argument "w" violates contract.\n\nExpected:\n?number\n\nGot:\n' + _inspect(w));
            }

            if (!(h == null || typeof h === 'number')) {
                throw new TypeError('Value of argument "h" violates contract.\n\nExpected:\n?number\n\nGot:\n' + _inspect(h));
            }

            //console.log(this.options);

            this.InitalizeComponents(w || this.options.canvas.size.width, h || this.options.canvas.size.height).then(this.InitalizeLoop);
        }

        /** Triggers when the application first loops.
        * @method
           * @param {Object} [self] - Reference to the app.
        * @override	*/

    }, {
        key: 'OnLoad',
        value: function OnLoad(self) {
            if (!(self instanceof App)) {
                throw new TypeError('Value of argument "self" violates contract.\n\nExpected:\nApp\n\nGot:\n' + _inspect(self));
            }

            self.Start();
        }

        /** Triggers on dom content load.
        * @method
           * @param {Event} [evt] - The passing event.
        * @override	*/

    }, {
        key: 'OnApplicationLoad',
        value: function OnApplicationLoad(evt) {
            if (!AppEvent(evt)) {
                throw new TypeError('Value of argument "evt" violates contract.\n\nExpected:\nAppEvent\n\nGot:\n' + _inspect(evt));
            }

            evt.target.app.OnLoad(evt.target.app);
        }

        /** Event listener polyfill.
        * @method
           * @param {Element} [obj] - Element to trigger event on, fallback on window.
           * @param {Event} [evt] - The passing event.
           * @param {String} [listener] - The listener to build.
           * @param {Object} [param] - Paramater to pass.
        * @example
        * Application.Listener(window,'click',function(){////console.log('eh');},'');
        * Application.Click(new Event,window);	*/

    }, {
        key: 'Listener',
        value: function Listener(obj, evt, listener, param) {
            if (!(obj instanceof Object)) {
                throw new TypeError('Value of argument "obj" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(obj));
            }

            if (!(typeof evt === 'string')) {
                throw new TypeError('Value of argument "evt" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(evt));
            }

            if (!(typeof listener === 'function')) {
                throw new TypeError('Value of argument "listener" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(listener));
            }

            if (!(param === undefined || typeof param === 'string')) {
                throw new TypeError('Value of optional argument "param" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(param));
            }

            /* Legacy Unused?
                  if (typeof obj[0] === "object") {
                obj = obj[0] || window;
                  }
            */

            if (obj.addEventListener) {

                obj.addEventListener(evt, listener, false);
            } else {

                console.warn('Using attachEvent');

                obj.attachEvent("on" + evt, listener);
            }

            obj.app = window.apps[this.id] = this;
        }

        /** Object constructor/factory polyfill. MAY be unnecessary.
        * @method
           * @param {Object} [prototype] - An object prototype.
           * @param {Object} [constructor] - An object constructor. */

    }, {
        key: 'Construct',
        value: function Construct(prototype, constructor) {
            if (!(prototype instanceof Object)) {
                throw new TypeError('Value of argument "prototype" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(prototype));
            }

            if (!(typeof constructor === 'function')) {
                throw new TypeError('Value of argument "constructor" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(constructor));
            }

            var isObj = false;
            var obj = prototype;
            var proto = prototype;
            var construct = constructor;
            var ret = {};
            var type = void 0;

            /* if prototype contains a prototype and constructor. */

            if (typeof obj.prototype !== 'undefined') if (typeof obj.constructor !== 'undefined') {
                construct = obj.constructor;

                if (!(typeof construct === 'function')) {
                    throw new TypeError('Value of variable "construct" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(construct));
                }

                proto = obj.prototype;

                if (!(proto instanceof Object)) {
                    throw new TypeError('Value of variable "proto" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(proto));
                }

                isObj = true;
            }

            /* Grab type of constructor */

            type = typeof construct === 'undefined' ? 'undefined' : _typeof(construct);

            /* Return & Create object based on constructor */
            switch (type) {

                /* Use only the prototype */
                case 'undefined':
                    ret = Object.create(proto);

                    if (!(ret instanceof Object)) {
                        throw new TypeError('Value of variable "ret" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(ret));
                    }

                    break;

                /* Use constructor as object */
                case 'object':
                    ret = Object.create(proto, construct);

                    if (!(ret instanceof Object)) {
                        throw new TypeError('Value of variable "ret" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(ret));
                    }

                    break;

                /* Use constructor as function */
                case 'function':
                    ret = Object.create(proto, construct(this));

                    if (!(ret instanceof Object)) {
                        throw new TypeError('Value of variable "ret" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(ret));
                    }

                    break;

                /* Expected a type */
                default:
                    console.warn("Expected 'object' or 'function': Type is " + type);

            }

            if (isObj) prototype = ret;

            //console.warn(ret,typeof ret);

            return ret;
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_1__core_core__["a" /* default */]);

/* LEGACY import Particles from './particles.js'; // (unfinished) To be built into application */
/* LEGACY window.SJSParticleController = Particles; // Temporary for snowflakes */


/* harmony default export */ __webpack_exports__["a"] = (App);

function _inspect(input, depth) {
    var maxDepth = 4;
    var maxKeys = 15;

    if (depth === undefined) {
        depth = 0;
    }

    depth += 1;

    if (input === null) {
        return 'null';
    } else if (input === undefined) {
        return 'void';
    } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
        return typeof input === 'undefined' ? 'undefined' : _typeof(input);
    } else if (Array.isArray(input)) {
        if (input.length > 0) {
            if (depth > maxDepth) return '[...]';

            var first = _inspect(input[0], depth);

            if (input.every(function (item) {
                return _inspect(item, depth) === first;
            })) {
                return first.trim() + '[]';
            } else {
                return '[' + input.slice(0, maxKeys).map(function (item) {
                    return _inspect(item, depth);
                }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
            }
        } else {
            return 'Array';
        }
    } else {
        var keys = Object.keys(input);

        if (!keys.length) {
            if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
                return input.constructor.name;
            } else {
                return 'Object';
            }
        }

        if (depth > maxDepth) return '{...}';
        var indent = '  '.repeat(depth - 1);
        var entries = keys.slice(0, maxKeys).map(function (key) {
            return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
        }).join('\n  ' + indent);

        if (keys.length >= maxKeys) {
            entries += '\n  ' + indent + '...';
        }

        if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
            return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
        } else {
            return '{\n  ' + indent + entries + '\n' + indent + '}';
        }
    }
}

/***/ }),

/***/ "./src/modules/core/api/api-core.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_sjs__ = __webpack_require__("./src/modules/core/base/sjs.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var APICore = function (_SJSClass) {
	_inherits(APICore, _SJSClass);

	function APICore(app) {
		_classCallCheck(this, APICore);

		var _this = _possibleConstructorReturn(this, (APICore.__proto__ || Object.getPrototypeOf(APICore)).call(this, app));

		_this.input = _this.app.input;

		return _this;
	}

	return APICore;
}(__WEBPACK_IMPORTED_MODULE_0__base_sjs__["a" /* _SJSClass */]);

/* harmony default export */ __webpack_exports__["a"] = (APICore);

/***/ }),

/***/ "./src/modules/core/api/api.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_sjs__ = __webpack_require__("./src/modules/core/base/sjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_stats__ = __webpack_require__("./src/modules/core/base/stats.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_circle__ = __webpack_require__("./src/modules/core/math/circle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_sprite__ = __webpack_require__("./src/modules/core/api/sprite.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_tile__ = __webpack_require__("./src/modules/core/api/tile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_core__ = __webpack_require__("./src/modules/core/api/api-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__("./src/modules/utils.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var IApp = __WEBPACK_IMPORTED_MODULE_6__interfaces_ITypes__["b" /* IApp */],
    IApi = __WEBPACK_IMPORTED_MODULE_6__interfaces_ITypes__["a" /* IApi */],
    IVisuals = __WEBPACK_IMPORTED_MODULE_6__interfaces_ITypes__["G" /* IVisuals */],
    IVector = __WEBPACK_IMPORTED_MODULE_6__interfaces_ITypes__["F" /* IVector */],
    ITile = __WEBPACK_IMPORTED_MODULE_6__interfaces_ITypes__["B" /* ITile */],
    IStatsBuffer = __WEBPACK_IMPORTED_MODULE_6__interfaces_ITypes__["y" /* IStatsBuffer */],
    ICircle = __WEBPACK_IMPORTED_MODULE_6__interfaces_ITypes__["e" /* ICircle */];




/* This API class extends the canvas drawing api calls, including buffering */

var API = function (_APICore) {
		_inherits(API, _APICore);

		function API(app) {
				_classCallCheck(this, API);

				if (!IApp(app)) {
						throw new TypeError('Value of argument "app" violates contract.\n\nExpected:\nIApp\n\nGot:\n' + _inspect(app));
				}

				//this.pollyFilledAnimationFrame();

				// make sure aspect scale is correctly set in advance of first tick
				/*if (this.fullscreen_mode >= 2)
    {
    	var orig_aspect = this.original_width / this.original_height;
    	var cur_aspect = this.width / this.height;
    			// note mode 2 (scale inner) inverts this logic and will use window width when width wider.
    	if ((this.fullscreen_mode !== 2 && cur_aspect > orig_aspect) || (this.fullscreen_mode === 2 && cur_aspect < orig_aspect))
    		this.aspect_scale = this.height / this.original_height;
    	else
    			this.aspect_scale = this.width / this.original_width;
    }
    		*/
				// Non-fullscreen games on retina displays never call setSize to enable hi-dpi display.
				// Do this now if the device has hi-dpi support.
				//if (this.fullscreen_mode === 0 && this.isRetina && this.devicePixelRatio > 1)
				//{
				//	this["setSize"](this.original_width, this.original_height, true);
				//}

				var _this = _possibleConstructorReturn(this, (API.__proto__ || Object.getPrototypeOf(API)).call(this, app));

				_this.pollyFilledAnimationFrame = __WEBPACK_IMPORTED_MODULE_7__utils__["a" /* RequestAnimationFrame */];
				_this.free = false;
				_this.seamless = false;
				_this.tight = true;
				_this.disable = false;
				_this.alpha = 0;
				_this.bleed = 1;
				_this.point = 14;
				_this.zindex = 1;
				_this.buffer_target = 0;
				_this.scale = 0;
				_this.fillStyle = "";
				_this.fontT = "";
				_this.fontL = "";
				_this.grd = Object.create(null);
				_this.blitter_image = new Image();
				_this.within = false;
				_this.laststyle = "false";
				_this.debug = true;
				_this.setting = true;
				_this.left = 0;
				_this.top = 0;
				_this.image_count = 0;
				_this.PriorityRegistry = [];
				_this.PriorityRegistryFlags = {

						sort: false

						/* Appends a newly created sprite to the registroy */

				};

				_this.appendNew = function (toRegister) {
						_this.PriorityRegistryFlags.sort = true;
						return _this.PriorityRegistry.push(toRegister);
						//return this.PriorityRegistry[this.PriorityRegistry.length-1];
				};

				_this.drawArray = function (array, func) {
						if (!(typeof func === 'function')) {
								throw new TypeError('Value of argument "func" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(func));
						}

						for (var i = array.length - 1; i >= 0; i--) {
								func(array[i]);
						}
				};

				_this.pr = [];

				_this.sortPriorityRegistry = function () {

						if (_this.PriorityRegistryFlags.sort == true) {
								_this.PriorityRegistry = Object(__WEBPACK_IMPORTED_MODULE_7__utils__["c" /* sortBy */])(_this.PriorityRegistry, function (o) {
										return -o.priority;
								});

								if (!Array.isArray(_this.PriorityRegistry)) {
										throw new TypeError('Value of "this.PriorityRegistry" violates contract.\n\nExpected:\nArray<any>\n\nGot:\n' + _inspect(_this.PriorityRegistry));
								}

								_this.PriorityRegistryFlags.sort = false;
						}
				};

				_this.drawMethod = function (sprite) {
						//console.log(sprite);
						switch (sprite.type) {

								case 'circle':
										_this['' + sprite.type](sprite.x, sprite.y, sprite.r, sprite.col);

										break;

								default:

										if (!sprite.visuals) _this['' + sprite.type](sprite.img, sprite.x, sprite.y, sprite.s, sprite.a, sprite.c, sprite.xx, sprite.yy, sprite.w, sprite.h, sprite.degrees);else sprite.draw();

										break;
						}
				};

				_this.drawBufferedSprites = function () {

						//this.drawArray(this.PriorityRegistry, sprite => ((this:IApi)[''+sprite.type]:Function)(sprite.x,sprite.y,sprite.r,sprite.col,sprite.c));
						//let lastPriority = 0;
						_this.pr = _this.PriorityRegistry.slice();

						_this.sortPriorityRegistry();

						_this.drawArray(_this.PriorityRegistry, _this.drawMethod);

						//this.PriorityRegistry = [];
						//console.log(this.PriorityRegistry);
				};

				_this.drawBufferedSpritesNewPosition = function (f) {

						_this.drawArray(_this.PriorityRegistry, function (sprite) {
								return _this['' + sprite.type](f(sprite).x, f(sprite).y, sprite.r, sprite.col, sprite.c);
						});
				};

				_this.createClassList = {

						'Tile': __WEBPACK_IMPORTED_MODULE_4__api_tile__["a" /* default */],
						'Circle': __WEBPACK_IMPORTED_MODULE_2__math_circle__["a" /* default */]

				};
				_this.log('SJS:I:Visuals');

				return _this;
		}

		/**
     * @property
     */

		/**
     *
     */

		/* Document. left and top */


		/* Check variables */


		_createClass(API, [{
				key: 'clean',


				/** Resets the stats buffer.
    * @method
       */

				value: function clean() {

						//this.cleanAlpha?this.opacity(1):null;
						this.colour(this.stat.oldcol);
						this.stat.init(this.colour(), this.stat.oldcol);
						//this.stat.init();
				}

				/**
       * @method
    	TODO:Extend Number to include .toFixedNumber
       */

		}, {
				key: 'fixX',
				value: function fixX(x) {
						function _ref3(_id3) {
								if (!(typeof _id3 === 'number')) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id3));
								}

								return _id3;
						}

						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						return _ref3((x * this.scale + this.app.client.width / 2 - this.app.client.setWidth / 2 * this.scale).toFixedNumber(2));
				}

				/**
       * @method
    	TODO:Extend Number to include .toFixedNumber
       */

		}, {
				key: 'fixY',
				value: function fixY(y) {
						function _ref4(_id4) {
								if (!(typeof _id4 === 'number')) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id4));
								}

								return _id4;
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						return _ref4((y * this.scale + this.app.client.height / 2 - this.app.client.setHeight / 2 * this.scale).toFixedNumber(2));
				}

				/**
       * @method
    	TODO:Extend Number to include .toFixedNumber
       */

		}, {
				key: 'fixW',
				value: function fixW(w) {
						function _ref5(_id5) {
								if (!(typeof _id5 === 'number')) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id5));
								}

								return _id5;
						}

						if (!(typeof w === 'number')) {
								throw new TypeError('Value of argument "w" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(w));
						}

						return _ref5((w * this.scale).toFixedNumber(2));
				}

				/**
       * @method
    	TODO:Extend Number to include .toFixedNumber
       */

		}, {
				key: 'fixH',
				value: function fixH(h) {
						function _ref6(_id6) {
								if (!(typeof _id6 === 'number')) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id6));
								}

								return _id6;
						}

						if (!(typeof h === 'number')) {
								throw new TypeError('Value of argument "h" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(h));
						}

						return _ref6((h * this.scale).toFixedNumber(2));
				}

				/** Controls changing the draw colour
    * @method
    *  */

		}, {
				key: 'colour',
				value: function colour(colour1, colour2) {
						function _ref7(_id7) {
								if (!(typeof _id7 === 'string' || _id7 instanceof CanvasPattern || _id7 instanceof CanvasGradient)) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nstring | CanvasPattern | CanvasGradient\n\nGot:\n' + _inspect(_id7));
								}

								return _id7;
						}

						if (!(typeof colour1 === 'string' || colour1 == null)) {
								throw new TypeError('Value of argument "colour1" violates contract.\n\nExpected:\nstring | void\n\nGot:\n' + _inspect(colour1));
						}

						if (!(typeof colour2 === 'string' || colour2 == null)) {
								throw new TypeError('Value of argument "colour2" violates contract.\n\nExpected:\nstring | void\n\nGot:\n' + _inspect(colour2));
						}

						if (colour1) return _ref7(colour1 && (this.buffer_context.fillStyle = colour1)); //colour2&&(this.buffer_context.strokeStyle=colour2);
						else return _ref7(this.buffer_context.fillStyle);
				}

				/** Calls Colour */

		}, {
				key: 'color',
				value: function color(colour1, colour2) {
						function _ref8(_id8) {
								if (!(typeof _id8 === 'string' || _id8 instanceof CanvasPattern || _id8 instanceof CanvasGradient)) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nstring | CanvasPattern | CanvasGradient\n\nGot:\n' + _inspect(_id8));
								}

								return _id8;
						}

						if (!(typeof colour1 === 'string' || colour1 == null)) {
								throw new TypeError('Value of argument "colour1" violates contract.\n\nExpected:\nstring | void\n\nGot:\n' + _inspect(colour1));
						}

						if (!(typeof colour2 === 'string' || colour2 == null)) {
								throw new TypeError('Value of argument "colour2" violates contract.\n\nExpected:\nstring | void\n\nGot:\n' + _inspect(colour2));
						}

						return _ref8(this.colour(colour1, colour2));
				}

				/*
    *	Set opacity of the API draw calls
    *	@method
    */

		}, {
				key: 'opacity',
				value: function opacity(_opacity) {
						function _ref9(_id9) {
								if (!(typeof _id9 === 'number' || typeof _id9 === 'boolean')) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber | boolean\n\nGot:\n' + _inspect(_id9));
								}

								return _id9;
						}

						if (!(typeof _opacity === 'number')) {
								throw new TypeError('Value of argument "opacity" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_opacity));
						}

						return _ref9(_opacity != this.alpha && (this.alpha = _opacity, this.canvas_context.globalAlpha = this.buffer_context.globalAlpha = _opacity != this.lastopacity ? _opacity : 1));
				}

				/** Controls changing the draw font WIP
    * @method
    *  */

		}, {
				key: 'font',
				value: function font(_font) {
						if (!(typeof _font === 'string')) {
								throw new TypeError('Value of argument "font" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(_font));
						}

						return this.canvas_context.font = this.buffer_context.font = this.fontT = _font;
						//return font!=this.fontT&&(this.canvas_context.font=this.buffer_context.font=this.fontT=font?font:this.fontL);
						//if (font)
						//	this.buffer_context.font = font;
						//return this.buffer_context.font;
				}

				/** Controls changing the draw shadow
    * @method
    *  */

		}, {
				key: 'shadow',
				value: function shadow(col, blur, x, y) {
						if (!(typeof col === 'string')) {
								throw new TypeError('Value of argument "col" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(col));
						}

						if (!(typeof blur === 'number')) {
								throw new TypeError('Value of argument "blur" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(blur));
						}

						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						this.buffer_context.shadowColor = col;

						this.buffer_context.shadowBlur = blur;

						this.buffer_context.shadowOffsetX = x;

						this.buffer_context.shadowOffsetY = y;
				}

				/** Resets the draw shadow
    * @method
    *  */

		}, {
				key: 'shadow_clear',
				value: function shadow_clear() {

						this.buffer_context.shadowBlur = 0;
				}

				/** Controls changing the draw shadow
    * @method
    *  */

		}, {
				key: 'checkValues',
				value: function checkValues(x, y, w, h, s, a, c, colour, font) {
						function _ref13(_id13) {
								if (!IStatsBuffer(_id13)) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nIStatsBuffer\n\nGot:\n' + _inspect(_id13));
								}

								return _id13;
						}

						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof w === 'number')) {
								throw new TypeError('Value of argument "w" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(w));
						}

						if (!(typeof h === 'number')) {
								throw new TypeError('Value of argument "h" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(h));
						}

						if (!(typeof s === 'number')) {
								throw new TypeError('Value of argument "s" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(s));
						}

						if (!(typeof a === 'number' || a == null)) {
								throw new TypeError('Value of argument "a" violates contract.\n\nExpected:\nnumber | void\n\nGot:\n' + _inspect(a));
						}

						if (!(typeof c === 'number' || typeof c === 'boolean')) {
								throw new TypeError('Value of argument "c" violates contract.\n\nExpected:\nnumber | boolean\n\nGot:\n' + _inspect(c));
						}

						if (!(typeof font === 'string' || font == null)) {
								throw new TypeError('Value of argument "font" violates contract.\n\nExpected:\nstring | void\n\nGot:\n' + _inspect(font));
						}

						this.checkValuesColour = this.colour();

						if (!(typeof this.checkValuesColour === 'string' || this.checkValuesColour instanceof CanvasPattern || this.checkValuesColour instanceof CanvasGradient)) {
								throw new TypeError('Value of "this.checkValuesColour" violates contract.\n\nExpected:\nstring | CanvasPattern | CanvasGradient\n\nGot:\n' + _inspect(this.checkValuesColour));
						}

						if (!a) a = 1;

						this.opacity(a);

						this.colour(colour);

						var clamp = function clamp() {
								return 0;
						};

						if (!this.app) if (!this.app.client) if (!this.app.client.Math) if (!this.app.client.Math.Clamp) clamp = this.app.client.Math.Clamp;

						if (!this.free) {

								this.stat.set({
										x: this.fixX(x),
										y: this.fixY(y),
										w: this.fixW(w) * s,
										h: this.fixH(h) * s,
										s: s,
										a: clamp(a, 0, 1) || 0,
										c: c || 0,
										colour: colour || this.colour(),
										oldcol: this.checkValuesColour,
										font: font || this.font,
										init: this.stat.init
								});
						} else {

								this.stat.set({
										x: x, y: y,
										w: w * s || 0,
										h: h * s || 0,
										s: s,
										a: clamp(a, 0, 1) || 1,
										c: c || 0,
										colour: colour || this.colour(),
										oldcol: this.checkValuesColour,
										font: font,
										init: this.stat.init
								});
						}

						return _ref13(this.stat);
				}
		}, {
				key: 'touch_within',


				/* pointer collision */

				/**
    * Returns true if the cursor/touch is within the bounds. X Y W H, centered
    * @method
    *  */

				value: function touch_within(x, y, w, h, c) {
						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof w === 'number')) {
								throw new TypeError('Value of argument "w" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(w));
						}

						if (!(typeof h === 'number')) {
								throw new TypeError('Value of argument "h" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(h));
						}

						if (!(typeof c === 'boolean')) {
								throw new TypeError('Value of argument "c" violates contract.\n\nExpected:\nboolean\n\nGot:\n' + _inspect(c));
						}

						var doc = this.document.documentElement;

						if (!(doc instanceof Element)) {
								throw new TypeError('Value of variable "doc" violates contract.\n\nExpected:\nElement\n\nGot:\n' + _inspect(doc));
						}

						this.left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);

						if (!(typeof this.left === 'number')) {
								throw new TypeError('Value of "this.left" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(this.left));
						}

						this.top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

						if (!(typeof this.top === 'number')) {
								throw new TypeError('Value of "this.top" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(this.top));
						}

						y = y - this.top;
						x = x - this.left;

						var input = this.app.input;
						return c ? input.x > x - w / 2 && input.x < x + w / 2 && input.y > y - h / 2 && input.y < y + h / 2 ? true : false : input.x > x && input.x < x + w && input.y > y && input.y < y + h ? true : false;
				}

				/**
    * Returns true if the cursor/touch is within the bounds. X Y W H, centered.
    * Applies same scaling method as images in room.
    * @method
    *  */

		}, {
				key: 'touch_within2',
				value: function touch_within2(x, y, w, h, c) {
						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof w === 'number')) {
								throw new TypeError('Value of argument "w" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(w));
						}

						if (!(typeof h === 'number')) {
								throw new TypeError('Value of argument "h" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(h));
						}

						if (!(typeof c === 'boolean')) {
								throw new TypeError('Value of argument "c" violates contract.\n\nExpected:\nboolean\n\nGot:\n' + _inspect(c));
						}

						var stat = this.checkValues(x, y, w, h, 1, 1, c);

						if (!IStatsBuffer(stat)) {
								throw new TypeError('Value of variable "stat" violates contract.\n\nExpected:\nIStatsBuffer\n\nGot:\n' + _inspect(stat));
						}

						var doc = this.document.documentElement;

						//this.warn("touch_within2 is depreciated, use touch_within_stat");

						if (!(doc instanceof Element)) {
								throw new TypeError('Value of variable "doc" violates contract.\n\nExpected:\nElement\n\nGot:\n' + _inspect(doc));
						}

						this.left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);

						if (!(typeof this.left === 'number')) {
								throw new TypeError('Value of "this.left" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(this.left));
						}

						this.top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

						if (!(typeof this.top === 'number')) {
								throw new TypeError('Value of "this.top" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(this.top));
						}

						stat.y = stat.y - this.top;
						stat.x = stat.x - this.left;

						var input = this.app.input;
						return stat.c ? input.x > stat.x - stat.w / 2 && input.x < stat.x + stat.w / 2 && input.y > stat.y - stat.h / 2 && input.y < stat.y + stat.h / 2 ? true : false : input.x > stat.x && input.x < stat.x + stat.w && input.y > stat.y && input.y < stat.y + stat.h ? true : false;
				}

				/**
    * Returns true if the cursor/touch is within the bounds. X Y W H, centered.
    * Applies same scaling method as images in room.
    * @method
    *  */

		}, {
				key: 'touch_within_stat',
				value: function touch_within_stat(stat, r) {
						if (!IStatsBuffer(stat)) {
								throw new TypeError('Value of argument "stat" violates contract.\n\nExpected:\nIStatsBuffer\n\nGot:\n' + _inspect(stat));
						}

						var doc = this.document.documentElement;

						if (!(doc instanceof Element)) {
								throw new TypeError('Value of variable "doc" violates contract.\n\nExpected:\nElement\n\nGot:\n' + _inspect(doc));
						}

						var w = this.window;
						console.log(this.window);

						this.left = (w.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);

						if (!(typeof this.left === 'number')) {
								throw new TypeError('Value of "this.left" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(this.left));
						}

						this.top = (w.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

						if (!(typeof this.top === 'number')) {
								throw new TypeError('Value of "this.top" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(this.top));
						}

						stat.y = stat.y - this.top;
						stat.x = stat.x - this.left;

						var position = this.app.input.position;

						var x = position.x;
						var y = position.y;

						/*
      touch release to be integrated
          if (!r){
          x = this.app.input.touched.last.x;
          y = this.app.input.touched.last.y;}
      */

						return stat.c ? x > stat.x - stat.w / 2 && x < stat.x + stat.w / 2 && y > stat.y - stat.h / 2 && y < stat.y + stat.h / 2 ? true : false : y > stat.x && x < stat.x + stat.w && y > stat.y && y < stat.y + stat.h ? true : false;
				}

				/** Offers a blitting method for images. Pass IMG and set the offset. 32 only WIP
    * @method
    *  */

		}, {
				key: 'blit',
				value: function blit(img, offx, offy) {
						function _ref15(_id15) {
								if (!(_id15 instanceof Object)) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id15));
								}

								return _id15;
						}

						if (!(img instanceof HTMLImageElement)) {
								throw new TypeError('Value of argument "img" violates contract.\n\nExpected:\nHTMLImageElement\n\nGot:\n' + _inspect(img));
						}

						if (!(typeof offx === 'number')) {
								throw new TypeError('Value of argument "offx" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(offx));
						}

						if (!(typeof offy === 'number')) {
								throw new TypeError('Value of argument "offy" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(offy));
						}

						var _img = this.blitter_image = new Image();

						if (!(this.blitter_image instanceof HTMLImageElement)) {
								throw new TypeError('Value of "this.blitter_image" violates contract.\n\nExpected:\nHTMLImageElement\n\nGot:\n' + _inspect(this.blitter_image));
						}

						var canvas = this.blitter;
						var ctx = this.blitter_context;

						canvas.style.background = 'transparent';
						canvas.background = 'transparent';

						canvas.width = img.width / 16;
						canvas.height = img.height / 16;

						//    ctx.beginPath();
						//    ctx.arc(75, 75, 70, 0, Math.PI*2, true);
						//    ctx.closePath();
						//    ctx.fill();

						//    ctx.drawImage(img, 0, 0);

						ctx.drawImage(img, offx, offy, 32, 32, 0, 0, img.width / 16, img.height / 16);
						//(img,sx,sy,swidth,sheight,x,y,width,height);

						//SJS.statistics.monitor(function () {

						_img.src = canvas.toDataURL("image/png");
						window.T = _img;
						//}, 10).then(function () {

						//}, 10);

						return _ref15(_img);
				}

				/** Draws text to the canvas
    * @method
    *  */

		}, {
				key: 'text_shadow',
				value: function text_shadow(blur, x, y, colour) {

						this.buffer_context.shadowColor = colour;
						this.buffer_context.shadowBlur = blur;
						this.buffer_context.shadowOffsetX = x;
						this.buffer_context.shadowOffsetY = y;
				}

				/** Draws text to the canvas
    * @method
    *  */

		}, {
				key: 'text',
				value: function text(string, x, y, colour) {
						if (!(typeof string === 'string' || typeof string === 'number')) {
								throw new TypeError('Value of argument "string" violates contract.\n\nExpected:\nstring | number\n\nGot:\n' + _inspect(string));
						}

						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof colour === 'string')) {
								throw new TypeError('Value of argument "colour" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(colour));
						}

						this.text_ext(string, x, y, colour, 1, 1, 0, "Calibri");
				}

				/** Draws text with extra arguments
    * @method
    *  */

		}, {
				key: 'text_ext',
				value: function text_ext(string, x, y, colour, s, a, c, style) {
						if (!(typeof string === 'string' || typeof string === 'number')) {
								throw new TypeError('Value of argument "string" violates contract.\n\nExpected:\nstring | number\n\nGot:\n' + _inspect(string));
						}

						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof colour === 'string')) {
								throw new TypeError('Value of argument "colour" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(colour));
						}

						if (!(typeof s === 'number')) {
								throw new TypeError('Value of argument "s" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(s));
						}

						if (!(typeof a === 'number')) {
								throw new TypeError('Value of argument "a" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(a));
						}

						if (!(typeof c === 'number')) {
								throw new TypeError('Value of argument "c" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(c));
						}

						if (!(typeof style === 'string')) {
								throw new TypeError('Value of argument "style" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(style));
						}

						var str = String(string);

						if (!(typeof str === 'string')) {
								throw new TypeError('Value of variable "str" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(str));
						}

						this.checkValues(x, y, this.text_width(str), s, s, a, c, colour, '');

						var f = this.font('');

						this.stat.h = this.stat.s * this.scale;

						this.font(this.stat.h + "em " + style);

						this.stat.h = this.point * this.stat.h;

						this.buffer_context.fillText(str, this.stat.x - Math.floor(this.stat.w / 2) - this.stat.s, this.stat.y - Math.floor(this.stat.h / 2));

						//(this.stat.c)?this.buffer_context.fillText(string,this.stat.x-Math.floor(this.stat.w/2)-this.stat.s,this.stat.y-Math.floor(this.stat.h/2)):this.buffer_context.fillText(string,this.stat.x,this.stat.y+Math.floor(this.stat.h/2));

						this.font(f);

						this.clean();
				}

				/** Draws text without restrictions set by scaling
    * @method
    *  */

		}, {
				key: 'text_free',
				value: function text_free(string, x, y, colour) {
						if (!(typeof string === 'string' || typeof string === 'number')) {
								throw new TypeError('Value of argument "string" violates contract.\n\nExpected:\nstring | number\n\nGot:\n' + _inspect(string));
						}

						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof colour === 'string')) {
								throw new TypeError('Value of argument "colour" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(colour));
						}

						var str = String(string);

						if (!(typeof str === 'string')) {
								throw new TypeError('Value of variable "str" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(str));
						}

						this.colour(colour);

						this.font(Math.round(this.point * this.scale) + "px " + "sans-serif");

						this.buffer_context.fillText(str, x - this.text_width(String(string)) / 2 - this.point, y - this.point / 2);

						this.clean();
				}

				/** TEXT BUTTON _ WIP
    * @method
    *  */

		}, {
				key: 'text_button',
				value: function text_button(string, x, y, colour, s, a, c, style) {
						if (!(typeof string === 'string' || typeof string === 'number')) {
								throw new TypeError('Value of argument "string" violates contract.\n\nExpected:\nstring | number\n\nGot:\n' + _inspect(string));
						}

						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof colour === 'string')) {
								throw new TypeError('Value of argument "colour" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(colour));
						}

						if (!(typeof s === 'number')) {
								throw new TypeError('Value of argument "s" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(s));
						}

						if (!(typeof a === 'number')) {
								throw new TypeError('Value of argument "a" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(a));
						}

						if (!(typeof c === 'number')) {
								throw new TypeError('Value of argument "c" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(c));
						}

						if (!(typeof style === 'string')) {
								throw new TypeError('Value of argument "style" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(style));
						}

						this.checkValues(x, y, this.text_width(String(string)), s, s, a, c, colour, '');
						var f = this.font('');
						this.stat.h = this.stat.s * this.scale;
						this.font(this.stat.h + "em " + style);
						this.stat.h = this.point * this.stat.h;

						if (this.touch_within_stat(this.stat)) {

								if (this.app.input) if (this.app.input.pressed) this.opacity(this.stat.a - this.app.input.pressed * 0.2);
								//this.app.ext.cursor.set(this.app.ext.cursor.pointer,true);
								//if (App.input.released)
								//	if (App.input.delay<1)
								//		loc(),App.input.delay = 1;
								this.stat.c ? this.buffer_context.fillText(string, this.stat.x - Math.floor(this.stat.w / 2) - this.stat.s, this.stat.y - Math.floor(this.stat.h / 2)) : this.buffer_context.fillText(string, this.stat.x, this.stat.y + Math.floor(this.stat.h / 2));
						} else {
								this.opacity(this.stat.a * 0.75);
								this.stat.c ? this.buffer_context.fillText(string, this.stat.x - Math.floor(this.stat.w / 2) - this.stat.s, this.stat.y - Math.floor(this.stat.h / 2)) : this.buffer_context.fillText(string, this.stat.x, this.stat.y + Math.floor(this.stat.h / 2));
						}
						this.font(f);
						this.clean();
				}

				/** TEXT BUTTTON BG  _ WIP
    * @method
    *  */

		}, {
				key: 'text_button_bg',
				value: function text_button_bg(string, x, y, colour, s, a, c, loc, style) {
						if (!(typeof string === 'string' || typeof string === 'number')) {
								throw new TypeError('Value of argument "string" violates contract.\n\nExpected:\nstring | number\n\nGot:\n' + _inspect(string));
						}

						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof colour === 'string')) {
								throw new TypeError('Value of argument "colour" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(colour));
						}

						if (!(typeof s === 'number')) {
								throw new TypeError('Value of argument "s" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(s));
						}

						if (!(typeof a === 'number')) {
								throw new TypeError('Value of argument "a" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(a));
						}

						if (!(typeof c === 'number')) {
								throw new TypeError('Value of argument "c" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(c));
						}

						if (!(typeof style === 'string')) {
								throw new TypeError('Value of argument "style" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(style));
						}

						this.checkValues(x, y, this.text_width(String(string)), s, s, a, c, colour, '');

						this.shadow("#AAAAAA", 1, 1, 1);

						var f = this.font('');

						this.stat.h = this.stat.s * this.scale;

						this.font(this.stat.h + "em " + style);

						this.stat.h = this.point * this.stat.h;

						this.within = this.touch_within_stat(this.stat);

						if (!(typeof this.within === 'boolean')) {
								throw new TypeError('Value of "this.within" violates contract.\n\nExpected:\nboolean\n\nGot:\n' + _inspect(this.within));
						}

						if (this.within) {
								this.colour("#00A0F1");
								this.buffer_context.beginPath();
								this.stat.c ? this.buffer_context.rect(this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.rect(this.stat.x - this.stat.w * 0.2, this.stat.y - this.stat.h * 0.2, this.stat.w * 1.1, this.stat.h * 1.1);
								this.buffer_context.fill();

								this.colour("#DDDDDD");
								//this.rect_ext(this.stat.x-this.stat.w/4,this.stat.y-this.stat.h/5,this.stat.w*1.1,this.stat.h*1.1,1,1,0,"#00A0F1");
								this.opacity(this.stat.a - App.input.pressed * 0.2);
								App.ext.cursor.set(App.ext.cursor.pointer, true);
								this.app.ext.cursor.set(this.app.ext.cursor.pointer, true);
								if (this.app.input.released) {
										loc();
										this.app.input.delay = 1;
								}

								this.stat.c ? this.buffer_context.fillText(string, this.stat.x - Math.floor(this.stat.w / 2) - this.stat.s, this.stat.y - Math.floor(this.stat.h / 2)) : this.buffer_context.fillText(string, this.stat.x, this.stat.y + Math.floor(this.stat.h / 2));
						} else {
								this.opacity(this.stat.a * 0.75);
								this.stat.c ? this.buffer_context.fillText(string, this.stat.x - Math.floor(this.stat.w / 2) - this.stat.s, this.stat.y - Math.floor(this.stat.h / 2)) : this.buffer_context.fillText(string, this.stat.x, this.stat.y + Math.floor(this.stat.h / 2));
						}
						this.font(f);
						this.clean();
				}

				/*
      *	Visuals Rectangle Functions
      */

				/** Draws basic rectangle of colour
    * @method
    *  */

		}, {
				key: 'rect',
				value: function rect(x, y, w, h, colour) {
						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof w === 'number')) {
								throw new TypeError('Value of argument "w" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(w));
						}

						if (!(typeof h === 'number')) {
								throw new TypeError('Value of argument "h" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(h));
						}

						if (!(typeof colour === 'string')) {
								throw new TypeError('Value of argument "colour" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(colour));
						}

						this.rect_ext(x, y, w, h, 1, 1, 0, colour);
				}

				/** Draw a basic centered rectangle of colour
    * @method
    *  */

		}, {
				key: 'rect_centered',
				value: function rect_centered(x, y, w, h, colour) {
						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof w === 'number')) {
								throw new TypeError('Value of argument "w" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(w));
						}

						if (!(typeof h === 'number')) {
								throw new TypeError('Value of argument "h" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(h));
						}

						if (!(typeof colour === 'string')) {
								throw new TypeError('Value of argument "colour" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(colour));
						}

						this.rect_ext(x, y, w, h, 1, 1, 1, colour);
				}

				/** Draw an extended rectangle
    * @method
    *  */

		}, {
				key: 'rect_ext',
				value: function rect_ext(x, y, w, h, s, a, c, colour) {

						this.checkValues(x, y, w, h, s, a, c, colour, '');

						this.buffer_context.beginPath();

						this.stat.c ? this.buffer_context.rect(this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.rect(this.stat.x, this.stat.y, this.stat.w, this.stat.h);

						this.buffer_context.fill();

						this.clean();
				}

				/** Draw an extended rectangle with a stroke
    * @method
    *  */

		}, {
				key: 'rect_stroke',
				value: function rect_stroke(x, y, w, h, s, a, c, colour, l) {

						this.checkValues(x, y, w, h, s, a, c, colour, '');

						this.buffer_context.beginPath();

						this.stat.c ? this.buffer_context.rect(this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.rect(this.stat.x, this.stat.y, this.stat.w, this.stat.h);

						this.buffer_context.fillStyle = 'transparent';

						this.buffer_context.fill();

						this.buffer_context.lineWidth = l || 1;

						this.buffer_context.strokeStyle = colour;

						this.buffer_context.stroke();

						this.clean();
				}

				/** Draws a rectangle witha function when clicked _ WIP
    * @method
    *  */

		}, {
				key: 'rect_button',
				value: function rect_button(x, y, w, h, s, a, colour, loc, c) {

						this.checkValues(x, y, w, h, s, a, c, colour, '');
						var t = false;

						//if (this.touch_within(this.stat.x,this.stat.y,this.stat.w,this.stat.h,this.stat.c))
						if (this.touch_within_stat(this.stat)) {
								t = true;
								//    this.app.ext.cursor.set(this.app.ext.cursor.pointer,true);

								//   if (this.app.input.delay<1)

								if (this.app.input.released) loc(), this.app.input.delay = 1;
						}

						//if (this.setting)
						this.rect_ext(x, y, w, h, s, a, c, colour, '');
						//else
						//    var ww = 1;
						//    if (t)
						//    this.rect_ext(x-ww,y-ww,w+ww*2,h+ww*2,s,a,c,colour,'');
				}

				/** Draws a rotated rectangle
    * @method
    *  */

		}, {
				key: 'rect_rotate',
				value: function rect_rotate(x, y, w, h, colour, s, a, angle) {

						this.checkValues(x, y, w, h, s, a, 1, colour, '');

						this.buffer_context.translate(this.stat.x, this.stat.y);

						this.buffer_context.rotate(angle * 0.0174532925);

						this.stat.c ? this.buffer_context.rect(0 - Math.floor(this.stat.w / 2), 0 - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.rect(0, 0, this.stat.w, this.stat.h);

						this.buffer_context.rotate(-angle * 0.0174532925);

						this.buffer_context.translate(-this.stat.x, -this.stat.y);

						this.clean();
				}

				/** Draws a rectangle with a gradient fill
    * @method
    *  */

		}, {
				key: 'rect_gradient',
				value: function rect_gradient(x, y, w, h, s, a, c, colour, colour2, angle) {

						this.checkValues(x, y, w, h, s, a, c, colour, '');

						this.buffer_context.translate(this.stat.x, this.stat.y);

						this.buffer_context.rotate(angle * 0.0174532925);

						if (!this.stat.w) return;
						if (!this.stat.h) return;
						if (!this.stat.x) return;
						if (!this.stat.y) return;

						this.stat.c ? this.grd = this.buffer_context.createLinearGradient(Math.floor(this.stat.w / 2), 0, Math.floor(this.stat.w / 2), Math.floor(this.stat.h / 2)) : this.grd = this.buffer_context.createLinearGradient(0, 0, this.stat.w, this.stat.h);

						if (!(this.grd instanceof Object)) {
								throw new TypeError('Value of "this.grd" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(this.grd));
						}

						if (!(this.grd instanceof Object)) {
								throw new TypeError('Value of "this.grd" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(this.grd));
						}

						this.buffer_context.beginPath();

						this.stat.c ? this.buffer_context.rect(0 - Math.floor(this.stat.w / 2), 0 - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.rect(0, 0, this.stat.w, this.stat.h);

						this.grd.addColorStop(0, colour);

						this.grd.addColorStop(1, colour2);

						this.buffer_context.fillStyle = this.grd;

						this.buffer_context.fill();

						this.buffer_context.rotate(-angle * 0.0174532925);

						this.buffer_context.translate(-this.stat.x, -this.stat.y);

						this.clean();
				}

				/** Draws text without restrictions set by scaling
    * @method
    *  */

		}, {
				key: 'rect_free',
				value: function rect_free(x, y, w, h, s, a, c, colour) {

						this.checkValues(x, y, w, h, s, a, c, colour, '');

						this.buffer_context.beginPath();

						c ? this.buffer_context.rect(x - w / 2, y - h / 2, w, h) : this.buffer_context.rect(x, y, w, h);

						this.buffer_context.fill();

						this.clean();
				}

				/** Draws text without restrictions set by scaling
    * @method
    *  */

		}, {
				key: 'screen_fill',
				value: function screen_fill(a, colour) {

						this.checkValues(0, 0, 1, 1, 1, a, 1, colour, '');

						this.buffer_context.beginPath();

						this.buffer_context.rect(0, 0, window.innerWidth, window.innerHeight);

						this.buffer_context.fill();

						this.clean();
				}
		}, {
				key: 'image_element',


				/** IMAGE ELEMENT HTML
    * @method
    *  */

				value: function image_element(image) {

						this.elm = document.createElement("image");
						this.elm.draw = function (image, x, y, s, loc, xscale, yscale, a, c) {
								var s = this.style;
								App.client.visuals.checkValues(x, y, image.width, image.height, s, a, c);
								s.position = "fixed";
								s.left = this.stat.x + "px";
								s.top = this.stat.y + "px";
								s.width = this.stat.w + "px";
								s.height = this.stat.h + "px";
								s.opacity = this.stat.a;
								s.onclick = this.loc;
								this.src = image;
						};
						document.body.appendChild(this.elm);
						this.elm.src = image.src;
						return this.elm;
						//(this.stat.c)?this.buffer_context.drawImage(image,this.stat.x-Math.floor(this.stat.w/2),this.stat.y-Math.floor(this.stat.h/2),this.stat.w,this.stat.h):this.buffer_context.drawImage(image,this.stat.x,this.stat.y,this.stat.w,this.stat.h);
				}

				/** Draws text without restrictions set by scaling
    * @method
    *  */

		}, {
				key: 'image_replacecol',
				value: function image_replacecol(image, x, y, s, a, c, colour) {

						this.checkValues(x, y, image.width, image.height, s, a, c);

						var is = new Image();
						is.src = image;

						function getBase64Image(img) {
								// Create an empty canvas element
								var canvas = document.createElement("canvas");
								canvas.width = img.width;
								canvas.height = img.height;

								// Copy the image contents to the canvas
								var ctx = canvas.getContext("2d");
								ctx.drawImage(img, 0, 0);

								// Get the data-URL formatted image
								// Firefox supports PNG and JPEG. You could check img.src to
								// guess the original format, but be aware the using "image/jpg"
								// will re-encode the image.
								//var dataURL = canvas.toDataURL("image/png");
								var dataURL = ctx.getImageData(0, 0, canvas.width, canvas.height);

								return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
						}
						var imageData = getBase64Image(image);
						is.src = getBase64Image(is);
						image = is;
						var pixel = imageData.data;

						var r = 0,
						    g = 1,
						    b = 2,
						    a = 3;
						for (var p = 0; p < pixel.length; p += 4) {
								if (pixel[p + r] == 0 && pixel[p + g] == 0 && pixel[p + b] == 0) // if white then change alpha to 0
										{
												pixel[p + a] = 255;
										}
						}

						ctx.putImageData(imageData, 0, 0);
						image.src = c.toDataURL('image/png');

						this.stat.c ? this.buffer_context.drawImage(image, this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.drawImage(image, this.stat.x, this.stat.y, this.stat.w, this.stat.h);
				}

				/**
    * @method
    				// save old getContext
    var oldgetContext = HTMLCanvasElement.prototype.getContext ;
    		// get a context, set it to smoothed if it was a 2d context, and return it.
    function getSmoothContext(contextType) {
      var resCtx = oldgetContext.apply(this, arguments);
      if (contextType == '2d') {
       setToFalse(resCtx, 'imageSmoothingEnabled');
       setToFalse(resCtx, 'mozImageSmoothingEnabled');
       setToFalse(resCtx, 'oImageSmoothingEnabled');
       setToFalse(resCtx, 'webkitImageSmoothingEnabled');
      }
      return resCtx ;
    }
    		function setToFalse(obj, prop) { if ( obj[prop] !== undefined ) obj[prop] = false; }
    		// inject new smoothed getContext
    HTMLCanvasElement.prototype.getContext = getSmoothContext ;
    				*  */

		}, {
				key: 'image_ext',
				value: function image_ext(image, x, y, s, a, c) {

						this.checkValues(x, y, image.width, image.height, s, a, c);

						this.buffer_context.oImageSmoothingEnabled = false;
						this.buffer_context.mozImageSmoothingEnabled = false;
						this.buffer_context.webkitImageSmoothingEnabled = false;
						this.buffer_context.msImageSmoothingEnabled = false;
						this.buffer_context.imageSmoothingEnabled = false;

						this.stat.c ? this.buffer_context.drawImage(image, this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.drawImage(image, this.stat.x, this.stat.y, this.stat.w, this.stat.h);
				}
				/**
    * @method
    *  */

		}, {
				key: 'image_ext2',
				value: function image_ext2(image, x, y, sx, sy, a, c) {
						this.checkValues(x, y, image.width, image.height, sx, a, c);
						this.stat2 = this.checkValues(x, y, image.width, image.height, sy, a, c);

						if (!IStatsBuffer(this.stat2)) {
								throw new TypeError('Value of "this.stat2" violates contract.\n\nExpected:\nIStatsBuffer\n\nGot:\n' + _inspect(this.stat2));
						}

						this.stat.c ? this.buffer_context.drawImage(image, this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w * this.stat.s, this.stat.h * this.stat2.s) : this.buffer_context.drawImage(image, this.stat.x, this.stat.y, this.stat.w * this.stat.s, this.stat.h * this.stat2.s);
				}
				/**
    * @method
    *  */

		}, {
				key: 'image_centered',
				value: function image_centered(image, x, y, a) {
						this.image_ext(image, x, y, 1, a, 1);
				}
				/**
    * @method
    *  */

		}, {
				key: 'image',
				value: function image(_image, x, y) {
						this.image_ext(_image, x, y, 1, 1, 0);
				}
				/**
    * @method
    *  */

		}, {
				key: 'image_scaled',
				value: function image_scaled(image, x, y, s) {
						this.image_ext(image, x, y, s, 1, 0);
				}
				/**
    * @method
    *  */

		}, {
				key: 'image_stat',
				value: function image_stat(image, x, y, s, a, c, xx, yy, w, h) {
						this.checkValues(x, y, w, h, s, a, c);
						return this.stat;
				}
				/**
    * @method
    *  */

		}, {
				key: 'image_flip',
				value: function image_flip(x, y) {

						this.drawBufferedSprites();
						this.checkValues(x, y, 1, 1, 1, 1, 1);
						this.buffer_context.save();
						this.buffer_context.scale(-1, 1);
						this.buffer_context.translate(-this.stat.x * 2, 0);
				}
				/**
    * @method
    *  */

		}, {
				key: 'image_restore',
				value: function image_restore(x, y) {}

				//this.buffer_context.restore();


				/**
    * @method
    *  */

		}, {
				key: 'putData',
				value: function putData(myImageData, dx, dy) {

						this.buffer_context.putImageData(myImageData, dx, dy);
						//this.clean();
				}
				/**
    * @method
    *  */

				/*
    image_part(image,x,y,s,a,c,xx,yy,w,h){
    				this.checkValues(x,y,w,h,s,a,c);
    		this.buffer_context.oImageSmoothingEnabled = false;
    this.buffer_context.mozImageSmoothingEnabled = false;
    this.buffer_context.webkitImageSmoothingEnabled = false;
    this.buffer_context.msImageSmoothingEnabled = false;
    this.buffer_context.imageSmoothingEnabled = false;


    //var scale = (1.1*this.stat.s)*this.app.getScale();
    		(this.stat.c)?this.buffer_context.drawImage(image,xx,yy,w,h,this.stat.x-Math.floor(this.stat.w/2),this.stat.y-Math.floor(this.stat.h/2),this.stat.w,this.stat.h):this.buffer_context.drawImage(image,xx,yy,w,h,this.stat.x,this.stat.y,this.stat.w,this.stat.h);
    this.opacity(1);
    }
    */

		}, {
				key: 'image_part_flip',
				value: function image_part_flip(image, x, y, s, a, c, xx, yy, w, h) {
						this.checkValues(x, y, w, h, s, a, c);

						this.buffer_context.scale(-1, 1);
						//var scale = (1.1*this.stat.s)*this.app.getScale();
						this.stat.c ? this.buffer_context.drawImage(image, xx, yy, w, h, this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.drawImage(image, xx, yy, w, h, this.stat.x, this.stat.y, this.stat.w, this.stat.h);

						this.buffer_context.scale(-1, 1);
				}
				/**
    * @method
    *  */

		}, {
				key: 'image_part_rotate',
				value: function image_part_rotate(image, x, y, s, a, c, xx, yy, w, h, angle) {
						this.checkValues(x, y, w, h, s, a, c);

						//var scale = (1.1*this.stat.s)*this.app.getScale();
						this.buffer_context.save();
						this.buffer_context.translate(this.stat.x, this.stat.y);
						this.buffer_context.rotate(angle * 0.0174532925);
						this.stat.c ? this.buffer_context.drawImage(image, xx, yy, w, h, 0 - Math.floor(this.stat.w / 2), 0 - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.drawImage(image, xx, yy, w, h, 0, 0, this.stat.w, this.stat.h);

						//this.buffer_context.restore();
						this.buffer_context.rotate(-angle * 0.0174532925);
						this.buffer_context.translate(-this.stat.x, -this.stat.y);
				}
				/**
    * @method
    *  */

		}, {
				key: 'image_rotate',
				value: function image_rotate(image, x, y, s, angle, a, xoff, yoff) {

						if (typeof image == 'undefined') image = new Image(), console.log('Image fialed to render');
						this.checkValues(x, y, image.width, image.height, s, a, true);
						this.buffer_context.translate(this.stat.x, this.stat.y);
						this.buffer_context.rotate(angle * 0.0174532925);
						this.stat.c ? this.buffer_context.drawImage(image, 0 - Math.floor(this.stat.w / 2), 0 - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.drawImage(image, 0, 0, this.stat.w, this.stat.h);
						this.buffer_context.rotate(-angle * 0.0174532925);
						this.buffer_context.translate(-this.stat.x, -this.stat.y);
				}

				/**
    * @method
    *  */

		}, {
				key: 'texture',
				value: function texture(_texture, xx, yy, w, h, yoff, xoff, xonly, xo, yo, s) {

						var yoff = yoff || 0;
						var yo = yo || 0;
						var xo = xo || 0;
						var y = 0;
						var img = _texture;
						var width = w;
						var height = h;

						var s = s;

						xo *= s;
						yo *= s;

						var bh = img.height;
						var img_width = img.width;
						var img_height = img.height;

						var img_width_scaled = +img_width * s;
						var img_height_scaled = +img_height * s;

						var offy = yy;
						var offx = xx;

						var by = Math.round((offy / s + height + (-yoff / s - height)) % img_height_scaled - img_height_scaled);
						var by_first = by;

						var bx = -width * s / 2 + (offx / s + width * s) % img_width_scaled - img_width_scaled;

						var span_width = (width + img_width) * s + img_width_scaled;
						var span_height = (height + bh) * s + img_height_scaled;

						if (xonly) span_width = 0;

						if (xonly) {
								var x = bx - width * s / 2 - s * bx / img_width;

								for (by = by_first; by < span_height; by += img_height_scaled) {
										var y = -by + height * s + s * by / bh;

										if (!xonly) this.image_ext(img, xo + x, yo + y, s, 1, 1);
										if (xonly) this.image_scaled(img, xo + x, yo + y, s, 1, 1);
								}
						} else for (bx; bx < span_width; bx += img_width_scaled) {
								var x = bx - width * s / 2 - 1 * bx / img_width;

								for (by = by_first; by < span_height; by += img_height_scaled) {
										var y = -by + height * s + 1 * by / bh;

										if (!xonly) this.image_ext(img, xo + x, yo + y, s, 1, 1);
										if (xonly) this.image_scaled(img, xo + x, yo + y, s, 1, 1);
								}
						}
				}

				/**
    * @method
    *  */

		}, {
				key: 'rotate_at',
				value: function rotate_at(angle, x, y) {
						if ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) === "object") var x = x.x,
						    y = y.y;else var x = x,
						    y = y;

						this.checkValues(x, y, 1, 1, 1, 1, 1);
						this.buffer_context.translate(-this.stat.x, -this.stat.y);

						this.buffer_context.rotate(angle * 0.0174532925);
				}

				/**
    * @method
    *  */

		}, {
				key: 'rotate',
				value: function rotate(angle) {

						return this.buffer_context.rotate(angle * 0.0174532925);
				}
				/**
    * @method
    *  */

		}, {
				key: 'translate',
				value: function translate(x, y) {

						if ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) === "object") var x = x.x,
						    y = y.y;else var x = x,
						    y = y;

						this.checkValues(x, y, 1, 1, 1, 1, 1);
						return this.buffer_context.translate(-this.stat.x, -this.stat.y);
				}

				/** LEGACY TAKE OUT
    * @method
    *  */

		}, {
				key: 'button',
				value: function button(img, x, y, f) {
						this.image_button(img, x, y, 1, f, true, 1, 1, 1, 1);
				}
				/** LEGACY TAKE OUT
    * @method
    *  */

		}, {
				key: 'button_scaled',
				value: function button_scaled(img, x, y, s, f) {
						this.image_button(img, x, y, s, f, true, 1, 1, 1, 1);
				}
				/** LEGACY TAKE OUT
    * @method
    *  */

		}, {
				key: 'buttonH',
				value: function buttonH(img, x, y, s, f) {
						this.image_buttonH(img, x, y, s, f, true, 1, 1, 1, 1);
				}

				/** IMAGE_BUTTON LEGACY TAKE OUT
    * @method
    *  */

		}, {
				key: 'image_button',
				value: function image_button(image, x, y, s, loc, highlight, xscale, yscale, a, centered) {

						this.checkValues(x, y, image.width * s * xscale, image.height * s * yscale, s, a, centered);

						var step = this.stat2 = this.checkValues(x, y, image.width * s * xscale * 0.9, image.height * s * yscale * 0.9, s, a, centered);

						if (!IStatsBuffer(this.stat2)) {
								throw new TypeError('Value of "this.stat2" violates contract.\n\nExpected:\nIStatsBuffer\n\nGot:\n' + _inspect(this.stat2));
						}

						if (!IStatsBuffer(step)) {
								throw new TypeError('Value of variable "step" violates contract.\n\nExpected:\nIStatsBuffer\n\nGot:\n' + _inspect(step));
						}

						var w = false;

						if (this.touch_within_stat(step)) {
								w = true;
								if (this.highlight) this.opacity(this.stat.a - this.app.input.pressed * 0.2);
								this.app.ext.cursor.set(this.app.ext.cursor.pointer, true);
								if (this.app.input.released) {
										loc();
										this.app.input.delay = 1;
								}
								this.stat.c ? this.buffer_context.drawImage(image, this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.drawImage(image, this.stat.x, this.stat.y, this.stat.w, this.stat.h);
						} else {
								if (this.highlight) this.opacity(this.stat.a * 0.75);
								this.stat.c ? this.buffer_context.drawImage(image, this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.drawImage(image, this.stat.x, this.stat.y, this.stat.w, this.stat.h);
						}
						return w;
				}

				/** IMAGE_BUTTON LEGACY TAKE OUT
    * @method
    *
          image_buttonH(image,x,y,s,loc,highlight,xscale,yscale,a,centered){
              this.checkValues(x,y,image.width*s*xscale,image.height*s*yscale,s,a,centered);
              var s = this.stat2 = this.checkValues(x,y,(image.width*s*xscale)*0.9,(image.height*s*yscale)*0.9,s,a,centered);
              var w = false;
              if (this.touch_within_stat(s,true))
              {
                  w = true;
                  if (this.highlight)
                  this.opacity(this.stat.a-(this.app.input.pressed*0.2));
                  this.app.ext.cursor.set(this.app.ext.cursor.pointer,true);
                  if (this.app.input.pressed)
                          loc(),this.app.input.delay = 1;
                  (this.stat.c)?this.buffer_context.drawImage(image,this.stat.x-Math.floor(this.stat.w/2),this.stat.y-Math.floor(this.stat.h/2),this.stat.w,this.stat.h):this.buffer_context.drawImage(image,this.stat.x,this.stat.y,this.stat.w,this.stat.h);
              }
              else
              {
                  if (this.highlight)
                  this.opacity(this.stat.a*0.75);
                  (this.stat.c)?this.buffer_context.drawImage(image,this.stat.x-Math.floor(this.stat.w/2),this.stat.y-Math.floor(this.stat.h/2),this.stat.w,this.stat.h):this.buffer_context.drawImage(image,this.stat.x,this.stat.y,this.stat.w,this.stat.h);
              }
              return w;
          }
    */

				/*  ^ IMAGE BUTTON LEGACY TAKE OUT ^ */

				/* LINE API */

		}, {
				key: 'line2',
				value: function line2(vec, vec2, col, a, free) {
						if (!IVector(vec)) {
								throw new TypeError('Value of argument "vec" violates contract.\n\nExpected:\nIVector\n\nGot:\n' + _inspect(vec));
						}

						if (!IVector(vec2)) {
								throw new TypeError('Value of argument "vec2" violates contract.\n\nExpected:\nIVector\n\nGot:\n' + _inspect(vec2));
						}

						if (!(typeof a === 'number')) {
								throw new TypeError('Value of argument "a" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(a));
						}

						if (!(typeof free === 'boolean')) {
								throw new TypeError('Value of argument "free" violates contract.\n\nExpected:\nboolean\n\nGot:\n' + _inspect(free));
						}

						var x = vec.x;
						var y = vec.y;
						var x2 = vec2.x;
						var y2 = vec2.y;
						this.checkValues(x, y, x2, y2, 1, a, true);
						this.stat2 = this.checkValues(x2, y2, x2, y2, 1, a, true);

						if (!IStatsBuffer(this.stat2)) {
								throw new TypeError('Value of "this.stat2" violates contract.\n\nExpected:\nIStatsBuffer\n\nGot:\n' + _inspect(this.stat2));
						}

						this.buffer_context.beginPath();
						this.buffer_context.moveTo(this.stat.x, this.stat.y);
						this.buffer_context.lineTo(this.stat2.x, this.stat2.y);
						this.buffer_context.strokeStyle = col;
						this.buffer_context.stroke();
				}
		}, {
				key: 'line',
				value: function line(x, y, x2, y2, col, a) {
						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof x2 === 'number')) {
								throw new TypeError('Value of argument "x2" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x2));
						}

						if (!(typeof y2 === 'number')) {
								throw new TypeError('Value of argument "y2" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y2));
						}

						if (!(typeof a === 'number')) {
								throw new TypeError('Value of argument "a" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(a));
						}

						this.checkValues(x, y, x2, y2, 1, a, true);
						this.stat2 = this.checkValues(x2, y2, x2, y2, 1, a, true);

						if (!IStatsBuffer(this.stat2)) {
								throw new TypeError('Value of "this.stat2" violates contract.\n\nExpected:\nIStatsBuffer\n\nGot:\n' + _inspect(this.stat2));
						}

						this.buffer_context.beginPath();
						this.buffer_context.moveTo(this.stat.x, this.stat.y);
						this.buffer_context.lineTo(this.stat2.x, this.stat2.y);
						this.buffer_context.strokeStyle = col;
						this.buffer_context.stroke();
						this.clean();
				}
		}, {
				key: 'lines',
				value: function lines(x, y, x2, y2, col, a, s) {
						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof x2 === 'number')) {
								throw new TypeError('Value of argument "x2" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x2));
						}

						if (!(typeof y2 === 'number')) {
								throw new TypeError('Value of argument "y2" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y2));
						}

						if (!(typeof a === 'number')) {
								throw new TypeError('Value of argument "a" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(a));
						}

						if (!(typeof s === 'number')) {
								throw new TypeError('Value of argument "s" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(s));
						}

						this.checkValues(x, y, x2, y2, 1, a, true);
						this.stat2 = this.checkValues(x2, y2, x2, y2, 1, a, true);

						if (!IStatsBuffer(this.stat2)) {
								throw new TypeError('Value of "this.stat2" violates contract.\n\nExpected:\nIStatsBuffer\n\nGot:\n' + _inspect(this.stat2));
						}

						this.buffer_context.moveTo(this.stat.x * s, this.stat.y * s);
						this.opacity(a);
						this.buffer_context.strokeStyle = col;
						this.buffer_context.lineTo(this.stat2.x * s, this.stat2.y * s);
				}
		}, {
				key: 'lineend',
				value: function lineend() {
						this.buffer_context.stroke();
				}
		}, {
				key: 'linestart',
				value: function linestart() {
						this.buffer_context.beginPath();
				}
		}, {
				key: 'triangle',
				value: function triangle(x0, y0, x1, y1, x2, y2, col, col2, width) {
						if (!(typeof x0 === 'number')) {
								throw new TypeError('Value of argument "x0" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x0));
						}

						if (!(typeof y0 === 'number')) {
								throw new TypeError('Value of argument "y0" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y0));
						}

						if (!(typeof x1 === 'number')) {
								throw new TypeError('Value of argument "x1" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x1));
						}

						if (!(typeof y1 === 'number')) {
								throw new TypeError('Value of argument "y1" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y1));
						}

						if (!(typeof x2 === 'number')) {
								throw new TypeError('Value of argument "x2" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x2));
						}

						if (!(typeof y2 === 'number')) {
								throw new TypeError('Value of argument "y2" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y2));
						}

						if (!(typeof width === 'number')) {
								throw new TypeError('Value of argument "width" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(width));
						}

						//this.buffer_context.fillStyle = col;
						//this.buffer_context.strokeStyle = col2;
						this.colour(col, col2);
						this.buffer_context.lineWidth = width;
						this.buffer_context.moveTo(x0, y0); // give the (x,y) coordinates
						this.buffer_context.lineTo(x1, y1);
						this.buffer_context.lineTo(x2, y2);
						this.buffer_context.lineTo(x0, y0);
						this.buffer_context.fill();
						this.buffer_context.stroke();
						this.buffer_context.closePath();
						this.clean();
				}
		}, {
				key: 'quadraticCurve',
				value: function quadraticCurve(x, y, x2, y2, a, col) {
						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof x2 === 'number')) {
								throw new TypeError('Value of argument "x2" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x2));
						}

						if (!(typeof y2 === 'number')) {
								throw new TypeError('Value of argument "y2" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y2));
						}

						if (!(typeof a === 'number')) {
								throw new TypeError('Value of argument "a" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(a));
						}

						var t = this.buffer_context.strokeStyle;
						var tF = this.buffer_context.fillStyle;
						this.checkValues(x, y, 1, 1, 1, a, true, col);
						this.stat2 = this.checkValues(x2, y2, 1, 1, 1, a, true, col);

						if (!IStatsBuffer(this.stat2)) {
								throw new TypeError('Value of "this.stat2" violates contract.\n\nExpected:\nIStatsBuffer\n\nGot:\n' + _inspect(this.stat2));
						}

						this.buffer_context.beginPath();
						this.buffer_context.quadraticCurveTo(this.stat.x, this.stat.y, this.stat2.x, this.stat2.y);
						this.buffer_context.strokeStyle = col;
						this.buffer_context.stroke();
						this.buffer_context.fill();
						this.checkValues(x, y, 1, 1, 1, a, true, t);
						this.stat2 = this.checkValues(x2, y2, 1, 1, 1, a, true, t);

						if (!IStatsBuffer(this.stat2)) {
								throw new TypeError('Value of "this.stat2" violates contract.\n\nExpected:\nIStatsBuffer\n\nGot:\n' + _inspect(this.stat2));
						}

						this.buffer_context.strokeStyle = t;
						this.buffer_context.fillStyle = tF;
				}

				/* visuals.paths */
				/*
    	        paths:Object = {


    	            //list of paths
    		        //    _initalized:boolean  = false
    		        //    ,_count: boolean  = false

    	            //Reinitalize the objects functions,
    	            //Required for use

    	            init(visuals){
    	                this._initalized = false;
    	        		this._count = false;
    	                this.list = [];

    	                this.visuals = visuals;

    	                this._initalized = true;

    	                this._count = 0;

    	                return this;

    	            }

    	            list:any = [];

    	            render(path){

    	                var list = path.list;
    	                var length = path.list.length;
    	                var i = 0;


    	                for(i=0;i<=length-1;i++)
    	                    this.visuals.rect(list[i].x,list[i].y,1,1,"#FFFFFF");

    	                return true;
    	            }

    	            addPath(id,tempX,tempY){
    	                var path =  {name:id,x:tempX,y:tempY};
    	                path.addPoint = this.addPoint;
    	                path.list = [];
    	                path.p = this;
    	                //////console.log(path);


    	                var t = this.list.push(path);
    	                 t.p = this;
    	                return this.list[this._count++];
    	            }

    	            addPoint(tempX,tempY){

    	                (this.list.push({x:this.x+tempX,y:this.y+tempY}));

    	            }

    	        }
    */

				/* Calls the draw function of the array, passing itself in */

				/* TODO: type */

		}, {
				key: 'image_part',


				/* BUFFER SUPPORTED FUNCTIONS
    	Used in INIT, SPRITES, etc */

				/* Append an image_part to the buffer */

				value: function image_part(image, x, y, s, a, c, xx, yy, w, h) {
						if (!(image instanceof HTMLImageElement)) {
								throw new TypeError('Value of argument "image" violates contract.\n\nExpected:\nHTMLImageElement\n\nGot:\n' + _inspect(image));
						}

						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof s === 'number')) {
								throw new TypeError('Value of argument "s" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(s));
						}

						if (!(typeof a === 'number')) {
								throw new TypeError('Value of argument "a" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(a));
						}

						if (!(typeof c === 'number')) {
								throw new TypeError('Value of argument "c" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(c));
						}

						if (!(typeof xx === 'number')) {
								throw new TypeError('Value of argument "xx" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(xx));
						}

						if (!(typeof yy === 'number')) {
								throw new TypeError('Value of argument "yy" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(yy));
						}

						if (!(typeof w === 'number')) {
								throw new TypeError('Value of argument "w" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(w));
						}

						if (!(typeof h === 'number')) {
								throw new TypeError('Value of argument "h" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(h));
						}

						////USE SPRITE FROM A SPRITE REGISTRY: TODO
						this.appendNew(new __WEBPACK_IMPORTED_MODULE_3__api_sprite__["a" /* default */](image, x, y, s, a, c, xx, yy, w, h));
						//this._image_part(image,x,y,s,a,c,xx,yy,w,h);
				}

				/* END BUFFER SUPPORTED FUNCTIONS */

				/* RAW API FUNCTIONS */

				/* Draw the image_part
    	Used in DRAW
    */

		}, {
				key: '_image_part',
				value: function _image_part(image, x, y, s, a, c, xx, yy, w, h) {
						if (!(image instanceof HTMLImageElement)) {
								throw new TypeError('Value of argument "image" violates contract.\n\nExpected:\nHTMLImageElement\n\nGot:\n' + _inspect(image));
						}

						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof s === 'number')) {
								throw new TypeError('Value of argument "s" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(s));
						}

						if (!(typeof a === 'number')) {
								throw new TypeError('Value of argument "a" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(a));
						}

						if (!(typeof c === 'number')) {
								throw new TypeError('Value of argument "c" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(c));
						}

						if (!(typeof xx === 'number')) {
								throw new TypeError('Value of argument "xx" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(xx));
						}

						if (!(typeof yy === 'number')) {
								throw new TypeError('Value of argument "yy" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(yy));
						}

						if (!(typeof w === 'number')) {
								throw new TypeError('Value of argument "w" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(w));
						}

						if (!(typeof h === 'number')) {
								throw new TypeError('Value of argument "h" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(h));
						}

						this.checkValues(x, y, w, h, s, a, c);

						this.buffer_context.oImageSmoothingEnabled = false;
						this.buffer_context.mozImageSmoothingEnabled = false;
						this.buffer_context.webkitImageSmoothingEnabled = false;
						this.buffer_context.msImageSmoothingEnabled = false;
						this.buffer_context.imageSmoothingEnabled = false;

						this.stat.c ? this.buffer_context.drawImage(image, xx, yy, w, h, this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.drawImage(image, xx, yy, w, h, this.stat.x, this.stat.y, this.stat.w, this.stat.h);
						this.opacity(1);
				}

				/* END RAW API */

				/* Private for MapMaker and loading maps
    *	use import instead
    */

		}, {
				key: 'createMapObject',


				/* Used to instanciate a map object based on type.
    *	MapEditor
    */

				value: function createMapObject(type) {
						var img = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Image();
						var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
						var y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
						var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
						var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
						var c = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
						var xx = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
						var yy = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
						var w = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
						var h = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;

						if (!(typeof type === 'string')) {
								throw new TypeError('Value of argument "type" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(type));
						}

						if (!(img instanceof HTMLImageElement || typeof img === 'number')) {
								throw new TypeError('Value of argument "img" violates contract.\n\nExpected:\nHTMLImageElement | number\n\nGot:\n' + _inspect(img));
						}

						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof s === 'number' || typeof s === 'string')) {
								throw new TypeError('Value of argument "s" violates contract.\n\nExpected:\nnumber | string\n\nGot:\n' + _inspect(s));
						}

						if (!(typeof a === 'number')) {
								throw new TypeError('Value of argument "a" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(a));
						}

						if (!(typeof c === 'number')) {
								throw new TypeError('Value of argument "c" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(c));
						}

						if (!(typeof xx === 'number')) {
								throw new TypeError('Value of argument "xx" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(xx));
						}

						if (!(typeof yy === 'number')) {
								throw new TypeError('Value of argument "yy" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(yy));
						}

						if (!(typeof w === 'number')) {
								throw new TypeError('Value of argument "w" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(w));
						}

						if (!(typeof h === 'number')) {
								throw new TypeError('Value of argument "h" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(h));
						}

						var item = void 0;
						switch (type) {

								case 'Circle':

										//Actual values x,y,r,col,a,visuals
										this.appendNew(item = new this.createClassList[type](img, x, y, s, a, this));

										break;

								default:

										this.appendNew(item = new this.createClassList[type](img, x, y, s, a, c, xx, yy, w, h, this));

										break;

						}

						return item;
				}
		}, {
				key: 'push',


				/*Use to push unpublished objects to buffer
    	ex. new Circle(10,10,10,"#FFFFFF",1,null)
    		where null for optional .visuals
    */

				value: function push(a) {
						//totype

						this.appendNew(a);

						return a;
				}
		}, {
				key: 'Tile',
				value: function Tile() {
						var img = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Image();
						var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
						var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
						var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
						var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
						var c = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
						var xx = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
						var yy = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
						var w = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
						var h = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
						var visuals = arguments[10];

						if (!(img instanceof HTMLImageElement)) {
								throw new TypeError('Value of argument "img" violates contract.\n\nExpected:\nHTMLImageElement\n\nGot:\n' + _inspect(img));
						}

						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof s === 'number')) {
								throw new TypeError('Value of argument "s" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(s));
						}

						if (!(typeof a === 'number')) {
								throw new TypeError('Value of argument "a" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(a));
						}

						if (!(typeof c === 'number')) {
								throw new TypeError('Value of argument "c" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(c));
						}

						if (!(typeof xx === 'number')) {
								throw new TypeError('Value of argument "xx" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(xx));
						}

						if (!(typeof yy === 'number')) {
								throw new TypeError('Value of argument "yy" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(yy));
						}

						if (!(typeof w === 'number')) {
								throw new TypeError('Value of argument "w" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(w));
						}

						if (!(typeof h === 'number')) {
								throw new TypeError('Value of argument "h" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(h));
						}

						if (!(visuals === undefined || IVisuals(visuals))) {
								throw new TypeError('Value of optional argument "visuals" violates contract.\n\nExpected:\nIVisuals\n\nGot:\n' + _inspect(visuals));
						}

						var item = void 0;
						this.appendNew(item = new __WEBPACK_IMPORTED_MODULE_4__api_tile__["a" /* default */](img, x, y, s, a, c, xx, yy, w, h, visuals));
						return item;
				}

				/**
    /* CIRCLE TEST
        circle now allows passing vectors
          Test: argument based functions
            Method1:
                if based on first argument
                    Method2 (unused):
                        inherit _circle function and pass accordingly
      */

		}, {
				key: 'Circle',
				value: function Circle(x, y, r, col) {
						var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof r === 'number')) {
								throw new TypeError('Value of argument "r" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(r));
						}

						if (!(typeof col === 'number' || typeof col === 'string' || col instanceof CanvasPattern || col instanceof CanvasGradient)) {
								throw new TypeError('Value of argument "col" violates contract.\n\nExpected:\nnumber | string | CanvasPattern | CanvasGradient\n\nGot:\n' + _inspect(col));
						}

						if (!(a === undefined || a == null || typeof a === 'number')) {
								throw new TypeError('Value of optional argument "a" violates contract.\n\nExpected:\nvoid | number\n\nGot:\n' + _inspect(a));
						}

						var item = void 0;
						this.appendNew(item = new __WEBPACK_IMPORTED_MODULE_2__math_circle__["a" /* default */](x, y, r, col, a));
						return item;
				}
		}, {
				key: 'circle',
				value: function circle(XVec, YR, RC, CA, A) {
						if (!(typeof XVec === 'number' || IVector(XVec))) {
								throw new TypeError('Value of argument "XVec" violates contract.\n\nExpected:\nnumber | IVector\n\nGot:\n' + _inspect(XVec));
						}

						if (!(typeof YR === 'number')) {
								throw new TypeError('Value of argument "YR" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(YR));
						}

						if (!(typeof RC === 'number')) {
								throw new TypeError('Value of argument "RC" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(RC));
						}

						var x = void 0,
						    y = void 0,
						    r = void 0,
						    col = void 0,
						    a = void 0;

						x = XVec;
						y = YR;
						r = RC;
						col = CA;
						a = A;

						if ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object') {

								x = XVec.x;
								y = XVec.y;
								r = YR;
								col = RC;
								a = CA;
						}

						this._circle(x, y, r, col, a);
				}
		}, {
				key: '_circle',
				value: function _circle(x, y, r, col) {
						var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof r === 'number')) {
								throw new TypeError('Value of argument "r" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(r));
						}

						if (!(typeof col === 'number' || typeof col === 'string' || col instanceof CanvasPattern || col instanceof CanvasGradient)) {
								throw new TypeError('Value of argument "col" violates contract.\n\nExpected:\nnumber | string | CanvasPattern | CanvasGradient\n\nGot:\n' + _inspect(col));
						}

						if (!(a === undefined || typeof a === 'number')) {
								throw new TypeError('Value of optional argument "a" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(a));
						}

						this.checkValues(x, y, 1, 1, r, a, 0, col, "");
						this.buffer_context.beginPath();
						this.buffer_context.arc(this.stat.x, this.stat.y, this.stat.s * this.scale, 0, 2 * Math.PI, false);
						this.buffer_context.fillStyle = this.stat.colour;
						this.buffer_context.fill();
						this.clean();
				}
		}, {
				key: 'circle_free',
				value: function circle_free(x, y, r, col, a) {
						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof r === 'number')) {
								throw new TypeError('Value of argument "r" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(r));
						}

						if (!(typeof col === 'string' || col instanceof CanvasPattern || col instanceof CanvasGradient)) {
								throw new TypeError('Value of argument "col" violates contract.\n\nExpected:\nstring | CanvasPattern | CanvasGradient\n\nGot:\n' + _inspect(col));
						}

						if (!(typeof a === 'number')) {
								throw new TypeError('Value of argument "a" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(a));
						}

						this.checkValues(x, y, r, r, r, a, 1, col);
						this.buffer_context.beginPath();
						this.buffer_context.arc(x, y, r * this.scale, 0, 2 * Math.PI, false);
						this.buffer_context.fillStyle = this.stat.colour;
						this.buffer_context.fill();
						this.clean();
				}
		}, {
				key: 'text_width',
				value: function text_width(string) {
						function _ref30(_id30) {
								if (!(typeof _id30 === 'number')) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id30));
								}

								return _id30;
						}

						if (!(typeof string === 'string')) {
								throw new TypeError('Value of argument "string" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(string));
						}

						return _ref30(this.buffer_context.measureText(string).width); // Not WOrking
				}

				/**
    /* END CIRCLE TEST
    */

				//region unused

		}, {
				key: 'trytolockOrientation',
				value: function trytolockOrientation() {
						/*
      if (!this.autoLockOrientation || this.orientations === 0)
      return;
      */
						var orientation = "portrait";
						var works = false;

						//if (this.orientations === 2)
						orientation = "landscape";

						// Note IE/Edge can throw exceptions here if in an iframe (WrongDocumentError), which also affects the debugger.
						/*	try {
      		if (screen["orientation"] && screen["orientation"]["lock"])
      	works = screen["orientation"]["lock"](orientation);
      else if (screen["lockOrientation"])
      	works = screen["lockOrientation"](orientation);
      else if (screen["webkitLockOrientation"])
      	works = screen["webkitLockOrientation"](orientation);
      else if (screen["mozLockOrientation"])
      	works = screen["mozLockOrientation"](orientation);
      else if (screen["msLockOrientation"])
      	works = screen["msLockOrientation"](orientation);
      }
      catch (e)
      {
      if (console && console.warn)
      	console.warn("Failed to lock orientation: ", e);
      }
      */

						return works;
				}

				/*
     		newscale(w, h, force){
    	var offx = 0, offy = 0;
    	var neww = 0, newh = 0, intscale = 0;
    			// Hide address bar on iPhone iOS 6 only
    	var tryHideAddressBar = (this.isiPhoneiOS6 && this.isSafari && !navigator["standalone"] && !this.isDomFree && !this.isCordova);
    			if (tryHideAddressBar)
    		h += 60;		// height of Safari iPhone iOS 6 address bar
    			// Ignore redundant events
    	if (this.lastWindowWidth === w && this.lastWindowHeight === h && !force)
    		return;
    			this.lastWindowWidth = w;
    	this.lastWindowHeight = h;
    			var mode = this.fullscreen_mode;
    	var orig_aspect, cur_aspect;
    			var isfullscreen = (document["mozFullScreen"] || document["webkitIsFullScreen"] || !!document["msFullscreenElement"] || document["fullScreen"] || this.isNodeFullscreen) && !this.isCordova;
    			if (!isfullscreen && this.fullscreen_mode === 0 && !force)
    		return;			// ignore size events when not fullscreen and not using a fullscreen-in-browser mode
    			if (isfullscreen && this.fullscreen_scaling > 0)
    		mode = this.fullscreen_scaling;
    			var dpr = this.devicePixelRatio;
    			// Letterbox or letterbox integer scale modes: adjust width and height and offset canvas accordingly
    	if (mode >= 4)
    	{
    		orig_aspect = this.original_width / this.original_height;
    		cur_aspect = w / h;
    				// too wide: scale to fit height
    		if (cur_aspect > orig_aspect)
    		{
    			neww = h * orig_aspect;
    					if (mode === 5)	// integer scaling
    			{
    				// integer scale by device pixels, not CSS pixels, since DPR may be non-integral
    				intscale = (neww * dpr) / this.original_width;
    				if (intscale > 1)
    					intscale = Math.floor(intscale);
    				else if (intscale < 1)
    					intscale = 1 / Math.ceil(1 / intscale);
    				neww = this.original_width * intscale / dpr;
    				newh = this.original_height * intscale / dpr;
    				offx = (w - neww) / 2;
    				offy = (h - newh) / 2;
    				w = neww;
    				h = newh;
    			}
    			else
    			{
    				offx = (w - neww) / 2;
    				w = neww;
    			}
    		}
    		// otherwise scale to fit width
    		else
    		{
    			newh = w / orig_aspect;
    					if (mode === 5)	// integer scaling
    			{
    				intscale = (newh * dpr) / this.original_height;
    				if (intscale > 1)
    					intscale = Math.floor(intscale);
    				else if (intscale < 1)
    					intscale = 1 / Math.ceil(1 / intscale);
    				neww = this.original_width * intscale / dpr;
    				newh = this.original_height * intscale / dpr;
    				offx = (w - neww) / 2;
    				offy = (h - newh) / 2;
    				w = neww;
    				h = newh;
    			}
    			else
    			{
    				offy = (h - newh) / 2;
    				h = newh;
    			}
    		}
    				if (isfullscreen && !this.isNWjs)
    		{
    			offx = 0;
    			offy = 0;
    		}
    	}
    	// Centered mode in NW.js: keep canvas size the same and just center it
    	else if (this.isNWjs && this.isNodeFullscreen && this.fullscreen_mode_set === 0)
    	{
    		offx = Math.floor((w - this.original_width) / 2);
    		offy = Math.floor((h - this.original_height) / 2);
    		w = this.original_width;
    		h = this.original_height;
    	}
    			if (mode < 2)
    		this.aspect_scale = dpr;
    			// iPad 3 Retina bug workaround: if in retina display and the width is 2048, for some reason
    	// performance is massively reduced.  Workaround (found by Arima) is to set a width of 2046 instead.
    	if (this.isRetina && this.isiPad && dpr > 1)	// don't apply to iPad 1-2
    	{
    		if (w >= 1024)
    			w = 1023;		// 2046 retina pixels
    		if (h >= 1024)
    			h = 1023;
    	}
    			// hacks for iOS retina
    	this.cssWidth = Math.round(w);
    	this.cssHeight = Math.round(h);
    	this.width = Math.round(w * dpr);
    	this.height = Math.round(h * dpr);
    	this.redraw = true;
    			if (this.wantFullscreenScalingQuality)
    	{
    		this.draw_width = this.width;
    		this.draw_height = this.height;
    		this.fullscreenScalingQuality = true;
    	}
    	else
    	{
    		// Render directly even in low-res scale mode if the display area is smaller than the window size area,
    		// or in crop mode (since no engine scaling happens)
    		if ((this.width < this.original_width && this.height < this.original_height) || mode === 1)
    		{
    			this.draw_width = this.width;
    			this.draw_height = this.height;
    			this.fullscreenScalingQuality = true;
    		}
    		else
    		{
    			this.draw_width = this.original_width;
    			this.draw_height = this.original_height;
    			this.fullscreenScalingQuality = false;
    			*/
				/*var orig_aspect = this.original_width / this.original_height;
    var cur_aspect = this.width / this.height;
    		// note mode 2 (scale inner) inverts this logic and will use window width when width wider.
    if ((this.fullscreen_mode !== 2 && cur_aspect > orig_aspect) || (this.fullscreen_mode === 2 && cur_aspect < orig_aspect))
    	this.aspect_scale = this.height / this.original_height;
    else
    	this.aspect_scale = this.width / this.original_width;*/
				/*
    // Scale inner or scale outer mode: adjust the draw size to be proportional
    // to the window size, since the draw size is simply stretched-to-fit in the window
    if (mode === 2)		// scale inner
    {
    orig_aspect = this.original_width / this.original_height;
    cur_aspect = this.lastWindowWidth / this.lastWindowHeight;
    		if (cur_aspect < orig_aspect)
    	this.draw_width = this.draw_height * cur_aspect;
    else if (cur_aspect > orig_aspect)
    	this.draw_height = this.draw_width / cur_aspect;
    }
    else if (mode === 3)
    {
    orig_aspect = this.original_width / this.original_height;
    cur_aspect = this.lastWindowWidth / this.lastWindowHeight;
    		if (cur_aspect > orig_aspect)
    	this.draw_width = this.draw_height * cur_aspect;
    else if (cur_aspect < orig_aspect)
    	this.draw_height = this.draw_width / cur_aspect;
    }
    }
    }
    if (this.canvasdiv && !this.isDomFree)
    {
    jQuery(this.canvasdiv).css({"width": Math.round(w) + "px",
    					"height": Math.round(h) + "px",
    					"margin-left": Math.floor(offx) + "px",
    					"margin-top": Math.floor(offy) + "px"});
    if (typeof cr_is_preview !== "undefined")
    {
    jQuery("#borderwrap").css({"width": Math.round(w) + "px",
    						"height": Math.round(h) + "px"});
    }
    }
    if (this.canvas)
    {
    this.canvas.width = Math.round(w * dpr);
    this.canvas.height = Math.round(h * dpr);
    if (this.isEjecta)
    {
    this.canvas.style.left = Math.floor(offx) + "px";
    this.canvas.style.top = Math.floor(offy) + "px";
    this.canvas.style.width = Math.round(w) + "px";
    this.canvas.style.height = Math.round(h) + "px";
    }
    else if (this.isRetina && !this.isDomFree)
    {
    this.canvas.style.width = Math.round(w) + "px";
    this.canvas.style.height = Math.round(h) + "px";
    }
    }
    if (this.overlay_canvas)
    {
    this.overlay_canvas.width = Math.round(w * dpr);
    this.overlay_canvas.height = Math.round(h * dpr);
    this.overlay_canvas.style.width = this.cssWidth + "px";
    this.overlay_canvas.style.height = this.cssHeight + "px";
    }
    if (this.glwrap)
    {
    this.glwrap.setSize(Math.round(w * dpr), Math.round(h * dpr));
    }
    if (this.isDirectCanvas && this.ctx)
    {
    this.ctx.width = Math.round(w);
    this.ctx.height = Math.round(h);
    }
    if (this.ctx)
    {
    // Re-apply the image smoothing property, since resizing the canvas resets its state
    this.ctx["webkitImageSmoothingEnabled"] = this.linearSampling;
    this.ctx["mozImageSmoothingEnabled"] = this.linearSampling;
    this.ctx["msImageSmoothingEnabled"] = this.linearSampling;
    this.ctx["imageSmoothingEnabled"] = this.linearSampling;
    }
    // Try to lock orientation to the project setting
    this.tryLockOrientation();
    // Attempt to hide address bar on iPhone
    // iOS 7.1 bug: weird glitch where a big space appears at the bottom of the
    // screen when going in to landscape mode. This call to scrollTo seems to
    // fix it, so always run this on iPhone.
    if (!this.isDomFree && (tryHideAddressBar || this.isiPhone))
    {
    window.setTimeout(function () {
    window.scrollTo(0, 1);
    }, 100);
    }
    }
    */
				/** Get ImageData
       * @
       */

				/*
    	getData(){
    		        let width = this.buffer.width;
            let height = this.buffer.height;
    				let buffer = this.buffer_context;
    		        let imageData = buffer.getImageData(0,0,width,height);
    				        let w2 = width/2;
            let d = imageData.data;
    		        for(y=0; y<=height;y++){
    		            inpos = y * width * 4;
                outpos = inpos+ w2 *4;
    		            for (x = 0; x<w2;x++) {
    		                var r = d[inpos++];
                    var g = d[inpos++];
                    var b = d[inpos++];
                    var a = d[inpos++];
    		                 b = Math.min(255,b);
    		                if ((r==0)&&(g==0)&&(b==0))
                    {
                        inpos++;
                        inpos++;
                        inpos++;
                    	imageData.data[inpos++] = 0;
                    }
                    else
                    {
                        inpos++;
                        inpos++;
                        inpos++;
                        inpos++;
                    }
    		            }
    		        }
    		        buffer.putImageData(imageData,0,0);
    			}
    */

				/**
         debug(){
               /*
             if (!App.ext.debug.strength=="Normal")
                 return;
             if ((App.ext.debug.strength=="off")||(App.ext.debug.strength=="none"))
                 return;
             this.rect_ext(-this.app.client.setWidth,0,this.app.client.setWidth+this.app.client.setWidth+this.app.client.setWidth,this.point,1,0.1,0);
             this.rect_ext(0,0,this.app.client.setWidth,this.point,1,0.1,0);
             this.text_ext("0",	0,this.point*0.9,this.point*0.9);
             this.text_ext(this.app.client.setWidth,	this.app.client.setWidth-25,this.point*0.9,this.point*0.9);
             if (window.innerWidth>(this.app.client.setWidth*1.1)*this.scale)
                 {
                     this.text_free(0-this.fixX(0),	30,4+this.fixY(this.point),this.point*0.99);
                     this.text_free(this.app.client.width,	window.innerWidth-15,4+this.fixY(this.point),this.point*0.99);
                 }
             //this.text_ext("Debug",	this.app.client.setWidth/2.5,this.point*0.9,this.point*0.9);
             //this.text_ext(this.app.client.name,5,25,"#FFFFFF",4,1,0);
             //this.text_ext("app.ext.input",15,40,"#FFFFFF",1,1,0);
             //this.text_ext("x "+Math.round(App.input.x*100)/100		,25,55,"#FFFFFF",1,1,0);
             //this.text_ext("x: "+Math.round(App.input.window.x*100)/100,75,55,"#FFFFFF",1,1,0);
             //this.text_ext("y "+Math.round(App.input.y*100)/100		,25,70,"#FFFFFF",1,1,0);
             //this.text_ext("y: "+Math.round(App.input.window.y*100)/100,75,70,"#FFFFFF",1,1,0);
             if (App.fps<20)
             ////console.log("FPSLow: "+App.fps);
               var data = [
                         [this.app.client.name],
                         [App.code+ " " +App.codefmk],
                         [this.app.client.name],
                         [
                         "app.ext.input",
                         "x "+Math.round(App.input.x*100)/100		,
                         "x "+Math.round(App.input.window.x*100)/100,
                         "d "+App.input.pressed+"   p "+App.input.duration,
    	                        "y "+Math.round(App.input.y*100)/100		,
                         "y "+Math.round(App.input.window.y*100)/100,
                         (App.ext.useragent.trident)?"Input: "+"Touch":"Input: Mouse",
                         ],
                         [
                         "app.client",
                         "discription","","",
                         "width" ,this.app.client.setWidth,this.app.client.width,
                         "height",this.app.client.setHeight,this.app.client.height,
                         "fps",Math.round(this.app.client.fps)+"/"+this.app.client.targetfps+":"+Math.round(this.app.client.fps*1000)/1000,"",
                         "scale",this.app.client.scale,"",
                         "delta",this.app.client.delta,"",
                         "buffer","double","",
                         ],
                         [
                         "app.client.state","",
                         "[ "+this.app.client.update.state.name+" ] : "+this.app.client.Math.Data.Update()+"B",
                         "",
                         ""
                         ],
                         [
                         "app.client.data","",
                         "visuals ",(App.ext.debug.strength!=="Lite"?this.app.client.Math.Data.kilobyteCount(this.app.client.visuals):"?"),"",
                         "graphics ",(App.ext.debug.strength!=="Lite"?this.app.client.Math.Data.kilobyteCount(this.app.client.graphics):"?"),"",
                         "audio ",(App.ext.debug.strength!=="Lite"?this.app.client.Math.Data.kilobyteCount(this.app.client.audio):"?"),"",
                         "state ",(App.ext.debug.strength!=="Lite"?this.app.client.Math.Data.kilobyteCount(this.app.client.update.state.current):"?"),"",
                         "ext ",(App.ext.debug.strength!=="Lite"?this.app.client.Math.Data.kilobyteCount(App.ext):"?"),"",
                         "Total ",(App.ext.debug.strength!=="Lite"?this.app.client.Math.Data.Total():"?"),""
                           ]
                     ];
                     for(var t=0,tt=0,p=65,tr=0,ii=0;ii<data.length&&(6!=ii||"Lite"!=App.ext.debug.strength);++ii)
                         {
                         for(var i=data[ii].length;0<i;--i)
                             0==i%3&&(t=0,tr=15,tt++),
                             this.text_ext(data[ii][data[ii].length-i],tr+15+p*t,25+1.1*this.point*tt,"#AAAAAA",1,1,0),
                             tr=0,
                             t++;
                         t=0;
                         tt++
                         };
               //this.text_ext("D: "+App.input.duration,210,55);
             //this.text_ext("P: "+App.input.pressed,160,55);
             //(App.ext.useragent.trident)?this.text_ext("Input: "+"Touch",160,70):this.text_ext("Input: "+"Mouse",160,70);
             //this.text_ext("I: "+App.input.window.inside+" X: "+App.input.window.x+" Y: "+App.input.window.y,155,70);
             //this.text_ext("app.client",15,85,"#FFFFFF",1,1,0);
             //this.text_ext("Discription: "+this.app.client.discription,25,100,"#FFFFFF",1,1,0);
             //this.text_ext("Fps: "+Math.round(this.app.client.fps)+"/"+this.app.client.targetfps+":"+Math.round(App.ext.fps*1000)/1000,25,115,"#FFFFFF",1,1,0);
             //this.text_ext("Width: "+this.app.client.width,25,130,"#FFFFFF",1,1,0);
             //this.text_ext("Height: "+this.app.client.height,25,145,"#FFFFFF",1,1,0);
             //this.text_ext("setWidth: "+this.app.client.setWidth,110,130,"#FFFFFF",1,1,0);
             //this.text_ext("setHeight: "+this.app.client.setHeight,110,145,"#FFFFFF",1,1,0);
             //this.text_ext("Scale: "+this.scale,25,160,"#FFFFFF",1,1,0);
             //this.text_ext("Delta: "+this.app.client.delta,25,175,"#FFFFFF",1,1,0);
             //this.text_ext("Buffering: "+"Double",25,190,"#FFFFFF",1,1,0);
             //this.text_ext("client.data",15,205,"#FFFFFF",1,1,0);
             //this.text_ext("[ "+this.app.client.update.state.name+" ] : "+this.app.client.Math.Data.Update()+"B",25,220,"#FFFFFF",1,1,0);
             this.text_ext("Log: "+App.ext.debug.text,35,this.app.client.setHeight-25,this.point);
             if (App.ext.debug.strength=="Lite")
                 return;
                   try {
             //this.text_ext("visuals: " 	+ this.app.client.Math.Data.kilobyteCount(this.app.client.visuals) 		+"kb",25,235,"#FFFFFF",1,1,0);
             }catch(e){}
             //this.text_ext("graphics: " + this.app.client.Math.Data.kilobyteCount(this.app.client.graphics) 		+"kb",25,250,"#FFFFFF",1,1,0);
             //this.text_ext("audio: " 	+ this.app.client.Math.Data.kilobyteCount(this.app.client.audio) 		+"kb",25,265,"#FFFFFF",1,1,0);
             //this.text_ext("State: " 	+ this.app.client.Math.Data.kilobyteCount(this.app.client.update.state) 	+"kb",25,280,"#FFFFFF",1,1,0);
             //this.text_ext("ext: " 		+ this.app.client.Math.Data.kilobyteCount(App.ext) 					+"kb",25,295,"#FFFFFF",1,1,0);
             //this.text_ext("Total: "		+ this.app.client.Math.Data.Total()								+"kb",25,325,"#FFFFFF",1,1,0);
    	*/

				/*					    }
    		*/

				//endregion

		}, {
				key: 'stat',
				set: function set(s) {
						if (!(s instanceof __WEBPACK_IMPORTED_MODULE_1__base_stats__["a" /* default */])) {
								throw new TypeError('Value of argument "s" violates contract.\n\nExpected:\nStatsBuffer\n\nGot:\n' + _inspect(s));
						}

						console.log('api', s);
						this.get('data')[0] = s;
				}

				/**
       * @property
       */

				,
				get: function get() {
						function _ref(_id) {
								if (!(_id instanceof __WEBPACK_IMPORTED_MODULE_1__base_stats__["a" /* default */])) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nStatsBuffer\n\nGot:\n' + _inspect(_id));
								}

								return _id;
						}

						return _ref(this.get('data')[0]);
				}
		}, {
				key: 'document',
				get: function get() {

						return document;
				}
		}]);

		return API;
}(__WEBPACK_IMPORTED_MODULE_5__api_core__["a" /* default */]);

API.properties = {

		data: [new __WEBPACK_IMPORTED_MODULE_1__base_stats__["a" /* default */]()]

};
/* harmony default export */ __webpack_exports__["a"] = (API);

function _inspect(input, depth) {
		var maxDepth = 4;
		var maxKeys = 15;

		if (depth === undefined) {
				depth = 0;
		}

		depth += 1;

		if (input === null) {
				return 'null';
		} else if (input === undefined) {
				return 'void';
		} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
				return typeof input === 'undefined' ? 'undefined' : _typeof(input);
		} else if (Array.isArray(input)) {
				if (input.length > 0) {
						if (depth > maxDepth) return '[...]';

						var first = _inspect(input[0], depth);

						if (input.every(function (item) {
								return _inspect(item, depth) === first;
						})) {
								return first.trim() + '[]';
						} else {
								return '[' + input.slice(0, maxKeys).map(function (item) {
										return _inspect(item, depth);
								}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
						}
				} else {
						return 'Array';
				}
		} else {
				var keys = Object.keys(input);

				if (!keys.length) {
						if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
								return input.constructor.name;
						} else {
								return 'Object';
						}
				}

				if (depth > maxDepth) return '{...}';
				var indent = '  '.repeat(depth - 1);
				var entries = keys.slice(0, maxKeys).map(function (key) {
						return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
				}).join('\n  ' + indent);

				if (keys.length >= maxKeys) {
						entries += '\n  ' + indent + '...';
				}

				if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
						return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
				} else {
						return '{\n  ' + indent + entries + '\n' + indent + '}';
				}
		}
}

/***/ }),

/***/ "./src/modules/core/api/graphics.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_sjs_js__ = __webpack_require__("./src/modules/core/base/sjs.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
BASE iamge class  _WIP
*/

var Base = function () {
		function Base() {
				_classCallCheck(this, Base);
		}

		_createClass(Base, [{
				key: 'get',


				/**
    Get an image  _WIP
    */

				value: function get() {
						function _ref(_id) {
								if (!(_id instanceof Object)) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id));
								}

								return _id;
						}

						var img = new Image();
						img.src = this.src;
						img.file = this.file;
						img.name = this.name;
						img.number = 1 + window.apps[0].client.graphics.SpriteLoadErrors++;

						img.onload = function () {

								window.apps[0].client.graphics.SpriteLoadErrors--;
						};

						return _ref(img);
				}

				/**
    Retrieve Zip _WIP
    */

		}, {
				key: 'retrieveZipFile',
				value: function retrieveZipFile(file) {
						if (!(typeof file === 'string')) {
								throw new TypeError('Value of argument "file" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(file));
						}

						file = String(file);

						var t = Application.client.data.Zip.file(file).asUint8Array();

						var strings = [],
						    chunksize = 0xffff;

						var len = t.length;

						// There is a maximum stack size. We cannot call String.fromCharCode with as many arguments as we want

						if (!(typeof len === 'number')) {
								throw new TypeError('Value of variable "len" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(len));
						}

						for (var i = 0; i * chunksize < len; i++) {

								strings.push(String.fromCharCode.apply(null, t.subarray(i * chunksize, (i + 1) * chunksize)));
						}

						var content = btoa(strings.join(''));

						return "data:image/png;base64," + String(content).trim();
				}

				/**
    Get from retrieved Zip _WIP
    */

		}, {
				key: 'getFromZip',
				value: function getFromZip() {

						var img = new Image();

						if (!(img instanceof Object)) {
								throw new TypeError('Value of variable "img" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(img));
						}

						var file = String(this.src);

						if (!(typeof file === 'string')) {
								throw new TypeError('Value of variable "file" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(file));
						}

						img.src = this.retrieveZipFile(this.src);

						img.file = this.file;

						img.name = this.name;

						img.number = 1 + window.apps[0].client.graphics.SpriteLoadErrors++;

						img.onload = function () {

								window.apps[0].client.graphics.SpriteLoadErrors--;
						};

						return img;
				}

				/**
    Unload graphics
    */

		}, {
				key: 'unload',
				value: function unload() {

						this.Sources.unload(this.name);
				}
		}]);

		return Base;
}();

;

var Library = function (_SJSClass) {
		_inherits(Library, _SJSClass);

		function Library() {
				var _ref11;

				var _temp, _this, _ret;

				_classCallCheck(this, Library);

				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
						args[_key] = arguments[_key];
				}

				return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref11 = Library.__proto__ || Object.getPrototypeOf(Library)).call.apply(_ref11, [this].concat(args))), _this), _this.path = "", _this.SpriteWebItems = new Array(0), _this.SpriteLoadNumber = 0, _this.SpriteLoadErrors = 0, _this.SpriteLoadTime = 0, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(Library, [{
				key: 'graphicsLibrary',


				/**
    * Loads objects used for loadng images _WIP to refractor
    * @param name - internal file name.
    * @param address - http link.
    */

				value: function graphicsLibrary() {

						this.Sprite = {};

						this.Sources = {};

						this.Sources.prototype = {

								get: function get() {
										return this.index;
								},

								getByName: function getByName(name) {
										return this.index[name];
								},

								getName: function getName(name) {
										return this.index[name].name;
								}

						};

						this.Sprite = Object.create(this.Base, {
								constructor: function Sprite(path, filename) {
										this.path = path;this.filename = filename;return path;
								},

								src: { value: "S:undefined" },

								file: { value: "S:undefined" },

								name: { value: "S:undefined" }

						});

						if (!(this.Sprite instanceof Object)) {
								throw new TypeError('Value of "this.Sprite" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(this.Sprite));
						}

						this.Sources = Object.create(this.Sources.prototype, {
								count: { writable: true, configurable: true, value: 0 },
								index: { value: new Array() },
								append: { value: function append(image) {
												if (this.index[image.name] == image) return;
												this.index[image.name] = image;
												this.count++;
										} },
								unload: { value: function unload(name) {
												this.index[name] = null;
												return this.index[name];
										} }
						});

						if (!(this.Sources instanceof Object)) {
								throw new TypeError('Value of "this.Sources" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(this.Sources));
						}

						return true;
				}
		}]);

		return Library;
}(__WEBPACK_IMPORTED_MODULE_0__base_sjs_js__["a" /* _SJSClass */]);

var Graphics = function (_Library) {
		_inherits(Graphics, _Library);

		function Graphics(app) {
				_classCallCheck(this, Graphics);

				var _this2 = _possibleConstructorReturn(this, (Graphics.__proto__ || Object.getPrototypeOf(Graphics)).call(this, app));

				_this2.Base = new Base();


				_this2.graphicsLibrary();

				return _this2;
		}

		/** Load a PNG
     * @method
     * @param name - client's reference name of the image, also filename if file is void
     * @param file - name of the file to load,optional
     * @method
     */

		_createClass(Graphics, [{
				key: 'load',
				value: function load(name, file) {
						function _ref4(_id4) {
								if (!(_id4 instanceof Object)) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id4));
								}

								return _id4;
						}

						if (!(typeof name === 'string')) {
								throw new TypeError('Value of argument "name" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(name));
						}

						if (!(typeof file === 'string' || file == null)) {
								throw new TypeError('Value of argument "file" violates contract.\n\nExpected:\nstring | void\n\nGot:\n' + _inspect(file));
						}

						if (typeof file === "undefined") file = this.app.options.get("paths").images + "" + name;

						this.Sources.append(this.SpriteAppend(name, file));

						return _ref4(this.Sources.getByName(name));
				}

				/** Load a PNG from a Zip _ WIP uses global zip name
       * @method
       * @param name - client's reference name of the image, also filename
       * @method
       */

		}, {
				key: 'loadFromZip',
				value: function loadFromZip(name) {
						function _ref5(_id5) {
								if (!(_id5 instanceof Object)) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id5));
								}

								return _id5;
						}

						if (!(typeof name === 'string')) {
								throw new TypeError('Value of argument "name" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(name));
						}

						var file = name;

						this.Sources.append(this.SpriteAppendZip(name, file));

						return _ref5(this.Sources.getByName(name));
				}

				/** Creates a sprite object and logs it.
       * @method
       * @param file - client's reference name of the image
       * @param src - source path
       * @param name - internal name of the sprite
       * @method
       */

		}, {
				key: 'SpriteCreate',
				value: function SpriteCreate(file, src, name) {
						function _ref6(_id6) {
								if (!(_id6 instanceof Object)) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id6));
								}

								return _id6;
						}

						if (!(typeof file === 'string')) {
								throw new TypeError('Value of argument "file" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(file));
						}

						if (!(typeof src === 'string')) {
								throw new TypeError('Value of argument "src" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(src));
						}

						if (!(typeof name === 'string')) {
								throw new TypeError('Value of argument "name" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(name));
						}

						this.SpriteLoadNumber++;

						this.SpriteLoadTime += 10 * this.app.delta_speed * this.SpriteLoadNumber;

						return _ref6(this.sprite = Object.create(this.Sprite, { file: { value: file }, src: { value: src }, name: { value: name } }));
				}

				/** Creates a sprite object and logs it.
       * @method
       * @param name - internal name of the sprite
       * @param file - source filename
       * @method
       */

		}, {
				key: 'SpriteAppend',
				value: function SpriteAppend(name, file) {
						function _ref7(_id7) {
								if (!(_id7 instanceof Object)) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id7));
								}

								return _id7;
						}

						if (!(typeof name === 'string')) {
								throw new TypeError('Value of argument "name" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(name));
						}

						if (!(typeof file === 'string')) {
								throw new TypeError('Value of argument "file" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(file));
						}

						var image = (this.img = this.SpriteCreate(file, this.path + file + ".png", name)).get();

						return _ref7(image);
				}

				/**
    * Create Sprite and Append @method
    * @param name - File Name
    * @param file - Zip file to look in
    */

		}, {
				key: 'SpriteAppendZip',
				value: function SpriteAppendZip(name, file) {
						function _ref8(_id8) {
								if (!(_id8 instanceof Object)) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id8));
								}

								return _id8;
						}

						if (!(typeof name === 'string')) {
								throw new TypeError('Value of argument "name" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(name));
						}

						if (!(typeof file === 'string')) {
								throw new TypeError('Value of argument "file" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(file));
						}

						// KEEP let image;

						var image = (this.img = this.SpriteCreate(file, file, name)).getFromZip();

						return _ref8(image);
				}

				/**
    * Unloads an image _WIP
    * @param name - File Name
    */

		}, {
				key: 'SpriteUnload',
				value: function SpriteUnload(name) {
						if (!(typeof name === 'string')) {
								throw new TypeError('Value of argument "name" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(name));
						}
				}

				//To implement deleting the source file
				//delete this.Sources.getByName(name);

				/**
    * Loads an image from the web
    * @param name - internal file name.
    * @param address - http link.
    */

		}, {
				key: 'webLoad',
				value: function webLoad(name, address) {
						function _ref10(_id10) {
								if (!(_id10 instanceof Object)) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id10));
								}

								return _id10;
						}

						if (!(typeof name === 'string')) {
								throw new TypeError('Value of argument "name" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(name));
						}

						if (!(typeof address === 'string')) {
								throw new TypeError('Value of argument "address" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(address));
						}

						this.SpriteWebItems[name] = new Image();

						this.SpriteWebItems[name].src = address;

						return _ref10(this.SpriteWebItems[name]);
				}
		}, {
				key: 'getErrors',
				value: function getErrors() {

						return this.SpriteLoadErrors;
				}
		}, {
				key: 'getImage',
				value: function getImage(name) {

						return this.Sources.getByName(name);
				}
		}, {
				key: 'image',
				get: function get() {

						return this.Sources.getByName(name);
				}
		}]);

		return Graphics;
}(Library);

/* harmony default export */ __webpack_exports__["a"] = (Graphics);

function _inspect(input, depth) {
		var maxDepth = 4;
		var maxKeys = 15;

		if (depth === undefined) {
				depth = 0;
		}

		depth += 1;

		if (input === null) {
				return 'null';
		} else if (input === undefined) {
				return 'void';
		} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
				return typeof input === 'undefined' ? 'undefined' : _typeof(input);
		} else if (Array.isArray(input)) {
				if (input.length > 0) {
						if (depth > maxDepth) return '[...]';

						var first = _inspect(input[0], depth);

						if (input.every(function (item) {
								return _inspect(item, depth) === first;
						})) {
								return first.trim() + '[]';
						} else {
								return '[' + input.slice(0, maxKeys).map(function (item) {
										return _inspect(item, depth);
								}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
						}
				} else {
						return 'Array';
				}
		} else {
				var keys = Object.keys(input);

				if (!keys.length) {
						if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
								return input.constructor.name;
						} else {
								return 'Object';
						}
				}

				if (depth > maxDepth) return '{...}';
				var indent = '  '.repeat(depth - 1);
				var entries = keys.slice(0, maxKeys).map(function (key) {
						return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
				}).join('\n  ' + indent);

				if (keys.length >= maxKeys) {
						entries += '\n  ' + indent + '...';
				}

				if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
						return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
				} else {
						return '{\n  ' + indent + entries + '\n' + indent + '}';
				}
		}
}

/***/ }),

/***/ "./src/modules/core/api/loader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__("./src/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_sjs__ = __webpack_require__("./src/modules/core/base/sjs.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var IApp = __WEBPACK_IMPORTED_MODULE_1__interfaces_ITypes__["b" /* IApp */],
    IVector = __WEBPACK_IMPORTED_MODULE_1__interfaces_ITypes__["F" /* IVector */],
    IVisuals = __WEBPACK_IMPORTED_MODULE_1__interfaces_ITypes__["G" /* IVisuals */];




/*
declare class Array extends Array {
	+push:any;
}
declare class BufferArray extends Array {
	push:any;
	map:any;
}
interface BufferArray extends Array {
	push:any;
	map:any;
}
*/

var _loader = function (_SJSClass) {
		_inherits(_loader, _SJSClass);

		function _loader(app) {
				_classCallCheck(this, _loader);

				if (!IApp(app)) {
						throw new TypeError("Value of argument \"app\" violates contract.\n\nExpected:\nIApp\n\nGot:\n" + _inspect(app));
				}

				var _this = _possibleConstructorReturn(this, (_loader.__proto__ || Object.getPrototypeOf(_loader)).call(this, app));

				_this.ImageBuffer = [];
				_this.ImageCache = [];

				_this.imgMapFilter = function (a) {
						if (!(a instanceof Image)) {
								throw new TypeError("Value of argument \"a\" violates contract.\n\nExpected:\nImage\n\nGot:\n" + _inspect(a));
						}

						return a.getAttribute('name');
				};

				_this.ImageMap = new Map();
				_this.ImageBufferTime = 3;
				_this.ImageBuffer.length = 0;
				_this.ImageCache.length = 0;
				_this.asyncLoadCacheIndex = 0;

				var self = _this;
				_this.ImageCache.push = function () {

						var A = Array.prototype.push.apply(this, arguments);

						self.ImageMap = self.ImageCache.map(self.imgMapFilter);

						return A;
				};

				return _this;
		}

		_createClass(_loader, [{
				key: "checkLoaded",
				value: function checkLoaded(name) {
						var _this2 = this;

						if (!(typeof name === 'string')) {
								throw new TypeError("Value of argument \"name\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(name));
						}

						if (!this.getImageReference(name).complete) {

								setTimeout(function () {

										_this2.checkLoaded(name);
								}, this.ImageBufferTime);
						} else {

								this.ImageBuffer.splice(this.ImageBuffer.indexOf(name));
						}

						return this.getImageReference(name);
				}
		}, {
				key: "getBufferLength",
				value: function getBufferLength() {

						return this.ImageBuffer.length;
				}
		}, {
				key: "getImageReference",
				value: function getImageReference(string) {
						if (!(typeof string === 'string')) {
								throw new TypeError("Value of argument \"string\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(string));
						}

						return this.ImageCache[this.ImageMap.indexOf(string)];
				}

				/*

    loadImage(string) {

    	let name = string;

    	let img = this.graphics.load(string);

    	let cacheIndex = this.ImageCache.push(img);
    		console.log(this.ImageCache);

    	img.string = name;

    	this.ImageBuffer.push(name);

    	setTimeout(()=> {

    		this.checkLoaded(name)

    	}, this.ImageBufferTime + (0.1 * this.ImageBuffer.length));

    	return this.ImageCache[cacheIndex - 1];
    }

       getBase64Image(img) {

           // Create an empty canvas element
           var canvas = document.createElement("canvas");
           canvas.width = img.width;
           canvas.height = img.height;

           // Copy the image contents to the canvas
           var ctx = canvas.getContext("2d");
           ctx.drawImage(img, 0, 0);

           // Get the data-URL formatted image
           // Firefox supports PNG and JPEG. You could check img.src to
           // guess the original format, but be aware the using "image/jpg"
           // will re-encode the image.
           var dataURL = canvas.toDataURL("image/png");

           return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
       }

       createImageData(img) {

           // Create an empty canvas element
           var canvas = document.createElement("canvas");
           var ctx = canvas.getContext("2d");

    	        canvas.width = img.width;
    	        canvas.height = img.height;
    							canvas.style.background = 'transparent';
    							canvas.background = 'transparent';


           var canvas2 =this.app.canvas.buffer.getContext('2d');
    	//var canvas2_data = canvas2.getImageData(0,0,img.width,img.height);
    	var canvas2_data = canvas2.getImageData(0,0,100,100);

    	//var canvas2_img = new Image();
    	//canvas2_img.src = canvas2_data;

    	var img = document.createElement("img");
    	img.src = this.app.canvas.canvas.toDataURL("image/png");

           // Copy the image contents to the canvas
    	//this.visuals.putData(canvas2_data,0,0);


    	//var newData = canvas2.getImageData(0,0,img.width,img.height);

    	//ctx.putImageData(canvas2_data,0,0);

           ctx.drawImage(img, 0, 0);
           //ctx.drawImage(canvas2_img, 0, 0);

    	var newData2 = ctx.getImageData(0,0,img.width,img.height);

           return newData2;
       }

    */

		}, {
				key: "asyncLoadImage",
				value: function () {
						var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(string, suffex) {
								var _this3 = this;

								var name, img, cacheIndex;
								return regeneratorRuntime.wrap(function _callee$(_context) {
										while (1) {
												switch (_context.prev = _context.next) {
														case 0:
																if (typeof string === 'string') {
																		_context.next = 2;
																		break;
																}

																throw new TypeError("Value of argument \"string\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(string));

														case 2:
																if (typeof suffex === 'string') {
																		_context.next = 4;
																		break;
																}

																throw new TypeError("Value of argument \"suffex\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(suffex));

														case 4:
																name = string;
																_context.next = 7;
																return this.graphics.load(name);

														case 7:
																img = _context.sent;


																img.string = name;

																_context.next = 11;
																return this.ImageCache.push(img);

														case 11:
																cacheIndex = _context.sent;
																_context.next = 14;
																return this.ImageBuffer.push(name + suffex);

														case 14:
																_context.next = 16;
																return setTimeout(function () {

																		var _img = _this3.checkLoaded(name);

																		//_img.base64 = this.getBase64Image(_img);
																		//_img.imgdata = this.createImageData(_img);

																		_this3.ImageCache[cacheIndex - 1] = _img;

																		//console.log(this.getBase64Image(_img))
																		//			console.log(this.ImageCache[cacheIndex - 1] );
																		//this.ImageCache[cacheIndex - 1].src = this.getBase64Image(this.checkLoaded(name));

																		//console.log(this.ImageCache[cacheIndex-1])
																}, this.ImageBufferTime + 0.1 * this.ImageBuffer.length);

														case 16:
																this.asyncLoadCacheIndex = cacheIndex;

																if (typeof this.asyncLoadCacheIndex === 'number') {
																		_context.next = 19;
																		break;
																}

																throw new TypeError("Value of \"this.asyncLoadCacheIndex\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.asyncLoadCacheIndex));

														case 19:
																return _context.abrupt("return", this.ImageCache[cacheIndex - 1]);

														case 20:
														case "end":
																return _context.stop();
												}
										}
								}, _callee, this);
						}));

						function asyncLoadImage(_x, _x2) {
								return _ref.apply(this, arguments);
						}

						return asyncLoadImage;
				}()

				/*

    async asyncLoadZipImage(string,suffex) {

    	let name = string;

    	let img = await this.graphics.loadFromZip(name);

    	img.string = name;

    	let cacheIndex = await this.ImageCache.push(img);

    	await this.ImageBuffer.push(name+suffex);

    	await setTimeout(()=> {

    		let _img = this.checkLoaded(name);

    		//_img.base64 = this.getBase64Image(_img);
    		//_img.imgdata = this.createImageData(_img);



    		this.ImageCache[cacheIndex - 1] = _img;


    		//console.log(this.getBase64Image(_img))
    		//			console.log(this.ImageCache[cacheIndex - 1] );
    		//this.ImageCache[cacheIndex - 1].src = this.getBase64Image(this.checkLoaded(name));

    		//console.log(this.ImageCache[cacheIndex-1])

    	}, this.ImageBufferTime + (0.1 * this.ImageBuffer.length))
    	this.asyncLoadCacheIndex = cacheIndex;

    	return this.ImageCache[cacheIndex - 1];
    }

    async asyncLoadImageData(string,string2,x,y) {

    	let _index = this.asyncLoadCacheIndex;

    	let _image = await this.asyncLoadImage(string,"_blit").then((img)=>{

    			//let _cacheIndex =  this.ImageCache.push(img);

    			//console.log( this.ImageCache[_cacheIndex-1]=img)

    			let buffindex = this.ImageBuffer.push(string+"_blit");

                   this[string2] = img;
                   this[string2].addEventListener('load',()=>{

                           this[string2] = this.visuals.blit(this[string2],x,y)

    	                this[string2].string = string2;

    					this.ImageCache.push(this[string2]);

    							this.ImageBuffer.splice(this.ImageBuffer.indexOf(string+"_blit2"),1);
                   })

           });

    	return _image;
    }

    async asyncLoadImageDataFromZip(string,string2,x,y) {

    	let _index = this.asyncLoadCacheIndex;
    	let _image = await this.asyncLoadZipImage(string,"_blit").then((img)=>{

    			//let _cacheIndex =  this.ImageCache.push(img);
    	//				console.log( this.ImageCache[_cacheIndex-1]=img)
    	/*
    					let buffindex = this.ImageBuffer.push(string+"_blit");

    	                this[string2] = img;
    	                this[string2].addEventListener('load',()=>{

    	                        this[string2] = this.visuals.blit(this[string2],x,y)

    			                this[string2].string = string2;

    							this.ImageCache.push(this[string2]);

    									this.ImageBuffer.splice(this.ImageBuffer.indexOf(string+"_blit2"),1);
    	                })
    	*/
				/*
          });
    		return _image || string;
    }
    	*/

		}]);

		return _loader;
}(__WEBPACK_IMPORTED_MODULE_2__base_sjs__["a" /* _SJSClass */]);

/* harmony default export */ __webpack_exports__["a"] = (_loader);


if (__WEBPACK_IMPORTED_MODULE_0__config__["a" /* _EXPOSURE_ */] && __WEBPACK_IMPORTED_MODULE_0__config__["b" /* _IS_PROD_ */] == false) {

		window.Loader = _loader;
}

function _inspect(input, depth) {
		var maxDepth = 4;
		var maxKeys = 15;

		if (depth === undefined) {
				depth = 0;
		}

		depth += 1;

		if (input === null) {
				return 'null';
		} else if (input === undefined) {
				return 'void';
		} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
				return typeof input === "undefined" ? "undefined" : _typeof(input);
		} else if (Array.isArray(input)) {
				if (input.length > 0) {
						if (depth > maxDepth) return '[...]';

						var first = _inspect(input[0], depth);

						if (input.every(function (item) {
								return _inspect(item, depth) === first;
						})) {
								return first.trim() + '[]';
						} else {
								return '[' + input.slice(0, maxKeys).map(function (item) {
										return _inspect(item, depth);
								}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
						}
				} else {
						return 'Array';
				}
		} else {
				var keys = Object.keys(input);

				if (!keys.length) {
						if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
								return input.constructor.name;
						} else {
								return 'Object';
						}
				}

				if (depth > maxDepth) return '{...}';
				var indent = '  '.repeat(depth - 1);
				var entries = keys.slice(0, maxKeys).map(function (key) {
						return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
				}).join('\n  ' + indent);

				if (keys.length >= maxKeys) {
						entries += '\n  ' + indent + '...';
				}

				if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
						return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
				} else {
						return '{\n  ' + indent + entries + '\n' + indent + '}';
				}
		}
}

/***/ }),

/***/ "./src/modules/core/api/sprite.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__("./src/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_vector__ = __webpack_require__("./src/modules/core/math/vector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var IVector = __WEBPACK_IMPORTED_MODULE_2__interfaces_ITypes__["F" /* IVector */],
    IVisuals = __WEBPACK_IMPORTED_MODULE_2__interfaces_ITypes__["G" /* IVisuals */];

/**/

var Sprite = function (_Vector) {
	_inherits(Sprite, _Vector);

	/** This is the constructor for the vector
 * @param {number} x - position.x
 * @param {number} y - position.y
 * @param {number} r - radius */

	function Sprite() {
		var img = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Image();
		var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
		var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
		var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
		var c = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
		var xx = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
		var yy = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
		var w = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
		var h = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;

		var _ret;

		var visuals = arguments[10];

		_classCallCheck(this, Sprite);

		if (!(img instanceof HTMLImageElement)) {
			throw new TypeError("Value of argument \"img\" violates contract.\n\nExpected:\nHTMLImageElement\n\nGot:\n" + _inspect(img));
		}

		if (!(typeof x === 'number')) {
			throw new TypeError("Value of argument \"x\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(x));
		}

		if (!(typeof y === 'number')) {
			throw new TypeError("Value of argument \"y\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(y));
		}

		if (!(typeof s === 'number')) {
			throw new TypeError("Value of argument \"s\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(s));
		}

		if (!(typeof a === 'number')) {
			throw new TypeError("Value of argument \"a\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(a));
		}

		if (!(typeof c === 'number')) {
			throw new TypeError("Value of argument \"c\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(c));
		}

		if (!(typeof xx === 'number')) {
			throw new TypeError("Value of argument \"xx\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(xx));
		}

		if (!(typeof yy === 'number')) {
			throw new TypeError("Value of argument \"yy\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(yy));
		}

		if (!(typeof w === 'number')) {
			throw new TypeError("Value of argument \"w\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(w));
		}

		if (!(typeof h === 'number')) {
			throw new TypeError("Value of argument \"h\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(h));
		}

		var _this = _possibleConstructorReturn(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this, x, y));

		_this.rotate = 150;
		_this.degrees = 0;
		_this._id = Sprite.count++;
		_this.priority = 0;


		_this.img = img;

		_this.s = s;
		_this.a = a;
		_this.c = c;
		_this.xx = xx;
		_this.yy = yy;
		_this.w = w;
		_this.h = h;

		_this.visuals = visuals;

		if (!(IVisuals(_this.visuals) || _this.visuals == null)) {
			throw new TypeError("Value of \"this.visuals\" violates contract.\n\nExpected:\nIVisuals | null\n\nGot:\n" + _inspect(_this.visuals));
		}

		console.trace(visuals);
		if (_this.visuals) if (_this.visuals.appendNew) _this.visuals.appendNew(_this);

		return _ret = _this, _possibleConstructorReturn(_this, _ret);
	}
	//	type:string = "_image_part";

	_createClass(Sprite, [{
		key: "draw",


		/**
  * @method
  *
  */

		value: function draw() {

			if (__WEBPACK_IMPORTED_MODULE_0__config__["b" /* _IS_PROD_ */]) {
				this.visuals[this.type](this.img, this.x, this.y, this.s, this.a, this.c, this.xx, this.yy, this.w, this.h, this.degrees);
			} else {

				if (!this.visuals) console.log(this._id);

				if (this.visuals) this.visuals[this.type](this.img, this.x, this.y, this.s, this.a, this.c, this.xx, this.yy, this.w, this.h, this.degrees);else console.warn('Early Drawn', this, this._id);
			}
		}

		/**
  * @method
  */

	}, {
		key: "Move",
		value: function Move(x, y) {
			if (!(typeof x === 'number' || IVector(x))) {
				throw new TypeError("Value of argument \"x\" violates contract.\n\nExpected:\nnumber | IVector\n\nGot:\n" + _inspect(x));
			}

			if (!(y === undefined || typeof y === 'number')) {
				throw new TypeError("Value of optional argument \"y\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(y));
			}

			if ((typeof x === "undefined" ? "undefined" : _typeof(x)) == "object") this.position = __WEBPACK_IMPORTED_MODULE_1__math_vector__["a" /* default */].Combine(x, this.position);else this.position = __WEBPACK_IMPORTED_MODULE_1__math_vector__["a" /* default */].Combine(new __WEBPACK_IMPORTED_MODULE_1__math_vector__["a" /* default */](x, y), this.position);
		}
	}]);

	return Sprite;
}(__WEBPACK_IMPORTED_MODULE_1__math_vector__["a" /* default */]);

Sprite.onConstructor = function () {};

Sprite.count = 0;
/* harmony default export */ __webpack_exports__["a"] = (Sprite);
;

if (__WEBPACK_IMPORTED_MODULE_0__config__["a" /* _EXPOSURE_ */] && __WEBPACK_IMPORTED_MODULE_0__config__["b" /* _IS_PROD_ */] == false) {

	window.Sprite = Sprite;
}

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === "undefined" ? "undefined" : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			if (depth > maxDepth) return '[...]';

			var first = _inspect(input[0], depth);

			if (input.every(function (item) {
				return _inspect(item, depth) === first;
			})) {
				return first.trim() + '[]';
			} else {
				return '[' + input.slice(0, maxKeys).map(function (item) {
					return _inspect(item, depth);
				}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
			}
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ }),

/***/ "./src/modules/core/api/tile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__("./src/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_vector__ = __webpack_require__("./src/modules/core/math/vector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sprite__ = __webpack_require__("./src/modules/core/api/sprite.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var IVisuals = __WEBPACK_IMPORTED_MODULE_3__interfaces_ITypes__["G" /* IVisuals */],
    IVector = __WEBPACK_IMPORTED_MODULE_3__interfaces_ITypes__["F" /* IVector */],
    ISprite = __WEBPACK_IMPORTED_MODULE_3__interfaces_ITypes__["w" /* ISprite */],
    ITile = __WEBPACK_IMPORTED_MODULE_3__interfaces_ITypes__["B" /* ITile */];

/** Basic Circle class
*/

var Tile = function (_Sprite) {
	_inherits(Tile, _Sprite);

	/** This is the constructor for the tile
 * @param {img} img - Image used for blitting
 * @param {number} x - position.x
 * @param {number} y - position.y
 * @param {number} s -
 * @param {number} a -
 * @param {number} c -
 * @param {number} xx -
 * @param {number} yy -
 * @param {number} w -
 * @param {number} h -
 * @param {IVisuals} visuals - visuals */

	function Tile() {
		var img = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Image();
		var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
		var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
		var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
		var c = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
		var xx = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
		var yy = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
		var w = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
		var h = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;

		var _ret;

		var visuals = arguments[10];

		_classCallCheck(this, Tile);

		if (!(img instanceof HTMLImageElement)) {
			throw new TypeError("Value of argument \"img\" violates contract.\n\nExpected:\nHTMLImageElement\n\nGot:\n" + _inspect(img));
		}

		if (!(typeof x === 'number')) {
			throw new TypeError("Value of argument \"x\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(x));
		}

		if (!(typeof y === 'number')) {
			throw new TypeError("Value of argument \"y\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(y));
		}

		if (!(typeof s === 'number')) {
			throw new TypeError("Value of argument \"s\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(s));
		}

		if (!(typeof a === 'number')) {
			throw new TypeError("Value of argument \"a\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(a));
		}

		if (!(typeof c === 'number')) {
			throw new TypeError("Value of argument \"c\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(c));
		}

		if (!(typeof xx === 'number')) {
			throw new TypeError("Value of argument \"xx\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(xx));
		}

		if (!(typeof yy === 'number')) {
			throw new TypeError("Value of argument \"yy\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(yy));
		}

		if (!(typeof w === 'number')) {
			throw new TypeError("Value of argument \"w\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(w));
		}

		if (!(typeof h === 'number')) {
			throw new TypeError("Value of argument \"h\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(h));
		}

		if (!(visuals === undefined || IVisuals(visuals))) {
			throw new TypeError("Value of optional argument \"visuals\" violates contract.\n\nExpected:\nIVisuals\n\nGot:\n" + _inspect(visuals));
		}

		var _this = _possibleConstructorReturn(this, (Tile.__proto__ || Object.getPrototypeOf(Tile)).call(this, img, x, y, s, a, c, xx, yy, w, h, visuals));

		_this._id = Tile.count++;
		_this.type = "_image_part";
		_this.off = new __WEBPACK_IMPORTED_MODULE_1__math_vector__["a" /* default */](0, 0);
		_this.size = new __WEBPACK_IMPORTED_MODULE_1__math_vector__["a" /* default */](0, 0);
		_this.priority = 0;


		return _ret = _this, _possibleConstructorReturn(_this, _ret);
	}
	//type:string = "tile";

	return Tile;
}(__WEBPACK_IMPORTED_MODULE_2__sprite__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Tile);
;

if (__WEBPACK_IMPORTED_MODULE_0__config__["a" /* _EXPOSURE_ */] && __WEBPACK_IMPORTED_MODULE_0__config__["b" /* _IS_PROD_ */] == false) {

	window.Tile = Tile;
}

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === "undefined" ? "undefined" : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			if (depth > maxDepth) return '[...]';

			var first = _inspect(input[0], depth);

			if (input.every(function (item) {
				return _inspect(item, depth) === first;
			})) {
				return first.trim() + '[]';
			} else {
				return '[' + input.slice(0, maxKeys).map(function (item) {
					return _inspect(item, depth);
				}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
			}
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ }),

/***/ "./src/modules/core/api/visuals.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__("./src/modules/core/api/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*  because toFixedNumber bug */




var IApp = __WEBPACK_IMPORTED_MODULE_1__interfaces_ITypes__["b" /* IApp */],
    ICanvas = __WEBPACK_IMPORTED_MODULE_1__interfaces_ITypes__["d" /* ICanvas */],
    IVector = __WEBPACK_IMPORTED_MODULE_1__interfaces_ITypes__["F" /* IVector */];

var FixedNumber = function () {
		function FixedNumber(input) {
				return input != null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input instanceof Number;
		}

		;
		Object.defineProperty(FixedNumber, Symbol.hasInstance, {
				value: function value(input) {
						return FixedNumber(input);
				}
		});
		return FixedNumber;
}();

var IVisualsAttrib = function () {
		function IVisualsAttrib(input) {
				return input != null && typeof input.alpha === 'boolean';
		}

		;
		Object.defineProperty(IVisualsAttrib, Symbol.hasInstance, {
				value: function value(input) {
						return IVisualsAttrib(input);
				}
		});
		return IVisualsAttrib;
}();

var Visuals = function (_API) {
		_inherits(Visuals, _API);

		/**
     *
     */

		function Visuals(app) {
				_classCallCheck(this, Visuals);

				if (!IApp(app)) {
						throw new TypeError('Value of argument "app" violates contract.\n\nExpected:\nIApp\n\nGot:\n' + _inspect(app));
				}

				var _this = _possibleConstructorReturn(this, (Visuals.__proto__ || Object.getPrototypeOf(Visuals)).call(this, app));

				_this.attribs = { alpha: true };
				_this.buffering = false;


				_this.buffering = _this._buffering;

				var canvas = _this.app.canvas;

				if (!ICanvas(canvas)) {
						throw new TypeError('Value of variable "canvas" violates contract.\n\nExpected:\nICanvas\n\nGot:\n' + _inspect(canvas));
				}

				_this.scale = _this.app.scale;

				_this.canvas = canvas.canvas;

				if (!(_this.canvas instanceof HTMLCanvasElement)) {
						throw new TypeError('Value of "this.canvas" violates contract.\n\nExpected:\nHTMLCanvasElement\n\nGot:\n' + _inspect(_this.canvas));
				}

				_this.buffer = canvas.buffer;

				if (!(_this.buffer instanceof HTMLCanvasElement)) {
						throw new TypeError('Value of "this.buffer" violates contract.\n\nExpected:\nHTMLCanvasElement\n\nGot:\n' + _inspect(_this.buffer));
				}

				_this.blitter = canvas.blitter;

				if (!(_this.blitter instanceof HTMLCanvasElement)) {
						throw new TypeError('Value of "this.blitter" violates contract.\n\nExpected:\nHTMLCanvasElement\n\nGot:\n' + _inspect(_this.blitter));
				}

				_this.attribs.alpha = true;

				_this.blitter_context = _this.blitter.getContext("2d", _this.attribs);

				_this.attribs.alpha = false;

				_this.canvas_context = _this.canvas.getContext("2d", _this.attribs);

				var globalCompositeOperation = _this.app.options.global.globalCompositeOperation;

				if (_this.canvas_context) _this.canvas_context.globalCompositeOperation = globalCompositeOperation;
				_this.blitter_context.globalCompositeOperation = globalCompositeOperation;

				if (_this.buffer_context) _this.buffer_context.globalCompositeOperation = globalCompositeOperation;

				if (_this.app.options.canvas.buffer) _this.buffer_context = _this.buffer.getContext("2d", _this.attribs);else _this.buffer_context = _this.canvas.getContext("2d", _this.attribs);

				_this.linearSampling = false;
				/*
    if ((this.buffer_context["imageSmoothingEnabled"] != this.linearSampling)&&
    	(this.buffer_context["mozImageSmoothingEnabled"] != this.linearSampling)&&
    	(this.buffer_context["msImageSmoothingEnabled"] != this.linearSampling)&&
    	(this.buffer_context["webkitImageSmoothingEnabled"] != this.linearSampling))
    	this.buffer_context["webkitImageSmoothingEnabled"] = this.linearSampling;
    */
				return _this;
		}

		/**
     * @property
     */

		/*
  get position():IVector {

  	let x = (this.app.input.x-(-this.app.getWidth()/2+this.window.innerWidth/2)+this.app.options.canvas.position.left/3).toFixedNumber(2);
  	let y = (this.app.input.y-this.app.options.canvas.position.top).toFixedNumber(2);

  	return new Vector(x,y);

  return {x:0,y:0};
  }
  */

		_createClass(Visuals, [{
				key: 'flip',


				/**
    * @method
       */

				value: function flip() {

						this.scale = this.app.client.scale;

						var style = String(this.app.canvas.canvas.style.background == "transparent");

						this.fillStyle = style = "false";

						if (style != this.laststyle) {

								this.fillStyle = style;
						} else {

								this.fillStyle = "false";

								this.screen_fill(this.app.client.visuals.bleed, this.app.options.canvas.background);
						}

						/*
      if (this.debug)
      	if (this.app.client.fps)
      		this.text(this.app.client.fps,this.app.client.setWidth-125,25,"#FFFFFF");*/

						//If double buffering
						if (this.buffering) {
								//If initalized, draw state
								if (this.app.client.update.state.initalized) this.app.client.update.state.draw();

								this.drawBufferedSprites();

								//Draw buffer to canvs
								this.canvas_context.drawImage(this.buffer, 0, 0);

								//Clear buffer
								if (this.fillStyle === true) this.buffer_context.clearRect(0, 0, this.window.innerWidth, this.window.innerHeight);
						} else {

								//If not double buffering, clear canvas
								if (this.fillStyle === true) this.buffer_context.clearRect(0, 0, this.window.innerWidth, this.window.innerHeight);

								//If initalized, draw state
								if (this.app.client.update.state.initalized) this.app.client.update.state.draw();
						}
				}

				/*
    setBleed(threshold:number):void {
    	this.bleed = threshold;
    }
    */

		}, {
				key: '_buffering',
				get: function get() {
						function _ref(_id) {
								if (!(typeof _id === 'boolean')) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nboolean\n\nGot:\n' + _inspect(_id));
								}

								return _id;
						}

						return _ref(this.app.options.canvas.buffer);
				}
		}]);

		return Visuals;
}(__WEBPACK_IMPORTED_MODULE_0__api__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Visuals);

function _inspect(input, depth) {
		var maxDepth = 4;
		var maxKeys = 15;

		if (depth === undefined) {
				depth = 0;
		}

		depth += 1;

		if (input === null) {
				return 'null';
		} else if (input === undefined) {
				return 'void';
		} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
				return typeof input === 'undefined' ? 'undefined' : _typeof(input);
		} else if (Array.isArray(input)) {
				if (input.length > 0) {
						if (depth > maxDepth) return '[...]';

						var first = _inspect(input[0], depth);

						if (input.every(function (item) {
								return _inspect(item, depth) === first;
						})) {
								return first.trim() + '[]';
						} else {
								return '[' + input.slice(0, maxKeys).map(function (item) {
										return _inspect(item, depth);
								}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
						}
				} else {
						return 'Array';
				}
		} else {
				var keys = Object.keys(input);

				if (!keys.length) {
						if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
								return input.constructor.name;
						} else {
								return 'Object';
						}
				}

				if (depth > maxDepth) return '{...}';
				var indent = '  '.repeat(depth - 1);
				var entries = keys.slice(0, maxKeys).map(function (key) {
						return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
				}).join('\n  ' + indent);

				if (keys.length >= maxKeys) {
						entries += '\n  ' + indent + '...';
				}

				if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
						return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
				} else {
						return '{\n  ' + indent + entries + '\n' + indent + '}';
				}
		}
}

/***/ }),

/***/ "./src/modules/core/base/debugger.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return log; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _this = this;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CTYPE = {

	trace: 'trace',
	log: 'log'

};

var DEBUGGER = function DEBUGGER() {
	_classCallCheck(this, DEBUGGER);
};

DEBUGGER.options = {

	logging: true,
	loggingType: CTYPE.log,
	loggingLevel: 0

};
DEBUGGER.console = console;

DEBUGGER.log = function (string) {
	if (!(typeof string === 'string')) {
		throw new TypeError('Value of argument "string" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(string));
	}

	if (DEBUGGER.options.logging) {

		switch (DEBUGGER.options.loggingType) {

			case CTYPE.trace:

				DEBUGGER.console.trace(string, '\n', _this);

				break;

			case CTYPE.log:

				DEBUGGER.console.log(string, '\n', _this);

				break;

		}
	}
};

/* unused harmony default export */ var _unused_webpack_default_export = (DEBUGGER);

var log = DEBUGGER.log;

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === 'undefined' ? 'undefined' : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			if (depth > maxDepth) return '[...]';

			var first = _inspect(input[0], depth);

			if (input.every(function (item) {
				return _inspect(item, depth) === first;
			})) {
				return first.trim() + '[]';
			} else {
				return '[' + input.slice(0, maxKeys).map(function (item) {
					return _inspect(item, depth);
				}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
			}
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ }),

/***/ "./src/modules/core/base/options.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes_js__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };


var ISJS = __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes_js__["t" /* ISJS */],
    IOptions = __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes_js__["q" /* IOptions */];


/* harmony default export */ __webpack_exports__["a"] = ({

    overridescroll: false,
    drag: 0,

    targetfps: 60,

    mute: false,

    paths: {

        data: "data/",
        images: "images/",
        url: ""

    },

    target: {
        canvas: null, // String - Id of the main canvas
        buffer: null, // String - Id of the buffer canvas
        blitter: null // String - Id of the blitting canvas
    },

    global: {

        imageSmoothingEnabled: false,

        globalCompositeOperation: "destination-in" //or source-over //See list http://www.w3schools.com/tags/canvas_globalcompositeoperation.asp

    },

    flags: {

        webGL: false,

        canvas: true,
        mstouch: true,
        seamless: false,
        tight: true,
        touchprevent: false,
        opaque: true

    },

    canvas: {

        opacity: 0,
        override: false, //Toggle the use of options.canvas
        name: 'canvas', //Use canvas.name
        buffername: 'buffer', //Use canvas.buffer
        buffer: true, //Toggle the use of double-buffering
        background: '#000000', //Assign canvas element background colour

        //Assign canvas element position properties
        position: {
            //position:'absolute',
            //top:0,
            //left:window.innerWidth/2,
            //center:true,
            //z:1
            position: 'absolute',
            top: "",
            left: window.innerWidth * 2,
            //left:"",
            center: false,
            z: 1
        },

        //Assign canvas size properties
        size: {

            width: window.innerWidth,
            height: window.innerHeight

        }

    },

    msFlags: {

        msZoom: false

    },

    //Override Functions
    override: {

        keyboard: false,
        mouse: false,
        MSHoldVisual: false,
        SelectStart: false,
        ContextMenu: false,
        Drag: false

    },

    //Return Options Value
    get: function get(attr) {

        //If Attribute
        if (attr) {

            //Get list of apps
            var list = SJS.controller.list();

            //list is object
            if ((typeof list === "undefined" ? "undefined" : _typeof(list)) == "object") {
                //return window.apps.option.
                for (var attrname in this) {
                    if (attrname == attr) return eval("list.options." + attrname);
                }
            } else {
                for (var i = window.apps.length - 1; i >= 0; i--) {
                    for (var attrname in this) {
                        if (attrname == attr) {
                            var l = [];
                            l.push(eval("list[" + i + "].options." + attrname));
                        }
                    }
                }return l;
            }

            return null;
        } else return this;
    },

    set: function set(options) {

        for (var attrname in options) {
            this[attrname] = options[attrname];
        };

        return this;
    }

});

/***/ }),

/***/ "./src/modules/core/base/room.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sjs_js__ = __webpack_require__("./src/modules/core/base/sjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var IApp = __WEBPACK_IMPORTED_MODULE_1__interfaces_ITypes__["b" /* IApp */],
    IRoom = __WEBPACK_IMPORTED_MODULE_1__interfaces_ITypes__["s" /* IRoom */];

/**
*
*/

var Room = function (_SJSClass) {
	_inherits(Room, _SJSClass);

	function Room(app) {
		var _ret;

		_classCallCheck(this, Room);

		if (!IApp(app)) {
			throw new TypeError("Value of argument \"app\" violates contract.\n\nExpected:\nIApp\n\nGot:\n" + _inspect(app));
		}

		var _this = _possibleConstructorReturn(this, (Room.__proto__ || Object.getPrototypeOf(Room)).call(this, app));

		_this.started = false;


		return _ret = _this, _possibleConstructorReturn(_this, _ret);
	}

	/**
 *
 */

	_createClass(Room, [{
		key: "Started",
		value: function Started() {

			return function () {

				var a = this.Started;

				//this.app.set_scale(); UNnecessary?

				if (!(typeof a === 'boolean')) {
					throw new TypeError("Value of variable \"a\" violates contract.\n\nExpected:\nboolean\n\nGot:\n" + _inspect(a));
				}

				this.Started = true;

				return a;
			};
		}
	}]);

	return Room;
}(__WEBPACK_IMPORTED_MODULE_0__sjs_js__["a" /* _SJSClass */]);

/* harmony default export */ __webpack_exports__["a"] = (Room);

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === "undefined" ? "undefined" : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			if (depth > maxDepth) return '[...]';

			var first = _inspect(input[0], depth);

			if (input.every(function (item) {
				return _inspect(item, depth) === first;
			})) {
				return first.trim() + '[]';
			} else {
				return '[' + input.slice(0, maxKeys).map(function (item) {
					return _inspect(item, depth);
				}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
			}
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ }),

/***/ "./src/modules/core/base/sjs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _SJSClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__thingy__ = __webpack_require__("./src/modules/core/base/thingy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__debugger__ = __webpack_require__("./src/modules/core/base/debugger.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var IApp = __WEBPACK_IMPORTED_MODULE_1__interfaces_ITypes__["b" /* IApp */],
    IVisuals = __WEBPACK_IMPORTED_MODULE_1__interfaces_ITypes__["G" /* IVisuals */],
    IGraphics = __WEBPACK_IMPORTED_MODULE_1__interfaces_ITypes__["m" /* IGraphics */],
    ISJSClass = __WEBPACK_IMPORTED_MODULE_1__interfaces_ITypes__["u" /* ISJSClass */];




/*
* SJSClass - Used to create objects which inherit the Application.
*/

var _SJSClass = function (_WeakMapThingy) {
	_inherits(_SJSClass, _WeakMapThingy);

	function _SJSClass(app) {
		var _ret;

		_classCallCheck(this, _SJSClass);

		if (!IApp(app)) {
			throw new TypeError('Value of argument "app" violates contract.\n\nExpected:\nIApp\n\nGot:\n' + _inspect(app));
		}

		var _this = _possibleConstructorReturn(this, (_SJSClass.__proto__ || Object.getPrototypeOf(_SJSClass)).call(this, new WeakMap()));

		_this.log = __WEBPACK_IMPORTED_MODULE_2__debugger__["a" /* log */];


		var appReference = app;

		if (!IApp(appReference)) {
			throw new TypeError('Value of variable "appReference" violates contract.\n\nExpected:\nIApp\n\nGot:\n' + _inspect(appReference));
		}

		if (typeof appReference == 'undefined') {

			appReference = window.SJS.controller.list();

			if (!IApp(appReference)) {
				throw new TypeError('Value of variable "appReference" violates contract.\n\nExpected:\nIApp\n\nGot:\n' + _inspect(appReference));
			}

			_this.warn('Unable to find app reference.', 'Using ', appReference, ' for ', _this);
		}

		if (_this.constructor.name == "Client") {
			//return; handle visuals and graphics being null
		}

		if (typeof appReference != 'undefined') {

			_this.app = appReference;

			if (!IApp(_this.app)) {
				throw new TypeError('Value of "this.app" violates contract.\n\nExpected:\nIApp\n\nGot:\n' + _inspect(_this.app));
			}

			if (appReference.client && appReference.client.visuals) {

				_this.visuals = appReference.client.visuals;

				if (!(IVisuals(_this.visuals) || typeof _this.visuals === 'function')) {
					throw new TypeError('Value of "this.visuals" violates contract.\n\nExpected:\nIVisuals | Function\n\nGot:\n' + _inspect(_this.visuals));
				}
			} else {

				//this.visuals = null;
				_this.warn('Unable to find app visuals reference.', 'Using ', appReference, ' for ', _this);
			}

			if (appReference.client && appReference.client.graphics) {

				_this.graphics = appReference.client.graphics;

				if (!(IGraphics(_this.graphics) || typeof _this.graphics === 'function')) {
					throw new TypeError('Value of "this.graphics" violates contract.\n\nExpected:\nIGraphics | Function\n\nGot:\n' + _inspect(_this.graphics));
				}
			} else {

				//this.graphics = null;
				console.trace('Unable to find app loader reference.', 'Using ', appReference, ' for ', _this);
			}
		} else {

			//this.graphics = null;
			//this.visuals = null;
			_this.warn('Unable to find app reference.', 'Using ', appReference, ' for ', _this);
		}

		return _ret = _this, _possibleConstructorReturn(_this, _ret);
	}

	/**
 *
 */

	_createClass(_SJSClass, [{
		key: 'windowDoesntExist',
		value: function windowDoesntExist() {

			this.window = { app: this };

			if (!(this.window instanceof window)) {
				throw new TypeError('Value of "this.window" violates contract.\n\nExpected:\nwindow\n\nGot:\n' + _inspect(this.window));
			}

			this.windowSafe = false;
		}

		/**
  * Check wither or not the window object exists.
  */

	}, {
		key: 'windowExists',
		value: function windowExists() {

			if (window) {

				this.window = window;

				if (!(this.window instanceof window)) {
					throw new TypeError('Value of "this.window" violates contract.\n\nExpected:\nwindow\n\nGot:\n' + _inspect(this.window));
				}
			} else {

				this.windowDoesntExist();
			}
		}

		/**
  *
  */

	}, {
		key: 'warn',
		value: function warn(a0, a1, a2, a3, a4) {

			//console.trace(a0,this);
			//console.log(this);
			console.warn(a1, a2, a3, a4);
		}
	}]);

	return _SJSClass;
}(__WEBPACK_IMPORTED_MODULE_0__thingy__["a" /* default */]);;

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === 'undefined' ? 'undefined' : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			if (depth > maxDepth) return '[...]';

			var first = _inspect(input[0], depth);

			if (input.every(function (item) {
				return _inspect(item, depth) === first;
			})) {
				return first.trim() + '[]';
			} else {
				return '[' + input.slice(0, maxKeys).map(function (item) {
					return _inspect(item, depth);
				}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
			}
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ }),

/***/ "./src/modules/core/base/stats.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var IStatsBuffer = __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes__["y" /* IStatsBuffer */];

/*
* The API buffer object used to store the last drawn information.
*/

var StatsBuffer = function () {
	function StatsBuffer() {
		var col = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
		var colold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

		_classCallCheck(this, StatsBuffer);

		this.x = 0;
		this.y = 0;
		this.w = 0;
		this.h = 0;
		this.s = 0;
		this.a = 0;
		this.c = 0;
		this.colour = "";
		this.oldcol = "";

		if (!(typeof col === 'string')) {
			throw new TypeError("Value of argument \"col\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(col));
		}

		if (!(typeof colold === 'string')) {
			throw new TypeError("Value of argument \"colold\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(colold));
		}

		this.init(col, colold);

		return this;
	}

	/*
 * Assigns stats.
 */

	_createClass(StatsBuffer, [{
		key: "set",
		value: function set(obj) {
			if (!(obj instanceof Object)) {
				throw new TypeError("Value of argument \"obj\" violates contract.\n\nExpected:\nObject\n\nGot:\n" + _inspect(obj));
			}

			Object.assign(this, obj);
		}

		/*
  * Sets all values to default
  */

	}, {
		key: "init",
		value: function init() {
			var col = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
			var colold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

			if (!(typeof col === 'string' || col instanceof CanvasPattern || col instanceof CanvasGradient)) {
				throw new TypeError("Value of argument \"col\" violates contract.\n\nExpected:\nstring | CanvasPattern | CanvasGradient\n\nGot:\n" + _inspect(col));
			}

			if (!(typeof colold === 'string')) {
				throw new TypeError("Value of argument \"colold\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(colold));
			}

			Object.assign(this, {
				x: 0,
				y: 0,
				w: 0,
				h: 0,
				s: 0,
				a: 0,
				c: 0,
				colour: col || "",
				oldcol: colold || ""
			});
		}
	}]);

	return StatsBuffer;
}();

/* harmony default export */ __webpack_exports__["a"] = (StatsBuffer);

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === "undefined" ? "undefined" : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			if (depth > maxDepth) return '[...]';

			var first = _inspect(input[0], depth);

			if (input.every(function (item) {
				return _inspect(item, depth) === first;
			})) {
				return first.trim() + '[]';
			} else {
				return '[' + input.slice(0, maxKeys).map(function (item) {
					return _inspect(item, depth);
				}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
			}
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ }),

/***/ "./src/modules/core/base/thingy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*  WIP clean redundant codes */



var Types = new __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes__["I" /* default */]();

if (!(Types instanceof Object)) {
            throw new TypeError('Value of variable "Types" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(Types));
}


var IThingy = __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes__["A" /* IThingy */];

/** The Main Inherited Interface for SpiceJS, interfaces must have a private weakmap which can be accessed by *.get('key')
* You can also access the name of an interface with *.name
* @interface
* @private
*/

var WeakMapThingy = function () {
            function WeakMapThingy(map) {
                        _classCallCheck(this, WeakMapThingy);

                        this.map = new WeakMap();

                        if (!(map instanceof WeakMap)) {
                                    throw new TypeError('Value of argument "map" violates contract.\n\nExpected:\nWeakMap<*, *>\n\nGot:\n' + _inspect(map));
                        }

                        if (typeof map != 'undefined') {

                                    this.constructor.map = map;

                                    this.private = true;

                                    this.constructor.map.set(this, this.constructor.properties);
                        } else {

                                    console.warn(map, this);

                                    map = new WeakMap();

                                    this.constructor.map = map;

                                    this.private = false;

                                    this.constructor.map.set(this, this.constructor.properties);
                        }

                        return this;
            }

            /*
            */

            _createClass(WeakMapThingy, [{
                        key: 'get',


                        /*
                        */

                        value: function get(value) {
                                    function _ref(_id) {
                                                if (!(_id instanceof Object)) {
                                                            throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id));
                                                }

                                                return _id;
                                    }

                                    if (!(typeof value === 'string')) {
                                                throw new TypeError('Value of argument "value" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(value));
                                    }

                                    if (this.constructor) if (this.constructor.map) if (this.constructor.map.get) if (this.constructor.map.get(this) == null) if (this.constructor.map.get(this)[value] == null) return {};
                                    //if (this.constructor.map.get(this)[value])
                                    return _ref(this.constructor.map.get(this)[value]);
                                    //else return {};
                        }
            }, {
                        key: 'map',
                        set: function set(value) {
                                    if (!(value instanceof WeakMap)) {
                                                throw new TypeError('Value of argument "value" violates contract.\n\nExpected:\nWeakMap<*, *>\n\nGot:\n' + _inspect(value));
                                    }

                                    this.constructor.map = value;
                        }
            }]);

            return WeakMapThingy;
}();

WeakMapThingy.properties = { name: 'sjsclass', map: null, version: 0 };
WeakMapThingy.map = new WeakMap();
;

/* harmony default export */ __webpack_exports__["a"] = (WeakMapThingy);

function _inspect(input, depth) {
            var maxDepth = 4;
            var maxKeys = 15;

            if (depth === undefined) {
                        depth = 0;
            }

            depth += 1;

            if (input === null) {
                        return 'null';
            } else if (input === undefined) {
                        return 'void';
            } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
                        return typeof input === 'undefined' ? 'undefined' : _typeof(input);
            } else if (Array.isArray(input)) {
                        if (input.length > 0) {
                                    if (depth > maxDepth) return '[...]';

                                    var first = _inspect(input[0], depth);

                                    if (input.every(function (item) {
                                                return _inspect(item, depth) === first;
                                    })) {
                                                return first.trim() + '[]';
                                    } else {
                                                return '[' + input.slice(0, maxKeys).map(function (item) {
                                                            return _inspect(item, depth);
                                                }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
                                    }
                        } else {
                                    return 'Array';
                        }
            } else {
                        var keys = Object.keys(input);

                        if (!keys.length) {
                                    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
                                                return input.constructor.name;
                                    } else {
                                                return 'Object';
                                    }
                        }

                        if (depth > maxDepth) return '{...}';
                        var indent = '  '.repeat(depth - 1);
                        var entries = keys.slice(0, maxKeys).map(function (key) {
                                    return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
                        }).join('\n  ' + indent);

                        if (keys.length >= maxKeys) {
                                    entries += '\n  ' + indent + '...';
                        }

                        if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
                                    return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
                        } else {
                                    return '{\n  ' + indent + entries + '\n' + indent + '}';
                        }
            }
}

/***/ }),

/***/ "./src/modules/core/build.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_js__ = __webpack_require__("./src/modules/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_thingy__ = __webpack_require__("./src/modules/core/base/thingy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("./src/modules/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var IApp = __WEBPACK_IMPORTED_MODULE_3__interfaces_ITypes__["b" /* IApp */],
    IBuild = __WEBPACK_IMPORTED_MODULE_3__interfaces_ITypes__["c" /* IBuild */],
    IUtils = __WEBPACK_IMPORTED_MODULE_3__interfaces_ITypes__["E" /* IUtils */];


var Window = window;

if (!(Window instanceof Object)) {
	throw new TypeError('Value of variable "Window" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(Window));
}

var Windows = Window.Windows = typeof Window == 'undefined' ? Window : Window;

var Console = console;

if (!(Console instanceof Object)) {
	throw new TypeError('Value of variable "Console" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(Console));
}

var stats = {

	windowcount: 0

	/** Builds references, listeners and the app prototype.
 *	@module
 *	@private */

};
var Build = function (_WeakMapThingy) {
	_inherits(Build, _WeakMapThingy);

	/** Attaches a reference to the Statistics module.
 *	@constructor	*/

	function Build(map) {
		var _ret;

		_classCallCheck(this, Build);

		if (!(map instanceof WeakMap)) {
			throw new TypeError('Value of argument "map" violates contract.\n\nExpected:\nWeakMap<>\n\nGot:\n' + _inspect(map));
		}

		var _this = _possibleConstructorReturn(this, (Build.__proto__ || Object.getPrototypeOf(Build)).call(this, map));

		_this.id = 0;
		_this.document = document;


		_this.app = __WEBPACK_IMPORTED_MODULE_0__app_js__["a" /* default */];

		if (!(typeof _this.app === 'function')) {
			throw new TypeError('Value of "this.app" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(_this.app));
		}

		_this.buildWindowReferences();

		return _ret = _this, _possibleConstructorReturn(_this, _ret);
	}

	/** Reference to the Window object.
 * @type {Element}	*/

	/** Common Functions
  * 	@private
  */

	_createClass(Build, [{
		key: 'buildWindowReferences',


		/** Reference to the statistics object.
  * @type {Object}
  * @protected	*/

		/* Unused ATM
  get statistics():Object {
  	return this.constructor.map.get(this)['statistics'];
  }
  */

		/** Attaches references to the global.window object.
  *	@type {void} */

		value: function buildWindowReferences() {

			if (_typeof(this.window.scripts) != _typeof([])) {
				this.window.scripts = [];
			}

			this.window.SpiceJS = this.window.SJS = this;

			/* if no apps have been defined, create a new array */

			if (!this.window.apps) {
				this.window.apps = new Array(1);
			}

			/* if appsNextId isnt larger or equal to 0 assign it to 0 */

			if (!this.window.appsNextId >= 0) {
				this.window.appsNextId = 0;
			}
		}

		/** Generates the app prototype.
  *	@type {Object} */

	}, {
		key: 'buildPrototype',
		value: function buildPrototype() {
			function _ref7(_id7) {
				if (!(_id7 instanceof Object)) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id7));
				}

				return _id7;
			}

			/* temp stores the app during the create process, it is then returned */
			var temp = {};

			temp = new this.app(new WeakMap());

			temp.window = this.window;

			temp.document = document;

			temp.controller = this;

			temp.id = this.window.appsNextId;

			this.window.apps[temp.id] = temp;

			this.window.appsNextId++;

			return _ref7(this.window.apps[temp.id]);
		}

		/*											*/
		/*											*/
		/*											*/
		/* Below needs Refator */
		/*											*/
		/*											*/
		/*											*/
		/*											*/

		/**	Initalize the listeners for the application.  * WIP *
  *   @param {temp} temp - pass a reference to attach listeners
  *   @return {Method} returns self */

	}, {
		key: 'buildListeners',
		value: function buildListeners(temp) {
			if (!(temp instanceof __WEBPACK_IMPORTED_MODULE_0__app_js__["a" /* default */])) {
				throw new TypeError('Value of argument "temp" violates contract.\n\nExpected:\nApp\n\nGot:\n' + _inspect(temp));
			}

			if (this.document.readyState == "complete" || "loaded" || "interactive") {
				Console.log('ready'); //Refactor to use system log
			}

			temp.Listener(document, "DOMContentLoaded", temp.OnApplicationLoad);

			return temp;
		}

		/** Begins the app build promise. *Old code needs refactor*
  *	@return {App} a temp reference */

	}, {
		key: 'create',
		value: function create() {
			function _ref9(_id9) {
				if (!(_id9 instanceof Object)) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id9));
				}

				return _id9;
			}

			var time = new Date().getTime();

			if (!(typeof time === 'number')) {
				throw new TypeError('Value of variable "time" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(time));
			}

			var listReference = void 0;

			var tempReference = void 0;

			var tempReferenceId = void 0;

			//this.statistics.monitor(()=> {

			//this.name = "scriptloadtime";

			// Load External JS files.

			this.utils.loadExternalJS(window.scripts);

			tempReference = this.buildPrototype();

			tempReferenceId = tempReference.id;

			///Temporary Fix for Safari and IE
			//      document

			listReference = this.controller.list(tempReferenceId);

			this.buildListeners(listReference);
			/*
         // ^ F
       }).then(() => {
               this.statistics.log("compileloadtime", new Date().getTime() - time, 'build');
               listReference = this.controller.list(tempReferenceId);
               /// New for After Loaded
             this.statistics.monitor(() => {
                   //this.name = "loadtime";
                   //this.initListeners(listReference);
               }).then(() => {
                   this.statistics.log("scriptloadtime", new Date().getTime() - time, 'build');
                   this.statistics.log("build",time);
               });
       })*/

			return _ref9(tempReference);
		}

		/** Refactor
  * @type {Element}	*/

	}, {
		key: 'time',
		value: function time(str) {
			if (!(typeof str === 'string')) {
				throw new TypeError('Value of argument "str" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(str));
			}

			Console.timeEnd(str);
		}

		/** Refactor
  * @type {Element}	*/

	}, {
		key: 'timeEnd',
		value: function timeEnd(str) {
			if (!(typeof str === 'string')) {
				throw new TypeError('Value of argument "str" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(str));
			}

			Console.timeEnd(str);
		}
	}, {
		key: 'window',
		get: function get() {

			Window.stats = stats;

			Window.stats.windowcount++;

			return Window;
		}

		/** Reference UTILS
  * @type {Element}	*/

	}, {
		key: 'utils',
		get: function get() {
			function _ref3(_id3) {
				if (!IUtils(_id3)) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nIUtils\n\nGot:\n' + _inspect(_id3));
				}

				return _id3;
			}

			return _ref3(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* default */]);
		}

		/** Reference the state object
  * @type {Element}	*/

	}, {
		key: 'aState',
		get: function get() {
			function _ref4(_id4) {
				if (!(_id4 instanceof Object)) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id4));
				}

				return _id4;
			}

			return _ref4(this.app.main);
		}

		/** Reference to the canvas/app global controller.
  * @type {Object}
  * @protected	*/

	}, {
		key: 'controller',
		get: function get() {
			function _ref5(_id5) {
				if (!(_id5 instanceof Object)) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id5));
				}

				return _id5;
			}

			return _ref5(Build.properties.controller);
		}
	}]);

	return Build;
}(__WEBPACK_IMPORTED_MODULE_1__base_thingy__["a" /* default */]);

Build.properties = {

	temp: {},

	/* WIP - temp removed
 statistics:Statistics,
 */

	controller: {

		/** List all of the instances of SpiceJS or
  * @type {method}
  * @param {number} id - Specify a specific instance to return.	*/

		list: function list() {
			var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

			function _ref(_id) {
				if (!(_id == null || _id instanceof Object)) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nvoid | Object\n\nGot:\n' + _inspect(_id));
				}

				return _id;
			}

			if (!(typeof id === 'number')) {
				throw new TypeError('Value of argument "id" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(id));
			}

			if (id) return _ref(Window.apps[id]);else if (Window.apps.length > 1) return _ref(Window.apps);else return _ref(Window.apps[0]);
		}

	} };
/* harmony default export */ __webpack_exports__["a"] = (Build);
;

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === 'undefined' ? 'undefined' : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			if (depth > maxDepth) return '[...]';

			var first = _inspect(input[0], depth);

			if (input.every(function (item) {
				return _inspect(item, depth) === first;
			})) {
				return first.trim() + '[]';
			} else {
				return '[' + input.slice(0, maxKeys).map(function (item) {
					return _inspect(item, depth);
				}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
			}
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ }),

/***/ "./src/modules/core/canvas.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_thingy__ = __webpack_require__("./src/modules/core/base/thingy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var IApp = __WEBPACK_IMPORTED_MODULE_1__interfaces_ITypes__["b" /* IApp */],
    IOptions = __WEBPACK_IMPORTED_MODULE_1__interfaces_ITypes__["q" /* IOptions */];

/**
* Canvas Interface
* @module
* @interface
* @protected
* Initalizes canvas elements or attaches to existing elements at options.target.canvas. Handles creation of header and style elements.
* @protected
* @module
*
*/

var Canvas = function (_WeakMapThingy) {
    _inherits(Canvas, _WeakMapThingy);

    /**
       * This is the constructor for the canvas module.
       * @param {number} x - position.x
       * @param {number} y - position.y
       */

    function Canvas(app) {
        var _ret;

        _classCallCheck(this, Canvas);

        if (!(app instanceof Object)) {
            throw new TypeError('Value of argument "app" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(app));
        } // Type Accordingly

        var _this = _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this, new WeakMap()));

        _this.options = app.options;

        if (!IOptions(_this.options)) {
            throw new TypeError('Value of "this.options" violates contract.\n\nExpected:\nIOptions\n\nGot:\n' + _inspect(_this.options));
        }

        _this.id = app.id;

        //SGL.start();

        //Cache canvases
        var temp_canvas = _this.doc.getElementById(_this.options.target.canvas);

        if (!(temp_canvas instanceof Object || temp_canvas == null)) {
            throw new TypeError('Value of variable "temp_canvas" violates contract.\n\nExpected:\nObject | null\n\nGot:\n' + _inspect(temp_canvas));
        }

        var temp_buffer = _this.doc.getElementById(_this.options.target.buffer);

        if (!(temp_buffer instanceof Object || temp_buffer == null)) {
            throw new TypeError('Value of variable "temp_buffer" violates contract.\n\nExpected:\nObject | null\n\nGot:\n' + _inspect(temp_buffer));
        }

        var temp_blitter = _this.doc.getElementById(_this.options.target.blitter) || _this.construct_canvas('blitter');

        if (!(temp_blitter instanceof Object)) {
            throw new TypeError('Value of variable "temp_blitter" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(temp_blitter));
        }

        temp_blitter.style.position = "fixed";

        //Check canvas variables
        if (temp_canvas) {

            //    if (temp_buffer)
            //        temp_buffer;

        } else {

            temp_canvas = _this.construct_canvas(_this.options.canvas.name);

            if (!(temp_canvas instanceof Object || temp_canvas == null)) {
                throw new TypeError('Value of variable "temp_canvas" violates contract.\n\nExpected:\nObject | null\n\nGot:\n' + _inspect(temp_canvas));
            }

            if (_this.options.canvas.buffer) {

                temp_buffer = _this.construct_canvas(_this.options.canvas.buffername);

                if (!(temp_buffer instanceof Object || temp_buffer == null)) {
                    throw new TypeError('Value of variable "temp_buffer" violates contract.\n\nExpected:\nObject | null\n\nGot:\n' + _inspect(temp_buffer));
                }
            }
        }

        temp_canvas.mozOpaque = _this.options.flags.opaque;

        //Assign canvas elements

        var _this$style = _this.style(temp_canvas, temp_buffer, temp_blitter, _this.options.canvas.style);

        var _this$style2 = _slicedToArray(_this$style, 4);

        _this.canvas = _this$style2[0];
        _this.buffer = _this$style2[1];
        _this.blitter = _this$style2[2];
        _this.rendering_style = _this$style2[3];


        _this.head.appendChild(_this.rendering_style);

        return _ret = true, _possibleConstructorReturn(_this, _ret);
    }

    /**
       * Get document element
       * @type {Element}
       * @protected
       */

    /**
    * Set documents private variables
    * @type {Object}
    * @protected
    */

    _createClass(Canvas, [{
        key: 'style',


        /**
        * Style provided canvases
        * @type {null}
        * @param {Element, Element, Element} a - Pass 3 canvases: main, buffer and blitting canvas
        */

        value: function style(temp_canvas, temp_buffer, temp_blitter) {
            if (!(temp_canvas instanceof Object)) {
                throw new TypeError('Value of argument "temp_canvas" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(temp_canvas));
            }

            if (!(temp_buffer instanceof Object)) {
                throw new TypeError('Value of argument "temp_buffer" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(temp_buffer));
            }

            if (!(temp_blitter instanceof Object)) {
                throw new TypeError('Value of argument "temp_blitter" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(temp_blitter));
            }

            temp_canvas.style.position = this.options.canvas.position.position;

            temp_canvas.style.zIndex = this.options.canvas.position.z;

            if (this.options.canvas.buffer) {
                temp_buffer.style.position = this.options.canvas.position.position;

                temp_buffer.style.zIndex = this.options.canvas.position.z - 1;
            }

            if (this.options.canvas.override) {

                temp_canvas.style.left = this.options.canvas.position.left + "px";

                temp_canvas.style.top = this.options.canvas.position.top + "px";

                if (this.options.canvas.buffer) {
                    temp_buffer.style.left = this.options.canvas.position.left + "px";

                    temp_buffer.style.top = this.options.canvas.position.top + "px";
                }
            }

            return [temp_canvas, temp_buffer, temp_blitter];
        }

        /**
        * Construct a canvas element.
        * @type {Id}
        * @param {Element} a - Creates a canvas element and attaches it to the body.
        */

    }, {
        key: 'construct_canvas',
        value: function construct_canvas() {
            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "0";

            function _ref12(_id12) {
                if (!(_id12 instanceof Object)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id12));
                }

                return _id12;
            }

            if (!(typeof id === 'string')) {
                throw new TypeError('Value of argument "id" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(id));
            }

            var canvas = this.doc.createElement("canvas");

            var canvas_id = id + "_" + this.id;

            canvas.id = canvas_id;

            this.doc.body.appendChild(canvas);

            return _ref12(this.doc.getElementById(canvas_id));
        }
    }, {
        key: 'doc',
        get: function get() {
            function _ref(_id) {
                if (!(_id instanceof Object)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id));
                }

                return _id;
            }

            return _ref(this.get('docs'));
        }

        /**
        * Get header element
        * @type {Element}
        * @protected
        */

    }, {
        key: 'head',
        get: function get() {
            function _ref2(_id2) {
                if (!(_id2 instanceof Object)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id2));
                }

                return _id2;
            }

            return _ref2(this.get('head'));
        }

        /**
        * Get gendering element
        * @type {Element}
        * @protected
        */

    }, {
        key: 'rendering_style',
        get: function get() {
            function _ref3(_id3) {
                if (!(_id3 instanceof Object)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id3));
                }

                return _id3;
            }

            return _ref3(this.get('_rendering_style'));
        }

        /**
        * Set rendering element styles
        * @type {CSS}
        * @protected
        * @example
        * var Style = "canvas { position:fixed; z-index:25; }"
        * Application.canvas.rendering_style(Style)
        */

        ,
        set: function set(style) {

            var customstyle = style || "";

            var viewport = '@-ms-viewport {width:100%;height:100%;}';

            var img_rendering = '#Client, #Buffer, img[srcApp=".gif"],img[srcApp=".jpg"], img[srcApp=".png"] {image-rendering: -moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering: crisp-edges;image-rendering: -webkit-optimize-contrast;}';

            var rendering = this.get('_rendering_style');

            rendering.innerHTML = rendering.innerText = viewport + img_rendering + customstyle;
        }

        /**
        * Get rendering canvas
        * @type {Element}
        * @protected
        */

    }, {
        key: 'canvas',
        get: function get() {
            function _ref5(_id5) {
                if (!(_id5 instanceof Object)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id5));
                }

                return _id5;
            }

            return _ref5(this.get('canvas')[0]);
        }

        /**
        * Set rendering canvas
        * @type {Element}
        * @protected
        */

        ,
        set: function set(canvas) {
            if (!(canvas instanceof Object)) {
                throw new TypeError('Value of argument "canvas" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(canvas));
            }

            this.get('canvas')[0] = canvas;
        }

        /**
        * Get buffering canvas
        * @type {Element}
        * @protected
        */

    }, {
        key: 'buffer',
        get: function get() {
            function _ref7(_id7) {
                if (!(_id7 instanceof Object)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id7));
                }

                return _id7;
            }

            return _ref7(this.get('canvas')[1]);
        }

        /**
        * Set buffering canvas
        * @type {Element}
        * @protected
        */

        ,
        set: function set(canvas) {
            if (!(canvas instanceof Object)) {
                throw new TypeError('Value of argument "canvas" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(canvas));
            }

            this.get('canvas')[1] = canvas;
        }

        /**
        * Get blitting canvas
        * @type {Element}
        */

    }, {
        key: 'blitter',
        get: function get() {
            function _ref9(_id9) {
                if (!(_id9 instanceof Object)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id9));
                }

                return _id9;
            }

            return _ref9(this.get('canvas')[2]);
        }

        /**
        * Set blitting canvas
        * @type {Element}
        */

        ,
        set: function set(canvas) {
            if (!(canvas instanceof Object)) {
                throw new TypeError('Value of argument "canvas" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(canvas));
            }

            this.get('canvas')[2] = canvas;
            //this._blitter = canvas;
        }
    }]);

    return Canvas;
}(__WEBPACK_IMPORTED_MODULE_0__base_thingy__["a" /* default */]);

Canvas.properties = {
    name: 'canvas',
    canvas: [],
    docs: document,
    head: document.getElementsByTagName('head')[0],
    _rendering_style: document.createElement('style')
};
/* harmony default export */ __webpack_exports__["a"] = (Canvas);
;

function _inspect(input, depth) {
    var maxDepth = 4;
    var maxKeys = 15;

    if (depth === undefined) {
        depth = 0;
    }

    depth += 1;

    if (input === null) {
        return 'null';
    } else if (input === undefined) {
        return 'void';
    } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
        return typeof input === 'undefined' ? 'undefined' : _typeof(input);
    } else if (Array.isArray(input)) {
        if (input.length > 0) {
            if (depth > maxDepth) return '[...]';

            var first = _inspect(input[0], depth);

            if (input.every(function (item) {
                return _inspect(item, depth) === first;
            })) {
                return first.trim() + '[]';
            } else {
                return '[' + input.slice(0, maxKeys).map(function (item) {
                    return _inspect(item, depth);
                }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
            }
        } else {
            return 'Array';
        }
    } else {
        var keys = Object.keys(input);

        if (!keys.length) {
            if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
                return input.constructor.name;
            } else {
                return 'Object';
            }
        }

        if (depth > maxDepth) return '{...}';
        var indent = '  '.repeat(depth - 1);
        var entries = keys.slice(0, maxKeys).map(function (key) {
            return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
        }).join('\n  ' + indent);

        if (keys.length >= maxKeys) {
            entries += '\n  ' + indent + '...';
        }

        if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
            return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
        } else {
            return '{\n  ' + indent + entries + '\n' + indent + '}';
        }
    }
}

/***/ }),

/***/ "./src/modules/core/client-core.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_sjs__ = __webpack_require__("./src/modules/core/base/sjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_vector__ = __webpack_require__("./src/modules/core/math/vector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_options__ = __webpack_require__("./src/modules/core/base/options.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_visuals_js__ = __webpack_require__("./src/modules/core/api/visuals.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_graphics__ = __webpack_require__("./src/modules/core/api/graphics.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ext__ = __webpack_require__("./src/modules/ext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_room_js__ = __webpack_require__("./src/modules/core/base/room.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__canvas__ = __webpack_require__("./src/modules/core/canvas.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__renderer_js__ = __webpack_require__("./src/modules/renderer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__api_loader_js__ = __webpack_require__("./src/modules/core/api/loader.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


















var IApp = __WEBPACK_IMPORTED_MODULE_8__interfaces_ITypes__["b" /* IApp */],
    IExt = __WEBPACK_IMPORTED_MODULE_8__interfaces_ITypes__["l" /* IExt */],
    IClientCore = __WEBPACK_IMPORTED_MODULE_8__interfaces_ITypes__["g" /* IClientCore */],
    IVisuals = __WEBPACK_IMPORTED_MODULE_8__interfaces_ITypes__["G" /* IVisuals */],
    ICanvas = __WEBPACK_IMPORTED_MODULE_8__interfaces_ITypes__["d" /* ICanvas */],
    IGraphics = __WEBPACK_IMPORTED_MODULE_8__interfaces_ITypes__["m" /* IGraphics */],
    IRoom = __WEBPACK_IMPORTED_MODULE_8__interfaces_ITypes__["s" /* IRoom */],
    IVector = __WEBPACK_IMPORTED_MODULE_8__interfaces_ITypes__["F" /* IVector */];






/** Client object controls all the details of the application.
* @module
* @protected */

var ClientCore = function (_SJSClass2) {
		_inherits(ClientCore, _SJSClass2);

		function ClientCore(app) {
				var _ret;

				_classCallCheck(this, ClientCore);

				if (!IApp(app)) {
						throw new TypeError('Value of argument "app" violates contract.\n\nExpected:\nIApp\n\nGot:\n' + _inspect(app));
				}

				var _this = _possibleConstructorReturn(this, (ClientCore.__proto__ || Object.getPrototypeOf(ClientCore)).call(this, app));

				_this.loader = __WEBPACK_IMPORTED_MODULE_10__api_loader_js__["a" /* default */];
				_this.renderer = __WEBPACK_IMPORTED_MODULE_9__renderer_js__["a" /* default */];


				_this.room = new __WEBPACK_IMPORTED_MODULE_6__base_room_js__["a" /* default */](_this.app);

				if (!IRoom(_this.room)) {
						throw new TypeError('Value of "this.room" violates contract.\n\nExpected:\nIRoom\n\nGot:\n' + _inspect(_this.room));
				}

				_this.graphics = new __WEBPACK_IMPORTED_MODULE_4__api_graphics__["a" /* default */](_this.app);

				if (!IGraphics(_this.graphics)) {
						throw new TypeError('Value of "this.graphics" violates contract.\n\nExpected:\nIGraphics\n\nGot:\n' + _inspect(_this.graphics));
				}

				_this.ext = new __WEBPACK_IMPORTED_MODULE_5__ext__["a" /* default */](_this.app);

				if (!IExt(_this.ext)) {
						throw new TypeError('Value of "this.ext" violates contract.\n\nExpected:\nIExt\n\nGot:\n' + _inspect(_this.ext));
				}

				(_this.visuals = new __WEBPACK_IMPORTED_MODULE_3__api_visuals_js__["a" /* default */](_this.app)).pollyFilledAnimationFrame();

				if (!IVisuals(_this.visuals)) {
						throw new TypeError('Value of "this.visuals" violates contract.\n\nExpected:\nIVisuals\n\nGot:\n' + _inspect(_this.visuals));
				}

				return _ret = _this, _possibleConstructorReturn(_this, _ret);
		}

		/*
  *	Verify the Input for the Application Width and Height
  */

		_createClass(ClientCore, [{
				key: 'verifySize',
				value: function verifySize() {
						var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
						var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

						if (!(typeof size === 'number' || IVector(size))) {
								throw new TypeError('Value of argument "size" violates contract.\n\nExpected:\nnumber | IVector\n\nGot:\n' + _inspect(size));
						}

						if (!(typeof h === 'number')) {
								throw new TypeError('Value of argument "h" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(h));
						}

						var x = 0;
						var y = 0;

						if ((typeof size === 'undefined' ? 'undefined' : _typeof(size)) == "object") {

								x = Number(size.x);
								y = Number(size.y);

								if (!(typeof y === 'number')) {
										throw new TypeError('Value of variable "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
								}
						} else {

								x = this.width = this.setWidth = Number(size);

								if (!(typeof this.setWidth === 'number')) {
										throw new TypeError('Value of "this.setWidth" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(this.setWidth));
								}

								if (!(typeof this.width === 'number')) {
										throw new TypeError('Value of "this.width" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(this.width));
								}

								y = this.height = this.setHeight = h;
						}

						this.projectSize = new __WEBPACK_IMPORTED_MODULE_1__math_vector__["a" /* default */](x, y);

						if (!IVector(this.projectSize)) {
								throw new TypeError('Value of "this.projectSize" violates contract.\n\nExpected:\nIVector\n\nGot:\n' + _inspect(this.projectSize));
						}
				}

				/*
    *	Initalize the client's loop and loopdata
    */

		}, {
				key: 'initalize',
				value: function initalize(loop, loopdata, scale) {
						var _this2 = this;

						if (!(loop instanceof Object)) {
								throw new TypeError('Value of argument "loop" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(loop));
						}

						if (!(loopdata instanceof Object)) {
								throw new TypeError('Value of argument "loopdata" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(loopdata));
						}

						if (!(typeof scale === 'number')) {
								throw new TypeError('Value of argument "scale" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(scale));
						}

						this.scale = scale;

						this.client_f = loop;

						this.client_data = loopdata;

						requestAnimationFrame(this.client_f);

						setTimeout(function () {

								_this2.client_data();
						}, 1000 / 59);
						/*Assign the cursor and log the time it took to get here _WIP  */

						//this.app.ext.cursor.set(this.app.ext.cursor.def);

						return;
				}

				/*
    *	Main game loop. Removed arrow function, kept comment for safe.
    */

		}, {
				key: 'loop',
				value: function loop() {

						//const loop:Function = ()=>{

						//Return true or false if resized, update size
						this.resized = this.update.size(this);

						//Update scale

						if (!(typeof this.resized === 'boolean')) {
								throw new TypeError('Value of "this.resized" violates contract.\n\nExpected:\nboolean\n\nGot:\n' + _inspect(this.resized));
						}

						this.scale = this.update.scale(this);

						//Draw frame

						if (!(typeof this.scale === 'number')) {
								throw new TypeError('Value of "this.scale" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(this.scale));
						}

						this.visuals.flip(this.update.scaler.s);

						//Update frames per second
						this.fps = this.update.step.tick(this.second, this.mainLoop);

						//Update client

						if (!(typeof this.fps === 'number')) {
								throw new TypeError('Value of "this.fps" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(this.fps));
						}

						requestAnimationFrame(this.client_f);

						/*
      }
      		DISABLED, reenable for future Debugging clause
      		 	SpiceJS.statistics.monitor(loop).then(function(){
      		        SpiceJS.statistics.log("fps",SpiceJS.controller.list().fps,'state');
              SpiceJS.statistics.log("scale",SpiceJS.controller.list().client.scale,'state');
      		    });
      */

						//loop();
				}
		}]);

		return ClientCore;
}(__WEBPACK_IMPORTED_MODULE_0__base_sjs__["a" /* _SJSClass */]);

/* harmony default export */ __webpack_exports__["a"] = (ClientCore);

function _inspect(input, depth) {
		var maxDepth = 4;
		var maxKeys = 15;

		if (depth === undefined) {
				depth = 0;
		}

		depth += 1;

		if (input === null) {
				return 'null';
		} else if (input === undefined) {
				return 'void';
		} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
				return typeof input === 'undefined' ? 'undefined' : _typeof(input);
		} else if (Array.isArray(input)) {
				if (input.length > 0) {
						if (depth > maxDepth) return '[...]';

						var first = _inspect(input[0], depth);

						if (input.every(function (item) {
								return _inspect(item, depth) === first;
						})) {
								return first.trim() + '[]';
						} else {
								return '[' + input.slice(0, maxKeys).map(function (item) {
										return _inspect(item, depth);
								}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
						}
				} else {
						return 'Array';
				}
		} else {
				var keys = Object.keys(input);

				if (!keys.length) {
						if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
								return input.constructor.name;
						} else {
								return 'Object';
						}
				}

				if (depth > maxDepth) return '{...}';
				var indent = '  '.repeat(depth - 1);
				var entries = keys.slice(0, maxKeys).map(function (key) {
						return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
				}).join('\n  ' + indent);

				if (keys.length >= maxKeys) {
						entries += '\n  ' + indent + '...';
				}

				if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
						return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
				} else {
						return '{\n  ' + indent + entries + '\n' + indent + '}';
				}
		}
}

/***/ }),

/***/ "./src/modules/core/client-experamental.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_math_js__ = __webpack_require__("./src/modules/core/math/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_core__ = __webpack_require__("./src/modules/core/client-core.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



/* JSZip & JSZipUtils
* 		Library to read Zip files from the server.
*/

var JSZip = {};
var JSZipUtils = {};

//Code Splitting
__webpack_require__.e/* require.ensure */(0).then((function () {
	JSZip = __webpack_require__("./node_modules/jszip/lib/index.js");

	if (!(JSZip instanceof Object)) {
		throw new TypeError("Value of variable \"JSZip\" violates contract.\n\nExpected:\nObject\n\nGot:\n" + _inspect(JSZip));
	}

	JSZipUtils = __webpack_require__("./node_modules/jszip-utils/lib/index.js");

	if (!(JSZipUtils instanceof Object)) {
		throw new TypeError("Value of variable \"JSZipUtils\" violates contract.\n\nExpected:\nObject\n\nGot:\n" + _inspect(JSZipUtils));
	}
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

var _Math = {
	Vec: function Vec(x, y) {
		this.x = x;
		this.y = y;
	},
	Clamp: function Clamp(x, min, max) {
		return x < min ? min : x > max ? max : x;
	},
	Wrap: function Wrap(x, min, max) {
		return x < min ? max : x > max ? min : x;
	},
	Difference: function Difference(a, b) {
		return a - b;
	},
	Pythageon: function Pythageon(a, b) {
		return Math.sqrt(a * a + b * b);
	},
	Vector: {
		x: 0, y: 0,
		Difference: function Difference(a, b) {
			return { x: a.x - b.x, y: a.y - b.y };
		},
		Sum: function Sum(a, b) {
			return { x: a.x + b.x, y: a.y + b.y };
		}
	},
	Data: {

		/*
  Total:function(){
  return this.total = this.kilobyteCount(App);
  },
  Update:function(){
  if (App.client.update.state.initalized)
  	return this.update = this.byteCount(App.client.update.state.current.update);
  	else
  	return this.update = this.byteCount(Object.create(null,App.client.room));
  },
  isFunction:function(functionToCheck) {
  	 var getType = {};
  	 return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  },
  byteCount:function (object) {
  	if (this.isFunction(object))
  		return this.byteCountF(object.toString().length*2);
  	this.objectList = [];
  	this.stack = [ object ];
  	this.bytes = 0;
  	while ( this.stack.length ) {
  		this.value = this.stack.pop();
  		if ( typeof this.value === 'trueean' ) {
  			this.bytes += 4;
  		}
  		else if ( typeof this.value === 'string' ) {
  			this.bytes += this.value.length * 2;
  		}
  		else if ( typeof this.value === 'number' ) {
  			this.bytes += 8;
  		}
  		else if	(typeof this.value === 'object' && this.objectList.indexOf( this.value ) === -1) {
  			this.objectList.push( this.value );
  			for( i in this.value ) {
  				if ((this.value[i]==object)||(this.value[i]==window)){
  					if ((this.selfCount>0)||(this.value[i]==window))
  						{
  							this.selfCount = 0;
  							break;
  						}
  					this.selfCount++;
  				}
  				this.stack.push( this.value[ i ] );
  			}
  		}
  	}
  	return this.bytes;
  },
  byteCountF:function(s){
  	return encodeURI(s).split(/%..|./).length - 1;
  },
  kilobyteCount:function(object){
  	return  Math.round((this.byteCount(object)*this.KB)*100)/100;
  },
  kb:0.0078125,
  KB:0.0009765625,
  objectList:[{}],
  selfCount:0,
  update:0,
  stack:[{}],
  value:{},
  bytes:0,
  total:0,
  		*/
	}
};



var ClientExperamental = function (_ClientCore) {
	_inherits(ClientExperamental, _ClientCore);

	function ClientExperamental() {
		var _ref2;

		var _temp, _this, _ret;

		_classCallCheck(this, ClientExperamental);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = ClientExperamental.__proto__ || Object.getPrototypeOf(ClientExperamental)).call.apply(_ref2, [this].concat(args))), _this), _this.Math = _Math, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(ClientExperamental, [{
		key: "loadZip",

		/*
  	particles:Object = {
          p:0,
          draw:function(l){

              for (this.p=_Rain.size-1; this.p;--this.p)
                  if (_RainParticles[this.p].y>App.client.visuals.fixY(0))
                  if (_RainParticles[this.p].y<App.client.visuals.fixY(App.client.setHeight))
                  _RainParticles[this.p].draw(App.client.visuals,l);
          },
          update:function(){
              for (var _R=0; _R<_Rain.size;++_R)
                  _RainParticles[_R].update();
          }
      };
  */

		/* loads a bundle _WIP  */

		value: function loadZip() {

			this.data = {
				Zip: null,
				JSZip: JSZip,
				JSZipUtils: JSZipUtils
			};

			//Pull in zip for images.
			//		let self = this;
			var bundle = './img.bundle.zip';

			///Watch the bundle timer.
			//timer(bundle);


			//Asyncronus
			/*
   this.data.JSZipUtils.getBinaryContent(bundle, (err, data)=> {
   			//this.renderer.renderMarkup();
   	if(err) {
   				console.warn(err); // or handle err
   			} else {
   				let seconds = timerEnd(bundle);
   				console.warn(`The package ${bundle} loaded in ${seconds} seconds.`);
   				//self.bundles[ bundle.split('/')[1] ] = window.ZID = new JSZip(data);
   		//self.bundles[ bundle.split('/')[1] ] =
   				this.data.Zip = new this.data.JSZip(data);
   				(self.update.state = Object.create(self.update.state.prototype,self.update.state.constructor(self))).init(self.main);
   			}
   		});
   */
		}

		/*
  *	Main Loop Data for Resizing and Input
  */

	}, {
		key: "loopData",
		value: function loopData() {

			//if (this.app)
			//if (this.app.input)
			//if (this.app.input.update)
			//{

			//Return true or false, update audio
			//this.mute = this.audio.update();

			this.update.sizedelta(this);

			//Update Input
			this.app.input.update();
			//}

			setTimeout(this.client_data, 1000 / 60);
		}
	}]);

	return ClientExperamental;
}(__WEBPACK_IMPORTED_MODULE_1__client_core__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (ClientExperamental);

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === "undefined" ? "undefined" : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			if (depth > maxDepth) return '[...]';

			var first = _inspect(input[0], depth);

			if (input.every(function (item) {
				return _inspect(item, depth) === first;
			})) {
				return first.trim() + '[]';
			} else {
				return '[' + input.slice(0, maxKeys).map(function (item) {
					return _inspect(item, depth);
				}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
			}
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ }),

/***/ "./src/modules/core/client.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prototype; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timing_pace__ = __webpack_require__("./src/modules/core/timing/pace.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__update_js__ = __webpack_require__("./src/modules/core/update.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_experamental__ = __webpack_require__("./src/modules/core/client-experamental.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var IApp = __WEBPACK_IMPORTED_MODULE_3__interfaces_ITypes__["b" /* IApp */],
    IUpdate = __WEBPACK_IMPORTED_MODULE_3__interfaces_ITypes__["C" /* IUpdate */],
    IClient = __WEBPACK_IMPORTED_MODULE_3__interfaces_ITypes__["f" /* IClient */],
    IPace = __WEBPACK_IMPORTED_MODULE_3__interfaces_ITypes__["r" /* IPace */],
    IVector = __WEBPACK_IMPORTED_MODULE_3__interfaces_ITypes__["F" /* IVector */];

var Client = function (_ClientExperamental) {
		_inherits(Client, _ClientExperamental);

		/**
  *	The client, or base of an app.
  */

		function Client(app, size, h) {
				var _ret;

				_classCallCheck(this, Client);

				if (!(app instanceof Object)) {
						throw new TypeError('Value of argument "app" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(app));
				}

				if (!(IVector(size) || typeof size === 'number')) {
						throw new TypeError('Value of argument "size" violates contract.\n\nExpected:\nIVector | number\n\nGot:\n' + _inspect(size));
				}

				if (!(typeof h === 'number' || h == null)) {
						throw new TypeError('Value of argument "h" violates contract.\n\nExpected:\nnumber | void\n\nGot:\n' + _inspect(h));
				}

				var _this = _possibleConstructorReturn(this, (Client.__proto__ || Object.getPrototypeOf(Client)).call(this, app));

				_this.discription = "Instanciates an object to hold data pertaining to a single instanciated app";


				_this.verifySize(size, h);

				//Build Extensions
				_this.audio = {};

				/* Timing Solution A */

				_this.mainLoop = new __WEBPACK_IMPORTED_MODULE_0__timing_pace__["a" /* default */](app.options.targetfps, app.options.targetfps);

				_this.second = new __WEBPACK_IMPORTED_MODULE_0__timing_pace__["a" /* default */](1.0, app.options.targetfps);

				/* Load Main */

				_this.loader = window.Loader = new _this.loader(_this.app);

				_this.update = new __WEBPACK_IMPORTED_MODULE_1__update_js__["a" /* default */](_this.app);

				//Temp? running update.inital here instead of in client.update

				requestAnimationFrame(function () {

						_this.update.inital(app);
				});

				_this.renderer = new _this.renderer();

				_this.loadZip();

				_this.renderer.renderMarkup();

				return _ret = _this, _possibleConstructorReturn(_this, _ret);
		}

		return Client;
}(__WEBPACK_IMPORTED_MODULE_2__client_experamental__["a" /* default */]);

Client.main_prototype = { app: {}, update: { inital: {} }, visuals: function visuals() {}, graphics: function graphics() {} };
/* harmony default export */ __webpack_exports__["a"] = (Client);


var prototype = Client.main_prototype;

function _inspect(input, depth) {
		var maxDepth = 4;
		var maxKeys = 15;

		if (depth === undefined) {
				depth = 0;
		}

		depth += 1;

		if (input === null) {
				return 'null';
		} else if (input === undefined) {
				return 'void';
		} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
				return typeof input === 'undefined' ? 'undefined' : _typeof(input);
		} else if (Array.isArray(input)) {
				if (input.length > 0) {
						if (depth > maxDepth) return '[...]';

						var first = _inspect(input[0], depth);

						if (input.every(function (item) {
								return _inspect(item, depth) === first;
						})) {
								return first.trim() + '[]';
						} else {
								return '[' + input.slice(0, maxKeys).map(function (item) {
										return _inspect(item, depth);
								}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
						}
				} else {
						return 'Array';
				}
		} else {
				var keys = Object.keys(input);

				if (!keys.length) {
						if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
								return input.constructor.name;
						} else {
								return 'Object';
						}
				}

				if (depth > maxDepth) return '{...}';
				var indent = '  '.repeat(depth - 1);
				var entries = keys.slice(0, maxKeys).map(function (key) {
						return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
				}).join('\n  ' + indent);

				if (keys.length >= maxKeys) {
						entries += '\n  ' + indent + '...';
				}

				if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
						return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
				} else {
						return '{\n  ' + indent + entries + '\n' + indent + '}';
				}
		}
}

/***/ }),

/***/ "./src/modules/core/core.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__legacy_legacy_core__ = __webpack_require__("./src/modules/core/legacy/legacy-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_options__ = __webpack_require__("./src/modules/core/base/options.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_dto_facebook_user__ = __webpack_require__("./src/modules/core/interfaces/dto/facebook-user.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_math__ = __webpack_require__("./src/modules/core/math/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client__ = __webpack_require__("./src/modules/core/client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__canvas__ = __webpack_require__("./src/modules/core/canvas.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__input_input__ = __webpack_require__("./src/modules/input/input.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__interfaces_ITypes_js__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__interfaces_dto_dtoTypes__ = __webpack_require__("./src/modules/core/interfaces/dto/dtoTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_version__ = __webpack_require__("./src/shared/version.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















/* Remove? or extend to grab the version number from the module as to clearly increment in the future */
var _BUILD_OFFICIAL_ = '0.8.2';
var _BUILD_RENDERER_ = '0.0.1';
var _BUILD_CANVAS_ = '0.8.1';
var _BUILD_LAST_ = '11-2017';
var _BUILD_FIRST_ = '12-2013';


var IApp = __WEBPACK_IMPORTED_MODULE_7__interfaces_ITypes_js__["b" /* IApp */],
    IExt = __WEBPACK_IMPORTED_MODULE_7__interfaces_ITypes_js__["l" /* IExt */],
    IOptions = __WEBPACK_IMPORTED_MODULE_7__interfaces_ITypes_js__["q" /* IOptions */],
    IState = __WEBPACK_IMPORTED_MODULE_7__interfaces_ITypes_js__["x" /* IState */],
    IClient = __WEBPACK_IMPORTED_MODULE_7__interfaces_ITypes_js__["f" /* IClient */],
    ICanvas = __WEBPACK_IMPORTED_MODULE_7__interfaces_ITypes_js__["d" /* ICanvas */],
    ICore = __WEBPACK_IMPORTED_MODULE_7__interfaces_ITypes_js__["j" /* ICore */],
    IVisuals = __WEBPACK_IMPORTED_MODULE_7__interfaces_ITypes_js__["G" /* IVisuals */],
    IInput = __WEBPACK_IMPORTED_MODULE_7__interfaces_ITypes_js__["n" /* IInput */],
    IMath = __WEBPACK_IMPORTED_MODULE_7__interfaces_ITypes_js__["o" /* IMath */];

var dtoFacebook = __WEBPACK_IMPORTED_MODULE_8__interfaces_dto_dtoTypes__["a" /* dtoFacebook */];

var IoVersion = __WEBPACK_IMPORTED_MODULE_9__shared_version__["a" /* IoVersion */];

/** core component to the application, including version info, the main reference, and other details
* @module
* @protected */

var Core = function (_legacy_core) {
	_inherits(Core, _legacy_core);

	/* */

	/* WIP */

	/* WIP */

	function Core(map) {
		var _this2 = this;

		var _ret;

		_classCallCheck(this, Core);

		if (!(map instanceof WeakMap)) {
			throw new TypeError('Value of argument "map" violates contract.\n\nExpected:\nWeakMap<*, *>\n\nGot:\n' + _inspect(map));
		}

		var _this = _possibleConstructorReturn(this, (Core.__proto__ || Object.getPrototypeOf(Core)).call(this, map));

		_this.options = __WEBPACK_IMPORTED_MODULE_1__base_options__["a" /* default */];
		_this.client = __WEBPACK_IMPORTED_MODULE_4__client__["b" /* prototype */];
		_this.user = __WEBPACK_IMPORTED_MODULE_2__interfaces_dto_facebook_user__["a" /* default */];
		_this.math = new __WEBPACK_IMPORTED_MODULE_3__math_math__["a" /* default */]();
		_this.time = 0;
		_this.id = 0;

		_this.InitalizeComponents = function () {
			var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(w, h) {
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (typeof w === 'number') {
									_context.next = 2;
									break;
								}

								throw new TypeError('Value of argument "w" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(w));

							case 2:
								if (typeof h === 'number') {
									_context.next = 4;
									break;
								}

								throw new TypeError('Value of argument "h" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(h));

							case 4:
								_context.next = 6;
								return Object.create(_this.main);

							case 6:
								_this.main = _context.sent;

								if (IState(_this.main)) {
									_context.next = 9;
									break;
								}

								throw new TypeError('Value of "this.main" violates contract.\n\nExpected:\nIState\n\nGot:\n' + _inspect(_this.main));

							case 9:
								_context.next = 11;
								return new __WEBPACK_IMPORTED_MODULE_5__canvas__["a" /* default */](_this);

							case 11:
								_this.canvas = _context.sent;

								if (ICanvas(_this.canvas)) {
									_context.next = 14;
									break;
								}

								throw new TypeError('Value of "this.canvas" violates contract.\n\nExpected:\nICanvas\n\nGot:\n' + _inspect(_this.canvas));

							case 14:
								_context.next = 16;
								return new __WEBPACK_IMPORTED_MODULE_4__client__["a" /* default */](_this, w, h);

							case 16:
								_this.client = _context.sent;

								if (IClient(_this.client)) {
									_context.next = 19;
									break;
								}

								throw new TypeError('Value of "this.client" violates contract.\n\nExpected:\nIClient\n\nGot:\n' + _inspect(_this.client));

							case 19:
								_context.next = 21;
								return new __WEBPACK_IMPORTED_MODULE_6__input_input__["a" /* default */](_this);

							case 21:
								_this.input = _context.sent;

								if (IInput(_this.input)) {
									_context.next = 24;
									break;
								}

								throw new TypeError('Value of "this.input" violates contract.\n\nExpected:\nIInput\n\nGot:\n' + _inspect(_this.input));

							case 24:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2);
			}));

			return function (_x, _x2) {
				return _ref8.apply(this, arguments);
			};
		}();

		_this.InitalizeLoop = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:

							_this.client.log('SJS:A:Loop');

							_context2.next = 3;
							return _this.Loop(_this);

						case 3:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, _this2);
		}));

		_this.InitializeClientLoop = function () {
			var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(time) {
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								if (typeof time === 'number') {
									_context3.next = 2;
									break;
								}

								throw new TypeError('Value of argument "time" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(time));

							case 2:

								_this.client.loop();

								_this.client.loopData();

								//this.time = time;

							case 4:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, _this2);
			}));

			return function (_x3) {
				return _ref10.apply(this, arguments);
			};
		}();

		_this.InitializeSecondaryLoop = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
			return regeneratorRuntime.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, _this2);
		}));
		_this.FirstLoop = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
			return regeneratorRuntime.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:

							_this.client.log('SJS:A:FirstLoop');

							_this.client.initalize(_this.InitializeClientLoop, _this.InitializeSecondaryLoop, _this.scale);

						case 2:
						case 'end':
							return _context5.stop();
					}
				}
			}, _callee5, _this2);
		}));


		return _ret = _this, _possibleConstructorReturn(_this, _ret);
	}

	/* Instanciates the core components to the app */

	/* WIP */

	/* WIP */

	/* See if we can move */

	/** Asyncronously call Loop
 * @method
 * @private */

	/** Asyncronously call client loop
 * @method
 * @private */

	/** Asyncronously call secondary loop
 * @method
 * @private */

	/** Asyncronously initialize the client passing loop functions and the scale
 * @method
 * @private */

	_createClass(Core, [{
		key: 'Loop',


		/** Asyncronously Loop of the Program
  * @method
  * @private */

		value: function () {
			var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(self) {
				return regeneratorRuntime.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								if (IApp(self)) {
									_context6.next = 2;
									break;
								}

								throw new TypeError('Value of argument "self" violates contract.\n\nExpected:\nIApp\n\nGot:\n' + _inspect(self));

							case 2:

								this.client.log('SJS:A:BeforeFirstLoop');

								_context6.next = 5;
								return window.requestUserIdle(this.FirstLoop, { timeout: this.time });

							case 5:
							case 'end':
								return _context6.stop();
						}
					}
				}, _callee6, this);
			}));

			function Loop(_x4) {
				return _ref13.apply(this, arguments);
			}

			return Loop;
		}()

		/**  @type {number} */

	}, {
		key: 'width',
		get: function get() {
			function _ref(_id) {
				if (!(typeof _id === 'number')) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id));
				}

				return _id;
			}

			return _ref(this.client.setWidth);
		}

		/**  @type {number} */

	}, {
		key: 'height',
		get: function get() {
			function _ref2(_id2) {
				if (!(typeof _id2 === 'number')) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id2));
				}

				return _id2;
			}

			return _ref2(this.client.setHeight);
		}

		/**  @type {number} */

	}, {
		key: 'scale',
		get: function get() {
			function _ref3(_id3) {
				if (!(typeof _id3 === 'number')) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id3));
				}

				return _id3;
			}

			var scale = 1;

			if (this.client.scale) {
				scale = this.client.scale;
			}

			return _ref3(scale);
		}

		/**  @type {String} */

	}, {
		key: 'version',
		get: function get() {
			function _ref4(_id4) {
				if (!(_id4 instanceof String)) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nString\n\nGot:\n' + _inspect(_id4));
				}

				return _id4;
			}

			return _ref4(this.get('version'));
		}

		/**  @type {number} */

	}, {
		key: 'fps',
		get: function get() {
			function _ref5(_id5) {
				if (!(typeof _id5 === 'number')) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id5));
				}

				return _id5;
			}

			var fps = 1;

			//If's for flowtype, issue: var is in a weakmap

			if (this.client.update && this.client.update.step && this.client.update.step.fps) {

				fps = this.client.update.step.fps;
			}

			return _ref5(fps.toFixedNumber(2));
		}

		/**  @type {IState} */

	}, {
		key: 'main',
		get: function get() {
			function _ref6(_id6) {
				if (!IState(_id6)) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nIState\n\nGot:\n' + _inspect(_id6));
				}

				return _id6;
			}

			return _ref6(this.get('main'));
		}

		/**  @type {IState} New Object Assign Method	*/

		,
		set: function set(newState) {
			function _ref7(_id7) {
				if (!IState(_id7)) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nIState\n\nGot:\n' + _inspect(_id7));
				}

				return _id7;
			}

			if (!IState(newState)) {
				throw new TypeError('Value of argument "newState" violates contract.\n\nExpected:\nIState\n\nGot:\n' + _inspect(newState));
			}

			var currentState = this.main;

			if (!IState(currentState)) {
				throw new TypeError('Value of variable "currentState" violates contract.\n\nExpected:\nIState\n\nGot:\n' + _inspect(currentState));
			}

			return _ref7(currentState = Object.assign(currentState, newState));

			if (!IState(currentState)) {
				throw new TypeError('Value of variable "currentState" violates contract.\n\nExpected:\nIState\n\nGot:\n' + _inspect(currentState));
			}
		}
	}]);

	return Core;
}(__WEBPACK_IMPORTED_MODULE_0__legacy_legacy_core__["a" /* default */]);

Core.properties = {
	main: { init: function init() {}, update: function update() {}, draw: function draw() {} },
	version: _BUILD_OFFICIAL_ + _BUILD_LAST_,
	version_details: {
		_official_: _BUILD_OFFICIAL_,
		_renderer_: _BUILD_RENDERER_,
		_canvas_: _BUILD_CANVAS_,
		_firstbuild_: _BUILD_LAST_,
		_lastbuild_: _BUILD_FIRST_
	}
};
/* harmony default export */ __webpack_exports__["a"] = (Core);

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === 'undefined' ? 'undefined' : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			if (depth > maxDepth) return '[...]';

			var first = _inspect(input[0], depth);

			if (input.every(function (item) {
				return _inspect(item, depth) === first;
			})) {
				return first.trim() + '[]';
			} else {
				return '[' + input.slice(0, maxKeys).map(function (item) {
					return _inspect(item, depth);
				}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
			}
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ }),

/***/ "./src/modules/core/interfaces/ITypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return ISJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ICanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return IInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return IUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return IMath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ICircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IBuild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ICore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return IExt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return IVisuals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IApi; });
/* unused harmony export ILoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return IGraphics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return IClientCore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ICookies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return IUseragent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return IMetatags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ICursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return IConnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return IOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return IPace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return IStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return IState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return IRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return IStatsBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return ISJSClass; });
/* unused harmony export TClient */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return IClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return IUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return IVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return ISprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return ITile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return IScaler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return IThingy; });
/* unused harmony export vector */
/* unused harmony export app */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return weakmap; });
/* unused harmony export method */
/* unused harmony export metatag */
/* unused harmony export element */
/* unused harmony export array */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return array_string; });
/* unused harmony export array_number */
/* unused harmony export _vector */
/* unused harmony export _weakmap */
/* unused harmony export _number */
/* unused harmony export _string */
/* unused harmony export _method */
/* unused harmony export _object */
/* unused harmony export _array */
/* unused harmony export _array_string */
/* unused harmony export _array_number */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dto_dtoTypes__ = __webpack_require__("./src/modules/core/interfaces/dto/dtoTypes.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// @typecheck: production, some

var dtoFacebook = __WEBPACK_IMPORTED_MODULE_0__dto_dtoTypes__["a" /* dtoFacebook */];
//console.time('Types2');

//type _NodeCallback_<E, V> = (err: ?E, value: ?V) => void;

var object = function () {
	function object(input) {
		return input instanceof Object;
	}

	;
	Object.defineProperty(object, Symbol.hasInstance, {
		value: function value(input) {
			return object(input);
		}
	});
	return object;
}();

//export type string = string;


//DUPLICATE IN app.js

//END DUPLICATE IN app.js


/**
 * @interface App
 */

var ISJS = function () {
	function ISJS(input) {
		return input != null && object(input.controller);
	}

	;
	Object.defineProperty(ISJS, Symbol.hasInstance, {
		value: function value(input) {
			return ISJS(input);
		}
	});
	return ISJS;
}();

/**
 * @interface App
 */

var IApp = function () {
	function IApp(input) {
		return input != null && typeof input.id === 'number' && typeof input.OnLoad === 'function' && typeof input.OnApplicationLoad === 'function' && typeof input.Loop === 'function' && typeof input.Start === 'function' && typeof input.start === 'function' && (IClient(input.client) || input.client instanceof Object) && ICanvas(input.canvas) && IOptions(input.options) && (IInput(input.input) || input.input instanceof Object || input.input == null) && (input.main === undefined || IState(input.main)) && typeof input.scale === 'number';
	}

	;
	Object.defineProperty(IApp, Symbol.hasInstance, {
		value: function value(input) {
			return IApp(input);
		}
	});
	return IApp;
}();

var ICanvas = function () {
	function ICanvas(input) {
		return input != null && input.canvas instanceof HTMLCanvasElement && input.buffer instanceof HTMLCanvasElement && input.blitter instanceof HTMLCanvasElement;
	}

	;
	Object.defineProperty(ICanvas, Symbol.hasInstance, {
		value: function value(input) {
			return ICanvas(input);
		}
	});
	return ICanvas;
}();

var IInput = function () {
	function IInput(input) {
		return input != null && typeof input.x === 'number' && typeof input.y === 'number';
	}

	;
	Object.defineProperty(IInput, Symbol.hasInstance, {
		value: function value(input) {
			return IInput(input);
		}
	});
	return IInput;
}();

var IUtils = function () {
	function IUtils(input) {
		return input != null && typeof input.loadExternalJS === 'function';
	}

	;
	Object.defineProperty(IUtils, Symbol.hasInstance, {
		value: function value(input) {
			return IUtils(input);
		}
	});
	return IUtils;
}();

/*



scale:number;
width:number;
height:number;

*/

var IMath = function () {
	function IMath(input) {
		return input != null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object';
	}

	;
	Object.defineProperty(IMath, Symbol.hasInstance, {
		value: function value(input) {
			return IMath(input);
		}
	});
	return IMath;
}();

var ICircle = function () {
	function ICircle(input) {
		return input != null && typeof input.x === 'number' && typeof input.y === 'number' && typeof input.r === 'number' && typeof input.a === 'number';
	}

	;
	Object.defineProperty(ICircle, Symbol.hasInstance, {
		value: function value(input) {
			return ICircle(input);
		}
	});
	return ICircle;
}();

var IBuild = function () {
	function IBuild(input) {
		return input != null && typeof input.app === 'function' && typeof input.id === 'number' && input.document instanceof Object && input.stats instanceof Object && input.utils instanceof Object && input.aState instanceof Object && input.controller instanceof Object && input.window instanceof Object && typeof input.time === 'function' && typeof input.timeEnd === 'function' && typeof input.buildWindowReferences === 'function' && typeof input.buildPrototype === 'function' && typeof input.create === 'function';
	}

	;
	Object.defineProperty(IBuild, Symbol.hasInstance, {
		value: function value(input) {
			return IBuild(input);
		}
	});
	return IBuild;
}();

/**
* @interface App
*/

var ICore = function () {
	function ICore(input) {
		return input != null && IApp(input.app) && IExt(input.ext) && IOptions(input.options) && (IClient(input.client) || input.client instanceof Object) && IVisuals(input.visuals) && IInput(input.input) && dtoFacebook(input.user) && IMath(input.math) && typeof input.time === 'number' && typeof input.scale === 'number' && typeof input.id === 'number' && typeof input.width === 'number' && typeof input.height === 'number' && typeof input.scale === 'number' && input.version instanceof String && typeof input.fps === 'number' && IState(input.main);
	}

	;
	Object.defineProperty(ICore, Symbol.hasInstance, {
		value: function value(input) {
			return ICore(input);
		}
	});
	return ICore;
}();

/**
* @interface
*/

var IExt = function () {
	function IExt(input) {
		return input != null && input.useragent instanceof Object && input.cookies instanceof Object && IMetatags(input.metatag) && input.cursor instanceof Object && input.connect instanceof Object;
	}

	;
	Object.defineProperty(IExt, Symbol.hasInstance, {
		value: function value(input) {
			return IExt(input);
		}
	});
	return IExt;
}();

/**
* @interface
*/

var IVisuals = function () {
	function IVisuals(input) {
		return input != null && (input.a === undefined || typeof input.a === 'number') && typeof input.flip === 'function';
	}

	;
	Object.defineProperty(IVisuals, Symbol.hasInstance, {
		value: function value(input) {
			return IVisuals(input);
		}
	});
	return IVisuals;
}();

/**
* @interface
*/

var IApi = function () {
	function IApi(input) {
		return input != null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object';
	}

	;
	Object.defineProperty(IApi, Symbol.hasInstance, {
		value: function value(input) {
			return IApi(input);
		}
	});
	return IApi;
}();

/**
* @interface
*/

var ILoader = function () {
	function ILoader(input) {
		return input != null && Array.isArray(input.ImageBuffer) && Array.isArray(input.ImageCache) && input.ImageMap instanceof rray && typeof input.ImageBufferTime === 'number' && typeof input.asyncLoadCacheIndex === 'number' && typeof input.push === 'function' && typeof input.checkLoaded === 'function';
	}

	;
	Object.defineProperty(ILoader, Symbol.hasInstance, {
		value: function value(input) {
			return ILoader(input);
		}
	});
	return ILoader;
}();

/**
* @interface
*/

var IGraphics = function () {
	function IGraphics(input) {
		return input != null && typeof input.load === 'function';
	}

	;
	Object.defineProperty(IGraphics, Symbol.hasInstance, {
		value: function value(input) {
			return IGraphics(input);
		}
	});
	return IGraphics;
}();

var IClientCore = function () {
	function IClientCore(input) {
		return input != null && IVector(input.projectSize) && IExt(input.ext) && IRoom(input.room) && IVisuals(input.visuals) && input.graphics instanceof Object && input.loader instanceof Object && input.renderer instanceof Object && typeof input.width === 'number' && typeof input.height === 'number' && typeof input.scale === 'number' && typeof input.setWidth === 'number' && typeof input.setHeight === 'number' && typeof input.resized === 'boolean' && typeof input.fps === 'number' && typeof input.loop === 'function' && typeof input.initalize === 'function' && typeof input.verifySize === 'function' && typeof input.initalize === 'function' && typeof input.loop === 'function';
	}

	;
	Object.defineProperty(IClientCore, Symbol.hasInstance, {
		value: function value(input) {
			return IClientCore(input);
		}
	});
	return IClientCore;
}();

/**
* @interface
*/

var ICookies = function () {
	function ICookies(input) {
		return input != null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object';
	}

	;
	Object.defineProperty(ICookies, Symbol.hasInstance, {
		value: function value(input) {
			return ICookies(input);
		}
	});
	return ICookies;
}();

/**
* @interface
*/

var IUseragent = function () {
	function IUseragent(input) {
		return input != null && typeof input.mouse === 'boolean' && typeof input.touch === 'boolean' && typeof input.keyboard === 'boolean' && typeof input.windows === 'boolean' && typeof input.chrome === 'boolean' && typeof input.safari === 'boolean' && typeof input.iemobile === 'boolean' && typeof input.nokia === 'boolean' && typeof input.ie === 'boolean' && typeof input.ios === 'boolean' && typeof input.blackberry === 'boolean' && typeof input.playbook === 'boolean' && typeof input.bb10 === 'boolean' && typeof input.mobile === 'boolean' && typeof input.IE === 'function' && typeof input.iOS === 'function' && typeof input.Nokia === 'function' && typeof input.Mobile === 'function' && typeof input.Chrome === 'function' && typeof input.Safari === 'function' && typeof input.Desktop === 'function' && typeof input.Android === 'function' && typeof input.IEMobile === 'function' && typeof input.BlackBerry === 'function';
	}

	;
	Object.defineProperty(IUseragent, Symbol.hasInstance, {
		value: function value(input) {
			return IUseragent(input);
		}
	});
	return IUseragent;
}();

/**
* @interface
*/

var IMetatags = function () {
	function IMetatags(input) {
		return input != null && typeof input.ms_taphighlight === 'string' && typeof input.apple_webapp === 'string' && typeof input.apple_statusbar === 'string' && typeof input.devicedpi === 'boolean' && typeof input.devicewidth === 'boolean' && typeof input.width === 'number' && typeof input.cache === 'boolean' && typeof input.cacheage === 'number' && typeof input.metaFavicon === 'function' && typeof input.metaLink === 'function' && typeof input.new === 'function' && typeof input.append === 'function';
	}

	;
	Object.defineProperty(IMetatags, Symbol.hasInstance, {
		value: function value(input) {
			return IMetatags(input);
		}
	});
	return IMetatags;
}();

/**
* @interface
*/

var ICursor = function () {
	function ICursor(input) {
		return input != null && typeof input.current === 'string' && typeof input.last === 'string' && typeof input.changed === 'boolean' && typeof input.count === 'number' && typeof input.lock === 'number' && typeof input.delay === 'number' && typeof input.set === 'function';
	}

	;
	Object.defineProperty(ICursor, Symbol.hasInstance, {
		value: function value(input) {
			return ICursor(input);
		}
	});
	return ICursor;
}();

/**
* @interface
*/

var IConnect = function () {
	function IConnect(input) {
		return input != null && typeof input.DisableDefaultCallback === 'boolean' && input.XMLHttpRequest instanceof XMLHttpRequest && typeof input.Error === 'string' && typeof input.ErrorAttempt === 'string' && typeof input.ErrorOffline === 'string' && typeof input.ConnectionAttempts === 'number' && typeof input.offline === 'boolean' && typeof input.testurl === 'string' && input.window instanceof window && typeof input.XML === 'function' && typeof input.ready === 'function';
	}

	;
	Object.defineProperty(IConnect, Symbol.hasInstance, {
		value: function value(input) {
			return IConnect(input);
		}
	});
	return IConnect;
}();

/**
* @interface Options
*/

var IOptions = function () {
	function IOptions(input) {
		return input != null && typeof input.overridescroll === 'boolean' && typeof input.drag === 'number' && typeof input.targetfps === 'number' && typeof input.mute === 'boolean' && input.paths instanceof Object && input.target instanceof Object && input.global instanceof Object && input.flags instanceof Object && input.canvas instanceof Object && input.msFlags instanceof Object && input.override instanceof Object && input.canvas instanceof Object && typeof input.get === 'function' && typeof input.set === 'function';
	}

	;
	Object.defineProperty(IOptions, Symbol.hasInstance, {
		value: function value(input) {
			return IOptions(input);
		}
	});
	return IOptions;
}();

/**
 * @interface Pace
 */

var IPace = function () {
	function IPace(input) {
		return input != null && typeof input.delta === 'number' && typeof input.offset === 'number' && typeof input.rate === 'number' && typeof input.targetFPS === 'number' && typeof input.currentTime === 'number' && typeof input.Step === 'function' && typeof input.CalculateDelta === 'function';
	}

	;
	Object.defineProperty(IPace, Symbol.hasInstance, {
		value: function value(input) {
			return IPace(input);
		}
	});
	return IPace;
}();

/**
 * @interface Step
 */

var IStep = function () {
	function IStep(input) {
		return input != null && IApp(input.app) && typeof input.delta === 'number' && typeof input.frames === 'number' && typeof input.pending === 'number' && typeof input.padding === 'number' && typeof input.increment === 'number' && typeof input.delta_speed === 'number' && typeof input.fps === 'number' && typeof input.focus === 'function' && typeof input.clean === 'function' && typeof input.tick === 'function' && typeof input.second === 'function' && typeof input.first === 'function';
	}

	;
	Object.defineProperty(IStep, Symbol.hasInstance, {
		value: function value(input) {
			return IStep(input);
		}
	});
	return IStep;
}();

/**
 * @interface State
 */

var IState = function () {
	function IState(input) {
		return input != null && (input.name === undefined || typeof input.name === 'string') && (input.app === undefined || input.app instanceof Object) && (input.visuals === undefined || input.visuals instanceof Object) && (input.graphics === undefined || input.graphics instanceof Object) && (input.initalized === undefined || typeof input.initalized === 'boolean') && typeof input.update === 'function' && typeof input.draw === 'function' && typeof input.init === 'function';
	}

	;
	Object.defineProperty(IState, Symbol.hasInstance, {
		value: function value(input) {
			return IState(input);
		}
	});
	return IState;
}();

/**
 * @interface Room
 */

var IRoom = function () {
	function IRoom(input) {
		return input != null && typeof input.started === 'boolean' && typeof input.Started === 'function';
	}

	;
	Object.defineProperty(IRoom, Symbol.hasInstance, {
		value: function value(input) {
			return IRoom(input);
		}
	});
	return IRoom;
}();

/**
 * @interface StatsBuffer
 */

var IStatsBuffer = function () {
	function IStatsBuffer(input) {
		return input != null && typeof input.x === 'number' && typeof input.y === 'number' && typeof input.w === 'number' && typeof input.h === 'number' && typeof input.s === 'number' && typeof input.a === 'number' && typeof input.c === 'number' && (typeof input.colour === 'string' || input.colour instanceof CanvasPattern || input.colour instanceof CanvasGradient) && typeof input.oldcol === 'string' && typeof input.font === 'function' && typeof input.init === 'function';
	}

	;
	Object.defineProperty(IStatsBuffer, Symbol.hasInstance, {
		value: function value(input) {
			return IStatsBuffer(input);
		}
	});
	return IStatsBuffer;
}();

var ISJSClass = function () {
	function ISJSClass(input) {
		return input != null && IApp(input.app) && input.visuals instanceof Object && input.graphics instanceof Object;
	}

	;
	Object.defineProperty(ISJSClass, Symbol.hasInstance, {
		value: function value(input) {
			return ISJSClass(input);
		}
	});
	return ISJSClass;
}();

var TClient = function () {
	function TClient(input) {
		return input != null && typeof input.discription === 'string' && IVector(input.projectSize) && input.app instanceof Object && IExt(input.ext) && (input.Math === undefined || input.Math instanceof Object) && (input.particles === undefined || input.particles instanceof Object) && (input.visuals === undefined || input.visuals instanceof Object) && (input.graphics === undefined || input.graphics instanceof Object) && (input.room === undefined || input.room instanceof Object) && (input.audio === undefined || input.audio instanceof Object) && (input.mainLoop === undefined || input.mainLoop instanceof Object) && (input.second === undefined || input.second instanceof Object) && (input.loader === undefined || input.loader instanceof Object) && (input.update === undefined || input.update instanceof Object) && (input.renderer === undefined || input.renderer instanceof Object) && (input.data === undefined || input.data instanceof Object) && typeof input.width === 'number' && typeof input.height === 'number' && typeof input.setWidth === 'number' && typeof input.setHeight === 'number';
	}

	;
	Object.defineProperty(TClient, Symbol.hasInstance, {
		value: function value(input) {
			return TClient(input);
		}
	});
	return TClient;
}();

//export type IClient = TClient;

var IClient = function () {
	function IClient(input) {
		return input != null && typeof input.discription === 'string' && IVector(input.projectSize) && input.app instanceof Object && IExt(input.ext) && (input.Math === undefined || input.Math instanceof Object) && (input.particles === undefined || input.particles instanceof Object) && (input.visuals === undefined || input.visuals instanceof Object) && (input.graphics === undefined || input.graphics instanceof Object) && (input.room === undefined || input.room instanceof Object) && (input.audio === undefined || input.audio instanceof Object) && (input.mainLoop === undefined || input.mainLoop instanceof Object) && (input.second === undefined || input.second instanceof Object) && (input.loader === undefined || input.loader instanceof Object) && (input.update === undefined || input.update instanceof Object) && (input.renderer === undefined || input.renderer instanceof Object) && (input.data === undefined || input.data instanceof Object) && typeof input.width === 'number' && typeof input.height === 'number' && typeof input.setWidth === 'number' && typeof input.setHeight === 'number' && (input.scale === undefined || typeof input.scale === 'number') && typeof input.initalize === 'function' && typeof input.loop === 'function' && typeof input.loopData === 'function' && typeof input.log === 'function';
	}

	;
	Object.defineProperty(IClient, Symbol.hasInstance, {
		value: function value(input) {
			return IClient(input);
		}
	});
	return IClient;
}();

var IUpdate = function () {
	function IUpdate(input) {
		return input != null && typeof input.fullscale === 'boolean' && IVector(input.last) && IVector(input.difference) && IScaler(input.scaler) && typeof input.scalediff === 'number' && typeof input.lastscale === 'number' && typeof input.frames === 'number' && typeof input.pause === 'number' && typeof input.set === 'number' && IStep(input.step) && IState(input.state) && typeof input.inital === 'function' && typeof input.scale === 'function' && typeof input.size === 'function' && typeof input.sizedelta === 'function' && typeof input.scrollto === 'function';
	}

	;
	Object.defineProperty(IUpdate, Symbol.hasInstance, {
		value: function value(input) {
			return IUpdate(input);
		}
	});
	return IUpdate;
}();

var IVector = function () {
	function IVector(input) {
		return input != null && typeof input.x === 'number' && typeof input.y === 'number' && typeof input.Difference === 'function' && typeof input.equals === 'function' && typeof input.sum === 'function' && typeof input.multiply === 'function' && typeof input.offset === 'function';
	}

	;
	Object.defineProperty(IVector, Symbol.hasInstance, {
		value: function value(input) {
			return IVector(input);
		}
	});
	return IVector;
}();

var ISprite = function () {
	function ISprite(input) {
		return input != null && typeof input.x === 'number' && typeof input.y === 'number' && typeof input.Difference === 'function' && typeof input.equals === 'function' && typeof input.sum === 'function' && typeof input.multiply === 'function' && typeof input.offset === 'function' && typeof input.Move === 'function';
	}

	;
	Object.defineProperty(ISprite, Symbol.hasInstance, {
		value: function value(input) {
			return ISprite(input);
		}
	});
	return ISprite;
}();

var ITile = function () {
	function ITile(input) {
		return input != null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object';
	}

	;
	Object.defineProperty(ITile, Symbol.hasInstance, {
		value: function value(input) {
			return ITile(input);
		}
	});
	return ITile;
}();

var IScaler = function () {
	function IScaler(input) {
		return input != null && typeof input.x === 'number' && typeof input.y === 'number' && typeof input.s === 'number';
	}

	;
	Object.defineProperty(IScaler, Symbol.hasInstance, {
		value: function value(input) {
			return IScaler(input);
		}
	});
	return IScaler;
}();

var IThingy = function () {
	function IThingy(input) {
		return input != null && input.map instanceof WeakMap && typeof input.private === 'boolean' && typeof input.map === 'function' && typeof input.get === 'function';
	}

	;
	Object.defineProperty(IThingy, Symbol.hasInstance, {
		value: function value(input) {
			return IThingy(input);
		}
	});
	return IThingy;
}();

var vector = function () {
	function vector(input) {
		return input != null && input.x === 0 && input.y === 0;
	}

	;
	Object.defineProperty(vector, Symbol.hasInstance, {
		value: function value(input) {
			return vector(input);
		}
	});
	return vector;
}();

var app = function () {
	function app(input) {
		return input != null && input.app instanceof APP && input.visuals instanceof VISUALS && input.graphics instanceof GRAPHICS;
	}

	;
	Object.defineProperty(app, Symbol.hasInstance, {
		value: function value(input) {
			return app(input);
		}
	});
	return app;
}();

var _weakmap = function () {
	function _weakmap(input) {
		return input instanceof WeakMap;
	}

	;
	Object.defineProperty(_weakmap, Symbol.hasInstance, {
		value: function value(input) {
			return _weakmap(input);
		}
	});
	return _weakmap;
}();

var weakmap = function () {
	function weakmap(input) {
		return input instanceof WeakMap;
	}

	;
	Object.defineProperty(weakmap, Symbol.hasInstance, {
		value: function value(input) {
			return weakmap(input);
		}
	});
	return weakmap;
}();

//var weakmap:weakmap;

//export type number = number;
var method = function () {
	function method(input) {
		return typeof input === 'function';
	}

	;
	Object.defineProperty(method, Symbol.hasInstance, {
		value: function value(input) {
			return method(input);
		}
	});
	return method;
}();

var _metatag = document.createElement('meta');

var metatag = function () {
	function metatag(input) {
		return input instanceof _metatag;
	}

	;
	Object.defineProperty(metatag, Symbol.hasInstance, {
		value: function value(input) {
			return metatag(input);
		}
	});
	return metatag;
}();

var element = function () {
	function element(input) {
		return object(input);
	}

	;
	Object.defineProperty(element, Symbol.hasInstance, {
		value: function value(input) {
			return element(input);
		}
	});
	return element;
}();

var array = function () {
	function array(input) {
		return Array.isArray(input);
	}

	;
	Object.defineProperty(array, Symbol.hasInstance, {
		value: function value(input) {
			return array(input);
		}
	});
	return array;
}();
var array_string = function () {
	function array_string(input) {
		return Array.isArray(input) && input.every(function (item) {
			return typeof item === 'string';
		});
	}

	;
	Object.defineProperty(array_string, Symbol.hasInstance, {
		value: function value(input) {
			return array_string(input);
		}
	});
	return array_string;
}();
var array_number = function () {
	function array_number(input) {
		return Array.isArray(input) && input.every(function (item) {
			return typeof item === 'number';
		});
	}

	;
	Object.defineProperty(array_number, Symbol.hasInstance, {
		value: function value(input) {
			return array_number(input);
		}
	});
	return array_number;
}();

var _object = {};

if (!object(_object)) {
	throw new TypeError('Value of variable "_object" violates contract.\n\nExpected:\nobject\n\nGot:\n' + _inspect(_object));
}

var _string = "";
var _vector = { x: 0, y: 0 };

//window.t = weakmap;

//const _weakmap:WeakMap;

//console.log(_weakmap,weakmap);


if (!vector(_vector)) {
	throw new TypeError('Value of variable "_vector" violates contract.\n\nExpected:\nvector\n\nGot:\n' + _inspect(_vector));
}

var _number = 0;
var _method = function _method() {};

if (!method(_method)) {
	throw new TypeError('Value of variable "_method" violates contract.\n\nExpected:\nmethod\n\nGot:\n' + _inspect(_method));
}

var _array = [];

if (!array(_array)) {
	throw new TypeError('Value of variable "_array" violates contract.\n\nExpected:\narray\n\nGot:\n' + _inspect(_array));
}

var _array_number = [0];

if (!array_number(_array_number)) {
	throw new TypeError('Value of variable "_array_number" violates contract.\n\nExpected:\narray_number\n\nGot:\n' + _inspect(_array_number));
}

var _array_string = [""];

if (!array_string(_array_string)) {
	throw new TypeError('Value of variable "_array_string" violates contract.\n\nExpected:\narray_string\n\nGot:\n' + _inspect(_array_string));
}

var types = [['_object', _object], ['_vector', _vector], ['_string', _string],
/*    ['_weakmap',_weakmap],*/
['_number', _number], ['_method', _method], ['_array', _array], ['_array_number', _array_number], ['_array_string', _array_string]];

if (!array(types)) {
	throw new TypeError('Value of variable "types" violates contract.\n\nExpected:\narray\n\nGot:\n' + _inspect(types));
}

var _ITypes = function () {
	function _ITypes(input) {
		return input != null && array(input.list) && method(input.get);
	}

	;
	Object.defineProperty(_ITypes, Symbol.hasInstance, {
		value: function value(input) {
			return _ITypes(input);
		}
	});
	return _ITypes;
}();

;

var ITypes = function () {
	function ITypes() {
		_classCallCheck(this, ITypes);

		this.get().forEach(function (entry, e) {

			window[entry[0]] = entry[1];
		});
	}

	_createClass(ITypes, [{
		key: 'get',
		value: function get() {
			function _ref2(_id2) {
				if (!array(_id2)) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\narray\n\nGot:\n' + _inspect(_id2));
				}

				return _id2;
			}

			return _ref2(types);
		}
	}]);

	return ITypes;
}();

;

//console.timeEnd('Types2');



/* harmony default export */ __webpack_exports__["I"] = (ITypes);

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === 'undefined' ? 'undefined' : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			if (depth > maxDepth) return '[...]';

			var _first = _inspect(input[0], depth);

			if (input.every(function (item) {
				return _inspect(item, depth) === _first;
			})) {
				return _first.trim() + '[]';
			} else {
				return '[' + input.slice(0, maxKeys).map(function (item) {
					return _inspect(item, depth);
				}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
			}
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ }),

/***/ "./src/modules/core/interfaces/dto/dtoTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dtoFacebook; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var dtoFacebook = function () {
	function dtoFacebook(input) {
		return input != null && (typeof input === "undefined" ? "undefined" : _typeof(input)) === 'object';
	}

	;
	Object.defineProperty(dtoFacebook, Symbol.hasInstance, {
		value: function value(input) {
			return dtoFacebook(input);
		}
	});
	return dtoFacebook;
}();

/***/ }),

/***/ "./src/modules/core/interfaces/dto/facebook-user.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    //	//To ensure your data is filled, use a callback return your response data.
    //	var facebook = function(){ return App.user.pull();};
    //
    //	//Your facebook ID, callback function(){}
    //	App.user.fbconnect(id, facebook)
    name: "",
    id: "",
    locale: "",
    gender: "",
    updated_time: "",
    timezone: "",
    quotes: "",
    response: {},

    //returns the response object
    get: function get() {
        return this.response;
    },

    //facebook connection
    fbconnect: function con(appid, callback) {
        window.fbAsyncInit = function () {
            FB.init({
                appId: appid,
                status: true, // check login status
                cookie: true, // enable cookies to allow the server to access the session
                xfbml: true // parse XFBML
            });
            FB.login(function () {
                FB.api('/me/feed', 'post', { message: 'Hello, world!' });
            }, { scope: 'publish_actions' });
        };

        // Load the SDK asynchronously
        (function (d) {
            var js,
                id = 'facebook-jssdk',
                ref = d.getElementsByTagName('script')[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement('script');js.id = id;js.async = true;
            js.src = "//connect.facebook.net/en_US/all.js";
            ref.parentNode.insertBefore(js, ref);
        })(document);

        // Here we run a very simple Flappy of the Graph API after login is successful.
        // This testAPI() function is only called in those cases.

        /*
        function testAPI() {
        console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function(response) {
              App.user.facebook(response);
              callback(response);
            log('Good to see you, ' + response.name + '.');
          });
        }
            */
    },

    //facebook callback
    facebook: function facebook(response) {
        this.response = response;
        this.name = this.response.name;
        this.id = this.response.id;
        this.locale = this.response.locale;
        this.gender = this.response.gender;
        this.updated_time = this.response.updated_time;
        this.timezone = this.response.timezone;
        this.quotes = this.response.quotes;
    }

});

/***/ }),

/***/ "./src/modules/core/legacy/legacy-core.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_thingy__ = __webpack_require__("./src/modules/core/base/thingy.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ILegacyCore = function () {
    function ILegacyCore(input) {
        return input != null && input.create instanceof Object && typeof input.getConnectionAttempts === 'function';
    }

    ;
    Object.defineProperty(ILegacyCore, Symbol.hasInstance, {
        value: function value(input) {
            return ILegacyCore(input);
        }
    });
    return ILegacyCore;
}();

var legacy_core = function (_WeakMapThingy) {
    _inherits(legacy_core, _WeakMapThingy);

    function legacy_core(map) {
        _classCallCheck(this, legacy_core);

        if (!(map instanceof WeakMap)) {
            throw new TypeError('Value of argument "map" violates contract.\n\nExpected:\nWeakMap<*, *>\n\nGot:\n' + _inspect(map));
        }

        var _this = _possibleConstructorReturn(this, (legacy_core.__proto__ || Object.getPrototypeOf(legacy_core)).call(this, map));

        _this.tracecount = 0;
        return _this;
    }

    /** DEPRECIATED : This function starts the application.
    * @method
    * @override */

    _createClass(legacy_core, [{
        key: 'start',
        value: function start() {
            var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (!(w == null || typeof w === 'number')) {
                throw new TypeError('Value of argument "w" violates contract.\n\nExpected:\n?number\n\nGot:\n' + _inspect(w));
            }

            if (!(h == null || typeof h === 'number')) {
                throw new TypeError('Value of argument "h" violates contract.\n\nExpected:\n?number\n\nGot:\n' + _inspect(h));
            }

            console.trace('The key "start" is depreciated use "Start" instead.');

            this.Start(w, h);
        }

        /** Legacy functions.
        *       support for these functions is limited, and planned to be removed completely
        *        this space is primarally used for legacy funtionality
        *       dont use
        */

    }, {
        key: 'create',
        value: function create(a) {
            function _ref3(_id3) {
                if (!(_id3 instanceof Object)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id3));
                }

                return _id3;
            }

            if (!(a instanceof Object)) {
                throw new TypeError('Value of argument "a" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(a));
            }

            console.trace('	    create(a)');
            return _ref3(this.Construct(a || {}, this.client.room));
        }
    }, {
        key: 'getCurrent',
        value: function getCurrent() {
            function _ref4(_id4) {
                if (!(_id4 instanceof Object)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id4));
                }

                return _id4;
            }

            console.trace('SJS:legacy-core.js:	    getCurrent()');
            return _ref4(this.client.update.state.current);
        }
    }, {
        key: 'getConnection',
        value: function getConnection() {
            function _ref5(_id5) {
                if (!(typeof _id5 === 'string')) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(_id5));
                }

                return _id5;
            }

            console.trace('SJS:legacy-core.js:	    getConnection()');
            return _ref5(this.ext.connect.offline);
        }
    }, {
        key: 'getConnectionError',
        value: function getConnectionError() {
            function _ref6(_id6) {
                if (!(typeof _id6 === 'string')) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(_id6));
                }

                return _id6;
            }

            console.trace('SJS:legacy-core.js:	    getConnectionError()');
            return _ref6(this.ext.connect.error);
        }
    }, {
        key: 'getConnectionAttempts',
        value: function getConnectionAttempts() {
            function _ref7(_id7) {
                if (!(typeof _id7 === 'string')) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(_id7));
                }

                return _id7;
            }

            console.trace('SJS:legacy-core.js:	    getConnectionAttempts()');
            return _ref7(this.ext.connect.connectionAttempts);
        }
    }, {
        key: 'getDelta',
        value: function getDelta() {
            function _ref8(_id8) {
                if (!(typeof _id8 === 'number')) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id8));
                }

                return _id8;
            }

            console.trace('SJS:legacy-core.js:	    getDelta()');
            return _ref8(this.client.update.step.delta);
        }
    }, {
        key: 'getScale',
        value: function getScale() {
            function _ref9(_id9) {
                if (!(typeof _id9 === 'number')) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id9));
                }

                return _id9;
            }

            if (this.tracecount++ < 15) console.trace('SJS:legacy-core.js:	    getScale()');
            return _ref9(this.client.scale);
        }
    }, {
        key: 'getWidth',
        value: function getWidth() {
            function _ref10(_id10) {
                if (!(typeof _id10 === 'number')) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id10));
                }

                return _id10;
            }

            console.trace('SJS:legacy-core.js:	    getWidth()');
            return _ref10(this.client.setWidth);
        }
    }, {
        key: 'getHeight',
        value: function getHeight() {
            function _ref11(_id11) {
                if (!(typeof _id11 === 'number')) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id11));
                }

                return _id11;
            }

            console.trace('SJS:legacy-core.js:	    getHeight()');
            return _ref11(this.client.setHeight);
        }
    }, {
        key: 'getScaledWidth',
        value: function getScaledWidth() {
            function _ref12(_id12) {
                if (!(typeof _id12 === 'number')) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id12));
                }

                return _id12;
            }

            console.trace('SJS:legacy-core.js:	    getScaledWidth()');
            return _ref12(this.client.width);
        }
    }, {
        key: 'getScaledHeight',
        value: function getScaledHeight() {
            function _ref13(_id13) {
                if (!(typeof _id13 === 'number')) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id13));
                }

                return _id13;
            }

            console.trace('SJS:legacy-core.js:	    getScaledHeight()');
            return _ref13(this.client.height);
        }
    }, {
        key: 'setTitle',
        value: function setTitle(title) {
            if (!(typeof title === 'string')) {
                throw new TypeError('Value of argument "title" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(title));
            }

            console.trace('SJS:legacy-core.js:	     setTitle(title)');
            return document.title == title ? document.title : document.title = title;
        }
    }, {
        key: 'setState',
        value: function setState(state) {
            function _ref15(_id15) {
                if (!(_id15 instanceof Object)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id15));
                }

                return _id15;
            }

            if (!(state instanceof Object)) {
                throw new TypeError('Value of argument "state" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(state));
            }

            console.trace('SJS:legacy-core.js:	     setState(state)');
            return _ref15(this.client.update.state.set(state, true));
        }
    }, {
        key: 'toggleWidescreen',
        value: function toggleWidescreen() {
            console.trace('SJS:legacy-core.js:	    toggleWidescreen()');
            return this.client.update.fullscale = !this.client.update.fullscale;
        }
    }]);

    return legacy_core;
}(__WEBPACK_IMPORTED_MODULE_0__base_thingy__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (legacy_core);

function _inspect(input, depth) {
    var maxDepth = 4;
    var maxKeys = 15;

    if (depth === undefined) {
        depth = 0;
    }

    depth += 1;

    if (input === null) {
        return 'null';
    } else if (input === undefined) {
        return 'void';
    } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
        return typeof input === 'undefined' ? 'undefined' : _typeof(input);
    } else if (Array.isArray(input)) {
        if (input.length > 0) {
            if (depth > maxDepth) return '[...]';

            var first = _inspect(input[0], depth);

            if (input.every(function (item) {
                return _inspect(item, depth) === first;
            })) {
                return first.trim() + '[]';
            } else {
                return '[' + input.slice(0, maxKeys).map(function (item) {
                    return _inspect(item, depth);
                }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
            }
        } else {
            return 'Array';
        }
    } else {
        var keys = Object.keys(input);

        if (!keys.length) {
            if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
                return input.constructor.name;
            } else {
                return 'Object';
            }
        }

        if (depth > maxDepth) return '{...}';
        var indent = '  '.repeat(depth - 1);
        var entries = keys.slice(0, maxKeys).map(function (key) {
            return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
        }).join('\n  ' + indent);

        if (keys.length >= maxKeys) {
            entries += '\n  ' + indent + '...';
        }

        if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
            return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
        } else {
            return '{\n  ' + indent + entries + '\n' + indent + '}';
        }
    }
}

/***/ }),

/***/ "./src/modules/core/math/circle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__("./src/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_sprite__ = __webpack_require__("./src/modules/core/api/sprite.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vector__ = __webpack_require__("./src/modules/core/math/vector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var ICircle = __WEBPACK_IMPORTED_MODULE_3__interfaces_ITypes__["e" /* ICircle */],
    IVisuals = __WEBPACK_IMPORTED_MODULE_3__interfaces_ITypes__["G" /* IVisuals */];

/** Basic Circle class
*/

var Circle = function (_Sprite) {
	_inherits(Circle, _Sprite);

	/** This is the constructor for the vector
 * @param {number} x - position.x
 * @param {number} y - position.y
 * @param {number} r - radius */

	function Circle() {
		var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
		var col = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
		var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

		var _ret;

		var visuals = arguments[5];

		_classCallCheck(this, Circle);

		if (!(typeof x === 'number')) {
			throw new TypeError("Value of argument \"x\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(x));
		}

		if (!(typeof y === 'number')) {
			throw new TypeError("Value of argument \"y\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(y));
		}

		if (!(typeof r === 'number')) {
			throw new TypeError("Value of argument \"r\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(r));
		}

		if (!(typeof a === 'number')) {
			throw new TypeError("Value of argument \"a\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(a));
		}

		var _this = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this));

		_this.priority = 0;
		_this.type = "circle";
		_this._id = Circle.count++;


		_this.x = x;
		_this.y = y;
		_this.r = r;
		_this.col = col;
		_this.a = a;

		_this.visuals = visuals;

		if (_this.visuals) _this.visuals.appendNew(_this);

		return _ret = _this, _possibleConstructorReturn(_this, _ret);
	}

	return Circle;
}(__WEBPACK_IMPORTED_MODULE_1__api_sprite__["a" /* default */]);

Circle.onConstructor = function () {};

Circle.count = 0;
/* harmony default export */ __webpack_exports__["a"] = (Circle);


if (__WEBPACK_IMPORTED_MODULE_0__config__["a" /* _EXPOSURE_ */] && __WEBPACK_IMPORTED_MODULE_0__config__["b" /* _IS_PROD_ */] == false) {

	window.Circle = Circle;
}

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === "undefined" ? "undefined" : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			if (depth > maxDepth) return '[...]';

			var first = _inspect(input[0], depth);

			if (input.every(function (item) {
				return _inspect(item, depth) === first;
			})) {
				return first.trim() + '[]';
			} else {
				return '[' + input.slice(0, maxKeys).map(function (item) {
					return _inspect(item, depth);
				}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
			}
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ }),

/***/ "./src/modules/core/math/math.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector__ = __webpack_require__("./src/modules/core/math/vector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rect__ = __webpack_require__("./src/modules/core/math/rect.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





window.Math.vector = window.Math.Vector = __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* default */];

/**
2DSprite
* @interface
* @private
*/
/*
const _private_Sprite = new WeakMap();

class _Sprite extends Vector {

	static properties = {
		sx:0,
		sy:0

	};

	get position(){

		return this;

	}

	constructor(){


		super();

		_private_Sprite.set(this,this.constructor.properties);

	}


}

window.sprite = _Sprite;

window.sprite2 = new _Sprite();
*/

/**
* @module
* @access public
* @example
* Application.client.math
*/

var Math = function () {
	_createClass(Math, [{
		key: 'toFixedNumber',
		value: function toFixedNumber(x, base) {
			var pow = Math.pow(base || 10, x);
			return +(Math.round(this * pow) / pow);
		}
	}, {
		key: 'minmax4',


		/**
  * Return the min max of 4 values
  * @method
  * @param {Number} a - value
  * @param {Number} b - value
  * @param {Number} c - value
  * @param {Number} d - value
  * @return {Object}
  * @private
  */

		value: function minmax4(a, b, c, d) {

			if (a < b) {
				if (c < d) {
					// sort order: (a, c) (b, d)
					if (a < c) minresult = a;else minresult = c;

					if (b > d) maxresult = b;else maxresult = d;
				} else {
					// sort order: (a, d) (b, c)
					if (a < d) minresult = a;else minresult = d;

					if (b > c) maxresult = b;else maxresult = c;
				}
			} else {
				if (c < d) {
					// sort order: (b, c) (a, d)
					if (b < c) minresult = b;else minresult = c;

					if (a > d) maxresult = a;else maxresult = d;
				} else {
					// sort order: (b, d) (a, c)
					if (b < d) minresult = b;else minresult = d;

					if (a > c) maxresult = a;else maxresult = c;
				}
			}

			return { min: minresult, max: maxresult };
		}

		/**
  * Testing rectangle overlap
  * @ignore
  * @method
  * @param {Rect} r - rectangle collision
  * @param {Rect} b - collision boundry
  * @return {Object}
  * @private
  */

	}, {
		key: 'testRectOverlap',
		value: function testRectOverlap(r, b) {
			// Instances don't overlap themselves.  Also return false early if either object has collisions disabled.
			if (!b || !b.collisionsEnabled) return false;

			/**PREVIEWONLY**/this.collisioncheck_count++;

			b.update_bbox();

			var layerb = b.layer;
			var haspolyb, polyb;

			// Reject via bounding boxes first (fastest)
			if (!b.bbox.intersects_rect(r)) return false;

			// Test rect against tilemap
			if (b.tilemap_exists) {
				b.getCollisionRectCandidates(r, collrect_candidates);

				var collrects = collrect_candidates;
				var i, len, c, tilerc;
				var tmx = b.x;
				var tmy = b.y;

				for (i = 0, len = collrects.length; i < len; ++i) {
					c = collrects[i];
					tilerc = c.rc;
					/**PREVIEWONLY**/this.collisioncheck_count++;

					if (r.intersects_rect_off(tilerc, tmx, tmy)) {
						// Check against tile poly if present
						if (c.poly) {
							/**PREVIEWONLY**/this.polycheck_count++;

							this.temp_poly.set_from_rect(r, 0, 0);

							if (c.poly.intersects_poly(this.temp_poly, -(tmx + tilerc.left), -(tmy + tilerc.top))) {
								cr.clearArray(collrect_candidates);
								return true;
							}
						}
						// No poly: bounding boxes overlap so register a collision
						else {
								cr.clearArray(collrect_candidates);
								return true;
							}
					}
				}

				cr.clearArray(collrect_candidates);
				return false;
			}
			// Test rect against object
			else {
					/**PREVIEWONLY**/this.polycheck_count++;

					tmpQuad.set_from_rect(r);

					// Reject via bounding quads second (presumably next fastest)
					if (!b.bquad.intersects_quad(tmpQuad)) return false;

					haspolyb = b.collision_poly && !b.collision_poly.is_empty();

					// Does not have collision poly: must be in bounding quad overlap
					if (!haspolyb) return true;

					b.collision_poly.cache_poly(b.width, b.height, b.angle);
					tmpQuad.offset(-r.left, -r.top);
					this.temp_poly.set_from_quad(tmpQuad, 0, 0, 1, 1);

					return b.collision_poly.intersects_poly(this.temp_poly, r.left - b.x, r.top - b.y);
				}
		}

		/** @private */

	}, {
		key: 'testSegmentOverlap',
		value: function testSegmentOverlap(x1, y1, x2, y2, b) {
			if (!b || !b.collisionsEnabled) return false;

			/**PREVIEWONLY**/this.collisioncheck_count++;
			b.update_bbox();

			var layerb = b.layer;
			var haspolyb, polyb;

			// Reject via bounding boxes first (fastest). Create temporary bounding box around the segment.
			tmpRect.set(cr.min(x1, x2), cr.min(y1, y2), cr.max(x1, x2), cr.max(y1, y2));

			if (!b.bbox.intersects_rect(tmpRect)) return false;

			// Test segment against tilemap
			if (b.tilemap_exists) {
				b.getCollisionRectCandidates(tmpRect, collrect_candidates);
				var collrects = collrect_candidates;
				var i, len, c, tilerc;
				var tmx = b.x;
				var tmy = b.y;

				for (i = 0, len = collrects.length; i < len; ++i) {
					c = collrects[i];
					tilerc = c.rc;
					/**PREVIEWONLY**/this.collisioncheck_count++;

					// Segment bounding box intersects this tile collision rectangle
					if (tmpRect.intersects_rect_off(tilerc, tmx, tmy)) {
						/**PREVIEWONLY**/this.polycheck_count++;

						// Test real segment intersection
						tmpQuad.set_from_rect(tilerc);
						tmpQuad.offset(tmx, tmy);

						if (tmpQuad.intersects_segment(x1, y1, x2, y2)) {
							// Check against tile collision poly if any
							if (c.poly) {
								if (c.poly.intersects_segment(tmx + tilerc.left, tmy + tilerc.top, x1, y1, x2, y2)) {
									cr.clearArray(collrect_candidates);
									return true;
								}
							}
							// Otherwise is intersecting tile box
							else {
									cr.clearArray(collrect_candidates);
									return true;
								}
						}
					}
				}

				cr.clearArray(collrect_candidates);
				return false;
			} else {
				/**PREVIEWONLY**/this.polycheck_count++;

				// Reject via bounding quads second (presumably next fastest)
				if (!b.bquad.intersects_segment(x1, y1, x2, y2)) return false;

				haspolyb = b.collision_poly && !b.collision_poly.is_empty();

				// Does not have collision poly: must be in bounding quad intersection
				if (!haspolyb) return true;

				b.collision_poly.cache_poly(b.width, b.height, b.angle);

				return b.collision_poly.intersects_segment(b.x, b.y, x1, y1, x2, y2);
			}
		}

		/** @private
  * Push to try and move out of solid.  Pass -1, 0 or 1 for xdir and ydir to specify a push direction.
  */

	}, {
		key: 'pushOutSolid',
		value: function pushOutSolid(inst, xdir, ydir, dist, include_jumpthrus, specific_jumpthru) {
			var push_dist = dist || 50;

			var oldx = inst.x;
			var oldy = inst.y;

			var i;
			var last_overlapped = null,
			    secondlast_overlapped = null;

			for (i = 0; i < push_dist; i++) {
				inst.x = oldx + xdir * i;
				inst.y = oldy + ydir * i;
				inst.set_bbox_changed();

				// Test if we've cleared the last instance we were overlapping
				if (!this.testOverlap(inst, last_overlapped)) {
					// See if we're still overlapping a different solid
					last_overlapped = this.testOverlapSolid(inst);

					if (last_overlapped) secondlast_overlapped = last_overlapped;

					// We're clear of all solids - check jumpthrus
					if (!last_overlapped) {
						if (include_jumpthrus) {
							if (specific_jumpthru) last_overlapped = this.testOverlap(inst, specific_jumpthru) ? specific_jumpthru : null;else last_overlapped = this.testOverlapJumpThru(inst);

							if (last_overlapped) secondlast_overlapped = last_overlapped;
						}

						// Clear of both - completed push out.  Adjust fractionally to 1/16th of a pixel.
						if (!last_overlapped) {
							if (secondlast_overlapped) this.pushInFractional(inst, xdir, ydir, secondlast_overlapped, 16);

							return true;
						}
					}
				}
			}

			// Didn't get out a solid: oops, we're stuck.
			// Restore old position.
			inst.x = oldx;
			inst.y = oldy;
			inst.set_bbox_changed();
			return false;
		}

		/** @private */

	}, {
		key: 'pushOut',
		value: function pushOut(inst, xdir, ydir, dist, otherinst) {
			var push_dist = dist || 50;

			var oldx = inst.x;
			var oldy = inst.y;

			var i;

			for (i = 0; i < push_dist; i++) {
				inst.x = oldx + xdir * i;
				inst.y = oldy + ydir * i;
				inst.set_bbox_changed();

				// Test if we've cleared the last instance we were overlapping
				if (!this.testOverlap(inst, otherinst)) return true;
			}

			// Didn't get out a solid: oops, we're stuck.
			// Restore old position.
			inst.x = oldx;
			inst.y = oldy;
			inst.set_bbox_changed();
			return false;
		}

		/** @private */

	}, {
		key: 'pushInFractional',
		value: function pushInFractional(inst, xdir, ydir, obj, limit) {
			var divisor = 2;
			var frac;
			var forward = false;
			var overlapping = false;
			var bestx = inst.x;
			var besty = inst.y;

			while (divisor <= limit) {
				frac = 1 / divisor;
				divisor *= 2;

				inst.x += xdir * frac * (forward ? 1 : -1);
				inst.y += ydir * frac * (forward ? 1 : -1);
				inst.set_bbox_changed();

				if (this.testOverlap(inst, obj)) {
					// Overlapped something: try going forward again
					forward = true;
					overlapping = true;
				} else {
					// Didn't overlap anything: keep going back
					forward = false;
					overlapping = false;
					bestx = inst.x;
					besty = inst.y;
				}
			}

			// If left overlapping, move back to last place not overlapping
			if (overlapping) {
				inst.x = bestx;
				inst.y = besty;
				inst.set_bbox_changed();
			}
		}
	}, {
		key: 'pushOutSolidNearest',


		/** @private */

		value: function pushOutSolidNearest(inst, max_dist_) {
			var max_dist = cr.is_undefined(max_dist_) ? 100 : max_dist_;
			var dist = 0;
			var oldx = inst.x;
			var oldy = inst.y;

			var dir = 0;
			var dx = 0,
			    dy = 0;
			var last_overlapped = this.testOverlapSolid(inst);

			if (!last_overlapped) return true; // already clear of solids

			// 8-direction spiral scan
			while (dist <= max_dist) {
				switch (dir) {
					case 0:
						dx = 0;dy = -1;dist++;break;
					case 1:
						dx = 1;dy = -1;break;
					case 2:
						dx = 1;dy = 0;break;
					case 3:
						dx = 1;dy = 1;break;
					case 4:
						dx = 0;dy = 1;break;
					case 5:
						dx = -1;dy = 1;break;
					case 6:
						dx = -1;dy = 0;break;
					case 7:
						dx = -1;dy = -1;break;
				}

				dir = (dir + 1) % 8;

				inst.x = cr.floor(oldx + dx * dist);
				inst.y = cr.floor(oldy + dy * dist);
				inst.set_bbox_changed();

				// Test if we've cleared the last instance we were overlapping
				if (!this.testOverlap(inst, last_overlapped)) {
					// See if we're still overlapping a different solid
					last_overlapped = this.testOverlapSolid(inst);

					// We're clear of all solids
					if (!last_overlapped) return true;
				}
			}

			// Didn't get pushed out: restore old position and return false
			inst.x = oldx;
			inst.y = oldy;
			inst.set_bbox_changed();
			return false;
		}
	}, {
		key: 'registerCollision',


		/** @private */

		value: function registerCollision(a, b) {
			// Ignore if either instance has disabled collisions
			if (!a.collisionsEnabled || !b.collisionsEnabled) return;

			this.registered_collisions.push([a, b]);
		}

		/** @private */

	}, {
		key: 'checkRegisteredCollision',
		value: function checkRegisteredCollision(a, b) {
			var i, len, x;
			for (i = 0, len = this.registered_collisions.length; i < len; i++) {
				x = this.registered_collisions[i];

				if (x[0] == a && x[1] == b || x[0] == b && x[1] == a) return true;
			}

			return false;
		}

		/** @private */

	}, {
		key: 'calculateSolidBounceAngle',
		value: function calculateSolidBounceAngle(inst, startx, starty, obj) {
			var objx = inst.x;
			var objy = inst.y;
			var radius = cr.max(10, cr.distanceTo(startx, starty, objx, objy));
			var startangle = cr.angleTo(startx, starty, objx, objy);
			var firstsolid = obj || this.testOverlapSolid(inst);

			// Not overlapping a solid: function used wrong, return inverse of object angle (so it bounces back in reverse direction)
			if (!firstsolid) return cr.clamp_angle(startangle + cr.PI);

			var cursolid = firstsolid;

			// Rotate anticlockwise in 5 degree increments until no longer overlapping
			// Don't search more than 175 degrees around (36 * 5 = 180)
			var i, curangle, anticlockwise_free_angle, clockwise_free_angle;
			var increment = cr.to_radians(5); // 5 degree increments

			for (i = 1; i < 36; i++) {
				curangle = startangle - i * increment;
				inst.x = startx + Math.cos(curangle) * radius;
				inst.y = starty + Math.sin(curangle) * radius;
				inst.set_bbox_changed();

				// No longer overlapping current solid
				if (!this.testOverlap(inst, cursolid)) {
					// Search for any other solid
					cursolid = obj ? null : this.testOverlapSolid(inst);

					// Not overlapping any other solid: we've now reached the anticlockwise free angle
					if (!cursolid) {
						anticlockwise_free_angle = curangle;
						break;
					}
				}
			}

			// Did not manage to free up in anticlockwise direction: use reverse angle
			if (i === 36) anticlockwise_free_angle = cr.clamp_angle(startangle + cr.PI);

			var cursolid = firstsolid;

			// Now search in clockwise direction
			for (i = 1; i < 36; i++) {
				curangle = startangle + i * increment;
				inst.x = startx + Math.cos(curangle) * radius;
				inst.y = starty + Math.sin(curangle) * radius;
				inst.set_bbox_changed();

				// No longer overlapping current solid
				if (!this.testOverlap(inst, cursolid)) {
					// Search for any other solid
					cursolid = obj ? null : this.testOverlapSolid(inst);

					// Not overlapping any other solid: we've now reached the clockwise free angle
					if (!cursolid) {
						clockwise_free_angle = curangle;
						break;
					}
				}
			}

			// Did not manage to free up in clockwise direction: use reverse angle
			if (i === 36) clockwise_free_angle = cr.clamp_angle(startangle + cr.PI);

			// Put the object back to its original position
			inst.x = objx;
			inst.y = objy;
			inst.set_bbox_changed();

			// Both angles match: can only be if object completely contained by solid and both searches went all
			// the way round to backwards.  Just return the back angle.
			if (clockwise_free_angle === anticlockwise_free_angle) return clockwise_free_angle;

			// We now have the first anticlockwise and first clockwise angles that are free.
			// Calculate the normal.
			var half_diff = cr.angleDiff(clockwise_free_angle, anticlockwise_free_angle) / 2;
			var normal;

			// Acute angle
			if (cr.angleClockwise(clockwise_free_angle, anticlockwise_free_angle)) {
				normal = cr.clamp_angle(anticlockwise_free_angle + half_diff + cr.PI);
			}
			// Obtuse angle
			else {
					normal = cr.clamp_angle(clockwise_free_angle + half_diff);
				}

			assert2(!isNaN(normal), "Bounce normal computed as NaN");

			// Reflect startangle about normal (r = v - 2 (v . n) n)
			var vx = Math.cos(startangle);
			var vy = Math.sin(startangle);
			var nx = Math.cos(normal);
			var ny = Math.sin(normal);
			var v_dot_n = vx * nx + vy * ny;
			var rx = vx - 2 * v_dot_n * nx;
			var ry = vy - 2 * v_dot_n * ny;
			return cr.angleTo(0, 0, rx, ry);
		}

		/** @private */

	}, {
		key: 'saveInstanceToJSON',
		value: function saveInstanceToJSON(inst, state_only) {

			var i, len, world, behinst, et;
			var type = inst.type;
			var plugin = type.plugin;

			var o = {};

			if (state_only) o["c2"] = true; // mark as known json data from Construct 2
			else o["uid"] = inst.uid;

			if (cr.hasAnyOwnProperty(inst.extra)) o["ex"] = CopyExtraObject(inst.extra);

			// Save instance variables
			if (inst.instance_vars && inst.instance_vars.length) {
				o["ivs"] = {};

				for (i = 0, len = inst.instance_vars.length; i < len; i++) {
					o["ivs"][inst.type.instvar_sids[i].toString()] = inst.instance_vars[i];
				}
			}

			// Save world data
			if (plugin.is_world) {
				world = {
					"x": inst.x,
					"y": inst.y,
					"w": inst.width,
					"h": inst.height,
					"l": inst.layer.sid,
					"zi": inst.get_zindex()
				};

				if (inst.angle !== 0) world["a"] = inst.angle;

				if (inst.opacity !== 1) world["o"] = inst.opacity;

				if (inst.hotspotX !== 0.5) world["hX"] = inst.hotspotX;

				if (inst.hotspotY !== 0.5) world["hY"] = inst.hotspotY;

				if (inst.blend_mode !== 0) world["bm"] = inst.blend_mode;

				if (!inst.visible) world["v"] = inst.visible;

				if (!inst.collisionsEnabled) world["ce"] = inst.collisionsEnabled;

				if (inst.my_timescale !== -1) world["mts"] = inst.my_timescale;

				if (type.effect_types.length) {
					world["fx"] = [];

					for (i = 0, len = type.effect_types.length; i < len; i++) {
						et = type.effect_types[i];
						world["fx"].push({ "name": et.name,
							"active": inst.active_effect_flags[et.index],
							"params": inst.effect_params[et.index] });
					}
				}

				o["w"] = world;
			}

			// Save behaviors
			if (inst.behavior_insts && inst.behavior_insts.length) {
				o["behs"] = {};

				for (i = 0, len = inst.behavior_insts.length; i < len; i++) {
					behinst = inst.behavior_insts[i];

					if (behinst.saveToJSON) o["behs"][behinst.type.sid.toString()] = behinst.saveToJSON();
				}
			}

			// Save plugin own data
			if (inst.saveToJSON) o["data"] = inst.saveToJSON();

			return o;
		}

		/** @private */

	}], [{
		key: 'segments_intersect',
		value: function segments_intersect(a1x, a1y, a2x, a2y, b1x, b1y, b2x, b2y) {

			var max_ax, min_ax, max_ay, min_ay, max_bx, min_bx, max_by, min_by;

			// Long-hand code since this is a performance hotspot and this type of
			// code minimises the number of conditional tests necessary.
			if (a1x < a2x) {
				min_ax = a1x;
				max_ax = a2x;
			} else {
				min_ax = a2x;
				max_ax = a1x;
			}

			if (b1x < b2x) {
				min_bx = b1x;
				max_bx = b2x;
			} else {
				min_bx = b2x;
				max_bx = b1x;
			}

			if (max_ax < min_bx || min_ax > max_bx) return false;

			if (a1y < a2y) {
				min_ay = a1y;
				max_ay = a2y;
			} else {
				min_ay = a2y;
				max_ay = a1y;
			}

			if (b1y < b2y) {
				min_by = b1y;
				max_by = b2y;
			} else {
				min_by = b2y;
				max_by = b1y;
			}

			if (max_ay < min_by || min_ay > max_by) return false;

			var dpx = b1x - a1x + b2x - a2x;
			var dpy = b1y - a1y + b2y - a2y;
			var qax = a2x - a1x;
			var qay = a2y - a1y;
			var qbx = b2x - b1x;
			var qby = b2y - b1y;

			var d = cr.abs(qay * qbx - qby * qax);
			var la = qbx * dpy - qby * dpx;

			if (cr.abs(la) > d) return false;

			var lb = qax * dpy - qay * dpx;

			return cr.abs(lb) <= d;
		}
	}]);

	/**
 * Builds new math into global math and Application.math
 * @param {number} x - position.x
 * @param {number} y - position.y
 */

	function Math() {
		_classCallCheck(this, Math);
	}

	return Math;
}();

/* harmony default export */ __webpack_exports__["a"] = (Math);

/***/ }),

/***/ "./src/modules/core/math/rect.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @ignore
*/
var Rect = function () {
	_createClass(Rect, null, [{
		key: "top",
		get: function get() {

			this._top;
		},
		set: function set(value) {

			return this._top = value;
		}
	}, {
		key: "left",
		get: function get() {

			this._left;
		},
		set: function set(value) {

			return this._left = value;
		}
	}, {
		key: "right",
		get: function get() {

			this._right;
		},
		set: function set(value) {

			return this._right = value;
		}
	}, {
		key: "bottom",
		get: function get() {

			this._bottom;
		},
		set: function set(value) {

			return this._bottom = value;
		}
	}]);

	function Rect(left, top, width, height) {
		_classCallCheck(this, Rect);

		var right = left + width;
		var bottom = top + height;

		this.set(left, top, right, bottom);
	}

	_createClass(Rect, [{
		key: "set",
		value: function set(left, top, right, bottom) {

			this.left = left;
			this.top = top;
			this.right = right;
			this.bottom = bottom;
		}
	}, {
		key: "copy",
		value: function copy(r) {

			this.left = r.left;
			this.top = r.top;
			this.right = r.right;
			this.bottom = r.bottom;
		}
	}, {
		key: "width",
		value: function width() {

			return this.right - this.left;
		}
	}, {
		key: "height",
		value: function height() {

			return this.bottom - this.top;
		}
	}, {
		key: "offset",
		value: function offset(px, py) {

			this.left += px;
			this.top += py;
			this.right += px;
			this.bottom += py;

			return this;
		}
	}, {
		key: "normalize",
		value: function normalize() {

			var temp = 0;

			if (this.left > this.right) {
				temp = this.left;
				this.left = this.right;
				this.right = temp;
			}

			if (this.top > this.bottom) {
				temp = this.top;
				this.top = this.bottom;
				this.bottom = temp;
			}
		}
	}, {
		key: "intersects_rect",
		value: function intersects_rect(rc) {

			return !(rc.right < this.left || rc.bottom < this.top || rc.left > this.right || rc.top > this.bottom);
		}
	}, {
		key: "intersects_rect_off",
		value: function intersects_rect_off(rc, ox, oy) {

			return !(rc.right + ox < this.left || rc.bottom + oy < this.top || rc.left + ox > this.right || rc.top + oy > this.bottom);
		}
	}, {
		key: "contains_pt",
		value: function contains_pt(x, y) {

			return x >= this.left && x <= this.right && y >= this.top && y <= this.bottom;
		}
	}, {
		key: "equals",
		value: function equals(r) {

			return this.left === r.left && this.top === r.top && this.right === r.right && this.bottom === r.bottom;
		}
	}]);

	return Rect;
}();

Rect._top = 0;
Rect._left = 0;
Rect._right = 0;
Rect._bottom = 0;
/* unused harmony default export */ var _unused_webpack_default_export = (Rect);


window.Rect = Rect;

/***/ }),

/***/ "./src/modules/core/math/scaler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var IScaler = __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes__["v" /* IScaler */];

/**
*/

var Scaler =

/** This is the constructor for the vector
* @param {number} x - position.x
* @param {number} y - position.y
* @param {number} s - position.s */

function Scaler() {
				var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
				var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
				var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

				_classCallCheck(this, Scaler);

				if (!(typeof x === 'number')) {
								throw new TypeError("Value of argument \"x\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(x));
				}

				if (!(typeof y === 'number')) {
								throw new TypeError("Value of argument \"y\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(y));
				}

				if (!(typeof s === 'number')) {
								throw new TypeError("Value of argument \"s\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(s));
				}

				this.x = x;
				this.y = y;
				this.s = y;

				return this;
};

/* harmony default export */ __webpack_exports__["a"] = (Scaler);

function _inspect(input, depth) {
				var maxDepth = 4;
				var maxKeys = 15;

				if (depth === undefined) {
								depth = 0;
				}

				depth += 1;

				if (input === null) {
								return 'null';
				} else if (input === undefined) {
								return 'void';
				} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
								return typeof input === "undefined" ? "undefined" : _typeof(input);
				} else if (Array.isArray(input)) {
								if (input.length > 0) {
												if (depth > maxDepth) return '[...]';

												var first = _inspect(input[0], depth);

												if (input.every(function (item) {
																return _inspect(item, depth) === first;
												})) {
																return first.trim() + '[]';
												} else {
																return '[' + input.slice(0, maxKeys).map(function (item) {
																				return _inspect(item, depth);
																}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
												}
								} else {
												return 'Array';
								}
				} else {
								var keys = Object.keys(input);

								if (!keys.length) {
												if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
																return input.constructor.name;
												} else {
																return 'Object';
												}
								}

								if (depth > maxDepth) return '{...}';
								var indent = '  '.repeat(depth - 1);
								var entries = keys.slice(0, maxKeys).map(function (key) {
												return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
								}).join('\n  ' + indent);

								if (keys.length >= maxKeys) {
												entries += '\n  ' + indent + '...';
								}

								if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
												return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
								} else {
												return '{\n  ' + indent + entries + '\n' + indent + '}';
								}
				}
}

/***/ }),

/***/ "./src/modules/core/math/vector.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__("./src/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_thingy__ = __webpack_require__("./src/modules/core/base/thingy.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var IVector = __WEBPACK_IMPORTED_MODULE_1__interfaces_ITypes__["F" /* IVector */];




/** Vector
* @module
* @access public
* @example
* let vector = new Vector(1,1);
*/

var Vector = function (_WeakMapThingy) {
    _inherits(Vector, _WeakMapThingy);

    /** This is the constructor for the vector
    * @param {number} x - position.x
    * @param {number} y - position.y */

    function Vector() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        var _ret;

        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Vector);

        if (!(typeof x === 'number')) {
            throw new TypeError("Value of argument \"x\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(x));
        }

        if (!(typeof y === 'number')) {
            throw new TypeError("Value of argument \"y\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(y));
        }

        var _this = _possibleConstructorReturn(this, (Vector.__proto__ || Object.getPrototypeOf(Vector)).call(this, new WeakMap()));

        _this._position = [0, 0];


        _this.position.x = x;

        _this.position.y = y;

        return _ret = _this, _possibleConstructorReturn(_this, _ret);
    }

    /** Set Vector private variables
       * @type {Object}
       * @protected */

    _createClass(Vector, [{
        key: "Difference",


        /**
        * @method
        */

        value: function Difference(a, b) {
            function _ref10(_id10) {
                if (!IVector(_id10)) {
                    throw new TypeError("Function return value violates contract.\n\nExpected:\nIVector\n\nGot:\n" + _inspect(_id10));
                }

                return _id10;
            }

            if (!IVector(a)) {
                throw new TypeError("Value of argument \"a\" violates contract.\n\nExpected:\nIVector\n\nGot:\n" + _inspect(a));
            }

            if (!IVector(b)) {
                throw new TypeError("Value of argument \"b\" violates contract.\n\nExpected:\nIVector\n\nGot:\n" + _inspect(b));
            }

            var x = a.x - b.x;
            var y = a.y - b.y;

            return _ref10(new Vector(x, y));
        }

        /**
        * @method
        */

    }, {
        key: "equals",
        value: function equals(p) {
            if (!IVector(p)) {
                throw new TypeError("Value of argument \"p\" violates contract.\n\nExpected:\nIVector\n\nGot:\n" + _inspect(p));
            }

            return this.x === p.x && this.y === p.y;
        }

        /**
        * @method
        */

    }, {
        key: "sum",
        value: function sum() {
            function _ref12(_id12) {
                if (!(typeof _id12 === 'number')) {
                    throw new TypeError("Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(_id12));
                }

                return _id12;
            }

            return _ref12(this.x + this.y);
        }

        /**
        * Multiply vector position
        * @method
        * @param {Number} a - multiply X
        * @param {Number} b - multiply Y
        * @return {IVector}
        */

    }, {
        key: "multiply",
        value: function multiply(a, b) {
            function _ref13(_id13) {
                if (!IVector(_id13)) {
                    throw new TypeError("Function return value violates contract.\n\nExpected:\nIVector\n\nGot:\n" + _inspect(_id13));
                }

                return _id13;
            }

            if (!(typeof a === 'number')) {
                throw new TypeError("Value of argument \"a\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(a));
            }

            if (!(typeof b === 'number')) {
                throw new TypeError("Value of argument \"b\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(b));
            }

            this._position[0] *= a;
            this._position[1] *= b;

            return _ref13(this);
        }

        /**
        * Offset vector position
        * @method
        * @param {Number} a - multiply X
        * @param {Number} b - multiply Y
        * @return {IVector}
        */

    }, {
        key: "offset",
        value: function offset(a, b) {
            function _ref14(_id14) {
                if (!IVector(_id14)) {
                    throw new TypeError("Function return value violates contract.\n\nExpected:\nIVector\n\nGot:\n" + _inspect(_id14));
                }

                return _id14;
            }

            if (!(typeof a === 'number')) {
                throw new TypeError("Value of argument \"a\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(a));
            }

            if (!(typeof b === 'number')) {
                throw new TypeError("Value of argument \"b\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(b));
            }

            this._position[0] += a;
            this._position[1] += b;

            return _ref14(this);
        }
    }, {
        key: "position",


        /**
        * Get vector position
        * @type {Object}
        */

        get: function get() {
            function _ref(_id) {
                if (!(_id instanceof Object)) {
                    throw new TypeError("Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n" + _inspect(_id));
                }

                return _id;
            }

            return _ref(this);
        }

        /**
        * Set vector position
        * @type {Object}
        * @example
        * var PointA = new Vector(2,1);
        * PointA.position = new Vector(5,5);
        * PointA.position = {x:0,y:0};
        */

        ,
        set: function set(value) {
            if (!IVector(value)) {
                throw new TypeError("Value of argument \"value\" violates contract.\n\nExpected:\nIVector\n\nGot:\n" + _inspect(value));
            }

            this.x = value.x;

            if (!(typeof this.x === 'number')) {
                throw new TypeError("Value of \"this.x\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.x));
            }

            this.y = value.y;

            if (!(typeof this.y === 'number')) {
                throw new TypeError("Value of \"this.y\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.y));
            }
        }

        /**
        * Get x position
        * @type {Number}
        */

    }, {
        key: "x",
        get: function get() {
            function _ref3(_id3) {
                if (!(typeof _id3 === 'number')) {
                    throw new TypeError("Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(_id3));
                }

                return _id3;
            }

            return _ref3(this._position[0]);
        }

        /**
        * Set x position
        * @type {Number}
        * @example
        * var PointA = new Vector(2,1);
        * PointA.position.x = {x:0,y:0};
        * PointA.x = 2;
        */

        ,
        set: function set(value) {
            if (!(typeof value === 'number')) {
                throw new TypeError("Value of argument \"value\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(value));
            }

            this._position[0] = value;
        }

        /**
        * Get y position
        * @type {Number}
        */

    }, {
        key: "y",
        get: function get() {
            function _ref5(_id5) {
                if (!(typeof _id5 === 'number')) {
                    throw new TypeError("Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(_id5));
                }

                return _id5;
            }

            //return this._y;
            return _ref5(this._position[1]);
        }

        /**
        * Set y position
        * @type {Number}
        * @example
        * var PointA = new Vector(2,1);
        * PointA.y = 2;
        */

        ,
        set: function set(value) {
            if (!(typeof value === 'number')) {
                throw new TypeError("Value of argument \"value\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(value));
            }

            //this._y = value;
            this._position[1] = value;
        }

        /**
        * Get s position
        * @type {Number}
        */

    }, {
        key: "s",
        get: function get() {

            //return this._y;
            return this._s;
        }

        /**
        * Set s position
        * @type {Number}
        * @example
        * var PointA = new Vector(2,1);
        * PointA.y = 2;
        */

        ,
        set: function set(value) {
            if (!(typeof value === 'number')) {
                throw new TypeError("Value of argument \"value\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(value));
            }

            //this._y = value;
            this._s = value;
        }

        /**
        * @method
        */

        //toString() { return `Point<${ this.#x },${ this.#y }>` }


        /**
        * @method
        */

    }], [{
        key: "Combine",
        value: function Combine(a, b) {
            function _ref9(_id9) {
                if (!IVector(_id9)) {
                    throw new TypeError("Function return value violates contract.\n\nExpected:\nIVector\n\nGot:\n" + _inspect(_id9));
                }

                return _id9;
            }

            if (!IVector(a)) {
                throw new TypeError("Value of argument \"a\" violates contract.\n\nExpected:\nIVector\n\nGot:\n" + _inspect(a));
            }

            if (!IVector(b)) {
                throw new TypeError("Value of argument \"b\" violates contract.\n\nExpected:\nIVector\n\nGot:\n" + _inspect(b));
            }

            var x = a.x + b.x;
            var y = a.y + b.y;

            return _ref9(new Vector(x, y));
        }
    }]);

    return Vector;
}(__WEBPACK_IMPORTED_MODULE_2__base_thingy__["a" /* default */]);

Vector.properties = {
    name: "Vector",
    x: null,
    y: null
};
/* harmony default export */ __webpack_exports__["a"] = (Vector);


if (__WEBPACK_IMPORTED_MODULE_0__config__["a" /* _EXPOSURE_ */] && __WEBPACK_IMPORTED_MODULE_0__config__["b" /* _IS_PROD_ */] == false) {

    window.Vector = Vector;
}

function _inspect(input, depth) {
    var maxDepth = 4;
    var maxKeys = 15;

    if (depth === undefined) {
        depth = 0;
    }

    depth += 1;

    if (input === null) {
        return 'null';
    } else if (input === undefined) {
        return 'void';
    } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
        return typeof input === "undefined" ? "undefined" : _typeof(input);
    } else if (Array.isArray(input)) {
        if (input.length > 0) {
            if (depth > maxDepth) return '[...]';

            var first = _inspect(input[0], depth);

            if (input.every(function (item) {
                return _inspect(item, depth) === first;
            })) {
                return first.trim() + '[]';
            } else {
                return '[' + input.slice(0, maxKeys).map(function (item) {
                    return _inspect(item, depth);
                }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
            }
        } else {
            return 'Array';
        }
    } else {
        var keys = Object.keys(input);

        if (!keys.length) {
            if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
                return input.constructor.name;
            } else {
                return 'Object';
            }
        }

        if (depth > maxDepth) return '{...}';
        var indent = '  '.repeat(depth - 1);
        var entries = keys.slice(0, maxKeys).map(function (key) {
            return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
        }).join('\n  ' + indent);

        if (keys.length >= maxKeys) {
            entries += '\n  ' + indent + '...';
        }

        if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
            return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
        } else {
            return '{\n  ' + indent + entries + '\n' + indent + '}';
        }
    }
}

/***/ }),

/***/ "./src/modules/core/timing/pace.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes_js__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var IApp = __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes_js__["b" /* IApp */],
    IPace = __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes_js__["r" /* IPace */];

/*
* Base Pace class for caluclating the Pacing of the Application
*/

var Pace = function () {
	function Pace(rate, fps) {
		_classCallCheck(this, Pace);

		if (!(typeof rate === 'number')) {
			throw new TypeError("Value of argument \"rate\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(rate));
		}

		if (!(typeof fps === 'number')) {
			throw new TypeError("Value of argument \"fps\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(fps));
		}

		this.targetFPS = fps;

		this.currentTime = Date.now();

		if (!(typeof this.currentTime === 'number')) {
			throw new TypeError("Value of \"this.currentTime\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.currentTime));
		}

		this.rate = rate / 1000.0;

		if (!(typeof this.rate === 'number')) {
			throw new TypeError("Value of \"this.rate\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.rate));
		}

		this.offset = this.currentTime - 1000.0 / rate;

		if (!(typeof this.offset === 'number')) {
			throw new TypeError("Value of \"this.offset\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.offset));
		}

		this.delta = 0.0;

		//Fake Flow Interfacing
		return this;
	}

	/*
 *	Delta between the last frame and this frame
 */

	_createClass(Pace, [{
		key: "CalculateDelta",
		value: function CalculateDelta() {
			function _ref(_id) {
				if (!(typeof _id === 'number')) {
					throw new TypeError("Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(_id));
				}

				return _id;
			}

			this.currentTime = Date.now();

			if (!(typeof this.currentTime === 'number')) {
				throw new TypeError("Value of \"this.currentTime\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.currentTime));
			}

			return _ref(this.currentTime - this.offset);
		}

		/*
  *
  */

	}, {
		key: "Step",
		value: function Step() {

			this.delta = this.CalculateDelta();

			if (!(typeof this.delta === 'number')) {
				throw new TypeError("Value of \"this.delta\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.delta));
			}

			var step = this.rate * this.delta;

			if (step > 1.0) {

				//this.offset += Math.floor(step)/this.rate;
				this.offset += (step << 0) / this.rate;

				if (!(typeof this.offset === 'number')) {
					throw new TypeError("Value of \"this.offset\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.offset));
				}
			}

			return step - 1.0 > 0.0 ? true : false;
		}
	}]);

	return Pace;
}();

/* harmony default export */ __webpack_exports__["a"] = (Pace);

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === "undefined" ? "undefined" : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			if (depth > maxDepth) return '[...]';

			var first = _inspect(input[0], depth);

			if (input.every(function (item) {
				return _inspect(item, depth) === first;
			})) {
				return first.trim() + '[]';
			} else {
				return '[' + input.slice(0, maxKeys).map(function (item) {
					return _inspect(item, depth);
				}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
			}
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ }),

/***/ "./src/modules/core/timing/step.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_thingy__ = __webpack_require__("./src/modules/core/base/thingy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var IApp = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["b" /* IApp */],
    IPace = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["r" /* IPace */],
    IStep = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["z" /* IStep */];

/*
*	The state class which the main game state inherits
*/

var Step = function (_WeakMapThingy) {
	_inherits(Step, _WeakMapThingy);

	function Step(app) {
		var _ret;

		_classCallCheck(this, Step);

		if (!IApp(app)) {
			throw new TypeError('Value of argument "app" violates contract.\n\nExpected:\nIApp\n\nGot:\n' + _inspect(app));
		}

		var _this = _possibleConstructorReturn(this, (Step.__proto__ || Object.getPrototypeOf(Step)).call(this, new WeakMap()));

		_this.delta = 1;
		_this.frames = 0;
		_this.pending = 0;
		_this.padding = 0;
		_this.increment = 0;
		_this.delta_speed = 1;


		_this.app = app;

		if (!IApp(_this.app)) {
			throw new TypeError('Value of "this.app" violates contract.\n\nExpected:\nIApp\n\nGot:\n' + _inspect(_this.app));
		}

		return _ret = _this, _possibleConstructorReturn(_this, _ret);
	}

	/*
    *
    */

	_createClass(Step, [{
		key: 'focus',


		/* UNUSED? */

		value: function focus() {
			//if (this.app.ext.freezeonfocus)
			//    return document.hasFocus();
			return true;
		}

		/*
  *	Reset Frames
  */

	}, {
		key: 'clean',
		value: function clean() {
			function _ref4(_id4) {
				if (!(typeof _id4 === 'number')) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id4));
				}

				return _id4;
			}

			var f = this.frames || 1;

			this.frames = 0;

			return _ref4(f);
		}

		/*
  *	Game Loop, Increment Frames
  */

	}, {
		key: 'tick',
		value: function tick(a, b) {
			if (!IPace(a)) {
				throw new TypeError('Value of argument "a" violates contract.\n\nExpected:\nIPace\n\nGot:\n' + _inspect(a));
			}

			if (!IPace(b)) {
				throw new TypeError('Value of argument "b" violates contract.\n\nExpected:\nIPace\n\nGot:\n' + _inspect(b));
			}

			this.first(a);

			this.second(b);

			return this.fps;
		}

		/*
  *
  */

	}, {
		key: 'second',
		value: function second(step) {
			if (!IPace(step)) {
				throw new TypeError('Value of argument "step" violates contract.\n\nExpected:\nIPace\n\nGot:\n' + _inspect(step));
			}

			if (!step.Step()) return false;

			this.frames++;

			var stepPadding = this.padding;

			if (!(typeof stepPadding === 'number')) {
				throw new TypeError('Value of variable "stepPadding" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(stepPadding));
			}

			for (stepPadding; stepPadding >= 0; --stepPadding) {

				if (this.app.client.update.state.initalized) {

					this.focus() ? this.app.client.update.state.update() : null;
				}
			}

			this.padding = 0;

			return true;
		}

		/*
  *
  */

	}, {
		key: 'first',
		value: function first(step) {
			if (!IPace(step)) {
				throw new TypeError('Value of argument "step" violates contract.\n\nExpected:\nIPace\n\nGot:\n' + _inspect(step));
			}

			if (!step.Step()) return false;

			this.fps = step.delta;

			if (!(typeof this.fps === 'number')) {
				throw new TypeError('Value of "this.fps" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(this.fps));
			}

			var n = step.targetFPS / this.fps * 100000;

			this.delta = n + (n < 0 ? 0 : 1) >> 0;

			// Limit FPS Catchup

			if (!(typeof this.delta === 'number')) {
				throw new TypeError('Value of "this.delta" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(this.delta));
			}

			if (this.delta > 2.5) {

				this.delta = 2.5;
			}

			if (this.delta !== this.delta + 1) {

				this.app.client.delta = this.delta_speed = this.delta;
			} else {

				this.app.client.delta = this.delta_speed = 1;
			}

			if (this.fps == 0) {
				return false;
			}

			this.increment = -step.targetFPS + step.targetFPS * (step.targetFPS / this.fps);

			if (!(typeof this.increment === 'number')) {
				throw new TypeError('Value of "this.increment" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(this.increment));
			}

			this.pending += this.increment;

			if (this.pending > step.targetFPS) {

				this.pending -= this.padding / step.targetFPS * step.targetFPS;

				if (!(typeof this.pending === 'number')) {
					throw new TypeError('Value of "this.pending" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(this.pending));
				}

				this.padding++;
			}

			return true;
		}
	}, {
		key: 'fps',
		set: function set(val) {
			if (!(typeof val === 'number')) {
				throw new TypeError('Value of argument "val" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(val));
			}

			this.get('data')[0] = 1 * (this.clean() / val * 1E3);
		},
		get: function get() {
			function _ref2(_id2) {
				if (!(typeof _id2 === 'number')) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id2));
				}

				return _id2;
			}

			return _ref2(this.get('data')[0]);
		}
	}]);

	return Step;
}(__WEBPACK_IMPORTED_MODULE_0__base_thingy__["a" /* default */]);

Step.properties = {

	data: [0]

};
/* harmony default export */ __webpack_exports__["a"] = (Step);

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === 'undefined' ? 'undefined' : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			if (depth > maxDepth) return '[...]';

			var first = _inspect(input[0], depth);

			if (input.every(function (item) {
				return _inspect(item, depth) === first;
			})) {
				return first.trim() + '[]';
			} else {
				return '[' + input.slice(0, maxKeys).map(function (item) {
					return _inspect(item, depth);
				}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
			}
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ }),

/***/ "./src/modules/core/update.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__("./src/modules/state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timing_step__ = __webpack_require__("./src/modules/core/timing/step.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_vector__ = __webpack_require__("./src/modules/core/math/vector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_scaler__ = __webpack_require__("./src/modules/core/math/scaler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_sjs_js__ = __webpack_require__("./src/modules/core/base/sjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var IApp = __WEBPACK_IMPORTED_MODULE_5__interfaces_ITypes__["b" /* IApp */],
    IStep = __WEBPACK_IMPORTED_MODULE_5__interfaces_ITypes__["z" /* IStep */],
    IState = __WEBPACK_IMPORTED_MODULE_5__interfaces_ITypes__["x" /* IState */],
    IClient = __WEBPACK_IMPORTED_MODULE_5__interfaces_ITypes__["f" /* IClient */],
    IVector = __WEBPACK_IMPORTED_MODULE_5__interfaces_ITypes__["F" /* IVector */],
    IScaler = __WEBPACK_IMPORTED_MODULE_5__interfaces_ITypes__["v" /* IScaler */],
    IUpdate = __WEBPACK_IMPORTED_MODULE_5__interfaces_ITypes__["C" /* IUpdate */];

/*
*	The Update class handles scaling, resizing, and the app state.
*/

var Update = function (_SJSClass) {
		_inherits(Update, _SJSClass);

		/* */

		/* Add to options */

		function Update(app) {
				var _ret;

				_classCallCheck(this, Update);

				if (!IApp(app)) {
						throw new TypeError('Value of argument "app" violates contract.\n\nExpected:\nIApp\n\nGot:\n' + _inspect(app));
				}

				var _this = _possibleConstructorReturn(this, (Update.__proto__ || Object.getPrototypeOf(Update)).call(this, app));

				_this.fullscale = false;
				_this.last = new __WEBPACK_IMPORTED_MODULE_2__math_vector__["a" /* default */]();
				_this.difference = new __WEBPACK_IMPORTED_MODULE_2__math_vector__["a" /* default */]();
				_this.scaler = new __WEBPACK_IMPORTED_MODULE_3__math_scaler__["a" /* default */](1, 1, 1);
				_this.scalediff = 0;
				_this.lastscale = 1;
				_this.frames = 0;
				_this.pause = 0;


				return _ret = _this, _possibleConstructorReturn(_this, _ret);
		}

		/*  */

		_createClass(Update, [{
				key: 'inital',


				/**
    * Initalize the state and step objects.
    * Step is delayed untill step is initiated so to prevent value mismatch.
    */

				value: function inital(app) {
						if (!IApp(app)) {
								throw new TypeError('Value of argument "app" violates contract.\n\nExpected:\nIApp\n\nGot:\n' + _inspect(app));
						}

						this.step = new __WEBPACK_IMPORTED_MODULE_1__timing_step__["a" /* default */](app);

						if (!IStep(this.step)) {
								throw new TypeError('Value of "this.step" violates contract.\n\nExpected:\nIStep\n\nGot:\n' + _inspect(this.step));
						}

						this.state = new __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */](app.main, app);

						if (!IState(this.state)) {
								throw new TypeError('Value of "this.state" violates contract.\n\nExpected:\nIState\n\nGot:\n' + _inspect(this.state));
						}
				}

				/**
    * Calculates the scale of the canvas based on inital size inputs.
    * Disabled if overriding canvas properties.
    */

		}, {
				key: 'scale',
				value: function scale(client) {
						function _ref6(_id6) {
								if (!(typeof _id6 === 'number')) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id6));
								}

								return _id6;
						}

						if (!IClient(client)) {
								throw new TypeError('Value of argument "client" violates contract.\n\nExpected:\nIClient\n\nGot:\n' + _inspect(client));
						}

						/* Legacy
      if ((this.pause>0.5))	{
      			console.log('Warning: Paused',30);
      			return (0);
      		} else if (this.set==1)	{
      			console.log('Warning: Scale: Duplicate Run',30);
      			return (0);
      }
      */

						var windowSize = new __WEBPACK_IMPORTED_MODULE_2__math_vector__["a" /* default */](window.innerWidth, window.innerHeight);

						/* Check if overriding */

						if (!IVector(windowSize)) {
								throw new TypeError('Value of variable "windowSize" violates contract.\n\nExpected:\nIVector\n\nGot:\n' + _inspect(windowSize));
						}

						if (client.app.options.canvas.override) {

								/* width to override */

								if (client.app.options.canvas.size.width !== client.width) {

										client.width = client.app.options.canvas.size.width;

										if (client.app.document.body && client.app.document.body.clientHeight > windowSize.y) {

												/* Figure out what do to here. */

										}
								}

								//height to override

								if (client.app.options.canvas.size.height !== client.height) {

										client.height = client.app.options.canvas.size.height;
								}

								//if centered

								if (client.app.options.canvas.position.center) {

										//if not aligned

										if (client.app.options.canvas.size.left !== client.app.width / 2) {

												//align
												client.app.canvas.getCanvas().style.left = -client.width / 2 + windowSize.x / 2 + "px";

												//if buffer align

												if (client.app.options.canvas.buffer) {

														client.app.canvas.getBuffer().style.left = -client.width / 2 + windowSize.x / 2 + "px";
												}
										}
								}
						} else {

								if (windowSize.y !== client.height) {

										client.height = windowSize.y;
								}

								if (windowSize.x !== client.width) {

										client.width = windowSize.x;
								}
						}

						/* If No Difference return the previous scale */

						if (this.difference.sum() == 0) {

								this.set = 0;

								this.scalediff = 0;

								return this.lastscale;
						}

						this.log('update:scale:adjustment');

						/* You want to take the Y over the X and in the function after the X takes presidence */

						this.set = 1;

						this.scaler.y = client.height / client.setHeight;

						this.scaler.x = client.width / client.setWidth;

						/* Toggle wither or not to scale based off this.fullscale */

						if (this.fullscale) {

								this.scaler.s = this.scaler.y;
						} else {

								if (this.scaler.y < this.scaler.x) {

										this.scaler.s = this.scaler.y;
								} else {

										this.scaler.s = this.scaler.x;
								}
						}

						/* Get scale difference and store scale in lastscale */

						this.scalediff = this.scaler.s - this.lastscale;

						if (!(typeof this.scalediff === 'number')) {
								throw new TypeError('Value of "this.scalediff" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(this.scalediff));
						}

						this.set = 0;

						this.lastscale = this.scaler.s;

						if (!(typeof this.lastscale === 'number')) {
								throw new TypeError('Value of "this.lastscale" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(this.lastscale));
						}

						return _ref6(this.scaler.s);
				}

				/* WIP - p2 */

		}, {
				key: 'scrollto',
				value: function scrollto() {}

				/* LEGACY, scroll to top, If scaled different, scroll to the top. TO ReIMplement
    		(this.scalediff)?app.app.input.scroll.to(true):app.app.input.scroll.to(false);
    		*/

				/**
    * Perform hard resize of the canvas.
    */

		}, {
				key: 'size',
				value: function size(client) {
						if (!IClient(client)) {
								throw new TypeError('Value of argument "client" violates contract.\n\nExpected:\nIClient\n\nGot:\n' + _inspect(client));
						}

						/* If no difference skip */

						if (this.difference.sum() == 0) {

								return false;
						}

						/* Resize canvas */

						this.app.canvas.canvas.width = this.last.x = this.app.client.width;

						this.app.canvas.canvas.height = this.last.y = this.app.client.height;

						this.app.canvas.buffer.width = this.last.x = this.app.client.width;

						this.app.canvas.buffer.height = this.last.y = this.app.client.height;

						return true;
				}

				/**
    * Calculate width and height delta differences between
    * the canvas size last frame and this frame.
    */

		}, {
				key: 'sizedelta',
				value: function sizedelta(client) {
						if (!IClient(client)) {
								throw new TypeError('Value of argument "client" violates contract.\n\nExpected:\nIClient\n\nGot:\n' + _inspect(client));
						}

						var vector_size = new __WEBPACK_IMPORTED_MODULE_2__math_vector__["a" /* default */](client.width, client.height);

						if (!IVector(vector_size)) {
								throw new TypeError('Value of variable "vector_size" violates contract.\n\nExpected:\nIVector\n\nGot:\n' + _inspect(vector_size));
						}

						if (this.last.equals(vector_size)) {

								this.difference = new __WEBPACK_IMPORTED_MODULE_2__math_vector__["a" /* default */]();

								if (!IVector(this.difference)) {
										throw new TypeError('Value of "this.difference" violates contract.\n\nExpected:\nIVector\n\nGot:\n' + _inspect(this.difference));
								}

								return false;
						} else {

								this.difference = new __WEBPACK_IMPORTED_MODULE_2__math_vector__["a" /* default */]().Difference(this.last, vector_size);

								if (!IVector(this.difference)) {
										throw new TypeError('Value of "this.difference" violates contract.\n\nExpected:\nIVector\n\nGot:\n' + _inspect(this.difference));
								}
						}

						return true;
				}
		}, {
				key: 'step',
				set: function set(value) {
						if (!IStep(value)) {
								throw new TypeError('Value of argument "value" violates contract.\n\nExpected:\nIStep\n\nGot:\n' + _inspect(value));
						}

						this.get('data')[0] = value;
				}

				/*   */

				,
				get: function get() {
						function _ref2(_id2) {
								if (!IStep(_id2)) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nIStep\n\nGot:\n' + _inspect(_id2));
								}

								return _id2;
						}

						return _ref2(this.get('data')[0]);
				}

				/*  */

		}, {
				key: 'state',
				set: function set(value) {
						if (!IState(value)) {
								throw new TypeError('Value of argument "value" violates contract.\n\nExpected:\nIState\n\nGot:\n' + _inspect(value));
						}

						value.init();

						value.initalized = true;

						this.get('data')[1] = value;
				}

				/* */

				,
				get: function get() {
						function _ref4(_id4) {
								if (!IState(_id4)) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nIState\n\nGot:\n' + _inspect(_id4));
								}

								return _id4;
						}

						return _ref4(this.get('data')[1]);
				}
		}]);

		return Update;
}(__WEBPACK_IMPORTED_MODULE_4__base_sjs_js__["a" /* _SJSClass */]);

Update.properties = {

		data: [__WEBPACK_IMPORTED_MODULE_1__timing_step__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */]]

};
/* harmony default export */ __webpack_exports__["a"] = (Update);

function _inspect(input, depth) {
		var maxDepth = 4;
		var maxKeys = 15;

		if (depth === undefined) {
				depth = 0;
		}

		depth += 1;

		if (input === null) {
				return 'null';
		} else if (input === undefined) {
				return 'void';
		} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
				return typeof input === 'undefined' ? 'undefined' : _typeof(input);
		} else if (Array.isArray(input)) {
				if (input.length > 0) {
						if (depth > maxDepth) return '[...]';

						var first = _inspect(input[0], depth);

						if (input.every(function (item) {
								return _inspect(item, depth) === first;
						})) {
								return first.trim() + '[]';
						} else {
								return '[' + input.slice(0, maxKeys).map(function (item) {
										return _inspect(item, depth);
								}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
						}
				} else {
						return 'Array';
				}
		} else {
				var keys = Object.keys(input);

				if (!keys.length) {
						if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
								return input.constructor.name;
						} else {
								return 'Object';
						}
				}

				if (depth > maxDepth) return '{...}';
				var indent = '  '.repeat(depth - 1);
				var entries = keys.slice(0, maxKeys).map(function (key) {
						return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
				}).join('\n  ' + indent);

				if (keys.length >= maxKeys) {
						entries += '\n  ' + indent + '...';
				}

				if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
						return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
				} else {
						return '{\n  ' + indent + entries + '\n' + indent + '}';
				}
		}
}

/***/ }),

/***/ "./src/modules/etc/cookies.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var ICookies = __WEBPACK_IMPORTED_MODULE_0__core_interfaces_ITypes__["i" /* ICookies */];

/**
* <a href="https://github.com/ScottHamper/Cookies">Cookies Polyfill by ScottHamper</a>, modified to ES6
* @noflow
* @module
* @public
*/

var Cookies =

/**
* The constructor will fill window.Cookies with a new instance.
* @param {Object} app - reference to the app.
*/

function Cookies() {
    _classCallCheck(this, Cookies);

    var factory = function factory(window) {
        if (_typeof(window.document) !== 'object') {
            throw new Error('Cookies.js requires a `window` with a `document` object');
        }

        var Cookies = window.Cookies = function (key, value, options) {
            return arguments.length === 1 ? Cookies.get(key) : Cookies.set(key, value, options);
        };

        // Allows for setter injection in unit tests
        Cookies._document = window.document;

        // Used to ensure cookie keys do not collide with
        // built-in `Object` properties
        Cookies._cacheKeyPrefix = 'cookey.'; // Hurr hurr, :)

        Cookies._maxExpireDate = new Date('Fri, 31 Dec 9999 23:59:59 UTC');

        Cookies.defaults = {
            path: '/',
            secure: false
        };

        Cookies.get = function (key) {
            if (Cookies._cachedDocumentCookie !== Cookies._document.cookie) {
                Cookies._renewCache();
            }

            return Cookies._cache[Cookies._cacheKeyPrefix + key];
        };

        Cookies.set = function (key, value, options) {
            options = Cookies._getExtendedOptions(options);
            options.expires = Cookies._getExpiresDate(value === undefined ? -1 : options.expires);

            Cookies._document.cookie = Cookies._generateCookieString(key, value, options);

            return Cookies;
        };

        Cookies.expire = function (key, options) {
            return Cookies.set(key, undefined, options);
        };

        Cookies._getExtendedOptions = function (options) {
            return {
                path: options && options.path || Cookies.defaults.path,
                domain: options && options.domain || Cookies.defaults.domain,
                expires: options && options.expires || Cookies.defaults.expires,
                secure: options && options.secure !== undefined ? options.secure : Cookies.defaults.secure
            };
        };

        Cookies._isValidDate = function (date) {
            return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());
        };

        Cookies._getExpiresDate = function (expires, now) {
            now = now || new Date();

            if (typeof expires === 'number') {
                expires = expires === Infinity ? Cookies._maxExpireDate : new Date(now.getTime() + expires * 1000);
            } else if (typeof expires === 'string') {
                expires = new Date(expires);
            }

            if (expires && !Cookies._isValidDate(expires)) {
                throw new Error('`expires` parameter cannot be converted to a valid Date instance');
            }

            return expires;
        };

        Cookies._generateCookieString = function (key, value, options) {
            key = key.replace(/[^#$&+\^`|]/g, encodeURIComponent);
            key = key.replace(/\(/g, '%28').replace(/\)/g, '%29');
            value = (value + '').replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent);
            options = options || {};

            var cookieString = key + '=' + value;
            cookieString += options.path ? ';path=' + options.path : '';
            cookieString += options.domain ? ';domain=' + options.domain : '';
            cookieString += options.expires ? ';expires=' + options.expires.toUTCString() : '';
            cookieString += options.secure ? ';secure' : '';

            return cookieString;
        };

        Cookies._getCacheFromString = function (documentCookie) {
            var cookieCache = {};
            var cookiesArray = documentCookie ? documentCookie.split('; ') : [];

            for (var i = 0; i < cookiesArray.length; i++) {
                var cookieKvp = Cookies._getKeyValuePairFromCookieString(cookiesArray[i]);

                if (cookieCache[Cookies._cacheKeyPrefix + cookieKvp.key] === undefined) {
                    cookieCache[Cookies._cacheKeyPrefix + cookieKvp.key] = cookieKvp.value;
                }
            }

            return cookieCache;
        };

        Cookies._getKeyValuePairFromCookieString = function (cookieString) {
            // "=" is a valid character in a cookie value according to RFC6265, so cannot `split('=')`
            var separatorIndex = cookieString.indexOf('=');

            // IE omits the "=" when the cookie value is an empty string
            separatorIndex = separatorIndex < 0 ? cookieString.length : separatorIndex;

            return {
                key: decodeURIComponent(cookieString.substr(0, separatorIndex)),
                value: decodeURIComponent(cookieString.substr(separatorIndex + 1))
            };
        };

        Cookies._renewCache = function () {
            Cookies._cache = Cookies._getCacheFromString(Cookies._document.cookie);
            Cookies._cachedDocumentCookie = Cookies._document.cookie;
        };

        Cookies._areEnabled = function () {
            var testKey = 'cookies.js';
            var areEnabled = Cookies.set(testKey, 1).get(testKey) === '1';
            Cookies.expire(testKey);
            return areEnabled;
        };

        Cookies.enabled = Cookies._areEnabled();

        return Cookies;
    };

    var cookiesExport = _typeof(global.document) === 'object' ? factory(global) : factory;
    var AMD = typeof define === 'function' && __webpack_require__("./node_modules/webpack/buildin/amd-options.js");
    var objectExports = (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object';
    var moduleExports = ( false ? 'undefined' : _typeof(module)) === 'object' && _typeof(module.exports) === 'object';
    // AMD support
    if (AMD) {
        define(function () {
            return cookiesExport;
        });
        // CommonJS/Node.js support
    } else if (objectExports) {
        // Support Node.js specific `module.exports` (which can be a function)
        if (moduleExports) {
            exports = module.exports = cookiesExport;
        }
        // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
        exports.Cookies = cookiesExport;
    } else {
        global.Cookies = cookiesExport;
    }

    return Cookies;
};

/* harmony default export */ __webpack_exports__["a"] = (Cookies);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modules/etc/metatags.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_base_thingy__ = __webpack_require__("./src/modules/core/base/thingy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Assign metatags via Metatags global object
*	@module
*	@public */




var IMetatags = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["p" /* IMetatags */];

var Metatags = function () {

		/*
  *
  */

		function Metatags(url) {
				_classCallCheck(this, Metatags);

				this.ms_taphighlight = "no";
				this.apple_webapp = "yes";
				this.apple_statusbar = "black";
				this.devicedpi = true;
				this.devicewidth = true;
				this.head = document.getElementsByTagName('head')[0];
				this.link = null;
				this.meta = null;
				this.count = 0;
				this.width = 0;
				this.cache = false;
				this.cacheage = 3;

				if (!(typeof url === 'string' || url == null)) {
						throw new TypeError("Value of argument \"url\" violates contract.\n\nExpected:\nstring | void\n\nGot:\n" + _inspect(url));
				}

				this.width = window.innerWidth;

				//Touch

				if (!(typeof this.width === 'number')) {
						throw new TypeError("Value of \"this.width\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.width));
				}

				this.append(this.new("msapplication-tap-highlight", this.ms_taphighlight));

				this.append(this.new("apple-mobile-web-app-capable", this.apple_webapp));

				this.append(this.new("apple-mobile-web-app-status-bar-style", this.apple_statusbar));

				this.append(this.new("cursor-event-mode", "native"));

				this.append(this.new("touch-event-mode", "native"));

				this.append(this.new("HandheldFriendly", "True"));

				//Dpi/View

				if (this.devicewidth) {

						this.append(this.new("viewport", "width=device-width, user-scalable=no"));
				}

				if (this.devicedpi) {

						this.append(this.new("viewport", "target-densitydpi=" + this.width + ",-webkit-min-device-pixel-ratio=1,min-resolution:=" + this.width + ",-moz-device-pixel-ratio=1"));
				}

				this.append(this.new("viewport", "user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"));

				//Cache

				if (!this.cache) {

						this.append(this.new("cache-control", "max-age=0"));

						this.append(this.new("cache-control", "no-cache"));

						this.append(this.new("pragma", "no-cache"));
				} else {

						this.append(this.new("cache-control", "max-age=" + this.cacheage));
				}

				this.append(this.new("expires", "Tue, 01 Jan 1980 1:00:00 GMT"));

				return this;
		}

		/*
  *	Favicon. Automatically fills a standard metaAppend while needing only one argument, sets favicon
  */

		_createClass(Metatags, [{
				key: "metaFavicon",
				value: function metaFavicon(img) {
						if (!(typeof img === 'string')) {
								throw new TypeError("Value of argument \"img\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(img));
						}

						this.append(this.metaLink(img, "shortcut icon", "image/png"));
				}

				/*
    * Construct a standard metaLink element
    */

		}, {
				key: "metaLink",
				value: function metaLink(href, rel, type) {
						function _ref2(_id2) {
								if (!(_id2 instanceof Object)) {
										throw new TypeError("Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n" + _inspect(_id2));
								}

								return _id2;
						}

						if (!(typeof href === 'string')) {
								throw new TypeError("Value of argument \"href\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(href));
						}

						if (!(typeof rel === 'string')) {
								throw new TypeError("Value of argument \"rel\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(rel));
						}

						if (!(typeof type === 'string')) {
								throw new TypeError("Value of argument \"type\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(type));
						}

						//Create link element
						this.link = document.createElement('link');

						//Assign element values
						this.link.href = href;

						this.link.rel = rel;

						this.link.type = type;

						//Return link
						return _ref2(this.link);
				}

				/*
    * Construct a standard metaTag element
    */

		}, {
				key: "new",
				value: function _new() {
						var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
						var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

						function _ref3(_id3) {
								if (!(_id3 instanceof Object)) {
										throw new TypeError("Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n" + _inspect(_id3));
								}

								return _id3;
						}

						if (!(typeof name === 'string')) {
								throw new TypeError("Value of argument \"name\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(name));
						}

						if (!(typeof content === 'string')) {
								throw new TypeError("Value of argument \"content\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(content));
						}

						this.meta = document.createElement('meta');

						this.meta.content = content;

						this.meta.name = name;

						return _ref3(this.meta);
				}

				/*
    * Append a meta object to the <head>
    */

		}, {
				key: "append",
				value: function append(meta) {

						var result = false;

						if (this.head.appendChild(meta)) {

								this.count++;

								result = true;
						} else {

								result = false;
						}

						return result;
				}
		}]);

		return Metatags;
}();

/* harmony default export */ __webpack_exports__["a"] = (Metatags);

function _inspect(input, depth) {
		var maxDepth = 4;
		var maxKeys = 15;

		if (depth === undefined) {
				depth = 0;
		}

		depth += 1;

		if (input === null) {
				return 'null';
		} else if (input === undefined) {
				return 'void';
		} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
				return typeof input === "undefined" ? "undefined" : _typeof(input);
		} else if (Array.isArray(input)) {
				if (input.length > 0) {
						if (depth > maxDepth) return '[...]';

						var first = _inspect(input[0], depth);

						if (input.every(function (item) {
								return _inspect(item, depth) === first;
						})) {
								return first.trim() + '[]';
						} else {
								return '[' + input.slice(0, maxKeys).map(function (item) {
										return _inspect(item, depth);
								}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
						}
				} else {
						return 'Array';
				}
		} else {
				var keys = Object.keys(input);

				if (!keys.length) {
						if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
								return input.constructor.name;
						} else {
								return 'Object';
						}
				}

				if (depth > maxDepth) return '{...}';
				var indent = '  '.repeat(depth - 1);
				var entries = keys.slice(0, maxKeys).map(function (key) {
						return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
				}).join('\n  ' + indent);

				if (keys.length >= maxKeys) {
						entries += '\n  ' + indent + '...';
				}

				if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
						return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
				} else {
						return '{\n  ' + indent + entries + '\n' + indent + '}';
				}
		}
}

/***/ }),

/***/ "./src/modules/etc/useragent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var IConnect = __WEBPACK_IMPORTED_MODULE_0__core_interfaces_ITypes__["h" /* IConnect */];

var Useragent = function () {

	/*
 *
 */

	function Useragent() {
		_classCallCheck(this, Useragent);

		this.agent = navigator.userAgent;
		this.mouse = false;
		this.touch = false;
		this.keyboard = false;
		this.windows = false;
		this.chrome = false;
		this.safari = false;
		this.iemobile = false;
		this.nokia = false;
		this.ie = false;
		this.ios = false;
		this.blackberry = false;
		this.playbook = false;
		this.bb10 = false;
		this.mobile = false;


		//Query Browser
		this.chrome = this.Chrome();

		if (!(typeof this.chrome === 'boolean')) {
			throw new TypeError("Value of \"this.chrome\" violates contract.\n\nExpected:\nboolean\n\nGot:\n" + _inspect(this.chrome));
		}

		this.safari = this.Safari();

		if (!(typeof this.safari === 'boolean')) {
			throw new TypeError("Value of \"this.safari\" violates contract.\n\nExpected:\nboolean\n\nGot:\n" + _inspect(this.safari));
		}

		this.iemobile = this.IEMobile();

		if (!(typeof this.iemobile === 'boolean')) {
			throw new TypeError("Value of \"this.iemobile\" violates contract.\n\nExpected:\nboolean\n\nGot:\n" + _inspect(this.iemobile));
		}

		this.nokia = this.Nokia();

		if (!(typeof this.nokia === 'boolean')) {
			throw new TypeError("Value of \"this.nokia\" violates contract.\n\nExpected:\nboolean\n\nGot:\n" + _inspect(this.nokia));
		}

		this.ie = this.trident = this.IE();

		if (!(typeof this.ie === 'boolean')) {
			throw new TypeError("Value of \"this.ie\" violates contract.\n\nExpected:\nboolean\n\nGot:\n" + _inspect(this.ie));
		}

		this.blackberry = this.BlackBerry();

		if (!(typeof this.blackberry === 'boolean')) {
			throw new TypeError("Value of \"this.blackberry\" violates contract.\n\nExpected:\nboolean\n\nGot:\n" + _inspect(this.blackberry));
		}

		this.ios = this.iOS();

		if (!(typeof this.ios === 'boolean')) {
			throw new TypeError("Value of \"this.ios\" violates contract.\n\nExpected:\nboolean\n\nGot:\n" + _inspect(this.ios));
		}

		this.android = this.Android();

		this.touch = this.Mobile();

		if (!(typeof this.touch === 'boolean')) {
			throw new TypeError("Value of \"this.touch\" violates contract.\n\nExpected:\nboolean\n\nGot:\n" + _inspect(this.touch));
		}

		this.mouse = !this.Mobile() || this.BlackBerry();

		this.keyboard = this.Desktop() || this.BlackBerry();

		if (!(typeof this.keyboard === 'boolean')) {
			throw new TypeError("Value of \"this.keyboard\" violates contract.\n\nExpected:\nboolean\n\nGot:\n" + _inspect(this.keyboard));
		}

		this.Mobile();
		this.Desktop();

		return this;
		//this.app.ext.useragent = this;
	}

	/*
 *	Match user agent for IE
 */


	//Cached Navigator.userAgent


	_createClass(Useragent, [{
		key: "IE",
		value: function IE() {

			return this.agent.match(/Trident/i) ? true : false;
		}

		/*
  *	Match user agent for iOS
  */

	}, {
		key: "iOS",
		value: function iOS() {

			return this.agent.match(/iPhone|iPad|iPod/i) ? true : false;
		}

		/*
  *	Match user agent for Nokia
  */

	}, {
		key: "Nokia",
		value: function Nokia() {

			return this.agent.match(/Nokia/i) ? true : false;
		}

		/*
  *	Determine mobile or windows based on useragent
  */

	}, {
		key: "Mobile",
		value: function Mobile() {
			function _ref4(_id4) {
				if (!(typeof _id4 === 'boolean')) {
					throw new TypeError("Function return value violates contract.\n\nExpected:\nboolean\n\nGot:\n" + _inspect(_id4));
				}

				return _id4;
			}

			return _ref4(this.mobile = this.IEMobile() || this.BlackBerry() || this.iOS() || this.Android() || this.Nokia());

			if (!(typeof this.mobile === 'boolean')) {
				throw new TypeError("Value of \"this.mobile\" violates contract.\n\nExpected:\nboolean\n\nGot:\n" + _inspect(this.mobile));
			}
		}

		/*
  *	Match user agent for Chrome
  */

	}, {
		key: "Chrome",
		value: function Chrome() {

			return this.chrome = this.agent.match(/Chrome/i) ? true : false;
		}

		/*
  *	Match user agent for Safari
  */

	}, {
		key: "Safari",
		value: function Safari() {

			return (this.agent.match(/Safari/i) || this.agent.match(/AppleWebKit/i)) && !this.agent.match(/Chrome/i) ? true : false;
		}
	}, {
		key: "Desktop",
		value: function Desktop() {

			return this.windows = this.IEMobile() || this.IE() || !this.Mobile();
		}

		/*
  *	Match user agent for Android
  */

	}, {
		key: "Android",
		value: function Android() {
			return this.agent.match(/Android/i) ? true : false;
		}

		/*
  *	Match user agent for IEMobile
  */

	}, {
		key: "IEMobile",
		value: function IEMobile() {

			var trident = this.agent.match(/IEMobile/i);
			var windowsphone = this.agent.match(/Windows Phone/i);
			var touch = this.agent.match(/touch/i);

			return trident || windowsphone || touch ? true : false;
		}

		/*
  *	Match user agent for Blackberry
  */

	}, {
		key: "BlackBerry",
		value: function BlackBerry() {
			this.playbook = this.agent.match(/PlayBook/i) || false;
			this.bb10 = this.agent.match(/BB10/i) || false;
			return this.agent.match(/BlackBerry/i) || this.playbook || this.bb10 ? true : false;
		}
	}]);

	return Useragent;
}();

/* harmony default export */ __webpack_exports__["a"] = (Useragent);

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === "undefined" ? "undefined" : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			if (depth > maxDepth) return '[...]';

			var first = _inspect(input[0], depth);

			if (input.every(function (item) {
				return _inspect(item, depth) === first;
			})) {
				return first.trim() + '[]';
			} else {
				return '[' + input.slice(0, maxKeys).map(function (item) {
					return _inspect(item, depth);
				}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
			}
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ }),

/***/ "./src/modules/ext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_base_sjs__ = __webpack_require__("./src/modules/core/base/sjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__etc_cookies__ = __webpack_require__("./src/modules/etc/cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__network_connection__ = __webpack_require__("./src/modules/network/connection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__input_cursor__ = __webpack_require__("./src/modules/input/cursor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__etc_metatags__ = __webpack_require__("./src/modules/etc/metatags.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__etc_useragent__ = __webpack_require__("./src/modules/etc/useragent.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var weakmap = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["K" /* weakmap */],
    object = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["J" /* object */],
    array_string = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["H" /* array_string */],
    IApp = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["b" /* IApp */],
    IExt = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["l" /* IExt */],
    ICookies = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["i" /* ICookies */],
    IUseragent = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["D" /* IUseragent */],
    IMetatags = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["p" /* IMetatags */],
    ICursor = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["k" /* ICursor */],
    IConnect = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["h" /* IConnect */];












var Ext = function (_SJSClass2) {
	_inherits(Ext, _SJSClass2);

	/*	Constructor
 /*	*/

	/*	Cursor Handler
 /*	Logs last cursor and allows to easily change the cursor on the fly
 /*	*/


	/*	Cookie Storage
 /*	Polyfill provided by ScottHamper
 /*	https://github.com/ScottHamper/Cookies#api-reference
 /*	*/

	function Ext(app) {
		var _ret;

		_classCallCheck(this, Ext);

		if (!IApp(app)) {
			throw new TypeError('Value of argument "app" violates contract.\n\nExpected:\nIApp\n\nGot:\n' + _inspect(app));
		}

		//Checks for If node?

		//	window.m1 = this.metatags;
		//	this.metatags = new this.metatags;
		//this.app = app;
		var _this = _possibleConstructorReturn(this, (Ext.__proto__ || Object.getPrototypeOf(Ext)).call(this, app));

		_this.useragent = new __WEBPACK_IMPORTED_MODULE_6__etc_useragent__["a" /* default */]();
		_this.cookies = {};//new __WEBPACK_IMPORTED_MODULE_2__etc_cookies__["a" /* default */]();
		_this.metatag = new __WEBPACK_IMPORTED_MODULE_5__etc_metatags__["a" /* default */]();
		_this.cursor = new __WEBPACK_IMPORTED_MODULE_4__input_cursor__["a" /* default */]();
		_this.connect = new __WEBPACK_IMPORTED_MODULE_3__network_connection__["a" /* default */]();
		return _ret = _this, _possibleConstructorReturn(_this, _ret);
	}

	/*	Connection Controller
 /*	Assists in making ajax calls and allows you to test your connection.
 /*	hostReachable by jpsilvashy - https://gist.github.com/jpsilvashy/5725579
 /*	*/

	/*	MetaTag Handler
 /*	Assists in dynamically applying metatags.
 /*	Automatically applies Microsoft, Apple and common metatags.
 /*	*/

	/*	UserAgent Information
 /*	Assists in detecting the platform that you are running on.
 /*	*/

	return Ext;
}(__WEBPACK_IMPORTED_MODULE_0__core_base_sjs__["a" /* _SJSClass */]);

/* harmony default export */ __webpack_exports__["a"] = (Ext);

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === 'undefined' ? 'undefined' : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			if (depth > maxDepth) return '[...]';

			var first = _inspect(input[0], depth);

			if (input.every(function (item) {
				return _inspect(item, depth) === first;
			})) {
				return first.trim() + '[]';
			} else {
				return '[' + input.slice(0, maxKeys).map(function (item) {
					return _inspect(item, depth);
				}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
			}
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ }),

/***/ "./src/modules/input/cursor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var ICursor = __WEBPACK_IMPORTED_MODULE_0__core_interfaces_ITypes__["k" /* ICursor */];

var Cursor = function () {

	//Properties
	function Cursor(url) {
		_classCallCheck(this, Cursor);

		this.current = "auto";
		this.last = "auto";
		this.changed = false;
		this.count = 0;
		this.lock = 0;
		this.delay = 4;

		if (!(typeof url === 'string' || url == null)) {
			throw new TypeError("Value of argument \"url\" violates contract.\n\nExpected:\nstring | void\n\nGot:\n" + _inspect(url));
		}

		return this;
		/*
  		this.set(this.wait);
  		this.app.ext.cursor = this;*/
	}

	/*
 *
 */

	_createClass(Cursor, [{
		key: "set",
		value: function set() {}

		/*
  	set(cursor,lock) {

  			if	((this.last==cursor)||(this.lock))
  				return;

  			this.last = this.current;

  			this.current = cursor;

  			/*
  			if (this.app.options.target.buffer)
  				this.app.canvas.buffer.style.cursor=this.current;
  				this.app.canvas.canvas.style.cursor=this.current;

  			document.body.style.cursor=this.current;
  			*/
		/*
  this.changed = true;
  this.count++;
  }
  */

	}]);

	return Cursor;
}();

Cursor.Types = {

	//Cached cursor types
	auto: "auto",
	inherit: "inherit",
	crosshair: "crosshair",
	def: "default",
	help: "help",
	move: "move",
	pointer: "pointer",
	progress: "progress",
	text: "text",
	wait: "wait",
	eresize: "e-resize",
	neresize: "ne-resize",
	nwresize: "nw-resize",
	nresize: "n-resize",
	seresize: "se-resize",
	swresize: "sw-resize",
	sresize: "s-resize",
	wresize: "w-resize" };
/* harmony default export */ __webpack_exports__["a"] = (Cursor);


window.Cursor = Cursor;

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === "undefined" ? "undefined" : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			if (depth > maxDepth) return '[...]';

			var first = _inspect(input[0], depth);

			if (input.every(function (item) {
				return _inspect(item, depth) === first;
			})) {
				return first.trim() + '[]';
			} else {
				return '[' + input.slice(0, maxKeys).map(function (item) {
					return _inspect(item, depth);
				}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
			}
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ }),

/***/ "./src/modules/input/gamepad.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

window.position = { x: 0, y: 0 };
window.vel = { x: 0, y: 0 };
window.addEventListener("gamepadconnected", function (e) {
	console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.", e.gamepad.index, e.gamepad.id, e.gamepad.buttons.length, e.gamepad.axes.length);
});
function buttonPressed(b) {
	if ((typeof b === "undefined" ? "undefined" : _typeof(b)) == "object") {
		return b.pressed;
	}
	return b == 1.0;
}

/* harmony default export */ __webpack_exports__["a"] = (function () {

	var gamepads = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads : [];
	if (!gamepads) {
		return;
	}

	var gp = gamepads[0];

	var trigger_left = false;
	var left = false;
	var right = false;
	var up = false;
	var down = false;
	var a = false;
	var y = false;
	var x = false;
	var b = false;
	if (gp) for (var i = gp.buttons.length; i > 0; i--) {

		if (buttonPressed(gp.buttons[i])) {

			//console.log(i,gp.buttons[i]);
			/*
   if (new Date().getTime()%2 == 0){
   xhttp.onreadystatechange = function() {
     if (xhttp.readyState == 4 && xhttp.status == 200) {
   	//window.position.x = Math.round(xhttp.responseText) + 25;
   	eval(xhttp.responseText);
     }
   };
   var request = "file.php?x="+Math.round(this.position.x);
   request += "&y=" + Math.round(this.position.y);
   request += "&velx=" + Math.round(this.vel.x);
   request += "&vely=" + Math.round(this.vel.y);
   xhttp.open("GET", request, true);
   xhttp.send();
   	}*/

			switch (i) {

				case 1:
					a = true;
					break;
				case 2:
					y = true;
					break;
				case 3:
					x = true;
					break;
				case 6:
					b = true;
					break;

				case 4:
					trigger_left = true;
					break;

				case 14:
					left = true;
					break;
				case 15:
					right = true;
					break;
				case 12:
					up = true;
					break;
				case 13:
					down = true;
					break;

			}
		}
	}
	return {
		gp: gp,
		trigger_left: trigger_left,
		left: left,
		right: right,
		up: up,
		down: down,
		a: a,
		y: y,
		x: x,
		b: b
	};

	/*
 if (buttonPressed(gp.buttons[0])) {
   console.log(gp.buttons[0]);
 } else if (buttonPressed(gp.buttons[2])) {
   console.log(gp.buttons[2]);
 }
 if (buttonPressed(gp.buttons[1])) {
   console.log(gp.buttons[1]);
 } else if (buttonPressed(gp.buttons[3])) {
   console.log(gp.buttons[3]);
   console.log(gp);
 }

 if (buttonPressed(gp.axes[0])) {
   console.log(gp.axes[0]);
 } else if (buttonPressed(gp.axes[2])) {
   console.log(gp.axes[2]);
 }
 if (buttonPressed(gp.axes[1])) {
   console.log(gp.axes[1]);
 } else if (buttonPressed(gp.axes[3])) {
   console.log(gp.axes[3]);

 }

 */
});

/***/ }),

/***/ "./src/modules/input/input.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gamepad__ = __webpack_require__("./src/modules/input/gamepad.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inputcontroller_js__ = __webpack_require__("./src/modules/input/inputcontroller.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
* Main game controller. Handles instanciating instances and tracking information.
* @access private
* @module
*
*/

var Input = function (_inputcontroller) {
        _inherits(Input, _inputcontroller);

        function Input(app, pointerPoint) {
                _classCallCheck(this, Input);

                var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, app));

                _this.delay = 0;

                _this.touch = false;

                _this.touch_dist = { x: 0, y: 0 };

                _this.key = false;

                _this.keyPower = 0;

                _this.keyup = false;

                _this.keydown = false;

                _this.codes = [];

                _this.codeList = [];

                _this.control = false;

                _this.confine = false;

                _this.preventNext = true;

                _this.init_options();

                _this.keyController.init(_this.app);

                _this.down = new _this.constructor._Listener("pointerdown", "MSPointerDown", "mousedown", "touchstart", _this.app.window, _this.pointerdown);

                _this.up = new _this.constructor._Listener("pointerup", "MSPointerUp", "mouseup", "touchmove", _this.app.window, _this.pointerup);

                _this.move = new _this.constructor._Listener("pointermove", "MSPointerMove", "mousemove", "touchend", _this.app.window, _this.pointermove);

                _this.scrollController = _this.app.Construct(_this.scrollController.prototype, _this.scrollController.constructor).init();

                _this.pointerPoint = pointerPoint; //this.support(pointerPoint);

                _this.setup_universalMultitouch();

                _this.setup_documentListeners();

                //this.setup_msUniversalAppTouch();

                return _this;
        }

        /* Too refractor this below code into the input ? /**/

        /** Artificial click CASE 1	_ WIP
        * @method
           * @param {Event} [event] - Passing of the event.
           * @param {Element} [anchorObj] - Element to click. */

        _createClass(Input, [{
                key: 'click',
                value: function click(event, anchorObj) {
                        if (!(event instanceof object)) {
                                throw new TypeError('Value of argument "event" violates contract.\n\nExpected:\nobject\n\nGot:\n' + _inspect(event));
                        }

                        if (!(anchorObj instanceof object)) {
                                throw new TypeError('Value of argument "anchorObj" violates contract.\n\nExpected:\nobject\n\nGot:\n' + _inspect(anchorObj));
                        }
                }

                /** Artificial Click CASE 2	_ WIP
                * @method
                   * @param {Event} [event] - Passing of the event.
                   * @param {Element} [anchorObj] - Element to click.	*/

        }, {
                key: 'Click',
                value: function Click(event, anchorObj) {
                        if (!(event instanceof object || event == null)) {
                                throw new TypeError('Value of argument "event" violates contract.\n\nExpected:\nobject | null\n\nGot:\n' + _inspect(event));
                        }

                        if (!(anchorObj instanceof object || anchorObj == null)) {
                                throw new TypeError('Value of argument "anchorObj" violates contract.\n\nExpected:\nobject | null\n\nGot:\n' + _inspect(anchorObj));
                        }

                        console.log(this.document);
                        if (typeof anchorObj != 'undefined') if (anchorObj.click) {

                                anchorObj.click();
                        } else if (document.createEvent) {

                                console.log(this.document);
                                if (event.target !== anchorObj) {
                                        var evt = document.createEvent("MouseEvents");

                                        evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

                                        anchorObj.dispatchEvent(evt);
                                }
                        }
                }
        }, {
                key: 'preventDefault',
                value: function preventDefault(e) {
                        e.preventDefault();return e.target.app;
                }
        }, {
                key: 'preventNextInput',
                value: function preventNextInput() {
                        return this.preventNext = true;
                }
        }, {
                key: 'confineMouse',
                value: function confineMouse() {

                        return this.confine ? (this.y < this.app.client.visuals.fixY(0) ? (this.app.window.y = 0, this.app.window.inside -= 1) : this.y > this.app.client.visuals.fixY(this.app.client.setHeight) ? (this.app.window.y = this.app.client.visuals.fixW(this.app.client.setHeight), this.app.window.inside += 1) : this.app.window.y = -this.app.client.visuals.fixY(0) + this.y, this.x < this.app.client.visuals.fixX(0) ? (this.app.window.x = 0, this.app.window.inside -= 1) : this.x > this.app.client.visuals.fixX(this.app.client.setWidth) ? (this.app.window.x = this.app.client.visuals.fixW(this.app.client.setWidth), this.app.window.inside += 1) : this.app.window.x = -this.app.client.visuals.fixX(0) + this.x) : (this.y < this.app.client.visuals.fixY(0) ? this.app.window.y = -this.app.client.visuals.fixY(0) + this.y : this.y > this.app.client.visuals.fixY(this.app.client.setHeight) ? this.app.window.y = -this.app.client.visuals.fixY(0) + this.y : this.app.window.y = -this.app.client.visuals.fixY(0) + this.y, this.x < this.app.client.visuals.fixX(0) ? this.app.window.x = -this.app.client.visuals.fixX(0) + this.x : this.x > this.app.client.visuals.fixX(this.app.client.setWidth) ? this.app.window.x = -this.app.client.visuals.fixX(0) + this.x : this.app.window.x = -this.app.client.visuals.fixX(0) + this.x);
                }
        }, {
                key: 'init_options',
                value: function init_options() {

                        //Temporary Disabled due to ClosureCompilerPlugin
                        //return;

                        /*	Overrides the selection start event for selecting events	*/

                        if (!this.app.options.get("override").SelectStart) {
                                this.app.Listener(this.app.canvas.canvas, 'selectstart', this.preventDefault);
                        }

                        /*	Overrides the 'holdtouch, MSHoldVisual' event */

                        if (!this.app.options.get("override").MSHoldVisual) {
                                this.app.Listener(this.app.canvas.canvas, 'MSHoldVisual', this.preventDefault);
                        }

                        /* Overrides the ContextMenu event */

                        if (this.app.options.get("override").ContextMenu) {
                                this.app.document.oncontextmenu = this.preventDefault;
                                this.app.window.self.oncontextmenu = this.preventDefault;
                        }

                        /*	Overrides dragstart event		*/

                        if (this.app.options.get("override").Drag) {
                                this.app.document.ondragstart = this.preventDefault;
                                this.app.window.self.ondragstart = this.preventDefault;
                        }

                        /*	CSS based Overrides
                                  - mstouch
                                - seamless ( toggles overflow )
                                - tight ( zeros padding and margin )
                          */

                        if (this.app.options.get("flags").mstouch) {
                                this.app.document.body.setAttribute("style", "-ms-touch-action: none; ms-content-zooming: none; touch-action: none; -ms-overflow-style: none;");
                        }

                        if (this.app.options.get("flags").seamless) {
                                this.app.document.body.style.overflow = "hidden";
                        }

                        if (this.app.options.get("flags").tight) {
                                this.app.document.body.style.padding = "0px", this.app.document.body.style.margin = "0px auto";
                        }
                }
        }, {
                key: 'update',
                value: function update() {

                        this.confineMouse();
                        this.gamepads = Object(__WEBPACK_IMPORTED_MODULE_0__gamepad__["a" /* default */])();

                        //Reset variables
                        this.press = false;
                        this.touch = 0;
                        this.app.window.inside = 0;
                        this.wheelDelta = 0;

                        this.pressed ? this.duration++ : this.duration = 0;

                        this.released ? (this.released = false, this.dist.x = 0, this.dist.y = 0) : null;

                        //this.setup_msUniversalAppTouch();

                        if (this.delay > 0) {

                                this.delay -= Math.floor(this.delay - 1 * this.app.getDelta());
                        }

                        //reset code released, unused?
                        this.codereleased = 0;

                        return true;
                }
        }, {
                key: 'setup_documentListeners',
                value: function setup_documentListeners() {

                        var doc = document;
                        var win = window;

                        doc.addEventListener("mousedown", function () {
                                window.focus();
                        }, true);
                        doc.addEventListener("touchstart", function () {
                                window.focus();
                        }, true);

                        // Inform all plugins and behaviors of blur events so they can reset any keyboard key flags
                        win.addEventListener("blur", function () {
                                self.onWindowBlur();
                        });

                        win.onWindowBlur = function (evt) {

                                console.log('blur');
                                SJS.controller.list().input.pointerup(evt);
                        };

                        win.setSuspended = function (state) {

                                if (state) console.log('suspended');else console.log('resume');
                        };

                        doc.addEventListener("visibilitychange", this.onVisibilityChanged, false);
                        //doc.addEventListener("mozvisibilitychange", this.onVisibilityChanged, false);
                        //doc.addEventListener("webkitvisibilitychange", this.onVisibilityChanged, false);
                        //doc.addEventListener("msvisibilitychange", this.onVisibilityChanged, false);
                }
        }, {
                key: 'onVisibilityChanged',
                value: function onVisibilityChanged() {
                        console.log('eh');
                        if (document.hidden || document.mozHidden || document.webkitHidden || document.msHidden) setSuspended(true);else setSuspended(false);
                }
        }, {
                key: 'setup_universalMultitouch',
                value: function setup_universalMultitouch() {

                        //touch-action: none;

                        if (window.PointerEvent) {
                                // Pointer events are supported.

                                // Test for touch capable hardware
                                if (navigator.maxTouchPoints) {}

                                // Test for multi-touch capable hardware
                                if (navigator.maxTouchPoints && navigator.maxTouchPoints > 1) {}

                                // Check the maximum number of touch points the hardware supports
                                //var touchPoints = navigator.maxTouchPoints;
                        }

                        this.multi = {

                                list: []

                        };

                        this.touched = {

                                count: 0,
                                uplist: [],
                                downlist: [],
                                last: { x: 0, y: 0 },
                                CheckTouchUp: function CheckTouchUp() {

                                        return this.uplist[this.uplist.length - 1];
                                },
                                CheckTouchDown: function CheckTouchDown() {}

                        };
                }
        }, {
                key: 'setup_msUniversalAppTouch',
                value: function setup_msUniversalAppTouch() {

                        return;

                        var i = 0;

                        var data = {
                                app: this.app,
                                x: 0,
                                y: 0
                        };

                        if (this.pressed === false && this.lastpressed === true) {
                                this.released = true, this.dist.x = 0, this.dist.y = 0;

                                this.controls.up(data);
                        }

                        this.lastpressed = this.pressed;
                        /*
                                if (!this.wininitalize)
                                try {

                                    //var w = Windows;
                                    //var p = Windows.UI.Input.PointerPoint.getCurrentPoint(1);


                                    this.pressed = (Windows.UI.Input.PointerPoint.getCurrentPoint(1).isInContact);
                                    this.pointerDevice = (Windows.UI.Input.PointerPoint.getCurrentPoint(1).pointerDevice);
                                    this.wininitalize = true;


                                    data = {
                                        app:this.app,
                                        x:this.winposition.x,
                                        y:this.winposition.y
                                    };

                                }catch(e){

                                    data = {
                                        app:this.app,
                                        x:0,
                                        y:0
                                    };

                                }
                                else{
                                    this.winpoint = Windows.UI.Input.PointerPoint.getCurrentPoint(1);
                                    this.winposition = this.pointerPoint.getCurrentPoint(1).rawPosition;
                                    this.pressed = (this.winpoint.isInContact);
                                    this.pointerDevice = (this.winpoint.pointerDevice);

                                    var pt = this.pointerPoint.getCurrentPoint(1);
                                    var ptTargetProperties = pt.properties;


                                            if (this.released)
                                                                {

                                                                            var details = "Pointer Id: " + pt.pointerId + " device: " + pt.pointerDevice.pointerDeviceType;

                                                                            switch (pt.pointerDevice.pointerDeviceType) {
                                                                                case "mouse":
                                                                                case 2:
                                                                                    details += "\nPointer type: mouse";
                                                                                    details += "\nLeft button: " + ptTargetProperties.isLeftButtonPressed;
                                                                                    details += "\nRight button: " + ptTargetProperties.isRightButtonPressed;
                                                                                    details += "\nWheel button: " + ptTargetProperties.isMiddleButtonPressed;
                                                                                    details += "\nX1 button: " + ptTargetProperties.isXButton1Pressed;
                                                                                    details += "\nX2 button: " + ptTargetProperties.isXButton2Pressed;
                                                                                    break;
                                                                                case "pen":
                                                                                    details += "\nPointer type: pen";
                                                                                    if (pt.isInContact) {
                                                                                        details += "\nPressure: " + ptTargetProperties.pressure;
                                                                                        details += "\nrotation: " + ptTargetProperties.rotation;
                                                                                        details += "\nTilt X: " + ptTargetProperties.tiltX;
                                                                                        details += "\nTilt Y: " + ptTargetProperties.tiltY;
                                                                                        details += "\nBarrel button pressed: " + ptTargetProperties.isBarrelButtonPressed;
                                                                                    }
                                                                                    break;
                                                                                case "touch":
                                                                                    details += "\nPointer type: touch";
                                                                                    details += "\nPressure: " + ptTargetProperties.pressure;
                                                                                    details += "\nrotation: " + ptTargetProperties.rotation;
                                                                                    details += "\nTilt X: " + ptTargetProperties.tiltX;
                                                                                    details += "\nTilt Y: " + ptTargetProperties.tiltY;
                                                                                    break;
                                                                                default:
                                                                                    details += "\nPointer type: " + "n/a";
                                                                                    break;
                                                                            }
                                                                    details+="\n x:"+this.winposition.x + " y: "+this.winposition.y;
                                                                           //details += "\nPointer location (target): " + pt.offsetX + ", " + pt.offsetY;
                                                                           //details += "\nPointer location (screen): " + pt.screenX + ", " + pt.screenY;
                                                                    //console.log(pt.pointerDevice);
                                                                    //console.log(details);
                                                                }
                                                                i=this.winpoint;

                                    data.x = this.winposition.x;
                                    data.y = this.winposition.y;


                                if ((this.pressed===true)&&(this.lastpressed===true))
                                    this.controls.move(data);

                                }*/

                        if (this.pressed === true && this.lastpressed === false) this.controls.down(data);

                        // console.log(i)
                        //  if (Windows)
                        //  if (Windows.UI.Input.PointerPoint.getCurrentPoint(1).isInContact)
                        //  this.pressed = (Windows.UI.Input.PointerPoint.getCurrentPoint(1).isInContact);

                }
        }]);

        return Input;
}(__WEBPACK_IMPORTED_MODULE_1__inputcontroller_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Input);

function _inspect(input, depth) {
        var maxDepth = 4;
        var maxKeys = 15;

        if (depth === undefined) {
                depth = 0;
        }

        depth += 1;

        if (input === null) {
                return 'null';
        } else if (input === undefined) {
                return 'void';
        } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
                return typeof input === 'undefined' ? 'undefined' : _typeof(input);
        } else if (Array.isArray(input)) {
                if (input.length > 0) {
                        if (depth > maxDepth) return '[...]';

                        var first = _inspect(input[0], depth);

                        if (input.every(function (item) {
                                return _inspect(item, depth) === first;
                        })) {
                                return first.trim() + '[]';
                        } else {
                                return '[' + input.slice(0, maxKeys).map(function (item) {
                                        return _inspect(item, depth);
                                }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
                        }
                } else {
                        return 'Array';
                }
        } else {
                var keys = Object.keys(input);

                if (!keys.length) {
                        if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
                                return input.constructor.name;
                        } else {
                                return 'Object';
                        }
                }

                if (depth > maxDepth) return '{...}';
                var indent = '  '.repeat(depth - 1);
                var entries = keys.slice(0, maxKeys).map(function (key) {
                        return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
                }).join('\n  ' + indent);

                if (keys.length >= maxKeys) {
                        entries += '\n  ' + indent + '...';
                }

                if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
                        return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
                } else {
                        return '{\n  ' + indent + entries + '\n' + indent + '}';
                }
        }
}

/***/ }),

/***/ "./src/modules/input/inputcontroller.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_math_vector__ = __webpack_require__("./src/modules/core/math/vector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_base_sjs__ = __webpack_require__("./src/modules/core/base/sjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inputlistener_js__ = __webpack_require__("./src/modules/input/inputlistener.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inputkeycontroller_js__ = __webpack_require__("./src/modules/input/inputkeycontroller.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inputscrollcontroller_js__ = __webpack_require__("./src/modules/input/inputscrollcontroller.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











/**
* Stores input data
* @access private
* @module
*
*/

var inputcontroller = function (_SJSClass) {
        _inherits(inputcontroller, _SJSClass);

        function inputcontroller() {
                _classCallCheck(this, inputcontroller);

                return _possibleConstructorReturn(this, (inputcontroller.__proto__ || Object.getPrototypeOf(inputcontroller)).apply(this, arguments));
        }

        _createClass(inputcontroller, [{
                key: 'pointerup',
                value: function pointerup(evt) {

                        if (typeof evt === 'undefined') return;
                        if (typeof evt.target.app === 'undefined') return;

                        var target = evt.target.app.input.constructor;

                        target._pointerup(evt);
                }
        }, {
                key: 'pointermove',
                value: function pointermove(evt) {

                        if (typeof evt === 'undefined') return;
                        if (typeof evt.target.app === 'undefined') return;

                        var target = evt.target.app.input.constructor;

                        target._pointermove(evt);
                }
        }, {
                key: 'pointerdown',
                value: function pointerdown(evt) {

                        if (typeof evt === 'undefined') return;
                        if (typeof evt.target.app === 'undefined') return;

                        var target = evt.target.app.input.constructor;

                        target._pointerdown(evt);
                }
        }, {
                key: 'x',
                get: function get() {

                        return this.constructor._x;
                },
                set: function set(value) {

                        this.constructor._x = value;
                }
        }, {
                key: 'y',
                get: function get() {

                        return this.constructor._y;
                },
                set: function set(value) {

                        this.constructor._y = value;
                }
        }, {
                key: 'last',
                get: function get() {

                        return this.constructor._last;
                },
                set: function set(value) {

                        this.constructor._last = value;
                }
        }, {
                key: 'pos',
                get: function get() {

                        return this.constructor._pos;
                },
                set: function set(value) {

                        this.constructor._pos = value;
                }
        }, {
                key: 'dist',
                get: function get() {

                        return this.constructor._dist;
                },
                set: function set(value) {

                        this.constructor._dist = value;
                }
        }, {
                key: 'end',
                get: function get() {

                        return this.constructor._end;
                },
                set: function set(value) {

                        this.constructor._end = value;
                }
        }, {
                key: 'start',
                get: function get() {

                        return this.constructor._start;
                },
                set: function set(value) {

                        this.constructor._start = value;
                }
        }, {
                key: 'duration',
                get: function get() {

                        return this.constructor._duration;
                },
                set: function set(value) {

                        this.constructor._duration = value;
                }
        }, {
                key: 'angle',
                get: function get() {

                        return 57.2957795 * Math.atan2(this.end.y - this.start.y, this.end.x - this.start.x);
                }
        }, {
                key: 'angleDelta',
                get: function get() {

                        var delta = (this.dist.x * this.dist.x + this.dist.y * this.dist.y) / 2;
                        return delta;
                }
        }, {
                key: 'position',
                get: function get() {

                        return new __WEBPACK_IMPORTED_MODULE_0__core_math_vector__["a" /* default */](this.x, this.y);
                },
                set: function set(value) {

                        this.x = value.x;
                        this.y = value.y;
                }
        }, {
                key: 'released',
                get: function get() {

                        return this.constructor._released;
                },
                set: function set(value) {

                        return this.constructor._released = value;
                }
        }, {
                key: 'pressed',
                get: function get() {

                        return this.constructor._pressed;
                },
                set: function set(value) {

                        return this.constructor._pressed = value;
                }
        }, {
                key: 'keyController',
                get: function get() {

                        return this.constructor._keyController;
                },
                set: function set(value) {

                        return this.constructor._keyController = value;
                }
        }, {
                key: 'scrollController',
                get: function get() {

                        return this.constructor._scrollController;
                },
                set: function set(value) {

                        return this.constructor._scrollController = value;
                }
        }, {
                key: 'horizontal',
                get: function get() {

                        var wasd = this.app.input.keyController.keyboardCheck("a") - this.app.input.keyController.keyboardCheck("d");
                        var arrows = this.app.input.keyController.keyboardCheck("leftarrow") - this.app.input.keyController.keyboardCheck("rightarrow");
                        var mouse = -this.pressed * this.app.input.dist.x;
                        var touch = -this.pressed * this.app.input.dist.x; //was touched

                        var keyboard = this.app.client.Math.Clamp(wasd || arrows, -1, 1);
                        var touched = this.app.client.Math.Clamp(mouse || touch, -1, 1);

                        return { keyboard: keyboard, touch: touched };
                }
        }, {
                key: 'vertical',
                get: function get() {

                        var wasd = this.app.input.keyController.keyboardCheck("s") - this.app.input.keyController.keyboardCheck("w");
                        var arrows = this.app.input.keyController.keyboardCheck("downarrow") - this.app.input.keyController.keyboardCheck("uparrow");
                        var mouse = this.pressed * this.app.input.dist.y;
                        var touch = this.pressed * this.app.input.dist.y; //was touched

                        var keyboard = this.app.client.Math.Clamp(wasd || arrows, -1, 1);
                        var touched = this.app.client.Math.Clamp(mouse || touch, -1, 1);

                        return { keyboard: keyboard, touch: touched };
                }
        }], [{
                key: '_pointerup',
                value: function _pointerup(evt) {

                        var input = evt.target.app.input;

                        var x = evt.x || evt.clientX || evt.pageX;

                        var y = evt.y || evt.clientY || evt.pageY;

                        input.last = input.end = new __WEBPACK_IMPORTED_MODULE_0__core_math_vector__["a" /* default */](x, y);

                        input.pressed = false;

                        input.released = true;

                        return true;
                }
        }, {
                key: '_pointermove',
                value: function _pointermove(evt) {

                        var input = evt.target.app.input;
                        var x = Number(evt.x || evt.clientX || evt.pageX);
                        var y = Number(evt.y || evt.clientY || evt.pageY);

                        //var mouse_last = this.mouse_last;

                        input.last = input.position = new __WEBPACK_IMPORTED_MODULE_0__core_math_vector__["a" /* default */](x, y);

                        if (input.pressed) {

                                var dx = (input.x - input.start.x) * evt.target.app.scale;
                                var dy = (input.y - input.start.y) * evt.target.app.scale;
                                input.dist = new __WEBPACK_IMPORTED_MODULE_0__core_math_vector__["a" /* default */](dx.toFixedNumber(2), dy.toFixedNumber(2));
                        }

                        if (input.dist.x > 0) if (this.mouse_last * 0.99 > input.dist.x) input.start.x = input.x, input.dist.x = 0;

                        if (input.dist.x < 0) if (this.mouse_last * 0.99 < input.dist.x) input.start.x = input.x, input.dist.x = 0;

                        this.mouse_last = input.dist.x;
                }
        }, {
                key: '_pointerdown',
                value: function _pointerdown(evt) {

                        var input = evt.target.app.input;

                        var x = Number(evt.x || evt.clientX || evt.pageX);

                        var y = Number(evt.y || evt.clientY || evt.pageY);
                        input.start = new __WEBPACK_IMPORTED_MODULE_0__core_math_vector__["a" /* default */](x, y);

                        input.pressed = true;

                        input.touch = true;

                        input.touched.count++;

                        input.touched.downlist.push(input.position);

                        input.dist = new __WEBPACK_IMPORTED_MODULE_0__core_math_vector__["a" /* default */](0, 0);
                }
        }]);

        return inputcontroller;
}(__WEBPACK_IMPORTED_MODULE_1__core_base_sjs__["a" /* _SJSClass */]);

inputcontroller._x = 0;
inputcontroller._y = 0;
inputcontroller._last = new __WEBPACK_IMPORTED_MODULE_0__core_math_vector__["a" /* default */](0, 0);
inputcontroller._pos = new __WEBPACK_IMPORTED_MODULE_0__core_math_vector__["a" /* default */](0, 0);
inputcontroller._dist = new __WEBPACK_IMPORTED_MODULE_0__core_math_vector__["a" /* default */](0, 0);
inputcontroller._end = new __WEBPACK_IMPORTED_MODULE_0__core_math_vector__["a" /* default */](0, 0);
inputcontroller._start = new __WEBPACK_IMPORTED_MODULE_0__core_math_vector__["a" /* default */](0, 0);
inputcontroller._duration = 0;
inputcontroller._pressed = false;
inputcontroller._released = false;
inputcontroller._Listener = __WEBPACK_IMPORTED_MODULE_2__inputlistener_js__["a" /* default */];
inputcontroller._keyController = new __WEBPACK_IMPORTED_MODULE_3__inputkeycontroller_js__["a" /* default */]();
inputcontroller._scrollController = __WEBPACK_IMPORTED_MODULE_4__inputscrollcontroller_js__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (inputcontroller);

/***/ }),

/***/ "./src/modules/input/inputkeycontroller.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Stores key input data
* @access private
* @module
*
*/

var inputkeycontroller = function () {
    function inputkeycontroller() {
        _classCallCheck(this, inputkeycontroller);
    }

    _createClass(inputkeycontroller, [{
        key: "key_down",
        value: function key_down(evt) {

            evt.input.key = true;
            evt.input.kpressed = true;
        }
    }, {
        key: "key_up",
        value: function key_up(evt) {
            evt.input.key = false;
            evt.input.kpressed = false;
            evt.input.kreleased = true;
            evt.input.kpressed = false;
        }
    }, {
        key: "keyboardCheck",
        value: function keyboardCheck(code) {

            var e = this.codeList.length - 1;

            for (var i = e; i >= 0; --i) {
                if (this.codeList[i] == code) return true;
            }return false;
        }
    }, {
        key: "keyboardPop",
        value: function keyboardPop(code) {

            var e = this.codeList.length - 1;
            for (var i = e; i >= 0; --i) {
                if (this.codeList[i] == code) this.codeList.splice(i, 1);
            }
        }
    }, {
        key: "init",
        value: function init(app) {

            app.Listener(app.window.self, 'keydown', function (evt) {

                if (app.input.preventNext === true) evt.preventDefault();

                app.input.preventNext = false;

                app.input.keyController.codedown = app.input.keyController.keyCodes[evt.keyCode];
                app.input.keyController.codeList.push(app.input.keyController.codedown);

                if (evt.ctrlKey) app.input.control = true;

                //app.input.pressed = true;
                app.input.released = false;

                app.input.keyController.key_down(app);
            });

            app.Listener(app.window.self, 'keyup', function (evt) {

                if (app.input.preventNext) evt.preventDefault();

                app.input.preventNext = false;
                app.input.codeup = app.input.keyController.keyCodes[evt.keyCode];

                app.input.keyController.keyboardPop(app.input.codeup);

                app.input.control = false;
                app.input.pressed = false;
                app.input.released = true;
                app.input.true = true;

                app.input.keyController.key_up(app);
            });

            return this.codes;
        }
    }, {
        key: "codeList",
        get: function get() {

            return this.constructor._codeList;
        }
    }, {
        key: "keyCodes",
        get: function get() {

            return this.constructor._keyCodes;
        }
    }], [{
        key: "_keyCodes",
        get: function get() {

            this.codes = [], this.codes[0] = "", this.codes[1] = "", this.codes[2] = "", this.codes[3] = "", this.codes[4] = "", this.codes[5] = "", this.codes[6] = "", this.codes[7] = "", this.codes[8] = "backspace", this.codes[9] = "tab", this.codes[13] = "enter", this.codes[16] = "shift", this.codes[17] = "ctrl", this.codes[18] = "alt", this.codes[19] = "pause/break", this.codes[20] = "capslock", this.codes[27] = "escape", this.codes[32] = "space", this.codes[33] = "pageup", this.codes[34] = "pagedown", this.codes[35] = "end", this.codes[36] = "home", this.codes[37] = "leftarrow", this.codes[38] = "uparrow", this.codes[39] = "rightarrow", this.codes[40] = "downarrow", this.codes[45] = "insert", this.codes[46] = "delete", this.codes[48] = "0", this.codes[49] = "1", this.codes[50] = "2", this.codes[51] = "3", this.codes[52] = "4", this.codes[53] = "5", this.codes[54] = "6", this.codes[55] = "7", this.codes[56] = "8", this.codes[57] = "9", this.codes[65] = "a", this.codes[66] = "b", this.codes[67] = "c", this.codes[68] = "d", this.codes[69] = "e", this.codes[70] = "f", this.codes[71] = "g", this.codes[72] = "h", this.codes[73] = "i", this.codes[74] = "j", this.codes[75] = "k", this.codes[76] = "l", this.codes[77] = "m", this.codes[78] = "n", this.codes[79] = "o", this.codes[80] = "p", this.codes[81] = "q", this.codes[82] = "r", this.codes[83] = "s", this.codes[84] = "t", this.codes[85] = "u", this.codes[86] = "v", this.codes[87] = "w", this.codes[88] = "x", this.codes[89] = "y", this.codes[90] = "z", this.codes[91] = "leftwindowkey", this.codes[92] = "rightwindowkey", this.codes[93] = "selectkey", this.codes[96] = "numpad0", this.codes[97] = "numpad1", this.codes[98] = "numpad2", this.codes[99] = "numpad3", this.codes[100] = "numpad4", this.codes[101] = "numpad5", this.codes[102] = "numpad6", this.codes[103] = "numpad7", this.codes[104] = "numpad8", this.codes[105] = "numpad9", this.codes[106] = "multiply", this.codes[107] = "add", this.codes[109] = "subtract", this.codes[110] = "decimalpoint", this.codes[111] = "divide", this.codes[112] = "f1", this.codes[113] = "f2", this.codes[114] = "f3", this.codes[115] = "f4", this.codes[116] = "f5", this.codes[117] = "f6", this.codes[118] = "f7", this.codes[119] = "f8", this.codes[120] = "f9", this.codes[121] = "f10", this.codes[122] = "f11", this.codes[123] = "f12", this.codes[144] = "numlock", this.codes[145] = "scrolllock", this.codes[175] = "Up (Wii?)", this.codes[176] = "Down (Wii?)", this.codes[177] = "Left (Wii?)", this.codes[178] = "Right (Wii?)", this.codes[170] = "- (Wii?)", this.codes[174] = "+ (Wii?)", this.codes[172] = "1 (Wii?)", this.codes[173] = "2 (Wii?)", this.codes[186] = "semi-colon", this.codes[187] = "equalsign", this.codes[188] = "comma", this.codes[189] = "dash", this.codes[190] = "period", this.codes[191] = "forwardslash", this.codes[192] = "graveaccent", this.codes[219] = "openbracket", this.codes[220] = "backslash", this.codes[221] = "closebraket", this.codes[222] = "singlequote";

            return this.codes;
        }
    }]);

    return inputkeycontroller;
}();

inputkeycontroller._codeList = [];
/* harmony default export */ __webpack_exports__["a"] = (inputkeycontroller);

/***/ }),

/***/ "./src/modules/input/inputlistener.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
*  Sets up input listeners.
* @access private
* @module
* @example
* SJSInputListener
*    [listener0,listener1,listener2,element,function]
*
*    let down = new SJSInputListener("pointerdown","MSPointerDown","mousedown",this.app.window,this.pointerdown);
*    let up = new SJSInputListener("pointerup","MSPointerUp","mouseup",this.app.window,this.pointerup);
*    let move = new SJSInputListener("pointermove","MSPointerMove","mousemove",this.app.window,this.pointermove);
*
*/

var InputListener = function () {
    function InputListener(a, b, c, d, elm, evt) {
        _classCallCheck(this, InputListener);

        this.elm = elm;

        if (window.PointerEvent) this.msPointer(a, evt);else if (window.MSPointerEvent) this.Pointer(b, evt);else this.mousePointer(c, evt);

        if ('ontouchstart' in window || navigator.maxTouchPoints) this.touchPointer(d, evt);
    }

    /**
    * @method Microsoft Pointers
    */

    _createClass(InputListener, [{
        key: 'msPointer',
        value: function msPointer(e, evt) {

            window.addEventListener(e, evt, false);
        }

        /**
        * @method Universal Pointers
        */

    }, {
        key: 'Pointer',
        value: function Pointer(e, evt) {

            window.addEventListener(e, evt, false);
        }

        /**
        * @method Touch Pointers
        */

    }, {
        key: 'touchPointer',
        value: function touchPointer(e, evt) {

            window.addEventListener(e, evt, false);
        }

        /**
        * @method Mouse Pointers
        */

    }, {
        key: 'mousePointer',
        value: function mousePointer(e, evt) {

            window.addEventListener(e, evt, false);
        }
    }]);

    return InputListener;
}();

/* harmony default export */ __webpack_exports__["a"] = (InputListener);

/***/ }),

/***/ "./src/modules/input/inputscrollcontroller.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/**
* Sets up smooth scrolling
* @access private
* @module
*
*/

var inputscrollcontroller = {

    prototype: {

        /* Cache */

        x: 0,
        y: 1,
        target: { x: 0, y: 0 },

        accel: 1,

        active: null,
        reverse: false,
        //    a:false,

        window: window,
        doc: document.documentElement,

        //ScrollWheel Event
        event: function event(evt, delta) {

            if (this.app.options.get("seamless")) this.app.input.scroll.a = true;

            if (this.app.options.get("seamless")) evt.preventDefault();

            //if (this.app.options.get("overridescroll")==false)
            return;

            /*
            this.app.input.wheelDelta = evt.wheelDelta;
              var doc = document.documentElement;
            var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
            var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
                   //Flip for horizontal scrolling
               if (this.reverse)
               {
                   this.app.input.scroll.target.x = left;
                   this.app.input.scroll.target.y = top-evt.wheelDelta;
                   this.app.input.scroll.x = left;
                   this.app.input.scroll.y = top-evt.wheelDelta;
               }
               else{
                   this.app.input.scroll.target.y = 0;
                   this.app.input.scroll.target.x = left-evt.wheelDelta;
                   this.app.input.scroll.y = 0;
                   this.app.input.scroll.x = left-evt.wheelDelta;
               }
              */
            //App.ext.scroll.active = false;$
        },

        up: function up() {

            var transitionSpeed = 1;

            if (this.target.x > this.x) this.x += this.app.client.Math.Clamp(Math.floor((this.target.x - this.x) * transitionSpeed), 1, 100), this.a = true;

            if (this.target.x < this.x) this.x -= this.app.client.Math.Clamp(Math.floor((this.x - this.target.x) * transitionSpeed), 1, 100), this.a = true;

            this.x = this.app.client.Math.Clamp(this.x, 0, window.innerWidth * 3);
            this.target.x = this.app.client.Math.Clamp(this.target.x, 0, window.innerWidth * 3);

            //if (this.a)
            //this.app.window.scrollTo(this.x,this.y),this.a = false;

            log(this.x, this.y);
        },

        //Update the position for smooth scrolling

        update: function update(x, y) {

            var left = (this.app.window.pageXOffset || this.app.document.scrollLeft) - (this.app.document.clientLeft || 0);
            var top = (this.app.window.pageYOffset || this.app.document.scrollTop) - (this.app.document.clientTop || 0);

            /* DEACTIVATE IF CONFUSED */
            if (!this.active) return;

            var LD = Math.round(-this.x + this.target.x) / 10;
            var YD = Math.round(-this.y + this.target.y) / 10;

            if (left < this.target.x) this.x += this.accel * LD;
            if (left > this.target.x) this.x += this.accel * LD;
            if (top < this.target.y) this.y += this.accel * YD;
            if (top > this.target.y) this.y += this.accel * YD;

            //	this.app.window.scrollTo(this.x,this.y);

            if (Math.round(this.x / 10) == Math.round(this.target.x / 10) && Math.round(this.y / 10) == Math.round(this.target.y / 10)) return false;

            return true;
        },

        //Set position,

        to: function to(x, y) {

            this.target.x = x;
            this.target.y = y;
        },
        gMaps: function gMaps() {

            var t = document.getElementById('maps');

            if (window.ScrollControl.elementInViewport(t)) {

                if (window.ScrollControl.mapInView == false) {
                    window.ScrollControl.mapInView = true;
                    var mapsHtml = "";
                    mapsHtml += "				<iframe style=\"float:left;border-radius: 7px;margin:0px auto;width:100%;\" height=\"200\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"https:\/\/maps.google.ca\/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Toronto,+ON,+Canada&amp;aq=0&amp;oq=Toronto+Cana&amp;sll=43.656877,-79.32085&amp;sspn=0.873329,2.113495&amp;ie=UTF8&amp;hq=&amp;hnear=Toronto,+Toronto+Division,+Ontario&amp;ll=43.653226,-79.383184&amp;spn=61.734526,135.263672&amp;t=m&amp;z=4&amp;output=embed\"><\/iframe>";
                    mapsHtml += "				<br>";
                    mapsHtml += "				<a href=\"https:\/\/maps.google.ca\/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Toronto,+ON,+Canada&amp;aq=0&amp;oq=Toronto+Cana&amp;sll=43.656877,-79.32085&amp;sspn=0.873329,2.113495&amp;ie=UTF8&amp;hq=&amp;hnear=Toronto,+Toronto+Division,+Ontario&amp;ll=43.653226,-79.383184&amp;spn=61.734526,135.263672&amp;t=m&amp;z=4\"><\/a>";
                    mapsHtml += "				<br>";
                    t.innerHTML = mapsHtml;
                }
            }
        },
        scroll: function scroll(e) {

            window.ScrollControl.gMaps();

            if (window.pageYOffset != undefined) {

                this.x = pageXOffset;
                this.y = pageYOffset;

                return [pageXOffset, pageYOffset];
            } else {

                var sx = undefined,
                    sy = undefined,
                    d = document,
                    r = d.documentElement,
                    b = d.body;
                sx = r.scrollLeft || b.scrollLeft || 0;

                sy = r.scrollTop || b.scrollTop || 0;

                this.x = sx;
                this.y = sy;

                return [sx, sy];
            }
        }

    },

    constructor: function constructor(a) {
        return {
            app: { value: a },
            init: { value: function value() {
                    this.to(0, 0);
                    return this;
                }
            }
        };
    }

};

/* harmony default export */ __webpack_exports__["a"] = (inputscrollcontroller);

/***/ }),

/***/ "./src/modules/network/connection.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var IConnect = __WEBPACK_IMPORTED_MODULE_0__core_interfaces_ITypes__["h" /* IConnect */];

var Connection = function () {

		/*
  *
  *
  */

		function Connection(url) {
				_classCallCheck(this, Connection);

				this.DisableDefaultCallback = false;
				this.XMLHttpRequest = window.XMLHttpRequest || ActiveXObject("Microsoft.XMLHTTP");
				this.Error = '';
				this.ErrorAttempt = "SJS:XML:Request";
				this.ErrorOffline = "SJS:Offline";
				this.ConnectionAttempts = 0;
				this.offline = false;
				this.testurl = 'https://httpbin.org/get';
				this.window = window;

				if (!(typeof url === 'string' || url == null)) {
						throw new TypeError("Value of argument \"url\" violates contract.\n\nExpected:\nstring | void\n\nGot:\n" + _inspect(url));
				}

				this.offline = true;
				this.XML(url || this.testurl);

				return this;
		}

		/**	Request a URL via XMLHttpRequest
  *   @callback {ready}  - Triggers on request success
  *   @param {address} string - URL
  *   @param {callback} function - Callback function
  *   @param {arg0} mixed|void - User defined argument
  *   @param {arg1} mixed|void - User defined argument  */

		_createClass(Connection, [{
				key: "XML",
				value: function () {
						var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(address, callback, arg0, arg1) {
								var _this = this;

								var xmlhttp;
								return regeneratorRuntime.wrap(function _callee$(_context) {
										while (1) {
												switch (_context.prev = _context.next) {
														case 0:
																if (typeof address === 'string') {
																		_context.next = 2;
																		break;
																}

																throw new TypeError("Value of argument \"address\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(address));

														case 2:
																if (callback == null) {
																		_context.next = 4;
																		break;
																}

																throw new TypeError("Value of argument \"callback\" violates contract.\n\nExpected:\nany | void\n\nGot:\n" + _inspect(callback));

														case 4:
																if (arg0 == null) {
																		_context.next = 6;
																		break;
																}

																throw new TypeError("Value of argument \"arg0\" violates contract.\n\nExpected:\nmixed | void\n\nGot:\n" + _inspect(arg0));

														case 6:
																if (arg1 == null) {
																		_context.next = 8;
																		break;
																}

																throw new TypeError("Value of argument \"arg1\" violates contract.\n\nExpected:\nmixed | void\n\nGot:\n" + _inspect(arg1));

														case 8:
																if (!(this.offline == true)) {
																		_context.next = 12;
																		break;
																}

																this.Error = this.ErrorOffline;
																console.warn(this.Error);
																return _context.abrupt("return");

														case 12:

																this.Error = this.ErrorAttempt + '' + this.ConnectionAttempts;

																if (typeof this.Error === 'string') {
																		_context.next = 15;
																		break;
																}

																throw new TypeError("Value of \"this.Error\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(this.Error));

														case 15:
																console.time(this.Error);

																if (this.XMLHttpRequest) {
																		_context.next = 20;
																		break;
																}

																this.XMLHttpRequest = ActiveXObject("Microsoft.XMLHTTP");

																if (this.XMLHttpRequest instanceof XMLHttpRequest) {
																		_context.next = 20;
																		break;
																}

																throw new TypeError("Value of \"this.XMLHttpRequest\" violates contract.\n\nExpected:\nXMLHttpRequest\n\nGot:\n" + _inspect(this.XMLHttpRequest));

														case 20:
																xmlhttp = new this.XMLHttpRequest();

																if (xmlhttp instanceof XMLHttpRequest) {
																		_context.next = 23;
																		break;
																}

																throw new TypeError("Value of variable \"xmlhttp\" violates contract.\n\nExpected:\nXMLHttpRequest\n\nGot:\n" + _inspect(xmlhttp));

														case 23:

																xmlhttp.onreadystatechange = function () {

																		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
																				if (callback) callback(xmlhttp.response, arg0, arg1);

																				_this.ready(xmlhttp.response, arg0, arg1);
																		}
																};

																// Open new request as a HEAD to the root hostname with a random param to bust the cache
																_context.next = 26;
																return xmlhttp.open("HEAD", address + "?h=" + Math.floor((1 + Math.random()) * 0x10000), false);

														case 26:
																_context.next = 28;
																return xmlhttp.send();

														case 28:
														case "end":
																return _context.stop();
												}
										}
								}, _callee, this);
						}));

						function XML(_x, _x2, _x3, _x4) {
								return _ref3.apply(this, arguments);
						}

						return XML;
				}()

				/**	Default callback function, use Connection.DisableDefaultCallback = false;
       *   @param {response} string - Response as string
       *   @param {arg0} mixed|void - User defined argument
       *   @param {arg1} mixed|void - User defined argument  */

		}, {
				key: "ready",
				value: function () {
						var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(response, arg0, arg1) {
								return regeneratorRuntime.wrap(function _callee2$(_context2) {
										while (1) {
												switch (_context2.prev = _context2.next) {
														case 0:
																if (typeof response === 'string') {
																		_context2.next = 2;
																		break;
																}

																throw new TypeError("Value of argument \"response\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(response));

														case 2:
																if (arg0 == null) {
																		_context2.next = 4;
																		break;
																}

																throw new TypeError("Value of argument \"arg0\" violates contract.\n\nExpected:\nmixed | void\n\nGot:\n" + _inspect(arg0));

														case 4:
																if (arg1 == null) {
																		_context2.next = 6;
																		break;
																}

																throw new TypeError("Value of argument \"arg1\" violates contract.\n\nExpected:\nmixed | void\n\nGot:\n" + _inspect(arg1));

														case 6:

																this.Error = this.ErrorAttempt + '' + this.ConnectionAttempts;

																if (typeof this.Error === 'string') {
																		_context2.next = 9;
																		break;
																}

																throw new TypeError("Value of \"this.Error\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(this.Error));

														case 9:
																console.timeEnd(this.Error);
																this.ConnectionAttempts++;

														case 11:
														case "end":
																return _context2.stop();
												}
										}
								}, _callee2, this);
						}));

						function ready(_x5, _x6, _x7) {
								return _ref4.apply(this, arguments);
						}

						return ready;
				}()
		}]);

		return Connection;
}();

/* harmony default export */ __webpack_exports__["a"] = (Connection);

function _inspect(input, depth) {
		var maxDepth = 4;
		var maxKeys = 15;

		if (depth === undefined) {
				depth = 0;
		}

		depth += 1;

		if (input === null) {
				return 'null';
		} else if (input === undefined) {
				return 'void';
		} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
				return typeof input === "undefined" ? "undefined" : _typeof(input);
		} else if (Array.isArray(input)) {
				if (input.length > 0) {
						if (depth > maxDepth) return '[...]';

						var first = _inspect(input[0], depth);

						if (input.every(function (item) {
								return _inspect(item, depth) === first;
						})) {
								return first.trim() + '[]';
						} else {
								return '[' + input.slice(0, maxKeys).map(function (item) {
										return _inspect(item, depth);
								}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
						}
				} else {
						return 'Array';
				}
		} else {
				var keys = Object.keys(input);

				if (!keys.length) {
						if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
								return input.constructor.name;
						} else {
								return 'Object';
						}
				}

				if (depth > maxDepth) return '{...}';
				var indent = '  '.repeat(depth - 1);
				var entries = keys.slice(0, maxKeys).map(function (key) {
						return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
				}).join('\n  ' + indent);

				if (keys.length >= maxKeys) {
						entries += '\n  ' + indent + '...';
				}

				if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
						return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
				} else {
						return '{\n  ' + indent + entries + '\n' + indent + '}';
				}
		}
}

/***/ }),

/***/ "./src/modules/render/setInnerHTML.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createMicrosoftUnsafeLocalFunction
 */

/* globals MSApp */



/**
 * Create a function which has 'unsafe' privileges (required by windows8 apps)
 */

var createMicrosoftUnsafeLocalFunction = function createMicrosoftUnsafeLocalFunction(func) {
  if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
    return function (arg0, arg1, arg2, arg3) {
      MSApp.execUnsafeLocalFunction(function () {
        return func(arg0, arg1, arg2, arg3);
      });
    };
  } else {
    return func;
  }
};

//var ExecutionEnvironment = require('ExecutionEnvironment');

var WHITESPACE_TEST = /^[ \r\n\t\f]/;
var NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;

//var createMicrosoftUnsafeLocalFunction = require('createMicrosoftUnsafeLocalFunction');

/**
 * Set the innerHTML property of a node, ensuring that whitespace is preserved
 * even in IE8.
 *
 * @param {DOMElement} node
 * @param {string} html
 * @internal
 */
var setInnerHTML = createMicrosoftUnsafeLocalFunction(function (node, html) {
  node.innerHTML = html;
});

//if (ExecutionEnvironment.canUseDOM) {
// IE8: When updating a just created node with innerHTML only leading
// whitespace is removed. When updating an existing node with innerHTML
// whitespace in root TextNodes is also collapsed.
// @see quirksmode.org/bugreports/archives/2004/11/innerhtml_and_t.html

// Feature detection; only IE8 is known to behave improperly like this.
var testElement = document.createElement('div');
testElement.innerHTML = ' ';
if (testElement.innerHTML === '') {
  setInnerHTML = function setInnerHTML(node, html) {
    // Magic theory: IE8 supposedly differentiates between added and updated
    // nodes when processing innerHTML, innerHTML on updated nodes suffers
    // from worse whitespace behavior. Re-adding a node like this triggers
    // the initial and more favorable whitespace behavior.
    // TODO: What to do on a detached node?
    if (node.parentNode) {
      node.parentNode.replaceChild(node, node);
    }

    // We also implement a workaround for non-visible tags disappearing into
    // thin air on IE8, this only happens if there is no visible text
    // in-front of the non-visible tags. Piggyback on the whitespace fix
    // and simply check if any non-visible tags appear in the source.
    if (WHITESPACE_TEST.test(html) || html[0] === '<' && NONVISIBLE_TEST.test(html)) {
      // Recover leading whitespace by temporarily prepending any character.
      // \uFEFF has the potential advantage of being zero-width/invisible.
      // UglifyJS drops U+FEFF chars when parsing, so use String.fromCharCode
      // in hopes that this is preserved even if "\uFEFF" is transformed to
      // the actual Unicode character (by Babel, for example).
      // https://github.com/mishoo/UglifyJS2/blob/v2.4.20/lib/parse.js#L216
      node.innerHTML = String.fromCharCode(0xFEFF) + html;

      // deleteData leaves an empty `TextNode` which offsets the index of all
      // children. Definitely want to avoid this.
      var textNode = node.firstChild;
      if (textNode.data.length === 1) {
        node.removeChild(textNode);
      } else {
        textNode.deleteData(0, 1);
      }
    } else {
      node.innerHTML = html;
    }
  };
}
//}

window.setInnerHTML = setInnerHTML;

/* unused harmony default export */ var _unused_webpack_default_export = (setInnerHTML);

/***/ }),

/***/ "./src/modules/render/twitter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Twitter = function Twitter() {
    _classCallCheck(this, Twitter);

    !function (d, s, id) {
        if (!(d instanceof Object)) {
            throw new TypeError('Value of argument "d" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(d));
        }

        if (!(typeof s === 'string')) {
            throw new TypeError('Value of argument "s" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(s));
        }

        if (!(typeof id === 'string')) {
            throw new TypeError('Value of argument "id" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(id));
        }

        var js,
            fjs = d.getElementsByTagName(s)[0],
            p = /^http:/.test(d.location) ? 'http' : 'https';
        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = p + "://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
        }
    }(document, "script", "twitter-wjs");
};

/* unused harmony default export */ var _unused_webpack_default_export = (Twitter);
;

function _inspect(input, depth) {
    var maxDepth = 4;
    var maxKeys = 15;

    if (depth === undefined) {
        depth = 0;
    }

    depth += 1;

    if (input === null) {
        return 'null';
    } else if (input === undefined) {
        return 'void';
    } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
        return typeof input === 'undefined' ? 'undefined' : _typeof(input);
    } else if (Array.isArray(input)) {
        if (input.length > 0) {
            if (depth > maxDepth) return '[...]';

            var first = _inspect(input[0], depth);

            if (input.every(function (item) {
                return _inspect(item, depth) === first;
            })) {
                return first.trim() + '[]';
            } else {
                return '[' + input.slice(0, maxKeys).map(function (item) {
                    return _inspect(item, depth);
                }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
            }
        } else {
            return 'Array';
        }
    } else {
        var keys = Object.keys(input);

        if (!keys.length) {
            if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
                return input.constructor.name;
            } else {
                return 'Object';
            }
        }

        if (depth > maxDepth) return '{...}';
        var indent = '  '.repeat(depth - 1);
        var entries = keys.slice(0, maxKeys).map(function (key) {
            return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
        }).join('\n  ' + indent);

        if (keys.length >= maxKeys) {
            entries += '\n  ' + indent + '...';
        }

        if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
            return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
        } else {
            return '{\n  ' + indent + entries + '\n' + indent + '}';
        }
    }
}

/***/ }),

/***/ "./src/modules/renderer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__("./src/modules/state.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



/**
* _private
* @protected
*/

var _private = new WeakMap();

/**
* Renderer
* @module
* @protected
*/

var Renderer = function (_State) {
	_inherits(Renderer, _State);

	/**
 *	Constructor
 *	@type {Object}
 */

	function Renderer(str, l) {
		_classCallCheck(this, Renderer);

		var _this = _possibleConstructorReturn(this, (Renderer.__proto__ || Object.getPrototypeOf(Renderer)).call(this));

		window.Renderer = _this;

		_private.set(_this, _this.constructor.properties);

		var a = str;
		var i = l;

		console.trace(_this);

		for (i; i >= 0; i--) {

			_this.buffer = str[i];
		}

		return _this;
	}

	/**
 * private variables
 * @type {Object}
 * @protected
 */

	_createClass(Renderer, [{
		key: 'rRender',
		value: function rRender(node, html) {

			setInnerHTML(node, html);
		}
	}, {
		key: 'aRender',
		value: function aRender(node, html) {

			if (typeof node == 'undefined' || typeof node == 'null') node = document.getElementsByTagName('body')[0];

			if (html != 'undefined') if (html != 'undefinedundefined') node.insertAdjacentHTML('beforeend', html);

			//console.log(node.innerHtml);
			//var htmlNew = node.innerHTML+" "+html;
			//setInnerHTML(node,htmlNew);
		}

		/*

  */

	}, {
		key: 'queueMarkup',
		value: function queueMarkup(func) {

			var markup = func();
			markup = markup.replace(/>\s+</g, '><');
			markup = markup.trim();

			return markup;
		}

		/*

  */

	}, {
		key: 'renderMarkup',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(node) {
				var arr, is, i, markup;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								arr = this.buffer, is = arr.length, i = is - 1;
								i;

							case 2:
								if (!(i >= 0)) {
									_context.next = 9;
									break;
								}

								markup = arr[i];
								_context.next = 6;
								return this.aRender(node, markup);

							case 6:
								i--;
								_context.next = 2;
								break;

							case 9:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function renderMarkup(_x) {
				return _ref.apply(this, arguments);
			}

			return renderMarkup;
		}()
	}, {
		key: 'buffer',
		get: function get() {

			return this.get('buffer');
		},
		set: function set(value) {

			this.get('buffer').push(value);
		}
	}]);

	return Renderer;
}(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */]);

Renderer.properties = {

	name: 'Renderer',
	buffer: [],
	version: '0.0.1'

};
/* harmony default export */ __webpack_exports__["a"] = (Renderer);


new Renderer();

window.MarkupBuffer = [];
window.MarkupRecall = function (func) {

	var markup = func();
	markup = markup.replace(/>\s+</g, '><');

	//window.MarkupBuffer.push(markup);
	Renderer.buffer.push(markup);

	//return func();
};

window.MarkupRender = function () {

	var node = document.getElementsByTagName('body')[0];

	var time = 10;

	for (var i = 0; i < Renderer.buffer.length; i++) {
		var markup = Renderer.buffer[i];
		var node = node;
		//setTimeout(()=>{
		Renderer.aRender(node, markup);
		//},50*i+1)
	}
};

window.rRender = Renderer.rRender;
window.aRender = Renderer.aRender;

/***/ }),

/***/ "./src/modules/state.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_base_thingy__ = __webpack_require__("./src/modules/core/base/thingy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__ = __webpack_require__("./src/modules/core/interfaces/ITypes.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @noflow - no flow due to destructuring */




var IState = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["x" /* IState */];

/** The state class which the main game state inherits
*	@module */

var State = function (_WeakMapThingy) {
	_inherits(State, _WeakMapThingy);

	/** Construct and assign privates
 * @param [Object] obj - Pass an object with update, draw, init.
 * @method */

	/** @public */

	function State(obj, app) {
		var _ret;

		_classCallCheck(this, State);

		if (!(app instanceof Object || app == null)) {
			throw new TypeError('Value of argument "app" violates contract.\n\nExpected:\nObject | void\n\nGot:\n' + _inspect(app));
		}

		var _this = _possibleConstructorReturn(this, (State.__proto__ || Object.getPrototypeOf(State)).call(this, new WeakMap()));

		_this.initalized = false;


		if ((typeof app === 'undefined' ? 'undefined' : _typeof(app)) == 'object') {

			_this.app = app;
			_this.visuals = _this.app.client.visuals;

			if (!(_this.visuals instanceof Object)) {
				throw new TypeError('Value of "this.visuals" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_this.visuals));
			}

			_this.graphics = _this.app.client.graphics;

			if (!(_this.graphics instanceof Object)) {
				throw new TypeError('Value of "this.graphics" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_this.graphics));
			}
		}

		if (typeof obj != 'undefined') {
			var _ref5 = [obj.update, obj.draw, obj.init, obj.name, obj.html];
			_this.update = _ref5[0];
			_this.draw = _ref5[1];
			_this.init = _ref5[2];
			_this.name = _ref5[3];
			_this.html = _ref5[4];
		}

		return _ret = _this, _possibleConstructorReturn(_this, _ret);
	}

	/** This method is overridden to draw the state.
 * @method
 * @override	*/

	/** @private */

	_createClass(State, [{
		key: 'update',
		value: function update() {}

		/** This method is overridden to draw the state.
  * @method
  * @override	*/

	}, {
		key: 'draw',
		value: function draw() {}

		/** Method is overridden to name the state.
  * @method
  * @override	*/

	}, {
		key: 'name',
		value: function name() {}

		/** This method is overridden to initialize the state.
  * @method
  * @override	*/

	}, {
		key: 'init',
		value: function init() {}
	}]);

	return State;
}(__WEBPACK_IMPORTED_MODULE_0__core_base_thingy__["a" /* default */]);

State.properties = {

	render: function render() {},

	update: function update() {},

	draw: function draw() {},

	init: function init() {}

};
/* harmony default export */ __webpack_exports__["a"] = (State);
;

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === 'undefined' ? 'undefined' : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			if (depth > maxDepth) return '[...]';

			var first = _inspect(input[0], depth);

			if (input.every(function (item) {
				return _inspect(item, depth) === first;
			})) {
				return first.trim() + '[]';
			} else {
				return '[' + input.slice(0, maxKeys).map(function (item) {
					return _inspect(item, depth);
				}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
			}
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ }),

/***/ "./src/modules/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sortBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestAnimationFrame; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var sortBy = function () {

				var _DESC = /^desc:\s*/i;

				// Sests whether the input value is a string and has set the flag for descending order.
				var isDesc = function isDesc(v) {
								return typeof v === 'string' && _DESC.test(v);
				};

				// Compares each element and defines the sort order.
				function comparer(prev, next) {
								var asc = 1;
								if (prev === next) return 0;
								if (isDesc(prev)) asc = -1;
								return (prev > next ? 1 : -1) * asc;
				}

				// Compares each decorated element.
				function sortItems(aprev, anext) {
								var sorted = void 0,
								    i = void 0;
								for (i in aprev) {
												// eslint-disable-line
												sorted = comparer(aprev[i], anext[i]);
												if (sorted) return sorted;
								}
								return 0;
				}

				// Defines the default sort order (ASC)
				var defaultSort = function defaultSort(p, n) {
								return p < n ? -1 : +(p > n);
				};

				/*
     * Sort an array and allows multiple sort criteria.
     *
     * @param  {Array} array: the collection to sort
     * @param  {Function} parser: transforms each item and specifies the sort order
     * @return {Array}
     */
				return function sortBy(array, parser) {
								if (!Array.isArray(array)) {
												throw new TypeError('Value of argument "array" violates contract.\n\nExpected:\nArray<any>\n\nGot:\n' + _inspect(array));
								}

								var i = void 0,
								    item = void 0;
								var arrLength = array.length;
								if (typeof parser === 'undefined') {
												return array.sort(defaultSort);
								}
								// Schwartzian transform (decorate-sort-undecorate)
								for (i = arrLength; i;) {
												item = array[i -= 1];
												// decorate the array
												array[i] = [].concat(parser.call(null, item, i), item);
												// console.log('decorated: ', array[i]);
								}
								// sort the array
								array.sort(sortItems);
								// undecorate the array
								for (i = arrLength; i;) {
												item = array[i -= 1];
												array[i] = item[item.length - 1];
								}
								return array;
				};
}();

var number = function () {
				function number(input) {
								return input != null;
				}

				;
				Object.defineProperty(number, Symbol.hasInstance, {
								value: function value(input) {
												return number(input);
								}
				});
				return number;
}();

;

Number.prototype.toFixedNumber = function (x, base) {
				var pow = Math.pow(base || 10, x);
				return +(Math.round(this * pow) / pow);
};

function wait(t) {

				return new Promise(function (r) {
								return setTimeout(r, t);
				});
}

var timers = {};

window.timer = function timer(name) {
				timers[name + '_start'] = window.performance.now();
};

window.timerEnd = function timerEnd(name) {
				if (!timers[name + '_start']) return undefined;
				var time = window.performance.now() - timers[name + '_start'];
				var amount = timers[name + '_amount'] = timers[name + '_amount'] ? timers[name + '_amount'] + 1 : 1;
				var sum = timers[name + '_sum'] = timers[name + '_sum'] ? timers[name + '_sum'] + time : time;
				timers[name + '_avg'] = sum / amount;
				delete timers[name + '_start'];
				return time;
};

var utils = utils || {};

utils.FNV_OFFSET_32 = 0x811c9dc5;

utils.randomHash = function () {

				utils.FNV_OFFSET_32 = '#' + Math.floor(Math.random() * 16777215).toString(16);
};

utils.hashFnv32a = function (input) {

				var hval = utils.FNV_OFFSET_32;

				// Strips unicode bits, only the lower 8 bits of the values are used

				for (var i = 0; i < input.length; i++) {

								hval = hval ^ input.charCodeAt(i) & 0xFF;

								hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
				}

				return hval >>> 0;
};

utils.toHex = function (val) {

				return ("0000000" + (val >>> 0).toString(16)).substr(-8);
};

utils.requestAnimationFrame = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var vendors, i, vp, lastTime;
				return regeneratorRuntime.wrap(function _callee$(_context) {
								while (1) {
												switch (_context.prev = _context.next) {
																case 0:

																				if (!Date.now) Date.now = function () {
																								return new Date().getTime();
																				};

																				vendors = ['webkit', 'moz'];


																				for (i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
																								vp = vendors[i];


																								window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];

																								window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
																				};

																				if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
																								lastTime = 0;


																								window.requestAnimationFrame = function (callback) {

																												var now = Date.now();

																												var nextTime = Math.max(lastTime + 16, now);

																												return setTimeout(function () {
																																callback(lastTime = nextTime);
																												}, nextTime - now);
																								};

																								window.cancelAnimationFrame = clearTimeout;
																				};
																				utils.requestIdleCallback();

																case 7:
																case 'end':
																				return _context.stop();
												}
								}
				}, _callee, _this);
}));

utils.requestIdleCallback = function () {

				/**
     * Created by Denis Radin aka PixelsCommander
     * http://pixelscommander.com
     *
     * Polyfill is build around the principe that janks are most harmful to UX when user is continously interacting with app.
     * So we are basically preventing operation from being executed while user interacts with interface.
     * Currently this implies scrolls, taps, clicks, mouse and touch movements.
     * The condition is pretty simple - if there were no interactions for 300 msec there is a huge chance that we are in idle.
     */

				var applyPolyfill = function applyPolyfill() {
								//By default we may assume that user stopped interaction if we are idle for 300 miliseconds
								var IDLE_ENOUGH_DELAY = 300;
								var timeoutId = null;
								var callbacks = [];
								var lastInteractionTime = Date.now();
								var deadline = {
												timeRemaining: IDLE_ENOUGH_DELAY
								};

								var isFree = function isFree() {
												return timeoutId === null;
								};

								var onContinousInteractionStarts = function onContinousInteractionStarts(interactionName) {
												deadline.timeRemaining = 0;
												lastInteractionTime = Date.now();

												if (!timeoutId) {
																timeoutId = setTimeout(timeoutCompleted, IDLE_ENOUGH_DELAY);
												}
								};

								var onContinousInteractionEnds = function onContinousInteractionEnds(interactionName) {
												clearTimeout(timeoutId);
												timeoutId = null;

												for (var i = 0; i < callbacks.length; i++) {
																executeCallback(callbacks[i]);
												}
								};

								//Consider categorizing last interaction timestamp in order to add cancelling events like touchend, touchleave, touchcancel, mouseup, mouseout, mouseleave
								document.addEventListener('keydown', onContinousInteractionStarts.bind(this, 'keydown'));
								document.addEventListener('mousedown', onContinousInteractionStarts.bind(this, 'mousedown'));
								document.addEventListener('touchstart', onContinousInteractionStarts.bind(this, 'touchstart'));
								document.addEventListener('touchmove', onContinousInteractionStarts.bind(this, 'touchmove'));
								document.addEventListener('mousemove', onContinousInteractionStarts.bind(this, 'mousemove'));
								document.addEventListener('scroll', onContinousInteractionStarts.bind(this, 'scroll'), true);

								var timeoutCompleted = function timeoutCompleted() {
												var expectedEndTime = lastInteractionTime + IDLE_ENOUGH_DELAY;
												var delta = expectedEndTime - Date.now();

												if (delta > 0) {
																timeoutId = setTimeout(timeoutCompleted, delta);
												} else {
																onContinousInteractionEnds();
												}
								};

								var createCallbackObject = function createCallbackObject(callback, timeout) {
												var callbackObject = {
																callback: callback,
																timeoutId: null
												};

												callbackObject.timeoutId = timeout !== null ? setTimeout(executeCallback.bind(this, callbackObject), timeout) : null;

												return callbackObject;
								};

								var addCallback = function addCallback(callbackObject, timeout) {
												callbacks.push(callbackObject);
								};

								var executeCallback = function executeCallback(callbackObject) {
												var callbackIndex = callbacks.indexOf(callbackObject);

												if (callbackIndex !== -1) {
																callbacks.splice(callbacks.indexOf(callbackObject), 1);
												}

												callbackObject.callback(deadline);

												if (callbackObject.timeoutId) {
																clearTimeout(callbackObject.timeoutId);
																callbackObject.timeoutId = null;
												}
								};

								return function (callback, options) {
												var timeout = options && options.timeout || null;
												var callbackObject = createCallbackObject(callback, timeout);

												if (isFree()) {
																executeCallback(callbackObject);
												} else {
																addCallback(callbackObject);
												}
								};
				};

				if (!window.requestIdleCallback) {
								window.ricActivated = true;
								window.requestIdleCallback = applyPolyfill();
				}

				window.requestUserIdle = window.ricActivated && window.requestIdleCallback || applyPolyfill();
};

utils.loadExternalJS = function (scripts) {

				!function (e, t, r) {

								function n() {

												for (; d[0] && "loaded" == d[0][f];) {
																c = d.shift(), c[o] = !i.parentNode.insertBefore(c, i);
												}
								};

								for (var s, a, c, d = [], i = e.scripts[0], o = "onreadystatechange", f = "readyState"; s = r.shift();) {
												a = e.createElement(t), "" in i ? (a.async = !1, e.head.appendChild(a)) : i[f] ? (d.push(a), a[o] = n) : e.write("<" + t + ' src="' + s + '" defer></' + t + ">"), a.src = s;
								}
				}(document, "script", scripts);
};

utils.convertArrayOfObjectsToCSV = function (args) {

				var result, ctr, keys, columnDelimiter, lineDelimiter, data;

				data = args.data || null;

				if (data == null || !data.length) {

								return null;
				}

				columnDelimiter = args.columnDelimiter || ',';

				lineDelimiter = args.lineDelimiter || '\n';

				keys = Object.keys(data[0]);

				result = '';

				result += keys.join(columnDelimiter);

				result += lineDelimiter;

				data.forEach(function (item) {

								ctr = 0;

								keys.forEach(function (key) {

												if (ctr > 0) result += columnDelimiter;

												result += item[key];

												ctr++;
								});

								result += lineDelimiter;
				});

				return result;
};

utils.writeToCSV = function (name) {

				var logStream = fs.createWriteStream('log.txt', { 'flags': 'a' });

				logStream.write('Initial line...');

				logStream.end('this is the end line');

				var dataString = "";

				var data = this.convertArrayOfObjectsToCSV(SpiceJS.logs('values')[1]);

				//console.log(this.convertArrayOfObjectsToCSV({eh:'eh'}))

				var csvContent = "data:text/csv;charset=utf-8,";

				data.forEach(function (infoArray, index) {

								dataString = infoArray.join(",");

								csvContent += index < data.length ? dataString + "\n" : dataString;
				});

				var encodedUri = encodeURI(csvContent);

				var link = document.createElement("a");

				link.setAttribute("href", encodedUri);

				link.setAttribute("download", name + ".csv");

				link.click();
};

/*
*	Date.now polyfill
*/

if (!Date.now) {

				console.warn('polyfill for Date.now used');

				Date.now = function now() {
								return new Date().getTime();
				};
}

window.wait = wait;

window.utils = utils;

var RequestAnimationFrame = utils.requestAnimationFrame;

/* harmony default export */ __webpack_exports__["b"] = (window.utils);

function _inspect(input, depth) {
				var maxDepth = 4;
				var maxKeys = 15;

				if (depth === undefined) {
								depth = 0;
				}

				depth += 1;

				if (input === null) {
								return 'null';
				} else if (input === undefined) {
								return 'void';
				} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
								return typeof input === 'undefined' ? 'undefined' : _typeof(input);
				} else if (Array.isArray(input)) {
								if (input.length > 0) {
												if (depth > maxDepth) return '[...]';

												var first = _inspect(input[0], depth);

												if (input.every(function (item) {
																return _inspect(item, depth) === first;
												})) {
																return first.trim() + '[]';
												} else {
																return '[' + input.slice(0, maxKeys).map(function (item) {
																				return _inspect(item, depth);
																}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
												}
								} else {
												return 'Array';
								}
				} else {
								var keys = Object.keys(input);

								if (!keys.length) {
												if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
																return input.constructor.name;
												} else {
																return 'Object';
												}
								}

								if (depth > maxDepth) return '{...}';
								var indent = '  '.repeat(depth - 1);
								var entries = keys.slice(0, maxKeys).map(function (key) {
												return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
								}).join('\n  ' + indent);

								if (keys.length >= maxKeys) {
												entries += '\n  ' + indent + '...';
								}

								if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
												return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
								} else {
												return '{\n  ' + indent + entries + '\n' + indent + '}';
								}
				}
}

/***/ }),

/***/ "./src/shared/version.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IoVersion; });


var IoVersion = function () {
	function IoVersion(input) {
		return input != null && typeof input.version === 'string' && input.version_details instanceof IoDetails;
	}

	;
	Object.defineProperty(IoVersion, Symbol.hasInstance, {
		value: function value(input) {
			return IoVersion(input);
		}
	});
	return IoVersion;
}();

/***/ }),

/***/ "./src/spice.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpiceJS", function() { return SpiceJS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_render_setInnerHTML_js__ = __webpack_require__("./src/modules/render/setInnerHTML.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_render_twitter_js__ = __webpack_require__("./src/modules/render/twitter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_core_build__ = __webpack_require__("./src/modules/core/build.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*  - due to jszip and jszip-tils require not being defined
*
*	The Main Entrypoint for SpiceJS customized for Ryanspice.com
*	@module
*	Core components
*	Statistics - used to monitor the application
*	Build - controls instanciating App/Canvas instances
* 	setInnerHTML -	A polyfill based off react's core rendering
*/

/* WIP - extras */


//import Statistics from './modules/etc/statistics';

/* Build - the core canvas framework */



/**
* SpiceJS is the main corns and beans, this returns an app object which you can control all aspects of the  game. The main class will be instance specific alowing you to define multiple canvases. You can also view statistics and control group canvases through the object.
* @public
* @emits {SpiceJS} Emit the application controller.
* @example
*
*	((SpiceJS.create()).OnLoad = function (self) {
*
*		self.main = {
*
*		    init:function() {
*
*		    },
*
*		    update:function() {
*
*		    },
*
*		    draw:function() {
*
*		        this.visuals.text_ext(this.app.fps,100,100,"#FFFFFF",1,1);
*
*		    }
*
*		};
*
*	    self.start( 320, 720);
*
*	    window.Application = this;
*
*	});
*
*/

var SpiceJS = function (_Build) {
		_inherits(SpiceJS, _Build);

		function SpiceJS(map) {
				_classCallCheck(this, SpiceJS);

				if (!(map instanceof Object)) {
						throw new TypeError('Value of argument "map" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(map));
				}

				return _possibleConstructorReturn(this, (SpiceJS.__proto__ || Object.getPrototypeOf(SpiceJS)).call(this, map));

				/*	Temp - Disabled not ready for testing
    *		this.constructor.properties.statistics = new this.constructor.properties.statistics();
    */
		}

		return SpiceJS;
}(__WEBPACK_IMPORTED_MODULE_2__modules_core_build__["a" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = (new SpiceJS(new WeakMap()));

function _inspect(input, depth) {
		var maxDepth = 4;
		var maxKeys = 15;

		if (depth === undefined) {
				depth = 0;
		}

		depth += 1;

		if (input === null) {
				return 'null';
		} else if (input === undefined) {
				return 'void';
		} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
				return typeof input === 'undefined' ? 'undefined' : _typeof(input);
		} else if (Array.isArray(input)) {
				if (input.length > 0) {
						if (depth > maxDepth) return '[...]';

						var first = _inspect(input[0], depth);

						if (input.every(function (item) {
								return _inspect(item, depth) === first;
						})) {
								return first.trim() + '[]';
						} else {
								return '[' + input.slice(0, maxKeys).map(function (item) {
										return _inspect(item, depth);
								}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
						}
				} else {
						return 'Array';
				}
		} else {
				var keys = Object.keys(input);

				if (!keys.length) {
						if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
								return input.constructor.name;
						} else {
								return 'Object';
						}
				}

				if (depth > maxDepth) return '{...}';
				var indent = '  '.repeat(depth - 1);
				var entries = keys.slice(0, maxKeys).map(function (key) {
						return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
				}).join('\n  ' + indent);

				if (keys.length >= maxKeys) {
						entries += '\n  ' + indent + '...';
				}

				if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
						return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
				} else {
						return '{\n  ' + indent + entries + '\n' + indent + '}';
				}
		}
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/babel-polyfill/lib/index.js");
module.exports = __webpack_require__("./src/spice.js");


/***/ })

},[0]);
});
