from blog.serializers import CategoriesSerializer
from blog.models import Categories
from rest_framework.generics import ListAPIView

class CategoriesListAPI(ListAPIView):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer