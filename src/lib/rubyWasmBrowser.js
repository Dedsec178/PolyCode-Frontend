const RUBY_WASM_SCRIPT = `${process.env.PUBLIC_URL || ""}/ruby/browser.umd.js`;

let loaderPromise = null;

function readDefaultRubyVM() {
  return window["ruby-wasm-wasi"]?.DefaultRubyVM;
}

export function loadDefaultRubyVM() {
  const existing = readDefaultRubyVM();
  if (existing) {
    return Promise.resolve(existing);
  }

  if (!loaderPromise) {
    loaderPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = RUBY_WASM_SCRIPT;
      script.async = true;
      script.onload = () => {
        const DefaultRubyVM = readDefaultRubyVM();
        if (!DefaultRubyVM) {
          reject(
            new Error(
              "Ruby WASM loader failed to initialize. Re-run npm start in frontend.",
            ),
          );
          return;
        }
        resolve(DefaultRubyVM);
      };
      script.onerror = () => {
        reject(new Error("Could not load the in-browser Ruby runtime."));
      };
      document.head.appendChild(script);
    });
  }

  return loaderPromise;
}
