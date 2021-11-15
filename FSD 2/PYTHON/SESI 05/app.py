class Dog:
    species = "Bulldog"

    def __init__(self, name, age):
        self.name = name
        self.umur = age

    def toString(self):
        print(self.name, self.umur)

    def withParameter(self, parameter):
        print(self.name, self.umur, parameter)


dog = Dog("Doggy", "2")

print(dog.species)
dog.toString()
dog.withParameter("Parameter")
print(dog.name)


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age


class Student(Person):
    def __init__(self, name, age, grade):
        super().__init__(name, age)
        self.grade = grade

    def printStudent(self):
        return f"Name: {self.name}\nAge: {self.age}\nGrade: {self.grade}"


ibra = Student("ibra", 22, 100)
print(ibra.printStudent())
print(ibra.name)







#  class Dog():    # class name PascalCase




# raka = [
#     [0] "Raka Ardhi", 
#     [1] 28, 
#     [2] "CurDev", 
#     [3] 2265
# ]

# spock = [
#     [0] "Spock", 
#     [1] 35, 
#     [2] "Science Officer", 
#     [3] 2254
# ]

# mccoy = [
#     [0] "Leonard McCoy", 
#     [1] "Chief Medical Officer", 
#     [2] 2266
# ]

# class name: Employee
# properties : name, age, position, year_started
# behavior : ()

# object : raka, spock, mccoy

# n = value
# ClassName(asds, kjl)

# def function_name():

# class ClassName():
#     ...
#     properties via __init__ method(self, prop1, prop2)
#         .. = prop1
#         .. = prop2

#     method definition

# ClassName(prop1, prop2)