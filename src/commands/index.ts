import {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  SlashCommandSubcommandBuilder,
  SlashCommandSubcommandsOnlyBuilder,
} from "discord.js";

export type AllCommandTypes = Command | ParentCommand | ChildCommand;

export abstract class ParentCommand {
  abstract slashCommand: SlashCommandBuilder;
  abstract childCommands: ChildCommand[];

  async canRun(_interaction: ChatInputCommandInteraction) {
    return true;
  }
}

export abstract class ChildCommand {
  abstract slashCommand: SlashCommandSubcommandBuilder;
  maintenance: boolean = false;

  async canRun(_interaction: ChatInputCommandInteraction) {
    return true;
  }

  abstract execute(_interaction: ChatInputCommandInteraction): Promise<void>;
}

export abstract class Command {
  abstract slashCommand:
    | SlashCommandBuilder
    | SlashCommandSubcommandsOnlyBuilder
    | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">;
  maintenance: boolean = false;

  async canRun(_interaction: ChatInputCommandInteraction) {
    return true;
  }

  abstract execute(_interaction: ChatInputCommandInteraction): Promise<void>;
}
