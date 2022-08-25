from django.contrib import admin

from . import models
from .models import *

@admin.register(Tutorial)
class Tutorial(admin.ModelAdmin):
	list_display = ('title' ,'description', 'published', )
	list_editable = ('description', 'published',)
	search_fields = ('title' ,'description', 'published',)