import EventEmitter from "events";


let emitter = new EventEmitter();

emitter.on("run_the_code", (time) => {
  console.log(`Code runned ${time}`);
});

emitter.emit("run_the_code",'12:30');
