#!/bin/bash

STG_GIT_REPO="git@github.com:mmarcon/stg.marcon.me.git"
PRD_GIT_REPO="git@github.com:mmarcon/marcon.me.git"
BRANCH="gh-pages"
DESTINATION_REPO=$STG_GIT_REPO
HASH=`git rev-parse HEAD`
DATE=`date`

DIST=`mktemp -d /tmp/marcon.me.dist.XXXXXXXX`

rm -rf /tmp/marcon.me.dist.*
echo "using temp dir ${DIST}"


#Get dependencies
# npm install

#Harp build first
./node_modules/.bin/harp compile _src $DIST

cd $DIST

#Write version number
echo $DATE | tee version.txt
echo $HASH | tee -a version.txt

echo "======================= marcon.me ======================="

if [ "$1" = "prd" ]; then
    echo "Using production"
    DESTINATION_REPO=$PRD_GIT_REPO
else
    echo "Using staging"
    #rewrite stuff a bit if we are going to stagin
    echo "--- CNAME ---"
    echo stg.`cat CNAME` > CNAME
    cat CNAME
    echo "--- robots.txt ---"
    echo "Disallow: /" >> robots.txt
    cat robots.txt
fi

git clone -b $BRANCH --single-branch $DESTINATION_REPO "${DIST}.repo"
cd "${DIST}.repo"
rm -rf *
cp -r $DIST/* .
git add .
git status

git commit -m "deployment ${DATE} of ${HASH}"
git push