# NextHire: A Job Interview Preparation Platform

<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=black" alt="next.js" />
    <img src="https://img.shields.io/badge/-Vapi-white?style=for-the-badge&color=5dfeca" alt="vapi" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Firebase-black?style=for-the-badge&logoColor=white&logo=firebase&color=DD2C00" alt="firebase" />
  </div>

  <h3 align="center">NextHire: A job interview preparation platform powered by Vapi AI Voice agents</h3>
</div>


## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 📄 [Contributing](#contributing)
6. 🛠️ [Troubleshooting](#troubleshooting)
7. 📞 [Contact](#contact)


## <a name="introduction">🤖 Introduction</a>

NextHire is a job interview preparation platform powered by Vapi AI voice agents. Built with **Next.js** for the user interface and backend logic, **Firebase** for authentication and data storage, and styled with **TailwindCSS**, this project demonstrates how to integrate AI models into applications. The platform offers a sleek and modern experience for job interview preparation, helping users to enhance their interview skills effectively.

## <a name="tech-stack">⚙️ Tech Stack</a>

- **Next.js**: A React framework for building server-side rendered applications.
- **Firebase**: A platform for building web and mobile applications, providing backend services like authentication and database.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs.
- **Vapi AI**: AI voice agents that assist in conducting mock interviews.
- **shadcn/ui**: A component library for building user interfaces.
- **Google Gemini**: An AI model for generating responses and feedback.
- **Zod**: A TypeScript-first schema declaration and validation library.

## <a name="features">🔋 Features</a>

👉 **Authentication**: Sign Up and Sign In using password/email authentication handled by Firebase.

👉 **Create Interviews**: Easily generate job interviews with the help of Vapi voice assistants and Google Gemini.

👉 **Get Feedback from AI**: Take the interview with an AI voice agent and receive instant feedback based on your conversation.

👉 **Modern UI/UX**: A sleek and user-friendly interface designed for a great experience.

👉 **Interview Page**: Conduct AI-driven interviews with real-time feedback and detailed transcripts.

👉 **Dashboard**: Manage and track all your interviews with easy navigation.

👉 **Responsiveness**: Fully responsive design that works seamlessly across devices.

👉 **Code Architecture**: Well-structured codebase for easy maintenance and scalability.

👉 **Reusability**: Components designed for reusability across the application.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/adrianhajdin/ai_mock_interviews.git
cd ai_mock_interviews
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
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

Replace the placeholder values with your actual **[Firebase](https://firebase.google.com/)** and **[Vapi](https://vapi.ai/?utm_source=youtube&utm_medium=video&utm_campaign=jsmastery_recruitingpractice&utm_content=paid_partner&utm_term=recruitingpractice)** credentials.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="contributing">📄 Contributing</a>

We welcome contributions! If you would like to contribute to NextHire, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them.
- Push your changes to your forked repository.
- Create a pull request.

## <a name="troubleshooting">🛠️ Troubleshooting</a>

If you encounter any issues while setting up or running the project, consider the following:

- Ensure all environment variables are set correctly.
- Check the console for any error messages.
- Make sure all dependencies are installed properly.

## <a name="contact">📞 Contact</a>

For any inquiries or support, feel free to reach out:

- **GitHub**: Daichianoop

This README provides a comprehensive overview of the NextHire project, including setup instructions, features, and contribution guidelines. Feel free to modify it further to suit your needs!
