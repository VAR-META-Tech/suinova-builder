pm2 start pm2-ecosystem.config.js

# Save PM2 configuration
pm2 save

# Setup startup script
pm2 startup

echo "Deployment completed successfully!"
echo "Architecture deployed with the following domains:"
echo "- Main application: https://suinova.var-meta.com"
echo "- API backend: https://api.suinova.var-meta.com"
echo "- Socket server: https://socket.suinova.var-meta.com"
echo "- Host server: https://host.suinova.var-meta.com"
echo "- Codegen backend: https://codegen.suinova.var-meta.com"
echo "- Codegen hosting: https://codegen-hosting.suinova.var-meta.com"