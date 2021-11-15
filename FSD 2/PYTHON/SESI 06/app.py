import functools
import time


def my_generator():
    print("Inside my generator")
    yield 'a'
    yield 'b'
    yield 'c'


for char in my_generator():
    print(char)


def counter_generator(low, high):
    while low <= high:
        yield low
        low += 1


for i in counter_generator(5, 10):
    print(i, end=' ')


def say_hello(name):
    return f"Hello {name}"


def be_awesome(name):
    return f"Yo {name}, together we are the awesomest!"


def greet_bob(greeter_func):
    return greeter_func("Bob")


print(greet_bob(say_hello))


def parent():
    print("This is from parent")

    def first_child():
        print("First Child")

    def second_child():
        print("Second Child")

    second_child()
    first_child()


parent()


def parent(num, message):
    def first_child():
        return "Hi, First Child " + message

    def second_child():
        return "Call me liam " + message

    if num == 1:
        return first_child
    else:
        return second_child


first = parent(1, "Test")
first()


def my_decorator(func):
    def wrapper():
        print("Before")
        func()
        print("After")
    return wrapper


@my_decorator
def say_whee():
    print("Whee!")


asd = my_decorator(say_whee)
asd()


def timer(func):
    @functools.wraps(func)
    def wrapper_timer(*args, **kwargs):
        start_time = time.perf_counter()
        value = func(*args, **kwargs)
        end_time = time.perf_counter()
        run_time = end_time - start_time
        print(f"Finish {func.__name__!r} in {run_time: .4} secs")
        return value
    return wrapper_timer


@timer
def waste_some_time(num_times):
    for _ in range(num_times):
        sum(i**2 for i in range(10000))


waste_some_time(1)
waste_some_time(999)