const {
  Worker,
  isMainThread,
  parentPort,
  workerData
} = require("worker_threads");

const min = 2;
let primes = [];

function findPrimes(start, range) {
  //에라스토테네스의 체
  let isPrime = true;
  const end = start + range;
  for (let i = start; i < end; ++i) {
    for (let j = min; j < Math.sqrt(end); ++j) {
      if (i !== j && i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
    isPrime = true;
  }
}

if (isMainThread) {
  const max = 10_000_000;
  const threadCount = 8; //8개의 워커스레드
  const threads = new Set();
  const range = Math.ceil((max - min) / threadCount);
  let start = min;
  console.time("prime");
  for (let i = 0; i < threadCount - 1; ++i) {
    const wStart = start;
    threads.add(
      new Worker(__filename, { workerData: { start: wStart, range } })
    ); //스레드 생성
    start += range;
  }
  threads.add(
    new Worker(__filename, {
      workerData: { start, range: range + ((max - min + 1) % threadCount) }
    })
  );
  for (let worker of threads) {
    worker.on("error", error => {
      throw error;
    });

    worker.on("exit", () => {
      threads.delete(worker);
      if (threads.size === 0) {
        console.timeEnd("prime");
        console.log(primes.length);
      }
    });
    worker.on("message", msg => {
      primes = primes.concat(msg);
    });
  }
} else {
  findPrimes(workerData.start, workerData.range);
  parentPort.postMessage(primes);
}
