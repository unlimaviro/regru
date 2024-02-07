from django.contrib.sitemaps import Sitemap
from django.shortcuts import reverse


class StaticViewSitemap(Sitemap):
    priority = 0.6
    changefreq = 'daily'

    def items(self):
        # Возвращает список только с одним элементом, так как у нас одна статическая страница
        return ['home']

    def location(self, item):
        return reverse(item)
