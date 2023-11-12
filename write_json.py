a_dict = {"background-text-homepage":"""In the todo App, everything is organized into notes.

Even background theme is also a note,
which means you can edit it by pressing 'Shift + E'

Click on add a note icon on the side to begin
(For keyboard user: <b>Ctrl + Shift + A</b>)"""
}

user_dict = {
    "username":"",
    "password":"",
    "background-text-homepage": "",
}

import json
# json.dumps(a)
with open("json/homepage_json.json", "w") as f:
    f.write(json.dumps(a_dict))
with open("json/user_data.json", "w") as f:
    f.write(json.dumps(user_dict))