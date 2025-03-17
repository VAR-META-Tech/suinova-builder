#!/usr/bin/env bash

# Exit on any error
set -e

# Build directory
BUILD_DIR="build"
# Destination directory
DEPLOY_DIR="/var/www/suinova"

echo "🚀 Install package..."
yarn install

echo "🚀 Building frontend..."

# Build the frontend application with environment variables
REACT_APP_DEFAULT_HOST_URL=https://host.suinova.var-meta.com/static/host.html \
REACT_APP_PUBLIC_URL=https://suinova.var-meta.com \
PUBLIC_URL=https://suinova.var-meta.com \
PORT=6003 \
BACKEND_PORT=6004 \
NODE_ENV=production \
NFT_PROJECT_ID=2w3m6We7nJYvXha26y79CJ \
yarn build

# Check if build succeeded
if [ ! -d "$BUILD_DIR" ]; then
  echo "❌ Build failed! Directory $BUILD_DIR doesn't exist"
  exit 1
fi

echo "📦 Copying files to $DEPLOY_DIR..."

# Ensure deploy directory exists
sudo mkdir -p $DEPLOY_DIR

# Copy build files to deployment directory
sudo cp -r $BUILD_DIR/* $DEPLOY_DIR/

echo "✅ Deployment completed successfully!"