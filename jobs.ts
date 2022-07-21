export interface HelloWorldJob {
  type: "PrintHelloWorld";
  data: { hello: string };
};
export interface DoSomeHeavyComputingJob {
  type: "DoSomeHeavyComputing";
  data: { magicNumber: number };
};
export interface MayFailOrNotJob {
  type: "MayFailOrNot";
  data: { magicNumber: number };
};

export type WorkerJob =
  | HelloWorldJob
  | DoSomeHeavyComputingJob
  | MayFailOrNotJob;
