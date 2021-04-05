# Cloudflare Workers: Full-Stack

## What is it?

Using Cloudflare Workers, you'll deploy an application that will randomly send users to one of two webpages. This project will teach you how to write applications with the Cloudflare Workers API, manage and develop them using the command-line tool Wrangler, and deploy them to the free workers.dev deployment playground.

## Useful Links

- [Workers Quick Start documentation](https://developers.cloudflare.com/workers/quickstart/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [HTMLRewriter](https://developers.cloudflare.com/workers/reference/apis/html-rewriter/)
- [Cookie documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

## Get Started

### 1. Install the workers command-line tool wrangler.

The Workers Quick Start in the documentation shows how to get started with Wrangler, creating a project, and configuring and deploying it. We highly recommend that you spend time reading and following along with this guide!

To begin, install the [Wrangler](https://github.com/cloudflare/wrangler) command-line tool.

### 2. Generate a new project using `wrangler generate` command

Using the `generate` command (covered in the Quick Start), generate a new project with a name of your choice:

```sh
$ wrangler generate your-project-name https://github.com/cloudflare-internship-2020/internship-application-fullstack
```

### 3. Use `wrangler dev` to locally test/develop your application

The recently launched [`wrangler dev`](https://github.com/cloudflare/wrangler#-dev) feature will allow you to begin developing your application using `localhost` - this means that you can test your project locally and make sure it works, without having to sort out deployment until later in the exercise.

Note that a major benefit of using `wrangler dev` is the ability to output `console.log` statements to your terminal - this is super useful for inspecting HTTP responses and variables!
