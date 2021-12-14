from django.conf.urls import url
from . import views

app_name = "news"

urlpatterns = [
    url(r'^post/$', views.PostListView.as_view(), name='post_list'),
    url(r'^post/(?P<pk>\d+)/$', views.PostDetailView.as_view(), name='post_detail'),
]
