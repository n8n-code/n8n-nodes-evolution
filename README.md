# @n8n-dev/n8n-nodes-evolution

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-evolution.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-evolution)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing evolution API integrations by hand.**

Every time you connect n8n to evolution, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to evolution took 5 minutes, not half a day?**

This node gives you **7+ resources** out of the box: **Instance Controller**, **Webhook Controller**, **Settings Controller**, **Message Controller**, **Chat Controller**, and 2 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-evolution
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-evolution`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **evolution API** → paste your API key
3. Drag the **evolution** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Instance Controller | POST Create Instance, GET Fetch Instances, GET Instances Connect, PUT Restart Instance, GET Connection State, DELETE Logout Instance, DELETE Delete Instance, POST Set Presence |
| Webhook Controller | POST Set Webhook, GET Find Webhook |
| Settings Controller | POST Set Settings |
| Message Controller | POST Send Text, POST Send Media, POST Send WhatsApp Audio, POST Send Sticker, POST Send Status, POST Send Location, POST Send Contact, POST Send Reaction, POST Send Poll, POST Send List |
| Chat Controller | POST WhatsApp Numbers, POST Mark Message As Read, POST Archive Chat, DELETE Delete Message For Everyone, POST Send Presence, POST Fetch Profile Picture URL, POST Find Contacts, POST Get Base64 From Media Message, POST Find Messages, POST Find Status Message, POST Update Message, POST Find Chats, POST Fetch Business Profile, POST Update Profile Name, POST Update Profile Status, POST Update Profile Picture, DELETE Remove Profile Picture, GET Fetch Privacy Settings, POST Update Privacy Settings |
| Group | POST Create Group, POST Update Group Picture, POST Update Group Subject, POST Update Group Description, GET Fetch Invite Code, POST Revoke Invite Code, POST Send Invite Url, GET Find Group by Invite Code, GET Find Group by Jid, GET Fetch All Groups, GET Find Participants, POST Update Participant, POST Update Setting, POST Toggle Ephemeral, DELETE Leave Group |
| Default | GET Get information about your EvolutionAPI |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from evolution docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official evolution OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **evolution** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the evolution API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
