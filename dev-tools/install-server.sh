#
# this installs installs the server for this pack
# (downloads the server jars and libs and creates server config)
#
# To use a specific Java runtime, set an environment variable named JAVA21_HOME to the path of your java home directory
#

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
  JAVA_VERSION=$($JAVA_BIN -fullversion 2>&1 | cut -d'"' -f2 | cut -d'.' -f1)
  if [ ! "$JAVA_VERSION" -ge 21 ]; then
      echo "This server requires Java 21 - found Java $JAVA_VERSION"
      exit 1
  fi
fi




echo "Installing the server"