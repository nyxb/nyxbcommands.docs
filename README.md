# Welcome to the NYXBCommands Documentation

This documentation is hosted at https://commands.nyxb.nexus.
We utilize [Docux](https://docux.dev) as our site generator and deploy via Netlify.

## Quickstart

### Prerequisites

- A GitHub account
- Git installed on your machine
- Node.js version 14.18 or higher
  - Use `node -v` to check your current version.
  - Use `nvm install node` to upgrade to the latest version, if necessary.
  - Refer to the [nvm documentation](https://github.com/nvm-sh/nvm#installing-and-updating) for installation instructions.
- [pnpm](https://pnpm.io/installation) installed on your machine

### Installation and Local Preview

1. [Fork the NYXBCommands documentation repository](https://github.com/nyxb/nyxbcommands.docs/fork) to your GitHub account.
2. Clone your forked repository to your local machine.
3. Change directory into your cloned repository with `cd path/to/nyxbcommands.docs`.
4. Execute `pnpm install` at the root of the cloned repository.
5. Start a local development server with `pnpm run dev`.
6. Open `localhost:3000/` in your browser to see the live documentation site.

### Contributing

When you're ready to contribute back to the documentation repository, submit a pull request (PR).

1. Make sure your fork is synchronized with the original documentation repository if you haven't done so recently.
2. Create and switch to a new branch in your fork for your work.
   - Use `git checkout -b yourBranchName` to create and switch to your new branch.
3. Make your edits in your preferred editor.
4. Commit your changes regularly with clear and descriptive commit messages.
5. Push your commits from your local branch to your fork on GitHub.
6. Go to the documentation repository on your GitHub account.
7. Click on the **Pull Requests** tab.
8. Press **New Pull Request**.
9. Ensure you're comparing the correct branches:
   - The base repository should be your fork of the documentation repository.
   - The base branch is where you want your changes to be merged (typically named `develop`, `main`, or similar).
   - The head repository is your fork.
   - The compare branch is the branch containing your changes.
   Ensure that you are comparing the correct branches; if there are not four dropdowns, verify that you're comparing across forks.
10. Provide a detailed description of the changes you are proposing.
11. Click **Create Pull Request**.

Your PR will be reviewed by the team, and feedback can be provided within the PR thread. You can continue to make changes and commit them to the branch you have submitted.

## Writing Guidelines

### Content Location

- Documentation content should be placed directly in the root or specific folders at the root, as appropriate.

### Writing Tips

- Write documentation in standard markdown.
- Refer to the Docux [writing pages guide](https://docux.dev/introduction/writing-pages) for more information.
- Utilize the additional [components](https://docux.dev/api/components) provided by Docux to extend markdown functionality.

Avoid including screenshots until the project reaches a stable release phase.

### Language and Style

- Write in American English as per [Merriam-Webster](https://www.merriam-webster.com) spelling conventions.
- Implement [semantic linefeeds](https://rhodesmill.org/brandon/2012/one-sentence-per-line/): one sentence per line, paragraphs separated by a blank line.
- Refer to the [Federal Plain Language Guidelines](https://www.plainlanguage.gov/guidelines/) for general writing standards.
- For technical terminology and interface language, consult [Google's Developer Style Guide](https://developers.google.com/style) and, secondarily, [Microsoft's Style Guide](https://docs.microsoft.com/style-guide/welcome/).

### Images

- Place images in the `/public/images` directory at the root level of the repository.
- Organize images within subdirectories as needed.
- Add images to documentation using standard markdown syntax and providing [alt text](https://accessibility.huit.harvard.edu/describe-content-images) for accessibility.

```md
![Alt text](/images/image.svg)
![StackBlitz logo](/images/stackblitz.svg)
```

## In-house Styles

- Currently, there are no specific in-house style rules. When established, they will be documented here for reference.

---
