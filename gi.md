For my git notes

# 1) Initialize git in this folder
git init

# 2) Add all current files
git add .

# 3) First commit
git commit -m "Initial commit"

# 4) Rename default branch to main (recommended)
git branch -M main

# 5) Add your remote repo URL (replace with yours)
git remote add origin https://github.com/<your-username>/<your-repo>.git

# 6) Push first commit and set upstream
git push -u origin main

Optional check commands:
git status
git remote -v
git log --oneline
