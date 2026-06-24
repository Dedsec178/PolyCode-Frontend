import { DefaultRubyVM } from "@ruby/wasm-wasi/dist/browser";

let rubyVM = null;

/**
 * Initializes the Ruby WebAssembly Virtual Machine.
 */
export async function initRubyVM() {
  if (rubyVM) return;
  
  try {
    const response = await fetch(
      "https://unpkg.com/@ruby/3.2-wasm-wasi/dist/ruby.wasm",
    );
    
    if (!response.ok) {
      throw new Error(`Download failed with status: ${response.status}`);
    }

    const buffer = await response.arrayBuffer();
    const module = await WebAssembly.compile(buffer);
    
    const { vm } = await DefaultRubyVM(module);
    rubyVM = vm;
    
    console.log("Ruby Engine loaded successfully!");
    
  } catch (error) {
    console.error("Failed to start the Ruby Engine in initRubyVM:", error);
    // CRITICAL FIX: Re-throw the error so any function calling this knows it failed
    throw error; 
  }
}

/**
 * Runs Ruby code flawlessly in the browser using the WASM VM.
 */
export async function runRubyCode(code) {
  try {
    // Attempt to load the VM if it isn't ready
    if (!rubyVM) {
      await initRubyVM();
    }

    // EXTRA SECURITY CHECK: If it still failed to load, stop immediately
    if (!rubyVM) {
      throw new Error("Ruby WebAssembly environment was not initialized.");
    }

    const wrapperCode = `
      require 'stringio'
      $stdout = StringIO.new
      $stderr = StringIO.new
      
      begin
        eval(<<~'POLYCODE_USER_SCRIPT')
          ${code}
        POLYCODE_USER_SCRIPT
      rescue Exception => e   # <--- THE MAGIC FIX
        $stderr.puts e.message
      ensure
        $polycode_stdout = $stdout.string
        $polycode_stderr = $stderr.string
        $stdout = STDOUT
        $stderr = STDERR
      end
    `;

    // Execute the code inside the WebAssembly VM
    rubyVM.eval(wrapperCode);

    // Extract the captured outputs back into JavaScript using the global variables
    const stdoutBuffer = rubyVM.eval("$polycode_stdout").toString();
    const stderrBuffer = rubyVM.eval("$polycode_stderr").toString();
    const codeStatus = stderrBuffer.length > 0 ? 1 : 0;

    return {
      result: {
        stdout: stdoutBuffer.trim(),
        stderr: stderrBuffer.trim(),
        code: codeStatus
      }
    };

  } catch (err) {
    // This catches both compilation issues AND our initialization errors cleanly!
    return {
      result: {
        stdout: "",
        stderr: `Initialization/Syntax Error: ${err.message}`,
        code: 1
      }
    };
  }
}

export function formatRubyOutput(result) {
  if (!result) return "";
  return [result.stdout, result.stderr].filter(Boolean).join("\n\n");
}

export function getRubyRuntimeError(result) {
  return result?.stderr || null;
}