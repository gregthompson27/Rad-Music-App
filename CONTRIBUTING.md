# Contributing

### General Workflow

> Fork the repo

> Cut a namespaced feature branch from master

	 - bug/...
	 - feat/...
	 - test/...
	 - doc/...
	 - refactor/...

> Make commits to your feature branch. Prefix each commit like so:

	- (add) new feature
	- (fix) inconsistent tests [Fixes #0]
	- (refactor) ...
	- (cleanup) ...
	- (test) ...
	- (doc) ...
	
> When you’ve finished with your fix or feature, Rebase upstream changes into your branch. submit a *pull request* directly to master. 

	- Include a description of your changes.
	- Your pull request will be reviewed by another maintainer. \
		- The point of code reviews is to help keep the codebase clean and of high quality and, equally as important, to help you grow as a programmer. 
		- If your code reviewer requests you make a change you don’t understand, ask them why.
	- Fix any issues raised by your code reviwer, and push your fixes as a single new commit.
	    Once the pull request has been reviewed, it will be merged by another member of the team.
	 - Do not merge your own commits.


## Detailed Workflow

 > Fork the repo
 
	Use github’s interface to make a fork of the repo, then add that repo as an upstream remote: git remote add upstream https://github.com/reactorcore/<NAME_OF_REPO>.git
>Cut a namespaced feature branch from master
	Your branch should follow this naming convention

 	- (add) new feature
	- (fix) inconsistent tests [Fixes #0]
	- (refactor) ...
	- (cleanup) ...
	- (test) ...
	- (doc) ...

# These commands will help you do this:

> Create your branch and brings you there

	 git checkout -b `your-branch-name`

> Make commits to your feature branch.

	Prefix each commit like so:
		(feat) Add a new feature
		(fix) Fix inconsistent tests [Fixes #0]
		(refactor) ...
		(cleanup) ...
		(test) ...
		(doc) ...
		
> Make changes and commits on your branch, and make sure that you only make changes that are relevant to this branch. If you find yourself making unrelated changes, make a new branch for those changes.

	Commit Message Guidelines
	    Commit messages should be written in the present tense; e.g. “Fix continuous integration script”.
	    	The first line of your commit message should be a brief summary of what the commit changes.
	    	Aim for about 70 characters max. 
	    	Remember: This is a summary, not a detailed description of everything that changed.
	    	If you want to explain the commit in more depth, following the first line should be a blank line and then a more detailed description of the commit. 
	    	This can be as detailed as you want, so dig into details here and keep the first line short.

> Rebase upstream changes into your branch

	Once you are done making changes, you can begin the process of getting your code merged into the main repo. 
	
	Step 1 is to rebase upstream changes to the master branch into yours by running this command from your branch:
								 < git pull --rebase upstream master >
	
	This will start the rebase process. You must commit all of your changes before doing this. 
	
	If there are no conflicts, this should just roll all of your changes back on top of the changes from upstream, leading to a nice, clean, linear commit history.
	
	If there are conflicting changes, git will start yelling at you part way through the rebasing process. Git will pause rebasing to allow you to sort out the conflicts. You do this the same way you solve merge conflicts, by checking all of the files git says have been changed in both histories and picking the versions you want. Be aware that these changes will show up in your pull request, so try and incorporate upstream changes as much as possible.
	
	You pick a file by git adding it - you do not make commits during a rebase.
	
	Once you are done fixing conflicts for a specific commit, run:
									  < git rebase --continue >
