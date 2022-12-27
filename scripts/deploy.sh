
#!/bin/bash

yarn build && rsync -r dist root@138.197.6.38:/home/personal-page/dist
echo "deployed to root@138.197.6.38"