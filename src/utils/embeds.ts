import { Colors, EmbedBuilder } from "discord.js";

const footerText = `© ${new Date().getFullYear()} | [GitHub](https://github.com/malekashkar/djs-typescript-template)`;

function empty() {
  return new EmbedBuilder().setColor("White").setFooter({
    text: footerText,
  });
}

function normal(description: string, title?: string) {
  const embed = empty().setDescription(description);
  if (title) embed.setTitle(title);
  return embed;
}

function error(text: string, title = "Error Encountered") {
  return empty().setDescription(text).setColor(Colors.Red).setTitle(title);
}

function question(question: string, title = "Automated Question") {
  return empty().setDescription(question).setColor(Colors.Red).setTitle(title);
}

export default { normal, error, question, empty };
