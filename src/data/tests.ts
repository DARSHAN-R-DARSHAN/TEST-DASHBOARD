import type { Test } from "../types/Test";

export const testData: Test[] = [
  {
    id: "1",
    name: "Login API Test",
    suite: "Auth Suite",
    status: "passed",
    lastRun: "2026-02-10T10:00:00",
  },
  {
    id: "2",
    name: "Payment API Test",
    suite: "Billing Suite",
    status: "failed",
    lastRun: "2026-02-10T11:30:00",
  },
  {
    id: "3",
    name: "Signup Flow",
    suite: "Auth Suite",
    status: "skipped",
    lastRun: "2026-02-09T15:00:00",
  },
  {
    id: "4",
    name: "Refund Logic Test",
    suite: "Billing Suite",
    status: "failed",
    lastRun: "2026-02-11T09:00:00",
  },
  {
    id: "5",
    name: "JWT Validation",
    suite: "Auth Suite",
    status: "passed",
    lastRun: "2026-02-11T08:45:00",
  },
  {
    id: "6",
    name: "Webhook Handler",
    suite: "Integration Suite",
    status: "passed",
    lastRun: "2026-02-11T12:00:00",
  },
];
