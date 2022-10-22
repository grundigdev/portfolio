echo "Switching to branch main"
git checkout main

echo "Building App"
npm run build

echo "Deploying files to server..."
scp -r build/* marcel@grundigdev.de:/var/www/grundigdev/

echo "Done!"