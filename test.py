import requests
res = requests.get("https://www.51qianduan.com/article/view/3578.html")
print(res.text)