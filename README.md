### odin-Calculator

# ✨ Mini Calculator

### Updated

A tiny, clean calculator built with **HTML, CSS, and JavaScript** — part of my Odin Project journey!

---

## 🔢 Features

* Basic math: `+`, `−`, `×`, `÷`, `%`
* Handles **longer expressions** like `2+3*4-1`
* Ignores double operators (e.g., turns `2++3` into `2+3`)
* Left-to-right solving (no eval, no operator precedence)
* Clear (`C`) & delete (`del`) buttons
* Simple, user-friendly UI 🍬

---

## 🧠 How It Works (No `eval()`!)

* ✅ Numbers just stack up as you type.
* ✅ When you click an operator:

  * If the last character is also an operator, it replaces it.
  * Otherwise, it adds it as usual.
* ✅ When you press `=`:

  * It splits the expression into parts like `["2", "+", "3", "*", "4"]`
  * Then calculates **left to right** step by step:
    `2 + 3 = 5 → 5 * 4 = 20 → 20 - 1 = 19`
* 🚫 No `eval()`, just clean JavaScript logic.

> 💡 Division/modulus by 0? No worries! It keeps the previous result instead of crashing.

---

## 🛠️ Tech

* Vanilla JavaScript 🧃
* HTML & CSS 🌸

---

## 📚 What I’m Learning

* DOM magic ✨
* Event handling 💫
* Logic design without eval 🧩
* Clean & friendly code structure


---

@elan-thinks