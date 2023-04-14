import json
import os

ret = os.system('git pull')

if ret != 0:
    print('==Failed to pull==')

ret = os.system('npm run build')

if ret != 0:
    print('==Failed to build==')

os.system(
    f'cp ./dist/index.html ./dist/cfacdb7c8270a90aba6011585793dfc3.html')

ret = os.system(
    f'aws s3 sync ./dist s3://host-storage-us-east-1-136564153953-us31-host/dukkha --acl public-read')

if ret != 0:
    print('==Failed to upload==')

else:
    os.system(
        'aws cloudfront create-invalidation --distribution-id E39FJ1G9UH3F4Q --paths "/dukkha/*"')

print('==END==')
