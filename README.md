# @n8n-dev/n8n-nodes-evolution

![evolution Banner](banner.svg)

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

<details>
<summary><b>Instance Controller</b> (8 operations)</summary>

- Post Create Instance
- Get Fetch Instances
- Get Instances Connect
- Put Restart Instance
- Get Connection State
- Delete Logout Instance
- Delete Instance
- Post Set Presence

</details>

<details>
<summary><b>Webhook Controller</b> (2 operations)</summary>

- Post Set WEBHOOK
- Get Find WEBHOOK

</details>

<details>
<summary><b>Settings Controller</b> (1 operations)</summary>

- Post Set Settings

</details>

<details>
<summary><b>Message Controller</b> (10 operations)</summary>

- Post Send Text
- Post Send Media
- Post Send WhatsApp Audio
- Post Send Sticker
- Post Send Status
- Post Send Location
- Post Send Contact
- Post Send Reaction
- Post Send Poll
- Post Send List

</details>

<details>
<summary><b>Chat Controller</b> (19 operations)</summary>

- Post WhatsApp Numbers
- Post Mark Message As Read
- Post Archive Chat
- Delete Message For Everyone
- Post Send Presence
- Post Fetch Profile Picture URL
- Post Find Contacts
- Post Get Base64 From Media Message
- Post Find Messages
- Post Find Status Message
- Post Update Message
- Post Find Chats
- Post Fetch Business Profile
- Post Update Profile Name
- Post Update Profile Status
- Post Update Profile Picture
- Delete Remove Profile Picture
- Get Fetch Privacy Settings
- Post Update Privacy Settings

</details>

<details>
<summary><b>Group</b> (15 operations)</summary>

- Post Create Group
- Post Update Group Picture
- Post Update Group Subject
- Post Update Group Description
- Get Fetch Invite Code
- Post Revoke Invite Code
- Post Send Invite URL
- Get Find Group by Invite Code
- Get Find Group by Jid
- Get Fetch All Groups
- Get Find Participants
- Post Update Participant
- Post Update Setting
- Post Toggle Ephemeral
- Delete Leave Group

</details>

<details>
<summary><b>Default</b> (1 operations)</summary>

- Get information about your EvolutionAPI

</details>

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


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
