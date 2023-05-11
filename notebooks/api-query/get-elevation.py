import requests
import json

def get_elevation(X,Y):
    url = "http://geogratis.gc.ca/services/elevation/cdem/altitude?"
    payload = {"lat": Y, "lon": X}
    page = requests.get(url,params = payload)
    print(page.url)
    return json.loads(page.content)

print(get_elevation(-79.39668,43.66043))

