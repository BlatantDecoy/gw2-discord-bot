

;await (async()=>{
  'use strict';
// --- CommandKit require() polyfill ---
  if (typeof require === "undefined") {
    const { createRequire } = await import("node:module");
    const __require = createRequire(import.meta.url);
    Object.defineProperty(globalThis, "require", {
      value: (id) => {
        return __require(id);
      },
      configurable: true,
      enumerable: false,
      writable: true,
    });
  }
// --- CommandKit require() polyfill ---


})();



import {
  __dirname
} from "./chunk-DA6GMMLJ.js";

// src/index.ts
import "dotenv/config";
import { Client, IntentsBitField } from "discord.js";
import { CommandKit } from "commandkit";
import { join } from "node:path";
var client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ]
});
new CommandKit({
  client,
  eventsPath: join(__dirname, "events"),
  commandsPath: join(__dirname, "commands"),
  //validationsPath: join(__dirname, 'validations'),
  reloadCommands: true
});
client.login(process.env.TOKEN);
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgJ2RvdGVudi9jb25maWcnO1xuXG5pbXBvcnQgeyBDbGllbnQsIEludGVudHNCaXRGaWVsZCB9IGZyb20gJ2Rpc2NvcmQuanMnO1xuaW1wb3J0IHsgQ29tbWFuZEtpdCB9IGZyb20gJ2NvbW1hbmRraXQnO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ25vZGU6cGF0aCc7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnQoe1xuICBpbnRlbnRzOiBbXG4gICAgSW50ZW50c0JpdEZpZWxkLkZsYWdzLkd1aWxkcyxcbiAgICBJbnRlbnRzQml0RmllbGQuRmxhZ3MuR3VpbGRNZW1iZXJzLFxuICAgIEludGVudHNCaXRGaWVsZC5GbGFncy5HdWlsZE1lc3NhZ2VzLFxuICAgIEludGVudHNCaXRGaWVsZC5GbGFncy5NZXNzYWdlQ29udGVudCxcbiAgXSxcbn0pO1xuXG5uZXcgQ29tbWFuZEtpdCh7XG4gIGNsaWVudCxcbiAgZXZlbnRzUGF0aDogam9pbihfX2Rpcm5hbWUsICdldmVudHMnKSxcbiAgY29tbWFuZHNQYXRoOiBqb2luKF9fZGlybmFtZSwgJ2NvbW1hbmRzJyksXG4gIC8vdmFsaWRhdGlvbnNQYXRoOiBqb2luKF9fZGlybmFtZSwgJ3ZhbGlkYXRpb25zJyksXG4gIHJlbG9hZENvbW1hbmRzOiB0cnVlLFxufSk7XG5cbmNsaWVudC5sb2dpbihwcm9jZXNzLmVudi5UT0tFTik7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7OztBQUFBLE9BQU87QUFFUCxTQUFTLFFBQVEsdUJBQXVCO0FBQ3hDLFNBQVMsa0JBQWtCO0FBQzNCLFNBQVMsWUFBWTtBQUVyQixJQUFNLFNBQVMsSUFBSSxPQUFPO0FBQUEsRUFDeEIsU0FBUztBQUFBLElBQ1AsZ0JBQWdCLE1BQU07QUFBQSxJQUN0QixnQkFBZ0IsTUFBTTtBQUFBLElBQ3RCLGdCQUFnQixNQUFNO0FBQUEsSUFDdEIsZ0JBQWdCLE1BQU07QUFBQSxFQUN4QjtBQUNGLENBQUM7QUFFRCxJQUFJLFdBQVc7QUFBQSxFQUNiO0FBQUEsRUFDQSxZQUFZLEtBQUssV0FBVyxRQUFRO0FBQUEsRUFDcEMsY0FBYyxLQUFLLFdBQVcsVUFBVTtBQUFBO0FBQUEsRUFFeEMsZ0JBQWdCO0FBQ2xCLENBQUM7QUFFRCxPQUFPLE1BQU0sUUFBUSxJQUFJLEtBQUs7IiwKICAibmFtZXMiOiBbXQp9Cg==