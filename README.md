# README.md for Prepwise: A Job Interview Preparation Platform

## 📋 Table of Contents

- 🤖 Introduction
- ⚙️ Tech Stack
- 🔋 Features
- 🤸 Quick Start
- 🕸️ Snippets (Code to Copy)
- 🔗 Assets


## 🤖 Introduction

Prepwise is a job interview preparation platform powered by Vapi AI voice agents. Built with **Next.js** for the user interface and backend logic, **Firebase** for authentication and data storage, and styled with **TailwindCSS**, this project demonstrates how to integrate AI models into applications. The platform offers a sleek and modern experience for job interview preparation.


## ⚙️ Tech Stack

- **Next.js**
- **Firebase**
- **Tailwind CSS**
- **Vapi AI**
- **shadcn/ui**
- **Google Gemini**
- **Zod**


## 🔋 Features

- **Authentication**: Sign up and sign in using password/email authentication handled by Firebase.
  
- **Create Interviews**: Easily generate job interviews with the help of Vapi voice assistants and Google Gemini.
  
- **Get Feedback from AI**: Take the interview with an AI voice agent and receive instant feedback based on your conversation.
  
- **Modern UI/UX**: A sleek and user-friendly interface designed for a great experience.
  
- **Interview Page**: Conduct AI-driven interviews with real-time feedback and detailed transcripts.
  
- **Dashboard**: Manage and track all your interviews with easy navigation.
  
- **Responsiveness**: Fully responsive design that works seamlessly across devices.


## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- **Git**
- **Node.js**
- **npm** (Node Package Manager)

### Cloning the Repository

```bash
git clone https://github.com/adrianhajdin/ai_mock_interviews.git
cd ai_mock_interviews
```

### Installation

Install the project dependencies using npm:

```bash
npm install
```

### Set Up Environment Variables

Create a new file named `.env.local` in the root of your project and add the following content:

```plaintext
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

Replace the placeholder values with your actual Firebase and Vapi credentials.

### Running the Project

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.


## 🕸️ Snippets

- **globals.css**
- **lib/utils.ts**
- **Generate questions prompt** (`/app/api/vapi/generate/route.tsx`)
- **Generate feedback prompt** (`lib/actions/general.action.ts`)
- **Display feedback** (`app/(root)/interview/[id]/feedback/page.tsx`)
- **Dummy Interviews**


## 🔗 Assets

Public assets used in the project can be found [here](#).
