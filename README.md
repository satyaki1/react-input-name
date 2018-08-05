# react-input-name
Learning from this APP except from the react topic, gh-pages was throwing 404 error for js and css after deployment. 

I had to manually eject the react project and change the following :

```The solution that I found it was in path config/path.js I only changed
envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');
to
envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : './');
