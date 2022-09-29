# Mony

[![Better Uptime Badge](https://betteruptime.com/status-badges/v1/monitor/hiht.svg)](https://betteruptime.com/?utm_source=status_badge)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[Mony](https://mony.co.nz/) is a budgeting app designed for the New Zealand market.

Currently, it's a personal project, but if it gets good enough then we'll see what we can do about allowing more users.

## Setup

### Front-end

Mony is a [Remix](https://remix.run/)-based [Jamstack](https://jamstack.org/) website, deployed via [Vercel](https://vercel.com/). Setup is very easy :)

1. Clone the repo

```
git clone https://github.com/alexsurelee/mony.git
```

2. Install dependencies

```
cd mony
npm install
```

3. Set up environment variables

Create a `.env`

```
touch .env
```

You'll need the following environment variables:

| Name               | Value |
|--------------------|-------|
| CLERK_FRONTEND_API | ...   |
| CLERK_API_KEY      | ...   |
| CLERK_JWT_KEY      | ...   |
| AKAHU_APP_TOKEN    | ...   |
| AKAHU_USER_TOKEN   | ...   |
| SUPABASE_URL       | ...   |
| SUPABASE_KEY       | ...   |

4. Run the development server

```
npm run dev
```

You're good to go! The app will be running on http://localhost:3000/, unless this port is already occupied.

### Back-end

Mony uses Supabase for its backend, meaning you might want to create your own backend instance for testing purposes.

Follow the [Local Development](https://supabase.com/docs/guides/cli/local-development) guide to get your own Docker instance running.

## Tech Stack

### Front-end

#### Remix

Mony uses Remix as its React framework of choice. This brings with it some opinionated standards, designed for optimisation on the web.

#### Sass

To support advanced styling features whilst remaining within Remix's [guidance for styling](https://remix.run/docs/en/v1/guides/styling), [Sass](https://sass-lang.com/) is used as the preprocesser of choice. This allows for compilation to route or component-specific css files, enhancing performance.

Files can be found under `styles/` - this includes `components/` and `routes/`, alongside some tokens.

Compiled sass moves under `app/styles/`, these should not be touched directly and are included in the `.gitignore`.

#### PostCSS

PostCSS is used to add [autoprefixer](https://github.com/postcss/autoprefixer) support. This helps to reduce the need for repeating styles for cross-platform support, as this is done for us at compilation time.

### APIs

#### Akahu

Mony uses [Akahu](https://www.akahu.nz/) APIs in order to obtain access to New Zealand-based accounts. These include most major banks, IRD, and some investment platforms like Simplicity & Sharesies.

#### Clerk

To assist with secure authentication, Mony uses [Clerk](https://clerk.dev/) for user authentication and management.

### Back-end

#### Supabase

Mony uses [Supabase](https://supabase.com/) for its database.
