import Task from ".";
import Logger from "../utils/logger";

export default class ExampleTask extends Task {
  interval = 10 * 1000;
  taskName = "EXAMPLE";

  async execute() {
    Logger.info("EXAMPLE_TASK", "This is an example task.");
  }
}
