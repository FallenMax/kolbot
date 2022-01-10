// Sorceress config file

/* Brief instructions:
 * Notepad++ is HIGHLY recommended to use for editing these files. Visit http://notepad-plus-plus.org/
 * To comment out something, put // in front of that line
 * !!!Never comment out something you're not sure about, set it to false or disable as noted in description if you don't want to use it.
 * true and false are case sensitive. Good: Config.SomeVar = true; Bad: Config.SomeVar = True;
 */

function LoadConfig() {
  include("config/Sorceress.doudou.common.js");

  // TODO equip the right weapon

  Scripts.PlayerCount = true;
  Config.PlayerCount.Count = 3;

  Scripts.Mephisto = true;
  Config.Mephisto.MoatTrick = true;
  Config.Mephisto.KillCouncil = false;
  Config.Mephisto.TakeRedPortal = true;

  Config.UseMerc = false; // Use merc. This is ignored and always false in d2classic.
  Config.MercWatch = false; // Instant merc revive during battle.

  Config.OpenChests = false; // Open chests. Controls key buying.

  Config.Inventory[0] = [0, 0, 0, 0, 1, 1, 1, 0, 0, 0];
  Config.Inventory[1] = [0, 0, 0, 0, 1, 1, 1, 0, 0, 0];
  Config.Inventory[2] = [0, 0, 0, 0, 1, 1, 1, 0, 0, 0];
  Config.Inventory[3] = [0, 0, 0, 0, 1, 1, 1, 0, 0, 0];
}
