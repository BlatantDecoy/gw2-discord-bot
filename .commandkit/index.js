

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
} from "./chunk-7F4TZNK3.js";
import "./chunk-H736K5TN.js";

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
  bulkRegister: true
});
client.login(process.env.TOKEN);
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgJ2RvdGVudi9jb25maWcnO1xuXG5pbXBvcnQgeyBDbGllbnQsIEludGVudHNCaXRGaWVsZCB9IGZyb20gJ2Rpc2NvcmQuanMnO1xuaW1wb3J0IHsgQ29tbWFuZEtpdCB9IGZyb20gJ2NvbW1hbmRraXQnO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ25vZGU6cGF0aCc7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnQoe1xuICBpbnRlbnRzOiBbXG4gICAgSW50ZW50c0JpdEZpZWxkLkZsYWdzLkd1aWxkcyxcbiAgICBJbnRlbnRzQml0RmllbGQuRmxhZ3MuR3VpbGRNZW1iZXJzLFxuICAgIEludGVudHNCaXRGaWVsZC5GbGFncy5HdWlsZE1lc3NhZ2VzLFxuICAgIEludGVudHNCaXRGaWVsZC5GbGFncy5NZXNzYWdlQ29udGVudCxcbiAgXSxcbn0pO1xuXG5uZXcgQ29tbWFuZEtpdCh7XG4gIGNsaWVudCxcbiAgZXZlbnRzUGF0aDogam9pbihfX2Rpcm5hbWUsICdldmVudHMnKSxcbiAgY29tbWFuZHNQYXRoOiBqb2luKF9fZGlybmFtZSwgJ2NvbW1hbmRzJyksXG4gIC8vdmFsaWRhdGlvbnNQYXRoOiBqb2luKF9fZGlybmFtZSwgJ3ZhbGlkYXRpb25zJyksXG4gIGJ1bGtSZWdpc3RlcjogdHJ1ZSxcbn0pO1xuXG5jbGllbnQubG9naW4ocHJvY2Vzcy5lbnYuVE9LRU4pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7O0FBQUEsT0FBTztBQUVQLFNBQVMsUUFBUSx1QkFBdUI7QUFDeEMsU0FBUyxrQkFBa0I7QUFDM0IsU0FBUyxZQUFZO0FBRXJCLElBQU0sU0FBUyxJQUFJLE9BQU87QUFBQSxFQUN4QixTQUFTO0FBQUEsSUFDUCxnQkFBZ0IsTUFBTTtBQUFBLElBQ3RCLGdCQUFnQixNQUFNO0FBQUEsSUFDdEIsZ0JBQWdCLE1BQU07QUFBQSxJQUN0QixnQkFBZ0IsTUFBTTtBQUFBLEVBQ3hCO0FBQ0YsQ0FBQztBQUVELElBQUksV0FBVztBQUFBLEVBQ2I7QUFBQSxFQUNBLFlBQVksS0FBSyxXQUFXLFFBQVE7QUFBQSxFQUNwQyxjQUFjLEtBQUssV0FBVyxVQUFVO0FBQUE7QUFBQSxFQUV4QyxjQUFjO0FBQ2hCLENBQUM7QUFFRCxPQUFPLE1BQU0sUUFBUSxJQUFJLEtBQUs7IiwKICAibmFtZXMiOiBbXQp9Cg==