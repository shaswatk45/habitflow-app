# 🌱 HabitFlow – AI-Powered Habit Tracker

HabitFlow is a modern habit tracking dashboard that helps users build consistency, track progress, and improve daily routines using analytics and an AI coach.

---

## 🚀 Features

* 📅 **Daily Habit Tracker** (monthly grid with checkmarks)
* 🔥 **Streak Tracking** (current + best streak)
* 📊 **Dashboard Analytics**

  * Completion %
  * Best / weakest habits
  * Weekly performance
* 🟩 **Heatmap Visualization** (GitHub-style activity grid)
* 🏆 **Habit Scoring & Ranking**
* 🎯 **Achievements System**
* 🤖 **AI Habit Coach (Claude API)**
* 🌙 **Dark Mode Support**
* 📤 **Export (CSV / PDF)**

---

## 🧱 Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Next.js (API Routes)
* **Database:** Supabase (PostgreSQL + Auth)
* **AI:** Anthropic Claude API
* **Deployment:** Vercel

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/habitflow.git
cd habitflow
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment file

Create `.env.local` and add:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
ANTHROPIC_API_KEY=your_claude_key
```

---

### 4. Setup Supabase

* Create a project on Supabase
* Go to **SQL Editor**
* Run the schema file:

```
supabase_schema.sql
```

* Enable Email Auth (Authentication → Providers)

---

### 5. Run locally

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🌐 Deployment

Deploy easily using Vercel:

```bash
npm install -g vercel
vercel
```

Then add environment variables in Vercel dashboard.

---

## 🔐 Authentication

* Uses Supabase Auth (email/password)
* User data is protected via Row Level Security (RLS)
* Each user can only access their own habits

---

## 🧠 AI Coach

The AI Coach uses Claude to:

* analyze habit patterns
* provide suggestions
* answer productivity questions

API is handled securely via backend route:

```
/api/coach
```

---

## 📌 Future Improvements

* Google OAuth login
* Push notifications / reminders
* Mobile app version
* Advanced AI insights

---

## 👨‍💻 Author

Built by Shash 🚀
Computer Science Engineering Student

---

## ⭐ Notes

This project started as a local habit tracker and was upgraded into a full-stack SaaS application with authentication, analytics, and AI integration.
