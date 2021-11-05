from django.conf.urls import url
from . import views

app_name = "api"

urlpatterns = [
    url(r'^todo/$', views.TodoListView.as_view(), name='todo_list'),
    url(r'^todo/(?P<pk>\d+)/$', views.TodoDetailView.as_view(), name='todo_detail'),
    url(r'^todo/(?P<pk>\d+)/create/$', views.TodoCreateView.as_view(), name='todo_create'),
]
