# Git

[git](./assets/markdown/git.md ':include')

---

# Install Git 

Download the latest [Git for Windows, Mac, and Linux](https://git-scm.com/downloads).

## Git local configurations
```bash
git init
``` 
```bash
git config --global user.name "Emma Paris"
git config --global user.email "eparis@atlassian.com"
```
For local to a workspace we can use below commands:

```bash
git config --local user.name "Your Name"
git config --local user.email "your_email@example.com"
```

Use built in Credential Manager of Git
```bash
git config --global credential.helper cache
```
Replace "Your Name" and "your_email@example.com" with your actual name and email address.

> `optional` Generate an SSH key pair, and store it in the `.git` directory of your repository:
```bash
ssh-keygen -t ed25519 -C "your_email@example.com" -f .git/ssh_key
```
This will create a new SSH key pair in the `.git` directory of your repository.

> Till now the configurations were made for local version control, but to reflect the commits in a remote server like GitHub, GitLab, or Bitbucket, we need to add the credentials also. To do that, we need to use a Credential Manager application because Git no longer supports the **addition of account with two factor authentication** alone.

## Credential Manager application.
- Recommended to install [Github CLI for Windows, Linux, Mac](https://cli.github.com/)
- After installing `gh-cli` authenticate the account using below method
```bash
gh auth login
```

    > Optional instructions for `gh-cli`.
    > - To check the authentication details available locally. `gh auth status`
    > - To switch between github accounts locally use this `gh auth switch`, if there are more than 2 user, use this `gh auth swith --user <user_name>`.
    >  - we can use this command to declare login scopes `gh auth login --hostname github.com --scopes repo` 
    
## Create a new repo

```bash
gh repo create <repo_name> --description "<repo_description>" --private
```
Replace `<repo_name>` with the desired name for your repository, and `<repo_description>` with a brief description.
>We can also use `--private` or `--public`

## Add remote:
```bash
git remote add origin git@github.com:<your_username>/<repo_name>.git
```
Replace `<your_username>` with your actual GitHub username, and `<repo_name>` with the name of the repository you created in the previous step.

## Commit and Push:
1. Add all files in staging area:
    ```bash
    git add .
    ```
1. Commit the changes:
    ```bash
    git commit -m "Initial commit"
    ```
1. Push your local repository to the remote repository:
    ```bash
    # Change the branch name to `main` (needed)
    git branch -m main
    ```
    > Push to the remote repository and set the upstream tracking information.
    ```bash
    git push -u origin main
    ```

## Syncing Remote repo

> To fetch the latest data without merging
```bash
git fetch origin
```
> To fetch and merge remote changes
```bash
git pull origin main
```

By using the `--local` flag with `git config`, you've set up the Git configuration, credentials, and remote repository connection only for this specific folder, without affecting the global Git configuration.

---

## Branch Mangement
```bash

# Show the branch details
git branch

# Create Branch 
git branch <branch-name>

# Create and switch to a new branch
git checkout -b <old_branch_name>

# Delete a branch
git branch -d <old_branch_name>

# Force delete an unmerged branch
git branch -D <old_branch_name>

# Rename the current branch
git branch -m <new_branch_name>

# Rename a different branch
git branch -m <old_branch_name> <new_branch_name>

# Push the updated branch name to the remote repository
git push origin :<old_branch_name> <new_branch_name>
```
---

# Git Advanced

```markmap

## Links

- [Website](https://markmap.js.org/)
- [GitHub](https://github.com/gera2ld/markmap)

## Related Projects

- ok 

## Features

- Note that if blocks and lists appear at the same level, the lists will be ignored.

```

