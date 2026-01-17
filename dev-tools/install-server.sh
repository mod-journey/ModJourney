#
# this installs installs the server for this pack
# (downloads the server jars and libs and creates server config)
#
# To use a specific Java runtime, set an environment variable named JAVA21_HOME to the path of your java home directory
#
SERVER_ROOT=$(dirname "$0")
MANIFEST_FILE=manifest-server.json

# Look one dir above (if manifest in not found)
if [ ! -f "$MANIFEST_FILE" ]; then
  SERVER_ROOT=$(realpath ../$SERVER_ROOT)
  MANIFEST_FILE=${SERVER_ROOT}/${MANIFEST_FILE}

  if [ ! -f "$MANIFEST_FILE" ]; then
    echo "No manifest found"
    exit 1
  fi
fi

# extract launcher version from manifest
INSTALLER_NAME=$(grep "modLoaders" -C3 $MANIFEST_FILE | grep "id" | cut -d: -f2 | cut -d\" -f2)
NEOFORGE_VERSION=$(echo "$INSTALLER_NAME" | cut -d- -f2)
INSTALLER=${INSTALLER_NAME}-installer.jar
DOWNLOAD_URL="https://maven.neoforged.net/releases/net/neoforged/neoforge/${NEOFORGE_VERSION}/${INSTALLER}"

if [[ -z "$JAVA21_HOME" ]]; then
    JAVA_BIN="java"
else
    JAVA_BIN="$JAVA21_HOME/bin/java"
fi

# check if java command is found
if ! command -v "$JAVA_BIN" >/dev/null 2>&1; then
    echo "This server requires Java 21 - Java not found"
    exit 1
else
  # extract major version from e.g. "openjdk full version "21.0.7+6-LTS"" and check if java version is high enough
  JAVA_VERSION=$("${JAVA_BIN}" -fullversion 2>&1 | cut -d'"' -f2 | cut -d'.' -f1)
  if [ ! "$JAVA_VERSION" -ge 21 ]; then
      echo "This server requires Java 21 - found Java $JAVA_VERSION"
      exit 1
  fi
fi


cd "${SERVER_ROOT}"
if [ ! -f "$INSTALLER" ]; then
  echo "No installer found, downloading now."
  if command -v wget >/dev/null 2>&1; then
      echo "Downloading $DOWNLOAD_URL"
      wget -O "$INSTALLER" "$DOWNLOAD_URL"
  else
      echo "No wget found on your system. Please install one and try again"
      exit 1
  fi
fi

echo "Running server installer"
"${JAVA_BIN}" -jar $INSTALLER -installServer
