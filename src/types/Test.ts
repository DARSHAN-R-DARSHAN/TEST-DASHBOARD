export type TestStatus = "passed" | "failed" | "skipped";

export interface Test {
  id: string;
  name: string;
  suite: string;
  status: TestStatus;
  lastRun: string;
}
