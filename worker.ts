import { Job, Worker, WorkerOptions } from "bullmq";
import { WorkerJob } from "./jobs";

import { DoSomeHeavyComputingUseCase } from "./utils";

const workerHandler = async (job: Job<WorkerJob>) => {
  switch (job.data.type) {
    case "PrintHelloWorld": {
      console.log(`Hello world!`, job.data);
      return;
    }
    case "DoSomeHeavyComputing": {
      console.log("Starting job:", job.name);
      job.updateProgress(10);

      await DoSomeHeavyComputingUseCase(job.data);

      job.updateProgress(100);
      console.log("Finished job:", job.name);
      return;
    }
    case "MayFailOrNot": {
      if (Math.random() > 0.3) {
        console.log(`FAILED ;( - ${job.data.data.magicNumber}`)
        throw new Error("Something went wrong");
      }

      console.log(`COMPLETED - ${job.data.data.magicNumber}`);
      return "Done!";
    }
  }
};

const workerOptions: WorkerOptions = {
  connection: {
    host: "localhost",
    port: 5050,
  },
};


const worker = new Worker("testQueue", workerHandler, workerOptions);

console.log("Worker started!");
