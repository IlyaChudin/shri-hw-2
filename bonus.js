Promise.prototype._finally = function(callback) {
  return this.then(
    resolved => {
      callback();
      return resolved;
    },
    rejected => {
      callback();
      throw rejected;
    }
  );
};
setTimeout(() => {
  console.log("=== _finally tests ===");
  Promise.reject("reject")
    ._finally(() => console.log("_finally after reject"))
    .catch(x => console.log("catch after _finally: ", x));
  Promise.resolve("resolve")
    ._finally(() => console.log("_finally after resolve"))
    .then(x => console.log("then after _finally: ", x));
  Promise.resolve("resolve")
    ._finally(() => {
      throw "Error";
    })
    .catch(x => console.log("throw in _finally: ", x));
  Promise.resolve("reject")
    ._finally(() => {
      throw "Error";
    })
    .catch(x => console.log("throw in _finally: ", x));
}, 0);

Promise._any = function(iterable) {
  return new Promise((resolve, reject) => {
    Promise.all(
      iterable.map(x =>
        Promise.resolve(x)
          .then(resolve)
          .catch(e => e)
      )
    ).then(reject);
  });
};
setTimeout(() => {
  console.log();
  console.log("=== _any tests ===");
  Promise._any([Promise.resolve(1), Promise.resolve(2)]).then(x => console.log(x, "= 1"));
  Promise._any([Promise.resolve(1), Promise.reject(2)]).then(x => console.log(x, "= 1"));
  Promise._any([Promise.reject(1), Promise.resolve(2)]).then(x => console.log(x, "= 2"));
  Promise._any([Promise.reject(1), Promise.reject(2)]).catch(x => console.log(x, "= [ 1, 2 ]"));
  Promise._any([]).catch(x => console.log(x, "= []"));
  Promise._any([1, Promise.resolve(2)]).then(x => console.log(x, "= 1"));
  Promise._any([
    Promise.resolve().then(() => {
      throw "err";
    }),
    Promise.reject(2)
  ]).catch(x => console.log(x, "= [ 'err', 2 ]"));
}, 100);

Promise._allSettled = function(iterable) {
  return Promise.all(
    iterable.map(x =>
      Promise.resolve(x)
        .then(value => ({ status: "fulfilled", value }))
        .catch(reason => ({ status: "rejected", reason }))
    )
  );
};
setTimeout(() => {
  console.log();
  console.log("=== _allSettled tests ===");
  Promise._allSettled([]).then(console.log);
  Promise._allSettled([Promise.resolve(1), Promise.resolve(2)]).then(console.log);
  Promise._allSettled([Promise.reject(1), Promise.reject(2)]).then(console.log);
  Promise._allSettled([Promise.resolve(1), Promise.reject(2)]).then(console.log);
  Promise._allSettled([1, Promise.resolve(2), Promise.reject(3)]).then(console.log);
}, 200);
