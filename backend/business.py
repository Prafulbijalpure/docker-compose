def get_data():
    with open("names.txt") as f:

     name= f.read()
     name=name.split()

     return name