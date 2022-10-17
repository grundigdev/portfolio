echo "Switching to branch master"
git checkout main

echo "Building App"
npm run build

echo "Deploying files to server..."
scp -r build/* marcel@217.160.144.40:/var/www/grundigdev/

echo "Done!"