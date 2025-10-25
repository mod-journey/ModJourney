#
# build the client pack for import in curseforge launcher
#
# archive excluded files are defined via .gitattributes-file
# @see https://git-scm.com/docs/git-archive
#
# @todo Load current commit-id (or latest tag) from git (or name and version from manifest.json) and use it as archive-name
#

echo "Building client archive"
File_Mode="client"
SCRIPT_DIR="$(realpath "$(dirname "$0")")"
PROJECT_DIR="${SCRIPT_DIR}/../"
Version_Number="$(cat "${PROJECT_DIR}/manifest.json" | head -n 14 | tail -n 1 | cut -d '"' -f 4)"
ARCHIVE_FILE_NAME=mod-journey-2-${File_Mode}-${Version_Number}.zip
BUILD_DIR=$(realpath "${PROJECT_DIR}build/")
mkdir -p "${SCRIPT_DIR}/logs/"
LOG_FILE="${SCRIPT_DIR}/logs/$(date +'%Y-%m-%d_%H-%M-%S').log"
exec > >(tee -a "$LOG_FILE") 2>&1

mkdir -p "${BUILD_DIR}/"
cd "$PROJECT_DIR" &&
  git archive --add-file="manifest.json" --add-file="modlist.html" --prefix=overrides/ -o "${BUILD_DIR}/${ARCHIVE_FILE_NAME}" HEAD &&
  cd - || echo "Could restore working directory"

# Show the created file
ls -lh "${BUILD_DIR}/${ARCHIVE_FILE_NAME}"