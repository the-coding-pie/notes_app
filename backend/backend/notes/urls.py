from django.urls import path
from . import views

app_name = 'notes'

# api/v1/notes/
urlpatterns = [
    path('', views.notes, name='notes'),
    path('<str:id>/', views.notes_remove, name='notes_remove'),
]