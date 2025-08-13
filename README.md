# GW2 Discord Bot

A Discord bot for **Guild Wars 2** that manages event sign-ups. Originally written in Python, now early re-write in **TypeScript** using **CommandKit**.

---

## Goals

- Manage sign-ups for Raids, Fractals, Strikes & Generic LFG
- Supports multiple events and participants

1. For Raids:
- /raid new, /raid start, /raid cancel, /raid end
- Has buttons to Sign Up, Edit, Sign Out
- Users signing up declare their roles, then their mechanics.
- User selects a primary role, then flex roles.
- Roles available for primary role depends on what has already been signed up
- Mechancics are dynamic based on content (Raid Wing 1,3,5 event only has those in the drop down)
- Add hyperlinks in description for explaining based on selected wings
- /raid end has option to upload links to logs

2. For Fractals:
- /fractal new title:T4s+Recs time:7:30 recurring:true (prompts day selector) reminder:30mins
- Should look at daily t4s+recs and add to desc
- If over 5 users, boils over and creates two groups
- Role selector for logical grouping

3. Global
- Commands are modal based, but can spit out re-usable commands
- Beutiful embedded messages for displaying events
- Reminders (toggelable?)
- Permissions to use certaom commands based on roles
- Timestamps are relative
- Relative time (now, tomorrow 7:30)

---

## Requirements

- [Node.js](https://nodejs.org/) v18+
- [npm](https://www.npmjs.com/)

---

## Installation

1. Clone the repository:

git clone <your-repo-url>
cd <your-repo-folder>

2. Install dependencies:

npm install
npm install commandkit

---

## Running

1. Development
npx commandkit dev

2. Production
npx commandkit build
npx commandkit start

---

## Bot Usage

/raid new <choice>
Creates a UI Input for creating a raid