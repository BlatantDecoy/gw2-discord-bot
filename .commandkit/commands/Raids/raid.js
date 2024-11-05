import {
  __name
} from "../../chunk-DA6GMMLJ.js";

// src/commands/Raids/raid.ts
import { ApplicationCommandOptionType } from "discord.js";
var data = {
  name: "raid",
  description: "raid desc",
  options: [
    {
      name: "choice",
      description: "choice desc",
      required: true,
      type: ApplicationCommandOptionType.String,
      choices: [
        {
          name: "Start",
          value: "start"
        },
        {
          name: "End",
          value: "end"
        },
        {
          name: "Cancel",
          value: "cancel"
        }
      ]
    }
  ]
};
var run = /* @__PURE__ */ __name(({ interaction }) => {
  interaction.reply("Pong!");
}, "run");
var options = {
  // https://commandkit.js.org/typedef/CommandOptions
};
export {
  data,
  options,
  run
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL1JhaWRzL3JhaWQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB0eXBlIHtcclxuICBDb21tYW5kRGF0YSxcclxuICBTbGFzaENvbW1hbmRQcm9wcyxcclxuICBDb21tYW5kT3B0aW9ucyxcclxufSBmcm9tICdjb21tYW5ka2l0JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25Db21tYW5kT3B0aW9uVHlwZSB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZGF0YTogQ29tbWFuZERhdGEgPSB7XHJcbiAgbmFtZTogJ3JhaWQnLFxyXG4gIGRlc2NyaXB0aW9uOiAncmFpZCBkZXNjJyxcclxuICBvcHRpb25zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnY2hvaWNlJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ2Nob2ljZSBkZXNjJyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICB0eXBlOiBBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlLlN0cmluZyxcclxuICAgICAgICBjaG9pY2VzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdTdGFydCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ3N0YXJ0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5kJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnZW5kJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnQ2FuY2VsJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnY2FuY2VsJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgXVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJ1biA9ICh7IGludGVyYWN0aW9uIH06IFNsYXNoQ29tbWFuZFByb3BzKSA9PiB7XHJcbiAgaW50ZXJhY3Rpb24ucmVwbHkoJ1BvbmchJyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgb3B0aW9uczogQ29tbWFuZE9wdGlvbnMgPSB7XHJcbiAgLy8gaHR0cHM6Ly9jb21tYW5ka2l0LmpzLm9yZy90eXBlZGVmL0NvbW1hbmRPcHRpb25zXHJcbn07XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7O0FBS0EsU0FBUyxvQ0FBb0M7QUFFdEMsSUFBTSxPQUFvQjtBQUFBLEVBQy9CLE1BQU07QUFBQSxFQUNOLGFBQWE7QUFBQSxFQUNiLFNBQVM7QUFBQSxJQUNMO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsTUFDVixNQUFNLDZCQUE2QjtBQUFBLE1BQ25DLFNBQVM7QUFBQSxRQUNMO0FBQUEsVUFDSSxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNJLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0ksTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFFBQ1g7QUFBQSxNQUNKO0FBQUEsSUFDRjtBQUFBLEVBQ0o7QUFDRjtBQUVPLElBQU0sTUFBTSx3QkFBQyxFQUFFLFlBQVksTUFBeUI7QUFDekQsY0FBWSxNQUFNLE9BQU87QUFDM0IsR0FGbUI7QUFJWixJQUFNLFVBQTBCO0FBQUE7QUFFdkM7IiwKICAibmFtZXMiOiBbXQp9Cg==