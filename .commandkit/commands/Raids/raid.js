import {
  raidCancel
} from "../../chunk-3UFJ3O5N.js";
import {
  raidEnd
} from "../../chunk-53SCKRYX.js";
import {
  raidNew
} from "../../chunk-NZL55HTM.js";
import "../../chunk-FASB3F5N.js";
import "../../chunk-7F4TZNK3.js";
import {
  __name
} from "../../chunk-H736K5TN.js";

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
          name: "New",
          value: "new"
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
  const choice = interaction.options.getString("choice");
  switch (choice) {
    case "new":
      raidNew(interaction);
      break;
    case "end":
      raidEnd(interaction);
      break;
    case "cancel":
      raidCancel(interaction);
      break;
    default:
      interaction.reply("Invalid choice");
  }
}, "run");
export {
  data,
  run
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL1JhaWRzL3JhaWQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB0eXBlIHtcclxuICBDb21tYW5kRGF0YSxcclxuICBTbGFzaENvbW1hbmRQcm9wcyxcclxuICBDb21tYW5kT3B0aW9ucyxcclxufSBmcm9tICdjb21tYW5ka2l0JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25Db21tYW5kT3B0aW9uVHlwZSB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IHJhaWROZXcgfSBmcm9tICcuLi8uLi91dGlscy9yYWlkcy9yYWlkLW5ldyc7XHJcbmltcG9ydCB7IHJhaWRFbmQgfSBmcm9tICcuLi8uLi91dGlscy9yYWlkcy9yYWlkLWVuZCc7XHJcbmltcG9ydCB7IHJhaWRDYW5jZWwgfSBmcm9tICcuLi8uLi91dGlscy9yYWlkcy9yYWlkLWNhbmNlbCc7XHJcblxyXG5leHBvcnQgY29uc3QgZGF0YTogQ29tbWFuZERhdGEgPSB7XHJcbiAgbmFtZTogJ3JhaWQnLFxyXG4gIGRlc2NyaXB0aW9uOiAncmFpZCBkZXNjJyxcclxuICBvcHRpb25zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnY2hvaWNlJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ2Nob2ljZSBkZXNjJyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICB0eXBlOiBBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlLlN0cmluZyxcclxuICAgICAgICBjaG9pY2VzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdOZXcnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICduZXcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmQnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdlbmQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdjYW5jZWwnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICBdXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcnVuID0gKHsgaW50ZXJhY3Rpb24gfTogU2xhc2hDb21tYW5kUHJvcHMpID0+IHtcclxuICBjb25zdCBjaG9pY2UgPSBpbnRlcmFjdGlvbi5vcHRpb25zLmdldFN0cmluZygnY2hvaWNlJyk7XHJcblxyXG4gIHN3aXRjaCAoY2hvaWNlKSB7XHJcbiAgICBjYXNlICduZXcnOlxyXG4gICAgICByYWlkTmV3KGludGVyYWN0aW9uKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdlbmQnOlxyXG4gICAgICByYWlkRW5kKGludGVyYWN0aW9uKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdjYW5jZWwnOlxyXG4gICAgICByYWlkQ2FuY2VsKGludGVyYWN0aW9uKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBpbnRlcmFjdGlvbi5yZXBseSgnSW52YWxpZCBjaG9pY2UnKTtcclxuICB9XHJcbn07XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxTQUFTLG9DQUFvQztBQUt0QyxJQUFNLE9BQW9CO0FBQUEsRUFDL0IsTUFBTTtBQUFBLEVBQ04sYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLElBQ0w7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxNQUNWLE1BQU0sNkJBQTZCO0FBQUEsTUFDbkMsU0FBUztBQUFBLFFBQ0w7QUFBQSxVQUNJLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0ksTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDSSxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsUUFDWDtBQUFBLE1BQ0o7QUFBQSxJQUNGO0FBQUEsRUFDSjtBQUNGO0FBRU8sSUFBTSxNQUFNLHdCQUFDLEVBQUUsWUFBWSxNQUF5QjtBQUN6RCxRQUFNLFNBQVMsWUFBWSxRQUFRLFVBQVUsUUFBUTtBQUVyRCxVQUFRLFFBQVE7QUFBQSxJQUNkLEtBQUs7QUFDSCxjQUFRLFdBQVc7QUFDbkI7QUFBQSxJQUNGLEtBQUs7QUFDSCxjQUFRLFdBQVc7QUFDbkI7QUFBQSxJQUNGLEtBQUs7QUFDSCxpQkFBVyxXQUFXO0FBQ3RCO0FBQUEsSUFDRjtBQUNFLGtCQUFZLE1BQU0sZ0JBQWdCO0FBQUEsRUFDdEM7QUFDRixHQWhCbUI7IiwKICAibmFtZXMiOiBbXQp9Cg==