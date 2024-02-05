# -*- coding: utf-8 -*-
import os
import sys
from django.core.wsgi import get_wsgi_application

sys.path.insert(0, '/var/www/u2452933/data/www/dev-kazuschik.ru/ReleaseHosting')
sys.path.insert(1, '/var/www/u2452933/data/djangoenv/lib/python3.9/site-packages')
os.environ['DJANGO_SETTINGS_MODULE'] = 'ReleaseHosting.settings'


application = get_wsgi_application()
