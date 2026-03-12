#!/usr/bin/env bash
set -u

DIST_DIR="dist"

if [ ! -d "$DIST_DIR" ]; then
  echo "dist directory not found: $DIST_DIR"
  exit 1
fi

mapfile -t files < <(find "$DIST_DIR" -type f -name "index.html" | sort)

total=${#files[@]}
with_h1=0
missing=()

for file in "${files[@]}"; do
  if grep -qiE "<h1[^>]*class=[\"'][^\"']*visually-hidden[^\"']*[\"'][^>]*>" "$file"; then
    with_h1=$((with_h1 + 1))
    continue
  fi

  route="${file#${DIST_DIR}/}"
  if [ "$route" = "index.html" ]; then
    route="/"
  else
    route="/${route%/index.html}/"
  fi
  missing+=("$route")
done

echo "Checked index files: $total"
echo "With visually-hidden h1: $with_h1"
echo "Missing visually-hidden h1: ${#missing[@]}"

if [ ${#missing[@]} -gt 0 ]; then
  echo
  echo "Routes missing visually-hidden h1:"
  for route in "${missing[@]}"; do
    echo "- $route"
  done
  exit 2
fi

echo
echo "All built routes include a visually-hidden h1."
