import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { Command } from "..";
import embeds from "../../utils/embeds";

export default class HelpCommand extends Command {
  slashCommand = new SlashCommandBuilder()
    .setName("help")
    .setDescription("Get a menu of all the available slash commands.");

  async execute(interaction: ChatInputCommandInteraction) {
    interaction.reply({
      embeds: [
        embeds.normal(
          `Here are all the available slash commands. Click on the buttons to get more information about each command.`,
          `Help Menu`
        ),
      ],
      ephemeral: true,
    });
  }
}
