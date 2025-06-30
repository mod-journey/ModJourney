# Dev-Tools

This folder contains scripts and information to develop and build this modpack

## Tools
For the build script and working with the versions control you need to install
[Git] first.

## Project Setup
- Fork and clone the repository to the Instances folder of [CurseForge], the default path is
  `%USERPROFILE%\Documents\Curse\Minecraft\Instances`.
- on windows you should can assign `.sh` files to be opened with `git-bash.exe`, this allows you to directly run
  sh-scripts on windows
- [optional] for a better compare view for the modlist ext. you can copy (or [include]) the
  textconv-settings below into your project-config (in the `PROJECTDIR/.git/config`-file)

```ini
[diff "sort"]
	textconv = "sort"
[diff "modlist-sort"]
	textconv = "php -r '\
		$modlist = json_decode(file_get_contents($argv[1]));\
		usort($modlist->files, function($a, $b) {\
			return $a->projectID <=> $b->projectID;\
		});\
		echo json_encode($modlist, JSON_PRETTY_PRINT);\
	'"
```

## Script
- [build-client-archive.sh](build-client-archive.sh) - run this script to build the client download archive.
  The script builds the archive from files in the current selected branch, and you find the archive
  file in the `build/`-folder.



[CurseForge]: https://www.curseforge.com/download/app
[Git]: https://git-scm.com/download/win
[include]: https://git-scm.com/docs/git-config#_includes