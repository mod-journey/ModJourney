#
# build the client pack for import in curseforge launcher
#
# archive excluded files are defined via .gitattributes-file
# @see https://git-scm.com/docs/git-archive
#
# @todo Load current commit-id (or latest tag) from git (or name and version from manifest.json) and use it as archive-name
#

echo "Building client archive"
ARCHIVE_FILE_NAME=mod-journey-client.zip
SCRIPT_DIR="$(dirname "$0")"
PROJECT_DIR="${SCRIPT_DIR}/../"
BUILD_DIR=$(realpath "${PROJECT_DIR}build/")

mkdir -p "${BUILD_DIR}/"
cd "$PROJECT_DIR" &&
  git archive --add-file="manifest.json" --add-file="modlist.html" --prefix=overrides/ -o "${BUILD_DIR}/${ARCHIVE_FILE_NAME}" HEAD &&
  cd - || echo "Could restore working directory"

# Show the created file
ls -lh "${BUILD_DIR}/${ARCHIVE_FILE_NAME}"
