# Redis Node.js Integration 🚀

A structured, hands-on JavaScript playground showcasing standard **Redis** commands using Node.js and the `ioredis` library. It contains clear, runnable examples of various Redis data structures like **Strings** and **Lists**.

---

## 📌 Project Overview

This repository serves as a cheat sheet and interactive workspace for developers to learn and test Redis commands programmatically. It demonstrates:
- **20+ String Operations** (e.g., `SET`, `GET`, `MSET`, `INCR`, `APPEND`, etc.)
- **17+ List Operations** (e.g., `LPUSH`, `RPUSH`, `LPOP`, `RPOP`, `LTRIM`, `BLPOP`, etc.)

---

## 🛠️ Prerequisites

To run this project locally, you need:
1. [Node.js](https://nodejs.org/) (v16 or higher recommended)
2. [Redis Server](https://redis.io/downloads/) running locally on default port `6379` (or via Docker)

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/redis-nodejs-integration.git
cd redis-nodejs-integration
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Examples

Before running, ensure your Redis server is active.

- **To run String commands demo:**
  ```bash
  node string.js
  ```

- **To run List commands demo:**
  ```bash
  node list.js
  ```

---

## 📂 Project Structure

```bash
├── redis.js       # Redis client connection setup (ioredis configuration)
├── string.js      # Sandbox containing 20 different String-based Redis commands
├── list.js        # Sandbox containing 17 different List-based Redis commands
├── package.json   # Project dependencies and script metadata
└── .gitignore     # Files to ignore in Git (node_modules, etc.)
```

---

## 💡 Code Highlights

### Client Connection (`redis.js`)
```javascript
const redis = require('ioredis');
const client = new redis(); // Connects to 127.0.0.1:6379 by default
module.exports = client;
```

### Implemented Commands Summary

#### 🔹 Strings (`string.js`)
| Command | Description | Command | Description |
|---|---|---|---|
| `SET` / `GET` | Set & retrieve values | `MSET` / `MGET` | Multi set & get |
| `GETRANGE` | Get substring of a key | `SETEX` / `PSETEX` | Set key with TTL (seconds/ms) |
| `GETSET` | Set key & return old value | `SETNX` / `MSETNX` | Set if key does not exist |
| `INCR` / `DECR` | Increment/Decrement counter | `INCRBY` / `DECRBY` | Increment/Decrement by step |
| `STRLEN` | Get length of value | `APPEND` | Append text to existing value |

#### 🔸 Lists (`list.js`)
| Command | Description | Command | Description |
|---|---|---|---|
| `LPUSH` / `RPUSH` | Push elements to head/tail | `LPOP` / `RPOP` | Pop elements from head/tail |
| `LRANGE` | Get range of list elements | `LLEN` | Get length of the list |
| `LSET` | Set value of element by index | `LTRIM` | Trim list to specified range |
| `LINSERT` | Insert element before/after pivot | `LREM` | Remove elements from list |
| `BLPOP` / `BRPOP` | Blocking pop from head/tail | `RPOPLPUSH` | Pop from one list, push to another |

---

## 📄 License

This project is open-source and available under the [ISC License](LICENSE).
