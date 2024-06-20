# Git

[git](./assets/markdown/git.md ':include')

---

# Install Git 

Okay, let's continue the steps:

1. Download the latest [Git for Windows, Mac, and Linux](https://git-scm.com/downloads).
1. Open a Command Prompt (or Git Bash if during installation you elected not to use Git from the Windows Command Prompt).
1. Run the following commands to configure your Git username and email using the following commands, replacing Emma's name with your own. These details will be associated with any commits that you create:
    ```bash
    git init
    ``` 
    ```bash
    git config --global user.name "Emma Paris"
    git config --global user.email "eparis@atlassian.com"
    ```
   For Local We can use below commands:

    ```bash
    git config --local user.name "Your Name"
    git config --local user.email "your_email@example.com"
    ```
    - Use built in Credential Manager of Git
    ```bash
    git config --global credential.helper cache
    ```
    Replace "Your Name" and "your_email@example.com" with your actual name and email address.

    >`optional` Generate an SSH key pair (if you don't already have one), and store it in the `.git` directory of your repository:
    ```bash
    ssh-keygen -t ed25519 -C "your_email@example.com" -f .git/ssh_key
    ```
    This will create a new SSH key pair in the `.git` directory of your repository.

1. Till now the configurations were made for local version control, but to reflect the commits in a remote server like GitHub, GitLab, or Bitbucket, we need to add the credentials also. To do that, we need to use a Credential Manager application because Git no longer supports the **addition of account with two factor authentication** alone.

1. Install a Credential Manager application.
    - Recommended to install [Github CLI for Windows, Linux, Mac](https://cli.github.com/)
    - After installing gh-cli authenticate the account using below method
    ```bash
    gh auth login
    ```

    - Optional instructions for `gh-cli`.
        - To check the authentication details available locally. `gh auth status`
        - To switch between github accounts locally. `gh auth switch`
        -  we can use this command to declare login scopes `gh auth login --hostname github.com --scopes repo` 
        
1. Create a new repository on GitHub using the GitHub CLI:

    ```bash
    gh repo create <repo_name> --description "<repo_description>" --private
    ```
    Replace `<repo_name>` with the desired name for your repository, and `<repo_description>` with a brief description.

1. Add the remote repository to your local Git repository, using the SSH key pair generated earlier:
    ```bash
    git remote add origin git@github.com:<your_username>/<repo_name>.git
    ```
    Replace `<your_username>` with your actual GitHub username, and `<repo_name>` with the name of the repository you created in the previous step.

1. Add all files in your local repository to the staging area:
    ```bash
    git add .
    ```
1. Commit the changes with a meaningful commit message:
    ```bash
    git commit -m "Initial commit"
    ```

1. Push your local repository to the remote repository:
    - change branch name to main
    ```bash
    git branch -m main
    ```
    ```bash
    git push -u origin main
    ```
    This will push your local repository to the remote repository and set the upstream tracking information.

1. To retrieves the latest data from a remote repository, but it doesn't automatically merge it with your local branch.
    ```bash
    git fetch origin
    ```
    - If we made any remote changes, then to get those changes locally we use pull request
    ```bash
    git pull origin main
    ```

By using the `--local` flag with `git config`, you've set up the Git configuration, credentials, and remote repository connection only for this specific folder, without affecting the global Git configuration.

---

---

# Branch Commands



## Create a Branch
To create a new branch:
```sh
git branch <branch-name>
```
Or, to create and switch to the new branch immediately:
```sh
git checkout -b <branch-name>
```
This will show you the current branch.
```bash
git branch
```

## Delete a Branch
To delete a branch:
```sh
git branch -d <branch-name>
```
If the branch has not been merged, use the `-D` flag to force delete it:
```sh
git branch -D <branch-name>
```

## Rename a Branch
To rename the current branch:
```sh
git branch -m <new-branch-name>
```
To rename a different branch:
```sh
git branch -m <old-branch-name> <new-branch-name>
```

## Examples of Branch 

#### Create a Branch
```sh
git checkout -b feature-xyz
```

#### Delete a Branch
```sh
git branch -d feature-xyz
```
Or, if the branch is not merged:
```sh
git branch -D feature-xyz
```

#### Rename a Branch
If you are on the branch you want to rename:
```sh
git branch -m new-feature-xyz
```
Or, to rename a branch you are not currently on:
```sh
git branch -m feature-xyz new-feature-xyz
```
#### Push the updated branch name to the remote repository
After renaming the branch, you'll need to push the updated branch name to the remote repository:
```bash
git push origin :<old_branch_name> <new_branch_name>
```
Replace `<old_branch_name>` with the old name of the branch, and `<new_branch_name>` with the new name.

