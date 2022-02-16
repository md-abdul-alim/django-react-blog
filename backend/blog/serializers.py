from cgitb import lookup
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import BlogPost, Categories

class BlogPostSerializer(serializers.ModelSerializer):
    category_value = serializers.CharField(source='category.name')
    class Meta:
        model = BlogPost
        fields = ('id','title','slug', 'category', 'category_value','thumbnail','excerpt',
        'month','day','content','featured', 'date_created')
        lookup_field = 'slug'


class CategoriesSerializer(ModelSerializer):
    class Meta:
        model = Categories
        fields = ('id', 'name')