from fnmatch import fnmatchcase
from django.http import HttpResponse
from django.shortcuts import render
from matplotlib.style import context
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.shortcuts import render
from .forms import FormContactForm
import requests




# Create your views here.
def news(request):
      url = 'https://newsapi.org/v2/everything?q=Waste+Pollution&sortBy=popularity&apiKey=e21c28ebd4ff471e970182ebc9da81fd'
      latest_news = requests.get(url).json()
      a = latest_news['articles']
      desc =[]
      title =[]
      img =[]
      for i in range(len(a)):
            f = a[i]
            title.append(f['title'])
            desc.append(f['description'])
            img.append(f['urlToImage'])
      mylist = zip(title, desc, img)
      context = {'mylist': mylist}
      return render(request, 'News\index4.html', context)
def home(request):
      context={'NAME':'ABBAS HOZEFA'}
      return render(request,'home.html',context)


def showform(request):
    form= FormContactForm(request.POST or None)
    if form.is_valid():
        form.save()
  
    context= {'form': form }
        
    return render(request, 'Queries\index2.html', context)
def homepage(request):
      
      
      return render(request,'index.html')
def info(request):
      
      return render(request,'Info\index1.html')

def maps(request):
      
      return render(request,'Report\index3.html')

def aboutus(request):
      
      return render(request,'About\index5.html')          
