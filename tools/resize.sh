#!/usr/bin/env sh

for p in `cat projects.json | jq '.[] | .url' -r`; do
  echo "Resizing $p"
  hostname=`echo "$p" | awk -F/ '{print $3}'`
  convert -resize 640x480 "public/images/projects/$hostname.png" "public/images/projects/$hostname.small.png"
done
