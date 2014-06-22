#!/usr/bin/env sh

for slug in `cat projects.json | jq '.[] | .slug' -r`; do
  echo "Resizing $slug"
  convert "public/images/projects/$slug.png" -gravity center -crop 900x900+0+0 +repage  "public/images/projects/$slug.small.png"
done
