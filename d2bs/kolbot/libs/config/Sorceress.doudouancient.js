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
  Config.PlayerCount.Count = 8;

  Scripts.AncientTunnels = true;
  Config.AncientTunnels.OpenChest = true; // Open special chest in Lost City
  Config.AncientTunnels.KillDarkElder = false;

  Config.UseMerc = true; // Use merc. This is ignored and always false in d2classic.
  Config.MercWatch = true; // Instant merc revive during battle.

  Config.Inventory[0] = [0, 0, 0, 0, 0, 1, 1, 0, 0, 0];
  Config.Inventory[1] = [0, 0, 0, 0, 0, 1, 1, 0, 0, 0];
  Config.Inventory[2] = [0, 0, 0, 0, 0, 1, 1, 0, 0, 0];
  Config.Inventory[3] = [0, 0, 0, 0, 1, 1, 1, 0, 0, 0];
}
